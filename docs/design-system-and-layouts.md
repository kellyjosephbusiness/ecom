# Design System & Layout Reference — Senior-Living Directory

This is the build reference for the directory. The goal: every new page must look
**native to the existing NextMerce ("Pimjo") template**, because consistency comes
from reusing the existing Tailwind theme and components — not from a separate design
tool. There is **no Material UI / component library**; styling is **Tailwind CSS 3.3.3**
with the custom theme in `tailwind.config.ts`.

---

## 1. Design tokens (from `tailwind.config.ts`)

- **Font:** `font-euclid-circular-a` (Euclid Circular A), applied globally — no per-component font class needed.
- **Colors:**
  - `dark` `#1C274C` (primary text/headings) + `dark-2..5` (`#495270`, `#606882`, `#8D93A5`, `#BBBEC9`) for muted text.
  - `body` `#6C6F93` (default body copy).
  - `gray` DEFAULT `#F3F5F6`, `1` `#F9FAFB`, `2` `#F3F4F6` (page bg), `3` `#E5E7EB` (borders/tracks), `4` `#D1D5DB`, `5..7` darker.
  - `blue` `#3C50E0` — **the one brand/accent color** + `blue-dark` `#1C3FB7` (hover), `blue-light..light-5`.
  - Semantic `red` / `green` / `yellow` / `teal` / `orange` — status only, not decoration.
- **Type scale:** `text-heading-1..6`, `text-custom-*` (e.g. `custom-2` = 32/38, `custom-sm` = 14/22, `custom-xs` = 12/20). Never raw px for body/headings.
- **Spacing:** standard + half-steps — `7.5` = 1.875rem (the canonical gap), `12.5`, `15`, `17.5`, etc.
- **Shadows:** `shadow-1` (default card/panel), `shadow-2`, `shadow-3`, `shadow-input` (`inset 0 0 0 2px #3C50E0`, focus ring), `shadow-filter`, `shadow-breadcrumb`.
- **One off-token exception:** star glyphs use hardcoded amber `#FBB040` (baked into `StarRating`). Keep using `StarRating`; introduce no other off-token colors.

---

## 2. Existing layout DNA (verified against source)

### Global frame
- `src/app/(site)/layout.tsx` wraps every route: `<Header>` (fixed, `z-9999`) → `{children}` → `<ScrollToTop>` → `<Footer>` → `<Toaster position="top-center">`. **Toasts are global**, so `LeadForm` works on any page with no extra wiring.
- Because the header is `fixed`, the first element of every page must reserve space for it — either start with `<Breadcrumb>` (offset baked in) or a hero with big top padding.

### Container
- **Standard:** `max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0` (do **not** use the `container` class).
- **Article body only:** `max-w-[750px] w-full mx-auto px-4 sm:px-8 xl:px-0`.

### Sidebar + content split — `ShopWithSidebar` (the City-page analog)
- Outer: `<section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28 bg-[#f3f4f6]">` → `max-w-[1170px]` wrapper → `<div className="flex gap-7.5">`.
- **Sidebar:** `max-w-[310px] xl:max-w-[270px] w-full`; desktop `xl:static xl:translate-x-0`; below `xl` an off-canvas drawer (`.sidebar-content fixed z-9999 left-0 top-0 -translate-x-full` → `translate-x-0`) opened by a floating toggle.
- **Content column:** `xl:max-w-[870px] w-full` (270 + 30 gap + 870 = 1170).
- **Filter widget** (`CategoryDropdown`): white card `bg-white shadow-1 rounded-lg`, header row toggles `shadow-filter` + rotates chevron, body `flex flex-col gap-3`. Option = 16px checkbox (`w-4 h-4 border rounded`; selected `border-blue bg-blue` + white check) + count pill (`rounded-[30px] bg-gray-2 text-custom-xs px-2`; selected `bg-blue text-white`).
- **Content top bar:** `rounded-lg bg-white shadow-1 pl-3 pr-2.5 py-2.5 mb-6`, `flex items-center justify-between`; left = `CustomSelect` sort + "Showing N of M"; right = grid/list toggles.

### Card grids
- **3-up (with sidebar / blog):** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-9`.
- **4-up (full width):** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7.5 gap-y-9` (NewArrivals adds `xl:grid-cols-4`).
- **Blog/article grids:** use `gap-y-10 gap-x-7.5`.
- **Canonical `CommunityCard` grid:** 3-up next to a sidebar, 4-up full-width.

