var t, e;
import {
  d as $,
  i as S,
  a9 as a,
  B as b,
  L as c,
  o as d,
  aa as f,
  w as g,
  c as h,
  P as i,
  r as k,
  M as l,
  F as m,
  a2 as n,
  a8 as o,
  A as p,
  I as r,
  g as s,
  U as u,
  n as v,
  b as y
} from './index-1de63c67.js';
import { _ as w } from './plugin-vue_export-helper.1b428a4d.js';
const j = {};
function A(t) {
  return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(t);
}
function x(t) {
  switch (typeof t) {
    case 'undefined':
      return !0;
    case 'string':
      if (0 == t.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length) return !0;
      break;
    case 'boolean':
      if (!t) return !0;
      break;
    case 'number':
      if (0 === t || isNaN(t)) return !0;
      break;
    case 'object':
      if (null === t || 0 === t.length) return !0;
      for (const e in t) return !1;
      return !0;
  }
  return !1;
}
function _(t) {
  return 'function' == typeof Array.isArray
    ? Array.isArray(t)
    : '[object Array]' === Object.prototype.toString.call(t);
}
function O(t) {
  return '[object Object]' === Object.prototype.toString.call(t);
}
function M(t) {
  return 'function' == typeof t;
}
const P = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      amount: function (t) {
        return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(t);
      },
      array: _,
      carNo: function (t) {
        const e =
            /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/,
          n =
            /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
        return 7 === t.length ? n.test(t) : 8 === t.length && e.test(t);
      },
      chinese: function (t) {
        return /^[\u4e00-\u9fa5]+$/gi.test(t);
      },
      code: function (t, e = 6) {
        return new RegExp(`^\\d{${e}}$`).test(t);
      },
      contains: function (t, e) {
        return t.indexOf(e) >= 0;
      },
      date: function (t) {
        return !!t && (A(t) && (t = +t), !/Invalid|NaN/.test(new Date(t).toString()));
      },
      dateISO: function (t) {
        return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t);
      },
      digits: function (t) {
        return /^\d+$/.test(t);
      },
      email: function (t) {
        return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(t);
      },
      empty: x,
      enOrNum: function (t) {
        return /^[0-9a-zA-Z]*$/g.test(t);
      },
      func: M,
      idCard: function (t) {
        return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(t);
      },
      image: function (t) {
        const e = t.split('?')[0];
        return /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i.test(e);
      },
      jsonString: function (t) {
        if ('string' == typeof t)
          try {
            const e = JSON.parse(t);
            return !('object' != typeof e || !e);
          } catch (e) {
            return !1;
          }
        return !1;
      },
      landline: function (t) {
        return /^\d{3,4}-\d{7,8}(-\d{3,4})?$/.test(t);
      },
      letter: function (t) {
        return /^[a-zA-Z]*$/.test(t);
      },
      mobile: function (t) {
        return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(t);
      },
      number: A,
      object: O,
      promise: function (t) {
        return O(t) && M(t.then) && M(t.catch);
      },
      range: function (t, e) {
        return t >= e[0] && t <= e[1];
      },
      rangeLength: function (t, e) {
        return t.length >= e[0] && t.length <= e[1];
      },
      regExp: function (t) {
        return t && '[object RegExp]' === Object.prototype.toString.call(t);
      },
      string: function (t) {
        return 'string' == typeof t;
      },
      url: function (t) {
        return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(
          t
        );
      },
      video: function (t) {
        return /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i.test(t);
      }
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function E(t, e = 15) {
  return +parseFloat(Number(t).toPrecision(e));
}
function T(t) {
  const e = t.toString().split(/[eE]/),
    n = (e[0].split('.')[1] || '').length - +(e[1] || 0);
  return n > 0 ? n : 0;
}
function D(t) {
  if (-1 === t.toString().indexOf('e')) return Number(t.toString().replace('.', ''));
  const e = T(t);
  return e > 0 ? E(Number(t) * Math.pow(10, e)) : Number(t);
}
function N(t) {
  (t > Number.MAX_SAFE_INTEGER || t < Number.MIN_SAFE_INTEGER) &&
    console.warn(`${t} 超出了精度限制，结果可能不正确`);
}
function I(t, e) {
  const [n, r, ...i] = t;
  let o = e(n, r);
  return (
    i.forEach((t) => {
      o = e(o, t);
    }),
    o
  );
}
function Z(...t) {
  if (t.length > 2) return I(t, Z);
  const [e, n] = t,
    r = D(e),
    i = D(n),
    o = T(e) + T(n),
    s = r * i;
  return N(s), s / Math.pow(10, o);
}
function R(...t) {
  if (t.length > 2) return I(t, R);
  const [e, n] = t,
    r = D(e),
    i = D(n);
  return N(r), N(i), Z(r / i, E(Math.pow(10, T(n) - T(e))));
}
function z(t) {
  let e = this.$parent;
  for (; e; ) {
    if (!e.$options || e.$options.name === t) return e;
    e = e.$parent;
  }
  return !1;
}
function C(t, e = new WeakMap()) {
  if (null === t || 'object' != typeof t) return t;
  if (e.has(t)) return e.get(t);
  let n;
  if (t instanceof Date) n = new Date(t.getTime());
  else if (t instanceof RegExp) n = new RegExp(t);
  else if (t instanceof Map) n = new Map(Array.from(t, ([t, n]) => [t, C(n, e)]));
  else if (t instanceof Set) n = new Set(Array.from(t, (t) => C(t, e)));
  else if (Array.isArray(t)) n = t.map((t) => C(t, e));
  else if ('[object Object]' === Object.prototype.toString.call(t)) {
    (n = Object.create(Object.getPrototypeOf(t))), e.set(t, n);
    for (const [r, i] of Object.entries(t)) n[r] = C(i, e);
  } else n = Object.assign({}, t);
  return e.set(t, n), n;
}
function F(t = {}, e = {}) {
  if ('object' != typeof (t = C(t)) || null === t || 'object' != typeof e || null === e) return t;
  const n = Array.isArray(t) ? t.slice() : Object.assign({}, t);
  for (const r in e) {
    if (!e.hasOwnProperty(r)) continue;
    const t = e[r],
      i = n[r];
    t instanceof Date
      ? (n[r] = new Date(t))
      : t instanceof RegExp
      ? (n[r] = new RegExp(t))
      : t instanceof Map
      ? (n[r] = new Map(t))
      : t instanceof Set
      ? (n[r] = new Set(t))
      : (n[r] = 'object' == typeof t && null !== t ? F(i, t) : t);
  }
  return n;
}
function B(t = null, e = 'yyyy-mm-dd') {
  let n;
  n = t
    ? /^\d{10}$/.test(null == t ? void 0 : t.toString().trim())
      ? new Date(1e3 * t)
      : 'string' == typeof t && /^\d+$/.test(t.trim())
      ? new Date(Number(t))
      : 'string' == typeof t && t.includes('-') && !t.includes('T')
      ? new Date(t.replace(/-/g, '/'))
      : new Date(t)
    : new Date();
  const r = {
    y: n.getFullYear().toString(),
    m: (n.getMonth() + 1).toString().padStart(2, '0'),
    d: n.getDate().toString().padStart(2, '0'),
    h: n.getHours().toString().padStart(2, '0'),
    M: n.getMinutes().toString().padStart(2, '0'),
    s: n.getSeconds().toString().padStart(2, '0')
  };
  for (const i in r) {
    const [t] = new RegExp(`${i}+`).exec(e) || [];
    if (t) {
      const n = 'y' === i && 2 === t.length ? 2 : 0;
      e = e.replace(t, r[i].slice(n));
    }
  }
  return e;
}
function L(t, e = 'both') {
  return (
    (t = String(t)),
    'both' == e
      ? t.replace(/^\s+|\s+$/g, '')
      : 'left' == e
      ? t.replace(/^\s*/, '')
      : 'right' == e
      ? t.replace(/(\s*$)/g, '')
      : 'all' == e
      ? t.replace(/\s+/g, '')
      : t
  );
}
function G(t = {}, e = !0, n = 'brackets') {
  const r = e ? '?' : '',
    i = [];
  -1 == ['indices', 'brackets', 'repeat', 'comma'].indexOf(n) && (n = 'brackets');
  for (const o in t) {
    const e = t[o];
    if (!(['', void 0, null].indexOf(e) >= 0))
      if (e.constructor === Array)
        switch (n) {
          case 'indices':
            for (let n = 0; n < e.length; n++) i.push(`${o}[${n}]=${e[n]}`);
            break;
          case 'brackets':
          default:
            e.forEach((t) => {
              i.push(`${o}[]=${t}`);
            });
            break;
          case 'repeat':
            e.forEach((t) => {
              i.push(`${o}=${t}`);
            });
            break;
          case 'comma':
            let t = '';
            e.forEach((e) => {
              t += (t ? ',' : '') + e;
            }),
              i.push(`${o}=${t}`);
        }
      else i.push(`${o}=${e}`);
  }
  return i.length ? r + i.join('&') : '';
}
function H() {
  var t;
  const e = o(),
    n = null == (t = e[e.length - 1]) ? void 0 : t.route;
  return `/${n || ''}`;
}
String.prototype.padStart ||
  (String.prototype.padStart = function (t, e = ' ') {
    if ('[object String]' !== Object.prototype.toString.call(e))
      throw new TypeError('fillString must be String');
    const n = this;
    if (n.length >= t) return String(n);
    const r = t - n.length;
    let i = Math.ceil(r / e.length);
    for (; (i >>= 1); ) (e += e), 1 === i && (e += e);
    return e.slice(0, r) + n;
  });
