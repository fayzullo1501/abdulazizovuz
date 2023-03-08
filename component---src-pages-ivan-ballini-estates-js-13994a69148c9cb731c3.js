"use strict";
(self.webpackChunkjgthms_com = self.webpackChunkjgthms_com || []).push([[595], {
    571: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return Z
            }
        });
        var r = {};
        n.r(r),
        n.d(r, {
            background: function() {
                return m
            },
            body: function() {
                return d
            },
            component: function() {
                return f
            },
            content: function() {
                return v
            },
            description: function() {
                return p
            },
            logo: function() {
                return h
            },
            task: function() {
                return E
            },
            tasks: function() {
                return b
            },
            title: function() {
                return g
            },
            versionCompoundAdvisors: function() {
                return y
            },
            versionFabula: function() {
                return k
            },
            versionIvanBallini: function() {
                return w
            },
            versionNetspeakGames: function() {
                return N
            }
        });
        var l = n(7294)
          , a = n(7888)
          , o = n(9347)
          , s = n(5900)
          , i = n.n(s);
        var c = e=>{
            const {children: t, icons: n, parentClass: r} = e
              , a = n.split(",").map((e=>l.createElement(o.Z, {
                key: e,
                id: e
            })));
            return l.createElement("div", {
                className: i()("task-module--component--UOP2S", r)
            }, l.createElement("div", {
                className: "task-module--items--TN92x"
            }, a), l.createElement("p", {
                className: "task-module--label--BkmBS"
            }, t))
        }
          , u = n(9290)
          , m = "hero-module--background--x84zX"
          , d = "hero-module--body--L1He2"
          , f = "hero-module--component--mbWcC"
          , v = "hero-module--content--NbBTY"
          , p = "hero-module--description--sy8ml"
          , h = "hero-module--logo--kp8zs"
          , E = "hero-module--task--nQpN3"
          , b = "hero-module--tasks--wAvgg"
          , g = "hero-module--title--3XWf7"
          , y = "hero-module--version-compound-advisors--Eu4yg"
          , k = "hero-module--version-fabula--d+jZZ"
          , w = "hero-module--version-ivan-ballini--1J7Bt"
          , N = "hero-module--version-netspeak-games--ISE3t";
        var Z = e=>{
            const {id: t, logoId: n, title: s, description: y, tasks: k, backgroundImage: w, children: N, subnavList: Z} = e
              , I = w ? {
                backgroundImage: "url(/freelance/case-studies/" + w + ")"
            } : {}
              , x = (0,
            a.Mj)("version-" + t);
            return l.createElement("div", {
                className: i()(f, r[x])
            }, l.createElement("div", {
                className: m,
                style: I
            }), l.createElement("div", {
                className: "container"
            }, l.createElement("div", {
                className: d
            }, l.createElement(u.ZP, {
                version: "mobile",
                list: Z
            }), l.createElement("figure", {
                className: h
            }, n ? l.createElement(o.Z, {
                id: n
            }) : N), l.createElement("div", {
                className: v
            }, l.createElement("h2", {
                className: i()("title", g)
            }, s), l.createElement("div", {
                className: p
            }, y)), l.createElement("div", {
                className: b
            }, k.map((e=>l.createElement(c, {
                key: e.icons,
                parentClass: E,
                icons: e.icons
            }, e.label)))))))
        }
    },
    3060: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return N
            }
        });
        var r = {};
        n.r(r),
        n.d(r, {
            button: function() {
                return u
            },
            colorAmazon: function() {
                return m
            },
            colorBulma: function() {
                return d
            },
            colorFreelance: function() {
                return f
            },
            colorOpensource: function() {
                return v
            },
            colorPrimary: function() {
                return p
            },
            colorSuccess: function() {
                return h
            },
            colorTurquoise: function() {
                return E
            },
            invert: function() {
                return b
            },
            isWarning: function() {
                return g
            },
            opensource: function() {
                return y
            },
            rainbow: function() {
                return k
            },
            sizeMedium: function() {
                return w
            }
        });
        var l = n(1721)
          , a = n(7294)
          , o = n(1597)
          , s = n(7888)
          , i = n(5900)
          , c = n.n(i)
          , u = "button-module--button--l5gbw"
          , m = "button-module--color-amazon--OAoOK"
          , d = "button-module--color-bulma--b8gF8"
          , f = "button-module--color-freelance--xuVY+"
          , v = "button-module--color-opensource--m9QWp"
          , p = "button-module--color-primary--FQmUI"
          , h = "button-module--color-success--LOSug"
          , E = "button-module--color-turquoise--Slu4d"
          , b = "button-module--invert--x1J6-"
          , g = "button-module--is-warning--Dlx2U"
          , y = "button-module--opensource--D8dcI"
          , k = "button-module--rainbow--2mIbk"
          , w = "button-module--size-medium--2CaKn";
        var N = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).state = {
                    currentIndex: 0
                },
                n.componentRef = a.createRef(),
                n
            }
            return (0,
            l.Z)(t, e),
            t.prototype.render = function() {
                const {id: e, to: t="", href: n="", size: l="", color: i="", children: m, onSubmit: d, external: f, type: v, light: p, disabled: h, loading: E, parentClass: b, button: g, onClick: y, variant: k} = this.props
                  , w = (0,
                s.Mj)("size-" + l)
                  , N = (0,
                s.Mj)("color-" + i)
                  , Z = {
                    className: c()({
                        [u]: !0,
                        [r[w]]: "" !== l,
                        [r[N]]: "" !== i,
                        "is-disabled": h,
                        "is-loading": E,
                        "is-light": p,
                        [r[k]]: k,
                        [b]: b
                    }),
                    ref: this.componentRef,
                    id: e,
                    onSubmit: d,
                    type: v,
                    disabled: h,
                    onClick: y
                };
                return n && "" !== n ? (f && (Z.target = "_blank",
                Z.ref = "noopener noreferrer"),
                a.createElement("a", Object.assign({
                    href: n
                }, Z), m)) : t && "" !== t ? a.createElement(o.Link, Object.assign({
                    to: t
                }, Z), m) : a.createElement("button", Z, m)
            }
            ,
            t
        }(a.Component)
    },
    5447: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return l
            }
        });
        var r = n(7294);
        var l = e=>{
            const {id: t, children: n} = e;
            return r.createElement("div", {
                className: "content-module--component--byqIb"
            }, n)
        }
    },
    2052: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(7294)
          , l = n(5900)
          , a = n.n(l);
        var o = e=>{
            const {children: t, parentClass: n} = e;
            return r.createElement("div", {
                className: a()("double-module--component--5rP4n", n)
            }, r.createElement("div", {
                className: "container"
            }, r.createElement("div", {
                className: a()("double-module--body--8Y8wz", "body")
            }, t)))
        }
    },
    4952: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(7294)
          , l = n(3060);
        const a = n(7892);
        var o = e=>{
            const {id: t, key: n="allNext"} = e
              , o = a[n].indexOf(t)
              , s = a[n][o + 1]
              , i = a.by_id[s];
            return r.createElement("div", {
                className: "next-module--component--+J383"
            }, r.createElement(l.Z, {
                size: "medium",
                color: "warning",
                parentClass: "next-module--button--TZd+X",
                to: i.to
            }, r.createElement("span", null, r.createElement("small", null, "Next:"), r.createElement("strong", null, i.label))))
        }
    },
    745: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return i
            }
        });
        var r = n(7294)
          , l = n(9347)
          , a = n(5900)
          , o = n.n(a)
          , s = "quote-module--message--54bax";
        var i = e=>{
            const {author: t, position: n, content: a, children: i, parentClass: c, cssvars: u} = e
              , m = u ? {
                "--current-primary": "var(--" + u.primary + ")",
                "--current-secondary": "var(--" + u.secondary + ")"
            } : null;
            return r.createElement("div", {
                className: o()("quote-module--component--Eq5Ki", c),
                style: m
            }, r.createElement("blockquote", {
                className: "quote-module--quote--EYi5p"
            }, r.createElement("span", {
                className: "quote-module--opening--3OTUB"
            }, r.createElement(l.Z, {
                id: "quoteOpen"
            })), a ? r.createElement("span", {
                className: s,
                dangerouslySetInnerHTML: {
                    __html: a
                }
            }) : r.createElement("span", {
                className: s
            }, i), r.createElement("span", {
                className: "quote-module--closing--v2W-m"
            }, r.createElement(l.Z, {
                id: "quoteClose"
            }))), r.createElement("p", {
                className: "quote-module--author--H4VKA"
            }, t, n && r.createElement("em", null, n)))
        }
    },
    146: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return i
            }
        });
        var r = n(7326)
          , l = n(1721)
          , a = n(7294)
          , o = n(4074)
          , s = n(7888);
        var i = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).ticking = !1,
                n.componentDidMount = ()=>{
                    window.addEventListener("scroll", n.handleScroll)
                }
                ,
                n.componentWillUnmount = ()=>{
                    window.removeEventListener("scroll", n.handleScroll)
                }
                ,
                n.shouldComponentUpdate = (e,t)=>n.state.scale !== t.scale,
                n.handleScroll = ()=>{
                    const e = (0,
                    r.Z)(n);
                    e.ticking || window.requestAnimationFrame((function() {
                        e.whenScrolling(),
                        e.ticking = !1
                    }
                    )),
                    e.ticking = !0
                }
                ,
                n.whenScrolling = ()=>{
                    if (!n.myRef.current)
                        return;
                    const e = n.myRef.current.getBoundingClientRect().top
                      , t = window.innerHeight;
                    n.setState({
                        scale: (0,
                        s.Xb)(e, t)
                    })
                }
                ,
                n.state = {
                    scale: .7
                },
                n.myRef = a.createRef(),
                n
            }
            return (0,
            l.Z)(t, e),
            t.prototype.render = function() {
                const {path: e, slug: t, width: n="1680", height: r="1050", extension: l="jpg"} = this.props
                  , {scale: s} = this.state
                  , i = {
                    transform: "scale(" + s + ")"
                };
                return a.createElement("div", {
                    className: "screenshot-module--component--tTV9A",
                    ref: this.myRef,
                    style: i
                }, a.createElement(o.Z, {
                    path: e,
                    slug: t,
                    width: n,
                    height: r,
                    extension: l
                }))
            }
            ,
            t
        }(a.Component)
    },
    2822: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return l
            }
        });
        var r = n(7294);
        var l = e=>{
            const {children: t} = e;
            return r.createElement("div", {
                className: "section-module--component--I2pIZ"
            }, r.createElement("div", {
                className: "container"
            }, t))
        }
    },
    9290: function(e, t, n) {
        n.d(t, {
            ps: function() {
                return M
            },
            xx: function() {
                return C
            },
            ZP: function() {
                return j
            }
        });
        var r = {};
        n.r(r),
        n.d(r, {
            active: function() {
                return i
            },
            backend: function() {
                return c
            },
            body: function() {
                return u
            },
            both: function() {
                return m
            },
            branding: function() {
                return d
            },
            caseStudies: function() {
                return f
            },
            component: function() {
                return v
            },
            design: function() {
                return p
            },
            desktop: function() {
                return h
            },
            freelance: function() {
                return E
            },
            htmlcss: function() {
                return b
            },
            item: function() {
                return g
            },
            js: function() {
                return y
            },
            label: function() {
                return k
            },
            link: function() {
                return w
            },
            list: function() {
                return N
            },
            mobile: function() {
                return Z
            },
            talents: function() {
                return I
            },
            teaching: function() {
                return x
            }
        });
        var l = n(7294)
          , a = n(1597)
          , o = n(5900)
          , s = n.n(o)
          , i = "subnav-module--active--hUJsg"
          , c = "subnav-module--backend--Fqqb8"
          , u = "subnav-module--body--s-ljN"
          , m = "subnav-module--both--RVk1o"
          , d = "subnav-module--branding--s+STq"
          , f = "subnav-module--case-studies--UbiiF"
          , v = "subnav-module--component--IH5tX"
          , p = "subnav-module--design--654xp"
          , h = "subnav-module--desktop--JmLQ3"
          , E = "subnav-module--freelance--cqa-I"
          , b = "subnav-module--htmlcss--aAMH8"
          , g = "subnav-module--item--J9esL"
          , y = "subnav-module--js--gHoI+"
          , k = "subnav-module--label--yhQD9"
          , w = "subnav-module--link--gLTjP"
          , N = "subnav-module--list--r3ibX"
          , Z = "subnav-module--mobile--ukkyS"
          , I = "subnav-module--talents--26qYp"
          , x = "subnav-module--teaching--jLNpZ";
        const q = n(7892)
          , B = {
            caseStudies: "Clients",
            talents: "Skills",
            books: "Books"
        }
          , S = e=>{
            const {version: t="desktop", list: n="talents"} = e
              , o = q[n].map((e=>{
                const t = q.by_id[e];
                return l.createElement("li", {
                    key: t.id,
                    className: g
                }, l.createElement(a.Link, {
                    to: t.to,
                    className: w,
                    activeClassName: i
                }, t.subLabel || t.label))
            }
            ));
            const c = B[n];
            return l.createElement("div", {
                className: s()(v, r[t], r[n])
            }, l.createElement("div", {
                className: u
            }, l.createElement("div", null, l.createElement("p", {
                className: k
            }, c, ":"), l.createElement("ul", {
                className: N
            }, o))))
        }
        ;
        var j = S;
        const C = e=>l.createElement(S, Object.assign({
            label: "Case Studies",
            list: "caseStudies"
        }, e))
          , M = e=>l.createElement(S, Object.assign({
            label: "Books",
            list: "books",
            version: "both"
        }, e))
    },
    3418: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return m
            }
        });
        var r = {};
        n.r(r),
        n.d(r, {
            center: function() {
                return s
            },
            component: function() {
                return i
            },
            hr: function() {
                return c
            },
            left: function() {
                return u
            }
        });
        var l = n(7294)
          , a = n(5900)
          , o = n.n(a)
          , s = "title-module--center--sb8Bq"
          , i = "title-module--component--xeAog"
          , c = "title-module--hr--fFEVi"
          , u = "title-module--left--nXcuI";
        var m = e=>{
            const {children: t, version: n="center"} = e
              , a = o()({
                title: !0,
                [r[n]]: !0,
                [i]: !0
            });
            return l.createElement("div", {
                className: a
            }, t, l.createElement("hr", {
                className: c
            }))
        }
    },
    9869: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return s
            }
        });
        var r = n(7294)
          , l = n(1597)
          , a = n(9347)
          , o = "visit-module--link--aHaIf";
        var s = e=>{
            const {name: t, url: n, to: s, cssvars: i} = e
              , c = i ? {
                "--current-primary": "var(--" + i.primary + ")",
                "--current-secondary": "var(--" + i.secondary + ")"
            } : null
              , u = n ? r.createElement("span", null, "Visit ", r.createElement("strong", null, t)) : r.createElement("span", null, "View ", r.createElement("strong", null, t), " project")
              , m = n ? "externalLink" : "chevronRight"
              , d = r.createElement("span", {
                className: "visit-module--body--Fonjj"
            }, r.createElement("span", {
                key: "svg",
                className: "visit-module--svg--jVhpy"
            }, r.createElement(a.Z, {
                id: m
            })), r.createElement("span", {
                key: "shadow",
                className: "visit-module--shadow--bmui4"
            }), r.createElement("span", {
                key: "text",
                className: "visit-module--text--fEmDH"
            }, u), r.createElement("span", {
                key: "background",
                className: "visit-module--background--3fDKd"
            }), r.createElement("span", {
                key: "hover",
                className: "visit-module--hover--wqPhx"
            }, u));
            return n ? r.createElement("div", {
                className: "visit-module--href--W4rLq"
            }, r.createElement("a", {
                className: o,
                href: n,
                target: "_blank",
                rel: "noopener noreferrer"
            }, d)) : s ? r.createElement("div", {
                className: "visit-module--to--E-Ymj",
                style: c
            }, r.createElement(l.Link, {
                className: o,
                to: s
            }, d)) : void 0
        }
    },
    1277: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return s
            }
        });
        var r = n(7294)
          , l = n.p + "static/IBv4 Lenovo 960x 540 60fps-6fd20cd4de55896d685a1f20864d5380.mp4"
          , a = n.p + "static/css-in-44-minutes-1216-bd8ae025e3547552207fef1445d1fd0d.mp4";
        const o = {
            ibv4: {
                src: l
            },
            css44: {
                src: a,
                width: 608,
                height: 405
            }
        };
        var s = e=>{
            let {id: t} = e;
            const n = o[t];
            return r.createElement("video", {
                className: "video-module--video--vMwRZ",
                width: n.width,
                height: n.height,
                muted: !0,
                autoPlay: !0,
                loop: !0,
                playsInline: !0
            }, r.createElement("source", {
                src: n.src
            }))
        }
    },
    7888: function(e, t, n) {
        function r(e, t) {
            return e.list[t].map((t=>e.by_id[t]))
        }
        function l(e) {
            return e.replace(/\W+(.)/g, ((e,t)=>t.toUpperCase()))
        }
        function a(e, t) {
            return e.reduce(((e,n)=>((e[n[t]] = e[n[t]] || []).push(n),
            e)), {})
        }
        function o(e, t) {
            let n = .7;
            if (e < 0)
                n = 1;
            else if (e < t) {
                n = .7 + .3 * ((100 - Math.round(e / t * 100)) / 100)
            } else
                n = .7;
            return n
        }
        function s(e, t) {
            let n = 0;
            const r = Math.max(.1, Math.min(Math.abs(e - t) / 500, 1.6));
            !function l() {
                n += 1 / 60;
                const a = n / r
                  , o = i.easeOutQuint(a);
                a < 1 ? (window.requestAnimationFrame(l),
                window.scroll(0, e + (t - e) * o)) : window.scroll(0, t)
            }()
        }
        n.d(t, {
            LH: function() {
                return s
            },
            LK: function() {
                return c
            },
            Mj: function() {
                return l
            },
            X9: function() {
                return a
            },
            Xb: function() {
                return o
            },
            wc: function() {
                return r
            }
        });
        const i = {
            easeOutSine: function(e) {
                return Math.sin(e * (Math.PI / 2))
            },
            easeInOutSine: function(e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            },
            easeInOutQuint: function(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
            },
            easeOutQuint: function(e) {
                return 1 - Math.pow(1 - e, 5)
            }
        }
          , c = (e,t)=>t + 1 > e.length - 1 ? 0 : t + 1
    },
    1875: function(e, t, n) {
        n.r(t),
        n.d(t, {
            default: function() {
                return k
            }
        });
        var r = n(7294)
          , l = n(4284)
          , a = n(9357)
          , o = n(9290)
          , s = n(5461)
          , i = n(571)
          , c = n(146)
          , u = n(2822)
          , m = n(2052)
          , d = n(3418)
          , f = n(5447)
          , v = n(745)
          , p = n(4074)
          , h = n(9347);
        var E = e=>{
            const {id: t} = e;
            return r.createElement("div", {
                className: "before-after-module--component--5Va8T"
            }, r.createElement("figure", null, r.createElement(p.Z, {
                path: "freelance/ivan-ballini",
                slug: "before",
                width: "440",
                height: "320",
                extension: "jpg"
            }), r.createElement("figcaption", null, "Before: ", r.createElement("strong", null, "boxed images"))), r.createElement("div", {
                className: "before-after-module--svg--YmGcV"
            }, r.createElement(h.Z, {
                id: "arrowDown"
            })), r.createElement("figure", null, r.createElement(p.Z, {
                path: "freelance/ivan-ballini",
                slug: "after",
                width: "840",
                height: "599",
                extension: "jpg"
            }), r.createElement("figcaption", null, "After: ", r.createElement("strong", null, "large borderless images"))))
        }
          , b = n(9869)
          , g = n(1277)
          , y = n(4952);
        var k = ()=>{
            const e = r.createElement("span", null, "Real Estate", r.createElement("strong", null, "."), r.createElement("br", null), "Modern", r.createElement("strong", null, "."), r.createElement("br", null), "Gorgeous", r.createElement("strong", null, "."))
              , t = r.createElement("p", null, "When", " ", r.createElement("a", {
                href: "https://ivanballiniestates.com/en/",
                target: "_blank",
                rel: "noopener noreferrer"
            }, r.createElement("span", null, "Ivan Ballini")), " ", "asked me to design the 4th version of his website, I put the emphasis on what makes this agency so unique: its ", r.createElement("strong", null, "photographs"), ".")
              , n = r.createElement(u.Z, null, r.createElement(v.Z, {
                author: "Ivan Ballini"
            }, "Jeremy simply created the ", r.createElement("strong", null, "most beautiful"), " real estate website in the world."))
              , p = r.createElement(u.Z, null, r.createElement(v.Z, {
                author: "Ivan Ballini"
            }, "The V4 benefits from an ", r.createElement("strong", null, "ultra modern"), " design and", " ", r.createElement("strong", null, "extraordinary"), " display performance for the ultimate", " ", r.createElement("strong", null, "user experience"), "."))
              , h = r.createElement(u.Z, null, r.createElement(v.Z, {
                author: "Ivan Ballini"
            }, "Since the v1, 100% of our customers have given us", " ", r.createElement("strong", null, "rave reviews"), ":", " ", r.createElement("cite", null, "«We have ", r.createElement("em", null, "never seen"), " anything quite like this… Who made this website for you?»")));
            return r.createElement(l.Z, {
                hideNewsletter: !0
            }, r.createElement(a.Z, {
                title: "Ivan Ballini: a unique real estate agency",
                description: "A fully custom WordPress theme for a unique real estate agency from Normandy",
                keywords: ["real estate", "wordpress", "custom theme", "freelance"]
            }), r.createElement(s.Z, {
                title: "is freelancing"
            }), r.createElement(o.xx, null), r.createElement(i.Z, {
                id: "ivan-ballini",
                logoId: "ivanBallini",
                title: e,
                description: t,
                tasks: [{
                    label: "Design",
                    icons: "sketch,photoshop"
                }, {
                    label: "Frontend Development",
                    icons: "css3,sass"
                }, {
                    label: "Backend Development",
                    icons: "wordpressIcon"
                }],
                backgroundImage: "ivan-ballini-estates.jpg",
                subnavList: "caseStudies"
            }), r.createElement(c.Z, {
                path: "freelance/ivan-ballini",
                slug: "screenshot"
            }), n, r.createElement(u.Z, null, r.createElement(d.Z, null, "A feast for the ", r.createElement("em", null, "eyes"), "."), r.createElement(f.Z, null, r.createElement("p", null, "I always say that the primary purpose of design is to", " ", r.createElement("strong", null, "enhance"), " the presentation of the ", r.createElement("em", null, "content"), " ", "it's applied to."), r.createElement("p", null, "On a real estate website, the content is comprised of house descriptions, price ranges, and technical details. But most importantly it features ", r.createElement("strong", null, "pictures"), ". And in Ivan Ballini's case, ", r.createElement("em", null, "exceptional"), " pictures."))), h, r.createElement(m.Z, null, r.createElement("div", {
                className: "one"
            }, r.createElement(d.Z, {
                version: "left"
            }, "Bigger", r.createElement("strong", null, "."), r.createElement("br", null), "Bolder", r.createElement("strong", null, "."), r.createElement("br", null), "Better", r.createElement("strong", null, ".")), r.createElement(f.Z, null, r.createElement("p", null, "With the 4th version of the website, we wanted to make a", " ", r.createElement("strong", null, "bold"), " statement: give the user an instant visual impact. Ivan was spending even more time on perfecting each property picture."), r.createElement("p", null, "As a result, my primary concern was to remove all boundaries and give Ivan's pictures the ", r.createElement("strong", null, "importance"), " they deserved."), r.createElement("p", null, "In the end, the pictures took a ", r.createElement("strong", null, "front row"), " seat, while still allowing visitors to discover the details of each property."))), r.createElement("div", {
                className: "two"
            }, r.createElement(E, null))), p, r.createElement(u.Z, null, r.createElement(d.Z, null, "Hello Drone"), r.createElement(f.Z, null, r.createElement("p", null, "Ivan also started experimenting with his", " ", r.createElement("strong", null, "drone videos"), " and managed to capture fantastic aerial shots, which ended up on the homepage of the website.")), r.createElement("div", {
                className: "ivan-ballini-estates-module--video--OstWp"
            }, r.createElement(g.Z, {
                id: "ibv4"
            })), r.createElement(f.Z, null, r.createElement("p", null, "The visitors are greeted with splendid views of", " ", r.createElement("strong", null, "Normandy"), ", inviting them to", " ", r.createElement("strong", null, "discover"), " Ivan Ballini's website, and experience the pleasure of admiring his superb photography."))), r.createElement(b.Z, {
                name: "Ivan Ballini Estates",
                url: "https://ivanballiniestates.com"
            }), r.createElement(y.Z, {
                id: "ivanBallini"
            }))
        }
    }
}]);
//# sourceMappingURL=component---src-pages-ivan-ballini-estates-js-13994a69148c9cb731c3.js.map
