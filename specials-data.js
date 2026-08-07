/**
 * SuA K Glow - Monthly Specials Data Configuration
 * ------------------------------------------------
 * To update specials for a new month, simply edit the values in this file!
 */

const MONTHLY_SPECIALS_CONFIG = {
    // Campaign Overview Metadata
    meta: {
        month: "August 2026",
        badge: "Limited Time | August Offers",
        title: "The Korean Fall Skin Reset",
        subtitle: "Inspired by Seoul's approach to seasonal skin health",
        offerCallout: "$100 TOWARD YOUR FALL SKIN RESET",
        flyerImage: "assets/korean_fall_skin_reset_august.jpg",
        bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/",
        terms: "*Offer valid for limited time during August. Cannot be combined with other promotional discounts."
    },

    // 3-Step Program (Highlighted Cards matching the flyer steps 1, 2, 3)
    featuredSteps: [
        {
            step: 1,
            badge: "LIFT & TIGHTEN",
            title: "Seoul Body Lift",
            subtitle: "Oligio X® Body",
            price: "$1,200",
            priceDetail: "900 Shots",
            description: "Supports firmer-looking skin and body contouring utilizing advanced targeted RF heating.",
            image: "assets/oligio_x_product.png",
            tags: ["900 Shots", "Firming", "Body Contouring"],
            bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/"
        },
        {
            step: 2,
            badge: "BUILD COLLAGEN",
            title: "Korean Fall Body Reset",
            subtitle: "Radiesse® or Sculptra®",
            price: "$990",
            priceDetail: "2 Sessions",
            description: "Supports healthy collagen production and restores structural volume for long-lasting skin renewal.",
            image: "assets/korean_fall_body_reset_abs.png",
            tags: ["2 Sessions", "Radiesse® or Sculptra®", "Biostimulator"],
            bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/"
        },
        {
            step: 3,
            badge: "DEEP HYDRATION",
            title: "Glass Skin Infusion",
            subtitle: "Needle-Free HA Skin Booster",
            price: "$349",
            priceDetail: "Full Treatment",
            description: "Restore hydration for healthy-looking, luminous skin with zero downtime.",
            image: "assets/korean-models/portrait_2_highres.png",
            tags: ["Needle-Free", "HA Booster", "Luminous Glow"],
            bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/"
        }
    ],

    // Additional Monthly Special Offers (Grid Section)
    additionalPromos: [
        {
            badge: "LIP REPAIR",
            title: "Rejuran® Lip PN Reset",
            price: "$299",
            originalPrice: "$400",
            description: "Your lips don't need volume—they need repair. Powered by PN, Rejuran® restores deep hydration and strengthens lip tissue.",
            image: "assets/specials/SuA Launch Special - LIP PN.webp",
            bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/"
        },
        {
            badge: "HYDRATION & LIFT",
            title: "LDM Triple Ultrasound",
            price: "$99",
            originalPrice: "$249",
            description: "Calms inflammation, drives deep hydration, and finishes with a subtle lift—no heat, no needles, no downtime.",
            image: "assets/specials/SuA Launch Special - ULTRASOUND.webp",
            bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/"
        },
        {
            badge: "NECK SMOOTHING",
            title: "Byryzn™ HA Neck Refine",
            price: "$299",
            originalPrice: "$400",
            description: "Neck wrinkle eraser. Turn back the clock—without surgery or stiffness. Smooth lines and restore neck hydration.",
            image: "assets/specials/SuA Launch Special - Neck refine.webp",
            bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/"
        }
    ],

    // Brand Pillars (Footer / Value props featured at bottom of poster)
    brandPillars: [
        { icon: "award", title: "Korean Expertise", subtitle: "Seoul-proven protocols" },
        { icon: "stethoscope", title: "Physician Guided", subtitle: "Expert medical care" },
        { icon: "sparkles", title: "Customized Care", subtitle: "Tailored to your skin" },
        { icon: "heart-pulse", title: "Healthy Skin", subtitle: "Lasting natural glow" }
    ]
};