### Breadcrumb — `src/components/Common/Breadcrumb.tsx`
`<Breadcrumb title="..." pages={["a", "/", "b"]} />`. Renders the page **H1** (`font-semibold text-dark text-xl sm:text-2xl xl:text-custom-2`) + `Home /` trail (`text-custom-sm last:text-blue`). Wrapper bakes in the header offset (`pt-[209px] sm:pt-[155px] lg:pt-[95px] xl:pt-[165px]`), `border-t border-gray-3`, `shadow-breadcrumb`, `py-5 xl:py-10`.

### Section rhythm
- Standalone sections: `py-20`. Stacked/flowing (homepage): top-only `pt-15` / `pt-17.5`. Listing pages after a breadcrumb: `pb-20 pt-5 lg:pt-20 xl:pt-28`. Dividers: `pb-15 border-b border-gray-3`.
- The five directory components carry **no outer margin** — parent must space them (`space-y-7.5` / `space-y-12` / `mt-10`).

### Section heading (eyebrow + heading)
```
<div className="mb-10 flex items-center justify-between">
  <div>
    <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5"> [20px #3C50E0 icon] Eyebrow </span>
    <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">Heading</h2>
  </div>
  [right: "View All" button OR carousel arrows]
</div>
```
"View All" button: `inline-flex font-medium text-custom-sm py-2.5 px-7 rounded-md border-gray-3 border bg-gray-1 text-dark hover:bg-dark hover:text-white hover:border-transparent`.

### Panels & cards
- **Content panel / card:** `rounded-xl bg-white shadow-1` (+ `p-6`). All five directory components already follow this — don't wrap them in another card.
- **Sidebar widget:** `shadow-1 bg-white rounded-xl`, header `px-4 sm:px-6 py-4.5 border-b border-gray-3` (`font-medium text-lg text-dark`), body `p-4 sm:p-6`; separate widgets with `mt-7.5`.
- **Pagination:** `flex justify-center mt-15` → `bg-white shadow-1 rounded-md p-2` → `ul flex items-center`; active `bg-blue text-white`, others `hover:bg-blue hover:text-white`, cells `rounded-[3px] py-1.5 px-3.5`.

### Buttons & inputs
- **Primary:** `bg-blue text-white rounded-md hover:bg-blue-dark`.
- **Dark CTA (forms / LeadForm):** `bg-dark py-3 px-6 font-medium text-white rounded-lg hover:bg-blue`.
- **Secondary/outline:** `border border-gray-3 bg-gray-1 text-dark rounded-md hover:bg-dark hover:text-white hover:border-transparent`.
- **Tag/pill link:** `inline-flex border border-gray-3 bg-white py-2 px-4 rounded-md hover:bg-blue hover:border-blue hover:text-white`.
- **Input (directory standard):** `w-full rounded-lg border border-gray-3 bg-gray-1 py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20`.
- **Transition idiom:** `ease-out duration-200` (or `duration-200`) on every interactive element.

---

## 3. Per-template layouts

> All templates: open with `<Breadcrumb>` (or a header-offset hero); body in a `<section ... bg-gray-2>` + `max-w-[1170px]` wrapper; stack blocks with `space-y-*`/margins; body headings use the eyebrow + `text-heading-5` pattern; accent = `blue`.

### 1. City page — "Assisted Living in Austin, TX" (HIGHEST priority)
Model: `ShopWithSidebar` shell + directory blocks below the grid.
1. `<Breadcrumb title="Assisted Living in Austin, TX" pages={["assisted living", "/", "austin, tx"]} />` (+ optional count line).
2. Filter+results shell (ShopWithSidebar layout). Sidebar filter cards: **Care type** (checkboxes), **Price** (adapt `PriceDropdown` to monthly cost), **Rating** (checkbox rows rendering `StarRating showValue={false}`). Content column: sort top-bar + `CommunityCard` grid (3-up) + pagination.
3. `<CostComparison title="Starting costs in Austin" />` (`mt-10`).
4. `<FaqList title="Assisted living in Austin: common questions" />`.
5. `<LeadForm source="city-austin-tx" title="Talk to a local senior-living advisor" />` — pair FAQ + LeadForm in `grid gap-7.5 lg:grid-cols-2` (matches styleguide).
6. "Explore nearby" — chip clouds (tag-link style) of nearby cities + other care types.

