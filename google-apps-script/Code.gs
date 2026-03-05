/**
 * Google Apps Script — Quote Form Handler (with Image Uploads)
 * 
 * This script receives form submissions from your website,
 * uploads any attached images to Google Drive,
 * appends them as rows to a Google Sheet, and sends you an email alert.
 *
 * SETUP:
 * 1. Create a new Google Sheet
 * 2. Add these headers in Row 1 (A1 through N1):
 *    Timestamp | First Name | Last Name | Email | Phone | Street | City | State | Zip | Service | Best Time | Message | Page | Photos
 * 3. Go to Extensions → Apps Script
 * 4. Paste this entire file into the editor
 * 5. Click Deploy → New Deployment
 *    - Type: Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the Web App URL and paste it into QuoteForm.astro
 * 7. Done! Test by submitting a form on your website.
 */

// ============================================================
const EMAIL_TO = 'wasifkareem2762@gmail.com';

// Optional: CC additional emails (comma-separated)
const EMAIL_CC = '';

// Email subject prefix
const EMAIL_SUBJECT_PREFIX = '🌳 New Quote Request';

// Google Drive folder name for uploaded photos
const DRIVE_FOLDER_NAME = 'Tree Service - Quote Photos';

/**
 * Gets or creates the Drive folder for storing uploaded photos.
 */
function getOrCreateFolder() {
  const folders = DriveApp.getFoldersByName(DRIVE_FOLDER_NAME);
  if (folders.hasNext()) {
    return folders.next();
  }
  return DriveApp.createFolder(DRIVE_FOLDER_NAME);
}

/**
 * Saves a base64-encoded file to Google Drive and returns the shareable link.
 */
function saveFileToDrive(fileData, folder) {
  try {
    const bytes = Utilities.base64Decode(fileData.base64);
    const blob = Utilities.newBlob(bytes, fileData.mimeType, fileData.fileName);
    const file = folder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    return file.getUrl();
  } catch (err) {
    Logger.log('Error saving file: ' + err.toString());
    return null;
  }
}

/**
 * Handles POST requests from the website form.
 */
