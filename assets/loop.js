!function(){"use strict";try{if("undefined"!=typeof document){var r=document.createElement("style");r.appendChild(document.createTextNode('kirby-loop{--color-neutral-h:900;--color-neutral-c:0;--color-accent-h:900;--color-accent-c:.18;--color-accent-l:.75;--color-accent-dark-factor:.4;--color-accent-light-factor:1.2;--color-neutral-l-0:1;--color-neutral-l-100:.95;--color-neutral-l-200:.9;--color-neutral-l-300:.7;--color-neutral-l-400:.6;--color-neutral-l-600:.4;--color-neutral-l-500:.5;--color-neutral-l-700:.3;--color-neutral-l-800:.2;--color-neutral-l-900:.1;--color-neutral-l-1000:0}kirby-loop[theme=dark]{--color-accent-l:.85;--color-neutral-l-0:0;--color-neutral-l-100:.1;--color-neutral-l-200:.2;--color-neutral-l-300:.45;--color-neutral-l-400:.5;--color-neutral-l-600:.55;--color-neutral-l-500:.6;--color-neutral-l-700:.7;--color-neutral-l-800:.8;--color-neutral-l-900:.95;--color-neutral-l-1000:1;--shadow-s:0 .1em .25em oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.1);--shadow-m:0 2px 8px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.08),0 8px 16px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.12),0 16px 24px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.08);--shadow-l:0 4px 16px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.08),0 12px 32px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.12),0 24px 48px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.16),0 48px 80px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.08);--shadow-light-edge:inset 1px 1px 1px oklch(var(--color-neutral-l-1000)var(--color-neutral-c)var(--color-neutral-h)/.3);--shadow-dark-edge:inset -1px -1px 1px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.3);--background-glass:linear-gradient(135deg,transparent,var(--color-base-background-o-50));--panel-threads-background:oklch(var(--color-neutral-l-200)var(--color-neutral-c)var(--color-neutral-h)/.99)}kirby-loop{--color-base:var(--color-neutral-900);--color-base-background:var(--color-neutral-0);--color-base-background-o-5:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.05);--color-base-background-o-10:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.1);--color-base-background-o-20:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.2);--color-base-background-o-50:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.5);--color-base-background-o-60:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.6);--color-base-background-o-75:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.75);--color-base-background-o-95:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.95);--color-accent-light:oklch(calc(var(--color-accent-l)*var(--color-accent-light-factor))var(--color-accent-c)var(--color-accent-h));--color-accent:oklch(var(--color-accent-l)var(--color-accent-c)var(--color-accent-h));--color-accent-dark:oklch(calc(var(--color-accent-l)*var(--color-accent-dark-factor))var(--color-accent-c)var(--color-accent-h));--color-neutral-0:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-100:oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-200:oklch(var(--color-neutral-l-200)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-300:oklch(var(--color-neutral-l-300)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-400:oklch(var(--color-neutral-l-400)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-500:oklch(var(--color-neutral-l-500)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-600:oklch(var(--color-neutral-l-600)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-700:oklch(var(--color-neutral-l-700)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-800:oklch(var(--color-neutral-l-800)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-900:oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-1000:oklch(var(--color-neutral-l-1000)var(--color-neutral-c)var(--color-neutral-h));--color-success:oklch(.65 .15 150);--color-warning:oklch(.75 .15 80);--color-error:oklch(.65 .18 25);--color-info:oklch(.65 .15 220);--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;--line-height:1.4;--font-weight-light:300;--font-weight-normal:400;--font-weight-medium:550;--font-weight-bold:700;--font-size-3:clamp(1.9531rem,1.4262rem + 1.7565vw,3.5339rem);--font-size-4:clamp(1.5625rem,1.2503rem + 1.0408vw,2.4992rem);--font-size-5:clamp(1.25rem,1.0775rem + .575vw,1.7675rem);--font-size-6:clamp(1rem,.9167rem + .2778vw,1.25rem);--font-size-7:clamp(.8rem,.772rem + .0934vw,.884rem);--font-size-8:clamp(.6252rem,.6449rem + -.0165vw,.64rem);--border-radius-s:.125rem;--border-radius:.25rem;--border-radius-rounded:4096px;--space-2xs:clamp(.25rem,.2292rem + .0694vw,.3125rem);--space-xs:clamp(.5rem,.4583rem + .1389vw,.625rem);--space-s:clamp(1rem,.9167rem + .2778vw,1.25rem);--space-m:clamp(1.5rem,1.375rem + .4167vw,1.875rem);--space-l:clamp(2rem,1.8333rem + .5556vw,2.5rem);--space-2xs-xs:clamp(.25rem,.125rem + .4167vw,.625rem);--space-xs-s:clamp(.5rem,.25rem + .8333vw,1.25rem);--space-s-m:clamp(1rem,.7083rem + .9722vw,1.875rem);--space-m-l:clamp(1.5rem,1.1667rem + 1.1111vw,2.5rem);--space-s-l:clamp(1rem,.5rem + 1.6667vw,2.5rem);--shadow-s:0 .1em .25em oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.1);--shadow-m:0 2px 8px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.08),0 8px 16px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.12),0 16px 24px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.08);--shadow-l:0 4px 16px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.08),0 12px 32px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.12),0 24px 48px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.16),0 48px 80px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.08);--shadow-light-edge:inset 1px 1px 1px oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.3);--shadow-dark-edge:inset 0 -1px 1px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.3);--backdrop-blur:blur(6px);--backdrop-glass:var(--backdrop-blur)saturate(1.4)brightness(1.2);--background-glass:linear-gradient(135deg,transparent,var(--color-base-background-o-95));--background-glass-frosted:linear-gradient(0deg,var(--color-base-background-o-75)0%,var(--color-base-background-o-95)50%);--opacity-subtle:.5;--opacity-medium:.7;--opacity-strong:.9;--outline-color:var(--color-accent);--outline-offset:.25rem;--transition-duration:.2s;--transition-duration-jump:.4s;--transition-easing-jump:cubic-bezier(.44,1.2,.64,1);--transition-easing:cubic-bezier(0,0,.2,1);--z-loop-marker:9998;--z-loop-panel:9999;--z-loop-dialog:10000;--author-avatar-color:var(--color-neutral-600);--author-avatar-background-color:var(--color-neutral-100);--author-avatar-size:2.5rem;--author-avatar-border-radius:var(--border-radius-rounded);--author-avatar-font-size:var(--font-size-6);--button-background:transparent;--button-color:var(--color-neutral-600);--button-border-radius:var(--border-radius);--button-padding:0 var(--space-xs);--button-gap:var(--space-2xs);--button-font-size:var(--font-size-7);--button-font-weight:var(--font-weight-medium);--button-height:2.25rem;--button-transition:var(--transition-duration)var(--transition-easing);--button-outline-color:var(--outline-color);--button-outline-offset:var(--outline-offset);--button-hover-color:var(--color-neutral-900);--button-hover-background:var(--color-neutral-200);--button-header-background:transparent;--button-header-height:3rem;--button-header-padding:0 var(--space-s);--button-header-hover-background:var(--color-base-background-o-95);--button-header-blend-mode:multiply;--button-panel-background:transparent;--button-panel-padding:0 calc(var(--space-s)*.4);--button-solid-background:var(--color-neutral-100);--button-solid-hover-color:var(--color-neutral-900);--button-solid-hover-background:var(--color-neutral-200);--button-small-height:1.5rem;--button-small-font-size:var(--font-size-7);--button-icon-background:var(--color-neutral-0);--button-icon-color:var(--color-neutral-500);--button-icon-height:3rem;--button-icon-shadow:var(--shadow-s);--button-icon-border-radius:var(--border-radius-rounded);--button-icon-font-size:var(--font-size-6);--button-icon-hover-background:var(--color-neutral-200);--button-icon-hover-color:var(--color-neutral-900);--button-marker-background:var(--color-accent);--button-marker-color:var(--color-accent-dark);--button-marker-font-weight:var(--font-weight-bold);--button-marker-border-radius:var(--border-radius-rounded);--button-marker-highlighted-background:var(--color-accent);--button-marker-highlighted-color:var(--color-accent-dark);--button-filter-background:transparent;--button-filter-color:var(--color-neutral-500);--button-filter-height:1.75rem;--button-filter-font-size:var(--font-size-8);--button-filter-padding:0 var(--space-xs);--button-filter-border-radius:calc(var(--border-radius) - 2px);--button-filter-hover-color:var(--color-neutral-700);--button-filter-hover-background:var(--color-neutral-200);--button-filter-active-background:var(--color-base-background);--button-filter-active-color:var(--color-base);--button-filter-active-font-weight:var(--font-weight-medium);--button-menu-item-background:transparent;--button-menu-item-color:var(--color-neutral-700);--button-menu-item-padding:var(--space-2xs)var(--space-xs);--button-menu-item-border-radius:calc(var(--border-radius) - 2px);--button-menu-item-font-size:var(--font-size-7);--button-menu-item-gap:var(--space-2xs);--button-menu-item-hover-background:var(--color-neutral-100);--button-menu-item-hover-color:var(--color-neutral-900);--button-menu-item-active-background:var(--color-accent-light);--button-menu-item-active-color:var(--color-accent-dark);--button-menu-item-active-font-weight:var(--font-weight-medium);--button-active-background:var(--color-accent);--button-active-color:var(--color-accent-dark);--button-disabled-opacity:var(--opacity-subtle);--button-disabled-hover-color:var(--color-neutral-700);--button-disabled-hover-background:var(--color-neutral-100);--comment-avatar-size:2.5rem;--comment-marker-background:var(--color-neutral-200);--comment-marker-color:var(--color-neutral-800);--comment-line-background:var(--color-neutral-100);--comment-line-width:.1rem;--comment-line-offset:calc(var(--space-s) + var(--comment-avatar-size)/2);--comment-header-font-size:var(--font-size-7);--comment-header-padding:var(--space-s);--comment-header-gap:var(--space-s);--comment-header-outline-color:var(--outline-color);--comment-header-outline-offset:-2px;--comment-header-border-radius:var(--border-radius);--comment-content-padding:var(--space-xs);--comment-content-background:var(--color-neutral-100);--comment-content-background-dark:var(--color-neutral-200);--comment-content-border-radius:var(--border-radius);--comment-author-gap:var(--space-xs);--comment-author-margin-bottom:var(--space-2xs);--comment-timestamp-font-size:var(--font-size-8);--comment-timestamp-color:var(--color-neutral-300);--comment-replies-padding:0 var(--space-s);--comment-replies-gap:var(--space-s);--comment-footer-padding:var(--space-s);--comment-footer-gap:var(--space-s);--comment-buttons-gap:var(--space-xs);--comment-dialog-position:absolute;--comment-dialog-max-width:300px;--comment-dialog-border-radius:var(--border-radius);--comment-dialog-shadow:var(--shadow-s);--comment-dialog-backdrop-background:transparent;--comment-dialog-textarea-font-size:var(--font-size-6);--comment-form-background:var(--color-base-background);--comment-form-color:var(--color-base);--comment-form-border:1px solid var(--color-neutral-200);--comment-form-border-radius:var(--border-radius);--comment-form-textarea-height:15ch;--comment-form-textarea-padding:var(--space-s);--comment-form-textarea-background:var(--color-base-background);--comment-form-textarea-font-family:var(--font-family);--comment-form-textarea-font-size:var(--font-size-7);--comment-form-footer-padding:var(--space-xs);--comment-form-footer-gap:var(--space-xs);--comment-form-hint-font-size:var(--font-size-8);--comment-form-hint-color:var(--color-neutral-300);--comment-form-hint-padding:0 var(--space-xs)var(--space-xs)var(--space-xs);--context-menu-container-bottom:var(--space-s);--context-menu-container-right:var(--space-s);--context-menu-container-z-index:10;--context-menu-trigger-size:2.5rem;--context-menu-trigger-border-radius:var(--border-radius-rounded);--context-menu-background:var(--color-base-background);--context-menu-border-radius:var(--border-radius);--context-menu-shadow:var(--shadow-s);--context-menu-padding:var(--space-xs);--context-menu-min-width:12rem;--context-menu-backdrop-background:transparent;--context-menu-section-gap:var(--space-2xs);--context-menu-title-font-size:var(--font-size-8);--context-menu-title-font-weight:var(--font-weight-medium);--context-menu-title-color:var(--color-neutral-500);--context-menu-title-margin-bottom:var(--space-2xs);--context-menu-title-letter-spacing:.05em;--context-menu-filter-gap:1px;--context-menu-filter-dot-size:.5em;--context-menu-filter-dot-border-radius:50%;--context-menu-filter-dot-margin-right:var(--space-2xs);--context-menu-filter-dot-open-background:var(--color-accent);--context-menu-filter-dot-resolved-background:var(--color-neutral-400);--header-position:fixed;--header-top:var(--space-xs);--header-transform:translateX(-50%);--header-color:var(--color-base);--header-border-radius:var(--border-radius-rounded);--header-z-index:9999;--header-bottom-position:var(--space-xs);--header-backdrop-filter:var(--backdrop-glass);--header-background:var(--background-glass);--header-count-size:2rem;--header-count-border-radius:var(--border-radius-rounded);--header-count-backdrop-filter:var(--backdrop-glass);--header-count-background:var(--background-glass);--marker-size:2rem;--marker-position:absolute;--marker-z-index:var(--z-loop-marker);--marker-transform:translate(-50%,-50%);--marker-border-radius:var(--border-radius-rounded);--panel-width:380px;--panel-mobile-width:85svw;--panel-position:fixed;--panel-right:var(--space-xs);--panel-top:var(--space-xs);--panel-height:calc(100svh - var(--space-xs)*2);--panel-transform-closed:translateX(calc(100% + var(--space-xs)));--panel-transform-open:translateX(0);--panel-color:var(--color-base);--panel-border-radius:var(--border-radius);--panel-border-top-left-radius:0;--panel-transition:var(--transition-duration-jump)var(--transition-easing-jump);--panel-z-index:var(--z-loop-panel);--panel-shadow:var(--shadow-m);--panel-header-transform-closed:translate(-95%);--panel-header-transform-open:translate(calc(-100% + 1px));--panel-header-transform-hover:translate(calc(-100% + 1px));--panel-header-border-radius:var(--border-radius-rounded);--panel-header-gap:var(--space-xs);--panel-header-backdrop-filter:var(--backdrop-glass);--panel-header-background:var(--background-glass);--panel-threads-background:var(--color-base-background-o-95);--panel-threads-backdrop:var(--backdrop-blur);--panel-threads-border-radius:var(--border-radius);--panel-threads-border-top-left-radius:0;--panel-threads-padding:0 0 var(--space-s)0;--panel-threads-item-margin:var(--space-s);--panel-threads-scrollbar-width:thin;--panel-no-threads-padding:var(--space-s)var(--space-l);--panel-no-threads-font-size:var(--font-size-6);--panel-no-threads-color:var(--color-neutral-300);--reply-gap:var(--space-s);--reply-content-padding:var(--space-xs);--reply-content-background:var(--color-neutral-100);--reply-content-background-dark:var(--color-neutral-200);--reply-content-border-radius:var(--border-radius);--reply-header-gap:var(--space-xs);--reply-header-margin-bottom:var(--space-2xs);--reply-timestamp-font-size:var(--font-size-8);--reply-timestamp-color:var(--color-neutral-300);--welcome-dialog-background:var(--background-glass-frosted);--welcome-dialog-backdrop-filter:var(--backdrop-glass);--welcome-dialog-border:0px;--welcome-dialog-border-radius:var(--border-radius);--welcome-dialog-shadow:var(--shadow-l),var(--shadow-light-edge),var(--shadow-dark-edge);--welcome-dialog-max-width:500px;--welcome-dialog-backdrop-background:var(--color-base-background-o-10);--welcome-dialog-backdrop-backdrop-filter:none;--welcome-dialog-form-padding:var(--space-l);--welcome-dialog-title-margin:0 0 var(--space-s)0;--welcome-dialog-title-font-size:var(--font-size-4);--welcome-dialog-title-color:var(--color-base);--welcome-dialog-title-font-weight:var(--font-weight-bold);--welcome-dialog-text-margin:0 0 var(--space-m)0;--welcome-dialog-text-font-size:var(--font-size-6);--welcome-dialog-text-color:var(--color-neutral-600);--welcome-dialog-text-line-height:var(--line-height);--welcome-dialog-name-section-margin:var(--space-l);--welcome-dialog-input-border:1px solid var(--color-neutral-300);--welcome-dialog-input-border-radius:var(--border-radius-s);--welcome-dialog-input-padding:var(--space-xs);--welcome-dialog-input-font-family:var(--font-family);--welcome-dialog-input-font-size:var(--font-size-6);--welcome-dialog-input-color:var(--color-base);--welcome-dialog-input-background:var(--color-base-background);--welcome-dialog-input-outline-color:var(--outline-color);--welcome-dialog-input-outline-offset:var(--outline-offset);--welcome-dialog-footer-gap:var(--space-xs);--icon-size:1em}kirby-loop[data-theme=dark]{--color-neutral-l-0:0;--color-neutral-l-100:.1;--color-neutral-l-200:.2;--color-neutral-l-300:.3;--color-neutral-l-400:.4;--color-neutral-l-500:.5;--color-neutral-l-600:.6;--color-neutral-l-700:.7;--color-neutral-l-800:.9;--color-neutral-l-900:.95;--color-neutral-l-1000:1}kirby-loop{font-family:var(--font-family);line-height:var(--line-height);font-weight:var(--font-weight-normal);font-size:var(--font-size-7);box-sizing:border-box}html.loop-overlay-open a{pointer-events:none}')),document.head.appendChild(r)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}}();
var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _a, _events, _instance;
const PUBLIC_VERSION = "5";
if (typeof window !== "undefined") {
  ((_a = window.__svelte ?? (window.__svelte = {})).v ?? (_a.v = /* @__PURE__ */ new Set())).add(PUBLIC_VERSION);
}
const EACH_ITEM_REACTIVE = 1;
const EACH_INDEX_REACTIVE = 1 << 1;
const EACH_IS_CONTROLLED = 1 << 2;
const EACH_IS_ANIMATED = 1 << 3;
const EACH_ITEM_IMMUTABLE = 1 << 4;
const PROPS_IS_IMMUTABLE = 1;
const PROPS_IS_RUNES = 1 << 1;
const PROPS_IS_UPDATED = 1 << 2;
const PROPS_IS_BINDABLE = 1 << 3;
const PROPS_IS_LAZY_INITIAL = 1 << 4;
const TEMPLATE_FRAGMENT = 1;
const TEMPLATE_USE_IMPORT_NODE = 1 << 1;
const HYDRATION_START = "[";
const HYDRATION_START_ELSE = "[!";
const HYDRATION_END = "]";
const HYDRATION_ERROR = {};
const UNINITIALIZED = Symbol();
const NAMESPACE_HTML = "http://www.w3.org/1999/xhtml";
const DEV = false;
const DERIVED = 1 << 1;
const EFFECT = 1 << 2;
const RENDER_EFFECT = 1 << 3;
const BLOCK_EFFECT = 1 << 4;
const BRANCH_EFFECT = 1 << 5;
const ROOT_EFFECT = 1 << 6;
const BOUNDARY_EFFECT = 1 << 7;
const UNOWNED = 1 << 8;
const DISCONNECTED = 1 << 9;
const CLEAN = 1 << 10;
const DIRTY = 1 << 11;
const MAYBE_DIRTY = 1 << 12;
const INERT = 1 << 13;
const DESTROYED = 1 << 14;
const EFFECT_RAN = 1 << 15;
const EFFECT_TRANSPARENT = 1 << 16;
const LEGACY_DERIVED_PROP = 1 << 17;
const HEAD_EFFECT = 1 << 19;
const EFFECT_HAS_DERIVED = 1 << 20;
const STATE_SYMBOL = Symbol("$state");
const LEGACY_PROPS = Symbol("legacy props");
const LOADING_ATTR_SYMBOL = Symbol("");
var is_array = Array.isArray;
var index_of = Array.prototype.indexOf;
var array_from = Array.from;
var object_keys = Object.keys;
var define_property = Object.defineProperty;
var get_descriptor = Object.getOwnPropertyDescriptor;
var get_descriptors = Object.getOwnPropertyDescriptors;
var object_prototype = Object.prototype;
var array_prototype = Array.prototype;
var get_prototype_of = Object.getPrototypeOf;
function run(fn) {
  return fn();
}
function run_all(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]();
  }
}
const request_idle_callback = typeof requestIdleCallback === "undefined" ? (cb) => setTimeout(cb, 1) : requestIdleCallback;
let micro_tasks = [];
let idle_tasks = [];
function run_micro_tasks() {
  var tasks = micro_tasks;
  micro_tasks = [];
  run_all(tasks);
}
function run_idle_tasks() {
  var tasks = idle_tasks;
  idle_tasks = [];
  run_all(tasks);
}
function queue_micro_task(fn) {
  if (micro_tasks.length === 0) {
    queueMicrotask(run_micro_tasks);
  }
  micro_tasks.push(fn);
}
function queue_idle_task(fn) {
  if (idle_tasks.length === 0) {
    request_idle_callback(run_idle_tasks);
  }
  idle_tasks.push(fn);
}
function flush_tasks() {
  if (micro_tasks.length > 0) {
    run_micro_tasks();
  }
  if (idle_tasks.length > 0) {
    run_idle_tasks();
  }
}
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}
function effect_in_teardown(rune) {
  {
    throw new Error(`https://svelte.dev/e/effect_in_teardown`);
  }
}
function effect_in_unowned_derived() {
  {
    throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
  }
}
function effect_orphan(rune) {
  {
    throw new Error(`https://svelte.dev/e/effect_orphan`);
  }
}
function effect_update_depth_exceeded() {
  {
    throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
  }
}
function hydration_failed() {
  {
    throw new Error(`https://svelte.dev/e/hydration_failed`);
  }
}
function props_invalid_value(key) {
  {
    throw new Error(`https://svelte.dev/e/props_invalid_value`);
  }
}
function state_descriptors_fixed() {
  {
    throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
  }
}
function state_prototype_fixed() {
  {
    throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
  }
}
function state_unsafe_local_read() {
  {
    throw new Error(`https://svelte.dev/e/state_unsafe_local_read`);
  }
}
function state_unsafe_mutation() {
  {
    throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
  }
}
let legacy_mode_flag = false;
let tracing_mode_flag = false;
function enable_legacy_mode_flag() {
  legacy_mode_flag = true;
}
const old_values = /* @__PURE__ */ new Map();
function source(v, stack) {
  var signal = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v,
    reactions: null,
    equals,
    rv: 0,
    wv: 0
  };
  return signal;
}
function state(v) {
  return /* @__PURE__ */ push_derived_source(source(v));
}
// @__NO_SIDE_EFFECTS__
function mutable_source(initial_value, immutable = false) {
  var _a2;
  const s = source(initial_value);
  if (!immutable) {
    s.equals = safe_equals;
  }
  if (legacy_mode_flag && component_context !== null && component_context.l !== null) {
    ((_a2 = component_context.l).s ?? (_a2.s = [])).push(s);
  }
  return s;
}
function mutable_state(v, immutable = false) {
  return /* @__PURE__ */ push_derived_source(/* @__PURE__ */ mutable_source(v, immutable));
}
// @__NO_SIDE_EFFECTS__
function push_derived_source(source2) {
  if (active_reaction !== null && !untracking && (active_reaction.f & DERIVED) !== 0) {
    if (derived_sources === null) {
      set_derived_sources([source2]);
    } else {
      derived_sources.push(source2);
    }
  }
  return source2;
}
function mutate(source2, value) {
  set(
    source2,
    untrack(() => get(source2))
  );
  return value;
}
function set(source2, value) {
  if (active_reaction !== null && !untracking && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (derived_sources === null || !derived_sources.includes(source2))) {
    state_unsafe_mutation();
  }
  return internal_set(source2, value);
}
function internal_set(source2, value) {
  if (!source2.equals(value)) {
    var old_value = source2.v;
    if (is_destroying_effect) {
      old_values.set(source2, value);
    } else {
      old_values.set(source2, old_value);
    }
    source2.v = value;
    source2.wv = increment_write_version();
    mark_reactions(source2, DIRTY);
    if (is_runes() && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
      if (untracked_writes === null) {
        set_untracked_writes([source2]);
      } else {
        untracked_writes.push(source2);
      }
    }
  }
  return value;
}
function mark_reactions(signal, status) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  var runes = is_runes();
  var length = reactions.length;
  for (var i = 0; i < length; i++) {
    var reaction = reactions[i];
    var flags = reaction.f;
    if ((flags & DIRTY) !== 0) continue;
    if (!runes && reaction === active_effect) continue;
    set_signal_status(reaction, status);
    if ((flags & (CLEAN | UNOWNED)) !== 0) {
      if ((flags & DERIVED) !== 0) {
        mark_reactions(
          /** @type {Derived} */
          reaction,
          MAYBE_DIRTY
        );
      } else {
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
}
// @__NO_SIDE_EFFECTS__
function derived(fn) {
  var flags = DERIVED | DIRTY;
  var parent_derived = active_reaction !== null && (active_reaction.f & DERIVED) !== 0 ? (
    /** @type {Derived} */
    active_reaction
  ) : null;
  if (active_effect === null || parent_derived !== null && (parent_derived.f & UNOWNED) !== 0) {
    flags |= UNOWNED;
  } else {
    active_effect.f |= EFFECT_HAS_DERIVED;
  }
  const signal = {
    ctx: component_context,
    deps: null,
    effects: null,
    equals,
    f: flags,
    fn,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: parent_derived ?? active_effect
  };
  return signal;
}
// @__NO_SIDE_EFFECTS__
function derived_safe_equal(fn) {
  const signal = /* @__PURE__ */ derived(fn);
  signal.equals = safe_equals;
  return signal;
}
function destroy_derived_effects(derived2) {
  var effects = derived2.effects;
  if (effects !== null) {
    derived2.effects = null;
    for (var i = 0; i < effects.length; i += 1) {
      destroy_effect(
        /** @type {Effect} */
        effects[i]
      );
    }
  }
}
function get_derived_parent_effect(derived2) {
  var parent = derived2.parent;
  while (parent !== null) {
    if ((parent.f & DERIVED) === 0) {
      return (
        /** @type {Effect} */
        parent
      );
    }
    parent = parent.parent;
  }
  return null;
}
function execute_derived(derived2) {
  var value;
  var prev_active_effect = active_effect;
  set_active_effect(get_derived_parent_effect(derived2));
  {
    try {
      destroy_derived_effects(derived2);
      value = update_reaction(derived2);
    } finally {
      set_active_effect(prev_active_effect);
    }
  }
  return value;
}
function update_derived(derived2) {
  var value = execute_derived(derived2);
  var status = (skip_reaction || (derived2.f & UNOWNED) !== 0) && derived2.deps !== null ? MAYBE_DIRTY : CLEAN;
  set_signal_status(derived2, status);
  if (!derived2.equals(value)) {
    derived2.v = value;
    derived2.wv = increment_write_version();
  }
}
function hydration_mismatch(location) {
  {
    console.warn(`https://svelte.dev/e/hydration_mismatch`);
  }
}
let hydrating = false;
function set_hydrating(value) {
  hydrating = value;
}
let hydrate_node;
function set_hydrate_node(node) {
  if (node === null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return hydrate_node = node;
}
function hydrate_next() {
  return set_hydrate_node(
    /** @type {TemplateNode} */
    /* @__PURE__ */ get_next_sibling(hydrate_node)
  );
}
function reset$1(node) {
  if (!hydrating) return;
  if (/* @__PURE__ */ get_next_sibling(hydrate_node) !== null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  hydrate_node = node;
}
function next(count = 1) {
  if (hydrating) {
    var i = count;
    var node = hydrate_node;
    while (i--) {
      node = /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(node);
    }
    hydrate_node = node;
  }
}
function remove_nodes() {
  var depth = 0;
  var node = hydrate_node;
  while (true) {
    if (node.nodeType === 8) {
      var data = (
        /** @type {Comment} */
        node.data
      );
      if (data === HYDRATION_END) {
        if (depth === 0) return node;
        depth -= 1;
      } else if (data === HYDRATION_START || data === HYDRATION_START_ELSE) {
        depth += 1;
      }
    }
    var next2 = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(node)
    );
    node.remove();
    node = next2;
  }
}
function proxy(value, parent = null, prev) {
  if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
    return value;
  }
  const prototype = get_prototype_of(value);
  if (prototype !== object_prototype && prototype !== array_prototype) {
    return value;
  }
  var sources = /* @__PURE__ */ new Map();
  var is_proxied_array = is_array(value);
  var version = source(0);
  if (is_proxied_array) {
    sources.set("length", source(
      /** @type {any[]} */
      value.length
    ));
  }
  var metadata;
  return new Proxy(
    /** @type {any} */
    value,
    {
      defineProperty(_, prop2, descriptor) {
        if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
          state_descriptors_fixed();
        }
        var s = sources.get(prop2);
        if (s === void 0) {
          s = source(descriptor.value);
          sources.set(prop2, s);
        } else {
          set(s, proxy(descriptor.value, metadata));
        }
        return true;
      },
      deleteProperty(target, prop2) {
        var s = sources.get(prop2);
        if (s === void 0) {
          if (prop2 in target) {
            sources.set(prop2, source(UNINITIALIZED));
          }
        } else {
          if (is_proxied_array && typeof prop2 === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n = Number(prop2);
            if (Number.isInteger(n) && n < ls.v) {
              set(ls, n);
            }
          }
          set(s, UNINITIALIZED);
          update_version(version);
        }
        return true;
      },
      get(target, prop2, receiver) {
        var _a2;
        if (prop2 === STATE_SYMBOL) {
          return value;
        }
        var s = sources.get(prop2);
        var exists = prop2 in target;
        if (s === void 0 && (!exists || ((_a2 = get_descriptor(target, prop2)) == null ? void 0 : _a2.writable))) {
          s = source(proxy(exists ? target[prop2] : UNINITIALIZED, metadata));
          sources.set(prop2, s);
        }
        if (s !== void 0) {
          var v = get(s);
          return v === UNINITIALIZED ? void 0 : v;
        }
        return Reflect.get(target, prop2, receiver);
      },
      getOwnPropertyDescriptor(target, prop2) {
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        if (descriptor && "value" in descriptor) {
          var s = sources.get(prop2);
          if (s) descriptor.value = get(s);
        } else if (descriptor === void 0) {
          var source2 = sources.get(prop2);
          var value2 = source2 == null ? void 0 : source2.v;
          if (source2 !== void 0 && value2 !== UNINITIALIZED) {
            return {
              enumerable: true,
              configurable: true,
              value: value2,
              writable: true
            };
          }
        }
        return descriptor;
      },
      has(target, prop2) {
        var _a2;
        if (prop2 === STATE_SYMBOL) {
          return true;
        }
        var s = sources.get(prop2);
        var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
        if (s !== void 0 || active_effect !== null && (!has || ((_a2 = get_descriptor(target, prop2)) == null ? void 0 : _a2.writable))) {
          if (s === void 0) {
            s = source(has ? proxy(target[prop2], metadata) : UNINITIALIZED);
            sources.set(prop2, s);
          }
          var value2 = get(s);
          if (value2 === UNINITIALIZED) {
            return false;
          }
        }
        return has;
      },
      set(target, prop2, value2, receiver) {
        var _a2;
        var s = sources.get(prop2);
        var has = prop2 in target;
        if (is_proxied_array && prop2 === "length") {
          for (var i = value2; i < /** @type {Source<number>} */
          s.v; i += 1) {
            var other_s = sources.get(i + "");
            if (other_s !== void 0) {
              set(other_s, UNINITIALIZED);
            } else if (i in target) {
              other_s = source(UNINITIALIZED);
              sources.set(i + "", other_s);
            }
          }
        }
        if (s === void 0) {
          if (!has || ((_a2 = get_descriptor(target, prop2)) == null ? void 0 : _a2.writable)) {
            s = source(void 0);
            set(s, proxy(value2, metadata));
            sources.set(prop2, s);
          }
        } else {
          has = s.v !== UNINITIALIZED;
          set(s, proxy(value2, metadata));
        }
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        if (descriptor == null ? void 0 : descriptor.set) {
          descriptor.set.call(receiver, value2);
        }
        if (!has) {
          if (is_proxied_array && typeof prop2 === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n = Number(prop2);
            if (Number.isInteger(n) && n >= ls.v) {
              set(ls, n + 1);
            }
          }
          update_version(version);
        }
        return true;
      },
      ownKeys(target) {
        get(version);
        var own_keys = Reflect.ownKeys(target).filter((key2) => {
          var source3 = sources.get(key2);
          return source3 === void 0 || source3.v !== UNINITIALIZED;
        });
        for (var [key, source2] of sources) {
          if (source2.v !== UNINITIALIZED && !(key in target)) {
            own_keys.push(key);
          }
        }
        return own_keys;
      },
      setPrototypeOf() {
        state_prototype_fixed();
      }
    }
  );
}
function update_version(signal, d = 1) {
  set(signal, signal.v + d);
}
var $window;
var $document;
var is_firefox;
var first_child_getter;
var next_sibling_getter;
function init_operations() {
  if ($window !== void 0) {
    return;
  }
  $window = window;
  $document = document;
  is_firefox = /Firefox/.test(navigator.userAgent);
  var element_prototype = Element.prototype;
  var node_prototype = Node.prototype;
  first_child_getter = get_descriptor(node_prototype, "firstChild").get;
  next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
  element_prototype.__click = void 0;
  element_prototype.__className = void 0;
  element_prototype.__attributes = null;
  element_prototype.__style = void 0;
  element_prototype.__e = void 0;
  Text.prototype.__t = void 0;
}
function create_text(value = "") {
  return document.createTextNode(value);
}
// @__NO_SIDE_EFFECTS__
function get_first_child(node) {
  return first_child_getter.call(node);
}
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node) {
  return next_sibling_getter.call(node);
}
function child(node, is_text) {
  if (!hydrating) {
    return /* @__PURE__ */ get_first_child(node);
  }
  var child2 = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ get_first_child(hydrate_node)
  );
  if (child2 === null) {
    child2 = hydrate_node.appendChild(create_text());
  } else if (is_text && child2.nodeType !== 3) {
    var text2 = create_text();
    child2 == null ? void 0 : child2.before(text2);
    set_hydrate_node(text2);
    return text2;
  }
  set_hydrate_node(child2);
  return child2;
}
function first_child(fragment, is_text) {
  if (!hydrating) {
    var first = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ get_first_child(
        /** @type {Node} */
        fragment
      )
    );
    if (first instanceof Comment && first.data === "") return /* @__PURE__ */ get_next_sibling(first);
    return first;
  }
  return hydrate_node;
}
function sibling(node, count = 1, is_text = false) {
  let next_sibling = hydrating ? hydrate_node : node;
  var last_sibling;
  while (count--) {
    last_sibling = next_sibling;
    next_sibling = /** @type {TemplateNode} */
    /* @__PURE__ */ get_next_sibling(next_sibling);
  }
  if (!hydrating) {
    return next_sibling;
  }
  var type = next_sibling == null ? void 0 : next_sibling.nodeType;
  if (is_text && type !== 3) {
    var text2 = create_text();
    if (next_sibling === null) {
      last_sibling == null ? void 0 : last_sibling.after(text2);
    } else {
      next_sibling.before(text2);
    }
    set_hydrate_node(text2);
    return text2;
  }
  set_hydrate_node(next_sibling);
  return (
    /** @type {TemplateNode} */
    next_sibling
  );
}
function clear_text_content(node) {
  node.textContent = "";
}
let is_throwing_error = false;
let is_flushing = false;
let last_scheduled_effect = null;
let is_updating_effect = false;
let is_destroying_effect = false;
function set_is_destroying_effect(value) {
  is_destroying_effect = value;
}
let queued_root_effects = [];
let dev_effect_stack = [];
let active_reaction = null;
let untracking = false;
function set_active_reaction(reaction) {
  active_reaction = reaction;
}
let active_effect = null;
function set_active_effect(effect2) {
  active_effect = effect2;
}
let derived_sources = null;
function set_derived_sources(sources) {
  derived_sources = sources;
}
let new_deps = null;
let skipped_deps = 0;
let untracked_writes = null;
function set_untracked_writes(value) {
  untracked_writes = value;
}
let write_version = 1;
let read_version = 0;
let skip_reaction = false;
function increment_write_version() {
  return ++write_version;
}
function check_dirtiness(reaction) {
  var _a2;
  var flags = reaction.f;
  if ((flags & DIRTY) !== 0) {
    return true;
  }
  if ((flags & MAYBE_DIRTY) !== 0) {
    var dependencies = reaction.deps;
    var is_unowned = (flags & UNOWNED) !== 0;
    if (dependencies !== null) {
      var i;
      var dependency;
      var is_disconnected = (flags & DISCONNECTED) !== 0;
      var is_unowned_connected = is_unowned && active_effect !== null && !skip_reaction;
      var length = dependencies.length;
      if (is_disconnected || is_unowned_connected) {
        var derived2 = (
          /** @type {Derived} */
          reaction
        );
        var parent = derived2.parent;
        for (i = 0; i < length; i++) {
          dependency = dependencies[i];
          if (is_disconnected || !((_a2 = dependency == null ? void 0 : dependency.reactions) == null ? void 0 : _a2.includes(derived2))) {
            (dependency.reactions ?? (dependency.reactions = [])).push(derived2);
          }
        }
        if (is_disconnected) {
          derived2.f ^= DISCONNECTED;
        }
        if (is_unowned_connected && parent !== null && (parent.f & UNOWNED) === 0) {
          derived2.f ^= UNOWNED;
        }
      }
      for (i = 0; i < length; i++) {
        dependency = dependencies[i];
        if (check_dirtiness(
          /** @type {Derived} */
          dependency
        )) {
          update_derived(
            /** @type {Derived} */
            dependency
          );
        }
        if (dependency.wv > reaction.wv) {
          return true;
        }
      }
    }
    if (!is_unowned || active_effect !== null && !skip_reaction) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
function propagate_error(error, effect2) {
  var current = effect2;
  while (current !== null) {
    if ((current.f & BOUNDARY_EFFECT) !== 0) {
      try {
        current.fn(error);
        return;
      } catch {
        current.f ^= BOUNDARY_EFFECT;
      }
    }
    current = current.parent;
  }
  is_throwing_error = false;
  throw error;
}
function should_rethrow_error(effect2) {
  return (effect2.f & DESTROYED) === 0 && (effect2.parent === null || (effect2.parent.f & BOUNDARY_EFFECT) === 0);
}
function handle_error(error, effect2, previous_effect, component_context2) {
  if (is_throwing_error) {
    if (previous_effect === null) {
      is_throwing_error = false;
    }
    if (should_rethrow_error(effect2)) {
      throw error;
    }
    return;
  }
  if (previous_effect !== null) {
    is_throwing_error = true;
  }
  {
    propagate_error(error, effect2);
    return;
  }
}
function schedule_possible_effect_self_invalidation(signal, effect2, root2 = true) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  for (var i = 0; i < reactions.length; i++) {
    var reaction = reactions[i];
    if ((reaction.f & DERIVED) !== 0) {
      schedule_possible_effect_self_invalidation(
        /** @type {Derived} */
        reaction,
        effect2,
        false
      );
    } else if (effect2 === reaction) {
      if (root2) {
        set_signal_status(reaction, DIRTY);
      } else if ((reaction.f & CLEAN) !== 0) {
        set_signal_status(reaction, MAYBE_DIRTY);
      }
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}
function update_reaction(reaction) {
  var _a2;
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_skip_reaction = skip_reaction;
  var prev_derived_sources = derived_sources;
  var previous_component_context = component_context;
  var previous_untracking = untracking;
  var flags = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  skip_reaction = (flags & UNOWNED) !== 0 && (untracking || !is_updating_effect || active_reaction === null);
  active_reaction = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  derived_sources = null;
  set_component_context(reaction.ctx);
  untracking = false;
  read_version++;
  try {
    var result = (
      /** @type {Function} */
      (0, reaction.fn)()
    );
    var deps = reaction.deps;
    if (new_deps !== null) {
      var i;
      remove_reactions(reaction, skipped_deps);
      if (deps !== null && skipped_deps > 0) {
        deps.length = skipped_deps + new_deps.length;
        for (i = 0; i < new_deps.length; i++) {
          deps[skipped_deps + i] = new_deps[i];
        }
      } else {
        reaction.deps = deps = new_deps;
      }
      if (!skip_reaction) {
        for (i = skipped_deps; i < deps.length; i++) {
          ((_a2 = deps[i]).reactions ?? (_a2.reactions = [])).push(reaction);
        }
      }
    } else if (deps !== null && skipped_deps < deps.length) {
      remove_reactions(reaction, skipped_deps);
      deps.length = skipped_deps;
    }
    if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
      for (i = 0; i < /** @type {Source[]} */
      untracked_writes.length; i++) {
        schedule_possible_effect_self_invalidation(
          untracked_writes[i],
          /** @type {Effect} */
          reaction
        );
      }
    }
    if (previous_reaction !== null) {
      read_version++;
      if (untracked_writes !== null) {
        if (previous_untracked_writes === null) {
          previous_untracked_writes = untracked_writes;
        } else {
          previous_untracked_writes.push(.../** @type {Source[]} */
          untracked_writes);
        }
      }
    }
    return result;
  } finally {
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    skip_reaction = previous_skip_reaction;
    derived_sources = prev_derived_sources;
    set_component_context(previous_component_context);
    untracking = previous_untracking;
  }
}
function remove_reaction(signal, dependency) {
  let reactions = dependency.reactions;
  if (reactions !== null) {
    var index = index_of.call(reactions, signal);
    if (index !== -1) {
      var new_length = reactions.length - 1;
      if (new_length === 0) {
        reactions = dependency.reactions = null;
      } else {
        reactions[index] = reactions[new_length];
        reactions.pop();
      }
    }
  }
  if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (new_deps === null || !new_deps.includes(dependency))) {
    set_signal_status(dependency, MAYBE_DIRTY);
    if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
      dependency.f ^= DISCONNECTED;
    }
    destroy_derived_effects(
      /** @type {Derived} **/
      dependency
    );
    remove_reactions(
      /** @type {Derived} **/
      dependency,
      0
    );
  }
}
function remove_reactions(signal, start_index) {
  var dependencies = signal.deps;
  if (dependencies === null) return;
  for (var i = start_index; i < dependencies.length; i++) {
    remove_reaction(signal, dependencies[i]);
  }
}
function update_effect(effect2) {
  var flags = effect2.f;
  if ((flags & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect2, CLEAN);
  var previous_effect = active_effect;
  var previous_component_context = component_context;
  var was_updating_effect = is_updating_effect;
  active_effect = effect2;
  is_updating_effect = true;
  try {
    if ((flags & BLOCK_EFFECT) !== 0) {
      destroy_block_effect_children(effect2);
    } else {
      destroy_effect_children(effect2);
    }
    execute_effect_teardown(effect2);
    var teardown2 = update_reaction(effect2);
    effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
    effect2.wv = write_version;
    var deps = effect2.deps;
    var dep;
    if (DEV && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && deps !== null) ;
    if (DEV) ;
  } catch (error) {
    handle_error(error, effect2, previous_effect, previous_component_context || effect2.ctx);
  } finally {
    is_updating_effect = was_updating_effect;
    active_effect = previous_effect;
  }
}
function infinite_loop_guard() {
  try {
    effect_update_depth_exceeded();
  } catch (error) {
    if (last_scheduled_effect !== null) {
      {
        handle_error(error, last_scheduled_effect, null);
      }
    } else {
      throw error;
    }
  }
}
function flush_queued_root_effects() {
  var was_updating_effect = is_updating_effect;
  try {
    var flush_count = 0;
    is_updating_effect = true;
    while (queued_root_effects.length > 0) {
      if (flush_count++ > 1e3) {
        infinite_loop_guard();
      }
      var root_effects = queued_root_effects;
      var length = root_effects.length;
      queued_root_effects = [];
      for (var i = 0; i < length; i++) {
        var collected_effects = process_effects(root_effects[i]);
        flush_queued_effects(collected_effects);
      }
    }
  } finally {
    is_flushing = false;
    is_updating_effect = was_updating_effect;
    last_scheduled_effect = null;
    old_values.clear();
  }
}
function flush_queued_effects(effects) {
  var length = effects.length;
  if (length === 0) return;
  for (var i = 0; i < length; i++) {
    var effect2 = effects[i];
    if ((effect2.f & (DESTROYED | INERT)) === 0) {
      try {
        if (check_dirtiness(effect2)) {
          update_effect(effect2);
          if (effect2.deps === null && effect2.first === null && effect2.nodes_start === null) {
            if (effect2.teardown === null) {
              unlink_effect(effect2);
            } else {
              effect2.fn = null;
            }
          }
        }
      } catch (error) {
        handle_error(error, effect2, null, effect2.ctx);
      }
    }
  }
}
function schedule_effect(signal) {
  if (!is_flushing) {
    is_flushing = true;
    queueMicrotask(flush_queued_root_effects);
  }
  var effect2 = last_scheduled_effect = signal;
  while (effect2.parent !== null) {
    effect2 = effect2.parent;
    var flags = effect2.f;
    if ((flags & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
      if ((flags & CLEAN) === 0) return;
      effect2.f ^= CLEAN;
    }
  }
  queued_root_effects.push(effect2);
}
function process_effects(root2) {
  var effects = [];
  var effect2 = root2;
  while (effect2 !== null) {
    var flags = effect2.f;
    var is_branch = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
    var is_skippable_branch = is_branch && (flags & CLEAN) !== 0;
    if (!is_skippable_branch && (flags & INERT) === 0) {
      if ((flags & EFFECT) !== 0) {
        effects.push(effect2);
      } else if (is_branch) {
        effect2.f ^= CLEAN;
      } else {
        var previous_active_reaction = active_reaction;
        try {
          active_reaction = effect2;
          if (check_dirtiness(effect2)) {
            update_effect(effect2);
          }
        } catch (error) {
          handle_error(error, effect2, null, effect2.ctx);
        } finally {
          active_reaction = previous_active_reaction;
        }
      }
      var child2 = effect2.first;
      if (child2 !== null) {
        effect2 = child2;
        continue;
      }
    }
    var parent = effect2.parent;
    effect2 = effect2.next;
    while (effect2 === null && parent !== null) {
      effect2 = parent.next;
      parent = parent.parent;
    }
  }
  return effects;
}
function flushSync(fn) {
  var result;
  flush_tasks();
  while (queued_root_effects.length > 0) {
    is_flushing = true;
    flush_queued_root_effects();
    flush_tasks();
  }
  return (
    /** @type {T} */
    result
  );
}
function get(signal) {
  var flags = signal.f;
  var is_derived = (flags & DERIVED) !== 0;
  if (active_reaction !== null && !untracking) {
    if (derived_sources !== null && derived_sources.includes(signal)) {
      state_unsafe_local_read();
    }
    var deps = active_reaction.deps;
    if (signal.rv < read_version) {
      signal.rv = read_version;
      if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
        skipped_deps++;
      } else if (new_deps === null) {
        new_deps = [signal];
      } else if (!skip_reaction || !new_deps.includes(signal)) {
        new_deps.push(signal);
      }
    }
  } else if (is_derived && /** @type {Derived} */
  signal.deps === null && /** @type {Derived} */
  signal.effects === null) {
    var derived2 = (
      /** @type {Derived} */
      signal
    );
    var parent = derived2.parent;
    if (parent !== null && (parent.f & UNOWNED) === 0) {
      derived2.f ^= UNOWNED;
    }
  }
  if (is_derived) {
    derived2 = /** @type {Derived} */
    signal;
    if (check_dirtiness(derived2)) {
      update_derived(derived2);
    }
  }
  if (is_destroying_effect && old_values.has(signal)) {
    return old_values.get(signal);
  }
  return signal.v;
}
function untrack(fn) {
  var previous_untracking = untracking;
  try {
    untracking = true;
    return fn();
  } finally {
    untracking = previous_untracking;
  }
}
const STATUS_MASK = -7169;
function set_signal_status(signal, status) {
  signal.f = signal.f & STATUS_MASK | status;
}
function deep_read_state(value) {
  if (typeof value !== "object" || !value || value instanceof EventTarget) {
    return;
  }
  if (STATE_SYMBOL in value) {
    deep_read(value);
  } else if (!Array.isArray(value)) {
    for (let key in value) {
      const prop2 = value[key];
      if (typeof prop2 === "object" && prop2 && STATE_SYMBOL in prop2) {
        deep_read(prop2);
      }
    }
  }
}
function deep_read(value, visited = /* @__PURE__ */ new Set()) {
  if (typeof value === "object" && value !== null && // We don't want to traverse DOM elements
  !(value instanceof EventTarget) && !visited.has(value)) {
    visited.add(value);
    if (value instanceof Date) {
      value.getTime();
    }
    for (let key in value) {
      try {
        deep_read(value[key], visited);
      } catch (e) {
      }
    }
    const proto = get_prototype_of(value);
    if (proto !== Object.prototype && proto !== Array.prototype && proto !== Map.prototype && proto !== Set.prototype && proto !== Date.prototype) {
      const descriptors = get_descriptors(proto);
      for (let key in descriptors) {
        const get2 = descriptors[key].get;
        if (get2) {
          try {
            get2.call(value);
          } catch (e) {
          }
        }
      }
    }
  }
}
function validate_effect(rune) {
  if (active_effect === null && active_reaction === null) {
    effect_orphan();
  }
  if (active_reaction !== null && (active_reaction.f & UNOWNED) !== 0 && active_effect === null) {
    effect_in_unowned_derived();
  }
  if (is_destroying_effect) {
    effect_in_teardown();
  }
}
function push_effect(effect2, parent_effect) {
  var parent_last = parent_effect.last;
  if (parent_last === null) {
    parent_effect.last = parent_effect.first = effect2;
  } else {
    parent_last.next = effect2;
    effect2.prev = parent_last;
    parent_effect.last = effect2;
  }
}
function create_effect(type, fn, sync, push2 = true) {
  var parent = active_effect;
  var effect2 = {
    ctx: component_context,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: type | DIRTY,
    first: null,
    fn,
    last: null,
    next: null,
    parent,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (sync) {
    try {
      update_effect(effect2);
      effect2.f |= EFFECT_RAN;
    } catch (e) {
      destroy_effect(effect2);
      throw e;
    }
  } else if (fn !== null) {
    schedule_effect(effect2);
  }
  var inert = sync && effect2.deps === null && effect2.first === null && effect2.nodes_start === null && effect2.teardown === null && (effect2.f & (EFFECT_HAS_DERIVED | BOUNDARY_EFFECT)) === 0;
  if (!inert && push2) {
    if (parent !== null) {
      push_effect(effect2, parent);
    }
    if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
      var derived2 = (
        /** @type {Derived} */
        active_reaction
      );
      (derived2.effects ?? (derived2.effects = [])).push(effect2);
    }
  }
  return effect2;
}
function teardown(fn) {
  const effect2 = create_effect(RENDER_EFFECT, null, false);
  set_signal_status(effect2, CLEAN);
  effect2.teardown = fn;
  return effect2;
}
function user_effect(fn) {
  validate_effect();
  var defer = active_effect !== null && (active_effect.f & BRANCH_EFFECT) !== 0 && component_context !== null && !component_context.m;
  if (defer) {
    var context = (
      /** @type {ComponentContext} */
      component_context
    );
    (context.e ?? (context.e = [])).push({
      fn,
      effect: active_effect,
      reaction: active_reaction
    });
  } else {
    var signal = effect(fn);
    return signal;
  }
}
function user_pre_effect(fn) {
  validate_effect();
  return render_effect(fn);
}
function effect_root(fn) {
  const effect2 = create_effect(ROOT_EFFECT, fn, true);
  return () => {
    destroy_effect(effect2);
  };
}
function component_root(fn) {
  const effect2 = create_effect(ROOT_EFFECT, fn, true);
  return (options = {}) => {
    return new Promise((fulfil) => {
      if (options.outro) {
        pause_effect(effect2, () => {
          destroy_effect(effect2);
          fulfil(void 0);
        });
      } else {
        destroy_effect(effect2);
        fulfil(void 0);
      }
    });
  };
}
function effect(fn) {
  return create_effect(EFFECT, fn, false);
}
function render_effect(fn) {
  return create_effect(RENDER_EFFECT, fn, true);
}
function template_effect(fn, thunks = [], d = derived) {
  const deriveds = thunks.map(d);
  const effect2 = () => fn(...deriveds.map(get));
  return block(effect2);
}
function block(fn, flags = 0) {
  return create_effect(RENDER_EFFECT | BLOCK_EFFECT | flags, fn, true);
}
function branch(fn, push2 = true) {
  return create_effect(RENDER_EFFECT | BRANCH_EFFECT, fn, true, push2);
}
function execute_effect_teardown(effect2) {
  var teardown2 = effect2.teardown;
  if (teardown2 !== null) {
    const previously_destroying_effect = is_destroying_effect;
    const previous_reaction = active_reaction;
    set_is_destroying_effect(true);
    set_active_reaction(null);
    try {
      teardown2.call(null);
    } finally {
      set_is_destroying_effect(previously_destroying_effect);
      set_active_reaction(previous_reaction);
    }
  }
}
function destroy_effect_children(signal, remove_dom = false) {
  var effect2 = signal.first;
  signal.first = signal.last = null;
  while (effect2 !== null) {
    var next2 = effect2.next;
    if ((effect2.f & ROOT_EFFECT) !== 0) {
      effect2.parent = null;
    } else {
      destroy_effect(effect2, remove_dom);
    }
    effect2 = next2;
  }
}
function destroy_block_effect_children(signal) {
  var effect2 = signal.first;
  while (effect2 !== null) {
    var next2 = effect2.next;
    if ((effect2.f & BRANCH_EFFECT) === 0) {
      destroy_effect(effect2);
    }
    effect2 = next2;
  }
}
function destroy_effect(effect2, remove_dom = true) {
  var removed = false;
  if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes_start !== null) {
    var node = effect2.nodes_start;
    var end = effect2.nodes_end;
    while (node !== null) {
      var next2 = node === end ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_next_sibling(node)
      );
      node.remove();
      node = next2;
    }
    removed = true;
  }
  destroy_effect_children(effect2, remove_dom && !removed);
  remove_reactions(effect2, 0);
  set_signal_status(effect2, DESTROYED);
  var transitions = effect2.transitions;
  if (transitions !== null) {
    for (const transition of transitions) {
      transition.stop();
    }
  }
  execute_effect_teardown(effect2);
  var parent = effect2.parent;
  if (parent !== null && parent.first !== null) {
    unlink_effect(effect2);
  }
  effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes_start = effect2.nodes_end = null;
}
function unlink_effect(effect2) {
  var parent = effect2.parent;
  var prev = effect2.prev;
  var next2 = effect2.next;
  if (prev !== null) prev.next = next2;
  if (next2 !== null) next2.prev = prev;
  if (parent !== null) {
    if (parent.first === effect2) parent.first = next2;
    if (parent.last === effect2) parent.last = prev;
  }
}
function pause_effect(effect2, callback) {
  var transitions = [];
  pause_children(effect2, transitions, true);
  run_out_transitions(transitions, () => {
    destroy_effect(effect2);
    if (callback) callback();
  });
}
function run_out_transitions(transitions, fn) {
  var remaining = transitions.length;
  if (remaining > 0) {
    var check = () => --remaining || fn();
    for (var transition of transitions) {
      transition.out(check);
    }
  } else {
    fn();
  }
}
function pause_children(effect2, transitions, local) {
  if ((effect2.f & INERT) !== 0) return;
  effect2.f ^= INERT;
  if (effect2.transitions !== null) {
    for (const transition of effect2.transitions) {
      if (transition.is_global || local) {
        transitions.push(transition);
      }
    }
  }
  var child2 = effect2.first;
  while (child2 !== null) {
    var sibling2 = child2.next;
    var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
    pause_children(child2, transitions, transparent ? local : false);
    child2 = sibling2;
  }
}
function resume_effect(effect2) {
  resume_children(effect2, true);
}
function resume_children(effect2, local) {
  if ((effect2.f & INERT) === 0) return;
  effect2.f ^= INERT;
  if ((effect2.f & CLEAN) === 0) {
    effect2.f ^= CLEAN;
  }
  if (check_dirtiness(effect2)) {
    set_signal_status(effect2, DIRTY);
    schedule_effect(effect2);
  }
  var child2 = effect2.first;
  while (child2 !== null) {
    var sibling2 = child2.next;
    var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
    resume_children(child2, transparent ? local : false);
    child2 = sibling2;
  }
  if (effect2.transitions !== null) {
    for (const transition of effect2.transitions) {
      if (transition.is_global || local) {
        transition.in();
      }
    }
  }
}
function lifecycle_outside_component(name) {
  {
    throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
  }
}
let component_context = null;
function set_component_context(context) {
  component_context = context;
}
function push(props, runes = false, fn) {
  var ctx = component_context = {
    p: component_context,
    c: null,
    d: false,
    e: null,
    m: false,
    s: props,
    x: null,
    l: null
  };
  if (legacy_mode_flag && !runes) {
    component_context.l = {
      s: null,
      u: null,
      r1: [],
      r2: source(false)
    };
  }
  teardown(() => {
    ctx.d = true;
  });
}
function pop(component) {
  const context_stack_item = component_context;
  if (context_stack_item !== null) {
    if (component !== void 0) {
      context_stack_item.x = component;
    }
    const component_effects = context_stack_item.e;
    if (component_effects !== null) {
      var previous_effect = active_effect;
      var previous_reaction = active_reaction;
      context_stack_item.e = null;
      try {
        for (var i = 0; i < component_effects.length; i++) {
          var component_effect = component_effects[i];
          set_active_effect(component_effect.effect);
          set_active_reaction(component_effect.reaction);
          effect(component_effect.fn);
        }
      } finally {
        set_active_effect(previous_effect);
        set_active_reaction(previous_reaction);
      }
    }
    component_context = context_stack_item.p;
    context_stack_item.m = true;
  }
  return component || /** @type {T} */
  {};
}
function is_runes() {
  return !legacy_mode_flag || component_context !== null && component_context.l === null;
}
const PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(name) {
  return PASSIVE_EVENTS.includes(name);
}
function remove_textarea_child(dom) {
  if (hydrating && /* @__PURE__ */ get_first_child(dom) !== null) {
    clear_text_content(dom);
  }
}
let listening_to_form_reset = false;
function add_form_reset_listener() {
  if (!listening_to_form_reset) {
    listening_to_form_reset = true;
    document.addEventListener(
      "reset",
      (evt) => {
        Promise.resolve().then(() => {
          var _a2;
          if (!evt.defaultPrevented) {
            for (
              const e of
              /**@type {HTMLFormElement} */
              evt.target.elements
            ) {
              (_a2 = e.__on_r) == null ? void 0 : _a2.call(e);
            }
          }
        });
      },
      // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
      { capture: true }
    );
  }
}
function without_reactive_context(fn) {
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    return fn();
  } finally {
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
function listen_to_event_and_reset_event(element, event2, handler, on_reset = handler) {
  element.addEventListener(event2, () => without_reactive_context(handler));
  const prev = element.__on_r;
  if (prev) {
    element.__on_r = () => {
      prev();
      on_reset(true);
    };
  } else {
    element.__on_r = () => on_reset(true);
  }
  add_form_reset_listener();
}
const all_registered_events = /* @__PURE__ */ new Set();
const root_event_handles = /* @__PURE__ */ new Set();
function create_event(event_name, dom, handler, options = {}) {
  function target_handler(event2) {
    if (!options.capture) {
      handle_event_propagation.call(dom, event2);
    }
    if (!event2.cancelBubble) {
      return without_reactive_context(() => {
        return handler == null ? void 0 : handler.call(this, event2);
      });
    }
  }
  if (event_name.startsWith("pointer") || event_name.startsWith("touch") || event_name === "wheel") {
    queue_micro_task(() => {
      dom.addEventListener(event_name, target_handler, options);
    });
  } else {
    dom.addEventListener(event_name, target_handler, options);
  }
  return target_handler;
}
function event(event_name, dom, handler, capture, passive) {
  var options = { capture, passive };
  var target_handler = create_event(event_name, dom, handler, options);
  if (dom === document.body || dom === window || dom === document) {
    teardown(() => {
      dom.removeEventListener(event_name, target_handler, options);
    });
  }
}
function delegate(events) {
  for (var i = 0; i < events.length; i++) {
    all_registered_events.add(events[i]);
  }
  for (var fn of root_event_handles) {
    fn(events);
  }
}
function handle_event_propagation(event2) {
  var _a2;
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event2.type;
  var path = ((_a2 = event2.composedPath) == null ? void 0 : _a2.call(event2)) || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event2.target
  );
  var path_idx = 0;
  var handled_at = event2.__root;
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event2.__root = handler_element;
      return;
    }
    var handler_idx = path.indexOf(handler_element);
    if (handler_idx === -1) {
      return;
    }
    if (at_idx <= handler_idx) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event2.target;
  if (current_target === handler_element) return;
  define_property(event2, "currentTarget", {
    configurable: true,
    get() {
      return current_target || owner_document;
    }
  });
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    var throw_error;
    var other_errors = [];
    while (current_target !== null) {
      var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
      current_target.host || null;
      try {
        var delegated = current_target["__" + event_name];
        if (delegated != null && (!/** @type {any} */
        current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
        // -> the target could not have been disabled because it emits the event in the first place
        event2.target === current_target)) {
          if (is_array(delegated)) {
            var [fn, ...data] = delegated;
            fn.apply(current_target, [event2, ...data]);
          } else {
            delegated.call(current_target, event2);
          }
        }
      } catch (error) {
        if (throw_error) {
          other_errors.push(error);
        } else {
          throw_error = error;
        }
      }
      if (event2.cancelBubble || parent_element === handler_element || parent_element === null) {
        break;
      }
      current_target = parent_element;
    }
    if (throw_error) {
      for (let error of other_errors) {
        queueMicrotask(() => {
          throw error;
        });
      }
      throw throw_error;
    }
  } finally {
    event2.__root = handler_element;
    delete event2.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
function create_fragment_from_html(html) {
  var elem = document.createElement("template");
  elem.innerHTML = html;
  return elem.content;
}
function assign_nodes(start, end) {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  if (effect2.nodes_start === null) {
    effect2.nodes_start = start;
    effect2.nodes_end = end;
  }
}
// @__NO_SIDE_EFFECTS__
function template(content, flags) {
  var is_fragment = (flags & TEMPLATE_FRAGMENT) !== 0;
  var use_import_node = (flags & TEMPLATE_USE_IMPORT_NODE) !== 0;
  var node;
  var has_start = !content.startsWith("<!>");
  return () => {
    if (hydrating) {
      assign_nodes(hydrate_node, null);
      return hydrate_node;
    }
    if (node === void 0) {
      node = create_fragment_from_html(has_start ? content : "<!>" + content);
      if (!is_fragment) node = /** @type {Node} */
      /* @__PURE__ */ get_first_child(node);
    }
    var clone = (
      /** @type {TemplateNode} */
      use_import_node || is_firefox ? document.importNode(node, true) : node.cloneNode(true)
    );
    if (is_fragment) {
      var start = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_first_child(clone)
      );
      var end = (
        /** @type {TemplateNode} */
        clone.lastChild
      );
      assign_nodes(start, end);
    } else {
      assign_nodes(clone, clone);
    }
    return clone;
  };
}
// @__NO_SIDE_EFFECTS__
function ns_template(content, flags, ns = "svg") {
  var has_start = !content.startsWith("<!>");
  var wrapped = `<${ns}>${has_start ? content : "<!>" + content}</${ns}>`;
  var node;
  return () => {
    if (hydrating) {
      assign_nodes(hydrate_node, null);
      return hydrate_node;
    }
    if (!node) {
      var fragment = (
        /** @type {DocumentFragment} */
        create_fragment_from_html(wrapped)
      );
      var root2 = (
        /** @type {Element} */
        /* @__PURE__ */ get_first_child(fragment)
      );
      {
        node = /** @type {Element} */
        /* @__PURE__ */ get_first_child(root2);
      }
    }
    var clone = (
      /** @type {TemplateNode} */
      node.cloneNode(true)
    );
    {
      assign_nodes(clone, clone);
    }
    return clone;
  };
}
function text(value = "") {
  if (!hydrating) {
    var t2 = create_text(value + "");
    assign_nodes(t2, t2);
    return t2;
  }
  var node = hydrate_node;
  if (node.nodeType !== 3) {
    node.before(node = create_text());
    set_hydrate_node(node);
  }
  assign_nodes(node, node);
  return node;
}
function comment() {
  if (hydrating) {
    assign_nodes(hydrate_node, null);
    return hydrate_node;
  }
  var frag = document.createDocumentFragment();
  var start = document.createComment("");
  var anchor = create_text();
  frag.append(start, anchor);
  assign_nodes(start, anchor);
  return frag;
}
function append(anchor, dom) {
  if (hydrating) {
    active_effect.nodes_end = hydrate_node;
    hydrate_next();
    return;
  }
  if (anchor === null) {
    return;
  }
  anchor.before(
    /** @type {Node} */
    dom
  );
}
function set_text(text2, value) {
  var str = value == null ? "" : typeof value === "object" ? value + "" : value;
  if (str !== (text2.__t ?? (text2.__t = text2.nodeValue))) {
    text2.__t = str;
    text2.nodeValue = str + "";
  }
}
function mount(component, options) {
  return _mount(component, options);
}
function hydrate(component, options) {
  init_operations();
  options.intro = options.intro ?? false;
  const target = options.target;
  const was_hydrating = hydrating;
  const previous_hydrate_node = hydrate_node;
  try {
    var anchor = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_first_child(target)
    );
    while (anchor && (anchor.nodeType !== 8 || /** @type {Comment} */
    anchor.data !== HYDRATION_START)) {
      anchor = /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(anchor);
    }
    if (!anchor) {
      throw HYDRATION_ERROR;
    }
    set_hydrating(true);
    set_hydrate_node(
      /** @type {Comment} */
      anchor
    );
    hydrate_next();
    const instance = _mount(component, { ...options, anchor });
    if (hydrate_node === null || hydrate_node.nodeType !== 8 || /** @type {Comment} */
    hydrate_node.data !== HYDRATION_END) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    set_hydrating(false);
    return (
      /**  @type {Exports} */
      instance
    );
  } catch (error) {
    if (error === HYDRATION_ERROR) {
      if (options.recover === false) {
        hydration_failed();
      }
      init_operations();
      clear_text_content(target);
      set_hydrating(false);
      return mount(component, options);
    }
    throw error;
  } finally {
    set_hydrating(was_hydrating);
    set_hydrate_node(previous_hydrate_node);
  }
}
const document_listeners = /* @__PURE__ */ new Map();
function _mount(Component, { target, anchor, props = {}, events, context, intro = true }) {
  init_operations();
  var registered_events = /* @__PURE__ */ new Set();
  var event_handle = (events2) => {
    for (var i = 0; i < events2.length; i++) {
      var event_name = events2[i];
      if (registered_events.has(event_name)) continue;
      registered_events.add(event_name);
      var passive = is_passive_event(event_name);
      target.addEventListener(event_name, handle_event_propagation, { passive });
      var n = document_listeners.get(event_name);
      if (n === void 0) {
        document.addEventListener(event_name, handle_event_propagation, { passive });
        document_listeners.set(event_name, 1);
      } else {
        document_listeners.set(event_name, n + 1);
      }
    }
  };
  event_handle(array_from(all_registered_events));
  root_event_handles.add(event_handle);
  var component = void 0;
  var unmount2 = component_root(() => {
    var anchor_node = anchor ?? target.appendChild(create_text());
    branch(() => {
      if (context) {
        push({});
        var ctx = (
          /** @type {ComponentContext} */
          component_context
        );
        ctx.c = context;
      }
      if (events) {
        props.$$events = events;
      }
      if (hydrating) {
        assign_nodes(
          /** @type {TemplateNode} */
          anchor_node,
          null
        );
      }
      component = Component(anchor_node, props) || {};
      if (hydrating) {
        active_effect.nodes_end = hydrate_node;
      }
      if (context) {
        pop();
      }
    });
    return () => {
      var _a2;
      for (var event_name of registered_events) {
        target.removeEventListener(event_name, handle_event_propagation);
        var n = (
          /** @type {number} */
          document_listeners.get(event_name)
        );
        if (--n === 0) {
          document.removeEventListener(event_name, handle_event_propagation);
          document_listeners.delete(event_name);
        } else {
          document_listeners.set(event_name, n);
        }
      }
      root_event_handles.delete(event_handle);
      if (anchor_node !== anchor) {
        (_a2 = anchor_node.parentNode) == null ? void 0 : _a2.removeChild(anchor_node);
      }
    };
  });
  mounted_components.set(component, unmount2);
  return component;
}
let mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(component, options) {
  const fn = mounted_components.get(component);
  if (fn) {
    mounted_components.delete(component);
    return fn(options);
  }
  return Promise.resolve();
}
function if_block(node, fn, [root_index, hydrate_index] = [0, 0]) {
  if (hydrating && root_index === 0) {
    hydrate_next();
  }
  var anchor = node;
  var consequent_effect = null;
  var alternate_effect = null;
  var condition = UNINITIALIZED;
  var flags = root_index > 0 ? EFFECT_TRANSPARENT : 0;
  var has_branch = false;
  const set_branch = (fn2, flag = true) => {
    has_branch = true;
    update_branch(flag, fn2);
  };
  const update_branch = (new_condition, fn2) => {
    if (condition === (condition = new_condition)) return;
    let mismatch = false;
    if (hydrating && hydrate_index !== -1) {
      if (root_index === 0) {
        const data = (
          /** @type {Comment} */
          anchor.data
        );
        if (data === HYDRATION_START) {
          hydrate_index = 0;
        } else if (data === HYDRATION_START_ELSE) {
          hydrate_index = Infinity;
        } else {
          hydrate_index = parseInt(data.substring(1));
          if (hydrate_index !== hydrate_index) {
            hydrate_index = condition ? Infinity : -1;
          }
        }
      }
      const is_else = hydrate_index > root_index;
      if (!!condition === is_else) {
        anchor = remove_nodes();
        set_hydrate_node(anchor);
        set_hydrating(false);
        mismatch = true;
        hydrate_index = -1;
      }
    }
    if (condition) {
      if (consequent_effect) {
        resume_effect(consequent_effect);
      } else if (fn2) {
        consequent_effect = branch(() => fn2(anchor));
      }
      if (alternate_effect) {
        pause_effect(alternate_effect, () => {
          alternate_effect = null;
        });
      }
    } else {
      if (alternate_effect) {
        resume_effect(alternate_effect);
      } else if (fn2) {
        alternate_effect = branch(() => fn2(anchor, [root_index + 1, hydrate_index]));
      }
      if (consequent_effect) {
        pause_effect(consequent_effect, () => {
          consequent_effect = null;
        });
      }
    }
    if (mismatch) {
      set_hydrating(true);
    }
  };
  block(() => {
    has_branch = false;
    fn(set_branch);
    if (!has_branch) {
      update_branch(null, null);
    }
  }, flags);
  if (hydrating) {
    anchor = hydrate_node;
  }
}
function css_props(element, get_styles) {
  if (hydrating) {
    set_hydrate_node(
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_first_child(element)
    );
  }
  render_effect(() => {
    var styles = get_styles();
    for (var key in styles) {
      var value = styles[key];
      if (value) {
        element.style.setProperty(key, value);
      } else {
        element.style.removeProperty(key);
      }
    }
  });
  teardown(() => {
    element.remove();
  });
}
function pause_effects(state2, items, controlled_anchor, items_map) {
  var transitions = [];
  var length = items.length;
  for (var i = 0; i < length; i++) {
    pause_children(items[i].e, transitions, true);
  }
  var is_controlled = length > 0 && transitions.length === 0 && controlled_anchor !== null;
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      /** @type {Element} */
      controlled_anchor.parentNode
    );
    clear_text_content(parent_node);
    parent_node.append(
      /** @type {Element} */
      controlled_anchor
    );
    items_map.clear();
    link(state2, items[0].prev, items[length - 1].next);
  }
  run_out_transitions(transitions, () => {
    for (var i2 = 0; i2 < length; i2++) {
      var item = items[i2];
      if (!is_controlled) {
        items_map.delete(item.k);
        link(state2, item.prev, item.next);
      }
      destroy_effect(item.e, !is_controlled);
    }
  });
}
function each(node, flags, get_collection, get_key, render_fn, fallback_fn = null) {
  var anchor = node;
  var state2 = { flags, items: /* @__PURE__ */ new Map(), first: null };
  var is_controlled = (flags & EACH_IS_CONTROLLED) !== 0;
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      node
    );
    anchor = hydrating ? set_hydrate_node(
      /** @type {Comment | Text} */
      /* @__PURE__ */ get_first_child(parent_node)
    ) : parent_node.appendChild(create_text());
  }
  if (hydrating) {
    hydrate_next();
  }
  var fallback = null;
  var was_empty = false;
  var each_array = /* @__PURE__ */ derived_safe_equal(() => {
    var collection = get_collection();
    return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
  });
  block(() => {
    var array = get(each_array);
    var length = array.length;
    if (was_empty && length === 0) {
      return;
    }
    was_empty = length === 0;
    let mismatch = false;
    if (hydrating) {
      var is_else = (
        /** @type {Comment} */
        anchor.data === HYDRATION_START_ELSE
      );
      if (is_else !== (length === 0)) {
        anchor = remove_nodes();
        set_hydrate_node(anchor);
        set_hydrating(false);
        mismatch = true;
      }
    }
    if (hydrating) {
      var prev = null;
      var item;
      for (var i = 0; i < length; i++) {
        if (hydrate_node.nodeType === 8 && /** @type {Comment} */
        hydrate_node.data === HYDRATION_END) {
          anchor = /** @type {Comment} */
          hydrate_node;
          mismatch = true;
          set_hydrating(false);
          break;
        }
        var value = array[i];
        var key = get_key(value, i);
        item = create_item(
          hydrate_node,
          state2,
          prev,
          null,
          value,
          key,
          i,
          render_fn,
          flags,
          get_collection
        );
        state2.items.set(key, item);
        prev = item;
      }
      if (length > 0) {
        set_hydrate_node(remove_nodes());
      }
    }
    if (!hydrating) {
      reconcile(array, state2, anchor, render_fn, flags, get_key, get_collection);
    }
    if (fallback_fn !== null) {
      if (length === 0) {
        if (fallback) {
          resume_effect(fallback);
        } else {
          fallback = branch(() => fallback_fn(anchor));
        }
      } else if (fallback !== null) {
        pause_effect(fallback, () => {
          fallback = null;
        });
      }
    }
    if (mismatch) {
      set_hydrating(true);
    }
    get(each_array);
  });
  if (hydrating) {
    anchor = hydrate_node;
  }
}
function reconcile(array, state2, anchor, render_fn, flags, get_key, get_collection) {
  var _a2, _b, _c, _d;
  var is_animated = (flags & EACH_IS_ANIMATED) !== 0;
  var should_update = (flags & (EACH_ITEM_REACTIVE | EACH_INDEX_REACTIVE)) !== 0;
  var length = array.length;
  var items = state2.items;
  var first = state2.first;
  var current = first;
  var seen;
  var prev = null;
  var to_animate;
  var matched = [];
  var stashed = [];
  var value;
  var key;
  var item;
  var i;
  if (is_animated) {
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key = get_key(value, i);
      item = items.get(key);
      if (item !== void 0) {
        (_a2 = item.a) == null ? void 0 : _a2.measure();
        (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).add(item);
      }
    }
  }
  for (i = 0; i < length; i += 1) {
    value = array[i];
    key = get_key(value, i);
    item = items.get(key);
    if (item === void 0) {
      var child_anchor = current ? (
        /** @type {TemplateNode} */
        current.e.nodes_start
      ) : anchor;
      prev = create_item(
        child_anchor,
        state2,
        prev,
        prev === null ? state2.first : prev.next,
        value,
        key,
        i,
        render_fn,
        flags,
        get_collection
      );
      items.set(key, prev);
      matched = [];
      stashed = [];
      current = prev.next;
      continue;
    }
    if (should_update) {
      update_item(item, value, i, flags);
    }
    if ((item.e.f & INERT) !== 0) {
      resume_effect(item.e);
      if (is_animated) {
        (_b = item.a) == null ? void 0 : _b.unfix();
        (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).delete(item);
      }
    }
    if (item !== current) {
      if (seen !== void 0 && seen.has(item)) {
        if (matched.length < stashed.length) {
          var start = stashed[0];
          var j;
          prev = start.prev;
          var a = matched[0];
          var b = matched[matched.length - 1];
          for (j = 0; j < matched.length; j += 1) {
            move(matched[j], start, anchor);
          }
          for (j = 0; j < stashed.length; j += 1) {
            seen.delete(stashed[j]);
          }
          link(state2, a.prev, b.next);
          link(state2, prev, a);
          link(state2, b, start);
          current = start;
          prev = b;
          i -= 1;
          matched = [];
          stashed = [];
        } else {
          seen.delete(item);
          move(item, current, anchor);
          link(state2, item.prev, item.next);
          link(state2, item, prev === null ? state2.first : prev.next);
          link(state2, prev, item);
          prev = item;
        }
        continue;
      }
      matched = [];
      stashed = [];
      while (current !== null && current.k !== key) {
        if ((current.e.f & INERT) === 0) {
          (seen ?? (seen = /* @__PURE__ */ new Set())).add(current);
        }
        stashed.push(current);
        current = current.next;
      }
      if (current === null) {
        continue;
      }
      item = current;
    }
    matched.push(item);
    prev = item;
    current = item.next;
  }
  if (current !== null || seen !== void 0) {
    var to_destroy = seen === void 0 ? [] : array_from(seen);
    while (current !== null) {
      if ((current.e.f & INERT) === 0) {
        to_destroy.push(current);
      }
      current = current.next;
    }
    var destroy_length = to_destroy.length;
    if (destroy_length > 0) {
      var controlled_anchor = (flags & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;
      if (is_animated) {
        for (i = 0; i < destroy_length; i += 1) {
          (_c = to_destroy[i].a) == null ? void 0 : _c.measure();
        }
        for (i = 0; i < destroy_length; i += 1) {
          (_d = to_destroy[i].a) == null ? void 0 : _d.fix();
        }
      }
      pause_effects(state2, to_destroy, controlled_anchor, items);
    }
  }
  if (is_animated) {
    queue_micro_task(() => {
      var _a3;
      if (to_animate === void 0) return;
      for (item of to_animate) {
        (_a3 = item.a) == null ? void 0 : _a3.apply();
      }
    });
  }
  active_effect.first = state2.first && state2.first.e;
  active_effect.last = prev && prev.e;
}
function update_item(item, value, index, type) {
  if ((type & EACH_ITEM_REACTIVE) !== 0) {
    internal_set(item.v, value);
  }
  if ((type & EACH_INDEX_REACTIVE) !== 0) {
    internal_set(
      /** @type {Value<number>} */
      item.i,
      index
    );
  } else {
    item.i = index;
  }
}
function create_item(anchor, state2, prev, next2, value, key, index, render_fn, flags, get_collection) {
  var reactive = (flags & EACH_ITEM_REACTIVE) !== 0;
  var mutable = (flags & EACH_ITEM_IMMUTABLE) === 0;
  var v = reactive ? mutable ? /* @__PURE__ */ mutable_source(value) : source(value) : value;
  var i = (flags & EACH_INDEX_REACTIVE) === 0 ? index : source(index);
  var item = {
    i,
    v,
    k: key,
    a: null,
    // @ts-expect-error
    e: null,
    prev,
    next: next2
  };
  try {
    item.e = branch(() => render_fn(anchor, v, i, get_collection), hydrating);
    item.e.prev = prev && prev.e;
    item.e.next = next2 && next2.e;
    if (prev === null) {
      state2.first = item;
    } else {
      prev.next = item;
      prev.e.next = item.e;
    }
    if (next2 !== null) {
      next2.prev = item;
      next2.e.prev = item.e;
    }
    return item;
  } finally {
  }
}
function move(item, next2, anchor) {
  var end = item.next ? (
    /** @type {TemplateNode} */
    item.next.e.nodes_start
  ) : anchor;
  var dest = next2 ? (
    /** @type {TemplateNode} */
    next2.e.nodes_start
  ) : anchor;
  var node = (
    /** @type {TemplateNode} */
    item.e.nodes_start
  );
  while (node !== end) {
    var next_node = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(node)
    );
    dest.before(node);
    node = next_node;
  }
}
function link(state2, prev, next2) {
  if (prev === null) {
    state2.first = next2;
  } else {
    prev.next = next2;
    prev.e.next = next2 && next2.e;
  }
  if (next2 !== null) {
    next2.prev = prev;
    next2.e.prev = prev && prev.e;
  }
}
function slot(anchor, $$props, name, slot_props, fallback_fn) {
  var _a2;
  if (hydrating) {
    hydrate_next();
  }
  var slot_fn = (_a2 = $$props.$$slots) == null ? void 0 : _a2[name];
  var is_interop = false;
  if (slot_fn === true) {
    slot_fn = $$props[name === "default" ? "children" : name];
    is_interop = true;
  }
  if (slot_fn === void 0) ;
  else {
    slot_fn(anchor, is_interop ? () => slot_props : slot_props);
  }
}
function sanitize_slots(props) {
  const sanitized = {};
  if (props.children) sanitized.default = true;
  for (const key in props.$$slots) {
    sanitized[key] = true;
  }
  return sanitized;
}
function append_styles(anchor, css) {
  queue_micro_task(() => {
    var root2 = anchor.getRootNode();
    var target = (
      /** @type {ShadowRoot} */
      root2.host ? (
        /** @type {ShadowRoot} */
        root2
      ) : (
        /** @type {Document} */
        root2.head ?? /** @type {Document} */
        root2.ownerDocument.head
      )
    );
    if (!target.querySelector("#" + css.hash)) {
      const style = document.createElement("style");
      style.id = css.hash;
      style.textContent = css.code;
      target.appendChild(style);
    }
  });
}
const whitespace = [..." 	\n\r\f \v\uFEFF"];
function to_class(value, hash, directives) {
  var classname = value == null ? "" : "" + value;
  if (hash) {
    classname = classname ? classname + " " + hash : hash;
  }
  if (directives) {
    for (var key in directives) {
      if (directives[key]) {
        classname = classname ? classname + " " + key : key;
      } else if (classname.length) {
        var len = key.length;
        var a = 0;
        while ((a = classname.indexOf(key, a)) >= 0) {
          var b = a + len;
          if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
            classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
          } else {
            a = b;
          }
        }
      }
    }
  }
  return classname === "" ? null : classname;
}
function to_style(value, styles) {
  return value == null ? null : String(value);
}
function set_class(dom, is_html, value, hash, prev_classes, next_classes) {
  var prev = dom.__className;
  if (hydrating || prev !== value) {
    var next_class_name = to_class(value, hash, next_classes);
    if (!hydrating || next_class_name !== dom.getAttribute("class")) {
      if (next_class_name == null) {
        dom.removeAttribute("class");
      } else {
        dom.className = next_class_name;
      }
    }
    dom.__className = value;
  } else if (next_classes && prev_classes !== next_classes) {
    for (var key in next_classes) {
      var is_present = !!next_classes[key];
      if (prev_classes == null || is_present !== !!prev_classes[key]) {
        dom.classList.toggle(key, is_present);
      }
    }
  }
  return next_classes;
}
function set_style(dom, value, prev_styles, next_styles) {
  var prev = dom.__style;
  if (hydrating || prev !== value) {
    var next_style_attr = to_style(value);
    if (!hydrating || next_style_attr !== dom.getAttribute("style")) {
      if (next_style_attr == null) {
        dom.removeAttribute("style");
      } else {
        dom.style.cssText = next_style_attr;
      }
    }
    dom.__style = value;
  }
  return next_styles;
}
const IS_CUSTOM_ELEMENT = Symbol("is custom element");
const IS_HTML = Symbol("is html");
function remove_input_defaults(input) {
  if (!hydrating) return;
  var already_removed = false;
  var remove_defaults = () => {
    if (already_removed) return;
    already_removed = true;
    if (input.hasAttribute("value")) {
      var value = input.value;
      set_attribute(input, "value", null);
      input.value = value;
    }
    if (input.hasAttribute("checked")) {
      var checked = input.checked;
      set_attribute(input, "checked", null);
      input.checked = checked;
    }
  };
  input.__on_r = remove_defaults;
  queue_idle_task(remove_defaults);
  add_form_reset_listener();
}
function set_attribute(element, attribute, value, skip_warning) {
  var attributes = get_attributes(element);
  if (hydrating) {
    attributes[attribute] = element.getAttribute(attribute);
    if (attribute === "src" || attribute === "srcset" || attribute === "href" && element.nodeName === "LINK") {
      return;
    }
  }
  if (attributes[attribute] === (attributes[attribute] = value)) return;
  if (attribute === "loading") {
    element[LOADING_ATTR_SYMBOL] = value;
  }
  if (value == null) {
    element.removeAttribute(attribute);
  } else if (typeof value !== "string" && get_setters(element).includes(attribute)) {
    element[attribute] = value;
  } else {
    element.setAttribute(attribute, value);
  }
}
function get_attributes(element) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    element.__attributes ?? (element.__attributes = {
      [IS_CUSTOM_ELEMENT]: element.nodeName.includes("-"),
      [IS_HTML]: element.namespaceURI === NAMESPACE_HTML
    })
  );
}
var setters_cache = /* @__PURE__ */ new Map();
function get_setters(element) {
  var setters = setters_cache.get(element.nodeName);
  if (setters) return setters;
  setters_cache.set(element.nodeName, setters = []);
  var descriptors;
  var proto = element;
  var element_proto = Element.prototype;
  while (element_proto !== proto) {
    descriptors = get_descriptors(proto);
    for (var key in descriptors) {
      if (descriptors[key].set) {
        setters.push(key);
      }
    }
    proto = get_prototype_of(proto);
  }
  return setters;
}
function bind_value(input, get2, set2 = get2) {
  var runes = is_runes();
  listen_to_event_and_reset_event(input, "input", (is_reset) => {
    var value = is_reset ? input.defaultValue : input.value;
    value = is_numberlike_input(input) ? to_number(value) : value;
    set2(value);
    if (runes && value !== (value = get2())) {
      var start = input.selectionStart;
      var end = input.selectionEnd;
      input.value = value ?? "";
      if (end !== null) {
        input.selectionStart = start;
        input.selectionEnd = Math.min(end, input.value.length);
      }
    }
  });
  if (
    // If we are hydrating and the value has since changed,
    // then use the updated value from the input instead.
    hydrating && input.defaultValue !== input.value || // If defaultValue is set, then value == defaultValue
    // TODO Svelte 6: remove input.value check and set to empty string?
    untrack(get2) == null && input.value
  ) {
    set2(is_numberlike_input(input) ? to_number(input.value) : input.value);
  }
  render_effect(() => {
    var value = get2();
    if (is_numberlike_input(input) && value === to_number(input.value)) {
      return;
    }
    if (input.type === "date" && !value && !input.value) {
      return;
    }
    if (value !== input.value) {
      input.value = value ?? "";
    }
  });
}
function is_numberlike_input(input) {
  var type = input.type;
  return type === "number" || type === "range";
}
function to_number(value) {
  return value === "" ? null : +value;
}
function is_bound_this(bound_value, element_or_component) {
  return bound_value === element_or_component || (bound_value == null ? void 0 : bound_value[STATE_SYMBOL]) === element_or_component;
}
function bind_this(element_or_component = {}, update, get_value, get_parts) {
  effect(() => {
    var old_parts;
    var parts;
    render_effect(() => {
      old_parts = parts;
      parts = [];
      untrack(() => {
        if (element_or_component !== get_value(...parts)) {
          update(element_or_component, ...parts);
          if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) {
            update(null, ...old_parts);
          }
        }
      });
    });
    return () => {
      queue_micro_task(() => {
        if (parts && is_bound_this(get_value(...parts), element_or_component)) {
          update(null, ...parts);
        }
      });
    };
  });
  return element_or_component;
}
function bind_property(property, event_name, element, set2, get2) {
  var handler = () => {
    set2(element[property]);
  };
  element.addEventListener(event_name, handler);
  if (get2) {
    render_effect(() => {
      element[property] = get2();
    });
  } else {
    handler();
  }
  if (element === document.body || element === window || element === document) {
    teardown(() => {
      element.removeEventListener(event_name, handler);
    });
  }
}
function init(immutable = false) {
  const context = (
    /** @type {ComponentContextLegacy} */
    component_context
  );
  const callbacks = context.l.u;
  if (!callbacks) return;
  let props = () => deep_read_state(context.s);
  if (immutable) {
    let version = 0;
    let prev = (
      /** @type {Record<string, any>} */
      {}
    );
    const d = /* @__PURE__ */ derived(() => {
      let changed = false;
      const props2 = context.s;
      for (const key in props2) {
        if (props2[key] !== prev[key]) {
          prev[key] = props2[key];
          changed = true;
        }
      }
      if (changed) version++;
      return version;
    });
    props = () => get(d);
  }
  if (callbacks.b.length) {
    user_pre_effect(() => {
      observe_all(context, props);
      run_all(callbacks.b);
    });
  }
  user_effect(() => {
    const fns = untrack(() => callbacks.m.map(run));
    return () => {
      for (const fn of fns) {
        if (typeof fn === "function") {
          fn();
        }
      }
    };
  });
  if (callbacks.a.length) {
    user_effect(() => {
      observe_all(context, props);
      run_all(callbacks.a);
    });
  }
}
function observe_all(context, props) {
  if (context.l.s) {
    for (const signal of context.l.s) get(signal);
  }
  props();
}
function reactive_import(fn) {
  var s = source(0);
  return function() {
    if (arguments.length === 1) {
      set(s, get(s) + 1);
      return arguments[0];
    } else {
      get(s);
      return fn();
    }
  };
}
function onMount(fn) {
  if (component_context === null) {
    lifecycle_outside_component();
  }
  if (legacy_mode_flag && component_context.l !== null) {
    init_update_callbacks(component_context).m.push(fn);
  } else {
    user_effect(() => {
      const cleanup = untrack(fn);
      if (typeof cleanup === "function") return (
        /** @type {() => void} */
        cleanup
      );
    });
  }
}
function onDestroy(fn) {
  if (component_context === null) {
    lifecycle_outside_component();
  }
  onMount(() => () => untrack(fn));
}
function init_update_callbacks(context) {
  var l = (
    /** @type {ComponentContextLegacy} */
    context.l
  );
  return l.u ?? (l.u = { a: [], b: [], m: [] });
}
let is_store_binding = false;
function capture_store_binding(fn) {
  var previous_is_store_binding = is_store_binding;
  try {
    is_store_binding = false;
    return [fn(), is_store_binding];
  } finally {
    is_store_binding = previous_is_store_binding;
  }
}
function has_destroyed_component_ctx(current_value) {
  var _a2;
  return ((_a2 = current_value.ctx) == null ? void 0 : _a2.d) ?? false;
}
function prop(props, key, flags, fallback) {
  var _a2;
  var immutable = (flags & PROPS_IS_IMMUTABLE) !== 0;
  var runes = !legacy_mode_flag || (flags & PROPS_IS_RUNES) !== 0;
  var bindable = (flags & PROPS_IS_BINDABLE) !== 0;
  var lazy = (flags & PROPS_IS_LAZY_INITIAL) !== 0;
  var is_store_sub = false;
  var prop_value;
  if (bindable) {
    [prop_value, is_store_sub] = capture_store_binding(() => (
      /** @type {V} */
      props[key]
    ));
  } else {
    prop_value = /** @type {V} */
    props[key];
  }
  var is_entry_props = STATE_SYMBOL in props || LEGACY_PROPS in props;
  var setter = bindable && (((_a2 = get_descriptor(props, key)) == null ? void 0 : _a2.set) ?? (is_entry_props && key in props && ((v) => props[key] = v))) || void 0;
  var fallback_value = (
    /** @type {V} */
    fallback
  );
  var fallback_dirty = true;
  var fallback_used = false;
  var get_fallback = () => {
    fallback_used = true;
    if (fallback_dirty) {
      fallback_dirty = false;
      if (lazy) {
        fallback_value = untrack(
          /** @type {() => V} */
          fallback
        );
      } else {
        fallback_value = /** @type {V} */
        fallback;
      }
    }
    return fallback_value;
  };
  if (prop_value === void 0 && fallback !== void 0) {
    if (setter && runes) {
      props_invalid_value();
    }
    prop_value = get_fallback();
    if (setter) setter(prop_value);
  }
  var getter;
  if (runes) {
    getter = () => {
      var value = (
        /** @type {V} */
        props[key]
      );
      if (value === void 0) return get_fallback();
      fallback_dirty = true;
      fallback_used = false;
      return value;
    };
  } else {
    var derived_getter = (immutable ? derived : derived_safe_equal)(
      () => (
        /** @type {V} */
        props[key]
      )
    );
    derived_getter.f |= LEGACY_DERIVED_PROP;
    getter = () => {
      var value = get(derived_getter);
      if (value !== void 0) fallback_value = /** @type {V} */
      void 0;
      return value === void 0 ? fallback_value : value;
    };
  }
  if ((flags & PROPS_IS_UPDATED) === 0) {
    return getter;
  }
  if (setter) {
    var legacy_parent = props.$$legacy;
    return function(value, mutation) {
      if (arguments.length > 0) {
        if (!runes || !mutation || legacy_parent || is_store_sub) {
          setter(mutation ? getter() : value);
        }
        return value;
      } else {
        return getter();
      }
    };
  }
  var from_child = false;
  var inner_current_value = /* @__PURE__ */ mutable_source(prop_value);
  var current_value = /* @__PURE__ */ derived(() => {
    var parent_value = getter();
    var child_value = get(inner_current_value);
    if (from_child) {
      from_child = false;
      return child_value;
    }
    return inner_current_value.v = parent_value;
  });
  if (bindable) {
    get(current_value);
  }
  if (!immutable) current_value.equals = safe_equals;
  return function(value, mutation) {
    if (arguments.length > 0) {
      const new_value = mutation ? get(current_value) : runes && bindable ? proxy(value) : value;
      if (!current_value.equals(new_value)) {
        from_child = true;
        set(inner_current_value, new_value);
        if (fallback_used && fallback_value !== void 0) {
          fallback_value = new_value;
        }
        if (has_destroyed_component_ctx(current_value)) {
          return value;
        }
        untrack(() => get(current_value));
      }
      return value;
    }
    if (has_destroyed_component_ctx(current_value)) {
      return current_value.v;
    }
    return get(current_value);
  };
}
function createClassComponent(options) {
  return new Svelte4Component(options);
}
class Svelte4Component {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(options) {
    /** @type {any} */
    __privateAdd(this, _events);
    /** @type {Record<string, any>} */
    __privateAdd(this, _instance);
    var _a2;
    var sources = /* @__PURE__ */ new Map();
    var add_source = (key, value) => {
      var s = /* @__PURE__ */ mutable_source(value);
      sources.set(key, s);
      return s;
    };
    const props = new Proxy(
      { ...options.props || {}, $$events: {} },
      {
        get(target, prop2) {
          return get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
        },
        has(target, prop2) {
          if (prop2 === LEGACY_PROPS) return true;
          get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
          return Reflect.has(target, prop2);
        },
        set(target, prop2, value) {
          set(sources.get(prop2) ?? add_source(prop2, value), value);
          return Reflect.set(target, prop2, value);
        }
      }
    );
    __privateSet(this, _instance, (options.hydrate ? hydrate : mount)(options.component, {
      target: options.target,
      anchor: options.anchor,
      props,
      context: options.context,
      intro: options.intro ?? false,
      recover: options.recover
    }));
    if (!((_a2 = options == null ? void 0 : options.props) == null ? void 0 : _a2.$$host) || options.sync === false) {
      flushSync();
    }
    __privateSet(this, _events, props.$$events);
    for (const key of Object.keys(__privateGet(this, _instance))) {
      if (key === "$set" || key === "$destroy" || key === "$on") continue;
      define_property(this, key, {
        get() {
          return __privateGet(this, _instance)[key];
        },
        /** @param {any} value */
        set(value) {
          __privateGet(this, _instance)[key] = value;
        },
        enumerable: true
      });
    }
    __privateGet(this, _instance).$set = /** @param {Record<string, any>} next */
    (next2) => {
      Object.assign(props, next2);
    };
    __privateGet(this, _instance).$destroy = () => {
      unmount(__privateGet(this, _instance));
    };
  }
  /** @param {Record<string, any>} props */
  $set(props) {
    __privateGet(this, _instance).$set(props);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(event2, callback) {
    __privateGet(this, _events)[event2] = __privateGet(this, _events)[event2] || [];
    const cb = (...args) => callback.call(this, ...args);
    __privateGet(this, _events)[event2].push(cb);
    return () => {
      __privateGet(this, _events)[event2] = __privateGet(this, _events)[event2].filter(
        /** @param {any} fn */
        (fn) => fn !== cb
      );
    };
  }
  $destroy() {
    __privateGet(this, _instance).$destroy();
  }
}
_events = new WeakMap();
_instance = new WeakMap();
let SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    /**
     * @param {*} $$componentCtor
     * @param {*} $$slots
     * @param {*} use_shadow_dom
     */
    constructor($$componentCtor, $$slots, use_shadow_dom) {
      super();
      /** The Svelte component constructor */
      __publicField(this, "$$ctor");
      /** Slots */
      __publicField(this, "$$s");
      /** @type {any} The Svelte component instance */
      __publicField(this, "$$c");
      /** Whether or not the custom element is connected */
      __publicField(this, "$$cn", false);
      /** @type {Record<string, any>} Component props data */
      __publicField(this, "$$d", {});
      /** `true` if currently in the process of reflecting component props back to attributes */
      __publicField(this, "$$r", false);
      /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
      __publicField(this, "$$p_d", {});
      /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
      __publicField(this, "$$l", {});
      /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
      __publicField(this, "$$l_u", /* @__PURE__ */ new Map());
      /** @type {any} The managed render effect for reflecting attributes */
      __publicField(this, "$$me");
      this.$$ctor = $$componentCtor;
      this.$$s = $$slots;
      if (use_shadow_dom) {
        this.attachShadow({ mode: "open" });
      }
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    addEventListener(type, listener, options) {
      this.$$l[type] = this.$$l[type] || [];
      this.$$l[type].push(listener);
      if (this.$$c) {
        const unsub = this.$$c.$on(type, listener);
        this.$$l_u.set(listener, unsub);
      }
      super.addEventListener(type, listener, options);
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    removeEventListener(type, listener, options) {
      super.removeEventListener(type, listener, options);
      if (this.$$c) {
        const unsub = this.$$l_u.get(listener);
        if (unsub) {
          unsub();
          this.$$l_u.delete(listener);
        }
      }
    }
    async connectedCallback() {
      this.$$cn = true;
      if (!this.$$c) {
        let create_slot = function(name) {
          return (anchor) => {
            const slot2 = document.createElement("slot");
            if (name !== "default") slot2.name = name;
            append(anchor, slot2);
          };
        };
        await Promise.resolve();
        if (!this.$$cn || this.$$c) {
          return;
        }
        const $$slots = {};
        const existing_slots = get_custom_elements_slots(this);
        for (const name of this.$$s) {
          if (name in existing_slots) {
            if (name === "default" && !this.$$d.children) {
              this.$$d.children = create_slot(name);
              $$slots.default = true;
            } else {
              $$slots[name] = create_slot(name);
            }
          }
        }
        for (const attribute of this.attributes) {
          const name = this.$$g_p(attribute.name);
          if (!(name in this.$$d)) {
            this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
          }
        }
        for (const key in this.$$p_d) {
          if (!(key in this.$$d) && this[key] !== void 0) {
            this.$$d[key] = this[key];
            delete this[key];
          }
        }
        this.$$c = createClassComponent({
          component: this.$$ctor,
          target: this.shadowRoot || this,
          props: {
            ...this.$$d,
            $$slots,
            $$host: this
          }
        });
        this.$$me = effect_root(() => {
          render_effect(() => {
            var _a2;
            this.$$r = true;
            for (const key of object_keys(this.$$c)) {
              if (!((_a2 = this.$$p_d[key]) == null ? void 0 : _a2.reflect)) continue;
              this.$$d[key] = this.$$c[key];
              const attribute_value = get_custom_element_value(
                key,
                this.$$d[key],
                this.$$p_d,
                "toAttribute"
              );
              if (attribute_value == null) {
                this.removeAttribute(this.$$p_d[key].attribute || key);
              } else {
                this.setAttribute(this.$$p_d[key].attribute || key, attribute_value);
              }
            }
            this.$$r = false;
          });
        });
        for (const type in this.$$l) {
          for (const listener of this.$$l[type]) {
            const unsub = this.$$c.$on(type, listener);
            this.$$l_u.set(listener, unsub);
          }
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
    attributeChangedCallback(attr, _oldValue, newValue) {
      var _a2;
      if (this.$$r) return;
      attr = this.$$g_p(attr);
      this.$$d[attr] = get_custom_element_value(attr, newValue, this.$$p_d, "toProp");
      (_a2 = this.$$c) == null ? void 0 : _a2.$set({ [attr]: this.$$d[attr] });
    }
    disconnectedCallback() {
      this.$$cn = false;
      Promise.resolve().then(() => {
        if (!this.$$cn && this.$$c) {
          this.$$c.$destroy();
          this.$$me();
          this.$$c = void 0;
        }
      });
    }
    /**
     * @param {string} attribute_name
     */
    $$g_p(attribute_name) {
      return object_keys(this.$$p_d).find(
        (key) => this.$$p_d[key].attribute === attribute_name || !this.$$p_d[key].attribute && key.toLowerCase() === attribute_name
      ) || attribute_name;
    }
  };
}
function get_custom_element_value(prop2, value, props_definition, transform) {
  var _a2;
  const type = (_a2 = props_definition[prop2]) == null ? void 0 : _a2.type;
  value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
  if (!transform || !props_definition[prop2]) {
    return value;
  } else if (transform === "toAttribute") {
    switch (type) {
      case "Object":
      case "Array":
        return value == null ? null : JSON.stringify(value);
      case "Boolean":
        return value ? "" : null;
      case "Number":
        return value == null ? null : value;
      default:
        return value;
    }
  } else {
    switch (type) {
      case "Object":
      case "Array":
        return value && JSON.parse(value);
      case "Boolean":
        return value;
      // conversion already handled above
      case "Number":
        return value != null ? +value : value;
      default:
        return value;
    }
  }
}
function get_custom_elements_slots(element) {
  const result = {};
  element.childNodes.forEach((node) => {
    result[
      /** @type {Element} node */
      node.slot || "default"
    ] = true;
  });
  return result;
}
function create_custom_element(Component, props_definition, slots, exports, use_shadow_dom, extend) {
  let Class = class extends SvelteElement {
    constructor() {
      super(Component, slots, use_shadow_dom);
      this.$$p_d = props_definition;
    }
    static get observedAttributes() {
      return object_keys(props_definition).map(
        (key) => (props_definition[key].attribute || key).toLowerCase()
      );
    }
  };
  object_keys(props_definition).forEach((prop2) => {
    define_property(Class.prototype, prop2, {
      get() {
        return this.$$c && prop2 in this.$$c ? this.$$c[prop2] : this.$$d[prop2];
      },
      set(value) {
        var _a2;
        value = get_custom_element_value(prop2, value, props_definition);
        this.$$d[prop2] = value;
        var component = this.$$c;
        if (component) {
          var setter = (_a2 = get_descriptor(component, prop2)) == null ? void 0 : _a2.get;
          if (setter) {
            component[prop2] = value;
          } else {
            component.$set({ [prop2]: value });
          }
        }
      }
    });
  });
  exports.forEach((property) => {
    define_property(Class.prototype, property, {
      get() {
        var _a2;
        return (_a2 = this.$$c) == null ? void 0 : _a2[property];
      }
    });
  });
  Component.element = /** @type {any} */
  Class;
  return Class;
}
const panel = proxy({
  open: false,
  currentCommentId: 0,
  showResolvedOnly: false,
  pulseMarkerId: 0
});
const overlay = proxy({ open: false });
let guestNameValue = state("");
const guestName = {
  get value() {
    return get(guestNameValue);
  },
  set(name) {
    set(guestNameValue, proxy(name));
    if (typeof window !== "undefined") {
      sessionStorage.setItem("loop-guest-name", name);
    }
  },
  get() {
    if (!get(guestNameValue) && typeof window !== "undefined") {
      set(guestNameValue, proxy(sessionStorage.getItem("loop-guest-name") || ""));
    }
    return get(guestNameValue);
  },
  clear() {
    set(guestNameValue, "");
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("loop-guest-name");
    }
  }
};
let translations = state(proxy({}));
const t = (key, fallback) => {
  return get(translations)[key] || fallback || key;
};
const tt = (key, fallback, replacements) => {
  let text2 = get(translations)[key] || fallback || key;
  for (const [placeholder, value] of Object.entries(replacements)) {
    text2 = text2.replace(`{${placeholder}}`, value);
  }
  return text2;
};
const setTranslations = (newTranslations) => {
  set(translations, proxy(newTranslations));
};
enable_legacy_mode_flag();
var root$f = /* @__PURE__ */ ns_template(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="svelte-1q9atlb"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5"></path><path d="M15 12H12M12 12H9M12 12V9M12 12V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>`);
const $$css$f = {
  hash: "svelte-1q9atlb",
  code: "svg.svelte-1q9atlb{width:var(--size,var(--icon-size));height:var(--size,var(--icon-size))}"
};
function IconComment($$anchor) {
  append_styles($$anchor, $$css$f);
  var svg = root$f();
  append($$anchor, svg);
}
create_custom_element(IconComment, {}, [], [], true);
var root_1$2 = /* @__PURE__ */ template(`<span class="svelte-1qoozz7"><!></span>`);
var root$e = /* @__PURE__ */ template(`<button><!> <!></button>`);
const $$css$e = {
  hash: "svelte-1qoozz7",
  code: "button.svelte-1qoozz7{appearance:none;background-color:var(--button-background);color:var(--button-color);padding:var(--button-padding);font-family:var(--font-family);letter-spacing:.01em;border-radius:var(--button-border-radius);gap:var(--button-gap);cursor:pointer;font-size:var(--button-font-size);font-weight:var(--button-font-weight);transition:var(--button-transition);white-space:nowrap;height:var(--button-height);outline-color:var(--button-outline-color);border:0;flex:none;justify-content:center;align-items:center;line-height:1;display:inline-flex}button.svelte-1qoozz7:focus-visible{outline-offset:var(--button-outline-offset)}button.svelte-1qoozz7:hover,button.svelte-1qoozz7:focus-visible{color:var(--button-hover-color);background-color:var(--button-hover-background)}button.svelte-1qoozz7 span:where(.svelte-1qoozz7){text-overflow:ellipsis;min-width:0;display:block;overflow-x:clip}button.button--header.svelte-1qoozz7{--icon-size:1.25rem;background-color:var(--button-header-background);height:var(--button-header-height);padding:var(--button-header-padding);mix-blend-mode:var(--button-header-blend-mode);border:0;border-radius:0}button.button--header.svelte-1qoozz7:first-child{border-top-left-radius:var(--border-radius-rounded);border-bottom-left-radius:var(--border-radius-rounded)}button.button--header.svelte-1qoozz7:hover,button.button--header.svelte-1qoozz7:focus-visible{background-color:var(--button-header-hover-background)}button.button--panel.svelte-1qoozz7{background-color:var(--button-panel-background);height:auto;padding:var(--button-panel-padding);border-radius:var(--border-radius-rounded);border:0}button.button--panel.svelte-1qoozz7 span:where(.svelte-1qoozz7){overflow:visible}button.button--solid.svelte-1qoozz7{background-color:var(--button-solid-background)}button.button--solid.svelte-1qoozz7:hover,button.button--solid.svelte-1qoozz7:focus-visible{color:var(--button-solid-hover-color);background-color:var(--button-solid-hover-background)}button.button--small.svelte-1qoozz7{height:var(--button-small-height);font-size:var(--button-small-font-size)}button.button--icon.svelte-1qoozz7{background-color:var(--button-icon-background);color:var(--button-icon-color);height:var(--button-icon-height);box-shadow:var(--button-icon-shadow);aspect-ratio:1;font-size:var(--button-icon-font-size);border-radius:var(--button-icon-border-radius);border:0;padding:0}button.button--icon.svelte-1qoozz7:hover,button.button--icon.svelte-1qoozz7:focus-visible{background-color:var(--button-icon-hover-background);color:var(--button-icon-hover-color)}button.button--marker.svelte-1qoozz7{background-color:var(--button-marker-background);color:var(--button-marker-color);height:var(--marker-size);width:var(--marker-size);font-weight:var(--button-marker-font-weight);border-radius:var(--button-marker-border-radius);border:0;padding:0}button.button--marker.svelte-1qoozz7 :where(.svelte-1qoozz7){pointer-events:none}button.button--marker.button--marker-highlighted.svelte-1qoozz7{background-color:var(--button-marker-highlighted-background);color:var(--button-marker-highlighted-color)}button.button--marker-open.svelte-1qoozz7{background-color:var(--color-accent);color:var(--color-accent-dark)}button.button--filter.svelte-1qoozz7{background-color:var(--button-filter-background);color:var(--button-filter-color);height:var(--button-filter-height);font-size:var(--button-filter-font-size);padding:var(--button-filter-padding);border-radius:var(--button-filter-border-radius);flex:1}button.button--filter.svelte-1qoozz7:hover,button.button--filter.svelte-1qoozz7:focus-visible{color:var(--button-filter-hover-color);background-color:var(--button-filter-hover-background)}button.button--filter.button--filter-active.svelte-1qoozz7{background-color:var(--button-filter-active-background);color:var(--button-filter-active-color);font-weight:var(--button-filter-active-font-weight)}button.button--filter.button--filter-active.svelte-1qoozz7:hover,button.button--filter.button--filter-active.svelte-1qoozz7:focus-visible{background-color:var(--button-filter-active-background);color:var(--button-filter-active-color)}button.button--menu-item.svelte-1qoozz7{background-color:var(--button-menu-item-background);color:var(--button-menu-item-color);width:100%;padding:var(--button-menu-item-padding);border-radius:var(--button-menu-item-border-radius);font-size:var(--button-menu-item-font-size);justify-content:flex-start;gap:var(--button-menu-item-gap)}button.button--menu-item.svelte-1qoozz7:hover,button.button--menu-item.svelte-1qoozz7:focus-visible{background-color:var(--button-menu-item-hover-background);color:var(--button-menu-item-hover-color)}button.button--menu-item.button--menu-item-active.svelte-1qoozz7{background-color:var(--button-menu-item-active-background);color:var(--button-menu-item-active-color);font-weight:var(--button-menu-item-active-font-weight)}button.button--menu-item.button--menu-item-active.svelte-1qoozz7:hover,button.button--menu-item.button--menu-item-active.svelte-1qoozz7:focus-visible{background-color:var(--button-menu-item-active-background);color:var(--button-menu-item-active-color)}button.is-active.svelte-1qoozz7{background-color:var(--button-active-background);color:var(--button-active-color)}button.is-active.svelte-1qoozz7:hover,button.is-active.svelte-1qoozz7:focus-visible{color:var(--button-active-color);background-color:var(--button-active-background)}button.svelte-1qoozz7:disabled{opacity:var(--button-disabled-opacity);cursor:not-allowed}button.svelte-1qoozz7:disabled:hover{color:var(--button-disabled-hover-color);background-color:var(--button-disabled-hover-background)}"
};
function Button($$anchor, $$props) {
  const $$slots = sanitize_slots($$props);
  push($$props, true);
  append_styles($$anchor, $$css$e);
  const onclick = prop($$props, "onclick", 7), onmouseenter = prop($$props, "onmouseenter", 7), onmouseout = prop($$props, "onmouseout", 7), onblur = prop($$props, "onblur", 7), active = prop($$props, "active", 7, false), type = prop($$props, "type", 7, "button"), style = prop($$props, "style", 7, ""), disabled = prop($$props, "disabled", 7, false), ariaLabel = prop($$props, "ariaLabel", 7, ""), id = prop($$props, "id", 7, ""), ariaHaspopup = prop($$props, "ariaHaspopup", 7, ""), ariaExpanded = prop($$props, "ariaExpanded", 7, ""), ariaControls = prop($$props, "ariaControls", 7, "");
  var button = root$e();
  button.__click = function(...$$args) {
    var _a2;
    (_a2 = onclick()) == null ? void 0 : _a2.apply(this, $$args);
  };
  let classes;
  button.__mouseout = function(...$$args) {
    var _a2;
    (_a2 = onmouseout()) == null ? void 0 : _a2.apply(this, $$args);
  };
  var node = child(button);
  slot(node, $$props, "icon", {});
  var node_1 = sibling(node, 2);
  {
    var consequent = ($$anchor2) => {
      var span = root_1$2();
      var node_2 = child(span);
      slot(node_2, $$props, "default", {});
      reset$1(span);
      append($$anchor2, span);
    };
    if_block(node_1, ($$render) => {
      if ($$slots.default) $$render(consequent);
    });
  }
  reset$1(button);
  template_effect(
    ($0) => {
      classes = set_class(button, 1, `button ${style() ?? ""}`, "svelte-1qoozz7", classes, $0);
      set_attribute(button, "type", type());
      set_attribute(button, "aria-label", ariaLabel());
      set_attribute(button, "id", id());
      set_attribute(button, "aria-haspopup", ariaHaspopup() === "menu" ? "menu" : null);
      set_attribute(button, "aria-expanded", ariaExpanded() === "true" ? true : ariaExpanded() === "false" ? false : null);
      set_attribute(button, "aria-controls", ariaControls() || null);
      button.disabled = disabled();
    },
    [() => ({ "is-active": active() })]
  );
  event("mouseenter", button, function(...$$args) {
    var _a2;
    (_a2 = onmouseenter()) == null ? void 0 : _a2.apply(this, $$args);
  });
  event("blur", button, function(...$$args) {
    var _a2;
    (_a2 = onblur()) == null ? void 0 : _a2.apply(this, $$args);
  });
  append($$anchor, button);
  return pop({
    get onclick() {
      return onclick();
    },
    set onclick($$value) {
      onclick($$value);
      flushSync();
    },
    get onmouseenter() {
      return onmouseenter();
    },
    set onmouseenter($$value) {
      onmouseenter($$value);
      flushSync();
    },
    get onmouseout() {
      return onmouseout();
    },
    set onmouseout($$value) {
      onmouseout($$value);
      flushSync();
    },
    get onblur() {
      return onblur();
    },
    set onblur($$value) {
      onblur($$value);
      flushSync();
    },
    get active() {
      return active();
    },
    set active($$value = false) {
      active($$value);
      flushSync();
    },
    get type() {
      return type();
    },
    set type($$value = "button") {
      type($$value);
      flushSync();
    },
    get style() {
      return style();
    },
    set style($$value = "") {
      style($$value);
      flushSync();
    },
    get disabled() {
      return disabled();
    },
    set disabled($$value = false) {
      disabled($$value);
      flushSync();
    },
    get ariaLabel() {
      return ariaLabel();
    },
    set ariaLabel($$value = "") {
      ariaLabel($$value);
      flushSync();
    },
    get id() {
      return id();
    },
    set id($$value = "") {
      id($$value);
      flushSync();
    },
    get ariaHaspopup() {
      return ariaHaspopup();
    },
    set ariaHaspopup($$value = "") {
      ariaHaspopup($$value);
      flushSync();
    },
    get ariaExpanded() {
      return ariaExpanded();
    },
    set ariaExpanded($$value = "") {
      ariaExpanded($$value);
      flushSync();
    },
    get ariaControls() {
      return ariaControls();
    },
    set ariaControls($$value = "") {
      ariaControls($$value);
      flushSync();
    }
  });
}
delegate(["click", "mouseout"]);
create_custom_element(
  Button,
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
  true
);
var root$d = /* @__PURE__ */ ns_template(`<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="svelte-1q9atlb"><path d="M15.359 16.9999L12.8975 14.5385L12.1459 15.2902C11.3764 16.0597 10.9916 16.4444 10.5781 16.3536C10.1645 16.2628 9.97641 15.7522 9.60019 14.731L8.34544 11.3253C7.59492 9.28816 7.21966 8.2696 7.74463 7.74463C8.2696 7.21966 9.28816 7.59492 11.3253 8.34544L14.731 9.60019C15.7522 9.97641 16.2628 10.1645 16.3536 10.5781C16.4444 10.9916 16.0597 11.3764 15.2902 12.1459L14.5385 12.8975L16.9999 15.359C17.2548 15.6138 17.3822 15.7413 17.4411 15.8834C17.5196 16.073 17.5196 16.2859 17.4411 16.4755C17.3822 16.6176 17.2548 16.7451 16.9999 16.9999C16.7451 17.2548 16.6176 17.3822 16.4755 17.4411C16.2859 17.5196 16.073 17.5196 15.8834 17.4411C15.7413 17.3822 15.6138 17.2548 15.359 16.9999Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.5 12.5C2.5 7.78595 2.5 5.42893 3.96447 3.96447C5.42893 2.5 7.78595 2.5 12.5 2.5C17.214 2.5 19.5711 2.5 21.0355 3.96447C22.5 5.42893 22.5 7.78595 22.5 12.5C22.5 17.214 22.5 19.5711 21.0355 21.0355C19.5711 22.5 17.214 22.5 12.5 22.5C7.78595 22.5 5.42893 22.5 3.96447 21.0355C2.5 19.5711 2.5 17.214 2.5 12.5Z" stroke="currentColor" stroke-width="1.5"></path></svg>`);
const $$css$d = {
  hash: "svelte-1q9atlb",
  code: "svg.svelte-1q9atlb{width:var(--size,var(--icon-size));height:var(--size,var(--icon-size))}"
};
function IconBrowse($$anchor) {
  append_styles($$anchor, $$css$d);
  var svg = root$d();
  append($$anchor, svg);
}
create_custom_element(IconBrowse, {}, [], [], true);
var root_2$2 = /* @__PURE__ */ template(`<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>`, 1);
var root_4$2 = /* @__PURE__ */ template(`<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>`, 1);
var root_5$2 = /* @__PURE__ */ template(`<span class="count svelte-12aqd5e"> </span>`);
var root$c = /* @__PURE__ */ template(`<header><div class="toggle svelte-12aqd5e"><!> <!></div> <!></header>`);
const $$css$c = {
  hash: "svelte-12aqd5e",
  code: ".toggle.svelte-12aqd5e{display:flex}header.svelte-12aqd5e{position:var(--header-position);top:var(--header-top);max-width:100%;transform:var(--header-transform);color:var(--header-color);border-radius:var(--header-border-radius);z-index:var(--header-z-index);-webkit-backdrop-filter:var(--header-backdrop-filter);backdrop-filter:var(--header-backdrop-filter);box-shadow:var(--shadow-l),var(--shadow-light-edge),var(--shadow-dark-edge);background:var(--header-background);justify-content:space-between;align-items:stretch;display:flex;left:50%}header.bottom.svelte-12aqd5e{top:auto;bottom:var(--header-bottom-position)}.count.svelte-12aqd5e{width:var(--header-count-size);height:var(--header-count-size);border-radius:var(--header-count-border-radius);-webkit-backdrop-filter:var(--header-count-backdrop-filter);backdrop-filter:var(--header-count-backdrop-filter);box-shadow:var(--shadow-s),var(--shadow-light-edge),var(--shadow-dark-edge);background:var(--header-count-background);justify-content:center;align-items:center;display:flex}"
};
function Header($$anchor, $$props) {
  push($$props, true);
  append_styles($$anchor, $$css$c);
  const position = prop($$props, "position", 7), commentsCount = prop($$props, "commentsCount", 7);
  var header = root$c();
  let classes;
  var div = child(header);
  var node = child(div);
  const expression = /* @__PURE__ */ derived(() => !overlay.open);
  Button(node, {
    onclick: () => {
      overlay.open = false;
    },
    get active() {
      return get(expression);
    },
    style: "button--header",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text();
      template_effect(($0) => set_text(text$1, $0), [() => t("ui.header.browse.mode", "Browse")]);
      append($$anchor2, text$1);
    },
    $$slots: {
      default: true,
      icon: ($$anchor2, $$slotProps) => {
        var fragment_1 = root_2$2();
        var node_1 = first_child(fragment_1);
        {
          css_props(node_1, () => ({ "--size": "1.5em" }));
          IconBrowse(node_1.lastChild);
          reset$1(node_1);
        }
        append($$anchor2, fragment_1);
      }
    }
  });
  var node_2 = sibling(node, 2);
  Button(node_2, {
    onclick: () => {
      overlay.open = true;
    },
    style: "button--header",
    get active() {
      return overlay.open;
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text();
      template_effect(($0) => set_text(text_1, $0), [
        () => t("ui.header.comment.mode", "Comment")
      ]);
      append($$anchor2, text_1);
    },
    $$slots: {
      default: true,
      icon: ($$anchor2, $$slotProps) => {
        var fragment_3 = root_4$2();
        var node_3 = first_child(fragment_3);
        {
          css_props(node_3, () => ({ "--size": "1.5em" }));
          IconComment(node_3.lastChild);
          reset$1(node_3);
        }
        append($$anchor2, fragment_3);
      }
    }
  });
  reset$1(div);
  var node_4 = sibling(div, 2);
  const expression_1 = /* @__PURE__ */ derived(() => `${commentsCount()} ${t("ui.header.aria.count", "unresolved comments")}`);
  Button(node_4, {
    onclick: () => panel.open = !panel.open,
    style: "button--panel",
    get ariaLabel() {
      return get(expression_1);
    },
    children: ($$anchor2, $$slotProps) => {
      var span = root_5$2();
      var text_2 = child(span, true);
      reset$1(span);
      template_effect(() => set_text(text_2, commentsCount()));
      append($$anchor2, span);
    },
    $$slots: { default: true }
  });
  reset$1(header);
  template_effect(($0) => classes = set_class(header, 1, "svelte-12aqd5e", null, classes, $0), [
    () => ({ bottom: position() === "bottom" })
  ]);
  append($$anchor, header);
  return pop({
    get position() {
      return position();
    },
    set position($$value) {
      position($$value);
      flushSync();
    },
    get commentsCount() {
      return commentsCount();
    },
    set commentsCount($$value) {
      commentsCount($$value);
      flushSync();
    }
  });
}
create_custom_element(Header, { position: {}, commentsCount: {} }, [], [], true);
class ResizeHandler {
  constructor(options = {}) {
    __publicField(this, "callbacks", /* @__PURE__ */ new Set());
    __publicField(this, "debounceTimer", null);
    __publicField(this, "rafId", null);
    __publicField(this, "isListening", false);
    __publicField(this, "options");
    __publicField(this, "handleResize", () => {
      if (this.debounceTimer) {
        clearTimeout(this.debounceTimer);
      }
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
      }
      this.debounceTimer = window.setTimeout(() => {
        if (this.options.useRAF) {
          this.rafId = requestAnimationFrame(() => {
            this.executeCallbacks();
          });
        } else {
          this.executeCallbacks();
        }
      }, this.options.debounceDelay);
    });
    this.options = {
      debounceDelay: options.debounceDelay ?? 100,
      useRAF: options.useRAF ?? true
    };
  }
  executeCallbacks() {
    this.callbacks.forEach((callback) => {
      try {
        callback();
      } catch (error) {
        console.error("Error in resize callback:", error);
      }
    });
  }
  startListening() {
    if (!this.isListening) {
      window.addEventListener("resize", this.handleResize, { passive: true });
      this.isListening = true;
    }
  }
  stopListening() {
    if (this.isListening) {
      window.removeEventListener("resize", this.handleResize);
      this.isListening = false;
    }
  }
  /**
   * Add a callback to be executed on resize
   */
  subscribe(callback) {
    this.callbacks.add(callback);
    this.startListening();
    return () => {
      this.callbacks.delete(callback);
      if (this.callbacks.size === 0) {
        this.stopListening();
      }
    };
  }
  /**
   * Clean up all resources
   */
  destroy() {
    this.callbacks.clear();
    this.stopListening();
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }
}
const globalResizeHandler = new ResizeHandler();
function useResizeHandler(callback, options) {
  {
    return globalResizeHandler.subscribe(callback);
  }
}
const getDocumentHeight = () => {
  const body = document.body;
  const html = document.documentElement;
  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
};
var root_1$1 = /* @__PURE__ */ template(`<div><!></div>`);
const $$css$b = {
  hash: "svelte-4f1edl",
  code: ".marker.svelte-4f1edl{position:var(--marker-position);z-index:var(--marker-z-index);transform:var(--marker-transform);border-radius:var(--marker-border-radius)}.marker--pulse.svelte-4f1edl{animation:1.5s ease-in-out infinite svelte-4f1edl-kirby-loop-pulse}@keyframes svelte-4f1edl-kirby-loop-pulse{0%{box-shadow:0 0 0 0 var(--color-accent),0 0 0 0 #8080804d,0 0 0 0 #80808033}30%{box-shadow:0 0 0 8px #0000,0 0 #8080804d,0 0 #80808033}60%{box-shadow:0 0 0 8px #80808026,0 0 0 12px #0000,0 0 #80808033}to{box-shadow:0 0 0 16px #0000,0 0 0 12px #0000,0 0 0 8px #0000}}"
};
function Marker($$anchor, $$props) {
  push($$props, true);
  append_styles($$anchor, $$css$b);
  const comment$1 = prop($$props, "comment", 7);
  let shouldPulse = state(false);
  user_effect(() => {
    set(shouldPulse, panel.pulseMarkerId === comment$1().id);
  });
  let markerElement = state(null);
  let targetElement = state(null);
  let unsubscribeResize = state(null);
  onMount(() => {
    requestAnimationFrame(() => {
      positionMarker();
    });
    set(unsubscribeResize, proxy(useResizeHandler(() => {
      positionMarker();
    })));
  });
  onDestroy(() => {
    if (get(unsubscribeResize)) {
      get(unsubscribeResize)();
    }
  });
  function positionMarker() {
    if (!comment$1() || !get(markerElement)) return;
    try {
      set(targetElement, proxy(document.querySelector(comment$1().selector)));
      let absoluteX;
      let absoluteY;
      if (get(targetElement)) {
        const targetRect = get(targetElement).getBoundingClientRect();
        const offsetXInPixels = targetRect.width * comment$1().selectorOffsetX / 100;
        const offsetYInPixels = targetRect.height * comment$1().selectorOffsetY / 100;
        absoluteX = targetRect.left + window.scrollX + offsetXInPixels;
        absoluteY = targetRect.top + window.scrollY + offsetYInPixels;
      } else {
        absoluteX = Number(comment$1().pagePositionX);
        absoluteY = Number(comment$1().pagePositionY);
      }
      const markerRect = get(markerElement).getBoundingClientRect();
      const markerWidth = markerRect.width || 32;
      const markerHeight = markerRect.height || 32;
      const halfWidth = markerWidth / 2;
      const halfHeight = markerHeight / 2;
      const documentHeight = getDocumentHeight();
      const viewportWidth = window.innerWidth;
      const minX = halfWidth;
      const maxX = viewportWidth - halfWidth;
      const minY = halfHeight;
      const maxY = documentHeight - halfHeight;
      const constrainedX = Math.max(minX, Math.min(maxX, absoluteX));
      const constrainedY = Math.max(minY, Math.min(maxY, absoluteY));
      get(markerElement).style.left = `${constrainedX}px`;
      get(markerElement).style.top = `${constrainedY}px`;
    } catch (error) {
      console.error("Error positioning marker:", error);
    }
  }
  function handleMouseEnter(id) {
    panel.currentCommentId = id;
  }
  function handleMouseOut() {
    panel.currentCommentId = 0;
  }
  function handleClick() {
    var _a2, _b;
    panel.open = true;
    const commentElement = (_b = (_a2 = document.querySelector(`loop`)) == null ? void 0 : _a2.shadowRoot) == null ? void 0 : _b.querySelector(`#comment-${comment$1().id}`);
    if (commentElement) {
      commentElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$1();
      let classes;
      var node_1 = child(div);
      Button(node_1, {
        onmouseenter: () => handleMouseEnter(comment$1().id),
        onmouseout: handleMouseOut,
        onblur: handleMouseOut,
        onclick: handleClick,
        get style() {
          return `button--marker button--marker-${comment$1().status ?? ""}`;
        },
        children: ($$anchor3, $$slotProps) => {
          next();
          var text$1 = text();
          template_effect(() => set_text(text$1, comment$1().id));
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      reset$1(div);
      bind_this(div, ($$value) => set(markerElement, $$value), () => get(markerElement));
      template_effect(
        ($0) => {
          classes = set_class(div, 1, `marker marker--${comment$1().status ?? ""}`, "svelte-4f1edl", classes, $0);
          set_attribute(div, "id", `marker-${comment$1().id ?? ""}`);
        },
        [
          () => ({ "marker--pulse": get(shouldPulse) })
        ]
      );
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (comment$1()) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  return pop({
    get comment() {
      return comment$1();
    },
    set comment($$value) {
      comment$1($$value);
      flushSync();
    }
  });
}
create_custom_element(Marker, { comment: {} }, [], [], true);
const store = proxy({ comments: [] });
const apiPrefix = "loop";
const KirbyLoop = document.querySelector("kirby-loop");
const csrfToken = (KirbyLoop == null ? void 0 : KirbyLoop.getAttribute("csrf-token")) || "";
const apiBase = (KirbyLoop == null ? void 0 : KirbyLoop.getAttribute("apibase")) || "/";
const headers = {
  "Content-Type": "application/json",
  "X-CSRF-Token": csrfToken || ""
};
const getComments = async (pageId) => {
  const url = `${apiBase}/${apiPrefix}/comments/${pageId}`;
  const response = await fetch(url, { headers });
  const data = await response.json();
  store.comments = data.comments;
};
const addComment = async (comment2) => {
  const url = `${apiBase}/${apiPrefix}/comment/new`;
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(comment2)
  });
  const data = await response.json();
  store.comments = [data.comment, ...store.comments];
};
const resolveComment = async (comment2) => {
  const url = `${apiBase}/${apiPrefix}/comment/resolve`;
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ id: comment2.id })
  });
  const data = await response.json();
  if (data.success) {
    const commentIndex = store.comments.findIndex((c) => c.id === comment2.id);
    if (commentIndex !== -1) {
      store.comments[commentIndex].status = "RESOLVED";
    }
  }
  return data.success;
};
const unresolveComment = async (comment2) => {
  const url = `${apiBase}/${apiPrefix}/comment/unresolve`;
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ id: comment2.id })
  });
  const data = await response.json();
  if (data.success) {
    const commentIndex = store.comments.findIndex((c) => c.id === comment2.id);
    if (commentIndex !== -1) {
      store.comments[commentIndex].status = "OPEN";
    }
  }
  return data.success;
};
const setGuestName = async (name) => {
  const response = await fetch(`${apiBase}/${apiPrefix}/guest/name`, {
    method: "POST",
    headers,
    body: JSON.stringify({ name })
  });
  return await response.json();
};
const addReply = async (reply) => {
  const url = `${apiBase}/${apiPrefix}/comment/reply`;
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(reply)
  });
  const data = await response.json();
  const parent = store.comments.find((c) => c.id === data.reply.parentId);
  if (parent) parent.replies = [...parent.replies, data.reply];
};
const formData = proxy({ text: "", parentId: null });
const reset = () => {
  formData.text = "";
  formData.parentId = null;
};
function handleKeydown(e) {
  var _a2;
  if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
    e.preventDefault();
    const form = (_a2 = e.currentTarget) == null ? void 0 : _a2.closest("form");
    if (form) {
      form.requestSubmit();
    }
  }
}
var root$b = /* @__PURE__ */ template(`<form method="POST" class="svelte-w3h34c"><div class="input"><textarea name="comment" required class="svelte-w3h34c"></textarea></div> <div class="keyboard-hint svelte-w3h34c"> </div> <footer class="svelte-w3h34c"><!> <!></footer></form>`);
const $$css$a = {
  hash: "svelte-w3h34c",
  code: "form.svelte-w3h34c{cursor:auto;background-color:var(--comment-form-background);color:var(--comment-form-color);border-radius:var(--comment-form-border-radius);border:var(--comment-form-border);padding:0;overflow:hidden}textarea.svelte-w3h34c{width:100%;height:var(--comment-form-textarea-height);resize:none;padding:var(--comment-form-textarea-padding);box-sizing:border-box;background-color:var(--comment-form-textarea-background);font-family:var(--comment-form-textarea-font-family);font-size:var(--comment-form-textarea-font-size);color:currentColor;border:0;margin:0}textarea.svelte-w3h34c:focus-visible,textarea.svelte-w3h34c:focus{outline:0}footer.svelte-w3h34c{padding:var(--comment-form-footer-padding);gap:var(--comment-form-footer-gap);display:flex}footer.svelte-w3h34c button{flex:1}.keyboard-hint.svelte-w3h34c{font-size:var(--comment-form-hint-font-size);color:var(--comment-form-hint-color);padding:var(--comment-form-hint-padding);white-space:nowrap;align-self:center;margin-left:auto}"
};
function CommentForm($$anchor, $$props) {
  push($$props, true);
  append_styles($$anchor, $$css$a);
  const handleSubmit = prop($$props, "handleSubmit", 7), cancel = prop($$props, "cancel", 7), parentId = prop($$props, "parentId", 7, null);
  formData.parentId = parentId() ? Number(parentId()) : null;
  var form_1 = root$b();
  var div = child(form_1);
  var textarea = child(div);
  remove_textarea_child(textarea);
  textarea.__keydown = [handleKeydown];
  reset$1(div);
  var div_1 = sibling(div, 2);
  var text$1 = child(div_1, true);
  reset$1(div_1);
  var footer = sibling(div_1, 2);
  var node = child(footer);
  Button(node, {
    type: "submit",
    style: "button--solid",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text();
      template_effect(($0) => set_text(text_1, $0), [
        () => parentId() ? t("ui.reply.submit", "Reply") : t("ui.comment.submit", "Submit")
      ]);
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Button(node_1, {
    get onclick() {
      return cancel();
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text();
      template_effect(($0) => set_text(text_2, $0), [() => t("ui.comment.cancel", "Cancel")]);
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  reset$1(footer);
  reset$1(form_1);
  template_effect(
    ($0, $1) => {
      set_attribute(textarea, "placeholder", $0);
      set_text(text$1, $1);
    },
    [
      () => parentId() ? t("ui.reply.placeholder", "Write a reply...") : t("ui.comment.placeholder", "Enter your comment..."),
      () => t("ui.comment.keyboardHint", "⌘+Enter or Ctrl+Enter to submit")
    ]
  );
  event("submit", form_1, function(...$$args) {
    var _a2;
    (_a2 = handleSubmit()) == null ? void 0 : _a2.apply(this, $$args);
  });
  bind_value(textarea, () => formData.text, ($$value) => formData.text = $$value);
  append($$anchor, form_1);
  return pop({
    get handleSubmit() {
      return handleSubmit();
    },
    set handleSubmit($$value) {
      handleSubmit($$value);
      flushSync();
    },
    get cancel() {
      return cancel();
    },
    set cancel($$value) {
      cancel($$value);
      flushSync();
    },
    get parentId() {
      return parentId();
    },
    set parentId($$value = null) {
      parentId($$value);
      flushSync();
    }
  });
}
delegate(["keydown"]);
create_custom_element(CommentForm, { handleSubmit: {}, cancel: {}, parentId: {} }, [], [], true);
var root$a = /* @__PURE__ */ template(`<div class="author svelte-1xlsy1x"> </div>`);
const $$css$9 = {
  hash: "svelte-1xlsy1x",
  code: ".author.svelte-1xlsy1x{font-size:var(--author-avatar-font-size);text-transform:uppercase;color:var(--author-avatar-color);background-color:var(--author-avatar-background-color);aspect-ratio:1;flex:0 0 var(--author-avatar-size);border-radius:var(--author-avatar-border-radius);justify-content:center;align-items:center;display:flex}"
};
function Author($$anchor, $$props) {
  push($$props, true);
  append_styles($$anchor, $$css$9);
  const initials = prop($$props, "initials", 7);
  var div = root$a();
  var text2 = child(div, true);
  reset$1(div);
  template_effect(() => set_text(text2, initials()));
  append($$anchor, div);
  return pop({
    get initials() {
      return initials();
    },
    set initials($$value) {
      initials($$value);
      flushSync();
    }
  });
}
create_custom_element(Author, { initials: {} }, [], [], true);
function formatDate(timestamp, humanize = true) {
  const date = new Date(timestamp * 1e3);
  const now = /* @__PURE__ */ new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1e3 * 60));
  const diffInHours = Math.floor(diffInMs / (1e3 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1e3 * 60 * 60 * 24));
  if (humanize && diffInDays <= 3) {
    if (diffInMinutes < 1) {
      return t("ui.time.just_now", "just now");
    } else if (diffInMinutes === 1) {
      return t("ui.time.minute_ago", "a minute ago");
    } else if (diffInMinutes < 60) {
      return tt("ui.time.minutes_ago", "{count} minutes ago", { count: diffInMinutes.toString() });
    } else if (diffInHours === 1) {
      return t("ui.time.hour_ago", "an hour ago");
    } else if (diffInHours < 24) {
      return tt("ui.time.hours_ago", "{count} hours ago", { count: diffInHours.toString() });
    } else if (diffInDays === 1) {
      return t("ui.time.yesterday", "yesterday");
    } else {
      return tt("ui.time.days_ago", "{count} days ago", { count: diffInDays.toString() });
    }
  }
  return date.toLocaleString(void 0, { dateStyle: "short", timeStyle: "short" });
}
function formatDateISO(timestamp) {
  return new Date(timestamp * 1e3).toISOString();
}
var root$9 = /* @__PURE__ */ template(`<article class="reply svelte-1nsulj7"><!> <div class="reply__content svelte-1nsulj7"><header class="svelte-1nsulj7"><strong> </strong> <time class="svelte-1nsulj7"> </time></header> <div class="reply__text svelte-1nsulj7"> </div></div></article>`);
const $$css$8 = {
  hash: "svelte-1nsulj7",
  code: ".reply.svelte-1nsulj7{gap:var(--reply-gap);flex-direction:row;align-items:start;display:flex}.reply__content.svelte-1nsulj7{padding:var(--reply-content-padding);background-color:var(--reply-content-background);border-radius:var(--reply-content-border-radius)}.reply__content.svelte-1nsulj7 header:where(.svelte-1nsulj7){gap:var(--reply-header-gap);margin-bottom:var(--reply-header-margin-bottom);justify-content:flex-start;align-items:center;display:flex}.reply__content.svelte-1nsulj7 header:where(.svelte-1nsulj7) time:where(.svelte-1nsulj7){font-size:var(--reply-timestamp-font-size);color:var(--reply-timestamp-color)}@media (prefers-color-scheme:dark){.reply__content.svelte-1nsulj7{background-color:var(--reply-content-background-dark)}}.reply__text.svelte-1nsulj7{white-space:pre-line}"
};
function Reply($$anchor, $$props) {
  push($$props, false);
  append_styles($$anchor, $$css$8);
  let reply = prop($$props, "reply", 12);
  init();
  var article = root$9();
  var node = child(article);
  const expression = /* @__PURE__ */ derived_safe_equal(() => reply().author.substring(0, 1));
  Author(node, {
    get initials() {
      return get(expression);
    }
  });
  var div = sibling(node, 2);
  var header = child(div);
  var strong = child(header);
  var text2 = child(strong, true);
  reset$1(strong);
  var time = sibling(strong, 2);
  var text_1 = child(time, true);
  reset$1(time);
  reset$1(header);
  var div_1 = sibling(header, 2);
  var text_2 = child(div_1, true);
  reset$1(div_1);
  reset$1(div);
  reset$1(article);
  template_effect(
    ($0, $1, $2, $3) => {
      set_attribute(article, "data-id", reply().id);
      set_attribute(article, "aria-label", `${$0 ?? ""} ${reply().author ?? ""}: ${reply().comment ?? ""}`);
      set_text(text2, reply().author);
      set_attribute(time, "datetime", $1);
      set_attribute(time, "title", $2);
      set_text(text_1, $3);
      set_text(text_2, reply().comment);
    },
    [
      () => t("ui.reply.aria.label", "Reply by"),
      () => formatDateISO(reply().timestamp),
      () => formatDate(reply().timestamp, false),
      () => formatDate(reply().timestamp)
    ],
    derived_safe_equal
  );
  append($$anchor, article);
  return pop({
    get reply() {
      return reply();
    },
    set reply($$value) {
      reply($$value);
      flushSync();
    }
  });
}
create_custom_element(Reply, { reply: {} }, [], [], true);
var root_5$1 = /* @__PURE__ */ template(`<li><!></li>`);
var root_4$1 = /* @__PURE__ */ template(`<ul class="comment__replies svelte-6fqqrp"></ul>`);
var root_8 = /* @__PURE__ */ template(`<!> <!>`, 1);
var root_7 = /* @__PURE__ */ template(`<div class="buttons svelte-6fqqrp"><!></div>`);
var root$8 = /* @__PURE__ */ template(`<details><summary class="comment__header svelte-6fqqrp"><!> <div class="comment__content svelte-6fqqrp"><header class="svelte-6fqqrp"><strong> </strong> <time class="svelte-6fqqrp"> </time></header> <div class="comment__text svelte-6fqqrp"> </div></div> <!></summary> <!> <footer class="svelte-6fqqrp"><!></footer></details>`);
const $$css$7 = {
  hash: "svelte-6fqqrp",
  code: '.comment.svelte-6fqqrp{--loop-marker-background:var(--comment-marker-background);--loop-marker-color:var(--comment-marker-color);--marker-size:var(--comment-avatar-size);position:relative}.comment.svelte-6fqqrp>:where(.svelte-6fqqrp){z-index:1;position:relative}.comment.svelte-6fqqrp:after{content:"";left:var(--comment-line-offset);width:var(--comment-line-width);background-color:var(--comment-line-background);z-index:0;height:calc(100% - 4rem);position:absolute;top:1.5rem}.comment.svelte-6fqqrp:not([open]):after{height:calc(100% - 2.75rem)}.comment__header.svelte-6fqqrp{font-size:var(--comment-header-font-size);padding:var(--comment-header-padding);align-items:flex-start;gap:var(--comment-header-gap);cursor:pointer;border-radius:var(--comment-header-border-radius);display:flex}.comment__header.svelte-6fqqrp:focus-visible{outline:2px solid var(--comment-header-outline-color);outline-offset:var(--comment-header-outline-offset)}.comment__header.svelte-6fqqrp .comment__replies-count{bottom:0;left:var(--space-s);min-width:var(--comment-avatar-size);position:absolute}.comment__header.svelte-6fqqrp header:where(.svelte-6fqqrp){gap:var(--comment-author-gap);margin-bottom:var(--comment-author-margin-bottom);justify-content:flex-start;align-items:center;display:flex}.comment__header.svelte-6fqqrp header:where(.svelte-6fqqrp) time:where(.svelte-6fqqrp){font-size:var(--comment-timestamp-font-size);color:var(--comment-timestamp-color)}.comment__header.svelte-6fqqrp .comment__content:where(.svelte-6fqqrp){padding:var(--comment-content-padding);background-color:var(--comment-content-background);border-radius:var(--comment-content-border-radius);flex:1}@media (prefers-color-scheme:dark){.comment__header.svelte-6fqqrp .comment__content:where(.svelte-6fqqrp){background-color:var(--comment-content-background-dark)}}.comment__header.svelte-6fqqrp .comment__text:where(.svelte-6fqqrp){white-space:pre-line}.comment__replies.svelte-6fqqrp{padding:var(--comment-replies-padding);gap:var(--comment-replies-gap);flex-direction:column;margin:0;list-style:none;display:flex}footer.svelte-6fqqrp{gap:var(--comment-footer-gap);padding:var(--comment-footer-padding);flex-direction:column;display:flex}footer.svelte-6fqqrp .buttons:where(.svelte-6fqqrp){gap:var(--comment-buttons-gap);align-items:flex-end;display:flex}.is-hidden.svelte-6fqqrp{display:none}'
};
function Comment$1($$anchor, $$props) {
  var _a2;
  push($$props, true);
  append_styles($$anchor, $$css$7);
  const comment2 = prop($$props, "comment", 7), scrollIntoView = prop($$props, "scrollIntoView", 7), handleSubmit = prop($$props, "handleSubmit", 7), cancel = prop($$props, "cancel", 7);
  let openReplyForm = state(false);
  let detailsOpen = state(proxy(((_a2 = comment2().replies) == null ? void 0 : _a2.length) > 0 && !panel.showResolvedOnly));
  var details = root$8();
  let classes;
  var summary = child(details);
  var node = child(summary);
  const expression = /* @__PURE__ */ derived(() => comment2().status);
  const expression_1 = /* @__PURE__ */ derived(() => panel.currentCommentId === comment2().id ? "button--marker-highlighted" : "");
  const expression_2 = /* @__PURE__ */ derived(() => `${t("ui.comment.maker.aria.label", "Jump to marker")} ${comment2().id}`);
  Button(node, {
    get style() {
      return `button--marker button--marker-${get(expression) ?? ""} ${get(expression_1) ?? ""}`;
    },
    onclick: () => scrollIntoView()(comment2().id),
    onmouseenter: () => panel.pulseMarkerId = comment2().id,
    onmouseout: () => panel.pulseMarkerId = 0,
    get ariaLabel() {
      return get(expression_2);
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text();
      template_effect(() => set_text(text$1, comment2().id));
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var div = sibling(node, 2);
  var header = child(div);
  var strong = child(header);
  var text_1 = child(strong, true);
  reset$1(strong);
  var time = sibling(strong, 2);
  var text_2 = child(time, true);
  reset$1(time);
  reset$1(header);
  var div_1 = sibling(header, 2);
  var text_3 = child(div_1, true);
  reset$1(div_1);
  reset$1(div);
  var node_1 = sibling(div, 2);
  {
    var consequent = ($$anchor2) => {
      const expression_3 = /* @__PURE__ */ derived(() => `${t("ui.comment.replies.aria.label", "Show replies")} ${comment2().id}`);
      Button($$anchor2, {
        style: "button--solid button--small comment__replies-count",
        get ariaLabel() {
          return get(expression_3);
        },
        onclick: () => {
          set(detailsOpen, !get(detailsOpen));
        },
        children: ($$anchor3, $$slotProps) => {
          next();
          var text_4 = text();
          template_effect(() => {
            var _a3;
            return set_text(text_4, ((_a3 = comment2().replies) == null ? void 0 : _a3.length) > 0 ? `+${comment2().replies.length}` : "+");
          });
          append($$anchor3, text_4);
        },
        $$slots: { default: true }
      });
    };
    if_block(node_1, ($$render) => {
      if (!get(detailsOpen)) $$render(consequent);
    });
  }
  reset$1(summary);
  var node_2 = sibling(summary, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var ul = root_4$1();
      each(ul, 21, () => comment2().replies, (reply) => reply.id, ($$anchor3, reply) => {
        var li = root_5$1();
        var node_3 = child(li);
        Reply(node_3, {
          get reply() {
            return get(reply);
          }
        });
        reset$1(li);
        append($$anchor3, li);
      });
      reset$1(ul);
      append($$anchor2, ul);
    };
    if_block(node_2, ($$render) => {
      var _a3;
      if (((_a3 = comment2().replies) == null ? void 0 : _a3.length) > 0) $$render(consequent_1);
    });
  }
  var footer = sibling(node_2, 2);
  var node_4 = child(footer);
  {
    var consequent_2 = ($$anchor2) => {
      CommentForm($$anchor2, {
        handleSubmit: (e) => {
          set(openReplyForm, false);
          handleSubmit()(e);
        },
        cancel: () => {
          set(openReplyForm, false);
          cancel()();
        },
        get parentId() {
          return comment2().id;
        }
      });
    };
    var alternate = ($$anchor2) => {
      var div_2 = root_7();
      var node_5 = child(div_2);
      {
        var consequent_3 = ($$anchor3) => {
          var fragment_4 = root_8();
          var node_6 = first_child(fragment_4);
          Button(node_6, {
            style: "button--solid",
            onclick: () => set(openReplyForm, true),
            children: ($$anchor4, $$slotProps) => {
              next();
              var text_5 = text();
              template_effect(($0) => set_text(text_5, $0), [() => t("ui.reply.submit", "Reply")]);
              append($$anchor4, text_5);
            },
            $$slots: { default: true }
          });
          var node_7 = sibling(node_6, 2);
          Button(node_7, {
            onclick: () => resolveComment(comment2()),
            children: ($$anchor4, $$slotProps) => {
              next();
              var text_6 = text();
              template_effect(($0) => set_text(text_6, $0), [
                () => t("ui.comment.mark.solved", "Resolve")
              ]);
              append($$anchor4, text_6);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_4);
        };
        var alternate_1 = ($$anchor3) => {
          Button($$anchor3, {
            onclick: () => unresolveComment(comment2()),
            children: ($$anchor4, $$slotProps) => {
              next();
              var text_7 = text();
              template_effect(($0) => set_text(text_7, $0), [
                () => t("ui.comment.mark.unsolved", "Reopen")
              ]);
              append($$anchor4, text_7);
            },
            $$slots: { default: true }
          });
        };
        if_block(node_5, ($$render) => {
          if (comment2().status === "OPEN") $$render(consequent_3);
          else $$render(alternate_1, false);
        });
      }
      reset$1(div_2);
      append($$anchor2, div_2);
    };
    if_block(node_4, ($$render) => {
      if (get(openReplyForm)) $$render(consequent_2);
      else $$render(alternate, false);
    });
  }
  reset$1(footer);
  reset$1(details);
  template_effect(
    ($0, $1, $2, $3, $4) => {
      set_attribute(details, "id", `comment-${comment2().id ?? ""}`);
      classes = set_class(details, 1, `comment comment--${comment2().status ?? ""}`, "svelte-6fqqrp", classes, $0);
      set_attribute(summary, "aria-label", `${$1 ?? ""} ${comment2().author ?? ""}: ${comment2().comment ?? ""}`);
      set_text(text_1, comment2().author);
      set_attribute(time, "datetime", $2);
      set_attribute(time, "title", $3);
      set_text(text_2, $4);
      set_text(text_3, comment2().comment);
    },
    [
      () => ({
        "comment--current": panel.currentCommentId === comment2().id
      }),
      () => t("ui.comment.summary.aria.label", "Comment by"),
      () => formatDateISO(comment2().timestamp),
      () => formatDate(comment2().timestamp, false),
      () => formatDate(comment2().timestamp)
    ]
  );
  bind_property("open", "toggle", details, ($$value) => set(detailsOpen, $$value), () => get(detailsOpen));
  append($$anchor, details);
  return pop({
    get comment() {
      return comment2();
    },
    set comment($$value) {
      comment2($$value);
      flushSync();
    },
    get scrollIntoView() {
      return scrollIntoView();
    },
    set scrollIntoView($$value) {
      scrollIntoView($$value);
      flushSync();
    },
    get handleSubmit() {
      return handleSubmit();
    },
    set handleSubmit($$value) {
      handleSubmit($$value);
      flushSync();
    },
    get cancel() {
      return cancel();
    },
    set cancel($$value) {
      cancel($$value);
      flushSync();
    }
  });
}
create_custom_element(
  Comment$1,
  {
    comment: {},
    scrollIntoView: {},
    handleSubmit: {},
    cancel: {}
  },
  [],
  [],
  true
);
var root$7 = /* @__PURE__ */ ns_template(`<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="svelte-1q9atlb"><path d="M5.44067 14.4885C6.54524 14.4885 7.44067 13.5931 7.44067 12.4885C7.44067 11.384 6.54524 10.4885 5.44067 10.4885C4.3361 10.4885 3.44067 11.384 3.44067 12.4885C3.44067 13.5931 4.3361 14.4885 5.44067 14.4885Z" stroke="currentColor" stroke-width="1.5"></path><path d="M12.4407 14.4885C13.5452 14.4885 14.4407 13.5931 14.4407 12.4885C14.4407 11.384 13.5452 10.4885 12.4407 10.4885C11.3361 10.4885 10.4407 11.384 10.4407 12.4885C10.4407 13.5931 11.3361 14.4885 12.4407 14.4885Z" stroke="currentColor" stroke-width="1.5"></path><path d="M19.4407 14.4885C20.5452 14.4885 21.4407 13.5931 21.4407 12.4885C21.4407 11.384 20.5452 10.4885 19.4407 10.4885C18.3361 10.4885 17.4407 11.384 17.4407 12.4885C17.4407 13.5931 18.3361 14.4885 19.4407 14.4885Z" stroke="currentColor" stroke-width="1.5"></path></svg>`);
const $$css$6 = {
  hash: "svelte-1q9atlb",
  code: "svg.svelte-1q9atlb{width:var(--size,var(--icon-size));height:var(--size,var(--icon-size))}"
};
function IconDots($$anchor) {
  append_styles($$anchor, $$css$6);
  var svg = root$7();
  append($$anchor, svg);
}
create_custom_element(IconDots, {}, [], [], true);
var root$6 = /* @__PURE__ */ ns_template(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="svelte-1q9atlb"><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="1.5"></path><path d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z" stroke="currentColor" stroke-width="1.5"></path></svg>`);
const $$css$5 = {
  hash: "svelte-1q9atlb",
  code: "svg.svelte-1q9atlb{width:var(--size,var(--icon-size));height:var(--size,var(--icon-size))}"
};
function IconSettings($$anchor) {
  append_styles($$anchor, $$css$5);
  var svg = root$6();
  append($$anchor, svg);
}
create_custom_element(IconSettings, {}, [], [], true);
var $$_import_panel = reactive_import(() => panel);
var root_3 = /* @__PURE__ */ template(`<span class="filter-dot filter-dot--open svelte-15wfo7b" slot="icon" aria-hidden="true"></span>`);
var root_5 = /* @__PURE__ */ template(`<span class="filter-dot filter-dot--resolved svelte-15wfo7b" slot="icon" aria-hidden="true"></span>`);
var root$5 = /* @__PURE__ */ template(`<div class="context-menu-container svelte-15wfo7b"><div class="context-menu-trigger svelte-15wfo7b"><!></div> <div class="context-menu svelte-15wfo7b" popover="auto" role="menu" aria-labelledby="context-menu-trigger" id="context-menu"><div class="menu-section svelte-15wfo7b"><div class="menu-section-title svelte-15wfo7b"> </div> <div class="filter-options svelte-15wfo7b"><!> <!></div></div></div></div>`);
const $$css$4 = {
  hash: "svelte-15wfo7b",
  code: ".context-menu-container.svelte-15wfo7b{bottom:var(--context-menu-container-bottom);right:var(--context-menu-container-right);z-index:var(--context-menu-container-z-index);position:absolute}.context-menu-trigger.svelte-15wfo7b{width:var(--context-menu-trigger-size);height:var(--context-menu-trigger-size);border-radius:var(--context-menu-trigger-border-radius);justify-content:center;align-items:center;display:flex}.context-menu.svelte-15wfo7b{background:var(--context-menu-background);border-radius:var(--context-menu-border-radius);box-shadow:var(--context-menu-shadow);padding:var(--context-menu-padding);min-width:var(--context-menu-min-width);border:0;margin:0;position:fixed}.context-menu.svelte-15wfo7b::backdrop{background:var(--context-menu-backdrop-background)}.menu-section.svelte-15wfo7b{gap:var(--context-menu-section-gap);flex-direction:column;display:flex}.menu-section-title.svelte-15wfo7b{font-size:var(--context-menu-title-font-size);font-weight:var(--context-menu-title-font-weight);color:var(--context-menu-title-color);margin-bottom:var(--context-menu-title-margin-bottom);text-transform:uppercase;letter-spacing:var(--context-menu-title-letter-spacing);padding:0}.filter-options.svelte-15wfo7b{gap:var(--context-menu-filter-gap);flex-direction:column;display:flex}.filter-dot.svelte-15wfo7b{width:var(--context-menu-filter-dot-size);height:var(--context-menu-filter-dot-size);border-radius:var(--context-menu-filter-dot-border-radius);margin-right:var(--context-menu-filter-dot-margin-right);display:inline-block}.filter-dot--open.svelte-15wfo7b{background:var(--context-menu-filter-dot-open-background)}.filter-dot--resolved.svelte-15wfo7b{background:var(--context-menu-filter-dot-resolved-background)}"
};
function ContextMenu($$anchor, $$props) {
  push($$props, false);
  append_styles($$anchor, $$css$4);
  let contextMenu = mutable_state();
  let triggerButton = mutable_state();
  const toggleMenu = () => {
    if (get(contextMenu).matches(":popover-open")) {
      get(contextMenu).hidePopover();
    } else {
      get(contextMenu).showPopover();
      positionMenu();
    }
  };
  const positionMenu = () => {
    if (!get(triggerButton) || !get(contextMenu)) return;
    const buttonRect = get(triggerButton).getBoundingClientRect();
    const menuRect = get(contextMenu).getBoundingClientRect();
    const top = buttonRect.top - menuRect.height - 8;
    const left = buttonRect.left - menuRect.width + buttonRect.width;
    mutate(contextMenu, get(contextMenu).style.position = "fixed");
    mutate(contextMenu, get(contextMenu).style.top = `${Math.max(8, top)}px`);
    mutate(contextMenu, get(contextMenu).style.left = `${Math.max(8, left)}px`);
    mutate(contextMenu, get(contextMenu).style.margin = "0");
  };
  const closeMenu = () => {
    get(contextMenu).hidePopover();
  };
  const setFilter = (showResolved) => {
    $$_import_panel($$_import_panel().showResolvedOnly = showResolved);
    closeMenu();
  };
  init();
  var div = root$5();
  var div_1 = child(div);
  var node = child(div_1);
  const expression = /* @__PURE__ */ derived_safe_equal(() => t("ui.panel.menu.open", "Open menu"));
  const expression_1 = /* @__PURE__ */ derived_safe_equal(() => {
    var _a2;
    return ((_a2 = get(contextMenu)) == null ? void 0 : _a2.matches(":popover-open")) ? "true" : "false";
  });
  Button(node, {
    onclick: toggleMenu,
    get ariaLabel() {
      return get(expression);
    },
    style: "button--icon",
    id: "context-menu-trigger",
    ariaHaspopup: "menu",
    get ariaExpanded() {
      return get(expression_1);
    },
    ariaControls: "context-menu",
    $$slots: {
      icon: ($$anchor2, $$slotProps) => {
        IconSettings($$anchor2);
      }
    }
  });
  reset$1(div_1);
  bind_this(div_1, ($$value) => set(triggerButton, $$value), () => get(triggerButton));
  var div_2 = sibling(div_1, 2);
  var div_3 = child(div_2);
  var div_4 = child(div_3);
  var text$1 = child(div_4, true);
  reset$1(div_4);
  var div_5 = sibling(div_4, 2);
  var node_1 = child(div_5);
  const expression_2 = /* @__PURE__ */ derived_safe_equal(() => !$$_import_panel().showResolvedOnly ? "button--menu-item-active" : "");
  const expression_3 = /* @__PURE__ */ derived_safe_equal(() => !$$_import_panel().showResolvedOnly ? t("ui.panel.filter.open.active", "Show open comments (currently selected)") : t("ui.panel.filter.open.inactive", "Show open comments"));
  Button(node_1, {
    get style() {
      return `button--menu-item ${get(expression_2) ?? ""}`;
    },
    onclick: () => setFilter(false),
    get ariaLabel() {
      return get(expression_3);
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text();
      template_effect(($0) => set_text(text_1, $0), [() => t("ui.panel.filter.open", "Open")], derived_safe_equal);
      append($$anchor2, text_1);
    },
    $$slots: {
      default: true,
      icon: ($$anchor2, $$slotProps) => {
        var span = root_3();
        append($$anchor2, span);
      }
    }
  });
  var node_2 = sibling(node_1, 2);
  const expression_4 = /* @__PURE__ */ derived_safe_equal(() => $$_import_panel().showResolvedOnly ? "button--menu-item-active" : "");
  const expression_5 = /* @__PURE__ */ derived_safe_equal(() => $$_import_panel().showResolvedOnly ? t("ui.panel.filter.resolved.active", "Show resolved comments (currently selected)") : t("ui.panel.filter.resolved.inactive", "Show resolved comments"));
  Button(node_2, {
    get style() {
      return `button--menu-item ${get(expression_4) ?? ""}`;
    },
    onclick: () => setFilter(true),
    get ariaLabel() {
      return get(expression_5);
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text();
      template_effect(
        ($0) => set_text(text_2, $0),
        [
          () => t("ui.panel.filter.resolved", "Resolved")
        ],
        derived_safe_equal
      );
      append($$anchor2, text_2);
    },
    $$slots: {
      default: true,
      icon: ($$anchor2, $$slotProps) => {
        var span_1 = root_5();
        append($$anchor2, span_1);
      }
    }
  });
  reset$1(div_5);
  reset$1(div_3);
  reset$1(div_2);
  bind_this(div_2, ($$value) => set(contextMenu, $$value), () => get(contextMenu));
  reset$1(div);
  template_effect(
    ($0) => set_text(text$1, $0),
    [
      () => t("ui.panel.menu.filter.title", "Show Comments")
    ],
    derived_safe_equal
  );
  append($$anchor, div);
  pop();
}
create_custom_element(ContextMenu, {}, [], [], true);
var root$4 = /* @__PURE__ */ ns_template(`<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="svelte-1q9atlb"><path d="M12.5 22.5C18.0228 22.5 22.5 18.0228 22.5 12.5C22.5 6.97715 18.0228 2.5 12.5 2.5C6.97715 2.5 2.5 6.97715 2.5 12.5C2.5 14.0997 2.87562 15.6116 3.54346 16.9525C3.72094 17.3088 3.78001 17.7161 3.67712 18.1006L3.08151 20.3267C2.82295 21.293 3.70701 22.177 4.67335 21.9185L6.89939 21.3229C7.28393 21.22 7.69121 21.2791 8.04753 21.4565C9.38837 22.1244 10.9003 22.5 12.5 22.5Z" stroke="currentColor" stroke-width="1.5"></path><path d="M8.5 11H16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M8.5 14.5H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>`);
const $$css$3 = {
  hash: "svelte-1q9atlb",
  code: "svg.svelte-1q9atlb{width:var(--size,var(--icon-size));height:var(--size,var(--icon-size))}"
};
function IconChat($$anchor) {
  append_styles($$anchor, $$css$3);
  var svg = root$4();
  append($$anchor, svg);
}
create_custom_element(IconChat, {}, [], [], true);
var root_2$1 = /* @__PURE__ */ template(`<li class="no-threads svelte-n6dlaf"><p> </p></li>`);
var root_4 = /* @__PURE__ */ template(`<li class="no-threads svelte-n6dlaf"><p> </p></li>`);
var root_6 = /* @__PURE__ */ template(`<li class="svelte-n6dlaf"><!></li>`);
var root$3 = /* @__PURE__ */ template(`<dialog><header class="svelte-n6dlaf"><!></header> <ul class="threads svelte-n6dlaf" data-lenis-prevent=""><!></ul> <!></dialog>`);
const $$css$2 = {
  hash: "svelte-n6dlaf",
  code: ".panel.svelte-n6dlaf{position:var(--panel-position);right:var(--panel-right);top:var(--panel-top);transform:var(--panel-transform-closed);width:var(--panel-width);max-width:none;height:var(--panel-height);color:var(--panel-color);border-radius:var(--panel-border-radius);border-top-left-radius:var(--panel-border-top-left-radius);transition:var(--panel-transition);z-index:var(--panel-z-index);cursor:auto;border:0;flex-direction:column;justify-content:flex-start;align-items:flex-start;margin:0;padding:0;display:flex;bottom:auto;left:auto}@media screen and (max-width:600px){.panel.svelte-n6dlaf{width:var(--panel-mobile-width)}}.panel.open.svelte-n6dlaf{transform:var(--panel-transform-open);box-shadow:var(--panel-shadow)}.panel.open.svelte-n6dlaf header:where(.svelte-n6dlaf){transform:var(--panel-header-transform-open)}.panel.svelte-n6dlaf header:where(.svelte-n6dlaf){transform:var(--panel-header-transform-closed);border-top-left-radius:var(--panel-header-border-radius);border-bottom-left-radius:var(--panel-header-border-radius);gap:var(--panel-header-gap);-webkit-backdrop-filter:var(--panel-header-backdrop-filter);backdrop-filter:var(--panel-header-backdrop-filter);background:var(--panel-header-background);box-shadow:var(--shadow-l),var(--shadow-light-edge),var(--shadow-dark-edge);transition:transform var(--transition-duration)var(--transition-easing);border-top-right-radius:0;border-bottom-right-radius:0;flex-direction:column;display:flex;position:absolute}.panel.svelte-n6dlaf header:where(.svelte-n6dlaf):hover,.panel.svelte-n6dlaf header:where(.svelte-n6dlaf):focus-visible{transform:var(--panel-header-transform-hover)}.threads.svelte-n6dlaf{overscroll-behavior:contain;padding:var(--panel-threads-padding);box-sizing:border-box;background-color:var(--panel-threads-background);width:100%;-webkit-backdrop-filter:var(--panel-threads-backdrop);backdrop-filter:var(--panel-threads-backdrop);z-index:2;border-radius:var(--panel-threads-border-radius);border-top-left-radius:var(--panel-threads-border-top-left-radius);scrollbar-width:var(--panel-threads-scrollbar-width);scrollbar-gutter:stable;flex-direction:column;flex:100%;margin:0;list-style:none;display:flex;overflow-y:auto}.threads.svelte-n6dlaf li:where(.svelte-n6dlaf)+li:where(.svelte-n6dlaf){margin-top:var(--panel-threads-item-margin)}.threads.svelte-n6dlaf .no-threads:where(.svelte-n6dlaf){text-align:center;padding:var(--panel-no-threads-padding);font-size:var(--panel-no-threads-font-size);color:var(--panel-no-threads-color);margin-block:auto}"
};
function Panel($$anchor, $$props) {
  push($$props, true);
  append_styles($$anchor, $$css$2);
  const scrollIntoView = prop($$props, "scrollIntoView", 7), handleSubmit = prop($$props, "handleSubmit", 7), cancel = prop($$props, "cancel", 7);
  let dialogEl;
  const filteredComments = /* @__PURE__ */ derived(() => panel.showResolvedOnly ? store.comments.filter((comment2) => comment2.status === "RESOLVED") : store.comments.filter((comment2) => comment2.status === "OPEN"));
  user_effect(() => {
    if (!dialogEl) return;
    if (panel.open && !dialogEl.open) {
      dialogEl.show();
    } else if (!panel.open && dialogEl.open) {
      dialogEl.close();
    }
  });
  onMount(() => {
    const handleKeydown2 = (event2) => {
      if (event2.key === "Escape" && panel.open) {
        panel.open = false;
      }
    };
    document.addEventListener("keydown", handleKeydown2);
    return () => document.removeEventListener("keydown", handleKeydown2);
  });
  function handleDialogClose() {
    panel.open = false;
  }
  var dialog = root$3();
  let classes;
  var header = child(dialog);
  var node = child(header);
  const expression = /* @__PURE__ */ derived(() => t("ui.panel.open", "Open comments"));
  Button(node, {
    onclick: () => panel.open = !panel.open,
    style: "button--header",
    get ariaLabel() {
      return get(expression);
    },
    $$slots: {
      icon: ($$anchor2, $$slotProps) => {
        IconChat($$anchor2);
      }
    }
  });
  reset$1(header);
  var ul = sibling(header, 2);
  var node_1 = child(ul);
  {
    var consequent = ($$anchor2) => {
      var li = root_2$1();
      var p = child(li);
      var text2 = child(p, true);
      reset$1(p);
      reset$1(li);
      template_effect(($0) => set_text(text2, $0), [
        () => t("ui.panel.no.comments", "No comments yet.")
      ]);
      append($$anchor2, li);
    };
    var alternate = ($$anchor2, $$elseif) => {
      {
        var consequent_1 = ($$anchor3) => {
          var li_1 = root_4();
          var p_1 = child(li_1);
          var text_1 = child(p_1, true);
          reset$1(p_1);
          reset$1(li_1);
          template_effect(($0) => set_text(text_1, $0), [
            () => t("ui.panel.no.resolved", "No resolved comments yet.")
          ]);
          append($$anchor3, li_1);
        };
        var alternate_1 = ($$anchor3) => {
          var fragment_1 = comment();
          var node_2 = first_child(fragment_1);
          each(node_2, 17, () => get(filteredComments), (comment2) => comment2.id, ($$anchor4, comment2) => {
            var li_2 = root_6();
            var node_3 = child(li_2);
            Comment$1(node_3, {
              get comment() {
                return get(comment2);
              },
              get scrollIntoView() {
                return scrollIntoView();
              },
              get cancel() {
                return cancel();
              },
              get handleSubmit() {
                return handleSubmit();
              }
            });
            reset$1(li_2);
            append($$anchor4, li_2);
          });
          append($$anchor3, fragment_1);
        };
        if_block(
          $$anchor2,
          ($$render) => {
            if (get(filteredComments).length === 0 && panel.showResolvedOnly) $$render(consequent_1);
            else $$render(alternate_1, false);
          },
          $$elseif
        );
      }
    };
    if_block(node_1, ($$render) => {
      if (get(filteredComments).length === 0) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  reset$1(ul);
  var node_4 = sibling(ul, 2);
  ContextMenu(node_4, {});
  reset$1(dialog);
  bind_this(dialog, ($$value) => dialogEl = $$value, () => dialogEl);
  template_effect(
    ($0) => {
      classes = set_class(dialog, 1, "panel svelte-n6dlaf", null, classes, $0);
      ul.inert = !panel.open;
    },
    [() => ({ open: panel.open })]
  );
  event("close", dialog, handleDialogClose);
  append($$anchor, dialog);
  return pop({
    get scrollIntoView() {
      return scrollIntoView();
    },
    set scrollIntoView($$value) {
      scrollIntoView($$value);
      flushSync();
    },
    get handleSubmit() {
      return handleSubmit();
    },
    set handleSubmit($$value) {
      handleSubmit($$value);
      flushSync();
    },
    get cancel() {
      return cancel();
    },
    set cancel($$value) {
      cancel($$value);
      flushSync();
    }
  });
}
create_custom_element(
  Panel,
  {
    scrollIntoView: {},
    handleSubmit: {},
    cancel: {}
  },
  [],
  [],
  true
);
function useGenerateSelector(event2) {
  const target = event2.target;
  if (!target) {
    throw new Error("No target element found in event");
  }
  const strategies = getSelectorStrategies();
  for (const strategy of strategies) {
    try {
      const selector = strategy.generator(target);
      if (selector && validateSelector(selector, target)) {
        return selector;
      }
    } catch (error) {
      console.warn(`Strategy ${strategy.name} failed:`, error);
    }
  }
  return generatePathSelector(target);
}
function getSelectorStrategies() {
  return [
    {
      name: "ID",
      priority: 1,
      generator: (element) => {
        if (element.id && isValidId(element.id)) {
          return `#${CSS.escape(element.id)}`;
        }
        return null;
      }
    },
    {
      name: "Unique Attributes",
      priority: 2,
      generator: (element) => {
        const uniqueAttrs = ["data-testid", "data-id", "name", "for"];
        for (const attr of uniqueAttrs) {
          const value = element.getAttribute(attr);
          if (value) {
            const selector = `${element.tagName.toLowerCase()}[${attr}="${CSS.escape(value)}"]`;
            if (isUniqueSelector(selector)) {
              return selector;
            }
          }
        }
        return null;
      }
    },
    {
      name: "Semantic Attributes",
      priority: 3,
      generator: (element) => {
        const semanticAttrs = [
          "aria-label",
          "aria-labelledby",
          "role",
          "type",
          "placeholder",
          "title",
          "alt"
        ];
        const tagName = element.tagName.toLowerCase();
        const selectors = [tagName];
        for (const attr of semanticAttrs) {
          const value = element.getAttribute(attr);
          if (value) {
            selectors.push(`[${attr}="${CSS.escape(value)}"]`);
          }
        }
        if (selectors.length > 1) {
          const selector = selectors.join("");
          if (isUniqueSelector(selector)) {
            return selector;
          }
        }
        return null;
      }
    },
    {
      name: "Structural Attributes",
      priority: 4,
      generator: (element) => {
        const structuralAttrs = ["href", "src", "action", "value"];
        const tagName = element.tagName.toLowerCase();
        for (const attr of structuralAttrs) {
          const value = element.getAttribute(attr);
          if (value && value.length > 0) {
            const selector = `${tagName}[${attr}="${CSS.escape(value)}"]`;
            if (isUniqueSelector(selector)) {
              return selector;
            }
          }
        }
        return null;
      }
    },
    {
      name: "Class Combinations",
      priority: 5,
      generator: (element) => {
        const classes = getStableClasses(element);
        if (classes.length === 0) {
          return null;
        }
        const tagName = element.tagName.toLowerCase();
        for (const className of classes) {
          const selector = `${tagName}.${CSS.escape(className)}`;
          if (isUniqueSelector(selector)) {
            return selector;
          }
        }
        if (classes.length >= 2) {
          const classSelector = classes.slice(0, 3).map((c) => `.${CSS.escape(c)}`).join("");
          const selector = `${tagName}${classSelector}`;
          if (isUniqueSelector(selector)) {
            return selector;
          }
        }
        return null;
      }
    },
    {
      name: "Parent Context",
      priority: 6,
      generator: (element) => {
        const parent = element.parentElement;
        if (!parent) return null;
        const parentSelector = getSimpleSelector(parent);
        if (!parentSelector) return null;
        const tagName = element.tagName.toLowerCase();
        const siblingIndex = getSiblingIndex(element);
        if (siblingIndex > 0) {
          const selector = `${parentSelector} > ${tagName}:nth-of-type(${siblingIndex})`;
          if (isUniqueSelector(selector)) {
            return selector;
          }
        }
        const classes = getStableClasses(element);
        if (classes.length > 0) {
          const selector = `${parentSelector} > ${tagName}.${CSS.escape(classes[0])}`;
          if (isUniqueSelector(selector)) {
            return selector;
          }
        }
        return null;
      }
    }
  ];
}
function getStableClasses(element) {
  const classes = Array.from(element.classList);
  const unstablePatterns = [
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
  return classes.filter((className) => {
    return !unstablePatterns.some((pattern) => pattern.test(className));
  });
}
function generatePathSelector(element) {
  const path = [];
  let current = element;
  while (current && current !== document.body && path.length < 5) {
    const selector = getElementSelector(current);
    path.unshift(selector);
    const partialSelector = path.join(" > ");
    if (isUniqueSelector(partialSelector)) {
      return partialSelector;
    }
    current = current.parentElement;
  }
  return path.join(" > ");
}
function getSimpleSelector(element) {
  if (element.id && isValidId(element.id)) {
    return `#${CSS.escape(element.id)}`;
  }
  const uniqueAttrs = ["data-testid", "data-id", "name"];
  for (const attr of uniqueAttrs) {
    const value = element.getAttribute(attr);
    if (value) {
      return `[${attr}="${CSS.escape(value)}"]`;
    }
  }
  const tagName = element.tagName.toLowerCase();
  const classes = getStableClasses(element);
  if (classes.length > 0) {
    return `${tagName}.${CSS.escape(classes[0])}`;
  }
  return null;
}
function getElementSelector(element) {
  const tagName = element.tagName.toLowerCase();
  if (element.id && isValidId(element.id)) {
    return `#${CSS.escape(element.id)}`;
  }
  const classes = getStableClasses(element);
  if (classes.length > 0) {
    return `${tagName}.${CSS.escape(classes[0])}`;
  }
  const index = getSiblingIndex(element);
  if (index > 1) {
    return `${tagName}:nth-of-type(${index})`;
  }
  return tagName;
}
function getSiblingIndex(element) {
  let index = 1;
  let sibling2 = element.previousElementSibling;
  while (sibling2) {
    if (sibling2.tagName === element.tagName) {
      index++;
    }
    sibling2 = sibling2.previousElementSibling;
  }
  return index;
}
function validateSelector(selector, target) {
  try {
    const matches = document.querySelectorAll(selector);
    return matches.length === 1 && matches[0] === target;
  } catch (error) {
    console.warn(`Invalid selector: ${selector}`, error);
    return false;
  }
}
function isUniqueSelector(selector) {
  try {
    const matches = document.querySelectorAll(selector);
    return matches.length === 1;
  } catch (error) {
    return false;
  }
}
function isValidId(id) {
  const invalidPatterns = [
    /^[a-f0-9]{8,}$/,
    // Hex strings
    /^(ember|react|vue)[0-9]+/,
    // Framework generated
    /^[0-9]+$/,
    // Pure numbers
    /^temp-/
    // Temporary prefixes
  ];
  return !invalidPatterns.some((pattern) => pattern.test(id));
}
const getSelectorOffset = (e, element) => {
  const clickX = e.pageX;
  const clickY = e.pageY;
  const rect = element.getBoundingClientRect();
  const elementX = rect.left + window.scrollX;
  const elementY = rect.top + window.scrollY;
  const offsetXRel = clickX - elementX;
  const offsetYRel = clickY - elementY;
  let offsetX = offsetXRel / element.offsetWidth * 100;
  let offsetY = offsetYRel / element.offsetHeight * 100;
  offsetX = Number(offsetX.toFixed(2));
  offsetY = Number(offsetY.toFixed(2));
  return {
    selectorOffsetX: offsetX,
    selectorOffsetY: offsetY
  };
};
const setNewMarker = (e) => {
  const selector = useGenerateSelector(e);
  const element = document.querySelector(selector);
  if (!element) return;
  const { selectorOffsetX, selectorOffsetY } = getSelectorOffset(e, element);
  let pagePositionX = e.pageX;
  let pagePositionY = e.pageY;
  pagePositionX = Number(pagePositionX.toFixed(2));
  pagePositionY = Number(pagePositionY.toFixed(2));
  return {
    selector,
    selectorOffsetX,
    selectorOffsetY,
    pagePositionX,
    pagePositionY
  };
};
const getDocumentWidth = () => {
  const body = document.body;
  const html = document.documentElement;
  return Math.max(
    body.scrollWidth,
    body.offsetWidth,
    html.clientWidth,
    html.scrollWidth,
    html.offsetWidth
  );
};
const getDialogPosition = (marker, dialogElement) => {
  let left = 0;
  let top = 0;
  if (!marker || !dialogElement) return { left, top };
  left = marker.pagePositionX;
  top = marker.pagePositionY;
  const dialogWidth = dialogElement.offsetWidth;
  const dialogHeight = dialogElement.offsetHeight;
  const documentWidth = getDocumentWidth();
  const documentHeight = getDocumentHeight();
  if (left + dialogWidth > documentWidth) {
    left = documentWidth - dialogWidth;
  }
  if (top + dialogHeight > documentHeight) {
    top = documentHeight - dialogHeight;
  }
  left = Math.max(0, left);
  top = Math.max(0, top);
  return { left, top };
};
var root$2 = /* @__PURE__ */ template(`<dialog><!></dialog>`);
const $$css$1 = {
  hash: "svelte-iihm64",
  code: "dialog.svelte-iihm64{--loop-textarea-font-size:var(--comment-dialog-textarea-font-size);position:var(--comment-dialog-position);top:var(--top);left:var(--left);max-width:var(--comment-dialog-max-width);border-radius:var(--comment-dialog-border-radius);visibility:hidden;width:100%;max-height:none;box-shadow:var(--comment-dialog-shadow);border:0;margin:0;padding:0;overflow:hidden}dialog.is-visible.svelte-iihm64{visibility:visible}dialog.svelte-iihm64::backdrop{background-color:var(--comment-dialog-backdrop-background)}"
};
function CommentDialog($$anchor, $$props) {
  push($$props, true);
  append_styles($$anchor, $$css$1);
  const handleSubmit = prop($$props, "handleSubmit", 7), showModal = prop($$props, "showModal", 7), newMarker = prop($$props, "newMarker", 7), cancel = prop($$props, "cancel", 7);
  let dialogElement;
  let dialogPosition = state(proxy({ left: 0, top: 0 }));
  let ready = state(false);
  user_effect(() => {
    if (showModal()) {
      dialogElement.showModal();
      set(dialogPosition, proxy(getDialogPosition(newMarker(), dialogElement)));
      set(ready, true);
    } else {
      dialogElement.close();
      set(ready, false);
    }
  });
  var dialog = root$2();
  let classes;
  var node = child(dialog);
  CommentForm(node, {
    get handleSubmit() {
      return handleSubmit();
    },
    get cancel() {
      return cancel();
    }
  });
  reset$1(dialog);
  bind_this(dialog, ($$value) => dialogElement = $$value, () => dialogElement);
  template_effect(
    ($0) => {
      set_style(dialog, `--left: ${get(dialogPosition).left ?? ""}px; --top: ${get(dialogPosition).top ?? ""}px;`);
      classes = set_class(dialog, 1, "svelte-iihm64", null, classes, $0);
    },
    [() => ({ "is-visible": get(ready) })]
  );
  event("close", dialog, function(...$$args) {
    var _a2;
    (_a2 = cancel()) == null ? void 0 : _a2.apply(this, $$args);
  });
  append($$anchor, dialog);
  return pop({
    get handleSubmit() {
      return handleSubmit();
    },
    set handleSubmit($$value) {
      handleSubmit($$value);
      flushSync();
    },
    get showModal() {
      return showModal();
    },
    set showModal($$value) {
      showModal($$value);
      flushSync();
    },
    get newMarker() {
      return newMarker();
    },
    set newMarker($$value) {
      newMarker($$value);
      flushSync();
    },
    get cancel() {
      return cancel();
    },
    set cancel($$value) {
      cancel($$value);
      flushSync();
    }
  });
}
create_custom_element(
  CommentDialog,
  {
    handleSubmit: {},
    showModal: {},
    newMarker: {},
    cancel: {}
  },
  [],
  [],
  true
);
var root_1 = /* @__PURE__ */ template(`<h2 class="svelte-1y3js7r"> </h2> <p class="welcome-text svelte-1y3js7r"> </p>`, 1);
var root_2 = /* @__PURE__ */ template(`<div><div class="input"><input type="text" required class="svelte-1y3js7r"></div></div>`);
var root$1 = /* @__PURE__ */ template(`<dialog class="svelte-1y3js7r"><form class="svelte-1y3js7r"><!> <!> <footer class="svelte-1y3js7r"><!> <!></footer></form></dialog>`);
const $$css = {
  hash: "svelte-1y3js7r",
  code: "dialog.svelte-1y3js7r{-webkit-backdrop-filter:var(--welcome-dialog-backdrop-filter);backdrop-filter:var(--welcome-dialog-backdrop-filter);border:var(--welcome-dialog-border);border-radius:var(--welcome-dialog-border-radius);box-shadow:var(--welcome-dialog-shadow);width:100%;max-width:var(--welcome-dialog-max-width);background:var(--welcome-dialog-background);padding:0}dialog.svelte-1y3js7r::backdrop{background:var(--welcome-dialog-backdrop-background);-webkit-backdrop-filter:var(--welcome-dialog-backdrop-backdrop-filter);backdrop-filter:var(--welcome-dialog-backdrop-backdrop-filter)}form.svelte-1y3js7r{padding:var(--welcome-dialog-form-padding)}h2.svelte-1y3js7r{margin:var(--welcome-dialog-title-margin);font-size:var(--welcome-dialog-title-font-size);color:var(--welcome-dialog-title-color);font-weight:var(--welcome-dialog-title-font-weight)}.welcome-text.svelte-1y3js7r{margin:var(--welcome-dialog-text-margin);font-size:var(--welcome-dialog-text-font-size);color:var(--welcome-dialog-text-color);line-height:var(--welcome-dialog-text-line-height)}.name-section.svelte-1y3js7r{margin-bottom:var(--welcome-dialog-name-section-margin)}.name-section.no-welcome.svelte-1y3js7r{border-top:none;padding-top:0}input.svelte-1y3js7r{border:var(--welcome-dialog-input-border);border-radius:var(--welcome-dialog-input-border-radius);width:100%;padding:var(--welcome-dialog-input-padding);box-sizing:border-box;font-family:var(--welcome-dialog-input-font-family);font-size:var(--welcome-dialog-input-font-size);color:var(--welcome-dialog-input-color);background:var(--welcome-dialog-input-background)}input.svelte-1y3js7r:focus-visible{outline-color:var(--welcome-dialog-input-outline-color);outline-offset:var(--welcome-dialog-input-outline-offset)}footer.svelte-1y3js7r{gap:var(--welcome-dialog-footer-gap);display:flex}footer.svelte-1y3js7r button{flex:1}"
};
function WelcomeDialog($$anchor, $$props) {
  push($$props, true);
  append_styles($$anchor, $$css);
  const headline = prop($$props, "headline", 7), text$1 = prop($$props, "text", 7), authenticated = prop($$props, "authenticated", 7), welcomeEnabled = prop($$props, "welcomeEnabled", 7, true), onDismiss = prop($$props, "onDismiss", 7);
  let dialog;
  let name = state("");
  let isSubmitting = state(false);
  const showModal = () => dialog == null ? void 0 : dialog.showModal();
  const close = () => dialog == null ? void 0 : dialog.close();
  async function handleSubmit(e) {
    var _a2;
    e.preventDefault();
    if (!authenticated()) {
      if (get(name).trim() && !get(isSubmitting)) {
        set(isSubmitting, true);
        try {
          await setGuestName(get(name).trim());
          guestName.set(get(name).trim());
          dialog == null ? void 0 : dialog.close();
        } catch (error) {
          console.error("Failed to set guest name:", error);
        } finally {
          set(isSubmitting, false);
        }
      }
    } else {
      (_a2 = onDismiss()) == null ? void 0 : _a2();
      dialog == null ? void 0 : dialog.close();
    }
  }
  function handleCancel() {
    dialog == null ? void 0 : dialog.close();
  }
  function handleDialogClose() {
    set(name, "");
    set(isSubmitting, false);
  }
  var dialog_1 = root$1();
  var form = child(dialog_1);
  var node = child(form);
  {
    var consequent = ($$anchor2) => {
      var fragment = root_1();
      var h2 = first_child(fragment);
      var text_1 = child(h2, true);
      reset$1(h2);
      var p = sibling(h2, 2);
      var text_2 = child(p, true);
      reset$1(p);
      template_effect(() => {
        set_text(text_1, headline());
        set_text(text_2, text$1());
      });
      append($$anchor2, fragment);
    };
    if_block(node, ($$render) => {
      if (welcomeEnabled()) $$render(consequent);
    });
  }
  var node_1 = sibling(node, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var div = root_2();
      let classes;
      var div_1 = child(div);
      var input = child(div_1);
      remove_input_defaults(input);
      reset$1(div_1);
      reset$1(div);
      template_effect(
        ($0, $1) => {
          classes = set_class(div, 1, "name-section svelte-1y3js7r", null, classes, $0);
          set_attribute(input, "placeholder", $1);
        },
        [
          () => ({ "no-welcome": !welcomeEnabled() }),
          () => t("ui.welcome.guest.name.placeholder", "Enter your name")
        ]
      );
      bind_value(input, () => get(name), ($$value) => set(name, $$value));
      append($$anchor2, div);
    };
    if_block(node_1, ($$render) => {
      if (!authenticated()) $$render(consequent_1);
    });
  }
  var footer = sibling(node_1, 2);
  var node_2 = child(footer);
  Button(node_2, {
    type: "submit",
    style: "button--solid",
    get disabled() {
      return get(isSubmitting);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node_3 = first_child(fragment_1);
      {
        var consequent_2 = ($$anchor3) => {
          var text_3 = text();
          template_effect(($0) => set_text(text_3, $0), [
            () => get(isSubmitting) ? "Saving..." : t("ui.welcome.continue", "Continue")
          ]);
          append($$anchor3, text_3);
        };
        var alternate = ($$anchor3) => {
          var text_4 = text();
          template_effect(($0) => set_text(text_4, $0), [() => t("ui.welcome.continue", "Continue")]);
          append($$anchor3, text_4);
        };
        if_block(node_3, ($$render) => {
          if (!authenticated()) $$render(consequent_2);
          else $$render(alternate, false);
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_2, 2);
  Button(node_4, {
    onclick: handleCancel,
    get disabled() {
      return get(isSubmitting);
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_5 = text();
      template_effect(($0) => set_text(text_5, $0), [() => t("ui.welcome.dismiss", "Dismiss")]);
      append($$anchor2, text_5);
    },
    $$slots: { default: true }
  });
  reset$1(footer);
  reset$1(form);
  reset$1(dialog_1);
  bind_this(dialog_1, ($$value) => dialog = $$value, () => dialog);
  event("close", dialog_1, handleDialogClose);
  event("submit", form, handleSubmit);
  append($$anchor, dialog_1);
  return pop({
    showModal,
    close,
    get headline() {
      return headline();
    },
    set headline($$value) {
      headline($$value);
      flushSync();
    },
    get text() {
      return text$1();
    },
    set text($$value) {
      text$1($$value);
      flushSync();
    },
    get authenticated() {
      return authenticated();
    },
    set authenticated($$value) {
      authenticated($$value);
      flushSync();
    },
    get welcomeEnabled() {
      return welcomeEnabled();
    },
    set welcomeEnabled($$value = true) {
      welcomeEnabled($$value);
      flushSync();
    },
    get onDismiss() {
      return onDismiss();
    },
    set onDismiss($$value) {
      onDismiss($$value);
      flushSync();
    }
  });
}
create_custom_element(
  WelcomeDialog,
  {
    headline: {},
    text: {},
    authenticated: {},
    welcomeEnabled: {},
    onDismiss: {}
  },
  [],
  ["showModal", "close"],
  true
);
var root = /* @__PURE__ */ template(`<!> <!> <!> <!> <!>`, 1);
function App($$anchor, $$props) {
  push($$props, true);
  const position = prop($$props, "position", 7), language = prop($$props, "language", 7), apibase = prop($$props, "apibase", 7), pageId = prop($$props, "pageId", 7), authenticated = prop($$props, "authenticated", 7), welcomeEnabled = prop($$props, "welcome-enabled", 7), welcomeHeadline = prop($$props, "welcome-headline", 7), welcomeText = prop($$props, "welcome-text", 7), translations2 = prop($$props, "translations", 7);
  let showModal = state(false);
  let welcomeDialog;
  let isAuthenticated = /* @__PURE__ */ derived(() => authenticated() === "true");
  let isWelcomeEnabled = /* @__PURE__ */ derived(() => welcomeEnabled() === "true");
  const visibleComments = /* @__PURE__ */ derived(() => store.comments.filter((c) => c.status !== "RESOLVED"));
  const welcomeDismissedKey = "loop-welcome-dismissed";
  const isWelcomeDismissed = () => {
    if (!get(isAuthenticated)) return false;
    return sessionStorage.getItem(welcomeDismissedKey) === "true";
  };
  const markWelcomeDismissed = () => {
    if (get(isAuthenticated)) {
      sessionStorage.setItem(welcomeDismissedKey, "true");
    }
  };
  let newMarker = state(null);
  const scrollIntoView = (id) => {
    var _a2;
    const marker = (_a2 = $$props.$$host.shadowRoot) == null ? void 0 : _a2.getElementById(`marker-${id}`);
    if (marker) marker.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const clickToComment = (e) => {
    var _a2;
    const target = e.target;
    const clickedOnLoop = target.nodeName === "KIRBY-LOOP" || ((_a2 = target.parentElement) == null ? void 0 : _a2.closest("loop"));
    if (!overlay.open || clickedOnLoop) return;
    if (!get(isAuthenticated) && !guestName.get()) {
      welcomeDialog == null ? void 0 : welcomeDialog.showModal();
      return;
    }
    const marker = setNewMarker(e);
    if (!marker) return;
    set(newMarker, proxy(marker));
    set(showModal, true);
  };
  const cancel = () => {
    set(showModal, false);
    reset();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { text: text2, parentId } = formData;
    if (parentId) {
      const reply = { parentId, comment: text2 };
      addReply(reply);
      reset();
    } else {
      if (!get(newMarker)) return;
      const lang = language() || "";
      const comment2 = {
        url: window.location.href,
        comment: text2,
        parentId: null,
        lang,
        pageId: pageId(),
        ...get(newMarker)
      };
      set(showModal, false);
      addComment(comment2);
      reset();
    }
  };
  onMount(() => {
    const translationsData = JSON.parse(translations2() || "{}");
    setTranslations(translationsData);
    getComments(pageId());
    guestName.get();
    if (get(isWelcomeEnabled)) {
      if (get(isAuthenticated) && !isWelcomeDismissed() || !get(isAuthenticated) && !guestName.get()) {
        welcomeDialog == null ? void 0 : welcomeDialog.showModal();
      }
    } else if (!get(isAuthenticated) && !guestName.get()) {
      welcomeDialog == null ? void 0 : welcomeDialog.showModal();
    }
  });
  user_effect(() => {
    if (overlay.open) {
      document.body.style.setProperty("cursor", `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z' stroke='black' stroke-width='1.5'/%3E%3Cpath d='M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z' stroke='white' stroke-width='0.75'/%3E%3Cpath d='M15 12H12M12 12H9M12 12V9M12 12V15' stroke='white' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M15 12H12M12 12H9M12 12V9M12 12V15' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E"), auto`);
    } else {
      document.body.style.removeProperty("cursor");
    }
    document.documentElement.classList.toggle("loop-overlay-open", overlay.open);
  });
  var fragment = root();
  event("click", $document, clickToComment);
  var node = first_child(fragment);
  Header(node, {
    get position() {
      return position();
    },
    get commentsCount() {
      return get(visibleComments).length;
    }
  });
  var node_1 = sibling(node, 2);
  Panel(node_1, { scrollIntoView, handleSubmit, cancel });
  var node_2 = sibling(node_1, 2);
  each(node_2, 17, () => get(visibleComments), (comment2) => comment2.id, ($$anchor2, comment2) => {
    Marker($$anchor2, {
      get comment() {
        return get(comment2);
      }
    });
  });
  var node_3 = sibling(node_2, 2);
  CommentDialog(node_3, {
    handleSubmit,
    get showModal() {
      return get(showModal);
    },
    get newMarker() {
      return get(newMarker);
    },
    cancel
  });
  var node_4 = sibling(node_3, 2);
  const expression = /* @__PURE__ */ derived(() => welcomeHeadline() || "");
  const expression_1 = /* @__PURE__ */ derived(() => welcomeText() || "");
  bind_this(
    WelcomeDialog(node_4, {
      get headline() {
        return get(expression);
      },
      get text() {
        return get(expression_1);
      },
      get authenticated() {
        return get(isAuthenticated);
      },
      get welcomeEnabled() {
        return get(isWelcomeEnabled);
      },
      onDismiss: markWelcomeDismissed
    }),
    ($$value) => welcomeDialog = $$value,
    () => welcomeDialog
  );
  append($$anchor, fragment);
  return pop({
    get position() {
      return position();
    },
    set position($$value) {
      position($$value);
      flushSync();
    },
    get language() {
      return language();
    },
    set language($$value) {
      language($$value);
      flushSync();
    },
    get apibase() {
      return apibase();
    },
    set apibase($$value) {
      apibase($$value);
      flushSync();
    },
    get pageId() {
      return pageId();
    },
    set pageId($$value) {
      pageId($$value);
      flushSync();
    },
    get authenticated() {
      return authenticated();
    },
    set authenticated($$value) {
      authenticated($$value);
      flushSync();
    },
    get "welcome-enabled"() {
      return welcomeEnabled();
    },
    set "welcome-enabled"($$value) {
      welcomeEnabled($$value);
      flushSync();
    },
    get "welcome-headline"() {
      return welcomeHeadline();
    },
    set "welcome-headline"($$value) {
      welcomeHeadline($$value);
      flushSync();
    },
    get "welcome-text"() {
      return welcomeText();
    },
    set "welcome-text"($$value) {
      welcomeText($$value);
      flushSync();
    },
    get translations() {
      return translations2();
    },
    set translations($$value) {
      translations2($$value);
      flushSync();
    }
  });
}
customElements.define("kirby-loop", create_custom_element(
  App,
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
  true
));
export {
  App as default
};
