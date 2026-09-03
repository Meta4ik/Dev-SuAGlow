/**
 * SuA K Glow - September 2026 Specials Data Configuration
 * --------------------------------------------------------
 * Dedicated configuration for the September Promotion campaign.
 */

const MONTHLY_SPECIALS_CONFIG_SEPTEMBER = {
    // Campaign Overview Metadata
    meta: {
        month: "September 2026",
        pill: "LABOR DAY GLOW DROP",
        pillImage: "assets/labor-day.png?v=90",
        badge: "Limited Time | September Offers",
        title: "The SuA Glow September Edit",
        subtitle: "Seoul Style. Dallas Glow.",
        tagline: "Dallas summer steal your glow? K-Beauty to the rescue. Your Seoul-style comeback starts at SuA Glow. Three September-only ways to firm, refine + reset.",
        offerBadge: "LIMITED TIME · SEPTEMBER 2026",
        offerCallout: "$100 OFF YOUR <span class=\"md:whitespace-nowrap\">SEOUL-STYLE COMEBACK</span>",
        offerSubtext: "Book your consultation during September 2026 to redeem.",
        offerPillars: "Korean-founded · Korean PA-C provider · Physician-guided",
        offerCtaText: "Claim Your Offer",
        offerCtaUrl: "https://suaglow.myaestheticrecord.com/online-booking/",
        flyerImage: "assets/september_flyer_bg_models.jpg?v=56",
        downloadFlyerImage: "assets/SuA-Glow-September-Specials.jpg?v=80",
        cardBackground: "assets/dallas_fall_card_bg.jpg?v=56",
        bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/",
        terms: "*September promotional pricing. Consultation is required to determine candidacy. Individual results vary. Offers subject to availability."
    },

    // 3-Step Program (Highlighted Offers matching September Edit)
    featuredSteps: [
        {
            step: 1,
            badge: "FIRM + CONTOUR + GLOW",
            title: "Seoul Glass Skin 360",
            subtitle: "Oligio X® 600 Shots + SkinTox",
            price: "$1,599",
            originalPrice: "$2,100",
            priceDetail: "Regular Value $2,100",
            description: "The Seoul-style pairing for firmer-looking, smoother, luminous skin. Oligio X targeted RF meets SkinTox for a Korean-inspired approach to skin firmness, refinement + glow.",
            image: "assets/oligio_x_model_promo.jpg",
            tags: ["Oligio X® 600 Shots", "SkinTox", "Firmness + Glow"],
            bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/"
        },
        {
            step: 2,
            badge: "SCALP + HAIR WELLNESS",
            title: "Korean Scalp & Hair Reset",
            subtitle: "Needle-Free · Peptides · Red Light",
            price: "$3,600",
            originalPrice: "$4,800",
            priceDetail: "6-Session Program · $600<br>Session (Reg. $4,800)",
            description: "Great hair requires more than a power wash at a scalp bar. Our 6-session Korean-inspired program combines needle-free scalp infusion, peptides + red light to support scalp hydration, balance and healthier-looking hair.",
            image: "assets/dep_hair.jpg?v=75",
            tags: ["6-Session Program", "Needle-Free Scalp Infusion", "Peptides & Red Light"],
            bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/"
        },
        {
            step: 3,
            badge: "VOLUME + CONTOUR",
            title: "Seoul Youth Sculpt",
            subtitle: "RADIESSE® or HA · FACIAL VOLUME · NECK REFINEMENT",
            price: "$990",
            originalPrice: "$1,300",
            priceDetail: "Regular Value $1,300",
            description: "A Seoul-inspired pairing designed to support facial structure, restore the appearance of volume + refine the neck for a more balanced, refreshed look.",
            image: "assets/reset_right_for_you_glow.png",
            tags: ["RADIESSE® or HA", "Facial Volume", "Neck Refinement"],
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
