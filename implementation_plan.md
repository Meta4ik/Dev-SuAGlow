# Recreate Tone-Up Facial Hero Section to Match LDM Style

Recreate the hero section of the Korean Glass Skin Tone-Up Facial page ([tone-up-facial.html](file:///Users/mw/Sites/SuAGlow/dev-site/tone-up-facial.html)) to use the layout, theme, and graphic collage style of the LDM page ([ldm-water-drop-lifting.html](file:///Users/mw/Sites/SuAGlow/dev-site/ldm-water-drop-lifting.html)), incorporating the user's provided content.

## Proposed Changes

### Tone-Up Page Component

#### [MODIFY] [tone-up-facial.html](file:///Users/mw/Sites/SuAGlow/dev-site/tone-up-facial.html)

- Replace the entire existing hero section (lines 28–201) with the LDM-style hero section.
- Apply the user-specified content:
  - **Badge**: `K-BEAUTY • BRIGHTENING • RADIANCE`
  - **H1**: `Korean Glass Skin Tone-Up Facial` (with `Tone-Up Facial` highlighted in warm gold `#AA987C`)
  - **Subheading**: `Brighter. Luminous. Naturally Radiant.`
  - **Quote Accent**: `K-Beauty doesn't cover dull skin. It brings the glow back.`
  - **Body Description**: `At SuA Glow in Carrollton, near Dallas, our Korean-inspired Tone-Up Facial is designed around one of K-Beauty's most recognizable goals: Healthy-looking skin that glows in natural light.`
- Use the **Rejuran Product Card** and **korean_woman_tone_up_booster.png** in the graphic collage on the right side.

## Verification Plan

### Manual Verification
- View the modified [tone-up-facial.html](file:///Users/mw/Sites/SuAGlow/dev-site/tone-up-facial.html) file locally using browser tools to verify that:
  - Layout is fully responsive and looks premium.
  - Image paths are valid and load correctly.
  - Animations (spinning badge, float effect, parallax transition if any) operate correctly.
