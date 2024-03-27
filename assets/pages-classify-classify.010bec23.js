import { o as c, e as d, a as f, r as g } from './apis.a01c4925.js';
import {
  o as a,
  c as i,
  w as l,
  d as m,
  F as n,
  a as o,
  b as p,
  i as r,
  e as t,
  h as u
} from './index-1de63c67.js';
import { _ as y } from './plugin-vue_export-helper.1b428a4d.js';
import './system.7e8a80c4.js';
import { a as e, _ as s } from './theme-item.c793d3a7.js';
import './uni-dateformat.6bd0553d.js';
import './uni-icons.a682567a.js';
import { _ as h } from './uv-skeletons.aada4798.js';
const x = y(
  {
    __name: 'classify',
    setup(y) {
      const x = t([]),
        _ = t(!0),
        v = [
          {
            type: 'flex',
            num: 4,
            gap: '15rpx',
            children: [
              { type: 'custom', style: 'width:220rpx;height:400rpx;marginLeft:30rpx;' },
              { type: 'custom', style: 'width:220rpx;height:400rpx;marginLeft:15rpx;' },
              { type: 'custom', style: 'width:220rpx;height:400rpx;marginLeft:15rpx;' }
            ]
          }
        ];
      return (
        (async () => {
          let s = await d({ page: 1, pageSize: 20 });
          (x.value = s.data), (_.value = !1);
        })(),
        c(() => ({ title: '虾米壁纸，精选分类', path: '/pages/classify/classify' })),
        f(() => (console.log(1), { title: '虾米壁纸，精选分类' })),
        (t, c) => {
          const f = g(u('custom-nav-bar'), s),
            d = g(u('theme-item'), e),
            y = r,
            j = g(u('uv-skeletons'), h);
          return (
            a(),
            i(
              y,
              { class: 'classLayout pageBg' },
              {
                default: l(() => [
                  o(f, { title: '分类' }),
                  o(
                    y,
                    { class: 'classify' },
                    {
                      default: l(() => [
                        (a(!0),
                        p(
                          n,
                          null,
                          m(
                            x.value,
                            (s) => (a(), i(d, { item: s, key: s._id }, null, 8, ['item']))
                          ),
                          128
                        ))
                      ]),
                      _: 1
                    }
                  ),
                  o(j, { loading: _.value, skeleton: v }, null, 8, ['loading'])
                ]),
                _: 1
              }
            )
          );
        }
      );
    }
  },
  [['__scopeId', 'data-v-fd2086e6']]
);
export { x as default };
