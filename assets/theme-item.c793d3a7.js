import { r as h } from './apis.a01c4925.js';
import {
  l as _,
  o as a,
  u as c,
  v as d,
  c as e,
  m as f,
  n as i,
  a as l,
  g as m,
  q as n,
  t as o,
  j as p,
  f as r,
  h as s,
  w as t,
  i as u
} from './index-1de63c67.js';
import { _ as k } from './plugin-vue_export-helper.1b428a4d.js';
import { c as b, g, a as j, b as x } from './system.7e8a80c4.js';
import { _ as v } from './uni-dateformat.6bd0553d.js';
import { _ as y } from './uni-icons.a682567a.js';
const w = k(
    {
      __name: 'custom-nav-bar',
      props: { title: { type: String, default: '壁纸' } },
      setup(d) {
        const f = () => {
          m({ url: '/pages/search/search' });
        };
        return (m, _) => {
          const k = u,
            v = h(s('uni-icons'), y),
            w = p,
            B = n;
          return (
            a(),
            e(
              k,
              { class: 'layout' },
              {
                default: t(() => [
                  l(
                    k,
                    { class: 'navbar' },
                    {
                      default: t(() => [
                        l(k, { class: 'statusBar', style: i({ height: c(g)() + 'px' }) }, null, 8, [
                          'style'
                        ]),
                        l(
                          k,
                          {
                            class: 'titleBar',
                            style: i({ height: c(j)() + 'px', marginLeft: c(x)() + 'px' })
                          },
                          {
                            default: t(() => [
                              l(
                                k,
                                { class: 'title' },
                                { default: t(() => [r(o(d.title), 1)]), _: 1 }
                              ),
                              l(
                                k,
                                { class: 'search' },
                                {
                                  default: t(() => [
                                    l(v, {
                                      class: 'icon',
                                      type: 'search',
                                      size: '18',
                                      color: '#888'
                                    }),
                                    l(
                                      w,
                                      { class: 'text' },
                                      { default: t(() => [r('搜索')]), _: 1 }
                                    ),
                                    l(B, { onClick: f }, { default: t(() => [r('搜索')]), _: 1 })
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ['style']
                        )
                      ]),
                      _: 1
                    }
                  ),
                  l(k, { class: 'fill', style: i({ height: c(b)() + 'px' }) }, null, 8, ['style'])
                ]),
                _: 1
              }
            )
          );
        };
      }
    },
    [['__scopeId', 'data-v-d17eb691']]
  ),
  B = k(
    {
      __name: 'theme-item',
      props: {
        isMore: { type: Boolean, default: !1 },
        item: {
          type: Object,
          default: () => ({
            name: '默认名称',
            picurl: '../../common/images/classify1.jpeg',
            updateTime: Date.now()
          })
        }
      },
      setup: (i) => (c, m) => {
        const p = f,
          n = u,
          g = h(s('uni-dateformat'), v),
          j = _,
          x = h(s('uni-icons'), y);
        return (
          a(),
          e(
            n,
            { class: 'themeItem' },
            {
              default: t(() => [
                i.isMore
                  ? (a(),
                    e(
                      j,
                      {
                        key: 1,
                        url: '/pages/classify/classify',
                        'open-type': 'reLaunch',
                        class: 'box more'
                      },
                      {
                        default: t(() => [
                          l(p, {
                            class: 'pic',
                            src: '/tjmtwall/assets/more-14a1a72b.jpeg',
                            mode: 'aspectFill'
                          }),
                          l(
                            n,
                            { class: 'mask' },
                            {
                              default: t(() => [
                                l(x, { type: 'more-filled', size: '34', color: '#fff' }),
                                l(n, { class: 'text' }, { default: t(() => [r('更多')]), _: 1 })
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      }
                    ))
                  : (a(),
                    e(
                      j,
                      {
                        key: 0,
                        url: `/pages/classlist/classlist?id=${i.item._id}&name=${i.item.name}`,
                        class: 'box'
                      },
                      {
                        default: t(() => [
                          l(p, { class: 'pic', src: i.item.picurl, mode: 'aspectFill' }, null, 8, [
                            'src'
                          ]),
                          l(
                            n,
                            { class: 'mask' },
                            { default: t(() => [r(o(i.item.name), 1)]), _: 1 }
                          ),
                          Date.now() - i.item.updateTime <= 7776e6
                            ? (a(),
                              e(
                                n,
                                { key: 0, class: 'tab' },
                                {
                                  default: t(() => [
                                    l(
                                      g,
                                      { date: i.item.updateTime, threshold: [0, 7776e6] },
                                      null,
                                      8,
                                      ['date']
                                    ),
                                    r(' 更新 ')
                                  ]),
                                  _: 1
                                }
                              ))
                            : d('', !0)
                        ]),
                        _: 1
                      },
                      8,
                      ['url']
                    ))
              ]),
              _: 1
            }
          )
        );
      }
    },
    [['__scopeId', 'data-v-72169ddb']]
  );
export { w as _, B as a };