function doPost(e) {
  try {
    // Safety check
    if (!e) {
      Logger.log('doPost called without event data');
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'error', message: 'No event data' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    Logger.log('doPost received. parameter keys: ' + (e.parameter ? Object.keys(e.parameter).join(',') : 'none'));
    Logger.log('doPost received. postData type: ' + (e.postData ? e.postData.type : 'none'));

    // Parse data from either form submission (e.parameter.payload) or direct POST (e.postData.contents)
    var data;
    if (e.parameter && e.parameter.payload) {
      // Hidden form submission (CORS-proof method)
      Logger.log('Reading from e.parameter.payload');
      data = JSON.parse(e.parameter.payload);
    } else if (e.postData && e.postData.contents) {
      // Direct fetch POST
      Logger.log('Reading from e.postData.contents');
      var contents = e.postData.contents;
      
      // Sometimes fetch sends the JSON as a string inside a string depending on headers
      try {
        data = JSON.parse(contents);
        if (typeof data === 'string') {
           data = JSON.parse(data);
        }
      } catch (parseErr) {
        Logger.log('Parse error: ' + parseErr.message);
        data = contents;
      }
    } else {
      Logger.log('No data found in request. Full e: ' + JSON.stringify(e).substring(0, 500));
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'error', message: 'No form data received' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Handle image uploads
    var photoLinks = [];
    if (data.photos && data.photos.length > 0) {
      var folder = getOrCreateFolder();
      var fullName = ((data.firstName || '') + ' ' + (data.lastName || '')).trim();
      var dateStr = Utilities.formatDate(new Date(), 'America/New_York', 'yyyy-MM-dd_HH-mm');

      for (var i = 0; i < data.photos.length; i++) {
        var photo = data.photos[i];
        photo.fileName = fullName + '_' + dateStr + '_' + photo.fileName;
        var link = saveFileToDrive(photo, folder);
        if (link) {
          photoLinks.push(link);
        }
      }
    }

    // Build the row
    var row = [
      new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.street || '',
      data.city || '',
      data.state || '',
      data.zip || '',
      data.service || '',
      data.bestTime || '',
      data.message || '',
      data.page || '',
      photoLinks.join('\n'),
    ];

    sheet.appendRow(row);

    // Send email alert
    sendEmailAlert(data, photoLinks);

    Logger.log('SUCCESS: Row added for ' + (data.firstName || '') + ' ' + (data.lastName || ''));

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('doPost error: ' + error.toString());
    Logger.log('Stack: ' + error.stack);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * TEST FUNCTION — Run this from the editor to verify the script works.
 * This simulates a form submission.
 */
function testDoPost() {
  var testPayload = {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '555-0000',
    street: '123 Test St',
    city: 'TestCity',
    state: 'TX',
    zip: '12345',
    service: 'removal',
    bestTime: 'morning',
    message: 'This is a test submission from the editor.',
    page: '/test',
    submittedAt: new Date().toISOString()
  }

/**
 * 🛠️ IMPORTANT: RUN THIS FUNCTION ONCE TO AUTHORIZE GOOGLE DRIVE 🛠️
 * Select "forceAuthorize" from the dropdown menu up top and click Run.
 * This will force the Google authorization popup to appear for Drive access.
 */
function forceAuthorize() {
  try {
    DriveApp.getFoldersByName('Test');
    Logger.log("✅ Google Drive is authorized successfully!");
  } catch (err) {
    Logger.log("❌ Failed to authorize: " + err);
  }
};

  var fakeEvent = {
    postData: {
      type: 'text/plain',
      contents: JSON.stringify(testPayload)
    }
  };

  var result = doPost(fakeEvent);
  Logger.log('Test result: ' + result.getContent());
}

/**
 * 🛠️ IMPORTANT: RUN THIS FUNCTION ONCE TO AUTHORIZE GOOGLE DRIVE (FULL ACCESS) 🛠️
 * Select "forceAuthorize" from the dropdown menu up top and click Run.
 * This will force the Google authorization popup to appear for full Drive write access.
 */
function forceAuthorize() {
  try {
    // Creating a folder and file forces the WRITE scope to be requested
    var folder = DriveApp.createFolder('Tree Service - Temp Auth Folder');
    folder.createFile('temp.txt', 'This is a test file to force authorization permissions.');
    
    // Clean up
    folder.setTrashed(true);
    Logger.log("✅ Google Drive Full Write Access is authorized successfully!");
  } catch (err) {
    Logger.log("❌ Failed to authorize: " + err.toString());
  }
}

/**
 * Handles GET requests (for testing — visit the URL in a browser).
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Quote form endpoint is active.' }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Sends a formatted email alert with the submission details.
 */
function sendEmailAlert(data, photoLinks) {
  const fullName = ((data.firstName || '') + ' ' + (data.lastName || '')).trim();
  const subject = EMAIL_SUBJECT_PREFIX + ' — ' + (fullName || 'Unknown');

  const photoSection = photoLinks.length > 0
    ? '\n📸 Photos (' + photoLinks.length + ' uploaded):\n' + photoLinks.map(function(link, i) { return '   Photo ' + (i+1) + ': ' + link; }).join('\n')
    : '\n📸 Photos: None uploaded';

  const body = 'New Quote Request Received!\n' +
    '================================\n\n' +
    '👤 Name: ' + fullName + '\n' +
    '📧 Email: ' + (data.email || 'N/A') + '\n' +
    '📱 Phone: ' + (data.phone || 'N/A') + '\n\n' +
    '📍 Address:\n' +
    '   ' + (data.street || 'N/A') + '\n' +
    '   ' + (data.city || '') + ', ' + (data.state || '') + ' ' + (data.zip || '') + '\n\n' +
    '🔧 Service Needed: ' + (data.service || 'N/A') + '\n' +
    '🕐 Best Time to Contact: ' + (data.bestTime || 'N/A') + '\n\n' +
    '💬 Message:\n' + (data.message || '(No message provided)') + '\n' +
    photoSection + '\n\n' +
    '📄 Submitted from page: ' + (data.page || 'Unknown') + '\n' +
    '🕒 Submitted at: ' + (data.submittedAt || new Date().toISOString()) + '\n\n' +
    '================================\n' +
    'This is an automated notification from your website quote form.';

  // Build photo links HTML for email
  var photoHtml = '';
  if (photoLinks.length > 0) {
    photoHtml = '<div style="background: white; border-radius: 8px; padding: 20px; margin-bottom: 16px; border: 1px solid #e5e7eb;">' +
      '<h2 style="margin: 0 0 12px; font-size: 16px; color: #374151; border-bottom: 2px solid #dcfce7; padding-bottom: 8px;">📸 Uploaded Photos (' + photoLinks.length + ')</h2>';
    for (var i = 0; i < photoLinks.length; i++) {
      photoHtml += '<p style="margin: 4px 0;"><a href="' + photoLinks[i] + '" style="color: #2563eb; text-decoration: underline;">📄 Photo ' + (i+1) + ' — View on Google Drive</a></p>';
    }
    photoHtml += '</div>';
  }

  var htmlBody = '<div style="font-family: \'Segoe UI\', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">' +
    '<div style="background: linear-gradient(135deg, #166534, #15803d); color: white; padding: 24px 32px;">' +
    '<h1 style="margin: 0; font-size: 24px;">🌳 New Quote Request</h1>' +
    '<p style="margin: 8px 0 0; opacity: 0.9; font-size: 14px;">A new submission from your website</p>' +
    '</div>' +
    '<div style="padding: 24px 32px;">' +
    '<div style="background: white; border-radius: 8px; padding: 20px; margin-bottom: 16px; border: 1px solid #e5e7eb;">' +
    '<h2 style="margin: 0 0 12px; font-size: 16px; color: #374151; border-bottom: 2px solid #dcfce7; padding-bottom: 8px;">👤 Contact Information</h2>' +
    '<table style="width: 100%; border-collapse: collapse;">' +
    '<tr><td style="padding: 6px 0; color: #6b7280; width: 130px;">Name</td><td style="padding: 6px 0; font-weight: 600; color: #111827;">' + fullName + '</td></tr>' +
    '<tr><td style="padding: 6px 0; color: #6b7280;">Email</td><td style="padding: 6px 0;"><a href="mailto:' + (data.email || '') + '" style="color: #2563eb;">' + (data.email || 'N/A') + '</a></td></tr>' +
    '<tr><td style="padding: 6px 0; color: #6b7280;">Phone</td><td style="padding: 6px 0;"><a href="tel:' + (data.phone || '') + '" style="color: #2563eb;">' + (data.phone || 'N/A') + '</a></td></tr>' +
    '</table></div>' +
    '<div style="background: white; border-radius: 8px; padding: 20px; margin-bottom: 16px; border: 1px solid #e5e7eb;">' +
    '<h2 style="margin: 0 0 12px; font-size: 16px; color: #374151; border-bottom: 2px solid #dcfce7; padding-bottom: 8px;">📍 Address</h2>' +
    '<p style="margin: 0; color: #374151; line-height: 1.6;">' + (data.street || 'N/A') + '<br>' + (data.city || '') + ', ' + (data.state || '') + ' ' + (data.zip || '') + '</p>' +
    '</div>' +
    '<div style="background: white; border-radius: 8px; padding: 20px; margin-bottom: 16px; border: 1px solid #e5e7eb;">' +
    '<h2 style="margin: 0 0 12px; font-size: 16px; color: #374151; border-bottom: 2px solid #dcfce7; padding-bottom: 8px;">🔧 Service Details</h2>' +
    '<table style="width: 100%; border-collapse: collapse;">' +
    '<tr><td style="padding: 6px 0; color: #6b7280; width: 130px;">Service</td><td style="padding: 6px 0; font-weight: 600; color: #111827;">' + (data.service || 'N/A') + '</td></tr>' +
    '<tr><td style="padding: 6px 0; color: #6b7280;">Best Time</td><td style="padding: 6px 0; color: #111827;">' + (data.bestTime || 'N/A') + '</td></tr>' +
    '</table></div>' +
    (data.message ? '<div style="background: white; border-radius: 8px; padding: 20px; margin-bottom: 16px; border: 1px solid #e5e7eb;">' +
      '<h2 style="margin: 0 0 12px; font-size: 16px; color: #374151; border-bottom: 2px solid #dcfce7; padding-bottom: 8px;">💬 Message</h2>' +
      '<p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">' + data.message + '</p></div>' : '') +
    photoHtml +
    '<div style="text-align: center; padding: 16px 0 8px; color: #9ca3af; font-size: 12px;">' +
    'Submitted from <strong>' + (data.page || 'Unknown page') + '</strong> at ' + (data.submittedAt || new Date().toISOString()) +
    '</div></div></div>';

  var mailOptions = {
    to: EMAIL_TO,
    subject: subject,
    body: body,
    htmlBody: htmlBody,
  };

  if (EMAIL_CC) {
    mailOptions.cc = EMAIL_CC;
  }

  MailApp.sendEmail(mailOptions);
}
