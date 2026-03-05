import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '025jwmqb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_TOKEN,
});

const blogs = [
  {
    _type: 'blog',
    _id: 'blog-seasonal-tree-care',
    title: 'The Complete Guide to Seasonal Tree Care: What Every Homeowner Should Know',
    slug: { _type: 'slug', current: 'seasonal-tree-care-guide' },
    author: 'GreenTree Care Team',
    publishedAt: '2026-03-01T10:00:00Z',
    categories: ['Tree Care', 'Seasonal Tips'],
    excerpt: 'Discover how to care for your trees throughout the year. From spring pruning to winter protection, this comprehensive guide covers everything you need to keep your trees healthy, strong, and beautiful in every season.',
    body: [
      { _type: 'block', _key: 'intro1', style: 'normal', children: [{ _type: 'span', _key: 'intro1s', text: 'Trees are among the most valuable assets on your property. They increase curb appeal, provide shade that reduces energy costs, improve air quality, and create a welcoming environment for your family and guests. But like any living organism, trees need consistent care throughout the year to stay healthy and thrive. Neglecting seasonal tree maintenance can lead to disease, structural weakness, and even costly emergency removals.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'intro2', style: 'normal', children: [{ _type: 'span', _key: 'intro2s', text: "In this comprehensive guide, we'll walk you through exactly what your trees need during each season — and how a little proactive care can save you thousands of dollars down the road.", marks: [] }], markDefs: [] },

      // Spring Section
      { _type: 'block', _key: 'spring_h2', style: 'h2', children: [{ _type: 'span', _key: 'spring_h2s', text: 'Spring: Inspection, Pruning, and Feeding', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'spring1', style: 'normal', children: [{ _type: 'span', _key: 'spring1s', text: 'Spring is the most critical time for tree care. As temperatures warm and sap begins to flow, your trees are waking up from dormancy and entering their most active growth phase. This is your window to set them up for a successful year.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'spring_h3', style: 'h3', children: [{ _type: 'span', _key: 'spring_h3s', text: 'Conduct a Thorough Inspection', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'spring2', style: 'normal', children: [{ _type: 'span', _key: 'spring2s', text: 'Walk your property and carefully examine each tree. Look for these warning signs that indicate problems:', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'spring_l1', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: 'spring_l1s', text: 'Cracks or splits in the trunk and major limbs — these can indicate structural weakness from ice or wind damage over winter.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'spring_l2', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: 'spring_l2s', text: 'Dead or hanging branches that could fall and cause injury or property damage during spring storms.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'spring_l3', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: 'spring_l3s', text: 'Fungal growth such as mushrooms at the base of the tree, which often signals root rot or internal decay.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'spring_l4', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: 'spring_l4s', text: 'Leaning trees or exposed roots — a sign that the root system may be compromised and the tree could be at risk of falling.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'spring_l5', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: 'spring_l5s', text: 'Unusual bark peeling, discoloration, or oozing sap, which can indicate disease or pest infestation.', marks: [] }], markDefs: [] },

      { _type: 'block', _key: 'spring_h3b', style: 'h3', children: [{ _type: 'span', _key: 'spring_h3bs', text: 'Prune for Health and Structure', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'spring3', style: 'normal', children: [{ _type: 'span', _key: 'spring3s', text: "Early spring, before new growth begins, is the ideal time for structural pruning. The goal is to remove dead, damaged, or diseased branches while shaping the tree's canopy for balanced growth. Proper pruning improves air circulation through the crown, which reduces the risk of fungal diseases. It also removes weight from overloaded branches that could snap in storms.", marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'spring_q', style: 'blockquote', children: [{ _type: 'span', _key: 'spring_qs', text: "Pro Tip: Never remove more than 25% of a tree's canopy in a single season. Over-pruning stresses the tree and can trigger excessive watersprout growth, which creates long-term structural problems.", marks: [] }], markDefs: [] },

      { _type: 'block', _key: 'spring_h3c', style: 'h3', children: [{ _type: 'span', _key: 'spring_h3cs', text: 'Fertilize Strategically', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'spring4', style: 'normal', children: [{ _type: 'span', _key: 'spring4s', text: 'Spring is also the best time to fertilize your trees, especially young trees and those recovering from stress. A slow-release fertilizer applied around the drip line provides essential nutrients as the tree enters its growth phase. Have your soil tested to determine specific nutrient deficiencies before applying fertilizer — ', marks: [] }, { _type: 'span', _key: 'spring4s2', text: 'over-fertilizing can be just as harmful as under-fertilizing.', marks: ['strong'] }], markDefs: [] },

      // Summer Section
      { _type: 'block', _key: 'summer_h2', style: 'h2', children: [{ _type: 'span', _key: 'summer_h2s', text: 'Summer: Watering, Pest Control, and Monitoring', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'summer1', style: 'normal', children: [{ _type: 'span', _key: 'summer1s', text: 'Summer brings heat stress, drought conditions, and increased pest activity. Your trees are working hard to maintain their canopy and produce energy through photosynthesis, and they need your support to do it effectively.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'summer_h3', style: 'h3', children: [{ _type: 'span', _key: 'summer_h3s', text: 'Watering Best Practices', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'summer2', style: 'normal', children: [{ _type: 'span', _key: 'summer2sa', text: 'The biggest mistake homeowners make is shallow, frequent watering. Trees need deep, infrequent watering ', marks: [] }, { _type: 'span', _key: 'summer2sb', text: 'that reaches their root zone, which typically extends 12 to 18 inches below the surface.', marks: ['em'] }], markDefs: [] },
      { _type: 'block', _key: 'summer_ol1', style: 'normal', listItem: 'number', level: 1, children: [{ _type: 'span', _key: 'summer_ol1s', text: 'Water deeply once per week during dry spells, providing approximately 10 gallons per inch of trunk diameter.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'summer_ol2', style: 'normal', listItem: 'number', level: 1, children: [{ _type: 'span', _key: 'summer_ol2s', text: 'Water at the drip line (the outer edge of the canopy), not directly at the trunk — this is where the absorbing roots are located.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'summer_ol3', style: 'normal', listItem: 'number', level: 1, children: [{ _type: 'span', _key: 'summer_ol3s', text: 'Apply 3-4 inches of organic mulch around the base of the tree (but not touching the trunk) to retain moisture, regulate soil temperature, and suppress weeds.', marks: [] }], markDefs: [] },

      { _type: 'block', _key: 'summer_h3b', style: 'h3', children: [{ _type: 'span', _key: 'summer_h3bs', text: 'Watch for Pest and Disease Issues', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'summer3', style: 'normal', children: [{ _type: 'span', _key: 'summer3s', text: "Summer is peak season for tree pests like emerald ash borers, Japanese beetles, bagworms, and spider mites. Check your trees regularly for signs of infestation: stippled or chewed leaves, bore holes in bark, webbing in branches, or premature leaf drop. Early detection is everything — a pest problem caught early can often be treated with targeted applications, while an advanced infestation may require branch removal or even the loss of the entire tree.", marks: [] }], markDefs: [] },

      // Fall Section
      { _type: 'block', _key: 'fall_h2', style: 'h2', children: [{ _type: 'span', _key: 'fall_h2s', text: 'Fall: Preparation and Planting', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'fall1', style: 'normal', children: [{ _type: 'span', _key: 'fall1sa', text: "Fall is often overlooked in tree care, but it's actually one of the ", marks: [] }, { _type: 'span', _key: 'fall1sb', text: 'best seasons for planting new trees', marks: ['strong'] }, { _type: 'span', _key: 'fall1sc', text: ' and preparing existing ones for winter. The cooler temperatures and increased rainfall help trees establish strong root systems before the ground freezes.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'fall_h3', style: 'h3', children: [{ _type: 'span', _key: 'fall_h3s', text: 'Plant New Trees', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'fall2', style: 'normal', children: [{ _type: 'span', _key: 'fall2s', text: "If you've been thinking about adding trees to your landscape, fall is the ideal time. The soil is still warm enough for root growth, but the tree won't be stressed by summer heat. Choose native species adapted to your climate zone for the best long-term performance. Native trees require less water, are more resistant to local pests, and support the surrounding ecosystem.", marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'fall_h3b', style: 'h3', children: [{ _type: 'span', _key: 'fall_h3bs', text: 'Final Cleanup', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'fall3', style: 'normal', children: [{ _type: 'span', _key: 'fall3s', text: "Remove fallen leaves and debris from around your trees. Thick layers of wet leaves can harbor fungal diseases that attack the tree's root system. A final deep watering before the first hard frost helps trees stay hydrated through the early weeks of winter dormancy.", marks: [] }], markDefs: [] },

      // Winter Section
      { _type: 'block', _key: 'winter_h2', style: 'h2', children: [{ _type: 'span', _key: 'winter_h2s', text: 'Winter: Protection and Planning', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'winter1', style: 'normal', children: [{ _type: 'span', _key: 'winter1s', text: "While trees are dormant in winter, they're not immune to damage. Ice storms, heavy snow, and fluctuating temperatures can cause significant harm. Winter is also the perfect time for certain types of structural pruning, since the tree's architecture is fully visible without leaves.", marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'winter_l1', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: 'winter_l1s', text: 'Wrap young or thin-barked trees with commercial tree wrap to prevent sunscald — the cracking that occurs when bark heats up on sunny winter days and then refreezes rapidly at night.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'winter_l2', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: 'winter_l2s', text: 'Install burlap windbreaks around evergreens exposed to harsh winter winds, especially newly planted trees.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'winter_l3', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: 'winter_l3s', text: 'After ice storms, carefully remove heavy ice and snow from branches to prevent breakage. Use a broom to gently push upward on weighted branches — never pull them down, as frozen wood is brittle and will snap.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'winter_l4', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: 'winter_l4s', text: 'Avoid using rock salt or chemical de-icers near the drip line of trees. Salt buildup in soil is toxic to roots. Use sand or calcium chloride as safer alternatives.', marks: [] }], markDefs: [] },

      // Conclusion
      { _type: 'block', _key: 'conclusion_h2', style: 'h2', children: [{ _type: 'span', _key: 'conclusion_h2s', text: 'When to Call a Professional Arborist', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'conclusion1', style: 'normal', children: [{ _type: 'span', _key: 'conclusion1s', text: 'While many routine tasks can be handled by homeowners, certain situations require professional expertise. You should call a certified arborist if you notice large dead branches in the upper canopy, significant trunk damage, signs of advanced disease, or if a tree is leaning suddenly after a storm. Professional tree services also include risk assessments, cabling and bracing for structurally compromised trees, and safe removal of hazardous trees near power lines or structures.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'conclusion_q', style: 'blockquote', children: [{ _type: 'span', _key: 'conclusion_qs', text: 'Remember: the cost of proactive tree care is always a fraction of the cost of emergency removal or repairing storm damage to your home. An annual inspection by a certified arborist is one of the best investments you can make in your property.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'conclusion2', style: 'normal', children: [{ _type: 'span', _key: 'conclusion2s', text: 'At GreenTree Care, our certified arborists are here to help you develop a year-round tree care plan tailored to your property. Contact us today for a free consultation and let us help keep your trees — and your home — safe and beautiful through every season.', marks: [] }], markDefs: [] },
    ],
  },
  {
    _type: 'blog',
    _id: 'blog-warning-signs-tree-removal',
    title: '5 Warning Signs That a Tree on Your Property Needs to Be Removed',
    slug: { _type: 'slug', current: 'warning-signs-tree-removal' },
    author: 'GreenTree Care Team',
    publishedAt: '2026-02-20T10:00:00Z',
    categories: ['Tree Removal', 'Safety'],
    excerpt: 'Not every tree can be saved. Learn to recognize the five critical warning signs that indicate a tree on your property may be hazardous and require professional removal before it causes damage to your home or puts your family at risk.',
    body: [
      { _type: 'block', _key: 'i1', style: 'normal', children: [{ _type: 'span', _key: 'i1s', text: "As a homeowner, it's natural to want to preserve every tree on your property. Mature trees add beauty, value, and character to your landscape that takes decades to replace. However, there are times when a tree becomes a liability instead of an asset — and recognizing the warning signs early can be the difference between a planned, controlled removal and an emergency situation that endangers your family and your home.", marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'i2', style: 'normal', children: [{ _type: 'span', _key: 'i2s', text: "Here are five critical warning signs that mean it's time to call a professional arborist to evaluate whether your tree needs to be removed.", marks: [] }], markDefs: [] },

      // Sign 1
      { _type: 'block', _key: 's1_h2', style: 'h2', children: [{ _type: 'span', _key: 's1_h2s', text: '1. Significant Trunk Damage and Decay', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's1_p1', style: 'normal', children: [{ _type: 'span', _key: 's1_p1s', text: "The trunk is the tree's main structural support. When it's compromised, the entire tree becomes unstable. Look for deep cracks that extend vertically along the trunk, large cavities or hollow sections, and areas where bark is falling off to reveal dead wood underneath.", marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's1_p2', style: 'normal', children: [{ _type: 'span', _key: 's1_p2sa', text: 'A common misconception is that a tree with a hollow trunk is automatically dangerous. In reality, ', marks: [] }, { _type: 'span', _key: 's1_p2sb', text: 'many trees can survive with significant internal decay', marks: ['strong'] }, { _type: 'span', _key: 's1_p2sc', text: " because the outer ring of living wood (the sapwood) provides most of the structural support. However, when the remaining shell becomes too thin — generally less than one-third of the trunk's total diameter — the tree is at high risk of collapse.", marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's1_p3', style: 'normal', children: [{ _type: 'span', _key: 's1_p3s', text: 'Other danger signs related to trunk health include:', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's1_l1', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: 's1_l1s', text: "Large cankers (areas where bark is missing) that cover more than 25% of the trunk's circumference.", marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's1_l2', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: 's1_l2s', text: 'Multiple trunks (codominant stems) with included bark, creating a weak attachment point likely to split apart under stress.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's1_l3', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: 's1_l3s', text: 'Sawdust or wood shavings at the base of the tree, which indicate active boring insect damage.', marks: [] }], markDefs: [] },

      // Sign 2
      { _type: 'block', _key: 's2_h2', style: 'h2', children: [{ _type: 'span', _key: 's2_h2s', text: '2. Fungal Growth at the Base', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's2_p1', style: 'normal', children: [{ _type: 'span', _key: 's2_p1s', text: 'If you notice mushrooms or conks (shelf fungi) growing at the base of your tree or along the lower trunk, this is one of the most serious warning signs. These fruiting bodies indicate that decay fungi are actively decomposing the wood inside the tree or its root system.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's2_p2', style: 'normal', children: [{ _type: 'span', _key: 's2_p2s', text: 'The most concerning species include Ganoderma (which appears as a brown shelf-like growth), Armillaria (honey fungus), and Laetiporus (chicken of the woods). These fungi attack the heartwood and root structure, creating extensive internal decay that may not be visible from the outside.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's2_q', style: 'blockquote', children: [{ _type: 'span', _key: 's2_qs', text: 'Important: By the time you can see fungal fruiting bodies on a tree, the internal decay is typically already severe. The visible mushrooms are just the tip of the iceberg — the actual fungal network (mycelium) may have been growing inside the tree for years.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's2_p3', style: 'normal', children: [{ _type: 'span', _key: 's2_p3s', text: 'A certified arborist can perform a detailed assessment using tools like a resistograph (which measures wood density) or sonic tomography to map the extent of internal decay and determine whether the tree can be preserved or needs to be removed.', marks: [] }], markDefs: [] },

      // Sign 3
      { _type: 'block', _key: 's3_h2', style: 'h2', children: [{ _type: 'span', _key: 's3_h2s', text: '3. Dead Branches in the Upper Crown', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's3_p1', style: 'normal', children: [{ _type: 'span', _key: 's3_p1s', text: 'Dead branches — often called "widow makers" in the tree care industry — are one of the most common causes of tree-related injuries and property damage. A single dead limb falling from 40 or 50 feet can generate enough force to crash through a roof, total a vehicle, or cause serious injury to anyone below.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's3_p2', style: 'normal', children: [{ _type: 'span', _key: 's3_p2sa', text: 'While individual dead branches can be pruned, a tree with ', marks: [] }, { _type: 'span', _key: 's3_p2sb', text: 'more than 50% dead wood in the crown is generally in irreversible decline', marks: ['strong'] }, { _type: 'span', _key: 's3_p2sc', text: ' and should be considered for removal. This level of die-back usually indicates a systemic problem such as root failure, advanced disease, or severe insect damage that pruning alone cannot address.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's3_p3', style: 'normal', children: [{ _type: 'span', _key: 's3_p3s', text: 'Signs of crown decline to watch for include:', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's3_ol1', style: 'normal', listItem: 'number', level: 1, children: [{ _type: 'span', _key: 's3_ol1s', text: "Sparse leaf coverage or significantly smaller leaves than normal, indicating the tree can't sustain its canopy.", marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's3_ol2', style: 'normal', listItem: 'number', level: 1, children: [{ _type: 'span', _key: 's3_ol2s', text: 'Epicormic growth (clusters of small shoots sprouting from the trunk or major limbs), which is a stress response indicating the tree is struggling to photosynthesize.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's3_ol3', style: 'normal', listItem: 'number', level: 1, children: [{ _type: 'span', _key: 's3_ol3s', text: 'Premature fall color or early leaf drop, which suggests the tree is shutting down earlier than normal.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's3_ol4', style: 'normal', listItem: 'number', level: 1, children: [{ _type: 'span', _key: 's3_ol4s', text: 'One-sided canopy death, often indicating root damage or a vascular disease affecting one side of the tree.', marks: [] }], markDefs: [] },

      // Sign 4
      { _type: 'block', _key: 's4_h2', style: 'h2', children: [{ _type: 'span', _key: 's4_h2s', text: '4. Root Problems and Soil Heaving', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's4_p1', style: 'normal', children: [{ _type: 'span', _key: 's4_p1sa', text: "Root problems are often the most dangerous because they're the least visible. A tree can appear perfectly healthy above ground while its root system is failing below. The root system is responsible for both anchoring the tree and absorbing water and nutrients. When roots are severely damaged — whether from construction activity, compaction, grade changes, or disease — ", marks: [] }, { _type: 'span', _key: 's4_p1sb', text: 'the tree can fall without any prior visible warning.', marks: ['strong', 'em'] }], markDefs: [] },
      { _type: 'block', _key: 's4_p2', style: 'normal', children: [{ _type: 'span', _key: 's4_p2s', text: 'Warning signs of root failure include:', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's4_l1', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: 's4_l1s', text: 'Soil heaving or cracking on one side of the tree, indicating the root plate is lifting out of the ground.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's4_l2', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: 's4_l2s', text: 'A visible lean that has developed recently or is getting worse — a tree that has always grown at an angle is usually fine, but a new lean is cause for concern.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's4_l3', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: 's4_l3s', text: "Severed or exposed roots from recent construction, sidewalk installation, or trenching within the tree's critical root zone.", marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's4_l4', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: 's4_l4s', text: 'Standing water around the base of the tree that persists for days, which can suffocate roots and promote root rot.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's4_p3', style: 'normal', children: [{ _type: 'span', _key: 's4_p3s', text: "If you've recently had construction work done near a mature tree and notice any of these signs in the following 1-3 years, have the tree evaluated immediately. Root damage from construction is one of the leading causes of delayed tree failure.", marks: [] }], markDefs: [] },

      // Sign 5
      { _type: 'block', _key: 's5_h2', style: 'h2', children: [{ _type: 'span', _key: 's5_h2s', text: '5. Proximity to Structures and Utilities', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's5_p1', style: 'normal', children: [{ _type: 'span', _key: 's5_p1s', text: "Sometimes a tree needs to be removed not because it's unhealthy, but because its location poses an unacceptable risk. A large tree leaning toward your home, growing into power lines, or with roots damaging your foundation or sewer lines may need to be removed even if it appears otherwise healthy.", marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's5_p2', style: 'normal', children: [{ _type: 'span', _key: 's5_p2s', text: 'Consider removal when:', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's5_l1', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: 's5_l1s', text: 'Branches overhang your roof by a significant margin. During storms, these branches can act as battering rams against shingles, gutters, and siding.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's5_l2', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: 's5_l2s', text: 'The tree is within striking distance of power lines. Only licensed utility arborists should work near energized lines — contact your power company for trees in the utility right-of-way.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's5_l3', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: 's5_l3s', text: 'Roots are cracking your foundation, lifting walkways, or infiltrating sewer lines. While root barriers can sometimes solve these issues, removal is often the most practical long-term solution.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 's5_l4', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: 's5_l4s', text: 'The tree blocks sight lines at driveways or intersections, creating a traffic safety hazard.', marks: [] }], markDefs: [] },

      // What to Do
      { _type: 'block', _key: 'action_h2', style: 'h2', children: [{ _type: 'span', _key: 'action_h2s', text: 'What to Do If You Spot These Warning Signs', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'action_p1', style: 'normal', children: [{ _type: 'span', _key: 'action_p1sa', text: "If you've identified one or more of these warning signs on a tree on your property, ", marks: [] }, { _type: 'span', _key: 'action_p1sb', text: 'do not attempt to remove the tree yourself.', marks: ['strong'] }, { _type: 'span', _key: 'action_p1sc', text: ' Tree removal is one of the most dangerous activities in the outdoor services industry, and a structurally compromised tree is even more unpredictable than a healthy one. A single miscalculation in felling direction or rigging can result in catastrophic damage.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'action_p2', style: 'normal', children: [{ _type: 'span', _key: 'action_p2s', text: 'Instead, follow these steps:', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'action_ol1', style: 'normal', listItem: 'number', level: 1, children: [{ _type: 'span', _key: 'action_ol1s', text: 'Keep people and vehicles away from the area directly under and around the tree, especially during windy or stormy weather.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'action_ol2', style: 'normal', listItem: 'number', level: 1, children: [{ _type: 'span', _key: 'action_ol2s', text: 'Document the damage with photos from multiple angles. This documentation may be needed for insurance claims.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'action_ol3', style: 'normal', listItem: 'number', level: 1, children: [{ _type: 'span', _key: 'action_ol3s', text: 'Contact a certified arborist for a professional risk assessment. Look for ISA (International Society of Arboriculture) certification.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'action_ol4', style: 'normal', listItem: 'number', level: 1, children: [{ _type: 'span', _key: 'action_ol4s', text: 'Get a written estimate that includes the scope of work, timeline, and whether stump grinding is included.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'action_ol5', style: 'normal', listItem: 'number', level: 1, children: [{ _type: 'span', _key: 'action_ol5s', text: "Verify that the tree service has proper insurance (both general liability and workers' compensation) before any work begins.", marks: [] }], markDefs: [] },

      // Conclusion
      { _type: 'block', _key: 'conclusion_q', style: 'blockquote', children: [{ _type: 'span', _key: 'conclusion_qs', text: 'The safety of your family is always worth more than the cost of tree removal. A hazardous tree that falls on its own terms — rather than yours — can cost tens of thousands of dollars in structural damage, not counting the risk of injury.', marks: [] }], markDefs: [] },
      { _type: 'block', _key: 'conclusion_p', style: 'normal', children: [{ _type: 'span', _key: 'conclusion_ps', text: "At GreenTree Care, our ISA-certified arborists have the training, equipment, and experience to safely evaluate and remove hazardous trees of any size. We offer free on-site consultations and will always give you an honest assessment — if a tree can be saved through pruning or treatment, we'll tell you. And when removal is the right answer, we'll handle every aspect of the job safely and professionally. Contact us today to schedule your free tree risk assessment.", marks: [] }], markDefs: [] },
    ],
  },
];

async function seedBlogs() {
  console.log('🌱 Seeding blog posts into Sanity...\n');

  for (const blog of blogs) {
    try {
      const result = await client.createOrReplace(blog);
      console.log(`✅ Created: "${result.title}" (ID: ${result._id})`);
    } catch (err) {
      console.error(`❌ Error creating "${blog.title}":`, err.message);
    }
  }

  console.log('\n🎉 Done! Blog posts have been seeded.');
}

seedBlogs();
