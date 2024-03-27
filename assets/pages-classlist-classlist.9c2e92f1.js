import { r as L, i as _, k as j, l as k, o as v, a as w, j as x, h as y } from './apis.a01c4925.js';
import {
  e as a,
  h as c,
  F as d,
  y as e,
  l as f,
  m as g,
  i,
  c as l,
  s as m,
  f as n,
  a as o,
  b as p,
  w as r,
  z as s,
  o as t,
  d as u
} from './index-1de63c67.js';
import { _ as M } from './plugin-vue_export-helper.1b428a4d.js';
import { _ as h } from './uv-skeletons.aada4798.js';
import { _ as $, a as z } from './z-paging.c1d847ad.js';
const C = M(
  {
    __name: 'classlist',
    setup(M) {
      const C = a(null),
        N = a([]),
        S = [
          {
            type: 'flex',
            num: 4,
            gap: '5rpx',
            children: [
              { type: 'custom', style: 'width:242rpx;height:400rpx;marginLeft:5rpx;' },
              { type: 'custom', style: 'width:242rpx;height:400rpx;marginLeft:5rpx;' },
              { type: 'custom', style: 'width:242rpx;height:400rpx;marginLeft:5rpx;' }
            ]
          }
        ];
      let V = '',
        b = '',
        F = '',
        q = 1,
        I = 12;
      const P = (a, e) => {
          (q = a), (I = e), b ? U() : Q();
        },
        Q = async () => {
          let a = await j({ classid: V, pageNum: q, pageSize: I });
          C.value.complete(a.data);
        },
        U = async () => {
          let a = await k({ type: b, pageNum: q, pageSize: I });
          C.value.complete(a.data);
        },
        A = () => {
          m('storgClassList', N.value);
        };
      return (
        y((a) => {
          ({ id: V = null, name: F = '分类列表', type: b } = a),
            e({ title: F }),
            'download' === b || 'score' === b || V || _();
        }),
        x(() => {
          s('storgClassList');
        }),
        v(() => ({ title: `虾米壁纸-${F}`, path: `/pages/classlist/classlist?id=${V}&name=${F}` })),
        w(() => ({ title: '虾米壁纸，${name}分类', query: `id=${V}&name=${F}` })),
        (a, e) => {
          const s = L(c('uv-skeletons'), h),
            m = L(c('custom-refresher'), $),
            y = i,
            _ = g,
            x = f,
            v = L(c('z-paging'), z);
          return (
            t(),
            l(
              y,
              { class: 'classlist' },
              {
                default: r(() => [
                  o(
                    v,
                    {
                      ref_key: 'paging',
                      ref: C,
                      modelValue: N.value,
                      'onUpdate:modelValue': e[0] || (e[0] = (a) => (N.value = a)),
                      onQuery: P,
                      onListChange: A,
                      'default-page-size': '12',
                      'empty-view-text': '没有更多数据了'
                    },
                    {
                      loading: r(() => [o(s, { loading: !0, skeleton: S })]),
                      refresher: r(({ refresherStatus: a }) => [
                        o(m, { status: a }, null, 8, ['status'])
                      ]),
                      loadingMoreLoading: r(() => [o(s, { loading: !0, skeleton: S })]),
                      loadingMoreNoMore: r(() => [
                        o(
                          y,
                          { class: 'noMore' },
                          { default: r(() => [n('没有更多数据了')]), _: 1 }
                        ),
                        o(y, { class: 'safe-area-inset-bottom' })
                      ]),
                      default: r(() => [
                        o(
                          y,
                          { class: 'content' },
                          {
                            default: r(() => [
                              (t(!0),
                              p(
                                d,
                                null,
                                u(
                                  N.value,
                                  (a) => (
                                    t(),
                                    l(
                                      x,
                                      {
                                        url: `/pages/preview/preview?id=${a._id}`,
                                        class: 'item',
                                        key: a._id,
                                        data: a
                                      },
                                      {
                                        default: r(() => [
                                          o(
                                            _,
                                            { src: a.smallPicurl, mode: 'aspectFill' },
                                            null,
                                            8,
                                            ['src']
                                          )
                                        ]),
                                        _: 2
                                      },
                                      1032,
                                      ['url', 'data']
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
                    },
                    8,
                    ['modelValue']
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
  [['__scopeId', 'data-v-484377aa']]
);
export { C as default };