const J = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      $parent: z,
      addStyle: function (t, e = 'object') {
        if (
          x(t) ||
          ('object' == typeof t && 'object' === e) ||
          ('string' === e && 'string' == typeof t)
        )
          return t;
        if ('object' === e) {
          const e = (t = L(t)).split(';'),
            n = {};
          for (let t = 0; t < e.length; t++)
            if (e[t]) {
              const r = e[t].split(':');
              n[L(r[0])] = L(r[1]);
            }
          return n;
        }
        let n = '';
        for (const r in t) {
          n += `${r.replace(/([A-Z])/g, '-$1').toLowerCase()}:${t[r]};`;
        }
        return L(n);
      },
      addUnit: function (
        t = 'auto',
        e = ((t) => {
          return null == (t = null == (e = null == uni ? void 0 : uni.$uv) ? void 0 : e.config)
            ? void 0
            : t.unit;
          var e;
        })()
          ? ((t) => {
              return null == (t = null == (e = null == uni ? void 0 : uni.$uv) ? void 0 : e.config)
                ? void 0
                : t.unit;
              var e;
            })()
          : 'px'
      ) {
        return A((t = String(t))) ? `${t}${e}` : t;
      },
      deepClone: C,
      deepMerge: F,
      error: function (t) {},
      formValidate: function (t, e) {
        const n = z.call(t, 'uv-form-item'),
          r = z.call(t, 'uv-form');
        n && r && r.validateField(n.prop, () => {}, e);
      },
      getDuration: function (t, e = !0) {
        const n = parseInt(t);
        return e
          ? /s$/.test(t)
            ? t
            : t > 30
            ? `${t}ms`
            : `${t}s`
          : /ms$/.test(t)
          ? n
          : /s$/.test(t)
          ? n > 30
            ? n
            : 1e3 * n
          : n;
      },
      getHistoryPage: function (t = 0) {
        const e = o();
        return e[e.length - 1 + t];
      },
      getProperty: function (t, e) {
        if (t) {
          if ('string' != typeof e || '' === e) return '';
          if (-1 !== e.indexOf('.')) {
            const n = e.split('.');
            let r = t[n[0]] || {};
            for (let t = 1; t < n.length; t++) r && (r = r[n[t]]);
            return r;
          }
          return t[e];
        }
      },
      getPx: function (t, e = !1) {
        return A(t)
          ? e
            ? `${t}px`
            : Number(t)
          : /(rpx|upx)$/.test(t)
          ? e
            ? `${n(parseInt(t))}px`
            : Number(n(parseInt(t)))
          : e
          ? `${parseInt(t)}px`
          : parseInt(t);
      },
      guid: function (t = 32, e = !0, n = null) {
        const r = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),
          i = [];
        if (((n = n || r.length), t)) for (let o = 0; o < t; o++) i[o] = r[0 | (Math.random() * n)];
        else {
          let t;
          (i[8] = i[13] = i[18] = i[23] = '-'), (i[14] = '4');
          for (let e = 0; e < 36; e++)
            i[e] || ((t = 0 | (16 * Math.random())), (i[e] = r[19 == e ? (3 & t) | 8 : t]));
        }
        return e ? (i.shift(), `u${i.join('')}`) : i.join('');
      },
      os: function () {
        return r().platform.toLowerCase();
      },
      padZero: function (t) {
        return `00${t}`.slice(-2);
      },
      page: H,
      pages: function () {
        return o();
      },
      priceFormat: function (t, e = 0, n = '.', r = ',') {
        t = `${t}`.replace(/[^0-9+-Ee.]/g, '');
        const i = isFinite(+t) ? +t : 0,
          o = isFinite(+e) ? Math.abs(e) : 0,
          s = void 0 === r ? ',' : r,
          a = void 0 === n ? '.' : n;
        let u = '';
        u = (
          o
            ? (function (t, e) {
                const n = Math.pow(10, e);
                let r = R(Math.round(Math.abs(Z(t, n))), n);
                return t < 0 && 0 !== r && (r = Z(r, -1)), r;
              })(i, o) + ''
            : `${Math.round(i)}`
        ).split('.');
        const l = /(-?\d+)(\d{3})/;
        for (; l.test(u[0]); ) u[0] = u[0].replace(l, `$1${s}$2`);
        return (
          (u[1] || '').length < o &&
            ((u[1] = u[1] || ''), (u[1] += new Array(o - u[1].length + 1).join('0'))),
          u.join(a)
        );
      },
      queryParams: G,
      random: function (t, e) {
        if (t >= 0 && e > 0 && e >= t) {
          const n = e - t + 1;
          return Math.floor(Math.random() * n + t);
        }
        return 0;
      },
      randomArray: function (t = []) {
        return t.sort(() => Math.random() - 0.5);
      },
      range: function (t = 0, e = 0, n = 0) {
        return Math.max(t, Math.min(e, Number(n)));
      },
      setConfig: function ({ props: t = {}, config: e = {}, color: n = {}, zIndex: r = {} }) {
        const { deepMerge: i } = uni.$uv;
        (uni.$uv.config = i(uni.$uv.config, e)),
          (uni.$uv.props = i(uni.$uv.props, t)),
          (uni.$uv.color = i(uni.$uv.color, n)),
          (uni.$uv.zIndex = i(uni.$uv.zIndex, r));
      },
      setProperty: function (t, e, n) {
        if (!t) return;
        const r = function (t, e, n) {
          if (1 !== e.length)
            for (; e.length > 1; ) {
              const i = e[0];
              (t[i] && 'object' == typeof t[i]) || (t[i] = {}), e.shift(), r(t[i], e, n);
            }
          else t[e[0]] = n;
        };
        if ('string' != typeof e || '' === e);
        else if (-1 !== e.indexOf('.')) {
          const i = e.split('.');
          r(t, i, n);
        } else t[e] = n;
      },
      sleep: function (t = 30) {
        return new Promise((e) => {
          setTimeout(() => {
            e();
          }, t);
        });
      },
      sys: function () {
        return r();
      },
      timeFormat: B,
      timeFrom: function (t = null, e = 'yyyy-mm-dd') {
        null == t && (t = Number(new Date())),
          10 == (t = parseInt(t)).toString().length && (t *= 1e3);
        let n = new Date().getTime() - t;
        n = parseInt(n / 1e3);
        let r = '';
        switch (!0) {
          case n < 300:
            r = '刚刚';
            break;
          case n >= 300 && n < 3600:
            r = `${parseInt(n / 60)}分钟前`;
            break;
          case n >= 3600 && n < 86400:
            r = `${parseInt(n / 3600)}小时前`;
            break;
          case n >= 86400 && n < 2592e3:
            r = `${parseInt(n / 86400)}天前`;
            break;
          default:
            r =
              !1 === e
                ? n >= 2592e3 && n < 31536e3
                  ? `${parseInt(n / 2592e3)}个月前`
                  : `${parseInt(n / 31536e3)}年前`
                : B(t, e);
        }
        return r;
      },
      toast: function (t, e = 2e3) {
        i({ title: String(t), icon: 'none', duration: e });
      },
      trim: L,
      type2icon: function (t = 'success', e = !1) {
        -1 == ['primary', 'info', 'error', 'warning', 'success'].indexOf(t) && (t = 'success');
        let n = '';
        switch (t) {
          case 'primary':
          case 'info':
            n = 'info-circle';
            break;
          case 'error':
            n = 'close-circle';
            break;
          case 'warning':
            n = 'error-circle';
            break;
          default:
            n = 'checkmark-circle';
        }
        return e && (n += '-fill'), n;
      }
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
const U = new (class {
  constructor() {
    (this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1,
      params: {},
      animationType: 'pop-in',
      animationDuration: 300,
      intercept: !1,
      events: {}
    }),
      (this.route = this.route.bind(this));
  }
  addRootPath(t) {
    return '/' === t[0] ? t : `/${t}`;
  }
  mixinParam(t, e) {
    t = t && this.addRootPath(t);
    let n = '';
    return /.*\/.*\?.*=.*/.test(t) ? ((n = G(e, !1)), t + `&${n}`) : ((n = G(e)), t + n);
  }
  async route(t = {}, e = {}) {
    let n = {};
    if (
      ('string' == typeof t
        ? ((n.url = this.mixinParam(t, e)), (n.type = 'navigateTo'))
        : ((n = F(this.config, t)), (n.url = this.mixinParam(t.url, t.params))),
      n.url !== H())
    )
      if (
        (e.intercept && (n.intercept = e.intercept),
        (n.params = e),
        (n = F(this.config, n)),
        'function' == typeof n.intercept)
      ) {
        (await new Promise((t, e) => {
          n.intercept(n, t);
        })) && this.openPage(n);
      } else this.openPage(n);
  }
  openPage(t) {
    const { url: e, type: n, delta: r, animationType: i, animationDuration: o, events: p } = t;
    ('navigateTo' != t.type && 'to' != t.type) ||
      s({ url: e, animationType: i, animationDuration: o, events: p }),
      ('redirectTo' != t.type && 'redirect' != t.type) || a({ url: e }),
      ('switchTab' != t.type && 'tab' != t.type) || u({ url: e }),
      ('reLaunch' != t.type && 'launch' != t.type) || l({ url: e }),
      ('navigateBack' != t.type && 'back' != t.type) || c({ delta: r });
  }
})().route;
let X,
  q = null;
