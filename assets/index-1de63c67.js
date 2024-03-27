!(function () {
  const e = document.createElement('link').relList;
  if (!(e && e.supports && e.supports('modulepreload'))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
    new MutationObserver((e) => {
      for (const n of e)
        if ('childList' === n.type)
          for (const e of n.addedNodes) 'LINK' === e.tagName && 'modulepreload' === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        'use-credentials' === e.crossOrigin
          ? (t.credentials = 'include')
          : 'anonymous' === e.crossOrigin
          ? (t.credentials = 'omit')
          : (t.credentials = 'same-origin'),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
const e = {},
  t = function (t, n, o) {
    if (!n || 0 === n.length) return t();
    const r = document.getElementsByTagName('link');
    return Promise.all(
      n.map((t) => {
        if (
          (t = (function (e) {
            return '/tjmtwall/' + e;
          })(t)) in e
        )
          return;
        e[t] = !0;
        const n = t.endsWith('.css'),
          i = n ? '[rel="stylesheet"]' : '';
        if (!!o)
          for (let e = r.length - 1; e >= 0; e--) {
            const o = r[e];
            if (o.href === t && (!n || 'stylesheet' === o.rel)) return;
          }
        else if (document.querySelector(`link[href="${t}"]${i}`)) return;
        const s = document.createElement('link');
        return (
          (s.rel = n ? 'stylesheet' : 'modulepreload'),
          n || ((s.as = 'script'), (s.crossOrigin = '')),
          (s.href = t),
          document.head.appendChild(s),
          n
            ? new Promise((e, n) => {
                s.addEventListener('load', e),
                  s.addEventListener('error', () => n(new Error(`Unable to preload CSS for ${t}`)));
              })
            : void 0
        );
      })
    ).then(() => t());
  };
function n(e, t) {
  const n = Object.create(null),
    o = e.split(',');
  for (let r = 0; r < o.length; r++) n[o[r]] = !0;
  return t ? (e) => !!n[e.toLowerCase()] : (e) => !!n[e];
}
const o = {},
  r = [],
  i = () => {},
  s = () => !1,
  a = (e) =>
    111 === e.charCodeAt(0) &&
    110 === e.charCodeAt(1) &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  l = (e) => e.startsWith('onUpdate:'),
  c = Object.assign,
  u = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  d = Object.prototype.hasOwnProperty,
  f = (e, t) => d.call(e, t),
  p = Array.isArray,
  h = (e) => '[object Map]' === T(e),
  g = (e) => '[object Set]' === T(e),
  m = (e) => '[object Date]' === T(e),
  v = (e) => 'function' == typeof e,
  y = (e) => 'string' == typeof e,
  b = (e) => 'symbol' == typeof e,
  _ = (e) => null !== e && 'object' == typeof e,
  w = (e) => (_(e) || v(e)) && v(e.then) && v(e.catch),
  x = Object.prototype.toString,
  T = (e) => x.call(e),
  S = (e) => '[object Object]' === T(e),
  C = (e) => y(e) && 'NaN' !== e && '-' !== e[0] && '' + parseInt(e, 10) === e,
  k = n(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  E = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  O = /-(\w)/g,
  L = E((e) => e.replace(O, (e, t) => (t ? t.toUpperCase() : ''))),
  $ = /\B([A-Z])/g,
  I = E((e) => e.replace($, '-$1').toLowerCase()),
  M = E((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  A = E((e) => (e ? `on${M(e)}` : '')),
  P = (e, t) => !Object.is(e, t),
  B = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  R = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  N = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let F;
function D(e) {
  if (p(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n],
        r = y(o) ? W(o) : D(o);
      if (r) for (const e in r) t[e] = r[e];
    }
    return t;
  }
  if (y(e) || _(e)) return e;
}
const j = /;(?![^(]*\))/g,
  q = /:([^]+)/,
  V = /\/\*[^]*?\*\//g;
function W(e) {
  const t = {};
  return (
    e
      .replace(V, '')
      .split(j)
      .forEach((e) => {
        if (e) {
          const n = e.split(q);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
    t
  );
}
function H(e) {
  let t = '';
  if (y(e)) t = e;
  else if (p(e))
    for (let n = 0; n < e.length; n++) {
      const o = H(e[n]);
      o && (t += o + ' ');
    }
  else if (_(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
const z = n('itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly');
function U(e) {
  return !!e || '' === e;
}
function X(e, t) {
  if (e === t) return !0;
  let n = m(e),
    o = m(t);
  if (n || o) return !(!n || !o) && e.getTime() === t.getTime();
  if (((n = b(e)), (o = b(t)), n || o)) return e === t;
  if (((n = p(e)), (o = p(t)), n || o))
    return (
      !(!n || !o) &&
      (function (e, t) {
        if (e.length !== t.length) return !1;
        let n = !0;
        for (let o = 0; n && o < e.length; o++) n = X(e[o], t[o]);
        return n;
      })(e, t)
    );
  if (((n = _(e)), (o = _(t)), n || o)) {
    if (!n || !o) return !1;
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e) {
      const o = e.hasOwnProperty(n),
        r = t.hasOwnProperty(n);
      if ((o && !r) || (!o && r) || !X(e[n], t[n])) return !1;
    }
  }
  return String(e) === String(t);
}
function Y(e, t) {
  return e.findIndex((e) => X(e, t));
}
const K = (e) =>
    y(e)
      ? e
      : null == e
      ? ''
      : p(e) || (_(e) && (e.toString === x || !v(e.toString)))
      ? JSON.stringify(e, G, 2)
      : String(e),
  G = (e, t) =>
    t && t.__v_isRef
      ? G(e, t.value)
      : h(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (e, [t, n], o) => ((e[Z(t, o) + ' =>'] = n), e),
            {}
          )
        }
      : g(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((e) => Z(e)) }
      : b(t)
      ? Z(t)
      : !_(t) || p(t) || S(t)
      ? t
      : String(t),
  Z = (e, t = '') => {
    var n;
    return b(e) ? `Symbol(${null != (n = e.description) ? n : t})` : e;
  },
  Q = [
    'ad',
    'ad-content-page',
    'ad-draw',
    'audio',
    'button',
    'camera',
    'canvas',
    'checkbox',
    'checkbox-group',
    'cover-image',
    'cover-view',
    'editor',
    'form',
    'functional-page-navigator',
    'icon',
    'image',
    'input',
    'label',
    'live-player',
    'live-pusher',
    'map',
    'movable-area',
    'movable-view',
    'navigator',
    'official-account',
    'open-data',
    'picker',
    'picker-view',
    'picker-view-column',
    'progress',
    'radio',
    'radio-group',
    'rich-text',
    'scroll-view',
    'slider',
    'swiper',
    'swiper-item',
    'switch',
    'text',
    'textarea',
    'video',
    'view',
    'web-view'
  ].map((e) => 'uni-' + e),
  J = ['list-view', 'list-item', 'sticky-section', 'sticky-header', 'cloud-db-element'].map(
    (e) => 'uni-' + e
  ),
  ee = ['list-item'].map((e) => 'uni-' + e);
function te(e) {
  if (-1 !== ee.indexOf(e)) return !1;
  const t = 'uni-' + e.replace('v-uni-', '');
  return -1 !== Q.indexOf(t) || -1 !== J.indexOf(t);
}
const ne = ['%', '%'],
  oe = /^([a-z-]+:)?\/\//i,
  re = /^data:.*,.*/,
  ie = 'onLoad',
  se = 'onUnload',
  ae = 'onShareTimeline',
  le = 'onShareAppMessage';
function ce(e) {
  return e && (e.appContext ? e.proxy : e);
}
function ue(e) {
  if (!e) return;
  let t = e.type.name;
  for (; t && te(I(t)); ) t = (e = e.parent).type.name;
  return e.proxy;
}
function de(e) {
  return 1 === e.nodeType;
}
function fe(e) {
  if (e instanceof Map) {
    const t = {};
    return (
      e.forEach((e, n) => {
        t[n] = e;
      }),
      D(t)
    );
  }
  if (p(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n],
        r = y(o) ? W(o) : fe(o);
      if (r) for (const e in r) t[e] = r[e];
    }
    return t;
  }
  return D(e);
}
function pe(e) {
  let t = '';
  if (e instanceof Map)
    e.forEach((e, n) => {
      e && (t += n + ' ');
    });
  else if (p(e))
    for (let n = 0; n < e.length; n++) {
      const o = pe(e[n]);
      o && (t += o + ' ');
    }
  else t = H(e);
  return t.trim();
}
function he(e) {
  return 0 === e.indexOf('/');
}
function ge(e) {
  return he(e) ? e : '/' + e;
}
function me(e, t = null) {
  let n;
  return (...o) => (e && ((n = e.apply(t, o)), (e = null)), n);
}
function ve(e) {
  return L(e.substring(5));
}
const ye = me(() => {
  const e = HTMLElement.prototype,
    t = e.setAttribute;
  e.setAttribute = function (e, n) {
    if (e.startsWith('data-') && this.tagName.startsWith('UNI-')) {
      (this.__uniDataset || (this.__uniDataset = {}))[ve(e)] = n;
    }
    t.call(this, e, n);
  };
  const n = e.removeAttribute;
  e.removeAttribute = function (e) {
    this.__uniDataset &&
      e.startsWith('data-') &&
      this.tagName.startsWith('UNI-') &&
      delete this.__uniDataset[ve(e)],
      n.call(this, e);
  };
});
function be(e) {
  return c({}, e.dataset, e.__uniDataset);
}
const _e = new RegExp('"[^"]+"|\'[^\']+\'|url\\([^)]+\\)|(\\d*\\.?\\d+)[r|u]px', 'g');
function we(e) {
  return { passive: e };
}
function xe(e) {
  const { id: t, offsetTop: n, offsetLeft: o } = e;
  return { id: t, dataset: be(e), offsetTop: n, offsetLeft: o };
}
function Te(e) {
  try {
    return decodeURIComponent('' + e);
  } catch (t) {}
  return '' + e;
}
function Se(e = {}) {
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      try {
        t[n] = Te(e[n]);
      } catch (o) {
        t[n] = e[n];
      }
    }),
    t
  );
}
const Ce = /\+/g;
function ke(e) {
  const t = {};
  if ('' === e || '?' === e) return t;
  const n = ('?' === e[0] ? e.slice(1) : e).split('&');
  for (let o = 0; o < n.length; ++o) {
    const e = n[o].replace(Ce, ' ');
    let r = e.indexOf('='),
      i = Te(r < 0 ? e : e.slice(0, r)),
      s = r < 0 ? null : Te(e.slice(r + 1));
    if (i in t) {
      let e = t[i];
      p(e) || (e = t[i] = [e]), e.push(s);
    } else t[i] = s;
  }
  return t;
}
function Ee(e, t, { clearTimeout: n, setTimeout: o }) {
  let r;
  const i = function () {
    n(r);
    const i = () => e.apply(this, arguments);
    r = o(i, t);
  };
  return (
    (i.cancel = function () {
      n(r);
    }),
    i
  );
}
class Oe {
  constructor(e, t) {
    (this.id = e),
      (this.listener = {}),
      (this.emitCache = []),
      t &&
        Object.keys(t).forEach((e) => {
          this.on(e, t[e]);
        });
  }
  emit(e, ...t) {
    const n = this.listener[e];
    if (!n) return this.emitCache.push({ eventName: e, args: t });
    n.forEach((e) => {
      e.fn.apply(e.fn, t);
    }),
      (this.listener[e] = n.filter((e) => 'once' !== e.type));
  }
  on(e, t) {
    this._addListener(e, 'on', t), this._clearCache(e);
  }
  once(e, t) {
    this._addListener(e, 'once', t), this._clearCache(e);
  }
  off(e, t) {
    const n = this.listener[e];
    if (n)
      if (t) for (let o = 0; o < n.length; ) n[o].fn === t && (n.splice(o, 1), o--), o++;
      else delete this.listener[e];
  }
  _clearCache(e) {
    for (let t = 0; t < this.emitCache.length; t++) {
      const n = this.emitCache[t],
        o = e ? (n.eventName === e ? e : null) : n.eventName;
      if (!o) continue;
      'number' != typeof this.emit.apply(this, [o, ...n.args])
        ? (this.emitCache.splice(t, 1), t--)
        : this.emitCache.pop();
    }
  }
  _addListener(e, t, n) {
    (this.listener[e] || (this.listener[e] = [])).push({ fn: n, type: t });
  }
}
const Le = [
    'onInit',
    'onLoad',
    'onShow',
    'onHide',
    'onUnload',
    'onBackPress',
    'onPageScroll',
    'onTabItemTap',
    'onReachBottom',
    'onPullDownRefresh',
    'onShareTimeline',
    'onShareAppMessage',
    'onAddToFavorites',
    'onSaveExitState',
    'onNavigationBarButtonTap',
    'onNavigationBarSearchInputClicked',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputFocusChanged'
  ],
  $e = ['onLoad', 'onShow'];
const Ie = [
  'onShow',
  'onHide',
  'onLaunch',
  'onError',
  'onThemeChange',
  'onPageNotFound',
  'onUnhandledRejection',
  'onExit',
  'onInit',
  'onLoad',
  'onReady',
  'onUnload',
  'onResize',
  'onBackPress',
  'onPageScroll',
  'onTabItemTap',
  'onReachBottom',
  'onPullDownRefresh',
  'onShareTimeline',
  'onAddToFavorites',
  'onShareAppMessage',
  'onSaveExitState',
  'onNavigationBarButtonTap',
  'onNavigationBarSearchInputClicked',
  'onNavigationBarSearchInputChanged',
  'onNavigationBarSearchInputConfirmed',
  'onNavigationBarSearchInputFocusChanged'
];
const Me = [];
const Ae = me((e, t) => {
    if (v(e._component.onError)) return t(e);
  }),
  Pe = function () {};
Pe.prototype = {
  on: function (e, t, n) {
    var o = this.e || (this.e = {});
    return (o[e] || (o[e] = [])).push({ fn: t, ctx: n }), this;
  },
  once: function (e, t, n) {
    var o = this;
    function r() {
      o.off(e, r), t.apply(n, arguments);
    }
    return (r._ = t), this.on(e, r, n);
  },
  emit: function (e) {
    for (
      var t = [].slice.call(arguments, 1),
        n = ((this.e || (this.e = {}))[e] || []).slice(),
        o = 0,
        r = n.length;
      o < r;
      o++
    )
      n[o].fn.apply(n[o].ctx, t);
    return this;
  },
  off: function (e, t) {
    var n = this.e || (this.e = {}),
      o = n[e],
      r = [];
    if (o && t) {
      for (var i = o.length - 1; i >= 0; i--)
        if (o[i].fn === t || o[i].fn._ === t) {
          o.splice(i, 1);
          break;
        }
      r = o;
    }
    return r.length ? (n[e] = r) : delete n[e], this;
  }
};
var Be = Pe;
const Re = { black: 'rgba(0,0,0,0.4)', white: 'rgba(255,255,255,0.4)' };
function Ne(e, t = {}, n = 'light') {
  const o = t[n],
    r = {};
  return o
    ? (Object.keys(e).forEach((i) => {
        let s = e[i];
        r[i] = (() => {
          if (S(s)) return Ne(s, t, n);
          if (p(s)) return s.map((e) => (S(e) ? Ne(e, t, n) : e));
          if (y(s) && s.startsWith('@')) {
            const t = s.replace('@', '');
            let n = o[t] || s;
            switch (i) {
              case 'titleColor':
                n = 'black' === n ? '#000000' : '#ffffff';
                break;
              case 'borderStyle':
                n = (e = n) && e in Re ? Re[e] : e;
            }
            return n;
          }
          var e;
          return s;
        })();
      }),
      r)
    : e;
}
let Fe;
class De {
  constructor(e = !1) {
    (this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Fe),
      !e && Fe && (this.index = (Fe.scopes || (Fe.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const t = Fe;
      try {
        return (Fe = this), e();
      } finally {
        Fe = t;
      }
    }
  }
  on() {
    Fe = this;
  }
  off() {
    Fe = this.parent;
  }
  stop(e) {
    if (this._active) {
      let t, n;
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
      for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
      if (!this.detached && this.parent && !e) {
        const e = this.parent.scopes.pop();
        e && e !== this && ((this.parent.scopes[this.index] = e), (e.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function je(e) {
  return new De(e);
}
const qe = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Ve = (e) => (e.w & Ue) > 0,
  We = (e) => (e.n & Ue) > 0,
  He = new WeakMap();
let ze = 0,
  Ue = 1;
let Xe;
const Ye = Symbol(''),
  Ke = Symbol('');
class Ge {
  constructor(e, t = null, n) {
    (this.fn = e),
      (this.scheduler = t),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      (function (e, t = Fe) {
        t && t.active && t.effects.push(e);
      })(this, n);
  }
  run() {
    if (!this.active) return this.fn();
    let e = Xe,
      t = Qe;
    for (; e; ) {
      if (e === this) return;
      e = e.parent;
    }
    try {
      return (
        (this.parent = Xe),
        (Xe = this),
        (Qe = !0),
        (Ue = 1 << ++ze),
        ze <= 30
          ? (({ deps: e }) => {
              if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Ue;
            })(this)
          : Ze(this),
        this.fn()
      );
    } finally {
      ze <= 30 &&
        ((e) => {
          const { deps: t } = e;
          if (t.length) {
            let n = 0;
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              Ve(r) && !We(r) ? r.delete(e) : (t[n++] = r), (r.w &= ~Ue), (r.n &= ~Ue);
            }
            t.length = n;
          }
        })(this),
        (Ue = 1 << --ze),
        (Xe = this.parent),
        (Qe = t),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Xe === this
      ? (this.deferStop = !0)
      : this.active && (Ze(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Ze(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let Qe = !0;
const Je = [];
function et() {
  Je.push(Qe), (Qe = !1);
}
function tt() {
  const e = Je.pop();
  Qe = void 0 === e || e;
}
function nt(e, t, n) {
  if (Qe && Xe) {
    let t = He.get(e);
    t || He.set(e, (t = new Map()));
    let o = t.get(n);
    o || t.set(n, (o = qe())), ot(o);
  }
}
function ot(e, t) {
  let n = !1;
  ze <= 30 ? We(e) || ((e.n |= Ue), (n = !Ve(e))) : (n = !e.has(Xe)),
    n && (e.add(Xe), Xe.deps.push(e));
}
function rt(e, t, n, o, r, i) {
  const s = He.get(e);
  if (!s) return;
  let a = [];
  if ('clear' === t) a = [...s.values()];
  else if ('length' === n && p(e)) {
    const e = Number(o);
    s.forEach((t, n) => {
      ('length' === n || n >= e) && a.push(t);
    });
  } else
    switch ((void 0 !== n && a.push(s.get(n)), t)) {
      case 'add':
        p(e) ? C(n) && a.push(s.get('length')) : (a.push(s.get(Ye)), h(e) && a.push(s.get(Ke)));
        break;
      case 'delete':
        p(e) || (a.push(s.get(Ye)), h(e) && a.push(s.get(Ke)));
        break;
      case 'set':
        h(e) && a.push(s.get(Ye));
    }
  if (1 === a.length) a[0] && it(a[0]);
  else {
    const e = [];
    for (const t of a) t && e.push(...t);
    it(qe(e));
  }
}
function it(e, t) {
  const n = p(e) ? e : [...e];
  for (const o of n) o.computed && st(o);
  for (const o of n) o.computed || st(o);
}
function st(e, t) {
  (e !== Xe || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const at = n('__proto__,__v_isRef,__isVue'),
  lt = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => 'arguments' !== e && 'caller' !== e)
      .map((e) => Symbol[e])
      .filter(b)
  ),
  ct = gt(),
  ut = gt(!1, !0),
  dt = gt(!0),
  ft = pt();
function pt() {
  const e = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...e) {
        const n = Jt(this);
        for (let t = 0, r = this.length; t < r; t++) nt(n, 0, t + '');
        const o = n[t](...e);
        return -1 === o || !1 === o ? n[t](...e.map(Jt)) : o;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...e) {
        et();
        const n = Jt(this)[t].apply(this, e);
        return tt(), n;
      };
    }),
    e
  );
}
function ht(e) {
  const t = Jt(this);
  return nt(t, 0, e), t.hasOwnProperty(e);
}
function gt(e = !1, t = !1) {
  return function (n, o, r) {
    if ('__v_isReactive' === o) return !e;
    if ('__v_isReadonly' === o) return e;
    if ('__v_isShallow' === o) return t;
    if ('__v_raw' === o && r === (e ? (t ? Ht : Wt) : t ? Vt : qt).get(n)) return n;
    const i = p(n);
    if (!e) {
      if (i && f(ft, o)) return Reflect.get(ft, o, r);
      if ('hasOwnProperty' === o) return ht;
    }
    const s = Reflect.get(n, o, r);
    return (b(o) ? lt.has(o) : at(o))
      ? s
      : (e || nt(n, 0, o),
        t ? s : sn(s) ? (i && C(o) ? s : s.value) : _(s) ? (e ? Xt(s) : Ut(s)) : s);
  };
}
function mt(e = !1) {
  return function (t, n, o, r) {
    let i = t[n];
    if (Gt(i) && sn(i) && !sn(o)) return !1;
    if (!e && (Zt(o) || Gt(o) || ((i = Jt(i)), (o = Jt(o))), !p(t) && sn(i) && !sn(o)))
      return (i.value = o), !0;
    const s = p(t) && C(n) ? Number(n) < t.length : f(t, n),
      a = Reflect.set(t, n, o, r);
    return t === Jt(r) && (s ? P(o, i) && rt(t, 'set', n, o) : rt(t, 'add', n, o)), a;
  };
}
const vt = {
    get: ct,
    set: mt(),
    deleteProperty: function (e, t) {
      const n = f(e, t);
      e[t];
      const o = Reflect.deleteProperty(e, t);
      return o && n && rt(e, 'delete', t, void 0), o;
    },
    has: function (e, t) {
      const n = Reflect.has(e, t);
      return (b(t) && lt.has(t)) || nt(e, 0, t), n;
    },
    ownKeys: function (e) {
      return nt(e, 0, p(e) ? 'length' : Ye), Reflect.ownKeys(e);
    }
  },
  yt = { get: dt, set: (e, t) => !0, deleteProperty: (e, t) => !0 },
  bt = c({}, vt, { get: ut, set: mt(!0) }),
  _t = (e) => e,
  wt = (e) => Reflect.getPrototypeOf(e);
function xt(e, t, n = !1, o = !1) {
  const r = Jt((e = e.__v_raw)),
    i = Jt(t);
  n || (t !== i && nt(r, 0, t), nt(r, 0, i));
  const { has: s } = wt(r),
    a = o ? _t : n ? nn : tn;
  return s.call(r, t) ? a(e.get(t)) : s.call(r, i) ? a(e.get(i)) : void (e !== r && e.get(t));
}
function Tt(e, t = !1) {
  const n = this.__v_raw,
    o = Jt(n),
    r = Jt(e);
  return t || (e !== r && nt(o, 0, e), nt(o, 0, r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function St(e, t = !1) {
  return (e = e.__v_raw), !t && nt(Jt(e), 0, Ye), Reflect.get(e, 'size', e);
}
function Ct(e) {
  e = Jt(e);
  const t = Jt(this);
  return wt(t).has.call(t, e) || (t.add(e), rt(t, 'add', e, e)), this;
}
function kt(e, t) {
  t = Jt(t);
  const n = Jt(this),
    { has: o, get: r } = wt(n);
  let i = o.call(n, e);
  i || ((e = Jt(e)), (i = o.call(n, e)));
  const s = r.call(n, e);
  return n.set(e, t), i ? P(t, s) && rt(n, 'set', e, t) : rt(n, 'add', e, t), this;
}
function Et(e) {
  const t = Jt(this),
    { has: n, get: o } = wt(t);
  let r = n.call(t, e);
  r || ((e = Jt(e)), (r = n.call(t, e))), o && o.call(t, e);
  const i = t.delete(e);
  return r && rt(t, 'delete', e, void 0), i;
}
function Ot() {
  const e = Jt(this),
    t = 0 !== e.size,
    n = e.clear();
  return t && rt(e, 'clear', void 0, void 0), n;
}
function Lt(e, t) {
  return function (n, o) {
    const r = this,
      i = r.__v_raw,
      s = Jt(i),
      a = t ? _t : e ? nn : tn;
    return !e && nt(s, 0, Ye), i.forEach((e, t) => n.call(o, a(e), a(t), r));
  };
}
function $t(e, t, n) {
  return function (...o) {
    const r = this.__v_raw,
      i = Jt(r),
      s = h(i),
      a = 'entries' === e || (e === Symbol.iterator && s),
      l = 'keys' === e && s,
      c = r[e](...o),
      u = n ? _t : t ? nn : tn;
    return (
      !t && nt(i, 0, l ? Ke : Ye),
      {
        next() {
          const { value: e, done: t } = c.next();
          return t ? { value: e, done: t } : { value: a ? [u(e[0]), u(e[1])] : u(e), done: t };
        },
        [Symbol.iterator]() {
          return this;
        }
      }
    );
  };
}
function It(e) {
  return function (...t) {
    return 'delete' !== e && this;
  };
}
function Mt() {
  const e = {
      get(e) {
        return xt(this, e);
      },
      get size() {
        return St(this);
      },
      has: Tt,
      add: Ct,
      set: kt,
      delete: Et,
      clear: Ot,
      forEach: Lt(!1, !1)
    },
    t = {
      get(e) {
        return xt(this, e, !1, !0);
      },
      get size() {
        return St(this);
      },
      has: Tt,
      add: Ct,
      set: kt,
      delete: Et,
      clear: Ot,
      forEach: Lt(!1, !0)
    },
    n = {
      get(e) {
        return xt(this, e, !0);
      },
      get size() {
        return St(this, !0);
      },
      has(e) {
        return Tt.call(this, e, !0);
      },
      add: It('add'),
      set: It('set'),
      delete: It('delete'),
      clear: It('clear'),
      forEach: Lt(!0, !1)
    },
    o = {
      get(e) {
        return xt(this, e, !0, !0);
      },
      get size() {
        return St(this, !0);
      },
      has(e) {
        return Tt.call(this, e, !0);
      },
      add: It('add'),
      set: It('set'),
      delete: It('delete'),
      clear: It('clear'),
      forEach: Lt(!0, !0)
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      (e[r] = $t(r, !1, !1)),
        (n[r] = $t(r, !0, !1)),
        (t[r] = $t(r, !1, !0)),
        (o[r] = $t(r, !0, !0));
    }),
    [e, n, t, o]
  );
}
const [At, Pt, Bt, Rt] = Mt();
function Nt(e, t) {
  const n = t ? (e ? Rt : Bt) : e ? Pt : At;
  return (t, o, r) =>
    '__v_isReactive' === o
      ? !e
      : '__v_isReadonly' === o
      ? e
      : '__v_raw' === o
      ? t
      : Reflect.get(f(n, o) && o in t ? n : t, o, r);
}
const Ft = { get: Nt(!1, !1) },
  Dt = { get: Nt(!1, !0) },
  jt = { get: Nt(!0, !1) },
  qt = new WeakMap(),
  Vt = new WeakMap(),
  Wt = new WeakMap(),
  Ht = new WeakMap();
function zt(e) {
  return e.__v_skip || !Object.isExtensible(e)
    ? 0
    : (function (e) {
        switch (e) {
          case 'Object':
          case 'Array':
            return 1;
          case 'Map':
          case 'Set':
          case 'WeakMap':
          case 'WeakSet':
            return 2;
          default:
            return 0;
        }
      })(((e) => T(e).slice(8, -1))(e));
}
function Ut(e) {
  return Gt(e) ? e : Yt(e, !1, vt, Ft, qt);
}
function Xt(e) {
  return Yt(e, !0, yt, jt, Wt);
}
function Yt(e, t, n, o, r) {
  if (!_(e)) return e;
  if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
  const i = r.get(e);
  if (i) return i;
  const s = zt(e);
  if (0 === s) return e;
  const a = new Proxy(e, 2 === s ? o : n);
  return r.set(e, a), a;
}
function Kt(e) {
  return Gt(e) ? Kt(e.__v_raw) : !(!e || !e.__v_isReactive);
}
function Gt(e) {
  return !(!e || !e.__v_isReadonly);
}
function Zt(e) {
  return !(!e || !e.__v_isShallow);
}
function Qt(e) {
  return Kt(e) || Gt(e);
}
function Jt(e) {
  const t = e && e.__v_raw;
  return t ? Jt(t) : e;
}
function en(e) {
  return R(e, '__v_skip', !0), e;
}
const tn = (e) => (_(e) ? Ut(e) : e),
  nn = (e) => (_(e) ? Xt(e) : e);
function on(e) {
  Qe && Xe && ot((e = Jt(e)).dep || (e.dep = qe()));
}
function rn(e, t) {
  const n = (e = Jt(e)).dep;
  n && it(n);
}
function sn(e) {
  return !(!e || !0 !== e.__v_isRef);
}
function an(e) {
  return cn(e, !1);
}
function ln(e) {
  return cn(e, !0);
}
function cn(e, t) {
  return sn(e) ? e : new un(e, t);
}
class un {
  constructor(e, t) {
    (this.__v_isShallow = t),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = t ? e : Jt(e)),
      (this._value = t ? e : tn(e));
  }
  get value() {
    return on(this), this._value;
  }
  set value(e) {
    const t = this.__v_isShallow || Zt(e) || Gt(e);
    (e = t ? e : Jt(e)),
      P(e, this._rawValue) && ((this._rawValue = e), (this._value = t ? e : tn(e)), rn(this));
  }
}
function dn(e) {
  return sn(e) ? e.value : e;
}
const fn = {
  get: (e, t, n) => dn(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return sn(r) && !sn(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, o);
  }
};
function pn(e) {
  return Kt(e) ? e : new Proxy(e, fn);
}
var hn;
class gn {
  constructor(e, t, n, o) {
    (this._setter = t),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[hn] = !1),
      (this._dirty = !0),
      (this.effect = new Ge(e, () => {
        this._dirty || ((this._dirty = !0), rn(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = n);
  }
  get value() {
    const e = Jt(this);
    return (
      on(e), (!e._dirty && e._cacheable) || ((e._dirty = !1), (e._value = e.effect.run())), e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
}
function mn(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (i) {
    yn(i, t, n);
  }
  return r;
}
function vn(e, t, n, o) {
  if (v(e)) {
    const r = mn(e, t, n, o);
    return (
      r &&
        w(r) &&
        r.catch((e) => {
          yn(e, t, n);
        }),
      r
    );
  }
  const r = [];
  for (let i = 0; i < e.length; i++) r.push(vn(e[i], t, n, o));
  return r;
}
function yn(e, t, n, o = !0) {
  t && t.vnode;
  if (t) {
    let o = t.parent;
    const r = t.proxy,
      i = n;
    for (; o; ) {
      const t = o.ec;
      if (t) for (let n = 0; n < t.length; n++) if (!1 === t[n](e, r, i)) return;
      o = o.parent;
    }
    const s = t.appContext.config.errorHandler;
    if (s) return void mn(s, null, 10, [e, r, i]);
  }
  !(function (e, t, n, o = !0) {
    console.error(e);
  })(e, 0, 0, o);
}
hn = '__v_isReadonly';
let bn = !1,
  _n = !1;
const wn = [];
let xn = 0;
const Tn = [];
let Sn = null,
  Cn = 0;
const kn = Promise.resolve();
let En = null;
function On(e) {
  const t = En || kn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ln(e) {
  (wn.length && wn.includes(e, bn && e.allowRecurse ? xn + 1 : xn)) ||
    (null == e.id
      ? wn.push(e)
      : wn.splice(
          (function (e) {
            let t = xn + 1,
              n = wn.length;
            for (; t < n; ) {
              const o = (t + n) >>> 1;
              An(wn[o]) < e ? (t = o + 1) : (n = o);
            }
            return t;
          })(e.id),
          0,
          e
        ),
    $n());
}
function $n() {
  bn || _n || ((_n = !0), (En = kn.then(Bn)));
}
function In(e, t = bn ? xn + 1 : 0) {
  for (; t < wn.length; t++) {
    const e = wn[t];
    e && e.pre && (wn.splice(t, 1), t--, e());
  }
}
function Mn(e) {
  if (Tn.length) {
    const e = [...new Set(Tn)];
    if (((Tn.length = 0), Sn)) return void Sn.push(...e);
    for (Sn = e, Sn.sort((e, t) => An(e) - An(t)), Cn = 0; Cn < Sn.length; Cn++) Sn[Cn]();
    (Sn = null), (Cn = 0);
  }
}
const An = (e) => (null == e.id ? 1 / 0 : e.id),
  Pn = (e, t) => {
    const n = An(e) - An(t);
    if (0 === n) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Bn(e) {
  (_n = !1), (bn = !0), wn.sort(Pn);
  try {
    for (xn = 0; xn < wn.length; xn++) {
      const e = wn[xn];
      e && !1 !== e.active && mn(e, null, 14);
    }
  } finally {
    (xn = 0), (wn.length = 0), Mn(), (bn = !1), (En = null), (wn.length || Tn.length) && Bn();
  }
}
function Rn(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || o;
  let i = n;
  const s = t.startsWith('update:'),
    a = s && t.slice(7);
  if (a && a in r) {
    const e = `${'modelValue' === a ? 'model' : a}Modifiers`,
      { number: t, trim: s } = r[e] || o;
    s && (i = n.map((e) => (y(e) ? e.trim() : e))), t && (i = n.map(N));
  }
  let l,
    c = r[(l = A(t))] || r[(l = A(L(t)))];
  !c && s && (c = r[(l = A(I(t)))]), c && vn(c, e, 6, Nn(e, c, i));
  const u = r[l + 'Once'];
  if (u) {
    if (e.emitted) {
      if (e.emitted[l]) return;
    } else e.emitted = {};
    (e.emitted[l] = !0), vn(u, e, 6, Nn(e, u, i));
  }
}
function Nn(e, t, n) {
  if (1 !== n.length) return n;
  if (v(t)) {
    if (t.length < 2) return n;
  } else if (!t.find((e) => e.length >= 2)) return n;
  const o = n[0];
  if (
    o &&
    f(o, 'type') &&
    f(o, 'timeStamp') &&
    f(o, 'target') &&
    f(o, 'currentTarget') &&
    f(o, 'detail')
  ) {
    const t = e.proxy,
      o = t.$gcd(t, !0);
    o && n.push(o);
  }
  return n;
}
function Fn(e, t, n = !1) {
  const o = t.emitsCache,
    r = o.get(e);
  if (void 0 !== r) return r;
  const i = e.emits;
  let s = {},
    a = !1;
  if (!v(e)) {
    const o = (e) => {
      const n = Fn(e, t, !0);
      n && ((a = !0), c(s, n));
    };
    !n && t.mixins.length && t.mixins.forEach(o),
      e.extends && o(e.extends),
      e.mixins && e.mixins.forEach(o);
  }
  return i || a
    ? (p(i) ? i.forEach((e) => (s[e] = null)) : c(s, i), _(e) && o.set(e, s), s)
    : (_(e) && o.set(e, null), null);
}
function Dn(e, t) {
  return (
    !(!e || !a(t)) &&
    ((t = t.slice(2).replace(/Once$/, '')),
    f(e, t[0].toLowerCase() + t.slice(1)) || f(e, I(t)) || f(e, t))
  );
}
let jn = null,
  qn = null;
function Vn(e) {
  const t = jn;
  return (jn = e), (qn = (e && e.type.__scopeId) || null), t;
}
function Wn(e, t = jn, n) {
  if (!t) return e;
  if (e._n) return e;
  const o = (...n) => {
    o._d && Hr(-1);
    const r = Vn(t);
    let i;
    try {
      i = e(...n);
    } finally {
      Vn(r), o._d && Hr(1);
    }
    return i;
  };
  return (o._n = !0), (o._c = !0), (o._d = !0), o;
}
function Hn(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    props: i,
    propsOptions: [s],
    slots: a,
    attrs: c,
    emit: u,
    render: d,
    renderCache: f,
    data: p,
    setupState: h,
    ctx: g,
    inheritAttrs: m
  } = e;
  let v, y;
  const b = Vn(e);
  try {
    if (4 & n.shapeFlag) {
      const e = r || o;
      (v = ri(d.call(e, e, f, i, h, p, g))), (y = c);
    } else {
      const e = t;
      0,
        (v = ri(e.length > 1 ? e(i, { attrs: c, slots: a, emit: u }) : e(i, null))),
        (y = t.props ? c : zn(c));
    }
  } catch (w) {
    (jr.length = 0), yn(w, e, 1), (v = ei(Fr));
  }
  let _ = v;
  if (y && !1 !== m) {
    const e = Object.keys(y),
      { shapeFlag: t } = _;
    e.length && 7 & t && (s && e.some(l) && (y = Un(y, s)), (_ = ti(_, y)));
  }
  return (
    n.dirs && ((_ = ti(_)), (_.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (_.transition = n.transition),
    (v = _),
    Vn(b),
    v
  );
}
const zn = (e) => {
    let t;
    for (const n in e) ('class' === n || 'style' === n || a(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Un = (e, t) => {
    const n = {};
    for (const o in e) (l(o) && o.slice(9) in t) || (n[o] = e[o]);
    return n;
  };
function Xn(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (t[i] !== e[i] && !Dn(n, i)) return !0;
  }
  return !1;
}
const Yn = (e) => e.__isSuspense;
function Kn(e, t) {
  if (di) {
    let n = di.provides;
    const o = di.parent && di.parent.provides;
    o === n && (n = di.provides = Object.create(o)),
      (n[e] = t),
      'app' === di.type.mpType && di.appContext.app.provide(e, t);
  } else;
}
function Gn(e, t, n = !1) {
  const o = di || jn;
  if (o) {
    const r =
      null == o.parent ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && v(t) ? t.call(o.proxy) : t;
  }
}
function Zn(e, t) {
  return eo(e, null, t);
}
const Qn = {};
function Jn(e, t, n) {
  return eo(e, t, n);
}
function eo(e, t, { immediate: n, deep: r, flush: s, onTrack: a, onTrigger: l } = o) {
  const c = Fe === (null == di ? void 0 : di.scope) ? di : null;
  let d,
    f,
    h = !1,
    g = !1;
  if (
    (sn(e)
      ? ((d = () => e.value), (h = Zt(e)))
      : Kt(e)
      ? ((d = () => e), (r = !0))
      : p(e)
      ? ((g = !0),
        (h = e.some((e) => Kt(e) || Zt(e))),
        (d = () => e.map((e) => (sn(e) ? e.value : Kt(e) ? oo(e) : v(e) ? mn(e, c, 2) : void 0))))
      : (d = v(e)
          ? t
            ? () => mn(e, c, 2)
            : () => {
                if (!c || !c.isUnmounted) return f && f(), vn(e, c, 3, [y]);
              }
          : i),
    t && r)
  ) {
    const e = d;
    d = () => oo(e());
  }
  let m,
    y = (e) => {
      f = x.onStop = () => {
        mn(e, c, 4);
      };
    };
  if (mi) {
    if (((y = i), t ? n && vn(t, c, 3, [d(), g ? [] : void 0, y]) : d(), 'sync' !== s)) return i;
    {
      const e = Si();
      m = e.__watcherHandles || (e.__watcherHandles = []);
    }
  }
  let b = g ? new Array(e.length).fill(Qn) : Qn;
  const _ = () => {
    if (x.active)
      if (t) {
        const e = x.run();
        (r || h || (g ? e.some((e, t) => P(e, b[t])) : P(e, b))) &&
          (f && f(), vn(t, c, 3, [e, b === Qn ? void 0 : g && b[0] === Qn ? [] : b, y]), (b = e));
      } else x.run();
  };
  let w;
  (_.allowRecurse = !!t),
    'sync' === s
      ? (w = _)
      : 'post' === s
      ? (w = () => Mr(_, c && c.suspense))
      : ((_.pre = !0), c && (_.id = c.uid), (w = () => Ln(_)));
  const x = new Ge(d, w);
  t ? (n ? _() : (b = x.run())) : 'post' === s ? Mr(x.run.bind(x), c && c.suspense) : x.run();
  const T = () => {
    x.stop(), c && c.scope && u(c.scope.effects, x);
  };
  return m && m.push(T), T;
}
function to(e, t, n) {
  const o = this.proxy,
    r = y(e) ? (e.includes('.') ? no(o, e) : () => o[e]) : e.bind(o, o);
  let i;
  v(t) ? (i = t) : ((i = t.handler), (n = t));
  const s = di;
  pi(this);
  const a = eo(r, i.bind(o), n);
  return s ? pi(s) : hi(), a;
}
function no(e, t) {
  const n = t.split('.');
  return () => {
    let t = e;
    for (let e = 0; e < n.length && t; e++) t = t[n[e]];
    return t;
  };
}
function oo(e, t) {
  if (!_(e) || e.__v_skip) return e;
  if ((t = t || new Set()).has(e)) return e;
  if ((t.add(e), sn(e))) oo(e.value, t);
  else if (p(e)) for (let n = 0; n < e.length; n++) oo(e[n], t);
  else if (g(e) || h(e))
    e.forEach((e) => {
      oo(e, t);
    });
  else if (S(e)) for (const n in e) oo(e[n], t);
  return e;
}
const ro = [Function, Array],
  io = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ro,
    onEnter: ro,
    onAfterEnter: ro,
    onEnterCancelled: ro,
    onBeforeLeave: ro,
    onLeave: ro,
    onAfterLeave: ro,
    onLeaveCancelled: ro,
    onBeforeAppear: ro,
    onAppear: ro,
    onAfterAppear: ro,
    onAppearCancelled: ro
  },
  so = {
    name: 'BaseTransition',
    props: io,
    setup(e, { slots: t }) {
      const n = fi(),
        o = (function () {
          const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
          return (
            Bo(() => {
              e.isMounted = !0;
            }),
            Fo(() => {
              e.isUnmounting = !0;
            }),
            e
          );
        })();
      let r;
      return () => {
        const i = t.default && po(t.default(), !0);
        if (!i || !i.length) return;
        let s = i[0];
        if (i.length > 1)
          for (const e of i)
            if (e.type !== Fr) {
              s = e;
              break;
            }
        const a = Jt(e),
          { mode: l } = a;
        if (o.isLeaving) return co(s);
        const c = uo(s);
        if (!c) return co(s);
        const u = lo(c, a, o, n);
        fo(c, u);
        const d = n.subTree,
          f = d && uo(d);
        let p = !1;
        const { getTransitionKey: h } = c.type;
        if (h) {
          const e = h();
          void 0 === r ? (r = e) : e !== r && ((r = e), (p = !0));
        }
        if (f && f.type !== Fr && (!Kr(c, f) || p)) {
          const e = lo(f, a, o, n);
          if ((fo(f, e), 'out-in' === l))
            return (
              (o.isLeaving = !0),
              (e.afterLeave = () => {
                (o.isLeaving = !1), !1 !== n.update.active && n.update();
              }),
              co(s)
            );
          'in-out' === l &&
            c.type !== Fr &&
            (e.delayLeave = (e, t, n) => {
              (ao(o, f)[String(f.key)] = f),
                (e._leaveCb = () => {
                  t(), (e._leaveCb = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = n);
            });
        }
        return s;
      };
    }
  };
function ao(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || ((o = Object.create(null)), n.set(t.type, o)), o;
}
function lo(e, t, n, o) {
  const {
      appear: r,
      mode: i,
      persisted: s = !1,
      onBeforeEnter: a,
      onEnter: l,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: d,
      onLeave: f,
      onAfterLeave: h,
      onLeaveCancelled: g,
      onBeforeAppear: m,
      onAppear: v,
      onAfterAppear: y,
      onAppearCancelled: b
    } = t,
    _ = String(e.key),
    w = ao(n, e),
    x = (e, t) => {
      e && vn(e, o, 9, t);
    },
    T = (e, t) => {
      const n = t[1];
      x(e, t), p(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
    },
    S = {
      mode: i,
      persisted: s,
      beforeEnter(t) {
        let o = a;
        if (!n.isMounted) {
          if (!r) return;
          o = m || a;
        }
        t._leaveCb && t._leaveCb(!0);
        const i = w[_];
        i && Kr(e, i) && i.el._leaveCb && i.el._leaveCb(), x(o, [t]);
      },
      enter(e) {
        let t = l,
          o = c,
          i = u;
        if (!n.isMounted) {
          if (!r) return;
          (t = v || l), (o = y || c), (i = b || u);
        }
        let s = !1;
        const a = (e._enterCb = (t) => {
          s ||
            ((s = !0),
            x(t ? i : o, [e]),
            S.delayedLeave && S.delayedLeave(),
            (e._enterCb = void 0));
        });
        t ? T(t, [e, a]) : a();
      },
      leave(t, o) {
        const r = String(e.key);
        if ((t._enterCb && t._enterCb(!0), n.isUnmounting)) return o();
        x(d, [t]);
        let i = !1;
        const s = (t._leaveCb = (n) => {
          i || ((i = !0), o(), x(n ? g : h, [t]), (t._leaveCb = void 0), w[r] === e && delete w[r]);
        });
        (w[r] = e), f ? T(f, [t, s]) : s();
      },
      clone: (e) => lo(e, t, n, o)
    };
  return S;
}
function co(e) {
  if (yo(e)) return ((e = ti(e)).children = null), e;
}
function uo(e) {
  return yo(e) ? (e.children ? e.children[0] : void 0) : e;
}
function fo(e, t) {
  6 & e.shapeFlag && e.component
    ? fo(e.component.subTree, t)
    : 128 & e.shapeFlag
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function po(e, t = !1, n) {
  let o = [],
    r = 0;
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    const a = null == n ? s.key : String(n) + String(null != s.key ? s.key : i);
    s.type === Rr
      ? (128 & s.patchFlag && r++, (o = o.concat(po(s.children, t, a))))
      : (t || s.type !== Fr) && o.push(null != a ? ti(s, { key: a }) : s);
  }
  if (r > 1) for (let i = 0; i < o.length; i++) o[i].patchFlag = -2;
  return o;
}
function ho(e) {
  return v(e) ? { setup: e, name: e.name } : e;
}
const go = (e) => !!e.type.__asyncLoader;
function mo(e) {
  v(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: o,
    delay: r = 200,
    timeout: i,
    suspensible: s = !0,
    onError: a
  } = e;
  let l,
    c = null,
    u = 0;
  const d = () => {
    let e;
    return (
      c ||
      (e = c =
        t()
          .catch((e) => {
            if (((e = e instanceof Error ? e : new Error(String(e))), a))
              return new Promise((t, n) => {
                a(
                  e,
                  () => t((u++, (c = null), d())),
                  () => n(e),
                  u + 1
                );
              });
            throw e;
          })
          .then((t) =>
            e !== c && c
              ? c
              : (t && (t.__esModule || 'Module' === t[Symbol.toStringTag]) && (t = t.default),
                (l = t),
                t)
          ))
    );
  };
  return ho({
    name: 'AsyncComponentWrapper',
    __asyncLoader: d,
    get __asyncResolved() {
      return l;
    },
    setup() {
      const e = di;
      if (l) return () => vo(l, e);
      const t = (t) => {
        (c = null), yn(t, e, 13, !o);
      };
      if ((s && e.suspense) || mi)
        return d()
          .then((t) => () => vo(t, e))
          .catch((e) => (t(e), () => (o ? ei(o, { error: e }) : null)));
      const a = an(!1),
        u = an(),
        f = an(!!r);
      return (
        r &&
          setTimeout(() => {
            f.value = !1;
          }, r),
        null != i &&
          setTimeout(() => {
            if (!a.value && !u.value) {
              const e = new Error(`Async component timed out after ${i}ms.`);
              t(e), (u.value = e);
            }
          }, i),
        d()
          .then(() => {
            (a.value = !0), e.parent && yo(e.parent.vnode) && Ln(e.parent.update);
          })
          .catch((e) => {
            t(e), (u.value = e);
          }),
        () =>
          a.value && l
            ? vo(l, e)
            : u.value && o
            ? ei(o, { error: u.value })
            : n && !f.value
            ? ei(n)
            : void 0
      );
    }
  });
}
function vo(e, t) {
  const { ref: n, props: o, children: r, ce: i } = t.vnode,
    s = ei(e, o, r);
  return (s.ref = n), (s.ce = i), delete t.vnode.ce, s;
}
const yo = (e) => e.type.__isKeepAlive;
class bo {
  constructor(e) {
    (this.max = e),
      (this._cache = new Map()),
      (this._keys = new Set()),
      (this._max = parseInt(e, 10));
  }
  get(e) {
    const { _cache: t, _keys: n, _max: o } = this,
      r = t.get(e);
    if (r) n.delete(e), n.add(e);
    else if ((n.add(e), o && n.size > o)) {
      const e = n.values().next().value;
      this.pruneCacheEntry(t.get(e)), this.delete(e);
    }
    return r;
  }
  set(e, t) {
    this._cache.set(e, t);
  }
  delete(e) {
    this._cache.delete(e), this._keys.delete(e);
  }
  forEach(e, t) {
    this._cache.forEach(e.bind(t));
  }
}
const _o = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
      matchBy: { type: String, default: 'name' },
      cache: Object
    },
    setup(e, { slots: t }) {
      const n = fi(),
        o = n.ctx;
      if (!o.renderer)
        return () => {
          const e = t.default && t.default();
          return e && 1 === e.length ? e[0] : e;
        };
      const r = e.cache || new bo(e.max);
      r.pruneCacheEntry = s;
      let i = null;
      function s(t) {
        var o;
        !i || !Kr(t, i) || ('key' === e.matchBy && t.key !== i.key)
          ? (Eo((o = t)), u(o, n, a, !0))
          : i && Eo(i);
      }
      const a = n.suspense,
        {
          renderer: {
            p: l,
            m: c,
            um: u,
            o: { createElement: d }
          }
        } = o,
        f = d('div');
      function p(t) {
        r.forEach((n, o) => {
          const i = Lo(n, e.matchBy);
          !i || (t && t(i)) || (r.delete(o), s(n));
        });
      }
      (o.activate = (e, t, n, o, r) => {
        const i = e.component;
        if (i.ba) {
          const e = i.isDeactivated;
          (i.isDeactivated = !1), B(i.ba), (i.isDeactivated = e);
        }
        c(e, t, n, 0, a),
          l(i.vnode, e, t, n, i, a, o, e.slotScopeIds, r),
          Mr(() => {
            (i.isDeactivated = !1), i.a && B(i.a);
            const t = e.props && e.props.onVnodeMounted;
            t && li(t, i.parent, e);
          }, a);
      }),
        (o.deactivate = (e) => {
          const t = e.component;
          t.bda && $o(t.bda),
            c(e, f, null, 1, a),
            Mr(() => {
              t.bda && Io(t.bda), t.da && B(t.da);
              const n = e.props && e.props.onVnodeUnmounted;
              n && li(n, t.parent, e), (t.isDeactivated = !0);
            }, a);
        }),
        Jn(
          () => [e.include, e.exclude, e.matchBy],
          ([e, t]) => {
            e && p((t) => xo(e, t)), t && p((e) => !xo(t, e));
          },
          { flush: 'post', deep: !0 }
        );
      let h = null;
      const g = () => {
        null != h && r.set(h, Oo(n.subTree));
      };
      return (
        Bo(g),
        No(g),
        Fo(() => {
          r.forEach((t, o) => {
            r.delete(o), s(t);
            const { subTree: i, suspense: a } = n,
              l = Oo(i);
            if (t.type !== l.type || ('key' === e.matchBy && t.key !== l.key));
            else {
              l.component.bda && B(l.component.bda), Eo(l);
              const e = l.component.da;
              e && Mr(e, a);
            }
          });
        }),
        () => {
          if (((h = null), !t.default)) return null;
          const n = t.default(),
            o = n[0];
          if (n.length > 1) return (i = null), n;
          if (!Yr(o) || (!(4 & o.shapeFlag) && !Yn(o.type))) return (i = null), o;
          let s = Oo(o);
          const a = s.type,
            l = Lo(s, e.matchBy),
            { include: c, exclude: u } = e;
          if ((c && (!l || !xo(c, l))) || (u && l && xo(u, l))) return (i = s), o;
          const d = null == s.key ? a : s.key,
            f = r.get(d);
          return (
            s.el && ((s = ti(s)), Yn(o.type) && (o.ssContent = s)),
            (h = d),
            f &&
              ((s.el = f.el),
              (s.component = f.component),
              s.transition && fo(s, s.transition),
              (s.shapeFlag |= 512)),
            (s.shapeFlag |= 256),
            (i = s),
            Yn(o.type) ? o : s
          );
        }
      );
    }
  },
  wo = _o;
function xo(e, t) {
  return p(e) ? e.some((e) => xo(e, t)) : y(e) ? e.split(',').includes(t) : !!e.test && e.test(t);
}
function To(e, t) {
  Co(e, 'a', t);
}
function So(e, t) {
  Co(e, 'da', t);
}
function Co(e, t, n = di) {
  const o =
    e.__wdc ||
    (e.__wdc = () => {
      let t = n;
      for (; t; ) {
        if (t.isDeactivated) return;
        t = t.parent;
      }
      return e();
    });
  if (((o.__called = !1), Mo(t, o, n), n)) {
    let e = n.parent;
    for (; e && e.parent; ) yo(e.parent.vnode) && ko(o, t, n, e), (e = e.parent);
  }
}
function ko(e, t, n, o) {
  const r = Mo(t, e, o, !0);
  Do(() => {
    u(o[t], r);
  }, n);
}
function Eo(e) {
  (e.shapeFlag &= -257), (e.shapeFlag &= -513);
}
function Oo(e) {
  return Yn(e.type) ? e.ssContent : e;
}
function Lo(e, t) {
  if ('name' === t) {
    const t = e.type;
    return _i(go(e) ? t.__asyncResolved || {} : t);
  }
  return String(e.key);
}
function $o(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    n.__called || (n(), (n.__called = !0));
  }
}
function Io(e) {
  e.forEach((e) => (e.__called = !1));
}
function Mo(e, t, n = di, o = !1) {
  if (n) {
    if (((r = e), Le.indexOf(r) > -1 && n.$pageInstance)) {
      if (n.type.__reserved) return;
      if (
        n !== n.$pageInstance &&
        ((n = n.$pageInstance),
        (function (e) {
          return $e.indexOf(e) > -1;
        })(e))
      ) {
        const o = n.proxy;
        vn(t.bind(o), n, e, 'onLoad' === e ? [o.$page.options] : []);
      }
    }
    const i = n[e] || (n[e] = []),
      s =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return;
          et(), pi(n);
          const r = vn(t, n, e, o);
          return hi(), tt(), r;
        });
    return o ? i.unshift(s) : i.push(s), s;
  }
  var r;
}
const Ao =
    (e) =>
    (t, n = di) =>
      (!mi || 'sp' === e) && Mo(e, (...e) => t(...e), n),
  Po = Ao('bm'),
  Bo = Ao('m'),
  Ro = Ao('bu'),
  No = Ao('u'),
  Fo = Ao('bum'),
  Do = Ao('um'),
  jo = Ao('sp'),
  qo = Ao('rtg'),
  Vo = Ao('rtc');
function Wo(e, t = di) {
  Mo('ec', e, t);
}
function Ho(e, t) {
  const n = jn;
  if (null === n) return e;
  const r = bi(n) || n.proxy,
    i = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [e, n, a, l = o] = t[s];
    e &&
      (v(e) && (e = { mounted: e, updated: e }),
      e.deep && oo(n),
      i.push({ dir: e, instance: r, value: n, oldValue: void 0, arg: a, modifiers: l }));
  }
  return e;
}
function zo(e, t, n, o) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    i && (a.oldValue = i[s].value);
    let l = a.dir[o];
    l && (et(), vn(l, n, 8, [e.el, a, e, t]), tt());
  }
}
function Uo(e, t) {
  return Ko('components', e, !0, t) || e;
}
const Xo = Symbol();
function Yo(e) {
  return y(e) ? Ko('components', e, !1) || e : e || Xo;
}
function Ko(e, t, n = !0, o = !1) {
  const r = jn || di;
  if (r) {
    const n = r.type;
    if ('components' === e) {
      const e = _i(n, !1);
      if (e && (e === t || e === L(t) || e === M(L(t)))) return n;
    }
    const i = Go(r[e] || n[e], t) || Go(r.appContext[e], t);
    return !i && o ? n : i;
  }
}
function Go(e, t) {
  return e && (e[t] || e[L(t)] || e[M(L(t))]);
}
function Zo(e, t, n, o) {
  let r;
  const i = n && n[o];
  if (p(e) || y(e)) {
    r = new Array(e.length);
    for (let n = 0, o = e.length; n < o; n++) r[n] = t(e[n], n, void 0, i && i[n]);
  } else if ('number' == typeof e) {
    r = new Array(e);
    for (let n = 0; n < e; n++) r[n] = t(n + 1, n, void 0, i && i[n]);
  } else if (_(e))
    if (e[Symbol.iterator]) r = Array.from(e, (e, n) => t(e, n, void 0, i && i[n]));
    else {
      const n = Object.keys(e);
      r = new Array(n.length);
      for (let o = 0, s = n.length; o < s; o++) {
        const s = n[o];
        r[o] = t(e[s], s, o, i && i[o]);
      }
    }
  else r = [];
  return n && (n[o] = r), r;
}
function Qo(e, t, n = {}, o, r) {
  if (jn.isCE || (jn.parent && go(jn.parent) && jn.parent.isCE))
    return 'default' !== t && (n.name = t), ei('slot', n, o && o());
  let i = e[t];
  i && i._c && (i._d = !1), Vr();
  const s = i && Jo(i(n)),
    a = Xr(
      Rr,
      { key: n.key || (s && s.key) || `_${t}` },
      s || (o ? o() : []),
      s && 1 === e._ ? 64 : -2
    );
  return !r && a.scopeId && (a.slotScopeIds = [a.scopeId + '-s']), i && i._c && (i._d = !0), a;
}
function Jo(e) {
  return e.some((e) => !Yr(e) || (e.type !== Fr && !(e.type === Rr && !Jo(e.children)))) ? e : null;
}
const er = (e) => {
    if (!e) return null;
    if (gi(e)) {
      return bi(e) || e.proxy;
    }
    return er(e.parent);
  },
  tr = c(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => er(e.parent),
    $root: (e) => er(e.root),
    $emit: (e) => e.emit,
    $options: (e) => lr(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Ln(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = On.bind(e.proxy)),
    $watch: (e) => to.bind(e)
  }),
  nr = (e, t) => e !== o && !e.__isScriptSetup && f(e, t),
  or = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: i,
        props: s,
        accessCache: a,
        type: l,
        appContext: c
      } = e;
      let u;
      if ('$' !== t[0]) {
        const l = a[t];
        if (void 0 !== l)
          switch (l) {
            case 1:
              return r[t];
            case 2:
              return i[t];
            case 4:
              return n[t];
            case 3:
              return s[t];
          }
        else {
          if (nr(r, t)) return (a[t] = 1), r[t];
          if (i !== o && f(i, t)) return (a[t] = 2), i[t];
          if ((u = e.propsOptions[0]) && f(u, t)) return (a[t] = 3), s[t];
          if (n !== o && f(n, t)) return (a[t] = 4), n[t];
          rr && (a[t] = 0);
        }
      }
      const d = tr[t];
      let p, h;
      return d
        ? ('$attrs' === t && nt(e, 0, t), d(e))
        : (p = l.__cssModules) && (p = p[t])
        ? p
        : n !== o && f(n, t)
        ? ((a[t] = 4), n[t])
        : ((h = c.config.globalProperties), f(h, t) ? h[t] : void 0);
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: i, ctx: s } = e;
      return nr(i, t)
        ? ((i[t] = n), !0)
        : r !== o && f(r, t)
        ? ((r[t] = n), !0)
        : !f(e.props, t) && ('$' !== t[0] || !(t.slice(1) in e)) && ((s[t] = n), !0);
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: s } },
      a
    ) {
      let l;
      return (
        !!n[a] ||
        (e !== o && f(e, a)) ||
        nr(t, a) ||
        ((l = s[0]) && f(l, a)) ||
        f(r, a) ||
        f(tr, a) ||
        f(i.config.globalProperties, a)
      );
    },
    defineProperty(e, t, n) {
      return (
        null != n.get ? (e._.accessCache[t] = 0) : f(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    }
  };
let rr = !0;
function ir(e) {
  const t = lr(e),
    n = e.proxy,
    o = e.ctx;
  (rr = !1), t.beforeCreate && sr(t.beforeCreate, e, 'bc');
  const {
    data: r,
    computed: s,
    methods: a,
    watch: l,
    provide: c,
    inject: u,
    created: d,
    beforeMount: f,
    mounted: h,
    beforeUpdate: g,
    updated: m,
    activated: y,
    deactivated: b,
    beforeDestroy: w,
    beforeUnmount: x,
    destroyed: T,
    unmounted: S,
    render: C,
    renderTracked: k,
    renderTriggered: E,
    errorCaptured: O,
    serverPrefetch: L,
    expose: $,
    inheritAttrs: I,
    components: M,
    directives: A,
    filters: P
  } = t;
  if (
    (u &&
      (function (e, t, n = i, o = !1) {
        p(e) && (e = fr(e));
        for (const r in e) {
          const n = e[r];
          let i;
          (i = _(n) ? ('default' in n ? Gn(n.from || r, n.default, !0) : Gn(n.from || r)) : Gn(n)),
            sn(i) && o
              ? Object.defineProperty(t, r, {
                  enumerable: !0,
                  configurable: !0,
                  get: () => i.value,
                  set: (e) => (i.value = e)
                })
              : (t[r] = i);
        }
      })(u, o, null, e.appContext.config.unwrapInjectedRef),
    a)
  )
    for (const i in a) {
      const e = a[i];
      v(e) && (o[i] = e.bind(n));
    }
  if (r) {
    const t = r.call(n, n);
    _(t) && (e.data = Ut(t));
  }
  if (((rr = !0), s))
    for (const p in s) {
      const e = s[p],
        t = v(e) ? e.bind(n, n) : v(e.get) ? e.get.bind(n, n) : i,
        r = !v(e) && v(e.set) ? e.set.bind(n) : i,
        a = wi({ get: t, set: r });
      Object.defineProperty(o, p, {
        enumerable: !0,
        configurable: !0,
        get: () => a.value,
        set: (e) => (a.value = e)
      });
    }
  if (l) for (const i in l) ar(l[i], o, n, i);
  if (c) {
    const e = v(c) ? c.call(n) : c;
    Reflect.ownKeys(e).forEach((t) => {
      Kn(t, e[t]);
    });
  }
  function B(e, t) {
    p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
  }
  if (
    (d && sr(d, e, 'c'),
    B(Po, f),
    B(Bo, h),
    B(Ro, g),
    B(No, m),
    B(To, y),
    B(So, b),
    B(Wo, O),
    B(Vo, k),
    B(qo, E),
    B(Fo, x),
    B(Do, S),
    B(jo, L),
    p($))
  )
    if ($.length) {
      const t = e.exposed || (e.exposed = {});
      $.forEach((e) => {
        Object.defineProperty(t, e, { get: () => n[e], set: (t) => (n[e] = t) });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === i && (e.render = C),
    null != I && (e.inheritAttrs = I),
    M && (e.components = M),
    A && (e.directives = A);
  const R = e.appContext.config.globalProperties.$applyOptions;
  R && R(t, e, n);
}
function sr(e, t, n) {
  vn(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ar(e, t, n, o) {
  const r = o.includes('.') ? no(n, o) : () => n[o];
  if (y(e)) {
    const n = t[e];
    v(n) && Jn(r, n);
  } else if (v(e)) Jn(r, e.bind(n));
  else if (_(e))
    if (p(e)) e.forEach((e) => ar(e, t, n, o));
    else {
      const o = v(e.handler) ? e.handler.bind(n) : t[e.handler];
      v(o) && Jn(r, o, e);
    }
}
function lr(e) {
  const t = e.type,
    { mixins: n, extends: o } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: s }
    } = e.appContext,
    a = i.get(t);
  let l;
  return (
    a
      ? (l = a)
      : r.length || n || o
      ? ((l = {}), r.length && r.forEach((e) => cr(l, e, s, !0)), cr(l, t, s))
      : (l = t),
    _(t) && i.set(t, l),
    l
  );
}
function cr(e, t, n, o = !1) {
  const { mixins: r, extends: i } = t;
  i && cr(e, i, n, !0), r && r.forEach((t) => cr(e, t, n, !0));
  for (const s in t)
    if (o && 'expose' === s);
    else {
      const o = ur[s] || (n && n[s]);
      e[s] = o ? o(e[s], t[s]) : t[s];
    }
  return e;
}
const ur = {
  data: dr,
  props: hr,
  emits: hr,
  methods: hr,
  computed: hr,
  beforeCreate: pr,
  created: pr,
  beforeMount: pr,
  mounted: pr,
  beforeUpdate: pr,
  updated: pr,
  beforeDestroy: pr,
  beforeUnmount: pr,
  destroyed: pr,
  unmounted: pr,
  activated: pr,
  deactivated: pr,
  errorCaptured: pr,
  serverPrefetch: pr,
  components: hr,
  directives: hr,
  watch: function (e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = c(Object.create(null), e);
    for (const o in t) n[o] = pr(e[o], t[o]);
    return n;
  },
  provide: dr,
  inject: function (e, t) {
    return hr(fr(e), fr(t));
  }
};
function dr(e, t) {
  return t
    ? e
      ? function () {
          return c(v(e) ? e.call(this, this) : e, v(t) ? t.call(this, this) : t);
        }
      : t
    : e;
}
function fr(e) {
  if (p(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function pr(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function hr(e, t) {
  return e ? c(c(Object.create(null), e), t) : t;
}
function gr(e, t, n, o = !1) {
  const r = {},
    i = {};
  R(i, Gr, 1), (e.propsDefaults = Object.create(null)), mr(e, t, r, i);
  for (const s in e.propsOptions[0]) s in r || (r[s] = void 0);
  n ? (e.props = o ? r : Yt(r, !1, bt, Dt, Vt)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i);
}
function mr(e, t, n, r) {
  const [i, s] = e.propsOptions;
  let a,
    l = !1;
  if (t)
    for (let o in t) {
      if (k(o)) continue;
      const c = t[o];
      let u;
      i && f(i, (u = L(o)))
        ? s && s.includes(u)
          ? ((a || (a = {}))[u] = c)
          : (n[u] = c)
        : Dn(e.emitsOptions, o) || (o in r && c === r[o]) || ((r[o] = c), (l = !0));
    }
  if (s) {
    const t = Jt(n),
      r = a || o;
    for (let o = 0; o < s.length; o++) {
      const a = s[o];
      n[a] = vr(i, t, a, r[a], e, !f(r, a));
    }
  }
  return l;
}
function vr(e, t, n, o, r, i) {
  const s = e[n];
  if (null != s) {
    const e = f(s, 'default');
    if (e && void 0 === o) {
      const e = s.default;
      if (s.type !== Function && v(e)) {
        const { propsDefaults: i } = r;
        n in i ? (o = i[n]) : (pi(r), (o = i[n] = e.call(null, t)), hi());
      } else o = e;
    }
    s[0] && (i && !e ? (o = !1) : !s[1] || ('' !== o && o !== I(n)) || (o = !0));
  }
  return o;
}
function yr(e, t, n = !1) {
  const i = t.propsCache,
    s = i.get(e);
  if (s) return s;
  const a = e.props,
    l = {},
    u = [];
  let d = !1;
  if (!v(e)) {
    const o = (e) => {
      d = !0;
      const [n, o] = yr(e, t, !0);
      c(l, n), o && u.push(...o);
    };
    !n && t.mixins.length && t.mixins.forEach(o),
      e.extends && o(e.extends),
      e.mixins && e.mixins.forEach(o);
  }
  if (!a && !d) return _(e) && i.set(e, r), r;
  if (p(a))
    for (let r = 0; r < a.length; r++) {
      const e = L(a[r]);
      br(e) && (l[e] = o);
    }
  else if (a)
    for (const o in a) {
      const e = L(o);
      if (br(e)) {
        const t = a[o],
          n = (l[e] = p(t) || v(t) ? { type: t } : Object.assign({}, t));
        if (n) {
          const t = xr(Boolean, n.type),
            o = xr(String, n.type);
          (n[0] = t > -1), (n[1] = o < 0 || t < o), (t > -1 || f(n, 'default')) && u.push(e);
        }
      }
    }
  const h = [l, u];
  return _(e) && i.set(e, h), h;
}
function br(e) {
  return '$' !== e[0];
}
function _r(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : null === e ? 'null' : '';
}
function wr(e, t) {
  return _r(e) === _r(t);
}
function xr(e, t) {
  return p(t) ? t.findIndex((t) => wr(t, e)) : v(t) && wr(t, e) ? 0 : -1;
}
const Tr = (e) => '_' === e[0] || '$stable' === e,
  Sr = (e) => (p(e) ? e.map(ri) : [ri(e)]),
  Cr = (e, t, n) => {
    if (t._n) return t;
    const o = Wn((...e) => Sr(t(...e)), n);
    return (o._c = !1), o;
  },
  kr = (e, t, n) => {
    const o = e._ctx;
    for (const r in e) {
      if (Tr(r)) continue;
      const n = e[r];
      if (v(n)) t[r] = Cr(0, n, o);
      else if (null != n) {
        const e = Sr(n);
        t[r] = () => e;
      }
    }
  },
  Er = (e, t) => {
    const n = Sr(t);
    e.slots.default = () => n;
  };
function Or() {
  return {
    app: null,
    config: {
      isNativeTag: s,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  };
}
let Lr = 0;
function $r(e, t) {
  return function (n, o = null) {
    v(n) || (n = Object.assign({}, n)), null == o || _(o) || (o = null);
    const r = Or(),
      i = new Set();
    let s = !1;
    const a = (r.app = {
      _uid: Lr++,
      _component: n,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Ci,
      get config() {
        return r.config;
      },
      set config(e) {},
      use: (e, ...t) => (
        i.has(e) ||
          (e && v(e.install) ? (i.add(e), e.install(a, ...t)) : v(e) && (i.add(e), e(a, ...t))),
        a
      ),
      mixin: (e) => (r.mixins.includes(e) || r.mixins.push(e), a),
      component: (e, t) => (t ? ((r.components[e] = t), a) : r.components[e]),
      directive: (e, t) => (t ? ((r.directives[e] = t), a) : r.directives[e]),
      mount(i, l, c) {
        if (!s) {
          const u = ei(n, o);
          return (
            (u.appContext = r),
            l && t ? t(u, i) : e(u, i, c),
            (s = !0),
            (a._container = i),
            (i.__vue_app__ = a),
            (a._instance = u.component),
            bi(u.component) || u.component.proxy
          );
        }
      },
      unmount() {
        s && (e(null, a._container), delete a._container.__vue_app__);
      },
      provide: (e, t) => ((r.provides[e] = t), a)
    });
    return a;
  };
}
function Ir(e, t, n, r, i = !1) {
  if (p(e)) return void e.forEach((e, o) => Ir(e, t && (p(t) ? t[o] : t), n, r, i));
  if (go(r) && !i) return;
  const s = 4 & r.shapeFlag ? bi(r.component) || r.component.proxy : r.el,
    a = i ? null : s,
    { i: l, r: c } = e,
    d = t && t.r,
    h = l.refs === o ? (l.refs = {}) : l.refs,
    g = l.setupState;
  if (
    (null != d &&
      d !== c &&
      (y(d) ? ((h[d] = null), f(g, d) && (g[d] = null)) : sn(d) && (d.value = null)),
    v(c))
  )
    mn(c, l, 12, [a, h]);
  else {
    const t = y(c),
      o = sn(c);
    if (t || o) {
      const r = () => {
        if (e.f) {
          const n = t ? (f(g, c) ? g[c] : h[c]) : c.value;
          i
            ? p(n) && u(n, s)
            : p(n)
            ? n.includes(s) || n.push(s)
            : t
            ? ((h[c] = [s]), f(g, c) && (g[c] = h[c]))
            : ((c.value = [s]), e.k && (h[e.k] = c.value));
        } else t ? ((h[c] = a), f(g, c) && (g[c] = a)) : o && ((c.value = a), e.k && (h[e.k] = a));
      };
      a ? ((r.id = -1), Mr(r, n)) : r();
    }
  }
}
const Mr = function (e, t) {
  var n;
  t && t.pendingBranch
    ? p(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : (p((n = e))
        ? Tn.push(...n)
        : (Sn && Sn.includes(n, n.allowRecurse ? Cn + 1 : Cn)) || Tn.push(n),
      $n());
};
function Ar(e) {
  return (function (e, t) {
    (
      F ||
      (F =
        'undefined' != typeof globalThis
          ? globalThis
          : 'undefined' != typeof self
          ? self
          : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
          ? global
          : {})
    ).__VUE__ = !0;
    const {
        insert: n,
        remove: s,
        patchProp: a,
        forcePatchProp: l,
        createElement: u,
        createText: d,
        createComment: p,
        setText: h,
        setElementText: g,
        parentNode: m,
        nextSibling: v,
        setScopeId: y = i,
        insertStaticContent: b
      } = e,
      _ = (e, t, n, o = null, r = null, i = null, s = !1, a = null, l = !!t.dynamicChildren) => {
        if (e === t) return;
        e && !Kr(e, t) && ((o = te(e)), G(e, r, i, !0), (e = null)),
          -2 === t.patchFlag && ((l = !1), (t.dynamicChildren = null));
        const { type: c, ref: u, shapeFlag: d } = t;
        switch (c) {
          case Nr:
            x(e, t, n, o);
            break;
          case Fr:
            T(e, t, n, o);
            break;
          case Dr:
            null == e && S(t, n, o, s);
            break;
          case Rr:
            j(e, t, n, o, r, i, s, a, l);
            break;
          default:
            1 & d
              ? O(e, t, n, o, r, i, s, a, l)
              : 6 & d
              ? q(e, t, n, o, r, i, s, a, l)
              : (64 & d || 128 & d) && c.process(e, t, n, o, r, i, s, a, l, oe);
        }
        null != u && r && Ir(u, e && e.ref, i, t || e, !t);
      },
      x = (e, t, o, r) => {
        if (null == e) n((t.el = d(t.children)), o, r);
        else {
          const n = (t.el = e.el);
          t.children !== e.children && h(n, t.children);
        }
      },
      T = (e, t, o, r) => {
        null == e ? n((t.el = p(t.children || '')), o, r) : (t.el = e.el);
      },
      S = (e, t, n, o) => {
        [e.el, e.anchor] = b(e.children, t, n, o, e.el, e.anchor);
      },
      C = ({ el: e, anchor: t }, o, r) => {
        let i;
        for (; e && e !== t; ) (i = v(e)), n(e, o, r), (e = i);
        n(t, o, r);
      },
      E = ({ el: e, anchor: t }) => {
        let n;
        for (; e && e !== t; ) (n = v(e)), s(e), (e = n);
        s(t);
      },
      O = (e, t, n, o, r, i, s, a, l) => {
        (s = s || 'svg' === t.type), null == e ? $(t, n, o, r, i, s, a, l) : P(e, t, r, i, s, a, l);
      },
      $ = (e, t, o, r, i, s, l, c) => {
        let d, f;
        const { type: p, props: h, shapeFlag: m, transition: v, dirs: y } = e;
        if (
          ((d = e.el = u(e.type, s, h && h.is, h)),
          8 & m
            ? g(d, e.children)
            : 16 & m && A(e.children, d, null, r, i, s && 'foreignObject' !== p, l, c),
          y && zo(e, null, r, 'created'),
          M(d, e, e.scopeId, l, r),
          h)
        ) {
          for (const t in h) 'value' === t || k(t) || a(d, t, null, h[t], s, e.children, r, i, ee);
          'value' in h && a(d, 'value', null, h.value), (f = h.onVnodeBeforeMount) && li(f, r, e);
        }
        Object.defineProperty(d, '__vueParentComponent', { value: r, enumerable: !1 }),
          y && zo(e, null, r, 'beforeMount');
        const b = (!i || (i && !i.pendingBranch)) && v && !v.persisted;
        b && v.beforeEnter(d),
          n(d, t, o),
          ((f = h && h.onVnodeMounted) || b || y) &&
            Mr(() => {
              f && li(f, r, e), b && v.enter(d), y && zo(e, null, r, 'mounted');
            }, i);
      },
      M = (e, t, n, o, r) => {
        if ((n && y(e, n), o)) for (let i = 0; i < o.length; i++) y(e, o[i]);
        if (r) {
          if (t === r.subTree) {
            const t = r.vnode;
            M(e, t, t.scopeId, t.slotScopeIds, r.parent);
          }
        }
      },
      A = (e, t, n, o, r, i, s, a, l = 0) => {
        for (let c = l; c < e.length; c++) {
          const l = (e[c] = a ? ii(e[c]) : ri(e[c]));
          _(null, l, t, n, o, r, i, s, a);
        }
      },
      P = (e, t, n, r, i, s, c) => {
        const u = (t.el = e.el);
        let { patchFlag: d, dynamicChildren: f, dirs: p } = t;
        d |= 16 & e.patchFlag;
        const h = e.props || o,
          m = t.props || o;
        let v;
        n && Pr(n, !1),
          (v = m.onVnodeBeforeUpdate) && li(v, n, t, e),
          p && zo(t, e, n, 'beforeUpdate'),
          n && Pr(n, !0);
        const y = i && 'foreignObject' !== t.type;
        if (
          (f ? N(e.dynamicChildren, f, u, n, r, y, s) : c || U(e, t, u, null, n, r, y, s, !1),
          d > 0)
        ) {
          if (16 & d) D(u, t, h, m, n, r, i);
          else if (
            (2 & d && h.class !== m.class && a(u, 'class', null, m.class, i),
            4 & d && a(u, 'style', h.style, m.style, i),
            8 & d)
          ) {
            const o = t.dynamicProps;
            for (let t = 0; t < o.length; t++) {
              const s = o[t],
                c = h[s],
                d = m[s];
              (d !== c || 'value' === s || (l && l(u, s))) &&
                a(u, s, c, d, i, e.children, n, r, ee);
            }
          }
          1 & d && e.children !== t.children && g(u, t.children);
        } else c || null != f || D(u, t, h, m, n, r, i);
        ((v = m.onVnodeUpdated) || p) &&
          Mr(() => {
            v && li(v, n, t, e), p && zo(t, e, n, 'updated');
          }, r);
      },
      N = (e, t, n, o, r, i, s) => {
        for (let a = 0; a < t.length; a++) {
          const l = e[a],
            c = t[a],
            u = l.el && (l.type === Rr || !Kr(l, c) || 70 & l.shapeFlag) ? m(l.el) : n;
          _(l, c, u, null, o, r, i, s, !0);
        }
      },
      D = (e, t, n, r, i, s, c) => {
        if (n !== r) {
          if (n !== o)
            for (const o in n) k(o) || o in r || a(e, o, n[o], null, c, t.children, i, s, ee);
          for (const o in r) {
            if (k(o)) continue;
            const u = r[o],
              d = n[o];
            ((u !== d && 'value' !== o) || (l && l(e, o))) &&
              a(e, o, d, u, c, t.children, i, s, ee);
          }
          'value' in r && a(e, 'value', n.value, r.value);
        }
      },
      j = (e, t, o, r, i, s, a, l, c) => {
        const u = (t.el = e ? e.el : d('')),
          f = (t.anchor = e ? e.anchor : d(''));
        let { patchFlag: p, dynamicChildren: h, slotScopeIds: g } = t;
        g && (l = l ? l.concat(g) : g),
          null == e
            ? (n(u, o, r), n(f, o, r), A(t.children || [], o, f, i, s, a, l, c))
            : p > 0 && 64 & p && h && e.dynamicChildren
            ? (N(e.dynamicChildren, h, o, i, s, a, l),
              (null != t.key || (i && t === i.subTree)) && Br(e, t, !0))
            : U(e, t, o, f, i, s, a, l, c);
      },
      q = (e, t, n, o, r, i, s, a, l) => {
        (t.slotScopeIds = a),
          null == e
            ? 512 & t.shapeFlag
              ? r.ctx.activate(t, n, o, s, l)
              : V(t, n, o, r, i, s, l)
            : W(e, t, l);
      },
      V = (e, t, n, r, i, s, a) => {
        const l = (e.component = (function (e, t, n) {
          const r = e.type,
            i = (t ? t.appContext : e.appContext) || ci,
            s = {
              uid: ui++,
              vnode: e,
              type: r,
              parent: t,
              appContext: i,
              root: null,
              next: null,
              subTree: null,
              effect: null,
              update: null,
              scope: new De(!0),
              render: null,
              proxy: null,
              exposed: null,
              exposeProxy: null,
              withProxy: null,
              provides: t ? t.provides : Object.create(i.provides),
              accessCache: null,
              renderCache: [],
              components: null,
              directives: null,
              propsOptions: yr(r, i),
              emitsOptions: Fn(r, i),
              emit: null,
              emitted: null,
              propsDefaults: o,
              inheritAttrs: r.inheritAttrs,
              ctx: o,
              data: o,
              props: o,
              attrs: o,
              slots: o,
              refs: o,
              setupState: o,
              setupContext: null,
              suspense: n,
              suspenseId: n ? n.pendingId : 0,
              asyncDep: null,
              asyncResolved: !1,
              isMounted: !1,
              isUnmounted: !1,
              isDeactivated: !1,
              bc: null,
              c: null,
              bm: null,
              m: null,
              bu: null,
              u: null,
              um: null,
              bum: null,
              bda: null,
              da: null,
              ba: null,
              a: null,
              rtg: null,
              rtc: null,
              ec: null,
              sp: null
            };
          (s.ctx = { _: s }),
            (s.root = t ? t.root : s),
            (s.emit = Rn.bind(null, s)),
            (s.$pageInstance = t && t.$pageInstance),
            e.ce && e.ce(s);
          return s;
        })(e, r, i));
        if (
          (yo(e) && (l.ctx.renderer = oe),
          (function (e, t = !1) {
            mi = t;
            const { props: n, children: o } = e.vnode,
              r = gi(e);
            gr(e, n, r, t),
              ((e, t) => {
                if (32 & e.vnode.shapeFlag) {
                  const n = t._;
                  n ? ((e.slots = Jt(t)), R(t, '_', n)) : kr(t, (e.slots = {}));
                } else (e.slots = {}), t && Er(e, t);
                R(e.slots, Gr, 1);
              })(e, o);
            const i = r
              ? (function (e, t) {
                  const n = e.type;
                  (e.accessCache = Object.create(null)), (e.proxy = en(new Proxy(e.ctx, or)));
                  const { setup: o } = n;
                  if (o) {
                    const n = (e.setupContext =
                      o.length > 1
                        ? (function (e) {
                            const t = (t) => {
                              e.exposed = t || {};
                            };
                            let n;
                            return {
                              get attrs() {
                                return (
                                  n ||
                                  (n = (function (e) {
                                    return new Proxy(e.attrs, {
                                      get: (t, n) => (nt(e, 0, '$attrs'), t[n])
                                    });
                                  })(e))
                                );
                              },
                              slots: e.slots,
                              emit: e.emit,
                              expose: t
                            };
                          })(e)
                        : null);
                    pi(e), et();
                    const r = mn(o, e, 0, [e.props, n]);
                    if ((tt(), hi(), w(r))) {
                      if ((r.then(hi, hi), t))
                        return r
                          .then((n) => {
                            vi(e, n, t);
                          })
                          .catch((t) => {
                            yn(t, e, 0);
                          });
                      e.asyncDep = r;
                    } else vi(e, r, t);
                  } else yi(e, t);
                })(e, t)
              : void 0;
            mi = !1;
          })(l),
          l.asyncDep)
        ) {
          if ((i && i.registerDep(l, H), !e.el)) {
            const e = (l.subTree = ei(Fr));
            T(null, e, t, n);
          }
        } else H(l, e, t, n, i, s, a);
      },
      W = (e, t, n) => {
        const o = (t.component = e.component);
        if (
          (function (e, t, n) {
            const { props: o, children: r, component: i } = e,
              { props: s, children: a, patchFlag: l } = t,
              c = i.emitsOptions;
            if (t.dirs || t.transition) return !0;
            if (!(n && l >= 0))
              return (
                !((!r && !a) || (a && a.$stable)) || (o !== s && (o ? !s || Xn(o, s, c) : !!s))
              );
            if (1024 & l) return !0;
            if (16 & l) return o ? Xn(o, s, c) : !!s;
            if (8 & l) {
              const e = t.dynamicProps;
              for (let t = 0; t < e.length; t++) {
                const n = e[t];
                if (s[n] !== o[n] && !Dn(c, n)) return !0;
              }
            }
            return !1;
          })(e, t, n)
        ) {
          if (o.asyncDep && !o.asyncResolved) return void z(o, t, n);
          (o.next = t),
            (function (e) {
              const t = wn.indexOf(e);
              t > xn && wn.splice(t, 1);
            })(o.update),
            o.update();
        } else (t.el = e.el), (o.vnode = t);
      },
      H = (e, t, n, o, r, i, s) => {
        const a = () => {
            if (e.isMounted) {
              let t,
                { next: n, bu: o, u: a, parent: l, vnode: c } = e,
                u = n;
              Pr(e, !1),
                n ? ((n.el = c.el), z(e, n, s)) : (n = c),
                o && B(o),
                (t = n.props && n.props.onVnodeBeforeUpdate) && li(t, l, n, c),
                Pr(e, !0);
              const d = Hn(e),
                f = e.subTree;
              (e.subTree = d),
                _(f, d, m(f.el), te(f), e, r, i),
                (n.el = d.el),
                null === u &&
                  (function ({ vnode: e, parent: t }, n) {
                    for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
                  })(e, d.el),
                a && Mr(a, r),
                (t = n.props && n.props.onVnodeUpdated) && Mr(() => li(t, l, n, c), r);
            } else {
              let s;
              const { el: a, props: l } = t,
                { bm: c, m: u, parent: d } = e,
                f = go(t);
              if (
                (Pr(e, !1),
                c && B(c),
                !f && (s = l && l.onVnodeBeforeMount) && li(s, d, t),
                Pr(e, !0),
                a && ie)
              ) {
                const n = () => {
                  (e.subTree = Hn(e)), ie(a, e.subTree, e, r, null);
                };
                f ? t.type.__asyncLoader().then(() => !e.isUnmounted && n()) : n();
              } else {
                const s = (e.subTree = Hn(e));
                _(null, s, n, o, e, r, i), (t.el = s.el);
              }
              if ((u && Mr(u, r), !f && (s = l && l.onVnodeMounted))) {
                const e = t;
                Mr(() => li(s, d, e), r);
              }
              const { ba: p, a: h } = e;
              (256 & t.shapeFlag || (d && go(d.vnode) && 256 & d.vnode.shapeFlag)) &&
                (p && $o(p), h && Mr(h, r), p && Mr(() => Io(p), r)),
                (e.isMounted = !0),
                (t = n = o = null);
            }
          },
          l = (e.effect = new Ge(a, () => Ln(c), e.scope)),
          c = (e.update = () => l.run());
        (c.id = e.uid), Pr(e, !0), c();
      },
      z = (e, t, n) => {
        t.component = e;
        const r = e.vnode.props;
        (e.vnode = t),
          (e.next = null),
          (function (e, t, n, o) {
            const {
                props: r,
                attrs: i,
                vnode: { patchFlag: s }
              } = e,
              a = Jt(r),
              [l] = e.propsOptions;
            let c = !1;
            if (!(o || s > 0) || 16 & s) {
              let o;
              mr(e, t, r, i) && (c = !0);
              for (const i in a)
                (t && (f(t, i) || ((o = I(i)) !== i && f(t, o)))) ||
                  (l
                    ? !n ||
                      (void 0 === n[i] && void 0 === n[o]) ||
                      (r[i] = vr(l, a, i, void 0, e, !0))
                    : delete r[i]);
              if (i !== a) for (const e in i) (t && f(t, e)) || (delete i[e], (c = !0));
            } else if (8 & s) {
              const n = e.vnode.dynamicProps;
              for (let o = 0; o < n.length; o++) {
                let s = n[o];
                if (Dn(e.emitsOptions, s)) continue;
                const u = t[s];
                if (l)
                  if (f(i, s)) u !== i[s] && ((i[s] = u), (c = !0));
                  else {
                    const t = L(s);
                    r[t] = vr(l, a, t, u, e, !1);
                  }
                else u !== i[s] && ((i[s] = u), (c = !0));
              }
            }
            c && rt(e, 'set', '$attrs');
          })(e, t.props, r, n),
          ((e, t, n) => {
            const { vnode: r, slots: i } = e;
            let s = !0,
              a = o;
            if (32 & r.shapeFlag) {
              const e = t._;
              e
                ? n && 1 === e
                  ? (s = !1)
                  : (c(i, t), n || 1 !== e || delete i._)
                : ((s = !t.$stable), kr(t, i)),
                (a = t);
            } else t && (Er(e, t), (a = { default: 1 }));
            if (s) for (const o in i) Tr(o) || o in a || delete i[o];
          })(e, t.children, n),
          et(),
          In(),
          tt();
      },
      U = (e, t, n, o, r, i, s, a, l = !1) => {
        const c = e && e.children,
          u = e ? e.shapeFlag : 0,
          d = t.children,
          { patchFlag: f, shapeFlag: p } = t;
        if (f > 0) {
          if (128 & f) return void Y(c, d, n, o, r, i, s, a, l);
          if (256 & f) return void X(c, d, n, o, r, i, s, a, l);
        }
        8 & p
          ? (16 & u && ee(c, r, i), d !== c && g(n, d))
          : 16 & u
          ? 16 & p
            ? Y(c, d, n, o, r, i, s, a, l)
            : ee(c, r, i, !0)
          : (8 & u && g(n, ''), 16 & p && A(d, n, o, r, i, s, a, l));
      },
      X = (e, t, n, o, i, s, a, l, c) => {
        t = t || r;
        const u = (e = e || r).length,
          d = t.length,
          f = Math.min(u, d);
        let p;
        for (p = 0; p < f; p++) {
          const o = (t[p] = c ? ii(t[p]) : ri(t[p]));
          _(e[p], o, n, null, i, s, a, l, c);
        }
        u > d ? ee(e, i, s, !0, !1, f) : A(t, n, o, i, s, a, l, c, f);
      },
      Y = (e, t, n, o, i, s, a, l, c) => {
        let u = 0;
        const d = t.length;
        let f = e.length - 1,
          p = d - 1;
        for (; u <= f && u <= p; ) {
          const o = e[u],
            r = (t[u] = c ? ii(t[u]) : ri(t[u]));
          if (!Kr(o, r)) break;
          _(o, r, n, null, i, s, a, l, c), u++;
        }
        for (; u <= f && u <= p; ) {
          const o = e[f],
            r = (t[p] = c ? ii(t[p]) : ri(t[p]));
          if (!Kr(o, r)) break;
          _(o, r, n, null, i, s, a, l, c), f--, p--;
        }
        if (u > f) {
          if (u <= p) {
            const e = p + 1,
              r = e < d ? t[e].el : o;
            for (; u <= p; ) _(null, (t[u] = c ? ii(t[u]) : ri(t[u])), n, r, i, s, a, l, c), u++;
          }
        } else if (u > p) for (; u <= f; ) G(e[u], i, s, !0), u++;
        else {
          const h = u,
            g = u,
            m = new Map();
          for (u = g; u <= p; u++) {
            const e = (t[u] = c ? ii(t[u]) : ri(t[u]));
            null != e.key && m.set(e.key, u);
          }
          let v,
            y = 0;
          const b = p - g + 1;
          let w = !1,
            x = 0;
          const T = new Array(b);
          for (u = 0; u < b; u++) T[u] = 0;
          for (u = h; u <= f; u++) {
            const o = e[u];
            if (y >= b) {
              G(o, i, s, !0);
              continue;
            }
            let r;
            if (null != o.key) r = m.get(o.key);
            else
              for (v = g; v <= p; v++)
                if (0 === T[v - g] && Kr(o, t[v])) {
                  r = v;
                  break;
                }
            void 0 === r
              ? G(o, i, s, !0)
              : ((T[r - g] = u + 1),
                r >= x ? (x = r) : (w = !0),
                _(o, t[r], n, null, i, s, a, l, c),
                y++);
          }
          const S = w
            ? (function (e) {
                const t = e.slice(),
                  n = [0];
                let o, r, i, s, a;
                const l = e.length;
                for (o = 0; o < l; o++) {
                  const l = e[o];
                  if (0 !== l) {
                    if (((r = n[n.length - 1]), e[r] < l)) {
                      (t[o] = r), n.push(o);
                      continue;
                    }
                    for (i = 0, s = n.length - 1; i < s; )
                      (a = (i + s) >> 1), e[n[a]] < l ? (i = a + 1) : (s = a);
                    l < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), (n[i] = o));
                  }
                }
                (i = n.length), (s = n[i - 1]);
                for (; i-- > 0; ) (n[i] = s), (s = t[s]);
                return n;
              })(T)
            : r;
          for (v = S.length - 1, u = b - 1; u >= 0; u--) {
            const e = g + u,
              r = t[e],
              f = e + 1 < d ? t[e + 1].el : o;
            0 === T[u]
              ? _(null, r, n, f, i, s, a, l, c)
              : w && (v < 0 || u !== S[v] ? K(r, n, f, 2) : v--);
          }
        }
      },
      K = (e, t, o, r, i = null) => {
        const { el: s, type: a, transition: l, children: c, shapeFlag: u } = e;
        if (6 & u) return void K(e.component.subTree, t, o, r);
        if (128 & u) return void e.suspense.move(t, o, r);
        if (64 & u) return void a.move(e, t, o, oe);
        if (a === Rr) {
          n(s, t, o);
          for (let e = 0; e < c.length; e++) K(c[e], t, o, r);
          return void n(e.anchor, t, o);
        }
        if (a === Dr) return void C(e, t, o);
        if (2 !== r && 1 & u && l)
          if (0 === r) l.beforeEnter(s), n(s, t, o), Mr(() => l.enter(s), i);
          else {
            const { leave: e, delayLeave: r, afterLeave: i } = l,
              a = () => n(s, t, o),
              c = () => {
                e(s, () => {
                  a(), i && i();
                });
              };
            r ? r(s, a, c) : c();
          }
        else n(s, t, o);
      },
      G = (e, t, n, o = !1, r = !1) => {
        const {
          type: i,
          props: s,
          ref: a,
          children: l,
          dynamicChildren: c,
          shapeFlag: u,
          patchFlag: d,
          dirs: f
        } = e;
        if ((null != a && Ir(a, null, n, e, !0), 256 & u)) return void t.ctx.deactivate(e);
        const p = 1 & u && f,
          h = !go(e);
        let g;
        if ((h && (g = s && s.onVnodeBeforeUnmount) && li(g, t, e), 6 & u)) J(e.component, n, o);
        else {
          if (128 & u) return void e.suspense.unmount(n, o);
          p && zo(e, null, t, 'beforeUnmount'),
            64 & u
              ? e.type.remove(e, t, n, r, oe, o)
              : c && (i !== Rr || (d > 0 && 64 & d))
              ? ee(c, t, n, !1, !0)
              : ((i === Rr && 384 & d) || (!r && 16 & u)) && ee(l, t, n),
            o && Z(e);
        }
        ((h && (g = s && s.onVnodeUnmounted)) || p) &&
          Mr(() => {
            g && li(g, t, e), p && zo(e, null, t, 'unmounted');
          }, n);
      },
      Z = (e) => {
        const { type: t, el: n, anchor: o, transition: r } = e;
        if (t === Rr) return void Q(n, o);
        if (t === Dr) return void E(e);
        const i = () => {
          s(n), r && !r.persisted && r.afterLeave && r.afterLeave();
        };
        if (1 & e.shapeFlag && r && !r.persisted) {
          const { leave: t, delayLeave: o } = r,
            s = () => t(n, i);
          o ? o(e.el, i, s) : s();
        } else i();
      },
      Q = (e, t) => {
        let n;
        for (; e !== t; ) (n = v(e)), s(e), (e = n);
        s(t);
      },
      J = (e, t, n) => {
        const { bum: o, scope: r, update: i, subTree: s, um: a } = e;
        o && B(o),
          r.stop(),
          i && ((i.active = !1), G(s, e, t, n)),
          a && Mr(a, t),
          Mr(() => {
            e.isUnmounted = !0;
          }, t),
          t &&
            t.pendingBranch &&
            !t.isUnmounted &&
            e.asyncDep &&
            !e.asyncResolved &&
            e.suspenseId === t.pendingId &&
            (t.deps--, 0 === t.deps && t.resolve());
      },
      ee = (e, t, n, o = !1, r = !1, i = 0) => {
        for (let s = i; s < e.length; s++) G(e[s], t, n, o, r);
      },
      te = (e) =>
        6 & e.shapeFlag
          ? te(e.component.subTree)
          : 128 & e.shapeFlag
          ? e.suspense.next()
          : v(e.anchor || e.el),
      ne = (e, t, n) => {
        null == e
          ? t._vnode && G(t._vnode, null, null, !0)
          : _(t._vnode || null, e, t, null, null, null, n),
          In(),
          Mn(),
          (t._vnode = e);
      },
      oe = { p: _, um: G, m: K, r: Z, mt: V, mc: A, pc: U, pbc: N, n: te, o: e };
    let re, ie;
    t && ([re, ie] = t(oe));
    return { render: ne, hydrate: re, createApp: $r(ne, re) };
  })(e);
}
function Pr({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Br(e, t, n = !1) {
  const o = e.children,
    r = t.children;
  if (p(o) && p(r))
    for (let i = 0; i < o.length; i++) {
      const e = o[i];
      let t = r[i];
      1 & t.shapeFlag &&
        !t.dynamicChildren &&
        ((t.patchFlag <= 0 || 32 === t.patchFlag) && ((t = r[i] = ii(r[i])), (t.el = e.el)),
        n || Br(e, t)),
        t.type === Nr && (t.el = e.el);
    }
}
const Rr = Symbol(void 0),
  Nr = Symbol(void 0),
  Fr = Symbol(void 0),
  Dr = Symbol(void 0),
  jr = [];
let qr = null;
function Vr(e = !1) {
  jr.push((qr = e ? null : []));
}
let Wr = 1;
function Hr(e) {
  Wr += e;
}
function zr(e) {
  return (
    (e.dynamicChildren = Wr > 0 ? qr || r : null),
    jr.pop(),
    (qr = jr[jr.length - 1] || null),
    Wr > 0 && qr && qr.push(e),
    e
  );
}
function Ur(e, t, n, o, r, i) {
  return zr(Jr(e, t, n, o, r, i, !0));
}
function Xr(e, t, n, o, r) {
  return zr(ei(e, t, n, o, r, !0));
}
function Yr(e) {
  return !!e && !0 === e.__v_isVNode;
}
function Kr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Gr = '__vInternal',
  Zr = ({ key: e }) => (null != e ? e : null),
  Qr = ({ ref: e, ref_key: t, ref_for: n }) =>
    null != e ? (y(e) || sn(e) || v(e) ? { i: jn, r: e, k: t, f: !!n } : e) : null;
function Jr(e, t = null, n = null, o = 0, r = null, i = e === Rr ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Zr(t),
    ref: t && Qr(t),
    scopeId: qn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: jn
  };
  return (
    a ? (si(l, n), 128 & i && e.normalize(l)) : n && (l.shapeFlag |= y(n) ? 8 : 16),
    Wr > 0 && !s && qr && (l.patchFlag > 0 || 6 & i) && 32 !== l.patchFlag && qr.push(l),
    l
  );
}
const ei = function (e, t = null, n = null, o = 0, r = null, i = !1) {
  (e && e !== Xo) || (e = Fr);
  if (Yr(e)) {
    const o = ti(e, t, !0);
    return (
      n && si(o, n),
      Wr > 0 && !i && qr && (6 & o.shapeFlag ? (qr[qr.indexOf(e)] = o) : qr.push(o)),
      (o.patchFlag |= -2),
      o
    );
  }
  (s = e), v(s) && '__vccOpts' in s && (e = e.__vccOpts);
  var s;
  if (t) {
    t = (function (e) {
      return e ? (Qt(e) || Gr in e ? c({}, e) : e) : null;
    })(t);
    let { class: e, style: n } = t;
    e && !y(e) && (t.class = pe(e)), _(n) && (Qt(n) && !p(n) && (n = c({}, n)), (t.style = fe(n)));
  }
  const a = y(e) ? 1 : Yn(e) ? 128 : ((e) => e.__isTeleport)(e) ? 64 : _(e) ? 4 : v(e) ? 2 : 0;
  return Jr(e, t, n, o, r, a, i, !0);
};
function ti(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: i, children: s } = e,
    a = t ? ai(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Zr(a),
    ref: t && t.ref ? (n && r ? (p(r) ? r.concat(Qr(t)) : [r, Qr(t)]) : Qr(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Rr ? (-1 === i ? 16 : 16 | i) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ti(e.ssContent),
    ssFallback: e.ssFallback && ti(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function ni(e = ' ', t = 0) {
  return ei(Nr, null, e, t);
}
function oi(e = '', t = !1) {
  return t ? (Vr(), Xr(Fr, null, e)) : ei(Fr, null, e);
}
function ri(e) {
  return null == e || 'boolean' == typeof e
    ? ei(Fr)
    : p(e)
    ? ei(Rr, null, e.slice())
    : 'object' == typeof e
    ? ii(e)
    : ei(Nr, null, String(e));
}
function ii(e) {
  return (null === e.el && -1 !== e.patchFlag) || e.memo ? e : ti(e);
}
function si(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (null == t) t = null;
  else if (p(t)) n = 16;
  else if ('object' == typeof t) {
    if (65 & o) {
      const n = t.default;
      return void (n && (n._c && (n._d = !1), si(e, n()), n._c && (n._d = !0)));
    }
    {
      n = 32;
      const o = t._;
      o || Gr in t
        ? 3 === o && jn && (1 === jn.slots._ ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
        : (t._ctx = jn);
    }
  } else
    v(t)
      ? ((t = { default: t, _ctx: jn }), (n = 32))
      : ((t = String(t)), 64 & o ? ((n = 16), (t = [ni(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function ai(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const e in o)
      if ('class' === e) t.class !== o.class && (t.class = pe([t.class, o.class]));
      else if ('style' === e) t.style = fe([t.style, o.style]);
      else if (a(e)) {
        const n = t[e],
          r = o[e];
        !r || n === r || (p(n) && n.includes(r)) || (t[e] = n ? [].concat(n, r) : r);
      } else '' !== e && (t[e] = o[e]);
  }
  return t;
}
function li(e, t, n, o = null) {
  vn(e, t, 7, [n, o]);
}
const ci = Or();
let ui = 0;
let di = null;
const fi = () => di || jn,
  pi = (e) => {
    (di = e), e.scope.on();
  },
  hi = () => {
    di && di.scope.off(), (di = null);
  };
function gi(e) {
  return 4 & e.vnode.shapeFlag;
}
let mi = !1;
function vi(e, t, n) {
  v(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : _(t) && (e.setupState = pn(t)),
    yi(e, n);
}
function yi(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || i), pi(e), et(), ir(e), tt(), hi();
}
function bi(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(pn(en(e.exposed)), {
        get: (t, n) => (n in t ? t[n] : n in tr ? tr[n](e) : void 0),
        has: (e, t) => t in e || t in tr
      }))
    );
}
function _i(e, t = !0) {
  return v(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
const wi = (e, t) =>
  (function (e, t, n = !1) {
    let o, r;
    const s = v(e);
    return s ? ((o = e), (r = i)) : ((o = e.get), (r = e.set)), new gn(o, r, s || !r, n);
  })(e, 0, mi);
function xi(e, t, n) {
  const o = arguments.length;
  return 2 === o
    ? _(t) && !p(t)
      ? Yr(t)
        ? ei(e, null, [t])
        : ei(e, t)
      : ei(e, null, t)
    : (o > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : 3 === o && Yr(n) && (n = [n]),
      ei(e, t, n));
}
const Ti = Symbol(''),
  Si = () => Gn(Ti),
  Ci = '3.2.47',
  ki = 'undefined' != typeof document ? document : null,
  Ei = ki && ki.createElement('template'),
  Oi = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, o) => {
      const r = t
        ? ki.createElementNS('http://www.w3.org/2000/svg', e)
        : n
        ? ki.createElement(e, { is: n })
        : ki.createElement(e);
      return 'select' === e && o && null != o.multiple && r.setAttribute('multiple', o.multiple), r;
    },
    createText: (e) => ki.createTextNode(e),
    createComment: (e) => ki.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => ki.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, o, r, i) {
      const s = n ? n.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling))
        for (; t.insertBefore(r.cloneNode(!0), n), r !== i && (r = r.nextSibling); );
      else {
        Ei.innerHTML = o ? `<svg>${e}</svg>` : e;
        const r = Ei.content;
        if (o) {
          const e = r.firstChild;
          for (; e.firstChild; ) r.appendChild(e.firstChild);
          r.removeChild(e);
        }
        t.insertBefore(r, n);
      }
      return [s ? s.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
    }
  };
const Li = /\s*!important$/;
function $i(e, t, n) {
  if (p(n)) n.forEach((n) => $i(e, t, n));
  else if ((null == n && (n = ''), (n = ji(n)), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const o = (function (e, t) {
      const n = Mi[t];
      if (n) return n;
      let o = L(t);
      if ('filter' !== o && o in e) return (Mi[t] = o);
      o = M(o);
      for (let r = 0; r < Ii.length; r++) {
        const n = Ii[r] + o;
        if (n in e) return (Mi[t] = n);
      }
      return t;
    })(e, t);
    Li.test(n) ? e.setProperty(I(o), n.replace(Li, ''), 'important') : (e[o] = n);
  }
}
const Ii = ['Webkit', 'Moz', 'ms'],
  Mi = {};
const {
    unit: Ai,
    unitRatio: Pi,
    unitPrecision: Bi
  } = { unit: 'rem', unitRatio: 10 / 320, unitPrecision: 5 },
  Ri =
    ((Ni = Ai),
    (Fi = Pi),
    (Di = Bi),
    (e) =>
      e.replace(_e, (e, t) => {
        if (!t) return e;
        if (1 === Fi) return `${t}${Ni}`;
        const n = (function (e, t) {
          const n = Math.pow(10, t + 1),
            o = Math.floor(e * n);
          return (10 * Math.round(o / 10)) / n;
        })(parseFloat(t) * Fi, Di);
        return 0 === n ? '0' : `${n}${Ni}`;
      }));
var Ni, Fi, Di;
const ji = (e) => (y(e) ? Ri(e) : e),
  qi = 'http://www.w3.org/1999/xlink';
function Vi(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Wi(e, t, n, o, r = null) {
  const i = e._vei || (e._vei = {}),
    s = i[t];
  if (o && s) s.value = o;
  else {
    const [n, a] = (function (e) {
      let t;
      if (Hi.test(e)) {
        let n;
        for (t = {}; (n = e.match(Hi)); )
          (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
      }
      return [':' === e[2] ? e.slice(3) : I(e.slice(2)), t];
    })(t);
    if (o) {
      const s = (i[t] = (function (e, t) {
        const n = (e) => {
          if (e._vts) {
            if (e._vts <= n.attached) return;
          } else e._vts = Date.now();
          const o = t && t.proxy,
            r = o && o.$nne,
            { value: i } = n;
          if (r && p(i)) {
            const n = Xi(e, i);
            for (let o = 0; o < n.length; o++) {
              const i = n[o];
              vn(i, t, 5, i.__wwe ? [e] : r(e));
            }
          } else vn(Xi(e, i), t, 5, r && !i.__wwe ? r(e, i, t) : [e]);
        };
        return (
          (n.value = e),
          (n.attached = (() => zi || (Ui.then(() => (zi = 0)), (zi = Date.now())))()),
          n
        );
      })(o, r));
      Vi(e, n, s, a);
    } else
      s &&
        (!(function (e, t, n, o) {
          e.removeEventListener(t, n, o);
        })(e, n, s, a),
        (i[t] = void 0));
  }
}
const Hi = /(?:Once|Passive|Capture)$/;
let zi = 0;
const Ui = Promise.resolve();
function Xi(e, t) {
  if (p(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((e) => {
        const t = (t) => !t._stopped && e && e(t);
        return (t.__wwe = e.__wwe), t;
      })
    );
  }
  return t;
}
const Yi = /^on[a-z]/;
const Ki = 'transition',
  Gi = (e, { slots: t }) =>
    xi(
      so,
      (function (e) {
        const t = {};
        for (const c in e) c in Zi || (t[c] = e[c]);
        if (!1 === e.css) return t;
        const {
            name: n = 'v',
            type: o,
            duration: r,
            enterFromClass: i = `${n}-enter-from`,
            enterActiveClass: s = `${n}-enter-active`,
            enterToClass: a = `${n}-enter-to`,
            appearFromClass: l = i,
            appearActiveClass: u = s,
            appearToClass: d = a,
            leaveFromClass: f = `${n}-leave-from`,
            leaveActiveClass: p = `${n}-leave-active`,
            leaveToClass: h = `${n}-leave-to`
          } = e,
          g = (function (e) {
            if (null == e) return null;
            if (_(e)) return [es(e.enter), es(e.leave)];
            {
              const t = es(e);
              return [t, t];
            }
          })(r),
          m = g && g[0],
          v = g && g[1],
          {
            onBeforeEnter: y,
            onEnter: b,
            onEnterCancelled: w,
            onLeave: x,
            onLeaveCancelled: T,
            onBeforeAppear: S = y,
            onAppear: C = b,
            onAppearCancelled: k = w
          } = t,
          E = (e, t, n) => {
            ns(e, t ? d : a), ns(e, t ? u : s), n && n();
          },
          O = (e, t) => {
            (e._isLeaving = !1), ns(e, f), ns(e, h), ns(e, p), t && t();
          },
          L = (e) => (t, n) => {
            const r = e ? C : b,
              s = () => E(t, e, n);
            Qi(r, [t, s]),
              os(() => {
                ns(t, e ? l : i), ts(t, e ? d : a), Ji(r) || is(t, o, m, s);
              });
          };
        return c(t, {
          onBeforeEnter(e) {
            Qi(y, [e]), ts(e, i), ts(e, s);
          },
          onBeforeAppear(e) {
            Qi(S, [e]), ts(e, l), ts(e, u);
          },
          onEnter: L(!1),
          onAppear: L(!0),
          onLeave(e, t) {
            e._isLeaving = !0;
            const n = () => O(e, t);
            ts(e, f),
              document.body.offsetHeight,
              ts(e, p),
              os(() => {
                e._isLeaving && (ns(e, f), ts(e, h), Ji(x) || is(e, o, v, n));
              }),
              Qi(x, [e, n]);
          },
          onEnterCancelled(e) {
            E(e, !1), Qi(w, [e]);
          },
          onAppearCancelled(e) {
            E(e, !0), Qi(k, [e]);
          },
          onLeaveCancelled(e) {
            O(e), Qi(T, [e]);
          }
        });
      })(e),
      t
    );
Gi.displayName = 'Transition';
const Zi = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Gi.props = c({}, io, Zi);
const Qi = (e, t = []) => {
    p(e) ? e.forEach((e) => e(...t)) : e && e(...t);
  },
  Ji = (e) => !!e && (p(e) ? e.some((e) => e.length > 1) : e.length > 1);
function es(e) {
  const t = ((e) => {
    const t = y(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  })(e);
  return t;
}
function ts(e, t) {
  t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e._vtc || (e._vtc = new Set())).add(t);
}
function ns(e, t) {
  t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function os(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let rs = 0;
function is(e, t, n, o) {
  const r = (e._endId = ++rs),
    i = () => {
      r === e._endId && o();
    };
  if (n) return setTimeout(i, n);
  const {
    type: s,
    timeout: a,
    propCount: l
  } = (function (e, t) {
    const n = window.getComputedStyle(e),
      o = (e) => (n[e] || '').split(', '),
      r = o('transitionDelay'),
      i = o('transitionDuration'),
      s = ss(r, i),
      a = o('animationDelay'),
      l = o('animationDuration'),
      c = ss(a, l);
    let u = null,
      d = 0,
      f = 0;
    t === Ki
      ? s > 0 && ((u = Ki), (d = s), (f = i.length))
      : 'animation' === t
      ? c > 0 && ((u = 'animation'), (d = c), (f = l.length))
      : ((d = Math.max(s, c)),
        (u = d > 0 ? (s > c ? Ki : 'animation') : null),
        (f = u ? (u === Ki ? i.length : l.length) : 0));
    const p = u === Ki && /\b(transform|all)(,|$)/.test(o('transitionProperty').toString());
    return { type: u, timeout: d, propCount: f, hasTransform: p };
  })(e, t);
  if (!s) return o();
  const c = s + 'end';
  let u = 0;
  const d = () => {
      e.removeEventListener(c, f), i();
    },
    f = (t) => {
      t.target === e && ++u >= l && d();
    };
  setTimeout(() => {
    u < l && d();
  }, a + 1),
    e.addEventListener(c, f);
}
function ss(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((t, n) => as(t) + as(e[n])));
}
function as(e) {
  return 1e3 * Number(e.slice(0, -1).replace(',', '.'));
}
const ls = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1;
  return p(t) ? (e) => B(t, e) : t;
};
function cs(e) {
  e.target.composing = !0;
}
function us(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')));
}
const ds = {
    created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
      e._assign = ls(r);
      const i = o || (r.props && 'number' === r.props.type);
      Vi(e, t ? 'change' : 'input', (t) => {
        if (t.target.composing) return;
        let o = e.value;
        n && (o = o.trim()), i && (o = N(o)), e._assign(o);
      }),
        n &&
          Vi(e, 'change', () => {
            e.value = e.value.trim();
          }),
        t || (Vi(e, 'compositionstart', cs), Vi(e, 'compositionend', us), Vi(e, 'change', us));
    },
    mounted(e, { value: t }) {
      e.value = null == t ? '' : t;
    },
    beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: o, number: r } }, i) {
      if (((e._assign = ls(i)), e.composing)) return;
      if (document.activeElement === e && 'range' !== e.type) {
        if (n) return;
        if (o && e.value.trim() === t) return;
        if ((r || 'number' === e.type) && N(e.value) === t) return;
      }
      const s = null == t ? '' : t;
      e.value !== s && (e.value = s);
    }
  },
  fs = {
    deep: !0,
    created(e, t, n) {
      (e._assign = ls(n)),
        Vi(e, 'change', () => {
          const t = e._modelValue,
            n = vs(e),
            o = e.checked,
            r = e._assign;
          if (p(t)) {
            const e = Y(t, n),
              i = -1 !== e;
            if (o && !i) r(t.concat(n));
            else if (!o && i) {
              const n = [...t];
              n.splice(e, 1), r(n);
            }
          } else if (g(t)) {
            const e = new Set(t);
            o ? e.add(n) : e.delete(n), r(e);
          } else r(ys(e, o));
        });
    },
    mounted: ps,
    beforeUpdate(e, t, n) {
      (e._assign = ls(n)), ps(e, t, n);
    }
  };
function ps(e, { value: t, oldValue: n }, o) {
  (e._modelValue = t),
    p(t)
      ? (e.checked = Y(t, o.props.value) > -1)
      : g(t)
      ? (e.checked = t.has(o.props.value))
      : t !== n && (e.checked = X(t, ys(e, !0)));
}
const hs = {
    created(e, { value: t }, n) {
      (e.checked = X(t, n.props.value)),
        (e._assign = ls(n)),
        Vi(e, 'change', () => {
          e._assign(vs(e));
        });
    },
    beforeUpdate(e, { value: t, oldValue: n }, o) {
      (e._assign = ls(o)), t !== n && (e.checked = X(t, o.props.value));
    }
  },
  gs = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, o) {
      const r = g(t);
      Vi(e, 'change', () => {
        const t = Array.prototype.filter
          .call(e.options, (e) => e.selected)
          .map((e) => (n ? N(vs(e)) : vs(e)));
        e._assign(e.multiple ? (r ? new Set(t) : t) : t[0]);
      }),
        (e._assign = ls(o));
    },
    mounted(e, { value: t }) {
      ms(e, t);
    },
    beforeUpdate(e, t, n) {
      e._assign = ls(n);
    },
    updated(e, { value: t }) {
      ms(e, t);
    }
  };
function ms(e, t) {
  const n = e.multiple;
  if (!n || p(t) || g(t)) {
    for (let o = 0, r = e.options.length; o < r; o++) {
      const r = e.options[o],
        i = vs(r);
      if (n) p(t) ? (r.selected = Y(t, i) > -1) : (r.selected = t.has(i));
      else if (X(vs(r), t)) return void (e.selectedIndex !== o && (e.selectedIndex = o));
    }
    n || -1 === e.selectedIndex || (e.selectedIndex = -1);
  }
}
function vs(e) {
  return '_value' in e ? e._value : e.value;
}
function ys(e, t) {
  const n = t ? '_trueValue' : '_falseValue';
  return n in e ? e[n] : t;
}
const bs = {
  created(e, t, n) {
    _s(e, t, n, null, 'created');
  },
  mounted(e, t, n) {
    _s(e, t, n, null, 'mounted');
  },
  beforeUpdate(e, t, n, o) {
    _s(e, t, n, o, 'beforeUpdate');
  },
  updated(e, t, n, o) {
    _s(e, t, n, o, 'updated');
  }
};
function _s(e, t, n, o, r) {
  const i = (function (e, t) {
    switch (e) {
      case 'SELECT':
        return gs;
      case 'TEXTAREA':
        return ds;
      default:
        switch (t) {
          case 'checkbox':
            return fs;
          case 'radio':
            return hs;
          default:
            return ds;
        }
    }
  })(e.tagName, n.props && n.props.type)[r];
  i && i(e, t, n, o);
}
const ws = ['ctrl', 'shift', 'alt', 'meta'],
  xs = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && 0 !== e.button,
    middle: (e) => 'button' in e && 1 !== e.button,
    right: (e) => 'button' in e && 2 !== e.button,
    exact: (e, t) => ws.some((n) => e[`${n}Key`] && !t.includes(n))
  },
  Ts =
    (e, t) =>
    (n, ...o) => {
      for (let e = 0; e < t.length; e++) {
        const o = xs[t[e]];
        if (o && o(n, t)) return;
      }
      return e(n, ...o);
    },
  Ss = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e._vod = 'none' === e.style.display ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : Cs(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: o }) {
      !t != !n &&
        (o
          ? t
            ? (o.beforeEnter(e), Cs(e, !0), o.enter(e))
            : o.leave(e, () => {
                Cs(e, !1);
              })
          : Cs(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Cs(e, t);
    }
  };
function Cs(e, t) {
  e.style.display = t ? e._vod : 'none';
}
const ks = c(
  {
    patchProp: (e, t, n, o, r = !1, i, s, c, u) => {
      if (0 === t.indexOf('change:'))
        return (function (e, t, n, o = null) {
          if (!n || !o) return;
          const r = t.replace('change:', ''),
            { attrs: i } = o,
            s = i[r],
            a = (e.__wxsProps || (e.__wxsProps = {}))[r];
          if (a === s) return;
          e.__wxsProps[r] = s;
          const l = o.proxy;
          On(() => {
            n(s, a, l.$gcd(l, !0), l.$gcd(l, !1));
          });
        })(e, t, o, s);
      'class' === t
        ? (function (e, t, n) {
            const { __wxsAddClass: o, __wxsRemoveClass: r } = e;
            r &&
              r.length &&
              ((t = (t || '')
                .split(/\s+/)
                .filter((e) => -1 === r.indexOf(e))
                .join(' ')),
              (r.length = 0)),
              o && o.length && (t = (t || '') + ' ' + o.join(' '));
            const i = e._vtc;
            i && (t = (t ? [t, ...i] : [...i]).join(' ')),
              null == t
                ? e.removeAttribute('class')
                : n
                ? e.setAttribute('class', t)
                : (e.className = t);
          })(e, o, r)
        : 'style' === t
        ? (function (e, t, n) {
            const o = e.style,
              r = y(n);
            if (n && !r) {
              if (t && !y(t)) for (const e in t) null == n[e] && $i(o, e, '');
              for (const e in n) $i(o, e, n[e]);
            } else {
              const i = o.display;
              r ? t !== n && (o.cssText = n) : t && e.removeAttribute('style'),
                '_vod' in e && (o.display = i);
            }
            const { __wxsStyle: i } = e;
            if (i) for (const s in i) $i(o, s, i[s]);
          })(e, n, o)
        : a(t)
        ? l(t) || Wi(e, t, 0, o, s)
        : (
            '.' === t[0]
              ? ((t = t.slice(1)), 1)
              : '^' === t[0]
              ? ((t = t.slice(1)), 0)
              : (function (e, t, n, o) {
                  if (o)
                    return (
                      'innerHTML' === t || 'textContent' === t || !!(t in e && Yi.test(t) && v(n))
                    );
                  if ('spellcheck' === t || 'draggable' === t || 'translate' === t) return !1;
                  if ('form' === t) return !1;
                  if ('list' === t && 'INPUT' === e.tagName) return !1;
                  if ('type' === t && 'TEXTAREA' === e.tagName) return !1;
                  if (Yi.test(t) && y(n)) return !1;
                  return t in e;
                })(e, t, o, r)
          )
        ? (function (e, t, n, o, r, i, s) {
            if ('innerHTML' === t || 'textContent' === t)
              return o && s(o, r, i), void (e[t] = null == n ? '' : n);
            if ('value' === t && 'PROGRESS' !== e.tagName && !e.tagName.includes('-')) {
              e._value = n;
              const o = null == n ? '' : n;
              return (
                (e.value === o && 'OPTION' !== e.tagName) || (e.value = o),
                void (null == n && e.removeAttribute(t))
              );
            }
            let a = !1;
            if ('' === n || null == n) {
              const o = typeof e[t];
              'boolean' === o
                ? (n = U(n))
                : null == n && 'string' === o
                ? ((n = ''), (a = !0))
                : 'number' === o && ((n = 0), (a = !0));
            }
            try {
              e[t] = n;
            } catch (l) {}
            a && e.removeAttribute(t);
          })(e, t, o, i, s, c, u)
        : ('true-value' === t ? (e._trueValue = o) : 'false-value' === t && (e._falseValue = o),
          (function (e, t, n, o, r) {
            if (o && t.startsWith('xlink:'))
              null == n
                ? e.removeAttributeNS(qi, t.slice(6, t.length))
                : e.setAttributeNS(qi, t, n);
            else {
              const o = z(t);
              null == n || (o && !U(n)) ? e.removeAttribute(t) : e.setAttribute(t, o ? '' : n);
            }
          })(e, t, o, r));
    },
    forcePatchProp: (e, t) =>
      0 === t.indexOf('change:') ||
      ('class' === t && e.__wxsClassChanged
        ? ((e.__wxsClassChanged = !1), !0)
        : !('style' !== t || !e.__wxsStyleChanged) && ((e.__wxsStyleChanged = !1), !0))
  },
  Oi
);
let Es;
const Os = (...e) => {
  const t = (Es || (Es = Ar(ks))).createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (e) => {
      const o = (function (e) {
        if (y(e)) {
          return document.querySelector(e);
        }
        return e;
      })(e);
      if (!o) return;
      const r = t._component;
      v(r) || r.render || r.template || (r.template = o.innerHTML), (o.innerHTML = '');
      const i = n(o, !1, o instanceof SVGElement);
      return (
        o instanceof Element && (o.removeAttribute('v-cloak'), o.setAttribute('data-v-app', '')), i
      );
    }),
    t
  );
};
const Ls = ['{', '}'];
const $s = /^(?:\d)+/,
  Is = /^(?:\w)+/;
const Ms = Object.prototype.hasOwnProperty,
  As = (e, t) => Ms.call(e, t),
  Ps = new (class {
    constructor() {
      this._caches = Object.create(null);
    }
    interpolate(e, t, n = Ls) {
      if (!t) return [e];
      let o = this._caches[e];
      return (
        o ||
          ((o = (function (e, [t, n]) {
            const o = [];
            let r = 0,
              i = '';
            for (; r < e.length; ) {
              let s = e[r++];
              if (s === t) {
                i && o.push({ type: 'text', value: i }), (i = '');
                let t = '';
                for (s = e[r++]; void 0 !== s && s !== n; ) (t += s), (s = e[r++]);
                const a = s === n,
                  l = $s.test(t) ? 'list' : a && Is.test(t) ? 'named' : 'unknown';
                o.push({ value: t, type: l });
              } else i += s;
            }
            return i && o.push({ type: 'text', value: i }), o;
          })(e, n)),
          (this._caches[e] = o)),
        (function (e, t) {
          const n = [];
          let o = 0;
          const r = Array.isArray(t)
            ? 'list'
            : ((i = t), null !== i && 'object' == typeof i ? 'named' : 'unknown');
          var i;
          if ('unknown' === r) return n;
          for (; o < e.length; ) {
            const i = e[o];
            switch (i.type) {
              case 'text':
                n.push(i.value);
                break;
              case 'list':
                n.push(t[parseInt(i.value, 10)]);
                break;
              case 'named':
                'named' === r && n.push(t[i.value]);
            }
            o++;
          }
          return n;
        })(o, t)
      );
    }
  })();
function Bs(e, t) {
  if (!e) return;
  if (((e = e.trim().replace(/_/g, '-')), t && t[e])) return e;
  if ('chinese' === (e = e.toLowerCase())) return 'zh-Hans';
  if (0 === e.indexOf('zh'))
    return e.indexOf('-hans') > -1
      ? 'zh-Hans'
      : e.indexOf('-hant') > -1
      ? 'zh-Hant'
      : ((n = e),
        ['-tw', '-hk', '-mo', '-cht'].find((e) => -1 !== n.indexOf(e)) ? 'zh-Hant' : 'zh-Hans');
  var n;
  let o = ['en', 'fr', 'es'];
  t && Object.keys(t).length > 0 && (o = Object.keys(t));
  const r = (function (e, t) {
    return t.find((t) => 0 === e.indexOf(t));
  })(e, o);
  return r || void 0;
}
class Rs {
  constructor({ locale: e, fallbackLocale: t, messages: n, watcher: o, formater: r }) {
    (this.locale = 'en'),
      (this.fallbackLocale = 'en'),
      (this.message = {}),
      (this.messages = {}),
      (this.watchers = []),
      t && (this.fallbackLocale = t),
      (this.formater = r || Ps),
      (this.messages = n || {}),
      this.setLocale(e || 'en'),
      o && this.watchLocale(o);
  }
  setLocale(e) {
    const t = this.locale;
    (this.locale = Bs(e, this.messages) || this.fallbackLocale),
      this.messages[this.locale] || (this.messages[this.locale] = {}),
      (this.message = this.messages[this.locale]),
      t !== this.locale &&
        this.watchers.forEach((e) => {
          e(this.locale, t);
        });
  }
  getLocale() {
    return this.locale;
  }
  watchLocale(e) {
    const t = this.watchers.push(e) - 1;
    return () => {
      this.watchers.splice(t, 1);
    };
  }
  add(e, t, n = !0) {
    const o = this.messages[e];
    o
      ? n
        ? Object.assign(o, t)
        : Object.keys(t).forEach((e) => {
            As(o, e) || (o[e] = t[e]);
          })
      : (this.messages[e] = t);
  }
  f(e, t, n) {
    return this.formater.interpolate(e, t, n).join('');
  }
  t(e, t, n) {
    let o = this.message;
    return (
      'string' == typeof t ? (t = Bs(t, this.messages)) && (o = this.messages[t]) : (n = t),
      As(o, e)
        ? this.formater.interpolate(o[e], n).join('')
        : (console.warn(
            `Cannot translate the value of keypath ${e}. Use the value of keypath as default.`
          ),
          e)
    );
  }
}
function Ns(e, t = {}, n, o) {
  'string' != typeof e && ([e, t] = [t, e]),
    'string' != typeof e &&
      (e =
        'undefined' != typeof uni && Kd
          ? Kd()
          : 'undefined' != typeof global && global.getLocale
          ? global.getLocale()
          : 'en'),
    'string' != typeof n &&
      (n = ('undefined' != typeof __uniConfig && __uniConfig.fallbackLocale) || 'en');
  const r = new Rs({ locale: e, fallbackLocale: n, messages: t, watcher: o });
  let i = (e, t) => {
    {
      let e = !1;
      i = function (t, n) {
        const o = Uh().$vm;
        return (
          o &&
            (o.$locale,
            e ||
              ((e = !0),
              (function (e, t) {
                e.$watchLocale
                  ? e.$watchLocale((e) => {
                      t.setLocale(e);
                    })
                  : e.$watch(
                      () => e.$locale,
                      (e) => {
                        t.setLocale(e);
                      }
                    );
              })(o, r))),
          r.t(t, n)
        );
      };
    }
    return i(e, t);
  };
  return {
    i18n: r,
    f: (e, t, n) => r.f(e, t, n),
    t: (e, t) => i(e, t),
    add: (e, t, n = !0) => r.add(e, t, n),
    watch: (e) => r.watchLocale(e),
    getLocale: () => r.getLocale(),
    setLocale: (e) => r.setLocale(e)
  };
}
function Fs(e, t) {
  return e.indexOf(t[0]) > -1;
}
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Ds = 'undefined' != typeof window;
const js = Object.assign;
function qs(e, t) {
  const n = {};
  for (const o in t) {
    const r = t[o];
    n[o] = Ws(r) ? r.map(e) : e(r);
  }
  return n;
}
const Vs = () => {},
  Ws = Array.isArray,
  Hs = /\/$/;
function zs(e, t, n = '/') {
  let o,
    r = {},
    i = '',
    s = '';
  const a = t.indexOf('#');
  let l = t.indexOf('?');
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 && ((o = t.slice(0, l)), (i = t.slice(l + 1, a > -1 ? a : t.length)), (r = e(i))),
    a > -1 && ((o = o || t.slice(0, a)), (s = t.slice(a, t.length))),
    (o = (function (e, t) {
      if (e.startsWith('/')) return e;
      if (!e) return t;
      const n = t.split('/'),
        o = e.split('/');
      let r,
        i,
        s = n.length - 1;
      for (r = 0; r < o.length; r++)
        if (((i = o[r]), '.' !== i)) {
          if ('..' !== i) break;
          s > 1 && s--;
        }
      return n.slice(0, s).join('/') + '/' + o.slice(r - (r === o.length ? 1 : 0)).join('/');
    })(null != o ? o : t, n)),
    { fullPath: o + (i && '?') + i + s, path: o, query: r, hash: s }
  );
}
function Us(e, t) {
  return t && e.toLowerCase().startsWith(t.toLowerCase()) ? e.slice(t.length) || '/' : e;
}
function Xs(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ys(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Ks(e[n], t[n])) return !1;
  return !0;
}
function Ks(e, t) {
  return Ws(e) ? Gs(e, t) : Ws(t) ? Gs(t, e) : e === t;
}
function Gs(e, t) {
  return Ws(t)
    ? e.length === t.length && e.every((e, n) => e === t[n])
    : 1 === e.length && e[0] === t;
}
var Zs, Qs, Js, ea;
function ta(e) {
  if (!e)
    if (Ds) {
      const t = document.querySelector('base');
      e = (e = (t && t.getAttribute('href')) || '/').replace(/^\w+:\/\/[^\/]+/, '');
    } else e = '/';
  return '/' !== e[0] && '#' !== e[0] && (e = '/' + e), e.replace(Hs, '');
}
((Qs = Zs || (Zs = {})).pop = 'pop'),
  (Qs.push = 'push'),
  ((ea = Js || (Js = {})).back = 'back'),
  (ea.forward = 'forward'),
  (ea.unknown = '');
const na = /^[^#]+#/;
function oa(e, t) {
  return e.replace(na, '#') + t;
}
const ra = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function ia(e) {
  let t;
  if ('el' in e) {
    const n = e.el,
      o = 'string' == typeof n && n.startsWith('#'),
      r =
        'string' == typeof n
          ? o
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!r) return;
    t = (function (e, t) {
      const n = document.documentElement.getBoundingClientRect(),
        o = e.getBoundingClientRect();
      return {
        behavior: t.behavior,
        left: o.left - n.left - (t.left || 0),
        top: o.top - n.top - (t.top || 0)
      };
    })(r, e);
  } else t = e;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        null != t.left ? t.left : window.pageXOffset,
        null != t.top ? t.top : window.pageYOffset
      );
}
function sa(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const aa = new Map();
function la(e, t) {
  const { pathname: n, search: o, hash: r } = t,
    i = e.indexOf('#');
  if (i > -1) {
    let t = r.includes(e.slice(i)) ? e.slice(i).length : 1,
      n = r.slice(t);
    return '/' !== n[0] && (n = '/' + n), Us(n, '');
  }
  return Us(n, e) + o + r;
}
function ca(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? ra() : null
  };
}
function ua(e) {
  const { history: t, location: n } = window,
    o = { value: la(e, n) },
    r = { value: t.state };
  function i(o, i, s) {
    const a = e.indexOf('#'),
      l =
        a > -1
          ? (n.host && document.querySelector('base') ? e : e.slice(a)) + o
          : location.protocol + '//' + location.host + e + o;
    try {
      t[s ? 'replaceState' : 'pushState'](i, '', l), (r.value = i);
    } catch (c) {
      console.error(c), n[s ? 'replace' : 'assign'](l);
    }
  }
  return (
    r.value ||
      i(
        o.value,
        {
          back: null,
          current: o.value,
          forward: null,
          position: t.length - 1,
          replaced: !0,
          scroll: null
        },
        !0
      ),
    {
      location: o,
      state: r,
      push: function (e, n) {
        const s = js({}, r.value, t.state, { forward: e, scroll: ra() });
        i(s.current, s, !0),
          i(e, js({}, ca(o.value, e, null), { position: s.position + 1 }, n), !1),
          (o.value = e);
      },
      replace: function (e, n) {
        i(
          e,
          js({}, t.state, ca(r.value.back, e, r.value.forward, !0), n, {
            position: r.value.position
          }),
          !0
        ),
          (o.value = e);
      }
    }
  );
}
function da(e) {
  const t = ua((e = ta(e))),
    n = (function (e, t, n, o) {
      let r = [],
        i = [],
        s = null;
      const a = ({ state: i }) => {
        const a = la(e, location),
          l = n.value,
          c = t.value;
        let u = 0;
        if (i) {
          if (((n.value = a), (t.value = i), s && s === l)) return void (s = null);
          u = c ? i.position - c.position : 0;
        } else o(a);
        r.forEach((e) => {
          e(n.value, l, {
            delta: u,
            type: Zs.pop,
            direction: u ? (u > 0 ? Js.forward : Js.back) : Js.unknown
          });
        });
      };
      function l() {
        const { history: e } = window;
        e.state && e.replaceState(js({}, e.state, { scroll: ra() }), '');
      }
      return (
        window.addEventListener('popstate', a),
        window.addEventListener('beforeunload', l),
        {
          pauseListeners: function () {
            s = n.value;
          },
          listen: function (e) {
            r.push(e);
            const t = () => {
              const t = r.indexOf(e);
              t > -1 && r.splice(t, 1);
            };
            return i.push(t), t;
          },
          destroy: function () {
            for (const e of i) e();
            (i = []),
              window.removeEventListener('popstate', a),
              window.removeEventListener('beforeunload', l);
          }
        }
      );
    })(e, t.state, t.location, t.replace);
  const o = js(
    {
      location: '',
      base: e,
      go: function (e, t = !0) {
        t || n.pauseListeners(), history.go(e);
      },
      createHref: oa.bind(null, e)
    },
    t,
    n
  );
  return (
    Object.defineProperty(o, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(o, 'state', { enumerable: !0, get: () => t.state.value }),
    o
  );
}
function fa(e) {
  return 'string' == typeof e || 'symbol' == typeof e;
}
const pa = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0
  },
  ha = Symbol('');
var ga, ma;
function va(e, t) {
  return js(new Error(), { type: e, [ha]: !0 }, t);
}
function ya(e, t) {
  return e instanceof Error && ha in e && (null == t || !!(e.type & t));
}
((ma = ga || (ga = {}))[(ma.aborted = 4)] = 'aborted'),
  (ma[(ma.cancelled = 8)] = 'cancelled'),
  (ma[(ma.duplicated = 16)] = 'duplicated');
const ba = { sensitive: !1, strict: !1, start: !0, end: !0 },
  _a = /[.+*?^${}()[\]/\\]/g;
function wa(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o) return o;
    n++;
  }
  return e.length < t.length
    ? 1 === e.length && 80 === e[0]
      ? -1
      : 1
    : e.length > t.length
    ? 1 === t.length && 80 === t[0]
      ? 1
      : -1
    : 0;
}
function xa(e, t) {
  let n = 0;
  const o = e.score,
    r = t.score;
  for (; n < o.length && n < r.length; ) {
    const e = wa(o[n], r[n]);
    if (e) return e;
    n++;
  }
  if (1 === Math.abs(r.length - o.length)) {
    if (Ta(o)) return 1;
    if (Ta(r)) return -1;
  }
  return r.length - o.length;
}
function Ta(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Sa = { type: 0, value: '' },
  Ca = /[a-zA-Z0-9_]/;
function ka(e, t, n) {
  const o = (function (e, t) {
      const n = js({}, ba, t),
        o = [];
      let r = n.start ? '^' : '';
      const i = [];
      for (const l of e) {
        const e = l.length ? [] : [90];
        n.strict && !l.length && (r += '/');
        for (let t = 0; t < l.length; t++) {
          const o = l[t];
          let s = 40 + (n.sensitive ? 0.25 : 0);
          if (0 === o.type) t || (r += '/'), (r += o.value.replace(_a, '\\$&')), (s += 40);
          else if (1 === o.type) {
            const { value: e, repeatable: n, optional: c, regexp: u } = o;
            i.push({ name: e, repeatable: n, optional: c });
            const d = u || '[^/]+?';
            if ('[^/]+?' !== d) {
              s += 10;
              try {
                new RegExp(`(${d})`);
              } catch (a) {
                throw new Error(`Invalid custom RegExp for param "${e}" (${d}): ` + a.message);
              }
            }
            let f = n ? `((?:${d})(?:/(?:${d}))*)` : `(${d})`;
            t || (f = c && l.length < 2 ? `(?:/${f})` : '/' + f),
              c && (f += '?'),
              (r += f),
              (s += 20),
              c && (s += -8),
              n && (s += -20),
              '.*' === d && (s += -50);
          }
          e.push(s);
        }
        o.push(e);
      }
      if (n.strict && n.end) {
        const e = o.length - 1;
        o[e][o[e].length - 1] += 0.7000000000000001;
      }
      n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && (r += '(?:/|$)');
      const s = new RegExp(r, n.sensitive ? '' : 'i');
      return {
        re: s,
        score: o,
        keys: i,
        parse: function (e) {
          const t = e.match(s),
            n = {};
          if (!t) return null;
          for (let o = 1; o < t.length; o++) {
            const e = t[o] || '',
              r = i[o - 1];
            n[r.name] = e && r.repeatable ? e.split('/') : e;
          }
          return n;
        },
        stringify: function (t) {
          let n = '',
            o = !1;
          for (const r of e) {
            (o && n.endsWith('/')) || (n += '/'), (o = !1);
            for (const e of r)
              if (0 === e.type) n += e.value;
              else if (1 === e.type) {
                const { value: i, repeatable: s, optional: a } = e,
                  l = i in t ? t[i] : '';
                if (Ws(l) && !s)
                  throw new Error(
                    `Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`
                  );
                const c = Ws(l) ? l.join('/') : l;
                if (!c) {
                  if (!a) throw new Error(`Missing required param "${i}"`);
                  r.length < 2 && (n.endsWith('/') ? (n = n.slice(0, -1)) : (o = !0));
                }
                n += c;
              }
          }
          return n || '/';
        }
      };
    })(
      (function (e) {
        if (!e) return [[]];
        if ('/' === e) return [[Sa]];
        if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
        function t(e) {
          throw new Error(`ERR (${n})/"${c}": ${e}`);
        }
        let n = 0,
          o = n;
        const r = [];
        let i;
        function s() {
          i && r.push(i), (i = []);
        }
        let a,
          l = 0,
          c = '',
          u = '';
        function d() {
          c &&
            (0 === n
              ? i.push({ type: 0, value: c })
              : 1 === n || 2 === n || 3 === n
              ? (i.length > 1 &&
                  ('*' === a || '+' === a) &&
                  t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
                i.push({
                  type: 1,
                  value: c,
                  regexp: u,
                  repeatable: '*' === a || '+' === a,
                  optional: '*' === a || '?' === a
                }))
              : t('Invalid state to consume buffer'),
            (c = ''));
        }
        function f() {
          c += a;
        }
        for (; l < e.length; )
          if (((a = e[l++]), '\\' !== a || 2 === n))
            switch (n) {
              case 0:
                '/' === a ? (c && d(), s()) : ':' === a ? (d(), (n = 1)) : f();
                break;
              case 4:
                f(), (n = o);
                break;
              case 1:
                '(' === a
                  ? (n = 2)
                  : Ca.test(a)
                  ? f()
                  : (d(), (n = 0), '*' !== a && '?' !== a && '+' !== a && l--);
                break;
              case 2:
                ')' === a
                  ? '\\' == u[u.length - 1]
                    ? (u = u.slice(0, -1) + a)
                    : (n = 3)
                  : (u += a);
                break;
              case 3:
                d(), (n = 0), '*' !== a && '?' !== a && '+' !== a && l--, (u = '');
                break;
              default:
                t('Unknown state');
            }
          else (o = n), (n = 4);
        return 2 === n && t(`Unfinished custom RegExp for param "${c}"`), d(), s(), r;
      })(e.path),
      n
    ),
    r = js(o, { record: e, parent: t, children: [], alias: [] });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Ea(e, t) {
  const n = [],
    o = new Map();
  function r(e, n, o) {
    const a = !o,
      l = (function (e) {
        return {
          path: e.path,
          redirect: e.redirect,
          name: e.name,
          meta: e.meta || {},
          aliasOf: void 0,
          beforeEnter: e.beforeEnter,
          props: La(e),
          children: e.children || [],
          instances: {},
          leaveGuards: new Set(),
          updateGuards: new Set(),
          enterCallbacks: {},
          components:
            'components' in e ? e.components || null : e.component && { default: e.component }
        };
      })(e);
    l.aliasOf = o && o.record;
    const c = Ma(t, e),
      u = [l];
    if ('alias' in e) {
      const t = 'string' == typeof e.alias ? [e.alias] : e.alias;
      for (const e of t)
        u.push(
          js({}, l, {
            components: o ? o.record.components : l.components,
            path: e,
            aliasOf: o ? o.record : l
          })
        );
    }
    let d, f;
    for (const t of u) {
      const { path: u } = t;
      if (n && '/' !== u[0]) {
        const e = n.record.path,
          o = '/' === e[e.length - 1] ? '' : '/';
        t.path = n.record.path + (u && o + u);
      }
      if (
        ((d = ka(t, n, c)),
        o
          ? o.alias.push(d)
          : ((f = f || d), f !== d && f.alias.push(d), a && e.name && !$a(d) && i(e.name)),
        l.children)
      ) {
        const e = l.children;
        for (let t = 0; t < e.length; t++) r(e[t], d, o && o.children[t]);
      }
      (o = o || d),
        ((d.record.components && Object.keys(d.record.components).length) ||
          d.record.name ||
          d.record.redirect) &&
          s(d);
    }
    return f
      ? () => {
          i(f);
        }
      : Vs;
  }
  function i(e) {
    if (fa(e)) {
      const t = o.get(e);
      t && (o.delete(e), n.splice(n.indexOf(t), 1), t.children.forEach(i), t.alias.forEach(i));
    } else {
      const t = n.indexOf(e);
      t > -1 &&
        (n.splice(t, 1),
        e.record.name && o.delete(e.record.name),
        e.children.forEach(i),
        e.alias.forEach(i));
    }
  }
  function s(e) {
    let t = 0;
    for (
      ;
      t < n.length && xa(e, n[t]) >= 0 && (e.record.path !== n[t].record.path || !Aa(e, n[t]));

    )
      t++;
    n.splice(t, 0, e), e.record.name && !$a(e) && o.set(e.record.name, e);
  }
  return (
    (t = Ma({ strict: !1, end: !0, sensitive: !1 }, t)),
    e.forEach((e) => r(e)),
    {
      addRoute: r,
      resolve: function (e, t) {
        let r,
          i,
          s,
          a = {};
        if ('name' in e && e.name) {
          if (((r = o.get(e.name)), !r)) throw va(1, { location: e });
          (s = r.record.name),
            (a = js(
              Oa(
                t.params,
                r.keys.filter((e) => !e.optional).map((e) => e.name)
              ),
              e.params &&
                Oa(
                  e.params,
                  r.keys.map((e) => e.name)
                )
            )),
            (i = r.stringify(a));
        } else if ('path' in e)
          (i = e.path),
            (r = n.find((e) => e.re.test(i))),
            r && ((a = r.parse(i)), (s = r.record.name));
        else {
          if (((r = t.name ? o.get(t.name) : n.find((e) => e.re.test(t.path))), !r))
            throw va(1, { location: e, currentLocation: t });
          (s = r.record.name), (a = js({}, t.params, e.params)), (i = r.stringify(a));
        }
        const l = [];
        let c = r;
        for (; c; ) l.unshift(c.record), (c = c.parent);
        return { name: s, path: i, params: a, matched: l, meta: Ia(l) };
      },
      removeRoute: i,
      getRoutes: function () {
        return n;
      },
      getRecordMatcher: function (e) {
        return o.get(e);
      }
    }
  );
}
function Oa(e, t) {
  const n = {};
  for (const o of t) o in e && (n[o] = e[o]);
  return n;
}
function La(e) {
  const t = {},
    n = e.props || !1;
  if ('component' in e) t.default = n;
  else for (const o in e.components) t[o] = 'boolean' == typeof n ? n : n[o];
  return t;
}
function $a(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Ia(e) {
  return e.reduce((e, t) => js(e, t.meta), {});
}
function Ma(e, t) {
  const n = {};
  for (const o in e) n[o] = o in t ? t[o] : e[o];
  return n;
}
function Aa(e, t) {
  return t.children.some((t) => t === e || Aa(e, t));
}
const Pa = /#/g,
  Ba = /&/g,
  Ra = /\//g,
  Na = /=/g,
  Fa = /\?/g,
  Da = /\+/g,
  ja = /%5B/g,
  qa = /%5D/g,
  Va = /%5E/g,
  Wa = /%60/g,
  Ha = /%7B/g,
  za = /%7C/g,
  Ua = /%7D/g,
  Xa = /%20/g;
function Ya(e) {
  return encodeURI('' + e)
    .replace(za, '|')
    .replace(ja, '[')
    .replace(qa, ']');
}
function Ka(e) {
  return Ya(e)
    .replace(Da, '%2B')
    .replace(Xa, '+')
    .replace(Pa, '%23')
    .replace(Ba, '%26')
    .replace(Wa, '`')
    .replace(Ha, '{')
    .replace(Ua, '}')
    .replace(Va, '^');
}
function Ga(e) {
  return null == e
    ? ''
    : (function (e) {
        return Ya(e).replace(Pa, '%23').replace(Fa, '%3F');
      })(e).replace(Ra, '%2F');
}
function Za(e) {
  try {
    return decodeURIComponent('' + e);
  } catch (t) {}
  return '' + e;
}
function Qa(e) {
  const t = {};
  if ('' === e || '?' === e) return t;
  const n = ('?' === e[0] ? e.slice(1) : e).split('&');
  for (let o = 0; o < n.length; ++o) {
    const e = n[o].replace(Da, ' '),
      r = e.indexOf('='),
      i = Za(r < 0 ? e : e.slice(0, r)),
      s = r < 0 ? null : Za(e.slice(r + 1));
    if (i in t) {
      let e = t[i];
      Ws(e) || (e = t[i] = [e]), e.push(s);
    } else t[i] = s;
  }
  return t;
}
function Ja(e) {
  let t = '';
  for (let n in e) {
    const o = e[n];
    if (((n = Ka(n).replace(Na, '%3D')), null == o)) {
      void 0 !== o && (t += (t.length ? '&' : '') + n);
      continue;
    }
    (Ws(o) ? o.map((e) => e && Ka(e)) : [o && Ka(o)]).forEach((e) => {
      void 0 !== e && ((t += (t.length ? '&' : '') + n), null != e && (t += '=' + e));
    });
  }
  return t;
}
function el(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    void 0 !== o &&
      (t[n] = Ws(o) ? o.map((e) => (null == e ? null : '' + e)) : null == o ? o : '' + o);
  }
  return t;
}
const tl = Symbol(''),
  nl = Symbol(''),
  ol = Symbol(''),
  rl = Symbol(''),
  il = Symbol('');
function sl() {
  let e = [];
  return {
    add: function (t) {
      return (
        e.push(t),
        () => {
          const n = e.indexOf(t);
          n > -1 && e.splice(n, 1);
        }
      );
    },
    list: () => e,
    reset: function () {
      e = [];
    }
  };
}
function al(e, t, n, o, r) {
  const i = o && (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
  return () =>
    new Promise((s, a) => {
      const l = (e) => {
          var l;
          !1 === e
            ? a(va(4, { from: n, to: t }))
            : e instanceof Error
            ? a(e)
            : 'string' == typeof (l = e) || (l && 'object' == typeof l)
            ? a(va(2, { from: t, to: e }))
            : (i && o.enterCallbacks[r] === i && 'function' == typeof e && i.push(e), s());
        },
        c = e.call(o && o.instances[r], t, n, l);
      let u = Promise.resolve(c);
      e.length < 3 && (u = u.then(l)), u.catch((e) => a(e));
    });
}
function ll(e, t, n, o) {
  const r = [];
  for (const s of e)
    for (const e in s.components) {
      let a = s.components[e];
      if ('beforeRouteEnter' === t || s.instances[e])
        if ('object' == typeof (i = a) || 'displayName' in i || 'props' in i || '__vccOpts' in i) {
          const i = (a.__vccOpts || a)[t];
          i && r.push(al(i, n, o, s, e));
        } else {
          let i = a();
          r.push(() =>
            i.then((r) => {
              if (!r)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${e}" at "${s.path}"`)
                );
              const i = (a = r).__esModule || 'Module' === a[Symbol.toStringTag] ? r.default : r;
              var a;
              s.components[e] = i;
              const l = (i.__vccOpts || i)[t];
              return l && al(l, n, o, s, e)();
            })
          );
        }
    }
  var i;
  return r;
}
function cl(e) {
  const t = Gn(ol),
    n = Gn(rl),
    o = wi(() => t.resolve(dn(e.to))),
    r = wi(() => {
      const { matched: e } = o.value,
        { length: t } = e,
        r = e[t - 1],
        i = n.matched;
      if (!r || !i.length) return -1;
      const s = i.findIndex(Xs.bind(null, r));
      if (s > -1) return s;
      const a = dl(e[t - 2]);
      return t > 1 && dl(r) === a && i[i.length - 1].path !== a
        ? i.findIndex(Xs.bind(null, e[t - 2]))
        : s;
    }),
    i = wi(
      () =>
        r.value > -1 &&
        (function (e, t) {
          for (const n in t) {
            const o = t[n],
              r = e[n];
            if ('string' == typeof o) {
              if (o !== r) return !1;
            } else if (!Ws(r) || r.length !== o.length || o.some((e, t) => e !== r[t])) return !1;
          }
          return !0;
        })(n.params, o.value.params)
    ),
    s = wi(() => r.value > -1 && r.value === n.matched.length - 1 && Ys(n.params, o.value.params));
  return {
    route: o,
    href: wi(() => o.value.href),
    isActive: i,
    isExactActive: s,
    navigate: function (n = {}) {
      return (function (e) {
        if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
        if (e.defaultPrevented) return;
        if (void 0 !== e.button && 0 !== e.button) return;
        if (e.currentTarget && e.currentTarget.getAttribute) {
          const t = e.currentTarget.getAttribute('target');
          if (/\b_blank\b/i.test(t)) return;
        }
        e.preventDefault && e.preventDefault();
        return !0;
      })(n)
        ? t[dn(e.replace) ? 'replace' : 'push'](dn(e.to)).catch(Vs)
        : Promise.resolve();
    }
  };
}
const ul = ho({
  name: 'RouterLink',
  compatConfig: { MODE: 3 },
  props: {
    to: { type: [String, Object], required: !0 },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: { type: String, default: 'page' }
  },
  useLink: cl,
  setup(e, { slots: t }) {
    const n = Ut(cl(e)),
      { options: o } = Gn(ol),
      r = wi(() => ({
        [fl(e.activeClass, o.linkActiveClass, 'router-link-active')]: n.isActive,
        [fl(e.exactActiveClass, o.linkExactActiveClass, 'router-link-exact-active')]:
          n.isExactActive
      }));
    return () => {
      const o = t.default && t.default(n);
      return e.custom
        ? o
        : xi(
            'a',
            {
              'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
              href: n.href,
              onClick: n.navigate,
              class: r.value
            },
            o
          );
    };
  }
});
function dl(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const fl = (e, t, n) => (null != e ? e : null != t ? t : n);
function pl(e, t) {
  if (!e) return null;
  const n = e(t);
  return 1 === n.length ? n[0] : n;
}
const hl = ho({
  name: 'RouterView',
  inheritAttrs: !1,
  props: { name: { type: String, default: 'default' }, route: Object },
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    const o = Gn(il),
      r = wi(() => e.route || o.value),
      i = Gn(nl, 0),
      s = wi(() => {
        let e = dn(i);
        const { matched: t } = r.value;
        let n;
        for (; (n = t[e]) && !n.components; ) e++;
        return e;
      }),
      a = wi(() => r.value.matched[s.value]);
    Kn(
      nl,
      wi(() => s.value + 1)
    ),
      Kn(tl, a),
      Kn(il, r);
    const l = an();
    return (
      Jn(
        () => [l.value, a.value, e.name],
        ([e, t, n], [o, r, i]) => {
          t &&
            ((t.instances[n] = e),
            r &&
              r !== t &&
              e &&
              e === o &&
              (t.leaveGuards.size || (t.leaveGuards = r.leaveGuards),
              t.updateGuards.size || (t.updateGuards = r.updateGuards))),
            !e || !t || (r && Xs(t, r) && o) || (t.enterCallbacks[n] || []).forEach((t) => t(e));
        },
        { flush: 'post' }
      ),
      () => {
        const o = r.value,
          i = e.name,
          s = a.value,
          c = s && s.components[i];
        if (!c) return pl(n.default, { Component: c, route: o });
        const u = s.props[i],
          d = u ? (!0 === u ? o.params : 'function' == typeof u ? u(o) : u) : null,
          f = xi(
            c,
            js({}, d, t, {
              onVnodeUnmounted: (e) => {
                e.component.isUnmounted && (s.instances[i] = null);
              },
              ref: l
            })
          );
        return pl(n.default, { Component: f, route: o }) || f;
      }
    );
  }
});
function gl(e) {
  const t = Ea(e.routes, e),
    n = e.parseQuery || Qa,
    o = e.stringifyQuery || Ja,
    r = e.history,
    i = sl(),
    s = sl(),
    a = sl(),
    l = ln(pa);
  let c = pa;
  Ds &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const u = qs.bind(null, (e) => '' + e),
    d = qs.bind(null, Ga),
    f = qs.bind(null, Za);
  function p(e, i) {
    if (((i = js({}, i || l.value)), 'string' == typeof e)) {
      const o = zs(n, e, i.path),
        s = t.resolve({ path: o.path }, i),
        a = r.createHref(o.fullPath);
      return js(o, s, { params: f(s.params), hash: Za(o.hash), redirectedFrom: void 0, href: a });
    }
    let s;
    if ('path' in e) s = js({}, e, { path: zs(n, e.path, i.path).path });
    else {
      const t = js({}, e.params);
      for (const e in t) null == t[e] && delete t[e];
      (s = js({}, e, { params: d(e.params) })), (i.params = d(i.params));
    }
    const a = t.resolve(s, i),
      c = e.hash || '';
    a.params = u(f(a.params));
    const p = (function (e, t) {
      const n = t.query ? e(t.query) : '';
      return t.path + (n && '?') + n + (t.hash || '');
    })(
      o,
      js({}, e, {
        hash: ((h = c), Ya(h).replace(Ha, '{').replace(Ua, '}').replace(Va, '^')),
        path: a.path
      })
    );
    var h;
    const g = r.createHref(p);
    return js({ fullPath: p, hash: c, query: o === Ja ? el(e.query) : e.query || {} }, a, {
      redirectedFrom: void 0,
      href: g
    });
  }
  function h(e) {
    return 'string' == typeof e ? zs(n, e, l.value.path) : js({}, e);
  }
  function g(e, t) {
    if (c !== e) return va(8, { from: t, to: e });
  }
  function m(e) {
    return y(e);
  }
  function v(e) {
    const t = e.matched[e.matched.length - 1];
    if (t && t.redirect) {
      const { redirect: n } = t;
      let o = 'function' == typeof n ? n(e) : n;
      return (
        'string' == typeof o &&
          ((o = o.includes('?') || o.includes('#') ? (o = h(o)) : { path: o }), (o.params = {})),
        js({ query: e.query, hash: e.hash, params: 'path' in o ? {} : e.params }, o)
      );
    }
  }
  function y(e, t) {
    const n = (c = p(e)),
      r = l.value,
      i = e.state,
      s = e.force,
      a = !0 === e.replace,
      u = v(n);
    if (u)
      return y(
        js(h(u), { state: 'object' == typeof u ? js({}, i, u.state) : i, force: s, replace: a }),
        t || n
      );
    const d = n;
    let f;
    return (
      (d.redirectedFrom = t),
      !s &&
        (function (e, t, n) {
          const o = t.matched.length - 1,
            r = n.matched.length - 1;
          return (
            o > -1 &&
            o === r &&
            Xs(t.matched[o], n.matched[r]) &&
            Ys(t.params, n.params) &&
            e(t.query) === e(n.query) &&
            t.hash === n.hash
          );
        })(o, r, n) &&
        ((f = va(16, { to: d, from: r })), $(r, r, !0, !1)),
      (f ? Promise.resolve(f) : _(d, r))
        .catch((e) => (ya(e) ? (ya(e, 2) ? e : L(e)) : O(e, d, r)))
        .then((e) => {
          if (e) {
            if (ya(e, 2))
              return y(
                js({ replace: a }, h(e.to), {
                  state: 'object' == typeof e.to ? js({}, i, e.to.state) : i,
                  force: s
                }),
                t || d
              );
          } else e = x(d, r, !0, a, i);
          return w(d, r, e), e;
        })
    );
  }
  function b(e, t) {
    const n = g(e, t);
    return n ? Promise.reject(n) : Promise.resolve();
  }
  function _(e, t) {
    let n;
    const [o, r, a] = (function (e, t) {
      const n = [],
        o = [],
        r = [],
        i = Math.max(t.matched.length, e.matched.length);
      for (let s = 0; s < i; s++) {
        const i = t.matched[s];
        i && (e.matched.find((e) => Xs(e, i)) ? o.push(i) : n.push(i));
        const a = e.matched[s];
        a && (t.matched.find((e) => Xs(e, a)) || r.push(a));
      }
      return [n, o, r];
    })(e, t);
    n = ll(o.reverse(), 'beforeRouteLeave', e, t);
    for (const i of o)
      i.leaveGuards.forEach((o) => {
        n.push(al(o, e, t));
      });
    const l = b.bind(null, e, t);
    return (
      n.push(l),
      ml(n)
        .then(() => {
          n = [];
          for (const o of i.list()) n.push(al(o, e, t));
          return n.push(l), ml(n);
        })
        .then(() => {
          n = ll(r, 'beforeRouteUpdate', e, t);
          for (const o of r)
            o.updateGuards.forEach((o) => {
              n.push(al(o, e, t));
            });
          return n.push(l), ml(n);
        })
        .then(() => {
          n = [];
          for (const o of e.matched)
            if (o.beforeEnter && !t.matched.includes(o))
              if (Ws(o.beforeEnter)) for (const r of o.beforeEnter) n.push(al(r, e, t));
              else n.push(al(o.beforeEnter, e, t));
          return n.push(l), ml(n);
        })
        .then(
          () => (
            e.matched.forEach((e) => (e.enterCallbacks = {})),
            (n = ll(a, 'beforeRouteEnter', e, t)),
            n.push(l),
            ml(n)
          )
        )
        .then(() => {
          n = [];
          for (const o of s.list()) n.push(al(o, e, t));
          return n.push(l), ml(n);
        })
        .catch((e) => (ya(e, 8) ? e : Promise.reject(e)))
    );
  }
  function w(e, t, n) {
    for (const o of a.list()) o(e, t, n);
  }
  function x(e, t, n, o, i) {
    const s = g(e, t);
    if (s) return s;
    const a = t === pa,
      c = Ds ? history.state : {};
    n &&
      (o || a
        ? r.replace(e.fullPath, js({ scroll: a && c && c.scroll }, i))
        : r.push(e.fullPath, i)),
      (l.value = e),
      $(e, t, n, a),
      L();
  }
  let T;
  function S() {
    T ||
      (T = r.listen((e, t, n) => {
        if (!P.listening) return;
        const o = p(e),
          i = v(o);
        if (i) return void y(js(i, { replace: !0 }), o).catch(Vs);
        c = o;
        const s = l.value;
        var a, u;
        Ds && ((a = sa(s.fullPath, n.delta)), (u = ra()), aa.set(a, u)),
          _(o, s)
            .catch((e) =>
              ya(e, 12)
                ? e
                : ya(e, 2)
                ? (y(e.to, o)
                    .then((e) => {
                      ya(e, 20) && !n.delta && n.type === Zs.pop && r.go(-1, !1);
                    })
                    .catch(Vs),
                  Promise.reject())
                : (n.delta && r.go(-n.delta, !1), O(e, o, s))
            )
            .then((e) => {
              (e = e || x(o, s, !1)) &&
                (n.delta && !ya(e, 8)
                  ? r.go(-n.delta, !1)
                  : n.type === Zs.pop && ya(e, 20) && r.go(-1, !1)),
                w(o, s, e);
            })
            .catch(Vs);
      }));
  }
  let C,
    k = sl(),
    E = sl();
  function O(e, t, n) {
    L(e);
    const o = E.list();
    return o.length ? o.forEach((o) => o(e, t, n)) : console.error(e), Promise.reject(e);
  }
  function L(e) {
    return C || ((C = !e), S(), k.list().forEach(([t, n]) => (e ? n(e) : t())), k.reset()), e;
  }
  function $(t, n, o, r) {
    const { scrollBehavior: i } = e;
    if (!Ds || !i) return Promise.resolve();
    const s =
      (!o &&
        (function (e) {
          const t = aa.get(e);
          return aa.delete(e), t;
        })(sa(t.fullPath, 0))) ||
      ((r || !o) && history.state && history.state.scroll) ||
      null;
    return On()
      .then(() => i(t, n, s))
      .then((e) => e && ia(e))
      .catch((e) => O(e, t, n));
  }
  const I = (e) => r.go(e);
  let M;
  const A = new Set(),
    P = {
      currentRoute: l,
      listening: !0,
      addRoute: function (e, n) {
        let o, r;
        return fa(e) ? ((o = t.getRecordMatcher(e)), (r = n)) : (r = e), t.addRoute(r, o);
      },
      removeRoute: function (e) {
        const n = t.getRecordMatcher(e);
        n && t.removeRoute(n);
      },
      hasRoute: function (e) {
        return !!t.getRecordMatcher(e);
      },
      getRoutes: function () {
        return t.getRoutes().map((e) => e.record);
      },
      resolve: p,
      options: e,
      push: m,
      replace: function (e) {
        return m(js(h(e), { replace: !0 }));
      },
      go: I,
      back: () => I(-1),
      forward: () => I(1),
      beforeEach: i.add,
      beforeResolve: s.add,
      afterEach: a.add,
      onError: E.add,
      isReady: function () {
        return C && l.value !== pa
          ? Promise.resolve()
          : new Promise((e, t) => {
              k.add([e, t]);
            });
      },
      install(e) {
        e.component('RouterLink', ul),
          e.component('RouterView', hl),
          (e.config.globalProperties.$router = this),
          Object.defineProperty(e.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => dn(l)
          }),
          Ds && !M && l.value === pa && ((M = !0), m(r.location).catch((e) => {}));
        const t = {};
        for (const o in pa) t[o] = wi(() => l.value[o]);
        e.provide(ol, this), e.provide(rl, Ut(t)), e.provide(il, l);
        const n = e.unmount;
        A.add(e),
          (e.unmount = function () {
            A.delete(e),
              A.size < 1 && ((c = pa), T && T(), (T = null), (l.value = pa), (M = !1), (C = !1)),
              n();
          });
      }
    };
  return P;
}
function ml(e) {
  return e.reduce((e, t) => e.then(() => t()), Promise.resolve());
}
function vl() {
  return Gn(rl);
}
const yl = me(
  () =>
    'undefined' != typeof __uniConfig &&
    __uniConfig.locales &&
    !!Object.keys(__uniConfig.locales).length
);
let bl;
function _l(e) {
  return Fs(e, ne)
    ? Tl().f(
        e,
        (function () {
          const e = Kd(),
            t = __uniConfig.locales;
          return t[e] || t[__uniConfig.fallbackLocale] || t.en || {};
        })(),
        ne
      )
    : e;
}
function wl(e, t) {
  if (1 === t.length) {
    if (e) {
      const n = (e) => y(e) && Fs(e, ne),
        o = t[0];
      let r = [];
      if (p(e) && (r = e.filter((e) => n(e[o]))).length) return r;
      const i = e[t[0]];
      if (n(i)) return e;
    }
    return;
  }
  const n = t.shift();
  return wl(e && e[n], t);
}
function xl(e, t) {
  const n = wl(e, t);
  if (!n) return !1;
  const o = t[t.length - 1];
  if (p(n)) n.forEach((e) => xl(e, [o]));
  else {
    let e = n[o];
    Object.defineProperty(n, o, {
      get: () => _l(e),
      set(t) {
        e = t;
      }
    });
  }
  return !0;
}
function Tl() {
  if (!bl) {
    let e;
    if (
      ((e =
        (navigator.cookieEnabled && window.localStorage && localStorage.UNI_LOCALE) ||
        __uniConfig.locale ||
        navigator.language),
      (bl = Ns(e)),
      yl())
    ) {
      const t = Object.keys(__uniConfig.locales || {});
      t.length && t.forEach((e) => bl.add(e, __uniConfig.locales[e])), bl.setLocale(e);
    }
  }
  return bl;
}
function Sl(e, t, n) {
  return t.reduce((t, o, r) => ((t[e + o] = n[r]), t), {});
}
const Cl = me(() => {
    const e = 'uni.async.',
      t = ['error'];
    Tl().add('en', Sl(e, t, ['The connection timed out, click the screen to try again.']), !1),
      Tl().add(
        'es',
        Sl(e, t, [
          'Se agotó el tiempo de conexión, haga clic en la pantalla para volver a intentarlo.'
        ]),
        !1
      ),
      Tl().add('fr', Sl(e, t, ["La connexion a expiré, cliquez sur l'écran pour réessayer."]), !1),
      Tl().add('zh-Hans', Sl(e, t, ['连接服务器超时，点击屏幕重试']), !1),
      Tl().add('zh-Hant', Sl(e, t, ['連接服務器超時，點擊屏幕重試']), !1);
  }),
  kl = me(() => {
    const e = 'uni.showToast.',
      t = ['unpaired'];
    Tl().add('en', Sl(e, t, ['Please note showToast must be paired with hideToast']), !1),
      Tl().add(
        'es',
        Sl(e, t, ['Tenga en cuenta que showToast debe estar emparejado con hideToast']),
        !1
      ),
      Tl().add('fr', Sl(e, t, ['Veuillez noter que showToast doit être associé à hideToast']), !1),
      Tl().add('zh-Hans', Sl(e, t, ['请注意 showToast 与 hideToast 必须配对使用']), !1),
      Tl().add('zh-Hant', Sl(e, t, ['請注意 showToast 與 hideToast 必須配對使用']), !1);
  }),
  El = me(() => {
    const e = 'uni.showLoading.',
      t = ['unpaired'];
    Tl().add('en', Sl(e, t, ['Please note showLoading must be paired with hideLoading']), !1),
      Tl().add(
        'es',
        Sl(e, t, ['Tenga en cuenta que showLoading debe estar emparejado con hideLoading']),
        !1
      ),
      Tl().add(
        'fr',
        Sl(e, t, ['Veuillez noter que showLoading doit être associé à hideLoading']),
        !1
      ),
      Tl().add('zh-Hans', Sl(e, t, ['请注意 showLoading 与 hideLoading 必须配对使用']), !1),
      Tl().add('zh-Hant', Sl(e, t, ['請注意 showLoading 與 hideLoading 必須配對使用']), !1);
  }),
  Ol = me(() => {
    const e = 'uni.showModal.',
      t = ['cancel', 'confirm'];
    Tl().add('en', Sl(e, t, ['Cancel', 'OK']), !1),
      Tl().add('es', Sl(e, t, ['Cancelar', 'OK']), !1),
      Tl().add('fr', Sl(e, t, ['Annuler', 'OK']), !1),
      Tl().add('zh-Hans', Sl(e, t, ['取消', '确定']), !1),
      Tl().add('zh-Hant', Sl(e, t, ['取消', '確定']), !1);
  }),
  Ll = me(() => {
    const e = 'uni.video.',
      t = ['danmu', 'volume'];
    Tl().add('en', Sl(e, t, ['Danmu', 'Volume']), !1),
      Tl().add('es', Sl(e, t, ['Danmu', 'Volumen']), !1),
      Tl().add('fr', Sl(e, t, ['Danmu', 'Le Volume']), !1),
      Tl().add('zh-Hans', Sl(e, t, ['弹幕', '音量']), !1),
      Tl().add('zh-Hant', Sl(e, t, ['彈幕', '音量']), !1);
  });
function $l(e) {
  const t = new Be();
  return {
    on: (e, n) => t.on(e, n),
    once: (e, n) => t.once(e, n),
    off: (e, n) => t.off(e, n),
    emit: (e, ...n) => t.emit(e, ...n),
    subscribe(n, o, r = !1) {
      t[r ? 'once' : 'on'](`${e}.${n}`, o);
    },
    unsubscribe(n, o) {
      t.off(`${e}.${n}`, o);
    },
    subscribeHandler(n, o, r) {
      t.emit(`${e}.${n}`, o, r);
    }
  };
}
let Il = 1;
const Ml = Object.create(null);
function Al(e, t) {
  return e + '.' + t;
}
function Pl(e, t, n) {
  (t = Al(e, t)), Ml[t] || (Ml[t] = n);
}
function Bl({ id: e, name: t, args: n }, o) {
  t = Al(o, t);
  const r = (t) => {
      e && Rm.publishHandler('invokeViewApi.' + e, t);
    },
    i = Ml[t];
  i ? i(n, r) : r({});
}
const Rl = c($l('service'), {
    invokeServiceMethod: (e, t, n) => {
      const { subscribe: o, publishHandler: r } = Rm,
        i = n ? Il++ : 0;
      n && o('invokeServiceApi.' + i, n, !0), r('invokeServiceApi', { id: i, name: e, args: t });
    }
  }),
  Nl = we(!0);
let Fl;
function Dl() {
  Fl && (clearTimeout(Fl), (Fl = null));
}
let jl = 0,
  ql = 0;
function Vl(e) {
  if ((Dl(), 1 !== e.touches.length)) return;
  const { pageX: t, pageY: n } = e.touches[0];
  (jl = t),
    (ql = n),
    (Fl = setTimeout(function () {
      const t = new CustomEvent('longpress', {
        bubbles: !0,
        cancelable: !0,
        target: e.target,
        currentTarget: e.currentTarget
      });
      (t.touches = e.touches), (t.changedTouches = e.changedTouches), e.target.dispatchEvent(t);
    }, 350));
}
function Wl(e) {
  if (!Fl) return;
  if (1 !== e.touches.length) return Dl();
  const { pageX: t, pageY: n } = e.touches[0];
  return Math.abs(t - jl) > 10 || Math.abs(n - ql) > 10 ? Dl() : void 0;
}
function Hl(e, t) {
  const n = Number(e);
  return isNaN(n) ? t : n;
}
function zl() {
  const e = __uniConfig.globalStyle || {},
    t = Hl(e.rpxCalcMaxDeviceWidth, 960),
    n = Hl(e.rpxCalcBaseDeviceWidth, 375);
  function o() {
    let e = (function () {
      const e = /^Apple/.test(navigator.vendor) && 'number' == typeof window.orientation,
        t = e && 90 === Math.abs(window.orientation);
      var n = e ? Math[t ? 'max' : 'min'](screen.width, screen.height) : screen.width;
      return Math.min(window.innerWidth, document.documentElement.clientWidth, n) || n;
    })();
    (e = e <= t ? e : n), (document.documentElement.style.fontSize = e / 23.4375 + 'px');
  }
  o(),
    document.addEventListener('DOMContentLoaded', o),
    window.addEventListener('load', o),
    window.addEventListener('resize', o);
}
function Ul() {
  zl(),
    ye(),
    window.addEventListener('touchstart', Vl, Nl),
    window.addEventListener('touchmove', Wl, Nl),
    window.addEventListener('touchend', Dl, Nl),
    window.addEventListener('touchcancel', Dl, Nl);
}
function Xl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var Yl,
  Kl,
  Gl = ['top', 'left', 'right', 'bottom'],
  Zl = {};
function Ql() {
  return (Kl =
    'CSS' in window && 'function' == typeof CSS.supports
      ? CSS.supports('top: env(safe-area-inset-top)')
        ? 'env'
        : CSS.supports('top: constant(safe-area-inset-top)')
        ? 'constant'
        : ''
      : '');
}
function Jl() {
  if ((Kl = 'string' == typeof Kl ? Kl : Ql())) {
    var e = [],
      t = !1;
    try {
      var n = Object.defineProperty({}, 'passive', {
        get: function () {
          t = { passive: !0 };
        }
      });
      window.addEventListener('test', null, n);
    } catch (a) {}
    var o = document.createElement('div');
    r(o, {
      position: 'absolute',
      left: '0',
      top: '0',
      width: '0',
      height: '0',
      zIndex: '-1',
      overflow: 'hidden',
      visibility: 'hidden'
    }),
      Gl.forEach(function (e) {
        s(o, e);
      }),
      document.body.appendChild(o),
      i(),
      (Yl = !0);
  } else
    Gl.forEach(function (e) {
      Zl[e] = 0;
    });
  function r(e, t) {
    var n = e.style;
    Object.keys(t).forEach(function (e) {
      var o = t[e];
      n[e] = o;
    });
  }
  function i(t) {
    t
      ? e.push(t)
      : e.forEach(function (e) {
          e();
        });
  }
  function s(e, n) {
    var o = document.createElement('div'),
      s = document.createElement('div'),
      a = document.createElement('div'),
      l = document.createElement('div'),
      c = {
        position: 'absolute',
        width: '100px',
        height: '200px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        paddingBottom: Kl + '(safe-area-inset-' + n + ')'
      };
    r(o, c),
      r(s, c),
      r(a, { transition: '0s', animation: 'none', width: '400px', height: '400px' }),
      r(l, { transition: '0s', animation: 'none', width: '250%', height: '250%' }),
      o.appendChild(a),
      s.appendChild(l),
      e.appendChild(o),
      e.appendChild(s),
      i(function () {
        o.scrollTop = s.scrollTop = 1e4;
        var e = o.scrollTop,
          r = s.scrollTop;
        function i() {
          this.scrollTop !== (this === o ? e : r) &&
            ((o.scrollTop = s.scrollTop = 1e4),
            (e = o.scrollTop),
            (r = s.scrollTop),
            (function (e) {
              tc.length ||
                setTimeout(function () {
                  var e = {};
                  tc.forEach(function (t) {
                    e[t] = Zl[t];
                  }),
                    (tc.length = 0),
                    nc.forEach(function (t) {
                      t(e);
                    });
                }, 0);
              tc.push(e);
            })(n));
        }
        o.addEventListener('scroll', i, t), s.addEventListener('scroll', i, t);
      });
    var u = getComputedStyle(o);
    Object.defineProperty(Zl, n, {
      configurable: !0,
      get: function () {
        return parseFloat(u.paddingBottom);
      }
    });
  }
}
function ec(e) {
  return Yl || Jl(), Zl[e];
}
var tc = [];
var nc = [];
const oc = Xl({
    get support() {
      return 0 != ('string' == typeof Kl ? Kl : Ql()).length;
    },
    get top() {
      return ec('top');
    },
    get left() {
      return ec('left');
    },
    get right() {
      return ec('right');
    },
    get bottom() {
      return ec('bottom');
    },
    onChange: function (e) {
      Ql() && (Yl || Jl(), 'function' == typeof e && nc.push(e));
    },
    offChange: function (e) {
      var t = nc.indexOf(e);
      t >= 0 && nc.splice(t, 1);
    }
  }),
  rc = Ts(() => {}, ['prevent']),
  ic = Ts((e) => {}, ['stop']);
function sc(e, t) {
  return parseInt((e.getPropertyValue(t).match(/\d+/) || ['0'])[0]);
}
function ac() {
  const e = sc(document.documentElement.style, '--window-top');
  return e ? e + oc.top : 0;
}
function lc() {
  const e = document.documentElement.style,
    t = ac(),
    n = sc(e, '--window-bottom'),
    o = sc(e, '--window-left'),
    r = sc(e, '--window-right'),
    i = sc(e, '--top-window-height');
  return {
    top: t,
    bottom: n ? n + oc.bottom : 0,
    left: o ? o + oc.left : 0,
    right: r ? r + oc.right : 0,
    topWindowHeight: i || 0
  };
}
function cc(e) {
  const t = document.documentElement.style;
  Object.keys(e).forEach((n) => {
    t.setProperty(n, e[n]);
  });
}
function uc(e) {
  return cc(e);
}
function dc(e) {
  return Symbol(e);
}
function fc(e) {
  return -1 !== (e += '').indexOf('rpx') || -1 !== e.indexOf('upx');
}
function pc(e, t = !1) {
  if (t)
    return (function (e) {
      if (!fc(e)) return e;
      return e.replace(/(\d+(\.\d+)?)[ru]px/g, (e, t) => md(parseFloat(t)) + 'px');
    })(e);
  if (y(e)) {
    const t = parseInt(e) || 0;
    return fc(e) ? md(t) : t;
  }
  return e;
}
const hc =
    'M1.952 18.080q-0.32-0.352-0.416-0.88t0.128-0.976l0.16-0.352q0.224-0.416 0.64-0.528t0.8 0.176l6.496 4.704q0.384 0.288 0.912 0.272t0.88-0.336l17.312-14.272q0.352-0.288 0.848-0.256t0.848 0.352l-0.416-0.416q0.32 0.352 0.32 0.816t-0.32 0.816l-18.656 18.912q-0.32 0.352-0.8 0.352t-0.8-0.32l-7.936-8.064z',
  gc =
    'M15.808 0.16q-4.224 0-7.872 2.176-3.552 2.112-5.632 5.728-2.144 3.744-2.144 8.128 0 4.192 2.144 7.872 2.112 3.52 5.632 5.632 3.68 2.144 7.872 2.144 4.384 0 8.128-2.144 3.616-2.080 5.728-5.632 2.176-3.648 2.176-7.872 0-4.384-2.176-8.128-2.112-3.616-5.728-5.728-3.744-2.176-8.128-2.176zM15.136 8.672h1.728q0.128 0 0.224 0.096t0.096 0.256l-0.384 10.24q0 0.064-0.048 0.112t-0.112 0.048h-1.248q-0.096 0-0.144-0.048t-0.048-0.112l-0.384-10.24q0-0.16 0.096-0.256t0.224-0.096zM16 23.328q-0.48 0-0.832-0.352t-0.352-0.848 0.352-0.848 0.832-0.352 0.832 0.352 0.352 0.848-0.352 0.848-0.832 0.352z',
  mc =
    'M21.781 7.844l-9.063 8.594 9.063 8.594q0.25 0.25 0.25 0.609t-0.25 0.578q-0.25 0.25-0.578 0.25t-0.578-0.25l-9.625-9.125q-0.156-0.125-0.203-0.297t-0.047-0.359q0-0.156 0.047-0.328t0.203-0.297l9.625-9.125q0.25-0.25 0.578-0.25t0.578 0.25q0.25 0.219 0.25 0.578t-0.25 0.578z';
function vc(e, t = '#000', n = 27) {
  return ei(
    'svg',
    { width: n, height: n, viewBox: '0 0 32 32' },
    [ei('path', { d: e, fill: t }, null, 8, ['d', 'fill'])],
    8,
    ['width', 'height']
  );
}
function yc() {
  {
    const { $pageInstance: e } = fi();
    return e && e.proxy.$page.id;
  }
}
function bc(e) {
  const t = ce(e);
  if (t.$page) return t.$page.id;
  if (t.$) {
    const { $pageInstance: e } = t.$;
    return e && e.proxy.$page.id;
  }
}
function _c() {
  const e = xh(),
    t = e.length;
  if (t) return e[t - 1];
}
function wc() {
  const e = _c();
  if (e) return e.$page.meta;
}
function xc() {
  const e = wc();
  return e ? e.id : -1;
}
function Tc() {
  const e = _c();
  if (e) return e.$vm;
}
const Sc = ['navigationBar', 'pullToRefresh'];
function Cc(e, t) {
  const n = JSON.parse(JSON.stringify(__uniConfig.globalStyle || {})),
    o = c({ id: t }, n, e);
  Sc.forEach((t) => {
    o[t] = c({}, n[t], e[t]);
  });
  const { navigationBar: r } = o;
  return r.titleText && r.titleImage && (r.titleText = ''), o;
}
function kc(e, t, n) {
  if (y(e)) (n = t), (t = e), (e = Tc());
  else if ('number' == typeof e) {
    const t = xh().find((t) => t.$page.id === e);
    e = t ? t.$vm : Tc();
  }
  if (!e) return;
  const o = e.$[t];
  return (
    o &&
    ((e, t) => {
      let n;
      for (let o = 0; o < e.length; o++) n = e[o](t);
      return n;
    })(o, n)
  );
}
function Ec(e) {
  e.preventDefault();
}
let Oc,
  Lc = 0;
function $c({ onPageScroll: e, onReachBottom: t, onReachBottomDistance: n }) {
  let o = !1,
    r = !1,
    i = !0;
  const s = () => {
    function s() {
      if (
        (() => {
          const { scrollHeight: e } = document.documentElement,
            t = window.innerHeight,
            o = window.scrollY,
            i = o > 0 && e > t && o + t + n >= e,
            s = Math.abs(e - Lc) > n;
          return !i || (r && !s) ? (!i && r && (r = !1), !1) : ((Lc = e), (r = !0), !0);
        })()
      )
        return (
          t && t(),
          (i = !1),
          setTimeout(function () {
            i = !0;
          }, 350),
          !0
        );
    }
    e && e(window.pageYOffset), t && i && (s() || (Oc = setTimeout(s, 300))), (o = !1);
  };
  return function () {
    clearTimeout(Oc), o || requestAnimationFrame(s), (o = !0);
  };
}
function Ic(e, t) {
  if (0 === t.indexOf('/')) return t;
  if (0 === t.indexOf('./')) return Ic(e, t.slice(2));
  const n = t.split('/'),
    o = n.length;
  let r = 0;
  for (; r < o && '..' === n[r]; r++);
  n.splice(0, r), (t = n.join('/'));
  const i = e.length > 0 ? e.split('/') : [];
  return i.splice(i.length - r - 1, r + 1), ge(i.concat(n).join('/'));
}
function Mc(e, t = !1) {
  return t
    ? __uniRoutes.find((t) => t.path === e || t.alias === e)
    : __uniRoutes.find((t) => t.path === e);
}
class Ac {
  constructor(e) {
    (this.$bindClass = !1),
      (this.$bindStyle = !1),
      (this.$vm = e),
      (this.$el = (function (e, t = !1) {
        const { vnode: n } = e;
        if (de(n.el)) return t ? (n.el ? [n.el] : []) : n.el;
        const { subTree: o } = e;
        if (16 & o.shapeFlag) {
          const e = o.children.filter((e) => e.el && de(e.el));
          if (e.length > 0) return t ? e.map((e) => e.el) : e[0].el;
        }
        return t ? (n.el ? [n.el] : []) : n.el;
      })(e.$)),
      this.$el.getAttribute &&
        ((this.$bindClass = !!this.$el.getAttribute('class')),
        (this.$bindStyle = !!this.$el.getAttribute('style')));
  }
  selectComponent(e) {
    if (!this.$el || !e) return;
    const t = Nc(this.$el.querySelector(e));
    return t ? Pc(t, !1) : void 0;
  }
  selectAllComponents(e) {
    if (!this.$el || !e) return [];
    const t = [],
      n = this.$el.querySelectorAll(e);
    for (let o = 0; o < n.length; o++) {
      const e = Nc(n[o]);
      e && t.push(Pc(e, !1));
    }
    return t;
  }
  forceUpdate(e) {
    'class' === e
      ? this.$bindClass
        ? ((this.$el.__wxsClassChanged = !0), this.$vm.$forceUpdate())
        : this.updateWxsClass()
      : 'style' === e &&
        (this.$bindStyle
          ? ((this.$el.__wxsStyleChanged = !0), this.$vm.$forceUpdate())
          : this.updateWxsStyle());
  }
  updateWxsClass() {
    const { __wxsAddClass: e } = this.$el;
    e.length && (this.$el.className = e.join(' '));
  }
  updateWxsStyle() {
    const { __wxsStyle: e } = this.$el;
    e &&
      this.$el.setAttribute(
        'style',
        (function (e) {
          let t = '';
          if (!e || y(e)) return t;
          for (const n in e) {
            const o = e[n],
              r = n.startsWith('--') ? n : I(n);
            (y(o) || 'number' == typeof o) && (t += `${r}:${o};`);
          }
          return t;
        })(e)
      );
  }
  setStyle(e) {
    return this.$el && e
      ? (y(e) && (e = W(e)), S(e) && ((this.$el.__wxsStyle = e), this.forceUpdate('style')), this)
      : this;
  }
  addClass(e) {
    if (!this.$el || !e) return this;
    const t = this.$el.__wxsAddClass || (this.$el.__wxsAddClass = []);
    return -1 === t.indexOf(e) && (t.push(e), this.forceUpdate('class')), this;
  }
  removeClass(e) {
    if (!this.$el || !e) return this;
    const { __wxsAddClass: t } = this.$el;
    if (t) {
      const n = t.indexOf(e);
      n > -1 && t.splice(n, 1);
    }
    const n = this.$el.__wxsRemoveClass || (this.$el.__wxsRemoveClass = []);
    return -1 === n.indexOf(e) && (n.push(e), this.forceUpdate('class')), this;
  }
  hasClass(e) {
    return this.$el && this.$el.classList.contains(e);
  }
  getDataset() {
    return this.$el && this.$el.dataset;
  }
  callMethod(e, t = {}) {
    const n = this.$vm[e];
    v(n)
      ? n(JSON.parse(JSON.stringify(t)))
      : this.$vm.ownerId &&
        Rm.publishHandler('onWxsInvokeCallMethod', {
          nodeId: this.$el.__id,
          ownerId: this.$vm.ownerId,
          method: e,
          args: t
        });
  }
  requestAnimationFrame(e) {
    return window.requestAnimationFrame(e);
  }
  getState() {
    return this.$el && (this.$el.__wxsState || (this.$el.__wxsState = {}));
  }
  triggerEvent(e, t = {}) {
    return this.$vm.$emit(e, t), this;
  }
  getComputedStyle(e) {
    if (this.$el) {
      const t = window.getComputedStyle(this.$el);
      return e && e.length ? e.reduce((e, n) => ((e[n] = t[n]), e), {}) : t;
    }
    return {};
  }
  setTimeout(e, t) {
    return window.setTimeout(e, t);
  }
  clearTimeout(e) {
    return window.clearTimeout(e);
  }
  getBoundingClientRect() {
    return this.$el.getBoundingClientRect();
  }
}
function Pc(e, t = !0) {
  if ((t && e && (e = ue(e.$)), e && e.$el))
    return (
      e.$el.__wxsComponentDescriptor || (e.$el.__wxsComponentDescriptor = new Ac(e)),
      e.$el.__wxsComponentDescriptor
    );
}
function Bc(e, t) {
  return Pc(e, t);
}
function Rc(e, t, n, o = !0) {
  if (t) {
    e.__instance ||
      ((e.__instance = !0), Object.defineProperty(e, 'instance', { get: () => Bc(n.proxy, !1) }));
    const r = (function (e, t, n = !0) {
      if (!t) return !1;
      if (n && e.length < 2) return !1;
      const o = ue(t);
      if (!o) return !1;
      const r = o.$.type;
      return !(!r.$wxs && !r.$renderjs) && o;
    })(t, n, o);
    if (r) return [e, Bc(r, !1)];
  }
}
function Nc(e) {
  if (e) return e.__vueParentComponent && e.__vueParentComponent.proxy;
}
function Fc(e, t = !1) {
  const { type: n, timeStamp: o, target: r, currentTarget: i } = e;
  let s, a;
  (s = xe(
    t
      ? r
      : (function (e) {
          for (; e && 0 !== e.tagName.indexOf('UNI-'); ) e = e.parentElement;
          return e;
        })(r)
  )),
    (a = xe(i));
  const l = { type: n, timeStamp: o, target: s, detail: {}, currentTarget: a };
  return (
    e._stopped && (l._stopped = !0),
    e.type.startsWith('touch') && ((l.touches = e.touches), (l.changedTouches = e.changedTouches)),
    (function (e, t) {
      c(e, {
        preventDefault: () => t.preventDefault(),
        stopPropagation: () => t.stopPropagation()
      });
    })(l, e),
    l
  );
}
function Dc(e, t) {
  return {
    force: 1,
    identifier: 0,
    clientX: e.clientX,
    clientY: e.clientY - t,
    pageX: e.pageX,
    pageY: e.pageY - t
  };
}
function jc(e, t) {
  const n = [];
  for (let o = 0; o < e.length; o++) {
    const { identifier: r, pageX: i, pageY: s, clientX: a, clientY: l, force: c } = e[o];
    n.push({ identifier: r, pageX: i, pageY: s - t, clientX: a, clientY: l - t, force: c || 0 });
  }
  return n;
}
const qc = Object.defineProperty(
  {
    __proto__: null,
    $nne: function (e, t, n) {
      const { currentTarget: o } = e;
      if (!(e instanceof Event && o instanceof HTMLElement)) return [e];
      const r = 0 !== o.tagName.indexOf('UNI-');
      if (r) return Rc(e, t, n, !1) || [e];
      const i = Fc(e, r);
      if ('click' === e.type)
        !(function (e, t) {
          const { x: n, y: o } = t,
            r = ac();
          (e.detail = { x: n, y: o - r }), (e.touches = e.changedTouches = [Dc(t, r)]);
        })(i, e);
      else if (((e) => 0 === e.type.indexOf('mouse') || ['contextmenu'].includes(e.type))(e))
        !(function (e, t) {
          const n = ac();
          (e.pageX = t.pageX),
            (e.pageY = t.pageY - n),
            (e.clientX = t.clientX),
            (e.clientY = t.clientY - n),
            (e.touches = e.changedTouches = [Dc(t, n)]);
        })(i, e);
      else if (
        ((e) =>
          ('undefined' != typeof TouchEvent && e instanceof TouchEvent) ||
          0 === e.type.indexOf('touch') ||
          ['longpress'].indexOf(e.type) >= 0)(e)
      ) {
        const t = ac();
        (i.touches = jc(e.touches, t)), (i.changedTouches = jc(e.changedTouches, t));
      } else if (((e) => !e.type.indexOf('key') && e instanceof KeyboardEvent)(e)) {
        ['key', 'code'].forEach((t) => {
          Object.defineProperty(i, t, { get: () => e[t] });
        });
      }
      return Rc(i, t, n) || [i];
    },
    createNativeEvent: Fc
  },
  Symbol.toStringTag,
  { value: 'Module' }
);
function Vc(e) {
  !(function (e) {
    const t = e.globalProperties;
    c(t, qc), (t.$gcd = Bc);
  })(e._context.config);
}
let Wc = 1;
function Hc(e) {
  return (e || xc()) + '.invokeViewApi';
}
const zc = c($l('view'), {
  invokeOnCallback: (e, t) => Nm.emit('api.' + e, t),
  invokeViewMethod: (e, t, n, o) => {
    const { subscribe: r, publishHandler: i } = Nm,
      s = o ? Wc++ : 0;
    o && r('invokeViewApi.' + s, o, !0), i(Hc(n), { id: s, name: e, args: t }, n);
  },
  invokeViewMethodKeepAlive: (e, t, n, o) => {
    const { subscribe: r, unsubscribe: i, publishHandler: s } = Nm,
      a = Wc++,
      l = 'invokeViewApi.' + a;
    return (
      r(l, n),
      s(Hc(o), { id: a, name: e, args: t }, o),
      () => {
        i(l);
      }
    );
  }
});
function Uc(e) {
  kc(_c(), 'onResize', e), Nm.invokeOnCallback('onWindowResize', e);
}
function Xc(e) {
  const t = _c();
  kc(Uh(), 'onShow', e), kc(t, 'onShow');
}
function Yc() {
  kc(Uh(), 'onHide'), kc(_c(), 'onHide');
}
const Kc = ['onPageScroll', 'onReachBottom'];
function Gc() {
  Kc.forEach((e) =>
    Nm.subscribe(
      e,
      (function (e) {
        return (t, n) => {
          kc(parseInt(n), e, t);
        };
      })(e)
    )
  );
}
function Zc() {
  !(function () {
    const { on: e } = Nm;
    e('onResize', Uc), e('onAppEnterForeground', Xc), e('onAppEnterBackground', Yc);
  })(),
    Gc();
}
function Qc() {
  if (this.$route) {
    const e = this.$route.meta;
    return e.eventChannel || (e.eventChannel = new Oe(this.$page.id)), e.eventChannel;
  }
}
function Jc(e) {
  e._context.config.globalProperties.getOpenerEventChannel = Qc;
}
function eu() {
  return { path: '', query: {}, scene: 1001, referrerInfo: { appId: '', extraData: {} } };
}
function tu(e) {
  return /^-?\d+[ur]px$/i.test(e)
    ? e.replace(/(^-?\d+)[ur]px$/i, (e, t) => `${md(parseFloat(t))}px`)
    : /^-?[\d\.]+$/.test(e)
    ? `${e}px`
    : e || '';
}
function nu(e) {
  const t = e.animation;
  if (!t || !t.actions || !t.actions.length) return;
  let n = 0;
  const o = t.actions,
    r = t.actions.length;
  function i() {
    const t = o[n],
      s = t.option.transition,
      a = (function (e) {
        const t = [
            'matrix',
            'matrix3d',
            'scale',
            'scale3d',
            'rotate3d',
            'skew',
            'translate',
            'translate3d'
          ],
          n = [
            'scaleX',
            'scaleY',
            'scaleZ',
            'rotate',
            'rotateX',
            'rotateY',
            'rotateZ',
            'skewX',
            'skewY',
            'translateX',
            'translateY',
            'translateZ'
          ],
          o = ['opacity', 'background-color'],
          r = ['width', 'height', 'left', 'right', 'top', 'bottom'],
          i = e.animates,
          s = e.option,
          a = s.transition,
          l = {},
          c = [];
        return (
          i.forEach((e) => {
            let i = e.type,
              s = [...e.args];
            if (t.concat(n).includes(i))
              i.startsWith('rotate') || i.startsWith('skew')
                ? (s = s.map((e) => parseFloat(e) + 'deg'))
                : i.startsWith('translate') && (s = s.map(tu)),
                n.indexOf(i) >= 0 && (s.length = 1),
                c.push(`${i}(${s.join(',')})`);
            else if (o.concat(r).includes(s[0])) {
              i = s[0];
              const e = s[1];
              l[i] = r.includes(i) ? tu(e) : e;
            }
          }),
          (l.transform = l.webkitTransform = c.join(' ')),
          (l.transition = l.webkitTransition =
            Object.keys(l)
              .map(
                (e) =>
                  `${(function (e) {
                    return e
                      .replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`)
                      .replace('webkit', '-webkit');
                  })(e)} ${a.duration}ms ${a.timingFunction} ${a.delay}ms`
              )
              .join(',')),
          (l.transformOrigin = l.webkitTransformOrigin = s.transformOrigin),
          l
        );
      })(t);
    Object.keys(a).forEach((t) => {
      e.$el.style[t] = a[t];
    }),
      (n += 1),
      n < r && setTimeout(i, s.duration + s.delay);
  }
  setTimeout(() => {
    i();
  }, 0);
}
const ou = {
    props: ['animation'],
    watch: {
      animation: {
        deep: !0,
        handler() {
          nu(this);
        }
      }
    },
    mounted() {
      nu(this);
    }
  },
  ru = (e) => {
    e.__reserved = !0;
    const { props: t, mixins: n } = e;
    return (t && t.animation) || (n || (e.mixins = [])).push(ou), iu(e);
  },
  iu = (e) => ((e.__reserved = !0), (e.compatConfig = { MODE: 3 }), ho(e));
function su(e) {
  return (e.__wwe = !0), e;
}
function au(e, t) {
  return (n, o, r) => {
    e.value &&
      t(
        n,
        (function (e, t, n, o) {
          let r;
          return (
            (r = xe(n)),
            {
              type: o.type || e,
              timeStamp: t.timeStamp || 0,
              target: r,
              currentTarget: r,
              detail: o
            }
          );
        })(n, o, e.value, r || {})
      );
  };
}
const lu = {
  hoverClass: { type: String, default: 'none' },
  hoverStopPropagation: { type: Boolean, default: !1 },
  hoverStartTime: { type: [Number, String], default: 50 },
  hoverStayTime: { type: [Number, String], default: 400 }
};
function cu(e) {
  const t = an(!1);
  let n,
    o,
    r = !1;
  function i() {
    requestAnimationFrame(() => {
      clearTimeout(o),
        (o = setTimeout(() => {
          t.value = !1;
        }, parseInt(e.hoverStayTime)));
    });
  }
  function s(o) {
    o._hoverPropagationStopped ||
      (e.hoverClass &&
        'none' !== e.hoverClass &&
        !e.disabled &&
        (e.hoverStopPropagation && (o._hoverPropagationStopped = !0),
        (r = !0),
        (n = setTimeout(() => {
          (t.value = !0), r || i();
        }, parseInt(e.hoverStartTime)))));
  }
  function a() {
    (r = !1), t.value && i();
  }
  function l() {
    a(), window.removeEventListener('mouseup', l);
  }
  return {
    hovering: t,
    binding: {
      onTouchstartPassive: su(function (e) {
        e.touches.length > 1 || s(e);
      }),
      onMousedown: su(function (e) {
        r || (s(e), window.addEventListener('mouseup', l));
      }),
      onTouchend: su(function () {
        a();
      }),
      onMouseup: su(function () {
        r && l();
      }),
      onTouchcancel: su(function () {
        (r = !1), (t.value = !1), clearTimeout(n);
      })
    }
  };
}
function uu(e, t) {
  return y(t) && (t = [t]), t.reduce((t, n) => (e[n] && (t[n] = !0), t), Object.create(null));
}
const du = dc('uf'),
  fu = dc('ul');
function pu(e, t, n) {
  const o = yc();
  (n && !e) ||
    (S(t) &&
      Object.keys(t).forEach((r) => {
        n
          ? 0 !== r.indexOf('@') && 0 !== r.indexOf('uni-') && Rm.on(`uni-${r}-${o}-${e}`, t[r])
          : 0 === r.indexOf('uni-')
          ? Rm.on(r, t[r])
          : e && Rm.on(`uni-${r}-${o}-${e}`, t[r]);
      }));
}
function hu(e, t, n) {
  const o = yc();
  (n && !e) ||
    (S(t) &&
      Object.keys(t).forEach((r) => {
        n
          ? 0 !== r.indexOf('@') && 0 !== r.indexOf('uni-') && Rm.off(`uni-${r}-${o}-${e}`, t[r])
          : 0 === r.indexOf('uni-')
          ? Rm.off(r, t[r])
          : e && Rm.off(`uni-${r}-${o}-${e}`, t[r]);
      }));
}
const gu = ru({
  name: 'Button',
  props: {
    id: { type: String, default: '' },
    hoverClass: { type: String, default: 'button-hover' },
    hoverStartTime: { type: [Number, String], default: 20 },
    hoverStayTime: { type: [Number, String], default: 70 },
    hoverStopPropagation: { type: Boolean, default: !1 },
    disabled: { type: [Boolean, String], default: !1 },
    formType: { type: String, default: '' },
    openType: { type: String, default: '' },
    loading: { type: [Boolean, String], default: !1 },
    plain: { type: [Boolean, String], default: !1 }
  },
  setup(e, { slots: t }) {
    const n = an(null),
      o = Gn(du, !1),
      { hovering: r, binding: i } = cu(e);
    Tl();
    const s = su((t, r) => {
        if (e.disabled) return t.stopImmediatePropagation();
        r && n.value.click();
        const i = e.formType;
        if (i) {
          if (!o) return;
          'submit' === i ? o.submit(t) : 'reset' === i && o.reset(t);
        } else;
      }),
      a = Gn(fu, !1);
    return (
      a &&
        (a.addHandler(s),
        Fo(() => {
          a.removeHandler(s);
        })),
      (function (e, t) {
        pu(e.id, t),
          Jn(
            () => e.id,
            (e, n) => {
              hu(n, t, !0), pu(e, t, !0);
            }
          ),
          Do(() => {
            hu(e.id, t);
          });
      })(e, { 'label-click': s }),
      () => {
        const o = e.hoverClass,
          a = uu(e, 'disabled'),
          l = uu(e, 'loading'),
          c = uu(e, 'plain'),
          u = o && 'none' !== o;
        return ei(
          'uni-button',
          ai({ ref: n, onClick: s, id: e.id, class: u && r.value ? o : '' }, u && i, a, l, c),
          [t.default && t.default()],
          16,
          ['onClick', 'id']
        );
      }
    );
  }
});
function mu(e) {
  return e.$el;
}
function vu(e) {
  const { base: t } = __uniConfig.router;
  return 0 === ge(e).indexOf(t) ? ge(e) : t + e;
}
function yu(e) {
  const { base: t, assets: n } = __uniConfig.router;
  if (
    ('./' === t &&
      (0 === e.indexOf('./static/') || (n && 0 === e.indexOf('./' + n + '/'))) &&
      (e = e.slice(1)),
    0 === e.indexOf('/'))
  ) {
    if (0 !== e.indexOf('//')) return vu(e.slice(1));
    e = 'https:' + e;
  }
  if (oe.test(e) || re.test(e) || 0 === e.indexOf('blob:')) return e;
  const o = xh();
  return o.length ? vu(Ic(o[o.length - 1].$page.route, e).slice(1)) : e;
}
const bu = navigator.userAgent,
  _u = /android/i.test(bu),
  wu = /iphone|ipad|ipod/i.test(bu),
  xu = bu.match(/Windows NT ([\d|\d.\d]*)/i),
  Tu = /Macintosh|Mac/i.test(bu),
  Su = /Linux|X11/i.test(bu),
  Cu = Tu && navigator.maxTouchPoints > 0;
function ku() {
  return /^Apple/.test(navigator.vendor) && 'number' == typeof window.orientation;
}
function Eu(e) {
  return e && 90 === Math.abs(window.orientation);
}
function Ou(e, t) {
  return e ? Math[t ? 'max' : 'min'](screen.width, screen.height) : screen.width;
}
function Lu(e) {
  return Math.min(window.innerWidth, document.documentElement.clientWidth, e) || e;
}
function $u(e, t, n, o) {
  Nm.invokeViewMethod('video.' + e, { videoId: e, type: n, data: o }, t);
}
function Iu(e, t) {
  const n = {},
    { top: o, topWindowHeight: r } = lc();
  if (t.node) {
    const t = e.tagName.split('-')[1];
    t && (n.node = e.querySelector(t));
  }
  if ((t.id && (n.id = e.id), t.dataset && (n.dataset = be(e)), t.rect || t.size)) {
    const i = e.getBoundingClientRect();
    t.rect &&
      ((n.left = i.left),
      (n.right = i.right),
      (n.top = i.top - o - r),
      (n.bottom = i.bottom - o - r)),
      t.size && ((n.width = i.width), (n.height = i.height));
  }
  if (
    (p(t.properties) &&
      t.properties.forEach((e) => {
        e = e.replace(/-([a-z])/g, function (e, t) {
          return t.toUpperCase();
        });
      }),
    t.scrollOffset)
  )
    if ('UNI-SCROLL-VIEW' === e.tagName) {
      const t = e.children[0].children[0];
      (n.scrollLeft = t.scrollLeft),
        (n.scrollTop = t.scrollTop),
        (n.scrollHeight = t.scrollHeight),
        (n.scrollWidth = t.scrollWidth);
    } else (n.scrollLeft = 0), (n.scrollTop = 0), (n.scrollHeight = 0), (n.scrollWidth = 0);
  if (p(t.computedStyle)) {
    const o = getComputedStyle(e);
    t.computedStyle.forEach((e) => {
      n[e] = o[e];
    });
  }
  return (
    t.context &&
      (n.contextInfo = (function (e) {
        return e.__uniContextInfo;
      })(e)),
    n
  );
}
function Mu(e, t) {
  return (
    e.matches ||
    e.matchesSelector ||
    e.mozMatchesSelector ||
    e.msMatchesSelector ||
    e.oMatchesSelector ||
    e.webkitMatchesSelector ||
    function (e) {
      const t = this.parentElement.querySelectorAll(e);
      let n = t.length;
      for (; --n >= 0 && t.item(n) !== this; );
      return n > -1;
    }
  ).call(e, t);
}
function Au(e, t, n) {
  const o = [];
  t.forEach(({ component: t, selector: n, single: r, fields: i }) => {
    null === t
      ? o.push(
          (function (e) {
            const t = {};
            if (
              (e.id && (t.id = ''),
              e.dataset && (t.dataset = {}),
              e.rect && ((t.left = 0), (t.right = 0), (t.top = 0), (t.bottom = 0)),
              e.size &&
                ((t.width = document.documentElement.clientWidth),
                (t.height = document.documentElement.clientHeight)),
              e.scrollOffset)
            ) {
              const e = document.documentElement,
                n = document.body;
              (t.scrollLeft = e.scrollLeft || n.scrollLeft || 0),
                (t.scrollTop = e.scrollTop || n.scrollTop || 0),
                (t.scrollHeight = e.scrollHeight || n.scrollHeight || 0),
                (t.scrollWidth = e.scrollWidth || n.scrollWidth || 0);
            }
            return t;
          })(i)
        )
      : o.push(
          (function (e, t, n, o, r) {
            const i = (function (e, t) {
                return e ? e.$el : t.$el;
              })(t, e),
              s = i.parentElement;
            if (!s) return o ? null : [];
            const { nodeType: a } = i,
              l = 3 === a || 8 === a;
            if (o) {
              const e = l ? s.querySelector(n) : Mu(i, n) ? i : i.querySelector(n);
              return e ? Iu(e, r) : null;
            }
            {
              let e = [];
              const t = (l ? s : i).querySelectorAll(n);
              return (
                t &&
                  t.length &&
                  [].forEach.call(t, (t) => {
                    e.push(Iu(t, r));
                  }),
                !l && Mu(i, n) && e.unshift(Iu(i, r)),
                e
              );
            }
          })(e, t, n, r, i)
        );
  }),
    n(o);
}
const Pu = ['GET', 'OPTIONS', 'HEAD', 'POST', 'PUT', 'DELETE', 'TRACE', 'CONNECT', 'PATCH'];
function Bu(e, t) {
  return e && -1 !== t.indexOf(e) ? e : t[0];
}
function Ru(e) {
  return function () {
    try {
      return e.apply(e, arguments);
    } catch (t) {
      console.error(t);
    }
  };
}
let Nu = 1;
const Fu = {};
function Du(e, t, n) {
  if ('number' == typeof e) {
    const o = Fu[e];
    if (o) return o.keepAlive || delete Fu[e], o.callback(t, n);
  }
  return t;
}
const ju = 'success',
  qu = 'fail',
  Vu = 'complete';
function Wu(e, t = {}, { beforeAll: n, beforeSuccess: o } = {}) {
  S(t) || (t = {});
  const {
      success: r,
      fail: i,
      complete: s
    } = (function (e) {
      const t = {};
      for (const n in e) {
        const o = e[n];
        v(o) && ((t[n] = Ru(o)), delete e[n]);
      }
      return t;
    })(t),
    a = v(r),
    l = v(i),
    c = v(s),
    u = Nu++;
  return (
    (function (e, t, n, o = !1) {
      Fu[e] = { name: t, keepAlive: o, callback: n };
    })(u, e, (u) => {
      ((u = u || {}).errMsg = (function (e, t) {
        return e && -1 !== e.indexOf(':fail') ? t + e.substring(e.indexOf(':fail')) : t + ':ok';
      })(u.errMsg, e)),
        v(n) && n(u),
        u.errMsg === e + ':ok' ? (v(o) && o(u, t), a && r(u)) : l && i(u),
        c && s(u);
    }),
    u
  );
}
const Hu = 'success',
  zu = 'fail',
  Uu = 'complete',
  Xu = {},
  Yu = {};
function Ku(e, t) {
  return function (n) {
    return e(n, t) || n;
  };
}
function Gu(e, t, n) {
  let o = !1;
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (o) o = Promise.resolve(Ku(i, n));
    else {
      const e = i(t, n);
      if ((w(e) && (o = Promise.resolve(e)), !1 === e)) return { then() {}, catch() {} };
    }
  }
  return o || { then: (e) => e(t), catch() {} };
}
function Zu(e, t = {}) {
  return (
    [Hu, zu, Uu].forEach((n) => {
      const o = e[n];
      if (!p(o)) return;
      const r = t[n];
      t[n] = function (e) {
        Gu(o, e, t).then((e) => (v(r) && r(e)) || e);
      };
    }),
    t
  );
}
function Qu(e, t) {
  const n = [];
  p(Xu.returnValue) && n.push(...Xu.returnValue);
  const o = Yu[e];
  return (
    o && p(o.returnValue) && n.push(...o.returnValue),
    n.forEach((e) => {
      t = e(t) || t;
    }),
    t
  );
}
function Ju(e) {
  const t = Object.create(null);
  Object.keys(Xu).forEach((e) => {
    'returnValue' !== e && (t[e] = Xu[e].slice());
  });
  const n = Yu[e];
  return (
    n &&
      Object.keys(n).forEach((e) => {
        'returnValue' !== e && (t[e] = (t[e] || []).concat(n[e]));
      }),
    t
  );
}
function ed(e, t, n, o) {
  const r = Ju(e);
  if (r && Object.keys(r).length) {
    if (p(r.invoke)) {
      return Gu(r.invoke, n).then((n) => t(Zu(Ju(e), n), ...o));
    }
    return t(Zu(r, n), ...o);
  }
  return t(n, ...o);
}
function td(e, t) {
  return (n = {}, ...o) =>
    (function (e) {
      return !(!S(e) || ![ju, qu, Vu].find((t) => v(e[t])));
    })(n)
      ? Qu(e, ed(e, t, n, o))
      : Qu(
          e,
          new Promise((r, i) => {
            ed(e, t, c(n, { success: r, fail: i }), o);
          })
        );
}
function nd(e, t, n, o = {}) {
  const r = t + ':fail' + (n ? ' ' + n : '');
  return (
    delete o.errCode,
    Du(
      e,
      'undefined' != typeof UniError
        ? void 0 !== o.errCode
          ? new UniError(t, o.errCode, r)
          : new UniError(r, o)
        : c({ errMsg: r }, o)
    )
  );
}
function od(e, t, n, o) {
  if (o && o.beforeInvoke) {
    const e = o.beforeInvoke(t);
    if (y(e)) return e;
  }
  const r = (function (e, t) {
    const n = e[0];
    if (!t || (!S(t.formatArgs) && S(n))) return;
    const o = t.formatArgs,
      r = Object.keys(o);
    for (let i = 0; i < r.length; i++) {
      const t = r[i],
        s = o[t];
      if (v(s)) {
        const o = s(e[0][t], n);
        if (y(o)) return o;
      } else f(n, t) || (n[t] = s);
    }
  })(t, o);
  if (r) return r;
}
function rd(e, t, n, o) {
  return (n) => {
    const r = Wu(e, n, o),
      i = od(0, [n], 0, o);
    return i
      ? nd(r, e, i)
      : t(n, {
          resolve: (t) =>
            (function (e, t, n) {
              return Du(e, c(n || {}, { errMsg: t + ':ok' }));
            })(r, e, t),
          reject: (t, n) =>
            nd(
              r,
              e,
              (function (e) {
                return !e || y(e)
                  ? e
                  : e.stack
                  ? (console.error(e.message + '\n' + e.stack), e.message)
                  : e;
              })(t),
              n
            )
        });
  };
}
function id(e, t, n, o) {
  return td(e, rd(e, t, 0, o));
}
function sd(e, t, n, o) {
  return (function (e, t, n, o) {
    return (...e) => {
      const n = od(0, e, 0, o);
      if (n) throw new Error(n);
      return t.apply(null, e);
    };
  })(0, t, 0, o);
}
function ad(e, t, n, o) {
  return td(
    e,
    (function (e, t, n, o) {
      return rd(e, t, 0, o);
    })(e, t, 0, o)
  );
}
let ld = !1,
  cd = 0,
  ud = 0,
  dd = 960,
  fd = 375,
  pd = 750;
function hd() {
  const {
    platform: e,
    pixelRatio: t,
    windowWidth: n
  } = (function () {
    const e = ku(),
      t = Lu(Ou(e, Eu(e)));
    return { platform: wu ? 'ios' : 'other', pixelRatio: window.devicePixelRatio, windowWidth: t };
  })();
  (cd = n), (ud = t), (ld = 'ios' === e);
}
function gd(e, t) {
  const n = Number(e);
  return isNaN(n) ? t : n;
}
const md = sd(0, (e, t) => {
    if (
      (0 === cd &&
        (hd(),
        (function () {
          const e = __uniConfig.globalStyle || {};
          (dd = gd(e.rpxCalcMaxDeviceWidth, 960)),
            (fd = gd(e.rpxCalcBaseDeviceWidth, 375)),
            (pd = gd(e.rpxCalcBaseDeviceWidth, 750));
        })()),
      0 === (e = Number(e)))
    )
      return 0;
    let n = t || cd;
    n = e === pd || n <= dd ? n : fd;
    let o = (e / 750) * n;
    return (
      o < 0 && (o = -o),
      (o = Math.floor(o + 1e-4)),
      0 === o && (o = 1 !== ud && ld ? 0.5 : 1),
      e < 0 ? -o : o
    );
  }),
  vd = new Be(),
  yd = sd(0, (e, t) => (vd.on(e, t), () => vd.off(e, t))),
  bd = sd(0, (e, t) => {
    e ? (p(e) || (e = [e]), e.forEach((e) => vd.off(e, t))) : (vd.e = {});
  }),
  _d = sd(0, (e, ...t) => {
    vd.emit(e, ...t);
  }),
  wd = [0.5, 0.8, 1, 1.25, 1.5, 2];
class xd {
  constructor(e, t) {
    (this.id = e), (this.pageId = t);
  }
  play() {
    $u(this.id, this.pageId, 'play');
  }
  pause() {
    $u(this.id, this.pageId, 'pause');
  }
  stop() {
    $u(this.id, this.pageId, 'stop');
  }
  seek(e) {
    $u(this.id, this.pageId, 'seek', { position: e });
  }
  sendDanmu(e) {
    $u(this.id, this.pageId, 'sendDanmu', e);
  }
  playbackRate(e) {
    ~wd.indexOf(e) || (e = 1), $u(this.id, this.pageId, 'playbackRate', { rate: e });
  }
  requestFullScreen(e = {}) {
    $u(this.id, this.pageId, 'requestFullScreen', e);
  }
  exitFullScreen() {
    $u(this.id, this.pageId, 'exitFullScreen');
  }
  showStatusBar() {
    $u(this.id, this.pageId, 'showStatusBar');
  }
  hideStatusBar() {
    $u(this.id, this.pageId, 'hideStatusBar');
  }
}
const Td = sd(0, (e, t) => new xd(e, bc(t || Tc()))),
  Sd = (e, t, n, o) => {
    !(function (e, t, n, o, r) {
      Nm.invokeViewMethod('map.' + e, { type: n, data: o }, t, r);
    })(e, t, n, o, (e) => {
      o &&
        ((e, t) => {
          const n = t.errMsg || '';
          new RegExp('\\:\\s*fail').test(n) ? e.fail && e.fail(t) : e.success && e.success(t),
            e.complete && e.complete(t);
        })(o, e);
    });
  };
const Cd = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgrey: '#a9a9a9',
  darkgreen: '#006400',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  gold: '#ffd700',
  goldenrod: '#daa520',
  gray: '#808080',
  grey: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavender: '#e6e6fa',
  lavenderblush: '#fff0f5',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgrey: '#d3d3d3',
  lightgreen: '#90ee90',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
  transparent: '#00000000'
};
function kd(e) {
  var t = null;
  if (null != (t = /^#([0-9|A-F|a-f]{6})$/.exec((e = e || '#000000')))) {
    return [
      parseInt(t[1].slice(0, 2), 16),
      parseInt(t[1].slice(2, 4), 16),
      parseInt(t[1].slice(4), 16),
      255
    ];
  }
  if (null != (t = /^#([0-9|A-F|a-f]{3})$/.exec(e))) {
    let e = t[1].slice(0, 1),
      n = t[1].slice(1, 2),
      o = t[1].slice(2, 3);
    return (
      (e = parseInt(e + e, 16)),
      (n = parseInt(n + n, 16)),
      (o = parseInt(o + o, 16)),
      [e, n, o, 255]
    );
  }
  if (null != (t = /^rgb\((.+)\)$/.exec(e)))
    return t[1]
      .split(',')
      .map(function (e) {
        return Math.min(255, parseInt(e.trim()));
      })
      .concat(255);
  if (null != (t = /^rgba\((.+)\)$/.exec(e)))
    return t[1].split(',').map(function (e, t) {
      return 3 === t ? Math.floor(255 * parseFloat(e.trim())) : Math.min(255, parseInt(e.trim()));
    });
  var n = e.toLowerCase();
  if (f(Cd, n)) {
    t = /^#([0-9|A-F|a-f]{6,8})$/.exec(Cd[n]);
    const e = parseInt(t[1].slice(0, 2), 16),
      o = parseInt(t[1].slice(2, 4), 16),
      r = parseInt(t[1].slice(4, 6), 16);
    let i = parseInt(t[1].slice(6, 8), 16);
    return (i = i >= 0 ? i : 255), [e, o, r, i];
  }
  return console.error('unsupported color:' + e), [0, 0, 0, 255];
}
class Ed {
  constructor(e, t) {
    (this.type = e), (this.data = t), (this.colorStop = []);
  }
  addColorStop(e, t) {
    this.colorStop.push([e, kd(t)]);
  }
}
class Od {
  constructor(e, t) {
    (this.type = 'pattern'), (this.data = e), (this.colorStop = t);
  }
}
class Ld {
  constructor(e) {
    this.width = e;
  }
}
const $d = { thresholds: [0], initialRatio: 0, observeAll: !1 },
  Id = ['top', 'right', 'bottom', 'left'];
let Md = 1;
function Ad(e = {}) {
  return Id.map((t) => `${Number(e[t]) || 0}px`).join(' ');
}
class Pd {
  constructor(e, t) {
    (this._pageId = bc(e)), (this._component = e), (this._options = c({}, $d, t));
  }
  relativeTo(e, t) {
    return (this._options.relativeToSelector = e), (this._options.rootMargin = Ad(t)), this;
  }
  relativeToViewport(e) {
    return (this._options.relativeToSelector = void 0), (this._options.rootMargin = Ad(e)), this;
  }
  observe(e, t) {
    v(t) &&
      ((this._options.selector = e),
      (this._reqId = Md++),
      (function ({ reqId: e, component: t, options: n, callback: o }, r) {
        const i = mu(t);
        (i.__io || (i.__io = {}))[e] = (function (e, t, n) {
          !(function () {
            if ('object' != typeof window) return;
            if (
              'IntersectionObserver' in window &&
              'IntersectionObserverEntry' in window &&
              'intersectionRatio' in window.IntersectionObserverEntry.prototype
            )
              return void (
                'isIntersecting' in window.IntersectionObserverEntry.prototype ||
                Object.defineProperty(
                  window.IntersectionObserverEntry.prototype,
                  'isIntersecting',
                  {
                    get: function () {
                      return this.intersectionRatio > 0;
                    }
                  }
                )
              );
            function e(e) {
              try {
                return (e.defaultView && e.defaultView.frameElement) || null;
              } catch (t) {
                return null;
              }
            }
            var t = (function (t) {
                for (var n = window.document, o = e(n); o; ) o = e((n = o.ownerDocument));
                return n;
              })(),
              n = [],
              o = null,
              r = null;
            function i(e) {
              (this.time = e.time),
                (this.target = e.target),
                (this.rootBounds = h(e.rootBounds)),
                (this.boundingClientRect = h(e.boundingClientRect)),
                (this.intersectionRect = h(e.intersectionRect || p())),
                (this.isIntersecting = !!e.intersectionRect);
              var t = this.boundingClientRect,
                n = t.width * t.height,
                o = this.intersectionRect,
                r = o.width * o.height;
              this.intersectionRatio = n ? Number((r / n).toFixed(4)) : this.isIntersecting ? 1 : 0;
            }
            function s(e, t) {
              var n = t || {};
              if ('function' != typeof e) throw new Error('callback must be a function');
              if (n.root && 1 != n.root.nodeType && 9 != n.root.nodeType)
                throw new Error('root must be a Document or Element');
              (this._checkForIntersections = l(
                this._checkForIntersections.bind(this),
                this.THROTTLE_TIMEOUT
              )),
                (this._callback = e),
                (this._observationTargets = []),
                (this._queuedEntries = []),
                (this._rootMarginValues = this._parseRootMargin(n.rootMargin)),
                (this.thresholds = this._initThresholds(n.threshold)),
                (this.root = n.root || null),
                (this.rootMargin = this._rootMarginValues
                  .map(function (e) {
                    return e.value + e.unit;
                  })
                  .join(' ')),
                (this._monitoringDocuments = []),
                (this._monitoringUnsubscribes = []);
            }
            function a() {
              return window.performance && performance.now && performance.now();
            }
            function l(e, t) {
              var n = null;
              return function () {
                n ||
                  (n = setTimeout(function () {
                    e(), (n = null);
                  }, t));
              };
            }
            function c(e, t, n, o) {
              'function' == typeof e.addEventListener
                ? e.addEventListener(t, n, o || !1)
                : 'function' == typeof e.attachEvent && e.attachEvent('on' + t, n);
            }
            function u(e, t, n, o) {
              'function' == typeof e.removeEventListener
                ? e.removeEventListener(t, n, o || !1)
                : 'function' == typeof e.detatchEvent && e.detatchEvent('on' + t, n);
            }
            function d(e, t) {
              var n = Math.max(e.top, t.top),
                o = Math.min(e.bottom, t.bottom),
                r = Math.max(e.left, t.left),
                i = Math.min(e.right, t.right),
                s = i - r,
                a = o - n;
              return (
                (s >= 0 &&
                  a >= 0 && { top: n, bottom: o, left: r, right: i, width: s, height: a }) ||
                null
              );
            }
            function f(e) {
              var t;
              try {
                t = e.getBoundingClientRect();
              } catch (n) {}
              return t
                ? ((t.width && t.height) ||
                    (t = {
                      top: t.top,
                      right: t.right,
                      bottom: t.bottom,
                      left: t.left,
                      width: t.right - t.left,
                      height: t.bottom - t.top
                    }),
                  t)
                : p();
            }
            function p() {
              return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
            }
            function h(e) {
              return !e || 'x' in e
                ? e
                : {
                    top: e.top,
                    y: e.top,
                    bottom: e.bottom,
                    left: e.left,
                    x: e.left,
                    right: e.right,
                    width: e.width,
                    height: e.height
                  };
            }
            function g(e, t) {
              var n = t.top - e.top,
                o = t.left - e.left;
              return {
                top: n,
                left: o,
                height: t.height,
                width: t.width,
                bottom: n + t.height,
                right: o + t.width
              };
            }
            function m(e, t) {
              for (var n = t; n; ) {
                if (n == e) return !0;
                n = v(n);
              }
              return !1;
            }
            function v(n) {
              var o = n.parentNode;
              return 9 == n.nodeType && n != t
                ? e(n)
                : (o && o.assignedSlot && (o = o.assignedSlot.parentNode),
                  o && 11 == o.nodeType && o.host ? o.host : o);
            }
            function y(e) {
              return e && 9 === e.nodeType;
            }
            (s.prototype.THROTTLE_TIMEOUT = 100),
              (s.prototype.POLL_INTERVAL = null),
              (s.prototype.USE_MUTATION_OBSERVER = !0),
              (s._setupCrossOriginUpdater = function () {
                return (
                  o ||
                    (o = function (e, t) {
                      (r = e && t ? g(e, t) : p()),
                        n.forEach(function (e) {
                          e._checkForIntersections();
                        });
                    }),
                  o
                );
              }),
              (s._resetCrossOriginUpdater = function () {
                (o = null), (r = null);
              }),
              (s.prototype.observe = function (e) {
                if (
                  !this._observationTargets.some(function (t) {
                    return t.element == e;
                  })
                ) {
                  if (!e || 1 != e.nodeType) throw new Error('target must be an Element');
                  this._registerInstance(),
                    this._observationTargets.push({ element: e, entry: null }),
                    this._monitorIntersections(e.ownerDocument),
                    this._checkForIntersections();
                }
              }),
              (s.prototype.unobserve = function (e) {
                (this._observationTargets = this._observationTargets.filter(function (t) {
                  return t.element != e;
                })),
                  this._unmonitorIntersections(e.ownerDocument),
                  0 == this._observationTargets.length && this._unregisterInstance();
              }),
              (s.prototype.disconnect = function () {
                (this._observationTargets = []),
                  this._unmonitorAllIntersections(),
                  this._unregisterInstance();
              }),
              (s.prototype.takeRecords = function () {
                var e = this._queuedEntries.slice();
                return (this._queuedEntries = []), e;
              }),
              (s.prototype._initThresholds = function (e) {
                var t = e || [0];
                return (
                  Array.isArray(t) || (t = [t]),
                  t.sort().filter(function (e, t, n) {
                    if ('number' != typeof e || isNaN(e) || e < 0 || e > 1)
                      throw new Error('threshold must be a number between 0 and 1 inclusively');
                    return e !== n[t - 1];
                  })
                );
              }),
              (s.prototype._parseRootMargin = function (e) {
                var t = (e || '0px').split(/\s+/).map(function (e) {
                  var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                  if (!t) throw new Error('rootMargin must be specified in pixels or percent');
                  return { value: parseFloat(t[1]), unit: t[2] };
                });
                return (t[1] = t[1] || t[0]), (t[2] = t[2] || t[0]), (t[3] = t[3] || t[1]), t;
              }),
              (s.prototype._monitorIntersections = function (n) {
                var o = n.defaultView;
                if (o && -1 == this._monitoringDocuments.indexOf(n)) {
                  var r = this._checkForIntersections,
                    i = null,
                    s = null;
                  this.POLL_INTERVAL
                    ? (i = o.setInterval(r, this.POLL_INTERVAL))
                    : (c(o, 'resize', r, !0),
                      c(n, 'scroll', r, !0),
                      this.USE_MUTATION_OBSERVER &&
                        'MutationObserver' in o &&
                        (s = new o.MutationObserver(r)).observe(n, {
                          attributes: !0,
                          childList: !0,
                          characterData: !0,
                          subtree: !0
                        })),
                    this._monitoringDocuments.push(n),
                    this._monitoringUnsubscribes.push(function () {
                      var e = n.defaultView;
                      e && (i && e.clearInterval(i), u(e, 'resize', r, !0)),
                        u(n, 'scroll', r, !0),
                        s && s.disconnect();
                    });
                  var a = (this.root && (this.root.ownerDocument || this.root)) || t;
                  if (n != a) {
                    var l = e(n);
                    l && this._monitorIntersections(l.ownerDocument);
                  }
                }
              }),
              (s.prototype._unmonitorIntersections = function (n) {
                var o = this._monitoringDocuments.indexOf(n);
                if (-1 != o) {
                  var r = (this.root && (this.root.ownerDocument || this.root)) || t;
                  if (
                    !this._observationTargets.some(function (t) {
                      var o = t.element.ownerDocument;
                      if (o == n) return !0;
                      for (; o && o != r; ) {
                        var i = e(o);
                        if ((o = i && i.ownerDocument) == n) return !0;
                      }
                      return !1;
                    })
                  ) {
                    var i = this._monitoringUnsubscribes[o];
                    if (
                      (this._monitoringDocuments.splice(o, 1),
                      this._monitoringUnsubscribes.splice(o, 1),
                      i(),
                      n != r)
                    ) {
                      var s = e(n);
                      s && this._unmonitorIntersections(s.ownerDocument);
                    }
                  }
                }
              }),
              (s.prototype._unmonitorAllIntersections = function () {
                var e = this._monitoringUnsubscribes.slice(0);
                (this._monitoringDocuments.length = 0), (this._monitoringUnsubscribes.length = 0);
                for (var t = 0; t < e.length; t++) e[t]();
              }),
              (s.prototype._checkForIntersections = function () {
                if (this.root || !o || r) {
                  var e = this._rootIsInDom(),
                    t = e ? this._getRootRect() : p();
                  this._observationTargets.forEach(function (n) {
                    var r = n.element,
                      s = f(r),
                      l = this._rootContainsTarget(r),
                      c = n.entry,
                      u = e && l && this._computeTargetAndRootIntersection(r, s, t),
                      d = null;
                    this._rootContainsTarget(r) ? (o && !this.root) || (d = t) : (d = p());
                    var h = (n.entry = new i({
                      time: a(),
                      target: r,
                      boundingClientRect: s,
                      rootBounds: d,
                      intersectionRect: u
                    }));
                    c
                      ? e && l
                        ? this._hasCrossedThreshold(c, h) && this._queuedEntries.push(h)
                        : c && c.isIntersecting && this._queuedEntries.push(h)
                      : this._queuedEntries.push(h);
                  }, this),
                    this._queuedEntries.length && this._callback(this.takeRecords(), this);
                }
              }),
              (s.prototype._computeTargetAndRootIntersection = function (e, n, i) {
                if ('none' != window.getComputedStyle(e).display) {
                  for (var s = n, a = v(e), l = !1; !l && a; ) {
                    var c = null,
                      u = 1 == a.nodeType ? window.getComputedStyle(a) : {};
                    if ('none' == u.display) return null;
                    if (a == this.root || 9 == a.nodeType)
                      if (((l = !0), a == this.root || a == t))
                        o && !this.root
                          ? !r || (0 == r.width && 0 == r.height)
                            ? ((a = null), (c = null), (s = null))
                            : (c = r)
                          : (c = i);
                      else {
                        var p = v(a),
                          h = p && f(p),
                          m = p && this._computeTargetAndRootIntersection(p, h, i);
                        h && m ? ((a = p), (c = g(h, m))) : ((a = null), (s = null));
                      }
                    else {
                      var y = a.ownerDocument;
                      a != y.body &&
                        a != y.documentElement &&
                        'visible' != u.overflow &&
                        (c = f(a));
                    }
                    if ((c && (s = d(c, s)), !s)) break;
                    a = a && v(a);
                  }
                  return s;
                }
              }),
              (s.prototype._getRootRect = function () {
                var e;
                if (this.root && !y(this.root)) e = f(this.root);
                else {
                  var n = y(this.root) ? this.root : t,
                    o = n.documentElement,
                    r = n.body;
                  e = {
                    top: 0,
                    left: 0,
                    right: o.clientWidth || r.clientWidth,
                    width: o.clientWidth || r.clientWidth,
                    bottom: o.clientHeight || r.clientHeight,
                    height: o.clientHeight || r.clientHeight
                  };
                }
                return this._expandRectByRootMargin(e);
              }),
              (s.prototype._expandRectByRootMargin = function (e) {
                var t = this._rootMarginValues.map(function (t, n) {
                    return 'px' == t.unit
                      ? t.value
                      : (t.value * (n % 2 ? e.width : e.height)) / 100;
                  }),
                  n = {
                    top: e.top - t[0],
                    right: e.right + t[1],
                    bottom: e.bottom + t[2],
                    left: e.left - t[3]
                  };
                return (n.width = n.right - n.left), (n.height = n.bottom - n.top), n;
              }),
              (s.prototype._hasCrossedThreshold = function (e, t) {
                var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                  o = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                if (n !== o)
                  for (var r = 0; r < this.thresholds.length; r++) {
                    var i = this.thresholds[r];
                    if (i == n || i == o || i < n != i < o) return !0;
                  }
              }),
              (s.prototype._rootIsInDom = function () {
                return !this.root || m(t, this.root);
              }),
              (s.prototype._rootContainsTarget = function (e) {
                var n = (this.root && (this.root.ownerDocument || this.root)) || t;
                return m(n, e) && (!this.root || n == e.ownerDocument);
              }),
              (s.prototype._registerInstance = function () {
                n.indexOf(this) < 0 && n.push(this);
              }),
              (s.prototype._unregisterInstance = function () {
                var e = n.indexOf(this);
                -1 != e && n.splice(e, 1);
              }),
              (window.IntersectionObserver = s),
              (window.IntersectionObserverEntry = i);
          })();
          const o = t.relativeToSelector ? e.querySelector(t.relativeToSelector) : null,
            r = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  n({
                    intersectionRatio: _f(e),
                    intersectionRect: bf(e.intersectionRect),
                    boundingClientRect: bf(e.boundingClientRect),
                    relativeRect: bf(e.rootBounds),
                    time: Date.now(),
                    dataset: be(e.target),
                    id: e.target.id
                  });
                });
              },
              { root: o, rootMargin: t.rootMargin, threshold: t.thresholds }
            );
          if (t.observeAll) {
            r.USE_MUTATION_OBSERVER = !0;
            const n = e.querySelectorAll(t.selector);
            for (let e = 0; e < n.length; e++) r.observe(n[e]);
          } else {
            r.USE_MUTATION_OBSERVER = !1;
            const n = e.querySelector(t.selector);
            n
              ? r.observe(n)
              : console.warn(
                  `Node ${t.selector} is not found. Intersection observer will not trigger.`
                );
          }
          return r;
        })(i, n, o);
      })(
        { reqId: this._reqId, component: this._component, options: this._options, callback: t },
        this._pageId
      ));
  }
  disconnect() {
    this._reqId &&
      (function ({ reqId: e, component: t }, n) {
        const o = mu(t),
          r = o.__io && o.__io[e];
        r && (r.disconnect(), delete o.__io[e]);
      })({ reqId: this._reqId, component: this._component }, this._pageId);
  }
}
const Bd = sd(0, (e, t) => ((e = ce(e)) && !bc(e) && ((t = e), (e = null)), new Pd(e || Tc(), t)));
let Rd = 0,
  Nd = {};
function Fd(e, t, n, o) {
  const r = { options: o },
    i = o && ('success' in o || 'fail' in o || 'complete' in o);
  if (i) {
    const e = String(Rd++);
    (r.callbackId = e), (Nd[e] = o);
  }
  Nm.invokeViewMethod(`editor.${e}`, { type: n, data: r }, t, ({ callbackId: e, data: t }) => {
    i &&
      (!(function (e, t) {
        (e = e || {}),
          y(t) && (t = { errMsg: t }),
          /:ok$/.test(t.errMsg) ? v(e.success) && e.success(t) : v(e.fail) && e.fail(t),
          v(e.complete) && e.complete(t);
      })(Nd[e], t),
      delete Nd[e]);
  });
}
const Dd = {
  canvas: class {
    constructor(e, t) {
      (this.id = e),
        (this.pageId = t),
        (this.actions = []),
        (this.path = []),
        (this.subpath = []),
        (this.drawingState = []),
        (this.state = {
          lineDash: [0, 0],
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 0,
          shadowColor: [0, 0, 0, 0],
          font: '10px sans-serif',
          fontSize: 10,
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontFamily: 'sans-serif'
        });
    }
    draw(e = !1, t) {
      var n = [...this.actions];
      (this.actions = []),
        (this.path = []),
        (function (e, t, n, o, r) {
          Nm.invokeViewMethod(`canvas.${e}`, { type: n, data: o }, t, (e) => {
            r && r(e);
          });
        })(this.id, this.pageId, 'actionsChanged', { actions: n, reserve: e }, t);
    }
    createLinearGradient(e, t, n, o) {
      return new Ed('linear', [e, t, n, o]);
    }
    createCircularGradient(e, t, n) {
      return new Ed('radial', [e, t, n]);
    }
    createPattern(e, t) {
      if (void 0 === t)
        console.error(
          "Failed to execute 'createPattern' on 'CanvasContext': 2 arguments required, but only 1 present."
        );
      else {
        if (!(['repeat', 'repeat-x', 'repeat-y', 'no-repeat'].indexOf(t) < 0)) return new Od(e, t);
        console.error(
          "Failed to execute 'createPattern' on 'CanvasContext': The provided type ('" +
            t +
            "') is not one of 'repeat', 'no-repeat', 'repeat-x', or 'repeat-y'."
        );
      }
    }
    measureText(e) {
      let t = 0;
      return (
        (t = (function (e, t) {
          const n = document.createElement('canvas').getContext('2d');
          return (n.font = t), n.measureText(e).width || 0;
        })(e, this.state.font)),
        new Ld(t)
      );
    }
    save() {
      this.actions.push({ method: 'save', data: [] }), this.drawingState.push(this.state);
    }
    restore() {
      this.actions.push({ method: 'restore', data: [] }),
        (this.state = this.drawingState.pop() || {
          lineDash: [0, 0],
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 0,
          shadowColor: [0, 0, 0, 0],
          font: '10px sans-serif',
          fontSize: 10,
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontFamily: 'sans-serif'
        });
    }
    beginPath() {
      (this.path = []), (this.subpath = []), this.path.push({ method: 'beginPath', data: [] });
    }
    moveTo(e, t) {
      this.path.push({ method: 'moveTo', data: [e, t] }), (this.subpath = [[e, t]]);
    }
    lineTo(e, t) {
      0 === this.path.length && 0 === this.subpath.length
        ? this.path.push({ method: 'moveTo', data: [e, t] })
        : this.path.push({ method: 'lineTo', data: [e, t] }),
        this.subpath.push([e, t]);
    }
    quadraticCurveTo(e, t, n, o) {
      this.path.push({ method: 'quadraticCurveTo', data: [e, t, n, o] }), this.subpath.push([n, o]);
    }
    bezierCurveTo(e, t, n, o, r, i) {
      this.path.push({ method: 'bezierCurveTo', data: [e, t, n, o, r, i] }),
        this.subpath.push([r, i]);
    }
    arc(e, t, n, o, r, i = !1) {
      this.path.push({ method: 'arc', data: [e, t, n, o, r, i] }), this.subpath.push([e, t]);
    }
    rect(e, t, n, o) {
      this.path.push({ method: 'rect', data: [e, t, n, o] }), (this.subpath = [[e, t]]);
    }
    arcTo(e, t, n, o, r) {
      this.path.push({ method: 'arcTo', data: [e, t, n, o, r] }), this.subpath.push([n, o]);
    }
    clip() {
      this.actions.push({ method: 'clip', data: [...this.path] });
    }
    closePath() {
      this.path.push({ method: 'closePath', data: [] }),
        this.subpath.length && (this.subpath = [this.subpath.shift()]);
    }
    clearActions() {
      (this.actions = []), (this.path = []), (this.subpath = []);
    }
    getActions() {
      var e = [...this.actions];
      return this.clearActions(), e;
    }
    set lineDashOffset(e) {
      this.actions.push({ method: 'setLineDashOffset', data: [e] });
    }
    set globalCompositeOperation(e) {
      this.actions.push({ method: 'setGlobalCompositeOperation', data: [e] });
    }
    set shadowBlur(e) {
      this.actions.push({ method: 'setShadowBlur', data: [e] });
    }
    set shadowColor(e) {
      this.actions.push({ method: 'setShadowColor', data: [e] });
    }
    set shadowOffsetX(e) {
      this.actions.push({ method: 'setShadowOffsetX', data: [e] });
    }
    set shadowOffsetY(e) {
      this.actions.push({ method: 'setShadowOffsetY', data: [e] });
    }
    set font(e) {
      var t = this;
      this.state.font = e;
      var n = e.match(/^(([\w\-]+\s)*)(\d+r?px)(\/(\d+\.?\d*(r?px)?))?\s+(.*)/);
      if (n) {
        var o = n[1].trim().split(/\s/),
          r = parseFloat(n[3]),
          i = n[7],
          s = [];
        o.forEach(function (e, n) {
          ['italic', 'oblique', 'normal'].indexOf(e) > -1
            ? (s.push({ method: 'setFontStyle', data: [e] }), (t.state.fontStyle = e))
            : ['bold', 'normal'].indexOf(e) > -1
            ? (s.push({ method: 'setFontWeight', data: [e] }), (t.state.fontWeight = e))
            : 0 === n
            ? (s.push({ method: 'setFontStyle', data: ['normal'] }), (t.state.fontStyle = 'normal'))
            : 1 === n && a();
        }),
          1 === o.length && a(),
          (o = s
            .map(function (e) {
              return e.data[0];
            })
            .join(' ')),
          (this.state.fontSize = r),
          (this.state.fontFamily = i),
          this.actions.push({ method: 'setFont', data: [`${o} ${r}px ${i}`] });
      } else console.warn("Failed to set 'font' on 'CanvasContext': invalid format.");
      function a() {
        s.push({ method: 'setFontWeight', data: ['normal'] }), (t.state.fontWeight = 'normal');
      }
    }
    get font() {
      return this.state.font;
    }
    set fillStyle(e) {
      this.setFillStyle(e);
    }
    set strokeStyle(e) {
      this.setStrokeStyle(e);
    }
    set globalAlpha(e) {
      (e = Math.floor(255 * parseFloat(e))),
        this.actions.push({ method: 'setGlobalAlpha', data: [e] });
    }
    set textAlign(e) {
      this.actions.push({ method: 'setTextAlign', data: [e] });
    }
    set lineCap(e) {
      this.actions.push({ method: 'setLineCap', data: [e] });
    }
    set lineJoin(e) {
      this.actions.push({ method: 'setLineJoin', data: [e] });
    }
    set lineWidth(e) {
      this.actions.push({ method: 'setLineWidth', data: [e] });
    }
    set miterLimit(e) {
      this.actions.push({ method: 'setMiterLimit', data: [e] });
    }
    set textBaseline(e) {
      this.actions.push({ method: 'setTextBaseline', data: [e] });
    }
  },
  map: class {
    constructor(e, t) {
      (this.id = e), (this.pageId = t);
    }
    getCenterLocation(e) {
      Sd(this.id, this.pageId, 'getCenterLocation', e);
    }
    moveToLocation(e) {
      Sd(this.id, this.pageId, 'moveToLocation', e);
    }
    getScale(e) {
      Sd(this.id, this.pageId, 'getScale', e);
    }
    getRegion(e) {
      Sd(this.id, this.pageId, 'getRegion', e);
    }
    includePoints(e) {
      Sd(this.id, this.pageId, 'includePoints', e);
    }
    translateMarker(e) {
      Sd(this.id, this.pageId, 'translateMarker', e);
    }
    $getAppMap() {}
    addCustomLayer(e) {
      Sd(this.id, this.pageId, 'addCustomLayer', e);
    }
    removeCustomLayer(e) {
      Sd(this.id, this.pageId, 'removeCustomLayer', e);
    }
    addGroundOverlay(e) {
      Sd(this.id, this.pageId, 'addGroundOverlay', e);
    }
    removeGroundOverlay(e) {
      Sd(this.id, this.pageId, 'removeGroundOverlay', e);
    }
    updateGroundOverlay(e) {
      Sd(this.id, this.pageId, 'updateGroundOverlay', e);
    }
    initMarkerCluster(e) {
      Sd(this.id, this.pageId, 'initMarkerCluster', e);
    }
    addMarkers(e) {
      Sd(this.id, this.pageId, 'addMarkers', e);
    }
    removeMarkers(e) {
      Sd(this.id, this.pageId, 'removeMarkers', e);
    }
    moveAlong(e) {
      Sd(this.id, this.pageId, 'moveAlong', e);
    }
    setLocMarkerIcon(e) {
      Sd(this.id, this.pageId, 'setLocMarkerIcon', e);
    }
    openMapApp(e) {
      Sd(this.id, this.pageId, 'openMapApp', e);
    }
    on(e, t) {
      Sd(this.id, this.pageId, 'on', { name: e, callback: t });
    }
  },
  video: xd,
  editor: class {
    constructor(e, t) {
      (this.id = e), (this.pageId = t);
    }
    format(e, t) {
      this._exec('format', { name: e, value: t });
    }
    insertDivider() {
      this._exec('insertDivider');
    }
    insertImage(e) {
      this._exec('insertImage', e);
    }
    insertText(e) {
      this._exec('insertText', e);
    }
    setContents(e) {
      this._exec('setContents', e);
    }
    getContents(e) {
      this._exec('getContents', e);
    }
    clear(e) {
      this._exec('clear', e);
    }
    removeFormat(e) {
      this._exec('removeFormat', e);
    }
    undo(e) {
      this._exec('undo', e);
    }
    redo(e) {
      this._exec('redo', e);
    }
    blur(e) {
      this._exec('blur', e);
    }
    getSelectionText(e) {
      this._exec('getSelectionText', e);
    }
    scrollIntoView(e) {
      this._exec('scrollIntoView', e);
    }
    _exec(e, t) {
      Fd(this.id, this.pageId, e, t);
    }
  }
};
function jd(e) {
  if (e && e.contextInfo) {
    const { id: t, type: n, page: o } = e.contextInfo,
      r = Dd[n];
    (e.context = new r(t, o)), delete e.contextInfo;
  }
}
class qd {
  constructor(e, t, n, o) {
    (this._selectorQuery = e), (this._component = t), (this._selector = n), (this._single = o);
  }
  boundingClientRect(e) {
    return (
      this._selectorQuery._push(
        this._selector,
        this._component,
        this._single,
        { id: !0, dataset: !0, rect: !0, size: !0 },
        e
      ),
      this._selectorQuery
    );
  }
  fields(e, t) {
    return (
      this._selectorQuery._push(this._selector, this._component, this._single, e, t),
      this._selectorQuery
    );
  }
  scrollOffset(e) {
    return (
      this._selectorQuery._push(
        this._selector,
        this._component,
        this._single,
        { id: !0, dataset: !0, scrollOffset: !0 },
        e
      ),
      this._selectorQuery
    );
  }
  context(e) {
    return (
      this._selectorQuery._push(this._selector, this._component, this._single, { context: !0 }, e),
      this._selectorQuery
    );
  }
  node(e) {
    return (
      this._selectorQuery._push(this._selector, this._component, this._single, { node: !0 }, e),
      this._selectorQuery
    );
  }
}
class Vd {
  constructor(e) {
    (this._component = void 0), (this._page = e), (this._queue = []), (this._queueCb = []);
  }
  exec(e) {
    return (
      Au(this._page, this._queue, (t) => {
        const n = this._queueCb;
        t.forEach((e, t) => {
          p(e) ? e.forEach(jd) : jd(e);
          const o = n[t];
          v(o) && o.call(this, e);
        }),
          v(e) && e.call(this, t);
      }),
      this._nodesRef
    );
  }
  in(e) {
    return (this._component = ce(e)), this;
  }
  select(e) {
    return (this._nodesRef = new qd(this, this._component, e, !0));
  }
  selectAll(e) {
    return (this._nodesRef = new qd(this, this._component, e, !1));
  }
  selectViewport() {
    return (this._nodesRef = new qd(this, null, '', !0));
  }
  _push(e, t, n, o, r) {
    this._queue.push({ component: t, selector: e, single: n, fields: o }), this._queueCb.push(r);
  }
}
const Wd = sd(0, (e) => ((e = ce(e)) && !bc(e) && (e = null), new Vd(e || Tc()))),
  Hd = { formatArgs: {} },
  zd = { duration: 400, timingFunction: 'linear', delay: 0, transformOrigin: '50% 50% 0' };
class Ud {
  constructor(e) {
    (this.actions = []),
      (this.currentTransform = {}),
      (this.currentStepAnimates = []),
      (this.option = c({}, zd, e));
  }
  _getOption(e) {
    const t = { transition: c({}, this.option, e), transformOrigin: '' };
    return (
      (t.transformOrigin = t.transition.transformOrigin), delete t.transition.transformOrigin, t
    );
  }
  _pushAnimates(e, t) {
    this.currentStepAnimates.push({ type: e, args: t });
  }
  _converType(e) {
    return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
  }
  _getValue(e) {
    return 'number' == typeof e ? `${e}px` : e;
  }
  export() {
    const e = this.actions;
    return (this.actions = []), { actions: e };
  }
  step(e) {
    return (
      this.currentStepAnimates.forEach((e) => {
        'style' !== e.type
          ? (this.currentTransform[e.type] = e)
          : (this.currentTransform[`${e.type}.${e.args[0]}`] = e);
      }),
      this.actions.push({
        animates: Object.values(this.currentTransform),
        option: this._getOption(e)
      }),
      (this.currentStepAnimates = []),
      this
    );
  }
}
const Xd = me(() => {
    const e = ['opacity', 'backgroundColor'],
      t = ['width', 'height', 'left', 'right', 'top', 'bottom'];
    [
      'matrix',
      'matrix3d',
      'rotate',
      'rotate3d',
      'rotateX',
      'rotateY',
      'rotateZ',
      'scale',
      'scale3d',
      'scaleX',
      'scaleY',
      'scaleZ',
      'skew',
      'skewX',
      'skewY',
      'translate',
      'translate3d',
      'translateX',
      'translateY',
      'translateZ'
    ]
      .concat(e, t)
      .forEach((n) => {
        Ud.prototype[n] = function (...o) {
          return (
            e.concat(t).includes(n)
              ? this._pushAnimates('style', [
                  this._converType(n),
                  t.includes(n) ? this._getValue(o[0]) : o[0]
                ])
              : this._pushAnimates(n, o),
            this
          );
        };
      });
  }),
  Yd = sd(0, (e) => (Xd(), new Ud(e)), 0, Hd),
  Kd = sd(0, () => {
    const e = Uh();
    return e && e.$vm ? e.$vm.$locale : Tl().getLocale();
  }),
  Gd = { onUnhandledRejection: [], onPageNotFound: [], onError: [], onShow: [], onHide: [] };
const Zd = {
    formatArgs: {
      urls(e, t) {
        t.urls = e.map((e) => (y(e) && e ? yu(e) : ''));
      },
      current(e, t) {
        'number' == typeof e
          ? (t.current = e > 0 && e < t.urls.length ? e : 0)
          : y(e) && e && (t.current = yu(e));
      }
    }
  },
  Qd = 'json',
  Jd = ['text', 'arraybuffer'],
  ef = encodeURIComponent;
ArrayBuffer, Boolean;
const tf = {
  formatArgs: {
    method(e, t) {
      t.method = Bu((e || '').toUpperCase(), Pu);
    },
    data(e, t) {
      t.data = e || '';
    },
    url(e, t) {
      t.method === Pu[0] &&
        S(t.data) &&
        Object.keys(t.data).length &&
        (t.url = (function (e, t) {
          let n = e.split('#');
          const o = n[1] || '';
          n = n[0].split('?');
          let r = n[1] || '';
          e = n[0];
          const i = r.split('&').filter((e) => e),
            s = {};
          i.forEach((e) => {
            const t = e.split('=');
            s[t[0]] = t[1];
          });
          for (const a in t)
            if (f(t, a)) {
              let e = t[a];
              null == e ? (e = '') : S(e) && (e = JSON.stringify(e)), (s[ef(a)] = ef(e));
            }
          return (
            (r = Object.keys(s)
              .map((e) => `${e}=${s[e]}`)
              .join('&')),
            e + (r ? '?' + r : '') + (o ? '#' + o : '')
          );
        })(e, t.data));
    },
    header(e, t) {
      const n = (t.header = e || {});
      t.method !== Pu[0] &&
        (Object.keys(n).find((e) => 'content-type' === e.toLowerCase()) ||
          (n['Content-Type'] = 'application/json'));
    },
    dataType(e, t) {
      t.dataType = (e || Qd).toLowerCase();
    },
    responseType(e, t) {
      (t.responseType = (e || '').toLowerCase()),
        -1 === Jd.indexOf(t.responseType) && (t.responseType = 'text');
    }
  }
};
const nf = { url: { type: String, required: !0 } },
  of =
    (cf([
      'slide-in-right',
      'slide-in-left',
      'slide-in-top',
      'slide-in-bottom',
      'fade-in',
      'zoom-out',
      'zoom-fade-out',
      'pop-in',
      'none'
    ]),
    cf([
      'slide-out-right',
      'slide-out-left',
      'slide-out-top',
      'slide-out-bottom',
      'fade-out',
      'zoom-in',
      'zoom-fade-in',
      'pop-out',
      'none'
    ]),
    ff('navigateTo')),
  rf = ff('redirectTo'),
  sf = ff('reLaunch'),
  af = ff('switchTab'),
  lf = {
    formatArgs: {
      delta(e, t) {
        (e = parseInt(e + '') || 1), (t.delta = Math.min(xh().length - 1, e));
      }
    }
  };
function cf(e) {
  return {
    animationType: {
      type: String,
      validator(t) {
        if (t && -1 === e.indexOf(t))
          return (
            '`' +
            t +
            '` is not supported for `animationType` (supported values are: `' +
            e.join('`|`') +
            '`)'
          );
      }
    },
    animationDuration: { type: Number }
  };
}
let uf;
function df() {
  uf = '';
}
function ff(e) {
  return { formatArgs: { url: pf(e) }, beforeAll: df };
}
function pf(e) {
  return function (t, n) {
    if (!t) return 'Missing required args: "url"';
    const o = (t = (function (e) {
        if (0 === e.indexOf('/')) return e;
        let t = '';
        const n = xh();
        return n.length && (t = n[n.length - 1].$page.route), Ic(t, e);
      })(t)).split('?')[0],
      r = Mc(o, !0);
    if (!r) return 'page `' + t + '` is not found';
    if ('navigateTo' === e || 'redirectTo' === e) {
      if (r.meta.isTabBar) return `can not ${e} a tabbar page`;
    } else if ('switchTab' === e && !r.meta.isTabBar) return 'can not switch to no-tabBar page';
    if (
      (('switchTab' !== e && 'preloadPage' !== e) ||
        !r.meta.isTabBar ||
        'appLaunch' === n.openType ||
        (t = o),
      r.meta.isEntry && (t = t.replace(r.alias, '/')),
      (n.url = (function (e) {
        if (!y(e)) return e;
        const t = e.indexOf('?');
        if (-1 === t) return e;
        const n = e
          .slice(t + 1)
          .trim()
          .replace(/^(\?|#|&)/, '');
        if (!n) return e;
        e = e.slice(0, t);
        const o = [];
        return (
          n.split('&').forEach((e) => {
            const t = e.replace(/\+/g, ' ').split('='),
              n = t.shift(),
              r = t.length > 0 ? t.join('=') : '';
            o.push(n + '=' + encodeURIComponent(r));
          }),
          o.length ? e + '?' + o.join('&') : e
        );
      })(t)),
      'unPreloadPage' !== e)
    )
      if ('preloadPage' !== e) {
        if (uf === t && 'appLaunch' !== n.openType) return `${uf} locked`;
        __uniConfig.ready && (uf = t);
      } else if (r.meta.isTabBar) {
        const e = xh(),
          t = r.path.slice(1);
        if (e.find((e) => e.route === t)) return 'tabBar page `' + t + '` already exists';
      }
  };
}
const hf = { formatArgs: { duration: 300 } },
  gf = (Boolean, { formatArgs: { title: '', mask: !1 } }),
  mf =
    (Boolean,
    {
      beforeInvoke() {
        Ol();
      },
      formatArgs: {
        title: '',
        content: '',
        placeholderText: '',
        showCancel: !0,
        editable: !1,
        cancelText(e, t) {
          if (!f(t, 'cancelText')) {
            const { t: e } = Tl();
            t.cancelText = e('uni.showModal.cancel');
          }
        },
        cancelColor: '#000',
        confirmText(e, t) {
          if (!f(t, 'confirmText')) {
            const { t: e } = Tl();
            t.confirmText = e('uni.showModal.confirm');
          }
        },
        confirmColor: '#007aff'
      }
    }),
  vf = ['success', 'loading', 'none', 'error'],
  yf =
    (Boolean,
    {
      formatArgs: {
        title: '',
        icon(e, t) {
          t.icon = Bu(e, vf);
        },
        image(e, t) {
          t.image = e ? yu(e) : '';
        },
        duration: 1500,
        mask: !1
      }
    });
function bf(e) {
  const { bottom: t, height: n, left: o, right: r, top: i, width: s } = e || {};
  return { bottom: t, height: n, left: o, right: r, top: i, width: s };
}
function _f(e) {
  const {
    intersectionRatio: t,
    boundingClientRect: { height: n, width: o },
    intersectionRect: { height: r, width: i }
  } = e;
  return 0 !== t ? t : r === n ? i / o : r / n;
}
const wf = eu(),
  xf = eu();
const Tf = ru({
  name: 'ResizeSensor',
  props: { initial: { type: Boolean, default: !1 } },
  emits: ['resize'],
  setup(e, { emit: t }) {
    const n = an(null),
      o = (function (e) {
        return () => {
          const { firstElementChild: t, lastElementChild: n } = e.value;
          (t.scrollLeft = 1e5), (t.scrollTop = 1e5), (n.scrollLeft = 1e5), (n.scrollTop = 1e5);
        };
      })(n),
      r = (function (e, t, n) {
        const o = Ut({ width: -1, height: -1 });
        return (
          Jn(
            () => c({}, o),
            (e) => t('resize', e)
          ),
          () => {
            const t = e.value;
            (o.width = t.offsetWidth), (o.height = t.offsetHeight), n();
          }
        );
      })(n, t, o);
    return (
      (function (e, t, n, o) {
        To(o),
          Bo(() => {
            t.initial && On(n);
            const r = e.value;
            r.offsetParent !== r.parentElement && (r.parentElement.style.position = 'relative'),
              'AnimationEvent' in window || o();
          });
      })(n, e, r, o),
      () =>
        ei(
          'uni-resize-sensor',
          { ref: n, onAnimationstartOnce: r },
          [
            ei('div', { onScroll: r }, [ei('div', null, null)], 40, ['onScroll']),
            ei('div', { onScroll: r }, [ei('div', null, null)], 40, ['onScroll'])
          ],
          40,
          ['onAnimationstartOnce']
        )
    );
  }
});
function Sf() {}
const Cf = {
  cursorSpacing: { type: [Number, String], default: 0 },
  showConfirmBar: { type: [Boolean, String], default: 'auto' },
  adjustPosition: { type: [Boolean, String], default: !0 },
  autoBlur: { type: [Boolean, String], default: !1 }
};
function kf(e, t, n) {
  function o(e) {
    const t = wi(() => 0 === String(navigator.vendor).indexOf('Apple'));
    e.addEventListener('focus', () => {
      clearTimeout(undefined), document.addEventListener('click', Sf, !1);
    });
    e.addEventListener('blur', () => {
      t.value && e.blur(),
        document.removeEventListener('click', Sf, !1),
        t.value &&
          document.documentElement.scrollTo(
            document.documentElement.scrollLeft,
            document.documentElement.scrollTop
          );
    });
  }
  Jn(
    () => t.value,
    (e) => e && o(e)
  );
}
var Ef =
    /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
  Of = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
  Lf =
    /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
  $f = Rf(
    'area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr'
  ),
  If = Rf(
    'a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video'
  ),
  Mf = Rf(
    'abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var'
  ),
  Af = Rf('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr'),
  Pf = Rf(
    'checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected'
  ),
  Bf = Rf('script,style');
function Rf(e) {
  for (var t = {}, n = e.split(','), o = 0; o < n.length; o++) t[n[o]] = !0;
  return t;
}
const Nf = {
    src: { type: String, default: '' },
    mode: { type: String, default: 'scaleToFill' },
    lazyLoad: { type: [Boolean, String], default: !1 },
    draggable: { type: Boolean, default: !1 }
  },
  Ff = {
    widthFix: ['offsetWidth', 'height', (e, t) => e / t],
    heightFix: ['offsetHeight', 'width', (e, t) => e * t]
  },
  Df = {
    aspectFit: ['center center', 'contain'],
    aspectFill: ['center center', 'cover'],
    widthFix: [, '100% 100%'],
    heightFix: [, '100% 100%'],
    top: ['center top'],
    bottom: ['center bottom'],
    center: ['center center'],
    left: ['left center'],
    right: ['right center'],
    'top left': ['left top'],
    'top right': ['right top'],
    'bottom left': ['left bottom'],
    'bottom right': ['right bottom']
  },
  jf = ru({
    name: 'Image',
    props: Nf,
    setup(e, { emit: t }) {
      const n = an(null),
        o = (function (e, t) {
          const n = an(''),
            o = wi(() => {
              let e = 'auto',
                o = '';
              const r = Df[t.mode];
              return (
                r ? (r[0] && (o = r[0]), r[1] && (e = r[1])) : ((o = '0% 0%'), (e = '100% 100%')),
                `background-image:${
                  n.value ? 'url("' + n.value + '")' : 'none'
                };background-position:${o};background-size:${e};`
              );
            }),
            r = Ut({
              rootEl: e,
              src: wi(() => (t.src ? yu(t.src) : '')),
              origWidth: 0,
              origHeight: 0,
              origStyle: { width: '', height: '' },
              modeStyle: o,
              imgSrc: n
            });
          return (
            Bo(() => {
              const t = e.value.style;
              (r.origWidth = Number(t.width) || 0), (r.origHeight = Number(t.height) || 0);
            }),
            r
          );
        })(n, e),
        r = au(n, t),
        { fixSize: i } = (function (e, t, n) {
          const o = () => {
              const { mode: o } = t,
                r = Ff[o];
              if (!r) return;
              const { origWidth: i, origHeight: s } = n,
                a = i && s ? i / s : 0;
              if (!a) return;
              const l = e.value,
                c = l[r[0]];
              c &&
                (l.style[r[1]] =
                  (function (e) {
                    qf && e > 10 && (e = 2 * Math.round(e / 2));
                    return e;
                  })(r[2](c, a)) + 'px');
            },
            r = () => {
              const { style: t } = e.value,
                {
                  origStyle: { width: o, height: r }
                } = n;
              (t.width = o), (t.height = r);
            };
          return (
            Jn(
              () => t.mode,
              (e, t) => {
                Ff[t] && r(), Ff[e] && o();
              }
            ),
            { fixSize: o, resetSize: r }
          );
        })(n, e, o);
      return (
        (function (e, t, n, o, r) {
          let i, s;
          const a = (t = 0, n = 0, o = '') => {
              (e.origWidth = t), (e.origHeight = n), (e.imgSrc = o);
            },
            l = (l) => {
              if (!l) return c(), void a();
              (i = i || new Image()),
                (i.onload = (e) => {
                  const { width: u, height: d } = i;
                  a(u, d, l),
                    o(),
                    (i.draggable = t.draggable),
                    s && s.remove(),
                    (s = i),
                    n.value.appendChild(i),
                    c(),
                    r('load', e, { width: u, height: d });
                }),
                (i.onerror = (t) => {
                  a(), c(), r('error', t, { errMsg: `GET ${e.src} 404 (Not Found)` });
                }),
                (i.src = l);
            },
            c = () => {
              i && ((i.onload = null), (i.onerror = null), (i = null));
            };
          Jn(
            () => e.src,
            (e) => l(e)
          ),
            Jn(
              () => e.imgSrc,
              (e) => {
                !e && s && (s.remove(), (s = null));
              }
            ),
            Bo(() => l(e.src)),
            Fo(() => c());
        })(o, e, n, i, r),
        () =>
          ei(
            'uni-image',
            { ref: n },
            [
              ei('div', { style: o.modeStyle }, null, 4),
              Ff[e.mode] ? ei(Tf, { onResize: i }, null, 8, ['onResize']) : ei('span', null, null)
            ],
            512
          )
      );
    }
  });
const qf = 'Google Inc.' === navigator.vendor;
const Vf = we(!0),
  Wf = [];
let Hf,
  zf = 0;
const Uf = (e) => Wf.forEach((t) => (t.userAction = e));
function Xf(e = { userAction: !1 }) {
  if (!Hf) {
    ['touchstart', 'touchmove', 'touchend', 'mousedown', 'mouseup'].forEach((e) => {
      document.addEventListener(
        e,
        function () {
          !zf && Uf(!0),
            zf++,
            setTimeout(() => {
              !--zf && Uf(!1);
            }, 0);
        },
        Vf
      );
    }),
      (Hf = !0);
  }
  Wf.push(e);
}
function Yf() {
  const e = Ut({ userAction: !1 });
  return (
    Bo(() => {
      Xf(e);
    }),
    Fo(() => {
      !(function (e) {
        const t = Wf.indexOf(e);
        t >= 0 && Wf.splice(t, 1);
      })(e);
    }),
    { state: e }
  );
}
function Kf(e, t) {
  const n = document.activeElement;
  if (!n) return t({});
  const o = {};
  ['input', 'textarea'].includes(n.tagName.toLowerCase()) &&
    ((o.start = n.selectionStart), (o.end = n.selectionEnd)),
    t(o);
}
function Gf(e, t) {
  return 'number' === t && isNaN(Number(e)) && (e = ''), null === e ? '' : String(e);
}
const Zf = ['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'],
  Qf = c(
    {},
    {
      name: { type: String, default: '' },
      modelValue: { type: [String, Number], default: '' },
      value: { type: [String, Number], default: '' },
      disabled: { type: [Boolean, String], default: !1 },
      autoFocus: { type: [Boolean, String], default: !1 },
      focus: { type: [Boolean, String], default: !1 },
      cursor: { type: [Number, String], default: -1 },
      selectionStart: { type: [Number, String], default: -1 },
      selectionEnd: { type: [Number, String], default: -1 },
      type: { type: String, default: 'text' },
      password: { type: [Boolean, String], default: !1 },
      placeholder: { type: String, default: '' },
      placeholderStyle: { type: String, default: '' },
      placeholderClass: { type: String, default: '' },
      maxlength: { type: [Number, String], default: 140 },
      confirmType: { type: String, default: 'done' },
      confirmHold: { type: Boolean, default: !1 },
      ignoreCompositionEvent: { type: Boolean, default: !0 },
      step: { type: String, default: '0.000000000000000001' },
      inputmode: { type: String, default: void 0, validator: (e) => !!~Zf.indexOf(e) },
      cursorColor: { type: String, default: '' }
    },
    Cf
  ),
  Jf = [
    'input',
    'focus',
    'blur',
    'update:value',
    'update:modelValue',
    'update:focus',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'keyboardheightchange'
  ];
function ep(e, t, n, o) {
  const r = Ee(
    (n) => {
      t.value = Gf(n, e.type);
    },
    100,
    { setTimeout: setTimeout, clearTimeout: clearTimeout }
  );
  Jn(() => e.modelValue, r), Jn(() => e.value, r);
  const i = (function (e, t) {
    let n,
      o,
      r = 0;
    const i = function (...i) {
      const s = Date.now();
      clearTimeout(n),
        (o = () => {
          (o = null), (r = s), e.apply(this, i);
        }),
        s - r < t ? (n = setTimeout(o, t - (s - r))) : o();
    };
    return (
      (i.cancel = function () {
        clearTimeout(n), (o = null);
      }),
      (i.flush = function () {
        clearTimeout(n), o && o();
      }),
      i
    );
  })((e, t) => {
    r.cancel(), n('update:modelValue', t.value), n('update:value', t.value), o('input', e, t);
  }, 100);
  return (
    Po(() => {
      r.cancel(), i.cancel();
    }),
    {
      trigger: o,
      triggerInput: (e, t, n) => {
        r.cancel(), i(e, t), n && i.flush();
      }
    }
  );
}
function tp(e, t) {
  Yf();
  const n = wi(() => e.autoFocus || e.focus);
  function o() {
    if (!n.value) return;
    const e = t.value;
    e ? e.focus() : setTimeout(o, 100);
  }
  Jn(
    () => e.focus,
    (e) => {
      e
        ? o()
        : (function () {
            const e = t.value;
            e && e.blur();
          })();
    }
  ),
    Bo(() => {
      n.value && On(o);
    });
}
function np(e, t, n, o) {
  Pl(xc(), 'getSelectedTextRange', Kf);
  const {
      fieldRef: r,
      state: i,
      trigger: s
    } = (function (e, t, n) {
      const o = an(null),
        r = au(t, n),
        i = wi(() => {
          const t = Number(e.selectionStart);
          return isNaN(t) ? -1 : t;
        }),
        s = wi(() => {
          const t = Number(e.selectionEnd);
          return isNaN(t) ? -1 : t;
        }),
        a = wi(() => {
          const t = Number(e.cursor);
          return isNaN(t) ? -1 : t;
        }),
        l = wi(() => {
          var t = Number(e.maxlength);
          return isNaN(t) ? 140 : t;
        }),
        c = Gf(e.modelValue, e.type) || Gf(e.value, e.type),
        u = Ut({
          value: c,
          valueOrigin: c,
          maxlength: l,
          focus: e.focus,
          composing: !1,
          selectionStart: i,
          selectionEnd: s,
          cursor: a
        });
      return (
        Jn(
          () => u.focus,
          (e) => n('update:focus', e)
        ),
        Jn(
          () => u.maxlength,
          (e) => (u.value = u.value.slice(0, e))
        ),
        { fieldRef: o, state: u, trigger: r }
      );
    })(e, t, n),
    { triggerInput: a } = ep(e, i, n, s);
  tp(e, r), kf(0, r);
  const { state: l } = (function () {
    const e = Ut({ attrs: {} });
    return (
      Bo(() => {
        let t = fi();
        for (; t; ) {
          const n = t.type.__scopeId;
          n && (e.attrs[n] = ''), (t = t.proxy && 'page' === t.proxy.$mpType ? null : t.parent);
        }
      }),
      { state: e }
    );
  })();
  !(function (e, t) {
    const n = Gn(du, !1);
    if (!n) return;
    const o = fi(),
      r = {
        submit() {
          const n = o.proxy;
          return [n[e], y(t) ? n[t] : t.value];
        },
        reset() {
          y(t) ? (o.proxy[t] = '') : (t.value = '');
        }
      };
    n.addField(r),
      Fo(() => {
        n.removeField(r);
      });
  })('name', i),
    (function (e, t, n, o, r, i) {
      function s() {
        const n = e.value;
        n &&
          t.focus &&
          t.selectionStart > -1 &&
          t.selectionEnd > -1 &&
          'number' !== n.type &&
          ((n.selectionStart = t.selectionStart), (n.selectionEnd = t.selectionEnd));
      }
      function a() {
        const n = e.value;
        n &&
          t.focus &&
          t.selectionStart < 0 &&
          t.selectionEnd < 0 &&
          t.cursor > -1 &&
          'number' !== n.type &&
          (n.selectionEnd = n.selectionStart = t.cursor);
      }
      function l(e) {
        return 'number' === e.type ? null : e.selectionEnd;
      }
      Jn([() => t.selectionStart, () => t.selectionEnd], s),
        Jn(() => t.cursor, a),
        Jn(
          () => e.value,
          function () {
            const c = e.value;
            if (!c) return;
            const u = function (e, o) {
              e.stopPropagation(),
                (v(i) && !1 === i(e, t)) ||
                  ((t.value = c.value),
                  (t.composing && n.ignoreCompositionEvent) ||
                    r(e, { value: c.value, cursor: l(c) }, o));
            };
            function d(e) {
              n.ignoreCompositionEvent || o(e.type, e, { value: e.data });
            }
            c.addEventListener('change', (e) => e.stopPropagation()),
              c.addEventListener('focus', function (e) {
                (t.focus = !0), o('focus', e, { value: t.value }), s(), a();
              }),
              c.addEventListener('blur', function (e) {
                t.composing && ((t.composing = !1), u(e, !0)),
                  (t.focus = !1),
                  o('blur', e, { value: t.value, cursor: l(e.target) });
              }),
              c.addEventListener('input', u),
              c.addEventListener('compositionstart', (e) => {
                e.stopPropagation(), (t.composing = !0), d(e);
              }),
              c.addEventListener('compositionend', (e) => {
                e.stopPropagation(), t.composing && ((t.composing = !1), u(e)), d(e);
              }),
              c.addEventListener('compositionupdate', d);
          }
        );
    })(r, i, e, s, a, o);
  return {
    fieldRef: r,
    state: i,
    scopedAttrsState: l,
    fixDisabledColor:
      0 === String(navigator.vendor).indexOf('Apple') &&
      CSS.supports('image-orientation:from-image'),
    trigger: s
  };
}
const op = ru({
  name: 'Input',
  props: c({}, Qf, {
    placeholderClass: { type: String, default: 'input-placeholder' },
    textContentType: { type: String, default: '' }
  }),
  emits: ['confirm', ...Jf],
  setup(e, { emit: t, expose: n }) {
    const o = ['text', 'number', 'idcard', 'digit', 'password', 'tel'],
      r = ['off', 'one-time-code'],
      i = wi(() => {
        let t = '';
        switch (e.type) {
          case 'text':
            'search' === e.confirmType && (t = 'search');
            break;
          case 'idcard':
            t = 'text';
            break;
          case 'digit':
            t = 'number';
            break;
          default:
            t = ~o.includes(e.type) ? e.type : 'text';
        }
        return e.password ? 'password' : t;
      }),
      s = wi(() => {
        const t = r.indexOf(e.textContentType),
          n = r.indexOf(I(e.textContentType));
        return r[-1 !== t ? t : -1 !== n ? n : 0];
      });
    let a,
      l = an('');
    const c = an(null),
      {
        fieldRef: u,
        state: d,
        scopedAttrsState: f,
        fixDisabledColor: p,
        trigger: h
      } = np(e, c, t, (e, t) => {
        const n = e.target;
        if ('number' === i.value) {
          if (
            (a && (n.removeEventListener('blur', a), (a = null)), n.validity && !n.validity.valid)
          ) {
            if (
              ((!l.value || !n.value) && '-' === e.data) ||
              ('-' === l.value[0] && 'deleteContentBackward' === e.inputType)
            )
              return (
                (l.value = '-'),
                (t.value = ''),
                (a = () => {
                  l.value = n.value = '';
                }),
                n.addEventListener('blur', a),
                !1
              );
            if (l.value)
              if (-1 !== l.value.indexOf('.')) {
                if ('.' !== e.data && 'deleteContentBackward' === e.inputType) {
                  const e = l.value.indexOf('.');
                  return (l.value = n.value = t.value = l.value.slice(0, e)), !0;
                }
              } else if ('.' === e.data)
                return (
                  (l.value += '.'),
                  (a = () => {
                    l.value = n.value = l.value.slice(0, -1);
                  }),
                  n.addEventListener('blur', a),
                  !1
                );
            return (l.value = t.value = n.value = '-' === l.value ? '' : l.value), !1;
          }
          l.value = n.value;
          const o = t.maxlength;
          if (o > 0 && n.value.length > o)
            return (n.value = n.value.slice(0, o)), (t.value = n.value), !1;
        }
      });
    Jn(
      () => d.value,
      (t) => {
        'number' !== e.type || ('-' === l.value && '' === t) || (l.value = t);
      }
    );
    const g = ['number', 'digit'],
      m = wi(() => (g.includes(e.type) ? e.step : ''));
    function v(t) {
      if ('Enter' !== t.key) return;
      const n = t.target;
      t.stopPropagation(), h('confirm', t, { value: n.value }), !e.confirmHold && n.blur();
    }
    return (
      n({
        $triggerInput: (e) => {
          t('update:modelValue', e.value), t('update:value', e.value), (d.value = e.value);
        }
      }),
      () => {
        let t =
          e.disabled && p
            ? ei(
                'input',
                {
                  key: 'disabled-input',
                  ref: u,
                  value: d.value,
                  tabindex: '-1',
                  readonly: !!e.disabled,
                  type: i.value,
                  maxlength: d.maxlength,
                  step: m.value,
                  class: 'uni-input-input',
                  style: e.cursorColor ? { caretColor: e.cursorColor } : {},
                  onFocus: (e) => e.target.blur()
                },
                null,
                44,
                ['value', 'readonly', 'type', 'maxlength', 'step', 'onFocus']
              )
            : Ho(
                ei(
                  'input',
                  {
                    key: 'input',
                    ref: u,
                    'onUpdate:modelValue': (e) => (d.value = e),
                    disabled: !!e.disabled,
                    type: i.value,
                    maxlength: d.maxlength,
                    step: m.value,
                    enterkeyhint: e.confirmType,
                    pattern: 'number' === e.type ? '[0-9]*' : void 0,
                    class: 'uni-input-input',
                    style: e.cursorColor ? { caretColor: e.cursorColor } : {},
                    autocomplete: s.value,
                    onKeyup: v,
                    inputmode: e.inputmode
                  },
                  null,
                  44,
                  [
                    'onUpdate:modelValue',
                    'disabled',
                    'type',
                    'maxlength',
                    'step',
                    'enterkeyhint',
                    'pattern',
                    'autocomplete',
                    'onKeyup',
                    'inputmode'
                  ]
                ),
                [[bs, d.value]]
              );
        return ei(
          'uni-input',
          { ref: c },
          [
            ei('div', { class: 'uni-input-wrapper' }, [
              Ho(
                ei(
                  'div',
                  ai(f.attrs, {
                    style: e.placeholderStyle,
                    class: ['uni-input-placeholder', e.placeholderClass]
                  }),
                  [e.placeholder],
                  16
                ),
                [[Ss, !(d.value.length || '-' === l.value)]]
              ),
              'search' === e.confirmType
                ? ei(
                    'form',
                    { action: '', onSubmit: (e) => e.preventDefault(), class: 'uni-input-form' },
                    [t],
                    40,
                    ['onSubmit']
                  )
                : t
            ])
          ],
          512
        );
      }
    );
  }
});
const rp = ['class', 'style'],
  ip = /^on[A-Z]+/,
  sp = (e = {}) => {
    const { excludeListeners: t = !1, excludeKeys: n = [] } = e,
      o = fi(),
      r = ln({}),
      i = ln({}),
      s = ln({}),
      a = n.concat(rp);
    return (
      (o.attrs = Ut(o.attrs)),
      Zn(() => {
        const e = ((n = o.attrs), Object.keys(n).map((e) => [e, n[e]])).reduce(
          (e, [n, o]) => (
            a.includes(n)
              ? (e.exclude[n] = o)
              : ip.test(n)
              ? (t || (e.attrs[n] = o), (e.listeners[n] = o))
              : (e.attrs[n] = o),
            e
          ),
          { exclude: {}, attrs: {}, listeners: {} }
        );
        var n;
        (r.value = e.attrs), (i.value = e.listeners), (s.value = e.exclude);
      }),
      { $attrs: r, $listeners: i, $excludeAttrs: s }
    );
  };
function ap(e) {
  const t = [];
  return (
    p(e) &&
      e.forEach((e) => {
        Yr(e) ? (e.type === Rr ? t.push(...ap(e.children)) : t.push(e)) : p(e) && t.push(...ap(e));
      }),
    t
  );
}
const lp = ru({
  inheritAttrs: !1,
  name: 'MovableArea',
  props: { scaleArea: { type: Boolean, default: !1 } },
  setup(e, { slots: t }) {
    const n = an(null),
      o = an(!1);
    let { setContexts: r, events: i } = (function (e, t) {
      const n = an(0),
        o = an(0),
        r = Ut({ x: null, y: null }),
        i = an(null);
      let s = null,
        a = [];
      function l(t) {
        t &&
          1 !== t &&
          (e.scaleArea
            ? a.forEach(function (e) {
                e._setScale(t);
              })
            : s && s._setScale(t));
      }
      function c(e, n = a) {
        let o = t.value;
        function r(e) {
          for (let t = 0; t < n.length; t++) {
            const o = n[t];
            if (e === o.rootRef.value) return o;
          }
          return e === o || e === document.body || e === document ? null : r(e.parentNode);
        }
        return r(e);
      }
      const u = su((t) => {
          let n = t.touches;
          if (n && n.length > 1) {
            let t = { x: n[1].pageX - n[0].pageX, y: n[1].pageY - n[0].pageY };
            if (((i.value = cp(t)), (r.x = t.x), (r.y = t.y), !e.scaleArea)) {
              let e = c(n[0].target),
                t = c(n[1].target);
              s = e && e === t ? e : null;
            }
          }
        }),
        d = su((e) => {
          let t = e.touches;
          if (t && t.length > 1) {
            e.preventDefault();
            let n = { x: t[1].pageX - t[0].pageX, y: t[1].pageY - t[0].pageY };
            if (null !== r.x && i.value && i.value > 0) {
              l(cp(n) / i.value);
            }
            (r.x = n.x), (r.y = n.y);
          }
        }),
        f = su((t) => {
          let n = t.touches;
          (n && n.length) ||
            (t.changedTouches &&
              ((r.x = 0),
              (r.y = 0),
              (i.value = null),
              e.scaleArea
                ? a.forEach(function (e) {
                    e._endScale();
                  })
                : s && s._endScale()));
        });
      function p() {
        h(),
          a.forEach(function (e, t) {
            e.setParent();
          });
      }
      function h() {
        let e = window.getComputedStyle(t.value),
          r = t.value.getBoundingClientRect();
        (n.value =
          r.width -
          ['Left', 'Right'].reduce(function (t, n) {
            const o = 'padding' + n;
            return t + parseFloat(e['border' + n + 'Width']) + parseFloat(e[o]);
          }, 0)),
          (o.value =
            r.height -
            ['Top', 'Bottom'].reduce(function (t, n) {
              const o = 'padding' + n;
              return t + parseFloat(e['border' + n + 'Width']) + parseFloat(e[o]);
            }, 0));
      }
      return (
        Kn('movableAreaWidth', n),
        Kn('movableAreaHeight', o),
        {
          setContexts(e) {
            a = e;
          },
          events: { _onTouchstart: u, _onTouchmove: d, _onTouchend: f, _resize: p }
        }
      );
    })(e, n);
    const { $listeners: s, $attrs: a, $excludeAttrs: l } = sp(),
      c = s.value;
    ['onTouchstart', 'onTouchmove', 'onTouchend'].forEach((e) => {
      let t = c[e],
        n = i[`_${e}`];
      c[e] = t ? [].concat(t, n) : n;
    }),
      Bo(() => {
        i._resize(), (o.value = !0);
      });
    let u = [];
    const d = [];
    function f() {
      const e = [];
      for (let t = 0; t < u.length; t++) {
        let n = u[t];
        n = n.el;
        const o = d.find((e) => n === e.rootRef.value);
        o && e.push(en(o));
      }
      r(e);
    }
    return (
      Kn('_isMounted', o),
      Kn('movableAreaRootRef', n),
      Kn('addMovableViewContext', (e) => {
        d.push(e), f();
      }),
      Kn('removeMovableViewContext', (e) => {
        const t = d.indexOf(e);
        t >= 0 && (d.splice(t, 1), f());
      }),
      () => {
        const e = t.default && t.default();
        return (
          (u = ap(e)),
          ei(
            'uni-movable-area',
            ai({ ref: n }, a.value, l.value, c),
            [ei(Tf, { onResize: i._resize }, null, 8, ['onResize']), u],
            16
          )
        );
      }
    );
  }
});
function cp(e) {
  return Math.sqrt(e.x * e.x + e.y * e.y);
}
const up = function (e, t, n, o) {
  e.addEventListener(
    t,
    (e) => {
      v(n) &&
        !1 === n(e) &&
        ((void 0 === e.cancelable || e.cancelable) && e.preventDefault(), e.stopPropagation());
    },
    { passive: !1 }
  );
};
let dp, fp;
function pp(e, t, n) {
  Fo(() => {
    document.removeEventListener('mousemove', dp), document.removeEventListener('mouseup', fp);
  });
  let o = 0,
    r = 0,
    i = 0,
    s = 0;
  const a = function (e, n, a, l) {
    if (
      !1 ===
      t({
        cancelable: e.cancelable,
        target: e.target,
        currentTarget: e.currentTarget,
        preventDefault: e.preventDefault.bind(e),
        stopPropagation: e.stopPropagation.bind(e),
        touches: e.touches,
        changedTouches: e.changedTouches,
        detail: {
          state: n,
          x: a,
          y: l,
          dx: a - o,
          dy: l - r,
          ddx: a - i,
          ddy: l - s,
          timeStamp: e.timeStamp
        }
      })
    )
      return !1;
  };
  let l,
    c,
    u = null;
  up(e, 'touchstart', function (e) {
    if (((l = !0), 1 === e.touches.length && !u))
      return (
        (u = e), (o = i = e.touches[0].pageX), (r = s = e.touches[0].pageY), a(e, 'start', o, r)
      );
  }),
    up(e, 'mousedown', function (e) {
      if (((c = !0), !l && !u))
        return (u = e), (o = i = e.pageX), (r = s = e.pageY), a(e, 'start', o, r);
    }),
    up(e, 'touchmove', function (e) {
      if (1 === e.touches.length && u) {
        const t = a(e, 'move', e.touches[0].pageX, e.touches[0].pageY);
        return (i = e.touches[0].pageX), (s = e.touches[0].pageY), t;
      }
    });
  const d = (dp = function (e) {
    if (!l && c && u) {
      const t = a(e, 'move', e.pageX, e.pageY);
      return (i = e.pageX), (s = e.pageY), t;
    }
  });
  document.addEventListener('mousemove', d),
    up(e, 'touchend', function (e) {
      if (0 === e.touches.length && u)
        return (
          (l = !1), (u = null), a(e, 'end', e.changedTouches[0].pageX, e.changedTouches[0].pageY)
        );
    });
  const f = (fp = function (e) {
    if (((c = !1), !l && u)) return (u = null), a(e, 'end', e.pageX, e.pageY);
  });
  document.addEventListener('mouseup', f),
    up(e, 'touchcancel', function (e) {
      if (u) {
        l = !1;
        const t = u;
        return (u = null), a(e, n ? 'cancel' : 'end', t.touches[0].pageX, t.touches[0].pageY);
      }
    });
}
function hp(e, t, n) {
  return e > t - n && e < t + n;
}
function gp(e, t) {
  return hp(e, 0, t);
}
function mp() {}
function vp(e, t) {
  (this._m = e), (this._f = 1e3 * t), (this._startTime = 0), (this._v = 0);
}
function yp(e, t, n) {
  (this._m = e),
    (this._k = t),
    (this._c = n),
    (this._solution = null),
    (this._endPosition = 0),
    (this._startTime = 0);
}
function bp(e, t, n) {
  (this._springX = new yp(e, t, n)),
    (this._springY = new yp(e, t, n)),
    (this._springScale = new yp(e, t, n)),
    (this._startTime = 0);
}
(mp.prototype.x = function (e) {
  return Math.sqrt(e);
}),
  (vp.prototype.setV = function (e, t) {
    const n = Math.pow(Math.pow(e, 2) + Math.pow(t, 2), 0.5);
    (this._x_v = e),
      (this._y_v = t),
      (this._x_a = (-this._f * this._x_v) / n),
      (this._y_a = (-this._f * this._y_v) / n),
      (this._t = Math.abs(e / this._x_a) || Math.abs(t / this._y_a)),
      (this._lastDt = null),
      (this._startTime = new Date().getTime());
  }),
  (vp.prototype.setS = function (e, t) {
    (this._x_s = e), (this._y_s = t);
  }),
  (vp.prototype.s = function (e) {
    void 0 === e && (e = (new Date().getTime() - this._startTime) / 1e3),
      e > this._t && ((e = this._t), (this._lastDt = e));
    let t = this._x_v * e + 0.5 * this._x_a * Math.pow(e, 2) + this._x_s,
      n = this._y_v * e + 0.5 * this._y_a * Math.pow(e, 2) + this._y_s;
    return (
      ((this._x_a > 0 && t < this._endPositionX) || (this._x_a < 0 && t > this._endPositionX)) &&
        (t = this._endPositionX),
      ((this._y_a > 0 && n < this._endPositionY) || (this._y_a < 0 && n > this._endPositionY)) &&
        (n = this._endPositionY),
      { x: t, y: n }
    );
  }),
  (vp.prototype.ds = function (e) {
    return (
      void 0 === e && (e = (new Date().getTime() - this._startTime) / 1e3),
      e > this._t && (e = this._t),
      { dx: this._x_v + this._x_a * e, dy: this._y_v + this._y_a * e }
    );
  }),
  (vp.prototype.delta = function () {
    return {
      x: (-1.5 * Math.pow(this._x_v, 2)) / this._x_a || 0,
      y: (-1.5 * Math.pow(this._y_v, 2)) / this._y_a || 0
    };
  }),
  (vp.prototype.dt = function () {
    return -this._x_v / this._x_a;
  }),
  (vp.prototype.done = function () {
    const e =
      hp(this.s().x, this._endPositionX) ||
      hp(this.s().y, this._endPositionY) ||
      this._lastDt === this._t;
    return (this._lastDt = null), e;
  }),
  (vp.prototype.setEnd = function (e, t) {
    (this._endPositionX = e), (this._endPositionY = t);
  }),
  (vp.prototype.reconfigure = function (e, t) {
    (this._m = e), (this._f = 1e3 * t);
  }),
  (yp.prototype._solve = function (e, t) {
    const n = this._c,
      o = this._m,
      r = this._k,
      i = n * n - 4 * o * r;
    if (0 === i) {
      const r = -n / (2 * o),
        i = e,
        s = t / (r * e);
      return {
        x: function (e) {
          return (i + s * e) * Math.pow(Math.E, r * e);
        },
        dx: function (e) {
          const t = Math.pow(Math.E, r * e);
          return r * (i + s * e) * t + s * t;
        }
      };
    }
    if (i > 0) {
      const r = (-n - Math.sqrt(i)) / (2 * o),
        s = (-n + Math.sqrt(i)) / (2 * o),
        a = (t - r * e) / (s - r),
        l = e - a;
      return {
        x: function (e) {
          let t, n;
          return (
            e === this._t && ((t = this._powER1T), (n = this._powER2T)),
            (this._t = e),
            t || (t = this._powER1T = Math.pow(Math.E, r * e)),
            n || (n = this._powER2T = Math.pow(Math.E, s * e)),
            l * t + a * n
          );
        },
        dx: function (e) {
          let t, n;
          return (
            e === this._t && ((t = this._powER1T), (n = this._powER2T)),
            (this._t = e),
            t || (t = this._powER1T = Math.pow(Math.E, r * e)),
            n || (n = this._powER2T = Math.pow(Math.E, s * e)),
            l * r * t + a * s * n
          );
        }
      };
    }
    const s = Math.sqrt(4 * o * r - n * n) / (2 * o),
      a = (-n / 2) * o,
      l = e,
      c = (t - a * e) / s;
    return {
      x: function (e) {
        return Math.pow(Math.E, a * e) * (l * Math.cos(s * e) + c * Math.sin(s * e));
      },
      dx: function (e) {
        const t = Math.pow(Math.E, a * e),
          n = Math.cos(s * e),
          o = Math.sin(s * e);
        return t * (c * s * n - l * s * o) + a * t * (c * o + l * n);
      }
    };
  }),
  (yp.prototype.x = function (e) {
    return (
      void 0 === e && (e = (new Date().getTime() - this._startTime) / 1e3),
      this._solution ? this._endPosition + this._solution.x(e) : 0
    );
  }),
  (yp.prototype.dx = function (e) {
    return (
      void 0 === e && (e = (new Date().getTime() - this._startTime) / 1e3),
      this._solution ? this._solution.dx(e) : 0
    );
  }),
  (yp.prototype.setEnd = function (e, t, n) {
    if ((n || (n = new Date().getTime()), e !== this._endPosition || !gp(t, 0.1))) {
      t = t || 0;
      let o = this._endPosition;
      this._solution &&
        (gp(t, 0.1) && (t = this._solution.dx((n - this._startTime) / 1e3)),
        (o = this._solution.x((n - this._startTime) / 1e3)),
        gp(t, 0.1) && (t = 0),
        gp(o, 0.1) && (o = 0),
        (o += this._endPosition)),
        (this._solution && gp(o - e, 0.1) && gp(t, 0.1)) ||
          ((this._endPosition = e),
          (this._solution = this._solve(o - this._endPosition, t)),
          (this._startTime = n));
    }
  }),
  (yp.prototype.snap = function (e) {
    (this._startTime = new Date().getTime()),
      (this._endPosition = e),
      (this._solution = {
        x: function () {
          return 0;
        },
        dx: function () {
          return 0;
        }
      });
  }),
  (yp.prototype.done = function (e) {
    return (
      e || (e = new Date().getTime()), hp(this.x(), this._endPosition, 0.1) && gp(this.dx(), 0.1)
    );
  }),
  (yp.prototype.reconfigure = function (e, t, n) {
    (this._m = e),
      (this._k = t),
      (this._c = n),
      this.done() ||
        ((this._solution = this._solve(this.x() - this._endPosition, this.dx())),
        (this._startTime = new Date().getTime()));
  }),
  (yp.prototype.springConstant = function () {
    return this._k;
  }),
  (yp.prototype.damping = function () {
    return this._c;
  }),
  (yp.prototype.configuration = function () {
    return [
      {
        label: 'Spring Constant',
        read: this.springConstant.bind(this),
        write: function (e, t) {
          e.reconfigure(1, t, e.damping());
        }.bind(this, this),
        min: 100,
        max: 1e3
      },
      {
        label: 'Damping',
        read: this.damping.bind(this),
        write: function (e, t) {
          e.reconfigure(1, e.springConstant(), t);
        }.bind(this, this),
        min: 1,
        max: 500
      }
    ];
  }),
  (bp.prototype.setEnd = function (e, t, n, o) {
    const r = new Date().getTime();
    this._springX.setEnd(e, o, r),
      this._springY.setEnd(t, o, r),
      this._springScale.setEnd(n, o, r),
      (this._startTime = r);
  }),
  (bp.prototype.x = function () {
    const e = (new Date().getTime() - this._startTime) / 1e3;
    return { x: this._springX.x(e), y: this._springY.x(e), scale: this._springScale.x(e) };
  }),
  (bp.prototype.done = function () {
    const e = new Date().getTime();
    return this._springX.done(e) && this._springY.done(e) && this._springScale.done(e);
  }),
  (bp.prototype.reconfigure = function (e, t, n) {
    this._springX.reconfigure(e, t, n),
      this._springY.reconfigure(e, t, n),
      this._springScale.reconfigure(e, t, n);
  });
function _p(e, t) {
  return +((1e3 * e - 1e3 * t) / 1e3).toFixed(1);
}
const wp = ru({
  name: 'MovableView',
  props: {
    direction: { type: String, default: 'none' },
    inertia: { type: [Boolean, String], default: !1 },
    outOfBounds: { type: [Boolean, String], default: !1 },
    x: { type: [Number, String], default: 0 },
    y: { type: [Number, String], default: 0 },
    damping: { type: [Number, String], default: 20 },
    friction: { type: [Number, String], default: 2 },
    disabled: { type: [Boolean, String], default: !1 },
    scale: { type: [Boolean, String], default: !1 },
    scaleMin: { type: [Number, String], default: 0.5 },
    scaleMax: { type: [Number, String], default: 10 },
    scaleValue: { type: [Number, String], default: 1 },
    animation: { type: [Boolean, String], default: !0 }
  },
  emits: ['change', 'scale'],
  setup(e, { slots: t, emit: n }) {
    const o = an(null),
      r = au(o, n),
      { setParent: i } = (function (e, t, n) {
        const o = Gn('_isMounted', an(!1)),
          r = Gn('addMovableViewContext', () => {}),
          i = Gn('removeMovableViewContext', () => {});
        let s,
          a,
          l = an(1),
          c = an(1),
          u = an(!1),
          d = an(0),
          f = an(0),
          p = null,
          h = null,
          g = !1,
          m = null,
          v = null;
        const y = new mp(),
          b = new mp(),
          _ = { historyX: [0, 0], historyY: [0, 0], historyT: [0, 0] },
          w = wi(() => {
            let t = Number(e.friction);
            return isNaN(t) || t <= 0 ? 2 : t;
          }),
          x = new vp(1, w.value);
        Jn(
          () => e.disabled,
          () => {
            z();
          }
        );
        const {
          _updateOldScale: T,
          _endScale: S,
          _setScale: C,
          scaleValueSync: k,
          _updateBoundary: E,
          _updateOffset: O,
          _updateWH: L,
          _scaleOffset: $,
          minX: I,
          minY: M,
          maxX: A,
          maxY: P,
          FAandSFACancel: B,
          _getLimitXY: R,
          _setTransform: N,
          _revise: F,
          dampingNumber: D,
          xMove: j,
          yMove: q,
          xSync: V,
          ySync: W,
          _STD: H
        } = (function (e, t, n, o, r, i, s, a, l, c) {
          const u = wi(() => {
              let t = Number(e.scaleMin);
              return isNaN(t) ? 0.5 : t;
            }),
            d = wi(() => {
              let t = Number(e.scaleMax);
              return isNaN(t) ? 10 : t;
            }),
            f = an(Number(e.scaleValue) || 1);
          Jn(f, (e) => {
            N(e);
          }),
            Jn(u, () => {
              R();
            }),
            Jn(d, () => {
              R();
            }),
            Jn(
              () => e.scaleValue,
              (e) => {
                f.value = Number(e) || 0;
              }
            );
          const {
              _updateBoundary: p,
              _updateOffset: h,
              _updateWH: g,
              _scaleOffset: m,
              minX: v,
              minY: y,
              maxX: b,
              maxY: _
            } = (function (e, t, n) {
              const o = Gn('movableAreaWidth', an(0)),
                r = Gn('movableAreaHeight', an(0)),
                i = Gn('movableAreaRootRef'),
                s = { x: 0, y: 0 },
                a = { x: 0, y: 0 },
                l = an(0),
                c = an(0),
                u = an(0),
                d = an(0),
                f = an(0),
                p = an(0);
              function h() {
                let e = 0 - s.x + a.x,
                  t = o.value - l.value - s.x - a.x;
                (u.value = Math.min(e, t)), (f.value = Math.max(e, t));
                let n = 0 - s.y + a.y,
                  i = r.value - c.value - s.y - a.y;
                (d.value = Math.min(n, i)), (p.value = Math.max(n, i));
              }
              function g() {
                (s.x = Sp(e.value, i.value)), (s.y = Cp(e.value, i.value));
              }
              function m(o) {
                (o = o || t.value), (o = n(o));
                let r = e.value.getBoundingClientRect();
                (c.value = r.height / t.value), (l.value = r.width / t.value);
                let i = c.value * o,
                  s = l.value * o;
                (a.x = (s - l.value) / 2), (a.y = (i - c.value) / 2);
              }
              return {
                _updateBoundary: h,
                _updateOffset: g,
                _updateWH: m,
                _scaleOffset: a,
                minX: u,
                minY: d,
                maxX: f,
                maxY: p
              };
            })(t, o, B),
            {
              FAandSFACancel: w,
              _getLimitXY: x,
              _animationTo: T,
              _setTransform: S,
              _revise: C,
              dampingNumber: k,
              xMove: E,
              yMove: O,
              xSync: L,
              ySync: $,
              _STD: I
            } = (function (e, t, n, o, r, i, s, a, l, c, u, d, f, p) {
              const h = wi(() => {
                  let e = Number(t.damping);
                  return isNaN(e) ? 20 : e;
                }),
                g = wi(() => 'all' === t.direction || 'horizontal' === t.direction),
                m = wi(() => 'all' === t.direction || 'vertical' === t.direction),
                v = an(Ep(t.x)),
                y = an(Ep(t.y));
              Jn(
                () => t.x,
                (e) => {
                  v.value = Ep(e);
                }
              ),
                Jn(
                  () => t.y,
                  (e) => {
                    y.value = Ep(e);
                  }
                ),
                Jn(v, (e) => {
                  C(e);
                }),
                Jn(y, (e) => {
                  k(e);
                });
              const b = new bp(1, (9 * Math.pow(h.value, 2)) / 40, h.value);
              function _(e, t) {
                let n = !1;
                return (
                  e > r.value
                    ? ((e = r.value), (n = !0))
                    : e < s.value && ((e = s.value), (n = !0)),
                  t > i.value
                    ? ((t = i.value), (n = !0))
                    : t < a.value && ((t = a.value), (n = !0)),
                  { x: e, y: t, outOfBounds: n }
                );
              }
              function w() {
                d && d.cancel(), u && u.cancel();
              }
              function x(e, n, r, i, s, a) {
                w(), g.value || (e = l.value), m.value || (n = c.value), t.scale || (r = o.value);
                let d = _(e, n);
                (e = d.x),
                  (n = d.y),
                  t.animation
                    ? ((b._springX._solution = null),
                      (b._springY._solution = null),
                      (b._springScale._solution = null),
                      (b._springX._endPosition = l.value),
                      (b._springY._endPosition = c.value),
                      (b._springScale._endPosition = o.value),
                      b.setEnd(e, n, r, 1),
                      (u = kp(
                        b,
                        function () {
                          let e = b.x();
                          T(e.x, e.y, e.scale, i, s, a);
                        },
                        function () {
                          u.cancel();
                        }
                      )))
                    : T(e, n, r, i, s, a);
              }
              function T(r, i, s, a = '', u, d) {
                (null !== r && 'NaN' !== r.toString() && 'number' == typeof r) ||
                  (r = l.value || 0),
                  (null !== i && 'NaN' !== i.toString() && 'number' == typeof i) ||
                    (i = c.value || 0),
                  (r = Number(r.toFixed(1))),
                  (i = Number(i.toFixed(1))),
                  (s = Number(s.toFixed(1))),
                  (l.value === r && c.value === i) ||
                    u ||
                    p('change', {}, { x: _p(r, n.x), y: _p(i, n.y), source: a }),
                  t.scale || (s = o.value),
                  (s = +(s = f(s)).toFixed(3)),
                  d && s !== o.value && p('scale', {}, { x: r, y: i, scale: s });
                let h =
                  'translateX(' +
                  r +
                  'px) translateY(' +
                  i +
                  'px) translateZ(0px) scale(' +
                  s +
                  ')';
                e.value &&
                  ((e.value.style.transform = h),
                  (e.value.style.webkitTransform = h),
                  (l.value = r),
                  (c.value = i),
                  (o.value = s));
              }
              function S(e) {
                let t = _(l.value, c.value),
                  n = t.x,
                  r = t.y,
                  i = t.outOfBounds;
                return i && x(n, r, o.value, e), i;
              }
              function C(e) {
                if (g.value) {
                  if (e + n.x === l.value) return l;
                  u && u.cancel(), x(e + n.x, y.value + n.y, o.value);
                }
                return e;
              }
              function k(e) {
                if (m.value) {
                  if (e + n.y === c.value) return c;
                  u && u.cancel(), x(v.value + n.x, e + n.y, o.value);
                }
                return e;
              }
              return {
                FAandSFACancel: w,
                _getLimitXY: _,
                _animationTo: x,
                _setTransform: T,
                _revise: S,
                dampingNumber: h,
                xMove: g,
                yMove: m,
                xSync: v,
                ySync: y,
                _STD: b
              };
            })(t, e, m, o, b, _, v, y, s, a, l, c, B, n);
          function M(t, n) {
            if (e.scale) {
              (t = B(t)), g(t), p();
              const e = x(s.value, a.value),
                o = e.x,
                r = e.y;
              n
                ? T(o, r, t, '', !0, !0)
                : Tp(function () {
                    S(o, r, t, '', !0, !0);
                  });
            }
          }
          function A() {
            i.value = !0;
          }
          function P(e) {
            r.value = e;
          }
          function B(e) {
            return (e = Math.max(0.5, u.value, e)), (e = Math.min(10, d.value, e));
          }
          function R() {
            if (!e.scale) return !1;
            M(o.value, !0), P(o.value);
          }
          function N(t) {
            return !!e.scale && (M((t = B(t)), !0), P(t), t);
          }
          function F() {
            (i.value = !1), P(o.value);
          }
          function D(e) {
            e && ((e = r.value * e), A(), M(e));
          }
          return {
            _updateOldScale: P,
            _endScale: F,
            _setScale: D,
            scaleValueSync: f,
            _updateBoundary: p,
            _updateOffset: h,
            _updateWH: g,
            _scaleOffset: m,
            minX: v,
            minY: y,
            maxX: b,
            maxY: _,
            FAandSFACancel: w,
            _getLimitXY: x,
            _animationTo: T,
            _setTransform: S,
            _revise: C,
            dampingNumber: k,
            xMove: E,
            yMove: O,
            xSync: L,
            ySync: $,
            _STD: I
          };
        })(e, n, t, l, c, u, d, f, p, h);
        function z() {
          u.value ||
            e.disabled ||
            (B(),
            (_.historyX = [0, 0]),
            (_.historyY = [0, 0]),
            (_.historyT = [0, 0]),
            j.value && (s = d.value),
            q.value && (a = f.value),
            (n.value.style.willChange = 'transform'),
            (m = null),
            (v = null),
            (g = !0));
        }
        function U(t) {
          if (!u.value && !e.disabled && g) {
            let n = d.value,
              o = f.value;
            if (
              (null === v &&
                (v = Math.abs(t.detail.dx / t.detail.dy) > 1 ? 'htouchmove' : 'vtouchmove'),
              j.value &&
                ((n = t.detail.dx + s),
                _.historyX.shift(),
                _.historyX.push(n),
                q.value || null !== m || (m = Math.abs(t.detail.dx / t.detail.dy) < 1)),
              q.value &&
                ((o = t.detail.dy + a),
                _.historyY.shift(),
                _.historyY.push(o),
                j.value || null !== m || (m = Math.abs(t.detail.dy / t.detail.dx) < 1)),
              _.historyT.shift(),
              _.historyT.push(t.detail.timeStamp),
              !m)
            ) {
              t.preventDefault();
              let r = 'touch';
              n < I.value
                ? e.outOfBounds
                  ? ((r = 'touch-out-of-bounds'), (n = I.value - y.x(I.value - n)))
                  : (n = I.value)
                : n > A.value &&
                  (e.outOfBounds
                    ? ((r = 'touch-out-of-bounds'), (n = A.value + y.x(n - A.value)))
                    : (n = A.value)),
                o < M.value
                  ? e.outOfBounds
                    ? ((r = 'touch-out-of-bounds'), (o = M.value - b.x(M.value - o)))
                    : (o = M.value)
                  : o > P.value &&
                    (e.outOfBounds
                      ? ((r = 'touch-out-of-bounds'), (o = P.value + b.x(o - P.value)))
                      : (o = P.value)),
                Tp(function () {
                  N(n, o, l.value, r);
                });
            }
          }
        }
        function X() {
          if (
            !u.value &&
            !e.disabled &&
            g &&
            ((n.value.style.willChange = 'auto'), (g = !1), !m && !F('out-of-bounds') && e.inertia)
          ) {
            const e = (1e3 * (_.historyX[1] - _.historyX[0])) / (_.historyT[1] - _.historyT[0]),
              t = (1e3 * (_.historyY[1] - _.historyY[0])) / (_.historyT[1] - _.historyT[0]),
              n = d.value,
              o = f.value;
            x.setV(e, t), x.setS(n, o);
            const r = x.delta().x,
              i = x.delta().y;
            let s = r + n,
              a = i + o;
            s < I.value
              ? ((s = I.value), (a = o + ((I.value - n) * i) / r))
              : s > A.value && ((s = A.value), (a = o + ((A.value - n) * i) / r)),
              a < M.value
                ? ((a = M.value), (s = n + ((M.value - o) * r) / i))
                : a > P.value && ((a = P.value), (s = n + ((P.value - o) * r) / i)),
              x.setEnd(s, a),
              (h = kp(
                x,
                function () {
                  let e = x.s(),
                    t = e.x,
                    n = e.y;
                  N(t, n, l.value, 'friction');
                },
                function () {
                  h.cancel();
                }
              ));
          }
          e.outOfBounds || e.inertia || B();
        }
        function Y() {
          if (!o.value) return;
          B();
          let t = e.scale ? k.value : 1;
          O(), L(t), E();
          let n = R(V.value + $.x, W.value + $.y),
            r = n.x,
            i = n.y;
          N(r, i, t, '', !0), T(t);
        }
        return (
          Bo(() => {
            pp(n.value, (e) => {
              switch (e.detail.state) {
                case 'start':
                  z();
                  break;
                case 'move':
                  U(e);
                  break;
                case 'end':
                  X();
              }
            }),
              Y(),
              x.reconfigure(1, w.value),
              H.reconfigure(1, (9 * Math.pow(D.value, 2)) / 40, D.value),
              (n.value.style.transformOrigin = 'center');
            const e = { rootRef: n, setParent: Y, _endScale: S, _setScale: C };
            r(e),
              Do(() => {
                i(e);
              });
          }),
          Do(() => {
            B();
          }),
          { setParent: Y }
        );
      })(e, r, o);
    return () =>
      ei(
        'uni-movable-view',
        { ref: o },
        [ei(Tf, { onResize: i }, null, 8, ['onResize']), t.default && t.default()],
        512
      );
  }
});
let xp = !1;
function Tp(e) {
  xp ||
    ((xp = !0),
    requestAnimationFrame(function () {
      e(), (xp = !1);
    }));
}
function Sp(e, t) {
  if (e === t) return 0;
  let n = e.offsetLeft;
  return e.offsetParent ? (n += Sp(e.offsetParent, t)) : 0;
}
function Cp(e, t) {
  if (e === t) return 0;
  let n = e.offsetTop;
  return e.offsetParent ? (n += Cp(e.offsetParent, t)) : 0;
}
function kp(e, t, n) {
  let o = { id: 0, cancelled: !1 };
  return (
    (function e(t, n, o, r) {
      if (!t || !t.cancelled) {
        o(n);
        let i = n.done();
        i || t.cancelled || (t.id = requestAnimationFrame(e.bind(null, t, n, o, r))),
          i && r && r(n);
      }
    })(o, e, t, n),
    {
      cancel: function (e) {
        e && e.id && cancelAnimationFrame(e.id), e && (e.cancelled = !0);
      }.bind(null, o),
      model: e
    }
  );
}
function Ep(e) {
  return /\d+[ur]px$/i.test(e) ? md(parseFloat(e)) : Number(e) || 0;
}
const Op = ['navigate', 'redirect', 'switchTab', 'reLaunch', 'navigateBack'],
  Lp = [
    'slide-in-right',
    'slide-in-left',
    'slide-in-top',
    'slide-in-bottom',
    'fade-in',
    'zoom-out',
    'zoom-fade-out',
    'pop-in',
    'none'
  ],
  $p = [
    'slide-out-right',
    'slide-out-left',
    'slide-out-top',
    'slide-out-bottom',
    'fade-out',
    'zoom-in',
    'zoom-fade-in',
    'pop-out',
    'none'
  ],
  Ip = {
    hoverClass: { type: String, default: 'navigator-hover' },
    url: { type: String, default: '' },
    openType: { type: String, default: 'navigate', validator: (e) => Boolean(~Op.indexOf(e)) },
    delta: { type: Number, default: 1 },
    hoverStartTime: { type: [Number, String], default: 50 },
    hoverStayTime: { type: [Number, String], default: 600 },
    exists: { type: String, default: '' },
    hoverStopPropagation: { type: Boolean, default: !1 },
    animationType: { type: String, default: '', validator: (e) => !e || Lp.concat($p).includes(e) },
    animationDuration: { type: [String, Number], default: 300 }
  };
const Mp = ru({
    name: 'Navigator',
    inheritAttrs: !1,
    compatConfig: { MODE: 3 },
    props: c({}, Ip, { renderLink: { type: Boolean, default: !0 } }),
    setup(e, { slots: t }) {
      const n = an(null),
        o = fi(),
        r = (o && o.vnode.scopeId) || '',
        { hovering: i, binding: s } = cu(e),
        a = (function (e) {
          return () => {
            if ('navigateBack' !== e.openType && !e.url)
              return void console.error(
                '<navigator/> should have url attribute when using navigateTo, redirectTo, reLaunch or switchTab'
              );
            const t = parseInt(e.animationDuration);
            switch (e.openType) {
              case 'navigate':
                Ug({
                  url: e.url,
                  animationType: e.animationType || 'pop-in',
                  animationDuration: t
                });
                break;
              case 'redirect':
                Xg({ url: e.url, exists: e.exists });
                break;
              case 'switchTab':
                Gg({ url: e.url });
                break;
              case 'reLaunch':
                Yg({ url: e.url });
                break;
              case 'navigateBack':
                Hg({
                  delta: e.delta,
                  animationType: e.animationType || 'pop-out',
                  animationDuration: t
                });
            }
          };
        })(e);
      return () => {
        const { hoverClass: l, url: c } = e,
          u = e.hoverClass && 'none' !== e.hoverClass,
          d = e.renderLink
            ? ei(
                'a',
                { class: 'navigator-wrap', href: c, onClick: rc, onMousedown: rc },
                [t.default && t.default()],
                40,
                ['href', 'onClick', 'onMousedown']
              )
            : t.default && t.default();
        return ei(
          'uni-navigator',
          ai(
            { class: u && i.value ? l : '', ref: n },
            u && s,
            o ? o.attrs : {},
            { [r]: '' },
            { onClick: a }
          ),
          [d],
          16,
          ['onClick']
        );
      };
    }
  }),
  Ap = {
    a: '',
    abbr: '',
    address: '',
    article: '',
    aside: '',
    b: '',
    bdi: '',
    bdo: ['dir'],
    big: '',
    blockquote: '',
    br: '',
    caption: '',
    center: '',
    cite: '',
    code: '',
    col: ['span', 'width'],
    colgroup: ['span', 'width'],
    dd: '',
    del: '',
    div: '',
    dl: '',
    dt: '',
    em: '',
    fieldset: '',
    font: '',
    footer: '',
    h1: '',
    h2: '',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
    header: '',
    hr: '',
    i: '',
    img: ['alt', 'src', 'height', 'width'],
    ins: '',
    label: '',
    legend: '',
    li: '',
    mark: '',
    nav: '',
    ol: ['start', 'type'],
    p: '',
    pre: '',
    q: '',
    rt: '',
    ruby: '',
    s: '',
    section: '',
    small: '',
    span: '',
    strong: '',
    sub: '',
    sup: '',
    table: ['width'],
    tbody: '',
    td: ['colspan', 'height', 'rowspan', 'width'],
    tfoot: '',
    th: ['colspan', 'height', 'rowspan', 'width'],
    thead: '',
    tr: ['colspan', 'height', 'rowspan', 'width'],
    tt: '',
    u: '',
    ul: ''
  },
  Pp = {
    amp: '&',
    gt: '>',
    lt: '<',
    nbsp: ' ',
    quot: '"',
    apos: "'",
    ldquo: '“',
    rdquo: '”',
    yen: '￥',
    radic: '√',
    lceil: '⌈',
    rceil: '⌉',
    lfloor: '⌊',
    rfloor: '⌋',
    hellip: '…'
  };
const Bp = (e, t, n) =>
  !n || (p(n) && !n.length)
    ? []
    : n.map((n) => {
        if (S(n)) {
          if (!f(n, 'type') || 'node' === n.type) {
            let o = { [e]: '' };
            const r = n.name.toLowerCase();
            if (!f(Ap, r)) return;
            return (
              (function (e, t) {
                if (S(t))
                  for (const n in t)
                    if (f(t, n)) {
                      const o = t[n];
                      'img' === e && 'src' === n && (t[n] = yu(o));
                    }
              })(r, n.attrs),
              (o = c(
                o,
                (function (e, t) {
                  if (['a', 'img'].includes(e.name) && t)
                    return {
                      onClick: (n) => {
                        t(n, { node: e }),
                          n.stopPropagation(),
                          n.preventDefault(),
                          (n.returnValue = !1);
                      }
                    };
                })(n, t),
                n.attrs
              )),
              xi(n.name, o, Bp(e, t, n.children))
            );
          }
          return 'text' === n.type && y(n.text) && '' !== n.text
            ? ni(
                (n.text || '').replace(/&(([a-zA-Z]+)|(#x{0,1}[\da-zA-Z]+));/gi, function (e, t) {
                  return f(Pp, t) && Pp[t]
                    ? Pp[t]
                    : /^#[0-9]{1,4}$/.test(t)
                    ? String.fromCharCode(t.slice(1))
                    : /^#x[0-9a-f]{1,4}$/i.test(t)
                    ? String.fromCharCode(0 + t.slice(1))
                    : e;
                })
              )
            : void 0;
        }
      });
function Rp(e) {
  e = (function (e) {
    return e
      .replace(/<\?xml.*\?>\n/, '')
      .replace(/<!doctype.*>\n/, '')
      .replace(/<!DOCTYPE.*>\n/, '');
  })(e);
  const t = [],
    n = { node: 'root', children: [] };
  return (
    (function (e, t) {
      var n,
        o,
        r,
        i = [],
        s = e;
      for (
        i.last = function () {
          return this[this.length - 1];
        };
        e;

      ) {
        if (((o = !0), i.last() && Bf[i.last()]))
          (e = e.replace(new RegExp('([\\s\\S]*?)</' + i.last() + '[^>]*>'), function (e, n) {
            return (
              (n = n.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, '$1$2')),
              t.chars && t.chars(n),
              ''
            );
          })),
            c('', i.last());
        else if (
          (0 == e.indexOf('\x3c!--')
            ? (n = e.indexOf('--\x3e')) >= 0 &&
              (t.comment && t.comment(e.substring(4, n)), (e = e.substring(n + 3)), (o = !1))
            : 0 == e.indexOf('</')
            ? (r = e.match(Of)) && ((e = e.substring(r[0].length)), r[0].replace(Of, c), (o = !1))
            : 0 == e.indexOf('<') &&
              (r = e.match(Ef)) &&
              ((e = e.substring(r[0].length)), r[0].replace(Ef, l), (o = !1)),
          o)
        ) {
          var a = (n = e.indexOf('<')) < 0 ? e : e.substring(0, n);
          (e = n < 0 ? '' : e.substring(n)), t.chars && t.chars(a);
        }
        if (e == s) throw 'Parse Error: ' + e;
        s = e;
      }
      function l(e, n, o, r) {
        if (((n = n.toLowerCase()), If[n])) for (; i.last() && Mf[i.last()]; ) c('', i.last());
        if ((Af[n] && i.last() == n && c('', n), (r = $f[n] || !!r) || i.push(n), t.start)) {
          var s = [];
          o.replace(Lf, function (e, t) {
            var n = arguments[2]
              ? arguments[2]
              : arguments[3]
              ? arguments[3]
              : arguments[4]
              ? arguments[4]
              : Pf[t]
              ? t
              : '';
            s.push({ name: t, value: n, escaped: n.replace(/(^|[^\\])"/g, '$1\\"') });
          }),
            t.start && t.start(n, s, r);
        }
      }
      function c(e, n) {
        if (n) for (o = i.length - 1; o >= 0 && i[o] != n; o--);
        else var o = 0;
        if (o >= 0) {
          for (var r = i.length - 1; r >= o; r--) t.end && t.end(i[r]);
          i.length = o;
        }
      }
      c();
    })(e, {
      start: function (e, o, r) {
        const i = { name: e };
        if (
          (0 !== o.length &&
            (i.attrs = (function (e) {
              return e.reduce(function (e, t) {
                let n = t.value;
                const o = t.name;
                return (
                  n.match(/ /) && -1 === ['style', 'src'].indexOf(o) && (n = n.split(' ')),
                  e[o] ? (Array.isArray(e[o]) ? e[o].push(n) : (e[o] = [e[o], n])) : (e[o] = n),
                  e
                );
              }, {});
            })(o)),
          r)
        ) {
          const e = t[0] || n;
          e.children || (e.children = []), e.children.push(i);
        } else t.unshift(i);
      },
      end: function (e) {
        const o = t.shift();
        if ((o.name !== e && console.error('invalid state: mismatch end tag'), 0 === t.length))
          n.children.push(o);
        else {
          const e = t[0];
          e.children || (e.children = []), e.children.push(o);
        }
      },
      chars: function (e) {
        const o = { type: 'text', text: e };
        if (0 === t.length) n.children.push(o);
        else {
          const e = t[0];
          e.children || (e.children = []), e.children.push(o);
        }
      },
      comment: function (e) {
        const n = { node: 'comment', text: e },
          o = t[0];
        o.children || (o.children = []), o.children.push(n);
      }
    }),
    n.children
  );
}
const Np = ru({
    name: 'RichText',
    compatConfig: { MODE: 3 },
    props: {
      nodes: {
        type: [Array, String],
        default: function () {
          return [];
        }
      }
    },
    emits: [
      'click',
      'touchstart',
      'touchmove',
      'touchcancel',
      'touchend',
      'longpress',
      'itemclick'
    ],
    setup(e, { emit: t }) {
      const n = fi(),
        o = (n && n.vnode.scopeId) || '',
        r = an(null),
        i = an([]),
        s = au(r, t);
      function a(e, t = {}) {
        s('itemclick', e, t);
      }
      return (
        Jn(
          () => e.nodes,
          function () {
            let t = e.nodes;
            y(t) && (t = Rp(e.nodes)), (i.value = Bp(o, a, t));
          },
          { immediate: !0 }
        ),
        () => xi('uni-rich-text', { ref: r }, xi('div', {}, i.value))
      );
    }
  }),
  Fp = we(!0),
  Dp = ru({
    name: 'ScrollView',
    compatConfig: { MODE: 3 },
    props: {
      direction: { type: [String], default: 'vertical' },
      scrollX: { type: [Boolean, String], default: !1 },
      scrollY: { type: [Boolean, String], default: !1 },
      showScrollbar: { type: [Boolean, String], default: !0 },
      upperThreshold: { type: [Number, String], default: 50 },
      lowerThreshold: { type: [Number, String], default: 50 },
      scrollTop: { type: [Number, String], default: 0 },
      scrollLeft: { type: [Number, String], default: 0 },
      scrollIntoView: { type: String, default: '' },
      scrollWithAnimation: { type: [Boolean, String], default: !1 },
      enableBackToTop: { type: [Boolean, String], default: !1 },
      refresherEnabled: { type: [Boolean, String], default: !1 },
      refresherThreshold: { type: Number, default: 45 },
      refresherDefaultStyle: { type: String, default: 'back' },
      refresherBackground: { type: String, default: '#fff' },
      refresherTriggered: { type: [Boolean, String], default: !1 }
    },
    emits: [
      'scroll',
      'scrolltoupper',
      'scrolltolower',
      'refresherrefresh',
      'refresherrestore',
      'refresherpulling',
      'refresherabort',
      'update:refresherTriggered'
    ],
    setup(e, { emit: t, slots: n }) {
      const o = an(null),
        r = an(null),
        i = an(null),
        s = an(null),
        a = an(null),
        l = au(o, t),
        {
          state: c,
          scrollTopNumber: u,
          scrollLeftNumber: d
        } = (function (e) {
          const t = wi(() => Number(e.scrollTop) || 0),
            n = wi(() => Number(e.scrollLeft) || 0);
          return {
            state: Ut({
              lastScrollTop: t.value,
              lastScrollLeft: n.value,
              lastScrollToUpperTime: 0,
              lastScrollToLowerTime: 0,
              refresherHeight: 0,
              refreshRotate: 0,
              refreshState: ''
            }),
            scrollTopNumber: t,
            scrollLeftNumber: n
          };
        })(e),
        { realScrollX: f, realScrollY: p } = (function (e, t, n, o, r, i, s, a, l) {
          let c = !1,
            u = 0,
            d = !1,
            f = () => {};
          const p = wi(() => e.scrollX),
            h = wi(() => e.scrollY),
            g = wi(() => {
              let t = Number(e.upperThreshold);
              return isNaN(t) ? 50 : t;
            }),
            m = wi(() => {
              let t = Number(e.lowerThreshold);
              return isNaN(t) ? 50 : t;
            });
          function v(e, t) {
            const n = s.value;
            let o = 0,
              r = '';
            if (
              (e < 0
                ? (e = 0)
                : 'x' === t && e > n.scrollWidth - n.offsetWidth
                ? (e = n.scrollWidth - n.offsetWidth)
                : 'y' === t &&
                  e > n.scrollHeight - n.offsetHeight &&
                  (e = n.scrollHeight - n.offsetHeight),
              'x' === t ? (o = n.scrollLeft - e) : 'y' === t && (o = n.scrollTop - e),
              0 === o)
            )
              return;
            let i = a.value;
            (i.style.transition = 'transform .3s ease-out'),
              (i.style.webkitTransition = '-webkit-transform .3s ease-out'),
              'x' === t
                ? (r = 'translateX(' + o + 'px) translateZ(0)')
                : 'y' === t && (r = 'translateY(' + o + 'px) translateZ(0)'),
              i.removeEventListener('transitionend', f),
              i.removeEventListener('webkitTransitionEnd', f),
              (f = () => x(e, t)),
              i.addEventListener('transitionend', f),
              i.addEventListener('webkitTransitionEnd', f),
              'x' === t
                ? (n.style.overflowX = 'hidden')
                : 'y' === t && (n.style.overflowY = 'hidden'),
              (i.style.transform = r),
              (i.style.webkitTransform = r);
          }
          function y(e) {
            const n = e.target;
            r('scroll', e, {
              scrollLeft: n.scrollLeft,
              scrollTop: n.scrollTop,
              scrollHeight: n.scrollHeight,
              scrollWidth: n.scrollWidth,
              deltaX: t.lastScrollLeft - n.scrollLeft,
              deltaY: t.lastScrollTop - n.scrollTop
            }),
              h.value &&
                (n.scrollTop <= g.value &&
                  t.lastScrollTop - n.scrollTop > 0 &&
                  e.timeStamp - t.lastScrollToUpperTime > 200 &&
                  (r('scrolltoupper', e, { direction: 'top' }),
                  (t.lastScrollToUpperTime = e.timeStamp)),
                n.scrollTop + n.offsetHeight + m.value >= n.scrollHeight &&
                  t.lastScrollTop - n.scrollTop < 0 &&
                  e.timeStamp - t.lastScrollToLowerTime > 200 &&
                  (r('scrolltolower', e, { direction: 'bottom' }),
                  (t.lastScrollToLowerTime = e.timeStamp))),
              p.value &&
                (n.scrollLeft <= g.value &&
                  t.lastScrollLeft - n.scrollLeft > 0 &&
                  e.timeStamp - t.lastScrollToUpperTime > 200 &&
                  (r('scrolltoupper', e, { direction: 'left' }),
                  (t.lastScrollToUpperTime = e.timeStamp)),
                n.scrollLeft + n.offsetWidth + m.value >= n.scrollWidth &&
                  t.lastScrollLeft - n.scrollLeft < 0 &&
                  e.timeStamp - t.lastScrollToLowerTime > 200 &&
                  (r('scrolltolower', e, { direction: 'right' }),
                  (t.lastScrollToLowerTime = e.timeStamp))),
              (t.lastScrollTop = n.scrollTop),
              (t.lastScrollLeft = n.scrollLeft);
          }
          function b(t) {
            h.value && (e.scrollWithAnimation ? v(t, 'y') : (s.value.scrollTop = t));
          }
          function _(t) {
            p.value && (e.scrollWithAnimation ? v(t, 'x') : (s.value.scrollLeft = t));
          }
          function w(t) {
            if (t) {
              if (!/^[_a-zA-Z][-_a-zA-Z0-9:]*$/.test(t))
                return void console.error(`id error: scroll-into-view=${t}`);
              let n = i.value.querySelector('#' + t);
              if (n) {
                let t = s.value.getBoundingClientRect(),
                  o = n.getBoundingClientRect();
                if (p.value) {
                  let n = o.left - t.left,
                    r = s.value.scrollLeft + n;
                  e.scrollWithAnimation ? v(r, 'x') : (s.value.scrollLeft = r);
                }
                if (h.value) {
                  let n = o.top - t.top,
                    r = s.value.scrollTop + n;
                  e.scrollWithAnimation ? v(r, 'y') : (s.value.scrollTop = r);
                }
              }
            }
          }
          function x(e, t) {
            (a.value.style.transition = ''),
              (a.value.style.webkitTransition = ''),
              (a.value.style.transform = ''),
              (a.value.style.webkitTransform = '');
            let n = s.value;
            'x' === t
              ? ((n.style.overflowX = p.value ? 'auto' : 'hidden'), (n.scrollLeft = e))
              : 'y' === t && ((n.style.overflowY = h.value ? 'auto' : 'hidden'), (n.scrollTop = e)),
              a.value.removeEventListener('transitionend', f),
              a.value.removeEventListener('webkitTransitionEnd', f);
          }
          function T(n) {
            if (e.refresherEnabled) {
              switch (n) {
                case 'refreshing':
                  (t.refresherHeight = e.refresherThreshold),
                    c ||
                      ((c = !0), r('refresherrefresh', {}, {}), l('update:refresherTriggered', !0));
                  break;
                case 'restore':
                case 'refresherabort':
                  (c = !1),
                    (t.refresherHeight = u = 0),
                    'restore' === n && ((d = !1), r('refresherrestore', {}, {})),
                    'refresherabort' === n && d && ((d = !1), r('refresherabort', {}, {}));
              }
              t.refreshState = n;
            }
          }
          return (
            Bo(() => {
              On(() => {
                b(n.value), _(o.value);
              }),
                w(e.scrollIntoView);
              let i = function (e) {
                  e.preventDefault(), e.stopPropagation(), y(e);
                },
                a = { x: 0, y: 0 },
                l = null,
                f = function (n) {
                  if (null === a) return;
                  let o = n.touches[0].pageX,
                    i = n.touches[0].pageY,
                    f = s.value;
                  if (Math.abs(o - a.x) > Math.abs(i - a.y))
                    if (p.value) {
                      if (0 === f.scrollLeft && o > a.x) return void (l = !1);
                      if (f.scrollWidth === f.offsetWidth + f.scrollLeft && o < a.x)
                        return void (l = !1);
                      l = !0;
                    } else l = !1;
                  else if (h.value)
                    if (0 === f.scrollTop && i > a.y)
                      (l = !1), e.refresherEnabled && !1 !== n.cancelable && n.preventDefault();
                    else {
                      if (f.scrollHeight === f.offsetHeight + f.scrollTop && i < a.y)
                        return void (l = !1);
                      l = !0;
                    }
                  else l = !1;
                  if (
                    (l && n.stopPropagation(),
                    0 === f.scrollTop && 1 === n.touches.length && T('pulling'),
                    e.refresherEnabled && 'pulling' === t.refreshState)
                  ) {
                    const o = i - a.y;
                    0 === u && (u = i),
                      c
                        ? ((t.refresherHeight = o + e.refresherThreshold), (d = !1))
                        : ((t.refresherHeight = i - u),
                          t.refresherHeight > 0 &&
                            ((d = !0), r('refresherpulling', n, { deltaY: o })));
                    const s = t.refresherHeight / e.refresherThreshold;
                    t.refreshRotate = 360 * (s > 1 ? 1 : s);
                  }
                },
                g = function (e) {
                  1 === e.touches.length && (a = { x: e.touches[0].pageX, y: e.touches[0].pageY });
                },
                m = function (n) {
                  (a = null),
                    t.refresherHeight >= e.refresherThreshold
                      ? T('refreshing')
                      : T('refresherabort');
                };
              s.value.addEventListener('touchstart', g, Fp),
                s.value.addEventListener('touchmove', f, we(!1)),
                s.value.addEventListener('scroll', i, we(!1)),
                s.value.addEventListener('touchend', m, Fp),
                Fo(() => {
                  s.value.removeEventListener('touchstart', g),
                    s.value.removeEventListener('touchmove', f),
                    s.value.removeEventListener('scroll', i),
                    s.value.removeEventListener('touchend', m);
                });
            }),
            To(() => {
              h.value && (s.value.scrollTop = t.lastScrollTop),
                p.value && (s.value.scrollLeft = t.lastScrollLeft);
            }),
            Jn(n, (e) => {
              b(e);
            }),
            Jn(o, (e) => {
              _(e);
            }),
            Jn(
              () => e.scrollIntoView,
              (e) => {
                w(e);
              }
            ),
            Jn(
              () => e.refresherTriggered,
              (e) => {
                !0 === e ? T('refreshing') : !1 === e && T('restore');
              }
            ),
            { realScrollX: p, realScrollY: h }
          );
        })(e, c, u, d, l, o, r, s, t),
        h = wi(() => {
          let e = '';
          return (
            f.value ? (e += 'overflow-x:auto;') : (e += 'overflow-x:hidden;'),
            p.value ? (e += 'overflow-y:auto;') : (e += 'overflow-y:hidden;'),
            e
          );
        }),
        g = wi(() => {
          let t = 'uni-scroll-view';
          return !1 === e.showScrollbar && (t += ' uni-scroll-view-scrollbar-hidden'), t;
        });
      return () => {
        const { refresherEnabled: t, refresherBackground: l, refresherDefaultStyle: u } = e,
          { refresherHeight: d, refreshState: f, refreshRotate: p } = c;
        return ei(
          'uni-scroll-view',
          { ref: o },
          [
            ei(
              'div',
              { ref: i, class: 'uni-scroll-view' },
              [
                ei(
                  'div',
                  { ref: r, style: h.value, class: g.value },
                  [
                    ei(
                      'div',
                      { ref: s, class: 'uni-scroll-view-content' },
                      [
                        t
                          ? ei(
                              'div',
                              {
                                ref: a,
                                style: { backgroundColor: l, height: d + 'px' },
                                class: 'uni-scroll-view-refresher'
                              },
                              [
                                'none' !== u
                                  ? ei('div', { class: 'uni-scroll-view-refresh' }, [
                                      ei('div', { class: 'uni-scroll-view-refresh-inner' }, [
                                        'pulling' == f
                                          ? ei(
                                              'svg',
                                              {
                                                key: 'refresh__icon',
                                                style: { transform: 'rotate(' + p + 'deg)' },
                                                fill: '#2BD009',
                                                class: 'uni-scroll-view-refresh__icon',
                                                width: '24',
                                                height: '24',
                                                viewBox: '0 0 24 24'
                                              },
                                              [
                                                ei(
                                                  'path',
                                                  {
                                                    d: 'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'
                                                  },
                                                  null
                                                ),
                                                ei(
                                                  'path',
                                                  { d: 'M0 0h24v24H0z', fill: 'none' },
                                                  null
                                                )
                                              ],
                                              4
                                            )
                                          : null,
                                        'refreshing' == f
                                          ? ei(
                                              'svg',
                                              {
                                                key: 'refresh__spinner',
                                                class: 'uni-scroll-view-refresh__spinner',
                                                width: '24',
                                                height: '24',
                                                viewBox: '25 25 50 50'
                                              },
                                              [
                                                ei(
                                                  'circle',
                                                  {
                                                    cx: '50',
                                                    cy: '50',
                                                    r: '20',
                                                    fill: 'none',
                                                    style: 'color: #2bd009',
                                                    'stroke-width': '3'
                                                  },
                                                  null
                                                )
                                              ]
                                            )
                                          : null
                                      ])
                                    ])
                                  : null,
                                'none' == u ? n.refresher && n.refresher() : null
                              ],
                              4
                            )
                          : null,
                        n.default && n.default()
                      ],
                      512
                    )
                  ],
                  6
                )
              ],
              512
            )
          ],
          512
        );
      };
    }
  });
function jp(e, t, n, o, r, i) {
  function s() {
    c && (clearTimeout(c), (c = null));
  }
  let a,
    l,
    c = null,
    u = !0,
    d = 0,
    f = 1,
    p = null,
    h = !1,
    g = 0,
    m = '';
  const v = wi(() => n.value.length > t.displayMultipleItems),
    y = wi(() => e.circular && v.value);
  function b(r) {
    (Math.floor(2 * d) === Math.floor(2 * r) && Math.ceil(2 * d) === Math.ceil(2 * r)) ||
      (y.value &&
        (function (o) {
          if (!u)
            for (let r = n.value, i = r.length, s = o + t.displayMultipleItems, a = 0; a < i; a++) {
              const t = r[a],
                n = Math.floor(o / i) * i + a,
                l = n + i,
                c = n - i,
                u = Math.max(o - (n + 1), n - s, 0),
                d = Math.max(o - (l + 1), l - s, 0),
                f = Math.max(o - (c + 1), c - s, 0),
                p = Math.min(u, d, f),
                h = [n, l, c][[u, d, f].indexOf(p)];
              t.updatePosition(h, e.vertical);
            }
        })(r));
    const s =
        'translate(' +
        (e.vertical ? '0' : 100 * -r * f + '%') +
        ', ' +
        (e.vertical ? 100 * -r * f + '%' : '0') +
        ') translateZ(0)',
      l = o.value;
    if ((l && ((l.style.webkitTransform = s), (l.style.transform = s)), (d = r), !a)) {
      if (r % 1 == 0) return;
      a = r;
    }
    r -= Math.floor(a);
    const c = n.value;
    r <= -(c.length - 1) ? (r += c.length) : r >= c.length && (r -= c.length),
      (r = a % 1 > 0.5 || a < 0 ? r - 1 : r),
      i(
        'transition',
        {},
        { dx: e.vertical ? 0 : r * l.offsetWidth, dy: e.vertical ? r * l.offsetHeight : 0 }
      );
  }
  function _(e) {
    const o = n.value.length;
    if (!o) return -1;
    const r = ((Math.round(e) % o) + o) % o;
    if (y.value) {
      if (o <= t.displayMultipleItems) return 0;
    } else if (r > o - t.displayMultipleItems) return o - t.displayMultipleItems;
    return r;
  }
  function w() {
    p = null;
  }
  function x() {
    if (!p) return void (h = !1);
    const e = p,
      o = e.toPos,
      r = e.acc,
      s = e.endTime,
      c = e.source,
      u = s - Date.now();
    if (u <= 0) {
      b(o), (p = null), (h = !1), (a = null);
      const e = n.value[t.current];
      if (e) {
        const n = e.getItemId();
        i('animationfinish', {}, { current: t.current, currentItemId: n, source: c });
      }
      return;
    }
    b(o + (r * u * u) / 2), (l = requestAnimationFrame(x));
  }
  function T(e, o, r) {
    w();
    const i = t.duration,
      s = n.value.length;
    let a = d;
    if (y.value)
      if (r < 0) {
        for (; a < e; ) a += s;
        for (; a - s > e; ) a -= s;
      } else if (r > 0) {
        for (; a > e; ) a -= s;
        for (; a + s < e; ) a += s;
        a + s - e < e - a && (a += s);
      } else {
        for (; a + s < e; ) a += s;
        for (; a - s > e; ) a -= s;
        a + s - e < e - a && (a += s);
      }
    else 'click' === o && (e = e + t.displayMultipleItems - 1 < s ? e : 0);
    (p = { toPos: e, acc: (2 * (a - e)) / (i * i), endTime: Date.now() + i, source: o }),
      h || ((h = !0), (l = requestAnimationFrame(x)));
  }
  function S() {
    s();
    const e = n.value,
      o = function () {
        (c = null),
          (m = 'autoplay'),
          y.value
            ? (t.current = _(t.current + 1))
            : (t.current = t.current + t.displayMultipleItems < e.length ? t.current + 1 : 0),
          T(t.current, 'autoplay', y.value ? 1 : 0),
          (c = setTimeout(o, t.interval));
      };
    u || e.length <= t.displayMultipleItems || (c = setTimeout(o, t.interval));
  }
  function C(e) {
    e ? S() : s();
  }
  return (
    Jn([() => e.current, () => e.currentItemId, () => [...n.value]], () => {
      let o = -1;
      if (e.currentItemId)
        for (let t = 0, r = n.value; t < r.length; t++) {
          if (r[t].getItemId() === e.currentItemId) {
            o = t;
            break;
          }
        }
      o < 0 && (o = Math.round(e.current) || 0),
        (o = o < 0 ? 0 : o),
        t.current !== o && ((m = ''), (t.current = o));
    }),
    Jn(
      [() => e.vertical, () => y.value, () => t.displayMultipleItems, () => [...n.value]],
      function () {
        s(), p && (b(p.toPos), (p = null));
        const r = n.value;
        for (let t = 0; t < r.length; t++) r[t].updatePosition(t, e.vertical);
        f = 1;
        const i = o.value;
        if (1 === t.displayMultipleItems && r.length) {
          const e = r[0].getBoundingClientRect(),
            t = i.getBoundingClientRect();
          (f = e.width / t.width), (f > 0 && f < 1) || (f = 1);
        }
        const a = d;
        d = -2;
        const l = t.current;
        l >= 0
          ? ((u = !1), t.userTracking ? (b(a + l - g), (g = l)) : (b(l), e.autoplay && S()))
          : ((u = !0), b(-t.displayMultipleItems - 1));
      }
    ),
    Jn(
      () => t.interval,
      () => {
        c && (s(), S());
      }
    ),
    Jn(
      () => t.current,
      (e, o) => {
        !(function (e, o) {
          const r = m;
          m = '';
          const s = n.value;
          if (!r) {
            const t = s.length;
            T(e, '', y.value && o + ((t - e) % t) > t / 2 ? 1 : 0);
          }
          const a = s[e];
          if (a) {
            const e = (t.currentItemId = a.getItemId());
            i('change', {}, { current: t.current, currentItemId: e, source: r });
          }
        })(e, o),
          r('update:current', e);
      }
    ),
    Jn(
      () => t.currentItemId,
      (e) => {
        r('update:currentItemId', e);
      }
    ),
    Jn(() => e.autoplay && !t.userTracking, C),
    C(e.autoplay && !t.userTracking),
    Bo(() => {
      let r = !1,
        i = 0,
        a = 0;
      function l(e) {
        t.userTracking = !1;
        const n = i / Math.abs(i);
        let o = 0;
        !e && Math.abs(i) > 0.2 && (o = 0.5 * n);
        const r = _(d + o);
        e
          ? b(g)
          : ((m = 'touch'),
            (t.current = r),
            T(r, 'touch', 0 !== o ? o : 0 === r && y.value && d >= 1 ? 1 : 0));
      }
      pp(o.value, (c) => {
        if (!e.disableTouch && !u) {
          if ('start' === c.detail.state)
            return (
              (t.userTracking = !0), (r = !1), s(), (g = d), (i = 0), (a = Date.now()), void w()
            );
          if ('end' === c.detail.state) return l(!1);
          if ('cancel' === c.detail.state) return l(!0);
          if (t.userTracking) {
            if (!r) {
              r = !0;
              const n = Math.abs(c.detail.dx),
                o = Math.abs(c.detail.dy);
              if (
                (((n >= o && e.vertical) || (n <= o && !e.vertical)) && (t.userTracking = !1),
                !t.userTracking)
              )
                return void (e.autoplay && S());
            }
            return (
              (function (r) {
                const s = a;
                a = Date.now();
                const l = n.value.length - t.displayMultipleItems;
                function c(e) {
                  return 0.5 - 0.25 / (e + 0.5);
                }
                function u(e, t) {
                  let n = g + e;
                  (i = 0.6 * i + 0.4 * t),
                    y.value ||
                      ((n < 0 || n > l) &&
                        (n < 0 ? (n = -c(-n)) : n > l && (n = l + c(n - l)), (i = 0))),
                    b(n);
                }
                const d = a - s || 1,
                  f = o.value;
                e.vertical
                  ? u(-r.dy / f.offsetHeight, -r.ddy / d)
                  : u(-r.dx / f.offsetWidth, -r.ddx / d);
              })(c.detail),
              !1
            );
          }
        }
      });
    }),
    Do(() => {
      s(), cancelAnimationFrame(l);
    }),
    {
      onSwiperDotClick: function (e) {
        T((t.current = e), (m = 'click'), y.value ? 1 : 0);
      },
      circularEnabled: y,
      swiperEnabled: v
    }
  );
}
const qp = ru({
    name: 'Swiper',
    props: {
      indicatorDots: { type: [Boolean, String], default: !1 },
      vertical: { type: [Boolean, String], default: !1 },
      autoplay: { type: [Boolean, String], default: !1 },
      circular: { type: [Boolean, String], default: !1 },
      interval: { type: [Number, String], default: 5e3 },
      duration: { type: [Number, String], default: 500 },
      current: { type: [Number, String], default: 0 },
      indicatorColor: { type: String, default: '' },
      indicatorActiveColor: { type: String, default: '' },
      previousMargin: { type: String, default: '' },
      nextMargin: { type: String, default: '' },
      currentItemId: { type: String, default: '' },
      skipHiddenItemLayout: { type: [Boolean, String], default: !1 },
      displayMultipleItems: { type: [Number, String], default: 1 },
      disableTouch: { type: [Boolean, String], default: !1 },
      navigation: { type: [Boolean, String], default: !1 },
      navigationColor: { type: String, default: '#fff' },
      navigationActiveColor: { type: String, default: 'rgba(53, 53, 53, 0.6)' }
    },
    emits: ['change', 'transition', 'animationfinish', 'update:current', 'update:currentItemId'],
    setup(e, { slots: t, emit: n }) {
      const o = an(null),
        r = au(o, n),
        i = an(null),
        s = an(null),
        a = (function (e) {
          return Ut({
            interval: wi(() => {
              const t = Number(e.interval);
              return isNaN(t) ? 5e3 : t;
            }),
            duration: wi(() => {
              const t = Number(e.duration);
              return isNaN(t) ? 500 : t;
            }),
            displayMultipleItems: wi(() => {
              const t = Math.round(e.displayMultipleItems);
              return isNaN(t) ? 1 : t;
            }),
            current: Math.round(e.current) || 0,
            currentItemId: e.currentItemId,
            userTracking: !1
          });
        })(e),
        l = wi(() => {
          let t = {};
          return (
            (e.nextMargin || e.previousMargin) &&
              (t = e.vertical
                ? { left: 0, right: 0, top: pc(e.previousMargin, !0), bottom: pc(e.nextMargin, !0) }
                : {
                    top: 0,
                    bottom: 0,
                    left: pc(e.previousMargin, !0),
                    right: pc(e.nextMargin, !0)
                  }),
            t
          );
        }),
        c = wi(() => {
          const t = Math.abs(100 / a.displayMultipleItems) + '%';
          return { width: e.vertical ? '100%' : t, height: e.vertical ? t : '100%' };
        });
      let u = [];
      const d = [],
        f = an([]);
      function p() {
        const e = [];
        for (let t = 0; t < u.length; t++) {
          let n = u[t];
          n instanceof Element || (n = n.el);
          const o = d.find((e) => n === e.rootRef.value);
          o && e.push(en(o));
        }
        f.value = e;
      }
      Kn('addSwiperContext', function (e) {
        d.push(e), p();
      });
      Kn('removeSwiperContext', function (e) {
        const t = d.indexOf(e);
        t >= 0 && (d.splice(t, 1), p());
      });
      const { onSwiperDotClick: h, circularEnabled: g, swiperEnabled: m } = jp(e, a, f, s, n, r);
      let v = () => null;
      return (
        (v = Vp(o, e, a, h, f, g, m)),
        () => {
          const n = t.default && t.default();
          return (
            (u = ap(n)),
            ei(
              'uni-swiper',
              { ref: o },
              [
                ei(
                  'div',
                  { ref: i, class: 'uni-swiper-wrapper' },
                  [
                    ei(
                      'div',
                      { class: 'uni-swiper-slides', style: l.value },
                      [
                        ei(
                          'div',
                          { ref: s, class: 'uni-swiper-slide-frame', style: c.value },
                          [n],
                          4
                        )
                      ],
                      4
                    ),
                    e.indicatorDots &&
                      ei(
                        'div',
                        {
                          class: [
                            'uni-swiper-dots',
                            e.vertical ? 'uni-swiper-dots-vertical' : 'uni-swiper-dots-horizontal'
                          ]
                        },
                        [
                          f.value.map((t, n, o) =>
                            ei(
                              'div',
                              {
                                onClick: () => h(n),
                                class: {
                                  'uni-swiper-dot': !0,
                                  'uni-swiper-dot-active':
                                    (n < a.current + a.displayMultipleItems && n >= a.current) ||
                                    n < a.current + a.displayMultipleItems - o.length
                                },
                                style: {
                                  background:
                                    n === a.current ? e.indicatorActiveColor : e.indicatorColor
                                }
                              },
                              null,
                              14,
                              ['onClick']
                            )
                          )
                        ],
                        2
                      ),
                    v()
                  ],
                  512
                )
              ],
              512
            )
          );
        }
      );
    }
  }),
  Vp = (e, t, n, o, r, i, s) => {
    let a = !1,
      l = !1,
      u = !1,
      d = an(!1);
    function f(e, n) {
      const o = e.currentTarget;
      o && (o.style.backgroundColor = 'over' === n ? t.navigationActiveColor : '');
    }
    Zn(() => {
      (a = 'auto' === t.navigation), (d.value = !0 !== t.navigation || a), b();
    }),
      Zn(() => {
        const e = r.value.length,
          t = !i.value;
        (l = 0 === n.current && t),
          (u = (n.current === e - 1 && t) || (t && n.current + n.displayMultipleItems >= e)),
          s.value || ((l = !0), (u = !0), a && (d.value = !0));
      });
    const p = { onMouseover: (e) => f(e, 'over'), onMouseout: (e) => f(e, 'out') };
    function h(e, t, s) {
      if ((e.stopPropagation(), s)) return;
      const a = r.value.length;
      let l = n.current;
      switch (t) {
        case 'prev':
          l--, l < 0 && i.value && (l = a - 1);
          break;
        case 'next':
          l++, l >= a && i.value && (l = 0);
      }
      o(l);
    }
    const g = () => vc(mc, t.navigationColor, 26);
    let m;
    const v = (n) => {
        clearTimeout(m);
        const { clientX: o, clientY: r } = n,
          {
            left: i,
            right: s,
            top: a,
            bottom: l,
            width: c,
            height: u
          } = e.value.getBoundingClientRect();
        let f = !1;
        if (
          ((f = t.vertical ? !(r - a < u / 3 || l - r < u / 3) : !(o - i < c / 3 || s - o < c / 3)),
          f)
        )
          return (m = setTimeout(() => {
            d.value = f;
          }, 300));
        d.value = f;
      },
      y = () => {
        d.value = !0;
      };
    function b() {
      e.value &&
        (e.value.removeEventListener('mousemove', v),
        e.value.removeEventListener('mouseleave', y),
        a && (e.value.addEventListener('mousemove', v), e.value.addEventListener('mouseleave', y)));
    }
    return (
      Bo(b),
      function () {
        const e = {
          'uni-swiper-navigation-hide': d.value,
          'uni-swiper-navigation-vertical': t.vertical
        };
        return t.navigation
          ? ei(Rr, null, [
              ei(
                'div',
                ai(
                  {
                    class: [
                      'uni-swiper-navigation uni-swiper-navigation-prev',
                      c({ 'uni-swiper-navigation-disabled': l }, e)
                    ],
                    onClick: (e) => h(e, 'prev', l)
                  },
                  p
                ),
                [g()],
                16,
                ['onClick']
              ),
              ei(
                'div',
                ai(
                  {
                    class: [
                      'uni-swiper-navigation uni-swiper-navigation-next',
                      c({ 'uni-swiper-navigation-disabled': u }, e)
                    ],
                    onClick: (e) => h(e, 'next', u)
                  },
                  p
                ),
                [g()],
                16,
                ['onClick']
              )
            ])
          : null;
      }
    );
  },
  Wp = ru({
    name: 'SwiperItem',
    props: { itemId: { type: String, default: '' } },
    setup(e, { slots: t }) {
      const n = an(null),
        o = {
          rootRef: n,
          getItemId: () => e.itemId,
          getBoundingClientRect: () => n.value.getBoundingClientRect(),
          updatePosition(e, t) {
            const o = t ? '0' : 100 * e + '%',
              r = t ? 100 * e + '%' : '0',
              i = n.value,
              s = `translate(${o},${r}) translateZ(0)`;
            i && ((i.style.webkitTransform = s), (i.style.transform = s));
          }
        };
      return (
        Bo(() => {
          const e = Gn('addSwiperContext');
          e && e(o);
        }),
        Do(() => {
          const e = Gn('removeSwiperContext');
          e && e(o);
        }),
        () =>
          ei(
            'uni-swiper-item',
            { ref: n, style: { position: 'absolute', width: '100%', height: '100%' } },
            [t.default && t.default()],
            512
          )
      );
    }
  }),
  Hp = { ensp: ' ', emsp: ' ', nbsp: ' ' };
function zp(e, t) {
  return (function (e, { space: t, decode: n }) {
    let o = '',
      r = !1;
    for (let i of e)
      t && Hp[t] && ' ' === i && (i = Hp[t]),
        r
          ? ((o += 'n' === i ? '\n' : '\\' === i ? '\\' : '\\' + i), (r = !1))
          : '\\' === i
          ? (r = !0)
          : (o += i);
    return n
      ? o
          .replace(/&nbsp;/g, Hp.nbsp)
          .replace(/&ensp;/g, Hp.ensp)
          .replace(/&emsp;/g, Hp.emsp)
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&apos;/g, "'")
      : o;
  })(e, t).split('\n');
}
const Up = ru({
    name: 'Text',
    props: {
      selectable: { type: [Boolean, String], default: !1 },
      space: { type: String, default: '' },
      decode: { type: [Boolean, String], default: !1 }
    },
    setup(e, { slots: t }) {
      const n = an(null);
      return () => {
        const o = [];
        return (
          t.default &&
            t.default().forEach((t) => {
              if (8 & t.shapeFlag && t.type !== Fr) {
                const n = zp(t.children, { space: e.space, decode: e.decode }),
                  r = n.length - 1;
                n.forEach((e, t) => {
                  (0 !== t || e) && o.push(ni(e)), t !== r && o.push(ei('br'));
                });
              } else o.push(t);
            }),
          ei('uni-text', { ref: n, selectable: !!e.selectable || null }, [ei('span', null, o)], 8, [
            'selectable'
          ])
        );
      };
    }
  }),
  Xp = ru({
    name: 'View',
    props: c({}, lu),
    setup(e, { slots: t }) {
      const n = an(null),
        { hovering: o, binding: r } = cu(e);
      return () => {
        const i = e.hoverClass;
        return i && 'none' !== i
          ? ei(
              'uni-view',
              ai({ class: o.value ? i : '', ref: n }, r),
              [t.default && t.default()],
              16
            )
          : ei('uni-view', { ref: n }, [t.default && t.default()], 512);
      };
    }
  });
function Yp(e, t) {
  if ((t || (t = e.id), t)) return e.$options.name.toLowerCase() + '.' + t;
}
function Kp(e, t, n) {
  e &&
    Pl(n || xc(), e, ({ type: e, data: n }, o) => {
      t(e, n, o);
    });
}
function Gp(e, t) {
  e &&
    (function (e, t) {
      (t = Al(e, t)), delete Ml[t];
    })(t || xc(), e);
}
let Zp = 0;
function Qp(e, t, n, o) {
  v(t) && Mo(e, t.bind(n), o);
}
function Jp(e, t, n) {
  var o;
  const r = e.mpType || n.$mpType;
  if (
    r &&
    'component' !== r &&
    (Object.keys(e).forEach((o) => {
      if (
        (function (e, t, n = !0) {
          return !(n && !v(t)) && (Ie.indexOf(e) > -1 || 0 === e.indexOf('on'));
        })(o, e[o], !1)
      ) {
        const r = e[o];
        p(r) ? r.forEach((e) => Qp(o, e, n, t)) : Qp(o, r, n, t);
      }
    }),
    'page' === r)
  ) {
    t.__isVisible = !0;
    try {
      kc(n, 'onLoad', t.attrs.__pageQuery),
        delete t.attrs.__pageQuery,
        'preloadPage' !== (null == (o = n.$page) ? void 0 : o.openType) && kc(n, 'onShow');
    } catch (i) {
      console.error(i.message + '\n' + i.stack);
    }
  }
}
function eh(e, t, n) {
  Jp(e, t, n);
}
function th(e, t, n) {
  return (e[t] = n);
}
function nh(e, ...t) {
  const n = this[e];
  return n ? n(...t) : (console.error(`method ${e} not found`), null);
}
function oh(e) {
  return function (t, n, o) {
    if (!n) throw t;
    const r = e._instance;
    if (!r || !r.proxy) throw t;
    kc(r.proxy, 'onError', t);
  };
}
function rh(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ih(e) {
  const t = e._context.config;
  var n;
  (t.errorHandler = Ae(e, oh)),
    (n = t.optionMergeStrategies),
    Ie.forEach((e) => {
      n[e] = rh;
    });
  const o = t.globalProperties;
  (o.$set = th),
    (o.$applyOptions = eh),
    (o.$callMethod = nh),
    (function (e) {
      Me.forEach((t) => t(e));
    })(e);
}
const sh = dc('upm');
function ah() {
  return Gn(sh);
}
function lh(e) {
  const t = (function (e) {
    return Ut(
      (function (e) {
        {
          const { navigationBar: t } = e,
            { titleSize: n, titleColor: o, backgroundColor: r } = t;
          (t.titleText = t.titleText || ''),
            (t.type = t.type || 'default'),
            (t.titleSize = n || '16px'),
            (t.titleColor = o || '#000000'),
            (t.backgroundColor = r || '#F8F8F8');
        }
        if (history.state) {
          const t = history.state.__type__;
          ('redirectTo' !== t && 'reLaunch' !== t) ||
            0 !== xh().length ||
            ((e.isEntry = !0), (e.isQuit = !0));
        }
        return e;
      })(JSON.parse(JSON.stringify(Cc(vl().meta, e))))
    );
  })(e);
  return Kn(sh, t), t;
}
function ch() {
  return vl();
}
function uh() {
  return (history.state && history.state.__id__) || 1;
}
let dh;
function fh() {
  var e;
  return (
    dh ||
      (dh =
        __uniConfig.tabBar &&
        Ut(
          ((e = __uniConfig.tabBar),
          yl() &&
            e.list &&
            e.list.forEach((e) => {
              xl(e, ['text']);
            }),
          e)
        )),
    dh
  );
}
const ph = window.CSS && window.CSS.supports;
function hh(e) {
  return ph && (ph(e) || ph.apply(window.CSS, e.split(':')));
}
const gh = hh('top:env(a)'),
  mh = hh('top:constant(a)'),
  vh = hh('backdrop-filter:blur(10px)'),
  yh = (() => (gh ? 'env' : mh ? 'constant' : ''))();
function bh(e) {
  return yh ? `calc(${e}px + ${yh}(safe-area-inset-bottom))` : `${e}px`;
}
const _h = new Map();
function wh() {
  return _h;
}
function xh() {
  const e = [],
    t = _h.values();
  for (const n of t) n.$.__isTabBar ? n.$.__isActive && e.push(n) : e.push(n);
  return e;
}
function Th(e, t = !0) {
  const n = _h.get(e);
  (n.$.__isUnload = !0),
    kc(n, 'onUnload'),
    _h.delete(e),
    t &&
      (function (e) {
        const t = Oh.get(e);
        t && (Oh.delete(e), Lh.pruneCacheEntry(t));
      })(e);
}
let Sh = uh();
function Ch(e) {
  const t = ah();
  let n = e.fullPath;
  return (
    e.meta.isEntry &&
      -1 === n.indexOf(e.meta.route) &&
      (n = '/' + e.meta.route + n.replace('/', '')),
    (function (e, t, n, o, r, i) {
      const { id: s, route: a } = o,
        l = Ne(o.navigationBar, __uniConfig.themeConfig, i).titleColor;
      return {
        id: s,
        path: ge(a),
        route: a,
        fullPath: t,
        options: n,
        meta: o,
        openType: e,
        eventChannel: r,
        statusBarStyle: '#ffffff' === l ? 'light' : 'dark'
      };
    })('navigateTo', n, {}, t)
  );
}
function kh(e) {
  const t = Ch(e.$route);
  !(function (e, t) {
    (e.route = t.route),
      (e.$vm = e),
      (e.$page = t),
      (e.$mpType = 'page'),
      t.meta.isTabBar && ((e.$.__isTabBar = !0), (e.$.__isActive = !0));
  })(e, t),
    _h.set(Eh(t.path, t.id), e);
}
function Eh(e, t) {
  return e + '$$' + t;
}
const Oh = new Map(),
  Lh = {
    get: (e) => Oh.get(e),
    set(e, t) {
      !(function (e) {
        const t = parseInt(e.split('$$')[1]);
        if (!t) return;
        Lh.forEach((e, n) => {
          const o = parseInt(n.split('$$')[1]);
          if (o && o > t) {
            if (
              (function (e) {
                return 'tabBar' === e.props.type;
              })(e)
            )
              return;
            Lh.delete(n),
              Lh.pruneCacheEntry(e),
              On(() => {
                _h.forEach((e, t) => {
                  e.$.isUnmounted && _h.delete(t);
                });
              });
          }
        });
      })(e),
        Oh.set(e, t);
    },
    delete(e) {
      Oh.get(e) && Oh.delete(e);
    },
    forEach(e) {
      Oh.forEach(e);
    }
  };
function $h(e, t) {
  !(function (e) {
    const t = Mh(e),
      { body: n } = document;
    Ah && n.removeAttribute(Ah), t && n.setAttribute(t, ''), (Ah = t);
  })(e),
    (function (e) {
      let t = 0,
        n = 0;
      if (
        ('custom' !== e.navigationBar.style &&
          ['default', 'float'].indexOf(e.navigationBar.type) > -1 &&
          (t = 44),
        e.isTabBar)
      ) {
        const e = fh();
        e.shown && (n = parseInt(e.height));
      }
      var o;
      uc({
        '--window-top': ((o = t), yh ? `calc(${o}px + ${yh}(safe-area-inset-top))` : `${o}px`),
        '--window-bottom': bh(n)
      });
    })(t),
    (function (e) {
      {
        const t = 'nvue-dir-' + __uniConfig.nvue['flex-direction'];
        e.isNVue
          ? (document.body.setAttribute('nvue', ''), document.body.setAttribute(t, ''))
          : (document.body.removeAttribute('nvue'), document.body.removeAttribute(t));
      }
    })(t),
    (function (e, t) {
      document.removeEventListener('touchmove', Ec),
        Ph && document.removeEventListener('scroll', Ph);
      if (t.disableScroll) return document.addEventListener('touchmove', Ec);
      const { onPageScroll: n, onReachBottom: o } = e,
        r = 'transparent' === t.navigationBar.type;
      if (!n && !o && !r) return;
      const i = {},
        s = e.proxy.$page.id;
      (n || r) &&
        (i.onPageScroll = (function (e, t, n) {
          return (o) => {
            t && Rm.publishHandler('onPageScroll', { scrollTop: o }, e),
              n && Rm.emit(e + '.onPageScroll', { scrollTop: o });
          };
        })(s, n, r));
      o &&
        ((i.onReachBottomDistance = t.onReachBottomDistance || 50),
        (i.onReachBottom = () => Rm.publishHandler('onReachBottom', {}, s)));
      (Ph = $c(i)), requestAnimationFrame(() => document.addEventListener('scroll', Ph));
    })(e, t);
}
function Ih(e) {
  const t = Mh(e);
  t &&
    (function (e) {
      const t = document.querySelector('uni-page-body');
      t && t.setAttribute(e, '');
    })(t);
}
function Mh(e) {
  return e.type.__scopeId;
}
let Ah, Ph;
function Bh(e) {
  const t = gl({
    history: Nh(),
    strict: !!__uniConfig.router.strict,
    routes: __uniRoutes,
    scrollBehavior: Rh
  });
  (e.router = t), e.use(t);
}
const Rh = (e, t, n) => {
  if (n) return n;
};
function Nh() {
  let { routerBase: e } = __uniConfig.router;
  '/' === e && (e = '');
  const t =
    ((n = e),
    (n = location.host ? n || location.pathname + location.search : '').includes('#') || (n += '#'),
    da(n));
  var n;
  return (
    t.listen((e, t, n) => {
      'back' === n.direction &&
        (function (e = 1) {
          const t = xh(),
            n = t.length - 1,
            o = n - e;
          for (let r = n; r > o; r--) {
            const e = t[r].$page;
            Th(Eh(e.path, e.id), !1);
          }
        })(Math.abs(n.delta));
    }),
    t
  );
}
const Fh = {
  install(e) {
    ih(e), Vc(e), Jc(e), e.config.warnHandler || (e.config.warnHandler = Dh), Bh(e);
  }
};
function Dh(e, t, n) {
  if (t) {
    if ('PageMetaHead' === t.$.type.name) return;
    const e = t.$.parent;
    if (e && 'PageMeta' === e.type.name) return;
  }
  const o = [`[Vue warn]: ${e}`];
  n.length && o.push('\n', n), console.warn(...o);
}
const jh = { class: 'uni-async-loading' },
  qh = ei('i', { class: 'uni-loading' }, null, -1),
  Vh = iu({ name: 'AsyncLoading', render: () => (Vr(), Xr('div', jh, [qh])) });
function Wh() {
  window.location.reload();
}
const Hh = iu({
  name: 'AsyncError',
  setup() {
    Cl();
    const { t: e } = Tl();
    return () =>
      ei('div', { class: 'uni-async-error', onClick: Wh }, [e('uni.async.error')], 8, ['onClick']);
  }
});
let zh;
function Uh() {
  return zh;
}
function Xh(e) {
  (zh = e), Object.defineProperty(zh.$.ctx, '$children', { get: () => xh().map((e) => e.$vm) });
  const t = zh.$.appContext.app;
  t.component(Vh.name) || t.component(Vh.name, Vh),
    t.component(Hh.name) || t.component(Hh.name, Hh),
    (function (e) {
      (e.$vm = e), (e.$mpType = 'app');
      const t = an(Tl().getLocale());
      Object.defineProperty(e, '$locale', {
        get: () => t.value,
        set(e) {
          t.value = e;
        }
      });
    })(zh),
    (function (e, t) {
      const n = e.$options || {};
      (n.globalData = c(n.globalData || {}, t)),
        Object.defineProperty(e, 'globalData', {
          get: () => n.globalData,
          set(e) {
            n.globalData = e;
          }
        });
    })(zh),
    Zc(),
    Ul();
}
function Yh(e, { clone: t, init: n, setup: o, before: r }) {
  t && (e = c({}, e)), r && r(e);
  const i = e.setup;
  return (
    (e.setup = (e, t) => {
      const r = fi();
      n(r.proxy);
      const s = o(r);
      if (i) return i(s || e, t);
    }),
    e
  );
}
function Kh(e, t) {
  return e && (e.__esModule || 'Module' === e[Symbol.toStringTag]) ? Yh(e.default, t) : Yh(e, t);
}
function Gh(e) {
  return Kh(e, {
    clone: !0,
    init: kh,
    setup(e) {
      e.$pageInstance = e;
      const t = ch(),
        n = Se(t.query);
      (e.attrs.__pageQuery = n), (e.proxy.$page.options = n), (e.proxy.options = n);
      const o = ah();
      var r, i, s;
      return (
        Po(() => {
          $h(e, o);
        }),
        Bo(() => {
          Ih(e);
          const { onReady: n } = e;
          n && B(n), eg(t);
        }),
        Co(
          () => {
            if (!e.__isVisible) {
              $h(e, o), (e.__isVisible = !0);
              const { onShow: n } = e;
              n && B(n),
                On(() => {
                  eg(t);
                });
            }
          },
          'ba',
          r
        ),
        (function (e, t) {
          Co(e, 'bda', t);
        })(() => {
          if (e.__isVisible && !e.__isUnload) {
            e.__isVisible = !1;
            const { onHide: t } = e;
            t && B(t);
          }
        }),
        (i = o.id),
        Rm.subscribe(Al(i, 'invokeViewApi'), s ? s(Bl) : Bl),
        Fo(() => {
          !(function (e) {
            Rm.unsubscribe(Al(e, 'invokeViewApi')),
              Object.keys(Ml).forEach((t) => {
                0 === t.indexOf(e + '.') && delete Ml[t];
              });
          })(o.id);
        }),
        n
      );
    }
  });
}
function Zh() {
  const { windowWidth: e, windowHeight: t, screenWidth: n, screenHeight: o } = vg(),
    r = 90 === Math.abs(Number(window.orientation)) ? 'landscape' : 'portrait';
  Nm.emit('onResize', {
    deviceOrientation: r,
    size: { windowWidth: e, windowHeight: t, screenWidth: n, screenHeight: o }
  });
}
function Qh(e) {
  S(e.data) &&
    'WEB_INVOKE_APPSERVICE' === e.data.type &&
    Nm.emit('onWebInvokeAppService', e.data.data, e.data.pageId);
}
function Jh() {
  const { emit: e } = Nm;
  'visible' === document.visibilityState
    ? e('onAppEnterForeground', c({}, xf))
    : e('onAppEnterBackground');
}
function eg(e) {
  const { tabBarText: t, tabBarIndex: n, route: o } = e.meta;
  t && kc('onTabItemTap', { index: n, text: t, pagePath: o });
}
function tg(e) {
  e = e > 0 && e < 1 / 0 ? e : 0;
  const t = Math.floor(e / 3600),
    n = Math.floor((e % 3600) / 60),
    o = Math.floor((e % 3600) % 60),
    r = (t < 10 ? '0' : '') + t;
  let i = (n < 10 ? '0' : '') + n + ':' + ((o < 10 ? '0' : '') + o);
  return '00' !== r && (i = r + ':' + i), i;
}
function ng(e, t, n) {
  const o = Ut({
      gestureType: 'none',
      volumeOld: 0,
      volumeNew: 0,
      currentTimeOld: 0,
      currentTimeNew: 0
    }),
    r = { x: 0, y: 0 };
  return {
    state: o,
    onTouchstart: function (e) {
      const t = e.targetTouches[0];
      (r.x = t.pageX),
        (r.y = t.pageY),
        (o.gestureType = 'none'),
        (o.volumeOld = 0),
        (o.currentTimeOld = o.currentTimeNew = 0);
    },
    onTouchmove: function (i) {
      function s() {
        i.stopPropagation(), i.preventDefault();
      }
      n.fullscreen && s();
      const a = o.gestureType;
      if ('stop' === a) return;
      const l = i.targetTouches[0],
        c = l.pageX,
        u = l.pageY,
        d = r,
        f = t.value;
      if (
        ('progress' === a
          ? (function (e) {
              const n = t.value.duration;
              let r = (e / 600) * n + o.currentTimeOld;
              r < 0 ? (r = 0) : r > n && (r = n);
              o.currentTimeNew = r;
            })(c - d.x)
          : 'volume' === a &&
            (function (e) {
              const n = t.value,
                r = o.volumeOld;
              let i;
              'number' == typeof r &&
                ((i = r - e / 200),
                i < 0 ? (i = 0) : i > 1 && (i = 1),
                (n.volume = i),
                (o.volumeNew = i));
            })(u - d.y),
        'none' === a)
      )
        if (Math.abs(c - d.x) > Math.abs(u - d.y)) {
          if (!e.enableProgressGesture) return void (o.gestureType = 'stop');
          (o.gestureType = 'progress'),
            (o.currentTimeOld = o.currentTimeNew = f.currentTime),
            n.fullscreen || s();
        } else {
          if (!e.pageGesture) return void (o.gestureType = 'stop');
          (o.gestureType = 'volume'), (o.volumeOld = f.volume), n.fullscreen || s();
        }
    },
    onTouchend: function (e) {
      const n = t.value;
      'none' !== o.gestureType &&
        'stop' !== o.gestureType &&
        (e.stopPropagation(), e.preventDefault()),
        'progress' === o.gestureType &&
          o.currentTimeOld !== o.currentTimeNew &&
          (n.currentTime = o.currentTimeNew),
        (o.gestureType = 'none');
    }
  };
}
function og(e, t, n, o, r, i, s, a) {
  const l = {
    play: e,
    stop: n,
    pause: t,
    seek: o,
    sendDanmu: r,
    playbackRate: i,
    requestFullScreen: s,
    exitFullScreen: a
  };
  !(function (e, t, n, o) {
    const r = fi().proxy;
    Bo(() => {
      Kp(t || Yp(r), e, o),
        (!n && t) ||
          Jn(
            () => r.id,
            (t, n) => {
              Kp(Yp(r, t), e, o), Gp(n && Yp(r, n));
            }
          );
    }),
      Fo(() => {
        Gp(t || Yp(r), o);
      });
  })(
    (e, t) => {
      let n;
      switch (e) {
        case 'seek':
          n = t.position;
          break;
        case 'sendDanmu':
          n = t;
          break;
        case 'playbackRate':
          n = t.rate;
      }
      e in l && l[e](n);
    },
    (function (e) {
      const t = yc(),
        n = fi().proxy,
        o = n.$options.name.toLowerCase(),
        r = e || n.id || 'context' + Zp++;
      return (
        Bo(() => {
          n.$el.__uniContextInfo = { id: r, type: o, page: t };
        }),
        `${o}.${r}`
      );
    })(),
    !0
  );
}
const rg = ru({
    name: 'Video',
    props: {
      id: { type: String, default: '' },
      src: { type: String, default: '' },
      duration: { type: [Number, String], default: '' },
      controls: { type: [Boolean, String], default: !0 },
      danmuList: { type: Array, default: () => [] },
      danmuBtn: { type: [Boolean, String], default: !1 },
      enableDanmu: { type: [Boolean, String], default: !1 },
      autoplay: { type: [Boolean, String], default: !1 },
      loop: { type: [Boolean, String], default: !1 },
      muted: { type: [Boolean, String], default: !1 },
      objectFit: { type: String, default: 'contain' },
      poster: { type: String, default: '' },
      direction: { type: [String, Number], default: '' },
      showProgress: { type: Boolean, default: !0 },
      initialTime: { type: [String, Number], default: 0 },
      showFullscreenBtn: { type: [Boolean, String], default: !0 },
      pageGesture: { type: [Boolean, String], default: !1 },
      enableProgressGesture: { type: [Boolean, String], default: !0 },
      showPlayBtn: { type: [Boolean, String], default: !0 },
      showCenterPlayBtn: { type: [Boolean, String], default: !0 }
    },
    emits: [
      'fullscreenchange',
      'progress',
      'loadedmetadata',
      'waiting',
      'error',
      'play',
      'pause',
      'ended',
      'timeupdate'
    ],
    setup(e, { emit: t, attrs: n, slots: o }) {
      const r = an(null),
        i = an(null),
        s = au(r, t),
        { state: a } = Yf(),
        { $attrs: l } = sp({ excludeListeners: !0 }),
        { t: c } = Tl();
      Ll();
      const {
          videoRef: u,
          state: d,
          play: f,
          pause: h,
          stop: g,
          seek: m,
          playbackRate: v,
          toggle: y,
          onDurationChange: b,
          onLoadedMetadata: _,
          onProgress: w,
          onWaiting: x,
          onVideoError: T,
          onPlay: S,
          onPause: C,
          onEnded: k,
          onTimeUpdate: E
        } = (function (e, t, n) {
          const o = an(null),
            r = wi(() => yu(e.src)),
            i = wi(() => 'true' === e.muted || !0 === e.muted),
            s = Ut({
              start: !1,
              src: r,
              playing: !1,
              currentTime: 0,
              duration: 0,
              progress: 0,
              buffered: 0,
              muted: i
            });
          function a(e) {
            const t = e.target,
              n = t.buffered;
            n.length && (s.buffered = (n.end(n.length - 1) / t.duration) * 100);
          }
          function l() {
            o.value.pause();
          }
          function c(e) {
            const t = o.value;
            'number' != typeof (e = Number(e)) || isNaN(e) || (t.currentTime = e);
          }
          return (
            Jn(
              () => r.value,
              () => {
                (s.playing = !1), (s.currentTime = 0);
              }
            ),
            Jn(
              () => s.buffered,
              (e) => {
                n('progress', {}, { buffered: e });
              }
            ),
            Jn(
              () => i.value,
              (e) => {
                o.value.muted = e;
              }
            ),
            {
              videoRef: o,
              state: s,
              play: function () {
                const e = o.value;
                (s.start = !0), e.play();
              },
              pause: l,
              stop: function () {
                c(0), l();
              },
              seek: c,
              playbackRate: function (e) {
                o.value.playbackRate = e;
              },
              toggle: function () {
                const e = o.value;
                s.playing ? e.pause() : e.play();
              },
              onDurationChange: function ({ target: e }) {
                s.duration = e.duration;
              },
              onLoadedMetadata: function (t) {
                const o = Number(e.initialTime) || 0,
                  r = t.target;
                o > 0 && (r.currentTime = o),
                  n('loadedmetadata', t, {
                    width: r.videoWidth,
                    height: r.videoHeight,
                    duration: r.duration
                  }),
                  a(t);
              },
              onProgress: a,
              onWaiting: function (e) {
                n('waiting', e, {});
              },
              onVideoError: function (e) {
                (s.playing = !1), n('error', e, {});
              },
              onPlay: function (e) {
                (s.start = !0), (s.playing = !0), n('play', e, {});
              },
              onPause: function (e) {
                (s.playing = !1), n('pause', e, {});
              },
              onEnded: function (e) {
                (s.playing = !1), n('ended', e, {});
              },
              onTimeUpdate: function (e) {
                const t = e.target,
                  o = (s.currentTime = t.currentTime);
                n('timeupdate', e, { currentTime: o, duration: t.duration });
              }
            }
          );
        })(e, 0, s),
        {
          state: O,
          danmuRef: L,
          updateDanmu: $,
          toggleDanmu: I,
          sendDanmu: M
        } = (function (e, t) {
          const n = an(null),
            o = Ut({ enable: Boolean(e.enableDanmu) });
          let r = { time: 0, index: -1 };
          const i = p(e.danmuList) ? JSON.parse(JSON.stringify(e.danmuList)) : [];
          function s(e) {
            const t = document.createElement('p');
            (t.className = 'uni-video-danmu-item'), (t.innerText = e.text);
            let o = `bottom: ${100 * Math.random()}%;color: ${e.color};`;
            t.setAttribute('style', o),
              n.value.appendChild(t),
              setTimeout(function () {
                (o += 'left: 0;-webkit-transform: translateX(-100%);transform: translateX(-100%);'),
                  t.setAttribute('style', o),
                  setTimeout(function () {
                    t.remove();
                  }, 4e3);
              }, 17);
          }
          return (
            i.sort(function (e, t) {
              return (e.time || 0) - (t.time || 0);
            }),
            {
              state: o,
              danmuRef: n,
              updateDanmu: function (e) {
                const n = e.target.currentTime,
                  a = r,
                  l = { time: n, index: a.index };
                if (n > a.time)
                  for (let r = a.index + 1; r < i.length; r++) {
                    const e = i[r];
                    if (!(n >= (e.time || 0))) break;
                    (l.index = r), t.playing && o.enable && s(e);
                  }
                else if (n < a.time)
                  for (let t = a.index - 1; t > -1 && n <= (i[t].time || 0); t--) l.index = t - 1;
                r = l;
              },
              toggleDanmu: function () {
                o.enable = !o.enable;
              },
              sendDanmu: function (e) {
                i.splice(r.index + 1, 0, {
                  text: String(e.text),
                  color: e.color,
                  time: t.currentTime || 0
                });
              }
            }
          );
        })(e, d),
        {
          state: A,
          onFullscreenChange: P,
          emitFullscreenChange: B,
          toggleFullscreen: R,
          requestFullScreen: N,
          exitFullScreen: F
        } = (function (e, t, n, o, r) {
          const i = Ut({ fullscreen: !1 }),
            s = /^Apple/.test(navigator.vendor);
          function a(t) {
            (i.fullscreen = t), e('fullscreenchange', {}, { fullScreen: t, direction: 'vertical' });
          }
          function l(e) {
            const i = r.value,
              l = t.value,
              c = n.value;
            let u;
            e
              ? (!document.fullscreenEnabled && !document.webkitFullscreenEnabled) ||
                (s && !o.userAction)
                ? c.webkitEnterFullScreen
                  ? c.webkitEnterFullScreen()
                  : ((u = !0),
                    l.remove(),
                    l.classList.add('uni-video-type-fullscreen'),
                    document.body.appendChild(l))
                : l[document.fullscreenEnabled ? 'requestFullscreen' : 'webkitRequestFullscreen']()
              : document.fullscreenEnabled || document.webkitFullscreenEnabled
              ? document.fullscreenElement
                ? document.exitFullscreen()
                : document.webkitFullscreenElement && document.webkitExitFullscreen()
              : c.webkitExitFullScreen
              ? c.webkitExitFullScreen()
              : ((u = !0),
                l.remove(),
                l.classList.remove('uni-video-type-fullscreen'),
                i.appendChild(l)),
              u && a(e);
          }
          function c() {
            l(!1);
          }
          return (
            Fo(c),
            {
              state: i,
              onFullscreenChange: function (e, t) {
                (t && document.fullscreenEnabled) ||
                  a(!(!document.fullscreenElement && !document.webkitFullscreenElement));
              },
              emitFullscreenChange: a,
              toggleFullscreen: l,
              requestFullScreen: function () {
                l(!0);
              },
              exitFullScreen: c
            }
          );
        })(s, i, u, a, r),
        { state: D, onTouchstart: j, onTouchend: q, onTouchmove: V } = ng(e, u, A),
        {
          state: W,
          progressRef: H,
          ballRef: z,
          clickProgress: U,
          toggleControls: X
        } = (function (e, t, n) {
          const o = an(null),
            r = an(null),
            i = wi(() => e.showCenterPlayBtn && !t.start),
            s = an(!0),
            a = wi(() => !i.value && e.controls && s.value),
            l = Ut({
              touching: !1,
              controlsTouching: !1,
              centerPlayBtnShow: i,
              controlsShow: a,
              controlsVisible: s
            });
          let c;
          function u() {
            c = setTimeout(() => {
              l.controlsVisible = !1;
            }, 3e3);
          }
          function d() {
            c && (clearTimeout(c), (c = null));
          }
          return (
            Fo(() => {
              c && clearTimeout(c);
            }),
            Jn(
              () => l.controlsShow && t.playing && !l.controlsTouching,
              (e) => {
                e ? u() : d();
              }
            ),
            Jn(
              [
                () => t.currentTime,
                () => {
                  e.duration;
                }
              ],
              function () {
                l.touching || (t.progress = (t.currentTime / t.duration) * 100);
              }
            ),
            Bo(() => {
              const e = we(!1);
              let i,
                s,
                a,
                c = !0;
              const u = r.value;
              function d(e) {
                const n = e.targetTouches[0],
                  r = n.pageX,
                  l = n.pageY;
                if (c && Math.abs(r - i) < Math.abs(l - s)) return void f(e);
                c = !1;
                const u = o.value.offsetWidth;
                let d = a + ((r - i) / u) * 100;
                d < 0 ? (d = 0) : d > 100 && (d = 100),
                  (t.progress = d),
                  e.preventDefault(),
                  e.stopPropagation();
              }
              function f(o) {
                (l.controlsTouching = !1),
                  l.touching &&
                    (u.removeEventListener('touchmove', d, e),
                    c ||
                      (o.preventDefault(), o.stopPropagation(), n((t.duration * t.progress) / 100)),
                    (l.touching = !1));
              }
              u.addEventListener('touchstart', (n) => {
                l.controlsTouching = !0;
                const o = n.targetTouches[0];
                (i = o.pageX),
                  (s = o.pageY),
                  (a = t.progress),
                  (c = !0),
                  (l.touching = !0),
                  u.addEventListener('touchmove', d, e);
              }),
                u.addEventListener('touchend', f),
                u.addEventListener('touchcancel', f);
            }),
            {
              state: l,
              progressRef: o,
              ballRef: r,
              clickProgress: function (e) {
                const r = o.value;
                let i = e.target,
                  s = e.offsetX;
                for (; i && i !== r; ) (s += i.offsetLeft), (i = i.parentNode);
                const a = r.offsetWidth;
                let l = 0;
                s >= 0 && s <= a && ((l = s / a), n(t.duration * l));
              },
              toggleControls: function () {
                l.controlsVisible = !l.controlsVisible;
              },
              autoHideStart: u,
              autoHideEnd: d
            }
          );
        })(e, d, m);
      return (
        og(f, h, g, m, M, v, N, F),
        () =>
          ei(
            'uni-video',
            { ref: r, id: e.id, onClick: X },
            [
              ei(
                'div',
                {
                  ref: i,
                  class: 'uni-video-container',
                  onTouchstart: j,
                  onTouchend: q,
                  onTouchmove: V,
                  onFullscreenchange: Ts(P, ['stop']),
                  onWebkitfullscreenchange: Ts((e) => P(e, !0), ['stop'])
                },
                [
                  ei(
                    'video',
                    ai(
                      {
                        ref: u,
                        style: { 'object-fit': e.objectFit },
                        muted: !!e.muted,
                        loop: !!e.loop,
                        src: d.src,
                        poster: e.poster,
                        autoplay: !!e.autoplay
                      },
                      l.value,
                      {
                        class: 'uni-video-video',
                        'webkit-playsinline': !0,
                        playsinline: !0,
                        onDurationchange: b,
                        onLoadedmetadata: _,
                        onProgress: w,
                        onWaiting: x,
                        onError: T,
                        onPlay: S,
                        onPause: C,
                        onEnded: k,
                        onTimeupdate: (e) => {
                          E(e), $(e);
                        },
                        onWebkitbeginfullscreen: () => B(!0),
                        onX5videoenterfullscreen: () => B(!0),
                        onWebkitendfullscreen: () => B(!1),
                        onX5videoexitfullscreen: () => B(!1)
                      }
                    ),
                    null,
                    16,
                    [
                      'muted',
                      'loop',
                      'src',
                      'poster',
                      'autoplay',
                      'webkit-playsinline',
                      'playsinline',
                      'onDurationchange',
                      'onLoadedmetadata',
                      'onProgress',
                      'onWaiting',
                      'onError',
                      'onPlay',
                      'onPause',
                      'onEnded',
                      'onTimeupdate',
                      'onWebkitbeginfullscreen',
                      'onX5videoenterfullscreen',
                      'onWebkitendfullscreen',
                      'onX5videoexitfullscreen'
                    ]
                  ),
                  Ho(
                    ei(
                      'div',
                      {
                        class: 'uni-video-bar uni-video-bar-full',
                        onClick: Ts(() => {}, ['stop'])
                      },
                      [
                        ei('div', { class: 'uni-video-controls' }, [
                          Ho(
                            ei(
                              'div',
                              {
                                class: {
                                  'uni-video-control-button': !0,
                                  'uni-video-control-button-play': !d.playing,
                                  'uni-video-control-button-pause': d.playing
                                },
                                onClick: Ts(y, ['stop'])
                              },
                              null,
                              10,
                              ['onClick']
                            ),
                            [[Ss, e.showPlayBtn]]
                          ),
                          Ho(
                            ei(
                              'div',
                              { class: 'uni-video-current-time' },
                              [tg(d.currentTime)],
                              512
                            ),
                            [[Ss, e.showProgress]]
                          ),
                          Ho(
                            ei(
                              'div',
                              {
                                ref: H,
                                class: 'uni-video-progress-container',
                                onClick: Ts(U, ['stop'])
                              },
                              [
                                ei('div', { class: 'uni-video-progress' }, [
                                  ei(
                                    'div',
                                    {
                                      style: { width: d.buffered + '%' },
                                      class: 'uni-video-progress-buffered'
                                    },
                                    null,
                                    4
                                  ),
                                  ei(
                                    'div',
                                    {
                                      ref: z,
                                      style: { left: d.progress + '%' },
                                      class: 'uni-video-ball'
                                    },
                                    [ei('div', { class: 'uni-video-inner' }, null)],
                                    4
                                  )
                                ])
                              ],
                              8,
                              ['onClick']
                            ),
                            [[Ss, e.showProgress]]
                          ),
                          Ho(
                            ei(
                              'div',
                              { class: 'uni-video-duration' },
                              [tg(Number(e.duration) || d.duration)],
                              512
                            ),
                            [[Ss, e.showProgress]]
                          )
                        ]),
                        Ho(
                          ei(
                            'div',
                            {
                              class: {
                                'uni-video-danmu-button': !0,
                                'uni-video-danmu-button-active': O.enable
                              },
                              onClick: Ts(I, ['stop'])
                            },
                            [c('uni.video.danmu')],
                            10,
                            ['onClick']
                          ),
                          [[Ss, e.danmuBtn]]
                        ),
                        Ho(
                          ei(
                            'div',
                            {
                              class: {
                                'uni-video-fullscreen': !0,
                                'uni-video-type-fullscreen': A.fullscreen
                              },
                              onClick: Ts(() => R(!A.fullscreen), ['stop'])
                            },
                            null,
                            10,
                            ['onClick']
                          ),
                          [[Ss, e.showFullscreenBtn]]
                        )
                      ],
                      8,
                      ['onClick']
                    ),
                    [[Ss, W.controlsShow]]
                  ),
                  Ho(
                    ei(
                      'div',
                      { ref: L, style: 'z-index: 0;', class: 'uni-video-danmu' },
                      null,
                      512
                    ),
                    [[Ss, d.start && O.enable]]
                  ),
                  W.centerPlayBtnShow &&
                    ei(
                      'div',
                      { class: 'uni-video-cover', onClick: Ts(() => {}, ['stop']) },
                      [
                        ei(
                          'div',
                          { class: 'uni-video-cover-play-button', onClick: Ts(f, ['stop']) },
                          null,
                          8,
                          ['onClick']
                        ),
                        ei('p', { class: 'uni-video-cover-duration' }, [
                          tg(Number(e.duration) || d.duration)
                        ])
                      ],
                      8,
                      ['onClick']
                    ),
                  ei(
                    'div',
                    {
                      class: {
                        'uni-video-toast': !0,
                        'uni-video-toast-volume': 'volume' === D.gestureType
                      }
                    },
                    [
                      ei('div', { class: 'uni-video-toast-title' }, [c('uni.video.volume')]),
                      ei(
                        'svg',
                        {
                          class: 'uni-video-toast-icon',
                          width: '200px',
                          height: '200px',
                          viewBox: '0 0 1024 1024',
                          version: '1.1',
                          xmlns: 'http://www.w3.org/2000/svg'
                        },
                        [
                          ei(
                            'path',
                            {
                              d: 'M475.400704 201.19552l0 621.674496q0 14.856192-10.856448 25.71264t-25.71264 10.856448-25.71264-10.856448l-190.273536-190.273536-149.704704 0q-14.856192 0-25.71264-10.856448t-10.856448-25.71264l0-219.414528q0-14.856192 10.856448-25.71264t25.71264-10.856448l149.704704 0 190.273536-190.273536q10.856448-10.856448 25.71264-10.856448t25.71264 10.856448 10.856448 25.71264zm219.414528 310.837248q0 43.425792-24.28416 80.851968t-64.2816 53.425152q-5.71392 2.85696-14.2848 2.85696-14.856192 0-25.71264-10.570752t-10.856448-25.998336q0-11.999232 6.856704-20.284416t16.570368-14.2848 19.427328-13.142016 16.570368-20.284416 6.856704-32.569344-6.856704-32.569344-16.570368-20.284416-19.427328-13.142016-16.570368-14.2848-6.856704-20.284416q0-15.427584 10.856448-25.998336t25.71264-10.570752q8.57088 0 14.2848 2.85696 39.99744 15.427584 64.2816 53.139456t24.28416 81.137664zm146.276352 0q0 87.422976-48.56832 161.41824t-128.5632 107.707392q-7.428096 2.85696-14.2848 2.85696-15.427584 0-26.284032-10.856448t-10.856448-25.71264q0-22.284288 22.284288-33.712128 31.997952-16.570368 43.425792-25.141248 42.283008-30.855168 65.995776-77.423616t23.712768-99.136512-23.712768-99.136512-65.995776-77.423616q-11.42784-8.57088-43.425792-25.141248-22.284288-11.42784-22.284288-33.712128 0-14.856192 10.856448-25.71264t25.71264-10.856448q7.428096 0 14.856192 2.85696 79.99488 33.712128 128.5632 107.707392t48.56832 161.41824zm146.276352 0q0 131.42016-72.566784 241.41312t-193.130496 161.989632q-7.428096 2.85696-14.856192 2.85696-14.856192 0-25.71264-10.856448t-10.856448-25.71264q0-20.570112 22.284288-33.712128 3.999744-2.285568 12.85632-5.999616t12.85632-5.999616q26.284032-14.2848 46.854144-29.140992 70.281216-51.996672 109.707264-129.705984t39.426048-165.132288-39.426048-165.132288-109.707264-129.705984q-20.570112-14.856192-46.854144-29.140992-3.999744-2.285568-12.85632-5.999616t-12.85632-5.999616q-22.284288-13.142016-22.284288-33.712128 0-14.856192 10.856448-25.71264t25.71264-10.856448q7.428096 0 14.856192 2.85696 120.563712 51.996672 193.130496 161.989632t72.566784 241.41312z'
                            },
                            null
                          )
                        ]
                      ),
                      ei('div', { class: 'uni-video-toast-value' }, [
                        ei(
                          'div',
                          {
                            style: { width: 100 * D.volumeNew + '%' },
                            class: 'uni-video-toast-value-content'
                          },
                          [
                            ei('div', { class: 'uni-video-toast-volume-grids' }, [
                              Zo(10, () =>
                                ei('div', { class: 'uni-video-toast-volume-grids-item' }, null)
                              )
                            ])
                          ],
                          4
                        )
                      ])
                    ],
                    2
                  ),
                  ei(
                    'div',
                    {
                      class: {
                        'uni-video-toast': !0,
                        'uni-video-toast-progress': 'progress' === D.gestureType
                      }
                    },
                    [
                      ei('div', { class: 'uni-video-toast-title' }, [
                        tg(D.currentTimeNew),
                        ' / ',
                        tg(d.duration)
                      ])
                    ],
                    2
                  ),
                  ei('div', { class: 'uni-video-slots' }, [o.default && o.default()])
                ],
                40,
                [
                  'onTouchstart',
                  'onTouchend',
                  'onTouchmove',
                  'onFullscreenchange',
                  'onWebkitfullscreenchange'
                ]
              )
            ],
            8,
            ['id', 'onClick']
          )
      );
    }
  }),
  ig = ad(
    'makePhoneCall',
    ({ phoneNumber: e }, { resolve: t }) => ((window.location.href = `tel:${e}`), t())
  ),
  sg = (navigator.cookieEnabled && (window.localStorage || window.sessionStorage)) || {};
let ag;
function lg() {
  if (((ag = ag || sg.__DC_STAT_UUID), !ag)) {
    ag = Date.now() + '' + Math.floor(1e7 * Math.random());
    try {
      sg.__DC_STAT_UUID = ag;
    } catch (e) {}
  }
  return ag;
}
function cg() {
  if (!0 !== __uniConfig.darkmode) return y(__uniConfig.darkmode) ? __uniConfig.darkmode : 'light';
  try {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  } catch (e) {
    return 'light';
  }
}
function ug() {
  let e,
    t = '0',
    n = '',
    o = 'phone';
  const r = navigator.language;
  if (wu) {
    e = 'iOS';
    const o = bu.match(/OS\s([\w_]+)\slike/);
    o && (t = o[1].replace(/_/g, '.'));
    const r = bu.match(/\(([a-zA-Z]+);/);
    r && (n = r[1]);
  } else if (_u) {
    e = 'Android';
    const o = bu.match(/Android[\s/]([\w\.]+)[;\s]/);
    o && (t = o[1]);
    const r = bu.match(/\((.+?)\)/),
      i = r ? r[1].split(';') : bu.split(' '),
      s = [
        /\bAndroid\b/i,
        /\bLinux\b/i,
        /\bU\b/i,
        /^\s?[a-z][a-z]$/i,
        /^\s?[a-z][a-z]-[a-z][a-z]$/i,
        /\bwv\b/i,
        /\/[\d\.,]+$/,
        /^\s?[\d\.,]+$/,
        /\bBrowser\b/i,
        /\bMobile\b/i
      ];
    for (let e = 0; e < i.length; e++) {
      const t = i[e];
      if (t.indexOf('Build') > 0) {
        n = t.split('Build')[0].trim();
        break;
      }
      let o;
      for (let e = 0; e < s.length; e++)
        if (s[e].test(t)) {
          o = !0;
          break;
        }
      if (!o) {
        n = t.trim();
        break;
      }
    }
  } else if (Cu) (n = 'iPad'), (e = 'iOS'), (o = 'pad'), (t = v(window.BigInt) ? '14.0' : '13.0');
  else if (xu || Tu || Su) {
    (n = 'PC'), (e = 'PC'), (o = 'pc'), (t = '0');
    let r = bu.match(/\((.+?)\)/)[1];
    if (xu) {
      switch (((e = 'Windows'), xu[1])) {
        case '5.1':
          t = 'XP';
          break;
        case '6.0':
          t = 'Vista';
          break;
        case '6.1':
          t = '7';
          break;
        case '6.2':
          t = '8';
          break;
        case '6.3':
          t = '8.1';
          break;
        case '10.0':
          t = '10';
      }
      const n = r && r.match(/[Win|WOW]([\d]+)/);
      n && (t += ` x${n[1]}`);
    } else if (Tu) {
      e = 'macOS';
      const n = (r && r.match(/Mac OS X (.+)/)) || '';
      t && ((t = n[1].replace(/_/g, '.')), -1 !== t.indexOf(';') && (t = t.split(';')[0]));
    } else if (Su) {
      e = 'Linux';
      const n = (r && r.match(/Linux (.*)/)) || '';
      n && ((t = n[1]), -1 !== t.indexOf(';') && (t = t.split(';')[0]));
    }
  } else (e = 'Other'), (t = '0'), (o = 'unknown');
  const i = `${e} ${t}`,
    s = e.toLocaleLowerCase();
  let a = '',
    l = String(
      (function () {
        const e = navigator.userAgent,
          t = e.indexOf('compatible') > -1 && e.indexOf('MSIE') > -1,
          n = e.indexOf('Edge') > -1 && !t,
          o = e.indexOf('Trident') > -1 && e.indexOf('rv:11.0') > -1;
        if (t) {
          new RegExp('MSIE (\\d+\\.\\d+);').test(e);
          const t = parseFloat(RegExp.$1);
          return t > 6 ? t : 6;
        }
        return n ? -1 : o ? 11 : -1;
      })()
    );
  if ('-1' !== l) a = 'IE';
  else {
    const e = ['Version', 'Firefox', 'Chrome', 'Edge{0,1}'],
      t = ['Safari', 'Firefox', 'Chrome', 'Edge'];
    for (let n = 0; n < e.length; n++) {
      const o = e[n],
        r = new RegExp(`(${o})/(\\S*)\\b`);
      r.test(bu) && ((a = t[n]), (l = bu.match(r)[2]));
    }
  }
  let c = 'portrait';
  const u =
    void 0 === window.screen.orientation ? window.orientation : window.screen.orientation.angle;
  return (
    (c = 90 === Math.abs(u) ? 'landscape' : 'portrait'),
    {
      deviceBrand: void 0,
      brand: void 0,
      deviceModel: n,
      deviceOrientation: c,
      model: n,
      system: i,
      platform: s,
      browserName: a.toLocaleLowerCase(),
      browserVersion: l,
      language: r,
      deviceType: o,
      ua: bu,
      osname: e,
      osversion: t,
      theme: cg()
    }
  );
}
const dg = sd(0, () => {
  const e = window.devicePixelRatio,
    t = ku(),
    n = Eu(t),
    o = Ou(t, n),
    r = (function (e, t) {
      return e ? Math[t ? 'min' : 'max'](screen.height, screen.width) : screen.height;
    })(t, n),
    i = Lu(o);
  let s = window.innerHeight;
  const a = oc.top,
    l = {
      left: oc.left,
      right: i - oc.right,
      top: oc.top,
      bottom: s - oc.bottom,
      width: i - oc.left - oc.right,
      height: s - oc.top - oc.bottom
    },
    { top: c, bottom: u } = lc();
  return (
    (s -= c),
    (s -= u),
    {
      windowTop: c,
      windowBottom: u,
      windowWidth: i,
      windowHeight: s,
      pixelRatio: e,
      screenWidth: o,
      screenHeight: r,
      statusBarHeight: a,
      safeArea: l,
      safeAreaInsets: { top: oc.top, right: oc.right, bottom: oc.bottom, left: oc.left },
      screenTop: r - s
    }
  );
});
let fg,
  pg = !0;
function hg() {
  pg && (fg = ug());
}
const gg = sd(0, () => {
    hg();
    const {
      deviceBrand: e,
      deviceModel: t,
      brand: n,
      model: o,
      platform: r,
      system: i,
      deviceOrientation: s,
      deviceType: a
    } = fg;
    return {
      brand: n,
      deviceBrand: e,
      deviceModel: t,
      devicePixelRatio: window.devicePixelRatio,
      deviceId: lg(),
      deviceOrientation: s,
      deviceType: a,
      model: o,
      platform: r,
      system: i
    };
  }),
  mg = sd(0, () => {
    hg();
    const { theme: e, language: t, browserName: n, browserVersion: o } = fg;
    return {
      appId: __uniConfig.appId,
      appName: __uniConfig.appName,
      appVersion: __uniConfig.appVersion,
      appVersionCode: __uniConfig.appVersionCode,
      appLanguage: Kd ? Kd() : t,
      enableDebug: !1,
      hostSDKVersion: void 0,
      hostPackageName: void 0,
      hostFontSizeSetting: void 0,
      hostName: n,
      hostVersion: o,
      hostTheme: e,
      hostLanguage: t,
      language: t,
      SDKVersion: '',
      theme: e,
      version: ''
    };
  }),
  vg = sd(0, () => {
    (pg = !0), hg(), (pg = !1);
    const e = dg(),
      t = gg(),
      n = mg();
    pg = !0;
    const { ua: o, browserName: r, browserVersion: i, osname: s, osversion: a } = fg,
      l = c(e, t, n, {
        ua: o,
        browserName: r,
        browserVersion: i,
        uniPlatform: 'web',
        uniCompileVersion: __uniConfig.compilerVersion,
        uniRuntimeVersion: __uniConfig.compilerVersion,
        fontSizeSetting: void 0,
        osName: s.toLocaleLowerCase(),
        osVersion: a,
        osLanguage: void 0,
        osTheme: void 0
      });
    return (
      delete l.screenTop,
      delete l.enableDebug,
      __uniConfig.darkmode || delete l.theme,
      (function (e) {
        let t = {};
        return (
          S(e) &&
            Object.keys(e)
              .sort()
              .forEach((n) => {
                const o = n;
                t[o] = e[o];
              }),
          Object.keys(t) ? t : e
        );
      })(l)
    );
  });
const yg = sd(0, (e, t) => {
  const n = typeof t,
    o = 'string' === n ? t : JSON.stringify({ type: n, data: t });
  localStorage.setItem(e, o);
});
function bg(e) {
  const t = localStorage && localStorage.getItem(e);
  if (!y(t)) throw new Error('data not found');
  let n = t;
  try {
    const e = (function (e) {
      const t = ['object', 'string', 'number', 'boolean', 'undefined'];
      try {
        const n = y(e) ? JSON.parse(e) : e,
          o = n.type;
        if (t.indexOf(o) >= 0) {
          const e = Object.keys(n);
          if (2 === e.length && 'data' in n) {
            if (typeof n.data === o) return n.data;
            if ('object' === o && /^\d{4}-\d{2}-\d{2}T\d{2}\:\d{2}\:\d{2}\.\d{3}Z$/.test(n.data))
              return new Date(n.data);
          } else if (1 === e.length) return '';
        }
      } catch (n) {}
    })(JSON.parse(t));
    void 0 !== e && (n = e);
  } catch (o) {}
  return n;
}
const _g = sd(0, (e) => {
    try {
      return bg(e);
    } catch (t) {
      return '';
    }
  }),
  wg = sd(0, (e) => {
    localStorage && localStorage.removeItem(e);
  }),
  xg = sd(0, () => {
    localStorage && localStorage.clear();
  }),
  Tg = ad('clearStorage', (e, { resolve: t }) => {
    xg(), t();
  }),
  Sg = ad('hideKeyboard', (e, { resolve: t, reject: n }) => {
    const o = document.activeElement;
    !o || ('TEXTAREA' !== o.tagName && 'INPUT' !== o.tagName) || (o.blur(), t());
  });
Xf();
const Cg = { esc: ['Esc', 'Escape'], enter: ['Enter'] },
  kg = Object.keys(Cg);
const Eg = ei('div', { class: 'uni-mask' }, null, -1);
function Og(e, t, n) {
  return (
    (t.onClose = (...e) => ((t.visible = !1), n.apply(null, e))),
    Os(ho({ setup: () => () => (Vr(), Xr(e, t, null, 16)) }))
  );
}
function Lg(e) {
  let t = document.getElementById(e);
  return t || ((t = document.createElement('div')), (t.id = e), document.body.append(t)), t;
}
function $g(e, { onEsc: t, onEnter: n }) {
  const o = an(e.visible),
    { key: r, disable: i } = (function () {
      const e = an(''),
        t = an(!1),
        n = (n) => {
          if (t.value) return;
          const o = kg.find((e) => -1 !== Cg[e].indexOf(n.key));
          o && (e.value = o), On(() => (e.value = ''));
        };
      return (
        Bo(() => {
          document.addEventListener('keyup', n);
        }),
        Fo(() => {
          document.removeEventListener('keyup', n);
        }),
        { key: e, disable: t }
      );
    })();
  return (
    Jn(
      () => e.visible,
      (e) => (o.value = e)
    ),
    Jn(
      () => o.value,
      (e) => (i.value = !e)
    ),
    Zn(() => {
      const { value: e } = r;
      'esc' === e ? t && t() : 'enter' === e && n && n();
    }),
    o
  );
}
let Ig = 0,
  Mg = '';
function Ag(e) {
  let t = Ig;
  (Ig += e ? 1 : -1),
    (Ig = Math.max(0, Ig)),
    Ig > 0
      ? 0 === t && ((Mg = document.body.style.overflow), (document.body.style.overflow = 'hidden'))
      : ((document.body.style.overflow = Mg), (Mg = ''));
}
const Pg = iu({
  name: 'ImageView',
  props: { src: { type: String, default: '' } },
  setup(e) {
    const t = Ut({ direction: 'none' });
    let n = 1,
      o = 0,
      r = 0,
      i = 0,
      s = 0;
    function a({ detail: e }) {
      n = e.scale;
    }
    function l(e) {
      const t = e.target.getBoundingClientRect();
      (o = t.width), (r = t.height);
    }
    function c(e) {
      const t = e.target.getBoundingClientRect();
      (i = t.width), (s = t.height), d(e);
    }
    function u(e) {
      const a = n * o > i,
        l = n * r > s;
      (t.direction = a && l ? 'all' : a ? 'horizontal' : l ? 'vertical' : 'none'), d(e);
    }
    function d(e) {
      ('all' !== t.direction && 'horizontal' !== t.direction) || e.stopPropagation();
    }
    return () => {
      const n = { position: 'absolute', left: '0', top: '0', width: '100%', height: '100%' };
      return ei(
        lp,
        { style: n, onTouchstart: su(c), onTouchmove: su(d), onTouchend: su(u) },
        {
          default: () => [
            ei(
              wp,
              {
                style: n,
                direction: t.direction,
                inertia: !0,
                scale: !0,
                'scale-min': '1',
                'scale-max': '4',
                onScale: a
              },
              {
                default: () => [
                  ei(
                    'img',
                    {
                      src: e.src,
                      style: {
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        maxHeight: '100%',
                        maxWidth: '100%'
                      },
                      onLoad: l
                    },
                    null,
                    40,
                    ['src', 'onLoad']
                  )
                ]
              },
              8,
              ['style', 'direction', 'inertia', 'scale', 'onScale']
            )
          ]
        },
        8,
        ['style', 'onTouchstart', 'onTouchmove', 'onTouchend']
      );
    };
  }
});
function Bg(e) {
  let t = 'number' == typeof e.current ? e.current : e.urls.indexOf(e.current);
  return (t = t < 0 ? 0 : t), t;
}
const Rg = iu({
  name: 'ImagePreview',
  props: {
    urls: { type: Array, default: () => [] },
    current: { type: [Number, String], default: 0 }
  },
  emits: ['close'],
  setup(e, { emit: t }) {
    Bo(() => Ag(!0)), Do(() => Ag(!1));
    const n = an(null),
      o = an(Bg(e));
    let r;
    function i() {
      r ||
        On(() => {
          t('close');
        });
    }
    function s(e) {
      o.value = e.detail.current;
    }
    Jn(
      () => e.current,
      () => (o.value = Bg(e))
    ),
      Bo(() => {
        const e = n.value;
        let t = 0,
          o = 0;
        e.addEventListener('mousedown', (e) => {
          (r = !1), (t = e.clientX), (o = e.clientY);
        }),
          e.addEventListener('mouseup', (e) => {
            (Math.abs(e.clientX - t) > 20 || Math.abs(e.clientY - o) > 20) && (r = !0);
          });
      });
    const a = {
      position: 'absolute',
      'box-sizing': 'border-box',
      top: '0',
      right: '0',
      width: '60px',
      height: '44px',
      padding: '6px',
      'line-height': '32px',
      'font-size': '26px',
      color: 'white',
      'text-align': 'center',
      cursor: 'pointer'
    };
    return () => {
      let t;
      return ei(
        'div',
        {
          ref: n,
          style: {
            display: 'block',
            position: 'fixed',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
            zIndex: 999,
            background: 'rgba(0,0,0,0.8)'
          },
          onClick: i
        },
        [
          ei(
            qp,
            {
              navigation: 'auto',
              current: o.value,
              onChange: s,
              'indicator-dots': !1,
              autoplay: !1,
              style: { position: 'absolute', left: '0', top: '0', width: '100%', height: '100%' }
            },
            ((r = t =
              e.urls.map((e) =>
                ei(Wp, null, { default: () => [ei(Pg, { src: e }, null, 8, ['src'])] })
              )),
            'function' == typeof r ||
            ('[object Object]' === Object.prototype.toString.call(r) && !Yr(r))
              ? t
              : { default: () => [t], _: 1 }),
            8,
            ['current', 'onChange']
          ),
          ei(
            'div',
            { style: a },
            [
              vc(
                'M17.25 16.156l7.375-7.313q0.281-0.281 0.281-0.641t-0.281-0.641q-0.25-0.25-0.625-0.25t-0.625 0.25l-7.375 7.344-7.313-7.344q-0.25-0.25-0.625-0.25t-0.625 0.25q-0.281 0.25-0.281 0.625t0.281 0.625l7.313 7.344-7.375 7.344q-0.281 0.25-0.281 0.625t0.281 0.625q0.125 0.125 0.281 0.188t0.344 0.063q0.156 0 0.328-0.063t0.297-0.188l7.375-7.344 7.375 7.406q0.125 0.156 0.297 0.219t0.328 0.063q0.188 0 0.344-0.078t0.281-0.203q0.281-0.25 0.281-0.609t-0.281-0.641l-7.375-7.406z',
                '#ffffff',
                26
              )
            ],
            4
          )
        ],
        8,
        ['onClick']
      );
    };
  }
});
let Ng,
  Fg = null;
const Dg = () => {
    (Fg = null),
      On(() => {
        null == Ng || Ng.unmount(), (Ng = null);
      });
  },
  jg = ad(
    'previewImage',
    (e, { resolve: t }) => {
      Fg
        ? c(Fg, e)
        : ((Fg = Ut(e)),
          On(() => {
            (Ng = Og(Rg, Fg, Dg)), Ng.mount(Lg('u-a-p'));
          })),
        t();
    },
    0,
    Zd
  ),
  qg = id(
    'request',
    (
      {
        url: e,
        data: t,
        header: n = {},
        method: o,
        dataType: r,
        responseType: i,
        withCredentials: s,
        timeout: a = __uniConfig.networkTimeout.request
      },
      { resolve: l, reject: c }
    ) => {
      let u = null;
      const d = (function (e) {
        const t = Object.keys(e).find((e) => 'content-type' === e.toLowerCase());
        if (!t) return;
        const n = e[t];
        if (0 === n.indexOf('application/json')) return 'json';
        if (0 === n.indexOf('application/x-www-form-urlencoded')) return 'urlencoded';
        return 'string';
      })(n);
      if ('GET' !== o)
        if (y(t) || t instanceof ArrayBuffer) u = t;
        else if ('json' === d)
          try {
            u = JSON.stringify(t);
          } catch (m) {
            u = t.toString();
          }
        else if ('urlencoded' === d) {
          const e = [];
          for (const n in t)
            f(t, n) && e.push(encodeURIComponent(n) + '=' + encodeURIComponent(t[n]));
          u = e.join('&');
        } else u = t.toString();
      const p = new XMLHttpRequest(),
        h = new Vg(p);
      p.open(o, e);
      for (const v in n) f(n, v) && p.setRequestHeader(v, n[v]);
      const g = setTimeout(function () {
        (p.onload = p.onabort = p.onerror = null), h.abort(), c('timeout', { errCode: 5 });
      }, a);
      return (
        (p.responseType = i),
        (p.onload = function () {
          clearTimeout(g);
          const e = p.status;
          let t = 'text' === i ? p.responseText : p.response;
          if ('text' === i && 'json' === r)
            try {
              t = JSON.parse(t);
            } catch (m) {}
          l({ data: t, statusCode: e, header: Wg(p.getAllResponseHeaders()), cookies: [] });
        }),
        (p.onabort = function () {
          clearTimeout(g), c('abort', { errCode: 600003 });
        }),
        (p.onerror = function () {
          clearTimeout(g), c(void 0, { errCode: 5 });
        }),
        (p.withCredentials = s),
        p.send(u),
        h
      );
    },
    0,
    tf
  );
class Vg {
  constructor(e) {
    this._xhr = e;
  }
  abort() {
    this._xhr && (this._xhr.abort(), delete this._xhr);
  }
  onHeadersReceived(e) {
    throw new Error('Method not implemented.');
  }
  offHeadersReceived(e) {
    throw new Error('Method not implemented.');
  }
}
function Wg(e) {
  const t = {};
  return (
    e.split('\n').forEach((e) => {
      const n = e.match(/(\S+\s*):\s*(.*)/);
      n && 3 === n.length && (t[n[1]] = n[2]);
    }),
    t
  );
}
const Hg = ad(
  'navigateBack',
  (e, { resolve: t, reject: n }) => {
    let o = !0;
    return (
      !0 === kc('onBackPress', { from: e.from || 'navigateBack' }) && (o = !1),
      o ? (Uh().$router.go(-e.delta), t()) : n('onBackPress')
    );
  },
  0,
  lf
);
function zg({ type: e, url: t, tabBarText: n, events: o, isAutomatedTesting: r }, i) {
  const s = Uh().$router,
    { path: a, query: l } = (function (e) {
      const [t, n] = e.split('?', 2);
      return { path: t, query: ke(n || '') };
    })(t);
  return new Promise((t, c) => {
    const u = (function (e, t) {
      return { __id__: t || ++Sh, __type__: e };
    })(e, i);
    s['navigateTo' === e ? 'push' : 'replace']({ path: a, query: l, state: u, force: !0 }).then(
      (i) => {
        if (ya(i)) return c(i.message);
        if (('switchTab' === e && (s.currentRoute.value.meta.tabBarText = n), 'navigateTo' === e)) {
          const e = s.currentRoute.value.meta;
          return (
            e.eventChannel
              ? o &&
                (Object.keys(o).forEach((t) => {
                  e.eventChannel._addListener(t, 'on', o[t]);
                }),
                e.eventChannel._clearCache())
              : (e.eventChannel = new Oe(u.__id__, o)),
            t(r ? { __id__: u.__id__ } : { eventChannel: e.eventChannel })
          );
        }
        return r ? t({ __id__: u.__id__ }) : t();
      }
    );
  });
}
const Ug = ad(
  'navigateTo',
  ({ url: e, events: t, isAutomatedTesting: n }, { resolve: o, reject: r }) =>
    zg({ type: 'navigateTo', url: e, events: t, isAutomatedTesting: n }).then(o).catch(r),
  0,
  of
);
const Xg = ad(
  'redirectTo',
  ({ url: e, isAutomatedTesting: t }, { resolve: n, reject: o }) => (
    (function () {
      const e = _c();
      if (!e) return;
      const t = e.$page;
      Th(Eh(t.path, t.id));
    })(),
    zg({ type: 'redirectTo', url: e, isAutomatedTesting: t }).then(n).catch(o)
  ),
  0,
  rf
);
const Yg = ad(
  'reLaunch',
  ({ url: e, isAutomatedTesting: t }, { resolve: n, reject: o }) => (
    (function () {
      const e = wh().keys();
      for (const t of e) Th(t);
    })(),
    zg({ type: 'reLaunch', url: e, isAutomatedTesting: t }).then(n).catch(o)
  ),
  0,
  sf
);
function Kg(e, t) {
  return e === t.fullPath || ('/' === e && t.meta.isEntry);
}
const Gg = ad(
  'switchTab',
  ({ url: e, tabBarText: t, isAutomatedTesting: n }, { resolve: o, reject: r }) => (
    (function () {
      const e = Tc();
      if (!e) return;
      const t = wh(),
        n = t.keys();
      for (const o of n) {
        const e = t.get(o);
        e.$.__isTabBar ? (e.$.__isActive = !1) : Th(o);
      }
      e.$.__isTabBar && ((e.$.__isVisible = !1), kc(e, 'onHide'));
    })(),
    zg(
      { type: 'switchTab', url: e, tabBarText: t, isAutomatedTesting: n },
      (function (e) {
        const t = wh().values();
        for (const n of t) {
          const t = n.$page;
          if (Kg(e, t)) return (n.$.__isActive = !0), t.id;
        }
      })(e)
    )
      .then(o)
      .catch(r)
  ),
  0,
  af
);
function Zg(e) {
  __uniConfig.darkmode && Nm.on('onThemeChange', e);
}
function Qg(e) {
  Nm.off('onThemeChange', e);
}
function Jg(e) {
  let t = {};
  return (
    __uniConfig.darkmode && (t = Ne(e, __uniConfig.themeConfig, cg())), __uniConfig.darkmode ? t : e
  );
}
function em(e, t) {
  const n = Kt(e),
    o = n ? Ut(Jg(e)) : Jg(e);
  return (
    __uniConfig.darkmode &&
      n &&
      Jn(e, (e) => {
        const t = Jg(e);
        for (const n in t) o[n] = t[n];
      }),
    t && Zg(t),
    o
  );
}
const tm = { light: { cancelColor: '#000000' }, dark: { cancelColor: 'rgb(170, 170, 170)' } },
  nm = ho({
    props: {
      title: { type: String, default: '' },
      content: { type: String, default: '' },
      showCancel: { type: Boolean, default: !0 },
      cancelText: { type: String, default: 'Cancel' },
      cancelColor: { type: String, default: '#000000' },
      confirmText: { type: String, default: 'OK' },
      confirmColor: { type: String, default: '#007aff' },
      visible: { type: Boolean },
      editable: { type: Boolean, default: !1 },
      placeholderText: { type: String, default: '' }
    },
    setup(e, { emit: t }) {
      const n = an(''),
        o = () => (s.value = !1),
        r = () => (o(), t('close', 'cancel')),
        i = () => (o(), t('close', 'confirm', n.value)),
        s = $g(e, {
          onEsc: r,
          onEnter: () => {
            !e.editable && i();
          }
        }),
        a = (function (e) {
          const t = an(e.cancelColor),
            n = ({ theme: e }) => {
              ((e, t) => {
                t.value = tm[e].cancelColor;
              })(e, t);
            };
          return (
            Zn(() => {
              e.visible
                ? ((t.value = e.cancelColor),
                  '#000' === e.cancelColor && ('dark' === cg() && n({ theme: 'dark' }), Zg(n)))
                : Qg(n);
            }),
            t
          );
        })(e);
      return () => {
        const {
          title: t,
          content: o,
          showCancel: l,
          confirmText: c,
          confirmColor: u,
          editable: d,
          placeholderText: f
        } = e;
        return (
          (n.value = o),
          ei(
            Gi,
            { name: 'uni-fade' },
            {
              default: () => [
                Ho(
                  ei(
                    'uni-modal',
                    { onTouchmove: rc },
                    [
                      Eg,
                      ei('div', { class: 'uni-modal' }, [
                        t &&
                          ei('div', { class: 'uni-modal__hd' }, [
                            ei('strong', { class: 'uni-modal__title', textContent: t }, null, 8, [
                              'textContent'
                            ])
                          ]),
                        d
                          ? ei(
                              'textarea',
                              {
                                class: 'uni-modal__textarea',
                                rows: '1',
                                placeholder: f,
                                value: o,
                                onInput: (e) => (n.value = e.target.value)
                              },
                              null,
                              40,
                              ['placeholder', 'value', 'onInput']
                            )
                          : ei(
                              'div',
                              { class: 'uni-modal__bd', onTouchmovePassive: ic, textContent: o },
                              null,
                              40,
                              ['onTouchmovePassive', 'textContent']
                            ),
                        ei('div', { class: 'uni-modal__ft' }, [
                          l &&
                            ei(
                              'div',
                              {
                                style: { color: a.value },
                                class: 'uni-modal__btn uni-modal__btn_default',
                                onClick: r
                              },
                              [e.cancelText],
                              12,
                              ['onClick']
                            ),
                          ei(
                            'div',
                            {
                              style: { color: u },
                              class: 'uni-modal__btn uni-modal__btn_primary',
                              onClick: i
                            },
                            [c],
                            12,
                            ['onClick']
                          )
                        ])
                      ])
                    ],
                    40,
                    ['onTouchmove']
                  ),
                  [[Ss, s.value]]
                )
              ]
            }
          )
        );
      };
    }
  });
let om;
const rm = me(() => {
  Nm.on('onHidePopup', () => (om.visible = !1));
});
let im;
function sm(e, t) {
  const n = 'confirm' === e,
    o = { confirm: n, cancel: 'cancel' === e };
  n && om.editable && (o.content = t), im && im(o);
}
const am = ad(
    'showModal',
    (e, { resolve: t }) => {
      rm(),
        (im = t),
        om
          ? (c(om, e), (om.visible = !0))
          : ((om = Ut(e)),
            On(() => (Og(nm, om, sm).mount(Lg('u-a-m')), On(() => (om.visible = !0)))));
    },
    0,
    mf
  ),
  lm = {
    title: { type: String, default: '' },
    icon: { default: 'success', validator: (e) => -1 !== vf.indexOf(e) },
    image: { type: String, default: '' },
    duration: { type: Number, default: 1500 },
    mask: { type: Boolean, default: !1 },
    visible: { type: Boolean }
  },
  cm = { light: '#fff', dark: 'rgba(255,255,255,0.9)' },
  um = (e) => cm[e],
  dm = ho({
    name: 'Toast',
    props: lm,
    setup(e) {
      kl(), El();
      const { Icon: t } = (function (e) {
          const t = an(um(cg())),
            n = ({ theme: e }) => (t.value = um(e));
          Zn(() => {
            e.visible ? Zg(n) : Qg(n);
          });
          return {
            Icon: wi(() => {
              switch (e.icon) {
                case 'success':
                  return ei(vc(hc, t.value, 38), { class: 'uni-toast__icon' });
                case 'error':
                  return ei(vc(gc, t.value, 38), { class: 'uni-toast__icon' });
                case 'loading':
                  return ei('i', { class: ['uni-toast__icon', 'uni-loading'] }, null, 2);
                default:
                  return null;
              }
            })
          };
        })(e),
        n = $g(e, {});
      return () => {
        const { mask: o, duration: r, title: i, image: s } = e;
        return ei(
          Gi,
          { name: 'uni-fade' },
          {
            default: () => [
              Ho(
                ei(
                  'uni-toast',
                  { 'data-duration': r },
                  [
                    o
                      ? ei(
                          'div',
                          { class: 'uni-mask', style: 'background: transparent;', onTouchmove: rc },
                          null,
                          40,
                          ['onTouchmove']
                        )
                      : '',
                    s || t.value
                      ? ei('div', { class: 'uni-toast' }, [
                          s
                            ? ei('img', { src: s, class: 'uni-toast__icon' }, null, 10, ['src'])
                            : t.value,
                          ei('p', { class: 'uni-toast__content' }, [i])
                        ])
                      : ei('div', { class: 'uni-sample-toast' }, [
                          ei('p', { class: 'uni-simple-toast__text' }, [i])
                        ])
                  ],
                  8,
                  ['data-duration']
                ),
                [[Ss, n.value]]
              )
            ]
          }
        );
      };
    }
  });
let fm,
  pm,
  hm = '';
const gm = je();
function mm(e) {
  fm
    ? c(fm, e)
    : ((fm = Ut(c(e, { visible: !1 }))),
      On(() => {
        gm.run(() => {
          Jn([() => fm.visible, () => fm.duration], ([e, t]) => {
            if (e) {
              if ((pm && clearTimeout(pm), 'onShowLoading' === hm)) return;
              pm = setTimeout(() => {
                wm('onHideToast');
              }, t);
            } else pm && clearTimeout(pm);
          });
        }),
          Nm.on('onHidePopup', () => wm('onHidePopup')),
          Og(dm, fm, () => {}).mount(Lg('u-a-t'));
      })),
    setTimeout(() => {
      fm.visible = !0;
    }, 10);
}
const vm = ad(
    'showToast',
    (e, { resolve: t, reject: n }) => {
      mm(e), (hm = 'onShowToast'), t();
    },
    0,
    yf
  ),
  ym = { icon: 'loading', duration: 1e8, image: '' },
  bm = ad(
    'showLoading',
    (e, { resolve: t, reject: n }) => {
      c(e, ym), mm(e), (hm = 'onShowLoading'), t();
    },
    0,
    gf
  ),
  _m = ad('hideLoading', (e, { resolve: t, reject: n }) => {
    wm('onHideLoading'), t();
  });
function wm(e) {
  const { t: t } = Tl();
  if (!hm) return;
  let n = '';
  if (
    ('onHideToast' === e && 'onShowToast' !== hm
      ? (n = t('uni.showToast.unpaired'))
      : 'onHideLoading' === e && 'onShowLoading' !== hm && (n = t('uni.showLoading.unpaired')),
    n)
  )
    return console.warn(n);
  (hm = ''),
    setTimeout(() => {
      fm.visible = !1;
    }, 10);
}
const xm = ad('loadFontFace', ({ family: e, source: t, desc: n }, { resolve: o, reject: r }) => {
  (function (e, t, n) {
    const o = document.fonts;
    if (o) {
      const r = new FontFace(e, t, n);
      return r.load().then(() => {
        o.add && o.add(r);
      });
    }
    return new Promise((o) => {
      const r = document.createElement('style'),
        i = [];
      if (n) {
        const {
          style: e,
          weight: t,
          stretch: o,
          unicodeRange: r,
          variant: s,
          featureSettings: a
        } = n;
        e && i.push(`font-style:${e}`),
          t && i.push(`font-weight:${t}`),
          o && i.push(`font-stretch:${o}`),
          r && i.push(`unicode-range:${r}`),
          s && i.push(`font-variant:${s}`),
          a && i.push(`font-feature-settings:${a}`);
      }
      (r.innerText = `@font-face{font-family:"${e}";src:${t};${i.join(';')}}`),
        document.head.appendChild(r),
        o();
    });
  })(
    e,
    (t =
      t.startsWith('url("') || t.startsWith("url('")
        ? `url('${yu(t.substring(5, t.length - 2))}')`
        : t.startsWith('url(')
        ? `url('${yu(t.substring(4, t.length - 1))}')`
        : yu(t)),
    n
  )
    .then(() => {
      o();
    })
    .catch((e) => {
      r(`loadFontFace:fail ${e}`);
    });
});
function Tm(e) {
  function t() {
    var t;
    (t = e.navigationBar.titleText),
      (document.title = t),
      Nm.emit('onNavigationBarChange', { titleText: t });
  }
  Zn(t), To(t);
}
const Sm = ad('setNavigationBarTitle', (e, { resolve: t, reject: n }) => {
    !(function (e, t, n, o, r) {
      if (!e) return r('page not found');
      const { navigationBar: i } = e;
      switch (t) {
        case 'setNavigationBarColor':
          const { frontColor: e, backgroundColor: t, animation: o } = n,
            { duration: r, timingFunc: s } = o;
          e && (i.titleColor = '#000000' === e ? '#000000' : '#ffffff'),
            t && (i.backgroundColor = t),
            (i.duration = r + 'ms'),
            (i.timingFunc = s);
          break;
        case 'showNavigationBarLoading':
          i.loading = !0;
          break;
        case 'hideNavigationBarLoading':
          i.loading = !1;
          break;
        case 'setNavigationBarTitle':
          const { title: a } = n;
          i.titleText = a;
      }
      o();
    })(wc(), 'setNavigationBarTitle', e, t, n);
  }),
  Cm = ad(
    'pageScrollTo',
    ({ scrollTop: e, selector: t, duration: n }, { resolve: o }) => {
      !(function (e, t, n) {
        if (y(e)) {
          const t = document.querySelector(e);
          if (t) {
            const { top: n } = t.getBoundingClientRect();
            e = n + window.pageYOffset;
            const o = document.querySelector('uni-page-head');
            o && (e -= o.offsetHeight);
          }
        }
        e < 0 && (e = 0);
        const o = document.documentElement,
          { clientHeight: r, scrollHeight: i } = o;
        if (((e = Math.min(e, i - r)), 0 === t))
          return void (o.scrollTop = document.body.scrollTop = e);
        if (window.scrollY === e) return;
        const s = (t) => {
          if (t <= 0) return void window.scrollTo(0, e);
          const n = e - window.scrollY;
          requestAnimationFrame(function () {
            window.scrollTo(0, window.scrollY + (n / t) * 10), s(t - 10);
          });
        };
        s(t);
      })(t || e || 0, n),
        o();
    },
    0,
    hf
  ),
  km = ad('stopPullDownRefresh', (e, { resolve: t }) => {
    Nm.invokeViewMethod('stopPullDownRefresh', {}, xc()), t();
  }),
  Em = iu({
    name: 'TabBar',
    setup() {
      const e = an([]),
        t = fh(),
        n = em(t, () => {
          const e = Jg(t);
          (n.backgroundColor = e.backgroundColor),
            (n.borderStyle = e.borderStyle),
            (n.color = e.color),
            (n.selectedColor = e.selectedColor),
            (n.blurEffect = e.blurEffect),
            e.list &&
              e.list.length &&
              e.list.forEach((e, t) => {
                (n.list[t].iconPath = e.iconPath),
                  (n.list[t].selectedIconPath = e.selectedIconPath);
              });
        });
      !(function (e, t) {
        function n() {
          let n = [];
          (n = e.list.filter((e) => !1 !== e.visible)), (t.value = n);
        }
        an(c({ type: 'midButton' }, e.midButton)), Zn(n);
      })(n, e),
        (function (e) {
          Jn(
            () => e.shown,
            (t) => {
              uc({ '--window-bottom': bh(t ? parseInt(e.height) : 0) });
            }
          );
        })(n);
      const o = (function (e, t, n) {
          return (
            Zn(() => {
              const o = e.meta;
              if (o.isTabBar) {
                const e = o.route,
                  r = n.value.findIndex((t) => t.pagePath === e);
                t.selectedIndex = r;
              }
            }),
            (t, n) => () => {
              const { pagePath: o, text: r } = t;
              let i = ge(o);
              i === __uniRoutes[0].alias && (i = '/'),
                e.path !== i
                  ? Gg({ from: 'tabBar', url: i, tabBarText: r })
                  : kc('onTabItemTap', { index: n, text: r, pagePath: o });
            }
          );
        })(vl(), n, e),
        {
          style: r,
          borderStyle: i,
          placeholderStyle: s
        } = (function (e) {
          const t = wi(() => {
              let t = e.backgroundColor;
              const n = e.blurEffect;
              return (
                t || (vh && n && 'none' !== n && (t = Om[n])),
                { backgroundColor: t || '#f7f7fa', backdropFilter: 'none' !== n ? 'blur(10px)' : n }
              );
            }),
            n = wi(() => {
              const { borderStyle: t } = e;
              return { backgroundColor: Lm[t] || t };
            }),
            o = wi(() => ({ height: e.height }));
          return { style: t, borderStyle: n, placeholderStyle: o };
        })(n);
      return (
        Bo(() => {
          n.iconfontSrc && xm({ family: 'UniTabbarIconFont', source: `url("${n.iconfontSrc}")` });
        }),
        () => {
          const t = (function (e, t, n) {
            const { selectedIndex: o, selectedColor: r, color: i } = e;
            return n.value.map((n, s) => {
              const a = o === s;
              return (function (e, t, n, o, r, i, s, a) {
                return ei(
                  'div',
                  { key: s, class: 'uni-tabbar__item', onClick: a(r, s) },
                  [$m(e, t || '', n, o, r, i)],
                  8,
                  ['onClick']
                );
              })(
                a ? r : i,
                (a && n.selectedIconPath) || n.iconPath || '',
                n.iconfont ? (a && n.iconfont.selectedText) || n.iconfont.text : void 0,
                n.iconfont ? (a && n.iconfont.selectedColor) || n.iconfont.color : void 0,
                n,
                e,
                s,
                t
              );
            });
          })(n, o, e);
          return ei(
            'uni-tabbar',
            { class: 'uni-tabbar-' + n.position },
            [
              ei(
                'div',
                { class: 'uni-tabbar', style: r.value },
                [ei('div', { class: 'uni-tabbar-border', style: i.value }, null, 4), t],
                4
              ),
              ei('div', { class: 'uni-placeholder', style: s.value }, null, 4)
            ],
            2
          );
        }
      );
    }
  });
const Om = {
    dark: 'rgb(0, 0, 0, 0.8)',
    light: 'rgb(250, 250, 250, 0.8)',
    extralight: 'rgb(250, 250, 250, 0.8)'
  },
  Lm = { white: 'rgba(255, 255, 255, 0.33)', black: 'rgba(0, 0, 0, 0.33)' };
function $m(e, t, n, o, r, i) {
  const { height: s } = i;
  return ei(
    'div',
    { class: 'uni-tabbar__bd', style: { height: s } },
    [
      n ? Mm(n, o || 'rgb(0, 0, 0, 0.8)', r, i) : t && Im(t, r, i),
      r.text && Am(e, r, i),
      r.redDot && Pm(r.badge)
    ],
    4
  );
}
function Im(e, t, n) {
  const { type: o, text: r } = t,
    { iconWidth: i } = n;
  return ei(
    'div',
    {
      class: 'uni-tabbar__icon' + (r ? ' uni-tabbar__icon__diff' : ''),
      style: { width: i, height: i }
    },
    ['midButton' !== o && ei('img', { src: yu(e) }, null, 8, ['src'])],
    6
  );
}
function Mm(e, t, n, o) {
  var r;
  const { type: i, text: s } = n,
    { iconWidth: a } = o,
    l = 'uni-tabbar__icon' + (s ? ' uni-tabbar__icon__diff' : ''),
    c = { width: a, height: a },
    u = { fontSize: (null == (r = n.iconfont) ? void 0 : r.fontSize) || a, color: t };
  return ei(
    'div',
    { class: l, style: c },
    ['midButton' !== i && ei('div', { class: 'uni-tabbar__iconfont', style: u }, [e], 4)],
    6
  );
}
function Am(e, t, n) {
  const { iconPath: o, text: r } = t,
    { fontSize: i, spacing: s } = n;
  return ei(
    'div',
    {
      class: 'uni-tabbar__label',
      style: { color: e, fontSize: i, lineHeight: o ? 'normal' : 1.8, marginTop: o ? s : 'inherit' }
    },
    [r],
    4
  );
}
function Pm(e) {
  return ei('div', { class: 'uni-tabbar__reddot' + (e ? ' uni-tabbar__badge' : '') }, [e], 2);
}
const Bm = iu({
  name: 'Layout',
  setup(e, { emit: t }) {
    const n = an(null);
    cc({
      '--status-bar-height': '0px',
      '--top-window-height': '0px',
      '--window-left': '0px',
      '--window-right': '0px',
      '--window-margin': '0px',
      '--tab-bar-height': '0px'
    });
    const o = (function () {
        const e = vl();
        return {
          routeKey: wi(() => Eh('/' + e.meta.route, uh())),
          isTabBar: wi(() => e.meta.isTabBar),
          routeCache: Lh
        };
      })(),
      { layoutState: r, windowState: i } = (function () {
        ch();
        {
          const e = Ut({ marginWidth: 0, leftWindowWidth: 0, rightWindowWidth: 0 });
          return (
            Jn(
              () => e.marginWidth,
              (e) => cc({ '--window-margin': e + 'px' })
            ),
            Jn(
              () => e.leftWindowWidth + e.marginWidth,
              (e) => {
                cc({ '--window-left': e + 'px' });
              }
            ),
            Jn(
              () => e.rightWindowWidth + e.marginWidth,
              (e) => {
                cc({ '--window-right': e + 'px' });
              }
            ),
            { layoutState: e, windowState: wi(() => ({})) }
          );
        }
      })();
    !(function (e, t) {
      const n = ch();
      function o() {
        const o = document.body.clientWidth,
          r = xh();
        let i = {};
        if (r.length > 0) {
          i = r[r.length - 1].$page.meta;
        } else {
          const e = Mc(n.path, !0);
          e && (i = e.meta);
        }
        const s = parseInt(
          String(
            (f(i, 'maxWidth') ? i.maxWidth : __uniConfig.globalStyle.maxWidth) ||
              Number.MAX_SAFE_INTEGER
          )
        );
        let a = !1;
        (a = o > s),
          a && s
            ? ((e.marginWidth = (o - s) / 2),
              On(() => {
                const e = t.value;
                e && e.setAttribute('style', 'max-width:' + s + 'px;margin:0 auto;');
              }))
            : ((e.marginWidth = 0),
              On(() => {
                const e = t.value;
                e && e.removeAttribute('style');
              }));
      }
      Jn([() => n.path], o),
        Bo(() => {
          o(), window.addEventListener('resize', o);
        });
    })(r, n);
    const s = (function (e) {
        const t = ch(),
          n = fh(),
          o = wi(() => t.meta.isTabBar && n.shown);
        return cc({ '--tab-bar-height': n.height }), o;
      })(),
      a = (function (e) {
        const t = an(!1);
        return wi(() => ({ 'uni-app--showtabbar': e && e.value, 'uni-app--maxwidth': t.value }));
      })(s);
    return () => {
      const e = (function (e, t, n, o, r, i) {
          return (function ({ routeKey: e, isTabBar: t, routeCache: n }) {
            return ei(hl, null, {
              default: Wn(({ Component: o }) => [
                (Vr(),
                Xr(
                  wo,
                  { matchBy: 'key', cache: n },
                  [(Vr(), Xr(Yo(o), { type: t.value ? 'tabBar' : '', key: e.value }))],
                  1032,
                  ['cache']
                ))
              ]),
              _: 1
            });
          })(e);
        })(o),
        t = (function (e) {
          return Ho(ei(Em, null, null, 512), [[Ss, e.value]]);
        })(s);
      return ei('uni-app', { ref: n, class: a.value }, [e, t], 2);
    };
  }
});
const Rm = c(Rl, {
    publishHandler(e, t, n) {
      Nm.subscribeHandler(e, t, n);
    }
  }),
  Nm = c(zc, {
    publishHandler(e, t, n) {
      Rm.subscribeHandler(e, t, n);
    }
  }),
  Fm = iu({
    name: 'PageHead',
    setup() {
      const e = an(null),
        t = ah(),
        n = em(t.navigationBar, () => {
          const e = Jg(t.navigationBar);
          (n.backgroundColor = e.backgroundColor), (n.titleColor = e.titleColor);
        }),
        { clazz: o, style: r } = (function (e) {
          const t = wi(() => {
              const { type: t, titlePenetrate: n, shadowColorType: o } = e,
                r = {
                  'uni-page-head': !0,
                  'uni-page-head-transparent': 'transparent' === t,
                  'uni-page-head-titlePenetrate': 'YES' === n,
                  'uni-page-head-shadow': !!o
                };
              return o && (r[`uni-page-head-shadow-${o}`] = !0), r;
            }),
            n = wi(() => ({
              backgroundColor: e.backgroundColor,
              color: e.titleColor,
              transitionDuration: e.duration,
              transitionTimingFunction: e.timingFunc
            }));
          return { clazz: t, style: n };
        })(n);
      return () => {
        const i = (function (e, t) {
            if (!t)
              return ei(
                'div',
                { class: 'uni-page-head-btn', onClick: jm },
                [vc(mc, 'transparent' === e.type ? '#fff' : e.titleColor, 26)],
                8,
                ['onClick']
              );
          })(n, t.isQuit),
          s = n.type || 'default',
          a =
            'transparent' !== s &&
            'float' !== s &&
            ei(
              'div',
              {
                class: { 'uni-placeholder': !0, 'uni-placeholder-titlePenetrate': n.titlePenetrate }
              },
              null,
              2
            );
        return ei(
          'uni-page-head',
          { 'uni-page-head-type': s },
          [
            ei(
              'div',
              { ref: e, class: o.value, style: r.value },
              [
                ei('div', { class: 'uni-page-head-hd' }, [i]),
                Dm(n),
                ei('div', { class: 'uni-page-head-ft' }, [])
              ],
              6
            ),
            a
          ],
          8,
          ['uni-page-head-type']
        );
      };
    }
  });
function Dm(e, t) {
  return (function ({ type: e, loading: t, titleSize: n, titleText: o, titleImage: r }) {
    return ei('div', { class: 'uni-page-head-bd' }, [
      ei(
        'div',
        {
          style: { fontSize: n, opacity: 'transparent' === e ? 0 : 1 },
          class: 'uni-page-head__title'
        },
        [
          t
            ? ei('i', { class: 'uni-loading' }, null)
            : r
            ? ei('img', { src: r, class: 'uni-page-head__title_image' }, null, 8, ['src'])
            : o
        ],
        4
      )
    ]);
  })(e);
}
function jm() {
  1 === xh().length ? Yg({ url: '/' }) : Hg({ from: 'backbutton', success() {} });
}
const qm = iu({
    name: 'PageBody',
    setup: (e, t) => () =>
      ei(Rr, null, [
        !1,
        ei('uni-page-wrapper', null, [ei('uni-page-body', null, [Qo(t.slots, 'default')])], 16)
      ])
  }),
  Vm = iu({
    name: 'Page',
    setup(e, t) {
      const n = lh(uh()),
        o = n.navigationBar;
      return (
        Tm(n),
        () =>
          ei('uni-page', { 'data-page': n.route }, 'custom' !== o.style ? [ei(Fm), Wm(t)] : [Wm(t)])
      );
    }
  });
function Wm(e) {
  return Vr(), Xr(qm, { key: 0 }, { default: Wn(() => [Qo(e.slots, 'page')]), _: 3 });
}
const Hm = {
  loading: 'AsyncLoading',
  error: 'AsyncError',
  delay: 200,
  timeout: 6e4,
  suspensible: !0
};
(window.uni = {}), (window.wx = {}), (window.rpx2px = md);
const zm = Object.assign({}),
  Um = Object.assign;
(window.__uniConfig = Um(
  {
    globalStyle: {
      backgroundColor: '#F8F8F8',
      navigationBar: {
        backgroundColor: '#fff',
        titleText: '虾米壁纸',
        type: 'default',
        titleColor: '#000000'
      },
      isNVue: !1
    },
    tabBar: {
      position: 'bottom',
      color: '#9799a5',
      selectedColor: '#28b389',
      borderStyle: 'black',
      blurEffect: 'none',
      fontSize: '10px',
      iconWidth: '24px',
      spacing: '3px',
      height: '50px',
      list: [
        {
          text: '推荐',
          pagePath: 'pages/index/index',
          iconPath: '/static/images/tabBar/home.png',
          selectedIconPath: '/static/images/tabBar/home-h.png'
        },
        {
          text: '分类',
          pagePath: 'pages/classify/classify',
          iconPath: '/static/images/tabBar/classify.png',
          selectedIconPath: '/static/images/tabBar/classify-h.png'
        },
        {
          text: '我的',
          pagePath: 'pages/ucenter/ucenter',
          iconPath: '/static/images/tabBar/user.png',
          selectedIconPath: '/static/images/tabBar/user-h.png'
        }
      ],
      selectedIndex: 0,
      shown: !0
    },
    uniIdRouter: {},
    compilerVersion: '4.06'
  },
  {
    appId: '__UNI__78DFBB1',
    appName: '天天美T',
    appVersion: '1.0.0',
    appVersionCode: '100',
    async: Hm,
    debug: !1,
    networkTimeout: { request: 6e4, connectSocket: 6e4, uploadFile: 6e4, downloadFile: 6e4 },
    sdkConfigs: {},
    qqMapKey: void 0,
    bMapKey: void 0,
    googleMapKey: void 0,
    aMapKey: void 0,
    aMapSecurityJsCode: void 0,
    aMapServiceHost: void 0,
    nvue: { 'flex-direction': 'column' },
    locale: '',
    fallbackLocale: '',
    locales: Object.keys(zm).reduce((e, t) => {
      const n = t.replace(/\.\/locale\/(uni-app.)?(.*).json/, '$2');
      return Um(e[n] || (e[n] = {}), zm[t].default), e;
    }, {}),
    router: { mode: 'hash', base: '/tjmtwall/', assets: 'assets', routerBase: '/tjmtwall/' },
    darkmode: !1,
    themeConfig: {}
  }
)),
  (window.__uniLayout = window.__uniLayout || {});
const Xm = { delay: Hm.delay, timeout: Hm.timeout, suspensible: Hm.suspensible };
Hm.loading &&
  (Xm.loadingComponent = { name: 'SystemAsyncLoading', render: () => ei(Uo(Hm.loading)) }),
  Hm.error && (Xm.errorComponent = { name: 'SystemAsyncError', render: () => ei(Uo(Hm.error)) });
const Ym = () =>
    t(
      () => import('./pages-index-index.91df4dfd.js'),
      [
        'assets/pages-index-index.91df4dfd.js',
        'assets/theme-item.c793d3a7.js',
        'assets/uni-icons.a682567a.js',
        'assets/plugin-vue_export-helper.1b428a4d.js',
        'assets/uni-icons-52c6c83c.css',
        'assets/apis.a01c4925.js',
        'assets/system.7e8a80c4.js',
        'assets/uni-dateformat.6bd0553d.js',
        'assets/theme-item-5a96e766.css',
        'assets/index-c9219fc9.css'
      ]
    ).then((e) => Gh(e.default || e)),
  Km = mo(Um({ loader: Ym }, Xm)),
  Gm = () =>
    t(
      () => import('./pages-classify-classify.010bec23.js'),
      [
        'assets/pages-classify-classify.010bec23.js',
        'assets/theme-item.c793d3a7.js',
        'assets/uni-icons.a682567a.js',
        'assets/plugin-vue_export-helper.1b428a4d.js',
        'assets/uni-icons-52c6c83c.css',
        'assets/apis.a01c4925.js',
        'assets/system.7e8a80c4.js',
        'assets/uni-dateformat.6bd0553d.js',
        'assets/theme-item-5a96e766.css',
        'assets/uv-skeletons.aada4798.js',
        'assets/uv-skeletons-02ba9dd4.css',
        'assets/classify-a5c69c36.css'
      ]
    ).then((e) => Gh(e.default || e)),
  Zm = mo(Um({ loader: Gm }, Xm)),
  Qm = () =>
    t(
      () => import('./pages-shop-shop.c4a725d6.js'),
      ['assets/pages-shop-shop.c4a725d6.js', 'assets/plugin-vue_export-helper.1b428a4d.js']
    ).then((e) => Gh(e.default || e)),
  Jm = mo(Um({ loader: Qm }, Xm)),
  ev = () =>
    t(
      () => import('./pages-order-order.fef08cb8.js'),
      ['assets/pages-order-order.fef08cb8.js', 'assets/plugin-vue_export-helper.1b428a4d.js']
    ).then((e) => Gh(e.default || e)),
  tv = mo(Um({ loader: ev }, Xm)),
  nv = () =>
    t(
      () => import('./pages-ucenter-ucenter.caa1354f.js'),
      [
        'assets/pages-ucenter-ucenter.caa1354f.js',
        'assets/uv-skeletons.aada4798.js',
        'assets/plugin-vue_export-helper.1b428a4d.js',
        'assets/uv-skeletons-02ba9dd4.css',
        'assets/apis.a01c4925.js',
        'assets/uni-icons.a682567a.js',
        'assets/uni-icons-52c6c83c.css',
        'assets/system.7e8a80c4.js',
        'assets/ucenter-aa55dab6.css'
      ]
    ).then((e) => Gh(e.default || e)),
  ov = mo(Um({ loader: nv }, Xm)),
  rv = () =>
    t(
      () => import('./pages-classlist-classlist.9c2e92f1.js'),
      [
        'assets/pages-classlist-classlist.9c2e92f1.js',
        'assets/uv-skeletons.aada4798.js',
        'assets/plugin-vue_export-helper.1b428a4d.js',
        'assets/uv-skeletons-02ba9dd4.css',
        'assets/apis.a01c4925.js',
        'assets/z-paging.c1d847ad.js',
        'assets/z-paging-e90c0b77.css',
        'assets/classlist-bcdbfa11.css'
      ]
    ).then((e) => Gh(e.default || e)),
  iv = mo(Um({ loader: rv }, Xm)),
  sv = () =>
    t(
      () => import('./pages-preview-preview.a5372d97.js'),
      [
        'assets/pages-preview-preview.a5372d97.js',
        'assets/uni-icons.a682567a.js',
        'assets/plugin-vue_export-helper.1b428a4d.js',
        'assets/uni-icons-52c6c83c.css',
        'assets/apis.a01c4925.js',
        'assets/uni-dateformat.6bd0553d.js',
        'assets/system.7e8a80c4.js',
        'assets/preview-a93bc02a.css'
      ]
    ).then((e) => Gh(e.default || e)),
  av = mo(Um({ loader: sv }, Xm)),
  lv = () =>
    t(
      () => import('./pages-notice-notice.bc1ecf71.js'),
      ['assets/pages-notice-notice.bc1ecf71.js', 'assets/plugin-vue_export-helper.1b428a4d.js']
    ).then((e) => Gh(e.default || e)),
  cv = mo(Um({ loader: lv }, Xm)),
  uv = () =>
    t(
      () => import('./pages-notice-detail.d61dff50.js'),
      [
        'assets/pages-notice-detail.d61dff50.js',
        'assets/plugin-vue_export-helper.1b428a4d.js',
        'assets/apis.a01c4925.js',
        'assets/uni-dateformat.6bd0553d.js',
        'assets/detail-f0a5c7b4.css'
      ]
    ).then((e) => Gh(e.default || e)),
  dv = mo(Um({ loader: uv }, Xm)),
  fv = () =>
    t(
      () => import('./pages-search-search.4894d502.js'),
      [
        'assets/pages-search-search.4894d502.js',
        'assets/uv-skeletons.aada4798.js',
        'assets/plugin-vue_export-helper.1b428a4d.js',
        'assets/uv-skeletons-02ba9dd4.css',
        'assets/apis.a01c4925.js',
        'assets/z-paging.c1d847ad.js',
        'assets/z-paging-e90c0b77.css',
        'assets/uni-icons.a682567a.js',
        'assets/uni-icons-52c6c83c.css',
        'assets/search-ed28c7ae.css'
      ]
    ).then((e) => Gh(e.default || e)),
  pv = mo(Um({ loader: fv }, Xm));
function hv(e, t) {
  return (
    Vr(), Xr(Vm, null, { page: Wn(() => [ei(e, Um({}, t, { ref: 'page' }), null, 512)]), _: 1 })
  );
}
window.__uniRoutes = [
  {
    path: '/',
    alias: '/pages/index/index',
    component: {
      setup() {
        const e = Uh(),
          t = (e && e.$route && e.$route.query) || {};
        return () => hv(Km, t);
      }
    },
    loader: Ym,
    meta: {
      isQuit: !0,
      isEntry: !0,
      isTabBar: !0,
      tabBarIndex: 0,
      navigationBar: { titleText: 'uni-app', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/classify/classify',
    component: {
      setup() {
        const e = Uh(),
          t = (e && e.$route && e.$route.query) || {};
        return () => hv(Zm, t);
      }
    },
    loader: Gm,
    meta: {
      isQuit: !0,
      isTabBar: !0,
      tabBarIndex: 1,
      enablePullDownRefresh: !1,
      navigationBar: { titleText: '分类', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/shop/shop',
    component: {
      setup() {
        const e = Uh(),
          t = (e && e.$route && e.$route.query) || {};
        return () => hv(Jm, t);
      }
    },
    loader: Qm,
    meta: {
      enablePullDownRefresh: !1,
      navigationBar: { titleText: '店铺', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/order/order',
    component: {
      setup() {
        const e = Uh(),
          t = (e && e.$route && e.$route.query) || {};
        return () => hv(tv, t);
      }
    },
    loader: ev,
    meta: {
      enablePullDownRefresh: !1,
      navigationBar: { titleText: '订单', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/ucenter/ucenter',
    component: {
      setup() {
        const e = Uh(),
          t = (e && e.$route && e.$route.query) || {};
        return () => hv(ov, t);
      }
    },
    loader: nv,
    meta: {
      isQuit: !0,
      isTabBar: !0,
      tabBarIndex: 2,
      enablePullDownRefresh: !1,
      navigationBar: { titleText: '我的', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/classlist/classlist',
    component: {
      setup() {
        const e = Uh(),
          t = (e && e.$route && e.$route.query) || {};
        return () => hv(iv, t);
      }
    },
    loader: rv,
    meta: {
      enablePullDownRefresh: !1,
      navigationBar: { titleText: '分类列表', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/preview/preview',
    component: {
      setup() {
        const e = Uh(),
          t = (e && e.$route && e.$route.query) || {};
        return () => hv(av, t);
      }
    },
    loader: sv,
    meta: {
      enablePullDownRefresh: !1,
      navigationBar: { titleText: '壁纸预览', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/notice/notice',
    component: {
      setup() {
        const e = Uh(),
          t = (e && e.$route && e.$route.query) || {};
        return () => hv(cv, t);
      }
    },
    loader: lv,
    meta: {
      enablePullDownRefresh: !1,
      navigationBar: { titleText: '公告', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/notice/detail',
    component: {
      setup() {
        const e = Uh(),
          t = (e && e.$route && e.$route.query) || {};
        return () => hv(dv, t);
      }
    },
    loader: uv,
    meta: {
      enablePullDownRefresh: !1,
      navigationBar: { titleText: '公告详情', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/search/search',
    component: {
      setup() {
        const e = Uh(),
          t = (e && e.$route && e.$route.query) || {};
        return () => hv(pv, t);
      }
    },
    loader: fv,
    meta: {
      enablePullDownRefresh: !1,
      navigationBar: { titleText: '搜索', type: 'default' },
      isNVue: !1
    }
  }
].map((e) => ((e.meta.route = (e.alias || e.path).slice(1)), e));
const gv = {
  onLaunch: function () {
    console.log('App Launch');
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  }
};
Kh(gv, {
  init: Xh,
  setup(e) {
    const t = ch(),
      n = () => {
        var n;
        (n = e),
          Object.keys(Gd).forEach((e) => {
            Gd[e].forEach((t) => {
              Mo(e, t, n);
            });
          });
        const { onLaunch: o, onShow: r, onPageNotFound: i, onError: s } = e,
          a = (function ({ path: e, query: t }) {
            return c(wf, { path: e, query: t }), c(xf, wf), c({}, wf);
          })({ path: t.path.slice(1) || __uniRoutes[0].meta.route, query: Se(t.query) });
        if ((o && B(o, a), r && B(r, a), !t.matched.length)) {
          const e = { notFound: !0, openType: 'appLaunch', path: t.path, query: {}, scene: 1001 };
          i && B(i, e);
        }
        s &&
          (e.appContext.config.errorHandler = (e) => {
            B(s, e);
          });
      };
    return (
      Gn(ol).isReady().then(n),
      Bo(() => {
        window.addEventListener(
          'resize',
          Ee(Zh, 50, { setTimeout: setTimeout, clearTimeout: clearTimeout })
        ),
          window.addEventListener('message', Qh),
          document.addEventListener('visibilitychange', Jh),
          (function () {
            let e = null;
            try {
              e = window.matchMedia('(prefers-color-scheme: dark)');
            } catch (t) {}
            if (e) {
              let t = (e) => {
                Nm.emit('onThemeChange', { theme: e.matches ? 'dark' : 'light' });
              };
              e.addEventListener ? e.addEventListener('change', t) : e.addListener(t);
            }
          })();
      }),
      t.query
    );
  },
  before(e) {
    e.mpType = 'app';
    const { setup: t } = e,
      n = () => (Vr(), Xr(Bm));
    (e.setup = (e, o) => {
      const r = t && t(e, o);
      return v(r) ? n : r;
    }),
      (e.render = n);
  }
}),
  Os(gv).use(Fh).mount('#app');
export {
  am as $,
  Wd as A,
  pe as B,
  Ts as C,
  Yd as D,
  Ho as E,
  Rr as F,
  Ss as G,
  Uo as H,
  vg as I,
  _g as J,
  sn as K,
  Hg as L,
  Yg as M,
  bm as N,
  _m as O,
  vm as P,
  jg as Q,
  Bd as R,
  qp as S,
  Td as T,
  Gg as U,
  rg as V,
  Np as W,
  Cm as X,
  Ns as Y,
  Sg as Z,
  op as _,
  ei as a,
  Tg as a0,
  wi as a1,
  md as a2,
  Uh as a3,
  Kd as a4,
  km as a5,
  yd as a6,
  bd as a7,
  xh as a8,
  Xg as a9,
  _d as aa,
  Mo as ab,
  fi as ac,
  ie as ad,
  se as ae,
  ae as af,
  le as ag,
  mi as ah,
  qg as ai,
  Ur as b,
  Xr as c,
  Zo as d,
  an as e,
  ni as f,
  Ug as g,
  Yo as h,
  Xp as i,
  Up as j,
  Dp as k,
  Mp as l,
  jf as m,
  fe as n,
  Vr as o,
  Wp as p,
  gu as q,
  Qo as r,
  yg as s,
  K as t,
  dn as u,
  oi as v,
  Wn as w,
  ig as x,
  Sm as y,
  wg as z
};
