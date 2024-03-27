import { r as R, g as f } from './apis.a01c4925.js';
import {
  a as A,
  o as a,
  n as c,
  t as d,
  e,
  m as g,
  u as i,
  w as l,
  g as m,
  f as n,
  x as o,
  q as p,
  v as r,
  c as s,
  i as t,
  h as u
} from './index-1de63c67.js';
import { _ as z } from './plugin-vue_export-helper.1b428a4d.js';
import { c as y } from './system.7e8a80c4.js';
import { _ as h } from './uni-icons.a682567a.js';
import { _ as I } from './uv-skeletons.aada4798.js';
const Q = z(
  {
    __name: 'ucenter',
    setup(z) {
      const Q = e(null),
        b = [
          220,
          {
            type: 'avatar',
            num: 1,
            style: 'width:160rpx;height:160rpx;borderRadius:50%;margin: 0 auto;'
          },
          30,
          {
            type: 'line',
            num: 2,
            style: ['width:360rpx;height: 50rpx;margin: 0 auto;', 'width:200rpx;margin: 0 auto;']
          },
          100,
          {
            type: 'line',
            num: 3,
            style: [
              'height: 90rpx;margin: 0 20rpx;',
              'height: 90rpx;margin: 0 20rpx;',
              'height: 90rpx;margin: 0 20rpx;'
            ]
          },
          60,
          {
            type: 'line',
            num: 2,
            style: ['height: 90rpx;margin: 0 20rpx;', 'height: 90rpx;margin: 0 20rpx;']
          }
        ];
      (async () => {
        let e = await f();
        Q.value = e.data;
      })();
      const C = (e) => {
        m({ url: e });
      };
      return (e, m) => {
        const f = R(u('uv-skeletons'), I),
          z = t,
          v = g,
          Z = R(u('uni-icons'), h),
          E = p;
        return (
          a(),
          s(
            z,
            { class: 'container pageBg' },
            {
              default: l(() => [
                A(
                  z,
                  { class: 'layout' },
                  {
                    default: l(() => [
                      A(f, { loading: !Q.value, skeleton: b }, null, 8, ['loading']),
                      Q.value
                        ? (a(),
                          s(
                            z,
                            { key: 0, class: 'userLayout' },
                            {
                              default: l(() => [
                                A(z, { style: c({ height: `${i(y)()}px` }) }, null, 8, ['style']),
                                A(
                                  z,
                                  { class: 'userInfo' },
                                  {
                                    default: l(() => [
                                      A(
                                        z,
                                        { class: 'avatar' },
                                        {
                                          default: l(() => [
                                            A(v, {
                                              src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAAEi6oPRAAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADKmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzIgNzkuMTU5Mjg0LCAyMDE2LzA0LzE5LTEzOjEzOjQwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRkE0MjcxNTdEQzYxMUU4QkZBOERDOEVCQ0U0NTBGMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRkE0MjcxNDdEQzYxMUU4QkZBOERDOEVCQ0U0NTBGMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkE4RkFCN0M3REM1MTFFOEJGQThEQzhFQkNFNDUwRjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkE4RkFCN0Q3REM1MTFFOEJGQThEQzhFQkNFNDUwRjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5BZZ+3AAAB1ElEQVR42mJkAALtmZb/GfAAJkIKwIoYiAA4FV1JO0Ylk0hWxILLHTgV6cyywqoIIIAYiQinb8S4iYs036E7esgEJq6ABAGAACImMBmo5m6yDcLlR5gcNnnaumhADWIhJoOTbRC+9ILPa9+o4TWAAAIlyDVAOphCc1SYqGAICNwZxumIidi8NILz2qhBdCyPaOcicgq1wRnYAAFErRKSgZo+GzSOoWpQD1sHsRCjCDnzkpp90DM+If2jUTbqoFEHjZZDpJYroyFESeNmNFHTykEqg8g9bwACCNRiVAYyLgEx1wA7Zu3V9OMhVBt1opajBlsaCh7NZaMOGnXQgFeupHZjKO1CjUbZqINGHTTqoFEHjTpo1EGjDhqMgw342kejUTaahggpoOdg1WiUjTpoODoIvL7tzSBykB5AgPbtGIdBGIYCaBR16swROEQvzT06cxjm1lRFDC0LcpXC+xJzpIdJhOW8e4z359MVWSde1C32xRYasC0mCmascDZzrQz+7NgABAgQINnRY/iUrb5D9v9l9toqCBAgQIAAAQIESAABAgQIEKCD5ZK9QPaMigoCdIJP7NdjOyoIECBAgGQBGjB8zVDjam153T0OqInJbBAWfdg8AExKZVcA71uIAAAAAElFTkSuQmCC',
                                              mode: 'aspectFill'
                                            })
                                          ]),
                                          _: 1
                                        }
                                      ),
                                      A(
                                        z,
                                        { class: 'ip' },
                                        { default: l(() => [n(d(Q.value.IP), 1)]), _: 1 }
                                      ),
                                      A(
                                        z,
                                        { class: 'address' },
                                        {
                                          default: l(() => [
                                            n(
                                              ' 来自于' +
                                                d(
                                                  Q.value.address.citys ||
                                                    Q.value.address.province ||
                                                    Q.value.address.country
                                                ),
                                              1
                                            )
                                          ]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                A(
                                  z,
                                  { class: 'section' },
                                  {
                                    default: l(() => [
                                      A(
                                        z,
                                        { class: 'list' },
                                        {
                                          default: l(() => [
                                            A(
                                              z,
                                              {
                                                class: 'section-row',
                                                onClick:
                                                  m[0] ||
                                                  (m[0] = (e) =>
                                                    C(
                                                      '/pages/classlist/classlist?type=download&name=我的下载'
                                                    ))
                                              },
                                              {
                                                default: l(() => [
                                                  A(
                                                    z,
                                                    { class: 'left' },
                                                    {
                                                      default: l(() => [
                                                        A(Z, {
                                                          type: 'download-filled',
                                                          size: '20'
                                                        }),
                                                        A(
                                                          z,
                                                          { class: 'text' },
                                                          {
                                                            default: l(() => [n(' 我的下载 ')]),
                                                            _: 1
                                                          }
                                                        )
                                                      ]),
                                                      _: 1
                                                    }
                                                  ),
                                                  A(
                                                    z,
                                                    { class: 'right' },
                                                    {
                                                      default: l(() => [
                                                        A(
                                                          z,
                                                          { class: 'text' },
                                                          {
                                                            default: l(() => [
                                                              n(d(Q.value.downloadSize), 1)
                                                            ]),
                                                            _: 1
                                                          }
                                                        ),
                                                        A(Z, {
                                                          type: 'right',
                                                          size: '15',
                                                          color: '#aaa'
                                                        })
                                                      ]),
                                                      _: 1
                                                    }
                                                  )
                                                ]),
                                                _: 1
                                              }
                                            ),
                                            A(
                                              z,
                                              {
                                                class: 'section-row',
                                                onClick:
                                                  m[1] ||
                                                  (m[1] = (e) =>
                                                    C(
                                                      '/pages/classlist/classlist?type=score&name=我的评分'
                                                    ))
                                              },
                                              {
                                                default: l(() => [
                                                  A(
                                                    z,
                                                    { class: 'left' },
                                                    {
                                                      default: l(() => [
                                                        A(Z, { type: 'star-filled', size: '20' }),
                                                        A(
                                                          z,
                                                          { class: 'text' },
                                                          {
                                                            default: l(() => [n(' 我的评分 ')]),
                                                            _: 1
                                                          }
                                                        )
                                                      ]),
                                                      _: 1
                                                    }
                                                  ),
                                                  A(
                                                    z,
                                                    { class: 'right' },
                                                    {
                                                      default: l(() => [
                                                        A(
                                                          z,
                                                          { class: 'text' },
                                                          {
                                                            default: l(() => [
                                                              n(d(Q.value.scoreSize), 1)
                                                            ]),
                                                            _: 1
                                                          }
                                                        ),
                                                        A(Z, {
                                                          type: 'right',
                                                          size: '15',
                                                          color: '#aaa'
                                                        })
                                                      ]),
                                                      _: 1
                                                    }
                                                  )
                                                ]),
                                                _: 1
                                              }
                                            ),
                                            A(
                                              z,
                                              { class: 'section-row' },
                                              {
                                                default: l(() => [
                                                  A(
                                                    z,
                                                    { class: 'left' },
                                                    {
                                                      default: l(() => [
                                                        A(Z, {
                                                          type: 'chatboxes-filled',
                                                          size: '20'
                                                        }),
                                                        A(
                                                          z,
                                                          { class: 'text' },
                                                          {
                                                            default: l(() => [n(' 联系客服 ')]),
                                                            _: 1
                                                          }
                                                        ),
                                                        A(
                                                          E,
                                                          {
                                                            onClick:
                                                              m[2] ||
                                                              (m[2] = (e) => {
                                                                o({ phoneNumber: '114' });
                                                              })
                                                          },
                                                          {
                                                            default: l(() => [n('拨打电话')]),
                                                            _: 1
                                                          }
                                                        )
                                                      ]),
                                                      _: 1
                                                    }
                                                  ),
                                                  A(
                                                    z,
                                                    { class: 'right' },
                                                    {
                                                      default: l(() => [
                                                        A(z, { class: 'text' }),
                                                        A(Z, {
                                                          type: 'right',
                                                          size: '15',
                                                          color: '#aaa'
                                                        })
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
                                ),
                                A(
                                  z,
                                  { class: 'section' },
                                  {
                                    default: l(() => [
                                      A(
                                        z,
                                        { class: 'list' },
                                        {
                                          default: l(() => [
                                            A(
                                              z,
                                              {
                                                class: 'section-row',
                                                onClick:
                                                  m[3] ||
                                                  (m[3] = (e) =>
                                                    C(
                                                      '/pages/notice/detail?id=653507c6466d417a3718e94b&name=订阅更新'
                                                    ))
                                              },
                                              {
                                                default: l(() => [
                                                  A(
                                                    z,
                                                    { class: 'left' },
                                                    {
                                                      default: l(() => [
                                                        A(Z, {
                                                          type: 'notification-filled',
                                                          size: '20'
                                                        }),
                                                        A(
                                                          z,
                                                          { class: 'text' },
                                                          {
                                                            default: l(() => [n(' 订阅更新 ')]),
                                                            _: 1
                                                          }
                                                        )
                                                      ]),
                                                      _: 1
                                                    }
                                                  ),
                                                  A(
                                                    z,
                                                    { class: 'right' },
                                                    {
                                                      default: l(() => [
                                                        A(z, { class: 'text' }),
                                                        A(Z, {
                                                          type: 'right',
                                                          size: '15',
                                                          color: '#aaa'
                                                        })
                                                      ]),
                                                      _: 1
                                                    }
                                                  )
                                                ]),
                                                _: 1
                                              }
                                            ),
                                            A(
                                              z,
                                              {
                                                class: 'section-row',
                                                onClick:
                                                  m[4] ||
                                                  (m[4] = (e) =>
                                                    C(
                                                      '/pages/notice/detail?id=6536358ce0ec19c8d67fbe82&name=常见问题'
                                                    ))
                                              },
                                              {
                                                default: l(() => [
                                                  A(
                                                    z,
                                                    { class: 'left' },
                                                    {
                                                      default: l(() => [
                                                        A(Z, { type: 'flag-filled', size: '20' }),
                                                        A(
                                                          z,
                                                          { class: 'text' },
                                                          {
                                                            default: l(() => [n(' 常见问题 ')]),
                                                            _: 1
                                                          }
                                                        )
                                                      ]),
                                                      _: 1
                                                    }
                                                  ),
                                                  A(
                                                    z,
                                                    { class: 'right' },
                                                    {
                                                      default: l(() => [
                                                        A(z, { class: 'text' }),
                                                        A(Z, {
                                                          type: 'right',
                                                          size: '15',
                                                          color: '#aaa'
                                                        })
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
                              ]),
                              _: 1
                            }
                          ))
                        : r('', !0)
                    ]),
                    _: 1
                  }
                )
              ]),
              _: 1
            }
          )
        );
      };
    }
  },
  [['__scopeId', 'data-v-bdde1ee8']]
);
export { Q as default };
