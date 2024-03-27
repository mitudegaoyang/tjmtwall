import { r as W } from './apis.a01c4925.js';
import {
  Y as A,
  k as B,
  a4 as C,
  a6 as D,
  Z as I,
  a5 as L,
  a3 as M,
  h as N,
  d as P,
  F as R,
  b as S,
  a2 as T,
  a7 as V,
  a,
  O as b,
  B as c,
  i as d,
  a1 as e,
  J as f,
  n as g,
  m as h,
  c as i,
  r as k,
  u as l,
  s as m,
  j as n,
  w as o,
  v as p,
  t as r,
  f as s,
  o as t,
  C as u,
  X as v,
  A as w,
  N as x,
  I as y,
  H as z
} from './index-1de63c67.js';
import { _ as E } from './plugin-vue_export-helper.1b428a4d.js';
const H = E(
    {
      __name: 'custom-refresher',
      props: {
        status: {
          type: Number,
          default: function () {
            return 0;
          }
        }
      },
      setup(c) {
        const g = c;
        let u = e(
          () => ['继续下拉刷新！', '释放刷新~~', '正在努力刷新中...', '刷新成功~~'][g.status]
        );
        return (e, c) => {
          const g = h,
            p = n,
            m = d;
          return (
            t(),
            i(
              m,
              { class: 'refresher-container' },
              {
                default: o(() => [
                  a(g, {
                    class: 'refresher-image',
                    mode: 'aspectFit',
                    src: '/tjmtwall/assets/settings-a935e278.gif'
                  }),
                  a(p, { class: 'refresher-text' }, { default: o(() => [s(r(l(u)), 1)]), _: 1 })
                ]),
                _: 1
              }
            )
          );
        };
      }
    },
    [['__scopeId', 'data-v-04839d86']]
  ),
  Z =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcExRUVFMTExRUVFRUVE9CdWsAAAABHRSTlMAjjrY9ZnUjwAAAQFJREFUWMPt2MsNgzAMgGEEE1B1gKJmAIRYoCH7z9RCXrabh33iYktcIv35EEg5ZBh07pvxJU6MFSPOSRnjnBUjUsaciRUjMsb4xIoRCWNiYsUInzE5sWKEyxiYWDbyefqHx1zIeiYTk7mQYziTYecxHvEJjwmIT3hMQELCYSISEg4TkZj0mYTEpM8kJCU9JiMp6TEZyUmbAUhO2gxAQNJiIAKSFgMRmNQZhMCkziAEJTUGIyipMRjBSZkhCE7KDEFIUmTeGCHJxWz0zXaE0GTCG8ZFtEaS347r/1fe11YyHYVfubxayfjoHmc0YYwmmmiiiSaaaKLJ7ckyz5ve+dw3Xw2emdwm9xSbAAAAAElFTkSuQmCC',
  F =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz///////////////////+IGTx/AAAABnRSTlMA/dAkXZOhASU/AAABYElEQVRYw+2YwXLCIBCGsdAHWGbyAKZ4zxi9O017rxLf/1UaWFAgA1m8dcpedNSPf/l/Vh0Ya/Wn6hN0JcGvoCqRM4C8VBFiDwBqqNuJKV0rAnCgy3AUqZE57x0iqTL8Br4U3WBf/YWaIlTKfAcELU/h9w72CSVPa3C3OCDvhpHbRp/s2vq4fHhCeiCl2A3m4Qd71DQR257mFBlMcTlbFnFWzNtHxewYEfSiaLS4el8d8nyhmKJd1CF4eOS0keLMAuSxubLBIeIGQW8YHCFFo7EH9+YDcQt9FMZEswTheaNxTHwHT8SZorJjMrEVwo4Zo0U8HSEyZvJMOg4RjnmmRr8nDYeIz3OMkbfE/QhBo+U9RnZJxjGCRh/WKmHEMWLNkfPKsGh/CWJk1JjG0kcuJggTt34VDP8aWAFhp4nybVb5+9qQhjSkIQ1pSEMa8k+Q5U9rV3dF8MpFBK+/7miVq1/HZ2qmo9D+pAAAAABJRU5ErkJggg==',
  j =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAKlBMVEVHcEzDw8Ovr6+pqamUlJTCwsKenp61tbWxsbGysrLNzc2bm5u5ubmjo6MpovhuAAAACnRSTlMA/P79/sHDhiZS0DxZowAABBBJREFUWMPtl89rE0EUx7ctTXatB3MI1SWnDbUKPUgXqh4ED8Uf7KUVSm3ooVSpSii0Fn/gD4j4o+APiEoVmos9FO2celiqZVgwgaKHPQiCCkv+F99kM7Ozm5kxq1dfD91k9pPve9/3ZjbRNHHok/mKli4eIPNgSuRObuN9SqSEzM20iGnm0yIbqCuV7NSSSIV7uyPM6JMBYdeTOanh/QihJYZsUCSby+VkMj2AvOt0rAeQAwqE3lfKMZVlQCZk1QOCKkkVPadITCfIRNKxfoJI5+0OIFtJx14CMSg1mRSDko7VAfksRQzEbGYqxOJcVTWMCH2I1/IACNW0PWU2M8cmAVHtnH5mM1VRWtwKZjOd5JbF6s1IbaYqaotjNlPHgDAnlAizubTR6ovMYn052g/U5qcmOpi0WL8xTS/3IfSet5m8MEr5ajjF5le6dq/OJpobrdY0t3i9QgefWrxW9/1BLhk0E9m8FeUMhhXal499iD0eQRfDF+ts/tttORRerfp+oV7f4xJj82iUYm1Yzod+ZQEAlS/8mMBwKebVmCVp1f0JLS6zKd17+iwRKTARVg2SHtz3iEbBH+Q+U28zW2Jiza8Tjb1YFoYZMsJyjDqp3M9XBQdSdPLFdxEpvOB37JrHcmR/y9+LgoTlCFGZEa2sc6d4PGlweEa2JSVPoVm+IfGG3ZL037iV9oH+P+Jxc4HGVflNq1M0pivao/EopO4b/ojVCP9GjmiXOeS0DOn1o/iiccT4ORnyvBGF3yUywkQajW4Ti0SGuiy/wVSg/L8w+X/8Q+hvUx8Xd90z4oV5a1i88MbFWHz0WZZ1UrTwBGPX3Rat9AFiXRMRjoMdIdJLEOt2h7jrYOzgOamKZSWSNspOS0X8SAqRYmxRL7sg4eLzYmNehcxh3uoyud/BH2Udux4ywxFTc1xC7Mgf4vMhc5S+kSH3Y7yj+qpwIWSoPTVCOOPVthGx9FbGqrwFw6wSFxJr+17zeKcztt3u+2roAEVgUjDd+AHGuxHy2rZHaa8JMkTHEeyi85ANPO9j9BVuBRD2FY5LDMo/Sz/2hReqGIs/KiFin+CsPsYO/yvM3jL2vE8EbX7/Bf8ejtr2GLN65bioAdgLd8Bis/mD5GmP2qeqyo2ZwQEOtAjRIDH7mBKpUcMoApbZJ5UIxkEwxyMZyMxW/uKFvHCFR3SSmerHyDNQ2dF4JG6zIMpBgLfjSF9x1D6smFcYnGApjmSLICO3ecCDWrQ48geba9DI3STy2i7ax6WIB62fSyIZIiO3GFQqSURp8wCo7GhJBGwuSovJBNjb7kT6FPVnIa9qJ2Ko+l9mefGIdinaMp0yC1URYiwsdfNE45EuA5Cx9EhalfvN5s+UyItm81vaB3p4joniN+SCP7Qc1hblAAAAAElFTkSuQmCC',
  O =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEX///9HcEz///////////////84chYNAAAABnRSTlP/AGzCOYZj5g1nAAACfklEQVRYw+2YTVPDIBCGtza9Jw25a0bvcax30o73OOr//yvma2F3YWlpPTijXNpAHrK8LLALVPFium2vNIFSbwGKTGQA2GUiHcD29yDNy3sMIdUBQl7r2H8mOEVqAHgPkYZUS6Qc2zYhQqtjyDZEximCZwWZLIBeIgYShs2NzxKpSUehYpMJhURGb+O+w5BpMCAREKPnCDHbIY20SzhM5yxziAXpOiBXydrekT9i5XDEq4NIIHHgyU5mRGqviII4mREJJA4QJzMiILwlRJzpKxJKvCBm8OsBBbLux0tsPl4RKYm5aPu6jw1U4mGxEUR9g8M1PcqBEp/WJliNgYOXueBzS4jZSIcgY5lCtevgDSgyzE+rAfuOTQMq0yzvoGH18qju27Mayzs4fPyMziCx81NJa5RNfW7vPYK9KOfDiVkBxFHG8hAj9txuoBuSWORsFfkpBf7xKFLSeaOefEojh5jz22DJEqMP8fUyaKdQx+RnG+yXMpe8Aars8ueR1pVH/bW3FyyvPRw90upLDHwpgBDtg4aUBNkxRLXMAi03IhcZtr1m+FeI/O/JNyDmmL1djLOauSlNflBpW18RQ2bPqXI22MXXEk75KRHTnkPkYbESbdKP2ZFk0r5sIwffAjy1lx+vx7NLjB6/E7Jfv5ERKhzpN0w8IDE8IGFDv5dhz10s7GFiXRZcUeLCEG5P5nDq9k4PFDcoMpE3GY4OuxuCXhmuyNB6k0RsLIAvqp9NE5r8ZCSS8gxnUp7ODdYhZTqxuiJ9uyJJtPmpqJ7wVj+XVieS903iViHziqAhchLEJAyb7jWU647EpUofQ0ziUuXXXhDddtlllSwjgSQu7r4BRWhQqfDPMVwAAAAASUVORK5CYII=',
  U =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVRUVFHcExTU1NRUVFRUVFRUVFOSlSUAAAABnRSTlP/AI6+VySB3ZENAAACcElEQVRYw+2YyYKCMAyGI8hdpdxdZu7gcpdZ7jL6/s8yYheSNi0aPdqbwOffpGmaFOYPD3gj4bisN7vddv17N/JVgxn5x12IWgIaWTuO/IE3PseQbwjGPo2cgRmHFLJwdm/X643zwiqOKPPJ1nj3sjEP2iiifZWj5bhopSyGaEO2HX5fbQJzwJ+W7x/jw5ZFjsEU0PMph9xE8i5EqprKALW95eJQURkgzw98uJ/JvwGecR7bIjWWsUgVrrIfFZ2HlLy3sKETD1mmRLRMRhGVssRa0xJkdn3SpJBymBkM8+pSSDXMDNyDaToVHd2fgpNt0sjwiUZO19+jGQ+gQEg9Oq+bufmAVGihomNmjQG7UG3020vrlm7lkFnKFGU3kZ0KGAdmKe821pipQ+qEKcrZeTL2g5FsUks4cStjEZWwXg0b0n4GxmEpkWwIs5VBynjgK7xZaz1/0D7OxkVuLpsY5BQNFyLS84VBjjbg0iL2r2EQHBOxBhikuUOkdxODVF1cxHoWtPPsiyXO455Iv34hssCO8EV4ZIYTjS8SR4qYSHRiTiYQ4ZFbHi0iIhhBTi6dTCgSWRcnw4h4yGTuyTAiOGBIWGoZTgSHJQl+LcOJ4OCnW6yX2bMnJ9pidCOXtkTkTrIGpYuOynAiOF14SamMiOCk5Ke+mq8BcOrrvym8d0zKIQnWT+M1WwOQNO4fFiWb18hhERxJPx2fblbPHHyC41VyiAtKBUFBIih7JMWVoIQTFIr3lKPN80WvoLSWFPC653ioTZA0I0FrQ7qU6asaK0H7JmkSJa2ooOGVtNUsc3j9FYHkIkJy3SG6VHnfXKXGP9t4N9Q4Ye98AAAAAElFTkSuQmCC',
  Y =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAGFBMVEVHcEz///////////////////////////8dS1W+AAAAB3RSTlMAiVYk6KvDHLfaegAAAo1JREFUWMPtWEtzmzAQNhCTq910ytXpiyvxTNOr60zrayepx9d02gnX4sTm7xcEiJX2gdnkGJ1A4tOnfWqXyeR1vMRYzrcPD9v5h5MBl3/Ldvx4cxIg/FWC8X0xjLjalM54uhhCfCrRuJURX0pi3EmIqZV7O59vrRZmguStHL9b7S7ftfLwOtiZDw7AHMtmquAQ12b5Wwbnordm8g9zLLO49qc/m2n6aKnhwPOGZ08hAiNHhheiHae1lOUPGZpQkPKa3q0mOUjaRzSRaGUjpy/mmWSwySSpllcEteBKAT52KEnSbblA51pJEPxBQoiH1FP4E3s5+FJv07h6/ylD6ui7B+9fq/ehrFB98ghec9EoVtyjK8pqCHLmCBOwMWSCeWFNN4MbPAk55NhsvoFHSSVR0k5TCTTEzlUGcqV/nVp7n9oIVkmtaqbAEqEgfdgHJPwsEAyZ9r4VAZXFjpEwyaw3+H2v42KYxKhs1XvY/gSSGv+IHyUSuHXCeZhLAgVI3EjgSGo1Fb3xO0tGGU9S2/KAIbtjxpJASG73qox6w5LUq0cEOa+iIONIWIilQSQ0pPa2jgaRQAgQP7c0mITRWGxpMAmEQFN2NAQJNCV0mI6GIIEO47hlQ0ORQLd0nL+hoUjg1m6I1TRr8uYEAriBHLcVFQ5UEMiBe3XkTBEG04WXlGKGxPnMS305XQPA1Ocn2JiuAZwE66fxnKwBnDTuXxZTMq85lwW6kt5ndLqZPefiU1yvmktcUSooChJF2aMprhQlnKJQ5FxRKkcVRa+itNYU8Io2oVkY14w0NMWYlqft91Bj9VHq+ca3b43BxjWJmla0sfKohlfTVpPN+93L/yLQ/IjQ/O5Q/VR5HdL4D7mlxmjwVdELAAAAAElFTkSuQmCC',
  G =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAALeGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTAxLTEzVDE5OjA5OjQwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wMS0xM1QxOTowOTo0MCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZWQwMWYzNWQtOWRjOC00MDBiLWEyMmQtNjM5OGZiNzVhNGRiIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDhlMzQ3ZmEtMDY2My1jYTRiLTgzNTctNTk4YjBkNGIzOTU2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMwMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjMwMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNjg2NzJkLWY5NDMtOTU0Mi1iMDBiLTVlMDExNmE1NmIzZSIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxMDoyNjoxNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphYmJkZmUyZC0xY2Q2LTJiNDgtYjUyNS05YzlhZjdlNjA4NDMiIHN0RXZ0OndoZW49IjIwMjQtMDEtMTNUMTE6MjM6NDArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTQ5MjM5MDAtNDhiZC03YTQ1LWI4NGItYmVlZTVjOWUxYTM1IiBzdEV2dDp3aGVuPSIyMDI0LTAxLTEzVDExOjIzOjQwKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVkMDFmMzVkLTlkYzgtNDAwYi1hMjJkLTYzOThmYjc1YTRkYiIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxOTowOTo0MCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmFiYmRmZTJkLTFjZDYtMmI0OC1iNTI1LTljOWFmN2U2MDg0MyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM2ZGQ4NTQxLWQ0MWEtYmY0Yy1iZjA3LWNmNjZhNjZhMDg2MSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmQwODAyODAyLTM1MmEtODU0YS05MWI3LTZkZTZkNTJlYjNkMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm30U/gAAAAJcEhZcwAALiMAAC4jAXilP3YAAAA/UExURUdwTODg4O3t7e7u7unp6d7e3uTk5M/Pz8nJyePj4+jo6Pj4+MrKyszMzO7u7unp6fb29vLy8vr6+v7+/sHBweag3xAAAAAOdFJOUwAxia5pF0n+/vzX3KbULQ2DYQAACG1JREFUeNrtm4l2o7gShi20IWFrAd7/WUc7EosDWKZ976Hc7WTmdMKXv0qlqpLyeNx222233Xbbbbfddtv/mOHn8xexSNsiRH5PrbFtW4p+DetpsF4v8Gs+HA3WEwOAfwzriYxaLTVsP8X1QK0z+vqQCzewYogi60aL9SEX5oyxphYVCFTGjfSJCTmN1jBruN5KTGCUS8bhySQGHRaohmW4glwtldbOeYJYKlgvbyUuA8aFFEKc++aIM4hrRnyiMnIZKq1PrihcM3GNKboMF1Naa9X9+8T1KrxIlVbGjv3cAEHOYYMqqgUsVuJqqehV3+sjDwB+DTJp0lYtMCyZpxqjF4e+74+sRcQSFZO8UonUSEFzuUY+DKo59A2kZDatGCjzCauy/2AmhSyCq0WHEj0KTNJDmVeNhErMt1Q8W4xti4/FwMJ4jaxl05TKFiNtD3kBGrHnhiph9V0eXQc6DkyE2xX830AlKshFTErXeuCZXK/9m41wFsGSfZ4lcGeyZ98PrylJ7MWCojQZ3qSukL2QslgdngqJnTEPdTJhXvbNBoR/+7wabIxWduN/Ja5dWEivm4XSZ2uQckNzmRlHrn2lc6eiafvS4V2Hd12tesau8toZW0CtWoZYb9t+OqxdCYKYjVPF16pVbILIy/gR7MVaWMHYPCoa2VkzkX4Iry2rirXbumGyAjGC1h62YLw6ApsNKZph3fpIWHt08JovRWD62sejpXhTrhWrPpl6zZ6PW2oTG5ltlvgtF6weNYCWKeJJSfg4W6PNJlj3sVZgOXV4lc8n4RlkMTLEBDVoYc3nI09kpyzzfgWsjyzBZSNDKF2/wjh+sxYvn8Y1scxlfLF9T1RBO3wVHsnq8Fk4oGkEh/0KJPSa8T2CeWE5X9BPmgLsaRIGeNL2kshCsWoLBmdPJW5Wbz1ndAKUXjPwxXYAUpSV3fy5BJg1aa1tyVXHHMgVH31ewDVrleHr9XqC684SUF4mecR3+wW5SC2QNvxUizRv98mLDhPgYiMDb+v8g0OADxqxcnf9w01mZYJF0fUVP5LcdswbsMmy1DVs5PlE5NpNiTR8M8qAWZkOy6aN13VcoOF2/s3xn3Mes8Xza05tgR/BuNz69nlNzMR0fH45p+G4R9oxh2mKt9MF4J7K/lvWUojwF5nCgCpuRUptnZMQ3au0nSo2UsHgV3xpmeLYzGml3ZFBBzYGPCpOQRwXs1/GG1J74dlZc6JKUOtjBAz9XjVxucGWHbZVJDPJQGYDRl1Qmf1ovk2Sbghb6MQlnF7mBzM1bgOqJAPpoOQaVe+4Skcit3uqHMyG/Sh1rHNN0gAfM0nnPrmulfLVBSm20TSZSdWa0LJl2ukVyE4vTYCgP3uQkwv1TKtQWgxDzBSg80OQjCs4klKvuUzHLCfIbDKIE/S5VIGqD1iD2819pkAqTWdmeina+oZABi7X5B1MGoTJqJSchuk6JNHcgUPAcsVFk0+N0oDN68Vo7FQSmCXjx46OEtUk1lpY2ZFQGr/AcpqVato4wPUD+RhfAeyQI5sJ6l2sDwnKqNFSJvpiyJbFl3kTOjZ2ievwCR7hkUoWeV2vOLAXvB39AJoyqYa81A5cvaAidXYTFTycKDBcalVK5f3XS89kzLVl9txfL+K+p6NUnitz5KkKm7D3DrRPNq4bk7l20aFRppNilmuQI+uzTtj9wPBkTsVwM7HbJ5pwGgujyRyZDzQLNoiRFluRtQ+GzEguqRxUL+ZMFqulMzIfaP3ARj2k/txB8c+2HyjmDizCaVWtNoE5MvMlKs/4VQ7HUJZCrU6qCKcNJ2aSWUZhJZu4VI0LB4CHFdj77DRuGi28WKAxoRyZyzGVrmc0jmk1nP5QaxZo1puqq1YIAqgZb8e/rABZJWNCNxV7DSTpOO7Aail9J9nYHtua/4ouE/aS0X1qtXQzwGx+rnbi2vhF/TfZG52oc6DPo1WCi3RTDnRk7TEntoEp38gg+DjYs2opkR3JW5EpL9rU0XSK5/6LOTAVS+72x7pm60zSf5HMdldjhzJqw1FRcxXdS3ZNZp0s92FiyluUvBPoD9ynZNkBiu2NF11ofnlnQbZgKqvusj9R/f6DOzgVsahbNlXxlsxU8y7qrbTupitRyxFBKG6H3aEPUqj7YrzAymq41FXlZLlO4WLbvG2Kg4vYB+wPfWS2B5Rq8TW9ROpAZbiF6MmCTsx1NLLsx7NOoOiZup2CNbZ36xc96ErcxzuILGrmmFhimjtwKo/yTm7feTVwB61IzbnW4967Kt3cDDotGt8JKrTiUyO3Uy2PZZt9tapXEfXhWmTgcoB+JchFWsiCKvYnhmn/tKuJDbgly897FnFfkE1rQLKy810OU7xW3bEJHCD5gERtuTGuxoJqA6qI9TNMa6MbvZomsiubbPYx78YXDaaRqqsyqfSaLZdjYGHLu65rDgydXCWm1P5EvcQ828f9pcBapTILSMv1nZCAc0WzFIFsGfUi/kmAxc6cFqDSYuPSMIbs1OVrwITTQM9HVRFJ5JL56qcoFzzT1uVcd2v9jFw8BHlcWtmEI86hp5Dy/zOlK8cUp/rVseRUBqawz6kmAcPLM9l5m8h4V53Iz/2mFJaTCvF8JbsMvPjU/7crbUXart0v4WyE0LnDPcAX95Knj4VUE8HCdNdUP8BDcOXKdPl4uSWbh4LfOV0HDdfipOmu+eIRrDsNPkIT7np/8ZAzVdOd1u8wHIqeXt8VqtgiO50ePeNaGG+uO9rHiKdL71pnIun8jxEKXv2r2HYBzO/mz96vFKoMM5WLk7tQXS9U5kwCu5lk7n6++kdCFWRaTUzm0/5fClWGWTrM/AGhCrJO/ZBQhTPFLwmV7ebgcdttt91222233Xbbbf+H9h+2WEtdHVinLAAAAABJRU5ErkJggg==',
  Q =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAALeGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTAxLTEzVDE5OjEwOjEwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wMS0xM1QxOToxMDoxMCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTQ3NTExNjAtZDY5MC00ZTkzLWFhNGUtNGMwYTViNGU1ZGFjIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRiNzlkYWMtZTJmYS1iNzQ0LWIxM2ItOWU1N2VjMDhhM2YwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMwMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjMwMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNjg2NzJkLWY5NDMtOTU0Mi1iMDBiLTVlMDExNmE1NmIzZSIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxMDoyNjoxNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZjk1NTE1OC04MjFiLTA4NDUtYWJmNS05YTE1NGM1ZTY4NjEiIHN0RXZ0OndoZW49IjIwMjQtMDEtMTNUMTE6MDQ6MDQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZGM1Y2IyNWItZDZlNC0yZjQ2LTgyODQtZmUwOTNlY2M2ZTkxIiBzdEV2dDp3aGVuPSIyMDI0LTAxLTEzVDExOjA0OjA0KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE0NzUxMTYwLWQ2OTAtNGU5My1hYTRlLTRjMGE1YjRlNWRhYyIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxOToxMDoxMCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmNmOTU1MTU4LTgyMWItMDg0NS1hYmY1LTlhMTU0YzVlNjg2MSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM2ZGQ4NTQxLWQ0MWEtYmY0Yy1iZjA3LWNmNjZhNjZhMDg2MSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmQwODAyODAyLTM1MmEtODU0YS05MWI3LTZkZTZkNTJlYjNkMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph2LDQsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA5UExURUdwTNra2s7Ozq2tre3t7dPT087OzuPj4+3t7dbW1u/v79bW1vz8/MrKytDQ0Nzc3MPDw/X19bi4uMZQDnEAAAAKdFJOUwBqEPywotz+wzqApqiTAAAHW0lEQVR42u1b25akIAwcbx2UFoj//7HLTQVBRcSZfTDnbM/uTl/KSlEkwf75eeONN95444033njjjTduR9/0/yOsbqoevObL7101tYX1HFs9QFtfZalRP+rpQVgdAFx990ZnT8L6eZItUl99jeGpf1DxdV/VP9fV1f/PFlF1bYHoVFSRC60IyVjrFRnuB8IoxpExSrstsErKHpJw1eqybNLbAQvAYkKjUrjoBgKRqAaeIjG5+qaps6hKcMWmcdSwqAJWBbAgCZZaIYbsqggqqlHNbFFa5yVR4jKvrKEErOEjNCqNSwHrfE8lpLsod/u+cOPPMPBJ+Gz5dM0cXNgclre+pSxhYI1WW5Tf9ENSMIdLCiWs6q9hwQprBVYKFqyPlx4WtoSvrT9lC/wkGt8qlkQooC3hi6sgW3Bb8gtdpSV/za/mn49pC0oYhONbfyd5hzDLFivKFpTS1gKM0we0tQCEncfgQn7Rt+DC/299i1MSRJcBC0r7VviG5KZvwV5WIUobxHyrJKy8VRjXVgFYsPu5kOtbxdhycCDuihziXVLoW7xwEiUmDgd544B46luWLW+nugMLB2BimmC3cxTNxCDg8xFtuUSNqoFsDKzY8psa+XtBNWXr74N6qxwsS5T6VL5robKl10+ZRu5S9qBvUYuJwVHzjwjrE3G33qKh+WXBgmkmCvHYquTvZ8oo7rLFA4PJgYW0MdePIRQIGUPNbSMw5lubJMKtJI6+Wk6cVFMmACO+VVryeL7ZgI8MhwS2fnNPPK0geHBRd11eJSiyL4KjrL2umm1XIpRii1MKB/mU/iCZwF+pt5z3UJ7UiF3nQqadAXC3T3xEW2IyuDBe3yDTe0+A64it2WTyYSGVHymUI/EduvSWKJ80Dtv2NbYSoQxbMkVC7yzNGIWFvDF7gRD79RYrWW/BDGti4wwLtgvO7gWKUZ8Mt94qX8vLJE70+xVNwzDm9ghNM+FX7p/jlZUId2HJD+Tf79hMe3WNrAK/30E+C8/6xOCqbqxE5JNMYrNbnaLUvJAewfCg8zF0Ba/tbviWLvPYfsGFA1PVD8ZdnjlVc/DS/o7LK4NHjOjKKbfCTSCo5XmwKbaZM4jlc9NGEYd9Ijd0QS5ZGaOR2O+DPlGyRb2nXZzgnI1GdFWF+0gh3ifyTRqvzpXI2eElk58FeHziCF5hY+hSMV9Ge/mohUTGuQ4vzHYe8bW5sNdFQ58St22Vcf5zzJbtcGT4iYQ7iz8dFuxoWRYMjAM7KCnypHOTLSqdUwYIFpndOD/6B2FBzNQxYmW/zxYE4j8yLHga1s2Rbm/O5PXtGcuNDIW1dTj5hpjGsO+7z2Kk9NP1JWDlnWKAM4H6zCUNM05KyVPHBclYzUbgjE3N3tP2JWHBmbqD4GLeCs2jhMT13lMVljwcEbetwZgtHUxVQ21ho3fE7inf2s8vzMWq0EWpfOBg5hcDSGwaF2+LaysRIzNFqRgBv2sMhi/Ix0WiW8rBKNBv4ExBI7eorx9ANazsPCb5FkSNH+Reacos+AYxaFzX76KMH65c8ytzZ40YvpFAqtgC/otn1eCmMI5K8yVRQVVwq3aVtU+jJktwjyP7x+BKv8vtoH098vXYSJcrWGJcAW11r8WVRxe5vgcuFbXqwnaEZejS6mrLwYKUg1ch2RJswTFYgMOwoau+AQsSp/FuDhVZi7J402ifgGla/GJIzGLYG5H4rnKMCUydL9wcsmZSuPikR2QmjQbWqaV2ob2RdMvaLEvFlRiXpYeTwqVOtMZF+qi0dS4uEjJKMvWuYK3S0jHZwaq7BylYp/O2uu3q04lNqudLWEJQd/3paTBz12IaLIPtzE5P1AUuW9TB8NVzaG9/TIfV+eXsWeezz6HWlptEbo4SIAeWur/Y/RZC/gmZTiLzUY2j5ct6fjKsFvxqgyQxE9sbmfYtnJMIciEKo6+FL0wziJmtkzspIcUl0PgWrL7VCKP7hl61U4WLeN+7Ieli2vZhmq0VgjDOgIyhJ62sSpDkWNZa1wiB8WoLlxzy29XpGVPgn1ut5VYcGyRLK7OCiJaDYMrAneJUkZWdw0yDgNm5nDowqLc0Kp581FO7QS4pC9S/YRW9xkVdNOj0ZHCp9anEZw3VEK/fopiDrkMObkcdJtT1g6+uzQ60bIdUPztdWZWy53m+v/zFYPOGHO4AZsalmtJNkyHrCAx1RXX7mt5g1L1pDezpkXv8wJwpVRSSaf2c26Y0rrXXxyWBptu/ovdak+VhkqjGBZUdvKygqANKA/MqZ/36kcGwFn90RnWp66ksKuHgitLFY8BU+F2ZvqpxpMY9qR3YwOUJ12fc0KUHVKdswcKXuwetErCnwvMKuXxfc/3RVJ2yFc+iosQd3X+WGSVz1UiuN2J156FyVyHbsOUp3krezaPUT/VxXqdfwvknb/Zgp+idTxTbrkLqYuKreRnhy65Gf4W0NsDoYiqf6uZsvr8V9eo6XWc5+3TVf/3N1TfeeOONN95444033njjjTfeSI1/IeOYOeO4fGAAAAAASUVORK5CYII=',
  _ =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAElBMVEVRUVH+/v5HcEyZmZlRUVFRUVGm1ByOAAAABnRSTlPMzADMTZAJBBGsAAAEnElEQVR42t2cS27jMAyGf7/2U+QCQeDsbeQCgZDujaC5/1UmkzaJn+JDFGcw3LdfflKibJkkDnxrL7dbg7sNt6+L4O8OYBM+B0ys+QrGkHZG+OEEQ8g6go8Bx1GIGMdpNOQyIG6XdMgnSPtKhLQDGEZFBgYMkhKFtGBb0EIEjDgFRowoBVaMGAWpMedEfxMiZtwpUsgZCqtlkCNUdpVAWigtCCCDFtLwIWeoreZCWiRYYEKGFEjDg+yRZCUH0iLRAgNyToXUNCRZyMqWhGnUN2IPm3wSlwJ7IUspyCBkIQUZhCykIIeQuRTkEDKXAuM9srrtYbrZN7Y98giZSoFd+t1OxmMITG0dcrSFXFchZ1tIvQZpYWxhBbK3hpQrkMEa0iwh5t4a+QvZvDXyF7J5a+Qv5PPW21/I5623v5DPW29/IaO3Xv5Clrw1y1/Ikrdm+Qs5svw83yNnSJ5BQb4F/F7EIEJSnThGBAXxkFQfLOviQUE8JAUPsosHBfGQfDAtHhREQ1JxIV00KIgmrnRI84S0yAd5BAXxxJUck0f6Qnwr9qmr6xF5xLMjcwn/iudIEAdWnyjkEXlQKZiRVzoqRyLbgeUKKR8Q4alY7cSnoxzSf2ggsqehKr6YVpcXpOd7H93f60cKhOd7Re2LteUF4eLqiVS1mr0ge4io6C2+soaFkJ7MuuuQs1yITEp9hwwKISIpzR2iESKSIoT0rLNwuVHQqoSIpAQJpGce60vIUSdEIuUqgPTsJ5QFZK8UIpBS8iG94GFrDjlrhfCl8CG96Llxmle4kEr6vKWBPIVo9kqDQSRk9/3cWoikcCFPAd33v4dIChPyEvLzBA6RlEYWke4JEUnhKXkLeUEKxRHJFfKCQHGucIW8IdZSRkLeEGMpYyEjiK2UsZARxFTKRMgYYillImQMMZQyFTKB2EmZCplAuFLIHT8TMoWwpQwiIVMIUwqpZP5bp5CCvCTiQKr5f5lCQN+tPCBn2ZvVDFJwIDUP0m1BYAfZYRNSsCB7BqTbhoARePIxtZ9tgwWkoJcwCalmv3MBAemtO4R6dah2HaKQqj8Zvp9sQDjvJ21+SPCBHPJDDk6QITekEV7gqCC19CpKAym9IMfckKv4olMBCeIrWwVEfvkshzQekO9r9P1/ALk+IG1eSPCDiCJfyG+FyU+A6ZCa/piZDinpz7LpkCv5gdkAEshP5emQhv7onw6pGeULyZCSUYiRDAmMkpJkCKs4JhFSq8p8hJBSVbAkhARV6ZUQoisik0FqXTmcDHLVFfbJIEFXoiiCNMpiSxGkVJaNiiBBWQArgTTaUl4JpNQWJUsgQVteXQg+AKkLxQWFGKW+5J2+eVp4S168X3CF1CltCKdTJ8lb84YK2bUBO+wZW0Pqv9nk4tKu49N45NJC5dMM5tLW5tOg59Jq6NM06dL+abFXwr/RkuvTXJwae1abtE/Dt0/ruksTvs84AZ/BCC4jHnyGVfiM3VBQFANEXEah+Ax18RlP4zNox2dkkM/wI58xTn8yDCXGYCDV3W5RGSajtXyGhG1jbpbjzpwGt/0MJft8jqC7iUbQ/QZaxdnKqcIftwAAAABJRU5ErkJggg==';
