/**
 * SUA Glow - December Specials Data Configuration
 * -----------------------------------------------
 * Dedicated configuration for the December 2026 campaign:
 * "The SUA Glow December Edit - Seoul Much Glow"
 *
 * Incorporates Kameron's Oct 29 V3 copy + title update and
 * finalized client meeting edits:
 * 1. Korean Gyeongrak Facial Massage (60-Min) — $299
 * 2. K-Beauty Signature Facial (60-Min One-Time Session) — $249
 *    (simplified per client request; additional tiers & add-ons discussed in-clinic)
 * 3. Korean Scalp & Hair Rejuvenation (3 Sessions · 90 Min Each) — $1,800 ($600/session)
 *    with new AI Scalp Analyzer (Step 1) + DEP Needle-Free Exosome Infusion x 3 (Step 4)
 */

const MONTHLY_SPECIALS_CONFIG_DECEMBER = {
    meta: {
        month: "December 2026",
        campaignLabel: "THE SUA GLOW DECEMBER EDIT",
        title: "SEOUL MUCH GLOW",
        titleImage: "assets/seoul-much-glow-title.png",
        subtitle: "COLD OUTSIDE. CHOK-CHOK INSIDE.",
        glossaryNote: "Chok-chok means soft, dewy, hydrated skin in Korean.",
        badge: "LIMITED TIME | DECEMBER HOLIDAY OFFERS",
        heroImage: "assets/december-seoul-much-glow-hero.jpg",
        heroText: "Baby, it's cold outside—but your glow doesn't have to be! This December, we're bringing a little Seoul to your holiday season with Korean facial sculpting, one-time signature K-Beauty facials, and scalp &amp; hair rejuvenation.<br><br>Because dry winter skin? <em>Aniyo</em> (No!) Not on our holiday wish list!",
        sectionTitle: "HOLIDAY GLOW EXCLUSIVES",
        sectionSubtitle: "Your season of K-Beauty love starts here.",
        bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/",
        validThrough: "Offers valid through December 31, 2026",
        footerPillars: "KOREAN-FOUNDED  •  PHYSICIAN-GUIDED  •  CARROLLTON, TX",
        terms: "*Offers valid through December 31, 2026. Consultation and clinical eligibility required. Exosome and scalp care protocols use advanced needle-free DEP infusion technology. Offers cannot be combined with other promotions. Individual results may vary."
    },

    featuredSteps: [
        {
            step: 1,
            badge: "SCULPT · DE-PUFF · HYDRATE",
            title: "KOREAN “GYEONG-RAK” FACIAL MASSAGE",
            subtitle: "60-MINUTE KOREAN FACIAL SCULPTING EXPERIENCE",
            hook: "Less puff. More sculpt. Very K-Beauty.",
            price: "$299",
            priceDetail: "60-MINUTE SESSION · LITTLE TO NO DOWNTIME",
            description: "Puffy face? Jawline playing hide-and-seek? <em>Aniyo</em> (No!) Not today!<br><br>Meet “Gyeong-Rak”—Korea's signature hands-on facial sculpting technique! At SUA Glow, our newest team members are licensed Korean estheticians trained in traditional Korean facial massage, combining targeted pressure points, rhythmic sculpting movements, and hydration-focused skincare for one beautifully refreshed, seriously pampered face.<br><br>The goal? Ease facial tension, soften the appearance of temporary puffiness, and leave your facial contours looking refreshed and beautifully defined.",
            stepsTitle: "YOUR 60-MINUTE “GYEONG-RAK” SESSION",
            stepItems: [
                {
                    num: "1",
                    title: "KOREAN PRESSURE-POINT MASSAGE",
                    detail: "Targeted hands-on techniques for deep facial muscle relaxation."
                },
                {
                    num: "2",
                    title: "FACIAL SCULPTING & DE-PUFFING",
                    detail: "Rhythmic contouring massage to refresh the appearance of facial contours."
                },
                {
                    num: "3",
                    title: "HYDRATION-FOCUSED FINISH",
                    detail: "Personalized K-Beauty skincare to leave your complexion feeling soft, comfortable, and refreshed."
                }
            ],
            image: "assets/december-promo-gyeongrak.jpg",
            ctaText: "BOOK YOUR 60-MINUTE “GYEONG-RAK” FACIAL",
            tags: [
                "FACIAL DE-PUFFING",
                "ENHANCED FACIAL CONTOURS",
                "FACIAL TENSION RELIEF",
                "SKIN HYDRATION & NOURISHMENT",
                "RADIANT-LOOKING SKIN"
            ],
            bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/"
        },
        {
            step: 2,
            badge: "CLEANSE · RESTORE · GLASS GLOW",
            title: "K-BEAUTY SIGNATURE FACIAL",
            subtitle: "60-MINUTE ONE-TIME K-BEAUTY FACIAL · NO MEMBERSHIP REQUIRED",
            hook: "Holiday events on the calendar? Give your skin the full Seoul glass-skin glow-up.",
            price: "$249",
            priceDetail: "60-MINUTE ONE-TIME SESSION · LITTLE TO NO DOWNTIME",
            description: "Dull, dry, or holiday-stressed skin? <em>Aniyo</em> (No!) Not on our watch! Enjoy our signature 60-minute Korean aesthetic facial as a one-time holiday session—no membership required.<br><br>Designed to deeply cleanse, hydrate, and restore a luminous <em>chok-chok</em> glow just in time for your holiday events. Your provider can also walk you through personalized in-clinic upgrades during your visit.",
            image: "assets/november-promo-skin-barrier.webp",
            ctaText: "BOOK YOUR K-BEAUTY SIGNATURE FACIAL",
            tags: [
                "GLASS SKIN GLOW",
                "DEEP HYDRATION",
                "SKIN BARRIER SUPPORT",
                "60-MINUTE RITUAL",
                "NO MEMBERSHIP REQUIRED"
            ],
            bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/"
        },
        {
            step: 3,
            badge: "NOURISH · REVIVE · REJUVENATE",
            title: "KOREAN SCALP & HAIR REJUVENATION",
            subtitle: "PHYSICIAN-GUIDED WOMEN'S HAIR & SCALP CARE",
            hook: "Your hair is changing. Your care should, too.",
            price: "$1,800",
            priceDetail: "3 PERSONALIZED SESSIONS · 90 MIN EACH ($600 / SESSION)",
            description: "Ponytail feeling thinner? More hair in your brush? Middle part getting a little too much attention?<br><br><em>Aniyo</em> (No!) We're not leaving your hair concerns to guesswork! Hormones, aging, stress, and lifestyle changes can all affect your hair. At SUA Glow, we combine physician-guided hair and scalp assessment with Korean wellness traditions and modern scalp-care technology.<br><br><strong class='font-heading text-[11px] uppercase tracking-[0.2em] text-[#0E2A1A]'>MEDICAL INSIGHT. KOREAN TECHNIQUES. MODERN SCALP CARE.</strong>",
            stepsTitle: "YOUR 5-STEP K-BEAUTY SCALP EXPERIENCE",
            stepItems: [
                {
                    num: "1",
                    title: "KNOW YOUR ROOTS",
                    detail: "Personalized scalp assessment featuring our new AI Scalp Analyzer to explore thinning, shedding, and medical hair-care options."
                },
                {
                    num: "2",
                    title: "WAKE UP YOUR SCALP",
                    detail: "Gentle microcurrent stimulation inspired by emerging hair-follicle research."
                },
                {
                    num: "3",
                    title: "AWAKEN YOUR GI!",
                    detail: "Korean pressure-point massage to relieve tension and relax your scalp. Gi means “life energy.”"
                },
                {
                    num: "4",
                    title: "SAY HELLO TO EXOSOMES!",
                    detail: "Advanced DEP Needle-Free Infusion (× 3 sessions) featuring exosomes, growth factors, peptides, and hydrating ingredients.*"
                },
                {
                    num: "5",
                    title: "LIGHT UP YOUR SCALP!",
                    detail: "LED red light therapy inspired by research into cellular energy and hair-follicle activity."
                }
            ],
            image: "assets/dep_scalp_woman_treatment.jpg",
            ctaText: "BOOK MY HAIR & SCALP CONSULTATION",
            tags: [
                "SCALP HYDRATION & NOURISHMENT",
                "SCALP STIMULATION",
                "HAIR & SCALP REVITALIZATION",
                "SCALP TENSION RELIEF",
                "HEALTHIER-LOOKING HAIR"
            ],
            bookingUrl: "https://suaglow.myaestheticrecord.com/online-booking/"
        }
    ],

    brandPillars: [
        { icon: "award", title: "KOREAN-FOUNDED", subtitle: "Authentic K-Beauty" },
        { icon: "stethoscope", title: "PHYSICIAN-GUIDED", subtitle: "Dr. Adam Yang, MD" },
        { icon: "sparkles", title: "NEEDLE-FREE TECH", subtitle: "DEP · LDM · AI Scalp" },
        { icon: "heart", title: "SEOUL-INSPIRED", subtitle: "Korean aesthetic approach" },
        { icon: "map-pin", title: "DALLAS K-BEAUTY", subtitle: "Carrollton · DFW" }
    ]
};

if (typeof window !== 'undefined') {
    window.MONTHLY_SPECIALS_CONFIG_DECEMBER = MONTHLY_SPECIALS_CONFIG_DECEMBER;
}
