/**
 * SuA K Glow - November Specials Data Configuration
 * -------------------------------------------------
 * Dedicated configuration for the November 2026 campaign:
 * "The SuA Glow November Edit - Chingu Friendsgiving"
 * 
 * Includes all latest team approvals (Sophia, Kameron, Micky):
 * - $300 OFF / $200 OFF / $100 OFF badge hierarchy
 * - 4 callout chips per card
 * - Expanded Skin Quality Barrier formulas (ECM + PN/PDRN + HA + Collagen)
 * - HydroGlow 90-min facial ($100 OFF / $200 OFF with $399 Membership)
 * - Fixed height and bottom-locked CTAs
 */

const MONTHLY_SPECIALS_CONFIG_NOVEMBER = {
    // Campaign Overview Metadata
    meta: {
        month: "November 2026",
        pill: "CHINGU FRIENDSGIVING 🍂✨",
        badge: "Limited Time | November Offers",
        title: "The SuA Glow November Edit",
        titleLine1: "The SuA Glow",
        titleLine2: "November Edit",
        subtitle: "Good Friends. Great Skin. Seoul Glow.",
        taglinePill: "Chingu (친구) means friend in Korean. At SuA Glow, you're family. This November, we're celebrating our Dallas chingus with a little extra K-Beauty love before the holiday season.",
        tagline: "",
        offerBadge: "LIMITED TIME · NOVEMBER 2026",
        offerCallout: "CHINGU FRIENDSGIVING 🍂✨ <span class=\"md:whitespace-nowrap\">NOVEMBER EDIT</span>",
        offerTagline: "Good Friends. Great Skin. Seoul Glow.",
        offerSubtext: "A special thank-you to all our existing clients and friends with treatments due before the year-end rush.",
        offerPillars: "Korean-founded · Korean PA-C provider · Physician-guided",
        offerCtaText: "Claim Your November Offer",
        offerCtaUrl: "https://suaglow.myaestheticrecord.com/online-booking/",
        flyerImage: "assets/SuA-Glow-November-Specials.png",
        downloadFlyerImage: "assets/SuA-Glow-November-Specials.png",
        cardBackground: "assets/dallas_fall_card_bg.jpg",
        headerBackground: "assets/member_hero.png",
        bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/",
        terms: "*November promotional pricing valid through November 30, 2026. Limit 2 promotional packages per client. Aesthetic Record consultation required. Cannot be combined with other promotions."
    },

    // 3-Step Program (Highlighted Offers matching November Edit)
    featuredSteps: [
        {
            step: 1,
            badge: "LIFT + TIGHTEN + REJUVENATE",
            title: "Oligio X®",
            subtitle: "Monopolar RF Lifting & Contouring",
            price: "$300 OFF",
            originalPrice: "$1,400+",
            priceDetail: "Regular Value $1,400+ (Promo $1,100)",
            hook: "Your Seoul-style skin-firming refresh awaits.",
            description: "Monopolar RF energy gently heats the deep dermis to stimulate collagen and elastin, helping to lift, tighten, and sculpt a refined V-line for smoother, firmer, more youthful-looking skin.",
            image: "assets/oligio_x_model_promo.jpg",
            cardBackground: "assets/oligio_bg_hero.png",
            tags: ["600 Full-Face Shots", "Skin Tightening", "V-Line Contour", "Collagen Induction"],
            bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/"
        },
        {
            step: 2,
            badge: "HYDRATE + REPAIR + GLOW",
            title: "Skin Quality Barrier",
            subtitle: "Next-Gen Skin Boosters: ECM • PN/PDRN • HA • Collagen",
            price: "$200 OFF",
            originalPrice: "$799+",
            priceDetail: "Prices Start at $799",
            hook: "Rebuild your dermal barrier and unlock deep radiance.",
            description: "Improve hydration, elasticity, skin texture, barrier function, and dermal integrity with next-generation skin health boosters. Customized across four premier booster types: ECM, Salmon DNA (PN/PDRN), HA, and Collagen.",
            image: "assets/rejuran_tone-up_booster_salmon_dna.png",
            cardBackground: "assets/hero_waterdrop_bg.jpg",
            tags: ["ECM & PN/PDRN", "HA & Collagen", "Barrier Repair", "Radiant Glow"],
            bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/"
        },
        {
            step: 3,
            badge: "CLEANSE + INFUSE + GLOW",
            title: "K-Beauty HydroGlow",
            subtitle: "90-Minute Glass Skin Facial",
            price: "$100 OFF",
            originalPrice: "$499",
            priceDetail: "Regular Value $499 (Promo $399) • Or $200 OFF with $399 Membership",
            hook: "Multi-technology facial for lit-from-within Korean glass skin.",
            description: "A multi-technology facial designed to deeply cleanse, hydrate, lift, and refine your skin. Combines AquaFacial, microcurrent toning, lymphatic drainage massage, electric muscle stimulation (EMS), bio-cellulose hydration mask, and LED red light therapy.",
            image: "assets/hydro-injection-placeholder.jpg",
            cardBackground: "assets/header_bg.png",
            tags: ["AquaFacial Cleanse", "EMS & Microcurrent", "Lymphatic Massage", "Red Light Therapy"],
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
