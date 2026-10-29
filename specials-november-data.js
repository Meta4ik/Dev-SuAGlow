/**
 * SUA K Glow - November Specials Data Configuration
 * -------------------------------------------------
 * Dedicated configuration for the November 2026 campaign:
 * "The SUA Glow November Edit - Chingu Friendsgiving"
 * 
 * User Requested Updates:
 * 1. Oligio X: Listed price changed to "$300 OFF" (Regular Value $1,400+)
 * 2. Skin Quality Barrier: Added "+HA + Collagen" -> "ECM + PN/PDRN + HA + Collagen"
 * 3. Bottom disclaimer: "Offer is valid through 11/30/2026"
 * 4. Assets: Linked to dedicated November frame images
 */

const MONTHLY_SPECIALS_CONFIG_NOVEMBER = {
    // Campaign Overview Metadata
    meta: {
        month: "November 2026",
        campaignLabel: "THE SUA GLOW NOVEMBER EDIT",
        pill: "CHINGU FRIENDSGIVING 🍂✨",
        pillImage: "assets/chingu-friendsgiving-logo.png",
        logo: "assets/chingu-friendsgiving-logo.png",
        badge: "LIMITED TIME | NOVEMBER OFFERS",
        title: "CHINGU FRIENDSGIVING",
        subtitle: "GOOD FRIENDS. GREAT SKIN. SEOUL GLOW.",
        heroImage: "assets/chingu-friendsgiving-hero.png",
        heroText: "Chingu (친구) means friend in Korean. At SUA GLOW, every client is a chingu! This November, we're celebrating our Dallas–Fort Worth friends with a little extra K-Beauty love and exclusive year-end glow offers.",
        sectionTitle: "CHINGU EXCLUSIVES",
        sectionSubtitle: "A SUA GLOW thank you for our clients.",
        bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/",
        flyerImage: "assets/SUA-Glow-November-Specials.png",
        downloadFlyerImage: "assets/SUA-Glow-November-Specials.png",
        validThrough: "Offers valid through November 30, 2026",
        footerPillars: "KOREAN-FOUNDED  •  PHYSICIAN-GUIDED  •  CARROLLTON, TX",
        terms: "*Offers valid through November 30, 2026. Limit two promotional purchases per eligible client. Consultation and clinical eligibility required. Offers cannot be combined with other promotions. Individual results may vary."
    },

    // 3-Step Program (Highlighted Offers matching November Edit)
    featuredSteps: [
        {
            step: 1,
            badge: "LIFT + TIGHTEN + REJUVENATE",
            title: "OLIGIO X",
            subtitle: "Your Seoul-style skin-firming refresh awaits.",
            price: "$300 OFF",
            priceDetail: "REGULAR VALUE $1,400+",
            description: "Your Seoul-style, all-over skin-tightening glow-up starts here! Discover Korean RF technology designed to stimulate collagen, improve skin firmness and elasticity, and tighten the appearance of skin across the face and jawline—for smoother, firmer-looking skin and a naturally refreshed glow.",
            image: "assets/november-promo-oligio-x.png",
            ctaText: "BOOK YOUR OLIGIO X TREATMENT",
            tags: ["600 SHOTS", "SKIN TIGHTENING", "V-LINE CONTOUR", "COLLAGEN PRODUCTION", "IMPROVED SKIN ELASTICITY"],
            bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/"
        },
        {
            step: 2,
            badge: "HYDRATE + REPAIR + GLOW",
            title: "SKIN QUALITY BARRIER",
            subtitle: "ECM + PN/PDRN + HA + COLLAGEN",
            price: "$200 OFF",
            priceDetail: "SKIN HEALTH BOOSTERS PRICES START AT $799",
            description: "Beyond hydration. Discover next-generation Korean skin boosters designed to support your skin barrier, improve elasticity and texture, and restore the appearance of healthy, luminous skin.",
            image: "assets/november-promo-skin-barrier.png",
            ctaText: "BOOK YOUR SKIN QUALITY BARRIER",
            tags: ["SKIN BARRIER SUPPORT", "SMOOTHER SKIN TEXTURE", "IMPROVED ELASTICITY", "DEEP HYDRATION", "COLLAGEN SUPPORT"],
            bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/"
        },
        {
            step: 3,
            badge: "CLEANSE · HYDRATE · REFRESH · GLOW",
            title: "K-BEAUTY HYDROGLOW GLASS SKIN FACIAL",
            subtitle: "90-MINUTE SEOUL-STYLE GLASS SKIN RITUAL",
            price: "$100 OFF",
            priceDetail: "REGULAR VALUE $499",
            description: "Your chok-chok (촉촉)—dewy, hydrated—glow-up starts here!<br><br>Experience 90 minutes of Korean-inspired skin pampering combining dermabrasion, aquafacial, microcurrent sculpting, electrical muscle stimulation (EMS), Korean facial sculpting massage, a clarifying Korean modeling mask, lymphatic drainage, and LED red-light therapy.<br><br>You receive all four restorative facial techniques for maximum lifting, firming, deep hydration, and glass-skin radiance.",
            featuresTitle: "ALL 4 INCLUDED IN YOUR 90-MINUTE RITUAL:",
            features: [
                "Microcurrent Facial Sculpting",
                "Electrical Muscle Stimulation (EMS)",
                "Korean Facial Sculpting Massage",
                "Korean Modeling Mask"
            ],
            image: "assets/november-promo-hydroglow.png",
            ctaText: "BOOK YOUR GLASS SKIN EXPERIENCE",
            tags: ["AQUAFACIAL", "DERMABRASION", "MICROCURRENT", "EMS SCULPTING", "KOREAN FACIAL MASSAGE", "KOREAN MODELING MASK", "LYMPHATIC DRAINAGE", "LED RED-LIGHT"],
            bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/"
        }
    ],

    // Additional Special Badges & Trust Pillars
    brandPillars: [
        { icon: "award", title: "KOREAN-FOUNDED", subtitle: "Authentic K-Beauty" },
        { icon: "stethoscope", title: "PHYSICIAN-GUIDED", subtitle: "Dr. Adam Yang, MD" },
        { icon: "user-check", title: "KOREAN PA-C PROVIDER", subtitle: "Sophia Yang, PA-C" },
        { icon: "sparkles", title: "SEOUL-INSPIRED", subtitle: "Korean aesthetic approach" },
        { icon: "map-pin", title: "DALLAS K-BEAUTY", subtitle: "Carrollton · DFW" }
    ]
};

// Global assignment for direct usage
if (typeof window !== 'undefined') {
    window.MONTHLY_SPECIALS_CONFIG_NOVEMBER = MONTHLY_SPECIALS_CONFIG_NOVEMBER;
}