### 2. Facility page — single community detail
Model: two-column content + **sticky** lead-form rail (`flex flex-col lg:flex-row gap-7.5`, main `lg:max-w-[770px]`, rail `lg:max-w-[370px]`).
1. `<Breadcrumb title="Sunny Meadows Assisted Living" ... />`.
2. Gallery/hero — primary image `rounded-xl overflow-hidden aspect-[16/9]` (+ optional `grid grid-cols-4 gap-4` thumb strip).
3. Two-column body (`<section ... py-20 bg-gray-2>`):
   - **Main** (`lg:max-w-[770px]`, panels `space-y-7.5`): key-facts bar (`grid grid-cols-2 sm:grid-cols-4 gap-4`: location, care types, starting price, rating w/ inline `StarRating`); Description (prose); Ratings detail (`StarRating` + subcategories); Amenities (`grid grid-cols-1 sm:grid-cols-2 gap-3` check list); `<CostComparison>` (this facility `highlight: true`); `<FaqList>`.
   - **Rail** (`lg:max-w-[370px]`): `<LeadForm facilityName="..." source="facility" />` in `<div className="lg:sticky lg:top-32">`. Stacks below main on mobile.
4. "Other communities near Austin" — full-width `CommunityCard` grid (4-up, cap 4).

### 3. State page — hub ("Senior Living in Texas")
Homepage-style stacked sections, full width.
1. `<Breadcrumb title="Senior Living in Texas" pages={["texas"]} />`.
2. Intro band (paragraph + stat chips).
3. "Cities in Texas" — link grid `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7.5` of city tiles (`rounded-xl bg-white shadow-1 p-5`, name `hover:text-blue` + count pill).
4. "Top-rated communities in Texas" + View All — `CommunityCard` 4-up (cap 8).
5. Browse-by-care-type chip cloud (optional).
6. `<LeadForm source="state-tx" />`.

### 4. Care-type hub — "Memory Care"
Definition-led stacked hub.
1. `<Breadcrumb title="Memory Care" pages={["care types", "/", "memory care"]} />`.
2. Definition/intro prose panel ("What is memory care?") + optional `HeroFeature`-style 4-up value props.
3. "Featured memory care communities" + View All — `CommunityCard` 4-up.
4. "Memory care by city" — city-tile link grid.
5. `<CostComparison title="Typical memory care starting costs" />` (optional).
6. `<FaqList>`.
7. `<LeadForm source="care-type-memory-care" />`.

### 5A. Article page — single post
Model: `BlogDetails` (narrow `max-w-[750px]`).
1. `<Breadcrumb title="..." pages={["resources", "/", "article"]} />`.
2. Article body (`<section ... py-20 bg-gray-2>` → `max-w-[750px]`): featured image `rounded-[10px]`, meta row, title (`text-xl lg:text-2xl xl:text-custom-4xl`), prose `mb-6`, lists `list-disc pl-6`, pull-quote card, tags + social row.
3. Inline `<LeadForm source="article" />`.
4. "Related articles" — full-width `BlogItem` grid (3-up, `gap-y-10 gap-x-7.5`).

### 5B. Article hub — listing
Model: `BlogGridWithSidebar` (or plain `BlogGrid`).
1. `<Breadcrumb title="Senior Living Resources" pages={["resources"]} />`.
2. `flex flex-col lg:flex-row gap-7.5`: main (`lg:max-w-[770px]`) 2-up `BlogItem` grid + pagination; sidebar (`lg:max-w-[370px]`) widgets (search, popular topics, compact `LeadForm`).

### 6. Homepage — directory
Homepage stack, top-only padding.
1. **Hero w/ search** — adapt `Home/Hero` (`bg-[#E5EAF4]`, big top padding); value-prop H1 + city/ZIP + care-type search built from the input style + `bg-blue` submit.
2. **Value props** — reuse `HeroFeature` (4-up).
3. **Browse by care type** — Categories carousel or `grid ... lg:grid-cols-6` of tiles.
4. **Find care by location** — state/city tile grid.
5. **Featured communities** — `CommunityCard` `... lg:grid-cols-3 xl:grid-cols-4` (cap 8).
6. **Promo/CTA banner** — reuse `PromoBanner`.
7. **Resources teaser** — `BlogItem` 3-up (cap 3).
8. **Newsletter / lead band** — reuse `Common/Newsletter` or a full-width `LeadForm`.

