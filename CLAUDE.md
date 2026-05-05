You are a senior Next.js + Framer Motion developer and UI/UX designer.

Project: Petroleum supply company website (land, mining, marine)

IMPORTANT GOAL:
The user must visually understand (without reading) that we supply:
- Land (stations)
- Mining
- Marine (bunkering)

---

## 1. ABOUT SECTION – SCROLL ANIMATION STORY

When the user scrolls into the About section:

Create a motion-based visual storytelling using these images from /public:
- station.jpg (land)
- minier.jpg / minierr.jpg (mining)
- soute.jpg / soutee.jpg (marine)

### Animation concept:

- Use a circular / trigonometric layout (based on sine/cosine positions)
- Images should be positioned around an invisible circle
- As the user scrolls:
  - Images appear progressively
  - They slightly move along a circular path
  - Smooth fade-in + scale-up

### Layout behavior:

Step 1:
- Station image appears first (center-left)

Step 2:
- Mining image appears (top-right)

Step 3:
- Marine image appears (bottom-right)

Then:
- All 3 remain visible in a triangular/circular composition

👉 The composition must feel like:
"3 sectors connected in one system"

---

## 2. TRIGONOMETRIC POSITIONING (IMPORTANT)

Use a circular positioning logic:

Example:
- x = radius * cos(angle)
- y = radius * sin(angle)

Angles:
- Station → ~180°
- Mining → ~60°
- Marine → ~300°

Use Framer Motion transforms (translate)

---

## 3. TEXT UPDATE (GLOBAL)

Update ALL text content in the website:

Replace maritime-only messaging with:

"We provide petroleum products across land, mining, and marine sectors"

Ensure consistency in:
- Hero
- About
- Services
- CTA
- Mission / Vision

---

## 4. HERO SECTION UPDATE

- Remove Ivory Coast map from Hero
- Hero should show a rotating visual system:
  - cycling between:
    - station
    - mining
    - marine

- Smooth fade transition every few seconds

---

## 5. PORT SECTION (IVORY COAST MAP)

Create a dedicated section:

Component: PortCoverage.tsx

- Display `sev-ci.png`
- Add animated circular ring around Abidjan
- Only the ring rotates (not the map)
- Use absolute positioning

---

## 6. VISUAL BALANCE

IMPORTANT:
- Do NOT overuse marine visuals
- Maintain equal representation:
  - Land (33%)
  - Mining (33%)
  - Marine (33%)

---

## 7. UX IMPACT

Goal:
Even if user does NOT read text:
→ they must instantly understand:
"This company supplies fuel everywhere"

---

## 8. TECH REQUIREMENTS

- Use Framer Motion (scroll-based animations)
- Use `useScroll` or `whileInView`
- Keep performance optimized
- Mobile responsive

---

## 9. OPTIONAL ENHANCEMENT

- Add slight parallax effect
- Add smooth easing transitions

---

Return:
- Updated About.tsx
- New PortCoverage.tsx
- Updated Hero.tsx
- Clean reusable animation logic