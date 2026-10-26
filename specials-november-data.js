/**
 * SuA K Glow - November Specials Data Configuration
 * -------------------------------------------------
 * Dedicated configuration for the November 2026 campaign:
 * "The SuA Glow November Edit - Chingu Friendsgiving"
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
        heroText: "Chingu (친구) means friend in Korean. At SUA Glow, you're family. This November, we're celebrating our Dallas chingus with a little extra K-Beauty love.",
        sectionTitle: "CHINGU EXCLUSIVES",
        sectionSubtitle: "A SUA Glow thank you for our clients.",
        bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/",
        flyerImage: "assets/SuA-Glow-November-Specials.png",
        downloadFlyerImage: "assets/SuA-Glow-November-Specials.png",
        validThrough: "Offer is valid through 11/30/2026",
        footerPillars: "KOREAN-FOUNDED  •  PHYSICIAN-GUIDED  •  CARROLLTON, TX",
        terms: "*Offer is valid through 11/30/2026. Limit 2 promotional packages per client. Aesthetic Record consultation required. Cannot be combined with other promotions."
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
            description: "Monopolar RF energy gently heats the skin to stimulate collagen and elastin, helping to lift, tighten, and improve skin elasticity for smoother, firmer, more youthful-looking skin.",
            image: "assets/november-promo-oligio-x.png",
            ctaText: "BOOK YOUR OLIGIO X TREATMENT",
            tags: ["600 SHOTS", "SKIN TIGHTENING", "V-LINE CONTOUR", "COLLAGEN PRODUCTION"],
            bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/"
        },
        {
            step: 2,
            badge: "HYDRATE + REPAIR + GLOW",
            title: "SKIN QUALITY BARRIER",
            subtitle: "ECM + PN/PDRN + HA + COLLAGEN",
            price: "$200 OFF",
            priceDetail: "SKIN HEALTH BOOSTERS PRICES START AT $799",
            description: "Improve hydration, elasticity, skin texture, collagen support, skin barrier function, dermal integrity, and overall skin appearance with next generation skin health boosters.",
            image: "assets/november-promo-skin-barrier.png",
            ctaText: "BOOK YOUR SKIN QUALITY BARRIER",
            tags: ["ECM", "PN/PDRN", "BARRIER REPAIR", "HYDRATION", "COLLAGEN SUPPORT", "RADIANT GLOW"],
            bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/"
        },
        {
            step: 3,
            badge: "CLEANSE + INFUSE + GLOW",
            title: "K-BEAUTY HYDROGLOW GLASS SKIN FACIAL",
            subtitle: "90-minute treatment",
            price: "$100 OFF",
            priceDetail: "REGULAR VALUE $499",
            description: "A multi-technology facial designed to deeply cleanse, hydrate, lift, and refine your skin. Combines AquaFacial, microcurrent, lymphatic drainage massage, electric muscle stimulation (EMS), hydration mask, and red light therapy for that lit-from-within Korean glass skin.",
            image: "assets/november-promo-hydroglow.png",
            ctaText: "BOOK YOUR GLASS SKIN EXPERIENCE",
            tags: ["AQUAFACIAL", "MICROCURRENT", "LYMPHATIC DRAINAGE MASSAGE", "ELECTRIC MUSCLE STIMULATION (EMS)", "HYDRATION MASK", "RED LIGHT THERAPY"],
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