---

## 4. Consistency checklist (rules for any new page)

1. **Container:** `max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0` (article body `max-w-[750px]`). Never the `container` class.
2. **Header offset:** start with `<Breadcrumb>` or a hero with `pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5`; sticky rails use `lg:top-32`.
3. **Card grid:** `CommunityCard` → 3-up w/ sidebar, 4-up full-width (`gap-x-7.5 gap-y-9`); article grids `gap-y-10 gap-x-7.5`.
4. **Sidebar split:** `flex gap-7.5`; sidebar `xl:max-w-[270px]` (filters) / `lg:max-w-[370px]` (widgets); content `xl:max-w-[870px]` / `lg:max-w-[770px]`.
5. **Section padding:** standalone `py-20`; flowing top-only (`pt-15`/`pt-17.5`); listing after breadcrumb `pb-20 pt-5 lg:pt-20 xl:pt-28`; dividers `pb-15 border-b border-gray-3`.
6. **Section headings:** eyebrow (`flex items-center gap-2.5 font-medium text-dark mb-1.5` + 20px `#3C50E0` icon) over `font-semibold text-xl xl:text-heading-5 text-dark` in a `mb-10 flex items-center justify-between` row.
7. **Panels:** white blocks `rounded-xl bg-white shadow-1` (+`p-6`); sidebar widgets add a `border-b border-gray-3` header; don't double-wrap the directory components.
8. **Stacked-block spacing:** parent supplies `space-y-7.5`/`space-y-12`/`mt-10` (components have no margin).
9. **Color:** text `dark`; muted `body`/`dark-4`; surfaces `white` on `gray-2`; borders/tracks `gray-3`.
10. **Accent = `blue` `#3C50E0`** (links, active, focus, bars, Featured badge, selected pills); hover `blue-dark`. Stars are the sole `#FBB040` exception via `StarRating`.
11. **Shadows:** `shadow-1` default; `shadow-filter` open filters; `shadow-input` focus; `shadow-breadcrumb` only in Breadcrumb.
12. **Buttons:** primary `bg-blue ... hover:bg-blue-dark`; dark CTA `bg-dark ... rounded-lg hover:bg-blue`; outline `border-gray-3 bg-gray-1 ... hover:bg-dark hover:text-white`; tag `border-gray-3 bg-white ... hover:bg-blue hover:text-white`.
13. **Inputs:** `rounded-lg border border-gray-3 bg-gray-1 py-3 px-5 outline-none focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20`.
14. **Radius:** panels `rounded-xl`; buttons/inputs/banners `rounded-md`/`rounded-lg`; pills/badges `rounded-full`/`rounded-[30px]`; pagination `rounded-[3px]`.
15. **Font:** `font-euclid-circular-a` (global); type via `text-heading-*`/`text-custom-*`.
16. **Transitions:** `ease-out duration-200` on every interactive element.
17. **Lead capture:** reuse `LeadForm` (posts `/api/leads`, toasts global); vary `source`/`title`/`facilityName`.
18. **Route shape:** thin route file (`metadata`, optional caching, returns `<main><Template/></main>`); interactive pieces stay `"use client"`; templates resolve Sanity docs into `directory.ts` prop shapes (`CommunityCardData`, `FaqItem`, `CostComparisonRow`, `RatingCategory`).

---

## 5. How we hand off design direction (workflow)

We are **not** using Figma. For a non-designer on a custom-Tailwind codebase, the most
effective, lowest-effort workflow is:

1. **Reference screenshot** of a page you like (a competitor or any site whose *layout* you like).
2. **A few plain-English notes** (or arrows on the screenshot): what to keep, what to drop, what's dynamic, what matters most.
3. **One line on data/must-haves** (e.g. "must have a lead form, show starting price").
4. I **build it on `/styleguide`** with sample data, using the tokens/components above, and screenshot it back.
5. You react in plain English; I iterate (2–3 quick rounds).
6. Once approved, I wire it to the real route with live Sanity data.

Fidelity needed is **low** — structure and priority matter; exact colors/spacing come from
the theme automatically. Reserve rough wireframes (Excalidraw / sketch / ASCII) for
genuinely novel layouts with no good reference. Skip Figma/v0/Lovable: they emit their own
styling that would have to be re-translated onto our tokens, reintroducing inconsistency.