const J = E(
    {
      name: 'z-paging-empty-view',
      data: () => ({}),
      props: {
        emptyViewText: { type: String, default: '没有数据哦~' },
        emptyViewImg: { type: String, default: '' },
        showEmptyViewReload: { type: Boolean, default: !1 },
        emptyViewReloadText: { type: String, default: '重新加载' },
        isLoadFailed: { type: Boolean, default: !1 },
        emptyViewStyle: {
          type: Object,
          default: function () {
            return {};
          }
        },
        emptyViewImgStyle: {
          type: Object,
          default: function () {
            return {};
          }
        },
        emptyViewTitleStyle: {
          type: Object,
          default: function () {
            return {};
          }
        },
        emptyViewReloadStyle: {
          type: Object,
          default: function () {
            return {};
          }
        },
        emptyViewZIndex: { type: Number, default: 9 },
        emptyViewFixed: { type: Boolean, default: !0 },
        unit: { type: String, default: 'rpx' }
      },
      computed: {
        emptyImg() {
          return this.isLoadFailed ? Q : G;
        },
        finalEmptyViewStyle() {
          return (this.emptyViewStyle['z-index'] = this.emptyViewZIndex), this.emptyViewStyle;
        }
      },
      methods: {
        reloadClick() {
          this.$emit('reload');
        },
        emptyViewClick() {
          this.$emit('viewClick');
        }
      }
    },
    [
      [
        'render',
        function (e, l, m, f, T, y) {
          const S = h,
            R = n,
            w = d;
          return (
            t(),
            i(
              w,
              {
                class: c({ 'zp-container': !0, 'zp-container-fixed': m.emptyViewFixed }),
                style: g([y.finalEmptyViewStyle]),
                onClick: y.emptyViewClick
              },
              {
                default: o(() => [
                  a(
                    w,
                    { class: 'zp-main' },
                    {
                      default: o(() => [
                        m.emptyViewImg.length
                          ? (t(),
                            i(
                              S,
                              {
                                key: 1,
                                class: c({
                                  'zp-main-image-rpx': 'rpx' === m.unit,
                                  'zp-main-image-px': 'px' === m.unit
                                }),
                                mode: 'aspectFit',
                                style: g([m.emptyViewImgStyle]),
                                src: m.emptyViewImg
                              },
                              null,
                              8,
                              ['class', 'style', 'src']
                            ))
                          : (t(),
                            i(
                              S,
                              {
                                key: 0,
                                class: c({
                                  'zp-main-image-rpx': 'rpx' === m.unit,
                                  'zp-main-image-px': 'px' === m.unit
                                }),
                                style: g([m.emptyViewImgStyle]),
                                src: y.emptyImg
                              },
                              null,
                              8,
                              ['class', 'style', 'src']
                            )),
                        a(
                          R,
                          {
                            class: c([
                              'zp-main-title',
                              {
                                'zp-main-title-rpx': 'rpx' === m.unit,
                                'zp-main-title-px': 'px' === m.unit
                              }
                            ]),
                            style: g([m.emptyViewTitleStyle])
                          },
                          { default: o(() => [s(r(m.emptyViewText), 1)]), _: 1 },
                          8,
                          ['class', 'style']
                        ),
                        m.showEmptyViewReload
                          ? (t(),
                            i(
                              R,
                              {
                                key: 2,
                                class: c({
                                  'zp-main-error-btn': !0,
                                  'zp-main-error-btn-rpx': 'rpx' === m.unit,
                                  'zp-main-error-btn-px': 'px' === m.unit
                                }),
                                style: g([m.emptyViewReloadStyle]),
                                onClick: u(y.reloadClick, ['stop'])
                              },
                              { default: o(() => [s(r(m.emptyViewReloadText), 1)]), _: 1 },
                              8,
                              ['class', 'style', 'onClick']
                            ))
                          : p('', !0)
                      ]),
                      _: 1
                    }
                  )
                ]),
                _: 1
              },
              8,
              ['class', 'style', 'onClick']
            )
          );
        }
      ],
      ['__scopeId', 'data-v-5b8c527d']
    ]
  ),
  K = '2.7.6',
  X = 100,
  q = 'z-paging-error-emit',
  $ = 'z-paging-complete-emit',
  ee = 'z-paging-cache',
  te = 'zp_index',
  ie = 'zp_unique_index',
  oe = {},
  ae = 'Z-PAGING-REFRESHER-TIME-STORAGE-KEY';
let se = null,
  re = !1;
const le = {};
function he() {
  return f(ae);
}
function ne() {
  return new Date().getTime();
}
function de(e) {
  return 1 === (e = e.toString()).length ? '0' + e : e;
}
const ce = {
    gc: function (e, t) {
      return () => {
        if (
          ((function () {
            if (re) return;
            oe && Object.keys(oe).length && (se = oe);
            !se && uni.$zp && (se = uni.$zp.config);
            (se = se
              ? Object.keys(se).reduce(
                  (e, t) => (
                    (e[
                      (function (e) {
                        return e.replace(/-([a-z])/g, (e, t) => t.toUpperCase());
                      })(t)
                    ] = se[t]),
                    e
                  ),
                  {}
                )
              : null),
              (re = !0);
          })(),
          !se)
        )
          return t;
        const i = se[e];
        return void 0 === i ? t : i;
      };
    },
    setRefesrherTime: function (e, t) {
      const i = he() || {};
      (i[t] = e), m(ae, i);
    },
    getRefesrherFormatTimeByKey: function (e, t) {
      const i = (function (e) {
          const t = he();
          return t && t[e] ? t[e] : null;
        })(e),
        o = i
          ? (function (e, t) {
              const i = new Date(e),
                o = new Date(),
                a = new Date(e).setHours(0, 0, 0, 0),
                s = new Date().setHours(0, 0, 0, 0),
                r = a - s;
              let l = '';
              const h = (function (e) {
                const t = e.getHours(),
                  i = e.getMinutes();
                return `${de(t)}:${de(i)}`;
              })(i);
              l =
                0 === r
                  ? t.today
                  : -864e5 === r
                  ? t.yesterday
                  : (function (e, t = !0) {
                      const i = e.getFullYear(),
                        o = e.getMonth() + 1,
                        a = e.getDate();
                      return t ? `${i}-${de(o)}-${de(a)}` : `${de(o)}-${de(a)}`;
                    })(i, i.getFullYear() !== o.getFullYear());
              return `${l} ${h}`;
            })(i, t)
          : t.none;
      return `${t.title}${o}`;
    },
    getTouch: function (e) {
      let t = null;
      if (e.touches && e.touches.length) t = e.touches[0];
      else if (e.changedTouches && e.changedTouches.length) t = e.changedTouches[0];
      else {
        if (!e.datail || e.datail == {}) return { touchX: 0, touchY: 0 };
        t = e.datail;
      }
      return { touchX: t.clientX, touchY: t.clientY };
    },
    getTouchFromZPaging: function e(t) {
      if (t && t.tagName && 'BODY' !== t.tagName && 'UNI-PAGE-BODY' !== t.tagName) {
        const i = t.classList;
        return i && i.contains('z-paging-content')
          ? {
              isFromZp: !0,
              isPageScroll: i.contains('z-paging-content-page'),
              isReachedTop: i.contains('z-paging-reached-top'),
              isUseChatRecordMode: i.contains('z-paging-use-chat-record-mode')
            }
          : e(t.parentNode);
      }
      return { isFromZp: !1 };
    },
    getParent: function e(t) {
      return t ? (t.$refs.paging ? t : e(t.$parent)) : null;
    },
    convertToPx: function (e) {
      if ('[object Number]' === Object.prototype.toString.call(e)) return e;
      let t = !1;
      return (
        -1 !== e.indexOf('rpx') || -1 !== e.indexOf('upx')
          ? ((e = e.replace('rpx', '').replace('upx', '')), (t = !0))
          : -1 !== e.indexOf('px') && (e = e.replace('px', '')),
        isNaN(e) ? 0 : Number(t ? T(e) : e)
      );
    },
    getTime: ne,
    getInstanceId: function () {
      const e = [];
      for (let t = 0; t < 10; t++)
        e[t] = '0123456789abcdef'.substr(Math.floor(16 * Math.random()), 1);
      return e.join('') + ne();
    },
    consoleErr: function (e) {
      console.error(`[z-paging]${e}`);
    },
    delay: function (e, t = X, i) {
      const o = setTimeout(e, t);
      return i && (le[i] && clearTimeout(le[i]), (le[i] = o)), o;
    },
    wait: function (e) {
      return new Promise((t) => {
        setTimeout(t, e);
      });
    },
    addUnit: function (e, t) {
      if ('[object String]' === Object.prototype.toString.call(e)) {
        let t = e;
        (t = t.replace('rpx', '').replace('upx', '').replace('px', '')),
          -1 === e.indexOf('rpx') &&
            -1 === e.indexOf('upx') &&
            -1 !== e.indexOf('px') &&
            (t = 2 * parseFloat(t)),
          (e = t);
      }
      return 'rpx' === t ? e + 'rpx' : e / 2 + 'px';
    }
  },
  ge = {
    LoadingType: { Refresher: 0, LoadingMore: 1 },
    Refresher: { Default: 0, ReleaseToRefresh: 1, Loading: 2, Complete: 3 },
    More: { Default: 0, Loading: 1, NoMore: 2, Fail: 3 },
    QueryFrom: { UserPullDown: 0, Reload: 1, Refresh: 2, LoadingMore: 3 },
    CellHeightMode: { Fixed: 'fixed', Dynamic: 'dynamic' },
    CacheMode: { Default: 'default', Always: 'always' }
  };
