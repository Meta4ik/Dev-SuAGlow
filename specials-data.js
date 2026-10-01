/**
 * SuA K Glow - Monthly Specials Data Configuration
 * ------------------------------------------------
 * Dedicated configuration for the active Monthly Specials campaign.
 * Currently active: October 2026 - "The SuA Glow October Edit - Glow or Treat! 🍫✨"
 */

const MONTHLY_SPECIALS_CONFIG = {
    // Campaign Overview Metadata
    meta: {
        month: "October 2026",
        pill: "GLOW OR TREAT! 🍫✨",
        pillImage: "assets/glow-or-treat-title.png",
        badge: "Limited Time | October Offers",
        title: "The SuA Glow October Edit",
        titleLine1: "The SuA Glow",
        titleLine2: "October Edit",
        subtitle: "Seoul Glow. Zero Tricks.",
        taglinePill: "Scary-dry skin or hair looking a little haunted? Dallas fall meets authentic K-Beauty. Three October-only ways to lift, repair + renew with zero tricks and all treats.",
        tagline: "",
        offerBadge: "LIMITED TIME · OCTOBER 2026",
        offerCallout: "GLOW OR TREAT! 🍫✨ <span class=\"md:whitespace-nowrap\">OCTOBER EDIT</span>",
        offerTagline: "Seoul Glow. Zero Tricks.",
        offerSubtext: "Book your consultation during October 2026 to redeem promotional pricing.",
        offerPillars: "Korean-founded · Korean PA-C provider · Physician-guided",
        offerCtaText: "Claim Your October Offer",
        offerCtaUrl: "https://suaglow.myaestheticrecord.com/online-booking/",
        flyerImage: "assets/SuA-Glow-October-Specials.jpg?v=105",
        downloadFlyerImage: "assets/SuA-Glow-October-Specials.jpg?v=105",
        cardBackground: "assets/october_card_bg.jpg",
        headerBackground: "assets/october_header_bg.jpg",
        bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/",
        terms: "*October promotional pricing valid through October 31, 2026. Consultation required to determine candidacy. Individual results vary. Offers subject to availability and cannot be combined with other promotions."
    },

    // 3-Step Program (Highlighted Offers matching October Edit)
    featuredSteps: [
        {
            step: 1,
            badge: "FIRM + BALANCE + RESTORE",
            title: "K-Volume Lift",
            subtitle: "Oligio X® 600 Shots + Volume Restoration Filler (Smile Lines or Temples)",
            price: "$1,599",
            originalPrice: "$2,400+",
            priceDetail: "Regular Value $2,400+",
            hook: "No Tricks, Just Lift. Balance + a little Seoul magic.",
            description: "Targeted Korean monopolar RF skin tightening paired with advanced dermal volume restoration. Lift sagging contours, smooth deep smile lines or temples, and restore youthful facial architecture.",
            image: "assets/october_model_k_volume_lift.jpg",
            cardBackground: "assets/october_card1_device_far_right.jpg",
            tags: ["Oligio X® 600 Shots", "Volume Restoration", "Facial Balance", "Lift · Firm · Restore"],
            bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/"
        },
        {
            step: 2,
            badge: "HYDRATE + SUPPORT + GLOW",
            title: "Glow Barrier",
            subtitle: "Rejuran® Healing Essence (Topical) + SkinTox",
            price: "$699",
            originalPrice: "$1,000+",
            priceDetail: "Regular Value $1,000+",
            hook: "Scary-dry skin? Consider this your K-Beauty rescue.",
            description: "Rebuild a compromised skin barrier and unlock luminous glass skin. Combines salmon DNA polynucleotides (Rejuran Healing Essence) with micro-dosed SkinTox for pore refinement, calm radiance, and cellular repair.",
            image: "assets/october_model_glow_barrier.jpg",
            cardBackground: "assets/october_card2_device_far_right.jpg",
            tags: ["Rejuran® Healing Essence", "SkinTox", "Skin Quality", "Strengthen Barrier · Repair · Glow"],
            bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/"
        },
        {
            step: 3,
            badge: "SCALP + HAIR WELLNESS",
            title: "Hair Revival",
            subtitle: "Needle-Free Scalp Infusion · 2 Sessions + Red Light",
            price: "$1,199",
            originalPrice: "$1,800+",
            priceDetail: "Regular Value $1,800+",
            hook: "Hair looking a little haunted? Start at the scalp.",
            description: "Korean clinical scalp renewal powered by needle-free DEP (DermoElectroPoration®) technology. Delivers potent follicle-stimulating growth factors directly to roots, paired with medical-grade Celluma red light.",
            image: "assets/october_model_hair_revival.jpg",
            cardBackground: "assets/october_card3_device_far_right.jpg",
            tags: ["2 Sessions", "Scalp Wellness", "Red Light", "Follicle Renewal · Confident"],
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

// Compatibility alias for pages looking for MONTHLY_SPECIALS_CONFIG_OCTOBER
const MONTHLY_SPECIALS_CONFIG_OCTOBER = MONTHLY_SPECIALS_CONFIG;
