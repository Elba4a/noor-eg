# NOOR — BUILD BRIEF v1.0
**Egyptian construction & finishing (تشطيبات) · Arabic-first animated landing page**
Merged from 6 dossiers. Fact-checker overrides applied throughout; every unverified URL dropped.

---

## 1. ART DIRECTION

**The style is named "Lit Blueprint."** A near-black editorial Swiss grid — hairline column rules, monospace metadata rails, 8/4 asymmetric splits, oversized Arabic display type carrying the page instead of photography — onto which a single physical light source (the logo's diamond) is cast, so that gold appears only where the light lands and every other surface stays charcoal and silver. The building is drawn, not photographed: the hero is a gold wire-frame tower that switches on line by line, and photography is demoted to evidence below the fold, labelled and dated. The whole page is one lighting argument: نور means light, so light is the interaction model, not a decoration.

**USE (2026 trends we commit to):** typography-as-architecture (T1) · editorial/Swiss visible grid with hairlines and mono rails (T2) · one sticky-pinned scroll-storytelling section (T3) · SVG grain overlay (T4) · dark base + one metallic accent as a stated brand position (T6) · clip-path image reveals with counter-scale (T7) · WebGL-free "light as atmosphere" done in CSS/SVG (T8's restraint, none of its cost) · same-document View Transitions and CSS scroll-driven animation as progressive enhancement (T9) · JSON-LD + semantic heading hierarchy (the sound half of T10) · 1px borders and mono labels as ~20% tactile-brutalist seasoning on an editorial base (T5, corrected: `normalisboring.es` is a luxury real-estate developer, and it is the single most on-brief reference in the entire dossier).

**REJECT as cliché — do not build these, do not let the client talk us into them:** bento grids (Creative Boom #9, SaaS-coded) · glassmorphism/liquid glass (#3) · gradients as a default, especially golden-hue gradients (#4) · custom cursors and cursor-following spotlights — **this kills the brand-motion dossier's B7 "noor follows you" idea, deliberately; it is on every 2026 avoid-list and conflicts with a11y tooling** · text scramble · scroll-driven number counters (the trust stat bar stays, but the numbers are **static** — no count-up; that device reads B2B SaaS and cheapens a luxury contractor) · full-page horizontal scroll as navigation · full-bleed video background · full-screen carousels · heavy parallax · AI-generated hero imagery (critical here — in this vertical the photography *is* the product) · desktop hamburger menu · Three.js / Spline (`runtime.js` alone is ~1.9MB uncompressed / ~544KB gzipped before the scene).

**Motion budget: 4 signature moments, total.** Hero ignition · one pinned portfolio narrative · before/after drag · clip-path section reveals. Everything else is CSS. Every source that criticised 2026 work criticised motion *volume*, not motion quality.

**Reference class (fact-checker-verified, HTTP 200):** `normalisboring.es` (SOTD Jul 23 2026, LaNegrita, luxury real-estate developer) · `zorge9.estate` (HM Jun 10 2026, Vide Infra — genuinely has the pinned lifestyle-schedule section) · `mersi-architecture.com` (SOTD Apr 10 2026) · `aircenter.space` (SOTD May 27 2026) · `oma.com` · `davidchipperfield.com` · `barozziveiga.com` · `by-kin.com`.
**Struck from the reference list by the fact-checker — do not open these expecting what the research claimed:** `houseofhoney.com` (2023 HM, California interior-design collective, warm/light palette — not dark luxury, not real estate), `vaulk.com` (French NBC bunkers, white/blue palette), `marvellco.com.au` (tile & stone supplier), `t-ko.space` (domain does not exist), `rozebunker.nl` (soft-drink brand), `counter-forms.com` (typography publication), `patrickmason.studio` (times out), `tillbergdesign.com` (cruise-ship interiors).

---

## 2. PALETTE

All ratios below are WCAG 2.x, independently recomputed by the fact-checker (34/35 confirmed to ±0.01; the one error is corrected here).

```css
:root{
  /* ── ANCHOR RAMP — page is DARKER than the logo, on purpose ── */
  --ink-900:#0B0F14;   /* page base. All sections default here.                */
  --ink-800:#101821;   /* raised surfaces: cards, package tiers, form fields   */
  --ink-700:#182029;   /* alternating section band                             */
  --slate-600:#2F3A45; /* LOGO DARK — logo lockup plate ONLY                   */
  --slate-500:#38434F; /* LOGO LIGHT — input fills, small plates ONLY          */
  --rule-500:#5A6878;  /* FUNCTIONAL borders, focus rings, input outlines
                          3.37:1 on ink-900 — clears 1.4.11 Non-text Contrast  */
  --rule-400:#4A5765;  /* DECORATIVE hairlines only. 2.60:1 — never functional */

  /* ── NEUTRAL TEXT ── */
  --silver:#C9D1D9;    /* body text on dark            12.45:1  ✓ AAA          */
  --muted:#8B97A4;     /* captions, mono meta rails     6.46:1  ✓ AA           */

  /* ── GOLD ── */
  --gold-300:#E8C777;  /* specular highlight, hairline mid-stop  11.78:1       */
  --gold-400:#D9AE52;  /* ★ CORE BRAND GOLD. The accessible gold for text
                          on dark: 9.27:1 on --ink-900 → AAA at every size.
                          This is the ONLY gold permitted as text on dark.     */
  --gold-500:#C69B3C;  /* pressed/active states          7.46:1 ✓ AAA normal   */
  --gold-600:#997624;  /* ⚠ FLOOR. Darkest stop allowed in any gradient that
                          fills text. 4.55:1 on ink-900.                       */
  --gold-700:#A77E33;  /* gradient ends on NON-text surfaces only   5.19:1     */
  --gold-ink:#6E5214;  /* gold as TEXT on cream. 6.32:1 on --cream.
                          ⚠ 2.64:1 on --ink-900 — NEVER on dark.               */

  /* ── LIGHT SECTIONS ── */
  --cream:#F3EEE7;     /* light band base (verified live on aman.com)          */
  --bone:#E8E4DC;      /* alternating light band                               */

  --gem:#FFFFFF;       /* RESERVED: the diamond, ray cores, specular only      */

  --dir:1;             /* RTL sign flip — see §8                               */
}
[dir="rtl"]{ --dir:-1; }
```

**Discipline rule:** `#FFFFFF` is a *material*, not a colour. It belongs to the gem, the ray cores, and specular highlights. All "white" text is `--silver` or `--cream`. This single rule does more for perceived luxury than any gradient trick.

**Gold-accent ratio rule — 75 / 20 / 5:**
- **75%** `--ink-900` / `--ink-800` — page, sections, nav, footer.
- **20%** neutrals — `--silver` body, `--cream` light bands, photography.
- **≤5% gold, measured in *pixels*, and never more than 3 gold occurrences per viewport.** If gold appears in a fourth place, delete one.

**Gold YES:** primary CTA (1px gold border + gold text; at most ONE gold-filled button per viewport) · the tower linework · the hairline rule under each section eyebrow · active nav underline · focus rings · the eyebrow/kicker label · list bullets and dividers · the beam.
**Gold NO:** body copy · H1 (use `--cream` and let the beam light it) · large filled panels · icon fills · backgrounds behind text · hover on everything · the footer · the stat numbers.

**Metallic mechanics (non-negotiable, four rules):**
1. Flat gold is the tell. Gold text on display headings uses the specular ramp below — dark edges, one **narrow (≤4%) warm-white** stop. `#F6EFD2`, never `#FFFFFF` in the ramp.
2. Gradient angle `100deg` / `105deg`. Never `90deg` or `180deg` — axis-aligned metal reads as a CSS gradient.
3. **The ramp's darkest stop must be ≥ `--gold-600` (#997624).** The dossier's `#6E5214` end is 2.64:1 on `#0B0F14` — it fails even the 3:1 large-text threshold, so "only use it above 24px" does **not** make it conformant. Clamp the ramp.
4. Hairlines beat fills. A 1px gold rule at 70% opacity carries more luxury signal than a filled gold button.

```css
.metal-gold{                 /* display headings ≥32px only, never body */
  color:var(--gold-400);     /* fallback FIRST — if background-clip fails,
                                text is solid gold, not invisible (WebKit) */
  background-image:linear-gradient(100deg,
    #997624 0%, #A77E33 18%, #D9AE52 38%,
    #F6EFD2 49%, #E8C777 53%, #C69B3C 74%, #997624 100%);
  -webkit-background-clip:text; background-clip:text;
  -webkit-text-fill-color:transparent;
  filter:drop-shadow(0 1px 0 rgba(0,0,0,.55))
         drop-shadow(0 0 18px rgba(217,174,82,.22));
}
@supports not (background-clip:text){ .metal-gold{ -webkit-text-fill-color:currentColor } }
@media (forced-colors:active){ .metal-gold{ -webkit-text-fill-color:currentColor; background:none; filter:none } }

.gold-rule{ height:1px; opacity:.7;
  background:linear-gradient(90deg,transparent,#A77E33 15%,#E8C777 50%,#A77E33 85%,transparent); }
```

**On the cream sections:** body text is `--ink-900` (16.65:1). Gold appears **only as rules and marks**, never as text — except `--gold-ink:#6E5214` (6.32:1) for a single accent word. `--gold-400` on cream is **1.80:1**. It is illegible. Do not reuse it there.

**Do not use `--slate-500:#38434F` as a page background.** On it, `#C69B3C` is 3.91:1 (fails AA) and `#A77E33` is 2.72:1 (fails 3:1). The logo's slate is a lockup plate; the page is near-black. If a plate is unavoidable, the darkest gold permitted as normal-size text on `#38434F` is `#D3A945` (4.57:1).

*(Note for anyone auditing the tokens: the ramps are not single-hue — slate saturation runs 12–35%, gold hue 38.8–42°. The contrast values are what matter and they are verified. Do not "fix" the hues without re-running contrast.)*

---

## 3. TYPE

**Chosen pairing — one superfamily plus one Egyptian display face.**

| Role | Family | Why |
|---|---|---|
| Arabic display | **Alexandria** 200/300 | Mohamed Gaber (Egyptian) × Julieta Ulanovsky. Variable 100–900. Geometric luxury without Montserrat/Poppins cheapness. |
| Arabic body | **IBM Plex Sans Arabic** 300/400/500/600 | Khajag Apelian + Wael Morcos + Bold Monday. Low contrast, rational, corporate-premium. Metric-matched to Plex Latin, so the bilingual pairing is free. |
| Latin body + display | **IBM Plex Sans** 300/400/500/600 | Same superfamily, zero mismatch. |
| Meta / rails / numerals | **IBM Plex Mono** 400/500 | The mono pairing is the 2026 tell. Project no. / year / compound / m² rails. |

**Rejected:** Cairo (#97, every Egyptian SME and government portal — instant $40-template read), Rubik (#28 globally, and it outranks Cairo 3.5× on the very popularity metric that condemns Cairo), Almarai (commissioned as a Saudi *dairy* brand font), Reem Kufi (saturated across mosque/Ramadan/halal branding), Baloo/Marhey (kids-app energy), Vazirmatn (Persian-first letterforms read off to Arabic readers).
*Deferred, not rejected:* **Fustat** (#548, Mohamed Gaber + Khaled Hosny, variable 200–800, named for Egypt's first Islamic capital) is the strongest heritage candidate and was missed entirely by the research. Swap Alexandria → Fustat only after independently confirming its `css2` embed returns 200; the URL below is verified as-is.

**Exact Google Fonts URL — verified HTTP 200, 3,892 bytes, this session:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alexandria:wght@200..700&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap">
```

Google Fonts emits per-script `@font-face` blocks automatically, so the Arabic woff2 downloads **only when Arabic codepoints are on the page** — the EN view costs ~0 KB extra. Never hand-write `unicode-range`. Ignore `&subset=arabic`; it does not filter the `css2` endpoint.

**The one gotcha that will bite:** IBM Plex Sans Arabic ships its own Latin. **Latin family must come first in the stack**, or Plex Arabic wins every Latin character and the digits differ between language versions.

```css
:root{
  --font-body:"IBM Plex Sans","IBM Plex Sans Arabic",system-ui,sans-serif;
  --font-display:"IBM Plex Sans","IBM Plex Sans Arabic",system-ui,sans-serif;
  --font-mono:"IBM Plex Mono",ui-monospace,monospace;

  --fs-display:clamp(2.75rem,10vw,8.5rem);
  --fs-h2:     clamp(2rem,5.5vw,4.5rem);
  --fs-h3:     clamp(1.375rem,2.6vw,2rem);
  --fs-lead:   clamp(1.125rem,1.8vw,1.5rem);
  --fs-body:   1rem;
  --fs-meta:   0.8125rem;

  --lh-display:1.05;  --lh-h2:1.1;  --lh-body:1.6;
  --ls-display:-0.03em; --ls-body:-0.011em; --ls-meta:0.08em;
  --w-strong:700;
}

/* ONE block flips the entire type system for Arabic */
:root:lang(ar), [dir="rtl"]{
  --font-display:"Alexandria","IBM Plex Sans Arabic",sans-serif;
  --fs-display:clamp(2.5rem,8.5vw,7.5rem);   /* Arabic display runs optically larger */
  --fs-h2:     clamp(1.875rem,5vw,4rem);
  --fs-body:   1.125rem;                      /* +12.5% — Arabic has no uppercase */
  --lh-display:1.30;                          /* NOT 1.05 — Arabic headlines collide */
  --lh-h2:     1.25;
  --lh-body:   1.80;                          /* Latin 1.6 is too tight for Arabic */
  --ls-display:0;                             /* ⚠ CRITICAL */
  --ls-body:   0;                             /* ⚠ CRITICAL */
  --w-strong:  600;                           /* Arabic 700 clogs at the joins */
}

body{ font-family:var(--font-body); font-size:var(--fs-body);
      line-height:var(--lh-body); letter-spacing:var(--ls-body);
      font-synthesis:none; }                  /* fake-bold destroys Arabic */
```

**Arabic-specific rules — the non-negotiables:**
- **`letter-spacing: 0`. Always.** Arabic is a cursive joining script; positive tracking inserts literal gaps where letters must connect, and Chrome visually breaks the join. Negative tracking is worse. Scope it **through the custom property**, never `letter-spacing:0 !important` — that would also kill tracking on legitimately-Latin `<span>`s nested inside Arabic copy (the mono meta rails live inside Arabic sections).
- Need airier Arabic display? The only correct levers are **lighter weight + larger line-height + `word-spacing`**. `word-spacing` is safe on Arabic.
- Line-height floors: body 1.7–1.9 (never below 1.5); headlines 1.25–1.4.
- `font-size` +10–20% vs the Latin equivalent. `font-synthesis:none`.
- `text-align:start`, never `right`. **Never `justify`** — classical Arabic justifies with kashida elongation, which no browser implements, so you get river gaps. `text-wrap:balance` on Arabic headings works well.
- `text-underline-offset:0.22em; text-decoration-skip-ink:auto;` — underlines collide with Arabic dots and descenders.
- **Never:** `text-transform` (no-op on Arabic but *will* uppercase embedded Latin words), `font-variant-caps:small-caps`, `hyphens:auto`, `word-break:break-all`, `font-variant-ligatures:none` (Arabic *requires* lam-alef ligatures).
- Punctuation: `،` U+060C, `؛` U+061B, `؟` U+061F. Not the Latin marks.
- **Numerals: Western 0–9 in both language versions.** Prices in EGP, phone/WhatsApp numbers, m², dates. Unambiguous for tap-to-call, no fallback risk, and consistent across AR/EN. Mixing the two systems is the worst outcome. No CSS property converts digits — do not attempt it.
- Wrap Latin/numeric runs inside Arabic sentences: `<bdi>+20 100 123 4567</bdi>`, `<span dir="ltr">NOOR</span>`. The bidi algorithm will otherwise reorder them.
- **Split-text: LINES or WORDS only. Never chars.** Splitting Arabic into characters severs the joins and produces gibberish. This overrides the trends dossier's "split-text char reveals are table stakes."

---

## 4. TECH STACK

Plain HTML/CSS/JS. No framework, no bundler, no Three.js, no Spline, no smooth-scroll library.

| Layer | Choice | Version | URL |
|---|---|---|---|
| Animation core | GSAP | **3.15.0** | `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.15.0/gsap.min.js` — verified 200, **72,927 B** |
| Scroll orchestration | ScrollTrigger | 3.15.0 | `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.15.0/ScrollTrigger.min.js` — verified 200, **44,575 B** |
| Text reveal | SplitText | 3.15.0 | `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.15.0/SplitText.min.js` — verified 200, **7,732 B** |

Total JS from CDN: **~125 KB uncompressed**, three files, no build step.

**Deliberately NOT shipped:**
- **Lenis and ScrollSmoother — neither.** Ship no smooth-scroll layer at all. It overrides OS wheel physics, stacks a second inertia curve on macOS trackpads, desyncs the scrollbar thumb and find-in-page, animates keyboard PageUp/Tab jumps, and costs a JS frame budget on low-end Android for zero functional gain. Egyptian mobile traffic is the majority of this audience. (If the client insists: Lenis 1.3.26, MIT, `respectReducedMotion:true` by default; drive its RAF from `gsap.ticker` and never also pass `autoRaf:true`. Pick one, never both.)
- **Three.js / Babylon / Spline.** The entire light effect is CSS + SVG. Zero WebGL.
- **Any page-transition library.** Single page; no need.
- `all.min.js` (333,067 B). Load the three files individually.

**Native CSS as progressive enhancement, never load-bearing:**
- `animation-timeline: view()/scroll()` — **85.43% global. Chrome/Edge 115, Safari 26.0 (Sept 2025), Firefox NOT SHIPPED** (behind `layout.css.scroll-driven-animations.enabled`, Nightly-only; caniuse projects FF156). MDN: *"limited availability… not Baseline."* Wrap in `@supports (animation-timeline: view())` **and** author the finished state as the default. Note the research's "Safari 18+" was off by eight major versions.
- `@view-transition { navigation: auto }` (cross-document) — 84.8%, **zero Firefox**. Same-document `document.startViewTransition()` — 90.2%, Firefox 144+. We are a single page: use same-document only, guarded with `document.startViewTransition?.()`.
- `IntersectionObserver` — **95.95%**. This is the reveal fallback for Firefox, and it is fine.
- `:dir()` — Baseline Widely Available **7 June 2026**. Safe.
- `@property` — Baseline 2024 (July 2024). Safe, required for the mask sweep.
- `mask-image` — Baseline Widely available since Dec 2023. Ship `-webkit-` and unprefixed.

**GSAP licence — as verified, stated plainly for legal review:**
GSAP is **free but NOT open source.** It ships under Webflow's proprietary **Standard "no charge" license**, effective **30 April 2025**. The npm `license` field reads verbatim: `Standard 'no charge' license: https://gsap.com/standard-license.` Webflow acquired GreenSock **15 Oct 2024**; version **3.13** (Apr 2025) made the entire toolset free — SplitText, MorphSVG, DrawSVG, ScrollTrigger, ScrollSmoother, InertiaPlugin — **commercial use included, no paid tier exists, Club GreenSock is dead**, private registry retired. SplitText was rewritten "half the size" with `aria-label`/`aria-hidden` handling built in.
There are **three** enumerated restrictions: (a) prohibited uses without written consent — chiefly embedding GSAP in a no-code visual animation builder that competes with Webflow; (b) reverse-engineering GSAP to build a competing animation tool; (c) removing proprietary notices or branding. **AI-generated code using GSAP is explicitly permitted** ("Absolutely! AI-generated code is not a 'Prohibited Use'."). Webflow retains all IP and can terminate for non-compliance. None of this touches a client landing page. Contrast with Lenis (MIT) and motion (MIT) if procurement asks.

**Fonts:** all recommended families are **SIL OFL 1.1** — commercial use and self-hosting permitted.

---

## 5. SECTION-BY-SECTION SPEC

Page is `<html lang="ar" dir="rtl">`. Arabic is the default at root; `/en/` is a second static file (see §8). Sections are numbered top-to-bottom; **build every ScrollTrigger in this DOM order** — GSAP computes pin offsets sequentially and out-of-order creation produces wrong positions.

Ordering logic inherited from the strongest verified converter in this market (`creativedesignegypt.com`): trust numbers immediately after hero, **pricing before process**, before/after immediately after pricing (it justifies the number just read), FAQ late as objection-handling.

---

### S0 — Sticky header
**Purpose:** keep the phone and WhatsApp above the fold at every scroll position.
**Content:** logo lockup (right, RTL) · visible nav `الخدمات · الباقات · أعمالنا · مراحل العمل · الضمانات · تواصل` · `EN` toggle · `<bdi>01X XXXX XXXX</bdi>` · gold-outline CTA `واتساب`.
**Layout:** full-bleed, 72px tall, `backdrop-filter` **forbidden** (glassmorphism, and 15–30% FPS cost on mid-tier Android is the folk number but the perf hit is real). Solid `--ink-900` at 96% opacity, 1px `--rule-400` bottom hairline. Visible desktop nav — no hamburger above 900px.
**Animation:** none on load. On scroll past 80px, the bottom hairline fades from `--rule-400` to a `.gold-rule` gradient. **CSS only**, `animation-timeline: scroll(root block)` behind `@supports`, with an IntersectionObserver sentinel as the Firefox fallback.

---

### S1 — HERO (see §6 for the full timeline)
**Purpose:** establish نور = light, establish premium register, get one thumb to the calculator.
**Content:**
- Eyebrow (mono, `--gold-400`, above a `.gold-rule`): `نُور · عقارات · مقاولات · تشطيبات`
- H1 (`--cream`, `--fs-display`): **`من عَظْم إلى بيت.`**
- Lead (`--silver`, `--fs-lead`, max 52ch): `تصميم وتنفيذ متكامل بعقد واضح، وجدول تسليم مكتوب، وضمان بالسنوات. القاهرة الجديدة · الشيخ زايد · العاصمة الإدارية.`
- Primary CTA (gold fill, the only one on this viewport): `احسب تكلفة تشطيب شقتك`
- Secondary CTA (1px `--rule-500`, `--silver` text): `شاهد أعمالنا`
- Mono scroll cue, inline-start margin: `٢٠٢٦ — القاهرة` *(use Western digits: `2026 — القاهرة`)*
**Layout:** 100svh (not `vh` — mobile address bar). 12-col grid, type occupies cols 1–7 from the inline start; the SVG tower occupies cols 9–12, ~62vh tall, vertically centred. Visible 1px column rules at 12% opacity. **No hero photograph.** This is the differentiator and it also removes the entire LCP-image problem — the LCP element is text.
**Animation:** the signature moment. GSAP master timeline, `SplitText type:"lines", mask:"lines"` on the H1, `stroke-dashoffset` cascade on the tower, pre-painted conic ray fan rotating via compositor-only `rotate`. Full spec in §6.

---

### S2 — Trust strip
**Purpose:** four hard numbers within one scroll of the hero. This is where the strong sites put them and where the weak ones don't.
**Content (four cells — every value is a CLIENT INPUT, see §9):**
`خبرة هندسية منذ [سنة التأسيس]` · `[N] مشروعًا موثّقًا بالصور — وليست رندرات` · `[X.X] على Google من [N] مراجعة` · `تسليم متعاقد عليه بمدة وغرامة تأخير`
The "documented with photos, not renders" line is doing real work: Egyptian buyers are actively suspicious of renders-as-portfolio, and saying it out loud is a differentiator.
**Layout:** 4-up desktop / 2×2 mobile, separated by 1px `--rule-400` vertical hairlines. Numbers in `--font-display` at `--fs-h3`, `--cream`. Labels in `--font-mono`, `--fs-meta`, `--muted`.
**Animation:** **static numbers — no counter.** Cells fade+rise 24px on entry, stagger 0.08s. CSS `animation-timeline: view(); animation-range: entry 10% cover 30%;` behind `@supports`, IntersectionObserver + class toggle as fallback. No GSAP here.

---

### S3 — Services
**Purpose:** answer "what exactly do you do" in six tiles.
**Content:** `تشطيب تسليم مفتاح` · `تصميم داخلي و3D` · `أعمال جبس وإضاءة مخفية` · `مطابخ ودريسنج` · `حمامات وسباكة` · `كهرباء وأنظمة ذكية`. Each: one line of body copy + a mono spec rail (`م² · مدة · بند`).
**Layout:** 3×2 grid. **Not a bento** — uniform cells, 1px `--rule-400` borders, `border-radius:0`, **zero drop shadows**. Tactile-brutalist seasoning on an editorial base.
**Animation:** clip-path reveal on each tile's thumbnail — `clip-path: inset(0 0 0 100%)` → `inset(0 0 0 0)` (RTL: opens from the inline start), 1.0s `cubic-bezier(0.16,1,0.3,1)`, with the image inside scaling `1.15 → 1` on the same timeline. **The counter-scale is what separates good from cheap.** Stagger 0.1s. GSAP ScrollTrigger, `once:true`.

---

### S4 — Packages + live calculator  ← **placed BEFORE process, deliberately**
**Purpose:** the #1 search intent in this market is `سعر المتر`. Visitors bounce hunting for it. Make them find it, and make the calculator the primary conversion asset.
**Content:** five tiers — `أساسي · ممتاز · لوكس · سوبر لوكس · VIP` — each with: per-m² band (**CLIENT INPUT**), named material escalation (local porcelain → Italian imported porcelain → Turkish/Spanish natural marble → Carrara + full home automation → rare materials), and a **warranty ladder that escalates with tier** (`سنة → سنتان → 3 → 4 → 5 سنوات`).
Calculator: `نوع المشروع` (شقة / فيلا / إداري / تجاري) × `المساحة بالمتر` × `المستوى` → `التقدير المبدئي` + a `اطلب مقايسة دقيقة` button that opens WhatsApp pre-filled with the inputs.
Below: `طريقة السداد — 30% عند التعاقد · 30% منتصف التنفيذ · 30% قبل التسليم · 10% بعد المعاينة النهائية`. The 10% retention after final inspection is a trust device, not a payment term. Say it explicitly.
**Layout:** 5 columns desktop, horizontal `scroll-snap` strip on mobile (**native CSS scroll-snap, zero JS — the browser handles RTL for free**). Calculator is a 4/8 split panel on `--ink-800`.
**Animation:** none on the tiers beyond a fade+rise. The calculator's estimate updates with a 240ms `opacity` crossfade on the number — no odometer, no counting. Motion here would read as dishonest theatre around a price.
**Do not animate the price.** This is the one place where restraint is the conversion argument.

---

### S5 — Before / After
**Purpose:** in a market that sells *transformation of a bare concrete shell*, this is the money shot — and almost nobody in Egypt uses it.
**Content:** `قبل وبعد — نفس الزاوية، نفس العدسة.` Three pairs, each labelled with compound + area + duration in mono: `مدينتي · 145م² · 96 يومًا`.
**Layout:** full-bleed 3:2 comparison, `<input type="range">` as the handle — **native input, keyboard-accessible, zero library.** Both images at **identical dimensions**; mismatched ratios kill the comparison.
**Animation:** the "after" layer is revealed by `clip-path: inset(0 0 0 var(--x))` driven by the range input's value. Handle is a 1px gold rule with a 40px hit target. On section entry the handle animates once from 100% → 55% over 900ms `expo.out` to demonstrate the affordance, then hands control to the user. GSAP, `once:true`.
**Content dependency:** these must be real NOOR photographs. Stock cannot be used here — see §7.

---

### S6 — Portfolio  ← **THE PINNED SCROLL SECTION** (1 of 4 motion moments)
**Purpose:** the one memorable scroll beat, and the proof surface.
**Content:** `أعمالنا` + filter chips `الكل · شقق · فيلات · إداري · تجاري`. Six projects, each with a **location label** — `فيلا · ماونتن فيو iCity` beats any photograph, because it tells a buyer *"they've worked in my compound."*
**Layout:** `position: sticky` image column (inline-end) pinned while text beats advance beside it in the inline-start column. **Scroll budget: 240vh maximum** — past ~300vh users bail.
**Animation:** GSAP `ScrollTrigger { pin: true, scrub: 1, anticipatePin: 1, invalidateOnRefresh: true }`. Images cross-fade with `autoAlpha` + a 4% `scale` counter-move; text beats translate `y: 40 → 0`. **Animate the children, never the pinned element itself** — transforming the pinned element fights the pin transform.
**Mandatory escape hatches:** nav stays reachable; a `تخطَّ` skip link jumps past the pinned block; `gsap.matchMedia()` disables the pin entirely under `(max-width: 767px)` and under `(prefers-reduced-motion: reduce)`, falling back to a plain stacked list. Pinned/scrubbed sections are worst-case on mobile Safari, and mobile CWV pass rate is **42%** vs 63% desktop.

---

### S7 — Compound / developer wall
**Purpose:** the single strongest trust signal available in Egypt.
**Content:** `اشتغلنا في كمبوندك.` + a grid of compound/developer names the client can actually evidence — بالم هيلز · ماونتن فيو · مدينتي · هايد بارك · سوديك · بيفرلي هيلز · التجمع الخامس · الشيخ زايد · العلمين الجديدة.
**Layout:** wordmarks set in `--font-display` 300 at `--muted`, 4–6 per row, 1px `--rule-400` grid. **Text, not logo images** — avoids trademark exposure and looks more editorial than a logo soup.
**Animation:** a single `mask-image` light sweep passes across the wall once on entry, left→right in LTR / right→left in RTL, 1.4s. Static mask + `translateX` on the masked wrapper — compositor-only. `@property --sweep` variant is fine here (one element), but the translate version is cheaper.

---

### S8 — Process, six steps
**Purpose:** de-risk. Six, not seventeen — the weak sites run 17-step timelines nobody reads.
**Content:** `معاينة ومقايسة` → `تصميم 2D و3D` → `عقد وجدول بنود` → `تنفيذ تحت إشراف مهندس` → `تسليم ومعاينة نهائية` → `ضمان ومتابعة`. Each step carries a **stated duration** in mono: `٢–٤ أيام` → `2–4 أيام` (Western digits).
**Layout:** a single 1px gold rule running the full inline width, with six nodes on it. Numbers in mono above, labels below. Vertical stack on mobile.
**Animation:** the connecting rule draws in via `transform: scaleX(0 → 1)`, `transform-origin: 100% 50%` in RTL (flipped by `--dir`), scrubbed to scroll. Nodes pop `scale(0 → 1)` as the rule passes each one. `stroke-dashoffset` on an SVG line is the alternative and is equally cheap. GSAP scrub, or CSS `animation-timeline: view()` behind `@supports`.

---

### S9 — Guarantees
**Purpose:** convert vague `ضمان` into a checkable spec. Vague warranty = no warranty.
**Content:** four cards — `الضمان: [N] سنوات حسب الباقة` · `مدة التسليم: شقق 60–120 يومًا · فيلات 120–240 · تجاري 30–90` · `غرامة تأخير منصوص عليها في العقد` · `الخامات المتفق عليها بالاسم والماركة في جدول البنود`.
Delay-penalty clauses are almost never advertised in this market and are a genuine differentiator — **but only if the client actually has one and will publish the rate.**
**Layout:** 4-up, `--ink-800` cards, 1px `--rule-500` (functional border, must clear 3:1).
**Animation:** fade+rise only. This section must read as a contract, not a showcase.

---

### S10 — Testimonials
**Content:** four named reviews with **location + project type**: `م. أحمد س. — فيلا، ماونتن فيو هايد بارك`. Star row in `--gold-400`.
**Layout:** 2×2. Body in `--silver`, attribution in mono `--muted`.
**Animation:** SplitText `type:"lines", mask:"lines"` on the lead quote only, `yPercent: 110 → 0`, stagger 0.08, `once:true`. One quote, not four — motion volume is the thing every 2026 critic attacked.

---

### S11 — "قبل أن تقرر — خمسة أسئلة"  ← the actual objection engine
**Purpose:** this, not the FAQ, is where deals are won. It was the single best thing on the strongest verified competitor and the research missed it.
**Content:**
1. `هل يرتفع السعر أثناء التنفيذ؟`
2. `ولو التصميم مش عاجبني؟`
3. `ولو اتأخرتوا عن الميعاد؟`
4. `هل الخامات هي المتفق عليها فعلًا؟`
5. `ليه أدفع لمكتب بدل مقاول؟`
Then, immediately below and in the same weight — `ولمن لا نناسب؟` (we are not for: lowest-price-only buyers, small partial works, anyone wanting to start without a design). Negative qualification on a landing page is rare, credible, and filters bad leads.
**Layout:** 5/7 asymmetric split. Questions in `--font-display` 300 at `--fs-h3`; answers in body. Native `<details>`/`<summary>` — **zero JS accordion.**
**Animation:** none beyond the browser's disclosure. Deliberate.

---

### S12 — FAQ
**Content:** seven items, all objection-handling, not SEO: cost, timeline, is the consultation free, which areas, turnkey scope, how the calculator works, modern vs neo-classic.
**Layout / animation:** same `<details>` pattern. No motion.

---

### S13 — "ماذا يحدث بعد تواصلك معنا"
**Purpose:** de-risks the WhatsApp tap. Rare and valuable.
**Content:** three phases + the explicit line `بلا التزام مالي`.
**Animation:** fade+rise, stagger 0.1s.

---

### S14 — Final CTA banner
**Content:** `مستعد تبدأ؟ ابعت مقاس الشقة على واتساب ونرجعلك بمقايسة.` + one gold-filled button + the phone as a `<bdi>` tel link.
**Layout:** the page's only **cream** band (`--cream` bg, `--ink-900` text at 16.65:1). The tonal inversion is the emphasis — no gradient, no glow.
**Animation:** a single vertical `.gold-rule` draws down through the band on entry, 800ms. One move.

---

### S15 — Contact / map / hours
**Content:** street address, `السبت–الخميس ٩ص–٦م` → `9ص–6م` (Western digits), embedded map.
**Critical:** the map iframe **must** be wrapped in `dir="ltr"` — third-party embeds inherit `dir` and break.
**Animation:** none.

---

### S16 — Footer
Service-area links, package links, `EN`, legal. Semantic `<footer>`. No gold. No animation.

---

### S17 — Persistent floating WhatsApp + call (fixed)
**Purpose:** **WhatsApp is the primary conversion event in this market. Forms are secondary everywhere.**
**Layout:** fixed inline-end, bottom, thumb-reach zone, above the fold on every scroll position, 56px targets. `href="https://wa.me/20XXXXXXXXXX?text=..."` pre-filled with a project-type message.
**Animation:** appears at 400px scroll via `opacity` + `translateY`. Never pulses, never bounces.

---

## 6. SIGNATURE MOMENT — "الإضاءة" / The Ignition

One hero animation, ~2.6s, playing the literal meaning of نور: **the building does not fade in — it switches on, and the light it emits is what makes the words legible.**

**Structure.** Hero is `--ink-900` with no photograph. An inline SVG wire-frame tower (`viewBox="0 0 400 700"`, ~62vh, cols 9–12) with 18–24 thin paths, `stroke="url(#goldline)"`, `stroke-width="1.25"`, `stroke-linecap="round"`, all authored **top-to-bottom in document order** and each carrying `pathLength="1"` — so `stroke-dasharray:1; stroke-dashoffset:1` works with zero JS and zero `getTotalLength()` layout read. The gradient runs `#F6EFD2` → `#E8C777` (35%) → `#A77E33` (100%), apex to base.

**Timeline (GSAP master, `defaults:{ease:"expo.out"}`, gated on `document.fonts.ready`):**

| t | Beat | Technique |
|---|---|---|
| 0.00 | **The gem lights.** A 6px `--gem` diamond at the apex: `scale 0.2→1`, `opacity 0→1`, 380ms. Triple `drop-shadow(0 0 6px #FFF) drop-shadow(0 0 22px rgba(232,199,119,.75)) drop-shadow(0 0 60px rgba(217,174,82,.35))` — static, never animated. | `scale`/`opacity` only |
| 0.30 | **The tower switches on, floor by floor.** `stroke-dashoffset: 1 → 0`, `stagger: 0.045` in DOM order (apex → base), 1.4s. The cascade is the whole read. | `stroke-dashoffset`, ~0.5–2ms/frame for 24 thin paths |
| 0.55 | **The rays are born.** A pre-painted `repeating-conic-gradient` fan centred on the gem fades `opacity 0→1` over 900ms, then enters a **90s linear `rotate` loop, forever.** Radial `mask-image` so rays are born at the gem and die into the dark at 62%. `mix-blend-mode: screen`. | Gradient painted **once** into a layer; only `rotate` animates. **Never** animate a `@property --angle` inside the conic gradient — identical look, full-layer repaint every frame. |
| 0.70 | **The cone wash.** A `clip-path: polygon(46% 0, 54% 0, 100% 100%, 0 100%)` linear-gradient with a **static** `blur(40px)`, `mix-blend-mode: screen`, fading in and entering a 7s `opacity .55 ↔ 1` breathe. | **Only `opacity` animates.** Animating the blur radius forces a re-rasterize every frame — instant death. |
| 0.85 | **The headline is lit.** `SplitText.create(h1, { type:"lines", mask:"lines", autoSplit:true, aria:"auto" })`, lines `yPercent 110 → 0`, `opacity 0 → 1`, 0.9s `power3.out`, stagger 0.09. | **Lines, not chars.** Char-splitting Arabic severs the joins. |
| 1.30 | **The light passes over the wordmark.** A duplicate `--gem`-coloured copy of "NOOR" sits above the silver original, carrying a **static** `mask-image: radial-gradient(circle 9rem at 50% 50%, #000 0, transparent 70%)`. It `translateX`s from −45% to +45% once over 1.2s, then parks off-mask. The silver→white→**gold**-fringe→silver sequence is what sells it — pure white-to-grey shimmer reads as a loading skeleton. | Static mask + `transform` only |
| 1.60 | **The eyebrow rule draws.** `.gold-rule` `scaleX: 0 → 1`, `transform-origin: 100% 50%` in RTL (via `--dir`), 600ms. | compositor-only |
| 1.90 | CTAs `opacity`+`translateY`, stagger 0.08. Done. | |

**The scroll hand-off.** A second ScrollTrigger scrubs the beam's and cone's `opacity` from 1 → 0 across the first 60vh, and translates the tower wrapper at 0.85× scroll speed. The light *belongs to the hero* and does not fight the rest of the page. One wrapper transform — not per-element parallax.

**Composite discipline (this decides the frame budget):**
```css
.hero{ isolation:isolate; }   /* contain every screen-blend to the hero */
```
Max **2–3** `mix-blend-mode` layers on screen at once — here: rays (screen) + cone (screen). That is the budget, spent. `screen` for light (additive, physically correct for a beam); never `color-dodge` (blows out and clips the gold to white). Anything with `opacity`/`transform`/`filter` creates a stacking context that silently breaks blending — if the beam stops glowing, an ancestor grew a `filter`.

**Two guards the source material omits:**
1. **Cap the beam element.** `width: min(180vmax, 2400px)` — on a 5K display `180vmax` is a ~7000px square layer, past the GPU max texture size; it gets tiled or silently dropped and the "painted once" assumption collapses. Same for the cone.
2. **Ray aliasing.** 1.6° spokes at large radius moiré as they rotate. Use **2.4° spokes on a 12° period** and stack two fans at different opacities/rates rather than one fine one.

**Reduced motion — land in the FINAL state, never the initial:**
```css
@media (prefers-reduced-motion: reduce){
  *,*::before,*::after{
    animation-duration:.01ms !important; animation-iteration-count:1 !important;
    transition-duration:.01ms !important; animation-timeline:auto !important;
  }
  .tower path{ stroke-dashoffset:0 }      /* tower is DRAWN, not blank */
  .beam,.cone::before{ opacity:.6; animation:none }
}
@media (prefers-reduced-transparency: reduce){ .beam,.cone{ display:none } }
@media (forced-colors: active){ .beam,.cone,.grain{ display:none } }
```
The failure mode to avoid: a reduced-motion user sees a tower that never draws, because `stroke-dashoffset:1` is the un-animated default. In GSAP, use `gsap.matchMedia()` with a `reduceMotion` condition that **returns without building anything** — conditions re-evaluate live, so flipping Reduce Motion mid-session tears the timeline down automatically.

**Grain, page-wide (the cheapest "expensive" cue):**
```css
.grain{ position:fixed; inset:-50%; pointer-events:none; z-index:9; opacity:.05;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size:200px 200px; background-repeat:repeat;
  mix-blend-mode:normal;                 /* NOT overlay — see below */
  animation:grain-jitter .6s steps(1) infinite; }
```
Two corrections to the source recipe that matter: the data-URI SVG **must** carry `width`/`height` (without them it has no intrinsic size, stretches to the 200vw×200vh background area, and you get soft blobs instead of film grain); and **`mix-blend-mode: overlay` is near-invisible on a near-black page** — overlay is multiply below 0.5 luminance, so on `#0B0F14` it contributes roughly a tenth of its intended value, defeating the anti-banding purpose. Use `normal` at 5%, or `soft-light`. Never animate `seed` or `baseFrequency` on a live `feTurbulence` over the viewport — that is CPU Perlin evaluation per pixel per frame.

---

## 7. IMAGE MANIFEST

**60 image URLs survived verification.** The fact-checker personally re-fetched every one: all 60 return **HTTP 200, `Content-Type: image/avif`** (50 Pexels + 10 Unsplash). One transient 503 on `pexels-photo-5691530` recovered on retry. That is well above the 20 threshold — no shortfall to declare.

All Unsplash IDs were confirmed against their live photo pages, all ten are **free Unsplash License**, none are Unsplash+.

### Hard rules before any of these ships

1. **The legal risk is not copyright — it is passing off.** A finishing contractor's portfolio implicitly claims "we built this." Stock under an `أعمالنا` heading is a misrepresentation to prospective clients, independently actionable regardless of licence. **Label every stock image `مصدر إلهام` / `أنماط ننفذها` — never `أعمالنا`.** S5 (before/after) and S6 (portfolio) must use real NOOR photographs. Photograph three real handovers on a phone in good daylight; it beats any stock image for conversion anyway.
2. **Never hotlink `plus.unsplash.com/premium_photo-*`** — Unsplash+ subscription content, not the free licence. Only `images.unsplash.com/photo-*`. The host is a valid discriminator: `images.unsplash.com` never serves `premium_photo-`.
3. **Pexels silently ignores `ar=` and `q=`.** Use explicit `w`+`h`+`fit=crop`. There is no quality knob on 50 of these 60 files. Unsplash/imgix honours both `ar=` and `q=`.
4. **Pexels never upscales** — it caps at native width. `pexels-photo-30509589` maxes at 2252px.
5. **Extension must match the stored asset.** Two are PNG-only: `33962192`, `29334668`. Requesting `.jpeg` on those is a hard 404, and `.png` on a JPEG asset 404s too.
6. **Byte budgets from the source are fabricated and off by 2–2.6×.** Measured AVIF at the prescribed `w=1920&q=70`: 522 KB / 495 KB / 421 KB. To hit ≤200 KB you need roughly `w=1280&q=60` on Unsplash. This is survivable only because **the hero has no photograph** — the LCP element is text.
7. **Orientation is unstated for most of these.** Ten are confirmed portrait or square (flagged ★ below). The remaining 50 have not been dimension-checked — **verify orientation before assigning any to a wide slot.** A 21:9 crop of a 2:3 portrait discards ~85% of the frame.
8. **Photographer concentration:** a large share of the Pexels luxury interiors are by one photographer (Max Vakhtbovych), and #49/#50 are consecutive frames from one shoot. Do not use ten from one portfolio — it is instantly recognisable and undercuts even an "inspiration" label. **Cap at 3 per photographer.**
9. Six contain identifiable people (incl. `8837715`, `11427094`, `6474129`). Keep them away from any copy that could imply they are NOOR employees.

### Grouped by section

**S3 — Services tiles (6 needed)**
```
https://images.pexels.com/photos/7195739/pexels-photo-7195739.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop   kitchen, fitted
https://images.pexels.com/photos/7005291/pexels-photo-7005291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop   minimalist kitchen, handleless
https://images.pexels.com/photos/6587859/pexels-photo-6587859.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop   bathroom, marble + shelving
https://images.pexels.com/photos/8082195/pexels-photo-8082195.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop   frameless glass shower
https://images.pexels.com/photos/7045321/pexels-photo-7045321.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop   hallway, ceiling + lighting run
https://images.pexels.com/photos/6908566/pexels-photo-6908566.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop   slat wall panelling
```
Alternates: `6265836`, `6186828`, `8089079`, `7166637`, `7214163`, `8146152`, `31771712`, `30509589` (⚠ 2252px cap).
**Excluded:** `31735047` — ★portrait 4571×6857, 116 KB at grid size, and it is a **commercial ceiling with a visible exit sign**. Wrong for a residential villa portfolio despite being filed as the "best false-ceiling proxy."

**S4 / S9 — Packages & guarantees, atmospheric only (2 needed)**
```
https://images.pexels.com/photos/8135496/pexels-photo-8135496.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop  clean open-plan
https://images.pexels.com/photos/6585599/pexels-photo-6585599.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop  wooden furniture + soft sofa
```

**S5 — Before/After: REAL NOOR PHOTOGRAPHY ONLY.**
Zero stock. If the client cannot supply pairs before launch, **cut the section** rather than fake it. For internal prototyping only, the raw-shell set below can stand in on a staging build that never ships.

**S6 — Portfolio: REAL NOOR PHOTOGRAPHY ONLY.** Same rule.

**S11 / S13 — "Design references" band, explicitly labelled `أنماط ننفذها` (6 needed)**
```
https://images.pexels.com/photos/34688219/pexels-photo-34688219.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop  modern living, luxurious decor
https://images.pexels.com/photos/7167073/pexels-photo-7167073.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop   spacious stylish apartment
https://images.pexels.com/photos/8082565/pexels-photo-8082565.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop   beige sectional, full-height curtains
https://images.pexels.com/photos/7546556/pexels-photo-7546556.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop   minimalist master bedroom
https://images.pexels.com/photos/7546291/pexels-photo-7546291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop   luxurious bedroom, king bed
https://images.unsplash.com/photo-1724582586529-62622e50c0b3?w=1200&q=68&auto=format&fit=crop&ar=3:2                  modern living, large window
```
Alternates: `6903157`, `7168026`, `18285942`, `6758531`, `14011664`, `6758532`.
★ Portrait/square — landscape slots only after re-cropping: `photo-1583847268964` (2:3), `photo-1600210491892`, `photo-1598928506311`, `33962192` (2560² square), `29334668` (3000² square).

**S7 — Compound wall:** no images. Text wordmarks only (see S7).

**S8 — Process steps: raw-shell / work-in-progress (4 needed, one per early step)**
```
https://images.pexels.com/photos/5691533/pexels-photo-5691533.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop   flat mid-renovation
https://images.pexels.com/photos/7937303/pexels-photo-7937303.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop   unfinished interior, white primer
https://images.pexels.com/photos/5691495/pexels-photo-5691495.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop   renovation, laminate flooring
https://images.pexels.com/photos/5481514/pexels-photo-5481514.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop   room under renovation
```
Alternates: `5691530` (⚠ returned a transient 503 once — needs a fallback path), `7937304`, `6474129` (person), `photo-1707725669477`.
★ Portrait: `8469938`, `11427094` (person), `photo-1768321903661`, `photo-1707725669525`.

**S8 step 2 — design/3D beats (3 needed)**
```
https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop     house floor plan
https://images.pexels.com/photos/4792480/pexels-photo-4792480.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop   pen, ruler, glasses on plan
https://images.unsplash.com/photo-1721244654394-36a7bc2da288?w=900&q=68&auto=format&fit=crop&ar=3:2                  architectural blueprint, multi-storey
```
Alternates: `28456460`, `12990602`, `28822840` (all 3D renders — **must be labelled as renders**, never mixed into completed work), `photo-1503387762-592deb58ef4e` (person), `8837715` (two people). ★ Portrait: `5582599`.

**Villa exteriors — reserve, unassigned (6 available)**
`16573669`, `8143683`, `8082328`, `7174110`, `photo-1717167398817`; ★square `29334668` (`.png`).

### Delivery
One `<img src>` per image, no hand-written `<picture>`. Both CDNs send `Vary: Accept` and content-negotiate AVIF/WebP automatically — Unsplash needs `auto=format` in the query, Pexels negotiates unconditionally. `max-age=31536000` on both, so mirroring costs nothing in freshness if uptime matters. Set explicit `width`/`height` on every `<img>` or you eat CLS *and* invalidate every ScrollTrigger start/end position. `loading="lazy" decoding="async"` below the fold. `<link rel="preconnect">` to both hosts.

---

## 8. RTL + A11Y + PERF CHECKLIST — non-negotiables

**RTL**
- `<html lang="ar" dir="rtl">`. On `<html>`, never `<body>`. Never make CSS `direction:` the source of truth — `:dir()` reads only the semantic HTML value.
- Logical properties throughout: `margin-inline-*`, `padding-inline-*`, `inset-inline-*`, `border-inline-*`, `inline-size`, `text-align: start`.
- **Flexbox and Grid auto-flip. Do not "fix" them.** Never stack `row-reverse` with `dir="rtl"` — it double-flips.
- **Physical, never flips, must be overridden manually:** `transform: translateX()` (the #1 killer, and why GSAP breaks — GSAP writes `transform`, always physical), `box-shadow`/`text-shadow`/`drop-shadow` offsets, `background-position`, `linear-gradient(to right)`, `clip-path`, SVG `viewBox` coords, `transform-origin: left`. Use `--dir: 1 / -1` and multiply.
  → **Use symmetric shadows (`0 8px 24px`, x-offset 0) everywhere.** It is the lazy correct answer for a dark luxury site and removes the whole class of bug.
- **Never hand-roll `el.scrollLeft`.** In RTL it is 0 at the rightmost edge and goes increasingly negative (Chrome 86+, Firefox, WebKit all aligned). And note: **`scrollBy({left: -320})` is NOT direction-aware** — `left` is a physical X delta. Use `scrollIntoView({inline:'start'})`, which *is* logical, or multiply by `--dir`.
- Icons: flip chevrons, arrows, next/prev, send, reply, breadcrumb separators. **Do not flip** search, close, checkmark, phone, mail, download, play/pause, or the logo. Tag directional icons explicitly in markup — never blanket-flip all SVGs.
- Wrap `<bdi>` around every phone number and price inside Arabic copy. Wrap `<span dir="ltr">NOOR</span>`.
- Force `dir="ltr"` on the map iframe wrapper.
- Horizontal strips: **native CSS `scroll-snap-type: x mandatory` + `scroll-padding-inline-start`.** Browser handles RTL free, zero JS, keyboard-accessible, native momentum. Reach for this before any GSAP horizontal rail.
- AR/EN: **two static files.** `/index.html` (`lang="ar" dir="rtl"`) and `/en/index.html`. Plain `<a>` toggle, no JS, no FOUC, no `ScrollTrigger.refresh()` timing bug, no duplicate-content penalty, deep links work. `hreflang` alternates (`ar-EG`, `en`, `x-default`) in both heads. Button label shows the language you'd switch **to**.

**A11Y**
- `SplitText` `aria: "auto"` (the default in 3.13+) keeps the accessible name intact. **Lines/words only, never chars, for Arabic.**
- `:focus-visible` on every interactive element, ring in `--gold-400` or `--rule-500` — must clear **3:1** per 1.4.11. `--rule-400` at 2.60:1 does **not** qualify.
- `prefers-reduced-motion` handled at three layers: the CSS kill switch (with `animation-duration: .01ms`, not `none`, so `animationend` still fires); `gsap.matchMedia()` with a `reduceMotion` condition that builds nothing; and every animated element authored **in its final state by default**. Reduce *amplitude* where you can rather than killing everything — swap translate/scale reveals for opacity-only.
- `prefers-reduced-transparency` kills the beam/cone washes (motion preference alone doesn't cover translucent overlays).
- `@media (forced-colors: active)`: gradient-clipped text renders transparent in some implementations — **the wordmark would disappear.** Reset `-webkit-text-fill-color: currentColor`, drop `background`, hide decorative light layers.
- Skip link past the pinned portfolio section. Nav reachable at all times. **Never gate contact or pricing behind a narrative.**
- Strict heading hierarchy, semantic HTML, real `<button>`/`<a>`, `<details>` for accordions.
- JSON-LD: `Organization` + `LocalBusiness` + `FAQPage` + `BreadcrumbList`. **Skip `llms.txt`** — Google's own AI-optimisation guidance (updated Jun 2026) states Search does not use machine-readable AI files, and 97% of llms.txt files measured across 137k sites received zero traffic. Harmless, but it does nothing.

**PERF**
- Animate **`transform` and `opacity` only.** Never `width`, `height`, `top/left`, `margin`, `padding`, `font-size`, `border-width`, `background-position` (except the one headline shimmer), or any `filter` **radius** in a scroll loop.
- **Layout thrash is the #1 real-world jank cause** — never read `getBoundingClientRect()`/`offsetTop` inside a scroll or RAF handler after a write. ScrollTrigger already debounces scroll into RAF; don't add your own scroll listener.
- `will-change: transform` **only on elements currently animating**, removed on `animationend`. Do not put it in a stylesheet for more than a handful of elements. And note: **GSAP does not set `will-change` for you** — the claim that it does is false (0 occurrences across `gsap.js` and `ScrollTrigger.js`; the only hit in the whole `all.js` bundle is one static assignment in ScrollSmoother, which we're not shipping). If a specific element needs it, hand-author it on ScrollTrigger `onToggle` and reset to `auto`.
- Build ScrollTriggers in DOM order, top to bottom. `invalidateOnRefresh: true` on anything measured. `ScrollTrigger.config({ ignoreMobileResize: true })` — mobile address-bar show/hide fires resize.
- **`content-visibility: auto` is incompatible with ScrollTrigger trigger elements** (GSAP docs are explicit — the element has no measurable size until near-viewport, so start/end resolve wrong). Apply it only to sections with no ScrollTrigger, and pair with `contain-intrinsic-size`.
- `passive: true` on any wheel/touch listener you add.
- `100svh` not `100vh` for the hero.
- Images: explicit `width`/`height`, `fetchpriority="high"` on the LCP element, `loading="lazy" decoding="async"` below the fold, `srcset`/`sizes` at 480/768/1200/1920. `ScrollTrigger.refresh()` on `window.load` if any lazy image can change size after init.
- **Mobile is the target, not the afterthought.** 42% of origins pass all three CWV on mobile vs 63% desktop, and the pinned section is the highest-risk element on mobile Safari — it is disabled below 768px by design.
- Budget: hero JS ≤125 KB (three GSAP files), no images above the fold, LCP is text.

---

## 9. RISKS

1. **The client has no real photography, and S5/S6 are the two highest-converting sections.** Both are specified as real-photos-only. If the handover shoot doesn't happen, before/after must be cut (not faked with stock), and the portfolio degrades to a text-and-location list. **Mitigation: brief the client in week 1 — three handovers, phone camera, daylight, same angle before and after. This is the single highest-leverage non-code task in the project.**
2. **Every number on the page is a client input, and the market's published prices are incoherent.** Verified Aug-2026 per-m² anchors across live Egyptian competitors range from 1,300 to 17,000+ EGP with no coherent band — the widely-quoted "economy 4,000–4,700 / super-lux 5,500–7,000" matches no live source. **Do not ship invented figures.** Founding year, project count, Google rating, warranty years, delivery windows, delay-penalty rate, payment split, and every price band must come from the client in writing before launch. Build with visible `[CLIENT INPUT]` tokens so nothing invented can leak to production.
3. **Legal exposure from stock-as-portfolio.** The licences (Unsplash / Pexels) are clean; the risk is misrepresentation — actionable under FTC Act §5, EU UCPD 2005/29 (amended by 2024/825, applying from 27 Sep 2026), and UAE Federal Law 15/2020 if the client operates in the Gulf. Enforcement against small contractor sites is automated and routine. **Every stock image must sit under an "inspiration" label, reviewed before launch.**
4. **Arabic + GSAP transform sign errors.** GSAP writes `translate3d()`, which is always physical and never flips with `dir`. Any horizontal motion coded once in LTR and shipped in RTL moves the wrong way. **Mitigation: no GSAP horizontal rail at all — native scroll-snap for strips; and `--dir` multiplication on every remaining X translate, reviewed as a checklist item.**
5. **Split-text on Arabic.** Char-level splitting severs cursive joins and renders the headline as unreadable disconnected letterforms. The trends dossier calls char reveals "table stakes"; for Arabic they are a defect. **Mitigation: `type:"lines"` only, enforced in review. Test with `autoSplit:true` and a font-load delay — splitting against a fallback font produces wrong line breaks.**
6. **Pinned section on mobile Safari.** Scrubbed pins are the worst-case scroll workload on iOS, and this audience is mobile-majority. **Mitigation: `gsap.matchMedia()` disables the pin below 768px and under reduced-motion, falling back to a stacked list. Test on a real mid-tier Android and a real iPhone, not just DevTools throttling.**
7. **Firefox has no scroll-driven animations and no cross-document view transitions**, and Mozilla moves to a two-week release cadence from Sept 2026 — the gap may close faster than expected, or not at all. **Mitigation: every CSS scroll-driven effect is behind `@supports` with the finished state as the default, and IntersectionObserver as the fallback. Nothing load-bearing depends on it.**
8. **`background-clip: text` is historically fragile in WebKit**, and combining it with `filter` is the exact combination that has broken before. If it fails, transparent-filled text is **invisible**, not degraded. **Mitigation: `color: var(--gold-400)` declared before the transparent fill, plus an `@supports not` reset and a `forced-colors` reset. Verify on a real iOS Safari, not a simulator.**
9. **Gradient-filled text has no single contrast ratio** and automated checkers will either pass it silently or report `#000`. **Mitigation: the ramp's dark ends are clamped to `--gold-600` (4.55:1) and the technique is restricted to display text ≥32px. Manual audit, not Lighthouse.**
10. **GPU texture limits on the beam/cone.** Uncapped `180vmax` layers exceed max texture size on high-DPI displays and get tiled or dropped, collapsing the "painted once" performance assumption. **Mitigation: `min(180vmax, 2400px)`, verified in the Chrome Layers panel on a 5K display.**
11. **Third-party CDN dependency for all imagery.** No rate-limit guarantee, Unsplash has re-slugged URLs before, and one Pexels asset already returned a transient 503 during verification. `Vary: User-Agent` on Unsplash also fragments any edge cache badly. **Mitigation: `max-age=31536000` means mirroring costs nothing in freshness — mirror the finalists to the client's own storage before launch. The licences permit it; Unsplash's hotlink requirement binds API users only, and this is a static site.**
12. **Scope creep toward the rejected list.** The client will ask for a video hero, a bento services grid, and a count-up stat bar, because that is what their competitors have. **Mitigation: the reject list in §1 is contractual. Each rejection has a one-line reason attached; use them.**