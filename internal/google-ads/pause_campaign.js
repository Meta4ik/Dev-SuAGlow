/**
 * Google Ads Script - Immediate Pause of Entire Campaign
 * Account: SuA Glow (Carrollton, TX)
 * Target Account ID: 480-656-3884
 * Campaign: "SuA Glow Hair & Scalp Reset"
 * 
 * Purpose:
 * Immediately pauses the entire "SuA Glow Hair & Scalp Reset" campaign to stop
 * all ad spend instantly across all ad groups, ads, and keywords.
 */

function main() {
  var campaignName = "SuA Glow Hair & Scalp Reset";

  Logger.log("==================================================");
  Logger.log("Initiating Immediate Pause for Campaign: " + campaignName);
  Logger.log("==================================================");

  var campaignIterator = AdsApp.campaigns()
    .withCondition('Name = "' + campaignName + '"')
    .get();

  if (!campaignIterator.hasNext()) {
    Logger.log("WARNING: Exact campaign '" + campaignName + "' not found. Searching with partial match...");
    campaignIterator = AdsApp.campaigns()
      .withCondition('Name CONTAINS_IGNORE_CASE "SuA Glow"')
      .get();
  }

  if (!campaignIterator.hasNext()) {
    Logger.log("ERROR: No matching campaign found. Please verify you are logged into Account 480-656-3884.");
    return;
  }

  while (campaignIterator.hasNext()) {
    var campaign = campaignIterator.next();
    var currentStatus = campaign.isEnabled() ? "ENABLED" : (campaign.isPaused() ? "PAUSED" : "REMOVED");
    Logger.log("Target Campaign: '" + campaign.getName() + "' [Current Status: " + currentStatus + "]");

    // 1. Pause the Campaign itself
    campaign.pause();
    Logger.log("🛑 CAMPAIGN PAUSED: '" + campaign.getName() + "' is now PAUSED.");

    // 2. Pause all Ad Groups within the campaign
    var agIterator = campaign.adGroups().withCondition('Status = "ENABLED"').get();
    var pausedAgCount = 0;
    while (agIterator.hasNext()) {
      var ag = agIterator.next();
      ag.pause();
      pausedAgCount++;
    }
    Logger.log("🛑 Paused " + pausedAgCount + " active Ad Group(s).");

    // 3. Pause all active Ads
    var adsIterator = campaign.ads().withCondition('Status = "ENABLED"').get();
    var pausedAdsCount = 0;
    while (adsIterator.hasNext()) {
      var ad = adsIterator.next();
      ad.pause();
      pausedAdsCount++;
    }
    Logger.log("🛑 Paused " + pausedAdsCount + " active Ad(s).");

    // 4. Pause all active Keywords
    var kwIterator = campaign.keywords().withCondition('Status = "ENABLED"').get();
    var pausedKwCount = 0;
    while (kwIterator.hasNext()) {
      var kw = kwIterator.next();
      kw.pause();
      pausedKwCount++;
    }
    Logger.log("🛑 Paused " + pausedKwCount + " active Keyword(s).");
  }

  Logger.log("==================================================");
  Logger.log("SUCCESS: All ad delivery and spending have been halted.");
  Logger.log("==================================================");
}
