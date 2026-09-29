/**
 * SuA Glow - Google Ads & Analytics Tracking Module
 * Centralized tracking loader and automated event listener for conversions.
 */

(function() {
  // --- CONFIGURATION ---
  // Replace these values with your actual Google Ads ID and Conversion Labels
  window.SUA_TRACKING_CONFIG = Object.assign({
    googleAdsIds: ['AW-18481004220', 'AW-18472178231'], // Google Ads Conversion IDs
    ga4MeasurementId: 'G-XXXXXXXXXX',                   // GA4 Measurement ID (optional, e.g. G-ABC123XYZ)
    conversionLabels: {
      bookingClick: '',                 // Google Ads conversion label for booking clicks
      phoneCallClick: 'bKqPCOuC5oodELz9tuxE', // Google Ads conversion label for phone calls (AW-18481004220)
      formSubmission: '1oWBCOuBv4kdELeknOhE', // Google Ads conversion label for form submits (AW-18472178231)
      scalpResetConsultation: ''        // Dedicated label for Scalp Reset campaign
    },
    // Account-specific conversion targets
    accountSpecificConversions: {
      phoneCallClick: ['AW-18481004220/bKqPCOuC5oodELz9tuxE'],
      formSubmission: ['AW-18472178231/1oWBCOuBv4kdELeknOhE']
    },
    debug: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  }, window.SUA_TRACKING_CONFIG || {});

  const config = window.SUA_TRACKING_CONFIG;
  // Normalize googleAdsIds to an array
  const adsIds = Array.isArray(config.googleAdsIds)
    ? config.googleAdsIds.filter(id => id && !id.includes('XXXX'))
    : (config.googleAdsId && !config.googleAdsId.includes('XXXX') ? [config.googleAdsId] : []);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  // Set default timestamp
  gtag('js', new Date());

  // Determine primary script loader ID
  const primaryId = adsIds.length > 0 
    ? adsIds[0] 
    : (config.ga4MeasurementId && !config.ga4MeasurementId.includes('XXXX') ? config.ga4MeasurementId : null);

  if (primaryId) {
    // Inject Google Tag Script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(primaryId)}`;
    document.head.appendChild(script);

    // Configure all Google Ads IDs
    adsIds.forEach(id => {
      gtag('config', id);
    });

    // Configure GA4
    if (config.ga4MeasurementId && !config.ga4MeasurementId.includes('XXXX')) {
      gtag('config', config.ga4MeasurementId);
    }
  } else if (config.debug) {
    console.info('[SuA Glow Tracking] Initialized in DEBUG mode (using placeholder IDs). Events will log to console.');
  }

  /**
   * Helper function to safely send conversion events
   */
  window.suaTrackConversion = function(action, params = {}) {
    if (config.debug) {
      console.log(`[SuA Glow Tracking] Conversion fired: "${action}"`, params);
    }

    // Google Analytics 4 Custom Event
    gtag('event', action, params);

    // If explicit send_to provided, fire directly
    if (params.send_to) {
      gtag('event', 'conversion', {
        'send_to': params.send_to,
        'value': params.value !== undefined ? params.value : 1.0,
        'currency': params.currency || 'USD',
        'transaction_id': params.transaction_id || ''
      });
    }

    // Account-specific targeted conversions (prevents firing label against wrong Ads account)
    if (config.accountSpecificConversions && config.accountSpecificConversions[action]) {
      config.accountSpecificConversions[action].forEach(target => {
        gtag('event', 'conversion', {
          'send_to': target,
          'value': params.value !== undefined ? params.value : 1.0,
          'currency': params.currency || 'USD',
          'transaction_id': params.transaction_id || ''
        });
      });
    } else {
      // Fallback: Google Ads Specific Conversions (send to configured Ads IDs)
      adsIds.forEach(id => {
        const label = (config.conversionLabels && config.conversionLabels[action]) || params.conversionLabel;
        if (label && (!params.send_to || !params.send_to.startsWith(id))) {
          gtag('event', 'conversion', {
            'send_to': `${id}/${label}`,
            'value': params.value !== undefined ? params.value : 1.0,
            'currency': params.currency || 'USD',
            'transaction_id': params.transaction_id || ''
          });
        }
      });
    }
  };

  /**
   * Automated Event Listeners for Core Conversions
   */
  document.addEventListener('DOMContentLoaded', function() {
    // 1. Phone Call Clicks
    document.addEventListener('click', function(e) {
      const telLink = e.target.closest('a[href^="tel:"]');
      if (telLink) {
        const phoneNumber = telLink.getAttribute('href').replace('tel:', '');
        window.suaTrackConversion('phoneCallClick', {
          event_category: 'Lead',
          event_label: phoneNumber,
          page_location: window.location.href,
          page_title: document.title
        });
      }
    });

    // 2. Online Booking Clicks (Aesthetic Record & Boulevard)
    document.addEventListener('click', function(e) {
      const bookingLink = e.target.closest('a[href*="myaestheticrecord.com"], a[href*="joinboulevard.com"], [data-track-conversion="booking"], [data-track-conversion="scalp_reset_booking"]');
      if (bookingLink) {
        const targetUrl = bookingLink.getAttribute('href') || 'in-page-booking';
        const isScalpPage = window.location.pathname.includes('korean-scalp-hair-rejuvenation') || window.location.pathname.includes('scalp-reset');
        
        window.suaTrackConversion(isScalpPage ? 'scalpResetConsultation' : 'bookingClick', {
          event_category: 'Booking',
          event_label: targetUrl,
          campaign_focus: isScalpPage ? 'Korean Scalp & Hair Reset' : 'General Aesthetics',
          page_location: window.location.href
        });
      }
    });

    // 3. Contact & Consultation Form Submissions
    document.addEventListener('submit', function(e) {
      const form = e.target;
      if (form.tagName === 'FORM') {
        window.suaTrackConversion('formSubmission', {
          event_category: 'Contact Form',
          form_id: form.id || form.name || 'unnamed_form',
          page_location: window.location.href
        });
      }
    });
  });
})();
