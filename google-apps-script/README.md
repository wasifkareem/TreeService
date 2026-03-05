# Google Sheets + Email Alert Setup Guide

This guide walks you through connecting your website's quote form to Google Sheets with automatic email alerts.

---

## How It Works (Workflow)

```
┌─────────────────┐     ┌──────────────────────┐     ┌─────────────────┐
│   User fills     │     │  Google Apps Script   │     │  Google Sheet   │
│   quote form     │────▶│   (Web App URL)       │────▶│  (new row added)│
│   and clicks     │     │                       │     └─────────────────┘
│   SUBMIT         │     │                       │
└─────────────────┘     │                       │     ┌─────────────────┐
                         │                       │────▶│  Email Alert    │
                         │                       │     │  sent to you    │
                         └──────────────────────┘     └─────────────────┘
```

1. User fills out the quote form on **any page** (Home, Contact, Emergency)
2. JavaScript `fetch()` sends the form data as JSON `POST` to your Google Apps Script URL
3. The Apps Script receives the data and:
   - **Appends a new row** to your Google Sheet with all form fields + timestamp
   - **Sends you an email** with a beautifully formatted HTML summary of the submission
4. The user sees a **success message** on the form

---

## Step-by-Step Setup

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a **new blank spreadsheet**
3. Name it something like `Tree Service - Quote Requests`
4. In **Row 1**, add these column headers (A1 through M1):

| A | B | C | D | E | F | G | H | I | J | K | L | M |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | First Name | Last Name | Email | Phone | Street | City | State | Zip | Service | Best Time | Message | Page |

### Step 2: Add the Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code in the editor
3. Copy the entire contents of `Code.gs` (in this folder) and paste it into the editor
4. **Update line 28**: Change `your-email@example.com` to **your actual email address**
5. Optionally update `EMAIL_CC` if you want to CC other people
6. Click **Save** (💾 icon or Ctrl+S)

### Step 3: Deploy as Web App

1. In the Apps Script editor, click **Deploy → New Deployment**
2. Click the ⚙️ gear icon next to "Select type" and choose **Web app**
3. Configure:
   - **Description**: `Quote Form Handler`
   - **Execute as**: `Me (your-email@gmail.com)`
   - **Who has access**: `Anyone`
4. Click **Deploy**
5. **Authorize** the script when prompted (click "Review Permissions" → choose your account → "Allow")
6. **Copy the Web App URL** — it will look like:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

### Step 4: Connect Your Website

1. Open `src/components/QuoteForm.astro`
2. Find this line near the bottom:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with the URL you copied in Step 3
4. Save the file

### Step 5: Test!

1. Visit your website
2. Fill out the quote form and click SUBMIT
3. Check your Google Sheet — a new row should appear
4. Check your email — you should receive an alert

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Form says "Something went wrong" | Check browser console for errors. Make sure the Apps Script URL is correct. |
| No row in Google Sheet | Make sure the Apps Script is deployed as "Anyone" can access |
| No email received | Check spam folder. Make sure `EMAIL_TO` is set correctly in `Code.gs` |
| Need to update the script | After editing `Code.gs`, you must create a **New Deployment** (not just save) for changes to take effect |

---

## Redeploying After Changes

If you edit `Code.gs`:
1. Go to **Deploy → Manage Deployments**
2. Click the ✏️ edit icon on your active deployment
3. Change **Version** to "New version"
4. Click **Deploy**

The URL stays the same — no need to update your website.