const ue = E(
  {
    name: 'z-paging-refresh',
    data: () => ({
      R: ge.Refresher,
      isIos: 'ios' === y().platform,
      refresherTimeText: '',
      zTheme: {
        title: { white: '#efefef', black: '#555555' },
        arrow: { white: F, black: Z },
        flower: { white: O, black: j },
        success: { white: Y, black: U },
        indicator: { white: '#eeeeee', black: '#777777' }
      }
    }),
    props: [
      'status',
      'defaultThemeStyle',
      'defaultText',
      'pullingText',
      'refreshingText',
      'completeText',
      'defaultImg',
      'pullingImg',
      'refreshingImg',
      'completeImg',
      'refreshingAnimated',
      'showUpdateTime',
      'updateTimeKey',
      'imgStyle',
      'titleStyle',
      'updateTimeStyle',
      'updateTimeTextMap',
      'unit'
    ],
    computed: {
      ts() {
        return this.defaultThemeStyle;
      },
      statusTextArr() {
        return (
          this.updateTime(),
          [this.defaultText, this.pullingText, this.refreshingText, this.completeText]
        );
      },
      currentTitle() {
        return this.statusTextArr[this.status] || this.defaultText;
      },
      leftImageClass() {
        const e = `zp-r-left-image-pre-size-${this.unit}`;
        return this.status === this.R.Complete
          ? e
          : `zp-r-left-image ${e} ${
              this.status === this.R.Default ? 'zp-r-arrow-down' : 'zp-r-arrow-top'
            }`;
      },
      leftImageStyle() {
        const e = this.showUpdateTime,
          t = e ? ce.addUnit(36, this.unit) : ce.addUnit(34, this.unit);
        return {
          width: t,
          height: t,
          'margin-right': e ? ce.addUnit(20, this.unit) : ce.addUnit(9, this.unit)
        };
      },
      leftImageSrc() {
        const e = this.R,
          t = this.status;
        return t === e.Default
          ? this.defaultImg
            ? this.defaultImg
            : this.zTheme.arrow[this.ts]
          : t === e.ReleaseToRefresh
          ? this.pullingImg
            ? this.pullingImg
            : this.defaultImg
            ? this.defaultImg
            : this.zTheme.arrow[this.ts]
          : t === e.Loading
          ? this.refreshingImg
            ? this.refreshingImg
            : this.zTheme.flower[this.ts]
          : t === e.Complete
          ? this.completeImg
            ? this.completeImg
            : this.zTheme.success[this.ts]
          : '';
      },
      rightTextStyle() {
        let e = {};
        return (
          (e.color = this.zTheme.title[this.ts]), (e['font-size'] = ce.addUnit(30, this.unit)), e
        );
      }
    },
    methods: {
      addUnit: (e, t) => ce.addUnit(e, t),
      updateTime() {
        this.showUpdateTime &&
          (this.refresherTimeText = ce.getRefesrherFormatTimeByKey(
            this.updateTimeKey,
            this.updateTimeTextMap
          ));
      }
    }
  },
  [
    [
      'render',
      function (e, l, u, m, f, T) {
        const y = h,
          S = d,
          R = n;
        return (
          t(),
          i(
            S,
            { style: { height: '100%' } },
            {
              default: o(() => [
                a(
                  S,
                  {
                    class: c(
                      u.showUpdateTime ? 'zp-r-container zp-r-container-padding' : 'zp-r-container'
                    )
                  },
                  {
                    default: o(() => [
                      a(
                        S,
                        { class: 'zp-r-left' },
                        {
                          default: o(() => [
                            u.status !== f.R.Loading
                              ? (t(),
                                i(
                                  y,
                                  {
                                    key: 0,
                                    class: c(T.leftImageClass),
                                    style: g([T.leftImageStyle, u.imgStyle]),
                                    src: T.leftImageSrc
                                  },
                                  null,
                                  8,
                                  ['class', 'style', 'src']
                                ))
                              : (t(),
                                i(
                                  y,
                                  {
                                    key: 1,
                                    class: c({
                                      'zp-line-loading-image': u.refreshingAnimated,
                                      'zp-r-left-image': !0,
                                      'zp-r-left-image-pre-size-rpx': 'rpx' === u.unit,
                                      'zp-r-left-image-pre-size-px': 'px' === u.unit
                                    }),
                                    style: g([T.leftImageStyle, u.imgStyle]),
                                    src: T.leftImageSrc
                                  },
                                  null,
                                  8,
                                  ['class', 'style', 'src']
                                ))
                          ]),
                          _: 1
                        }
                      ),
                      a(
                        S,
                        { class: 'zp-r-right' },
                        {
                          default: o(() => [
                            a(
                              R,
                              {
                                class: 'zp-r-right-text',
                                style: g([T.rightTextStyle, u.titleStyle])
                              },
                              { default: o(() => [s(r(T.currentTitle), 1)]), _: 1 },
                              8,
                              ['style']
                            ),
                            u.showUpdateTime && f.refresherTimeText.length
                              ? (t(),
                                i(
                                  R,
                                  {
                                    key: 0,
                                    class: c([
                                      'zp-r-right-text',
                                      {
                                        'zp-r-right-time-text-rpx': 'rpx' === u.unit,
                                        'zp-r-right-time-text-px': 'px' === u.unit
                                      }
                                    ]),
                                    style: g([{ color: f.zTheme.title[T.ts] }, u.updateTimeStyle])
                                  },
                                  { default: o(() => [s(r(f.refresherTimeText), 1)]), _: 1 },
                                  8,
                                  ['class', 'style']
                                ))
                              : p('', !0)
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ['class']
                )
              ]),
              _: 1
            }
          )
        );
      }
    ],
    ['__scopeId', 'data-v-6fbebe13']
  ]
);
const pe = E(
    {
      name: 'z-paging-load-more',
      data: () => ({
        M: ge.More,
        zTheme: {
          title: { white: '#efefef', black: '#a4a4a4' },
          line: { white: '#efefef', black: '#eeeeee' },
          circleBorder: { white: '#aaaaaa', black: '#c8c8c8' },
          circleBorderTop: { white: '#ffffff', black: '#444444' },
          flower: { white: O, black: j },
          indicator: { white: '#eeeeee', black: '#777777' }
        }
      }),
      props: ['zConfig'],
      computed: {
        ts() {
          return this.c.defaultThemeStyle;
        },
        c() {
          return this.zConfig || {};
        },
        ownLoadingMoreText() {
          return [this.c.defaultText, this.c.loadingText, this.c.noMoreText, this.c.failText][
            this.finalStatus
          ];
        },
        finalStatus() {
          return this.c.defaultAsLoading && this.c.status === this.M.Default
            ? this.M.Loading
            : this.c.status;
        },
        finalLoadingIconType() {
          return this.c.loadingIconType;
        }
      },
      methods: {
        doClick() {
          this.$emit('doClick');
        }
      }
    },
    [
      [
        'render',
        function (e, a, l, u, m, f) {
          const T = n,
            y = h,
            w = d;
          return (
            t(),
            i(
              w,
              {
                class: c([
                  'zp-l-container',
                  {
                    'zp-l-container-rpx': 'rpx' === f.c.unit,
                    'zp-l-container-px': 'px' === f.c.unit
                  }
                ]),
                style: g([f.c.customStyle]),
                onClick: f.doClick
              },
              {
                default: o(() => [
                  f.c.hideContent
                    ? p('', !0)
                    : (t(),
                      S(
                        R,
                        { key: 0 },
                        [
                          f.c.showNoMoreLine && f.finalStatus === m.M.NoMore
                            ? (t(),
                              i(
                                T,
                                {
                                  key: 0,
                                  class: c({
                                    'zp-l-line-rpx': 'rpx' === f.c.unit,
                                    'zp-l-line-px': 'px' === f.c.unit
                                  }),
                                  style: g([
                                    { backgroundColor: m.zTheme.line[f.ts] },
                                    f.c.noMoreLineCustomStyle
                                  ])
                                },
                                null,
                                8,
                                ['class', 'style']
                              ))
                            : p('', !0),
                          f.finalStatus === m.M.Loading && f.c.loadingIconCustomImage
                            ? (t(),
                              i(
                                y,
                                {
                                  key: 1,
                                  src: f.c.loadingIconCustomImage,
                                  style: g([f.c.iconCustomStyle]),
                                  class: c({
                                    'zp-l-line-loading-custom-image': !0,
                                    'zp-l-line-loading-custom-image-animated': f.c.loadingAnimated,
                                    'zp-l-line-loading-custom-image-rpx': 'rpx' === f.c.unit,
                                    'zp-l-line-loading-custom-image-px': 'px' === f.c.unit
                                  })
                                },
                                null,
                                8,
                                ['src', 'style', 'class']
                              ))
                            : p('', !0),
                          f.finalStatus !== m.M.Loading ||
                          'flower' !== f.finalLoadingIconType ||
                          f.c.loadingIconCustomImage.length
                            ? p('', !0)
                            : (t(),
                              i(
                                y,
                                {
                                  key: 2,
                                  class: c({
                                    'zp-line-loading-image': !0,
                                    'zp-line-loading-image-rpx': 'rpx' === f.c.unit,
                                    'zp-line-loading-image-px': 'px' === f.c.unit
                                  }),
                                  style: g([f.c.iconCustomStyle]),
                                  src: m.zTheme.flower[f.ts]
                                },
                                null,
                                8,
                                ['class', 'style', 'src']
                              )),
                          f.finalStatus !== m.M.Loading ||
                          'circle' !== f.finalLoadingIconType ||
                          f.c.loadingIconCustomImage.length
                            ? p('', !0)
                            : (t(),
                              i(
                                T,
                                {
                                  key: 3,
                                  class: c([
                                    'zp-l-circle-loading-view',
                                    {
                                      'zp-l-circle-loading-view-rpx': 'rpx' === f.c.unit,
                                      'zp-l-circle-loading-view-px': 'px' === f.c.unit
                                    }
                                  ]),
                                  style: g([
                                    {
                                      borderColor: m.zTheme.circleBorder[f.ts],
                                      borderTopColor: m.zTheme.circleBorderTop[f.ts]
                                    },
                                    f.c.iconCustomStyle
                                  ])
                                },
                                null,
                                8,
                                ['class', 'style']
                              )),
                          !f.c.isChat ||
                          (!f.c.chatDefaultAsLoading && f.finalStatus === m.M.Default) ||
                          f.finalStatus === m.M.Fail
                            ? (t(),
                              i(
                                T,
                                {
                                  key: 4,
                                  class: c({
                                    'zp-l-text-rpx': 'rpx' === f.c.unit,
                                    'zp-l-text-px': 'px' === f.c.unit
                                  }),
                                  style: g([{ color: m.zTheme.title[f.ts] }, f.c.titleCustomStyle])
                                },
                                { default: o(() => [s(r(f.ownLoadingMoreText), 1)]), _: 1 },
                                8,
                                ['class', 'style']
                              ))
                            : p('', !0),
                          f.c.showNoMoreLine && f.finalStatus === m.M.NoMore
                            ? (t(),
                              i(
                                T,
                                {
                                  key: 5,
                                  class: c({
                                    'zp-l-line-rpx': 'rpx' === f.c.unit,
                                    'zp-l-line-px': 'px' === f.c.unit
                                  }),
                                  style: g([
                                    { backgroundColor: m.zTheme.line[f.ts] },
                                    f.c.noMoreLineCustomStyle
                                  ])
                                },
                                null,
                                8,
                                ['class', 'style']
                              ))
                            : p('', !0)
                        ],
                        64
                      ))
                ]),
                _: 1
              },
              8,
              ['class', 'style', 'onClick']
            )
          );
        }
      ],
      ['__scopeId', 'data-v-57f25fe5']
    ]
  ),
  me = {
    data: () => ({ systemInfo: null, cssSafeAreaInsetBottom: -1, isReadyDestroy: !1 }),
    computed: {
      windowTop() {
        if (!this.systemInfo) return 0;
        return (
          (document.getElementsByTagName('uni-page-head').length && this.systemInfo.windowTop) || 0
        );
      },
      safeAreaBottom() {
        if (!this.systemInfo) return 0;
        let e = 0;
        return (e = Math.max(this.cssSafeAreaInsetBottom, 0)), e;
      },
      isOldWebView() {
        try {
          const e = y().system.split(' '),
            t = e[0],
            i = parseInt(e[1]);
          if (('iOS' === t && i <= 10) || ('Android' === t && i <= 6)) return !0;
        } catch (e) {
          return !1;
        }
        return !1;
      },
      zSlots() {
        return this.$slots;
      }
    },
    beforeDestroy() {
      this.isReadyDestroy = !0;
    },
    unmounted() {
      this.isReadyDestroy = !0;
    },
    methods: {
      updateFixedLayout() {
        this.fixed &&
          this.$nextTick(() => {
            this.systemInfo = y();
          });
      },
      _getNodeClientRect(e, t = !0, i = !1) {
        if (this.isReadyDestroy) return Promise.resolve(!1);
        let o = t ? w().in(!0 === t ? this : t) : w();
        return (
          i ? o.select(e).scrollOffset() : o.select(e).boundingClientRect(),
          new Promise((e, t) => {
            o.exec((t) => {
              e(!(!t || '' == t || null == t || !t.length) && t);
            });
          })
        );
      },
      _updateLeftAndRightWidth(e, t) {
        this.$nextTick(() => {
          setTimeout(() => {
            ['left', 'right'].map((i) => {
              this._getNodeClientRect(`.${t}-${i}`).then((t) => {
                this.$set(e, i, t ? t[0].width + 'px' : '0px');
              });
            });
          }, 0);
        });
      },
      _getCssSafeAreaInsetBottom(e) {
        this._getNodeClientRect('.zp-safe-area-inset-bottom').then((t) => {
          (this.cssSafeAreaInsetBottom = t ? t[0].height : -1), t && e && e();
        });
      }
    }
  };
function fe() {
  return M();
}
const Te = {
    handleQuery: function (e) {
      try {
        setTimeout(function () {
          fe().globalData.zp_handleQueryCallback = e;
        }, 1);
      } catch (t) {}
    },
    _handleQuery: function (e, t, i, o) {
      const a = fe().globalData.zp_handleQueryCallback;
      return a ? a(e, t, i, o) : [e, t, i];
    },
    handleLanguage2Local: function (e) {
      try {
        setTimeout(function () {
          fe().globalData.zp_handleLanguage2LocalCallback = e;
        }, 1);
      } catch (t) {}
    },
    _handleLanguage2Local: function (e, t) {
      const i = fe().globalData.zp_handleLanguage2LocalCallback;
      return i ? i(e, t) : t;
    }
  },
  ye = {
    props: {
      defaultPageNo: {
        type: [Number, String],
        default: ce.gc('defaultPageNo', 1),
        observer: function (e) {
          this.pageNo = e;
        }
      },
      defaultPageSize: {
        type: [Number, String],
        default: ce.gc('defaultPageSize', 10),
        validator: (e) => (e <= 0 && ce.consoleErr('default-page-size必须大于0！'), e > 0)
      },
      dataKey: { type: [Number, String, Object], default: ce.gc('dataKey', null) },
      useCache: { type: Boolean, default: ce.gc('useCache', !1) },
      cacheKey: { type: String, default: ce.gc('cacheKey', null) },
      cacheMode: { type: String, default: ce.gc('cacheMode', ge.CacheMode.Default) },
      autowireListName: { type: String, default: ce.gc('autowireListName', '') },
      autowireQueryName: { type: String, default: ce.gc('autowireQueryName', '') },
      auto: { type: Boolean, default: ce.gc('auto', !0) },
      reloadWhenRefresh: { type: Boolean, default: ce.gc('reloadWhenRefresh', !0) },
      autoScrollToTopWhenReload: { type: Boolean, default: ce.gc('autoScrollToTopWhenReload', !0) },
      autoCleanListWhenReload: { type: Boolean, default: ce.gc('autoCleanListWhenReload', !0) },
      showRefresherWhenReload: { type: Boolean, default: ce.gc('showRefresherWhenReload', !1) },
      showLoadingMoreWhenReload: { type: Boolean, default: ce.gc('showLoadingMoreWhenReload', !1) },
      createdReload: { type: Boolean, default: ce.gc('createdReload', !1) },
      localPagingLoadingTime: {
        type: [Number, String],
        default: ce.gc('localPagingLoadingTime', 200)
      },
      concat: { type: Boolean, default: ce.gc('concat', !0) },
      callNetworkReject: { type: Boolean, default: ce.gc('callNetworkReject', !0) },
      value: {
        type: Array,
        default: function () {
          return [];
        }
      },
      modelValue: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    data: () => ({
      currentData: [],
      totalData: [],
      realTotalData: [],
      totalLocalPagingList: [],
      dataPromiseResultMap: { reload: null, complete: null, localPaging: null },
      isSettingCacheList: !1,
      pageNo: 1,
      currentRefreshPageSize: 0,
      isLocalPaging: !1,
      isAddedData: !1,
      isTotalChangeFromAddData: !1,
      privateConcat: !0,
      myParentQuery: -1,
      firstPageLoaded: !1,
      pagingLoaded: !1,
      loaded: !1,
      isUserReload: !0,
      fromEmptyViewReload: !1,
      queryFrom: '',
      listRendering: !1,
      isHandlingRefreshToPage: !1,
      isFirstPageAndNoMore: !1,
      totalDataChangeThrow: !0
    }),
    computed: {
      pageSize() {
        return this.defaultPageSize;
      },
      finalConcat() {
        return this.concat && this.privateConcat;
      },
      finalUseCache() {
        return (
          this.useCache &&
            !this.cacheKey &&
            ce.consoleErr('use-cache为true时，必须设置cache-key，否则缓存无效！'),
          this.useCache && !!this.cacheKey
        );
      },
      finalCacheKey() {
        return this.cacheKey ? `${ee}-${this.cacheKey}` : null;
      },
      isFirstPage() {
        return this.pageNo === this.defaultPageNo;
      }
    },
    watch: {
      totalData(e, t) {
        this._totalDataChange(e, t, this.totalDataChangeThrow), (this.totalDataChangeThrow = !0);
      },
      currentData(e, t) {
        this._currentDataChange(e, t);
      },
      useChatRecordMode(e, t) {
        e && (this.nLoadingMoreFixedHeight = !1);
      },
      value: {
        handler(e) {
          e !== this.totalData && ((this.totalDataChangeThrow = !1), (this.totalData = e));
        },
        immediate: !0
      },
      modelValue: {
        handler(e) {
          e !== this.totalData && ((this.totalDataChangeThrow = !1), (this.totalData = e));
        },
        immediate: !0
      }
    },
    methods: {
      complete(e, t = !0) {
        return (this.customNoMore = -1), this.addData(e, t);
      },
      completeByKey(e, t = null, i = !0) {
        return null !== t && null !== this.dataKey && t !== this.dataKey
          ? (this.isFirstPage && this.endRefresh(), new Promise((e) => e()))
          : ((this.customNoMore = -1), this.addData(e, i));
      },
      completeByTotal(e, t, i = !0) {
        if ('undefined' == t) this.customNoMore = -1;
        else {
          const o = this._checkDataType(e, i, !1);
          if (((e = o.data), (i = o.success), t >= 0 && i))
            return new Promise((o, a) => {
              this.$nextTick(() => {
                let s = !1;
                let r =
                  (this.pageNo == this.defaultPageNo ? 0 : this.realTotalData.length) +
                  (this.privateConcat ? e.length : 0) -
                  t;
                r >= 0 &&
                  ((s = !0),
                  (r = this.defaultPageSize - r),
                  this.privateConcat && r > 0 && r < e.length && (e = e.splice(0, r))),
                  this.completeByNoMore(e, s, i)
                    .then((e) => o(e))
                    .catch(() => a());
              });
            });
        }
        return this.addData(e, i);
      },
      completeByNoMore(e, t, i = !0) {
        return 'undefined' != t && (this.customNoMore = 1 == t ? 1 : 0), this.addData(e, i);
      },
      completeByError(e) {
        return (this.customerEmptyViewErrorText = e), this.complete(!1);
      },
      addData(e, t = !0) {
        this.fromCompleteEmit || ((this.disabledCompleteEmit = !0), (this.fromCompleteEmit = !1));
        const i = ce.getTime() - this.requestTimeStamp;
        let o = this.minDelay;
        this.isFirstPage && this.finalShowRefresherWhenReload && (o = Math.max(400, o));
        const a = this.requestTimeStamp > 0 && i < o ? o - i : 0;
        return (
          this.$nextTick(() => {
            ce.delay(
              () => {
                this._addData(e, t, !1);
              },
              this.delay > 0 ? this.delay : a
            );
          }),
          new Promise((e, t) => {
            this.dataPromiseResultMap.complete = { resolve: e, reject: t };
          })
        );
      },
      addDataFromTop(e, t = !0, i = !0) {
        let o = !this.isChatRecordModeAndNotInversion;
        (e = '[object Array]' !== Object.prototype.toString.call(e) ? [e] : o ? e.reverse() : e),
          this.finalUseVirtualList && this._setCellIndex(e, 'top'),
          (this.totalData = o ? [...e, ...this.totalData] : [...this.totalData, ...e]),
          t &&
            ce.delay(() => (this.useChatRecordMode ? this.scrollToBottom(i) : this.scrollToTop(i)));
      },
      resetTotalData(e) {
        (this.isTotalChangeFromAddData = !0),
          (e = '[object Array]' !== Object.prototype.toString.call(e) ? [e] : e),
          (this.totalData = e);
      },
      setLocalPaging(e, t = !0) {
        return (
          (this.isLocalPaging = !0),
          this.$nextTick(() => {
            this._addData(e, t, !0);
          }),
          new Promise((e, t) => {
            this.dataPromiseResultMap.localPaging = { resolve: e, reject: t };
          })
        );
      },
      reload(e = this.showRefresherWhenReload) {
        return (
          e && ((this.privateShowRefresherWhenReload = e), (this.isUserPullDown = !0)),
          this.showLoadingMoreWhenReload || (this.listRendering = !0),
          this.$nextTick(() => {
            this._preReload(e, !1);
          }),
          new Promise((e, t) => {
            this.dataPromiseResultMap.reload = { resolve: e, reject: t };
          })
        );
      },
      refresh() {
        return this._handleRefreshWithDisPageNo(this.pageNo - this.defaultPageNo + 1);
      },
      refreshToPage(e) {
        return (
          (this.isHandlingRefreshToPage = !0),
          this._handleRefreshWithDisPageNo(e + this.defaultPageNo - 1)
        );
      },
      updateCache() {
        this.finalUseCache &&
          this.totalData.length &&
          this._saveLocalCache(
            this.totalData.slice(0, Math.min(this.totalData.length, this.pageSize))
          );
      },
      clean() {
        this._reload(!0), this._addData([], !0, !1);
      },
      clear() {
        this.clean();
      },
      _preReload(e = this.showRefresherWhenReload, t = !0, i = 0) {
        const o = this.finalRefresherEnabled && this.useCustomRefresher;
        -1 === this.customRefresherHeight && o
          ? ce.delay(() => {
              ++i % 10 == 0 && this._updateCustomRefresherHeight(), this._preReload(e, t, i);
            }, X / 2)
          : ((this.isUserReload = !0),
            (this.loadingType = ge.LoadingType.Refresher),
            e
              ? ((this.privateShowRefresherWhenReload = e),
                this.useCustomRefresher
                  ? this._doRefresherRefreshAnimate()
                  : (this.refresherTriggered = !0))
              : this._refresherEnd(!1, !1, !1, !1),
            this._reload(!1, t));
      },
      _reload(e = !1, t = !1, i = !1) {
        if (
          ((this.isAddedData = !1),
          (this.insideOfPaging = -1),
          (this.cacheScrollNodeHeight = -1),
          (this.pageNo = this.defaultPageNo),
          this._cleanRefresherEndTimeout(),
          !this.privateShowRefresherWhenReload && !e && this._startLoading(!0),
          (this.firstPageLoaded = !0),
          (this.isTotalChangeFromAddData = !1),
          this.isSettingCacheList || (this.totalData = []),
          !e)
        ) {
          this._emitQuery(
            this.pageNo,
            this.defaultPageSize,
            i ? ge.QueryFrom.UserPullDown : ge.QueryFrom.Reload
          );
          let e = 0;
          ce.delay(this._callMyParentQuery, e),
            !t && this.autoScrollToTopWhenReload && this._scrollToTop(!1);
        }
      },
      _addData(e, t, i) {
        (this.isAddedData = !0),
          (this.fromEmptyViewReload = !1),
          (this.isTotalChangeFromAddData = !0),
          (this.refresherTriggered = !1),
          this._endSystemLoadingAndRefresh();
        const o = this.isUserPullDown;
        this.showRefresherUpdateTime &&
          this.isFirstPage &&
          (ce.setRefesrherTime(ce.getTime(), this.refresherUpdateTimeKey),
          this.$refs.refresh && this.$refs.refresh.updateTime()),
          !i && o && this.isFirstPage && (this.isUserPullDown = !1),
          this.isFirstPage
            ? (this.listRendering = !1)
            : ((this.listRendering = !0),
              this.$nextTick(() => {
                ce.delay(() => (this.listRendering = !1));
              }));
        let a = this._checkDataType(e, t, i);
        (e = a.data), (t = a.success);
        let s = X;
        if (
          (this.useChatRecordMode && (s = 0),
          (this.loadingForNow = !1),
          ce.delay(() => {
            (this.pagingLoaded = !0),
              this.$nextTick(() => {
                !i && this._refresherEnd(s > 0, !0, o);
              });
          }),
          this.isFirstPage &&
            ((this.isLoadFailed = !t),
            this.$emit('isLoadFailedChange', this.isLoadFailed),
            this.finalUseCache &&
              t &&
              (this.cacheMode === ge.CacheMode.Always || this.isSettingCacheList) &&
              this._saveLocalCache(e)),
          (this.isSettingCacheList = !1),
          t)
        ) {
          if (
            ((!1 !== this.privateConcat ||
              this.isHandlingRefreshToPage ||
              this.loadingStatus !== ge.More.NoMore) &&
              (this.loadingStatus = ge.More.Default),
            i)
          ) {
            this.totalLocalPagingList = e;
            const t = this.defaultPageNo,
              i =
                this.queryFrom !== ge.QueryFrom.Refresh
                  ? this.defaultPageSize
                  : this.currentRefreshPageSize;
            this._localPagingQueryList(t, i, 0, (e) => {
              this.completeByTotal(e, this.totalLocalPagingList.length);
            });
          } else {
            let t = 0;
            ce.delay(() => {
              this._currentDataChange(e, this.currentData),
                this._callDataPromise(!0, this.totalData);
            }, t);
          }
          this.isHandlingRefreshToPage &&
            ((this.isHandlingRefreshToPage = !1),
            (this.pageNo = this.defaultPageNo + Math.ceil(e.length / this.pageSize) - 1),
            e.length % this.pageSize != 0 && (this.customNoMore = 1));
        } else
          this._currentDataChange(e, this.currentData),
            this._callDataPromise(!1),
            (this.loadingStatus = ge.More.Fail),
            (this.isHandlingRefreshToPage = !1),
            this.loadingType === ge.LoadingType.LoadingMore && this.pageNo--;
      },
      _totalDataChange(e, t, i = !0) {
        ((this.isUserReload && this.autoCleanListWhenReload) ||
          !this.firstPageLoaded ||
          e.length ||
          !t.length) &&
          (this._doCheckScrollViewShouldFullHeight(e),
          this.realTotalData.length || e.length || (i = !1),
          (this.realTotalData = e),
          i &&
            (this.$emit('input', e),
            this.$emit('update:modelValue', e),
            this.$emit('update:list', e),
            this.$emit('listChange', e),
            this._callMyParentList(e)),
          (this.firstPageLoaded = !1),
          (this.isTotalChangeFromAddData = !1),
          this.$nextTick(() => {
            ce.delay(() => {
              this._getNodeClientRect('.zp-paging-container-content').then((e) => {
                e && this.$emit('contentHeightChanged', e[0].height);
              });
            }, X * (this.isIos ? 1 : 3));
          }));
      },
      _currentDataChange(e, t) {
        (e = [...e]),
          this.finalUseVirtualList && this._setCellIndex(e, 'bottom'),
          this.isFirstPage && this.finalConcat && (this.totalData = []),
          -1 !== this.customNoMore
            ? (1 === this.customNoMore || (0 !== this.customNoMore && !e.length)) &&
              (this.loadingStatus = ge.More.NoMore)
            : (!e.length || (e.length && e.length < this.defaultPageSize)) &&
              (this.loadingStatus = ge.More.NoMore),
          this.totalData.length && this.finalConcat
            ? (this.oldScrollTop, (this.totalData = [...this.totalData, ...e]))
            : (this.totalData = e),
          (this.privateConcat = !0);
      },
      _handleRefreshWithDisPageNo(e) {
        if (!this.isHandlingRefreshToPage && !this.realTotalData.length) return this.reload();
        if (e >= 1) {
          (this.loading = !0), (this.privateConcat = !1);
          const t = e * this.pageSize;
          (this.currentRefreshPageSize = t),
            this.isLocalPaging && this.isHandlingRefreshToPage
              ? this._localPagingQueryList(this.defaultPageNo, t, 0, (e) => {
                  this.complete(e);
                })
              : (this._emitQuery(this.defaultPageNo, t, ge.QueryFrom.Refresh),
                this._callMyParentQuery(this.defaultPageNo, t));
        }
        return new Promise((e, t) => {
          this.dataPromiseResultMap.reload = { resolve: e, reject: t };
        });
      },
      _localPagingQueryList(e, t, i, o) {
        (e = Math.max(1, e)), (t = Math.max(1, t));
        const a = [...this.totalLocalPagingList],
          s = (e - 1) * t,
          r = Math.min(a.length, s + t),
          l = a.splice(s, r - s);
        ce.delay(() => o(l), i);
      },
      _saveLocalCache(e) {
        m(this.finalCacheKey, e);
      },
      _setListByLocalCache() {
        (this.totalData = f(this.finalCacheKey) || []), (this.isSettingCacheList = !0);
      },
      _callMyParentList(e) {
        if (this.autowireListName.length) {
          const t = ce.getParent(this.$parent);
          t && t[this.autowireListName] && (t[this.autowireListName] = e);
        }
      },
      _callMyParentQuery(e = 0, t = 0) {
        if (this.autowireQueryName) {
          if (-1 === this.myParentQuery) {
            const e = ce.getParent(this.$parent);
            e && e[this.autowireQueryName] && (this.myParentQuery = e[this.autowireQueryName]);
          }
          -1 !== this.myParentQuery &&
            (t > 0
              ? this.myParentQuery(e, t)
              : this.myParentQuery(this.pageNo, this.defaultPageSize));
        }
      },
      _emitQuery(e, t, i) {
        (this.queryFrom = i), (this.requestTimeStamp = ce.getTime());
        const [o] = this.realTotalData.slice(-1);
        this.$emit('query', ...Te._handleQuery(e, t, i, o || null));
      },
      _callDataPromise(e, t) {
        for (const i in this.dataPromiseResultMap) {
          const o = this.dataPromiseResultMap[i];
          o &&
            (e
              ? o.resolve({ totalList: t, noMore: this.loadingStatus === ge.More.NoMore })
              : this.callNetworkReject && o.reject(`z-paging-${i}-error`));
        }
      },
      _checkDataType(e, t, i) {
        const o = Object.prototype.toString.call(e);
        return (
          '[object Boolean]' === o
            ? ((t = e), (e = []))
            : '[object Array]' !== o &&
              ((e = []),
              '[object Undefined]' !== o &&
                '[object Null]' !== o &&
                ce.consoleErr(
                  (i ? 'setLocalPaging' : 'complete') + '参数类型不正确，第一个参数类型必须为Array!'
                )),
          { data: e, success: t }
        );
      }
    }
  },
  Se = {
    en: {
      'zp.refresher.default': 'Pull down to refresh',
      'zp.refresher.pulling': 'Release to refresh',
      'zp.refresher.refreshing': 'Refreshing...',
      'zp.refresher.complete': 'Refresh succeeded',
      'zp.loadingMore.default': 'Click to load more',
      'zp.loadingMore.loading': 'Loading...',
      'zp.loadingMore.noMore': 'No more data',
      'zp.loadingMore.fail': 'Load failed,click to reload',
      'zp.emptyView.title': 'No data',
      'zp.emptyView.reload': 'Reload',
      'zp.emptyView.error': 'Sorry,load failed',
      'zp.refresherUpdateTime.title': 'Last update: ',
      'zp.refresherUpdateTime.none': 'None',
      'zp.refresherUpdateTime.today': 'Today',
      'zp.refresherUpdateTime.yesterday': 'Yesterday',
      'zp.systemLoading.title': 'Loading...'
    },
    'zh-Hans': {
      'zp.refresher.default': '继续下拉刷新',
      'zp.refresher.pulling': '松开立即刷新',
      'zp.refresher.refreshing': '正在刷新...',
      'zp.refresher.complete': '刷新成功',
      'zp.loadingMore.default': '点击加载更多',
      'zp.loadingMore.loading': '正在加载...',
      'zp.loadingMore.noMore': '没有更多了',
      'zp.loadingMore.fail': '加载失败，点击重新加载',
      'zp.emptyView.title': '没有数据哦~',
      'zp.emptyView.reload': '重新加载',
      'zp.emptyView.error': '很抱歉，加载失败',
      'zp.refresherUpdateTime.title': '最后更新：',
      'zp.refresherUpdateTime.none': '无',
      'zp.refresherUpdateTime.today': '今天',
      'zp.refresherUpdateTime.yesterday': '昨天',
      'zp.systemLoading.title': '加载中...'
    },
    'zh-Hant': {
      'zp.refresher.default': '繼續下拉重繪',
      'zp.refresher.pulling': '鬆開立即重繪',
      'zp.refresher.refreshing': '正在重繪...',
      'zp.refresher.complete': '重繪成功',
      'zp.loadingMore.default': '點擊加載更多',
      'zp.loadingMore.loading': '正在加載...',
      'zp.loadingMore.noMore': '沒有更多了',
      'zp.loadingMore.fail': '加載失敗，點擊重新加載',
      'zp.emptyView.title': '沒有數據哦~',
      'zp.emptyView.reload': '重新加載',
      'zp.emptyView.error': '很抱歉，加載失敗',
      'zp.refresherUpdateTime.title': '最後更新：',
      'zp.refresherUpdateTime.none': '無',
      'zp.refresherUpdateTime.today': '今天',
      'zp.refresherUpdateTime.yesterday': '昨天',
      'zp.systemLoading.title': '加載中...'
    }
  },
  { t: Re } = A(Se),
  we = y().language,
  Me = {
    data: () => ({ language: we }),
    computed: {
      finalLanguage() {
        try {
          const e = C(),
            t = this.language;
          return 'auto' === e ? Te._handleLanguage2Local(t, this._language2Local(t)) : e;
        } catch (e) {
          return 'zh-Hans';
        }
      },
      finalRefresherDefaultText() {
        return this._getI18nText('zp.refresher.default', this.refresherDefaultText);
      },
      finalRefresherPullingText() {
        return this._getI18nText('zp.refresher.pulling', this.refresherPullingText);
      },
      finalRefresherRefreshingText() {
        return this._getI18nText('zp.refresher.refreshing', this.refresherRefreshingText);
      },
      finalRefresherCompleteText() {
        return this._getI18nText('zp.refresher.complete', this.refresherCompleteText);
      },
      finalRefresherUpdateTimeTextMap: () => ({
        title: Re('zp.refresherUpdateTime.title'),
        none: Re('zp.refresherUpdateTime.none'),
        today: Re('zp.refresherUpdateTime.today'),
        yesterday: Re('zp.refresherUpdateTime.yesterday')
      }),
      finalLoadingMoreDefaultText() {
        return this._getI18nText('zp.loadingMore.default', this.loadingMoreDefaultText);
      },
      finalLoadingMoreLoadingText() {
        return this._getI18nText('zp.loadingMore.loading', this.loadingMoreLoadingText);
      },
      finalLoadingMoreNoMoreText() {
        return this._getI18nText('zp.loadingMore.noMore', this.loadingMoreNoMoreText);
      },
      finalLoadingMoreFailText() {
        return this._getI18nText('zp.loadingMore.fail', this.loadingMoreFailText);
      },
      finalEmptyViewText() {
        return this.isLoadFailed
          ? this.finalEmptyViewErrorText
          : this._getI18nText('zp.emptyView.title', this.emptyViewText);
      },
      finalEmptyViewReloadText() {
        return this._getI18nText('zp.emptyView.reload', this.emptyViewReloadText);
      },
      finalEmptyViewErrorText() {
        return (
          this.customerEmptyViewErrorText ||
          this._getI18nText('zp.emptyView.error', this.emptyViewErrorText)
        );
      },
      finalSystemLoadingText() {
        return this._getI18nText('zp.systemLoading.title', this.systemLoadingText);
      }
    },
    methods: {
      getLanguage() {
        return this.finalLanguage;
      },
      _getI18nText(e, t) {
        const i = Object.prototype.toString.call(t);
        if ('[object Object]' === i) {
          const e = t[this.finalLanguage];
          if (e) return e;
        } else if ('[object String]' === i) return t;
        return Re(e);
      },
      _language2Local(e) {
        const t = e.toLowerCase().replace(new RegExp('_', ''), '-');
        return -1 !== t.indexOf('zh')
          ? 'zh' === t || 'zh-cn' === t || -1 !== t.indexOf('zh-hans')
            ? 'zh-Hans'
            : 'zh-Hant'
          : -1 !== t.indexOf('en')
          ? 'en'
          : e;
      }
    }
  },
  Ae = {
    props: {},
    data: () => ({
      nRefresherLoading: !1,
      nListIsDragging: !1,
      nShowBottom: !0,
      nFixFreezing: !1,
      nShowRefresherReveal: !1,
      nLoadingMoreFixedHeight: !1,
      nShowRefresherRevealHeight: 0,
      nOldShowRefresherRevealHeight: -1,
      nRefresherWidth: T(750)
    }),
    computed: {},
    mounted() {},
    methods: {}
  },
  Ce = {
    props: {
      hideEmptyView: { type: Boolean, default: ce.gc('hideEmptyView', !1) },
      emptyViewText: { type: [String, Object], default: ce.gc('emptyViewText', null) },
      showEmptyViewReload: { type: Boolean, default: ce.gc('showEmptyViewReload', !1) },
      showEmptyViewReloadWhenError: {
        type: Boolean,
        default: ce.gc('showEmptyViewReloadWhenError', !0)
      },
      emptyViewReloadText: { type: [String, Object], default: ce.gc('emptyViewReloadText', null) },
      emptyViewImg: { type: String, default: ce.gc('emptyViewImg', '') },
      emptyViewErrorText: { type: [String, Object], default: ce.gc('emptyViewErrorText', null) },
      emptyViewErrorImg: { type: String, default: ce.gc('emptyViewErrorImg', '') },
      emptyViewStyle: { type: Object, default: ce.gc('emptyViewStyle', {}) },
      emptyViewSuperStyle: { type: Object, default: ce.gc('emptyViewSuperStyle', {}) },
      emptyViewImgStyle: { type: Object, default: ce.gc('emptyViewImgStyle', {}) },
      emptyViewTitleStyle: { type: Object, default: ce.gc('emptyViewTitleStyle', {}) },
      emptyViewReloadStyle: { type: Object, default: ce.gc('emptyViewReloadStyle', {}) },
      emptyViewFixed: { type: Boolean, default: ce.gc('emptyViewFixed', !1) },
      emptyViewCenter: { type: Boolean, default: ce.gc('emptyViewCenter', !0) },
      autoHideEmptyViewWhenLoading: {
        type: Boolean,
        default: ce.gc('autoHideEmptyViewWhenLoading', !0)
      },
      autoHideEmptyViewWhenPull: { type: Boolean, default: ce.gc('autoHideEmptyViewWhenPull', !0) },
      emptyViewZIndex: { type: Number, default: ce.gc('emptyViewZIndex', 9) }
    },
    data: () => ({ customerEmptyViewErrorText: '' }),
    computed: {
      finalEmptyViewImg() {
        return this.isLoadFailed ? this.emptyViewErrorImg : this.emptyViewImg;
      },
      finalShowEmptyViewReload() {
        return this.isLoadFailed ? this.showEmptyViewReloadWhenError : this.showEmptyViewReload;
      },
      showEmpty() {
        return (
          !(this.refresherOnly || this.hideEmptyView || this.realTotalData.length) &&
          (!this.autoHideEmptyViewWhenLoading ||
            !(!this.isAddedData || this.firstPageLoaded || this.loading) ||
            (!this.autoHideEmptyViewWhenPull && !this.isUserReload))
        );
      }
    },
    methods: {
      _emptyViewReload() {
        let e = !1;
        this.$emit('emptyViewReload', (t) => {
          (void 0 !== t && !0 !== t) ||
            ((this.fromEmptyViewReload = !0), this.reload().catch(() => {})),
            (e = !0);
        }),
          this.$nextTick(() => {
            e || ((this.fromEmptyViewReload = !0), this.reload().catch(() => {}));
          });
      },
      _emptyViewClick() {
        this.$emit('emptyViewClick');
      }
    }
  },
  Ie = {
    props: {
      refresherThemeStyle: { type: String, default: ce.gc('refresherThemeStyle', '') },
      refresherImgStyle: { type: Object, default: ce.gc('refresherImgStyle', {}) },
      refresherTitleStyle: { type: Object, default: ce.gc('refresherTitleStyle', {}) },
      refresherUpdateTimeStyle: { type: Object, default: ce.gc('refresherUpdateTimeStyle', {}) },
      watchRefresherTouchmove: { type: Boolean, default: ce.gc('watchRefresherTouchmove', !1) },
      loadingMoreThemeStyle: { type: String, default: ce.gc('loadingMoreThemeStyle', '') },
      refresherOnly: { type: Boolean, default: ce.gc('refresherOnly', !1) },
      refresherDefaultDuration: {
        type: [Number, String],
        default: ce.gc('refresherDefaultDuration', 100)
      },
      refresherCompleteDelay: {
        type: [Number, String],
        default: ce.gc('refresherCompleteDelay', 0)
      },
      refresherCompleteDuration: {
        type: [Number, String],
        default: ce.gc('refresherCompleteDuration', 300)
      },
      refresherCompleteScrollable: {
        type: Boolean,
        default: ce.gc('refresherCompleteScrollable', !1)
      },
      useCustomRefresher: { type: Boolean, default: ce.gc('useCustomRefresher', !0) },
      refresherFps: { type: [Number, String], default: ce.gc('refresherFps', 40) },
      refresherMaxAngle: { type: [Number, String], default: ce.gc('refresherMaxAngle', 40) },
      refresherAngleEnableChangeContinued: {
        type: Boolean,
        default: ce.gc('refresherAngleEnableChangeContinued', !1)
      },
      refresherDefaultText: {
        type: [String, Object],
        default: ce.gc('refresherDefaultText', null)
      },
      refresherPullingText: {
        type: [String, Object],
        default: ce.gc('refresherPullingText', null)
      },
      refresherRefreshingText: {
        type: [String, Object],
        default: ce.gc('refresherRefreshingText', null)
      },
      refresherCompleteText: {
        type: [String, Object],
        default: ce.gc('refresherCompleteText', null)
      },
      refresherDefaultImg: { type: String, default: ce.gc('refresherDefaultImg', null) },
      refresherPullingImg: { type: String, default: ce.gc('refresherPullingImg', null) },
      refresherRefreshingImg: { type: String, default: ce.gc('refresherRefreshingImg', null) },
      refresherCompleteImg: { type: String, default: ce.gc('refresherCompleteImg', null) },
      refresherRefreshingAnimated: {
        type: Boolean,
        default: ce.gc('refresherRefreshingAnimated', !0)
      },
      refresherEndBounceEnabled: { type: Boolean, default: ce.gc('refresherEndBounceEnabled', !0) },
      refresherEnabled: { type: Boolean, default: ce.gc('refresherEnabled', !0) },
      refresherThreshold: { type: [Number, String], default: ce.gc('refresherThreshold', '80rpx') },
      refresherDefaultStyle: { type: String, default: ce.gc('refresherDefaultStyle', 'black') },
      refresherBackground: { type: String, default: ce.gc('refresherBackground', 'transparent') },
      refresherFixedBackground: {
        type: String,
        default: ce.gc('refresherFixedBackground', 'transparent')
      },
      refresherFixedBacHeight: {
        type: [Number, String],
        default: ce.gc('refresherFixedBacHeight', 0)
      },
      refresherOutRate: { type: Number, default: ce.gc('refresherOutRate', 0.65) },
      refresherPullRate: { type: Number, default: ce.gc('refresherPullRate', 0.75) },
      showRefresherUpdateTime: { type: Boolean, default: ce.gc('showRefresherUpdateTime', !1) },
      refresherUpdateTimeKey: { type: String, default: ce.gc('refresherUpdateTimeKey', 'default') },
      refresherVibrate: { type: Boolean, default: ce.gc('refresherVibrate', !1) },
      refresherNoTransform: { type: Boolean, default: ce.gc('refresherNoTransform', !1) },
      useRefresherStatusBarPlaceholder: {
        type: Boolean,
        default: ce.gc('useRefresherStatusBarPlaceholder', !1)
      }
    },
    data: () => ({
      R: ge.Refresher,
      refresherStatus: ge.Refresher.Default,
      refresherTouchstartY: 0,
      lastRefresherTouchmove: null,
      refresherReachMaxAngle: !0,
      refresherTransform: 'translateY(0px)',
      refresherTransition: '',
      finalRefresherDefaultStyle: 'black',
      refresherRevealStackCount: 0,
      refresherCompleteTimeout: null,
      refresherCompleteSubTimeout: null,
      refresherEndTimeout: null,
      isTouchmovingTimeout: null,
      refresherTriggered: !1,
      isTouchmoving: !1,
      isTouchEnded: !1,
      isUserPullDown: !1,
      privateRefresherEnabled: -1,
      privateShowRefresherWhenReload: !1,
      customRefresherHeight: -1,
      showCustomRefresher: !1,
      doRefreshAnimateAfter: !1,
      isRefresherInComplete: !1,
      pullDownTimeStamp: 0,
      moveDis: 0,
      oldMoveDis: 0,
      currentDis: 0,
      oldCurrentMoveDis: 0,
      oldRefresherTouchmoveY: 0,
      oldTouchDirection: '',
      oldEmitedTouchDirection: '',
      oldPullingDistance: -1,
      refresherThresholdUpdateTag: 0
    }),
    watch: {
      refresherDefaultStyle: {
        handler(e) {
          e.length && (this.finalRefresherDefaultStyle = e);
        },
        immediate: !0
      },
      refresherStatus(e) {
        e === ge.Refresher.Loading && this._cleanRefresherEndTimeout(),
          this.refresherVibrate && e === ge.Refresher.ReleaseToRefresh && this._doVibrateShort(),
          this.$emit('refresherStatusChange', e),
          this.$emit('update:refresherStatus', e);
      },
      refresherEnabled(e) {
        !e && this.endRefresh();
      }
    },
    computed: {
      pullDownDisTimeStamp() {
        return 1e3 / this.refresherFps;
      },
      refresherThresholdUnitConverted() {
        return ce.addUnit(this.refresherThreshold, this.unit);
      },
      finalRefresherEnabled() {
        return (
          !this.useChatRecordMode &&
          (-1 === this.privateRefresherEnabled
            ? this.refresherEnabled
            : 1 === this.privateRefresherEnabled)
        );
      },
      finalRefresherThreshold() {
        let e = this.refresherThresholdUnitConverted,
          t = !1;
        return (
          e === ce.addUnit(80, this.unit) &&
            ((t = !0), this.showRefresherUpdateTime && (e = ce.addUnit(120, this.unit))),
          t && this.customRefresherHeight > 0
            ? this.customRefresherHeight + this.finalRefresherThresholdPlaceholder
            : ce.convertToPx(e) + this.finalRefresherThresholdPlaceholder
        );
      },
      finalRefresherThresholdPlaceholder() {
        return this.useRefresherStatusBarPlaceholder ? this.statusBarHeight : 0;
      },
      finalRefresherFixedBacHeight() {
        return ce.convertToPx(this.refresherFixedBacHeight);
      },
      finalRefresherThemeStyle() {
        return this.refresherThemeStyle.length ? this.refresherThemeStyle : this.defaultThemeStyle;
      },
      finalRefresherOutRate() {
        let e = this.refresherOutRate;
        return (e = Math.max(0, e)), (e = Math.min(1, e)), e;
      },
      finalRefresherPullRate() {
        let e = this.refresherPullRate;
        return (e = Math.max(0, e)), e;
      },
      finalRefresherTransform() {
        return this.refresherNoTransform || 'translateY(0px)' === this.refresherTransform
          ? 'none'
          : this.refresherTransform;
      },
      finalShowRefresherWhenReload() {
        return this.showRefresherWhenReload || this.privateShowRefresherWhenReload;
      },
      finalRefresherTriggered() {
        return !(!this.finalRefresherEnabled || this.useCustomRefresher) && this.refresherTriggered;
      },
      showRefresher() {
        const e = this.finalRefresherEnabled && this.useCustomRefresher;
        return (
          this.active &&
            -1 === this.customRefresherHeight &&
            e &&
            this.updateCustomRefresherHeight(),
          e
        );
      },
      hasTouchmove() {
        return this.watchRefresherTouchmove;
      }
    },
    methods: {
      endRefresh() {
        (this.totalData = this.realTotalData),
          this._refresherEnd(),
          this._endSystemLoadingAndRefresh(),
          this._handleScrollViewBounce({ bounce: !0 }),
          this.$nextTick(() => {
            this.refresherTriggered = !1;
          });
      },
      updateCustomRefresherHeight() {
        ce.delay(() => this.$nextTick(this._updateCustomRefresherHeight));
      },
      _onRefresh(e = !1, t = !0) {
        (!e || (this.finalRefresherEnabled && !this.useCustomRefresher)) &&
          (this.$emit('onRefresh'),
          this.$emit('Refresh'),
          this.loading ||
            this.isRefresherInComplete ||
            ((this.loadingType = ge.LoadingType.Refresher),
            this.nShowRefresherReveal ||
              ((this.isUserPullDown = t),
              (this.isUserReload = !t),
              this._startLoading(!0),
              (this.refresherTriggered = !0),
              this.reloadWhenRefresh &&
                t &&
                (this.useChatRecordMode
                  ? this._onLoadingMore('click')
                  : this._reload(!1, !1, t)))));
      },
      _onRestore() {
        (this.refresherTriggered = 'restore'), this.$emit('onRestore'), this.$emit('Restore');
      },
      _handleRefresherTouchstart(e) {
        !this.loading && this.isTouchEnded && (this.isTouchmoving = !1),
          (this.loadingType = ge.LoadingType.Refresher),
          this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout),
          (this.isTouchEnded = !1),
          (this.refresherTransition = ''),
          (this.refresherTouchstartY = e.touchY),
          this.$emit('refresherTouchstart', this.refresherTouchstartY),
          (this.lastRefresherTouchmove = e),
          this._cleanRefresherCompleteTimeout(),
          this._cleanRefresherEndTimeout();
      },
      _handleRefresherTouchmove(e, t) {
        (this.refresherReachMaxAngle = !0),
          this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout),
          (this.isTouchmoving = !0),
          (this.isTouchEnded = !1),
          (this.refresherStatus =
            e >= this.finalRefresherThreshold
              ? ge.Refresher.ReleaseToRefresh
              : (this.refresherStatus = ge.Refresher.Default)),
          (this.moveDis = e);
      },
      _handleRefresherTouchend(e) {
        this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout),
          (this.refresherReachMaxAngle = !0),
          (this.isTouchEnded = !0);
        const t = this.finalRefresherThreshold;
        e >= t && this.refresherStatus === ge.Refresher.ReleaseToRefresh
          ? (ce.delay(() => {
              this._emitTouchmove({ pullingDistance: t, dy: this.moveDis - t });
            }, 0.1),
            (this.moveDis = t),
            (this.refresherStatus = ge.Refresher.Loading),
            this._doRefresherLoad())
          : (this._refresherEnd(),
            (this.isTouchmovingTimeout = ce.delay(() => {
              this.isTouchmoving = !1;
            }, this.refresherDefaultDuration))),
          (this.scrollEnable = !0),
          this.$emit('refresherTouchend', e);
      },
      _handleListTouchstart() {
        this.useChatRecordMode &&
          this.autoHideKeyboardWhenChat &&
          (I(), this.$emit('hidedKeyboard'));
      },
      _handleScrollViewBounce({ bounce: e }) {
        this.usePageScroll ||
          this.scrollToTopBounceEnabled ||
          (this.wxsScrollTop <= 5
            ? ((this.refresherTransition = ''), (this.scrollEnable = e))
            : e && (this.scrollEnable = e));
      },
      _handleWxsPullingDownStatusChange(e) {
        (this.wxsOnPullingDown = e), e && !this.useChatRecordMode && (this.renderPropScrollTop = 0);
      },
      _handleWxsPullingDown({ moveDis: e, diffDis: t }) {
        this._emitTouchmove({ pullingDistance: e, dy: t });
      },
      _handleTouchDirectionChange({ direction: e }) {
        this.$emit('touchDirectionChange', e);
      },
      _handlePropUpdate() {
        this.wxsPropType = ce.getTime().toString();
      },
      _refresherEnd(e = !0, t = !1, i = !1, o = !0) {
        if (this.loadingType === ge.LoadingType.Refresher) {
          const e = t && (i || this.showRefresherWhenReload) ? this.refresherCompleteDelay : 0,
            o = e > 0 ? ge.Refresher.Complete : ge.Refresher.Default;
          if (this.finalShowRefresherWhenReload) {
            const e = this.refresherRevealStackCount;
            if ((this.refresherRevealStackCount--, e > 1)) return;
          }
          this._cleanRefresherEndTimeout(),
            (this.refresherEndTimeout = ce.delay(
              () => {
                this.refresherStatus = o;
              },
              this.refresherStatus !== ge.Refresher.Default && o === ge.Refresher.Default
                ? this.refresherCompleteDuration
                : 0
            )),
            e > 0 && (this.isRefresherInComplete = !0),
            this._cleanRefresherCompleteTimeout(),
            (this.refresherCompleteTimeout = ce.delay(() => {
              let e = 1;
              const i =
                this.refresherEndBounceEnabled && t
                  ? 'cubic-bezier(0.19,1.64,0.42,0.72)'
                  : 'linear';
              t &&
                (e = this.refresherEndBounceEnabled
                  ? this.refresherCompleteDuration / 1e3
                  : this.refresherCompleteDuration / 3e3),
                (this.refresherTransition = `transform ${
                  t ? e : this.refresherDefaultDuration / 1e3
                }s ${i}`),
                (this.wxsPropType = this.refresherTransition + 'end' + ce.getTime()),
                (this.moveDis = 0),
                o === ge.Refresher.Complete &&
                  (this.refresherCompleteSubTimeout &&
                    (clearTimeout(this.refresherCompleteSubTimeout),
                    (this.refresherCompleteSubTimeout = null)),
                  (this.refresherCompleteSubTimeout = ce.delay(() => {
                    this.$nextTick(() => {
                      (this.refresherStatus = ge.Refresher.Default),
                        (this.isRefresherInComplete = !1);
                    });
                  }, 800 * e))),
                this._emitTouchmove({ pullingDistance: 0, dy: this.moveDis });
            }, e));
        }
        o && (ce.delay(() => (this.loading = !1), e ? X : 0), i && this._onRestore());
      },
      _doRefresherRefreshAnimate() {
        this._cleanRefresherCompleteTimeout();
        !this.doRefreshAnimateAfter &&
        this.finalShowRefresherWhenReload &&
        -1 === this.customRefresherHeight &&
        this.refresherThreshold === ce.addUnit(80, this.unit)
          ? (this.doRefreshAnimateAfter = !0)
          : (this.refresherRevealStackCount++,
            (this.wxsPropType = 'begin' + ce.getTime()),
            (this.moveDis = this.finalRefresherThreshold),
            (this.refresherStatus = ge.Refresher.Loading),
            (this.isTouchmoving = !0),
            this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout),
            this._doRefresherLoad(!1));
      },
      _doRefresherLoad(e = !0) {
        this._onRefresh(!1, e), (this.loading = !0);
      },
      _updateCustomRefresherHeight() {
        this._getNodeClientRect('.zp-custom-refresher-slot-view').then((e) => {
          (this.customRefresherHeight = e ? e[0].height : 0),
            (this.showCustomRefresher = this.customRefresherHeight > 0),
            this.doRefreshAnimateAfter &&
              ((this.doRefreshAnimateAfter = !1), this._doRefresherRefreshAnimate());
        });
      },
      _emitTouchmove(e) {
        (e.viewHeight = this.finalRefresherThreshold),
          (e.rate = e.viewHeight > 0 ? e.pullingDistance / e.viewHeight : 0),
          this.hasTouchmove &&
            this.oldPullingDistance !== e.pullingDistance &&
            this.$emit('refresherTouchmove', e),
          (this.oldPullingDistance = e.pullingDistance);
      },
      _cleanRefresherCompleteTimeout() {
        this.refresherCompleteTimeout = this._cleanTimeout(this.refresherCompleteTimeout);
      },
      _cleanRefresherEndTimeout() {
        this.refresherEndTimeout = this._cleanTimeout(this.refresherEndTimeout);
      }
    }
  },
  xe = {
    props: {
      loadingMoreCustomStyle: { type: Object, default: ce.gc('loadingMoreCustomStyle', {}) },
      loadingMoreTitleCustomStyle: {
        type: Object,
        default: ce.gc('loadingMoreTitleCustomStyle', {})
      },
      loadingMoreLoadingIconCustomStyle: {
        type: Object,
        default: ce.gc('loadingMoreLoadingIconCustomStyle', {})
      },
      loadingMoreLoadingIconType: {
        type: String,
        default: ce.gc('loadingMoreLoadingIconType', 'flower')
      },
      loadingMoreLoadingIconCustomImage: {
        type: String,
        default: ce.gc('loadingMoreLoadingIconCustomImage', '')
      },
      loadingMoreLoadingAnimated: {
        type: Boolean,
        default: ce.gc('loadingMoreLoadingAnimated', !0)
      },
      loadingMoreEnabled: { type: Boolean, default: ce.gc('loadingMoreEnabled', !0) },
      toBottomLoadingMoreEnabled: {
        type: Boolean,
        default: ce.gc('toBottomLoadingMoreEnabled', !0)
      },
      loadingMoreDefaultAsLoading: {
        type: Boolean,
        default: ce.gc('loadingMoreDefaultAsLoading', !1)
      },
      loadingMoreDefaultText: {
        type: [String, Object],
        default: ce.gc('loadingMoreDefaultText', null)
      },
      loadingMoreLoadingText: {
        type: [String, Object],
        default: ce.gc('loadingMoreLoadingText', null)
      },
      loadingMoreNoMoreText: {
        type: [String, Object],
        default: ce.gc('loadingMoreNoMoreText', null)
      },
      loadingMoreFailText: { type: [String, Object], default: ce.gc('loadingMoreFailText', null) },
      hideNoMoreInside: { type: Boolean, default: ce.gc('hideNoMoreInside', !1) },
      hideNoMoreByLimit: { type: Number, default: ce.gc('hideNoMoreByLimit', 0) },
      showDefaultLoadingMoreText: {
        type: Boolean,
        default: ce.gc('showDefaultLoadingMoreText', !0)
      },
      showLoadingMoreNoMoreView: { type: Boolean, default: ce.gc('showLoadingMoreNoMoreView', !0) },
      showLoadingMoreNoMoreLine: { type: Boolean, default: ce.gc('showLoadingMoreNoMoreLine', !0) },
      loadingMoreNoMoreLineCustomStyle: {
        type: Object,
        default: ce.gc('loadingMoreNoMoreLineCustomStyle', {})
      },
      insideMore: { type: Boolean, default: ce.gc('insideMore', !1) },
      lowerThreshold: { type: [Number, String], default: ce.gc('lowerThreshold', '100rpx') }
    },
    data: () => ({
      M: ge.More,
      loadingStatus: ge.More.Default,
      loadingStatusAfterRender: ge.More.Default,
      loadingMoreTimeStamp: 0,
      loadingMoreDefaultSlot: null,
      showLoadingMore: !1,
      customNoMore: -1
    }),
    computed: {
      zLoadMoreConfig() {
        return {
          status: this.loadingStatusAfterRender,
          defaultAsLoading:
            this.loadingMoreDefaultAsLoading ||
            (this.useChatRecordMode && this.chatLoadingMoreDefaultAsLoading),
          defaultThemeStyle: this.finalLoadingMoreThemeStyle,
          customStyle: this.loadingMoreCustomStyle,
          titleCustomStyle: this.loadingMoreTitleCustomStyle,
          iconCustomStyle: this.loadingMoreLoadingIconCustomStyle,
          loadingIconType: this.loadingMoreLoadingIconType,
          loadingIconCustomImage: this.loadingMoreLoadingIconCustomImage,
          loadingAnimated: this.loadingMoreLoadingAnimated,
          showNoMoreLine: this.showLoadingMoreNoMoreLine,
          noMoreLineCustomStyle: this.loadingMoreNoMoreLineCustomStyle,
          defaultText: this.finalLoadingMoreDefaultText,
          loadingText: this.finalLoadingMoreLoadingText,
          noMoreText: this.finalLoadingMoreNoMoreText,
          failText: this.finalLoadingMoreFailText,
          hideContent: !this.loadingMoreDefaultAsLoading && this.listRendering,
          unit: this.unit,
          isChat: this.useChatRecordMode,
          chatDefaultAsLoading: this.chatLoadingMoreDefaultAsLoading
        };
      },
      finalLoadingMoreThemeStyle() {
        return this.loadingMoreThemeStyle.length
          ? this.loadingMoreThemeStyle
          : this.defaultThemeStyle;
      },
      finalLowerThreshold() {
        return ce.convertToPx(this.lowerThreshold);
      },
      showLoadingMoreDefault() {
        return this._showLoadingMore('Default');
      },
      showLoadingMoreLoading() {
        return this._showLoadingMore('Loading');
      },
      showLoadingMoreNoMore() {
        return this._showLoadingMore('NoMore');
      },
      showLoadingMoreFail() {
        return this._showLoadingMore('Fail');
      },
      showLoadingMoreCustom() {
        return this._showLoadingMore('Custom');
      }
    },
    methods: {
      pageReachBottom() {
        !this.useChatRecordMode && this._onLoadingMore('toBottom');
      },
      doLoadMore(e) {
        this._onLoadingMore(e);
      },
      _checkScrolledToBottom(e, t = !1) {
        -1 === this.cacheScrollNodeHeight
          ? this._getNodeClientRect('.zp-scroll-view').then((t) => {
              if (t) {
                const i = t[0].height;
                (this.cacheScrollNodeHeight = i),
                  e - i <= this.finalLowerThreshold && this._onLoadingMore('toBottom');
              }
            })
          : (e - this.cacheScrollNodeHeight <= this.finalLowerThreshold
              ? this._onLoadingMore('toBottom')
              : e - this.cacheScrollNodeHeight <= 500 &&
                !t &&
                ce.delay(
                  () => {
                    this._getNodeClientRect('.zp-scroll-view', !0, !0).then((e) => {
                      if (e) {
                        this.oldScrollTop = e[0].scrollTop;
                        const t = e[0].scrollHeight - this.oldScrollTop;
                        this._checkScrolledToBottom(t, !0);
                      }
                    });
                  },
                  150,
                  'checkScrolledToBottomDelay'
                ),
            this.oldScrollTop <= 150 &&
              0 !== this.oldScrollTop &&
              ce.delay(
                () => {
                  0 !== this.oldScrollTop &&
                    this._getNodeClientRect('.zp-scroll-view', !0, !0).then((e) => {
                      e &&
                        0 === e[0].scrollTop &&
                        0 !== this.oldScrollTop &&
                        this._onScrollToUpper();
                    });
                },
                150,
                'checkScrolledToTopDelay'
              ));
      },
      _onLoadingMore(e = 'click') {
        this.isIos &&
          'toBottom' === e &&
          !this.scrollToBottomBounceEnabled &&
          this.scrollEnable &&
          ((this.scrollEnable = !1),
          this.$nextTick(() => {
            this.scrollEnable = !0;
          })),
          this.$emit('scrolltolower', e),
          this.refresherOnly ||
            !this.loadingMoreEnabled ||
            (this.loadingStatus !== ge.More.Default && this.loadingStatus !== ge.More.Fail) ||
            this.loading ||
            this.showEmpty ||
            this._doLoadingMore();
      },
      _doLoadingMore() {
        this.pageNo >= this.defaultPageNo &&
          this.loadingStatus !== ge.More.NoMore &&
          (this.pageNo++,
          this._startLoading(!1),
          this.isLocalPaging
            ? this._localPagingQueryList(
                this.pageNo,
                this.defaultPageSize,
                this.localPagingLoadingTime,
                (e) => {
                  this.completeByTotal(e, this.totalLocalPagingList.length);
                }
              )
            : (this._emitQuery(this.pageNo, this.defaultPageSize, ge.QueryFrom.LoadingMore),
              this._callMyParentQuery()),
          (this.loadingType = ge.LoadingType.LoadingMore));
      },
      _preCheckShowNoMoreInside(e, t, i) {
        this.loadingStatus === ge.More.NoMore && this.hideNoMoreByLimit > 0 && e.length
          ? (this.showLoadingMore = e.length > this.hideNoMoreByLimit)
          : (this.loadingStatus === ge.More.NoMore && this.hideNoMoreInside && e.length) ||
            (this.insideMore && !1 !== this.insideOfPaging && e.length)
          ? (this.$nextTick(() => {
              this._checkShowNoMoreInside(e, t, i);
            }),
            this.insideMore &&
              !1 !== this.insideOfPaging &&
              e.length &&
              (this.showLoadingMore = e.length))
          : (this.showLoadingMore = e.length);
      },
      async _checkShowNoMoreInside(e, t, i) {
        try {
          const e = t || (await this._getNodeClientRect('.zp-scroll-view'));
          if (this.usePageScroll) {
            if (e) {
              const t = e[0].top + e[0].height;
              (this.insideOfPaging = t < this.windowHeight),
                this.hideNoMoreInside && (this.showLoadingMore = !this.insideOfPaging),
                this._updateInsideOfPaging();
            }
          } else {
            const t = i || (await this._getNodeClientRect('.zp-paging-container-content')),
              o = t ? t[0].height : 0,
              a = e ? e[0].height : 0;
            (this.insideOfPaging = o < a),
              this.hideNoMoreInside && (this.showLoadingMore = !this.insideOfPaging),
              this._updateInsideOfPaging();
          }
        } catch (o) {
          (this.insideOfPaging = !e.length),
            this.hideNoMoreInside && (this.showLoadingMore = !this.insideOfPaging),
            this._updateInsideOfPaging();
        }
      },
      _showLoadingMore(e) {
        if (
          !this.showLoadingMoreWhenReload &&
          ((this.loadingStatus === ge.More.Default && !this.nShowBottom) ||
            !this.realTotalData.length)
        )
          return !1;
        if (
          ((!this.showLoadingMoreWhenReload ||
            this.isUserPullDown ||
            this.loadingStatus !== ge.More.Loading) &&
            !this.showLoadingMore) ||
          (!this.loadingMoreEnabled &&
            (!this.showLoadingMoreWhenReload ||
              this.isUserPullDown ||
              this.loadingStatus !== ge.More.Loading)) ||
          this.refresherOnly
        )
          return !1;
        if (this.useChatRecordMode && 'Loading' !== e) return !1;
        if (!this.zSlots) return !1;
        if ('Custom' === e)
          return (
            this.showDefaultLoadingMoreText &&
            !(this.loadingStatus === ge.More.NoMore && !this.showLoadingMoreNoMoreView)
          );
        return (
          this.loadingStatus === ge.More[e] &&
          this.zSlots[`loadingMore${e}`] &&
          ('NoMore' !== e || this.showLoadingMoreNoMoreView)
        );
      }
    }
  },
  be = {
    props: {
      autoHideLoadingAfterFirstLoaded: {
        type: Boolean,
        default: ce.gc('autoHideLoadingAfterFirstLoaded', !0)
      },
      loadingFullFixed: { type: Boolean, default: ce.gc('loadingFullFixed', !1) },
      autoShowSystemLoading: { type: Boolean, default: ce.gc('autoShowSystemLoading', !1) },
      systemLoadingMask: { type: Boolean, default: ce.gc('systemLoadingMask', !0) },
      systemLoadingText: { type: [String, Object], default: ce.gc('systemLoadingText', null) }
    },
    data: () => ({ loading: !1, loadingForNow: !1 }),
    watch: {
      loadingStatus(e) {
        this.$emit('loadingStatusChange', e),
          this.$nextTick(() => {
            this.loadingStatusAfterRender = e;
          }),
          !this.useChatRecordMode ||
          !this.isFirstPage ||
          (e !== ge.More.NoMore && e !== ge.More.Fail)
            ? (this.isFirstPageAndNoMore = !1)
            : (this.isFirstPageAndNoMore = !0);
      },
      loading(e) {
        e && (this.loadingForNow = e);
      }
    },
    computed: {
      showLoading() {
        return (
          !(this.firstPageLoaded || !this.loading || !this.loadingForNow) &&
          (this.finalShowSystemLoading &&
            x({ title: this.finalSystemLoadingText, mask: this.systemLoadingMask }),
          this.autoHideLoadingAfterFirstLoaded
            ? !!this.fromEmptyViewReload || !this.pagingLoaded
            : this.loadingType === ge.LoadingType.Refresher)
        );
      },
      finalShowSystemLoading() {
        return this.autoShowSystemLoading && this.loadingType === ge.LoadingType.Refresher;
      }
    },
    methods: {
      _startLoading(e = !1) {
        ((this.showLoadingMoreWhenReload && !this.isUserPullDown) || !e) &&
          (this.loadingStatus = ge.More.Loading),
          (this.loading = !0);
      },
      _endSystemLoadingAndRefresh() {
        this.finalShowSystemLoading && b(), !this.useCustomRefresher && L();
      }
    }
  },
  Le = {
    props: {
      useChatRecordMode: { type: Boolean, default: ce.gc('useChatRecordMode', !1) },
      chatRecordMoreOffset: {
        type: [Number, String],
        default: ce.gc('chatRecordMoreOffset', '0rpx')
      },
      autoHideKeyboardWhenChat: { type: Boolean, default: ce.gc('autoHideKeyboardWhenChat', !0) },
      autoAdjustPositionWhenChat: {
        type: Boolean,
        default: ce.gc('autoAdjustPositionWhenChat', !0)
      },
      chatAdjustPositionOffset: {
        type: [Number, String],
        default: ce.gc('chatAdjustPositionOffset', '0rpx')
      },
      autoToBottomWhenChat: { type: Boolean, default: ce.gc('autoToBottomWhenChat', !1) },
      showChatLoadingWhenReload: { type: Boolean, default: ce.gc('showChatLoadingWhenReload', !1) },
      chatLoadingMoreDefaultAsLoading: {
        type: Boolean,
        default: ce.gc('chatLoadingMoreDefaultAsLoading', !0)
      }
    },
    data: () => ({ keyboardHeight: 0, isKeyboardHeightChanged: !1 }),
    computed: {
      finalChatRecordMoreOffset() {
        return ce.convertToPx(this.chatRecordMoreOffset);
      },
      finalChatAdjustPositionOffset() {
        return ce.convertToPx(this.chatAdjustPositionOffset);
      },
      chatRecordRotateStyle() {
        let e;
        return (
          (e = this.useChatRecordMode ? { transform: 'scaleY(-1)' } : {}),
          this.$emit('update:cellStyle', e),
          this.$emit('cellStyleChange', e),
          this.$nextTick(() => {
            this.isFirstPage &&
              this.isChatRecordModeAndNotInversion &&
              this.$nextTick(() => {
                this._scrollToBottom(!1),
                  ce.delay(() => {
                    this._scrollToBottom(!1),
                      ce.delay(() => {
                        this._scrollToBottom(!1);
                      }, 50);
                  }, 50);
              });
          }),
          e
        );
      },
      isChatRecordModeHasTransform() {
        return (
          this.useChatRecordMode &&
          this.chatRecordRotateStyle &&
          this.chatRecordRotateStyle.transform
        );
      },
      isChatRecordModeAndNotInversion() {
        return (
          this.isChatRecordModeHasTransform && 'scaleY(1)' === this.chatRecordRotateStyle.transform
        );
      },
      isChatRecordModeAndInversion() {
        return (
          this.isChatRecordModeHasTransform && 'scaleY(-1)' === this.chatRecordRotateStyle.transform
        );
      },
      chatRecordModeSafeAreaBottom() {
        return this.safeAreaInsetBottom && !this.keyboardHeight ? this.safeAreaBottom : 0;
      }
    },
    mounted() {},
    methods: {
      addChatRecordData(e, t = !0, i = !0) {
        this.useChatRecordMode &&
          ((this.isTotalChangeFromAddData = !0), this.addDataFromTop(e, t, i));
      },
      doChatRecordLoadMore() {
        this.useChatRecordMode && this._onLoadingMore('click');
      },
      _handleKeyboardHeightChange(e) {
        this.$emit('keyboardHeightChange', e),
          this.autoAdjustPositionWhenChat &&
            ((this.isKeyboardHeightChanged = !0),
            (this.keyboardHeight =
              e.height > 0 ? e.height + this.finalChatAdjustPositionOffset : e.height)),
          this.autoToBottomWhenChat &&
            this.keyboardHeight > 0 &&
            ce.delay(() => {
              this.scrollToBottom(!1),
                ce.delay(() => {
                  this.scrollToBottom(!1);
                });
            });
      }
    }
  },
  ve = {
    props: {
      usePageScroll: { type: Boolean, default: ce.gc('usePageScroll', !1) },
      scrollable: { type: Boolean, default: ce.gc('scrollable', !0) },
      showScrollbar: { type: Boolean, default: ce.gc('showScrollbar', !0) },
      scrollX: { type: Boolean, default: ce.gc('scrollX', !1) },
      scrollToTopBounceEnabled: { type: Boolean, default: ce.gc('scrollToTopBounceEnabled', !1) },
      scrollToBottomBounceEnabled: {
        type: Boolean,
        default: ce.gc('scrollToBottomBounceEnabled', !0)
      },
      scrollWithAnimation: { type: Boolean, default: ce.gc('scrollWithAnimation', !1) },
      scrollIntoView: { type: String, default: ce.gc('scrollIntoView', '') }
    },
    data: () => ({
      scrollTop: 0,
      oldScrollTop: 0,
      scrollViewStyle: {},
      scrollViewContainerStyle: {},
      scrollViewInStyle: {},
      pageScrollTop: -1,
      scrollEnable: !0,
      privateScrollWithAnimation: -1,
      cacheScrollNodeHeight: -1
    }),
    watch: {
      oldScrollTop(e) {
        !this.usePageScroll && this._scrollTopChange(e, !1);
      },
      pageScrollTop(e) {
        this.usePageScroll && this._scrollTopChange(e, !0);
      },
      usePageScroll: {
        handler(e) {
          this.loaded && this.autoHeight && this._setAutoHeight(!e),
            e &&
              this.$nextTick(() => {
                const e = this.$refs['zp-scroll-view'].$refs.main;
                e && (e.style = {});
              });
        },
        immediate: !0
      },
      finalScrollTop(e) {
        this.renderPropScrollTop = e < 6 ? 0 : 10;
      }
    },
    computed: {
      finalScrollWithAnimation() {
        if (-1 !== this.privateScrollWithAnimation) {
          const e = 1 === this.privateScrollWithAnimation;
          return (this.privateScrollWithAnimation = -1), e;
        }
        return this.scrollWithAnimation;
      },
      finalScrollViewStyle() {
        return (
          1 != this.superContentZIndex &&
            ((this.scrollViewStyle['z-index'] = this.superContentZIndex),
            (this.scrollViewStyle.position = 'relative')),
          this.scrollViewStyle
        );
      },
      finalScrollTop() {
        return this.usePageScroll ? this.pageScrollTop : this.oldScrollTop;
      },
      finalIsOldWebView() {
        return this.isOldWebView && !this.usePageScroll;
      }
    },
    methods: {
      scrollToTop(e, t = !0) {
        this.useChatRecordMode && t && !this.isChatRecordModeAndNotInversion
          ? this.scrollToBottom(e, !1)
          : this.$nextTick(() => {
              this._scrollToTop(e, !1);
            });
      },
      scrollToBottom(e, t = !0) {
        this.useChatRecordMode && t && !this.isChatRecordModeAndNotInversion
          ? this.scrollToTop(e, !1)
          : this.$nextTick(() => {
              this._scrollToBottom(e);
            });
      },
      scrollIntoViewById(e, t, i) {
        this._scrollIntoView(e, t, i);
      },
      scrollIntoViewByNodeTop(e, t, i) {
        (this.scrollTop = this.oldScrollTop),
          this.$nextTick(() => {
            this._scrollIntoViewByNodeTop(e, t, i);
          });
      },
      scrollToY(e, t, i) {
        (this.scrollTop = this.oldScrollTop),
          this.$nextTick(() => {
            this._scrollToY(e, t, i);
          });
      },
      scrollIntoViewByIndex(e, t, i) {
        this._scrollIntoView(e, t, i);
      },
      scrollIntoViewByView(e, t, i) {
        this._scrollIntoView(e, t, i);
      },
      updatePageScrollTop(e) {
        this.pageScrollTop = e;
      },
      updatePageScrollTopHeight() {
        this._updatePageScrollTopOrBottomHeight('top');
      },
      updatePageScrollBottomHeight() {
        this._updatePageScrollTopOrBottomHeight('bottom');
      },
      updateLeftAndRightWidth() {
        this.finalIsOldWebView &&
          this.$nextTick(() =>
            this._updateLeftAndRightWidth(this.scrollViewContainerStyle, 'zp-page')
          );
      },
      updateScrollViewScrollTop(e, t = !0) {
        (this.privateScrollWithAnimation = t ? 1 : 0),
          (this.scrollTop = this.oldScrollTop),
          this.$nextTick(() => {
            (this.scrollTop = e), (this.oldScrollTop = this.scrollTop);
          });
      },
      _onScrollToUpper() {
        this.$emit('scrolltoupper'),
          this.$emit('scrollTopChange', 0),
          this.$nextTick(() => {
            this.oldScrollTop = 0;
          });
      },
      _onScrollToLower(e) {
        (!e.detail || !e.detail.direction || 'bottom' === e.detail.direction) &&
          this._onLoadingMore(this.useChatRecordMode ? 'click' : 'toBottom');
      },
      _scrollToTop(e = !0, t = !0) {
        this.usePageScroll
          ? this.$nextTick(() => {
              v({ scrollTop: 0, duration: e ? 100 : 0 });
            })
          : ((this.privateScrollWithAnimation = e ? 1 : 0),
            (this.scrollTop = this.oldScrollTop),
            this.$nextTick(() => {
              (this.scrollTop = 0), (this.oldScrollTop = this.scrollTop);
            }));
      },
      async _scrollToBottom(e = !0) {
        if (this.usePageScroll)
          this.$nextTick(() => {
            v({ scrollTop: Number.MAX_VALUE, duration: e ? 100 : 0 });
          });
        else
          try {
            this.privateScrollWithAnimation = e ? 1 : 0;
            const t = await this._getNodeClientRect('.zp-paging-container'),
              i = await this._getNodeClientRect('.zp-scroll-view'),
              o = t ? t[0].height : 0,
              a = i ? i[0].height : 0;
            o > a &&
              ((this.scrollTop = this.oldScrollTop),
              this.$nextTick(() => {
                (this.scrollTop = o - a + this.virtualPlaceholderTopHeight),
                  (this.oldScrollTop = this.scrollTop);
              }));
          } catch (t) {}
      },
      _scrollIntoView(e, t = 0, i = !1, o) {
        try {
          (this.scrollTop = this.oldScrollTop),
            this.$nextTick(() => {
              this._getNodeClientRect('#' + e.replace('#', ''), this.$parent).then((e) => {
                if (e) {
                  let a = e[0].top;
                  this._scrollIntoViewByNodeTop(a, t, i), o && o();
                }
              });
            });
        } catch (a) {}
      },
      _scrollIntoViewByNodeTop(e, t = 0, i = !1) {
        this.isChatRecordModeAndInversion
          ? this._getNodeClientRect('.zp-scroll-view').then((o) => {
              o && this._scrollToY(o[0].height - e, t, i, !0);
            })
          : this._scrollToY(e, t, i, !0);
      },
      _scrollToY(e, t = 0, i = !1, o = !1) {
        (this.privateScrollWithAnimation = i ? 1 : 0),
          ce.delay(() => {
            if (this.usePageScroll) {
              o && -1 !== this.pageScrollTop && (e += this.pageScrollTop);
              v({ scrollTop: e - t, duration: i ? 100 : 0 });
            } else o && (e += this.oldScrollTop), (this.scrollTop = e - t);
          }, 10);
      },
      _scroll(e) {
        this.$emit('scroll', e);
        const t = e.detail.scrollTop;
        this.finalUseVirtualList && this._updateVirtualScroll(t, this.oldScrollTop - t),
          (this.oldScrollTop = t);
        const i = e.detail.scrollHeight - this.oldScrollTop;
        !this.isIos && this._checkScrolledToBottom(i);
      },
      _doCheckScrollViewShouldFullHeight(e) {
        this.autoFullHeight && this.usePageScroll && this.isTotalChangeFromAddData
          ? this.$nextTick(() => {
              this._checkScrollViewShouldFullHeight((t, i) => {
                this._preCheckShowNoMoreInside(e, t, i);
              });
            })
          : this._preCheckShowNoMoreInside(e);
      },
      async _checkScrollViewShouldFullHeight(e) {
        try {
          const t = await this._getNodeClientRect('.zp-scroll-view'),
            i = await this._getNodeClientRect('.zp-paging-container-content');
          if (!t || !i) return;
          const o = i[0].height,
            a = t[0].top;
          this.isAddedData && o + a <= this.windowHeight
            ? (this._setAutoHeight(!0, t), e(t, i))
            : (this._setAutoHeight(!1), e(null, null));
        } catch (t) {
          e(null, null);
        }
      },
      _scrollTopChange(e, t) {
        this.$emit('scrollTopChange', e),
          this.$emit('update:scrollTop', e),
          this._checkShouldShowBackToTop(e);
        const i = e > 5 ? 6 : 0;
        t && this.wxsPageScrollTop !== i
          ? (this.wxsPageScrollTop = i)
          : t ||
            this.wxsScrollTop === i ||
            ((this.wxsScrollTop = i), i > 6 && (this.scrollEnable = !0));
      },
      _updatePageScrollTopOrBottomHeight(e) {
        if (!this.usePageScroll) return;
        this._doCheckScrollViewShouldFullHeight(this.realTotalData);
        const t = `.zp-page-${e}`,
          i = `margin${e.slice(0, 1).toUpperCase() + e.slice(1)}`;
        let o = this.safeAreaInsetBottom;
        this.$nextTick(() => {
          ce.delay(() => {
            this._getNodeClientRect(t).then((t) => {
              if (t) {
                let a = t[0].height;
                'bottom' === e ? o && (a += this.safeAreaBottom) : (this.cacheTopHeight = a),
                  this.$set(this.scrollViewStyle, i, `${a}px`);
              } else o && this.$set(this.scrollViewStyle, i, `${this.safeAreaBottom}px`);
            });
          }, 0);
        });
      }
    }
  },
  De = {
    props: {
      autoShowBackToTop: { type: Boolean, default: ce.gc('autoShowBackToTop', !1) },
      backToTopThreshold: {
        type: [Number, String],
        default: ce.gc('backToTopThreshold', '400rpx')
      },
      backToTopImg: { type: String, default: ce.gc('backToTopImg', '') },
      backToTopWithAnimate: { type: Boolean, default: ce.gc('backToTopWithAnimate', !0) },
      backToTopBottom: { type: [Number, String], default: ce.gc('backToTopBottom', '160rpx') },
      backToTopStyle: { type: Object, default: ce.gc('backToTopStyle', {}) },
      enableBackToTop: { type: Boolean, default: ce.gc('enableBackToTop', !0) }
    },
    data: () => ({
      backToTopClass: 'zp-back-to-top zp-back-to-top-hide',
      lastBackToTopShowTime: 0,
      showBackToTopClass: !1
    }),
    computed: {
      backToTopThresholdUnitConverted() {
        return ce.addUnit(this.backToTopThreshold, this.unit);
      },
      backToTopBottomUnitConverted() {
        return ce.addUnit(this.backToTopBottom, this.unit);
      },
      finalEnableBackToTop() {
        return !this.usePageScroll && this.enableBackToTop;
      },
      finalBackToTopThreshold() {
        return ce.convertToPx(this.backToTopThresholdUnitConverted);
      },
      finalBackToTopStyle() {
        const e = this.backToTopStyle;
        return (
          e.bottom ||
            (e.bottom =
              this.windowBottom + ce.convertToPx(this.backToTopBottomUnitConverted) + 'px'),
          e.position || (e.position = this.usePageScroll ? 'fixed' : 'absolute'),
          e
        );
      },
      finalBackToTopClass() {
        return `${this.backToTopClass} zp-back-to-top-${this.unit}`;
      }
    },
    methods: {
      _backToTopClick() {
        let e = !1;
        this.$emit('backToTopClick', (t) => {
          (void 0 === t || !0 === t) && this._handleToTop(), (e = !0);
        }),
          this.$nextTick(() => {
            !e && this._handleToTop();
          });
      },
      _handleToTop() {
        !this.backToTopWithAnimate && this._checkShouldShowBackToTop(0),
          this.scrollToTop(this.backToTopWithAnimate);
      },
      _checkShouldShowBackToTop(e) {
        this.autoShowBackToTop
          ? e > this.finalBackToTopThreshold
            ? this.showBackToTopClass ||
              ((this.showBackToTopClass = !0),
              (this.lastBackToTopShowTime = new Date().getTime()),
              ce.delay(() => {
                this.backToTopClass = 'zp-back-to-top zp-back-to-top-show';
              }, 300))
            : this.showBackToTopClass &&
              ((this.backToTopClass = 'zp-back-to-top zp-back-to-top-hide'),
              ce.delay(
                () => {
                  this.showBackToTopClass = !1;
                },
                new Date().getTime() - this.lastBackToTopShowTime < 500 ? 0 : 300
              ))
          : (this.showBackToTopClass = !1);
      }
    }
  },
  Ve = {
    props: {
      useVirtualList: { type: Boolean, default: ce.gc('useVirtualList', !1) },
      useCompatibilityMode: { type: Boolean, default: ce.gc('useCompatibilityMode', !1) },
      extraData: { type: Object, default: ce.gc('extraData', {}) },
      useInnerList: { type: Boolean, default: ce.gc('useInnerList', !1) },
      forceCloseInnerList: { type: Boolean, default: ce.gc('forceCloseInnerList', !1) },
      cellKeyName: { type: String, default: ce.gc('cellKeyName', '') },
      innerListStyle: { type: Object, default: ce.gc('innerListStyle', {}) },
      innerCellStyle: { type: Object, default: ce.gc('innerCellStyle', {}) },
      preloadPage: {
        type: [Number, String],
        default: ce.gc('preloadPage', 12),
        validator: (e) => (e <= 0 && ce.consoleErr('preload-page必须大于0！'), e > 0)
      },
      cellHeightMode: { type: String, default: ce.gc('cellHeightMode', ge.CellHeightMode.Fixed) },
      virtualListCol: { type: [Number, String], default: ce.gc('virtualListCol', 1) },
      virtualScrollFps: { type: [Number, String], default: ce.gc('virtualScrollFps', 80) }
    },
    data: () => ({
      virtualListKey: ce.getInstanceId(),
      virtualPageHeight: 0,
      virtualCellHeight: 0,
      virtualScrollTimeStamp: 0,
      virtualList: [],
      virtualPlaceholderTopHeight: 0,
      virtualPlaceholderBottomHeight: 0,
      virtualTopRangeIndex: 0,
      virtualBottomRangeIndex: 0,
      lastVirtualTopRangeIndex: 0,
      lastVirtualBottomRangeIndex: 0,
      virtualItemInsertedCount: 0,
      virtualHeightCacheList: [],
      getCellHeightRetryCount: { fixed: 0, dynamic: 0 },
      pagingOrgTop: -1,
      updateVirtualListFromDataChange: !1
    }),
    watch: {
      realTotalData(e) {
        this.finalUseVirtualList &&
          ((this.updateVirtualListFromDataChange = !0),
          this.$nextTick(() => {
            (this.getCellHeightRetryCount.fixed = 0),
              !e.length && this._resetDynamicListState(!this.isUserPullDown),
              e.length &&
                this.cellHeightMode === ge.CellHeightMode.Fixed &&
                this.isFirstPage &&
                this._updateFixedCellHeight(),
              this._updateVirtualScroll(this.oldScrollTop);
          }));
      },
      virtualList(e) {
        this.$emit('update:virtualList', e), this.$emit('virtualListChange', e);
      }
    },
    computed: {
      virtualCellIndexKey: () => te,
      finalUseVirtualList() {
        return (
          this.useVirtualList &&
            this.usePageScroll &&
            ce.consoleErr('使用页面滚动时，开启虚拟列表无效！'),
          this.useVirtualList && !this.usePageScroll
        );
      },
      finalUseInnerList() {
        return this.useInnerList || (this.finalUseVirtualList && !this.forceCloseInnerList);
      },
      finalCellKeyName() {
        return this.cellKeyName;
      },
      finalVirtualPageHeight() {
        return this.virtualPageHeight > 0 ? this.virtualPageHeight : this.windowHeight;
      },
      virtualRangePageHeight() {
        return this.finalVirtualPageHeight * this.preloadPage;
      },
      virtualScrollDisTimeStamp() {
        return 1e3 / this.virtualScrollFps;
      }
    },
    methods: {
      doInsertVirtualListItem(e, t) {
        if (this.cellHeightMode !== ge.CellHeightMode.Dynamic) return;
        this.virtualItemInsertedCount++,
          (e && '[object Object]' === Object.prototype.toString.call(e)) || (e = { item: e });
        const i = this.virtualCellIndexKey;
        (e[i] = `custom-${this.virtualItemInsertedCount}`),
          (e[ie] = `${this.virtualListKey}-${e[i]}`),
          this.$nextTick(async () => {
            let o = 0;
            for (; o <= 10; ) {
              await ce.wait(X);
              const a = await this._getNodeClientRect(`#zp-id-${e[i]}`, this.finalUseInnerList);
              if (!a) {
                o++;
                continue;
              }
              const s = a ? a[0].height : 0,
                r = this.virtualHeightCacheList[t - 1],
                l = r ? r.totalHeight : 0;
              this.virtualHeightCacheList.splice(t, 0, {
                height: s,
                lastTotalHeight: l,
                totalHeight: l + s
              });
              for (let e = t + 1; e < this.virtualHeightCacheList.length; e++) {
                const t = this.virtualHeightCacheList[e];
                (t.lastTotalHeight += s), (t.totalHeight += s);
              }
              this._updateVirtualScroll(this.oldScrollTop);
              break;
            }
          });
      },
      didUpdateVirtualListCell(e) {
        if (this.cellHeightMode !== ge.CellHeightMode.Dynamic) return;
        const t = this.virtualHeightCacheList[e];
        this.$nextTick(() => {
          this._getNodeClientRect(`#zp-id-${e}`, this.finalUseInnerList).then((i) => {
            const o = i ? i[0].height : 0,
              a = o - t.height;
            (t.height = o), (t.totalHeight = t.lastTotalHeight + o);
            for (let t = e + 1; t < this.virtualHeightCacheList.length; t++) {
              const e = this.virtualHeightCacheList[t];
              (e.totalHeight += a), (e.lastTotalHeight += a);
            }
          });
        });
      },
      didDeleteVirtualListCell(e) {
        if (this.cellHeightMode !== ge.CellHeightMode.Dynamic) return;
        const t = this.virtualHeightCacheList[e];
        for (let i = e + 1; i < this.virtualHeightCacheList.length; i++) {
          const e = this.virtualHeightCacheList[i];
          (e.totalHeight -= t.height), (e.lastTotalHeight -= t.height);
        }
        this.virtualHeightCacheList.splice(e, 1);
      },
      _virtualListInit() {
        this.$nextTick(() => {
          ce.delay(() => {
            this._getNodeClientRect('.zp-scroll-view').then((e) => {
              e && ((this.pagingOrgTop = e[0].top), (this.virtualPageHeight = e[0].height));
            });
          });
        });
      },
      _updateFixedCellHeight() {
        this.$nextTick(() => {
          ce.delay(
            () => {
              this._getNodeClientRect('#zp-id-0', this.finalUseInnerList).then((e) => {
                if (e)
                  (this.virtualCellHeight = e[0].height),
                    this._updateVirtualScroll(this.oldScrollTop);
                else {
                  if (this.getCellHeightRetryCount.fixed > 10) return;
                  this.getCellHeightRetryCount.fixed++, this._updateFixedCellHeight();
                }
              });
            },
            X,
            'updateFixedCellHeightDelay'
          );
        });
      },
      _updateDynamicCellHeight(e, t = 'bottom') {
        const i = 'top' === t,
          o = this.virtualHeightCacheList,
          a = i ? [] : o;
        let s = 0;
        this.$nextTick(() => {
          ce.delay(
            async () => {
              for (let r = 0; r < e.length; r++) {
                const l = await this._getNodeClientRect(
                    `#zp-id-${e[r][this.virtualCellIndexKey]}`,
                    this.finalUseInnerList
                  ),
                  h = l ? l[0].height : 0;
                if (!l)
                  return void (
                    this.getCellHeightRetryCount.dynamic <= 10 &&
                    (o.splice(o.length - r, r),
                    this.getCellHeightRetryCount.dynamic++,
                    this._updateDynamicCellHeight(e, t))
                  );
                const n = a.length ? a.slice(-1)[0] : null,
                  d = n ? n.totalHeight : 0;
                a.push({ height: h, lastTotalHeight: d, totalHeight: d + h }), i && (s += h);
              }
              if (i && e.length) {
                for (let e = 0; e < o.length; e++) {
                  const t = o[e];
                  (t.lastTotalHeight += s), (t.totalHeight += s);
                }
                this.virtualHeightCacheList = a.concat(o);
              }
              this._updateVirtualScroll(this.oldScrollTop);
            },
            X,
            'updateDynamicCellHeightDelay'
          );
        });
      },
      _setCellIndex(e, t = 'bottom') {
        let i = 0;
        const o = this.virtualCellIndexKey;
        if (this.totalData.length) {
          if ('bottom' === t) {
            i = this.realTotalData.length;
            const e = this.realTotalData.length ? this.realTotalData.slice(-1)[0] : null;
            e && void 0 !== e[o] && (i = e[o] + 1);
          } else if ('top' === t) {
            const t = this.realTotalData.length ? this.realTotalData[0] : null;
            t && void 0 !== t[o] && (i = t[o] - e.length);
          }
        } else this._resetDynamicListState();
        for (let a = 0; a < e.length; a++) {
          let t = e[a];
          (t && '[object Object]' === Object.prototype.toString.call(t)) || (t = { item: t }),
            (t[o] = i + a),
            (t[ie] = `${this.virtualListKey}-${t[o]}`),
            (e[a] = t);
        }
        (this.getCellHeightRetryCount.dynamic = 0),
          this.cellHeightMode === ge.CellHeightMode.Dynamic && this._updateDynamicCellHeight(e, t);
      },
      _updateVirtualScroll(e, t = 0) {
        const i = ce.getTime();
        if (
          (0 === e && this._resetTopRange(),
          0 !== e &&
            this.virtualScrollTimeStamp &&
            i - this.virtualScrollTimeStamp <= this.virtualScrollDisTimeStamp)
        )
          return;
        this.virtualScrollTimeStamp = i;
        let o = 0;
        const a = this.cellHeightMode;
        if (a === ge.CellHeightMode.Fixed)
          (o = parseInt(e / this.virtualCellHeight) || 0),
            this._updateFixedTopRangeIndex(o),
            this._updateFixedBottomRangeIndex(o);
        else if (a === ge.CellHeightMode.Dynamic) {
          const i = t > 0 ? 'top' : 'bottom',
            o = this.virtualRangePageHeight,
            a = e - o,
            s = e + this.finalVirtualPageHeight + o;
          let r = 0,
            l = 0,
            h = !1;
          const n = this.virtualHeightCacheList,
            d = n ? n.slice(-1)[0] : null;
          let c = this.virtualTopRangeIndex;
          if ('bottom' === i)
            for (let e = c; e < n.length; e++) {
              const t = n[e];
              if (t && t.totalHeight > a) {
                (this.virtualTopRangeIndex = e),
                  (this.virtualPlaceholderTopHeight = t.lastTotalHeight);
                break;
              }
            }
          else {
            let e = !1;
            for (let t = c; t >= 0; t--) {
              const i = n[t];
              if (i && i.totalHeight < a) {
                (this.virtualTopRangeIndex = t),
                  (this.virtualPlaceholderTopHeight = i.lastTotalHeight),
                  (e = !0);
                break;
              }
            }
            !e && this._resetTopRange();
          }
          for (let e = this.virtualTopRangeIndex; e < n.length; e++) {
            const t = n[e];
            if (t && t.totalHeight > s) {
              (r = e), (l = d.totalHeight - t.totalHeight), (h = !0);
              break;
            }
          }
          h && 0 !== this.virtualBottomRangeIndex
            ? ((this.virtualBottomRangeIndex = r), (this.virtualPlaceholderBottomHeight = l))
            : ((this.virtualBottomRangeIndex = this.realTotalData.length
                ? this.realTotalData.length - 1
                : this.pageSize),
              (this.virtualPlaceholderBottomHeight = 0)),
            this._updateVirtualList();
        }
      },
      _updateFixedTopRangeIndex(e) {
        let t =
          0 === this.virtualCellHeight
            ? 0
            : e -
              (parseInt(this.finalVirtualPageHeight / this.virtualCellHeight) || 1) *
                this.preloadPage;
        (t *= this.virtualListCol),
          (t = Math.max(0, t)),
          (this.virtualTopRangeIndex = t),
          (this.virtualPlaceholderTopHeight = (t / this.virtualListCol) * this.virtualCellHeight);
      },
      _updateFixedBottomRangeIndex(e) {
        let t =
          0 === this.virtualCellHeight
            ? this.pageSize
            : e +
              (parseInt(this.finalVirtualPageHeight / this.virtualCellHeight) || 1) *
                (this.preloadPage + 1);
        (t *= this.virtualListCol),
          (t = Math.min(this.realTotalData.length, t)),
          (this.virtualBottomRangeIndex = t),
          (this.virtualPlaceholderBottomHeight =
            ((this.realTotalData.length - t) * this.virtualCellHeight) / this.virtualListCol),
          this._updateVirtualList();
      },
      _updateVirtualList() {
        (this.updateVirtualListFromDataChange ||
          this.lastVirtualTopRangeIndex !== this.virtualTopRangeIndex ||
          this.lastVirtualBottomRangeIndex !== this.virtualBottomRangeIndex) &&
          ((this.updateVirtualListFromDataChange = !1),
          (this.lastVirtualTopRangeIndex = this.virtualTopRangeIndex),
          (this.lastVirtualBottomRangeIndex = this.virtualBottomRangeIndex),
          (this.virtualList = this.realTotalData.slice(
            this.virtualTopRangeIndex,
            this.virtualBottomRangeIndex + 1
          )));
      },
      _resetDynamicListState(e = !1) {
        (this.virtualHeightCacheList = []),
          e && (this.virtualList = []),
          (this.virtualTopRangeIndex = 0),
          (this.virtualPlaceholderTopHeight = 0);
      },
      _resetTopRange() {
        (this.virtualTopRangeIndex = 0),
          (this.virtualPlaceholderTopHeight = 0),
          this._updateVirtualList();
      },
      _checkVirtualListScroll() {
        this.finalUseVirtualList &&
          this.$nextTick(() => {
            this._getNodeClientRect('.zp-paging-touch-view').then((e) => {
              const t = e ? e[0].top : 0;
              (!e || (t === this.pagingOrgTop && 0 !== this.virtualPlaceholderTopHeight)) &&
                this._updateVirtualScroll(0);
            });
          });
      },
      _innerCellClick(e, t) {
        this.$emit('innerCellClick', e, t);
      }
    }
  },
  ze = y(),
  Ne = {
    name: 'z-paging',
    components: { zPagingRefresh: ue, zPagingLoadMore: pe, zPagingEmptyView: J },
    mixins: [me, ye, Me, Ae, Ce, Ie, xe, be, Le, ve, De, Ve],
    data: () => ({
      base64Arrow: Z,
      base64Flower: j,
      base64BackToTop: _,
      loadingType: ge.LoadingType.Refresher,
      requestTimeStamp: 0,
      wxsPropType: '',
      renderPropScrollTop: -1,
      checkScrolledToBottomTimeOut: null,
      cacheTopHeight: -1,
      statusBarHeight: ze.statusBarHeight,
      insideOfPaging: -1,
      isLoadFailed: !1,
      isIos: 'ios' === ze.platform,
      disabledBounce: !1,
      fromCompleteEmit: !1,
      disabledCompleteEmit: !1,
      pageLaunched: !1,
      active: !1,
      wxsIsScrollTopInTopRange: !0,
      wxsScrollTop: 0,
      wxsPageScrollTop: 0,
      wxsOnPullingDown: !1
    }),
    props: {
      delay: { type: [Number, String], default: ce.gc('delay', 0) },
      minDelay: { type: [Number, String], default: ce.gc('minDelay', 0) },
      pagingStyle: { type: Object, default: ce.gc('pagingStyle', {}) },
      height: { type: String, default: ce.gc('height', '') },
      width: { type: String, default: ce.gc('width', '') },
      maxWidth: { type: String, default: ce.gc('maxWidth', '') },
      bgColor: { type: String, default: ce.gc('bgColor', '') },
      pagingContentStyle: { type: Object, default: ce.gc('pagingContentStyle', {}) },
      autoHeight: { type: Boolean, default: ce.gc('autoHeight', !1) },
      autoHeightAddition: { type: [Number, String], default: ce.gc('autoHeightAddition', '0px') },
      defaultThemeStyle: { type: String, default: ce.gc('defaultThemeStyle', 'black') },
      fixed: { type: Boolean, default: ce.gc('fixed', !0) },
      safeAreaInsetBottom: { type: Boolean, default: ce.gc('safeAreaInsetBottom', !1) },
      useSafeAreaPlaceholder: { type: Boolean, default: ce.gc('useSafeAreaPlaceholder', !1) },
      bottomBgColor: { type: String, default: ce.gc('bottomBgColor', '') },
      topZIndex: { type: Number, default: ce.gc('topZIndex', 99) },
      superContentZIndex: { type: Number, default: ce.gc('superContentZIndex', 1) },
      contentZIndex: { type: Number, default: ce.gc('contentZIndex', 10) },
      autoFullHeight: { type: Boolean, default: ce.gc('autoFullHeight', !0) },
      watchTouchDirectionChange: { type: Boolean, default: ce.gc('watchTouchDirectionChange', !1) },
      unit: { type: String, default: ce.gc('unit', 'rpx') }
    },
    created() {
      this.createdReload &&
        !this.refresherOnly &&
        this.auto &&
        (this._startLoading(), this.$nextTick(this._preReload));
    },
    mounted() {
      (this.active = !0),
        (this.wxsPropType = ce.getTime().toString()),
        this.renderJsIgnore,
        this.createdReload || this.refresherOnly || !this.auto || this.$nextTick(this._preReload),
        this.finalUseCache && this._setListByLocalCache();
      let e = 0;
      (e = X),
        this.$nextTick(() => {
          (this.systemInfo = y()),
            !this.usePageScroll && this.autoHeight && this._setAutoHeight(),
            (this.loaded = !0),
            ce.delay(this.updateFixedLayout);
        }),
        this.updatePageScrollTopHeight(),
        this.updatePageScrollBottomHeight(),
        this.updateLeftAndRightWidth(),
        this.finalRefresherEnabled &&
          this.useCustomRefresher &&
          this.$nextTick(() => {
            this.isTouchmoving = !0;
          }),
        this._onEmit(),
        this.finalUseVirtualList && this._virtualListInit(),
        this.$nextTick(() => {
          setTimeout(() => {
            this._getCssSafeAreaInsetBottom(
              () => this.safeAreaInsetBottom && this.updatePageScrollBottomHeight()
            );
          }, e);
        });
    },
    destroyed() {
      this._handleUnmounted();
    },
    unmounted() {
      this._handleUnmounted();
    },
    watch: {
      defaultThemeStyle: {
        handler(e) {
          e.length && (this.finalRefresherDefaultStyle = e);
        },
        immediate: !0
      },
      autoHeight(e) {
        this.loaded && !this.usePageScroll && this._setAutoHeight(e);
      },
      autoHeightAddition(e) {
        this.loaded && !this.usePageScroll && this.autoHeight && this._setAutoHeight(e);
      }
    },
    computed: {
      finalPagingStyle() {
        const e = { ...this.pagingStyle };
        if (!this.systemInfo) return e;
        const { windowTop: t, windowBottom: i } = this;
        return (
          !this.usePageScroll &&
            this.fixed &&
            (t && !e.top && (e.top = t + 'px'), i && !e.bottom && (e.bottom = i + 'px')),
          this.bgColor.length && !e.background && (e.background = this.bgColor),
          this.height.length && !e.height && (e.height = this.height),
          this.width.length && !e.width && (e.width = this.width),
          this.maxWidth.length &&
            !e['max-width'] &&
            ((e['max-width'] = this.maxWidth), (e.margin = '0 auto')),
          e
        );
      },
      finalPagingContentStyle() {
        return (
          1 != this.contentZIndex &&
            ((this.pagingContentStyle['z-index'] = this.contentZIndex),
            (this.pagingContentStyle.position = 'relative')),
          this.pagingContentStyle
        );
      },
      renderJsIgnore() {
        return (
          ((this.usePageScroll && this.useChatRecordMode) ||
            (!this.refresherEnabled && this.scrollable) ||
            !this.useCustomRefresher) &&
            this.$nextTick(() => {
              this.renderPropScrollTop = 10;
            }),
          0
        );
      },
      windowHeight() {
        return (this.systemInfo && this.systemInfo.windowHeight) || 0;
      },
      windowBottom() {
        if (!this.systemInfo) return 0;
        let e = this.systemInfo.windowBottom || 0;
        return (
          !this.safeAreaInsetBottom ||
            this.useSafeAreaPlaceholder ||
            this.useChatRecordMode ||
            (e += this.safeAreaBottom),
          e
        );
      },
      isIosAndH5() {
        return this.isIos;
      }
    },
    methods: {
      getVersion: () => `z-paging v${K}`,
      setSpecialEffects(e) {
        this.setListSpecialEffects(e);
      },
      setListSpecialEffects(e) {
        (this.nFixFreezing = e && Object.keys(e).length),
          this.isIos && (this.privateRefresherEnabled = 0),
          !this.usePageScroll && this.$refs['zp-n-list'].setSpecialEffects(e);
      },
      _doVibrateShort() {},
      async _setAutoHeight(e = !0, t = null) {
        let i = 'min-height';
        i = 'min-height';
        try {
          if (e) {
            let e = t || (await this._getNodeClientRect('.zp-scroll-view')),
              o = await this._getNodeClientRect('.zp-page-bottom');
            if (e) {
              const t = e[0].top;
              let a = this.windowHeight - t;
              a -= o ? o[0].height : 0;
              const s =
                a +
                ce.convertToPx(this.autoHeightAddition) -
                (this.insideMore ? 1 : 0) +
                'px !important';
              this.$set(this.scrollViewStyle, i, s), this.$set(this.scrollViewInStyle, i, s);
            }
          } else this.$delete(this.scrollViewStyle, i), this.$delete(this.scrollViewInStyle, i);
        } catch (o) {}
      },
      _handleUnmounted() {
        (this.active = !1), this._offEmit();
      },
      _updateInsideOfPaging() {
        this.insideMore && !0 === this.insideOfPaging && setTimeout(this.doLoadMore, 200);
      },
      _cleanTimeout: (e) => (e && (clearTimeout(e), (e = null)), e),
      _onEmit() {
        D(q, (e) => {
          this.loading &&
            (e && (this.customerEmptyViewErrorText = e), this.complete(!1).catch(() => {}));
        }),
          D($, (e) => {
            setTimeout(() => {
              if (this.loading)
                if (this.disabledCompleteEmit) this.disabledCompleteEmit = !1;
                else {
                  const t = e.type || 'normal',
                    i = e.list || e,
                    o = e.rule;
                  switch (((this.fromCompleteEmit = !0), t)) {
                    case 'normal':
                      this.complete(i);
                      break;
                    case 'total':
                      this.completeByTotal(i, o);
                      break;
                    case 'nomore':
                      this.completeByNoMore(i, o);
                      break;
                    case 'key':
                      this.completeByKey(i, o);
                  }
                }
            }, 1);
          });
      },
      _offEmit() {
        V(q), V($);
      }
    }
  };
var ke = 0,
  Pe = -1,
  Be = -1;
function Ee(e, t) {
  var i = Ge(t),
    o = {},
    a = {};
  if (
    (t.callMethod('_handleListTouchstart'),
    !i || ((o = i.getState()), (a = i.getDataset()), !Qe(e, i)))
  ) {
    var s = o.isTouchEnded;
    o.oldMoveDis = 0;
    var r = Ye(e),
      l = Je(a.loading);
    (o.startY = r.touchY),
      (Be = o.startY),
      (o.lastTouch = r),
      !l && s && (o.isTouchmoving = !1),
      (o.isTouchEnded = !1),
      t.callMethod('_handleRefresherTouchstart', r);
  }
}
function We(e, t) {
  var i = Ye(e),
    o = Ge(t),
    a = o.getDataset(),
    s = a.refresherthreshold;
  Je(a.isios);
  var r = o.getState(),
    l = {},
    h = 0,
    n = !1;
  if (Je(a.watchtouchdirectionchange)) {
    h = (l = Ue(e, o)).currentDis;
    var d = (n = l.isDown) ? 'top' : 'bottom';
    n == r.oldTouchDirection &&
      n != r.oldEmitedTouchDirection &&
      (t.callMethod('_handleTouchDirectionChange', { direction: d }),
      (r.oldEmitedTouchDirection = n)),
      (r.oldTouchDirection = n);
  }
  if (Qe(e, o)) return _e(r, t, !1), !0;
  if (
    !(function (e, t, i, o) {
      var a = o.refreshermaxangle,
        s = Je(o.refresheraecc),
        r = i.lastTouch,
        l = i.reachMaxAngle,
        h = i.oldMoveDis;
      if (!r) return !0;
      if (a >= 0 && a <= 90 && r) {
        if ((!h || h < 1) && !s && null != l && !l) return !1;
        var n = Math.abs(t.touchX - r.touchX),
          d = Math.abs(t.touchY - r.touchY),
          c = Math.sqrt(Math.pow(n, 2) + Math.pow(d, 2));
        if ((n || d) && n > 1)
          if ((Math.asin(d / c) / Math.PI) * 180 < a) {
            var g = i.hitReachMaxAngleCount || 0;
            return (
              (i.hitReachMaxAngleCount = ++g),
              i.hitReachMaxAngleCount > 2 && ((i.lastTouch = t), (i.reachMaxAngle = !1)),
              !1
            );
          }
      }
      return (i.lastTouch = t), !0;
    })(0, i, r, a)
  )
    return _e(r, t, !1), !0;
  if (((h = (l = Ue(e, o)).currentDis), (n = l.isDown), h < 0))
    return je(0, o, r, !1), _e(r, t, !1), !0;
  if (n && !r.disabledBounce)
    return (
      t.callMethod('_handleScrollViewBounce', { bounce: !1 }),
      (r.disabledBounce = !0),
      _e(r, t, n),
      !n
    );
  je(h, o, r, !1);
  var c = r.refresherStatus,
    g = Je(a.oldistouchmoving),
    u = Je(a.hastouchmove),
    p = r.isTouchmoving;
  return (
    (r.refresherStatus = h >= s ? 1 : 0),
    p || ((r.isTouchmoving = !0), (p = !0)),
    r.isTouchEnded && (r.isTouchEnded = !1),
    u && t.callMethod('_handleWxsPullingDown', { moveDis: h, diffDis: l.diffDis }),
    (null != c && c == r.refresherStatus && g == p) ||
      t.callMethod('_handleRefresherTouchmove', h, i),
    _e(r, t, n),
    !n
  );
}
function He(e, t) {
  Ye(e);
  var i = Ge(t);
  i.getDataset();
  var o = i.getState();
  if (
    (o.disabledBounce &&
      (t.callMethod('_handleScrollViewBounce', { bounce: !0 }), (o.disabledBounce = !1)),
    !Qe(e, i) &&
      ((o.reachMaxAngle = !0),
      (o.hitReachMaxAngleCount = 0),
      (o.fixedIsTopHitCount = 0),
      o.isTouchmoving))
  ) {
    var a = o.refresherStatus,
      s = o.moveDis,
      r = i.getDataset().refresherthreshold,
      l = Ue(e, i).currentDis;
    if (
      ((l >= r && 1 === a) || (o.isTouchmoving = !1),
      t.callMethod('_handleRefresherTouchend', l),
      (o.isTouchEnded = !0),
      !(s < r))
    ) {
      var h = !1;
      l >= r && ((l = r), (h = !0)), je(l, i, o, h);
    }
  }
}
function Ze() {
  if (!navigator) return !1;
  if (-1 != Pe) return Pe;
  return (Pe = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'].every(function (
    e
  ) {
    return navigator.userAgent.indexOf(e) < 0;
  }));
}
var Fe = !1;
function je(e, t, i, o) {
  (e = e || 0), i.moveDis != e && ((i.moveDis = e), Oe('translateY(' + e + 'px)', t, o, ''));
}
function Oe(e, t, i, o) {
  Je(t.getDataset().refreshernotransform) ||
    ((e = 'translateY(0px)' == e ? 'none' : e),
    t.requestAnimationFrame(function () {
      var a = { transform: e };
      i && (a.transition = 'transform .1s linear'), o.length && (a.transition = o), t.setStyle(a);
    }));
}
function Ue(e, t) {
  var i = t.getState(),
    o = parseFloat(t.getDataset().refresherthreshold),
    a = parseFloat(t.getDataset().refresheroutrate),
    s = parseFloat(t.getDataset().refresherpullrate),
    r = Ye(e),
    l = i.startY && 'NaN' != i.startY ? i.startY : Be,
    h = r.touchY - l,
    n = i.oldMoveDis || 0;
  i.oldMoveDis = h;
  var d = h - n;
  return (
    d > 0 && ((d *= s), ke > o && (d *= 1 - a)),
    (ke += d = d > 100 ? d / 100 : d > 20 ? d / 2.2 : d),
    { currentDis: (ke = Math.max(0, ke)), diffDis: d, isDown: d > 0 }
  );
}
function Ye(e) {
  var t = e;
  return (
    e.touches && e.touches.length
      ? (t = e.touches[0])
      : e.changedTouches && e.changedTouches.length
      ? (t = e.changedTouches[0])
      : e.datail && e.datail != {} && (t = e.datail),
    { touchX: t.clientX, touchY: t.clientY }
  );
}
function Ge(e) {
  var t = e.getState().currentIns;
  return t || e.callMethod('_handlePropUpdate'), t;
}
function Qe(e, t, i) {
  var o = t.getDataset(),
    a = t.getState(),
    s = Je(o.loading),
    r = Je(o.usechatrecordmode),
    l = Je(o.refresherenabled),
    h = Je(o.usecustomrefresher),
    n = Je(o.usepagescroll),
    d = parseFloat(o.pagescrolltop),
    c = parseFloat(o.scrolltop);
  return (
    a.fixedIsTopHitCount,
    (a.fixedIsTopHitCount = 0),
    s || r || !l || !h || (n && h && d > 5 && !0) || (!n && h && c > 5 && !0)
  );
}
function _e(e, t, i) {
  (e.onPullingDown || !1) != i && t.callMethod('_handleWxsPullingDownStatusChange', i),
    (e.onPullingDown = i);
}
function Je(e) {
  return 1 == (e = ('string' == typeof e ? JSON.parse(e) : e) || !1) || 'true' == e;
}
const Ke = {
    touchstart: Ee,
    touchmove: We,
    touchend: He,
    mousedown: function (e, t) {
      Ze() && (Ee(e, t), (Fe = !0));
    },
    mousemove: function (e, t) {
      Ze() && Fe && We(e, t);
    },
    mouseup: function (e, t) {
      Ze() && (He(e, t), (Fe = !1));
    },
    mouseleave: function (e, t) {
      Ze() && (Fe = !1);
    },
    propObserver: function (e, t, i, o) {
      var a = i.getState() || {};
      if (((a.currentIns = o), o.getDataset().loading, e && -1 != e.indexOf('end')))
        Oe('translateY(0px)', o, !1, e.split('end')[0]),
          (a.moveDis = 0),
          (a.oldMoveDis = 0),
          (ke = 0);
      else if (e && -1 != e.indexOf('begin')) {
        je(o.getDataset().refresherthreshold, o, a, !1);
      }
    }
  },
  Xe = (e) => {
    e.$wxs || (e.$wxs = []),
      e.$wxs.push('pagingWxs'),
      e.mixins || (e.mixins = []),
      e.mixins.push({
        beforeCreate() {
          this.pagingWxs = Ke;
        }
      });
  },
  qe = {
    startY: 0,
    isTouchFromZPaging: !1,
    isUsePageScroll: !1,
    isReachedTop: !0,
    isIosAndH5: !1,
    useChatRecordMode: !1,
    appLaunched: !1
  },
  $e = {
    name: 'z-paging',
    mixins: [
      {
        mounted() {
          window && this._handleTouch();
        },
        methods: {
          renderPropIsIosAndH5Change(e) {
            -1 !== e && (qe.isIosAndH5 = e);
          },
          _handleTouch() {
            window.$zPagingRenderJsInited ||
              ((window.$zPagingRenderJsInited = !0),
              window.addEventListener('touchstart', this._handleTouchstart, { passive: !0 }),
              window.addEventListener('touchmove', this._handleTouchmove, { passive: !1 }));
          },
          _handleTouchstart(e) {
            const t = ce.getTouch(e);
            qe.startY = t.touchY;
            const i = ce.getTouchFromZPaging(e.target);
            (qe.isTouchFromZPaging = i.isFromZp),
              (qe.isUsePageScroll = i.isPageScroll),
              (qe.isReachedTop = i.isReachedTop),
              (qe.useChatRecordMode = i.isUseChatRecordMode);
          },
          _handleTouchmove(e) {
            const t = ce.getTouch(e).touchY - qe.startY;
            qe.isTouchFromZPaging &&
              ((qe.isReachedTop && (qe.useChatRecordMode ? t < 0 : t > 0)) ||
                (!qe.useChatRecordMode && qe.isIosAndH5 && !qe.isUsePageScroll && t < 0)) &&
              e.cancelable &&
              !e.defaultPrevented &&
              e.preventDefault();
          },
          _removeAllEventListener() {
            window.removeEventListener('touchstart'), window.removeEventListener('touchmove');
          }
        }
      }
    ]
  },
  et = (e) => {
    e.$renderjs || (e.$renderjs = []),
      e.$renderjs.push('pagingRenderjs'),
      e.mixins || (e.mixins = []),
      e.mixins.push({
        beforeCreate() {
          this.pagingRenderjs = this;
        },
        mounted() {
          this.$ownerInstance = this.$gcd(this, !0);
        }
      }),
      e.mixins.push($e);
  };
Xe(Ne), et(Ne);
const tt = E(Ne, [
  [
    'render',
    function (e, r, l, n, m, f) {
      const T = d,
        y = z('z-paging-refresh'),
        w = z('z-paging-load-more'),
        M = W(N('z-paging-empty-view'), J),
        A = B,
        C = h;
      return (
        t(),
        i(
          T,
          {
            class: c({
              'z-paging-content': !0,
              'z-paging-content-fixed': !e.usePageScroll && e.fixed,
              'z-paging-content-page': e.usePageScroll,
              'z-paging-reached-top': e.renderPropScrollTop < 1,
              'z-paging-use-chat-record-mode': e.useChatRecordMode
            }),
            style: g([e.finalPagingStyle])
          },
          {
            default: o(() => [
              -1 === e.cssSafeAreaInsetBottom
                ? (t(), i(T, { key: 0, class: 'zp-safe-area-inset-bottom' }))
                : p('', !0),
              !e.usePageScroll && e.zSlots.top
                ? k(e.$slots, 'top', { key: 1 }, void 0, !0)
                : e.usePageScroll && e.zSlots.top
                ? (t(),
                  i(
                    T,
                    {
                      key: 2,
                      class: 'zp-page-top',
                      onTouchmove: r[0] || (r[0] = u(() => {}, ['stop', 'prevent'])),
                      style: g([{ top: `${e.windowTop}px`, 'z-index': e.topZIndex }])
                    },
                    { default: o(() => [k(e.$slots, 'top', {}, void 0, !0)]), _: 3 },
                    8,
                    ['style']
                  ))
                : p('', !0),
              a(
                T,
                {
                  class: c({ 'zp-view-super': !0, 'zp-scroll-view-super': !e.usePageScroll }),
                  style: g([e.finalScrollViewStyle])
                },
                {
                  default: o(() => [
                    e.zSlots.left
                      ? (t(),
                        i(
                          T,
                          {
                            key: 0,
                            class: c({ 'zp-page-left': !0, 'zp-absoulte': e.finalIsOldWebView })
                          },
                          { default: o(() => [k(e.$slots, 'left', {}, void 0, !0)]), _: 3 },
                          8,
                          ['class']
                        ))
                      : p('', !0),
                    a(
                      T,
                      {
                        class: c({
                          'zp-scroll-view-container': !0,
                          'zp-absoulte': e.finalIsOldWebView
                        }),
                        style: g([e.scrollViewContainerStyle])
                      },
                      {
                        default: o(() => [
                          a(
                            A,
                            {
                              ref: 'zp-scroll-view',
                              class: c({
                                'zp-scroll-view': !0,
                                'zp-scroll-view-absolute': !e.usePageScroll,
                                'zp-scroll-view-hide-scrollbar': !e.showScrollbar
                              }),
                              style: g([e.chatRecordRotateStyle]),
                              'scroll-top': e.scrollTop,
                              'scroll-x': e.scrollX,
                              'scroll-y':
                                e.scrollable &&
                                !e.usePageScroll &&
                                e.scrollEnable &&
                                (!!e.refresherCompleteScrollable ||
                                  e.refresherStatus !== e.R.Complete),
                              'enable-back-to-top': e.finalEnableBackToTop,
                              'show-scrollbar': e.showScrollbar,
                              'scroll-with-animation': e.finalScrollWithAnimation,
                              'scroll-into-view': e.scrollIntoView,
                              'lower-threshold': e.finalLowerThreshold,
                              'upper-threshold': 5,
                              'refresher-enabled': e.finalRefresherEnabled && !e.useCustomRefresher,
                              'refresher-threshold': e.finalRefresherThreshold,
                              'refresher-default-style': e.finalRefresherDefaultStyle,
                              'refresher-background': e.refresherBackground,
                              'refresher-triggered': e.finalRefresherTriggered,
                              onScroll: e._scroll,
                              onScrolltolower: e._onScrollToLower,
                              onScrolltoupper: e._onScrollToUpper,
                              onRefresherrestore: e._onRestore,
                              onRefresherrefresh: r[3] || (r[3] = (t) => e._onRefresh(!0))
                            },
                            {
                              default: o(() => [
                                a(
                                  T,
                                  {
                                    class: 'zp-paging-touch-view',
                                    onTouchstart: e.pagingWxs.touchstart,
                                    onTouchmove: e.pagingWxs.touchmove,
                                    onTouchend: e.pagingWxs.touchend,
                                    onTouchcancel: e.pagingWxs.touchend,
                                    onMousedown: e.pagingWxs.mousedown,
                                    onMousemove: e.pagingWxs.mousemove,
                                    onMouseup: e.pagingWxs.mouseup,
                                    onMouseleave: e.pagingWxs.mouseleave
                                  },
                                  {
                                    default: o(() => [
                                      e.finalRefresherFixedBacHeight > 0
                                        ? (t(),
                                          i(
                                            T,
                                            {
                                              key: 0,
                                              class: 'zp-fixed-bac-view',
                                              style: g([
                                                {
                                                  background: e.refresherFixedBackground,
                                                  height: `${e.finalRefresherFixedBacHeight}px`
                                                }
                                              ])
                                            },
                                            null,
                                            8,
                                            ['style']
                                          ))
                                        : p('', !0),
                                      a(
                                        T,
                                        {
                                          class: 'zp-paging-main',
                                          style: g([
                                            e.scrollViewInStyle,
                                            {
                                              transform: e.finalRefresherTransform,
                                              transition: e.refresherTransition
                                            }
                                          ]),
                                          'change:prop': e.pagingWxs.propObserver,
                                          prop: e.wxsPropType,
                                          'data-refresherThreshold': e.finalRefresherThreshold,
                                          'data-isIos': e.isIos,
                                          'data-loading': e.loading || e.isRefresherInComplete,
                                          'data-useChatRecordMode': e.useChatRecordMode,
                                          'data-refresherEnabled': e.refresherEnabled,
                                          'data-useCustomRefresher': e.useCustomRefresher,
                                          'data-pageScrollTop': e.wxsPageScrollTop,
                                          'data-scrollTop': e.wxsScrollTop,
                                          'data-refresherMaxAngle': e.refresherMaxAngle,
                                          'data-refresherNoTransform': e.refresherNoTransform,
                                          'data-refresherAecc':
                                            e.refresherAngleEnableChangeContinued,
                                          'data-usePageScroll': e.usePageScroll,
                                          'data-watchTouchDirectionChange':
                                            e.watchTouchDirectionChange,
                                          'data-oldIsTouchmoving': e.isTouchmoving,
                                          'data-refresherOutRate': e.finalRefresherOutRate,
                                          'data-refresherPullRate': e.finalRefresherPullRate,
                                          'data-hasTouchmove': e.hasTouchmove,
                                          'change:renderPropIsIosAndH5':
                                            e.pagingRenderjs.renderPropIsIosAndH5Change,
                                          renderPropIsIosAndH5: e.isIosAndH5
                                        },
                                        {
                                          default: o(() => [
                                            e.showRefresher
                                              ? (t(),
                                                i(
                                                  T,
                                                  {
                                                    key: 0,
                                                    class: 'zp-custom-refresher-view',
                                                    style: g([
                                                      {
                                                        'margin-top': `-${
                                                          e.finalRefresherThreshold +
                                                          e.refresherThresholdUpdateTag
                                                        }px`,
                                                        background: e.refresherBackground,
                                                        opacity: e.isTouchmoving ? 1 : 0
                                                      }
                                                    ])
                                                  },
                                                  {
                                                    default: o(() => [
                                                      a(
                                                        T,
                                                        {
                                                          class: 'zp-custom-refresher-container',
                                                          style: g([
                                                            {
                                                              height: `${e.finalRefresherThreshold}px`,
                                                              background: e.refresherBackground
                                                            }
                                                          ])
                                                        },
                                                        {
                                                          default: o(() => [
                                                            e.useRefresherStatusBarPlaceholder
                                                              ? (t(),
                                                                i(
                                                                  T,
                                                                  {
                                                                    key: 0,
                                                                    class:
                                                                      'zp-custom-refresher-status-bar-placeholder',
                                                                    style: g([
                                                                      {
                                                                        height: `${e.statusBarHeight}px`
                                                                      }
                                                                    ])
                                                                  },
                                                                  null,
                                                                  8,
                                                                  ['style']
                                                                ))
                                                              : p('', !0),
                                                            a(
                                                              T,
                                                              {
                                                                class:
                                                                  'zp-custom-refresher-slot-view'
                                                              },
                                                              {
                                                                default: o(() => [
                                                                  e.zSlots.refresherComplete &&
                                                                  e.refresherStatus === e.R.Complete
                                                                    ? p('', !0)
                                                                    : k(
                                                                        e.$slots,
                                                                        'refresher',
                                                                        {
                                                                          key: 0,
                                                                          refresherStatus:
                                                                            e.refresherStatus
                                                                        },
                                                                        void 0,
                                                                        !0
                                                                      )
                                                                ]),
                                                                _: 3
                                                              }
                                                            ),
                                                            e.zSlots.refresherComplete &&
                                                            e.refresherStatus === e.R.Complete
                                                              ? k(
                                                                  e.$slots,
                                                                  'refresherComplete',
                                                                  { key: 1 },
                                                                  void 0,
                                                                  !0
                                                                )
                                                              : e.showCustomRefresher
                                                              ? p('', !0)
                                                              : (t(),
                                                                i(
                                                                  y,
                                                                  {
                                                                    key: 2,
                                                                    ref: 'refresh',
                                                                    class:
                                                                      'zp-custom-refresher-refresh',
                                                                    style: g([
                                                                      {
                                                                        height:
                                                                          e.finalRefresherThreshold -
                                                                          e.finalRefresherThresholdPlaceholder +
                                                                          'px'
                                                                      }
                                                                    ]),
                                                                    status: e.refresherStatus,
                                                                    defaultThemeStyle:
                                                                      e.finalRefresherThemeStyle,
                                                                    defaultText:
                                                                      e.finalRefresherDefaultText,
                                                                    pullingText:
                                                                      e.finalRefresherPullingText,
                                                                    refreshingText:
                                                                      e.finalRefresherRefreshingText,
                                                                    completeText:
                                                                      e.finalRefresherCompleteText,
                                                                    defaultImg:
                                                                      e.refresherDefaultImg,
                                                                    pullingImg:
                                                                      e.refresherPullingImg,
                                                                    refreshingImg:
                                                                      e.refresherRefreshingImg,
                                                                    completeImg:
                                                                      e.refresherCompleteImg,
                                                                    refreshingAnimated:
                                                                      e.refresherRefreshingAnimated,
                                                                    showUpdateTime:
                                                                      e.showRefresherUpdateTime,
                                                                    updateTimeKey:
                                                                      e.refresherUpdateTimeKey,
                                                                    updateTimeTextMap:
                                                                      e.finalRefresherUpdateTimeTextMap,
                                                                    imgStyle: e.refresherImgStyle,
                                                                    titleStyle:
                                                                      e.refresherTitleStyle,
                                                                    updateTimeStyle:
                                                                      e.refresherUpdateTimeStyle,
                                                                    unit: e.unit
                                                                  },
                                                                  null,
                                                                  8,
                                                                  [
                                                                    'style',
                                                                    'status',
                                                                    'defaultThemeStyle',
                                                                    'defaultText',
                                                                    'pullingText',
                                                                    'refreshingText',
                                                                    'completeText',
                                                                    'defaultImg',
                                                                    'pullingImg',
                                                                    'refreshingImg',
                                                                    'completeImg',
                                                                    'refreshingAnimated',
                                                                    'showUpdateTime',
                                                                    'updateTimeKey',
                                                                    'updateTimeTextMap',
                                                                    'imgStyle',
                                                                    'titleStyle',
                                                                    'updateTimeStyle',
                                                                    'unit'
                                                                  ]
                                                                ))
                                                          ]),
                                                          _: 3
                                                        },
                                                        8,
                                                        ['style']
                                                      )
                                                    ]),
                                                    _: 3
                                                  },
                                                  8,
                                                  ['style']
                                                ))
                                              : p('', !0),
                                            a(
                                              T,
                                              {
                                                class: 'zp-paging-container',
                                                style: g([
                                                  {
                                                    justifyContent: e.useChatRecordMode
                                                      ? 'flex-end'
                                                      : 'flex-start'
                                                  }
                                                ])
                                              },
                                              {
                                                default: o(() => [
                                                  e.showLoading &&
                                                  e.zSlots.loading &&
                                                  !e.loadingFullFixed
                                                    ? k(e.$slots, 'loading', { key: 0 }, void 0, !0)
                                                    : p('', !0),
                                                  a(
                                                    T,
                                                    {
                                                      class: 'zp-paging-container-content',
                                                      style: g([
                                                        {
                                                          transform:
                                                            e.virtualPlaceholderTopHeight > 0
                                                              ? `translateY(${e.virtualPlaceholderTopHeight}px)`
                                                              : 'none'
                                                        },
                                                        e.finalPagingContentStyle
                                                      ])
                                                    },
                                                    {
                                                      default: o(() => [
                                                        k(e.$slots, 'default', {}, void 0, !0),
                                                        e.finalUseInnerList
                                                          ? (t(),
                                                            S(
                                                              R,
                                                              { key: 0 },
                                                              [
                                                                k(
                                                                  e.$slots,
                                                                  'header',
                                                                  {},
                                                                  void 0,
                                                                  !0
                                                                ),
                                                                a(
                                                                  T,
                                                                  {
                                                                    class: 'zp-list-container',
                                                                    style: g([e.innerListStyle])
                                                                  },
                                                                  {
                                                                    default: o(() => [
                                                                      e.finalUseVirtualList
                                                                        ? (t(!0),
                                                                          S(
                                                                            R,
                                                                            { key: 0 },
                                                                            P(
                                                                              e.virtualList,
                                                                              (a, r) => (
                                                                                t(),
                                                                                i(
                                                                                  T,
                                                                                  {
                                                                                    class:
                                                                                      'zp-list-cell',
                                                                                    style: g([
                                                                                      e.innerCellStyle
                                                                                    ]),
                                                                                    id: `zp-id-${
                                                                                      a[
                                                                                        e
                                                                                          .virtualCellIndexKey
                                                                                      ]
                                                                                    }`,
                                                                                    key: a.zp_unique_index,
                                                                                    onClick: (t) =>
                                                                                      e._innerCellClick(
                                                                                        a,
                                                                                        e.virtualTopRangeIndex +
                                                                                          r
                                                                                      )
                                                                                  },
                                                                                  {
                                                                                    default: o(
                                                                                      () => [
                                                                                        e.useCompatibilityMode
                                                                                          ? (t(),
                                                                                            i(
                                                                                              T,
                                                                                              {
                                                                                                key: 0
                                                                                              },
                                                                                              {
                                                                                                default:
                                                                                                  o(
                                                                                                    () => [
                                                                                                      s(
                                                                                                        '使用兼容模式请在组件源码z-paging.vue第94行中注释这一行，并打开下面一行注释'
                                                                                                      )
                                                                                                    ]
                                                                                                  ),
                                                                                                _: 1
                                                                                              }
                                                                                            ))
                                                                                          : k(
                                                                                              e.$slots,
                                                                                              'cell',
                                                                                              {
                                                                                                key: 1,
                                                                                                item: a,
                                                                                                index:
                                                                                                  e.virtualTopRangeIndex +
                                                                                                  r
                                                                                              },
                                                                                              void 0,
                                                                                              !0
                                                                                            )
                                                                                      ]
                                                                                    ),
                                                                                    _: 2
                                                                                  },
                                                                                  1032,
                                                                                  [
                                                                                    'style',
                                                                                    'id',
                                                                                    'onClick'
                                                                                  ]
                                                                                )
                                                                              )
                                                                            ),
                                                                            128
                                                                          ))
                                                                        : (t(!0),
                                                                          S(
                                                                            R,
                                                                            { key: 1 },
                                                                            P(
                                                                              e.realTotalData,
                                                                              (a, s) => (
                                                                                t(),
                                                                                i(
                                                                                  T,
                                                                                  {
                                                                                    class:
                                                                                      'zp-list-cell',
                                                                                    key: s,
                                                                                    onClick: (t) =>
                                                                                      e._innerCellClick(
                                                                                        a,
                                                                                        s
                                                                                      )
                                                                                  },
                                                                                  {
                                                                                    default: o(
                                                                                      () => [
                                                                                        k(
                                                                                          e.$slots,
                                                                                          'cell',
                                                                                          {
                                                                                            item: a,
                                                                                            index: s
                                                                                          },
                                                                                          void 0,
                                                                                          !0
                                                                                        )
                                                                                      ]
                                                                                    ),
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
                                                                    _: 3
                                                                  },
                                                                  8,
                                                                  ['style']
                                                                ),
                                                                k(
                                                                  e.$slots,
                                                                  'footer',
                                                                  {},
                                                                  void 0,
                                                                  !0
                                                                )
                                                              ],
                                                              64
                                                            ))
                                                          : p('', !0),
                                                        e.useChatRecordMode &&
                                                        (e.loadingStatus !== e.M.NoMore ||
                                                          e.zSlots.chatNoMore) &&
                                                        (e.realTotalData.length ||
                                                          (e.showChatLoadingWhenReload &&
                                                            e.showLoading)) &&
                                                        !e.isFirstPageAndNoMore
                                                          ? (t(),
                                                            i(
                                                              T,
                                                              {
                                                                key: 1,
                                                                style: g([e.chatRecordRotateStyle])
                                                              },
                                                              {
                                                                default: o(() => [
                                                                  e.loadingStatus === e.M.NoMore &&
                                                                  e.zSlots.chatNoMore
                                                                    ? k(
                                                                        e.$slots,
                                                                        'chatNoMore',
                                                                        { key: 0 },
                                                                        void 0,
                                                                        !0
                                                                      )
                                                                    : (t(),
                                                                      S(
                                                                        R,
                                                                        { key: 1 },
                                                                        [
                                                                          e.zSlots.chatLoading
                                                                            ? k(
                                                                                e.$slots,
                                                                                'chatLoading',
                                                                                {
                                                                                  key: 0,
                                                                                  loadingMoreStatus:
                                                                                    e.loadingStatus
                                                                                },
                                                                                void 0,
                                                                                !0
                                                                              )
                                                                            : (t(),
                                                                              i(
                                                                                w,
                                                                                {
                                                                                  key: 1,
                                                                                  onDoClick:
                                                                                    r[1] ||
                                                                                    (r[1] = (t) =>
                                                                                      e._onLoadingMore(
                                                                                        'click'
                                                                                      )),
                                                                                  zConfig:
                                                                                    e.zLoadMoreConfig
                                                                                },
                                                                                null,
                                                                                8,
                                                                                ['zConfig']
                                                                              ))
                                                                        ],
                                                                        64
                                                                      ))
                                                                ]),
                                                                _: 3
                                                              },
                                                              8,
                                                              ['style']
                                                            ))
                                                          : p('', !0),
                                                        e.useVirtualList
                                                          ? (t(),
                                                            i(
                                                              T,
                                                              {
                                                                key: 2,
                                                                class: 'zp-virtual-placeholder',
                                                                style: g([
                                                                  {
                                                                    height:
                                                                      e.virtualPlaceholderBottomHeight +
                                                                      'px'
                                                                  }
                                                                ])
                                                              },
                                                              null,
                                                              8,
                                                              ['style']
                                                            ))
                                                          : p('', !0),
                                                        e.showLoadingMoreDefault
                                                          ? k(
                                                              e.$slots,
                                                              'loadingMoreDefault',
                                                              { key: 3 },
                                                              void 0,
                                                              !0
                                                            )
                                                          : e.showLoadingMoreLoading
                                                          ? k(
                                                              e.$slots,
                                                              'loadingMoreLoading',
                                                              { key: 4 },
                                                              void 0,
                                                              !0
                                                            )
                                                          : e.showLoadingMoreNoMore
                                                          ? k(
                                                              e.$slots,
                                                              'loadingMoreNoMore',
                                                              { key: 5 },
                                                              void 0,
                                                              !0
                                                            )
                                                          : e.showLoadingMoreFail
                                                          ? k(
                                                              e.$slots,
                                                              'loadingMoreFail',
                                                              { key: 6 },
                                                              void 0,
                                                              !0
                                                            )
                                                          : e.showLoadingMoreCustom
                                                          ? (t(),
                                                            i(
                                                              w,
                                                              {
                                                                key: 7,
                                                                onDoClick:
                                                                  r[2] ||
                                                                  (r[2] = (t) =>
                                                                    e._onLoadingMore('click')),
                                                                zConfig: e.zLoadMoreConfig
                                                              },
                                                              null,
                                                              8,
                                                              ['zConfig']
                                                            ))
                                                          : p('', !0),
                                                        e.safeAreaInsetBottom &&
                                                        e.useSafeAreaPlaceholder &&
                                                        !e.useChatRecordMode
                                                          ? (t(),
                                                            i(
                                                              T,
                                                              {
                                                                key: 8,
                                                                class: 'zp-safe-area-placeholder',
                                                                style: g([
                                                                  {
                                                                    height: e.safeAreaBottom + 'px'
                                                                  }
                                                                ])
                                                              },
                                                              null,
                                                              8,
                                                              ['style']
                                                            ))
                                                          : p('', !0)
                                                      ]),
                                                      _: 3
                                                    },
                                                    8,
                                                    ['style']
                                                  ),
                                                  e.showEmpty
                                                    ? (t(),
                                                      i(
                                                        T,
                                                        {
                                                          key: 1,
                                                          class: c({
                                                            'zp-empty-view': !0,
                                                            'zp-empty-view-center':
                                                              e.emptyViewCenter
                                                          }),
                                                          style: g([
                                                            e.emptyViewSuperStyle,
                                                            e.chatRecordRotateStyle
                                                          ])
                                                        },
                                                        {
                                                          default: o(() => [
                                                            e.zSlots.empty
                                                              ? k(
                                                                  e.$slots,
                                                                  'empty',
                                                                  {
                                                                    key: 0,
                                                                    isLoadFailed: e.isLoadFailed
                                                                  },
                                                                  void 0,
                                                                  !0
                                                                )
                                                              : (t(),
                                                                i(
                                                                  M,
                                                                  {
                                                                    key: 1,
                                                                    emptyViewImg:
                                                                      e.finalEmptyViewImg,
                                                                    emptyViewText:
                                                                      e.finalEmptyViewText,
                                                                    showEmptyViewReload:
                                                                      e.finalShowEmptyViewReload,
                                                                    emptyViewReloadText:
                                                                      e.finalEmptyViewReloadText,
                                                                    isLoadFailed: e.isLoadFailed,
                                                                    emptyViewStyle:
                                                                      e.emptyViewStyle,
                                                                    emptyViewTitleStyle:
                                                                      e.emptyViewTitleStyle,
                                                                    emptyViewImgStyle:
                                                                      e.emptyViewImgStyle,
                                                                    emptyViewReloadStyle:
                                                                      e.emptyViewReloadStyle,
                                                                    emptyViewZIndex:
                                                                      e.emptyViewZIndex,
                                                                    emptyViewFixed:
                                                                      e.emptyViewFixed,
                                                                    unit: e.unit,
                                                                    onReload: e._emptyViewReload,
                                                                    onViewClick: e._emptyViewClick
                                                                  },
                                                                  null,
                                                                  8,
                                                                  [
                                                                    'emptyViewImg',
                                                                    'emptyViewText',
                                                                    'showEmptyViewReload',
                                                                    'emptyViewReloadText',
                                                                    'isLoadFailed',
                                                                    'emptyViewStyle',
                                                                    'emptyViewTitleStyle',
                                                                    'emptyViewImgStyle',
                                                                    'emptyViewReloadStyle',
                                                                    'emptyViewZIndex',
                                                                    'emptyViewFixed',
                                                                    'unit',
                                                                    'onReload',
                                                                    'onViewClick'
                                                                  ]
                                                                ))
                                                          ]),
                                                          _: 3
                                                        },
                                                        8,
                                                        ['class', 'style']
                                                      ))
                                                    : p('', !0)
                                                ]),
                                                _: 3
                                              },
                                              8,
                                              ['style']
                                            )
                                          ]),
                                          _: 3
                                        },
                                        8,
                                        [
                                          'style',
                                          'change:prop',
                                          'prop',
                                          'data-refresherThreshold',
                                          'data-isIos',
                                          'data-loading',
                                          'data-useChatRecordMode',
                                          'data-refresherEnabled',
                                          'data-useCustomRefresher',
                                          'data-pageScrollTop',
                                          'data-scrollTop',
                                          'data-refresherMaxAngle',
                                          'data-refresherNoTransform',
                                          'data-refresherAecc',
                                          'data-usePageScroll',
                                          'data-watchTouchDirectionChange',
                                          'data-oldIsTouchmoving',
                                          'data-refresherOutRate',
                                          'data-refresherPullRate',
                                          'data-hasTouchmove',
                                          'change:renderPropIsIosAndH5',
                                          'renderPropIsIosAndH5'
                                        ]
                                      )
                                    ]),
                                    _: 3
                                  },
                                  8,
                                  [
                                    'onTouchstart',
                                    'onTouchmove',
                                    'onTouchend',
                                    'onTouchcancel',
                                    'onMousedown',
                                    'onMousemove',
                                    'onMouseup',
                                    'onMouseleave'
                                  ]
                                )
                              ]),
                              _: 3
                            },
                            8,
                            [
                              'class',
                              'style',
                              'scroll-top',
                              'scroll-x',
                              'scroll-y',
                              'enable-back-to-top',
                              'show-scrollbar',
                              'scroll-with-animation',
                              'scroll-into-view',
                              'lower-threshold',
                              'refresher-enabled',
                              'refresher-threshold',
                              'refresher-default-style',
                              'refresher-background',
                              'refresher-triggered',
                              'onScroll',
                              'onScrolltolower',
                              'onScrolltoupper',
                              'onRefresherrestore'
                            ]
                          )
                        ]),
                        _: 3
                      },
                      8,
                      ['class', 'style']
                    ),
                    e.zSlots.right
                      ? (t(),
                        i(
                          T,
                          {
                            key: 1,
                            class: c({
                              'zp-page-right': !0,
                              'zp-absoulte zp-right': e.finalIsOldWebView
                            })
                          },
                          { default: o(() => [k(e.$slots, 'right', {}, void 0, !0)]), _: 3 },
                          8,
                          ['class']
                        ))
                      : p('', !0)
                  ]),
                  _: 3
                },
                8,
                ['class', 'style']
              ),
              a(
                T,
                { class: 'zp-page-bottom-container', style: g({ background: e.bottomBgColor }) },
                {
                  default: o(() => [
                    !e.usePageScroll && e.zSlots.bottom
                      ? k(e.$slots, 'bottom', { key: 0 }, void 0, !0)
                      : e.usePageScroll && e.zSlots.bottom
                      ? (t(),
                        i(
                          T,
                          {
                            key: 1,
                            class: 'zp-page-bottom',
                            onTouchmove: r[4] || (r[4] = u(() => {}, ['stop', 'prevent'])),
                            style: g([{ bottom: `${e.windowBottom}px` }])
                          },
                          { default: o(() => [k(e.$slots, 'bottom', {}, void 0, !0)]), _: 3 },
                          8,
                          ['style']
                        ))
                      : p('', !0),
                    e.useChatRecordMode && e.autoAdjustPositionWhenChat
                      ? (t(),
                        S(
                          R,
                          { key: 2 },
                          [
                            a(
                              T,
                              { style: g([{ height: e.chatRecordModeSafeAreaBottom + 'px' }]) },
                              null,
                              8,
                              ['style']
                            ),
                            a(
                              T,
                              {
                                class: 'zp-page-bottom-keyboard-placeholder-animate',
                                style: g([{ height: e.keyboardHeight + 'px' }])
                              },
                              null,
                              8,
                              ['style']
                            )
                          ],
                          64
                        ))
                      : p('', !0)
                  ]),
                  _: 3
                },
                8,
                ['style']
              ),
              e.showBackToTopClass
                ? (t(),
                  i(
                    T,
                    {
                      key: 3,
                      class: c(e.finalBackToTopClass),
                      style: g([e.finalBackToTopStyle]),
                      onClick: u(e._backToTopClick, ['stop'])
                    },
                    {
                      default: o(() => [
                        e.zSlots.backToTop
                          ? k(e.$slots, 'backToTop', { key: 0 }, void 0, !0)
                          : (t(),
                            i(
                              C,
                              {
                                key: 1,
                                class: 'zp-back-to-top-img',
                                src: e.backToTopImg.length ? e.backToTopImg : e.base64BackToTop
                              },
                              null,
                              8,
                              ['src']
                            ))
                      ]),
                      _: 3
                    },
                    8,
                    ['class', 'style', 'onClick']
                  ))
                : p('', !0),
              e.showLoading && e.zSlots.loading && e.loadingFullFixed
                ? (t(),
                  i(
                    T,
                    { key: 4, class: 'zp-loading-fixed' },
                    { default: o(() => [k(e.$slots, 'loading', {}, void 0, !0)]), _: 3 }
                  ))
                : p('', !0)
            ]),
            _: 3
          },
          8,
          ['class', 'style']
        )
      );
    }
  ],
  ['__scopeId', 'data-v-6a2d31d5']
]);
export { H as _, tt as a };
