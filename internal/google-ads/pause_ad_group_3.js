/**
 * Google Ads Script - Immediate Disablement of Ad Group 3
 * Account: SUA Glow (Carrollton, TX)
 * Target Account ID: 480-656-3884
 * Campaign: "SUA Glow Hair & Scalp Reset"
 * Target: "Ad Group 3: Hairline / Men"
 * 
 * Purpose:
 * Immediately pauses Ad Group 3 along with all its active Responsive Search Ads
 * and keywords, stopping any ad spend on male-specific queries and reallocating
 * budget exclusively to Ad Group 1 (Combined) and Ad Group 2 (Women Thinning).
 */

function main() {
  var campaignName = "SUA Glow Hair & Scalp Reset";
  var adGroupName = "Ad Group 3: Hairline / Men";

  Logger.log("==================================================");
  Logger.log("Initiating Disablement of: " + adGroupName);
  Logger.log("==================================================");

  var campaignIterator = AdsApp.campaigns()
    .withCondition('Name = "' + campaignName + '"')
    .get();

  if (!campaignIterator.hasNext()) {
    Logger.log("ERROR: Campaign '" + campaignName + "' not found. Verify account ID 480-656-3884.");
    return;
  }

  var campaign = campaignIterator.next();
  Logger.log("✓ Found target campaign: '" + campaignName + "'");

  var agIterator = campaign.adGroups()
    .withCondition('Name = "' + adGroupName + '"')
    .get();

  if (!agIterator.hasNext()) {
    Logger.log("WARNING: Ad Group '" + adGroupName + "' not found by exact name. Searching with partial match...");
    agIterator = campaign.adGroups()
      .withCondition('Name CONTAINS_IGNORE_CASE "Ad Group 3"')
      .get();
  }

  if (!agIterator.hasNext()) {
    Logger.log("ERROR: Ad Group 3 not found in campaign. Please check spelling in Google Ads.");
    return;
  }

  while (agIterator.hasNext()) {
    var ag = agIterator.next();
    var currentStatus = ag.isEnabled() ? "ENABLED" : (ag.isPaused() ? "PAUSED" : "REMOVED");
    Logger.log("Found: '" + ag.getName() + "' [Current Status: " + currentStatus + "]");

    // 1. Pause the Ad Group
    ag.pause();
    Logger.log("🛑 Ad Group '" + ag.getName() + "' is now PAUSED.");

    // 2. Pause all Ads within the Ad Group
    var adsIterator = ag.ads().withCondition('Status = "ENABLED"').get();
    var pausedAds = 0;
    while (adsIterator.hasNext()) {
      var ad = adsIterator.next();
      ad.pause();
      pausedAds++;
    }
    Logger.log("🛑 Paused " + pausedAds + " active ad(s) in " + ag.getName());

    // 3. Pause all Keywords within the Ad Group
    var kwIterator = ag.keywords().withCondition('Status = "ENABLED"').get();
    var pausedKws = 0;
    while (kwIterator.hasNext()) {
      var kw = kwIterator.next();
      kw.pause();
      pausedKws++;
    }
    Logger.log("🛑 Paused " + pausedKws + " active keyword(s) in " + ag.getName());
  }

  Logger.log("==================================================");
  Logger.log("SUCCESS: Ad Group 3 successfully disabled.");
  Logger.log("100% of daily spend is now focused on Ad Groups 1 & 2.");
  Logger.log("==================================================");
}