function V(t, e = 500, n = !1) {
  if ((null !== q && clearTimeout(q), n)) {
    const n = !q;
    (q = setTimeout(() => {
      q = null;
    }, e)),
      n && 'function' == typeof t && t();
  } else
    q = setTimeout(() => {
      'function' == typeof t && t();
    }, e);
}
function W(t, e = 500, n = !0) {
  n
    ? X ||
      ((X = !0),
      'function' == typeof t && t(),
      setTimeout(() => {
        X = !1;
      }, e))
    : X ||
      ((X = !0),
      setTimeout(() => {
        (X = !1), 'function' == typeof t && t();
      }, e));
}
const Y = {
  props: {
    customStyle: { type: [Object, String], default: () => ({}) },
    customClass: { type: String, default: '' },
    url: { type: String, default: '' },
    linkType: { type: String, default: 'navigateTo' }
  },
  data: () => ({}),
  onLoad() {
    this.$uv.getRect = this.$uvGetRect;
  },
  created() {
    this.$uv.getRect = this.$uvGetRect;
  },
  computed: {
    $uv() {
      var t, e;
      return {
        ...J,
        test: P,
        route: U,
        debounce: V,
        throttle: W,
        unit:
          null == (e = null == (t = null == uni ? void 0 : uni.$uv) ? void 0 : t.config)
            ? void 0
            : e.unit
      };
    },
    bem: () =>
      function (t, e, n) {
        const r = `uv-${t}--`,
          i = {};
        return (
          e &&
            e.map((t) => {
              i[r + this[t]] = !0;
            }),
          n &&
            n.map((t) => {
              this[t] ? (i[r + t] = this[t]) : delete i[r + t];
            }),
          Object.keys(i)
        );
      }
  },
  methods: {
    openPage(t = 'url') {
      const e = this[t];
      e && uni[this.linkType]({ url: e });
    },
    $uvGetRect(t, e) {
      return new Promise((n) => {
        p()
          .in(this)
          [e ? 'selectAll' : 'select'](t)
          .boundingClientRect((t) => {
            e && Array.isArray(t) && t.length && n(t), !e && t && n(t);
          })
          .exec();
      });
    },
    getParentData(t = '') {
      this.parent || (this.parent = {}),
        (this.parent = this.$uv.$parent.call(this, t)),
        this.parent.children &&
          -1 === this.parent.children.indexOf(this) &&
          this.parent.children.push(this),
        this.parent &&
          this.parentData &&
          Object.keys(this.parentData).map((t) => {
            this.parentData[t] = this.parent[t];
          });
    },
    preventEvent(t) {
      t && 'function' == typeof t.stopPropagation && t.stopPropagation();
    },
    noop(t) {
      this.preventEvent(t);
    }
  },
  onReachBottom() {
    f('uvOnReachBottom');
  },
  beforeDestroy() {
    if (this.parent && _(this.parent.children)) {
      const t = this.parent.children;
      t.map((e, n) => {
        e === this && t.splice(n, 1);
      });
    }
  },
  unmounted() {
    if (this.parent && _(this.parent.children)) {
      const t = this.parent.children;
      t.map((e, n) => {
        e === this && t.splice(n, 1);
      });
    }
  }
};
const K = w(
  {
    name: 'uv-skeletons',
    mixins: [j, Y],
    props: {
      loading: { type: Boolean, default: !0 },
      skeleton: { type: Array, default: () => [] },
      animate: { type: Boolean, default: !0 },
      round: { type: Boolean, default: !1 },
      ...(null == (e = null == (t = uni.$uv) ? void 0 : t.props) ? void 0 : e.skeleton)
    },
    data: () => ({ elements: [], opacity: 0.5, duration: 600 }),
    computed: {
      animateClass() {
        return this.animate ? 'uv-skeleton--animation' : 'uv-skeleton--static';
      },
      roundClass() {
        return this.round ? 'uv-skeleton--round' : 'uv-skeleton--radius';
      },
      style(t) {
        return (t) => this.$uv.deepMerge({}, this.$uv.addStyle(t.style));
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        let t = [];
        if (!this.$uv.test.array(this.skeleton))
          return this.$uv.error('skeleton参数必须为数组形式，参考文档示例：');
        this.skeleton.forEach((e) => {
          const n = this.getElCounts(e);
          t = t.concat(n);
        }),
          (this.elements = [...t]);
      },
      getElCounts(t) {
        let e = [],
          n = [];
        if (this.$uv.test.number(t)) return e.push({ type: 'gap', height: t }), e;
        {
          const r = t.type ? t.type : 'line',
            i = t.num ? t.num : 1,
            o = t.style ? t.style : {},
            s = this.$uv.test.array(o),
            a = t.gap ? t.gap : '20rpx',
            u = t.children ? t.children : [];
          for (let t = 0; t < u.length; t++)
            n[t] = {
              clas:
                u[t].type.indexOf('avatar') > -1 || u[t].type.indexOf('custom') > -1
                  ? ''
                  : 'uv-skeleton__group__sub',
              elements: this.getElCounts(u[t])
            };
          for (let t = 0; t < i; t++)
            a && t < i && t > 0 && e.push({ type: 'gap', height: a }),
              e.push({
                clas: `uv-skeleton__${r}`,
                type: r,
                style: s ? o[t] : o,
                gap: a,
                children: n
              });
          return e;
        }
      },
      createAnimation(t = 1) {
        if (!this.loading || !this.animate) return;
        let e = 0;
        const n = this.$refs.skeleton;
        n.forEach((r) => {
          animation.transition(r, { styles: { opacity: t }, duration: this.duration }, () => {
            e++,
              e >= n.length &&
                setTimeout(() => {
                  this.createAnimation(t < 1 ? 1 : this.opacity);
                }, 200);
          });
        });
      }
    }
  },
  [
    [
      'render',
      function (t, e, n, r, i, o) {
        const s = S;
        return (
          d(),
          h(
            s,
            { class: 'uv-skeleton' },
            {
              default: g(() => [
                n.loading
                  ? (d(),
                    h(
                      s,
                      { key: 0 },
                      {
                        default: g(() => [
                          (d(!0),
                          y(
                            m,
                            null,
                            $(
                              i.elements,
                              (e, n) => (
                                d(),
                                h(
                                  s,
                                  { key: n },
                                  {
                                    default: g(() => [
                                      'flex' == e.type
                                        ? (d(),
                                          h(
                                            s,
                                            {
                                              key: 0,
                                              class: 'uv-skeleton__group',
                                              style: v([o.style(e)])
                                            },
                                            {
                                              default: g(() => [
                                                (d(!0),
                                                y(
                                                  m,
                                                  null,
                                                  $(
                                                    e.children,
                                                    (e, n) => (
                                                      d(),
                                                      h(
                                                        s,
                                                        {
                                                          class: b([e.clas]),
                                                          style: v([o.style(e)]),
                                                          key: n
                                                        },
                                                        {
                                                          default: g(() => [
                                                            (d(!0),
                                                            y(
                                                              m,
                                                              null,
                                                              $(
                                                                e.elements,
                                                                (e, n) => (
                                                                  d(),
                                                                  h(
                                                                    s,
                                                                    { key: n },
                                                                    {
                                                                      default: g(() => [
                                                                        'gap' == e.type
                                                                          ? (d(),
                                                                            h(
                                                                              s,
                                                                              {
                                                                                key: 0,
                                                                                style: v({
                                                                                  height:
                                                                                    t.$uv.addUnit(
                                                                                      e.height,
                                                                                      'rpx'
                                                                                    )
                                                                                })
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ['style']
                                                                            ))
                                                                          : (d(),
                                                                            h(
                                                                              s,
                                                                              {
                                                                                key: 1,
                                                                                class: b([
                                                                                  e.clas,
                                                                                  o.roundClass,
                                                                                  o.animateClass
                                                                                ]),
                                                                                style: v([
                                                                                  o.style(e)
                                                                                ]),
                                                                                ref_for: !0,
                                                                                ref: 'skeleton'
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ['class', 'style']
                                                                            ))
                                                                      ]),
                                                                      _: 2
                                                                    },
                                                                    1024
                                                                  )
                                                                )
                                                              ),
                                                              128
                                                            ))
                                                          ]),
                                                          _: 2
                                                        },
                                                        1032,
                                                        ['class', 'style']
                                                      )
                                                    )
                                                  ),
                                                  128
                                                ))
                                              ]),
                                              _: 2
                                            },
                                            1032,
                                            ['style']
                                          ))
                                        : 'custom' == e.type
                                        ? (d(),
                                          h(
                                            s,
                                            {
                                              key: 1,
                                              class: b([e.clas, o.animateClass]),
                                              style: v([o.style(e)]),
                                              ref_for: !0,
                                              ref: 'skeleton'
                                            },
                                            null,
                                            8,
                                            ['class', 'style']
                                          ))
                                        : 'gap' == e.type
                                        ? (d(),
                                          h(
                                            s,
                                            {
                                              key: 2,
                                              style: v({ height: t.$uv.addUnit(e.height, 'rpx') })
                                            },
                                            null,
                                            8,
                                            ['style']
                                          ))
                                        : (d(),
                                          h(
                                            s,
                                            {
                                              key: 3,
                                              class: b([e.clas, o.roundClass, o.animateClass]),
                                              style: v([o.style(e)]),
                                              ref_for: !0,
                                              ref: 'skeleton'
                                            },
                                            null,
                                            8,
                                            ['class', 'style']
                                          ))
                                    ]),
                                    _: 2
                                  },
                                  1024
                                )
                              )
                            ),
                            128
                          ))
                        ]),
                        _: 1
                      }
                    ))
                  : (d(),
                    h(
                      s,
                      { key: 1 },
                      { default: g(() => [k(t.$slots, 'default', {}, void 0, !0)]), _: 3 }
                    ))
              ]),
              _: 3
            }
          )
        );
      }
    ],
    ['__scopeId', 'data-v-cf4a5463']
  ]
);
export { K as _, Y as a, j as m };
