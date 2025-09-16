(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode('kirby-loop{--color-neutral-h:900;--color-neutral-c:0;--color-accent-h:900;--color-accent-c:.18;--color-accent-l:.75;--color-accent-dark-factor:.4;--color-accent-light-factor:1.2;--color-neutral-l-0:1;--color-neutral-l-100:.95;--color-neutral-l-200:.9;--color-neutral-l-300:.7;--color-neutral-l-400:.6;--color-neutral-l-600:.4;--color-neutral-l-500:.5;--color-neutral-l-700:.3;--color-neutral-l-800:.2;--color-neutral-l-900:.1;--color-neutral-l-1000:0}kirby-loop[theme=dark]{--color-accent-l:.85;--color-neutral-l-0:0;--color-neutral-l-100:.1;--color-neutral-l-200:.2;--color-neutral-l-300:.45;--color-neutral-l-400:.5;--color-neutral-l-600:.55;--color-neutral-l-500:.6;--color-neutral-l-700:.7;--color-neutral-l-800:.8;--color-neutral-l-900:.95;--color-neutral-l-1000:1;--shadow-s:0 .1em .25em oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.1);--shadow-m:0 2px 8px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.08),0 8px 16px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.12),0 16px 24px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.08);--shadow-l:0 4px 16px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.08),0 12px 32px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.12),0 24px 48px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.16),0 48px 80px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.08);--shadow-light-edge:inset 1px 1px 1px oklch(var(--color-neutral-l-1000)var(--color-neutral-c)var(--color-neutral-h)/.3);--shadow-dark-edge:inset -1px -1px 1px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.3);--background-glass:linear-gradient(135deg,transparent,var(--color-base-background-o-50));--panel-threads-background:oklch(var(--color-neutral-l-200)var(--color-neutral-c)var(--color-neutral-h)/.99)}kirby-loop{--color-base:var(--color-neutral-900);--color-base-background:var(--color-neutral-0);--color-base-background-o-5:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.05);--color-base-background-o-10:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.1);--color-base-background-o-20:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.2);--color-base-background-o-50:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.5);--color-base-background-o-60:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.6);--color-base-background-o-75:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.75);--color-base-background-o-95:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.95);--color-accent-light:oklch(calc(var(--color-accent-l)*var(--color-accent-light-factor))var(--color-accent-c)var(--color-accent-h));--color-accent:oklch(var(--color-accent-l)var(--color-accent-c)var(--color-accent-h));--color-accent-dark:oklch(calc(var(--color-accent-l)*var(--color-accent-dark-factor))var(--color-accent-c)var(--color-accent-h));--color-neutral-0:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-100:oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-200:oklch(var(--color-neutral-l-200)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-300:oklch(var(--color-neutral-l-300)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-400:oklch(var(--color-neutral-l-400)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-500:oklch(var(--color-neutral-l-500)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-600:oklch(var(--color-neutral-l-600)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-700:oklch(var(--color-neutral-l-700)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-800:oklch(var(--color-neutral-l-800)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-900:oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-1000:oklch(var(--color-neutral-l-1000)var(--color-neutral-c)var(--color-neutral-h));--color-success:#3aa85b;--color-warning:#dfa11a;--color-error:#e85854;--color-info:#00a0c6;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;--line-height:1.4;--font-weight-light:300;--font-weight-normal:400;--font-weight-medium:550;--font-weight-bold:700;--font-size-3:clamp(1.9531rem,1.4262rem + 1.7565vw,3.5339rem);--font-size-4:clamp(1.5625rem,1.2503rem + 1.0408vw,2.4992rem);--font-size-5:clamp(1.25rem,1.0775rem + .575vw,1.7675rem);--font-size-6:clamp(1rem,.9167rem + .2778vw,1.25rem);--font-size-7:clamp(.8rem,.772rem + .0934vw,.884rem);--font-size-8:clamp(.6252rem,.6449rem + -.0165vw,.64rem);--border-radius-s:.125rem;--border-radius:.25rem;--border-radius-rounded:4096px;--space-2xs:clamp(.25rem,.2292rem + .0694vw,.3125rem);--space-xs:clamp(.5rem,.4583rem + .1389vw,.625rem);--space-s:clamp(1rem,.9167rem + .2778vw,1.25rem);--space-m:clamp(1.5rem,1.375rem + .4167vw,1.875rem);--space-l:clamp(2rem,1.8333rem + .5556vw,2.5rem);--space-2xs-xs:clamp(.25rem,.125rem + .4167vw,.625rem);--space-xs-s:clamp(.5rem,.25rem + .8333vw,1.25rem);--space-s-m:clamp(1rem,.7083rem + .9722vw,1.875rem);--space-m-l:clamp(1.5rem,1.1667rem + 1.1111vw,2.5rem);--space-s-l:clamp(1rem,.5rem + 1.6667vw,2.5rem);--shadow-s:0 .1em .25em oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.1);--shadow-m:0 2px 8px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.08),0 8px 16px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.12),0 16px 24px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.08);--shadow-l:0 4px 16px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.08),0 12px 32px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.12),0 24px 48px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.16),0 48px 80px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.08);--shadow-light-edge:inset 1px 1px 1px oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.3);--shadow-dark-edge:inset 0 -1px 1px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.3);--backdrop-blur:blur(6px);--backdrop-glass:var(--backdrop-blur)saturate(1.4)brightness(1.2);--background-glass:linear-gradient(135deg,transparent,var(--color-base-background-o-95));--background-glass-frosted:linear-gradient(0deg,var(--color-base-background-o-75)0%,var(--color-base-background-o-95)50%);--opacity-subtle:.5;--opacity-medium:.7;--opacity-strong:.9;--outline-color:var(--color-accent);--outline-offset:.25rem;--transition-duration:.2s;--transition-duration-jump:.4s;--transition-easing-jump:cubic-bezier(.44,1.2,.64,1);--transition-easing:cubic-bezier(0,0,.2,1);--z-loop-marker:9998;--z-loop-panel:9999;--z-loop-dialog:10000;--author-avatar-color:var(--color-neutral-600);--author-avatar-background-color:var(--color-neutral-100);--author-avatar-size:2.5rem;--author-avatar-border-radius:var(--border-radius-rounded);--author-avatar-font-size:var(--font-size-6);--button-background:transparent;--button-color:var(--color-neutral-600);--button-border-radius:var(--border-radius);--button-padding:0 var(--space-xs);--button-gap:var(--space-2xs);--button-font-size:var(--font-size-7);--button-font-weight:var(--font-weight-medium);--button-height:2.25rem;--button-transition:var(--transition-duration)var(--transition-easing);--button-outline-color:var(--outline-color);--button-outline-offset:var(--outline-offset);--button-hover-color:var(--color-neutral-900);--button-hover-background:var(--color-neutral-200);--button-header-background:transparent;--button-header-height:3rem;--button-header-padding:0 var(--space-s);--button-header-hover-background:var(--color-base-background-o-95);--button-header-blend-mode:multiply;--button-panel-background:transparent;--button-panel-padding:0 calc(var(--space-s)*.4);--button-solid-background:var(--color-neutral-100);--button-solid-hover-color:var(--color-neutral-900);--button-solid-hover-background:var(--color-neutral-200);--button-small-height:1.5rem;--button-small-font-size:var(--font-size-7);--button-icon-background:var(--color-neutral-0);--button-icon-color:var(--color-neutral-500);--button-icon-height:3rem;--button-icon-shadow:var(--shadow-s);--button-icon-border-radius:var(--border-radius-rounded);--button-icon-font-size:var(--font-size-6);--button-icon-hover-background:var(--color-neutral-200);--button-icon-hover-color:var(--color-neutral-900);--button-marker-background:var(--color-accent);--button-marker-color:var(--color-accent-dark);--button-marker-font-weight:var(--font-weight-bold);--button-marker-border-radius:var(--border-radius-rounded);--button-marker-highlighted-background:var(--color-accent);--button-marker-highlighted-color:var(--color-accent-dark);--button-filter-background:transparent;--button-filter-color:var(--color-neutral-500);--button-filter-height:1.75rem;--button-filter-font-size:var(--font-size-8);--button-filter-padding:0 var(--space-xs);--button-filter-border-radius:calc(var(--border-radius) - 2px);--button-filter-hover-color:var(--color-neutral-700);--button-filter-hover-background:var(--color-neutral-200);--button-filter-active-background:var(--color-base-background);--button-filter-active-color:var(--color-base);--button-filter-active-font-weight:var(--font-weight-medium);--button-menu-item-background:transparent;--button-menu-item-color:var(--color-neutral-700);--button-menu-item-padding:var(--space-2xs)var(--space-xs);--button-menu-item-border-radius:calc(var(--border-radius) - 2px);--button-menu-item-font-size:var(--font-size-7);--button-menu-item-gap:var(--space-2xs);--button-menu-item-hover-background:var(--color-neutral-100);--button-menu-item-hover-color:var(--color-neutral-900);--button-menu-item-active-background:var(--color-accent-light);--button-menu-item-active-color:var(--color-accent-dark);--button-menu-item-active-font-weight:var(--font-weight-medium);--button-active-background:var(--color-accent);--button-active-color:var(--color-accent-dark);--button-disabled-opacity:var(--opacity-subtle);--button-disabled-hover-color:var(--color-neutral-700);--button-disabled-hover-background:var(--color-neutral-100);--comment-avatar-size:2.5rem;--comment-marker-background:var(--color-neutral-200);--comment-marker-color:var(--color-neutral-800);--comment-line-background:var(--color-neutral-100);--comment-line-width:.1rem;--comment-line-offset:calc(var(--space-s) + var(--comment-avatar-size)/2);--comment-header-font-size:var(--font-size-7);--comment-header-padding:var(--space-s);--comment-header-gap:var(--space-s);--comment-header-outline-color:var(--outline-color);--comment-header-outline-offset:-2px;--comment-header-border-radius:var(--border-radius);--comment-content-padding:var(--space-xs);--comment-content-background:var(--color-neutral-100);--comment-content-background-dark:var(--color-neutral-200);--comment-content-border-radius:var(--border-radius);--comment-author-gap:var(--space-xs);--comment-author-margin-bottom:var(--space-2xs);--comment-timestamp-font-size:var(--font-size-8);--comment-timestamp-color:var(--color-neutral-300);--comment-replies-padding:0 var(--space-s);--comment-replies-gap:var(--space-s);--comment-footer-padding:var(--space-s);--comment-footer-gap:var(--space-s);--comment-buttons-gap:var(--space-xs);--comment-dialog-position:absolute;--comment-dialog-max-width:300px;--comment-dialog-border-radius:var(--border-radius);--comment-dialog-shadow:var(--shadow-s);--comment-dialog-backdrop-background:transparent;--comment-dialog-textarea-font-size:var(--font-size-6);--comment-form-background:var(--color-base-background);--comment-form-color:var(--color-base);--comment-form-border:1px solid var(--color-neutral-200);--comment-form-border-radius:var(--border-radius);--comment-form-textarea-height:15ch;--comment-form-textarea-padding:var(--space-s);--comment-form-textarea-background:var(--color-base-background);--comment-form-textarea-font-family:var(--font-family);--comment-form-textarea-font-size:var(--font-size-7);--comment-form-footer-padding:var(--space-xs);--comment-form-footer-gap:var(--space-xs);--comment-form-hint-font-size:var(--font-size-8);--comment-form-hint-color:var(--color-neutral-300);--comment-form-hint-padding:0 var(--space-xs)var(--space-xs)var(--space-xs);--context-menu-container-bottom:var(--space-s);--context-menu-container-right:var(--space-s);--context-menu-container-z-index:10;--context-menu-trigger-size:2.5rem;--context-menu-trigger-border-radius:var(--border-radius-rounded);--context-menu-background:var(--color-base-background);--context-menu-border-radius:var(--border-radius);--context-menu-shadow:var(--shadow-s);--context-menu-padding:var(--space-xs);--context-menu-min-width:12rem;--context-menu-backdrop-background:transparent;--context-menu-section-gap:var(--space-2xs);--context-menu-title-font-size:var(--font-size-8);--context-menu-title-font-weight:var(--font-weight-medium);--context-menu-title-color:var(--color-neutral-500);--context-menu-title-margin-bottom:var(--space-2xs);--context-menu-title-letter-spacing:.05em;--context-menu-filter-gap:1px;--context-menu-filter-dot-size:.5em;--context-menu-filter-dot-border-radius:50%;--context-menu-filter-dot-margin-right:var(--space-2xs);--context-menu-filter-dot-open-background:var(--color-accent);--context-menu-filter-dot-resolved-background:var(--color-neutral-400);--header-position:fixed;--header-top:var(--space-xs);--header-transform:translateX(-50%);--header-color:var(--color-base);--header-border-radius:var(--border-radius-rounded);--header-z-index:9999;--header-bottom-position:var(--space-xs);--header-backdrop-filter:var(--backdrop-glass);--header-background:var(--background-glass);--header-count-size:2rem;--header-count-border-radius:var(--border-radius-rounded);--header-count-backdrop-filter:var(--backdrop-glass);--header-count-background:var(--background-glass);--marker-size:2rem;--marker-position:absolute;--marker-z-index:var(--z-loop-marker);--marker-transform:translate(-50%,-50%);--marker-border-radius:var(--border-radius-rounded);--panel-width:380px;--panel-mobile-width:85svw;--panel-position:fixed;--panel-right:var(--space-xs);--panel-top:var(--space-xs);--panel-height:calc(100svh - var(--space-xs)*2);--panel-transform-closed:translateX(calc(100% + var(--space-xs)));--panel-transform-open:translateX(0);--panel-color:var(--color-base);--panel-border-radius:var(--border-radius);--panel-border-top-left-radius:0;--panel-transition:var(--transition-duration-jump)var(--transition-easing-jump);--panel-z-index:var(--z-loop-panel);--panel-shadow:var(--shadow-m);--panel-header-transform-closed:translate(-95%);--panel-header-transform-open:translate(calc(-100% + 1px));--panel-header-transform-hover:translate(calc(-100% + 1px));--panel-header-border-radius:var(--border-radius-rounded);--panel-header-gap:var(--space-xs);--panel-header-backdrop-filter:var(--backdrop-glass);--panel-header-background:var(--background-glass);--panel-threads-background:var(--color-base-background-o-95);--panel-threads-backdrop:var(--backdrop-blur);--panel-threads-border-radius:var(--border-radius);--panel-threads-border-top-left-radius:0;--panel-threads-padding:0 0 var(--space-s)0;--panel-threads-item-margin:var(--space-s);--panel-threads-scrollbar-width:thin;--panel-no-threads-padding:var(--space-s)var(--space-l);--panel-no-threads-font-size:var(--font-size-6);--panel-no-threads-color:var(--color-neutral-300);--reply-gap:var(--space-s);--reply-content-padding:var(--space-xs);--reply-content-background:var(--color-neutral-100);--reply-content-background-dark:var(--color-neutral-200);--reply-content-border-radius:var(--border-radius);--reply-header-gap:var(--space-xs);--reply-header-margin-bottom:var(--space-2xs);--reply-timestamp-font-size:var(--font-size-8);--reply-timestamp-color:var(--color-neutral-300);--welcome-dialog-background:var(--background-glass-frosted);--welcome-dialog-backdrop-filter:var(--backdrop-glass);--welcome-dialog-border:0px;--welcome-dialog-border-radius:var(--border-radius);--welcome-dialog-shadow:var(--shadow-l),var(--shadow-light-edge),var(--shadow-dark-edge);--welcome-dialog-max-width:500px;--welcome-dialog-backdrop-background:var(--color-base-background-o-10);--welcome-dialog-backdrop-backdrop-filter:none;--welcome-dialog-form-padding:var(--space-l);--welcome-dialog-title-margin:0 0 var(--space-s)0;--welcome-dialog-title-font-size:var(--font-size-4);--welcome-dialog-title-color:var(--color-base);--welcome-dialog-title-font-weight:var(--font-weight-bold);--welcome-dialog-text-margin:0 0 var(--space-m)0;--welcome-dialog-text-font-size:var(--font-size-6);--welcome-dialog-text-color:var(--color-neutral-600);--welcome-dialog-text-line-height:var(--line-height);--welcome-dialog-name-section-margin:var(--space-l);--welcome-dialog-input-border:1px solid var(--color-neutral-300);--welcome-dialog-input-border-radius:var(--border-radius-s);--welcome-dialog-input-padding:var(--space-xs);--welcome-dialog-input-font-family:var(--font-family);--welcome-dialog-input-font-size:var(--font-size-6);--welcome-dialog-input-color:var(--color-base);--welcome-dialog-input-background:var(--color-base-background);--welcome-dialog-input-outline-color:var(--outline-color);--welcome-dialog-input-outline-offset:var(--outline-offset);--welcome-dialog-footer-gap:var(--space-xs);--icon-size:1em}@supports (color:lab(0% 0 0)){kirby-loop{--color-success:lab(61.285% -45.3286 29.93);--color-warning:lab(71.006% 16.077 70.1908);--color-error:lab(57.6104% 56.6725 33.4484);--color-info:lab(60.079% -32.5023 -34.9868)}}kirby-loop[data-theme=dark]{--color-neutral-l-0:0;--color-neutral-l-100:.1;--color-neutral-l-200:.2;--color-neutral-l-300:.3;--color-neutral-l-400:.4;--color-neutral-l-500:.5;--color-neutral-l-600:.6;--color-neutral-l-700:.7;--color-neutral-l-800:.9;--color-neutral-l-900:.95;--color-neutral-l-1000:1}kirby-loop{font-family:var(--font-family);line-height:var(--line-height);font-weight:var(--font-weight-normal);font-size:var(--font-size-7);box-sizing:border-box}html.loop-overlay-open a{pointer-events:none}')),document.head.appendChild(r)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var Go = Object.defineProperty;
var wn = (e) => {
  throw TypeError(e);
};
var Qo = (e, t, r) => t in e ? Go(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var re = (e, t, r) => Qo(e, typeof t != "symbol" ? t + "" : t, r), Rr = (e, t, r) => t.has(e) || wn("Cannot " + r);
var N = (e, t, r) => (Rr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), ue = (e, t, r) => t.has(e) ? wn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), pe = (e, t, r, n) => (Rr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), ct = (e, t, r) => (Rr(e, t, "access private method"), r);
var jn;
typeof window < "u" && ((jn = window.__svelte ?? (window.__svelte = {})).v ?? (jn.v = /* @__PURE__ */ new Set())).add("5");
const $r = 1, Cr = 2, Ln = 4, ea = 8, ta = 16, ra = 1, na = 2, oa = 4, aa = 8, sa = 16, ia = 1, la = 2, Dn = "[", Gr = "[!", Qr = "]", It = {}, se = Symbol(), ua = "http://www.w3.org/1999/xhtml", Hn = !1;
var en = Array.isArray, ca = Array.prototype.indexOf, tn = Array.from, mr = Object.keys, jt = Object.defineProperty, ht = Object.getOwnPropertyDescriptor, Fn = Object.getOwnPropertyDescriptors, da = Object.prototype, fa = Array.prototype, rn = Object.getPrototypeOf, yn = Object.isExtensible;
function va(e) {
  return e();
}
function pr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ha() {
  var e, t, r = new Promise((n, o) => {
    e = n, t = o;
  });
  return { promise: r, resolve: e, reject: t };
}
const $e = 2, nn = 4, Er = 8, Vt = 16, Ze = 32, it = 64, qn = 128, Me = 256, gr = 512, de = 1024, Te = 2048, lt = 4096, Pe = 8192, wt = 16384, on = 32768, an = 65536, kn = 1 << 17, ma = 1 << 18, Bt = 1 << 19, Vn = 1 << 20, qr = 1 << 21, sn = 1 << 22, mt = 1 << 23, pt = Symbol("$state"), Bn = Symbol("legacy props"), pa = Symbol(""), ln = new class extends Error {
  constructor() {
    super(...arguments);
    re(this, "name", "StaleReactionError");
    re(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), un = 3, Kt = 8;
function ga() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function Yn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ba() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function _a(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function wa() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ya(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ka() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function xa() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function $a(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ca() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ea() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Sa() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Sr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let D = !1;
function Xe(e) {
  D = e;
}
let B;
function xe(e) {
  if (e === null)
    throw Sr(), It;
  return B = e;
}
function ar() {
  return xe(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Je(B)
  );
}
function E(e) {
  if (D) {
    if (/* @__PURE__ */ Je(B) !== null)
      throw Sr(), It;
    B = e;
  }
}
function we(e = 1) {
  if (D) {
    for (var t = e, r = B; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Je(r);
    B = r;
  }
}
function Vr() {
  for (var e = 0, t = B; ; ) {
    if (t.nodeType === Kt) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Qr) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Dn || r === Gr) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Je(t)
    );
    t.remove(), t = n;
  }
}
function Wn(e) {
  if (!e || e.nodeType !== Kt)
    throw Sr(), It;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Xn(e) {
  return e === this.v;
}
function za(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Un(e) {
  return !za(e, this.v);
}
let Yt = !1, Ia = !1;
function Ma() {
  Yt = !0;
}
let ne = null;
function br(e) {
  ne = e;
}
function Ce(e, t = !1, r) {
  ne = {
    p: ne,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Yt && !t ? { s: null, u: null, $: [] } : null
  };
}
function Ee(e) {
  var t = (
    /** @type {ComponentContext} */
    ne
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      vo(n);
  }
  return e !== void 0 && (t.x = e), ne = t.p, e ?? /** @type {T} */
  {};
}
function sr() {
  return !Yt || ne !== null && ne.l === null;
}
const Ta = /* @__PURE__ */ new WeakMap();
function Pa(e) {
  var t = j;
  if (t === null)
    return L.f |= mt, e;
  if ((t.f & on) === 0) {
    if ((t.f & qn) === 0)
      throw !t.parent && e instanceof Error && Zn(e), e;
    t.b.error(e);
  } else
    cn(e, t);
}
function cn(e, t) {
  for (; t !== null; ) {
    if ((t.f & qn) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (r) {
        e = r;
      }
    t = t.parent;
  }
  throw e instanceof Error && Zn(e), e;
}
function Zn(e) {
  const t = Ta.get(e);
  t && (jt(e, "message", {
    value: t.message
  }), jt(e, "stack", {
    value: t.stack
  }));
}
const Na = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let rt = [], Lt = [];
function Jn() {
  var e = rt;
  rt = [], pr(e);
}
function Kn() {
  var e = Lt;
  Lt = [], pr(e);
}
function Ra() {
  return rt.length > 0 || Lt.length > 0;
}
function zr(e) {
  if (rt.length === 0 && !Jt) {
    var t = rt;
    queueMicrotask(() => {
      t === rt && Jn();
    });
  }
  rt.push(e);
}
function Aa(e) {
  Lt.length === 0 && Na(Kn), Lt.push(e);
}
function Oa() {
  rt.length > 0 && Jn(), Lt.length > 0 && Kn();
}
function ja() {
  const e = (
    /** @type {Effect} */
    j.b
  );
  return e === null && ga(), e;
}
// @__NO_SIDE_EFFECTS__
function ir(e) {
  var t = $e | Te, r = L !== null && (L.f & $e) !== 0 ? (
    /** @type {Derived} */
    L
  ) : null;
  return j === null || r !== null && (r.f & Me) !== 0 ? t |= Me : j.f |= Bt, {
    ctx: ne,
    deps: null,
    effects: null,
    equals: Xn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      se
    ),
    wv: 0,
    parent: r ?? j,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function La(e, t) {
  let r = (
    /** @type {Effect | null} */
    j
  );
  r === null && ba();
  var n = (
    /** @type {Boundary} */
    r.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Ft(
    /** @type {V} */
    se
  ), s = null, i = !L;
  return Za(() => {
    try {
      var l = e();
      s && Promise.resolve(l).catch(() => {
      });
    } catch (v) {
      l = Promise.reject(v);
    }
    var c = () => l;
    o = (s == null ? void 0 : s.then(c, c)) ?? Promise.resolve(l), s = o;
    var d = (
      /** @type {Batch} */
      Z
    ), f = n.is_pending();
    i && (n.update_pending_count(1), f || d.increment());
    const p = (v, u = void 0) => {
      s = null, f || d.activate(), u ? u !== ln && (a.f |= mt, Gt(a, u)) : ((a.f & mt) !== 0 && (a.f ^= mt), Gt(a, v)), i && (n.update_pending_count(-1), f || d.decrement()), eo();
    };
    if (o.then(p, (v) => p(null, v || "unknown")), d)
      return () => {
        queueMicrotask(() => d.neuter());
      };
  }), new Promise((l) => {
    function c(d) {
      function f() {
        d === o ? l(a) : c(o);
      }
      d.then(f, f);
    }
    c(o);
  });
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  const t = /* @__PURE__ */ ir(e);
  return yo(t), t;
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  const t = /* @__PURE__ */ ir(e);
  return t.equals = Un, t;
}
function Gn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ve(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Da(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & $e) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function dn(e) {
  var t, r = j;
  at(Da(e));
  try {
    Gn(e), t = Co(e);
  } finally {
    at(r);
  }
  return t;
}
function Qn(e) {
  var t = dn(e);
  if (e.equals(t) || (e.v = t, e.wv = xo()), !yt) {
    var r = (nt || (e.f & Me) !== 0) && e.deps !== null ? lt : de;
    ge(e, r);
  }
}
function Ha(e, t, r) {
  const n = sr() ? ir : Le;
  if (t.length === 0) {
    r(e.map(n));
    return;
  }
  var o = Z, a = (
    /** @type {Effect} */
    j
  ), s = Fa(), i = ja();
  Promise.all(t.map((l) => /* @__PURE__ */ La(l))).then((l) => {
    o == null || o.activate(), s();
    try {
      r([...e.map(n), ...l]);
    } catch (c) {
      (a.f & wt) === 0 && cn(c, a);
    }
    o == null || o.deactivate(), eo();
  }).catch((l) => {
    i.error(l);
  });
}
function Fa() {
  var e = j, t = L, r = ne, n = Z;
  return function() {
    at(e), Be(t), br(r), n == null || n.activate();
  };
}
function eo() {
  at(null), Be(null), br(null);
}
const Ar = /* @__PURE__ */ new Set();
let Z = null, fr = null, xn = /* @__PURE__ */ new Set(), bt = [], Ir = null, Br = !1, Jt = !1;
var er, Rt, et, tr, rr, ft, At, vt, tt, Ot, nr, or, Ne, to, vr, Yr;
const xr = class xr {
  constructor() {
    ue(this, Ne);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    re(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    ue(this, er, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    ue(this, Rt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    ue(this, et, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    ue(this, tr, null);
    /**
     * True if an async effect inside this batch resolved and
     * its parent branch was already deleted
     */
    ue(this, rr, !1);
    /**
     * Async effects (created inside `async_derived`) encountered during processing.
     * These run after the rest of the batch has updated, since they should
     * always have the latest values
     * @type {Effect[]}
     */
    ue(this, ft, []);
    /**
     * The same as `#async_effects`, but for effects inside a newly-created
     * `<svelte:boundary>` — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    ue(this, At, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    ue(this, vt, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    ue(this, tt, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    ue(this, Ot, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    ue(this, nr, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    ue(this, or, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    re(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var o;
    bt = [], fr = null;
    for (const a of t)
      ct(this, Ne, to).call(this, a);
    if (N(this, ft).length === 0 && N(this, et) === 0) {
      ct(this, Ne, Yr).call(this);
      var r = N(this, vt), n = N(this, tt);
      pe(this, vt, []), pe(this, tt, []), pe(this, Ot, []), fr = Z, Z = null, $n(r), $n(n), Z === null ? Z = this : Ar.delete(this), (o = N(this, tr)) == null || o.resolve();
    } else
      ct(this, Ne, vr).call(this, N(this, vt)), ct(this, Ne, vr).call(this, N(this, tt)), ct(this, Ne, vr).call(this, N(this, Ot));
    for (const a of N(this, ft))
      Tt(a);
    for (const a of N(this, At))
      Tt(a);
    pe(this, ft, []), pe(this, At, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, r) {
    N(this, er).has(t) || N(this, er).set(t, r), this.current.set(t, t.v);
  }
  activate() {
    Z = this;
  }
  deactivate() {
    Z = null, fr = null;
    for (const t of xn)
      if (xn.delete(t), t(), Z !== null)
        break;
  }
  neuter() {
    pe(this, rr, !0);
  }
  flush() {
    bt.length > 0 ? ro() : ct(this, Ne, Yr).call(this), Z === this && (N(this, et) === 0 && Ar.delete(this), this.deactivate());
  }
  increment() {
    pe(this, et, N(this, et) + 1);
  }
  decrement() {
    if (pe(this, et, N(this, et) - 1), N(this, et) === 0) {
      for (const t of N(this, nr))
        ge(t, Te), Ht(t);
      for (const t of N(this, or))
        ge(t, lt), Ht(t);
      pe(this, vt, []), pe(this, tt, []), this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    N(this, Rt).add(t);
  }
  settled() {
    return (N(this, tr) ?? pe(this, tr, ha())).promise;
  }
  static ensure() {
    if (Z === null) {
      const t = Z = new xr();
      Ar.add(Z), Jt || xr.enqueue(() => {
        Z === t && t.flush();
      });
    }
    return Z;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    zr(t);
  }
};
er = new WeakMap(), Rt = new WeakMap(), et = new WeakMap(), tr = new WeakMap(), rr = new WeakMap(), ft = new WeakMap(), At = new WeakMap(), vt = new WeakMap(), tt = new WeakMap(), Ot = new WeakMap(), nr = new WeakMap(), or = new WeakMap(), Ne = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
to = function(t) {
  var d;
  t.f ^= de;
  for (var r = t.first; r !== null; ) {
    var n = r.f, o = (n & (Ze | it)) !== 0, a = o && (n & de) !== 0, s = a || (n & Pe) !== 0 || this.skipped_effects.has(r);
    if (!s && r.fn !== null) {
      if (o)
        r.f ^= de;
      else if ((n & nn) !== 0)
        N(this, tt).push(r);
      else if ((n & de) === 0)
        if ((n & sn) !== 0) {
          var i = (d = r.b) != null && d.is_pending() ? N(this, At) : N(this, ft);
          i.push(r);
        } else Tr(r) && ((r.f & Vt) !== 0 && N(this, Ot).push(r), Tt(r));
      var l = r.first;
      if (l !== null) {
        r = l;
        continue;
      }
    }
    var c = r.parent;
    for (r = r.next; r === null && c !== null; )
      r = c.next, c = c.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
vr = function(t) {
  for (const r of t)
    ((r.f & Te) !== 0 ? N(this, nr) : N(this, or)).push(r), ge(r, de);
  t.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
Yr = function() {
  if (!N(this, rr))
    for (const t of N(this, Rt))
      t();
  N(this, Rt).clear();
};
let Dt = xr;
function M(e) {
  var t = Jt;
  Jt = !0;
  try {
    for (var r; ; ) {
      if (Oa(), bt.length === 0 && !Ra() && (Z == null || Z.flush(), bt.length === 0))
        return Ir = null, /** @type {T} */
        r;
      ro();
    }
  } finally {
    Jt = t;
  }
}
function ro() {
  var e = Mt;
  Br = !0;
  try {
    var t = 0;
    for (Sn(!0); bt.length > 0; ) {
      var r = Dt.ensure();
      if (t++ > 1e3) {
        var n, o;
        qa();
      }
      r.process(bt), ot.clear();
    }
  } finally {
    Br = !1, Sn(e), Ir = null;
  }
}
function qa() {
  try {
    ka();
  } catch (e) {
    cn(e, Ir);
  }
}
let Ye = null;
function $n(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (wt | Pe)) === 0 && Tr(n) && (Ye = [], Tt(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? bo(n) : n.fn = null), (Ye == null ? void 0 : Ye.length) > 0)) {
        ot.clear();
        for (const o of Ye)
          Tt(o);
        Ye = [];
      }
    }
    Ye = null;
  }
}
function Ht(e) {
  for (var t = Ir = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (Br && t === j && (r & Vt) !== 0)
      return;
    if ((r & (it | Ze)) !== 0) {
      if ((r & de) === 0) return;
      t.f ^= de;
    }
  }
  bt.push(t);
}
const ot = /* @__PURE__ */ new Map();
function Ft(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Xn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function G(e, t) {
  const r = Ft(e);
  return yo(r), r;
}
// @__NO_SIDE_EFFECTS__
function _r(e, t = !1, r = !0) {
  var o;
  const n = Ft(e);
  return t || (n.equals = Un), Yt && r && ne !== null && ne.l !== null && ((o = ne.l).s ?? (o.s = [])).push(n), n;
}
function cr(e, t) {
  return R(
    e,
    ie(() => m(e))
  ), t;
}
function R(e, t, r = !1) {
  L !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!De || (L.f & kn) !== 0) && sr() && (L.f & ($e | Vt | sn | kn)) !== 0 && !(me != null && me.includes(e)) && Sa();
  let n = r ? ke(t) : t;
  return Gt(e, n);
}
function Gt(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    yt ? ot.set(e, t) : ot.set(e, r), e.v = t;
    var n = Dt.ensure();
    n.capture(e, r), (e.f & $e) !== 0 && ((e.f & Te) !== 0 && dn(
      /** @type {Derived} */
      e
    ), ge(e, (e.f & Me) === 0 ? de : lt)), e.wv = xo(), no(e, Te), sr() && j !== null && (j.f & de) !== 0 && (j.f & (Ze | it)) === 0 && (Se === null ? Ga([e]) : Se.push(e));
  }
  return t;
}
function Or(e) {
  R(e, e.v + 1);
}
function no(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = sr(), o = r.length, a = 0; a < o; a++) {
      var s = r[a], i = s.f;
      if (!(!n && s === j)) {
        var l = (i & Te) === 0;
        l && ge(s, t), (i & $e) !== 0 ? no(
          /** @type {Derived} */
          s,
          lt
        ) : l && ((i & Vt) !== 0 && Ye !== null && Ye.push(
          /** @type {Effect} */
          s
        ), Ht(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function ke(e) {
  if (typeof e != "object" || e === null || pt in e)
    return e;
  const t = rn(e);
  if (t !== da && t !== fa)
    return e;
  var r = /* @__PURE__ */ new Map(), n = en(e), o = /* @__PURE__ */ G(0), a = gt, s = (i) => {
    if (gt === a)
      return i();
    var l = L, c = gt;
    Be(null), In(a);
    var d = i();
    return Be(l), In(c), d;
  };
  return n && r.set("length", /* @__PURE__ */ G(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(i, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ca();
        var d = r.get(l);
        return d === void 0 ? d = s(() => {
          var f = /* @__PURE__ */ G(c.value);
          return r.set(l, f), f;
        }) : R(d, c.value, !0), !0;
      },
      deleteProperty(i, l) {
        var c = r.get(l);
        if (c === void 0) {
          if (l in i) {
            const d = s(() => /* @__PURE__ */ G(se));
            r.set(l, d), Or(o);
          }
        } else
          R(c, se), Or(o);
        return !0;
      },
      get(i, l, c) {
        var v;
        if (l === pt)
          return e;
        var d = r.get(l), f = l in i;
        if (d === void 0 && (!f || (v = ht(i, l)) != null && v.writable) && (d = s(() => {
          var u = ke(f ? i[l] : se), _ = /* @__PURE__ */ G(u);
          return _;
        }), r.set(l, d)), d !== void 0) {
          var p = m(d);
          return p === se ? void 0 : p;
        }
        return Reflect.get(i, l, c);
      },
      getOwnPropertyDescriptor(i, l) {
        var c = Reflect.getOwnPropertyDescriptor(i, l);
        if (c && "value" in c) {
          var d = r.get(l);
          d && (c.value = m(d));
        } else if (c === void 0) {
          var f = r.get(l), p = f == null ? void 0 : f.v;
          if (f !== void 0 && p !== se)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return c;
      },
      has(i, l) {
        var p;
        if (l === pt)
          return !0;
        var c = r.get(l), d = c !== void 0 && c.v !== se || Reflect.has(i, l);
        if (c !== void 0 || j !== null && (!d || (p = ht(i, l)) != null && p.writable)) {
          c === void 0 && (c = s(() => {
            var v = d ? ke(i[l]) : se, u = /* @__PURE__ */ G(v);
            return u;
          }), r.set(l, c));
          var f = m(c);
          if (f === se)
            return !1;
        }
        return d;
      },
      set(i, l, c, d) {
        var k;
        var f = r.get(l), p = l in i;
        if (n && l === "length")
          for (var v = c; v < /** @type {Source<number>} */
          f.v; v += 1) {
            var u = r.get(v + "");
            u !== void 0 ? R(u, se) : v in i && (u = s(() => /* @__PURE__ */ G(se)), r.set(v + "", u));
          }
        if (f === void 0)
          (!p || (k = ht(i, l)) != null && k.writable) && (f = s(() => /* @__PURE__ */ G(void 0)), R(f, ke(c)), r.set(l, f));
        else {
          p = f.v !== se;
          var _ = s(() => ke(c));
          R(f, _);
        }
        var g = Reflect.getOwnPropertyDescriptor(i, l);
        if (g != null && g.set && g.set.call(d, c), !p) {
          if (n && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              r.get("length")
            ), b = Number(l);
            Number.isInteger(b) && b >= w.v && R(w, b + 1);
          }
          Or(o);
        }
        return !0;
      },
      ownKeys(i) {
        m(o);
        var l = Reflect.ownKeys(i).filter((f) => {
          var p = r.get(f);
          return p === void 0 || p.v !== se;
        });
        for (var [c, d] of r)
          d.v !== se && !(c in i) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Ea();
      }
    }
  );
}
var Cn, oo, ao, so, io;
function Wr() {
  if (Cn === void 0) {
    Cn = window, oo = document, ao = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    so = ht(t, "firstChild").get, io = ht(t, "nextSibling").get, yn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), yn(r) && (r.__t = void 0);
  }
}
function Fe(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Re(e) {
  return so.call(e);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return io.call(e);
}
function z(e, t) {
  if (!D)
    return /* @__PURE__ */ Re(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Re(B)
  );
  if (r === null)
    r = B.appendChild(Fe());
  else if (t && r.nodeType !== un) {
    var n = Fe();
    return r == null || r.before(n), xe(n), n;
  }
  return xe(r), r;
}
function qe(e, t) {
  if (!D) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Re(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Je(r) : r;
  }
  return B;
}
function X(e, t = 1, r = !1) {
  let n = D ? B : e;
  for (var o; t--; )
    o = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Je(n);
  if (!D)
    return n;
  if (r && (n == null ? void 0 : n.nodeType) !== un) {
    var a = Fe();
    return n === null ? o == null || o.after(a) : n.before(a), xe(a), a;
  }
  return xe(n), /** @type {TemplateNode} */
  n;
}
function fn(e) {
  e.textContent = "";
}
function lo() {
  return !1;
}
function Va(e) {
  D && /* @__PURE__ */ Re(e) !== null && fn(e);
}
let En = !1;
function uo() {
  En || (En = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const r of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = r.__on_r) == null || t.call(r);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Mr(e) {
  var t = L, r = j;
  Be(null), at(null);
  try {
    return e();
  } finally {
    Be(t), at(r);
  }
}
function Ba(e, t, r, n = r) {
  e.addEventListener(t, () => Mr(r));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), n(!0);
  } : e.__on_r = () => n(!0), uo();
}
function co(e) {
  j === null && L === null && ya(), L !== null && (L.f & Me) !== 0 && j === null && wa(), yt && _a();
}
function Ya(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Oe(e, t, r, n = !0) {
  var o = j;
  o !== null && (o.f & Pe) !== 0 && (e |= Pe);
  var a = {
    ctx: ne,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Te,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o,
    b: o && o.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (r)
    try {
      Tt(a), a.f |= on;
    } catch (l) {
      throw Ve(a), l;
    }
  else t !== null && Ht(a);
  if (n) {
    var s = a;
    if (r && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    (s.f & Bt) === 0 && (s = s.first), s !== null && (s.parent = o, o !== null && Ya(s, o), L !== null && (L.f & $e) !== 0 && (e & it) === 0)) {
      var i = (
        /** @type {Derived} */
        L
      );
      (i.effects ?? (i.effects = [])).push(s);
    }
  }
  return a;
}
function fo(e) {
  const t = Oe(Er, null, !1);
  return ge(t, de), t.teardown = e, t;
}
function _t(e) {
  co();
  var t = (
    /** @type {Effect} */
    j.f
  ), r = !L && (t & Ze) !== 0 && (t & on) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ne
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return vo(e);
}
function vo(e) {
  return Oe(nn | Vn, e, !1);
}
function Wa(e) {
  return co(), Oe(Er | Vn, e, !0);
}
function Xa(e) {
  Dt.ensure();
  const t = Oe(it | Bt, e, !0);
  return () => {
    Ve(t);
  };
}
function Ua(e) {
  Dt.ensure();
  const t = Oe(it | Bt, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? vn(t, () => {
      Ve(t), n(void 0);
    }) : (Ve(t), n(void 0));
  });
}
function ho(e) {
  return Oe(nn, e, !1);
}
function Za(e) {
  return Oe(sn | Bt, e, !0);
}
function lr(e, t = 0) {
  return Oe(Er | t, e, !0);
}
function V(e, t = [], r = []) {
  Ha(t, r, (n) => {
    Oe(Er, () => e(...n.map(m)), !0);
  });
}
function mo(e, t = 0) {
  var r = Oe(Vt | t, e, !0);
  return r;
}
function qt(e, t = !0) {
  return Oe(Ze | Bt, e, !0, t);
}
function po(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = yt, n = L;
    zn(!0), Be(null);
    try {
      t.call(null);
    } finally {
      zn(r), Be(n);
    }
  }
}
function go(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const o = r.ac;
    o !== null && Mr(() => {
      o.abort(ln);
    });
    var n = r.next;
    (r.f & it) !== 0 ? r.parent = null : Ve(r, t), r = n;
  }
}
function Ja(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Ze) === 0 && Ve(t), t = r;
  }
}
function Ve(e, t = !0) {
  var r = !1;
  (t || (e.f & ma) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Ka(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), go(e, t && !r), wr(e, 0), ge(e, wt);
  var n = e.transitions;
  if (n !== null)
    for (const a of n)
      a.stop();
  po(e);
  var o = e.parent;
  o !== null && o.first !== null && bo(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Ka(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Je(e)
    );
    e.remove(), e = r;
  }
}
function bo(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function vn(e, t) {
  var r = [];
  hn(e, r, !0), _o(r, () => {
    Ve(e), t && t();
  });
}
function _o(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var o of e)
      o.out(n);
  } else
    t();
}
function hn(e, t, r) {
  if ((e.f & Pe) === 0) {
    if (e.f ^= Pe, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var n = e.first; n !== null; ) {
      var o = n.next, a = (n.f & an) !== 0 || (n.f & Ze) !== 0;
      hn(n, t, a ? r : !1), n = o;
    }
  }
}
function mn(e) {
  wo(e, !0);
}
function wo(e, t) {
  if ((e.f & Pe) !== 0) {
    e.f ^= Pe, (e.f & de) === 0 && (ge(e, Te), Ht(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, o = (r.f & an) !== 0 || (r.f & Ze) !== 0;
      wo(r, o ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
let Mt = !1;
function Sn(e) {
  Mt = e;
}
let yt = !1;
function zn(e) {
  yt = e;
}
let L = null, De = !1;
function Be(e) {
  L = e;
}
let j = null;
function at(e) {
  j = e;
}
let me = null;
function yo(e) {
  L !== null && (me === null ? me = [e] : me.push(e));
}
let ve = null, _e = 0, Se = null;
function Ga(e) {
  Se = e;
}
let ko = 1, Qt = 0, gt = Qt;
function In(e) {
  gt = e;
}
let nt = !1;
function xo() {
  return ++ko;
}
function Tr(e) {
  var f;
  var t = e.f;
  if ((t & Te) !== 0)
    return !0;
  if ((t & lt) !== 0) {
    var r = e.deps, n = (t & Me) !== 0;
    if (r !== null) {
      var o, a, s = (t & gr) !== 0, i = n && j !== null && !nt, l = r.length;
      if ((s || i) && (j === null || (j.f & wt) === 0)) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (o = 0; o < l; o++)
          a = r[o], (s || !((f = a == null ? void 0 : a.reactions) != null && f.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= gr), i && d !== null && (d.f & Me) === 0 && (c.f ^= Me);
      }
      for (o = 0; o < l; o++)
        if (a = r[o], Tr(
          /** @type {Derived} */
          a
        ) && Qn(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!n || j !== null && !nt) && ge(e, de);
  }
  return !1;
}
function $o(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(me != null && me.includes(e)))
    for (var o = 0; o < n.length; o++) {
      var a = n[o];
      (a.f & $e) !== 0 ? $o(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? ge(a, Te) : (a.f & de) !== 0 && ge(a, lt), Ht(
        /** @type {Effect} */
        a
      ));
    }
}
function Co(e) {
  var _;
  var t = ve, r = _e, n = Se, o = L, a = nt, s = me, i = ne, l = De, c = gt, d = e.f;
  ve = /** @type {null | Value[]} */
  null, _e = 0, Se = null, nt = (d & Me) !== 0 && (De || !Mt || L === null), L = (d & (Ze | it)) === 0 ? e : null, me = null, br(e.ctx), De = !1, gt = ++Qt, e.ac !== null && (Mr(() => {
    e.ac.abort(ln);
  }), e.ac = null);
  try {
    e.f |= qr;
    var f = (
      /** @type {Function} */
      e.fn
    ), p = f(), v = e.deps;
    if (ve !== null) {
      var u;
      if (wr(e, _e), v !== null && _e > 0)
        for (v.length = _e + ve.length, u = 0; u < ve.length; u++)
          v[_e + u] = ve[u];
      else
        e.deps = v = ve;
      if (!nt || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & $e) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (u = _e; u < v.length; u++)
          ((_ = v[u]).reactions ?? (_.reactions = [])).push(e);
    } else v !== null && _e < v.length && (wr(e, _e), v.length = _e);
    if (sr() && Se !== null && !De && v !== null && (e.f & ($e | lt | Te)) === 0)
      for (u = 0; u < /** @type {Source[]} */
      Se.length; u++)
        $o(
          Se[u],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Qt++, Se !== null && (n === null ? n = Se : n.push(.../** @type {Source[]} */
    Se))), (e.f & mt) !== 0 && (e.f ^= mt), p;
  } catch (g) {
    return Pa(g);
  } finally {
    e.f ^= qr, ve = t, _e = r, Se = n, L = o, nt = a, me = s, br(i), De = l, gt = c;
  }
}
function Qa(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = ca.call(r, e);
    if (n !== -1) {
      var o = r.length - 1;
      o === 0 ? r = t.reactions = null : (r[n] = r[o], r.pop());
    }
  }
  r === null && (t.f & $e) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ve === null || !ve.includes(t)) && (ge(t, lt), (t.f & (Me | gr)) === 0 && (t.f ^= gr), Gn(
    /** @type {Derived} **/
    t
  ), wr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function wr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Qa(e, r[n]);
}
function Tt(e) {
  var t = e.f;
  if ((t & wt) === 0) {
    ge(e, de);
    var r = j, n = Mt;
    j = e, Mt = !0;
    try {
      (t & Vt) !== 0 ? Ja(e) : go(e), po(e);
      var o = Co(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ko;
      var a;
      Hn && Ia && (e.f & Te) !== 0 && e.deps;
    } finally {
      Mt = n, j = r;
    }
  }
}
async function es() {
  await Promise.resolve(), M();
}
function m(e) {
  var t = e.f, r = (t & $e) !== 0;
  if (L !== null && !De) {
    var n = j !== null && (j.f & wt) !== 0;
    if (!n && !(me != null && me.includes(e))) {
      var o = L.deps;
      if ((L.f & qr) !== 0)
        e.rv < Qt && (e.rv = Qt, ve === null && o !== null && o[_e] === e ? _e++ : ve === null ? ve = [e] : (!nt || !ve.includes(e)) && ve.push(e));
      else {
        (L.deps ?? (L.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [L] : a.includes(L) || a.push(L);
      }
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var s = (
      /** @type {Derived} */
      e
    ), i = s.parent;
    i !== null && (i.f & Me) === 0 && (s.f ^= Me);
  }
  if (yt) {
    if (ot.has(e))
      return ot.get(e);
    if (r) {
      s = /** @type {Derived} */
      e;
      var l = s.v;
      return ((s.f & de) === 0 && s.reactions !== null || Eo(s)) && (l = dn(s)), ot.set(s, l), l;
    }
  } else r && (s = /** @type {Derived} */
  e, Tr(s) && Qn(s));
  if ((e.f & mt) !== 0)
    throw e.v;
  return e.v;
}
function Eo(e) {
  if (e.v === se) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ot.has(t) || (t.f & $e) !== 0 && Eo(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ie(e) {
  var t = De;
  try {
    return De = !0, e();
  } finally {
    De = t;
  }
}
const ts = -7169;
function ge(e, t) {
  e.f = e.f & ts | t;
}
function ce(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (pt in e)
      Xr(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const r = e[t];
        typeof r == "object" && r && pt in r && Xr(r);
      }
  }
}
function Xr(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        Xr(e[n], t);
      } catch {
      }
    const r = rn(e);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const n = Fn(r);
      for (let o in n) {
        const a = n[o].get;
        if (a)
          try {
            a.call(e);
          } catch {
          }
      }
    }
  }
}
const So = /* @__PURE__ */ new Set(), Ur = /* @__PURE__ */ new Set();
function rs(e, t, r, n = {}) {
  function o(a) {
    if (n.capture || Zt.call(t, a), !a.cancelBubble)
      return Mr(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? zr(() => {
    t.addEventListener(e, o, n);
  }) : t.addEventListener(e, o, n), o;
}
function st(e, t, r, n, o) {
  var a = { capture: n, passive: o }, s = rs(e, t, r, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && fo(() => {
    t.removeEventListener(e, s, a);
  });
}
function zo(e) {
  for (var t = 0; t < e.length; t++)
    So.add(e[t]);
  for (var r of Ur)
    r(e);
}
let Mn = null;
function Zt(e) {
  var b;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, o = ((b = e.composedPath) == null ? void 0 : b.call(e)) || [], a = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  Mn = e;
  var s = 0, i = Mn === e && e.__root;
  if (i) {
    var l = o.indexOf(i);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = o.indexOf(t);
    if (c === -1)
      return;
    l <= c && (s = l);
  }
  if (a = /** @type {Element} */
  o[s] || e.target, a !== t) {
    jt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var d = L, f = j;
    Be(null), at(null);
    try {
      for (var p, v = []; a !== null; ) {
        var u = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var _ = a["__" + n];
          if (_ != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (en(_)) {
              var [g, ...w] = _;
              g.apply(a, [e, ...w]);
            } else
              _.call(a, e);
        } catch (k) {
          p ? v.push(k) : p = k;
        }
        if (e.cancelBubble || u === t || u === null)
          break;
        a = u;
      }
      if (p) {
        for (let k of v)
          queueMicrotask(() => {
            throw k;
          });
        throw p;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Be(d), at(f);
    }
  }
}
function Io(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function He(e, t) {
  var r = (
    /** @type {Effect} */
    j
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function U(e, t) {
  var r = (t & ia) !== 0, n = (t & la) !== 0, o, a = !e.startsWith("<!>");
  return () => {
    if (D)
      return He(B, null), B;
    o === void 0 && (o = Io(a ? e : "<!>" + e), r || (o = /** @type {Node} */
    /* @__PURE__ */ Re(o)));
    var s = (
      /** @type {TemplateNode} */
      n || ao ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (r) {
      var i = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Re(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      He(i, l);
    } else
      He(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function ns(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), o = `<${r}>${n ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (D)
      return He(B, null), B;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Io(o)
      ), i = (
        /** @type {Element} */
        /* @__PURE__ */ Re(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Re(i);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return He(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function ur(e, t) {
  return /* @__PURE__ */ ns(e, t, "svg");
}
function he(e = "") {
  if (!D) {
    var t = Fe(e + "");
    return He(t, t), t;
  }
  var r = B;
  return r.nodeType !== un && (r.before(r = Fe()), xe(r)), He(r, r), r;
}
function yr() {
  if (D)
    return He(B, null), B;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Fe();
  return e.append(t, r), He(t, r), e;
}
function C(e, t) {
  if (D) {
    j.nodes_end = B, ar();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const os = ["touchstart", "touchmove"];
function as(e) {
  return os.includes(e);
}
function W(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Mo(e, t) {
  return To(e, t);
}
function ss(e, t) {
  Wr(), t.intro = t.intro ?? !1;
  const r = t.target, n = D, o = B;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Re(r)
    ); a && (a.nodeType !== Kt || /** @type {Comment} */
    a.data !== Dn); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Je(a);
    if (!a)
      throw It;
    Xe(!0), xe(
      /** @type {Comment} */
      a
    ), ar();
    const s = To(e, { ...t, anchor: a });
    if (B === null || B.nodeType !== Kt || /** @type {Comment} */
    B.data !== Qr)
      throw Sr(), It;
    return Xe(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((i) => i.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== It && console.warn("Failed to hydrate: ", s), t.recover === !1 && xa(), Wr(), fn(r), Xe(!1), Mo(e, t);
  } finally {
    Xe(n), xe(o);
  }
}
const xt = /* @__PURE__ */ new Map();
function To(e, { target: t, anchor: r, props: n = {}, events: o, context: a, intro: s = !0 }) {
  Wr();
  var i = /* @__PURE__ */ new Set(), l = (f) => {
    for (var p = 0; p < f.length; p++) {
      var v = f[p];
      if (!i.has(v)) {
        i.add(v);
        var u = as(v);
        t.addEventListener(v, Zt, { passive: u });
        var _ = xt.get(v);
        _ === void 0 ? (document.addEventListener(v, Zt, { passive: u }), xt.set(v, 1)) : xt.set(v, _ + 1);
      }
    }
  };
  l(tn(So)), Ur.add(l);
  var c = void 0, d = Ua(() => {
    var f = r ?? t.appendChild(Fe());
    return qt(() => {
      if (a) {
        Ce({});
        var p = (
          /** @type {ComponentContext} */
          ne
        );
        p.c = a;
      }
      o && (n.$$events = o), D && He(
        /** @type {TemplateNode} */
        f,
        null
      ), c = e(f, n) || {}, D && (j.nodes_end = B), a && Ee();
    }), () => {
      var u;
      for (var p of i) {
        t.removeEventListener(p, Zt);
        var v = (
          /** @type {number} */
          xt.get(p)
        );
        --v === 0 ? (document.removeEventListener(p, Zt), xt.delete(p)) : xt.set(p, v);
      }
      Ur.delete(l), f !== r && ((u = f.parentNode) == null || u.removeChild(f));
    };
  });
  return Zr.set(c, d), c;
}
let Zr = /* @__PURE__ */ new WeakMap();
function is(e, t) {
  const r = Zr.get(e);
  return r ? (Zr.delete(e), r(t)) : Promise.resolve();
}
function Pr(e) {
  ne === null && Yn(), Yt && ne.l !== null ? us(ne).m.push(e) : _t(() => {
    const t = ie(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ls(e) {
  ne === null && Yn(), Pr(() => () => ie(e));
}
function us(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function Ie(e, t, r = !1) {
  D && ar();
  var n = e, o = null, a = null, s = se, i = r ? an : 0, l = !1;
  const c = (v, u = !0) => {
    l = !0, p(u, v);
  };
  var d = null;
  function f() {
    d !== null && (d.lastChild.remove(), n.before(d), d = null);
    var v = s ? o : a, u = s ? a : o;
    v && mn(v), u && vn(u, () => {
      s ? a = null : o = null;
    });
  }
  const p = (v, u) => {
    if (s === (s = v)) return;
    let _ = !1;
    if (D) {
      const I = Wn(n) === Gr;
      !!s === I && (n = Vr(), xe(n), Xe(!1), _ = !0);
    }
    var g = lo(), w = n;
    if (g && (d = document.createDocumentFragment(), d.append(w = Fe())), s ? o ?? (o = u && qt(() => u(w))) : a ?? (a = u && qt(() => u(w))), g) {
      var b = (
        /** @type {Batch} */
        Z
      ), k = s ? o : a, $ = s ? a : o;
      k && b.skipped_effects.delete(k), $ && b.skipped_effects.add($), b.add_callback(f);
    } else
      f();
    _ && Xe(!0);
  };
  mo(() => {
    l = !1, t(c), l || p(null, null);
  }, i), D && (n = B);
}
function Tn(e, t) {
  D && xe(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Re(e)
  ), lr(() => {
    var r = t();
    for (var n in r) {
      var o = r[n];
      o ? e.style.setProperty(n, o) : e.style.removeProperty(n);
    }
  });
}
function cs(e, t, r) {
  for (var n = e.items, o = [], a = t.length, s = 0; s < a; s++)
    hn(t[s].e, o, !0);
  var i = a > 0 && o.length === 0 && r !== null;
  if (i) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    fn(l), l.append(
      /** @type {Element} */
      r
    ), n.clear(), je(e, t[0].prev, t[a - 1].next);
  }
  _o(o, () => {
    for (var c = 0; c < a; c++) {
      var d = t[c];
      i || (n.delete(d.k), je(e, d.prev, d.next)), Ve(d.e, !i);
    }
  });
}
function pn(e, t, r, n, o, a = null) {
  var s = e, i = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Ln) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = D ? xe(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Re(c)
    ) : c.appendChild(Fe());
  }
  D && ar();
  var d = null, f = !1, p = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ Le(() => {
    var w = r();
    return en(w) ? w : w == null ? [] : tn(w);
  }), u, _;
  function g() {
    ds(
      _,
      u,
      i,
      p,
      s,
      o,
      t,
      n,
      r
    ), a !== null && (u.length === 0 ? d ? mn(d) : d = qt(() => a(s)) : d !== null && vn(d, () => {
      d = null;
    }));
  }
  mo(() => {
    _ ?? (_ = /** @type {Effect} */
    j), u = /** @type {V[]} */
    m(v);
    var w = u.length;
    if (f && w === 0)
      return;
    f = w === 0;
    let b = !1;
    if (D) {
      var k = Wn(s) === Gr;
      k !== (w === 0) && (s = Vr(), xe(s), Xe(!1), b = !0);
    }
    if (D) {
      for (var $ = null, I, h = 0; h < w; h++) {
        if (B.nodeType === Kt && /** @type {Comment} */
        B.data === Qr) {
          s = /** @type {Comment} */
          B, b = !0, Xe(!1);
          break;
        }
        var x = u[h], H = n(x, h);
        I = Jr(
          B,
          i,
          $,
          null,
          x,
          H,
          h,
          o,
          t,
          r
        ), i.items.set(H, I), $ = I;
      }
      w > 0 && xe(Vr());
    }
    if (D)
      w === 0 && a && (d = qt(() => a(s)));
    else if (lo()) {
      var P = /* @__PURE__ */ new Set(), q = (
        /** @type {Batch} */
        Z
      );
      for (h = 0; h < w; h += 1) {
        x = u[h], H = n(x, h);
        var F = i.items.get(H) ?? p.get(H);
        F ? (t & ($r | Cr)) !== 0 && Po(F, x, h, t) : (I = Jr(
          null,
          i,
          null,
          null,
          x,
          H,
          h,
          o,
          t,
          r,
          !0
        ), p.set(H, I)), P.add(H);
      }
      for (const [Y, Q] of i.items)
        P.has(Y) || q.skipped_effects.add(Q.e);
      q.add_callback(g);
    } else
      g();
    b && Xe(!0), m(v);
  }), D && (s = B);
}
function ds(e, t, r, n, o, a, s, i, l) {
  var te, be, Ke, ut;
  var c = (s & ea) !== 0, d = (s & ($r | Cr)) !== 0, f = t.length, p = r.items, v = r.first, u = v, _, g = null, w, b = [], k = [], $, I, h, x;
  if (c)
    for (x = 0; x < f; x += 1)
      $ = t[x], I = i($, x), h = p.get(I), h !== void 0 && ((te = h.a) == null || te.measure(), (w ?? (w = /* @__PURE__ */ new Set())).add(h));
  for (x = 0; x < f; x += 1) {
    if ($ = t[x], I = i($, x), h = p.get(I), h === void 0) {
      var H = n.get(I);
      if (H !== void 0) {
        n.delete(I), p.set(I, H);
        var P = g ? g.next : u;
        je(r, g, H), je(r, H, P), jr(H, P, o), g = H;
      } else {
        var q = u ? (
          /** @type {TemplateNode} */
          u.e.nodes_start
        ) : o;
        g = Jr(
          q,
          r,
          g,
          g === null ? r.first : g.next,
          $,
          I,
          x,
          a,
          s,
          l
        );
      }
      p.set(I, g), b = [], k = [], u = g.next;
      continue;
    }
    if (d && Po(h, $, x, s), (h.e.f & Pe) !== 0 && (mn(h.e), c && ((be = h.a) == null || be.unfix(), (w ?? (w = /* @__PURE__ */ new Set())).delete(h))), h !== u) {
      if (_ !== void 0 && _.has(h)) {
        if (b.length < k.length) {
          var F = k[0], Y;
          g = F.prev;
          var Q = b[0], y = b[b.length - 1];
          for (Y = 0; Y < b.length; Y += 1)
            jr(b[Y], F, o);
          for (Y = 0; Y < k.length; Y += 1)
            _.delete(k[Y]);
          je(r, Q.prev, y.next), je(r, g, Q), je(r, y, F), u = F, g = y, x -= 1, b = [], k = [];
        } else
          _.delete(h), jr(h, u, o), je(r, h.prev, h.next), je(r, h, g === null ? r.first : g.next), je(r, g, h), g = h;
        continue;
      }
      for (b = [], k = []; u !== null && u.k !== I; )
        (u.e.f & Pe) === 0 && (_ ?? (_ = /* @__PURE__ */ new Set())).add(u), k.push(u), u = u.next;
      if (u === null)
        continue;
      h = u;
    }
    b.push(h), g = h, u = h.next;
  }
  if (u !== null || _ !== void 0) {
    for (var S = _ === void 0 ? [] : tn(_); u !== null; )
      (u.e.f & Pe) === 0 && S.push(u), u = u.next;
    var A = S.length;
    if (A > 0) {
      var J = (s & Ln) !== 0 && f === 0 ? o : null;
      if (c) {
        for (x = 0; x < A; x += 1)
          (Ke = S[x].a) == null || Ke.measure();
        for (x = 0; x < A; x += 1)
          (ut = S[x].a) == null || ut.fix();
      }
      cs(r, S, J);
    }
  }
  c && zr(() => {
    var Ge;
    if (w !== void 0)
      for (h of w)
        (Ge = h.a) == null || Ge.apply();
  }), e.first = r.first && r.first.e, e.last = g && g.e;
  for (var ee of n.values())
    Ve(ee.e);
  n.clear();
}
function Po(e, t, r, n) {
  (n & $r) !== 0 && Gt(e.v, t), (n & Cr) !== 0 ? Gt(
    /** @type {Value<number>} */
    e.i,
    r
  ) : e.i = r;
}
function Jr(e, t, r, n, o, a, s, i, l, c, d) {
  var f = (l & $r) !== 0, p = (l & ta) === 0, v = f ? p ? /* @__PURE__ */ _r(o, !1, !1) : Ft(o) : o, u = (l & Cr) === 0 ? s : Ft(s), _ = {
    i: u,
    v,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    if (e === null) {
      var g = document.createDocumentFragment();
      g.append(e = Fe());
    }
    return _.e = qt(() => i(
      /** @type {Node} */
      e,
      v,
      u,
      c
    ), D), _.e.prev = r && r.e, _.e.next = n && n.e, r === null ? d || (t.first = _) : (r.next = _, r.e.next = _.e), n !== null && (n.prev = _, n.e.prev = _.e), _;
  } finally {
  }
}
function jr(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, o = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, a = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); a !== null && a !== n; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Je(a)
    );
    o.before(a), a = s;
  }
}
function je(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function Pn(e, t, r, n, o) {
  var i;
  D && ar();
  var a = (i = t.$$slots) == null ? void 0 : i[r], s = !1;
  a === !0 && (a = t[r === "default" ? "children" : r], s = !0), a === void 0 || a(e, s ? () => n : n);
}
function fs(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const r in e.$$slots)
    t[r] = !0;
  return t;
}
function fe(e, t) {
  ho(() => {
    var r = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const o = document.createElement("style");
      o.id = t.hash, o.textContent = t.code, n.appendChild(o);
    }
  });
}
const Nn = [...` 	
\r\f \v\uFEFF`];
function vs(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), r) {
    for (var o in r)
      if (r[o])
        n = n ? n + " " + o : o;
      else if (n.length)
        for (var a = o.length, s = 0; (s = n.indexOf(o, s)) >= 0; ) {
          var i = s + a;
          (s === 0 || Nn.includes(n[s - 1])) && (i === n.length || Nn.includes(n[i])) ? n = (s === 0 ? "" : n.substring(0, s)) + n.substring(i + 1) : s = i;
        }
  }
  return n === "" ? null : n;
}
function hs(e, t) {
  return e == null ? null : String(e);
}
function kt(e, t, r, n, o, a) {
  var s = e.__className;
  if (D || s !== r || s === void 0) {
    var i = vs(r, n, a);
    (!D || i !== e.getAttribute("class")) && (i == null ? e.removeAttribute("class") : e.className = i), e.__className = r;
  } else if (a && o !== a)
    for (var l in a) {
      var c = !!a[l];
      (o == null || c !== !!o[l]) && e.classList.toggle(l, c);
    }
  return a;
}
function ms(e, t, r, n) {
  var o = e.__style;
  if (D || o !== t) {
    var a = hs(t);
    (!D || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e.__style = t;
  }
  return n;
}
const ps = Symbol("is custom element"), gs = Symbol("is html");
function bs(e) {
  if (D) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          oe(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          oe(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = r, Aa(r), uo();
  }
}
function oe(e, t, r, n) {
  var o = _s(e);
  D && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = r) && (t === "loading" && (e[pa] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && ws(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function _s(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [ps]: e.nodeName.includes("-"),
      [gs]: e.namespaceURI === ua
    })
  );
}
var Rn = /* @__PURE__ */ new Map();
function ws(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Rn.get(t);
  if (r) return r;
  Rn.set(t, r = []);
  for (var n, o = e, a = Element.prototype; a !== o; ) {
    n = Fn(o);
    for (var s in n)
      n[s].set && r.push(s);
    o = rn(o);
  }
  return r;
}
function No(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Ba(e, "input", async (o) => {
    var a = o ? e.defaultValue : e.value;
    if (a = Lr(e) ? Dr(a) : a, r(a), Z !== null && n.add(Z), await es(), a !== (a = t())) {
      var s = e.selectionStart, i = e.selectionEnd;
      e.value = a ?? "", i !== null && (e.selectionStart = s, e.selectionEnd = Math.min(i, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (D && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ie(t) == null && e.value) && (r(Lr(e) ? Dr(e.value) : e.value), Z !== null && n.add(Z)), lr(() => {
    var o = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        fr ?? Z
      );
      if (n.has(a))
        return;
    }
    Lr(e) && o === Dr(e.value) || e.type === "date" && !o && !e.value || o !== e.value && (e.value = o ?? "");
  });
}
function Lr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Dr(e) {
  return e === "" ? null : +e;
}
function An(e, t) {
  return e === t || (e == null ? void 0 : e[pt]) === t;
}
function Ue(e = {}, t, r, n) {
  return ho(() => {
    var o, a;
    return lr(() => {
      o = a, a = [], ie(() => {
        e !== r(...a) && (t(e, ...a), o && An(r(...o), e) && t(null, ...o));
      });
    }), () => {
      zr(() => {
        a && An(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function ys(e, t, r, n, o) {
  var a = () => {
    n(r[e]);
  };
  r.addEventListener(t, a), o ? lr(() => {
    r[e] = o();
  }) : a(), (r === document.body || r === window || r === document) && fo(() => {
    r.removeEventListener(t, a);
  });
}
function Ro(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    ne
  ), r = t.l.u;
  if (!r) return;
  let n = () => ce(t.s);
  if (e) {
    let o = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ ir(() => {
      let i = !1;
      const l = t.s;
      for (const c in l)
        l[c] !== a[c] && (a[c] = l[c], i = !0);
      return i && o++, o;
    });
    n = () => m(s);
  }
  r.b.length && Wa(() => {
    On(t, n), pr(r.b);
  }), _t(() => {
    const o = ie(() => r.m.map(va));
    return () => {
      for (const a of o)
        typeof a == "function" && a();
    };
  }), r.a.length && _t(() => {
    On(t, n), pr(r.a);
  });
}
function On(e, t) {
  if (e.l.s)
    for (const r of e.l.s) m(r);
  t();
}
function ks(e) {
  var t = Ft(0);
  return function() {
    return arguments.length === 1 ? (R(t, m(t) + 1), arguments[0]) : (m(t), e());
  };
}
let dr = !1;
function xs(e) {
  var t = dr;
  try {
    return dr = !1, [e(), dr];
  } finally {
    dr = t;
  }
}
function T(e, t, r, n) {
  var k;
  var o = !Yt || (r & na) !== 0, a = (r & aa) !== 0, s = (r & sa) !== 0, i = (
    /** @type {V} */
    n
  ), l = !0, c = () => (l && (l = !1, i = s ? ie(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), i), d;
  if (a) {
    var f = pt in e || Bn in e;
    d = ((k = ht(e, t)) == null ? void 0 : k.set) ?? (f && t in e ? ($) => e[t] = $ : void 0);
  }
  var p, v = !1;
  a ? [p, v] = xs(() => (
    /** @type {V} */
    e[t]
  )) : p = /** @type {V} */
  e[t], p === void 0 && n !== void 0 && (p = c(), d && (o && $a(), d(p)));
  var u;
  if (o ? u = () => {
    var $ = (
      /** @type {V} */
      e[t]
    );
    return $ === void 0 ? c() : (l = !0, $);
  } : u = () => {
    var $ = (
      /** @type {V} */
      e[t]
    );
    return $ !== void 0 && (i = /** @type {V} */
    void 0), $ === void 0 ? i : $;
  }, o && (r & oa) === 0)
    return u;
  if (d) {
    var _ = e.$$legacy;
    return (
      /** @type {() => V} */
      (function($, I) {
        return arguments.length > 0 ? ((!o || !I || _ || v) && d(I ? u() : $), $) : u();
      })
    );
  }
  var g = !1, w = ((r & ra) !== 0 ? ir : Le)(() => (g = !1, u()));
  a && m(w);
  var b = (
    /** @type {Effect} */
    j
  );
  return (
    /** @type {() => V} */
    (function($, I) {
      if (arguments.length > 0) {
        const h = I ? m(w) : o && a ? ke($) : $;
        return R(w, h), g = !0, i !== void 0 && (i = h), $;
      }
      return yt && g || (b.f & wt) !== 0 ? w.v : m(w);
    })
  );
}
function $s(e) {
  return new Cs(e);
}
var We, ze;
class Cs {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    ue(this, We);
    /** @type {Record<string, any>} */
    ue(this, ze);
    var a;
    var r = /* @__PURE__ */ new Map(), n = (s, i) => {
      var l = /* @__PURE__ */ _r(i, !1, !1);
      return r.set(s, l), l;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, i) {
          return m(r.get(i) ?? n(i, Reflect.get(s, i)));
        },
        has(s, i) {
          return i === Bn ? !0 : (m(r.get(i) ?? n(i, Reflect.get(s, i))), Reflect.has(s, i));
        },
        set(s, i, l) {
          return R(r.get(i) ?? n(i, l), l), Reflect.set(s, i, l);
        }
      }
    );
    pe(this, ze, (t.hydrate ? ss : Mo)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && M(), pe(this, We, o.$$events);
    for (const s of Object.keys(N(this, ze)))
      s === "$set" || s === "$destroy" || s === "$on" || jt(this, s, {
        get() {
          return N(this, ze)[s];
        },
        /** @param {any} value */
        set(i) {
          N(this, ze)[s] = i;
        },
        enumerable: !0
      });
    N(this, ze).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, N(this, ze).$destroy = () => {
      is(N(this, ze));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    N(this, ze).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    N(this, We)[t] = N(this, We)[t] || [];
    const n = (...o) => r.call(this, ...o);
    return N(this, We)[t].push(n), () => {
      N(this, We)[t] = N(this, We)[t].filter(
        /** @param {any} fn */
        (o) => o !== n
      );
    };
  }
  $destroy() {
    N(this, ze).$destroy();
  }
}
We = new WeakMap(), ze = new WeakMap();
let Ao;
typeof HTMLElement == "function" && (Ao = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    re(this, "$$ctor");
    /** Slots */
    re(this, "$$s");
    /** @type {any} The Svelte component instance */
    re(this, "$$c");
    /** Whether or not the custom element is connected */
    re(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    re(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    re(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    re(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    re(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    re(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    re(this, "$$me");
    this.$$ctor = t, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const o = this.$$c.$on(t, r);
      this.$$l_u.set(r, o);
    }
    super.addEventListener(t, r, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, n) {
    if (super.removeEventListener(t, r, n), this.$$c) {
      const o = this.$$l_u.get(r);
      o && (o(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(o) {
        return (a) => {
          const s = document.createElement("slot");
          o !== "default" && (s.name = o), C(a, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Es(this);
      for (const o of this.$$s)
        o in n && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), r.default = !0) : r[o] = t(o));
      for (const o of this.attributes) {
        const a = this.$$g_p(o.name);
        a in this.$$d || (this.$$d[a] = hr(a, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = $s({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Xa(() => {
        lr(() => {
          var o;
          this.$$r = !0;
          for (const a of mr(this.$$c)) {
            if (!((o = this.$$p_d[a]) != null && o.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = hr(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, s);
          }
          this.$$r = !1;
        });
      });
      for (const o in this.$$l)
        for (const a of this.$$l[o]) {
          const s = this.$$c.$on(o, a);
          this.$$l_u.set(a, s);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, r, n) {
    var o;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = hr(t, n, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return mr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function hr(e, t, r, n) {
  var a;
  const o = (a = r[e]) == null ? void 0 : a.type;
  if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (o) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (o) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Es(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function le(e, t, r, n, o, a) {
  let s = class extends Ao {
    constructor() {
      super(e, r, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return mr(t).map(
        (i) => (t[i].attribute || i).toLowerCase()
      );
    }
  };
  return mr(t).forEach((i) => {
    jt(s.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(l) {
        var f;
        l = hr(i, l, t), this.$$d[i] = l;
        var c = this.$$c;
        if (c) {
          var d = (f = ht(c, i)) == null ? void 0 : f.get;
          d ? c[i] = l : c.$set({ [i]: l });
        }
      }
    });
  }), n.forEach((i) => {
    jt(s.prototype, i, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[i];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const K = ke({
  open: !1,
  currentCommentId: 0,
  showResolvedOnly: !1,
  pulseMarkerId: 0
}), dt = ke({ open: !1 });
let $t = /* @__PURE__ */ G("");
const Et = {
  get value() {
    return m($t);
  },
  set(e) {
    R($t, e, !0), typeof window < "u" && sessionStorage.setItem("loop-guest-name", e);
  },
  get() {
    return !m($t) && typeof window < "u" && R($t, sessionStorage.getItem("loop-guest-name") || "", !0), m($t);
  },
  clear() {
    R($t, ""), typeof window < "u" && sessionStorage.removeItem("loop-guest-name");
  }
};
let gn = /* @__PURE__ */ G(ke({}));
const O = (e, t) => m(gn)[e] || t || e, Hr = (e, t, r) => {
  let n = m(gn)[e] || t || e;
  for (const [o, a] of Object.entries(r))
    n = n.replace(`{${o}}`, a);
  return n;
}, Ss = (e) => {
  R(gn, e, !0);
};
Ma();
var zs = /* @__PURE__ */ ur('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="svelte-405sw7"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5"></path><path d="M15 12H12M12 12H9M12 12V9M12 12V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>');
const Is = {
  hash: "svelte-405sw7",
  code: "svg.svelte-405sw7{width:var(--size,var(--icon-size));height:var(--size,var(--icon-size))}"
};
function Oo(e) {
  fe(e, Is);
  var t = zs();
  C(e, t);
}
le(Oo, {}, [], [], !0);
var Ms = /* @__PURE__ */ U('<span class="svelte-118lylz"><!></span>'), Ts = /* @__PURE__ */ U("<button><!> <!></button>");
const Ps = {
  hash: "svelte-118lylz",
  code: "button.svelte-118lylz{-webkit-appearance:none;appearance:none;background-color:var(--button-background);color:var(--button-color);padding:var(--button-padding);font-family:var(--font-family);letter-spacing:.01em;border-radius:var(--button-border-radius);gap:var(--button-gap);cursor:pointer;font-size:var(--button-font-size);font-weight:var(--button-font-weight);transition:var(--button-transition);white-space:nowrap;height:var(--button-height);outline-color:var(--button-outline-color);border:0;flex:none;justify-content:center;align-items:center;line-height:1;display:inline-flex}button.svelte-118lylz:focus-visible{outline-offset:var(--button-outline-offset)}button.svelte-118lylz:hover{color:var(--button-hover-color);background-color:var(--button-hover-background)}button.svelte-118lylz:focus-visible{color:var(--button-hover-color);background-color:var(--button-hover-background)}button.svelte-118lylz span:where(.svelte-118lylz){text-overflow:ellipsis;min-width:0;display:block;overflow-x:clip}button.button--header.svelte-118lylz{--icon-size:1.25rem;background-color:var(--button-header-background);height:var(--button-header-height);padding:var(--button-header-padding);mix-blend-mode:var(--button-header-blend-mode);border:0;border-radius:0}button.button--header.svelte-118lylz:first-child{border-top-left-radius:var(--border-radius-rounded);border-bottom-left-radius:var(--border-radius-rounded)}button.button--header.svelte-118lylz:hover{background-color:var(--button-header-hover-background)}button.button--header.svelte-118lylz:focus-visible{background-color:var(--button-header-hover-background)}button.button--panel.svelte-118lylz{background-color:var(--button-panel-background);height:auto;padding:var(--button-panel-padding);border-radius:var(--border-radius-rounded);border:0}button.button--panel.svelte-118lylz span:where(.svelte-118lylz){overflow:visible}button.button--solid.svelte-118lylz{background-color:var(--button-solid-background)}button.button--solid.svelte-118lylz:hover{color:var(--button-solid-hover-color);background-color:var(--button-solid-hover-background)}button.button--solid.svelte-118lylz:focus-visible{color:var(--button-solid-hover-color);background-color:var(--button-solid-hover-background)}button.button--small.svelte-118lylz{height:var(--button-small-height);font-size:var(--button-small-font-size)}button.button--icon.svelte-118lylz{background-color:var(--button-icon-background);color:var(--button-icon-color);height:var(--button-icon-height);box-shadow:var(--button-icon-shadow);aspect-ratio:1;font-size:var(--button-icon-font-size);border-radius:var(--button-icon-border-radius);border:0;padding:0}button.button--icon.svelte-118lylz:hover{background-color:var(--button-icon-hover-background);color:var(--button-icon-hover-color)}button.button--icon.svelte-118lylz:focus-visible{background-color:var(--button-icon-hover-background);color:var(--button-icon-hover-color)}button.button--marker.svelte-118lylz{background-color:var(--button-marker-background);color:var(--button-marker-color);height:var(--marker-size);width:var(--marker-size);font-weight:var(--button-marker-font-weight);border-radius:var(--button-marker-border-radius);border:0;padding:0}button.button--marker.svelte-118lylz :where(.svelte-118lylz){pointer-events:none}button.button--marker.button--marker-highlighted.svelte-118lylz{background-color:var(--button-marker-highlighted-background);color:var(--button-marker-highlighted-color)}button.button--marker-open.svelte-118lylz{background-color:var(--color-accent);color:var(--color-accent-dark)}button.button--filter.svelte-118lylz{background-color:var(--button-filter-background);color:var(--button-filter-color);height:var(--button-filter-height);font-size:var(--button-filter-font-size);padding:var(--button-filter-padding);border-radius:var(--button-filter-border-radius);flex:1}button.button--filter.svelte-118lylz:hover{color:var(--button-filter-hover-color);background-color:var(--button-filter-hover-background)}button.button--filter.svelte-118lylz:focus-visible{color:var(--button-filter-hover-color);background-color:var(--button-filter-hover-background)}button.button--filter.button--filter-active.svelte-118lylz{background-color:var(--button-filter-active-background);color:var(--button-filter-active-color);font-weight:var(--button-filter-active-font-weight)}button.button--filter.button--filter-active.svelte-118lylz:hover{background-color:var(--button-filter-active-background);color:var(--button-filter-active-color)}button.button--filter.button--filter-active.svelte-118lylz:focus-visible{background-color:var(--button-filter-active-background);color:var(--button-filter-active-color)}button.button--menu-item.svelte-118lylz{background-color:var(--button-menu-item-background);color:var(--button-menu-item-color);width:100%;padding:var(--button-menu-item-padding);border-radius:var(--button-menu-item-border-radius);font-size:var(--button-menu-item-font-size);justify-content:flex-start;gap:var(--button-menu-item-gap)}button.button--menu-item.svelte-118lylz:hover{background-color:var(--button-menu-item-hover-background);color:var(--button-menu-item-hover-color)}button.button--menu-item.svelte-118lylz:focus-visible{background-color:var(--button-menu-item-hover-background);color:var(--button-menu-item-hover-color)}button.button--menu-item.button--menu-item-active.svelte-118lylz{background-color:var(--button-menu-item-active-background);color:var(--button-menu-item-active-color);font-weight:var(--button-menu-item-active-font-weight)}button.button--menu-item.button--menu-item-active.svelte-118lylz:hover{background-color:var(--button-menu-item-active-background);color:var(--button-menu-item-active-color)}button.button--menu-item.button--menu-item-active.svelte-118lylz:focus-visible{background-color:var(--button-menu-item-active-background);color:var(--button-menu-item-active-color)}button.is-active.svelte-118lylz{background-color:var(--button-active-background);color:var(--button-active-color)}button.is-active.svelte-118lylz:hover{color:var(--button-active-color);background-color:var(--button-active-background)}button.is-active.svelte-118lylz:focus-visible{color:var(--button-active-color);background-color:var(--button-active-background)}button.svelte-118lylz:disabled{opacity:var(--button-disabled-opacity);cursor:not-allowed}button.svelte-118lylz:disabled:hover{color:var(--button-disabled-hover-color);background-color:var(--button-disabled-hover-background)}"
};
function ae(e, t) {
  const r = fs(t);
  Ce(t, !0), fe(e, Ps);
  const n = T(t, "onclick", 7), o = T(t, "onmouseenter", 7), a = T(t, "onmouseout", 7), s = T(t, "onblur", 7), i = T(t, "active", 7, !1), l = T(t, "type", 7, "button"), c = T(t, "style", 7, ""), d = T(t, "disabled", 7, !1), f = T(t, "ariaLabel", 7, ""), p = T(t, "id", 7, ""), v = T(t, "ariaHaspopup", 7, ""), u = T(t, "ariaExpanded", 7, ""), _ = T(t, "ariaControls", 7, "");
  var g = {
    get onclick() {
      return n();
    },
    set onclick(h) {
      n(h), M();
    },
    get onmouseenter() {
      return o();
    },
    set onmouseenter(h) {
      o(h), M();
    },
    get onmouseout() {
      return a();
    },
    set onmouseout(h) {
      a(h), M();
    },
    get onblur() {
      return s();
    },
    set onblur(h) {
      s(h), M();
    },
    get active() {
      return i();
    },
    set active(h = !1) {
      i(h), M();
    },
    get type() {
      return l();
    },
    set type(h = "button") {
      l(h), M();
    },
    get style() {
      return c();
    },
    set style(h = "") {
      c(h), M();
    },
    get disabled() {
      return d();
    },
    set disabled(h = !1) {
      d(h), M();
    },
    get ariaLabel() {
      return f();
    },
    set ariaLabel(h = "") {
      f(h), M();
    },
    get id() {
      return p();
    },
    set id(h = "") {
      p(h), M();
    },
    get ariaHaspopup() {
      return v();
    },
    set ariaHaspopup(h = "") {
      v(h), M();
    },
    get ariaExpanded() {
      return u();
    },
    set ariaExpanded(h = "") {
      u(h), M();
    },
    get ariaControls() {
      return _();
    },
    set ariaControls(h = "") {
      _(h), M();
    }
  }, w = Ts();
  w.__click = function(...h) {
    var x;
    (x = n()) == null || x.apply(this, h);
  };
  let b;
  w.__mouseout = function(...h) {
    var x;
    (x = a()) == null || x.apply(this, h);
  };
  var k = z(w);
  Pn(k, t, "icon", {});
  var $ = X(k, 2);
  {
    var I = (h) => {
      var x = Ms(), H = z(x);
      Pn(H, t, "default", {}), E(x), C(h, x);
    };
    Ie($, (h) => {
      r.default && h(I);
    });
  }
  return E(w), V(
    (h) => {
      b = kt(w, 1, `button ${c() ?? ""}`, "svelte-118lylz", b, h), oe(w, "type", l()), oe(w, "aria-label", f()), oe(w, "id", p()), oe(w, "aria-haspopup", v() === "menu" ? "menu" : null), oe(w, "aria-expanded", u() === "true" ? !0 : u() === "false" ? !1 : null), oe(w, "aria-controls", _() || null), w.disabled = d();
    },
    [() => ({ "is-active": i() })]
  ), st("mouseenter", w, function(...h) {
    var x;
    (x = o()) == null || x.apply(this, h);
  }), st("blur", w, function(...h) {
    var x;
    (x = s()) == null || x.apply(this, h);
  }), C(e, w), Ee(g);
}
zo(["click", "mouseout"]);
le(
  ae,
  {
    onclick: {},
    onmouseenter: {},
    onmouseout: {},
    onblur: {},
    active: {},
    type: {},
    style: {},
    disabled: {},
    ariaLabel: {},
    id: {},
    ariaHaspopup: {},
    ariaExpanded: {},
    ariaControls: {}
  },
  ["icon", "default"],
  [],
  !0
);
var Ns = /* @__PURE__ */ ur('<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="svelte-n9o07k"><path d="M15.359 16.9999L12.8975 14.5385L12.1459 15.2902C11.3764 16.0597 10.9916 16.4444 10.5781 16.3536C10.1645 16.2628 9.97641 15.7522 9.60019 14.731L8.34544 11.3253C7.59492 9.28816 7.21966 8.2696 7.74463 7.74463C8.2696 7.21966 9.28816 7.59492 11.3253 8.34544L14.731 9.60019C15.7522 9.97641 16.2628 10.1645 16.3536 10.5781C16.4444 10.9916 16.0597 11.3764 15.2902 12.1459L14.5385 12.8975L16.9999 15.359C17.2548 15.6138 17.3822 15.7413 17.4411 15.8834C17.5196 16.073 17.5196 16.2859 17.4411 16.4755C17.3822 16.6176 17.2548 16.7451 16.9999 16.9999C16.7451 17.2548 16.6176 17.3822 16.4755 17.4411C16.2859 17.5196 16.073 17.5196 15.8834 17.4411C15.7413 17.3822 15.6138 17.2548 15.359 16.9999Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.5 12.5C2.5 7.78595 2.5 5.42893 3.96447 3.96447C5.42893 2.5 7.78595 2.5 12.5 2.5C17.214 2.5 19.5711 2.5 21.0355 3.96447C22.5 5.42893 22.5 7.78595 22.5 12.5C22.5 17.214 22.5 19.5711 21.0355 21.0355C19.5711 22.5 17.214 22.5 12.5 22.5C7.78595 22.5 5.42893 22.5 3.96447 21.0355C2.5 19.5711 2.5 17.214 2.5 12.5Z" stroke="currentColor" stroke-width="1.5"></path></svg>');
const Rs = {
  hash: "svelte-n9o07k",
  code: "svg.svelte-n9o07k{width:var(--size,var(--icon-size));height:var(--size,var(--icon-size))}"
};
function jo(e) {
  fe(e, Rs);
  var t = Ns();
  C(e, t);
}
le(jo, {}, [], [], !0);
var As = /* @__PURE__ */ U('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1), Os = /* @__PURE__ */ U('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1), js = /* @__PURE__ */ U('<span class="count svelte-zne36e"> </span>'), Ls = /* @__PURE__ */ U('<header><div class="toggle svelte-zne36e"><!> <!></div> <!></header>');
const Ds = {
  hash: "svelte-zne36e",
  code: ".toggle.svelte-zne36e{display:flex}header.svelte-zne36e{position:var(--header-position);top:var(--header-top);max-width:100%;transform:var(--header-transform);color:var(--header-color);border-radius:var(--header-border-radius);z-index:var(--header-z-index);-webkit-backdrop-filter:var(--header-backdrop-filter);backdrop-filter:var(--header-backdrop-filter);box-shadow:var(--shadow-l),var(--shadow-light-edge),var(--shadow-dark-edge);background:var(--header-background);justify-content:space-between;align-items:stretch;display:flex;left:50%}header.bottom.svelte-zne36e{top:auto;bottom:var(--header-bottom-position)}.count.svelte-zne36e{width:var(--header-count-size);height:var(--header-count-size);border-radius:var(--header-count-border-radius);-webkit-backdrop-filter:var(--header-count-backdrop-filter);backdrop-filter:var(--header-count-backdrop-filter);box-shadow:var(--shadow-s),var(--shadow-light-edge),var(--shadow-dark-edge);background:var(--header-count-background);justify-content:center;align-items:center;display:flex}"
};
function Lo(e, t) {
  Ce(t, !0), fe(e, Ds);
  const r = T(t, "position", 7), n = T(t, "commentsCount", 7);
  var o = {
    get position() {
      return r();
    },
    set position(f) {
      r(f), M();
    },
    get commentsCount() {
      return n();
    },
    set commentsCount(f) {
      n(f), M();
    }
  }, a = Ls();
  let s;
  var i = z(a), l = z(i);
  {
    let f = /* @__PURE__ */ ye(() => !dt.open);
    ae(l, {
      onclick: () => {
        dt.open = !1;
      },
      get active() {
        return m(f);
      },
      style: "button--header",
      children: (p, v) => {
        we();
        var u = he();
        V((_) => W(u, _), [() => O("ui.header.browse.mode", "Browse")]), C(p, u);
      },
      $$slots: {
        default: !0,
        icon: (p, v) => {
          var u = As(), _ = qe(u);
          Tn(_, () => ({ "--size": "1.5em" })), jo(_.lastChild), E(_), C(p, u);
        }
      }
    });
  }
  var c = X(l, 2);
  ae(c, {
    onclick: () => {
      dt.open = !0;
    },
    style: "button--header",
    get active() {
      return dt.open;
    },
    children: (f, p) => {
      we();
      var v = he();
      V((u) => W(v, u), [() => O("ui.header.comment.mode", "Comment")]), C(f, v);
    },
    $$slots: {
      default: !0,
      icon: (f, p) => {
        var v = Os(), u = qe(v);
        Tn(u, () => ({ "--size": "1.5em" })), Oo(u.lastChild), E(u), C(f, v);
      }
    }
  }), E(i);
  var d = X(i, 2);
  {
    let f = /* @__PURE__ */ ye(() => `${n()} ${O("ui.header.aria.count", "unresolved comments")}`);
    ae(d, {
      onclick: () => K.open = !K.open,
      style: "button--panel",
      get ariaLabel() {
        return m(f);
      },
      children: (p, v) => {
        var u = js(), _ = z(u, !0);
        E(u), V(() => W(_, n())), C(p, u);
      },
      $$slots: { default: !0 }
    });
  }
  return E(a), V((f) => s = kt(a, 1, "svelte-zne36e", null, s, f), [() => ({ bottom: r() === "bottom" })]), C(e, a), Ee(o);
}
le(Lo, { position: {}, commentsCount: {} }, [], [], !0);
class Hs {
  constructor(t = {}) {
    re(this, "callbacks", /* @__PURE__ */ new Set());
    re(this, "debounceTimer", null);
    re(this, "rafId", null);
    re(this, "isListening", !1);
    re(this, "options");
    re(this, "handleResize", () => {
      this.debounceTimer && clearTimeout(this.debounceTimer), this.rafId && cancelAnimationFrame(this.rafId), this.debounceTimer = window.setTimeout(() => {
        this.options.useRAF ? this.rafId = requestAnimationFrame(() => {
          this.executeCallbacks();
        }) : this.executeCallbacks();
      }, this.options.debounceDelay);
    });
    this.options = {
      debounceDelay: t.debounceDelay ?? 100,
      useRAF: t.useRAF ?? !0
    };
  }
  executeCallbacks() {
    this.callbacks.forEach((t) => {
      try {
        t();
      } catch (r) {
        console.error("Error in resize callback:", r);
      }
    });
  }
  startListening() {
    this.isListening || (window.addEventListener("resize", this.handleResize, { passive: !0 }), this.isListening = !0);
  }
  stopListening() {
    this.isListening && (window.removeEventListener("resize", this.handleResize), this.isListening = !1);
  }
  /**
   * Add a callback to be executed on resize
   */
  subscribe(t) {
    return this.callbacks.add(t), this.startListening(), () => {
      this.callbacks.delete(t), this.callbacks.size === 0 && this.stopListening();
    };
  }
  /**
   * Clean up all resources
   */
  destroy() {
    this.callbacks.clear(), this.stopListening(), this.debounceTimer && clearTimeout(this.debounceTimer), this.rafId && cancelAnimationFrame(this.rafId);
  }
}
const Fs = new Hs();
function qs(e, t) {
  return Fs.subscribe(e);
}
const Do = () => {
  const e = document.body, t = document.documentElement;
  return Math.max(
    e.scrollHeight,
    e.offsetHeight,
    t.clientHeight,
    t.scrollHeight,
    t.offsetHeight
  );
};
var Vs = /* @__PURE__ */ U("<div><!></div>");
const Bs = {
  hash: "svelte-b0xs6h",
  code: ".marker.svelte-b0xs6h{position:var(--marker-position);z-index:var(--marker-z-index);transform:var(--marker-transform);border-radius:var(--marker-border-radius)}.marker--pulse.svelte-b0xs6h{animation:1.5s ease-in-out infinite svelte-b0xs6h-kirby-loop-pulse}@keyframes svelte-b0xs6h-kirby-loop-pulse{0%{box-shadow:0 0 0 0 var(--color-accent),0 0 0 0 #8080804d,0 0 0 0 #80808033}30%{box-shadow:0 0 0 8px #0000,0 0 #8080804d,0 0 #80808033}60%{box-shadow:0 0 0 8px #80808026,0 0 0 12px #0000,0 0 #80808033}to{box-shadow:0 0 0 16px #0000,0 0 0 12px #0000,0 0 0 8px #0000}}"
};
function Ho(e, t) {
  Ce(t, !0), fe(e, Bs);
  const r = T(t, "comment", 7);
  let n = /* @__PURE__ */ G(!1);
  _t(() => {
    R(n, K.pulseMarkerId === r().id);
  });
  let o = /* @__PURE__ */ G(null), a = /* @__PURE__ */ G(null), s = /* @__PURE__ */ G(null);
  Pr(() => {
    requestAnimationFrame(() => {
      i();
    }), R(
      s,
      qs(() => {
        i();
      }),
      !0
    );
  }), ls(() => {
    m(s) && m(s)();
  });
  function i() {
    if (!(!r() || !m(o)))
      try {
        R(a, document.querySelector(r().selector), !0);
        let _, g;
        if (m(a)) {
          const y = m(a).getBoundingClientRect(), S = y.width * r().selectorOffsetX / 100, A = y.height * r().selectorOffsetY / 100;
          _ = y.left + window.scrollX + S, g = y.top + window.scrollY + A;
        } else
          _ = Number(r().pagePositionX), g = Number(r().pagePositionY);
        const w = m(o).getBoundingClientRect(), b = w.width || 32, k = w.height || 32, $ = b / 2, I = k / 2, h = Do(), x = window.innerWidth, H = $, P = x - $, q = I, F = h - I, Y = Math.max(H, Math.min(P, _)), Q = Math.max(q, Math.min(F, g));
        m(o).style.left = `${Y}px`, m(o).style.top = `${Q}px`;
      } catch (_) {
        console.error("Error positioning marker:", _);
      }
  }
  function l(_) {
    K.currentCommentId = _;
  }
  function c() {
    K.currentCommentId = 0;
  }
  function d() {
    var g, w;
    K.open = !0;
    const _ = (w = (g = document.querySelector("loop")) == null ? void 0 : g.shadowRoot) == null ? void 0 : w.querySelector(`#comment-${r().id}`);
    _ && _.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  var f = {
    get comment() {
      return r();
    },
    set comment(_) {
      r(_), M();
    }
  }, p = yr(), v = qe(p);
  {
    var u = (_) => {
      var g = Vs();
      let w;
      var b = z(g);
      ae(b, {
        onmouseenter: () => l(r().id),
        onmouseout: c,
        onblur: c,
        onclick: d,
        get style() {
          return `button--marker button--marker-${r().status ?? ""}`;
        },
        children: (k, $) => {
          we();
          var I = he();
          V(() => W(I, r().id)), C(k, I);
        },
        $$slots: { default: !0 }
      }), E(g), Ue(g, (k) => R(o, k), () => m(o)), V(
        (k) => {
          w = kt(g, 1, `marker marker--${r().status ?? ""}`, "svelte-b0xs6h", w, k), oe(g, "id", `marker-${r().id ?? ""}`);
        },
        [() => ({ "marker--pulse": m(n) })]
      ), C(_, g);
    };
    Ie(v, (_) => {
      r() && _(u);
    });
  }
  return C(e, p), Ee(f);
}
le(Ho, { comment: {} }, [], [], !0);
const Ae = ke({ comments: [] }), Ys = "loop", Pt = document.querySelector("kirby-loop"), Ws = (Pt == null ? void 0 : Pt.getAttribute("csrf-token")) || "", Xs = (Pt == null ? void 0 : Pt.getAttribute("apibase")) || "/", Wt = {
  "Content-Type": "application/json",
  "X-CSRF-Token": Ws || ""
}, Xt = (e) => {
  const t = new URL(`${Xs}/${Ys}/${e}`, window.location.origin), r = new URLSearchParams(window.location.search), n = r.get("token") || r.get("_token");
  return n && t.searchParams.set(r.has("token") ? "token" : "_token", n), t.toString();
}, Us = async (e) => {
  const t = Xt(`comments/${e}`), n = await (await fetch(t, { headers: Wt })).json();
  return n.status === "ok" && (Ae.comments = n.comments), n.status === "ok";
}, Zs = async (e) => {
  const t = Xt("comment/new"), n = await (await fetch(t, { method: "POST", headers: Wt, body: JSON.stringify(e) })).json();
  n.status === "ok" && (Ae.comments = [n.comment, ...Ae.comments]);
}, Js = async (e) => {
  const t = Xt("comment/resolve"), n = await (await fetch(t, {
    method: "POST",
    headers: Wt,
    body: JSON.stringify({ id: e.id })
  })).json();
  if (n.success) {
    const o = Ae.comments.findIndex((a) => a.id === e.id);
    o !== -1 && (Ae.comments[o].status = "RESOLVED");
  }
  return n.success;
}, Ks = async (e) => {
  const t = Xt("comment/unresolve"), n = await (await fetch(t, {
    method: "POST",
    headers: Wt,
    body: JSON.stringify({ id: e.id })
  })).json();
  if (n.success) {
    const o = Ae.comments.findIndex((a) => a.id === e.id);
    o !== -1 && (Ae.comments[o].status = "OPEN");
  }
  return n.success;
}, Gs = async (e) => await (await fetch(Xt("guest/name"), { method: "POST", headers: Wt, body: JSON.stringify({ name: e }) })).json(), Qs = async (e) => {
  const t = Xt("comment/reply"), n = await (await fetch(t, { method: "POST", headers: Wt, body: JSON.stringify(e) })).json();
  if (n.status === "ok") {
    const o = Ae.comments.find((a) => a.id === n.reply.parentId);
    o && (o.replies = [...o.replies, n.reply]);
  }
}, Nt = ke({ text: "", parentId: null }), Fr = () => {
  Nt.text = "", Nt.parentId = null;
};
function ei(e) {
  var t;
  if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
    e.preventDefault();
    const r = (t = e.currentTarget) == null ? void 0 : t.closest("form");
    r && r.requestSubmit();
  }
}
var ti = /* @__PURE__ */ U('<form method="POST" class="svelte-wk4nfe"><div class="input"><textarea name="comment" required class="svelte-wk4nfe"></textarea></div> <div class="keyboard-hint svelte-wk4nfe"> </div> <footer class="svelte-wk4nfe"><!> <!></footer></form>');
const ri = {
  hash: "svelte-wk4nfe",
  code: "form.svelte-wk4nfe{cursor:auto;background-color:var(--comment-form-background);color:var(--comment-form-color);border-radius:var(--comment-form-border-radius);border:var(--comment-form-border);padding:0;overflow:hidden}textarea.svelte-wk4nfe{width:100%;height:var(--comment-form-textarea-height);resize:none;padding:var(--comment-form-textarea-padding);box-sizing:border-box;background-color:var(--comment-form-textarea-background);font-family:var(--comment-form-textarea-font-family);font-size:var(--comment-form-textarea-font-size);color:currentColor;border:0;margin:0}textarea.svelte-wk4nfe:focus-visible{outline:0}textarea.svelte-wk4nfe:focus{outline:0}footer.svelte-wk4nfe{padding:var(--comment-form-footer-padding);gap:var(--comment-form-footer-gap);display:flex}footer.svelte-wk4nfe button{flex:1}.keyboard-hint.svelte-wk4nfe{font-size:var(--comment-form-hint-font-size);color:var(--comment-form-hint-color);padding:var(--comment-form-hint-padding);white-space:nowrap;align-self:center;margin-left:auto}"
};
function bn(e, t) {
  Ce(t, !0), fe(e, ri);
  const r = T(t, "handleSubmit", 7), n = T(t, "cancel", 7), o = T(t, "parentId", 7, null);
  Nt.parentId = o() ? Number(o()) : null;
  let a;
  function s() {
    a == null || a.focus();
  }
  var i = {
    focusTextarea: s,
    get handleSubmit() {
      return r();
    },
    set handleSubmit(g) {
      r(g), M();
    },
    get cancel() {
      return n();
    },
    set cancel(g) {
      n(g), M();
    },
    get parentId() {
      return o();
    },
    set parentId(g = null) {
      o(g), M();
    }
  }, l = ti(), c = z(l), d = z(c);
  Va(d), d.__keydown = [ei], Ue(d, (g) => a = g, () => a), E(c);
  var f = X(c, 2), p = z(f, !0);
  E(f);
  var v = X(f, 2), u = z(v);
  ae(u, {
    type: "submit",
    style: "button--solid",
    children: (g, w) => {
      we();
      var b = he();
      V((k) => W(b, k), [
        () => o() ? O("ui.reply.submit", "Reply") : O("ui.comment.submit", "Submit")
      ]), C(g, b);
    },
    $$slots: { default: !0 }
  });
  var _ = X(u, 2);
  return ae(_, {
    get onclick() {
      return n();
    },
    children: (g, w) => {
      we();
      var b = he();
      V((k) => W(b, k), [() => O("ui.comment.cancel", "Cancel")]), C(g, b);
    },
    $$slots: { default: !0 }
  }), E(v), E(l), V(
    (g, w) => {
      oe(d, "placeholder", g), W(p, w);
    },
    [
      () => o() ? O("ui.reply.placeholder", "Write a reply...") : O("ui.comment.placeholder", "Enter your comment..."),
      () => O("ui.comment.keyboardHint", "⌘+Enter or Ctrl+Enter to submit")
    ]
  ), st("submit", l, function(...g) {
    var w;
    (w = r()) == null || w.apply(this, g);
  }), No(d, () => Nt.text, (g) => Nt.text = g), C(e, l), Ee(i);
}
zo(["keydown"]);
le(bn, { handleSubmit: {}, cancel: {}, parentId: {} }, [], ["focusTextarea"], !0);
var ni = /* @__PURE__ */ U('<div class="author svelte-1j8uocw"> </div>');
const oi = {
  hash: "svelte-1j8uocw",
  code: ".author.svelte-1j8uocw{font-size:var(--author-avatar-font-size);text-transform:uppercase;color:var(--author-avatar-color);background-color:var(--author-avatar-background-color);aspect-ratio:1;flex:0 0 var(--author-avatar-size);border-radius:var(--author-avatar-border-radius);justify-content:center;align-items:center;display:flex}"
};
function Fo(e, t) {
  Ce(t, !0), fe(e, oi);
  const r = T(t, "initials", 7);
  var n = {
    get initials() {
      return r();
    },
    set initials(s) {
      r(s), M();
    }
  }, o = ni(), a = z(o, !0);
  return E(o), V(() => W(a, r())), C(e, o), Ee(n);
}
le(Fo, { initials: {} }, [], [], !0);
function St(e, t = !0) {
  const r = new Date(e * 1e3), o = (/* @__PURE__ */ new Date()).getTime() - r.getTime(), a = Math.floor(o / (1e3 * 60)), s = Math.floor(o / (1e3 * 60 * 60)), i = Math.floor(o / (1e3 * 60 * 60 * 24));
  return t && i <= 3 ? a < 1 ? O("ui.time.just_now", "just now") : a === 1 ? O("ui.time.minute_ago", "a minute ago") : a < 60 ? Hr("ui.time.minutes_ago", "{count} minutes ago", { count: a.toString() }) : s === 1 ? O("ui.time.hour_ago", "an hour ago") : s < 24 ? Hr("ui.time.hours_ago", "{count} hours ago", { count: s.toString() }) : i === 1 ? O("ui.time.yesterday", "yesterday") : Hr("ui.time.days_ago", "{count} days ago", { count: i.toString() }) : r.toLocaleString(void 0, { dateStyle: "short", timeStyle: "short" });
}
function Kr(e) {
  return new Date(e * 1e3).toISOString();
}
function zt(e) {
  const t = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#x27;": "'",
    "&#x2F;": "/",
    "&#x60;": "`",
    "&#x3D;": "="
  };
  return e.replace(/&[#\w]+;/g, (r) => t[r] || r);
}
var ai = /* @__PURE__ */ U('<article class="reply svelte-1hcwekv"><!> <div class="reply__content svelte-1hcwekv"><header class="svelte-1hcwekv"><strong> </strong> <time class="svelte-1hcwekv"> </time></header> <div class="reply__text svelte-1hcwekv"> </div></div></article>');
const si = {
  hash: "svelte-1hcwekv",
  code: ".reply.svelte-1hcwekv{gap:var(--reply-gap);flex-direction:row;align-items:start;display:flex}.reply__content.svelte-1hcwekv{padding:var(--reply-content-padding);background-color:var(--reply-content-background);border-radius:var(--reply-content-border-radius)}.reply__content.svelte-1hcwekv header:where(.svelte-1hcwekv){gap:var(--reply-header-gap);margin-bottom:var(--reply-header-margin-bottom);justify-content:flex-start;align-items:center;display:flex}.reply__content.svelte-1hcwekv header:where(.svelte-1hcwekv) time:where(.svelte-1hcwekv){font-size:var(--reply-timestamp-font-size);color:var(--reply-timestamp-color)}@media (prefers-color-scheme:dark){.reply__content.svelte-1hcwekv{background-color:var(--reply-content-background-dark)}}.reply__text.svelte-1hcwekv{white-space:pre-line}"
};
function qo(e, t) {
  Ce(t, !1), fe(e, si);
  let r = T(t, "reply", 12);
  var n = {
    get reply() {
      return r();
    },
    set reply(u) {
      r(u), M();
    }
  };
  Ro();
  var o = ai(), a = z(o);
  {
    let u = /* @__PURE__ */ Le(() => (ce(r()), ie(() => r().author.substring(0, 1))));
    Fo(a, {
      get initials() {
        return m(u);
      }
    });
  }
  var s = X(a, 2), i = z(s), l = z(i), c = z(l, !0);
  E(l);
  var d = X(l, 2), f = z(d, !0);
  E(d), E(i);
  var p = X(i, 2), v = z(p, !0);
  return E(p), E(s), E(o), V(
    (u, _, g, w, b, k) => {
      oe(o, "data-id", (ce(r()), ie(() => r().id))), oe(o, "aria-label", `${u ?? ""} ${ce(r()), ie(() => r().author) ?? ""}: ${_ ?? ""}`), W(c, (ce(r()), ie(() => r().author))), oe(d, "datetime", g), oe(d, "title", w), W(f, b), W(v, k);
    },
    [
      () => (ce(O), ie(() => O("ui.reply.aria.label", "Reply by"))),
      () => (ce(zt), ce(r()), ie(() => zt(r().comment))),
      () => (ce(Kr), ce(r()), ie(() => Kr(r().timestamp))),
      () => (ce(St), ce(r()), ie(() => St(r().timestamp, !1))),
      () => (ce(St), ce(r()), ie(() => St(r().timestamp))),
      () => (ce(zt), ce(r()), ie(() => zt(r().comment)))
    ]
  ), C(e, o), Ee(n);
}
le(qo, { reply: {} }, [], [], !0);
var ii = /* @__PURE__ */ U("<li><!></li>"), li = /* @__PURE__ */ U('<ul class="comment__replies svelte-mz3hj0"></ul>'), ui = /* @__PURE__ */ U("<!> <!>", 1), ci = /* @__PURE__ */ U('<div class="buttons svelte-mz3hj0"><!></div>'), di = /* @__PURE__ */ U('<details><summary class="comment__header svelte-mz3hj0"><!> <div class="comment__content svelte-mz3hj0"><header class="svelte-mz3hj0"><strong> </strong> <time class="svelte-mz3hj0"> </time></header> <div class="comment__text svelte-mz3hj0"> </div></div> <!></summary> <!> <footer class="svelte-mz3hj0"><!></footer></details>');
const fi = {
  hash: "svelte-mz3hj0",
  code: '.comment.svelte-mz3hj0{--loop-marker-background:var(--comment-marker-background);--loop-marker-color:var(--comment-marker-color);--marker-size:var(--comment-avatar-size);position:relative}.comment.svelte-mz3hj0>:where(.svelte-mz3hj0){z-index:1;position:relative}.comment.svelte-mz3hj0:after{content:"";left:var(--comment-line-offset);width:var(--comment-line-width);background-color:var(--comment-line-background);z-index:0;height:calc(100% - 4rem);position:absolute;top:1.5rem}.comment.svelte-mz3hj0:not([open]):after{height:calc(100% - 2.75rem)}.comment__header.svelte-mz3hj0{font-size:var(--comment-header-font-size);padding:var(--comment-header-padding);align-items:flex-start;gap:var(--comment-header-gap);cursor:pointer;border-radius:var(--comment-header-border-radius);display:flex}.comment__header.svelte-mz3hj0:focus-visible{outline:2px solid var(--comment-header-outline-color);outline-offset:var(--comment-header-outline-offset)}.comment__header.svelte-mz3hj0 .comment__replies-count{bottom:0;left:var(--space-s);min-width:var(--comment-avatar-size);position:absolute}.comment__header.svelte-mz3hj0 header:where(.svelte-mz3hj0){gap:var(--comment-author-gap);margin-bottom:var(--comment-author-margin-bottom);justify-content:flex-start;align-items:center;display:flex}.comment__header.svelte-mz3hj0 header:where(.svelte-mz3hj0) time:where(.svelte-mz3hj0){font-size:var(--comment-timestamp-font-size);color:var(--comment-timestamp-color)}.comment__header.svelte-mz3hj0 .comment__content:where(.svelte-mz3hj0){padding:var(--comment-content-padding);background-color:var(--comment-content-background);border-radius:var(--comment-content-border-radius);flex:1}@media (prefers-color-scheme:dark){.comment__header.svelte-mz3hj0 .comment__content:where(.svelte-mz3hj0){background-color:var(--comment-content-background-dark)}}.comment__header.svelte-mz3hj0 .comment__text:where(.svelte-mz3hj0){white-space:pre-line}.comment__replies.svelte-mz3hj0{padding:var(--comment-replies-padding);gap:var(--comment-replies-gap);flex-direction:column;margin:0;list-style:none;display:flex}footer.svelte-mz3hj0{gap:var(--comment-footer-gap);padding:var(--comment-footer-padding);flex-direction:column;display:flex}footer.svelte-mz3hj0 .buttons:where(.svelte-mz3hj0){gap:var(--comment-buttons-gap);align-items:flex-end;display:flex}.is-hidden.svelte-mz3hj0{display:none}'
};
function Vo(e, t) {
  var Q;
  Ce(t, !0), fe(e, fi);
  const r = T(t, "comment", 7), n = T(t, "scrollIntoView", 7), o = T(t, "handleSubmit", 7), a = T(t, "cancel", 7);
  let s = /* @__PURE__ */ G(!1), i = /* @__PURE__ */ G(ke(((Q = r().replies) == null ? void 0 : Q.length) > 0 && !K.showResolvedOnly));
  var l = {
    get comment() {
      return r();
    },
    set comment(y) {
      r(y), M();
    },
    get scrollIntoView() {
      return n();
    },
    set scrollIntoView(y) {
      n(y), M();
    },
    get handleSubmit() {
      return o();
    },
    set handleSubmit(y) {
      o(y), M();
    },
    get cancel() {
      return a();
    },
    set cancel(y) {
      a(y), M();
    }
  }, c = di();
  let d;
  var f = z(c), p = z(f);
  {
    let y = /* @__PURE__ */ ye(() => r().status), S = /* @__PURE__ */ ye(() => K.currentCommentId === r().id ? "button--marker-highlighted" : ""), A = /* @__PURE__ */ ye(() => `${O("ui.comment.maker.aria.label", "Jump to marker")} ${r().id}`);
    ae(p, {
      get style() {
        return `button--marker button--marker-${m(y) ?? ""} ${m(S) ?? ""}`;
      },
      onclick: () => n()(r().id),
      onmouseenter: () => K.pulseMarkerId = r().id,
      onmouseout: () => K.pulseMarkerId = 0,
      get ariaLabel() {
        return m(A);
      },
      children: (J, ee) => {
        we();
        var te = he();
        V(() => W(te, r().id)), C(J, te);
      },
      $$slots: { default: !0 }
    });
  }
  var v = X(p, 2), u = z(v), _ = z(u), g = z(_, !0);
  E(_);
  var w = X(_, 2), b = z(w, !0);
  E(w), E(u);
  var k = X(u, 2), $ = z(k, !0);
  E(k), E(v);
  var I = X(v, 2);
  {
    var h = (y) => {
      {
        let S = /* @__PURE__ */ ye(() => `${O("ui.comment.replies.aria.label", "Show replies")} ${r().id}`);
        ae(y, {
          style: "button--solid button--small comment__replies-count",
          get ariaLabel() {
            return m(S);
          },
          onclick: () => {
            R(i, !m(i));
          },
          children: (A, J) => {
            we();
            var ee = he();
            V(() => {
              var te;
              return W(ee, ((te = r().replies) == null ? void 0 : te.length) > 0 ? `+${r().replies.length}` : "+");
            }), C(A, ee);
          },
          $$slots: { default: !0 }
        });
      }
    };
    Ie(I, (y) => {
      m(i) || y(h);
    });
  }
  E(f);
  var x = X(f, 2);
  {
    var H = (y) => {
      var S = li();
      pn(S, 21, () => r().replies, (A) => A.id, (A, J) => {
        var ee = ii(), te = z(ee);
        qo(te, {
          get reply() {
            return m(J);
          }
        }), E(ee), C(A, ee);
      }), E(S), C(y, S);
    };
    Ie(x, (y) => {
      var S;
      ((S = r().replies) == null ? void 0 : S.length) > 0 && y(H);
    });
  }
  var P = X(x, 2), q = z(P);
  {
    var F = (y) => {
      bn(y, {
        handleSubmit: (S) => {
          R(s, !1), o()(S);
        },
        cancel: () => {
          R(s, !1), a()();
        },
        get parentId() {
          return r().id;
        }
      });
    }, Y = (y) => {
      var S = ci(), A = z(S);
      {
        var J = (te) => {
          var be = ui(), Ke = qe(be);
          ae(Ke, {
            style: "button--solid",
            onclick: () => R(s, !0),
            children: (Ge, Ko) => {
              we();
              var Ut = he();
              V((Nr) => W(Ut, Nr), [() => O("ui.reply.submit", "Reply")]), C(Ge, Ut);
            },
            $$slots: { default: !0 }
          });
          var ut = X(Ke, 2);
          ae(ut, {
            onclick: () => Js(r()),
            children: (Ge, Ko) => {
              we();
              var Ut = he();
              V((Nr) => W(Ut, Nr), [() => O("ui.comment.mark.solved", "Resolve")]), C(Ge, Ut);
            },
            $$slots: { default: !0 }
          }), C(te, be);
        }, ee = (te) => {
          ae(te, {
            onclick: () => Ks(r()),
            children: (be, Ke) => {
              we();
              var ut = he();
              V((Ge) => W(ut, Ge), [() => O("ui.comment.mark.unsolved", "Reopen")]), C(be, ut);
            },
            $$slots: { default: !0 }
          });
        };
        Ie(A, (te) => {
          r().status === "OPEN" ? te(J) : te(ee, !1);
        });
      }
      E(S), C(y, S);
    };
    Ie(q, (y) => {
      m(s) ? y(F) : y(Y, !1);
    });
  }
  return E(P), E(c), V(
    (y, S, A, J, ee, te, be) => {
      oe(c, "id", `comment-${r().id ?? ""}`), d = kt(c, 1, `comment comment--${r().status ?? ""}`, "svelte-mz3hj0", d, y), oe(f, "aria-label", `${S ?? ""} ${r().author ?? ""}: ${A ?? ""}`), W(g, r().author), oe(w, "datetime", J), oe(w, "title", ee), W(b, te), W($, be);
    },
    [
      () => ({ "comment--current": K.currentCommentId === r().id }),
      () => O("ui.comment.summary.aria.label", "Comment by"),
      () => zt(r().comment),
      () => Kr(r().timestamp),
      () => St(r().timestamp, !1),
      () => St(r().timestamp),
      () => zt(r().comment)
    ]
  ), ys("open", "toggle", c, (y) => R(i, y), () => m(i)), C(e, c), Ee(l);
}
le(
  Vo,
  {
    comment: {},
    scrollIntoView: {},
    handleSubmit: {},
    cancel: {}
  },
  [],
  [],
  !0
);
var vi = /* @__PURE__ */ ur('<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="svelte-53p7re"><path d="M5.44067 14.4885C6.54524 14.4885 7.44067 13.5931 7.44067 12.4885C7.44067 11.384 6.54524 10.4885 5.44067 10.4885C4.3361 10.4885 3.44067 11.384 3.44067 12.4885C3.44067 13.5931 4.3361 14.4885 5.44067 14.4885Z" stroke="currentColor" stroke-width="1.5"></path><path d="M12.4407 14.4885C13.5452 14.4885 14.4407 13.5931 14.4407 12.4885C14.4407 11.384 13.5452 10.4885 12.4407 10.4885C11.3361 10.4885 10.4407 11.384 10.4407 12.4885C10.4407 13.5931 11.3361 14.4885 12.4407 14.4885Z" stroke="currentColor" stroke-width="1.5"></path><path d="M19.4407 14.4885C20.5452 14.4885 21.4407 13.5931 21.4407 12.4885C21.4407 11.384 20.5452 10.4885 19.4407 10.4885C18.3361 10.4885 17.4407 11.384 17.4407 12.4885C17.4407 13.5931 18.3361 14.4885 19.4407 14.4885Z" stroke="currentColor" stroke-width="1.5"></path></svg>');
const hi = {
  hash: "svelte-53p7re",
  code: "svg.svelte-53p7re{width:var(--size,var(--icon-size));height:var(--size,var(--icon-size))}"
};
function mi(e) {
  fe(e, hi);
  var t = vi();
  C(e, t);
}
le(mi, {}, [], [], !0);
var pi = /* @__PURE__ */ ur('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="svelte-1pd6b7x"><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="1.5"></path><path d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z" stroke="currentColor" stroke-width="1.5"></path></svg>');
const gi = {
  hash: "svelte-1pd6b7x",
  code: "svg.svelte-1pd6b7x{width:var(--size,var(--icon-size));height:var(--size,var(--icon-size))}"
};
function Bo(e) {
  fe(e, gi);
  var t = pi();
  C(e, t);
}
le(Bo, {}, [], [], !0);
var Ct = ks(() => K), bi = /* @__PURE__ */ U('<span class="filter-dot filter-dot--open svelte-jroghn" slot="icon" aria-hidden="true"></span>'), _i = /* @__PURE__ */ U('<span class="filter-dot filter-dot--resolved svelte-jroghn" slot="icon" aria-hidden="true"></span>'), wi = /* @__PURE__ */ U('<div class="context-menu-container svelte-jroghn"><div class="context-menu-trigger svelte-jroghn"><!></div> <div class="context-menu svelte-jroghn" popover="auto" role="menu" aria-labelledby="context-menu-trigger" id="context-menu"><div class="menu-section svelte-jroghn"><div class="menu-section-title svelte-jroghn"> </div> <div class="filter-options svelte-jroghn"><!> <!></div></div></div></div>');
const yi = {
  hash: "svelte-jroghn",
  code: ".context-menu-container.svelte-jroghn{bottom:var(--context-menu-container-bottom);right:var(--context-menu-container-right);z-index:var(--context-menu-container-z-index);position:absolute}.context-menu-trigger.svelte-jroghn{width:var(--context-menu-trigger-size);height:var(--context-menu-trigger-size);border-radius:var(--context-menu-trigger-border-radius);justify-content:center;align-items:center;display:flex}.context-menu.svelte-jroghn{background:var(--context-menu-background);border-radius:var(--context-menu-border-radius);box-shadow:var(--context-menu-shadow);padding:var(--context-menu-padding);min-width:var(--context-menu-min-width);border:0;margin:0;position:fixed}.context-menu.svelte-jroghn::backdrop{background:var(--context-menu-backdrop-background)}.menu-section.svelte-jroghn{gap:var(--context-menu-section-gap);flex-direction:column;display:flex}.menu-section-title.svelte-jroghn{font-size:var(--context-menu-title-font-size);font-weight:var(--context-menu-title-font-weight);color:var(--context-menu-title-color);margin-bottom:var(--context-menu-title-margin-bottom);text-transform:uppercase;letter-spacing:var(--context-menu-title-letter-spacing);padding:0}.filter-options.svelte-jroghn{gap:var(--context-menu-filter-gap);flex-direction:column;display:flex}.filter-dot.svelte-jroghn{width:var(--context-menu-filter-dot-size);height:var(--context-menu-filter-dot-size);border-radius:var(--context-menu-filter-dot-border-radius);margin-right:var(--context-menu-filter-dot-margin-right);display:inline-block}.filter-dot--open.svelte-jroghn{background:var(--context-menu-filter-dot-open-background)}.filter-dot--resolved.svelte-jroghn{background:var(--context-menu-filter-dot-resolved-background)}"
};
function Yo(e, t) {
  Ce(t, !1), fe(e, yi);
  let r = /* @__PURE__ */ _r(), n = /* @__PURE__ */ _r();
  const o = () => {
    m(r).matches(":popover-open") ? m(r).hidePopover() : (m(r).showPopover(), a());
  }, a = () => {
    if (!m(n) || !m(r)) return;
    const b = m(n).getBoundingClientRect(), k = m(r).getBoundingClientRect(), $ = b.top - k.height - 8, I = b.left - k.width + b.width;
    cr(r, m(r).style.position = "fixed"), cr(r, m(r).style.top = `${Math.max(8, $)}px`), cr(r, m(r).style.left = `${Math.max(8, I)}px`), cr(r, m(r).style.margin = "0");
  }, s = () => {
    m(r).hidePopover();
  }, i = (b) => {
    Ct(Ct().showResolvedOnly = b), s();
  };
  Ro();
  var l = wi(), c = z(l), d = z(c);
  {
    let b = /* @__PURE__ */ Le(() => O("ui.panel.menu.open", "Open menu")), k = /* @__PURE__ */ Le(() => {
      var $;
      return ($ = m(r)) != null && $.matches(":popover-open") ? "true" : "false";
    });
    ae(d, {
      onclick: o,
      get ariaLabel() {
        return m(b);
      },
      style: "button--icon",
      id: "context-menu-trigger",
      ariaHaspopup: "menu",
      get ariaExpanded() {
        return m(k);
      },
      ariaControls: "context-menu",
      $$slots: {
        icon: ($, I) => {
          Bo($);
        }
      }
    });
  }
  E(c), Ue(c, (b) => R(n, b), () => m(n));
  var f = X(c, 2), p = z(f), v = z(p), u = z(v, !0);
  E(v);
  var _ = X(v, 2), g = z(_);
  {
    let b = /* @__PURE__ */ Le(() => Ct().showResolvedOnly ? "" : "button--menu-item-active"), k = /* @__PURE__ */ Le(() => Ct().showResolvedOnly ? O("ui.panel.filter.open.inactive", "Show open comments") : O("ui.panel.filter.open.active", "Show open comments (currently selected)"));
    ae(g, {
      get style() {
        return `button--menu-item ${m(b) ?? ""}`;
      },
      onclick: () => i(!1),
      get ariaLabel() {
        return m(k);
      },
      children: ($, I) => {
        we();
        var h = he();
        V((x) => W(h, x), [() => O("ui.panel.filter.open", "Open")]), C($, h);
      },
      $$slots: {
        default: !0,
        icon: ($, I) => {
          var h = bi();
          C($, h);
        }
      }
    });
  }
  var w = X(g, 2);
  {
    let b = /* @__PURE__ */ Le(() => Ct().showResolvedOnly ? "button--menu-item-active" : ""), k = /* @__PURE__ */ Le(() => Ct().showResolvedOnly ? O("ui.panel.filter.resolved.active", "Show resolved comments (currently selected)") : O("ui.panel.filter.resolved.inactive", "Show resolved comments"));
    ae(w, {
      get style() {
        return `button--menu-item ${m(b) ?? ""}`;
      },
      onclick: () => i(!0),
      get ariaLabel() {
        return m(k);
      },
      children: ($, I) => {
        we();
        var h = he();
        V((x) => W(h, x), [() => O("ui.panel.filter.resolved", "Resolved")]), C($, h);
      },
      $$slots: {
        default: !0,
        icon: ($, I) => {
          var h = _i();
          C($, h);
        }
      }
    });
  }
  E(_), E(p), E(f), Ue(f, (b) => R(r, b), () => m(r)), E(l), V((b) => W(u, b), [() => O("ui.panel.menu.filter.title", "Show Comments")]), C(e, l), Ee();
}
le(Yo, {}, [], [], !0);
var ki = /* @__PURE__ */ ur('<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="svelte-7n587w"><path d="M12.5 22.5C18.0228 22.5 22.5 18.0228 22.5 12.5C22.5 6.97715 18.0228 2.5 12.5 2.5C6.97715 2.5 2.5 6.97715 2.5 12.5C2.5 14.0997 2.87562 15.6116 3.54346 16.9525C3.72094 17.3088 3.78001 17.7161 3.67712 18.1006L3.08151 20.3267C2.82295 21.293 3.70701 22.177 4.67335 21.9185L6.89939 21.3229C7.28393 21.22 7.69121 21.2791 8.04753 21.4565C9.38837 22.1244 10.9003 22.5 12.5 22.5Z" stroke="currentColor" stroke-width="1.5"></path><path d="M8.5 11H16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M8.5 14.5H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>');
const xi = {
  hash: "svelte-7n587w",
  code: "svg.svelte-7n587w{width:var(--size,var(--icon-size));height:var(--size,var(--icon-size))}"
};
function Wo(e) {
  fe(e, xi);
  var t = ki();
  C(e, t);
}
le(Wo, {}, [], [], !0);
var $i = /* @__PURE__ */ U('<li class="no-threads svelte-f3p84p"><p> </p></li>'), Ci = /* @__PURE__ */ U('<li class="no-threads svelte-f3p84p"><p> </p></li>'), Ei = /* @__PURE__ */ U('<li class="svelte-f3p84p"><!></li>'), Si = /* @__PURE__ */ U('<dialog><header class="svelte-f3p84p"><!></header> <ul class="threads svelte-f3p84p" data-lenis-prevent=""><!></ul> <!></dialog>');
const zi = {
  hash: "svelte-f3p84p",
  code: ".panel.svelte-f3p84p{position:var(--panel-position);right:var(--panel-right);top:var(--panel-top);transform:var(--panel-transform-closed);width:var(--panel-width);max-width:none;height:var(--panel-height);color:var(--panel-color);border-radius:var(--panel-border-radius);border-top-left-radius:var(--panel-border-top-left-radius);transition:var(--panel-transition);z-index:var(--panel-z-index);cursor:auto;background:0 0;border:0;flex-direction:column;justify-content:flex-start;align-items:flex-start;margin:0;padding:0;display:flex;bottom:auto;left:auto}@media screen and (max-width:600px){.panel.svelte-f3p84p{width:var(--panel-mobile-width)}}.panel.open.svelte-f3p84p{transform:var(--panel-transform-open);box-shadow:var(--panel-shadow)}.panel.open.svelte-f3p84p header:where(.svelte-f3p84p){transform:var(--panel-header-transform-open)}.panel.svelte-f3p84p header:where(.svelte-f3p84p){transform:var(--panel-header-transform-closed);border-top-left-radius:var(--panel-header-border-radius);border-bottom-left-radius:var(--panel-header-border-radius);gap:var(--panel-header-gap);-webkit-backdrop-filter:var(--panel-header-backdrop-filter);backdrop-filter:var(--panel-header-backdrop-filter);background:var(--panel-header-background);box-shadow:var(--shadow-l),var(--shadow-light-edge),var(--shadow-dark-edge);transition:transform var(--transition-duration)var(--transition-easing);border-top-right-radius:0;border-bottom-right-radius:0;flex-direction:column;display:flex;position:absolute}.panel.svelte-f3p84p header:where(.svelte-f3p84p):hover{transform:var(--panel-header-transform-hover)}.panel.svelte-f3p84p header:where(.svelte-f3p84p):focus-visible{transform:var(--panel-header-transform-hover)}.threads.svelte-f3p84p{overscroll-behavior:contain;padding:var(--panel-threads-padding);box-sizing:border-box;background-color:var(--panel-threads-background);width:100%;-webkit-backdrop-filter:var(--panel-threads-backdrop);backdrop-filter:var(--panel-threads-backdrop);z-index:2;border-radius:var(--panel-threads-border-radius);border-top-left-radius:var(--panel-threads-border-top-left-radius);scrollbar-width:var(--panel-threads-scrollbar-width);scrollbar-gutter:stable;flex-direction:column;flex:100%;margin:0;list-style:none;display:flex;overflow-y:auto}.threads.svelte-f3p84p li:where(.svelte-f3p84p)+li:where(.svelte-f3p84p){margin-top:var(--panel-threads-item-margin)}.threads.svelte-f3p84p .no-threads:where(.svelte-f3p84p){text-align:center;padding:var(--panel-no-threads-padding);font-size:var(--panel-no-threads-font-size);color:var(--panel-no-threads-color);margin-top:auto;margin-bottom:auto}"
};
function Xo(e, t) {
  Ce(t, !0), fe(e, zi);
  const r = T(t, "scrollIntoView", 7), n = T(t, "handleSubmit", 7), o = T(t, "cancel", 7);
  let a;
  const s = /* @__PURE__ */ ye(() => K.showResolvedOnly ? Ae.comments.filter((b) => b.status === "RESOLVED") : Ae.comments.filter((b) => b.status === "OPEN"));
  _t(() => {
    a && (K.open && !a.open ? a.show() : !K.open && a.open && a.close());
  }), Pr(() => {
    const b = (k) => {
      k.key === "Escape" && K.open && (K.open = !1);
    };
    return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
  });
  function i() {
    K.open = !1;
  }
  var l = {
    get scrollIntoView() {
      return r();
    },
    set scrollIntoView(b) {
      r(b), M();
    },
    get handleSubmit() {
      return n();
    },
    set handleSubmit(b) {
      n(b), M();
    },
    get cancel() {
      return o();
    },
    set cancel(b) {
      o(b), M();
    }
  }, c = Si();
  let d;
  var f = z(c), p = z(f);
  {
    let b = /* @__PURE__ */ ye(() => O("ui.panel.open", "Open comments"));
    ae(p, {
      onclick: () => K.open = !K.open,
      style: "button--header",
      get ariaLabel() {
        return m(b);
      },
      $$slots: {
        icon: (k, $) => {
          Wo(k);
        }
      }
    });
  }
  E(f);
  var v = X(f, 2), u = z(v);
  {
    var _ = (b) => {
      var k = $i(), $ = z(k), I = z($, !0);
      E($), E(k), V((h) => W(I, h), [() => O("ui.panel.no.comments", "No comments yet.")]), C(b, k);
    }, g = (b) => {
      var k = yr(), $ = qe(k);
      {
        var I = (x) => {
          var H = Ci(), P = z(H), q = z(P, !0);
          E(P), E(H), V((F) => W(q, F), [() => O("ui.panel.no.resolved", "No resolved comments yet.")]), C(x, H);
        }, h = (x) => {
          var H = yr(), P = qe(H);
          pn(P, 17, () => m(s), (q) => q.id, (q, F) => {
            var Y = Ei(), Q = z(Y);
            Vo(Q, {
              get comment() {
                return m(F);
              },
              get scrollIntoView() {
                return r();
              },
              get cancel() {
                return o();
              },
              get handleSubmit() {
                return n();
              }
            }), E(Y), C(q, Y);
          }), C(x, H);
        };
        Ie(
          $,
          (x) => {
            m(s).length === 0 && K.showResolvedOnly ? x(I) : x(h, !1);
          },
          !0
        );
      }
      C(b, k);
    };
    Ie(u, (b) => {
      m(s).length === 0 ? b(_) : b(g, !1);
    });
  }
  E(v);
  var w = X(v, 2);
  return Yo(w, {}), E(c), Ue(c, (b) => a = b, () => a), V(
    (b) => {
      d = kt(c, 1, "panel svelte-f3p84p", null, d, b), v.inert = !K.open;
    },
    [() => ({ open: K.open })]
  ), st("close", c, i), C(e, c), Ee(l);
}
le(Xo, { scrollIntoView: {}, handleSubmit: {}, cancel: {} }, [], [], !0);
function Ii(e) {
  const t = e.target;
  if (!t)
    throw new Error("No target element found in event");
  const r = Mi();
  for (const n of r)
    try {
      const o = n.generator(t);
      if (o && Ri(o, t))
        return o;
    } catch (o) {
      console.warn(`Strategy ${n.name} failed:`, o);
    }
  return Ti(t);
}
function Mi() {
  return [
    {
      name: "ID",
      priority: 1,
      generator: (e) => e.id && _n(e.id) ? `#${CSS.escape(e.id)}` : null
    },
    {
      name: "Unique Attributes",
      priority: 2,
      generator: (e) => {
        const t = ["data-testid", "data-id", "name", "for"];
        for (const r of t) {
          const n = e.getAttribute(r);
          if (n) {
            const o = `${e.tagName.toLowerCase()}[${r}="${CSS.escape(n)}"]`;
            if (Qe(o))
              return o;
          }
        }
        return null;
      }
    },
    {
      name: "Semantic Attributes",
      priority: 3,
      generator: (e) => {
        const t = [
          "aria-label",
          "aria-labelledby",
          "role",
          "type",
          "placeholder",
          "title",
          "alt"
        ], n = [e.tagName.toLowerCase()];
        for (const o of t) {
          const a = e.getAttribute(o);
          a && n.push(`[${o}="${CSS.escape(a)}"]`);
        }
        if (n.length > 1) {
          const o = n.join("");
          if (Qe(o))
            return o;
        }
        return null;
      }
    },
    {
      name: "Structural Attributes",
      priority: 4,
      generator: (e) => {
        const t = ["href", "src", "action", "value"], r = e.tagName.toLowerCase();
        for (const n of t) {
          const o = e.getAttribute(n);
          if (o && o.length > 0) {
            const a = `${r}[${n}="${CSS.escape(o)}"]`;
            if (Qe(a))
              return a;
          }
        }
        return null;
      }
    },
    {
      name: "Class Combinations",
      priority: 5,
      generator: (e) => {
        const t = kr(e);
        if (t.length === 0)
          return null;
        const r = e.tagName.toLowerCase();
        for (const n of t) {
          const o = `${r}.${CSS.escape(n)}`;
          if (Qe(o))
            return o;
        }
        if (t.length >= 2) {
          const n = t.slice(0, 3).map((a) => `.${CSS.escape(a)}`).join(""), o = `${r}${n}`;
          if (Qe(o))
            return o;
        }
        return null;
      }
    },
    {
      name: "Parent Context",
      priority: 6,
      generator: (e) => {
        const t = e.parentElement;
        if (!t) return null;
        const r = Pi(t);
        if (!r) return null;
        const n = e.tagName.toLowerCase(), o = Uo(e);
        if (o > 0) {
          const s = `${r} > ${n}:nth-of-type(${o})`;
          if (Qe(s))
            return s;
        }
        const a = kr(e);
        if (a.length > 0) {
          const s = `${r} > ${n}.${CSS.escape(a[0])}`;
          if (Qe(s))
            return s;
        }
        return null;
      }
    }
  ];
}
function kr(e) {
  const t = Array.from(e.classList), r = [
    /^(is-|has-|js-)/,
    // State prefixes
    /^(active|disabled|loading|selected|hover|focus)/,
    // State classes
    /^[a-z]+-[0-9]+$/,
    // Generated classes like 'item-123'
    /^(sm-|md-|lg-|xl-)/,
    // Responsive utilities
    /^(m-|p-|w-|h-|text-|bg-)/,
    // Tailwind-like utilities
    /^[a-f0-9]{6,}$/
    // Hash-like classes
  ];
  return t.filter((n) => !r.some((o) => o.test(n)));
}
function Ti(e) {
  const t = [];
  let r = e;
  for (; r && r !== document.body && t.length < 5; ) {
    const n = Ni(r);
    t.unshift(n);
    const o = t.join(" > ");
    if (Qe(o))
      return o;
    r = r.parentElement;
  }
  return t.join(" > ");
}
function Pi(e) {
  if (e.id && _n(e.id))
    return `#${CSS.escape(e.id)}`;
  const t = ["data-testid", "data-id", "name"];
  for (const o of t) {
    const a = e.getAttribute(o);
    if (a)
      return `[${o}="${CSS.escape(a)}"]`;
  }
  const r = e.tagName.toLowerCase(), n = kr(e);
  return n.length > 0 ? `${r}.${CSS.escape(n[0])}` : null;
}
function Ni(e) {
  const t = e.tagName.toLowerCase();
  if (e.id && _n(e.id))
    return `#${CSS.escape(e.id)}`;
  const r = kr(e);
  if (r.length > 0)
    return `${t}.${CSS.escape(r[0])}`;
  const n = Uo(e);
  return n > 1 ? `${t}:nth-of-type(${n})` : t;
}
function Uo(e) {
  let t = 1, r = e.previousElementSibling;
  for (; r; )
    r.tagName === e.tagName && t++, r = r.previousElementSibling;
  return t;
}
function Ri(e, t) {
  try {
    const r = document.querySelectorAll(e);
    return r.length === 1 && r[0] === t;
  } catch (r) {
    return console.warn(`Invalid selector: ${e}`, r), !1;
  }
}
function Qe(e) {
  try {
    return document.querySelectorAll(e).length === 1;
  } catch {
    return !1;
  }
}
function _n(e) {
  return ![
    /^[a-f0-9]{8,}$/,
    // Hex strings
    /^(ember|react|vue)[0-9]+/,
    // Framework generated
    /^[0-9]+$/,
    // Pure numbers
    /^temp-/
    // Temporary prefixes
  ].some((r) => r.test(e));
}
const Ai = (e, t) => {
  const r = e.pageX, n = e.pageY, o = t.getBoundingClientRect(), a = o.left + window.scrollX, s = o.top + window.scrollY, i = r - a, l = n - s;
  let c = i / t.offsetWidth * 100, d = l / t.offsetHeight * 100;
  return c = Number(c.toFixed(2)), d = Number(d.toFixed(2)), {
    selectorOffsetX: c,
    selectorOffsetY: d
  };
}, Oi = (e) => {
  const t = Ii(e), r = document.querySelector(t);
  if (!r) return;
  const { selectorOffsetX: n, selectorOffsetY: o } = Ai(e, r);
  let a = e.pageX, s = e.pageY;
  return a = Number(a.toFixed(2)), s = Number(s.toFixed(2)), {
    selector: t,
    selectorOffsetX: n,
    selectorOffsetY: o,
    pagePositionX: a,
    pagePositionY: s
  };
}, ji = () => {
  const e = document.body, t = document.documentElement;
  return Math.max(
    e.scrollWidth,
    e.offsetWidth,
    t.clientWidth,
    t.scrollWidth,
    t.offsetWidth
  );
}, Li = (e, t) => {
  let r = 0, n = 0;
  if (!e || !t) return { left: r, top: n };
  r = e.pagePositionX, n = e.pagePositionY;
  const o = t.offsetWidth, a = t.offsetHeight, s = ji(), i = Do();
  return r + o > s && (r = s - o), n + a > i && (n = i - a), r = Math.max(0, r), n = Math.max(0, n), { left: r, top: n };
};
var Di = /* @__PURE__ */ U("<dialog><!></dialog>");
const Hi = {
  hash: "svelte-grdie4",
  code: "dialog.svelte-grdie4{--loop-textarea-font-size:var(--comment-dialog-textarea-font-size);position:var(--comment-dialog-position);top:var(--top);left:var(--left);max-width:var(--comment-dialog-max-width);border-radius:var(--comment-dialog-border-radius);visibility:hidden;width:100%;max-height:none;box-shadow:var(--comment-dialog-shadow);border:0;margin:0;padding:0;overflow:hidden}dialog.is-visible.svelte-grdie4{visibility:visible}dialog.svelte-grdie4::backdrop{background-color:var(--comment-dialog-backdrop-background)}"
};
function Zo(e, t) {
  Ce(t, !0), fe(e, Hi);
  const r = T(t, "handleSubmit", 7), n = T(t, "showModal", 7), o = T(t, "newMarker", 7), a = T(t, "cancel", 7);
  let s, i, l = /* @__PURE__ */ G(ke({ left: 0, top: 0 })), c = /* @__PURE__ */ G(!1);
  _t(() => {
    n() ? (s.showModal(), R(l, Li(o(), s), !0), R(c, !0), requestAnimationFrame(() => {
      i == null || i.focusTextarea();
    })) : (s.close(), R(c, !1));
  });
  var d = {
    get handleSubmit() {
      return r();
    },
    set handleSubmit(u) {
      r(u), M();
    },
    get showModal() {
      return n();
    },
    set showModal(u) {
      n(u), M();
    },
    get newMarker() {
      return o();
    },
    set newMarker(u) {
      o(u), M();
    },
    get cancel() {
      return a();
    },
    set cancel(u) {
      a(u), M();
    }
  }, f = Di();
  let p;
  var v = z(f);
  return Ue(
    bn(v, {
      get handleSubmit() {
        return r();
      },
      get cancel() {
        return a();
      }
    }),
    (u) => i = u,
    () => i
  ), E(f), Ue(f, (u) => s = u, () => s), V(
    (u) => {
      ms(f, `--left: ${m(l).left ?? ""}px; --top: ${m(l).top ?? ""}px;`), p = kt(f, 1, "svelte-grdie4", null, p, u);
    },
    [() => ({ "is-visible": m(c) })]
  ), st("close", f, function(...u) {
    var _;
    (_ = a()) == null || _.apply(this, u);
  }), C(e, f), Ee(d);
}
le(Zo, { handleSubmit: {}, showModal: {}, newMarker: {}, cancel: {} }, [], [], !0);
var Fi = /* @__PURE__ */ U('<h2 class="svelte-1skdvhb"> </h2> <p class="welcome-text svelte-1skdvhb"> </p>', 1), qi = /* @__PURE__ */ U('<div><div class="input"><input type="text" required class="svelte-1skdvhb"/></div></div>'), Vi = /* @__PURE__ */ U('<dialog class="svelte-1skdvhb"><form class="svelte-1skdvhb"><!> <!> <footer class="svelte-1skdvhb"><!> <!></footer></form></dialog>');
const Bi = {
  hash: "svelte-1skdvhb",
  code: "dialog.svelte-1skdvhb{-webkit-backdrop-filter:var(--welcome-dialog-backdrop-filter);backdrop-filter:var(--welcome-dialog-backdrop-filter);border:var(--welcome-dialog-border);border-radius:var(--welcome-dialog-border-radius);box-shadow:var(--welcome-dialog-shadow);width:100%;max-width:var(--welcome-dialog-max-width);background:var(--welcome-dialog-background);padding:0}dialog.svelte-1skdvhb::backdrop{background:var(--welcome-dialog-backdrop-background);-webkit-backdrop-filter:var(--welcome-dialog-backdrop-backdrop-filter);backdrop-filter:var(--welcome-dialog-backdrop-backdrop-filter)}form.svelte-1skdvhb{padding:var(--welcome-dialog-form-padding)}h2.svelte-1skdvhb{margin:var(--welcome-dialog-title-margin);font-size:var(--welcome-dialog-title-font-size);color:var(--welcome-dialog-title-color);font-weight:var(--welcome-dialog-title-font-weight)}.welcome-text.svelte-1skdvhb{margin:var(--welcome-dialog-text-margin);font-size:var(--welcome-dialog-text-font-size);color:var(--welcome-dialog-text-color);line-height:var(--welcome-dialog-text-line-height)}.name-section.svelte-1skdvhb{margin-bottom:var(--welcome-dialog-name-section-margin)}.name-section.no-welcome.svelte-1skdvhb{border-top:none;padding-top:0}input.svelte-1skdvhb{border:var(--welcome-dialog-input-border);border-radius:var(--welcome-dialog-input-border-radius);width:100%;padding:var(--welcome-dialog-input-padding);box-sizing:border-box;font-family:var(--welcome-dialog-input-font-family);font-size:var(--welcome-dialog-input-font-size);color:var(--welcome-dialog-input-color);background:var(--welcome-dialog-input-background)}input.svelte-1skdvhb:focus-visible{outline-color:var(--welcome-dialog-input-outline-color);outline-offset:var(--welcome-dialog-input-outline-offset)}footer.svelte-1skdvhb{gap:var(--welcome-dialog-footer-gap);display:flex}footer.svelte-1skdvhb button{flex:1}"
};
function Jo(e, t) {
  Ce(t, !0), fe(e, Bi);
  const r = T(t, "headline", 7), n = T(t, "text", 7), o = T(t, "authenticated", 7), a = T(t, "welcomeEnabled", 7, !0), s = T(t, "onDismiss", 7);
  let i, l = /* @__PURE__ */ G(""), c = /* @__PURE__ */ G(!1);
  const d = () => i == null ? void 0 : i.showModal(), f = () => i == null ? void 0 : i.close();
  async function p(P) {
    var q;
    if (P.preventDefault(), o())
      (q = s()) == null || q(), i == null || i.close();
    else if (m(l).trim() && !m(c)) {
      R(c, !0);
      try {
        await Gs(m(l).trim()), Et.set(m(l).trim()), i == null || i.close();
      } catch (F) {
        console.error("Failed to set guest name:", F);
      } finally {
        R(c, !1);
      }
    }
  }
  function v() {
    i == null || i.close();
  }
  function u() {
    R(l, ""), R(c, !1);
  }
  var _ = {
    showModal: d,
    close: f,
    get headline() {
      return r();
    },
    set headline(P) {
      r(P), M();
    },
    get text() {
      return n();
    },
    set text(P) {
      n(P), M();
    },
    get authenticated() {
      return o();
    },
    set authenticated(P) {
      o(P), M();
    },
    get welcomeEnabled() {
      return a();
    },
    set welcomeEnabled(P = !0) {
      a(P), M();
    },
    get onDismiss() {
      return s();
    },
    set onDismiss(P) {
      s(P), M();
    }
  }, g = Vi(), w = z(g), b = z(w);
  {
    var k = (P) => {
      var q = Fi(), F = qe(q), Y = z(F, !0);
      E(F);
      var Q = X(F, 2), y = z(Q, !0);
      E(Q), V(() => {
        W(Y, r()), W(y, n());
      }), C(P, q);
    };
    Ie(b, (P) => {
      a() && P(k);
    });
  }
  var $ = X(b, 2);
  {
    var I = (P) => {
      var q = qi();
      let F;
      var Y = z(q), Q = z(Y);
      bs(Q), E(Y), E(q), V(
        (y, S) => {
          F = kt(q, 1, "name-section svelte-1skdvhb", null, F, y), oe(Q, "placeholder", S);
        },
        [
          () => ({ "no-welcome": !a() }),
          () => O("ui.welcome.guest.name.placeholder", "Enter your name")
        ]
      ), No(Q, () => m(l), (y) => R(l, y)), C(P, q);
    };
    Ie($, (P) => {
      o() || P(I);
    });
  }
  var h = X($, 2), x = z(h);
  ae(x, {
    type: "submit",
    style: "button--solid",
    get disabled() {
      return m(c);
    },
    children: (P, q) => {
      var F = yr(), Y = qe(F);
      {
        var Q = (S) => {
          var A = he();
          V((J) => W(A, J), [
            () => m(c) ? "Saving..." : O("ui.welcome.continue", "Continue")
          ]), C(S, A);
        }, y = (S) => {
          var A = he();
          V((J) => W(A, J), [() => O("ui.welcome.continue", "Continue")]), C(S, A);
        };
        Ie(Y, (S) => {
          o() ? S(y, !1) : S(Q);
        });
      }
      C(P, F);
    },
    $$slots: { default: !0 }
  });
  var H = X(x, 2);
  return ae(H, {
    onclick: v,
    get disabled() {
      return m(c);
    },
    children: (P, q) => {
      we();
      var F = he();
      V((Y) => W(F, Y), [() => O("ui.welcome.dismiss", "Dismiss")]), C(P, F);
    },
    $$slots: { default: !0 }
  }), E(h), E(w), E(g), Ue(g, (P) => i = P, () => i), st("close", g, u), st("submit", w, p), C(e, g), Ee(_);
}
le(
  Jo,
  {
    headline: {},
    text: {},
    authenticated: {},
    welcomeEnabled: {},
    onDismiss: {}
  },
  [],
  ["showModal", "close"],
  !0
);
var Yi = /* @__PURE__ */ U("<!> <!> <!> <!>", 1), Wi = /* @__PURE__ */ U("<!> <!>", 1);
function Xi(e, t) {
  Ce(t, !0);
  const r = T(t, "position", 7), n = T(t, "language", 7), o = T(t, "apibase", 7), a = T(t, "pageId", 7), s = T(t, "authenticated", 7), i = T(t, "welcome-enabled", 7), l = T(t, "welcome-headline", 7), c = T(t, "welcome-text", 7), d = T(t, "translations", 7);
  let f = /* @__PURE__ */ G(!1), p = /* @__PURE__ */ G(!1), v, u = /* @__PURE__ */ ye(() => s() === "true"), _ = /* @__PURE__ */ ye(() => i() === "true");
  const g = /* @__PURE__ */ ye(() => Ae.comments.filter((y) => y.status !== "RESOLVED")), w = "loop-welcome-dismissed", b = () => m(u) ? sessionStorage.getItem(w) === "true" : !1, k = () => {
    m(u) && sessionStorage.setItem(w, "true");
  };
  let $ = /* @__PURE__ */ G(null);
  const I = (y) => {
    var A;
    const S = (A = t.$$host.shadowRoot) == null ? void 0 : A.getElementById(`marker-${y}`);
    S && S.scrollIntoView({ behavior: "smooth", block: "center" });
  }, h = (y) => {
    var ee;
    const S = y.target, A = S.nodeName === "KIRBY-LOOP" || ((ee = S.parentElement) == null ? void 0 : ee.closest("loop"));
    if (!dt.open || A) return;
    if (!m(u) && !Et.get()) {
      v == null || v.showModal();
      return;
    }
    const J = Oi(y);
    J && (R($, J, !0), R(p, !0));
  }, x = () => {
    R(p, !1), Fr();
  }, H = (y) => {
    if (y.preventDefault(), !m(u) && !Et.get()) {
      v == null || v.showModal();
      return;
    }
    const { text: S, parentId: A } = Nt;
    if (A)
      Qs({ parentId: A, comment: S }), Fr();
    else {
      if (!m($)) return;
      const J = n() || "", ee = {
        url: window.location.href,
        comment: S,
        parentId: null,
        lang: J,
        pageId: a(),
        ...m($)
      };
      R(p, !1), Zs(ee), Fr();
    }
  };
  Pr(async () => {
    const y = JSON.parse(d() || "{}");
    Ss(y), R(f, await Us(a()), !0), Et.get(), m(_) && m(f) ? (m(u) && !b() || !m(u) && !Et.get()) && (v == null || v.showModal()) : !m(u) && !Et.get() && m(f) && (v == null || v.showModal());
  }), _t(() => {
    dt.open ? document.body.style.setProperty("cursor", `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z' stroke='black' stroke-width='1.5'/%3E%3Cpath d='M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z' stroke='white' stroke-width='0.75'/%3E%3Cpath d='M15 12H12M12 12H9M12 12V9M12 12V15' stroke='white' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M15 12H12M12 12H9M12 12V9M12 12V15' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E") 12 12, auto`) : document.body.style.removeProperty("cursor"), document.documentElement.classList.toggle("loop-overlay-open", dt.open);
  });
  var P = {
    get position() {
      return r();
    },
    set position(y) {
      r(y), M();
    },
    get language() {
      return n();
    },
    set language(y) {
      n(y), M();
    },
    get apibase() {
      return o();
    },
    set apibase(y) {
      o(y), M();
    },
    get pageId() {
      return a();
    },
    set pageId(y) {
      a(y), M();
    },
    get authenticated() {
      return s();
    },
    set authenticated(y) {
      s(y), M();
    },
    get "welcome-enabled"() {
      return i();
    },
    set "welcome-enabled"(y) {
      i(y), M();
    },
    get "welcome-headline"() {
      return l();
    },
    set "welcome-headline"(y) {
      l(y), M();
    },
    get "welcome-text"() {
      return c();
    },
    set "welcome-text"(y) {
      c(y), M();
    },
    get translations() {
      return d();
    },
    set translations(y) {
      d(y), M();
    }
  }, q = Wi();
  st("click", oo, h);
  var F = qe(q);
  {
    var Y = (y) => {
      var S = Yi(), A = qe(S);
      Lo(A, {
        get position() {
          return r();
        },
        get commentsCount() {
          return m(g).length;
        }
      });
      var J = X(A, 2);
      Xo(J, { scrollIntoView: I, handleSubmit: H, cancel: x });
      var ee = X(J, 2);
      pn(ee, 17, () => m(g), (be) => be.id, (be, Ke) => {
        Ho(be, {
          get comment() {
            return m(Ke);
          }
        });
      });
      var te = X(ee, 2);
      Zo(te, {
        handleSubmit: H,
        get showModal() {
          return m(p);
        },
        get newMarker() {
          return m($);
        },
        cancel: x
      }), C(y, S);
    };
    Ie(F, (y) => {
      m(f) && y(Y);
    });
  }
  var Q = X(F, 2);
  {
    let y = /* @__PURE__ */ ye(() => l() || ""), S = /* @__PURE__ */ ye(() => c() || "");
    Ue(
      Jo(Q, {
        get headline() {
          return m(y);
        },
        get text() {
          return m(S);
        },
        get authenticated() {
          return m(u);
        },
        get welcomeEnabled() {
          return m(_);
        },
        onDismiss: k
      }),
      (A) => v = A,
      () => v
    );
  }
  return C(e, q), Ee(P);
}
customElements.define("kirby-loop", le(
  Xi,
  {
    position: {},
    language: {},
    apibase: {},
    pageId: {},
    authenticated: {},
    "welcome-enabled": {},
    "welcome-headline": {},
    "welcome-text": {},
    translations: {}
  },
  [],
  [],
  !0
));
export {
  Xi as default
};
