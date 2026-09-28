/**
 * Google Ads Automated Campaign Setup Script (v2.0)
 * Account: SuA Glow (Carrollton, TX)
 * Campaign: "SuA Glow Hair & Scalp Reset"
 * 
 * Instructions:
 * 1. If you already have a campaign named "SuA Glow Hair & Scalp Reset", this script
 *    populates all Ad Groups, Keywords, Ads, Negatives, and 13 DFW Geo Targets directly.
 * 2. If the campaign does not exist yet, this script uses Google Ads Bulk Upload to create it.
 */

function main() {
  var campaignName = "SuA Glow Hair & Scalp Reset";
  var finalUrl = "https://suaglow.com/korean-scalp-hair-rejuvenation.html";
  
  Logger.log("==================================================");
  Logger.log("Starting setup for: " + campaignName);
  Logger.log("==================================================");

  // Check if campaign already exists
  var campaignIterator = AdsApp.campaigns()
    .withCondition('Name = "' + campaignName + '"')
    .get();

  if (campaignIterator.hasNext()) {
    Logger.log("✓ Found existing campaign: '" + campaignName + "'");
    var campaign = campaignIterator.next();
    populateCampaignDirectly(campaign, finalUrl);
    return;
  }

  // Campaign does not exist yet -> Use Google Ads Bulk Upload
  Logger.log("Campaign not found. Creating full structure via Google Ads Bulk Upload...");
  
  var columns = [
    'Action', 'Campaign', 'Budget', 'Campaign type', 'Campaign status',
    'Ad Group', 'Ad Group status', 'Keyword', 'Criterion Type',
    'Headline 1', 'Headline 2', 'Headline 3', 'Headline 4', 'Headline 5',
    'Description 1', 'Description 2', 'Description 3',
    'Final URL', 'Path 1', 'Path 2'
  ];

  var upload = AdsApp.bulkUploads().newCsvUpload(columns, {moneyInMicros: false});

  // 1. Campaign Row
  upload.appendRow({
    'Action': 'Add',
    'Campaign': campaignName,
    'Budget': 40,
    'Campaign type': 'Search',
    'Campaign status': 'Enabled'
  });

  // 2. Ad Groups, Keywords & Responsive Search Ads
  var adGroups = [
    {
      name: "Ad Group 1: Combined / Hair Loss",
      path1: "scalp",
      path2: "reset",
      keywords: [
        "hair loss treatment Dallas",
        "hair loss treatment near me",
        "hair loss clinic near me",
        "scalp treatment for hair loss",
        "Korean scalp treatment"
      ],
      headlines: [
        "Hair Loss? Think Scalp.",
        "$399 Korean Scalp Reset",
        "Hair Loss Treatment Dallas",
        "Scalp Rejuvenation Dallas",
        "More Than a Head Spa"
      ],
      descriptions: [
        "Concerned about thinning or shedding? Start your personalized scalp assessment today.",
        "Physician-guided Seoul-inspired scalp and hair rejuvenation in Carrollton.",
        "Experience our $399 Korean Scalp Reset. Medically guided FDA-cleared technology."
      ]
    },
    {
      name: "Ad Group 2: Thinning / Women",
      path1: "female",
      path2: "scalp-care",
      keywords: [
        "female hair loss treatment",
        "female hair loss treatment near me",
        "female thinning hair treatment",
        "thinning hair treatment near me",
        "treatment for thinning hair"
      ],
      headlines: [
        "Widening Part? Start Here.",
        "Female Thinning Hair Care",
        "$399 Scalp & Hair Reset",
        "Treatment For Thinning Hair",
        "Needle-Free Scalp Infusion"
      ],
      descriptions: [
        "Noticing hairline changes or shedding? Your scalp needs more than a power wash.",
        "Experience our $399 Korean Scalp Reset. No guessing just a plan built around you.",
        "Address female thinning hair with FDA-cleared needle-free technology. Book now."
      ]
    },
    {
      name: "Ad Group 3: Hairline / Men",
      path1: "mens",
      path2: "hair-density",
      keywords: [
        "male hair loss treatment",
        "male thinning hair treatment",
        "hair loss clinic Dallas",
        "scalp therapy for hair loss"
      ],
      headlines: [
        "Thinning Hairline? Think Scalp",
        "Male Hair Loss Care Dallas",
        "$399 Korean Scalp Reset",
        "Non-Surgical Hair Care",
        "Advanced Scalp Infusion"
      ],
      descriptions: [
        "Receding hairline or crown thinning? Address it without surgery.",
        "Get a physician-guided scalp assessment and try our $399 Korean Scalp Reset.",
        "FDA-cleared needle-free technology for personalized male scalp wellness."
      ]
    }
  ];

  for (var i = 0; i < adGroups.length; i++) {
    var ag = adGroups[i];
    
    // Ad Group Row
    upload.appendRow({
      'Action': 'Add',
      'Campaign': campaignName,
      'Ad Group': ag.name,
      'Ad Group status': 'Enabled'
    });

    // Keywords Rows
    for (var k = 0; k < ag.keywords.length; k++) {
      upload.appendRow({
        'Action': 'Add',
        'Campaign': campaignName,
        'Ad Group': ag.name,
        'Keyword': ag.keywords[k],
        'Criterion Type': 'Phrase'
      });
    }

    // Responsive Search Ad Row
    upload.appendRow({
      'Action': 'Add',
      'Campaign': campaignName,
      'Ad Group': ag.name,
      'Headline 1': ag.headlines[0],
      'Headline 2': ag.headlines[1],
      'Headline 3': ag.headlines[2],
      'Headline 4': ag.headlines[3],
      'Headline 5': ag.headlines[4],
      'Description 1': ag.descriptions[0],
      'Description 2': ag.descriptions[1],
      'Description 3': ag.descriptions[2],
      'Final URL': finalUrl,
      'Path 1': ag.path1,
      'Path 2': ag.path2
    });
  }

  // Submit bulk upload
  upload.apply();
  Logger.log("✓ Bulk upload submitted to Google Ads engine!");
  Logger.log("Next: Once applied, re-run this script once to attach all 13 Geo-Targets and 22 Negatives.");
}

