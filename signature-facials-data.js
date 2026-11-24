/**
 * SUA Glow - Signature Facials Menu & Estimator Data
 * --------------------------------------------------
 * Single source of truth for the Signature Facials interactive menu:
 * - 3 Core Signature Facials ($249 / $349 / $499)
 * - 3 Optional Enhancement Tiers ($49 Masks / $99 Glow / $249 Needle-Free SuA Exclusive Add-Ons)
 */

const SIGNATURE_FACIALS_MENU = {
    bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/",
    membershipUrl: "memberships.html",
    facials: [
        {
            id: "k-beauty-signature",
            name: "K-Beauty Signature",
            duration: "60 Minutes",
            durationMinutes: 60,
            areas: "Face",
            price: 249,
            featured: false,
            tagline: "Foundational Korean glass-skin cleanse, gentle exfoliation, and deep hydration ritual.",
            membershipNote: "Available for $199/mo with Glass Skin Essential Membership (save $50/visit)"
        },
        {
            id: "k-beauty-barrier-glow",
            name: "K-Beauty Barrier Glow",
            duration: "90 Minutes",
            durationMinutes: 90,
            areas: "Face & Barrier Repair",
            price: 349,
            featured: false,
            tagline: "Extended Korean barrier-restoring ritual with layered clinical hydration and luminous glow finish.",
            membershipNote: "Available for $299/mo with Glass Skin Premium Membership (save $50/visit)"
        },
        {
            id: "k-beauty-glass-total-glow",
            name: "K-Beauty Glass Total Glow",
            duration: "100 Minutes",
            durationMinutes: 100,
            areas: "Face · Scalp · Neck · Shoulder · Décolleté",
            price: 499,
            featured: true,
            badge: "Signature Total Ritual",
            tagline: "Our flagship head-to-décolleté Korean luxury transformation—100 minutes of uninterrupted rejuvenation across face, scalp, neck, shoulder, and décolleté.",
            membershipNote: null
        }
    ],
    addOnGroups: [
        {
            id: "mask-enhancements",
            title: "Mask Enhancements",
            price: 49,
            subtitle: "Targeted Korean finishing masks layered into your facial",
            icon: "smile",
            items: [
                { id: "mask-modeling", name: "Modeling Mask", icon: "sparkles" },
                { id: "mask-rejuran", name: "Rejuran Mask", icon: "shield-check" },
                { id: "mask-exosome", name: "Exosome Mask", icon: "orbit" },
                { id: "mask-collagen", name: "Collagen Mask", icon: "layers" },
                { id: "mask-brightening", name: "Brightening Mask", icon: "sun" }
            ]
        },
        {
            id: "glow-enhancements",
            title: "Glow Enhancements",
            price: 99,
            subtitle: "Elevated resurfacing and expanded treatment zones",
            icon: "sparkles",
            items: [
                { id: "glow-pla-peel", name: "PLA Peel", icon: "flask-conical" },
                { id: "glow-scalp-hair", name: "Scalp & Hair Glow", icon: "wind" },
                { id: "glow-neck-decollete", name: "Neck, Shoulder & Décolleté Glow", icon: "heart-handshake" }
            ]
        },
        {
            id: "sua-exclusive-addons",
            title: "SuA Exclusive Add-Ons",
            price: 249,
            subtitle: "Delivered via needle-free infusion.",
            isNeedleFree: true,
            icon: "droplets",
            items: [
                { id: "excl-rejuran-booster", name: "Rejuran Skin Booster", icon: "dna" },
                { id: "excl-rejuran-toneup", name: "Rejuran Tone-Up", icon: "sparkle" },
                { id: "excl-exosome", name: "Exosome", icon: "atom" },
                { id: "excl-hyaluronic-acid", name: "Hyaluronic Acid", icon: "droplet" },
                { id: "excl-glutathione", name: "Glutathione", icon: "droplets" },
                { id: "excl-nad-plus", name: "NAD+", icon: "infinity" },
                { id: "excl-wiqo", name: "Wiqo SkinBooster", icon: "waves" }
            ]
        }
    ]
};

if (typeof window !== 'undefined') {
    window.SIGNATURE_FACIALS_MENU = SIGNATURE_FACIALS_MENU;
}
