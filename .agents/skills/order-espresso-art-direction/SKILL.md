---
name: order-espresso-art-direction
description: Use when designing, implementing, or reviewing ORDER ESPRESSO website UI, especially after-hours ambient mode, lighting, color, imagery, or layout changes.
---

# ORDER ESPRESSO Art Direction

## Core Direction

Express two states of the same real store: calm daylight while open, and residual light after closing.
The memorable after-hours image is a dim blue-black room shaped by indirect service light rather than decorative spotlights.

## Visual Contract

| State       | Room                               | Light                                                                                                              | Content surfaces                                       |
| ----------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| Open        | Warm cream paper and logo navy     | Soft daylight from the source photography                                                                          | Quiet, flat, editorial                                 |
| After hours | Cool blue-black with visible depth | Indirect neutral light, a localized Edison-orange mirror ring, faint cool entry spill, and a narrow low reflection | Photos and key information read as illuminated islands |

Inspect `public/images/hero-interior.webp` before changing Hero lighting.
Use the owner's actual after-hours reference photography when it is supplied.
Translate its light signature to the existing Hero crop: ceiling and back-of-house light remain neutral, entry spill can be slightly cool, and reflected floor or counter light stays low and narrow.
When the round mirror ring is visible in the Hero crop, render its retained light as a localized Edison-orange source rather than tinting the whole room warm.
Match the ring center and radius to the source image, mask the tight ring and halo behind the pendant outline, close the occlusion path outside the visible crop to prevent wedge artifacts, and keep the broad low-opacity spill outside that mask so it can illuminate the nearby wall and pendant.
When the retained fixture is not visible in the Hero crop, show its reflected plane or edge instead of inventing a glowing bulb.
Keep food photography appetizing; frame it as lit display content instead of applying one dark filter to every image.

## Implementation Boundaries

- Build the atmosphere from tokens and small CSS layers in the existing Tailwind and `app/globals.css` system.
- Preserve the information architecture, Korean copy, logo, ambient scheduling, page-local manual preview, keyboard behavior, focus visibility, and reduced-motion behavior.
- Start every page load in `auto`; footer selections never persist across reloads.
- Treat `open` and `after-hours` as store states, not generic light and dark themes.
- Use a state-neutral alt description when one image represents both states.
- Keep the ambient control visually subordinate and describe it as store lighting.

## Verification

Compare `open` and `after-hours` at desktop and mobile widths.
Walk Hero, Menu, Gallery, Reviews, and Visit; verify loaded images, readable text, keyboard focus, normal motion, reduced motion, and browser console output.
Run the repository test, lint, and build commands after implementation.

## Common Mistakes

| Mistake                                                           | Correction                                                                                              |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| “Midnight espresso bar” with generic brass or gold                | Derive color and light placement from this store's actual reference photography                         |
| Global palette swap plus `brightness()` as the complete treatment | Use store-state tokens as a base, then compose darkness and localized residual light as separate layers |
| Symmetric warm circles in the upper corners                       | Use neutral service light, cool entry spill, and a low reflected pool                                   |
| Lighting an unlit visible fixture                                 | Show the reflected surface when the retained fixture is outside the crop                                |
| Closing an occlusion path across a glowing fixture                | Close the path outside the visible crop so only the real foreground silhouette clips the light          |
| Darkening every photograph                                        | Preserve food color and use framing to imply display lighting                                           |