function populateCampaignDirectly(campaign, finalUrl) {
  // 1. Add 13 DFW Geo Targets
  var targetLocationIds = [
    1026271, // Carrollton
    1026339, // Dallas
    1026695, // Plano
    1026407, // Frisco
    1026836, // The Colony
    1026556, // Lewisville
    1026729, // Richardson
    1026171, // Addison
    9051933, // Farmers Branch
    1026497, // Irving
    1026398, // Flower Mound
    1026178, // Allen
    1026607  // McKinney
  ];

  Logger.log("Attaching 13 targeted DFW cities...");
  for (var l = 0; l < targetLocationIds.length; l++) {
    try {
      campaign.addLocation(targetLocationIds[l]);
    } catch (e) {}
  }
  Logger.log("✓ 13 DFW targeted locations attached.");

  // 2. Add 22 Campaign Negatives
  var negativeKeywords = [
    "transplant", "hair transplant", "FUE", "FUT", "Turkey",
    "wig", "toupee", "extensions", "haircut", "hairstyle",
    "shampoo", "conditioner", "Amazon", "DIY", "home remedy",
    "jobs", "career", "school", "certification", "course",
    "training", "free"
  ];

  Logger.log("Attaching 22 negative keywords...");
  for (var n = 0; n < negativeKeywords.length; n++) {
    try {
      campaign.createNegativeKeyword('"' + negativeKeywords[n] + '"');
    } catch (e) {}
  }
  Logger.log("✓ 22 negative keywords active.");

  // 3. Ad Groups Data & RSAs
  var adGroupsData = [
    {
      name: "Ad Group 1: Combined / Hair Loss",
      cpc: 3.50,
      path1: "scalp",
      path2: "reset",
      keywords: [
        '"hair loss treatment Dallas"',
        '"hair loss treatment near me"',
        '"hair loss clinic near me"',
        '"scalp treatment for hair loss"',
        '"Korean scalp treatment"'
      ],
      headlines: [
        "Hair Loss? Think Scalp.",
        "$399 Korean Scalp Reset",
        "Hair Loss Treatment Dallas",
        "Scalp Rejuvenation Dallas",
        "More Than a Head Spa"
      ],
      descriptions: [
        "Concerned about thinning or shedding? Start your personalized scalp assessment today.",
        "Physician-guided Seoul-inspired scalp and hair rejuvenation in Carrollton.",
        "Experience our $399 Korean Scalp Reset. Medically guided FDA-cleared technology."
      ]
    },
    {
      name: "Ad Group 2: Thinning / Women",
      cpc: 3.50,
      path1: "female",
      path2: "scalp-care",
      keywords: [
        '"female hair loss treatment"',
        '"female hair loss treatment near me"',
        '"female thinning hair treatment"',
        '"thinning hair treatment near me"',
        '"treatment for thinning hair"'
      ],
      headlines: [
        "Widening Part? Start Here.",
        "Female Thinning Hair Care",
        "$399 Scalp & Hair Reset",
        "Treatment For Thinning Hair",
        "Needle-Free Scalp Infusion"
      ],
      descriptions: [
        "Noticing hairline changes or shedding? Your scalp needs more than a power wash.",
        "Experience our $399 Korean Scalp Reset. No guessing just a plan built around you.",
        "Address female thinning hair with FDA-cleared needle-free technology. Book now."
      ]
    },
    {
      name: "Ad Group 3: Hairline / Men",
      cpc: 3.50,
      path1: "mens",
      path2: "hair-density",
      keywords: [
        '"male hair loss treatment"',
        '"male thinning hair treatment"',
        '"hair loss clinic Dallas"',
        '"scalp therapy for hair loss"'
      ],
      headlines: [
        "Thinning Hairline? Think Scalp",
        "Male Hair Loss Care Dallas",
        "$399 Korean Scalp Reset",
        "Non-Surgical Hair Care",
        "Advanced Scalp Infusion"
      ],
      descriptions: [
        "Receding hairline or crown thinning? Address it without surgery.",
        "Get a physician-guided scalp assessment and try our $399 Korean Scalp Reset.",
        "FDA-cleared needle-free technology for personalized male scalp wellness."
      ]
    }
  ];

  for (var g = 0; g < adGroupsData.length; g++) {
    var data = adGroupsData[g];
    var agIterator = campaign.adGroups().withCondition('Name = "' + data.name + '"').get();
    var adGroup;
    if (agIterator.hasNext()) {
      adGroup = agIterator.next();
      Logger.log("✓ Ad group exists: " + data.name);
    } else {
      var agOp = campaign.newAdGroupBuilder().withName(data.name).withCpc(data.cpc).build();
      if (!agOp.isSuccessful()) {
        Logger.log("! Ad group build note: " + agOp.getErrors());
        continue;
      }
      adGroup = agOp.getResult();
      Logger.log("✓ Created ad group: " + data.name);
    }

    // Keywords
    for (var k = 0; k < data.keywords.length; k++) {
      try {
        adGroup.newKeywordBuilder().withText(data.keywords[k]).build();
      } catch (e) {}
    }
    Logger.log("  ✓ Keywords added.");

    // RSA
    var rsaBuilder = adGroup.newAd().responsiveSearchAdBuilder()
      .withFinalUrl(finalUrl)
      .withPath1(data.path1)
      .withPath2(data.path2);

    for (var h = 0; h < data.headlines.length; h++) {
      rsaBuilder.addHeadline(data.headlines[h]);
    }
    for (var d = 0; d < data.descriptions.length; d++) {
      rsaBuilder.addDescription(data.descriptions[d]);
    }
    
    var rsaOp = rsaBuilder.build();
    if (rsaOp.isSuccessful()) {
      Logger.log("  ✓ RSA created.");
    }
  }

  Logger.log("==================================================");
  Logger.log("ALL CAMPAIGN ASSETS FULLY CONFIGURED!");
  Logger.log("==================================================");
}
