/* ============================================================================
   NOOR — behaviour + motion
   Order matters: everything non-motion runs unconditionally; every GSAP
   timeline lives inside gsap.matchMedia() so a live Reduce-Motion toggle
   tears it down for us. Elements are authored in their FINAL state in CSS —
   JS only sets the "from" state when motion is actually allowed.
   ========================================================================== */
(() => {
  'use strict';

  const root   = document.documentElement;
  const isRTL  = () => root.getAttribute('dir') === 'rtl';
  const $      = (s, c = document) => c.querySelector(s);
  const $$     = (s, c = document) => [...c.querySelectorAll(s)];

  /* ── Header state ─────────────────────────────────────────────────────── */
  const hdr = $('#hdr');
  const floatBar = $('#float');
  // Sentinel instead of a scroll listener: no layout reads, no RAF of our own.
  const sentinel = document.createElement('div');
  sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:80px;pointer-events:none';
  document.body.prepend(sentinel);
  new IntersectionObserver(
    ([e]) => hdr.classList.toggle('is-scrolled', !e.isIntersecting),
    { threshold: 0 }
  ).observe(sentinel);

  const floatSentinel = document.createElement('div');
  floatSentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:400px;pointer-events:none';
  document.body.prepend(floatSentinel);
  new IntersectionObserver(
    ([e]) => floatBar.classList.toggle('is-on', !e.isIntersecting),
    { threshold: 0 }
  ).observe(floatSentinel);

  /* ── Reveals — CSS owns the transition, we only toggle the class ────────
     A reveal hides real content, so it must never depend on an observer
     callback arriving. Anything the user can already see is revealed
     synchronously, and a sweep re-checks on load / tab focus / a timer.
     If IntersectionObserver is throttled or never fires, content still
     appears — the animation is what degrades, not the page. */
  const revealables = $$('.reveal, .clipmask');
  const show = (el) => { el.classList.add('is-in'); revealIO.unobserve(el); };

  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) show(e.target); });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });

  // Reveal everything at or above the fold, then observe the rest.
  const sweep = () => revealables.forEach((el) => {
    if (!el.classList.contains('is-in') && el.getBoundingClientRect().top < innerHeight) show(el);
  });
  revealables.forEach((el) => revealIO.observe(el));
  sweep();                                                     // covers #anchor landings
  addEventListener('load', sweep, { once: true });             // covers late layout shifts
  addEventListener('visibilitychange', () => { if (!document.hidden) sweep(); });
  setTimeout(sweep, 2500);                                     // covers a throttled observer


  /* ── Before / after comparators ───────────────────────────────────────
     `x` = how much of the frame the BEFORE image occupies, measured from the
     reading start. clip-path and `left` are physical, so both get the flip. */
  $$('.cmp').forEach((cmp) => {
    const range = $('.cmp__handle', cmp);
    const after = $('.cmp__after', cmp);
    const bar   = $('.cmp__bar', cmp);
    const apply = (x) => {
      after.style.setProperty('--x', x + '%');
      bar.style.left = (isRTL() ? 100 - x : x) + '%';
    };
    range.addEventListener('input', () => apply(+range.value));
    apply(+range.value);
    cmp._demo = (x) => { range.value = x; apply(x); };
  });

  /* ── Quote builder → WhatsApp. Shows no number, by design. ────────────── */
  const quoter = $('#quoter');
  if (quoter) {
    const WA   = '201055876111';
    const type = $('#q-type'), area = $('#q-area'), tier = $('#q-tier'), send = $('#q-send');
    const L = root.lang === 'ar'
      ? { i: 'السلام عليكم، عايز مقايسة تشطيب.', t: 'النوع', a: 'المساحة', v: 'المستوى', u: 'م²' }
      : { i: 'Hello, I would like a finishing quote.', t: 'Type', a: 'Area', v: 'Level', u: 'm²' };
    const build = () => {
      const msg = `${L.i}\n${L.t}: ${type.value}\n${L.a}: ${area.value} ${L.u}\n${L.v}: ${tier.value}`;
      send.href = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
    };
    [type, area, tier].forEach((el) => el.addEventListener('input', build));
    quoter.addEventListener('submit', (e) => { e.preventDefault(); send.click(); });
    build();
  }

  /* ── MOTION ───────────────────────────────────────────────────────────── */
  if (!window.gsap) return;

  gsap.registerPlugin(ScrollTrigger, SplitText);
  ScrollTrigger.config({ ignoreMobileResize: true });   // mobile URL bar fires resize

  document.fonts.ready.then(() => {
    const mm = gsap.matchMedia();

    mm.add({
      motion: '(prefers-reduced-motion: no-preference)',
      wide:   '(min-width: 900px)',
    }, (ctx) => {
      // Reduce Motion → build nothing. Conditions are live, so toggling the OS
      // setting mid-session tears every timeline down on its own.
      if (!ctx.conditions.motion) return;

      /* ---- S1 · THE IGNITION ------------------------------------------- */
      const tower = $('.tower');
      const lines = $$('.tower path[pathLength]');
      const gem   = $('.tower .gem');
      const beams = $$('.beam, .beam2');
      const cone  = $('.cone');

      const split = SplitText.create('#hero-h1', { type: 'lines', mask: 'lines', aria: 'auto' });

      gsap.set(gem,   { scale: 0.2, autoAlpha: 0 });
      gsap.set(lines, { strokeDashoffset: 1 });
      gsap.set(beams, { autoAlpha: 0 });
      gsap.set(cone,  { autoAlpha: 0 });
      gsap.set(split.lines, { yPercent: 110, autoAlpha: 0 });
      gsap.set('.hero .gold-rule', { scaleX: 0, transformOrigin: isRTL() ? '100% 50%' : '0% 50%' });
      gsap.set('.hero__cta .btn, .hero__cue, .hero .eyebrow', { autoAlpha: 0, y: 16 });

      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      tl.to(gem,   { scale: 1, autoAlpha: 1, duration: 0.38, ease: 'back.out(2)' }, 0)
        .to('.hero .eyebrow', { autoAlpha: 1, y: 0, duration: 0.6 }, 0.15)
        // The cascade IS the read: apex → base, in DOM order.
        .to(lines, { strokeDashoffset: 0, duration: 1.4, stagger: 0.045 }, 0.30)
        .to(beams, { autoAlpha: 1, duration: 0.9, ease: 'power2.out' }, 0.55)
        .to(cone,  { autoAlpha: 1, duration: 0.9, ease: 'power2.out' }, 0.70)
        .to(split.lines, { yPercent: 0, autoAlpha: 1, duration: 0.9, stagger: 0.09, ease: 'power3.out' }, 0.85)
        .add(() => document.body.classList.add('is-lit'), 1.30)     // wordmark sweep (CSS)
        .to('.hero .gold-rule', { scaleX: 1, duration: 0.6 }, 1.60)
        .to('.hero__cta .btn, .hero__cue', { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08 }, 1.90);

      // Safety net. The intro hides the H1 — the LCP element — until it plays.
      // If rAF stalls (background tab, bfcache restore, a very slow device) the
      // headline would stay invisible, so a timer-based (not rAF) fallback
      // snaps the timeline to its end state. Belt and braces on content, not motion.
      const failsafe = setTimeout(() => { if (tl.progress() < 1) tl.progress(1); }, 5000);

      // The cone breathes only while the hero owns the light. Opacity only —
      // animating the blur radius re-rasterizes every frame.
      gsap.to(cone, { opacity: 0.55, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.8 });

      /* ---- Scroll hand-off: the light belongs to the hero --------------
         fromTo + immediateRender:false — a plain .to() would record its start
         value at creation, which is the intro's autoAlpha:0, and animate 0→0. */
      gsap.fromTo([...beams, cone], { autoAlpha: 1 }, {
        autoAlpha: 0, ease: 'none', immediateRender: false,
        scrollTrigger: { trigger: '.hero', start: 'top top', end: '60% top', scrub: true },
      });
      gsap.to('.tower-wrap', {
        yPercent: 15, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      });

      /* ---- S7 · compound wall light sweep ------------------------------ */
      gsap.fromTo('.wall__sweep',
        { xPercent: -160 * (isRTL() ? -1 : 1), x: 0 },
        { xPercent: 260 * (isRTL() ? -1 : 1), duration: 1.4, ease: 'power2.inOut',
          scrollTrigger: { trigger: '.wall', start: 'top 75%', once: true } });

      /* ---- S8 · process line draws ------------------------------------- */
      if (ctx.conditions.wide) {
        gsap.fromTo('.steps__line',
          { scaleX: 0 },
          { scaleX: 1, ease: 'none',
            transformOrigin: isRTL() ? '100% 50%' : '0% 50%',
            scrollTrigger: { trigger: '.steps', start: 'top 80%', end: 'bottom 65%', scrub: 0.6 } });
        gsap.from('.step__node', {
          scale: 0, autoAlpha: 0, stagger: 0.12, duration: 0.5, ease: 'back.out(2)',
          scrollTrigger: { trigger: '.steps', start: 'top 75%', once: true },
        });
      }

      /* ---- S5 · demonstrate the comparator affordance, once ------------ */
      ScrollTrigger.create({
        trigger: '#before-after', start: 'top 70%', once: true,
        onEnter: () => $$('.cmp').forEach((cmp, i) => {
          gsap.fromTo({ x: 100 }, { x: 100 }, {
            x: 45, duration: 0.9, delay: i * 0.12, ease: 'expo.out',
            onUpdate() { cmp._demo(Math.round(this.targets()[0].x)); },
          });
        }),
      });

      /* ---- S10 · one quote reveals. One, not four. --------------------- */
      const q = SplitText.create('#lead-quote p', { type: 'lines', mask: 'lines', aria: 'auto' });
      gsap.from(q.lines, {
        yPercent: 110, autoAlpha: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '#lead-quote', start: 'top 78%', once: true },
      });


      return () => {
        clearTimeout(failsafe);
        split.revert(); q.revert();
        document.body.classList.remove('is-lit');
      };
    });

    // Lazy images can resize after init and invalidate every start/end.
    window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
  });
})();
