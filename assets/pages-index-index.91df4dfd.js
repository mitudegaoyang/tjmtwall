import { a as $, d as F, b as I, e as M, f as N, r as P, o as j, c as z } from './apis.a01c4925.js';
import {
  h as _,
  o as a,
  l as b,
  F as c,
  i as d,
  c as e,
  f,
  j as g,
  s as h,
  d as i,
  m as k,
  a as l,
  g as m,
  b as n,
  n as o,
  S as p,
  e as r,
  w as s,
  r as t,
  u,
  k as v,
  p as w,
  t as y
} from './index-1de63c67.js';
import { _ as S } from './plugin-vue_export-helper.1b428a4d.js';
import './system.7e8a80c4.js';
import { a as C, _ as x } from './theme-item.c793d3a7.js';
import { _ as L } from './uni-dateformat.6bd0553d.js';
import { _ as A } from './uni-icons.a682567a.js';
const B = S({}, [
  [
    'render',
    function (n, c) {
      const i = d;
      return (
        a(),
        e(
          i,
          { class: 'common-title' },
          {
            default: s(() => [
              l(
                i,
                { class: 'name' },
                { default: s(() => [t(n.$slots, 'name', {}, void 0, !0)]), _: 3 }
              ),
              l(
                i,
                { class: 'custom' },
                { default: s(() => [t(n.$slots, 'custom', {}, void 0, !0)]), _: 3 }
              )
            ]),
            _: 3
          }
        )
      );
    }
  ],
  ['__scopeId', 'data-v-cf3613f8']
]);
const D = S({ props: { info: Array, current: { type: Number, default: 0 } } }, [
    [
      'render',
      function (r, u, f, m, _, p) {
        const g = d;
        return (
          a(),
          e(
            g,
            { class: 'swiper-doc' },
            {
              default: s(() => [
                t(r.$slots, 'default', {}, void 0, !0),
                l(
                  g,
                  { class: 'mask' },
                  {
                    default: s(() => [
                      l(
                        g,
                        { class: 'box' },
                        {
                          default: s(() => [
                            (a(!0),
                            n(
                              c,
                              null,
                              i(
                                f.info,
                                (s, l) => (
                                  a(),
                                  e(
                                    g,
                                    {
                                      key: s._id,
                                      class: 'doc',
                                      style: o(
                                        l === f.current
                                          ? 'background-color:rgba(255,255,255,1);width: 25px;'
                                          : 'background-color:rgba(255,255,255,0.5)'
                                      )
                                    },
                                    null,
                                    8,
                                    ['style']
                                  )
                                )
                              ),
                              128
                            ))
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  }
                )
              ]),
              _: 3
            }
          )
        );
      }
    ],
    ['__scopeId', 'data-v-699d86b5']
  ]),
  T = S(
    {
      __name: 'index',
      setup(t) {
        let o = r(0);
        const S = r([]),
          T = r([]),
          q = r([]),
          E = r([]),
          G = [
            { name: '可爱萌宠', _id: '6524a48f6523417a8a8b825d' },
            { name: 'AI美图', _id: '6524ace7213929cbcee72e4d' },
            { name: '平铺卡通', _id: '65237596189f860b7614d971' },
            { name: '自然风光', _id: '6523757d466d417a37a40d75' },
            { name: '明星美女', _id: '65237031189f860b7613acf4' },
            { name: '创意色彩', _id: '6524adaffe975f09c72ce896' },
            { name: '帅哥靓仔', _id: '6524af7ae0ec19c8d601a96d' },
            { name: '独特建筑', _id: '652b59eb8b0da4ca08b7453e' },
            { name: '运动体育', _id: '652b6253e0ec19c8d6e281d5' },
            { name: '网红小姐姐', _id: '65d5969e8b0da4a4e4e3757d' },
            { name: '动漫二次元', _id: '652e519721821b97c60c07ab' },
            { name: '卡通插画', _id: '652e3b39466d417a3717718f' },
            { name: '深色系', _id: '653248dd55b3379a66824f95' },
            { name: '古韵佳人', _id: '6535de90466d417a37334633' },
            { name: '文字文案控', _id: '65de9f4af08210b07de0fd53' }
          ];
        (async () => {
          let a = await I();
          S.value = a.data;
        })();
        (async () => {
          let a = await z({ select: !0, pageNum: 1, pageSize: 10 });
          q.value = a.data;
        })();
        (async () => {
          let a = await F();
          T.value = a.data.map((a) => {
            var e;
            return {
              ...a,
              className: null == (e = G.find((e) => e._id === a.classid)) ? void 0 : e.name
            };
          });
        })();
        (async () => {
          let a = await M({ select: !0 });
          E.value = a.data;
        })();
        (async () => {
          let a = await N();
          console.log(a);
        })();
        const H = () => {
          m({ url: '/pages/notice/notice' });
        };
        let J = (a) => {
          o.value = a.detail.current;
        };
        return (
          j(() => ({ title: '虾米壁纸，好看的手机壁纸', path: '/pages/index/index' })),
          $(() => ({ title: '虾米壁纸，好看的手机壁纸' })),
          (t, r) => {
            const j = P(_('custom-nav-bar'), x),
              $ = k,
              I = w,
              z = p,
              F = d,
              M = P(_('uni-icons'), A),
              N = g,
              G = P(_('uni-dateformat'), L),
              K = P(_('common-title'), B),
              O = v,
              Q = b,
              R = P(_('theme-item'), C);
            return (
              a(),
              e(
                F,
                { class: 'container pageBg' },
                {
                  default: s(() => [
                    l(
                      F,
                      { class: 'layout' },
                      {
                        default: s(() => [
                          l(j, { title: '推荐' }),
                          l(
                            F,
                            { class: 'banner' },
                            {
                              default: s(() => [
                                l(
                                  D,
                                  { class: 'banner-dot', current: u(o), info: S.value },
                                  {
                                    default: s(() => [
                                      l(
                                        z,
                                        {
                                          class: 'banner-swiper',
                                          autoplay: !0,
                                          interval: 3e3,
                                          duration: 500,
                                          circular: '',
                                          onChange: u(J)
                                        },
                                        {
                                          default: s(() => [
                                            (a(!0),
                                            n(
                                              c,
                                              null,
                                              i(
                                                S.value,
                                                (t, d) => (
                                                  a(),
                                                  e(
                                                    I,
                                                    { key: t._id },
                                                    {
                                                      default: s(() => [
                                                        l(
                                                          $,
                                                          {
                                                            src: t.picurl,
                                                            mode: 'aspectFill',
                                                            style: {
                                                              width: '100%',
                                                              height: '100%'
                                                            },
                                                            class: 'rounded-lg',
                                                            onClick: (a) =>
                                                              ((a) => {
                                                                'self' === a.target
                                                                  ? m({
                                                                      url: `/pages/classlist/classlist?${a.url}`
                                                                    })
                                                                  : 'miniProgram' === a.target
                                                                  ? uni.navigateToMiniProgram({
                                                                      appId: a.appid,
                                                                      path: a.url,
                                                                      success: (a) => {
                                                                        console.log(a);
                                                                      },
                                                                      fail: (a) => {
                                                                        console.log(a);
                                                                      }
                                                                    })
                                                                  : console.log(a);
                                                              })(t)
                                                          },
                                                          null,
                                                          8,
                                                          ['src', 'onClick']
                                                        )
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
                                        },
                                        8,
                                        ['onChange']
                                      )
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['current', 'info']
                                )
                              ]),
                              _: 1
                            }
                          ),
                          l(
                            F,
                            { class: 'notice' },
                            {
                              default: s(() => [
                                l(
                                  F,
                                  { class: 'left' },
                                  {
                                    default: s(() => [
                                      l(M, { type: 'sound-filled', size: '20' }),
                                      l(
                                        N,
                                        { class: 'text' },
                                        { default: s(() => [f('公告')]), _: 1 }
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                l(
                                  F,
                                  { class: 'center' },
                                  {
                                    default: s(() => [
                                      l(
                                        z,
                                        {
                                          vertical: '',
                                          autoplay: '',
                                          interval: '1500',
                                          duration: '300',
                                          circular: ''
                                        },
                                        {
                                          default: s(() => [
                                            (a(!0),
                                            n(
                                              c,
                                              null,
                                              i(
                                                q.value,
                                                (l, t) => (
                                                  a(),
                                                  e(
                                                    I,
                                                    {
                                                      key: l._id,
                                                      onClick: (a) => {
                                                        return (
                                                          (e = l._id),
                                                          void m({
                                                            url: `/pages/notice/detail?id=${e}`
                                                          })
                                                        );
                                                        var e;
                                                      }
                                                    },
                                                    { default: s(() => [f(y(l.title), 1)]), _: 2 },
                                                    1032,
                                                    ['onClick']
                                                  )
                                                )
                                              ),
                                              128
                                            ))
                                          ]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                l(
                                  F,
                                  { class: 'right', onClick: H },
                                  {
                                    default: s(() => [
                                      l(M, { type: 'right', size: '20', color: '#333' })
                                    ]),
                                    _: 1
                                  }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          l(
                            F,
                            { class: 'select' },
                            {
                              default: s(() => [
                                l(K, null, {
                                  name: s(() => [f('每日推荐')]),
                                  custom: s(() => [
                                    l(
                                      F,
                                      { class: 'date' },
                                      {
                                        default: s(() => [
                                          l(M, { type: 'calendar', size: '20' }),
                                          l(
                                            F,
                                            { class: 'text' },
                                            {
                                              default: s(() => [
                                                l(
                                                  G,
                                                  { date: Date.now(), format: 'dd日' },
                                                  null,
                                                  8,
                                                  ['date']
                                                )
                                              ]),
                                              _: 1
                                            }
                                          )
                                        ]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                }),
                                l(
                                  F,
                                  { class: 'content' },
                                  {
                                    default: s(() => [
                                      l(
                                        O,
                                        { 'scroll-x': '' },
                                        {
                                          default: s(() => [
                                            (a(!0),
                                            n(
                                              c,
                                              null,
                                              i(
                                                T.value,
                                                (t) => (
                                                  a(),
                                                  e(
                                                    F,
                                                    {
                                                      class: 'box',
                                                      key: t._id,
                                                      onClick: (a) => {
                                                        return (
                                                          (e = t._id),
                                                          h('storgClassList', T.value),
                                                          void m({
                                                            url: `/pages/preview/preview?id=${e}`
                                                          })
                                                        );
                                                        var e;
                                                      }
                                                    },
                                                    {
                                                      default: s(() => [
                                                        l(
                                                          $,
                                                          {
                                                            src: t.smallPicurl,
                                                            mode: 'aspectFill'
                                                          },
                                                          null,
                                                          8,
                                                          ['src']
                                                        )
                                                      ]),
                                                      _: 2
                                                    },
                                                    1032,
                                                    ['onClick']
                                                  )
                                                )
                                              ),
                                              128
                                            ))
                                          ]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          l(
                            F,
                            { class: 'theme' },
                            {
                              default: s(() => [
                                l(K, null, {
                                  name: s(() => [f('专题精选')]),
                                  custom: s(() => [
                                    l(
                                      Q,
                                      {
                                        url: '/pages/classify/classify',
                                        'open-type': 'reLaunch',
                                        class: 'more'
                                      },
                                      { default: s(() => [f(' More+ ')]), _: 1 }
                                    )
                                  ]),
                                  _: 1
                                }),
                                l(
                                  F,
                                  { class: 'content' },
                                  {
                                    default: s(() => [
                                      (a(!0),
                                      n(
                                        c,
                                        null,
                                        i(
                                          E.value,
                                          (s) => (
                                            a(), e(R, { key: s._id, item: s }, null, 8, ['item'])
                                          )
                                        ),
                                        128
                                      )),
                                      l(R, { isMore: '' })
                                    ]),
                                    _: 1
                                  }
                                )
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  _: 1
                }
              )
            );
          }
        );
      }
    },
    [['__scopeId', 'data-v-cd15d4e2']]
  );
export { T as default };
