"use strict";
(self.webpackChunkjgthms_com = self.webpackChunkjgthms_com || []).push([[918], {
    8615: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return d
            }
        });
        var r = {};
        n.r(r),
        n.d(r, {
            component: function() {
                return i
            },
            github: function() {
                return s
            },
            twitter: function() {
                return a
            }
        });
        var o = n(7294)
          , u = n(9347)
          , l = n(5900)
          , c = n.n(l)
          , i = "brag-module--component--Y3AKS"
          , s = "brag-module--github--J48FR"
          , a = "brag-module--twitter--B8V5V";
        const m = n(4709);
        var d = e=>{
            const {type: t} = e
              , n = {
                github: {
                    svg: o.createElement(u.Z, {
                        id: "star"
                    }),
                    count: "60,000+",
                    label: "GitHub stars"
                },
                twitter: {
                    svg: [o.createElement(u.Z, {
                        key: "twitter",
                        id: "twitter"
                    }), o.createElement(u.Z, {
                        key: "github",
                        id: "github"
                    })],
                    count: "17,000+",
                    label: "Total followers"
                }
            }
              , l = c()({
                [i]: !0,
                [r[t]]: t
            });
            return o.createElement("a", {
                className: l,
                href: m[t],
                target: "_blank"
            }, o.createElement("figure", null, n[t].svg), o.createElement("div", null, o.createElement("strong", null, n[t].count), o.createElement("span", null, n[t].label)))
        }
    },
    3060: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return k
            }
        });
        var r = {};
        n.r(r),
        n.d(r, {
            button: function() {
                return a
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
                return p
            },
            colorPrimary: function() {
                return h
            },
            colorSuccess: function() {
                return b
            },
            colorTurquoise: function() {
                return g
            },
            invert: function() {
                return E
            },
            isWarning: function() {
                return v
            },
            opensource: function() {
                return j
            },
            rainbow: function() {
                return w
            },
            sizeMedium: function() {
                return y
            }
        });
        var o = n(1721)
          , u = n(7294)
          , l = n(1597)
          , c = n(7888)
          , i = n(5900)
          , s = n.n(i)
          , a = "button-module--button--l5gbw"
          , m = "button-module--color-amazon--OAoOK"
          , d = "button-module--color-bulma--b8gF8"
          , f = "button-module--color-freelance--xuVY+"
          , p = "button-module--color-opensource--m9QWp"
          , h = "button-module--color-primary--FQmUI"
          , b = "button-module--color-success--LOSug"
          , g = "button-module--color-turquoise--Slu4d"
          , E = "button-module--invert--x1J6-"
          , v = "button-module--is-warning--Dlx2U"
          , j = "button-module--opensource--D8dcI"
          , w = "button-module--rainbow--2mIbk"
          , y = "button-module--size-medium--2CaKn";
        var k = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).state = {
                    currentIndex: 0
                },
                n.componentRef = u.createRef(),
                n
            }
            return (0,
            o.Z)(t, e),
            t.prototype.render = function() {
                const {id: e, to: t="", href: n="", size: o="", color: i="", children: m, onSubmit: d, external: f, type: p, light: h, disabled: b, loading: g, parentClass: E, button: v, onClick: j, variant: w} = this.props
                  , y = (0,
                c.Mj)("size-" + o)
                  , k = (0,
                c.Mj)("color-" + i)
                  , N = {
                    className: s()({
                        [a]: !0,
                        [r[y]]: "" !== o,
                        [r[k]]: "" !== i,
                        "is-disabled": b,
                        "is-loading": g,
                        "is-light": h,
                        [r[w]]: w,
                        [E]: E
                    }),
                    ref: this.componentRef,
                    id: e,
                    onSubmit: d,
                    type: p,
                    disabled: b,
                    onClick: j
                };
                return n && "" !== n ? (f && (N.target = "_blank",
                N.ref = "noopener noreferrer"),
                u.createElement("a", Object.assign({
                    href: n
                }, N), m)) : t && "" !== t ? u.createElement(l.Link, Object.assign({
                    to: t
                }, N), m) : u.createElement("button", N, m)
            }
            ,
            t
        }(u.Component)
    },
    1293: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(7294);
        var o = e=>{
            let {children: t} = e;
            return r.createElement("div", {
                className: "buttons-module--buttons--pGloP"
            }, t)
        }
    },
    7888: function(e, t, n) {
        function r(e, t) {
            return e.list[t].map((t=>e.by_id[t]))
        }
        function o(e) {
            return e.replace(/\W+(.)/g, ((e,t)=>t.toUpperCase()))
        }
        function u(e, t) {
            return e.reduce(((e,n)=>((e[n[t]] = e[n[t]] || []).push(n),
            e)), {})
        }
        function l(e, t) {
            let n = .7;
            if (e < 0)
                n = 1;
            else if (e < t) {
                n = .7 + .3 * ((100 - Math.round(e / t * 100)) / 100)
            } else
                n = .7;
            return n
        }
        function c(e, t) {
            let n = 0;
            const r = Math.max(.1, Math.min(Math.abs(e - t) / 500, 1.6));
            !function o() {
                n += 1 / 60;
                const u = n / r
                  , l = i.easeOutQuint(u);
                u < 1 ? (window.requestAnimationFrame(o),
                window.scroll(0, e + (t - e) * l)) : window.scroll(0, t)
            }()
        }
        n.d(t, {
            LH: function() {
                return c
            },
            LK: function() {
                return s
            },
            Mj: function() {
                return o
            },
            X9: function() {
                return u
            },
            Xb: function() {
                return l
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
          , s = (e,t)=>t + 1 > e.length - 1 ? 0 : t + 1
    },
    3524: function(e, t, n) {
        n.r(t),
        n.d(t, {
            default: function() {
                return T
            }
        });
        var r = {};
        n.r(r),
        n.d(r, {
            body: function() {
                return v
            },
            bulma: function() {
                return j
            },
            cssref: function() {
                return w
            },
            description: function() {
                return y
            },
            figure: function() {
                return k
            },
            htmlref: function() {
                return N
            },
            js14: function() {
                return Z
            },
            marksheet: function() {
                return M
            },
            minireset: function() {
                return I
            },
            project: function() {
                return O
            },
            projects: function() {
                return C
            },
            subtitle: function() {
                return S
            },
            title: function() {
                return R
            },
            wd4: function() {
                return _
            },
            wysiwyg: function() {
                return P
            },
            year: function() {
                return B
            }
        });
        var o = n(1721)
          , u = n(7294)
          , l = n(7888)
          , c = n(4284)
          , i = n(9357)
          , s = n(5461)
          , a = n(9347)
          , m = n(1293)
          , d = n(3060)
          , f = n(8615);
        const p = n(4709);
        var h = e=>{
            const {id: t, scrollFn: n} = e;
            return u.createElement("div", {
                className: "hi-module--component--5jyPW"
            }, u.createElement("figure", {
                className: "hi-module--sphere--KVjdC"
            }, u.createElement(a.Z, {
                id: "sphere"
            })), u.createElement("div", {
                className: "hi-module--body--9sBDR"
            }, u.createElement("h1", {
                className: "hi-module--title--Pk1GJ"
            }, "Giving back to the ", u.createElement("em", null, "(open source)"), " ", u.createElement("strong", null, "world"), "."), u.createElement("div", {
                className: "hi-module--content--YcgWn"
            }, u.createElement("p", null, "Ever since I learned how to code, I’ve written numerous online tutorials and shared countless lines of code through my open source projects."), u.createElement("p", null, "All for ", u.createElement("strong", null, "free"), ". Because I’m a firm believer that sharing knowledge is essential to our world.")), u.createElement(m.Z, null, u.createElement(d.Z, {
                variant: "opensource",
                onClick: n
            }, "Browse projects"), u.createElement(d.Z, {
                href: p.github,
                external: !0
            }, "Visit GitHub")), u.createElement("div", {
                className: "hi-module--brags--SovNW"
            }, u.createElement(f.Z, {
                type: "github"
            }), u.createElement(f.Z, {
                type: "twitter"
            })), u.createElement("footer", {
                className: "hi-module--footer--K59bQ"
            }, u.createElement("small", null, "Sphere by", " ", u.createElement("a", {
                href: "https://juliangarnier.com/",
                target: "_blank"
            }, "Julian Garnier"), ". Animation by me."))))
        }
          , b = n(4074)
          , g = n(5900)
          , E = n.n(g)
          , v = "projects-module--body--1As92"
          , j = "projects-module--bulma--C8N1g"
          , w = "projects-module--cssref--0juDv"
          , y = "projects-module--description--oIe0z"
          , k = "projects-module--figure--Yu93q"
          , N = "projects-module--htmlref--ByVlX"
          , Z = "projects-module--js14--9nYeT"
          , M = "projects-module--marksheet--T+RBD"
          , I = "projects-module--minireset--MGP6O"
          , O = "projects-module--project--1UUJd"
          , C = "projects-module--projects--yhh-2"
          , S = "projects-module--subtitle--3lk1K"
          , R = "projects-module--title--MGH1e"
          , _ = "projects-module--wd4--0jNHB"
          , P = "projects-module--wysiwyg--Kvk2g"
          , B = "projects-module--year--5QERL";
        const G = n(2551);
        var K = e=>{
            const {id: t} = e;
            return u.createElement("div", null, u.createElement("div", {
                className: C
            }, G.list.open_source.map((e=>{
                const t = G.by_id[e];
                return u.createElement("a", {
                    href: t.url,
                    key: e,
                    className: E()(O, r[e]),
                    target: "_blank"
                }, u.createElement("p", {
                    className: B
                }, t.year), t.description ? u.createElement("div", {
                    className: v
                }, u.createElement("p", {
                    key: "subtitle",
                    className: S
                }, t.subtitle), u.createElement("h2", {
                    className: R
                }, t.title), u.createElement("div", {
                    className: y,
                    dangerouslySetInnerHTML: {
                        __html: t.description
                    }
                })) : [u.createElement("div", {
                    key: "body",
                    className: v
                }, u.createElement("h2", {
                    className: R
                }, t.title)), u.createElement("p", {
                    key: "subtitle",
                    className: S
                }, t.subtitle)], u.createElement("figure", {
                    className: k
                }, t.svg ? u.createElement(a.Z, {
                    id: t.svg
                }) : u.createElement(b.Z, {
                    slug: t.slug,
                    alt: t.title,
                    path: "projects",
                    width: t.width,
                    height: t.height
                })))
            }
            ))))
        }
        ;
        n(2551);
        var T = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).scrollToProjects = ()=>{
                    const e = window.scrollY
                      , t = n.projectsRef.current.offsetTop;
                    (0,
                    l.LH)(e, t)
                }
                ,
                n.projectsRef = u.createRef(),
                n
            }
            return (0,
            o.Z)(t, e),
            t.prototype.render = function() {
                return u.createElement(c.Z, null, u.createElement(i.Z, {
                    title: "Open Source Contributor",
                    description: "Over the years, I’ve written numerous online tutorials and shared countless lines of code through my open source projects.",
                    keywords: ["open source", "free", "tutorial", "lesson", "reference", "knowledge", "code", "github", "css", "html"],
                    className: "open-source"
                }), u.createElement("div", null, u.createElement("div", {
                    className: "open-source-activist-module--navbar--c39g2"
                }, u.createElement(s.Z, {
                    title: "shares his knowledge"
                })), u.createElement("div", null, u.createElement(h, {
                    scrollFn: this.scrollToProjects
                })), u.createElement("div", {
                    ref: this.projectsRef
                }, u.createElement(K, {
                    scroll: !0
                }))))
            }
            ,
            t
        }(u.Component)
    }
}]);
//# sourceMappingURL=component---src-pages-open-source-activist-js-b2e1225005eeda7f468b.js.map
