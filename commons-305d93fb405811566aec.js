/*! For license information please see commons-305d93fb405811566aec.js.LICENSE.txt */
(self.webpackChunkjgthms_com = self.webpackChunkjgthms_com || []).push([[351], {
    5900: function(e, t) {
        var n;
        !function() {
            "use strict";
            var r = {}.hasOwnProperty;
            function l() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n) {
                        var a = typeof n;
                        if ("string" === a || "number" === a)
                            e.push(n);
                        else if (Array.isArray(n)) {
                            if (n.length) {
                                var c = l.apply(null, n);
                                c && e.push(c)
                            }
                        } else if ("object" === a)
                            if (n.toString === Object.prototype.toString)
                                for (var o in n)
                                    r.call(n, o) && n[o] && e.push(o);
                            else
                                e.push(n.toString())
                    }
                }
                return e.join(" ")
            }
            e.exports ? (l.default = l,
            e.exports = l) : void 0 === (n = function() {
                return l
            }
            .apply(t, [])) || (e.exports = n)
        }()
    },
    2993: function(e) {
        var t = "undefined" != typeof Element
          , n = "function" == typeof Map
          , r = "function" == typeof Set
          , l = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
        function a(e, c) {
            if (e === c)
                return !0;
            if (e && c && "object" == typeof e && "object" == typeof c) {
                if (e.constructor !== c.constructor)
                    return !1;
                var o, i, s, C;
                if (Array.isArray(e)) {
                    if ((o = e.length) != c.length)
                        return !1;
                    for (i = o; 0 != i--; )
                        if (!a(e[i], c[i]))
                            return !1;
                    return !0
                }
                if (n && e instanceof Map && c instanceof Map) {
                    if (e.size !== c.size)
                        return !1;
                    for (C = e.entries(); !(i = C.next()).done; )
                        if (!c.has(i.value[0]))
                            return !1;
                    for (C = e.entries(); !(i = C.next()).done; )
                        if (!a(i.value[1], c.get(i.value[0])))
                            return !1;
                    return !0
                }
                if (r && e instanceof Set && c instanceof Set) {
                    if (e.size !== c.size)
                        return !1;
                    for (C = e.entries(); !(i = C.next()).done; )
                        if (!c.has(i.value[0]))
                            return !1;
                    return !0
                }
                if (l && ArrayBuffer.isView(e) && ArrayBuffer.isView(c)) {
                    if ((o = e.length) != c.length)
                        return !1;
                    for (i = o; 0 != i--; )
                        if (e[i] !== c[i])
                            return !1;
                    return !0
                }
                if (e.constructor === RegExp)
                    return e.source === c.source && e.flags === c.flags;
                if (e.valueOf !== Object.prototype.valueOf)
                    return e.valueOf() === c.valueOf();
                if (e.toString !== Object.prototype.toString)
                    return e.toString() === c.toString();
                if ((o = (s = Object.keys(e)).length) !== Object.keys(c).length)
                    return !1;
                for (i = o; 0 != i--; )
                    if (!Object.prototype.hasOwnProperty.call(c, s[i]))
                        return !1;
                if (t && e instanceof Element)
                    return !1;
                for (i = o; 0 != i--; )
                    if (("_owner" !== s[i] && "__v" !== s[i] && "__o" !== s[i] || !e.$$typeof) && !a(e[s[i]], c[s[i]]))
                        return !1;
                return !0
            }
            return e != e && c != c
        }
        e.exports = function(e, t) {
            try {
                return a(e, t)
            } catch (n) {
                if ((n.message || "").match(/stack|recursion/i))
                    return console.warn("react-fast-compare cannot handle circular refs"),
                    !1;
                throw n
            }
        }
    },
    5414: function(e, t, n) {
        "use strict";
        n.d(t, {
            q: function() {
                return he
            }
        });
        var r, l, a, c, o = n(5697), i = n.n(o), s = n(4839), C = n.n(s), m = n(2993), d = n.n(m), u = n(7294), f = n(6494), h = n.n(f), p = "bodyAttributes", L = "htmlAttributes", g = "titleAttributes", E = {
            BASE: "base",
            BODY: "body",
            HEAD: "head",
            HTML: "html",
            LINK: "link",
            META: "meta",
            NOSCRIPT: "noscript",
            SCRIPT: "script",
            STYLE: "style",
            TITLE: "title"
        }, v = (Object.keys(E).map((function(e) {
            return E[e]
        }
        )),
        "charset"), w = "cssText", M = "href", y = "http-equiv", b = "innerHTML", x = "itemprop", Z = "name", z = "property", k = "rel", F = "src", S = "target", B = {
            accesskey: "accessKey",
            charset: "charSet",
            class: "className",
            contenteditable: "contentEditable",
            contextmenu: "contextMenu",
            "http-equiv": "httpEquiv",
            itemprop: "itemProp",
            tabindex: "tabIndex"
        }, T = "defaultTitle", A = "defer", q = "encodeSpecialCharacters", R = "onChangeClientState", N = "titleTemplate", O = Object.keys(B).reduce((function(e, t) {
            return e[B[t]] = t,
            e
        }
        ), {}), j = [E.NOSCRIPT, E.SCRIPT, E.STYLE], V = "data-react-helmet", H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        , P = function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }, G = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), D = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , U = function(e, t) {
            var n = {};
            for (var r in e)
                t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }, I = function(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }, W = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
        }, _ = function(e) {
            var t = Q(e, E.TITLE)
              , n = Q(e, N);
            if (n && t)
                return n.replace(/%s/g, (function() {
                    return Array.isArray(t) ? t.join("") : t
                }
                ));
            var r = Q(e, T);
            return t || r || void 0
        }, Y = function(e) {
            return Q(e, R) || function() {}
        }, J = function(e, t) {
            return t.filter((function(t) {
                return void 0 !== t[e]
            }
            )).map((function(t) {
                return t[e]
            }
            )).reduce((function(e, t) {
                return D({}, e, t)
            }
            ), {})
        }, X = function(e, t) {
            return t.filter((function(e) {
                return void 0 !== e[E.BASE]
            }
            )).map((function(e) {
                return e[E.BASE]
            }
            )).reverse().reduce((function(t, n) {
                if (!t.length)
                    for (var r = Object.keys(n), l = 0; l < r.length; l++) {
                        var a = r[l].toLowerCase();
                        if (-1 !== e.indexOf(a) && n[a])
                            return t.concat(n)
                    }
                return t
            }
            ), [])
        }, K = function(e, t, n) {
            var r = {};
            return n.filter((function(t) {
                return !!Array.isArray(t[e]) || (void 0 !== t[e] && re("Helmet: " + e + ' should be of type "Array". Instead found type "' + H(t[e]) + '"'),
                !1)
            }
            )).map((function(t) {
                return t[e]
            }
            )).reverse().reduce((function(e, n) {
                var l = {};
                n.filter((function(e) {
                    for (var n = void 0, a = Object.keys(e), c = 0; c < a.length; c++) {
                        var o = a[c]
                          , i = o.toLowerCase();
                        -1 === t.indexOf(i) || n === k && "canonical" === e[n].toLowerCase() || i === k && "stylesheet" === e[i].toLowerCase() || (n = i),
                        -1 === t.indexOf(o) || o !== b && o !== w && o !== x || (n = o)
                    }
                    if (!n || !e[n])
                        return !1;
                    var s = e[n].toLowerCase();
                    return r[n] || (r[n] = {}),
                    l[n] || (l[n] = {}),
                    !r[n][s] && (l[n][s] = !0,
                    !0)
                }
                )).reverse().forEach((function(t) {
                    return e.push(t)
                }
                ));
                for (var a = Object.keys(l), c = 0; c < a.length; c++) {
                    var o = a[c]
                      , i = h()({}, r[o], l[o]);
                    r[o] = i
                }
                return e
            }
            ), []).reverse()
        }, Q = function(e, t) {
            for (var n = e.length - 1; n >= 0; n--) {
                var r = e[n];
                if (r.hasOwnProperty(t))
                    return r[t]
            }
            return null
        }, $ = (r = Date.now(),
        function(e) {
            var t = Date.now();
            t - r > 16 ? (r = t,
            e(t)) : setTimeout((function() {
                $(e)
            }
            ), 0)
        }
        ), ee = function(e) {
            return clearTimeout(e)
        }, te = "undefined" != typeof window ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || $ : n.g.requestAnimationFrame || $, ne = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || ee : n.g.cancelAnimationFrame || ee, re = function(e) {
            return console && "function" == typeof console.warn && console.warn(e)
        }, le = null, ae = function(e, t) {
            var n = e.baseTag
              , r = e.bodyAttributes
              , l = e.htmlAttributes
              , a = e.linkTags
              , c = e.metaTags
              , o = e.noscriptTags
              , i = e.onChangeClientState
              , s = e.scriptTags
              , C = e.styleTags
              , m = e.title
              , d = e.titleAttributes;
            ie(E.BODY, r),
            ie(E.HTML, l),
            oe(m, d);
            var u = {
                baseTag: se(E.BASE, n),
                linkTags: se(E.LINK, a),
                metaTags: se(E.META, c),
                noscriptTags: se(E.NOSCRIPT, o),
                scriptTags: se(E.SCRIPT, s),
                styleTags: se(E.STYLE, C)
            }
              , f = {}
              , h = {};
            Object.keys(u).forEach((function(e) {
                var t = u[e]
                  , n = t.newTags
                  , r = t.oldTags;
                n.length && (f[e] = n),
                r.length && (h[e] = u[e].oldTags)
            }
            )),
            t && t(),
            i(e, f, h)
        }, ce = function(e) {
            return Array.isArray(e) ? e.join("") : e
        }, oe = function(e, t) {
            void 0 !== e && document.title !== e && (document.title = ce(e)),
            ie(E.TITLE, t)
        }, ie = function(e, t) {
            var n = document.getElementsByTagName(e)[0];
            if (n) {
                for (var r = n.getAttribute(V), l = r ? r.split(",") : [], a = [].concat(l), c = Object.keys(t), o = 0; o < c.length; o++) {
                    var i = c[o]
                      , s = t[i] || "";
                    n.getAttribute(i) !== s && n.setAttribute(i, s),
                    -1 === l.indexOf(i) && l.push(i);
                    var C = a.indexOf(i);
                    -1 !== C && a.splice(C, 1)
                }
                for (var m = a.length - 1; m >= 0; m--)
                    n.removeAttribute(a[m]);
                l.length === a.length ? n.removeAttribute(V) : n.getAttribute(V) !== c.join(",") && n.setAttribute(V, c.join(","))
            }
        }, se = function(e, t) {
            var n = document.head || document.querySelector(E.HEAD)
              , r = n.querySelectorAll(e + "[" + "data-react-helmet]")
              , l = Array.prototype.slice.call(r)
              , a = []
              , c = void 0;
            return t && t.length && t.forEach((function(t) {
                var n = document.createElement(e);
                for (var r in t)
                    if (t.hasOwnProperty(r))
                        if (r === b)
                            n.innerHTML = t.innerHTML;
                        else if (r === w)
                            n.styleSheet ? n.styleSheet.cssText = t.cssText : n.appendChild(document.createTextNode(t.cssText));
                        else {
                            var o = void 0 === t[r] ? "" : t[r];
                            n.setAttribute(r, o)
                        }
                n.setAttribute(V, "true"),
                l.some((function(e, t) {
                    return c = t,
                    n.isEqualNode(e)
                }
                )) ? l.splice(c, 1) : a.push(n)
            }
            )),
            l.forEach((function(e) {
                return e.parentNode.removeChild(e)
            }
            )),
            a.forEach((function(e) {
                return n.appendChild(e)
            }
            )),
            {
                oldTags: l,
                newTags: a
            }
        }, Ce = function(e) {
            return Object.keys(e).reduce((function(t, n) {
                var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
                return t ? t + " " + r : r
            }
            ), "")
        }, me = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Object.keys(e).reduce((function(t, n) {
                return t[B[n] || n] = e[n],
                t
            }
            ), t)
        }, de = function(e, t, n) {
            switch (e) {
            case E.TITLE:
                return {
                    toComponent: function() {
                        return e = t.title,
                        n = t.titleAttributes,
                        (r = {
                            key: e
                        })[V] = !0,
                        l = me(n, r),
                        [u.createElement(E.TITLE, l, e)];
                        var e, n, r, l
                    },
                    toString: function() {
                        return function(e, t, n, r) {
                            var l = Ce(n)
                              , a = ce(t);
                            return l ? "<" + e + ' data-react-helmet="true" ' + l + ">" + W(a, r) + "</" + e + ">" : "<" + e + ' data-react-helmet="true">' + W(a, r) + "</" + e + ">"
                        }(e, t.title, t.titleAttributes, n)
                    }
                };
            case p:
            case L:
                return {
                    toComponent: function() {
                        return me(t)
                    },
                    toString: function() {
                        return Ce(t)
                    }
                };
            default:
                return {
                    toComponent: function() {
                        return function(e, t) {
                            return t.map((function(t, n) {
                                var r, l = ((r = {
                                    key: n
                                })[V] = !0,
                                r);
                                return Object.keys(t).forEach((function(e) {
                                    var n = B[e] || e;
                                    if (n === b || n === w) {
                                        var r = t.innerHTML || t.cssText;
                                        l.dangerouslySetInnerHTML = {
                                            __html: r
                                        }
                                    } else
                                        l[n] = t[e]
                                }
                                )),
                                u.createElement(e, l)
                            }
                            ))
                        }(e, t)
                    },
                    toString: function() {
                        return function(e, t, n) {
                            return t.reduce((function(t, r) {
                                var l = Object.keys(r).filter((function(e) {
                                    return !(e === b || e === w)
                                }
                                )).reduce((function(e, t) {
                                    var l = void 0 === r[t] ? t : t + '="' + W(r[t], n) + '"';
                                    return e ? e + " " + l : l
                                }
                                ), "")
                                  , a = r.innerHTML || r.cssText || ""
                                  , c = -1 === j.indexOf(e);
                                return t + "<" + e + ' data-react-helmet="true" ' + l + (c ? "/>" : ">" + a + "</" + e + ">")
                            }
                            ), "")
                        }(e, t, n)
                    }
                }
            }
        }, ue = function(e) {
            var t = e.baseTag
              , n = e.bodyAttributes
              , r = e.encode
              , l = e.htmlAttributes
              , a = e.linkTags
              , c = e.metaTags
              , o = e.noscriptTags
              , i = e.scriptTags
              , s = e.styleTags
              , C = e.title
              , m = void 0 === C ? "" : C
              , d = e.titleAttributes;
            return {
                base: de(E.BASE, t, r),
                bodyAttributes: de(p, n, r),
                htmlAttributes: de(L, l, r),
                link: de(E.LINK, a, r),
                meta: de(E.META, c, r),
                noscript: de(E.NOSCRIPT, o, r),
                script: de(E.SCRIPT, i, r),
                style: de(E.STYLE, s, r),
                title: de(E.TITLE, {
                    title: m,
                    titleAttributes: d
                }, r)
            }
        }, fe = C()((function(e) {
            return {
                baseTag: X([M, S], e),
                bodyAttributes: J(p, e),
                defer: Q(e, A),
                encode: Q(e, q),
                htmlAttributes: J(L, e),
                linkTags: K(E.LINK, [k, M], e),
                metaTags: K(E.META, [Z, v, y, z, x], e),
                noscriptTags: K(E.NOSCRIPT, [b], e),
                onChangeClientState: Y(e),
                scriptTags: K(E.SCRIPT, [F, b], e),
                styleTags: K(E.STYLE, [w], e),
                title: _(e),
                titleAttributes: J(g, e)
            }
        }
        ), (function(e) {
            le && ne(le),
            e.defer ? le = te((function() {
                ae(e, (function() {
                    le = null
                }
                ))
            }
            )) : (ae(e),
            le = null)
        }
        ), ue)((function() {
            return null
        }
        )), he = (l = fe,
        c = a = function(e) {
            function t() {
                return P(this, t),
                I(this, e.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e),
            t.prototype.shouldComponentUpdate = function(e) {
                return !d()(this.props, e)
            }
            ,
            t.prototype.mapNestedChildrenToProps = function(e, t) {
                if (!t)
                    return null;
                switch (e.type) {
                case E.SCRIPT:
                case E.NOSCRIPT:
                    return {
                        innerHTML: t
                    };
                case E.STYLE:
                    return {
                        cssText: t
                    }
                }
                throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
            }
            ,
            t.prototype.flattenArrayTypeChildren = function(e) {
                var t, n = e.child, r = e.arrayTypeChildren, l = e.newChildProps, a = e.nestedChildren;
                return D({}, r, ((t = {})[n.type] = [].concat(r[n.type] || [], [D({}, l, this.mapNestedChildrenToProps(n, a))]),
                t))
            }
            ,
            t.prototype.mapObjectTypeChildren = function(e) {
                var t, n, r = e.child, l = e.newProps, a = e.newChildProps, c = e.nestedChildren;
                switch (r.type) {
                case E.TITLE:
                    return D({}, l, ((t = {})[r.type] = c,
                    t.titleAttributes = D({}, a),
                    t));
                case E.BODY:
                    return D({}, l, {
                        bodyAttributes: D({}, a)
                    });
                case E.HTML:
                    return D({}, l, {
                        htmlAttributes: D({}, a)
                    })
                }
                return D({}, l, ((n = {})[r.type] = D({}, a),
                n))
            }
            ,
            t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
                var n = D({}, t);
                return Object.keys(e).forEach((function(t) {
                    var r;
                    n = D({}, n, ((r = {})[t] = e[t],
                    r))
                }
                )),
                n
            }
            ,
            t.prototype.warnOnInvalidChildren = function(e, t) {
                return !0
            }
            ,
            t.prototype.mapChildrenToProps = function(e, t) {
                var n = this
                  , r = {};
                return u.Children.forEach(e, (function(e) {
                    if (e && e.props) {
                        var l = e.props
                          , a = l.children
                          , c = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return Object.keys(e).reduce((function(t, n) {
                                return t[O[n] || n] = e[n],
                                t
                            }
                            ), t)
                        }(U(l, ["children"]));
                        switch (n.warnOnInvalidChildren(e, a),
                        e.type) {
                        case E.LINK:
                        case E.META:
                        case E.NOSCRIPT:
                        case E.SCRIPT:
                        case E.STYLE:
                            r = n.flattenArrayTypeChildren({
                                child: e,
                                arrayTypeChildren: r,
                                newChildProps: c,
                                nestedChildren: a
                            });
                            break;
                        default:
                            t = n.mapObjectTypeChildren({
                                child: e,
                                newProps: t,
                                newChildProps: c,
                                nestedChildren: a
                            })
                        }
                    }
                }
                )),
                t = this.mapArrayTypeChildrenToProps(r, t)
            }
            ,
            t.prototype.render = function() {
                var e = this.props
                  , t = e.children
                  , n = U(e, ["children"])
                  , r = D({}, n);
                return t && (r = this.mapChildrenToProps(t, r)),
                u.createElement(l, r)
            }
            ,
            G(t, null, [{
                key: "canUseDOM",
                set: function(e) {
                    l.canUseDOM = e
                }
            }]),
            t
        }(u.Component),
        a.propTypes = {
            base: i().object,
            bodyAttributes: i().object,
            children: i().oneOfType([i().arrayOf(i().node), i().node]),
            defaultTitle: i().string,
            defer: i().bool,
            encodeSpecialCharacters: i().bool,
            htmlAttributes: i().object,
            link: i().arrayOf(i().object),
            meta: i().arrayOf(i().object),
            noscript: i().arrayOf(i().object),
            onChangeClientState: i().func,
            script: i().arrayOf(i().object),
            style: i().arrayOf(i().object),
            title: i().string,
            titleAttributes: i().object,
            titleTemplate: i().string
        },
        a.defaultProps = {
            defer: !0,
            encodeSpecialCharacters: !0
        },
        a.peek = l.peek,
        a.rewind = function() {
            var e = l.rewind();
            return e || (e = ue({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: !0,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            })),
            e
        }
        ,
        c);
        he.renderStatic = he.rewind
    },
    4839: function(e, t, n) {
        "use strict";
        var r, l = n(7294), a = (r = l) && "object" == typeof r && "default"in r ? r.default : r;
        function c(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var o = !("undefined" == typeof window || !window.document || !window.document.createElement);
        e.exports = function(e, t, n) {
            if ("function" != typeof e)
                throw new Error("Expected reducePropsToState to be a function.");
            if ("function" != typeof t)
                throw new Error("Expected handleStateChangeOnClient to be a function.");
            if (void 0 !== n && "function" != typeof n)
                throw new Error("Expected mapStateOnServer to either be undefined or a function.");
            return function(r) {
                if ("function" != typeof r)
                    throw new Error("Expected WrappedComponent to be a React component.");
                var i, s = [];
                function C() {
                    i = e(s.map((function(e) {
                        return e.props
                    }
                    ))),
                    m.canUseDOM ? t(i) : n && (i = n(i))
                }
                var m = function(e) {
                    var t, n;
                    function l() {
                        return e.apply(this, arguments) || this
                    }
                    n = e,
                    (t = l).prototype = Object.create(n.prototype),
                    t.prototype.constructor = t,
                    t.__proto__ = n,
                    l.peek = function() {
                        return i
                    }
                    ,
                    l.rewind = function() {
                        if (l.canUseDOM)
                            throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                        var e = i;
                        return i = void 0,
                        s = [],
                        e
                    }
                    ;
                    var c = l.prototype;
                    return c.UNSAFE_componentWillMount = function() {
                        s.push(this),
                        C()
                    }
                    ,
                    c.componentDidUpdate = function() {
                        C()
                    }
                    ,
                    c.componentWillUnmount = function() {
                        var e = s.indexOf(this);
                        s.splice(e, 1),
                        C()
                    }
                    ,
                    c.render = function() {
                        return a.createElement(r, this.props)
                    }
                    ,
                    l
                }(l.PureComponent);
                return c(m, "displayName", "SideEffect(" + function(e) {
                    return e.displayName || e.name || "Component"
                }(r) + ")"),
                c(m, "canUseDOM", o),
                m
            }
        }
    },
    585: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return m
            }
        });
        var r = n(7294)
          , l = n(1597)
          , a = n(4074)
          , c = n(3067)
          , o = n(9347)
          , i = (n(5900),
        "footer-module--link--A457c")
          , s = "footer-module--p--YEPwp";
        const C = n(4709);
        var m = ()=>r.createElement("div", {
            className: "footer-module--component--Uq2XZ"
        }, r.createElement("p", {
            className: s
        }, r.createElement(l.Link, {
            to: "/"
        }, "Home"), r.createElement("em", null, "•"), r.createElement("a", {
            href: C.twitter,
            target: "_blank",
            rel: "noopener noreferrer"
        }, "Twitter"), r.createElement("em", null, "•"), r.createElement("a", {
            href: C.github,
            target: "_blank",
            rel: "noopener noreferrer"
        }, "GitHub"), r.createElement("em", null, "•"), r.createElement(l.Link, {
            to: "/contact/"
        }, "Contact")), r.createElement("p", {
            className: s
        }, "Copyright © ", (new Date).getFullYear(), " JGTHMS Ltd (12588054) registered in England and Wales.", r.createElement("br", null), "Registered Office Address: First Floor, Telecom House, 125-135 Preston Road, Brighton, East Sussex, United Kingdom, BN1 6AF"), r.createElement("div", {
            className: "footer-module--links--YbG7h"
        }, r.createElement(c.Z, {
            parentClass: i,
            href: "https://bulma.io"
        }, r.createElement(a.Z, {
            path: "global",
            slug: "made-with-bulma",
            width: "128",
            height: "24"
        })), r.createElement(c.Z, {
            parentClass: i,
            href: "https://www.gatsbyjs.org/"
        }, r.createElement(o.Z, {
            id: "gatsby"
        }))))
    },
    5733: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return $
            }
        });
        var r = {};
        n.r(r),
        n.d(r, {
            amazon: function() {
                return s
            },
            backend: function() {
                return C
            },
            branding: function() {
                return m
            },
            bulma: function() {
                return d
            },
            caseStudies: function() {
                return u
            },
            ciwb: function() {
                return f
            },
            compound: function() {
                return h
            },
            contact: function() {
                return p
            },
            css44: function() {
                return L
            },
            cssref: function() {
                return g
            },
            design: function() {
                return E
            },
            down: function() {
                return v
            },
            fabula: function() {
                return w
            },
            facebook: function() {
                return M
            },
            fbt: function() {
                return y
            },
            freelance: function() {
                return b
            },
            github: function() {
                return x
            },
            htmlcss: function() {
                return Z
            },
            htmlref: function() {
                return z
            },
            index: function() {
                return k
            },
            isActive: function() {
                return F
            },
            isOpen: function() {
                return S
            },
            ivanBallini: function() {
                return B
            },
            js: function() {
                return T
            },
            js14: function() {
                return A
            },
            link: function() {
                return q
            },
            list: function() {
                return R
            },
            marksheet: function() {
                return N
            },
            menu: function() {
                return O
            },
            minireset: function() {
                return j
            },
            netspeakGames: function() {
                return V
            },
            noItems: function() {
                return H
            },
            opensource: function() {
                return P
            },
            opensourceDark: function() {
                return G
            },
            opensourceDarkBis: function() {
                return D
            },
            success: function() {
                return U
            },
            summary: function() {
                return I
            },
            teaching: function() {
                return W
            },
            turquoise: function() {
                return _
            },
            twitter: function() {
                return Y
            },
            up: function() {
                return J
            },
            wd4: function() {
                return X
            },
            wysiwyg: function() {
                return K
            }
        });
        var l = n(7294)
          , a = n(1597)
          , c = n(9347)
          , o = n(5900)
          , i = n.n(o)
          , s = "menu-module--amazon--PmSiV"
          , C = "menu-module--backend--2h8sL"
          , m = "menu-module--branding--vLnoS"
          , d = "menu-module--bulma--jMavQ"
          , u = "menu-module--caseStudies--eVhrp"
          , f = "menu-module--ciwb--tjUi+"
          , h = "menu-module--compound--sV06a"
          , p = "menu-module--contact--ULdFQ"
          , L = "menu-module--css44--8tl1V"
          , g = "menu-module--cssref--KN4QI"
          , E = "menu-module--design--mLBf1"
          , v = "menu-module--down--VSqLW"
          , w = "menu-module--fabula--qCYqh"
          , M = "menu-module--facebook--GC25S"
          , y = "menu-module--fbt--xr92j"
          , b = "menu-module--freelance--hA80L"
          , x = "menu-module--github--5U8iH"
          , Z = "menu-module--htmlcss--teTkw"
          , z = "menu-module--htmlref--dTBnX"
          , k = "menu-module--index--dUXgt"
          , F = "menu-module--is-active--+3Jao"
          , S = "menu-module--is-open--h+Jom"
          , B = "menu-module--ivanBallini--F0djn"
          , T = "menu-module--js--7Ic4o"
          , A = "menu-module--js14--e31hu"
          , q = "menu-module--link--XSMi0"
          , R = "menu-module--list--iUJp0"
          , N = "menu-module--marksheet--gkvrz"
          , O = "menu-module--menu--UGvNP"
          , j = "menu-module--minireset--dEDh1"
          , V = "menu-module--netspeakGames--r5iOA"
          , H = "menu-module--no-items--zxSHx"
          , P = "menu-module--opensource--JbxMP"
          , G = "menu-module--opensource-dark--yxjIE"
          , D = "menu-module--opensource-dark-bis--8s3-9"
          , U = "menu-module--success--ebg37"
          , I = "menu-module--summary--+lspn"
          , W = "menu-module--teaching--xkUhM"
          , _ = "menu-module--turquoise--xMdAy"
          , Y = "menu-module--twitter--GiYl3"
          , J = "menu-module--up--LbcO1"
          , X = "menu-module--wd4--Xq2y+"
          , K = "menu-module--wysiwyg--RRi8K";
        const Q = n(7892);
        n(4709);
        var $ = e=>{
            let {cutoff: t, version: n="up"} = e;
            const {0: o, 1: s} = (0,
            l.useState)(!1)
              , C = t && t >= Q.header.length
              , m = Q.header.map(((e,n)=>{
                if (t && n < t)
                    return;
                const o = Q.by_id[e];
                if (o.href) {
                    const t = {
                        className: i()(q, [r[e]], [r[o.id]]),
                        href: o.href,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    };
                    return l.createElement("li", {
                        key: o.id
                    }, l.createElement("a", t, o.label, l.createElement(c.Z, {
                        id: "externalLink"
                    })))
                }
                const s = {
                    className: i()(q, [r[e]]),
                    activeClassName: F,
                    to: o.to
                };
                return l.createElement("li", {
                    key: o.id
                }, l.createElement(a.Link, s, o.label))
            }
            ))
              , d = (0,
            l.useRef)(null)
              , u = e=>{
                d.current && !d.current.contains(e.target) && s(!1)
            }
            ;
            return (0,
            l.useEffect)((()=>(document.addEventListener("click", u, !0),
            ()=>{
                document.removeEventListener("click", u, !0)
            }
            ))),
            l.createElement("div", {
                className: i()(O, [r[n]], C && H, o && S),
                ref: d
            }, l.createElement("button", {
                className: I,
                onClick: e=>{
                    e.preventDefault(),
                    s((e=>!e))
                }
            }, l.createElement(c.Z, {
                id: "ellipsis"
            })), l.createElement("ul", {
                className: i()("flyout-list", R)
            }, m))
        }
    },
    5461: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return ke
            }
        });
        var r = {};
        n.r(r),
        n.d(r, {
            amazon: function() {
                return u
            },
            backend: function() {
                return f
            },
            branding: function() {
                return h
            },
            bulma: function() {
                return p
            },
            caseStudies: function() {
                return L
            },
            ciwb: function() {
                return g
            },
            component: function() {
                return E
            },
            compound: function() {
                return v
            },
            contact: function() {
                return w
            },
            css44: function() {
                return M
            },
            cssref: function() {
                return y
            },
            design: function() {
                return b
            },
            fabula: function() {
                return x
            },
            facebook: function() {
                return Z
            },
            fbt: function() {
                return z
            },
            freelance: function() {
                return k
            },
            github: function() {
                return F
            },
            htmlcss: function() {
                return S
            },
            htmlref: function() {
                return B
            },
            index: function() {
                return T
            },
            isActive: function() {
                return A
            },
            ivanBallini: function() {
                return q
            },
            js: function() {
                return R
            },
            js14: function() {
                return N
            },
            link: function() {
                return O
            },
            list: function() {
                return j
            },
            marksheet: function() {
                return V
            },
            minireset: function() {
                return H
            },
            netspeakGames: function() {
                return P
            },
            opensource: function() {
                return G
            },
            opensourceDark: function() {
                return D
            },
            opensourceDarkBis: function() {
                return U
            },
            success: function() {
                return I
            },
            teaching: function() {
                return W
            },
            turquoise: function() {
                return _
            },
            twitter: function() {
                return Y
            },
            wd4: function() {
                return J
            },
            wysiwyg: function() {
                return X
            }
        });
        var l = {};
        n.r(l),
        n.d(l, {
            books: function() {
                return $
            },
            brand: function() {
                return ee
            },
            caseStudies: function() {
                return te
            },
            clone: function() {
                return ne
            },
            component: function() {
                return re
            },
            contact: function() {
                return le
            },
            dropdown: function() {
                return ae
            },
            github: function() {
                return ce
            },
            icon: function() {
                return oe
            },
            index: function() {
                return ie
            },
            isActive: function() {
                return se
            },
            isHidden: function() {
                return Ce
            },
            isShown: function() {
                return me
            },
            isText: function() {
                return de
            },
            jt: function() {
                return ue
            },
            list: function() {
                return fe
            },
            menu: function() {
                return he
            },
            name: function() {
                return pe
            },
            nav: function() {
                return Le
            },
            navbar: function() {
                return ge
            },
            navbarItem: function() {
                return Ee
            },
            opensource: function() {
                return ve
            },
            tagline: function() {
                return we
            },
            text: function() {
                return Me
            },
            title: function() {
                return ye
            },
            twitter: function() {
                return be
            },
            work: function() {
                return xe
            }
        });
        var a = n(7326)
          , c = n(1721)
          , o = n(7294)
          , i = n(1597)
          , s = n(9347)
          , C = n(5733)
          , m = n(5900)
          , d = n.n(m)
          , u = "dropdown-module--amazon--h-Gi9"
          , f = "dropdown-module--backend--Z-z3S"
          , h = "dropdown-module--branding--6Tgfx"
          , p = "dropdown-module--bulma--SX0pO"
          , L = "dropdown-module--caseStudies--xeRQm"
          , g = "dropdown-module--ciwb--+LQI1"
          , E = "dropdown-module--component--Fpl9w"
          , v = "dropdown-module--compound--yJRAm"
          , w = "dropdown-module--contact--O6Uwi"
          , M = "dropdown-module--css44--5Cf47"
          , y = "dropdown-module--cssref--eZr6A"
          , b = "dropdown-module--design--I+aL2"
          , x = "dropdown-module--fabula--t16Dk"
          , Z = "dropdown-module--facebook--juXfi"
          , z = "dropdown-module--fbt---cWht"
          , k = "dropdown-module--freelance--TNXIF"
          , F = "dropdown-module--github--xcjLW"
          , S = "dropdown-module--htmlcss--VjlGP"
          , B = "dropdown-module--htmlref--5afYX"
          , T = "dropdown-module--index--W9yGW"
          , A = "dropdown-module--is-active--jL-6j"
          , q = "dropdown-module--ivanBallini--V832s"
          , R = "dropdown-module--js--x1HLz"
          , N = "dropdown-module--js14--GgXTd"
          , O = "dropdown-module--link---GY98"
          , j = "dropdown-module--list--z--cF"
          , V = "dropdown-module--marksheet--2wu2h"
          , H = "dropdown-module--minireset--RYz8Y"
          , P = "dropdown-module--netspeakGames--kfxt3"
          , G = "dropdown-module--opensource--Qw5IH"
          , D = "dropdown-module--opensource-dark--jARz6"
          , U = "dropdown-module--opensource-dark-bis--XAXoZ"
          , I = "dropdown-module--success--bWX2n"
          , W = "dropdown-module--teaching--wHP9L"
          , _ = "dropdown-module--turquoise--b9vzL"
          , Y = "dropdown-module--twitter--PDNJS"
          , J = "dropdown-module--wd4---cMTS"
          , X = "dropdown-module--wysiwyg--EkpWx";
        var K = e=>{
            const {parentClass: t, items: n} = e
              , l = d()({
                [E]: !0,
                [t]: t
            });
            return o.createElement("div", {
                className: l
            }, o.createElement("ul", {
                className: j
            }, n.map((e=>{
                const t = {
                    className: d()(O, [r[e.id]]),
                    activeClassName: A,
                    to: e.to
                };
                return o.createElement("li", {
                    key: e.id
                }, o.createElement(i.Link, t, e.label))
            }
            ))))
        }
          , Q = n(7409)
          , $ = "navbar-module--books--qSU60"
          , ee = "navbar-module--brand--nFxmd"
          , te = "navbar-module--caseStudies--pzOJO"
          , ne = "navbar-module--clone--Fe1VS"
          , re = "navbar-module--component--qvtFo"
          , le = "navbar-module--contact--WoOwk"
          , ae = "navbar-module--dropdown--avXU1"
          , ce = "navbar-module--github--EcHGM"
          , oe = "navbar-module--icon--kMmZM"
          , ie = "navbar-module--index--vyFJg"
          , se = "navbar-module--is-active--GRo2K"
          , Ce = "navbar-module--is-hidden--nZHq9"
          , me = "navbar-module--is-shown--IkeW5"
          , de = "navbar-module--is-text--oDlfB"
          , ue = "navbar-module--jt--6fGxi"
          , fe = "navbar-module--list--Be-tZ"
          , he = "navbar-module--menu--5rfm1"
          , pe = "navbar-module--name--V6yrI"
          , Le = "navbar-module--nav--apw7x"
          , ge = "navbar-module--navbar--sWLRI"
          , Ee = "navbar-module--navbar-item--944mM"
          , ve = "navbar-module--opensource--ZR7oH"
          , we = "navbar-module--tagline--XsUxe"
          , Me = "navbar-module--text--ZRrXP"
          , ye = "navbar-module--title--K9buJ"
          , be = "navbar-module--twitter--kA-Zr"
          , xe = "navbar-module--work--6SKBQ";
        n(4709);
        const Ze = n(7892);
        let ze = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).resizeTimer = void 0,
                n.componentWillUnmount = ()=>{
                    window.removeEventListener("resize", n.handleResize)
                }
                ,
                n.handleResize = ()=>{
                    const e = (0,
                    a.Z)(n);
                    window.clearTimeout(n.resizeTimer),
                    n.resizeTimer = window.setTimeout((()=>{
                        e.doneResizing()
                    }
                    ), 10)
                }
                ,
                n.doneResizing = ()=>{
                    n.findCount()
                }
                ,
                n.handleMouseEnter = e=>{
                    e.target.classList.add("is-hoverable")
                }
                ,
                n.state = {
                    maxCount: 99
                },
                n.containerRef = o.createRef(),
                n.brandRef = o.createRef(),
                n.titleRef = o.createRef(),
                n.availableRef = o.createRef(),
                n.navRef = o.createRef(),
                n.menuRef = o.createRef(),
                n.cloneRef = o.createRef(),
                n.itemsRef = [],
                n
            }
            (0,
            c.Z)(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                this.findCount(),
                window.addEventListener("resize", this.handleResize)
            }
            ,
            n.findCount = function() {
                const {maxCount: e} = this.state
                  , t = (this.navRef.current.clientWidth,
                this.containerRef.current.clientWidth - this.brandRef.current.clientWidth - this.titleRef.current.clientWidth - this.availableRef.current.clientWidth - 48 - 2);
                let n = 0
                  , r = 0;
                for (const l of this.itemsRef) {
                    if (r += l.offsetWidth,
                    r > t)
                        break;
                    n++
                }
                e != n && this.setState({
                    maxCount: n
                })
            }
            ,
            n.buildList = function(e) {
                void 0 === e && (e = !1);
                const {maxCount: t} = this.state
                  , n = Ze.work.map((e=>Ze.by_id[e].to))
                  , r = Ze.caseStudies.map((e=>Ze.by_id[e].to))
                  , a = Ze.books.map((e=>Ze.by_id[e].to))
                  , c = Ze.header.map(((c,C)=>{
                    const m = Ze.by_id[c]
                      , u = d()(Me, [l[c]], se, "is-active")
                      , f = C + 1 > t ? Ce : ""
                      , h = {
                        className: d()({
                            [Ee]: !0,
                            [l[c]]: !0,
                            [f]: !0,
                            [de]: !m.href
                        })
                    };
                    if (e && (h.ref = e=>this.itemsRef[C] = e),
                    m.href) {
                        const e = {
                            className: d()(oe, [l[c]]),
                            href: m.href,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        };
                        return o.createElement("li", Object.assign({
                            key: c
                        }, h), o.createElement("a", e, o.createElement(s.Z, {
                            id: c
                        })))
                    }
                    let p = {
                        className: d()(Me, [l[c]]),
                        activeClassName: se,
                        "data-link-id": c,
                        to: m.to
                    };
                    "work" === c && (p.getProps = e=>{
                        let {location: t} = e;
                        return n.includes(t.pathname) ? {
                            className: u
                        } : null
                    }
                    ),
                    "caseStudies" === c && (p.getProps = e=>{
                        let {location: t} = e;
                        return r.includes(t.pathname) ? {
                            className: u
                        } : null
                    }
                    ),
                    "books" === c && (p.getProps = e=>{
                        let {location: t} = e;
                        return a.includes(t.pathname) ? {
                            className: u
                        } : null
                    }
                    );
                    let L = null;
                    if (m.dropdown) {
                        const e = Ze[c].map((e=>Ze.by_id[e]));
                        h.onMouseEnter = this.handleMouseEnter,
                        L = o.createElement(K, {
                            key: c,
                            parentClass: ae,
                            items: e
                        })
                    }
                    return o.createElement("li", Object.assign({
                        key: c
                    }, h), o.createElement(i.Link, p, m.label), L)
                }
                ));
                return o.createElement("ul", {
                    className: fe
                }, c)
            }
            ,
            n.render = function() {
                const {title: e} = this.props
                  , t = d()({
                    [Ce]: "undefined" != typeof window && "/contact/" === window.location.pathname
                });
                return [o.createElement("div", {
                    key: "main",
                    className: re
                }, o.createElement("nav", {
                    className: ge,
                    ref: this.containerRef
                }, o.createElement(i.Link, {
                    ref: this.brandRef,
                    className: ee,
                    to: "/"
                }, o.createElement("figure", {
                    className: ue
                }, o.createElement(s.Z, {
                    id: "jt"
                }))), o.createElement("p", {
                    ref: this.titleRef,
                    className: ye
                }, o.createElement("strong", {
                    className: pe
                }, "Jeremy Thomas"), o.createElement("em", {
                    className: we
                }, e)), o.createElement("div", {
                    ref: this.availableRef,
                    className: t
                }, o.createElement(Q.Z, {
                    variant: "navbar"
                })), o.createElement("div", {
                    ref: this.navRef,
                    className: Le
                }, this.buildList(!1)), o.createElement("div", {
                    ref: this.menuRef,
                    className: he
                }, o.createElement(C.Z, {
                    version: "down",
                    cutoff: this.state.maxCount
                })))), o.createElement("div", {
                    key: "clone",
                    className: ne,
                    ref: this.cloneRef
                }, this.buildList(!0))]
            }
            ,
            t
        }(o.Component);
        var ke = ze
    },
    7409: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return d
            }
        });
        var r = {};
        n.r(r),
        n.d(r, {
            available: function() {
                return i
            },
            dot: function() {
                return s
            },
            isActive: function() {
                return C
            },
            navbar: function() {
                return m
            }
        });
        var l = n(7294)
          , a = n(1597)
          , c = n(5900)
          , o = n.n(c)
          , i = "available-module--available--Iobuz"
          , s = "available-module--dot--SXcCA"
          , C = "available-module--is-active---wcIf"
          , m = "available-module--navbar--7mv-O";
        var d = e=>{
            const {ref: t, variant: n} = e;
            return l.createElement(a.Link, {
                ref: t,
                className: o()(i, n && r[n]),
                activeClassName: C,
                to: "/contact/"
            }, l.createElement("span", {
                className: s
            }), l.createElement("span", null, l.createElement("em", null, "Available"), " ", l.createElement("strong", null, "July 2023")))
        }
    },
    7905: function(e, t, n) {
        "use strict";
        var r = n(7294);
        t.Z = e=>{
            let {parentClass: t, value: n} = e;
            return r.createElement("span", {
                className: t,
                role: "img",
                "aria-label": "emoji",
                style: {
                    fontSize: "1rem",
                    verticalAlign: "middle"
                }
            }, n)
        }
    },
    3067: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return c
            }
        });
        var r = n(7294)
          , l = n(5900)
          , a = n.n(l);
        var c = e=>{
            let {href: t, parentClass: n, children: l} = e;
            return r.createElement("a", {
                href: t,
                className: a()("external-link-module--component--n5u5H", n),
                target: "_blank",
                rel: "noopener noreferrer"
            }, l)
        }
    },
    8142: function(e, t, n) {
        "use strict";
        var r = n(7294);
        t.Z = ()=>r.createElement("div", {
            className: "hr"
        }, r.createElement("div", {
            className: "container"
        }, r.createElement("hr", null)))
    },
    9025: function(e, t, n) {
        "use strict";
        var r = n(7294);
        t.Z = e=>{
            const {path: t, slug: n, width: l, alt: a, height: c, extension: o="png"} = e
              , i = t + "/" + n
              , s = "/" + i + "." + o + " 1x, /" + i + "@2x." + o + " 2x, /" + i + "@3x." + o + " 3x";
            return r.createElement("img", {
                src: "/" + i + "." + o,
                srcSet: s,
                alt: a,
                width: l,
                height: c
            })
        }
    },
    4074: function(e, t, n) {
        "use strict";
        var r = n(7294);
        t.Z = e=>{
            const {slug: t, width: n, alt: l="Static image", height: a, path: c, extension: o="png"} = e;
            let i = "/" + c + "/" + t;
            return "" !== o && (i += "." + o),
            r.createElement("img", {
                src: i,
                alt: l,
                width: n,
                height: a
            })
        }
    },
    9357: function(e, t, n) {
        "use strict";
        var r = n(7294)
          , l = n(5414)
          , a = n(1597);
        function c(e) {
            let {description: t, lang: n, meta: c, keywords: o, title: i, className: s} = e;
            const {site: C} = (0,
            a.useStaticQuery)("63159454")
              , m = t || C.siteMetadata.description;
            return r.createElement(l.q, {
                htmlAttributes: {
                    lang: n,
                    class: s
                },
                title: i,
                titleTemplate: "%s | " + C.siteMetadata.title,
                meta: [{
                    name: "description",
                    content: m
                }, {
                    property: "og:title",
                    content: i
                }, {
                    property: "og:description",
                    content: m
                }, {
                    property: "og:type",
                    content: "website"
                }, {
                    name: "twitter:card",
                    content: "summary"
                }, {
                    name: "twitter:creator",
                    content: C.siteMetadata.author
                }, {
                    name: "twitter:title",
                    content: i
                }, {
                    name: "twitter:description",
                    content: m
                }].concat(o.length > 0 ? {
                    name: "keywords",
                    content: o.join(", ")
                } : []).concat(c)
            })
        }
        c.defaultProps = {
            lang: "en",
            meta: [],
            keywords: [],
            description: ""
        },
        t.Z = c
    },
    9347: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return le
            }
        });
        var r = n(7294);
        var l = ()=>r.createElement("svg", {
            width: "2370",
            height: "2500",
            viewBox: "0 0 256 270",
            xmlns: "http://www.w3.org/2000/svg",
            preserveAspectRatio: "xMinYMin meet"
        }, r.createElement("path", {
            d: "M127.606.341L.849 44.95 20.88 211.022l106.86 58.732 107.412-59.528L255.175 44.16 127.606.341z",
            fill: "#B3B3B3"
        }), r.createElement("path", {
            d: "M242.532 53.758L127.31 14.466v241.256l96.561-53.441 18.66-148.523z",
            fill: "#A6120D"
        }), r.createElement("path", {
            d: "M15.073 54.466l17.165 148.525 95.07 52.731V14.462L15.074 54.465z",
            fill: "#DD1B16"
        }), r.createElement("path", {
            d: "M159.027 142.898L127.31 157.73H93.881l-15.714 39.305-29.228.54L127.31 23.227l31.717 119.672zm-3.066-7.467l-28.44-56.303-23.329 55.334h23.117l28.652.97z",
            fill: "#F2F2F2"
        }), r.createElement("path", {
            d: "M127.309 23.226l.21 55.902 26.47 55.377h-26.62l-.06 23.189 36.81.035 17.204 39.852 27.967.518-81.981-174.873z",
            fill: "#B3B3B3"
        }));
        var a = ()=>r.createElement("svg", {
            width: "1792",
            height: "1792",
            viewBox: "0 0 1792 1792",
            xmlns: "http://www.w3.org/2000/svg"
        }, r.createElement("path", {
            d: "M1412 897q0-27-18-45l-91-91q-18-18-45-18t-45 18l-189 189v-502q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v502l-189-189q-19-19-45-19t-45 19l-91 91q-18 18-18 45t18 45l362 362 91 91q18 18 45 18t45-18l91-91 362-362q18-18 18-45zm252-1q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
        }));
        var c = ()=>r.createElement("svg", {
            width: "65px",
            height: "69px",
            viewBox: "0 0 65 69"
        }, r.createElement("defs", null, r.createElement("path", {
            d: "M27.773501,9.83974853 L43.7596228,20.4971631 L43.7596228,20.4971631 C46.0572662,22.0289254 46.6781356,25.1332721 45.1463733,27.4309155 C44.780199,27.980177 44.3088842,28.4514917 43.7596228,28.817666 L27.773501,39.4750806 L27.773501,39.4750806 C25.4758575,41.0068428 22.3715108,40.3859735 20.8397485,38.0883301 C20.2921901,37.2669925 20,36.301954 20,35.3148291 L20,14 L20,14 C20,11.2385763 22.2385763,9 25,9 C25.9871249,9 26.9521634,9.29219014 27.773501,9.83974853 Z",
            id: "arrow-path-1"
        }), r.createElement("filter", {
            x: "-134.7%",
            y: "-79.8%",
            width: "369.4%",
            height: "323.5%",
            filterUnits: "objectBoundingBox",
            id: "arrow-filter-2"
        }, r.createElement("feOffset", {
            dx: "0",
            dy: "10",
            in: "SourceAlpha",
            result: "shadowOffsetOuter1"
        }), r.createElement("feGaussianBlur", {
            stdDeviation: "10",
            in: "shadowOffsetOuter1",
            result: "shadowBlurOuter1"
        }), r.createElement("feColorMatrix", {
            values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0",
            type: "matrix",
            in: "shadowBlurOuter1"
        }))), r.createElement("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, r.createElement("use", {
            fill: "black",
            fillOpacity: "1",
            filter: "url(#arrow-filter-2)",
            xlinkHref: "#arrow-path-1"
        }), r.createElement("use", {
            fill: "#23D199",
            fillRule: "evenodd",
            xlinkHref: "#arrow-path-1"
        })));
        var o = ()=>r.createElement("svg", {
            width: "640px",
            height: "160px",
            viewBox: "0 0 640 160",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, r.createElement("g", {
            id: "bulma-logo",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, r.createElement("path", {
            className: "dark-path",
            d: "M170,132.570659 L170,27.5908479 C170,25.5450773 170.915199,23.9300194 172.745626,22.7456258 C174.576052,21.5612323 176.729463,20.9690444 179.205922,20.9690444 L210.376851,20.9690444 C232.018951,20.9690444 242.839838,30.4440506 242.839838,49.3943472 C242.839838,62.5303483 238.263841,71.090155 229.111709,75.0740242 C234.602988,77.227467 238.748304,80.2691594 241.547779,84.1991925 C244.347255,88.1292256 245.746972,93.862681 245.746972,101.399731 L245.746972,104.791386 C245.746972,116.742994 242.839868,125.437389 237.025572,130.874832 C231.211276,136.312275 223.351328,139.030956 213.445491,139.030956 L179.205922,139.030956 C176.514118,139.030956 174.306873,138.384932 172.584118,137.092867 C170.861364,135.800801 170,134.293414 170,132.570659 L170,132.570659 Z M190.834455,120.619112 L209.084791,120.619112 C219.528989,120.619112 224.751009,114.751068 224.751009,103.014805 L224.751009,100.430686 C224.751009,94.4010466 223.432045,90.0403903 220.794078,87.3485868 C218.156111,84.6567833 214.253054,83.3109017 209.084791,83.3109017 L190.834455,83.3109017 L190.834455,120.619112 Z M190.834455,66.8371467 L208.923284,66.8371467 C213.122497,66.8371467 216.325696,65.5989357 218.532974,63.1224764 C220.740253,60.6460172 221.843876,57.2543957 221.843876,52.9475101 C221.843876,48.7482966 220.686418,45.437428 218.371467,43.0148048 C216.056516,40.5921817 212.853318,39.3808883 208.761777,39.3808883 L190.834455,39.3808883 L190.834455,66.8371467 Z M260.282638,103.014805 L260.282638,27.4293405 C260.282638,25.2758977 261.305508,23.6608398 263.351279,22.5841184 C265.397049,21.507397 267.873471,20.9690444 270.780619,20.9690444 C273.687767,20.9690444 276.164189,21.507397 278.20996,22.5841184 C280.25573,23.6608398 281.2786,25.2758977 281.2786,27.4293405 L281.2786,103.014805 C281.2786,115.397101 287.200479,121.588156 299.044415,121.588156 C310.88835,121.588156 316.810229,115.397101 316.810229,103.014805 L316.810229,27.4293405 C316.810229,25.2758977 317.833099,23.6608398 319.878869,22.5841184 C321.92464,21.507397 324.401062,20.9690444 327.30821,20.9690444 C330.215358,20.9690444 332.69178,21.507397 334.73755,22.5841184 C336.783321,23.6608398 337.806191,25.2758977 337.806191,27.4293405 L337.806191,103.014805 C337.806191,115.720117 334.279981,125.060535 327.227456,131.036339 C320.174931,137.012143 310.780678,140 299.044415,140 C287.308151,140 277.913898,137.039061 270.861373,131.117093 C263.808848,125.195125 260.282638,115.82779 260.282638,103.014805 L260.282638,103.014805 Z M356.702557,132.409152 L356.702557,27.4293405 C356.702557,25.2758977 357.725427,23.6608398 359.771198,22.5841184 C361.816969,21.507397 364.293391,20.9690444 367.200538,20.9690444 C370.107686,20.9690444 372.584108,21.507397 374.629879,22.5841184 C376.67565,23.6608398 377.69852,25.2758977 377.69852,27.4293405 L377.69852,120.619112 L417.106326,120.619112 C419.044424,120.619112 420.578729,121.534311 421.709287,123.364738 C422.839844,125.195164 423.405114,127.348574 423.405114,129.825034 C423.405114,132.301493 422.839844,134.454903 421.709287,136.28533 C420.578729,138.115756 419.044424,139.030956 417.106326,139.030956 L365.908479,139.030956 C363.43202,139.030956 361.278609,138.438768 359.448183,137.254374 C357.617757,136.069981 356.702557,134.454923 356.702557,132.409152 L356.702557,132.409152 Z M434.87214,132.409152 L434.87214,31.4670256 C434.87214,27.913845 435.868092,25.2759171 437.860027,23.5531629 C439.851962,21.8304086 442.355301,20.9690444 445.370121,20.9690444 C449.35399,20.9690444 452.4226,21.6689028 454.576043,23.0686406 C456.729486,24.4683785 459.098237,27.4831532 461.682369,32.1130552 L481.547779,68.2907133 L501.41319,32.1130552 C503.997321,27.4831532 506.39299,24.4683785 508.600269,23.0686406 C510.807548,21.6689028 513.903076,20.9690444 517.886945,20.9690444 C520.901765,20.9690444 523.405104,21.8304086 525.397039,23.5531629 C527.388974,25.2759171 528.384926,27.913845 528.384926,31.4670256 L528.384926,132.409152 C528.384926,134.454923 527.335138,136.069981 525.235532,137.254374 C523.135925,138.438768 520.68642,139.030956 517.886945,139.030956 C514.979797,139.030956 512.503375,138.438768 510.457604,137.254374 C508.411834,136.069981 507.388964,134.454923 507.388964,132.409152 L507.388964,62.960969 L488.492598,96.5545087 C486.985188,99.3539844 484.616436,100.753701 481.386272,100.753701 C478.26378,100.753701 475.948864,99.3539844 474.441454,96.5545087 L455.868102,61.6689098 L455.868102,132.409152 C455.868102,134.454923 454.818315,136.069981 452.718708,137.254374 C450.619101,138.438768 448.169597,139.030956 445.370121,139.030956 C442.462973,139.030956 439.986551,138.438768 437.940781,137.254374 C435.89501,136.069981 434.87214,134.454923 434.87214,132.409152 L434.87214,132.409152 Z M539.528937,130.309556 C539.528937,130.094212 539.636607,129.555859 539.851952,128.694482 L571.02288,27.1063257 C571.668913,24.8452108 573.257053,23.0955647 575.787349,21.8573351 C578.317644,20.6191055 581.19783,20 584.427995,20 C587.658159,20 590.565263,20.6191055 593.149394,21.8573351 C595.733526,23.0955647 597.348584,24.8452108 597.994616,27.1063257 L629.165545,128.694482 C629.380889,129.555859 629.48856,130.094212 629.48856,130.309556 C629.48856,132.678343 628.035008,134.724083 625.12786,136.446837 C622.220712,138.169591 619.259773,139.030956 616.244953,139.030956 C612.261084,139.030956 609.892332,137.631239 609.138627,134.831763 L603.001346,113.351279 L566.016151,113.351279 L559.878869,134.831763 C559.125164,137.631239 556.756413,139.030956 552.772544,139.030956 C549.650052,139.030956 546.662195,138.196509 543.808883,136.527591 C540.955571,134.858673 539.528937,132.786015 539.528937,130.309556 L539.528937,130.309556 Z M570.376851,96.8775236 L598.479139,96.8775236 L584.427995,47.294751 L570.376851,96.8775236 Z",
            id: "BULMA",
            fill: "#000000"
        }), r.createElement("g", {
            id: "B",
            fill: "#00D1B2"
        }, r.createElement("polygon", {
            id: "Path",
            points: "0 110 10 40 50 0 100 50 70 80 110 120 50 160"
        }))));
        var i = ()=>r.createElement("svg", {
            width: "1792",
            height: "1792",
            viewBox: "0 0 1792 1792",
            xmlns: "http://www.w3.org/2000/svg"
        }, r.createElement("path", {
            d: "M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"
        }));
        var s = ()=>r.createElement("svg", {
            width: "1792",
            height: "1792",
            viewBox: "0 0 1792 1792",
            xmlns: "http://www.w3.org/2000/svg"
        }, r.createElement("path", {
            d: "M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
        }));
        var C = ()=>r.createElement("svg", {
            width: "2350px",
            height: "513px",
            viewBox: "0 0 2350 513",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, r.createElement("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, r.createElement("path", {
            d: "M732,187.850076 C708.48,181.980076 689.37,179.030076 672,179.030076 C617.32,179.030076 587.63,211.030076 587.63,256.030076 C587.63,303.030076 619.68,334.510076 668.47,334.510076 C685.23,334.510076 708.74,330.990076 734.31,324.510076 L739.61,348.910076 C715.21,356.550076 689.61,360.670093 667.29,360.670093 C601.2,360.700076 558,319.000076 558,256.050076 C558,193.730076 601.2,152.000076 668.22,152.000076 C691.561137,152.072984 714.789798,155.237166 737.3,161.410076 L732,187.850076 Z",
            id: "Path",
            fill: "#F5F9FA",
            fillRule: "nonzero"
        }), r.createElement("path", {
            d: "M970.07,256.340076 C970.07,318.950076 926.56,360.700076 864.25,360.700076 C801.94,360.700076 758.43,319.000076 758.43,256.340076 C758.43,193.680076 801.93,152.000076 864.25,152.000076 C926.57,152.000076 970.07,193.730076 970.07,256.340076 Z M940.68,256.340076 C940.68,209.610076 908.93,178.450076 864.25,178.450076 C819.57,178.450076 787.82,209.610076 787.82,256.340076 C787.82,303.070076 819.57,334.530076 864.25,334.530076 C908.93,334.530076 940.68,303.080076 940.68,256.340076 L940.68,256.340076 Z",
            id: "Shape",
            fill: "#F5F9FA",
            fillRule: "nonzero"
        }), r.createElement("polygon", {
            id: "Path",
            fill: "#F5F9FA",
            fillRule: "nonzero",
            points: "1138.15 356.280076 1113.15 356.280076 1048.15 218.420076 1039.62 356.280076 1012.28 356.280076 1023.75 156.400076 1050.5 156.400076 1125.75 322.480076 1201 156.400076 1227.75 156.400076 1239.21 356.280076 1211.87 356.280076 1203.35 218.420076"
        }), r.createElement("path", {
            d: "M1440.86,222.540076 C1440.86,263.690076 1407.94,291.030076 1360.32,291.030076 L1318.87,291.030076 L1318.87,356.280076 L1291,356.280076 L1291,156.400076 C1311.57,155.220076 1336,154.04003 1360.37,154.04003 C1407.94,154.000076 1440.86,179.620076 1440.86,222.540076 Z M1363.26,265.750076 C1392.36,265.750076 1413.26,248.990076 1413.26,222.540076 C1413.26,194.910076 1392.39,179.920076 1363.26,179.920076 C1348.56,179.920076 1334.45,180.210076 1318.87,181.090076 L1318.87,265.750076 L1363.26,265.750076 Z",
            id: "Shape",
            fill: "#F5F9FA",
            fillRule: "nonzero"
        }), r.createElement("path", {
            d: "M1681.86,256.340076 C1681.86,318.950076 1638.36,360.700076 1576.04,360.700076 C1513.72,360.700076 1470.22,319.000076 1470.22,256.340076 C1470.22,193.680076 1513.72,152.000076 1576,152.000076 C1638.28,152.000076 1681.86,193.730076 1681.86,256.340076 Z M1652.47,256.340076 C1652.47,209.610076 1620.72,178.450076 1576.04,178.450076 C1531.36,178.450076 1499.61,209.610076 1499.61,256.340076 C1499.61,303.070076 1531.36,334.530076 1576.04,334.530076 C1620.72,334.530076 1652.47,303.080076 1652.47,256.340076 L1652.47,256.340076 Z",
            id: "Shape",
            fill: "#F5F9FA",
            fillRule: "nonzero"
        }), r.createElement("path", {
            d: "M1896.4,273.390076 C1896.4,327.180076 1861.4,360.700076 1808.5,360.700076 C1756.18,360.700076 1721.2,327.180076 1721.2,273.390076 L1721.2,156.390076 L1749.12,156.390076 L1749.12,273.390076 C1749.12,311.310076 1772.94,334.530076 1808.5,334.530076 C1844.36,334.530076 1868.5,311.310076 1868.5,273.390076 L1868.5,156.390076 L1896.43,156.390076 L1896.4,273.390076 Z",
            id: "Path",
            fill: "#F5F9FA",
            fillRule: "nonzero"
        }), r.createElement("polygon", {
            id: "Path",
            fill: "#F5F9FA",
            fillRule: "nonzero",
            points: "2121.22 356.280076 2093.88 356.280076 1974.24 203.430076 1974.24 356.280076 1946.32 356.280076 1946.32 156.400076 1972.77 156.400076 2093 310.130076 2093 156.400076 2121.22 156.400076"
        }), r.createElement("path", {
            d: "M2349.57,255.170076 C2349.57,318.070076 2306.36,358.640076 2248.15,358.640076 C2222.58,358.640076 2191.42,357.170076 2175.55,356.280076 L2175.55,156.400076 C2191.42,155.510076 2220.55,154.040046 2244.34,154.040046 C2306.36,154.000076 2349.57,193.430076 2349.57,255.170076 Z M2320.18,255.170076 C2320.18,209.020076 2289.31,179.920076 2244.34,179.920076 C2231.4,179.920076 2216.71,180.500076 2203.48,181.090076 L2203.48,331.590076 C2217.88,332.180076 2234.05,332.480076 2248.15,332.480076 C2289.31,332.480076 2320.18,302.790076 2320.18,255.170076 L2320.18,255.170076 Z",
            id: "Shape",
            fill: "#F5F9FA",
            fillRule: "nonzero"
        }), r.createElement("path", {
            d: "M355.93,356.140076 C300.837517,411.12437 211.611649,411.065906 156.591269,356.009463 C101.570889,300.95302 101.570889,211.727133 156.591269,156.67069 C211.611649,101.614246 300.837517,101.555783 355.93,156.540076 L390.14,136.790076 C340.558871,81.2968903 261.870739,62.1652946 192.346001,88.700044 C122.821264,115.234793 76.8892546,181.928801 76.8892546,256.345076 C76.8892546,330.761352 122.821264,397.455359 192.346001,423.990109 C261.870739,450.524858 340.558871,431.393262 390.14,375.900076 L355.93,356.140076 Z",
            id: "Path",
            fill: "#01BBF0",
            fillRule: "nonzero"
        }), r.createElement("path", {
            d: "M239.75,214.650076 L202.67,278.880076 C199.252784,284.807111 199.255242,292.106528 202.67645,298.031259 C206.097658,303.955991 212.418428,307.606929 219.26,307.610076 L293.42,307.610076 C300.2624,307.610076 306.584631,303.958269 310.004706,298.031927 C313.42478,292.105585 313.422986,284.804737 310,278.880076 L272.92,214.650076 C269.495298,208.7298 263.174464,205.084 256.335,205.084 C249.495536,205.084 243.174702,208.7298 239.75,214.650076 Z",
            id: "Path",
            fill: "#01BBF0",
            fillRule: "nonzero"
        }), r.createElement("path", {
            d: "M424.05,395.470076 C419.75,400.630076 415.206667,405.61341 410.42,410.420076 C348.08897,472.81119 254.30681,491.500849 172.820006,457.770903 C91.333203,424.040957 38.1964792,344.53696 38.1964792,256.345076 C38.1964792,168.153193 91.333203,88.6491952 172.820006,54.9192494 C254.30681,21.1893035 348.08897,39.8789625 410.42,102.270076 C415.206667,107.070076 419.75,112.070076 424.05,117.270076 L457.75,97.8100763 C409.198696,36.0035499 334.935624,-0.0605537599 256.34,0 C114.77,0 -2.84217094e-14,114.770076 -2.84217094e-14,256.340076 C-2.84217094e-14,397.910076 114.77,512.690173 256.34,512.690173 C334.926061,512.758275 409.18573,476.714259 457.75,414.930076 L424.05,395.470076 Z",
            id: "Path",
            fill: "#01BBF0",
            fillRule: "nonzero"
        })));
        var m = ()=>r.createElement("svg", {
            width: "298px",
            height: "420px",
            viewBox: "0 0 298 420"
        }, r.createElement("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, r.createElement("g", {
            fillRule: "nonzero"
        }, r.createElement("polygon", {
            fill: "#1572B6",
            points: "27.071 386.155 0 82.535 297.45 82.535 270.354 386.106 148.543 419.876"
        }), r.createElement("polygon", {
            fill: "#33A9DC",
            points: "148.727 394.064 247.154 366.776 270.311 107.361 148.727 107.361"
        }), r.createElement("g", {
            transform: "translate(54.929000, 141.865000)"
        }, r.createElement("polygon", {
            fill: "#FFFFFF",
            points: "93.797 75.496 143.072 75.496 146.475 37.364 93.797 37.364 93.797 0.125 93.926 0.125 187.172 0.125 186.279 10.116 177.127 112.732 93.797 112.732"
        }), r.createElement("polygon", {
            fill: "#EBEBEB",
            points: "94.02 172.204 93.857 172.25 52.385 161.051 49.733 131.353 29.582 131.353 12.354 131.353 17.57 189.82 93.848 210.996 94.02 210.948"
        }), r.createElement("polygon", {
            fill: "#FFFFFF",
            points: "139.907 111.156 135.423 161.026 93.891 172.236 93.891 210.978 170.23 189.82 170.79 183.53 177.268 111.156"
        }), r.createElement("polygon", {
            fill: "#EBEBEB",
            points: "93.926 0.125 93.926 23.253 93.926 37.272 93.926 37.364 4.098 37.364 4.098 37.364 3.979 37.364 3.232 28.994 1.535 10.116 0.645 0.125"
        }), r.createElement("polygon", {
            fill: "#EBEBEB",
            points: "93.797 75.5 93.797 98.629 93.797 112.646 93.797 112.738 52.969 112.738 52.969 112.738 52.85 112.738 52.104 104.369 50.406 85.491 49.516 75.5"
        })), r.createElement("path", {
            className: "dark-path",
            d: "M233.093,15.546 L208.405,15.546 L234.079,43.405 L234.079,56.666 L181.197,56.666 L181.197,41.14 L206.866,41.14 L181.197,13.28 L181.197,0 L233.093,0 L233.093,15.546 L233.093,15.546 Z M170.715,15.546 L146.027,15.546 L171.7,43.405 L171.7,56.666 L118.818,56.666 L118.818,41.14 L144.49,41.14 L118.818,13.28 L118.818,0 L170.715,0 L170.715,15.546 L170.715,15.546 Z M108.947,16.177 L82.307,16.177 L82.307,40.49 L108.947,40.49 L108.947,56.666 L63.373,56.666 L63.373,1.42108547e-14 L108.947,1.42108547e-14 L108.947,16.177 Z",
            fill: "#000000"
        }))));
        var d = ()=>r.createElement("svg", {
            width: "640px",
            height: "120px",
            viewBox: "0 0 640 120",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, r.createElement("g", {
            id: "Logo",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, r.createElement("g", {
            id: "Type",
            transform: "translate(148.000000, 20.000000)"
        }, r.createElement("path", {
            d: "M423.302,62 L423.302,54.9 L429.692,54.9 L429.692,62 L423.302,62 Z M436.082,11.519 L436.082,18.619 L442.472,18.619 L442.472,11.519 L436.082,11.519 Z M436.082,27.352 L436.082,62 L442.472,62 L442.472,27.352 L436.082,27.352 Z M483.51,44.534 C483.51,47.019 483.084,49.362 482.161,51.563 C481.309,53.764 479.96,55.752 478.256,57.527 C474.919,60.935 470.375,62.781 465.476,62.781 C460.648,62.781 456.104,60.935 452.767,57.527 C449.288,53.977 447.442,49.362 447.442,44.534 C447.442,42.191 447.868,39.848 448.791,37.647 C451.56,30.902 458.447,26.216 465.76,26.358 C470.446,26.358 475.061,28.417 478.327,31.754 C481.664,35.162 483.51,39.777 483.51,44.534 Z M474.209,53.48 C476.552,51.066 477.83,47.942 477.83,44.534 C477.83,41.197 476.552,38.073 474.209,35.73 C471.937,33.316 468.813,32.038 465.476,32.038 C458.66,32.038 453.122,37.647 453.122,44.534 C453.122,47.942 454.4,51.066 456.743,53.48 C459.086,55.823 462.21,57.101 465.476,57.101 C468.813,57.101 471.937,55.823 474.209,53.48 Z",
            id: "cssreference.io-copy",
            fill: "#B5B5B5"
        }), r.createElement("path", {
            className: "dark-path",
            d: "M29.678,50.001 C27.832,52.983 24.637,54.971 20.945,54.971 C15.265,54.971 10.65,50.285 10.65,44.534 C10.65,38.712 15.265,34.097 20.945,34.097 C24.069,34.097 26.838,35.517 28.755,37.789 L35.003,33.032 C34.577,32.535 34.151,32.038 33.725,31.612 C30.317,28.133 25.773,26.287 20.945,26.287 C16.046,26.287 11.502,28.133 8.094,31.612 C4.686,35.091 2.84,39.635 2.84,44.534 C2.84,49.362 4.686,53.977 8.094,57.385 C11.502,60.864 16.046,62.781 20.945,62.781 C25.773,62.781 30.317,60.864 33.725,57.385 C34.719,56.32 35.642,55.184 36.423,53.906 L29.678,50.001 Z M64.681,45.599 C62.693,44.037 60.137,42.972 57.865,42.049 C57.652,41.978 57.439,41.836 57.155,41.765 C55.38,40.984 53.463,40.203 52.185,39.209 C50.836,38.286 50.197,37.292 50.197,36.227 C50.197,34.381 52.256,33.032 55.096,33.032 C56.232,33.032 57.297,33.245 58.078,33.671 C58.93,34.097 59.498,34.665 59.853,35.446 L60.137,36.014 L67.521,33.316 L67.095,32.606 C64.965,28.63 60.492,26.287 55.167,26.287 C51.688,26.287 48.422,27.352 46.15,29.198 C43.736,31.115 42.458,33.671 42.458,36.582 C42.458,39.351 43.594,41.623 46.008,43.611 C47.996,45.244 50.623,46.451 52.895,47.374 L53.037,47.445 C55.948,48.652 59.924,50.285 59.924,52.841 C59.924,53.764 59.427,54.616 58.362,55.184 C57.297,55.823 55.877,56.107 54.315,56.107 C51.12,56.107 48.493,54.687 47.357,52.273 L47.144,51.705 L39.973,54.261 L40.257,54.9 C42.316,59.799 47.641,62.781 54.244,62.781 C58.007,62.781 61.486,61.858 64.042,60.154 C66.811,58.237 68.302,55.61 68.302,52.486 C68.302,49.717 67.095,47.516 64.681,45.599 Z M97.27,45.599 C95.282,44.037 92.726,42.972 90.454,42.049 C90.241,41.978 90.028,41.836 89.744,41.765 C87.969,40.984 86.052,40.203 84.774,39.209 C83.425,38.286 82.786,37.292 82.786,36.227 C82.786,34.381 84.845,33.032 87.685,33.032 C88.821,33.032 89.886,33.245 90.667,33.671 C91.519,34.097 92.087,34.665 92.442,35.446 L92.726,36.014 L100.11,33.316 L99.684,32.606 C97.554,28.63 93.081,26.287 87.756,26.287 C84.277,26.287 81.011,27.352 78.739,29.198 C76.325,31.115 75.047,33.671 75.047,36.582 C75.047,39.351 76.183,41.623 78.597,43.611 C80.585,45.244 83.212,46.451 85.484,47.374 L85.626,47.445 C88.537,48.652 92.513,50.285 92.513,52.841 C92.513,53.764 92.016,54.616 90.951,55.184 C89.886,55.823 88.466,56.107 86.904,56.107 C83.709,56.107 81.082,54.687 79.946,52.273 L79.733,51.705 L72.562,54.261 L72.846,54.9 C74.905,59.799 80.23,62.781 86.833,62.781 C90.596,62.781 94.075,61.858 96.631,60.154 C99.4,58.237 100.891,55.61 100.891,52.486 C100.891,49.717 99.684,47.516 97.27,45.599 Z M126.735,26.855 L126.735,35.872 C126.664,35.872 126.593,35.801 126.522,35.801 C125.599,35.517 124.676,35.375 123.753,35.375 C121.268,35.375 118.854,36.298 117.221,38.073 C116.369,38.996 115.801,40.132 115.446,41.339 C115.091,42.475 115.091,43.611 115.091,44.818 L115.091,62 L106.571,62 L106.571,27.352 L115.091,27.352 L115.091,32.464 C115.091,32.464 118.854,26.429 126.735,26.855 Z M165.288,40.487 L165.856,42.759 L138.521,49.149 C140.58,53.409 145.337,55.823 150.023,54.758 C153.147,54.048 155.703,51.918 157.052,48.936 L164.152,52.202 C163.016,54.616 161.383,56.888 159.324,58.592 C157.123,60.438 154.638,61.716 151.798,62.355 C147.112,63.42 142.284,62.639 138.166,60.012 C134.048,57.456 131.208,53.409 130.072,48.652 C129.007,43.966 129.788,39.067 132.273,34.949 C134.829,30.76 138.805,27.92 143.562,26.784 C148.248,25.719 153.076,26.5 157.194,29.127 C160.176,30.973 162.448,33.6 163.939,36.653 C164.507,37.86 165.004,39.138 165.288,40.487 Z M137.527,42.83 L155.987,38.499 C153.644,35.162 149.455,33.458 145.337,34.381 C141.148,35.375 138.166,38.783 137.527,42.83 Z M184.813,23.66 C184.884,23.234 184.884,22.737 184.955,22.311 C185.239,21.033 185.878,19.613 187.227,19.258 C189.073,18.619 191.274,19.258 193.049,19.826 L195.676,11.732 C192.694,10.738 189.925,10.383 187.511,10.525 C185.097,10.738 182.967,11.519 181.263,12.868 C176.435,16.489 176.364,22.666 176.364,23.731 L176.364,27.636 L169.406,27.636 L169.406,35.446 L176.364,35.446 L176.364,62 L184.884,62 L184.884,35.446 L193.333,35.446 L193.333,27.636 L184.884,27.636 C184.884,26.358 184.742,25.009 184.813,23.66 Z M233.519,40.487 L234.087,42.759 L206.752,49.149 C208.811,53.409 213.568,55.823 218.254,54.758 C221.378,54.048 223.934,51.918 225.283,48.936 L232.383,52.202 C231.247,54.616 229.614,56.888 227.555,58.592 C225.354,60.438 222.869,61.716 220.029,62.355 C215.343,63.42 210.515,62.639 206.397,60.012 C202.279,57.456 199.439,53.409 198.303,48.652 C197.238,43.966 198.019,39.067 200.504,34.949 C203.06,30.76 207.036,27.92 211.793,26.784 C216.479,25.719 221.307,26.5 225.425,29.127 C228.407,30.973 230.679,33.6 232.17,36.653 C232.738,37.86 233.235,39.138 233.519,40.487 Z M205.758,42.83 L224.218,38.499 C221.875,35.162 217.686,33.458 213.568,34.381 C209.379,35.375 206.397,38.783 205.758,42.83 Z M259.931,26.855 L259.931,35.872 C259.86,35.872 259.789,35.801 259.718,35.801 C258.795,35.517 257.872,35.375 256.949,35.375 C254.464,35.375 252.05,36.298 250.417,38.073 C249.565,38.996 248.997,40.132 248.642,41.339 C248.287,42.475 248.287,43.611 248.287,44.818 L248.287,62 L239.767,62 L239.767,27.352 L248.287,27.352 L248.287,32.464 C248.287,32.464 252.05,26.429 259.931,26.855 Z M298.484,40.487 L299.052,42.759 L271.717,49.149 C273.776,53.409 278.533,55.823 283.219,54.758 C286.343,54.048 288.899,51.918 290.248,48.936 L297.348,52.202 C296.212,54.616 294.579,56.888 292.52,58.592 C290.319,60.438 287.834,61.716 284.994,62.355 C280.308,63.42 275.48,62.639 271.362,60.012 C267.244,57.456 264.404,53.409 263.268,48.652 C262.203,43.966 262.984,39.067 265.469,34.949 C268.025,30.76 272.001,27.92 276.758,26.784 C281.444,25.719 286.272,26.5 290.39,29.127 C293.372,30.973 295.644,33.6 297.135,36.653 C297.703,37.86 298.2,39.138 298.484,40.487 Z M270.723,42.83 L289.183,38.499 C286.84,35.162 282.651,33.458 278.533,34.381 C274.344,35.375 271.362,38.783 270.723,42.83 Z M330.505,62 L330.505,45.954 C330.505,43.185 330.647,39.422 328.73,37.221 C327.026,35.233 324.47,34.31 321.843,34.452 C318.932,34.523 316.731,35.375 315.169,37.221 C313.181,39.422 313.252,42.759 313.252,45.599 L313.252,62 L304.732,62 L304.732,27.281 L313.252,27.281 L313.252,32.464 C313.252,32.038 317.299,26.145 325.677,26.713 C331.641,27.139 336.043,30.618 337.889,36.227 C339.238,40.132 339.238,44.321 339.238,48.439 L339.238,62 L330.505,62 Z M371.046,50.001 C369.2,52.983 366.005,54.971 362.313,54.971 C356.633,54.971 352.018,50.285 352.018,44.534 C352.018,38.712 356.633,34.097 362.313,34.097 C365.437,34.097 368.206,35.517 370.123,37.789 L376.371,33.032 C375.945,32.535 375.519,32.038 375.093,31.612 C371.685,28.133 367.141,26.287 362.313,26.287 C357.414,26.287 352.87,28.133 349.462,31.612 C346.054,35.091 344.208,39.635 344.208,44.534 C344.208,49.362 346.054,53.977 349.462,57.385 C352.87,60.864 357.414,62.781 362.313,62.781 C367.141,62.781 371.685,60.864 375.093,57.385 C376.087,56.32 377.01,55.184 377.791,53.906 L371.046,50.001 Z M416.344,40.487 L416.912,42.759 L389.577,49.149 C391.636,53.409 396.393,55.823 401.079,54.758 C404.203,54.048 406.759,51.918 408.108,48.936 L415.208,52.202 C414.072,54.616 412.439,56.888 410.38,58.592 C408.179,60.438 405.694,61.716 402.854,62.355 C398.168,63.42 393.34,62.639 389.222,60.012 C385.104,57.456 382.264,53.409 381.128,48.652 C380.063,43.966 380.844,39.067 383.329,34.949 C385.885,30.76 389.861,27.92 394.618,26.784 C399.304,25.719 404.132,26.5 408.25,29.127 C411.232,30.973 413.504,33.6 414.995,36.653 C415.563,37.86 416.06,39.138 416.344,40.487 Z M388.583,42.83 L407.043,38.499 C404.7,35.162 400.511,33.458 396.393,34.381 C392.204,35.375 389.222,38.783 388.583,42.83 Z",
            id: "cssreference.io-copy-2",
            fill: "#000000"
        })), r.createElement("g", {
            id: "Icon",
            transform: "translate(4.000000, -4.000000)"
        }, r.createElement("path", {
            d: "M66.030465,49.8297131 C73.9812066,36.0525009 86.8716886,36.0521248 94.8226473,49.8297131 L118.970214,91.6731243 C126.920956,105.450336 120.462822,116.618974 104.574123,116.618974 L56.2789894,116.618974 C40.3775062,116.618974 33.9319396,105.450713 41.8828983,91.6731243 L66.030465,49.8297131 Z",
            id: "Triangle-Copy-3",
            fill: "#00EBA0",
            opacity: "0.660000026",
            transform: "translate(80.427450, 79.346492) rotate(90.000000) translate(-80.427450, -79.346492) "
        }), r.createElement("path", {
            d: "M43.8068882,32.6656194 C54.4069859,14.2975472 71.5925396,14.2965069 82.1932377,32.6656194 L108.7655,78.7105932 C119.365597,97.0786653 110.773721,111.96893 89.5504,111.96893 L36.4497259,111.96893 C15.2374217,111.96893 6.63392822,97.0797057 17.2346263,78.7105932 L43.8068882,32.6656194 Z",
            id: "Triangle-Copy-2",
            fill: "#00D1B2",
            opacity: "0.860000014",
            transform: "translate(63.000000, 58.984465) rotate(90.000000) translate(-63.000000, -58.984465) "
        }))));
        var u = ()=>r.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 48 48",
            height: "480px",
            width: "480px"
        }, r.createElement("defs", null, r.createElement("linearGradient", {
            gradientUnits: "userSpaceOnUse",
            id: "drawing-linear-gradient",
            x1: "22.98",
            x2: "26.48",
            y1: "23.9",
            y2: "28.27"
        }, r.createElement("stop", {
            offset: "0.04",
            stopColor: "#fbb480"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#c27c4a"
        })), r.createElement("linearGradient", {
            id: "drawing-linear-gradient-2",
            x1: "7.85",
            x2: "11.63",
            y1: "35.07",
            y2: "39.53"
        }), r.createElement("linearGradient", {
            id: "drawing-linear-gradient-3",
            x1: "7.26",
            x2: "12.14",
            y1: "33.38",
            y2: "38.26"
        }), r.createElement("linearGradient", {
            id: "drawing-linear-gradient-4",
            x1: "35.06",
            x2: "41.75",
            y1: "9.61",
            y2: "16.3"
        }), r.createElement("linearGradient", {
            id: "drawing-linear-gradient-5",
            x1: "32.45",
            x2: "41.29",
            y1: "6.23",
            y2: "17.91"
        }), r.createElement("linearGradient", {
            gradientTransform: "translate(21.95 -5.88) rotate(44.99)",
            gradientUnits: "userSpaceOnUse",
            id: "drawing-linear-gradient-6",
            x1: "17.07",
            x2: "22.48",
            y1: "22.56",
            y2: "27.98"
        }, r.createElement("stop", {
            offset: "0.01",
            stopColor: "#ffdc2e"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#f79139"
        })), r.createElement("linearGradient", {
            gradientTransform: "translate(28.21 -8.47) rotate(45)",
            gradientUnits: "userSpaceOnUse",
            id: "drawing-linear-gradient-7",
            x1: "22.57",
            x2: "26.35",
            y1: "28.06",
            y2: "31.84"
        }, r.createElement("stop", {
            offset: "0.01",
            stopColor: "#f46000"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#de722c"
        })), r.createElement("linearGradient", {
            gradientTransform: "translate(25.08 -7.17) rotate(45)",
            gradientUnits: "userSpaceOnUse",
            id: "drawing-linear-gradient-8",
            x1: "20.21",
            x2: "24.85",
            y1: "25.7",
            y2: "30.35"
        }, r.createElement("stop", {
            offset: "0.01",
            stopColor: "#f99d46"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#f46000"
        })), r.createElement("linearGradient", {
            gradientTransform: "translate(23.66 -19.41) rotate(44.98)",
            gradientUnits: "userSpaceOnUse",
            id: "drawing-linear-gradient-9",
            x1: "34.09",
            x2: "36.35",
            y1: "17.69",
            y2: "19.95"
        }, r.createElement("stop", {
            offset: "0.01",
            stopColor: "#a1a1a1"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#828282"
        })), r.createElement("linearGradient", {
            gradientTransform: "translate(17.4 -16.81) rotate(44.98)",
            gradientUnits: "userSpaceOnUse",
            id: "drawing-linear-gradient-10",
            x1: "27.79",
            x2: "30.61",
            y1: "11.39",
            y2: "14.22"
        }, r.createElement("stop", {
            offset: "0.01",
            stopColor: "#fafafa"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#dedede"
        })), r.createElement("linearGradient", {
            gradientTransform: "translate(20.55 -18.12) rotate(45)",
            gradientUnits: "userSpaceOnUse",
            id: "drawing-linear-gradient-11",
            x1: "30.43",
            x2: "34.61",
            y1: "14.03",
            y2: "18.21"
        }, r.createElement("stop", {
            offset: "0.01",
            stopColor: "#d4d4d4"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#a6a6a6"
        })), r.createElement("linearGradient", {
            gradientTransform: "translate(23.67 -19.41) rotate(44.99)",
            gradientUnits: "userSpaceOnUse",
            id: "drawing-linear-gradient-12",
            x1: "33.9",
            x2: "36.13",
            y1: "17.5",
            y2: "19.73"
        }, r.createElement("stop", {
            offset: "0.01",
            stopColor: "#b2b2b2"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#939393"
        })), r.createElement("linearGradient", {
            gradientTransform: "translate(17.41 -16.82) rotate(44.99)",
            gradientUnits: "userSpaceOnUse",
            id: "drawing-linear-gradient-13",
            x1: "28.07",
            x2: "30.21",
            y1: "11.67",
            y2: "13.81"
        }, r.createElement("stop", {
            offset: "0.01",
            stopColor: "#fafafa"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#efefef"
        })), r.createElement("linearGradient", {
            gradientTransform: "translate(20.55 -18.12) rotate(45)",
            gradientUnits: "userSpaceOnUse",
            id: "drawing-linear-gradient-14",
            x1: "30.39",
            x2: "34.73",
            y1: "14",
            y2: "18.34"
        }, r.createElement("stop", {
            offset: "0.01",
            stopColor: "#e5e5e5"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#b7b7b7"
        }))), r.createElement("title", null), r.createElement("g", {
            id: "icons"
        }, r.createElement("path", {
            className: "drawing-module--cls1--0hJCn",
            d: "M41.43,11.27,36.61,6.46a2.8,2.8,0,0,0-4,0L8,31.06,6.27,38.73l3.06,3.06,7.49-1.94,24.61-24.6A2.83,2.83,0,0,0,41.43,11.27Z"
        }), r.createElement("polygon", {
            className: "drawing-module--cls2--g2h-P",
            points: "7.24 39.7 10.56 33.59 14.29 37.32 8.19 40.65 7.24 39.7"
        }), r.createElement("polygon", {
            className: "drawing-module--cls3--0erfK",
            points: "9.33 41.78 16.82 39.85 18.45 38.23 14.29 37.32 8.19 40.65 9.33 41.78"
        }), r.createElement("path", {
            className: "drawing-module--cls4--Yvker",
            d: "M7.33,42.3l2-.51L6.27,38.73s-.21.91-.46,2S6.23,42.58,7.33,42.3Z"
        }), r.createElement("path", {
            className: "drawing-module--cls5--duusc",
            d: "M41.43,11.27,36.61,6.46a2.8,2.8,0,0,0-4,0L29.92,9.17l2.53,2.53,3.73,3.73L38.71,18l2.72-2.71A2.83,2.83,0,0,0,41.43,11.27Z"
        }), r.createElement("path", {
            className: "drawing-module--cls6--C6lCx",
            d: "M41.46,11.87,37.62,8a2.25,2.25,0,0,0-3.17,0l-3.07,3.08,2,2,3,3,2,2L41.46,15A2.24,2.24,0,0,0,41.46,11.87Z"
        }), r.createElement("rect", {
            className: "drawing-module--cls7--BQWm3",
            height: "3.58",
            transform: "translate(-11.37 19.67) rotate(-44.99)",
            width: "24.8",
            x: "5.67",
            y: "21.77"
        }), r.createElement("rect", {
            className: "drawing-module--cls8--gEM4P",
            height: "3.58",
            transform: "translate(-13.96 25.93) rotate(-45)",
            width: "24.8",
            x: "11.92",
            y: "28.03"
        }), r.createElement("rect", {
            className: "drawing-module--cls9--vHcs-",
            height: "5.27",
            transform: "translate(-12.66 22.8) rotate(-45)",
            width: "24.8",
            x: "8.79",
            y: "24.05"
        }), r.createElement("rect", {
            className: "drawing-module--cls10--mZA8E",
            height: "3.58",
            transform: "translate(-3.02 30.45) rotate(-44.98)",
            width: "7.63",
            x: "31.46",
            y: "17.08"
        }), r.createElement("rect", {
            className: "drawing-module--cls11--A8H9f",
            height: "3.58",
            transform: "translate(-0.43 24.2) rotate(-44.98)",
            width: "7.62",
            x: "25.2",
            y: "10.83"
        }), r.createElement("rect", {
            className: "drawing-module--cls12--OyEX6",
            height: "5.27",
            transform: "translate(-1.72 27.34) rotate(-45)",
            width: "7.62",
            x: "28.33",
            y: "13.11"
        }), r.createElement("rect", {
            className: "drawing-module--cls13--3oadG",
            height: "3.58",
            transform: "translate(-3.02 30.46) rotate(-44.99)",
            width: "6.15",
            x: "32.19",
            y: "17.08"
        }), r.createElement("rect", {
            className: "drawing-module--cls14--h957D",
            height: "3.58",
            transform: "translate(-0.43 24.2) rotate(-44.99)",
            width: "6.15",
            x: "25.94",
            y: "10.83"
        }), r.createElement("rect", {
            className: "drawing-module--cls15--NZNxc",
            height: "5.27",
            transform: "translate(-1.72 27.34) rotate(-45)",
            width: "6.15",
            x: "29.06",
            y: "13.11"
        })));
        var f = ()=>r.createElement("svg", {
            width: "1792",
            height: "1792",
            viewBox: "0 0 1792 1792",
            xmlns: "http://www.w3.org/2000/svg"
        }, r.createElement("path", {
            d: "M576 736v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm512 0v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm512 0v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z"
        }));
        var h = ()=>r.createElement("svg", {
            version: "1.1",
            x: "0px",
            y: "0px",
            viewBox: "0 0 323.141 322.95",
            width: "323.141px",
            height: "322.95px",
            enableBackground: "new 0 0 323.141 322.95"
        }, r.createElement("g", null, r.createElement("polygon", {
            fill: "#F0AD00",
            points: "161.649,152.782 231.514,82.916 91.783,82.916"
        }), r.createElement("polygon", {
            fill: "#7FD13B",
            points: "8.867,0 79.241,70.375 232.213,70.375 161.838,0"
        }), r.createElement("rect", {
            fill: "#7FD13B",
            x: "192.99",
            y: "107.392",
            transform: "matrix(0.7071 0.7071 -0.7071 0.7071 186.4727 -127.2386)",
            width: "107.676",
            height: "108.167"
        }), r.createElement("polygon", {
            fill: "#60B5CC",
            points: "323.298,143.724 323.298,0 179.573,0"
        }), r.createElement("polygon", {
            fill: "#5A6378",
            points: "152.781,161.649 0,8.868 0,314.432"
        }), r.createElement("polygon", {
            fill: "#F0AD00",
            points: "255.522,246.655 323.298,314.432 323.298,178.879"
        }), r.createElement("polygon", {
            fill: "#60B5CC",
            points: "161.649,170.517 8.869,323.298 314.43,323.298"
        })));
        var p = ()=>r.createElement("svg", {
            height: "56.7px",
            version: "1.1",
            viewBox: "0 0 56.7 56.7",
            width: "56.7px"
        }, r.createElement("path", {
            d: "M53.1719,14.5953l0.0011-0.0011l-0.0011,0.0008v-1.184c0-2.2468-1.8384-4.0852-4.0853-4.0852l-0.0012,0.0011l-0.0024,0.0018  l0.0036-0.0029H7.3962l0.0161,0.0131l-0.0161-0.012c-2.2468,0-4.0853,1.8384-4.0853,4.0853v27.9073  c0,2.2468,1.8384,4.0851,4.0853,4.0851h1.4543h38.6578v-0.001c4.2856-0.0498,5.5728-1.1102,5.6702-4.0809L53.1719,14.5953z   M46.0429,10.3258L28.1753,23.487L10.4239,10.3258H46.0429z M9.8608,20.5521l16.5508,11.4004l0.0166,0.0115L9.8513,43.4907  L9.8608,20.5521z M10.2886,44.4046l17.0151-11.8314l0.2985,0.2077c0.1716,0.1194,0.3714,0.1792,0.5712,0.1792  c0.1982,0,0.8773-0.39,0.8773-0.39l17.0197,11.8345H10.2886z M46.4973,43.4836L29.9305,31.9641l9.2394-6.3642l7.3274-5.0472V43.4836  z"
        }));
        var L = ()=>r.createElement("svg", {
            width: "259px",
            height: "100px",
            viewBox: "0 0 259 100",
            version: "1.1"
        }, r.createElement("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, r.createElement("g", {
            transform: "translate(-220.000000, -365.000000)",
            fill: "#E04E39"
        }, r.createElement("g", {
            transform: "translate(220.041404, 365.000000)"
        }, r.createElement("path", {
            d: "M253.776,68.6144704 C253.776,68.6144704 247.496,73.4864704 241.968,72.9424704 C236.44,72.3984704 238.176,60.0464704 238.176,60.0464704 C238.176,60.0464704 239.368,48.7184704 236.112,47.7664704 C232.864,46.8224704 228.856,50.7184704 228.856,50.7184704 C228.856,50.7184704 223.872,56.2464704 221.488,63.2944704 L220.832,63.5104704 C220.832,63.5104704 221.592,51.1504704 220.728,48.3344704 C220.08,46.9264704 214.12,47.0384704 213.144,49.5264704 C212.168,52.0224704 207.4,69.3584704 207.072,76.6224704 C207.072,76.6224704 197.752,84.5344704 189.632,85.8304704 C181.504,87.1344704 179.552,82.0384704 179.552,82.0384704 C179.552,82.0384704 201.656,75.8624704 200.896,58.1984704 C200.144,40.5344704 183.072,47.0704704 181.144,48.5184704 C179.272,49.9264704 169.296,55.9424704 166.384,72.6064704 C166.288,73.1664704 166.112,75.6464704 166.112,75.6464704 C166.112,75.6464704 157.552,81.3824704 152.784,82.9024704 C152.784,82.9024704 166.112,60.4704704 149.864,50.2864704 C145.294247,47.5356968 141.310992,50.0664828 138.941541,52.3903567 C137.486481,53.8174277 158.64,30.6784704 153.76,9.97447041 C151.44,0.118470412 146.512,-0.937529588 141.992,0.662470412 C135.128,3.36647041 132.528,7.37447041 132.528,7.37447041 C132.528,7.37447041 123.64,20.2704704 121.576,39.4544704 C119.52,58.6304704 116.488,81.8224704 116.488,81.8224704 C116.488,81.8224704 112.256,85.9424704 108.36,86.1584704 C104.456,86.3664704 106.192,74.5584704 106.192,74.5584704 C106.192,74.5584704 109.224,56.5744704 109.016,53.5344704 C108.792,50.5024704 108.576,48.8784704 105,47.7984704 C101.424,46.7104704 97.5200005,51.2624704 97.5200005,51.2624704 C97.5200005,51.2624704 87.2320005,66.8624704 86.3680005,69.2464704 L85.8160005,70.2304704 L85.2800005,69.5744704 C85.2800005,69.5744704 92.5360005,48.3344704 85.6080005,48.0144704 C78.6720005,47.6864704 74.1200005,55.5984704 74.1200005,55.5984704 C74.1200005,55.5984704 66.2080005,68.8224704 65.8800005,70.3344704 L65.3440005,69.6864704 C65.3440005,69.6864704 68.5920005,54.3024704 67.9440005,50.5024704 C67.2880005,46.7104704 63.7200005,47.4704704 63.7200005,47.4704704 C63.7200005,47.4704704 59.1680005,46.9264704 57.9760005,49.8544704 C56.7840005,52.7824704 52.4480005,72.1744704 51.9040005,78.3504704 C51.9040005,78.3504704 40.5280005,86.4784704 33.0480005,86.5824704 C25.5760005,86.6944704 26.3360005,81.8464704 26.3360005,81.8464704 C26.3360005,81.8464704 53.7520005,72.4624704 46.2720005,53.9344704 C42.9120005,49.1664704 39.0160005,47.6704704 33.4880005,47.7744704 C27.9600005,47.8864704 21.1040005,51.2544704 16.6640005,61.2224704 C14.5360005,65.9744704 13.7680005,70.4944704 13.3280005,73.9024704 C13.3280005,73.9024704 8.53600048,74.8864704 5.93600048,72.7184704 C3.32800048,70.5504704 1.99200048,72.7184704 1.99200048,72.7184704 C1.99200048,72.7184704 -2.47199952,78.4144704 1.96800048,80.1424704 C6.41600048,81.8784704 13.3440005,82.6864704 13.3440005,82.6864704 C13.9840005,85.7184704 15.8320005,90.8784704 21.2480005,94.9824704 C29.3760005,101.15847 44.9680005,94.4144704 44.9680005,94.4144704 L51.3600005,90.8304704 C51.3600005,90.8304704 51.5760005,96.6944704 56.2400005,97.5504704 C60.8960005,98.4064704 62.8480005,97.5344704 70.9760005,77.8144704 C75.7440005,67.7344704 76.0720005,68.2784704 76.0720005,68.2784704 C76.6080005,68.1664704 72.9280005,87.4544704 74.3360005,92.6544704 C75.7440005,97.8624704 81.9200005,97.3184704 81.9200005,97.3184704 C81.9200005,97.3184704 85.2800005,97.9664704 87.9920005,88.4304704 C90.6960005,78.8944704 95.9040005,68.3824704 95.9040005,68.3824704 C96.5440005,68.3824704 94.2720005,88.1024704 97.7360005,94.3904704 C101.208,100.67847 110.2,96.5024704 110.2,96.5024704 C110.2,96.5024704 116.488,93.3344704 117.464,92.3584704 C117.464,92.3584704 124.92,98.7104704 135.44,97.5584704 C158.96,92.9264704 167.328,86.6704704 167.328,86.6704704 C167.328,86.6704704 171.368,96.9104704 183.888,97.8624704 C198.184,98.9424704 205.992,89.9504704 205.992,89.9504704 C205.992,89.9504704 205.88,95.7984704 210.864,97.8624704 C215.856,99.9184704 219.208,88.3424704 219.208,88.3424704 L227.552,65.3504704 C228.312,65.3504704 228.744,80.3024704 236.984,82.6864704 C245.216,85.0704704 255.944,77.1024704 255.944,77.1024704 C255.944,77.1024704 258.544,75.6704704 258.112,71.3344704 C257.672,66.9984704 253.776,68.6144704 253.776,68.6144704 Z M36.7360005,57.7664704 C39.6560005,60.5824704 38.5760005,66.6464704 33.0480005,70.4384704 C27.5280005,74.2384704 25.0320005,73.4784704 25.0320005,73.4784704 C25.3600005,60.5824704 33.8160005,54.9424704 36.7360005,57.7664704 Z M144.552,13.2304704 C146.392,22.9824704 128.408,52.0224704 128.408,52.0224704 C128.624,45.5184704 135.016,23.5264704 135.016,23.5264704 C135.016,23.5264704 142.704,3.47847041 144.552,13.2304704 Z M126.776,87.2384704 C126.776,87.2384704 125.368,82.4704704 129.376,69.1424704 C133.392,55.8144704 142.816,61.0144704 142.816,61.0144704 C142.816,61.0144704 149.32,65.9984704 144.224,79.3264704 C139.136,92.6544704 126.776,87.2384704 126.776,87.2384704 Z M181.608,61.1264704 C186.048,52.9984704 189.52,57.4384704 189.52,57.4384704 C189.52,57.4384704 193.312,61.5584704 188.976,67.7344704 C184.64,73.9104704 178.36,73.4784704 178.36,73.4784704 C178.36,73.4784704 177.168,69.2464704 181.608,61.1264704 Z"
        }), r.createElement("path", {
            d: "M225.958879,94.0133376 L225.958879,92.4572757 L226.945826,92.4572757 C227.082702,92.4572757 227.219578,92.4716836 227.363657,92.4860916 C227.507737,92.5077036 227.644613,92.5437235 227.759877,92.5941515 C227.882345,92.6445794 227.975997,92.7166193 228.048036,92.8102712 C228.12728,92.9039231 228.1633,93.0335949 228.1633,93.1920827 C228.1633,93.5522822 228.05524,93.7828099 227.839121,93.8764618 C227.623001,93.9701137 227.342045,94.0133376 227.003458,94.0133376 L225.958879,94.0133376 Z M224.784629,91.5423689 L224.784629,97.4640491 L225.958879,97.4640491 L225.958879,94.9354484 L226.693686,94.9354484 L228.134484,97.4640491 L229.366367,97.4640491 L227.781489,94.8778165 C227.997609,94.8562045 228.19932,94.8129806 228.393828,94.7481446 C228.581132,94.6833087 228.746824,94.5896569 228.883699,94.467189 C229.027779,94.3447212 229.135839,94.1862334 229.215083,93.9917256 C229.301531,93.7972179 229.337551,93.5666902 229.337551,93.2929386 C229.337551,92.6517834 229.135839,92.197932 228.73962,91.9385883 C228.336196,91.6720407 227.759877,91.5423689 227.017866,91.5423689 L224.784629,91.5423689 Z M222.904387,94.510413 C222.904387,93.9052778 223.005243,93.3505705 223.214159,92.8462911 C223.423075,92.3420118 223.70403,91.9097724 224.06423,91.5423689 C224.417225,91.1749653 224.842261,90.8868057 225.324928,90.67789 C225.814799,90.4689743 226.333487,90.3681184 226.888194,90.3681184 C227.435697,90.3681184 227.954385,90.4689743 228.437052,90.67789 C228.926923,90.8868057 229.344755,91.1749653 229.704954,91.5423689 C230.065154,91.9097724 230.346109,92.3420118 230.562229,92.8462911 C230.771145,93.3505705 230.879205,93.9052778 230.879205,94.510413 C230.879205,95.1155482 230.771145,95.6702554 230.562229,96.1817388 C230.346109,96.6860181 230.065154,97.1326655 229.704954,97.500069 C229.344755,97.8746765 228.926923,98.1628362 228.437052,98.3717519 C227.954385,98.5806676 227.435697,98.6815235 226.888194,98.6815235 C226.333487,98.6815235 225.814799,98.5806676 225.324928,98.3717519 C224.842261,98.1628362 224.417225,97.8746765 224.06423,97.500069 C223.70403,97.1326655 223.423075,96.6860181 223.214159,96.1817388 C223.005243,95.6702554 222.904387,95.1155482 222.904387,94.510413 Z M221.456385,94.510413 C221.456385,95.3244639 221.607669,96.0520669 221.903033,96.7004261 C222.2056,97.3559892 222.60182,97.9106965 223.098895,98.3717519 C223.603174,98.8328073 224.179494,99.1858028 224.835057,99.4307385 C225.49062,99.6756742 226.174999,99.798142 226.888194,99.798142 C227.608593,99.798142 228.292972,99.6756742 228.948535,99.4307385 C229.604098,99.1858028 230.180418,98.8328073 230.684697,98.3717519 C231.181772,97.9106965 231.577992,97.3559892 231.880559,96.7004261 C232.175923,96.0520669 232.320003,95.3244639 232.320003,94.510413 C232.320003,93.71077 232.175923,92.983167 231.880559,92.3348078 C231.577992,91.6792447 231.181772,91.1245374 230.684697,90.670686 C230.180418,90.2096306 229.604098,89.8566351 228.948535,89.6116994 C228.292972,89.3595597 227.608593,89.2370919 226.888194,89.2370919 C226.174999,89.2370919 225.49062,89.3595597 224.835057,89.6116994 C224.179494,89.8566351 223.603174,90.2096306 223.098895,90.670686 C222.60182,91.1245374 222.2056,91.6792447 221.903033,92.3348078 C221.607669,92.983167 221.456385,93.71077 221.456385,94.510413 Z"
        })))));
        var g = ()=>r.createElement("svg", {
            width: "1792",
            height: "1792",
            viewBox: "0 0 1792 1792",
            xmlns: "http://www.w3.org/2000/svg"
        }, r.createElement("path", {
            d: "M1408 928v320q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h704q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-320q0-14 9-23t23-9h64q14 0 23 9t9 23zm384-864v512q0 26-19 45t-45 19-45-19l-176-176-652 652q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l652-652-176-176q-19-19-19-45t19-45 45-19h512q26 0 45 19t19 45z"
        }));
        var E = ()=>r.createElement("svg", {
            width: "960px",
            height: "256px",
            viewBox: "0 0 960 256",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, r.createElement("defs", null, r.createElement("linearGradient", {
            x1: "-19.5747166%",
            y1: "35.9950429%",
            x2: "63.1216516%",
            y2: "79.4279421%",
            id: "linearGradient-1"
        }, r.createElement("stop", {
            stopColor: "#D2F2F5",
            offset: "0%"
        }), r.createElement("stop", {
            stopColor: "#D2F2F5",
            offset: "0.037682%"
        }), r.createElement("stop", {
            stopColor: "#C8F2F5",
            offset: "25.4635%"
        }), r.createElement("stop", {
            stopColor: "#B3F2F5",
            offset: "69.0328%"
        }), r.createElement("stop", {
            stopColor: "#6BE0D5",
            offset: "100%"
        })), r.createElement("linearGradient", {
            x1: "12.8979631%",
            y1: "79.5480802%",
            x2: "64.1205707%",
            y2: "69.0207607%",
            id: "linearGradient-2"
        }, r.createElement("stop", {
            stopColor: "#B3F2F5",
            offset: "0%"
        }), r.createElement("stop", {
            stopColor: "#6BE0D5",
            offset: "100%"
        })), r.createElement("linearGradient", {
            x1: "14.5544574%",
            y1: "18.8577467%",
            x2: "90.4077547%",
            y2: "81.2147685%",
            id: "linearGradient-3"
        }, r.createElement("stop", {
            stopColor: "#B7D8EC",
            offset: "0%"
        }), r.createElement("stop", {
            stopColor: "#4AAAFF",
            offset: "25.431%"
        }), r.createElement("stop", {
            stopColor: "#B7D8EC",
            offset: "68.5422%"
        }), r.createElement("stop", {
            stopColor: "#82C9E3",
            offset: "100%"
        })), r.createElement("radialGradient", {
            cx: "8.93600361%",
            cy: "72.5252757%",
            fx: "8.93600361%",
            fy: "72.5252757%",
            r: "83.2805146%",
            gradientTransform: "translate(0.089360,0.725253),scale(1.000000,0.801041),rotate(-51.958160),scale(1.000000,1.264056),translate(-0.089360,-0.725253)",
            id: "radialGradient-4"
        }, r.createElement("stop", {
            stopColor: "#009DFF",
            offset: "0%"
        }), r.createElement("stop", {
            stopColor: "#AFD5E3",
            offset: "100%"
        })), r.createElement("linearGradient", {
            x1: "38.2817915%",
            y1: "49.9998983%",
            x2: "61.7182007%",
            y2: "33.3939372%",
            id: "linearGradient-5"
        }, r.createElement("stop", {
            stopColor: "#FFDFFF",
            offset: "0%"
        }), r.createElement("stop", {
            stopColor: "#D5B6E3",
            offset: "35.6867%"
        }), r.createElement("stop", {
            stopColor: "#9992D6",
            offset: "64.9344302%"
        }), r.createElement("stop", {
            stopColor: "#5D55AB",
            offset: "100%"
        })), r.createElement("linearGradient", {
            x1: "50.3274581%",
            y1: "13.9341178%",
            x2: "43.641249%",
            y2: "84.2711248%",
            id: "linearGradient-6"
        }, r.createElement("stop", {
            stopColor: "#D1AAE3",
            offset: "0%"
        }), r.createElement("stop", {
            stopColor: "#E2B5EB",
            offset: "48.7941%"
        }), r.createElement("stop", {
            stopColor: "#8C8CC2",
            offset: "100%"
        })), r.createElement("linearGradient", {
            x1: "82.7139311%",
            y1: "36.030301%",
            x2: "14.9471223%",
            y2: "69.6427592%",
            id: "linearGradient-7"
        }, r.createElement("stop", {
            stopColor: "#FFECE8",
            offset: "0%"
        }), r.createElement("stop", {
            stopColor: "#FFB4AD",
            offset: "99.9608%"
        }), r.createElement("stop", {
            stopColor: "#FFB4AD",
            offset: "100%"
        })), r.createElement("linearGradient", {
            x1: "79.2210911%",
            y1: "55.4115484%",
            x2: "12.1669722%",
            y2: "69.8579361%",
            id: "linearGradient-8"
        }, r.createElement("stop", {
            stopColor: "#F7DEE0",
            offset: "0%"
        }), r.createElement("stop", {
            stopColor: "#E8999A",
            offset: "100%"
        })), r.createElement("linearGradient", {
            x1: "92.2566562%",
            y1: "0%",
            x2: "16.4221896%",
            y2: "93.2783306%",
            id: "linearGradient-9"
        }, r.createElement("stop", {
            stopColor: "#F7DFE7",
            offset: "0%"
        }), r.createElement("stop", {
            stopColor: "#F8C7D8",
            offset: "34.8724%"
        }), r.createElement("stop", {
            stopColor: "#E6B4C8",
            offset: "81.3632%"
        }), r.createElement("stop", {
            stopColor: "#C391A5",
            offset: "100%"
        }), r.createElement("stop", {
            stopColor: "#C391A5",
            offset: "100%"
        })), r.createElement("linearGradient", {
            x1: "68.1707608%",
            y1: "102.100908%",
            x2: "26.6573474%",
            y2: "22.1292093%",
            id: "linearGradient-10"
        }, r.createElement("stop", {
            stopColor: "#F8C7D8",
            offset: "0%"
        }), r.createElement("stop", {
            stopColor: "#FFA4BD",
            offset: "30.0185%"
        }), r.createElement("stop", {
            stopColor: "#F1ACCB",
            offset: "63.8533%"
        }), r.createElement("stop", {
            stopColor: "#D2AABE",
            offset: "100%"
        }))), r.createElement("g", {
            id: "logo-dark",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, r.createElement("g", {
            id: "Brand/Icon",
            transform: "translate(2.000000, 2.000000)",
            opacity: "0.800000012"
        }, r.createElement("g", {
            id: "Turquoise",
            transform: "translate(0.000000, 97.000000)"
        }, r.createElement("path", {
            d: "M7.00266979,3.99908116 C49.2221843,23.9929556 107.221294,22.6599285 181,1.42108547e-14 C180.740046,31.7385752 174.740046,79.7385752 163,144 C111.677876,158.995406 59.3445422,157.662072 6,140 C-1.09116214,89.3204696 -0.756938881,43.98683 7.00266979,3.99908116 Z",
            id: "Turquoise-Shape",
            fill: "url(#linearGradient-1)"
        }), r.createElement("path", {
            d: "M7.00266979,3.99908116 C7.47364314,4.22211978 7.94658013,4.44250444 8.42148076,4.66023514 C2.20198404,56.1930499 3.10166108,100.607809 11.1197849,137.904121 C54.3013591,154.459788 105.261227,155.158393 164,140 L163.714023,140.072585 C163.478423,141.374904 163.240415,142.684042 163,144 C111.677876,158.995406 59.3445422,157.662072 6,140 C-1.09116214,89.3204696 -0.756938881,43.98683 7.00266979,3.99908116 Z",
            id: "Turquoise-Edge",
            fill: "url(#linearGradient-2)"
        })), r.createElement("g", {
            id: "Blue",
            transform: "translate(27.000000, 71.000000)"
        }, r.createElement("path", {
            d: "M17,0 C55.743145,13.0383481 101.409812,21.7050147 154,26 C154.277959,57.8250402 148.277959,105.82504 136,170 C81.3498917,162.979351 37.3486108,150.979351 3.99615751,134 C-3.23608244,79.7699115 1.09853172,35.1032448 17,0 Z",
            id: "Blue-Shape",
            fill: "url(#linearGradient-3)"
        }), r.createElement("path", {
            d: "M17,0 L17.8918351,0.29804587 C2.95842605,41.5288209 -0.56687456,85.3922364 7.3159333,131.888292 C48.6679918,150.62501 92.2292301,161.995058 138,166 L136.781678,165.89131 C136.524009,167.253426 136.26345,168.62299 136,170 C81.3498917,162.979351 37.3486108,150.979351 3.99615751,134 C-3.23608244,79.7699115 1.09853172,35.1032448 17,0 Z",
            id: "Blue-Edge",
            fill: "url(#radialGradient-4)"
        })), r.createElement("g", {
            id: "Purple",
            transform: "translate(77.000000, 24.000000)"
        }, r.createElement("path", {
            d: "M18,0 C45.3025476,27 73.9692142,51.3333333 104,73 C107.81107,105 101.81107,153 86,217 C-38.2256517,163 4.89508471,54 18,0 Z",
            id: "Purple-Shape",
            fill: "url(#linearGradient-5)"
        }), r.createElement("path", {
            d: "M18,0 C18.9145602,0.904425727 19.8306511,1.80585928 20.7482726,2.70430065 C-15.1675873,110.358159 6.72061125,181.22889 86.4110218,215.316395 L86,217 L86,217 C-38.2256517,163 4.89508471,54 18,0 Z",
            id: "Purple-Edge",
            fill: "url(#linearGradient-6)"
        })), r.createElement("g", {
            id: "Rose",
            transform: "translate(163.000000, 48.000000)"
        }, r.createElement("path", {
            d: "M214,21 C184.06993,51.1737967 171.403263,101.840463 176,173 C111.151515,164.085147 52.4848485,170.751813 0,193 C15.990676,128.107457 21.990676,80.1074567 18,49 C66.8578089,27.6806919 132.191142,18.3473585 214,21 Z",
            id: "Rose-Shape",
            fill: "url(#linearGradient-7)"
        }), r.createElement("path", {
            d: "M214,21 C184.06993,51.1737967 171.403263,101.840463 176,173 C112.032158,164.206211 54.0793767,170.57362 2.14165481,192.102229 L0.262425386,191.932045 L0.476723077,191.058291 C0.886938631,189.381288 1.29041189,187.715684 1.68714287,186.06148 C51.7876825,166.296824 109.365092,161.215977 174.41832,170.819771 C168.526813,103.456825 179.245243,53.4474214 206.573085,20.7911341 C209.034393,20.8496035 211.509563,20.9192479 214,21 Z",
            id: "Rose-Edge",
            fill: "url(#linearGradient-8)"
        })), r.createElement("g", {
            id: "Pink",
            transform: "translate(160.000000, -28.000000)"
        }, r.createElement("path", {
            d: "M183,28 C165.982791,57 158.982791,99 162,154 C55.3709308,151 7.14507359,250.555572 3,269 C-14.1386861,125.333333 45.8613139,45 183,28 Z",
            id: "Pink-Shape",
            fill: "url(#linearGradient-9)"
        }), r.createElement("path", {
            d: "M183,28 C165.982791,57 158.982791,99 162,154 C55.3709308,151 7.14507359,250.555572 3,269 C2.79157939,267.252894 2.59456649,265.515155 2.40896131,263.786782 C33.3676079,191.113381 85.3431423,153.56002 158.337352,151.126471 C154.676151,100.938184 162.690443,59.9221756 182.380058,28.0796358 L183,28 L183,28 Z",
            id: "Pink-Edge",
            fill: "url(#linearGradient-10)"
        }))), r.createElement("g", {
            id: "Brand/Type-Dark",
            transform: "translate(425.000000, 54.000000)",
            fill: "#FFFFFF"
        }, r.createElement("path", {
            d: "M84,15 C84,23.8235294 77.5107296,28.8770053 70.5,28.5 L69,28.5 C66.5150215,20.5748663 61.4678112,10.4679144 52.5,10.5 C39.6566524,10.4679144 37.8540773,27.0721925 37.5,36 L37.5,48 L61.5,46.5 L61.5,55.5 L60,55.5 L39,55.5 L39,115.5 C38.3948498,127.96123 39.6566524,129.40508 46.5,130.5 L54,132 L54,135 L0,135 L0,132 L4.5,130.5 C10.9957082,128.863636 12.2575107,127.96123 12,115.5 L12,55.5 L0,55.5 L0,55.5 L1.5,48 L12,48 L12,43.5 C13.1587983,18.5895722 39.4763948,0 61.5,0 C74.6266094,0 84,7.03877005 84,15 Z M145.5,133.5 L109.5,136.5 L108,135 L108,123 L108,123 C99.5306748,130.945087 91.7484663,136.5 81,136.5 C68.4018405,136.5 57,128.794798 57,115.5 C57,92.2398844 83.6042945,87.9393064 106.5,84 L106.5,72 C106.769939,61.7774566 100.616564,53.5346821 90,54 C81.0705521,53.5346821 77.993865,58.1936416 78,64.5 L78,70.5 L78,72 C74.7361963,72.8872832 71.1165644,73.9624277 67.5,73.5 C63.696319,73.9624277 61.8865031,70.916185 61.5,67.5 C61.8865031,60.3439306 69.1257669,54.2514451 75,51 C81.6134969,46.367052 90.8435583,43.5 100.5,43.5 C120.886503,43.5 132.650307,54.2514451 132,75 L132,114 C132.650307,127.182081 133.917178,128.615607 141,130.5 L145.5,130.5 L145.5,133.5 Z M106.5,114 L106.5,91.5 C95.1614173,93.6976744 84,97.5436047 84,109.5 C84,117.139535 88.4291339,123 96,123 C102.956693,123 106.5,118.787791 106.5,114 Z M238.5,85.5 C238.5,117 219.48913,136.5 187.5,136.5 C174.293478,136.5 160.842391,133.611111 151.5,130.5 L151.5,24 C152.233696,11.375 150.978261,9.93055556 144,9 L139.5,7.5 L139.5,4.5 L177,0 L178.5,1.5 L178.5,57 L178.5,57 C185.413043,50.1944444 194.380435,43.875 205.5,43.5 C227.201087,43.875 238.5,64.6388889 238.5,85.5 Z M213,97.5 C213,81.96 206.351562,60 190.5,60 C184.25,60 178.5,63.06 178.5,69 L178.5,114 C178.5,121.92 186.226562,127.5 193.5,127.5 C209.765625,127.5 213,110.22 213,97.5 Z M346.5,135 L310.5,136.5 L309,135 L309,123 L309,123 C300.06,131.288868 291.42,138 279,138 C261.72,138 251.28,127.479846 252,109.5 L252,67.5 C251.28,54.9270633 250.02,53.4760077 243,52.5 L238.5,51 L238.5,48 L276,43.5 L277.5,45 L277.5,105 C277.56,116.234165 283.5,122.582534 292.5,123 C301.86,122.582534 307.44,117.141075 307.5,112.5 L307.5,67.5 C307.44,54.9270633 306.18,53.4760077 300,52.5 L294,51 L294,48 L333,43.5 L333,45 L333,115.5 C333.72,127.661228 334.98,129.112284 342,130.5 L346.5,132 L346.5,135 Z M399,135 L348,135 L348,132 L352.5,130.5 C359.492958,128.847185 360.75,127.942359 360,115.5 L360,24 C360.75,11.4008043 359.492958,9.95308311 352.5,9 L348,7.5 L348,4.5 L385.5,0 L387,1.5 L387,115.5 C386.96831,127.942359 388.225352,128.847185 394.5,130.5 L399,132 L399,135 Z M489,133.5 L453,136.5 L451.5,135 L451.5,123 L451.5,123 C443.030675,130.945087 435.248466,136.5 424.5,136.5 C411.90184,136.5 400.5,128.794798 400.5,115.5 C400.5,92.2398844 427.104294,87.9393064 450,84 L450,72 C450.269939,61.7774566 444.116564,53.5346821 433.5,54 C424.570552,53.5346821 421.493865,58.1936416 421.5,64.5 L421.5,70.5 L421.5,72 C418.236196,72.8872832 414.616564,73.9624277 411,73.5 C407.196319,73.9624277 405.386503,70.916185 405,67.5 C405.386503,60.3439306 412.625767,54.2514451 418.5,51 C425.113497,46.367052 434.343558,43.5 444,43.5 C464.386503,43.5 476.150307,54.2514451 475.5,75 L475.5,114 C476.150307,127.182081 477.417178,128.615607 484.5,130.5 L489,130.5 L489,133.5 Z M450,114 L450,91.5 C438.661417,93.6976744 427.5,97.5436047 427.5,109.5 C427.5,117.139535 431.929134,123 439.5,123 C446.456693,123 450,118.787791 450,114 Z",
            id: "fabula"
        }))));
        var v = ()=>r.createElement("svg", {
            width: "1792",
            height: "1792",
            viewBox: "0 0 1792 1792",
            xmlns: "https://www.w3.org/2000/svg"
        }, r.createElement("path", {
            d: "M1579 128q35 0 60 25t25 60v1366q0 35-25 60t-60 25h-391v-595h199l30-232h-229v-148q0-56 23.5-84t91.5-28l122-1v-207q-63-9-178-9-136 0-217.5 80t-81.5 226v171h-200v232h200v595h-735q-35 0-60-25t-25-60v-1366q0-35 25-60t60-25h1366z"
        }));
        var w = ()=>r.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            id: "svg2816",
            viewBox: "0 0 1000 328.021"
        }, r.createElement("g", {
            id: "g4770"
        }, r.createElement("path", {
            d: "m 1.29236e-4,2.9584e-4 0,327.98990416 103.596810764,0 0,-118.42712 71.9824,0 27.98376,-71.6901 -99.96616,0 0,-66.551802 121.67318,0 26.53765,-71.32088216 -251.807640764,0",
            id: "path2882",
            fill: "#093697"
        }), r.createElement("path", {
            d: "M 283.48371,2.9584e-4 283.2991,327.9902 l 102.39685,0 0,-327.98990416 -102.21224,0",
            id: "path2886",
            fill: "#093697"
        }), r.createElement("path", {
            d: "m 787.52974,220.85504 39.44494,-136.565029 40.86028,136.565029 -80.30522,0 z M 881.80376,2.97448e-4 l -106.3198,0 L 657.59528,328.02097 l 98.96618,0 12.73807,-44.10633 115.36568,0 13.33805,44.10633 101.99684,0 L 881.80376,2.97448e-4",
            id: "path2890",
            fill: "#093697"
        }), r.createElement("path", {
            d: "m 456.40147,2.9584e-4 0,327.98990416 103.53528,0 0,-118.42712 71.90548,0 28.18374,-71.6901 -100.08922,0 0,-66.551802 121.71933,0 26.73764,-71.32088216 -251.99225,0",
            id: "path2894",
            fill: "#093697"
        }), r.createElement("g", {
            id: "g2896",
            fill: "#093697",
            transform: "matrix(15.384142,0,0,-15.384142,978.27772,34.968451)"
        })));
        var M = ()=>r.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 200 300",
            width: "1667",
            height: "2500"
        }, r.createElement("path", {
            id: "path0_fill",
            fill: "#0acf83",
            d: "M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
        }), r.createElement("path", {
            id: "path1_fill",
            fill: "#a259ff",
            d: "M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
        }), r.createElement("path", {
            id: "path1_fill_1_",
            fill: "#f24e1e",
            d: "M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
        }), r.createElement("path", {
            id: "path2_fill",
            fill: "#ff7262",
            d: "M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"
        }), r.createElement("path", {
            id: "path3_fill",
            fill: "#1abcfe",
            d: "M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
        }));
        var y = ()=>r.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28px",
            height: "28px",
            viewBox: "0 0 28 28"
        }, r.createElement("path", {
            d: "M25 14h-7v2h4.8c-.7 3-2.9 5.5-5.8 6.5L5.5 11c1.2-3.5 4.6-6 8.5-6 3 0 5.7 1.5 7.4 3.8l1.5-1.3C20.9 4.8 17.7 3 14 3 8.8 3 4.4 6.7 3.3 11.6l13.2 13.2C21.3 23.6 25 19.2 25 14zm-22 .1c0 2.8 1.1 5.5 3.2 7.6 2.1 2.1 4.9 3.2 7.6 3.2L3 14.1z",
            fill: "#fff"
        }), r.createElement("path", {
            d: "M14 0C6.3 0 0 6.3 0 14s6.3 14 14 14 14-6.3 14-14S21.7 0 14 0zM6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z",
            fill: "#639"
        }));
        var b = ()=>r.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "106px",
            height: "28px",
            viewBox: "0 0 106 28"
        }, r.createElement("path", {
            className: "dark-path",
            d: "M62.9 12h2.8v10h-2.8v-1.3c-1 1.5-2.3 1.6-3.1 1.6-3.1 0-5.1-2.4-5.1-5.3 0-3 2-5.3 4.9-5.3.8 0 2.3.1 3.2 1.6V12zm-5.2 5c0 1.6 1.1 2.8 2.8 2.8 1.6 0 2.8-1.2 2.8-2.8 0-1.6-1.1-2.8-2.8-2.8-1.6 0-2.8 1.2-2.8 2.8zm13.5-2.6V22h-2.8v-7.6h-1.1V12h1.1V8.6h2.8V12h1.9v2.4h-1.9zm8.5 0c-.7-.6-1.3-.7-1.6-.7-.7 0-1.1.3-1.1.8 0 .3.1.6.9.9l.7.2c.8.3 2 .6 2.5 1.4.3.4.5 1 .5 1.7 0 .9-.3 1.8-1.1 2.5s-1.8 1.1-3 1.1c-2.1 0-3.2-1-3.9-1.7l1.5-1.7c.6.6 1.4 1.2 2.2 1.2.8 0 1.4-.4 1.4-1.1 0-.6-.5-.9-.9-1l-.6-.2c-.7-.3-1.5-.6-2.1-1.2-.5-.5-.8-1.1-.8-1.9 0-1 .5-1.8 1-2.3.8-.6 1.8-.7 2.6-.7.7 0 1.9.1 3.2 1.1l-1.4 1.6zm6.1-1.1c1-1.4 2.4-1.6 3.2-1.6 2.9 0 4.9 2.3 4.9 5.3s-2 5.3-5 5.3c-.6 0-2.1-.1-3.2-1.6V22H83V5.2h2.8v8.1zm-.3 3.7c0 1.6 1.1 2.8 2.8 2.8 1.6 0 2.8-1.2 2.8-2.8 0-1.6-1.1-2.8-2.8-2.8-1.7 0-2.8 1.2-2.8 2.8zm13 3.5L93.7 12H97l3.1 5.7 2.8-5.7h3.2l-8 15.3h-3.2l3.6-6.8zM54 13.7h-7v2.8h3.7c-.6 1.9-2 3.2-4.6 3.2-2.9 0-5-2.4-5-5.3S43.1 9 46 9c1.6 0 3.2.8 4.2 2.1l2.3-1.5C51 7.5 48.6 6.3 46 6.3c-4.4 0-8 3.6-8 8.1s3.4 8.1 8 8.1 8-3.6 8-8.1c.1-.3 0-.5 0-.7z"
        }), r.createElement("path", {
            d: "M25 14h-7v2h4.8c-.7 3-2.9 5.5-5.8 6.5L5.5 11c1.2-3.5 4.6-6 8.5-6 3 0 5.7 1.5 7.4 3.8l1.5-1.3C20.9 4.8 17.7 3 14 3 8.8 3 4.4 6.7 3.3 11.6l13.2 13.2C21.3 23.6 25 19.2 25 14zm-22 .1c0 2.8 1.1 5.5 3.2 7.6 2.1 2.1 4.9 3.2 7.6 3.2L3 14.1z",
            fill: "#fff"
        }), r.createElement("path", {
            d: "M14 0C6.3 0 0 6.3 0 14s6.3 14 14 14 14-6.3 14-14S21.7 0 14 0zM6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z",
            fill: "#639"
        }));
        var x = ()=>r.createElement("svg", {
            width: "1792",
            height: "1792",
            viewBox: "0 0 1792 1792",
            xmlns: "https://www.w3.org/2000/svg"
        }, r.createElement("path", {
            d: "M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"
        }));
        var Z = ()=>r.createElement("svg", {
            width: "298px",
            height: "420px",
            viewBox: "0 0 298 420"
        }, r.createElement("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, r.createElement("g", {
            fillRule: "nonzero"
        }, r.createElement("polygon", {
            fill: "#E44F26",
            points: "27.383 386.266 0.313 82.646 297.763 82.646 270.665 386.217 148.856 419.986"
        }), r.createElement("polygon", {
            fill: "#F1662A",
            points: "149.038 394.175 247.465 366.887 270.623 107.471 149.038 107.471"
        }), r.createElement("polygon", {
            fill: "#EBEBEB",
            points: "149.038 220.08 99.763 220.08 96.359 181.948 149.038 181.948 149.038 144.709 148.909 144.709 55.663 144.709 56.555 154.7 65.707 257.316 149.038 257.316"
        }), r.createElement("polygon", {
            fill: "#EBEBEB",
            points: "149.038 316.788 148.875 316.834 107.403 305.635 104.751 275.937 84.6 275.937 67.371 275.937 72.588 334.404 148.866 355.58 149.038 355.532"
        }), r.createElement("polygon", {
            className: "dark-path",
            fill: "#000000",
            points: "27.988 0.135 46.912 0.135 46.912 18.831 64.223 18.831 64.223 0.135 83.148 0.135 83.148 56.753 64.224 56.753 64.224 37.795 46.914 37.795 46.914 56.753 27.988 56.753"
        }), r.createElement("polygon", {
            className: "dark-path",
            fill: "#000000",
            points: "108.032 18.91 91.372 18.91 91.372 0.135 143.624 0.135 143.624 18.91 126.957 18.91 126.957 56.753 108.033 56.753 108.033 18.91"
        }), r.createElement("polygon", {
            className: "dark-path",
            fill: "#000000",
            points: "151.917 0.135 171.65 0.135 183.787 20.029 195.914 0.135 215.653 0.135 215.653 56.753 196.807 56.753 196.807 28.69 183.786 48.82 183.461 48.82 170.433 28.69 170.433 56.753 151.916 56.753 151.916 0.135"
        }), r.createElement("polygon", {
            className: "dark-path",
            fill: "#000000",
            points: "225.071 0.135 244 0.135 244 38.038 270.612 38.038 270.612 56.752 225.07 56.752 225.07 0.135"
        }), r.createElement("polygon", {
            fill: "#FFFFFF",
            points: "148.909 220.08 148.909 257.316 194.763 257.316 190.441 305.61 148.909 316.82 148.909 355.562 225.249 334.404 225.808 328.114 234.559 230.079 235.467 220.08 225.433 220.08"
        }), r.createElement("polygon", {
            fill: "#FFFFFF",
            points: "148.909 144.709 148.909 167.837 148.909 181.856 148.909 181.948 238.736 181.948 238.736 181.948 238.856 181.948 239.603 173.578 241.299 154.7 242.19 144.709"
        }))));
        var z = ()=>r.createElement("svg", {
            width: "680px",
            height: "120px",
            viewBox: "0 0 680 120",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, r.createElement("g", {
            id: "Logo",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, r.createElement("g", {
            id: "Icon",
            transform: "translate(4.000000, -4.000000)"
        }, r.createElement("path", {
            d: "M44.2876517,12.0564341 C49.6516335,8.15927316 58.347608,8.15872211 63.7123483,12.0564341 L101.351043,39.4025462 C106.715025,43.2997072 109.402752,51.5699001 107.353604,57.8765306 L92.9769021,102.123469 C90.9280433,108.429208 83.8931761,113.54102 77.2619924,113.54102 L30.7380076,113.54102 C24.1077614,113.54102 17.0722464,108.4301 15.0230979,102.123469 L0.646395973,57.8765306 C-1.40246278,51.5707917 1.28421702,43.3002582 6.64895735,39.4025462 L44.2876517,12.0564341 Z",
            id: "Polygon",
            fill: "#E44D26",
            transform: "translate(54.000000, 65.000000) rotate(10.000000) translate(-54.000000, -65.000000) "
        }), r.createElement("path", {
            d: "M81.7157388,20.2923256 C85.7387252,17.3694549 92.2518988,17.3626428 96.2842612,20.2923256 L124.513282,40.8019097 C128.536268,43.7247804 130.555428,49.9170716 129.015203,54.6573979 L118.232677,87.8426021 C116.696032,92.5719062 111.430768,96.4057647 106.446494,96.4057647 L71.5535057,96.4057647 C66.5808211,96.4057647 61.3075488,92.5829284 59.7673234,87.8426021 L48.984797,54.6573979 C47.4481529,49.9280938 49.4543556,43.7315924 53.486718,40.8019097 L81.7157388,20.2923256 Z",
            id: "Polygon-Copy-2",
            fill: "#F16529",
            opacity: "0.86",
            transform: "translate(89.000000, 60.000000) rotate(-10.000000) translate(-89.000000, -60.000000) "
        })), r.createElement("g", {
            id: "Type",
            transform: "translate(148.000000, 16.000000)"
        }, r.createElement("path", {
            d: "M468.103,68 L468.103,60.9 L474.493,60.9 L474.493,68 L468.103,68 Z M480.883,17.519 L480.883,24.619 L487.273,24.619 L487.273,17.519 L480.883,17.519 Z M480.883,33.352 L480.883,68 L487.273,68 L487.273,33.352 L480.883,33.352 Z M528.311,50.534 C528.311,53.019 527.885,55.362 526.962,57.563 C526.11,59.764 524.761,61.752 523.057,63.527 C519.72,66.935 515.176,68.781 510.277,68.781 C505.449,68.781 500.905,66.935 497.568,63.527 C494.089,59.977 492.243,55.362 492.243,50.534 C492.243,48.191 492.669,45.848 493.592,43.647 C496.361,36.902 503.248,32.216 510.561,32.358 C515.247,32.358 519.862,34.417 523.128,37.754 C526.465,41.162 528.311,45.777 528.311,50.534 Z M519.01,59.48 C521.353,57.066 522.631,53.942 522.631,50.534 C522.631,47.197 521.353,44.073 519.01,41.73 C516.738,39.316 513.614,38.038 510.277,38.038 C503.461,38.038 497.923,43.647 497.923,50.534 C497.923,53.942 499.201,57.066 501.544,59.48 C503.887,61.823 507.011,63.101 510.277,63.101 C513.614,63.101 516.738,61.823 519.01,59.48 Z",
            id: "htmlreference.io-copy",
            fill: "#B5B5B5"
        }), r.createElement("path", {
            className: "dark-path",
            d: "M28.613,68 L28.613,51.954 C28.613,49.185 28.755,45.422 26.838,43.221 C25.134,41.162 22.578,40.31 19.951,40.381 C17.04,40.523 14.839,41.375 13.206,43.221 C11.289,45.422 11.36,48.759 11.36,51.599 L11.36,68 L2.84,68 L2.84,17.519 L11.36,17.519 L11.36,38.464 C11.36,38.038 15.407,32.145 23.785,32.713 C29.749,33.139 34.08,36.547 35.997,42.156 C37.346,46.132 37.346,50.321 37.346,54.439 L37.346,68 L28.613,68 Z M65.533,33.352 L56.942,33.352 L56.942,21.211 L48.422,21.211 L48.422,33.352 L41.606,33.352 L41.606,41.162 L48.422,41.162 L48.422,68 L56.942,68 L56.942,41.162 L65.533,41.162 L65.533,33.352 Z M130.143,42.227 C128.226,36.618 123.895,33.21 117.931,32.713 C109.695,32.003 104.512,36.973 102.95,39.103 C100.678,35.34 96.915,33.068 92.158,32.713 C83.78,32.145 79.733,38.038 79.733,38.464 L79.733,33.281 L71.213,33.281 L71.213,68 L79.733,68 L79.733,51.599 C79.733,48.759 79.662,45.422 81.579,43.221 C83.212,41.375 85.413,40.523 88.324,40.381 C90.951,40.31 93.507,41.233 95.211,43.221 C97.128,45.422 96.986,49.185 96.986,51.954 L96.986,68 L105.506,68 L105.506,49.682 C105.506,47.339 105.79,44.925 107.352,43.221 C108.985,41.375 111.115,40.523 114.097,40.381 C116.653,40.31 119.28,41.233 120.984,43.221 C122.901,45.422 122.759,49.185 122.759,51.954 L122.759,68 L131.492,68 L131.492,54.439 C131.492,50.321 131.492,46.132 130.143,42.227 Z M145.692,68 L137.172,68 L137.172,17.519 L145.692,17.519 L145.692,68 Z M171.536,32.855 L171.536,41.872 C171.465,41.872 171.394,41.801 171.323,41.801 C170.4,41.517 169.477,41.375 168.554,41.375 C166.069,41.375 163.655,42.298 162.022,44.073 C161.17,44.996 160.602,46.132 160.247,47.339 C159.892,48.475 159.892,49.611 159.892,50.818 L159.892,68 L151.372,68 L151.372,33.352 L159.892,33.352 L159.892,38.464 C159.892,38.464 163.655,32.429 171.536,32.855 Z M210.089,46.487 L210.657,48.759 L183.322,55.149 C185.381,59.409 190.138,61.823 194.824,60.758 C197.948,60.048 200.504,57.918 201.853,54.936 L208.953,58.202 C207.817,60.616 206.184,62.888 204.125,64.592 C201.924,66.438 199.439,67.716 196.599,68.355 C191.913,69.42 187.085,68.639 182.967,66.012 C178.849,63.456 176.009,59.409 174.873,54.652 C173.808,49.966 174.589,45.067 177.074,40.949 C179.63,36.76 183.606,33.92 188.363,32.784 C193.049,31.719 197.877,32.5 201.995,35.127 C204.977,36.973 207.249,39.6 208.74,42.653 C209.308,43.86 209.805,45.138 210.089,46.487 Z M182.328,48.83 L200.788,44.499 C198.445,41.162 194.256,39.458 190.138,40.381 C185.949,41.375 182.967,44.783 182.328,48.83 Z M229.614,29.66 C229.685,29.234 229.685,28.737 229.756,28.311 C230.04,27.033 230.679,25.613 232.028,25.258 C233.874,24.619 236.075,25.258 237.85,25.826 L240.477,17.732 C237.495,16.738 234.726,16.383 232.312,16.525 C229.898,16.738 227.768,17.519 226.064,18.868 C221.236,22.489 221.165,28.666 221.165,29.731 L221.165,33.636 L214.207,33.636 L214.207,41.446 L221.165,41.446 L221.165,68 L229.685,68 L229.685,41.446 L238.134,41.446 L238.134,33.636 L229.685,33.636 C229.685,32.358 229.543,31.009 229.614,29.66 Z M278.32,46.487 L278.888,48.759 L251.553,55.149 C253.612,59.409 258.369,61.823 263.055,60.758 C266.179,60.048 268.735,57.918 270.084,54.936 L277.184,58.202 C276.048,60.616 274.415,62.888 272.356,64.592 C270.155,66.438 267.67,67.716 264.83,68.355 C260.144,69.42 255.316,68.639 251.198,66.012 C247.08,63.456 244.24,59.409 243.104,54.652 C242.039,49.966 242.82,45.067 245.305,40.949 C247.861,36.76 251.837,33.92 256.594,32.784 C261.28,31.719 266.108,32.5 270.226,35.127 C273.208,36.973 275.48,39.6 276.971,42.653 C277.539,43.86 278.036,45.138 278.32,46.487 Z M250.559,48.83 L269.019,44.499 C266.676,41.162 262.487,39.458 258.369,40.381 C254.18,41.375 251.198,44.783 250.559,48.83 Z M304.732,32.855 L304.732,41.872 C304.661,41.872 304.59,41.801 304.519,41.801 C303.596,41.517 302.673,41.375 301.75,41.375 C299.265,41.375 296.851,42.298 295.218,44.073 C294.366,44.996 293.798,46.132 293.443,47.339 C293.088,48.475 293.088,49.611 293.088,50.818 L293.088,68 L284.568,68 L284.568,33.352 L293.088,33.352 L293.088,38.464 C293.088,38.464 296.851,32.429 304.732,32.855 Z M343.285,46.487 L343.853,48.759 L316.518,55.149 C318.577,59.409 323.334,61.823 328.02,60.758 C331.144,60.048 333.7,57.918 335.049,54.936 L342.149,58.202 C341.013,60.616 339.38,62.888 337.321,64.592 C335.12,66.438 332.635,67.716 329.795,68.355 C325.109,69.42 320.281,68.639 316.163,66.012 C312.045,63.456 309.205,59.409 308.069,54.652 C307.004,49.966 307.785,45.067 310.27,40.949 C312.826,36.76 316.802,33.92 321.559,32.784 C326.245,31.719 331.073,32.5 335.191,35.127 C338.173,36.973 340.445,39.6 341.936,42.653 C342.504,43.86 343.001,45.138 343.285,46.487 Z M315.524,48.83 L333.984,44.499 C331.641,41.162 327.452,39.458 323.334,40.381 C319.145,41.375 316.163,44.783 315.524,48.83 Z M375.306,68 L375.306,51.954 C375.306,49.185 375.448,45.422 373.531,43.221 C371.827,41.233 369.271,40.31 366.644,40.452 C363.733,40.523 361.532,41.375 359.97,43.221 C357.982,45.422 358.053,48.759 358.053,51.599 L358.053,68 L349.533,68 L349.533,33.281 L358.053,33.281 L358.053,38.464 C358.053,38.038 362.1,32.145 370.478,32.713 C376.442,33.139 380.844,36.618 382.69,42.227 C384.039,46.132 384.039,50.321 384.039,54.439 L384.039,68 L375.306,68 Z M415.847,56.001 C414.001,58.983 410.806,60.971 407.114,60.971 C401.434,60.971 396.819,56.285 396.819,50.534 C396.819,44.712 401.434,40.097 407.114,40.097 C410.238,40.097 413.007,41.517 414.924,43.789 L421.172,39.032 C420.746,38.535 420.32,38.038 419.894,37.612 C416.486,34.133 411.942,32.287 407.114,32.287 C402.215,32.287 397.671,34.133 394.263,37.612 C390.855,41.091 389.009,45.635 389.009,50.534 C389.009,55.362 390.855,59.977 394.263,63.385 C397.671,66.864 402.215,68.781 407.114,68.781 C411.942,68.781 416.486,66.864 419.894,63.385 C420.888,62.32 421.811,61.184 422.592,59.906 L415.847,56.001 Z M461.145,46.487 L461.713,48.759 L434.378,55.149 C436.437,59.409 441.194,61.823 445.88,60.758 C449.004,60.048 451.56,57.918 452.909,54.936 L460.009,58.202 C458.873,60.616 457.24,62.888 455.181,64.592 C452.98,66.438 450.495,67.716 447.655,68.355 C442.969,69.42 438.141,68.639 434.023,66.012 C429.905,63.456 427.065,59.409 425.929,54.652 C424.864,49.966 425.645,45.067 428.13,40.949 C430.686,36.76 434.662,33.92 439.419,32.784 C444.105,31.719 448.933,32.5 453.051,35.127 C456.033,36.973 458.305,39.6 459.796,42.653 C460.364,43.86 460.861,45.138 461.145,46.487 Z M433.384,48.83 L451.844,44.499 C449.501,41.162 445.312,39.458 441.194,40.381 C437.005,41.375 434.023,44.783 433.384,48.83 Z",
            id: "htmlreference.io-copy-2",
            fill: "#000000"
        }))));
        var k = ()=>r.createElement("svg", {
            x: "0px",
            y: "0px",
            viewBox: "0 0 240 234",
            width: "240px",
            height: "234px"
        }, r.createElement("g", null, r.createElement("path", {
            fill: "#261300",
            d: "M10,10h220v214H10V10z"
        }), r.createElement("path", {
            fill: "#FF7C00",
            d: "M0,0v234h240V0H0z M10,10h220v214H10V10z"
        }), r.createElement("path", {
            fill: "#FF7C00",
            d: "M83.3,132.5l-7.9,30c-0.2,0.8-0.5,1-1.5,1H59.2c-1,0-1.2-0.3-1-1.5l28.4-99.4c0.5-1.8,0.8-3.4,1-8.3 c0-0.7,0.3-1,0.8-1h21c0.7,0,1,0.2,1.2,1l31.8,107.9c0.2,0.8,0,1.3-0.8,1.3H125c-0.8,0-1.3-0.2-1.5-0.9l-8.3-30.1L83.3,132.5 L83.3,132.5z M111.1,116.3c-2.8-11.1-9.4-35.3-11.9-47h-0.2c-2.1,11.7-7.4,31.5-11.6,47H111.1z M156.1,60.7 c0-6.4,4.5-10.2,10.2-10.2c6.1,0,10.2,4.1,10.2,10.2c0,6.6-4.3,10.2-10.4,10.2C160.3,70.9,156.1,67.3,156.1,60.7L156.1,60.7z M157.3,83.4c0-0.8,0.3-1.2,1.2-1.2h15.7c0.8,0,1.2,0.3,1.2,1.2v78.9c0,0.8-0.2,1.2-1.2,1.2h-15.5c-1,0-1.3-0.5-1.3-1.3V83.4z"
        })));
        var F = ()=>r.createElement("svg", {
            width: "249px",
            height: "47px",
            viewBox: "0 0 249 47",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, r.createElement("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, r.createElement("g", {
            fill: "#ffffff",
            fillRule: "nonzero"
        }, r.createElement("path", {
            d: "M3.10692284,5.82359985 C3.10692284,2.14893328 3.03758951,1.55959996 0.992256231,1.38626663 L0.125589586,1.3169333 C-0.0824104091,1.17826664 -0.0130770775,0.554266653 0.194922917,0.450266655 C1.92825621,0.519599987 3.10692284,0.554266653 4.56292281,0.554266653 C5.94958944,0.554266653 7.12825608,0.519599987 8.86158937,0.450266655 C9.06958936,0.554266653 9.13892269,1.17826664 8.9309227,1.3169333 L8.06425605,1.38626663 C6.01892277,1.55959996 5.94958944,2.14893328 5.94958944,5.82359985 L5.94958944,18.1649329 C5.94958944,21.8395995 6.01892277,22.3249328 8.06425605,22.5689328 L8.9309227,22.6715994 C9.13892269,22.8115994 9.06958936,23.4342661 8.86158937,23.5395994 C7.12825608,23.4689327 5.94958944,23.4342661 4.56292281,23.4342661 C3.10692284,23.4342661 1.92825621,23.4689327 0.194922917,23.5395994 C-0.0130770775,23.4342661 -0.0824104091,22.8795994 0.125589586,22.6715994 L0.992256231,22.5689328 C3.03758951,22.3249328 3.10692284,21.8395995 3.10692284,18.1649329 L3.10692284,5.82359985 Z M16.5229225,4.22919989 C15.7255892,2.28786661 15.2055892,1.55986663 13.7149226,1.3865333 L13.0909226,1.31586663 C12.8482559,1.10919997 12.8829226,0.623866651 13.1602559,0.450533322 C14.1655892,0.519866654 15.2749225,0.554533319 16.7655892,0.554533319 C18.2909225,0.554533319 19.5042558,0.519866654 20.9602557,0.450533322 C21.2029224,0.589199985 21.2722557,1.10919997 21.0295891,1.31586663 L20.5095891,1.3865333 C19.1922558,1.55986663 18.9149224,1.76786662 18.8802558,2.04519995 C18.9495891,2.39186661 19.5389224,4.26386656 20.6135891,6.89853316 C22.2082557,10.9198664 23.8029223,14.906533 25.5362556,18.8585329 C26.6109223,16.5705329 28.0669222,12.9998663 28.8642555,11.1625331 C29.8695888,8.80519978 31.4989221,4.88786654 32.0882555,3.39719992 C32.3655888,2.66919993 32.4002554,2.28786661 32.4002554,2.04519995 C32.4002554,1.80253329 32.0535888,1.52519996 30.8402555,1.3865333 L30.2175888,1.31586663 C29.9735888,1.10919997 30.0442555,0.589199985 30.2855888,0.450533322 C31.2562555,0.519866654 32.5749221,0.554533319 33.8909221,0.554533319 C35.0362554,0.554533319 36.1095887,0.519866654 37.254922,0.450533322 C37.4962553,0.589199985 37.4962553,1.14386664 37.3242553,1.31586663 L36.282922,1.3865333 C35.450922,1.45586663 34.9322554,1.87053329 34.4815887,2.5998666 C33.5095888,4.22919989 32.1589221,7.03719982 30.5989222,10.5731997 L28.7255889,14.8371996 C27.3389222,18.0265329 25.7095889,22.0478661 25.1202556,23.8851994 C25.0162556,23.9545327 24.877589,23.9891994 24.7389223,23.9891994 C24.565589,23.9891994 24.3922556,23.9545327 24.2189223,23.8851994 C23.837589,22.4291994 23.213589,20.7305328 22.6242557,19.2745329 L16.5229225,4.22919989 Z M50.6695883,15.3919996 C50.4269217,14.629333 50.288255,14.525333 49.248255,14.525333 L44.0135885,14.525333 C43.1469218,14.525333 42.9389218,14.629333 42.6962552,15.3573329 L41.4829219,18.9973329 C40.9629219,20.5573328 40.7202552,21.4933328 40.7202552,21.8746661 C40.7202552,22.2906661 40.8935886,22.4986661 41.7255885,22.5679994 L42.8695885,22.6719994 C43.1122552,22.8453328 43.1122552,23.3999994 42.8002552,23.5386661 C41.8989219,23.4693327 40.8242552,23.4693327 39.1949219,23.4346661 C38.050922,23.4346661 36.802922,23.5039994 35.866922,23.5386661 C35.658922,23.3999994 35.5895887,22.8453328 35.7975887,22.6719994 L36.9415887,22.5679994 C37.7735886,22.4986661 38.5362553,22.1173328 39.0215886,20.8693328 C39.6455886,19.2746662 40.6162552,17.0213329 42.0722552,13.1386663 L45.6082551,3.77866657 C46.0935884,2.52933327 46.3015884,1.87066662 46.1975884,1.31599997 C47.0295884,1.07466664 47.6189217,0.449333322 48.0002551,0 C48.2082551,0 48.4509217,0.0693333316 48.520255,0.310666659 C48.9709217,1.83599995 49.5255884,3.43199991 50.0455883,4.95733321 L54.7949216,18.8933329 C55.8015882,21.8746661 56.2509215,22.3946661 57.7429215,22.5679994 L58.6775881,22.6719994 C58.9202548,22.8453328 58.8522548,23.3999994 58.6775881,23.5386661 C57.2562548,23.4693327 56.0442549,23.4346661 54.4829216,23.4346661 C52.8189216,23.4346661 51.5015883,23.5039994 50.4975883,23.5386661 C50.220255,23.3999994 50.184255,22.8453328 50.4269217,22.6719994 L51.432255,22.5679994 C52.1615883,22.4986661 52.6455883,22.2906661 52.6455883,21.9439995 C52.6455883,21.5626661 52.4722549,20.9386661 52.1949216,20.1066662 L50.6695883,15.3919996 Z M83.9149208,17.5417329 C83.9149208,18.5817329 83.9149208,22.7070661 84.0189208,23.6083994 C83.9495875,23.8163994 83.7415875,23.9897327 83.3602542,23.9897327 C82.9442542,23.4003994 81.9389209,22.1870661 78.9229209,18.7550662 L70.8802545,9.60173309 C69.9442545,8.52706645 67.5869212,5.68439986 66.8589213,4.92173321 L66.7895879,4.92173321 C66.6509213,5.33906653 66.6162546,6.13506651 66.6162546,7.17639982 L66.6162546,14.733733 C66.6162546,16.3630663 66.6509213,20.8697328 67.2402546,21.9097328 C67.4482546,22.2910661 68.1415879,22.4990661 69.0082545,22.5683994 L70.0829212,22.6723994 C70.2909212,22.9497328 70.2562545,23.3657327 70.0135878,23.5390661 C68.4535879,23.4697327 67.2402546,23.4350661 65.9575879,23.4350661 C64.5002546,23.4350661 63.565588,23.4697327 62.3522547,23.5390661 C62.109588,23.3657327 62.0749214,22.8803994 62.281588,22.6723994 L63.2189213,22.5683994 C64.0162547,22.4643994 64.5709213,22.2563994 64.7442546,21.8750661 C65.229588,20.6270662 65.1949213,16.3977329 65.1949213,14.733733 L65.1949213,4.71373322 C65.1949213,3.74306657 65.1602546,3.01506659 64.4322546,2.21773328 C63.945588,1.73373329 63.113588,1.4897333 62.281588,1.3857333 L61.6922547,1.31639997 C61.4855881,1.10839997 61.4855881,0.588399985 61.7629214,0.449733322 C63.2189213,0.553733319 65.0549213,0.553733319 65.6802546,0.553733319 C66.2349213,0.553733319 66.8242546,0.519066654 67.2749212,0.449733322 C67.9682546,2.21773328 72.0589211,6.79373316 73.2029211,8.0763998 L76.5655877,11.8550664 C78.9575876,14.525733 80.6562542,16.4670663 82.2855875,18.1310662 L82.3549209,18.1310662 C82.4935875,17.9577329 82.4935875,17.4030662 82.4935875,16.6750662 L82.4935875,9.25639977 C82.4935875,7.62573314 82.4589209,3.12039992 81.8002542,2.07906661 C81.5922542,1.76706662 81.0375876,1.55906663 79.6509209,1.3857333 L79.0615876,1.31639997 C78.818921,1.10839997 78.8535876,0.553733319 79.1309209,0.449733322 C80.7255876,0.519066654 81.9042542,0.553733319 83.2215875,0.553733319 C84.7122541,0.553733319 85.6135874,0.519066654 86.7922541,0.449733322 C87.0695874,0.624399984 87.0695874,1.10839997 86.8615874,1.31639997 L86.3762541,1.3857333 C85.2669208,1.55906663 84.5735875,1.83639995 84.4349208,2.11373328 C83.8455875,3.36173325 83.9149208,7.66039981 83.9149208,9.25639977 L83.9149208,17.5417329 Z M106.41212,5.06159987 C106.41212,2.49493327 106.273454,1.83626662 104.713454,1.69759996 L103.60412,1.59359996 C103.326787,1.38559997 103.361454,0.865599978 103.638787,0.726933315 C105.510787,0.553599986 107.86812,0.449599989 111.09212,0.449599989 C113.277453,0.449599989 115.35612,0.624266651 116.917453,1.42026663 C118.406787,2.14826661 119.55212,3.53493324 119.55212,5.75359986 C119.55212,8.24959979 118.094787,9.53359976 116.014787,10.5042664 C116.014787,10.8509331 116.29212,10.9549331 116.673453,11.0229331 C118.546787,11.370933 121.32012,13.1042663 121.32012,16.8135996 C121.32012,20.8349328 118.337453,23.5389327 112.097453,23.5389327 C111.09212,23.5389327 109.393454,23.4349327 107.937454,23.4349327 C106.41212,23.4349327 105.233454,23.5042661 103.950787,23.5389327 C103.742787,23.4349327 103.673454,22.8802661 103.881454,22.6722661 L104.505454,22.5682661 C106.342787,22.2562661 106.41212,21.8749328 106.41212,18.2349329 L106.41212,5.06159987 Z M139.726119,15.3919996 C139.484786,14.629333 139.344786,14.525333 138.304786,14.525333 L133.07012,14.525333 C132.203453,14.525333 131.996786,14.629333 131.752786,15.3573329 L130.539453,18.9973329 C130.019453,20.5573328 129.77812,21.4933328 129.77812,21.8746661 C129.77812,22.2906661 129.95012,22.4986661 130.78212,22.5679994 L131.92612,22.6719994 C132.168786,22.8453328 132.168786,23.3999994 131.856786,23.5386661 C130.955453,23.4693327 129.88212,23.4693327 128.251453,23.4346661 C127.108786,23.4346661 125.860786,23.5039994 124.923453,23.5386661 C124.715453,23.3999994 124.64612,22.8453328 124.855453,22.6719994 L125.999453,22.5679994 C126.831453,22.4986661 127.592786,22.1173328 128.07812,20.8693328 C128.70212,19.2746662 129.672786,17.0213329 131.128786,13.1386663 L134.66612,3.77866657 C135.151453,2.52933327 135.35812,1.87066662 135.25412,1.31599997 C136.08612,1.07466664 136.675453,0.449333322 137.056786,0 C137.266119,0 137.507453,0.0693333316 137.576786,0.310666659 C138.027453,1.83599995 138.582119,3.43199991 139.103453,4.95733321 L143.851453,18.8933329 C144.858119,21.8746661 145.308786,22.3946661 146.799453,22.5679994 L147.734119,22.6719994 C147.978119,22.8453328 147.908786,23.3999994 147.734119,23.5386661 C146.314119,23.4693327 145.100786,23.4346661 143.540786,23.4346661 C141.876786,23.4346661 140.558119,23.5039994 139.554119,23.5386661 C139.276786,23.3999994 139.240786,22.8453328 139.484786,22.6719994 L140.490119,22.5679994 C141.218119,22.4986661 141.703453,22.2906661 141.703453,21.9439995 C141.703453,21.5626661 141.530119,20.9386661 141.252786,20.1066662 L139.726119,15.3919996 Z M154.320519,5.75399986 C154.320519,2.11399995 154.251186,1.55933329 152.068519,1.38599997 L151.200519,1.31666663 C150.992519,1.17799997 151.061852,0.553999986 151.269852,0.449999989 C153.211186,0.51933332 154.389852,0.553999986 155.776519,0.553999986 C157.128519,0.553999986 158.307186,0.51933332 160.040519,0.449999989 C160.248519,0.553999986 160.317852,1.17799997 160.111186,1.31666663 L159.279186,1.38599997 C157.233852,1.55933329 157.163186,2.11399995 157.163186,5.75399986 L157.163186,17.8193329 C157.163186,20.0033328 157.267186,20.9046661 157.892519,21.5619995 C158.272519,21.9446661 158.931186,22.3606661 161.671186,22.3606661 C164.617852,22.3606661 165.345852,22.2219994 165.900519,21.9099995 C166.592519,21.4939995 167.495185,20.2459995 168.187185,18.4766662 C168.396519,18.3046662 169.055185,18.4433329 169.055185,18.6859995 C169.055185,19.0659995 168.083185,22.6033328 167.599185,23.5393327 C165.831185,23.4699994 162.536519,23.4353327 158.965852,23.4353327 L155.776519,23.4353327 C154.320519,23.4353327 153.211186,23.4699994 151.269852,23.5393327 C151.061852,23.4353327 150.992519,22.8806661 151.200519,22.6713328 L152.240519,22.5686661 C154.251186,22.3606661 154.320519,21.8753328 154.320519,18.2339995 L154.320519,5.75399986 Z M176.160385,5.75399986 C176.160385,2.11399995 176.091052,1.55933329 173.907052,1.38599997 L173.040385,1.31666663 C172.832385,1.17799997 172.901719,0.553999986 173.109719,0.449999989 C175.051052,0.51933332 176.229719,0.553999986 177.616385,0.553999986 C178.968385,0.553999986 180.147052,0.51933332 181.880385,0.449999989 C182.088385,0.553999986 182.157718,1.17799997 181.949718,1.31666663 L181.117718,1.38599997 C179.072385,1.55933329 179.003052,2.11399995 179.003052,5.75399986 L179.003052,17.8193329 C179.003052,20.0033328 179.107052,20.9046661 179.731052,21.5619995 C180.112385,21.9446661 180.771052,22.3606661 183.509718,22.3606661 C186.457718,22.3606661 187.185718,22.2219994 187.740385,21.9099995 C188.432385,21.4939995 189.335052,20.2459995 190.027052,18.4766662 C190.236385,18.3046662 190.895051,18.4433329 190.895051,18.6859995 C190.895051,19.0659995 189.923052,22.6033328 189.437718,23.5393327 C187.671052,23.4699994 184.376385,23.4353327 180.805718,23.4353327 L177.616385,23.4353327 C176.160385,23.4353327 175.051052,23.4699994 173.109719,23.5393327 C172.901719,23.4353327 172.832385,22.8806661 173.040385,22.6713328 L174.079052,22.5686661 C176.091052,22.3606661 176.160385,21.8753328 176.160385,18.2339995 L176.160385,5.75399986 Z M198.000251,5.82359985 C198.000251,2.14893328 197.930918,1.55959996 195.885585,1.38626663 L195.018918,1.3169333 C194.810918,1.17826664 194.880251,0.554266653 195.086918,0.450266655 C196.821585,0.519599987 198.000251,0.554266653 199.456251,0.554266653 C200.842918,0.554266653 202.022918,0.519599987 203.754918,0.450266655 C203.962918,0.554266653 204.032251,1.17826664 203.824251,1.3169333 L202.957585,1.38626663 C200.913585,1.55959996 200.842918,2.14893328 200.842918,5.82359985 L200.842918,18.1649329 C200.842918,21.8395995 200.913585,22.3249328 202.957585,22.5689328 L203.824251,22.6715994 C204.032251,22.8115994 203.962918,23.4342661 203.754918,23.5395994 C202.022918,23.4689327 200.842918,23.4342661 199.456251,23.4342661 C198.000251,23.4342661 196.821585,23.4689327 195.086918,23.5395994 C194.880251,23.4342661 194.810918,22.8795994 195.018918,22.6715994 L195.885585,22.5689328 C197.930918,22.3249328 198.000251,21.8395995 198.000251,18.1649329 L198.000251,5.82359985 Z M231.037984,17.5417329 C231.037984,18.5817329 231.037984,22.7070661 231.141984,23.6083994 C231.07265,23.8163994 230.86465,23.9897327 230.483317,23.9897327 C230.067317,23.4003994 229.063317,22.1870661 226.045984,18.7550662 L218.003317,9.60173309 C217.065984,8.52706645 214.709984,5.68439986 213.981984,4.92173321 L213.912651,4.92173321 C213.773984,5.33906653 213.737984,6.13506651 213.737984,7.17639982 L213.737984,14.733733 C213.737984,16.3630663 213.773984,20.8697328 214.363318,21.9097328 C214.569984,22.2910661 215.264651,22.4990661 216.131318,22.5683994 L217.205984,22.6723994 C217.413984,22.9497328 217.379317,23.3657327 217.136651,23.5390661 C215.576651,23.4697327 214.363318,23.4350661 213.079318,23.4350661 C211.623318,23.4350661 210.687318,23.4697327 209.475318,23.5390661 C209.232651,23.3657327 209.196651,22.8803994 209.404651,22.6723994 L210.341984,22.5683994 C211.139318,22.4643994 211.693984,22.2563994 211.867318,21.8750661 C212.351318,20.6270662 212.317984,16.3977329 212.317984,14.733733 L212.317984,4.71373322 C212.317984,3.74306657 212.283318,3.01506659 211.555318,2.21773328 C211.068651,1.73373329 210.236651,1.4897333 209.404651,1.3857333 L208.816651,1.31639997 C208.608651,1.10839997 208.608651,0.588399985 208.885984,0.449733322 C210.341984,0.553733319 212.177984,0.553733319 212.803318,0.553733319 C213.357984,0.553733319 213.947318,0.519066654 214.397984,0.449733322 C215.091318,2.21773328 219.180651,6.79373316 220.325984,8.0763998 L223.688651,11.8550664 C226.080651,14.525733 227.780651,16.4670663 229.408651,18.1310662 L229.477984,18.1310662 C229.617984,17.9577329 229.617984,17.4030662 229.617984,16.6750662 L229.617984,9.25639977 C229.617984,7.62573314 229.581984,3.12039992 228.923317,2.07906661 C228.715317,1.76706662 228.160651,1.55906663 226.773984,1.3857333 L226.184651,1.31639997 C225.941984,1.10839997 225.976651,0.553733319 226.253984,0.449733322 C227.848651,0.519066654 229.027317,0.553733319 230.34465,0.553733319 C231.83665,0.553733319 232.73665,0.519066654 233.915317,0.449733322 C234.19265,0.624399984 234.19265,1.10839997 233.98465,1.31639997 L233.50065,1.3857333 C232.391317,1.55906663 231.69665,1.83639995 231.559317,2.11373328 C230.96865,3.36173325 231.037984,7.66039981 231.037984,9.25639977 L231.037984,17.5417329 Z M242.19945,5.82359985 C242.19945,2.14893328 242.130117,1.55959996 240.084784,1.38626663 L239.218117,1.3169333 C239.008784,1.17826664 239.07945,0.554266653 239.28745,0.450266655 C241.020784,0.519599987 242.19945,0.554266653 243.65545,0.554266653 C245.042117,0.554266653 246.220783,0.519599987 247.954117,0.450266655 C248.16345,0.554266653 248.23145,1.17826664 248.02345,1.3169333 L247.156783,1.38626663 C245.11145,1.55959996 245.042117,2.14893328 245.042117,5.82359985 L245.042117,18.1649329 C245.042117,21.8395995 245.11145,22.3249328 247.156783,22.5689328 L248.02345,22.6715994 C248.23145,22.8115994 248.16345,23.4342661 247.954117,23.5395994 C246.220783,23.4689327 245.042117,23.4342661 243.65545,23.4342661 C242.19945,23.4342661 241.020784,23.4689327 239.28745,23.5395994 C239.07945,23.4342661 239.008784,22.8795994 239.218117,22.6715994 L240.084784,22.5689328 C242.130117,22.3249328 242.19945,21.8395995 242.19945,18.1649329 L242.19945,5.82359985 Z M77.184521,34.2323991 C77.184521,31.8750659 77.1391877,31.5350659 75.8018544,31.3763992 L75.4391877,31.3310659 C75.3031877,31.2403992 75.348521,30.8323992 75.484521,30.7643992 C76.4591877,30.8097326 77.2298543,30.8323992 78.1591876,30.8323992 L82.4205209,30.8323992 C83.8711875,30.8323992 85.2085208,30.8323992 85.4791875,30.7643992 C85.6151874,31.1497326 85.7511874,32.7817325 85.8418541,33.7790658 C85.7511874,33.9150658 85.3885208,33.9603992 85.2751875,33.8243992 C84.9351875,32.7590658 84.7325208,31.9657325 83.5525208,31.6710659 C83.0765208,31.5577325 82.3511875,31.5350659 81.3538542,31.5350659 L79.7231876,31.5350659 C79.0431876,31.5350659 79.0431876,31.5803992 79.0431876,32.4417325 L79.0431876,36.9750657 C79.0431876,37.6083991 79.1111876,37.6083991 79.7911876,37.6083991 L81.1058542,37.6083991 C82.0578542,37.6083991 82.7605209,37.5643991 83.0325208,37.4737324 C83.3031875,37.3817324 83.4618542,37.2470657 83.5751875,36.6803991 L83.7578542,35.7510658 C83.8711875,35.6150658 84.2551875,35.6150658 84.3471875,35.7723991 C84.3471875,36.3163991 84.2551875,37.2017324 84.2551875,38.0617324 C84.2551875,38.8777324 84.3471875,39.740399 84.3471875,40.2377323 C84.2551875,40.396399 83.8711875,40.396399 83.7578542,40.260399 L83.5525208,39.376399 C83.4618542,38.9697324 83.3031875,38.6297324 82.8511875,38.516399 C82.5338542,38.4257324 81.9898542,38.4030657 81.1058542,38.4030657 L79.7911876,38.4030657 C79.1111876,38.4030657 79.0431876,38.4257324 79.0431876,39.0150657 L79.0431876,42.2097323 C79.0431876,43.4110656 79.1111876,44.1817322 79.4738543,44.5670656 C79.7458543,44.8390655 80.2218542,45.0883989 82.2151875,45.0883989 C83.9618542,45.0883989 84.6191875,44.9977322 85.1165208,44.7483989 C85.5245208,44.5217322 86.1365208,43.7283989 86.7258541,42.5497323 C86.8845208,42.4363989 87.2018541,42.5043989 87.2925207,42.7083989 C87.1338541,43.5017322 86.5671874,45.2470655 86.2725208,45.8590655 C84.2338541,45.8137322 82.2151875,45.7910655 80.1991876,45.7910655 L78.1591876,45.7910655 C77.184521,45.7910655 76.4138543,45.8137322 75.076521,45.8590655 C74.940521,45.7910655 74.8951877,45.4283989 75.0311877,45.2923989 L75.7791877,45.2243989 C77.0711877,45.1110655 77.184521,44.7710655 77.184521,42.3910656 L77.184521,34.2323991 Z M94.3426539,46.1530655 C92.4386539,46.1530655 91.2373206,45.5650655 90.8079873,45.3143989 C90.5359873,44.8170655 90.2399873,43.2077323 90.1959873,42.1423989 C90.3093207,41.9837323 90.6479873,41.938399 90.738654,42.0730656 C91.078654,43.2303989 92.0079873,45.4517322 94.6373206,45.4517322 C96.5399872,45.4517322 97.4706538,44.2050656 97.4706538,42.8450656 C97.4706538,41.8477323 97.2653205,40.7370656 95.6119872,39.6717323 L93.4586539,38.266399 C92.3253206,37.5183991 91.010654,36.2277324 91.010654,34.3677325 C91.010654,32.2157325 92.6879873,30.4690659 95.6346539,30.4690659 C96.3373205,30.4690659 97.1519872,30.6063992 97.7426538,30.7650659 C98.0373205,30.8543992 98.3546538,30.9010659 98.5359871,30.9010659 C98.7399871,31.4450659 98.9426538,32.7143992 98.9426538,33.6663992 C98.8533205,33.8010658 98.4893205,33.8690658 98.3759871,33.7343992 C98.0826538,32.6450659 97.4706538,31.1730659 95.2946539,31.1730659 C93.0733206,31.1730659 92.5973206,32.6450659 92.5973206,33.6877325 C92.5973206,35.0037325 93.6853206,35.9557324 94.5239872,36.4757324 L96.3373205,37.6090657 C97.7639871,38.4930657 99.1706538,39.8077323 99.1706538,41.9597323 C99.1706538,44.4543989 97.2893205,46.1530655 94.3426539,46.1530655 Z M110.435187,42.3913323 C110.435187,44.7713322 110.48052,45.1113322 111.79652,45.2246655 L112.52052,45.2926655 C112.65652,45.3833322 112.61252,45.7913322 112.475187,45.8593322 C111.18452,45.8126655 110.41252,45.7913322 109.507187,45.7913322 C108.60052,45.7913322 107.805854,45.8126655 106.355187,45.8593322 C106.22052,45.7913322 106.175187,45.4059989 106.355187,45.2926655 L107.17252,45.2246655 C108.463187,45.1113322 108.57652,44.7713322 108.57652,42.3913323 L108.57652,32.2593325 C108.57652,31.5579992 108.57652,31.5339992 107.897854,31.5339992 L106.651187,31.5339992 C105.67652,31.5339992 104.429854,31.5806659 103.863187,32.1019992 C103.319187,32.6006659 103.09252,33.0979992 102.843187,33.6659992 C102.661854,33.8019992 102.34452,33.6886658 102.253854,33.5073325 C102.61652,32.4873325 102.95652,31.0366659 103.115187,30.1299992 C103.183187,30.0846659 103.477854,30.0619992 103.545854,30.1299992 C103.681854,30.8553326 104.429854,30.8326659 105.47252,30.8326659 L114.651187,30.8326659 C115.875187,30.8326659 116.079187,30.7873326 116.419187,30.1966659 C116.53252,30.1526659 116.781853,30.1753326 116.827187,30.2659992 C116.577853,31.1953326 116.419187,33.0299992 116.487187,33.7099992 C116.39652,33.8926658 116.011187,33.8926658 115.897853,33.7553325 C115.829853,33.1899992 115.671187,32.3513325 115.331187,32.1019992 C114.809853,31.7166659 113.94852,31.5339992 112.701853,31.5339992 L111.09252,31.5339992 C110.41252,31.5339992 110.435187,31.5579992 110.435187,32.3059992 L110.435187,42.3913323 Z M126.551986,40.533599 C126.394653,40.0349323 126.302653,39.9669323 125.622653,39.9669323 L122.199987,39.9669323 C121.63332,39.9669323 121.49732,40.0349323 121.338653,40.509599 L120.54532,42.8895989 C120.20532,43.9095989 120.046653,44.5215989 120.046653,44.7709322 C120.046653,45.0442655 120.159987,45.1789322 120.703987,45.2242655 L121.451987,45.2922655 C121.610653,45.4055989 121.610653,45.7682655 121.406653,45.8589322 C120.81732,45.8135989 120.114653,45.8135989 119.04932,45.7909322 C118.30132,45.7909322 117.48532,45.8362655 116.87332,45.8589322 C116.73732,45.7682655 116.69332,45.4055989 116.827987,45.2922655 L117.575987,45.2242655 C118.119987,45.1789322 118.618653,44.9309322 118.935987,44.1135989 C119.343987,43.0709323 119.979987,41.5989323 120.930653,39.0589324 L123.242653,32.9402658 C123.559986,32.1242659 123.695986,31.6935992 123.627986,31.3309326 C124.171986,31.1722659 124.55732,30.7655992 124.806653,30.4695992 C124.942653,30.4695992 125.099986,30.5149326 125.146653,30.6735992 C125.439986,31.6709325 125.803986,32.7135992 126.143986,33.7109325 L129.24932,42.8215989 C129.90532,44.7709322 130.20132,45.1109322 131.174653,45.2242655 L131.786653,45.2922655 C131.946653,45.4055989 131.899986,45.7682655 131.786653,45.8589322 C130.858653,45.8135989 130.063986,45.7909322 129.04532,45.7909322 C127.95732,45.7909322 127.095986,45.8362655 126.438653,45.8589322 C126.25732,45.7682655 126.234653,45.4055989 126.394653,45.2922655 L127.050653,45.2242655 C127.526653,45.1789322 127.843986,45.0442655 127.843986,44.8175989 C127.843986,44.5669322 127.730653,44.1589322 127.54932,43.6149322 L126.551986,40.533599 Z M139.948786,42.3913323 C139.948786,44.7713322 139.992786,45.1113322 141.308786,45.2246655 L142.032786,45.2926655 C142.168786,45.3833322 142.123453,45.7913322 141.987453,45.8593322 C140.696786,45.8126655 139.924786,45.7913322 139.019453,45.7913322 C138.112786,45.7913322 137.318119,45.8126655 135.867453,45.8593322 C135.732786,45.7913322 135.687453,45.4059989 135.867453,45.2926655 L136.684786,45.2246655 C137.976786,45.1113322 138.088786,44.7713322 138.088786,42.3913323 L138.088786,32.2593325 C138.088786,31.5579992 138.088786,31.5339992 137.410119,31.5339992 L136.163453,31.5339992 C135.188786,31.5339992 133.94212,31.5806659 133.375453,32.1019992 C132.831453,32.6006659 132.604786,33.0979992 132.355453,33.6659992 C132.17412,33.8019992 131.856786,33.6886658 131.76612,33.5073325 C132.128786,32.4873325 132.468786,31.0366659 132.627453,30.1299992 C132.696786,30.0846659 132.99012,30.0619992 133.05812,30.1299992 C133.19412,30.8553326 133.94212,30.8326659 134.984786,30.8326659 L144.163453,30.8326659 C145.387453,30.8326659 145.591453,30.7873326 145.931453,30.1966659 C146.044786,30.1526659 146.294119,30.1753326 146.339453,30.2659992 C146.090119,31.1953326 145.931453,33.0299992 145.999453,33.7099992 C145.908786,33.8926658 145.523453,33.8926658 145.410119,33.7553325 C145.342119,33.1899992 145.183453,32.3513325 144.843453,32.1019992 C144.322119,31.7166659 143.460786,31.5339992 142.214119,31.5339992 L140.604786,31.5339992 C139.924786,31.5339992 139.948786,31.5579992 139.948786,32.3059992 L139.948786,42.3913323 Z M151.214386,34.2323991 C151.214386,31.8750659 151.169052,31.5350659 149.831719,31.3763992 L149.469053,31.3310659 C149.333053,31.2403992 149.378386,30.8323992 149.515719,30.7643992 C150.489052,30.8097326 151.259719,30.8323992 152.187719,30.8323992 L156.450386,30.8323992 C157.901052,30.8323992 159.238386,30.8323992 159.510386,30.7643992 C159.645052,31.1497326 159.782386,32.7817325 159.871719,33.7790658 C159.782386,33.9150658 159.418386,33.9603992 159.305052,33.8243992 C158.965052,32.7590658 158.761052,31.9657325 157.582386,31.6710659 C157.107719,31.5577325 156.382386,31.5350659 155.385052,31.5350659 L153.753052,31.5350659 C153.073052,31.5350659 153.073052,31.5803992 153.073052,32.4417325 L153.073052,36.9750657 C153.073052,37.6083991 153.141052,37.6083991 153.821052,37.6083991 L155.134386,37.6083991 C156.086386,37.6083991 156.790386,37.5643991 157.062386,37.4737324 C157.334386,37.3817324 157.493052,37.2470657 157.606386,36.6803991 L157.787719,35.7510658 C157.901052,35.6150658 158.286386,35.6150658 158.375719,35.7723991 C158.375719,36.3163991 158.286386,37.2017324 158.286386,38.0617324 C158.286386,38.8777324 158.375719,39.740399 158.375719,40.2377323 C158.286386,40.396399 157.901052,40.396399 157.787719,40.260399 L157.582386,39.376399 C157.493052,38.9697324 157.334386,38.6297324 156.881052,38.516399 C156.563719,38.4257324 156.019719,38.4030657 155.134386,38.4030657 L153.821052,38.4030657 C153.141052,38.4030657 153.073052,38.4257324 153.073052,39.0150657 L153.073052,42.2097323 C153.073052,43.4110656 153.141052,44.1817322 153.503719,44.5670656 C153.775719,44.8390655 154.250386,45.0883989 156.245052,45.0883989 C157.990386,45.0883989 158.647719,44.9977322 159.146386,44.7483989 C159.555719,44.5217322 160.166386,43.7283989 160.755719,42.5497323 C160.914386,42.4363989 161.233052,42.5043989 161.322386,42.7083989 C161.163719,43.5017322 160.597052,45.2470655 160.302386,45.8590655 C158.262386,45.8137322 156.245052,45.7910655 154.229052,45.7910655 L152.187719,45.7910655 C151.214386,45.7910655 150.443719,45.8137322 149.106386,45.8590655 C148.970386,45.7910655 148.925053,45.4283989 149.061053,45.2923989 L149.809053,45.2243989 C151.101052,45.1110655 151.214386,44.7710655 151.214386,42.3910656 L151.214386,34.2323991 Z M168.371985,46.1530655 C166.467985,46.1530655 165.266652,45.5650655 164.837319,45.3143989 C164.565319,44.8170655 164.269319,43.2077323 164.225319,42.1423989 C164.338652,41.9837323 164.677319,41.938399 164.767985,42.0730656 C165.107985,43.2303989 166.037319,45.4517322 168.666652,45.4517322 C170.569319,45.4517322 171.499985,44.2050656 171.499985,42.8450656 C171.499985,41.8477323 171.294652,40.7370656 169.641319,39.6717323 L167.487985,38.266399 C166.354652,37.5183991 165.039985,36.2277324 165.039985,34.3677325 C165.039985,32.2157325 166.717319,30.4690659 169.663985,30.4690659 C170.366652,30.4690659 171.181319,30.6063992 171.771985,30.7650659 C172.066652,30.8543992 172.383985,30.9010659 172.565319,30.9010659 C172.769319,31.4450659 172.971985,32.7143992 172.971985,33.6663992 C172.882652,33.8010658 172.518652,33.8690658 172.405319,33.7343992 C172.111985,32.6450659 171.499985,31.1730659 169.323985,31.1730659 C167.102652,31.1730659 166.626652,32.6450659 166.626652,33.6877325 C166.626652,35.0037325 167.714652,35.9557324 168.553319,36.4757324 L170.366652,37.6090657 C171.793319,38.4930657 173.199985,39.8077323 173.199985,41.9597323 C173.199985,44.4543989 171.318652,46.1530655 168.371985,46.1530655 Z M122.063987,38.5162657 C121.882653,39.037599 121.90532,39.0589324 122.538653,39.0589324 L125.326653,39.0589324 C125.983986,39.0589324 126.030653,38.969599 125.82532,38.357599 L124.60132,34.6629325 C124.42132,34.1189325 124.215986,33.5069325 124.08132,33.2349325 L124.035986,33.2349325 C123.967986,33.3482658 123.74132,33.8922658 123.491987,34.5722658 L122.063987,38.5162657 Z M109.254787,17.7149329 C109.254787,18.9629329 109.32412,20.7309328 109.982787,21.4935995 C110.641453,22.2909328 111.681453,22.4642661 112.722787,22.4642661 C115.80812,22.4642661 118.165453,21.0775995 118.165453,17.6109329 C118.165453,14.8722663 116.778787,11.682933 111.265453,11.682933 C109.393454,11.682933 109.254787,11.890933 109.254787,12.5842664 L109.254787,17.7149329 Z M109.254787,9.67226642 C109.254787,10.6429331 109.289454,10.7122664 111.058787,10.6429331 C114.593453,10.5042664 116.501453,9.46426643 116.501453,6.20559984 C116.501453,2.80693326 113.969453,1.52426663 111.33612,1.52426663 C110.57212,1.52426663 110.05212,1.59359996 109.74012,1.73359996 C109.393454,1.83626662 109.254787,2.01093328 109.254787,2.63359993 L109.254787,9.67226642 Z M43.8055885,12.3066664 C43.5282552,13.1039997 43.5629218,13.1386663 44.5335885,13.1386663 L48.7975884,13.1386663 C49.8029217,13.1386663 49.872255,12.9999997 49.560255,12.0639997 L47.6882551,6.41333317 C47.4109217,5.58133319 47.0989217,4.64399988 46.8909217,4.22933323 L46.8215884,4.22933323 C46.7175884,4.40266656 46.3709218,5.23466654 45.9895884,6.27466651 L43.8055885,12.3066664 Z M132.86212,12.3066664 C132.584786,13.1039997 132.619453,13.1386663 133.59012,13.1386663 L137.854119,13.1386663 C138.859453,13.1386663 138.930119,12.9999997 138.616786,12.0639997 L136.744786,6.41333317 C136.467453,5.58133319 136.156786,4.64399988 135.947453,4.22933323 L135.879453,4.22933323 C135.775453,4.40266656 135.428786,5.23466654 135.047453,6.27466651 L132.86212,12.3066664 Z",
            id: "logo"
        }))));
        var S = ()=>r.createElement("svg", {
            width: "838px",
            height: "137px",
            viewBox: "0 0 838 137",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, r.createElement("g", {
            id: "Artboard",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, r.createElement("rect", {
            id: "Rectangle-2",
            fill: "#FFE270",
            x: "440",
            y: "0",
            width: "128",
            height: "128"
        }), r.createElement("path", {
            className: "dark-path",
            d: "M15.872,121.768 C26.368,121.768 30.272,114.536 30.272,106.856 L30.272,76.2 L9.792,76.2 L9.792,83.304 L22.528,83.304 L22.528,106.92 C22.528,110.696 20.864,114.472 16.064,114.472 C11.968,114.472 9.664,112.104 9.664,108.2 L1.92,108.2 C1.92,117.352 8.576,121.768 15.872,121.768 Z M53.76,121.832 C59.584,121.832 62.528,118.824 63.808,116.776 L64.384,116.776 C64.64,118.952 66.176,121 69.184,121 L74.88,121 L74.88,114.6 L73.408,114.6 C72.384,114.6 71.872,114.024 71.872,113.128 L71.872,87.464 L64.32,87.464 L64.32,91.56 L63.744,91.56 C62.272,89.512 59.2,86.632 53.568,86.632 C44.608,86.632 37.952,94.056 37.952,104.232 C37.952,114.408 44.736,121.832 53.76,121.832 Z M55.104,114.536 C49.792,114.536 45.632,110.632 45.632,104.296 C45.632,98.088 49.664,93.864 55.04,93.864 C60.16,93.864 64.448,97.64 64.448,104.296 C64.448,109.992 60.8,114.536 55.104,114.536 Z M99.84,121 L111.296,87.464 L103.168,87.464 L94.912,113.832 L94.336,113.832 L86.016,87.464 L78.08,87.464 L89.6,121 L99.84,121 Z M130.624,121.832 C136.448,121.832 139.392,118.824 140.672,116.776 L141.248,116.776 C141.504,118.952 143.04,121 146.048,121 L151.744,121 L151.744,114.6 L150.272,114.6 C149.248,114.6 148.736,114.024 148.736,113.128 L148.736,87.464 L141.184,87.464 L141.184,91.56 L140.608,91.56 C139.136,89.512 136.064,86.632 130.432,86.632 C121.472,86.632 114.816,94.056 114.816,104.232 C114.816,114.408 121.6,121.832 130.624,121.832 Z M131.968,114.536 C126.656,114.536 122.496,110.632 122.496,104.296 C122.496,98.088 126.528,93.864 131.904,93.864 C137.024,93.864 141.312,97.64 141.312,104.296 C141.312,109.992 137.664,114.536 131.968,114.536 Z M173.12,121.832 C183.36,121.832 189.312,115.88 189.312,108.52 C189.312,90.408 165.696,98.024 165.696,88.04 C165.696,85.288 167.808,82.536 172.928,82.536 C177.728,82.536 180.608,85.352 180.608,89.512 L188.416,89.512 C188.416,79.272 180.416,75.368 172.928,75.368 C163.328,75.368 157.952,81.32 157.952,88.04 C157.952,106.088 181.376,97.64 181.376,108.648 C181.376,112.168 178.24,114.472 173.44,114.472 C168.064,114.472 164.352,111.208 164.352,106.536 L156.544,106.536 C156.544,115.688 163.904,121.832 173.12,121.832 Z M212.16,121.832 C220.032,121.832 226.624,117.48 228.544,109.352 L221.376,107.624 C220.48,111.976 216.896,114.664 212.352,114.664 C206.592,114.664 202.496,110.248 202.496,104.232 C202.496,98.344 206.464,93.8 212.288,93.8 C216.832,93.8 220.416,96.552 221.312,100.904 L228.48,99.176 C226.56,91.048 219.968,86.632 212.096,86.632 C201.856,86.632 194.752,94.44 194.752,104.232 C194.752,114.024 201.728,121.832 212.16,121.832 Z M243.456,121 L243.456,104.424 C243.456,98.088 246.4,94.184 251.904,94.184 L255.232,94.184 L255.232,86.632 L252.736,86.632 C248.448,86.632 245.184,89.576 243.904,92.392 L243.392,92.392 L243.392,87.464 L235.904,87.464 L235.904,121 L243.456,121 Z M270.08,82.28 C272.832,82.28 274.88,80.232 274.88,77.544 C274.88,74.92 272.832,72.872 270.08,72.872 C267.328,72.872 265.28,74.92 265.28,77.544 C265.28,80.232 267.328,82.28 270.08,82.28 Z M273.792,121 L273.792,87.464 L260.352,87.464 L260.352,94.12 L266.24,94.12 L266.24,121 L273.792,121 Z M291.712,135.72 L291.712,116.776 L292.288,116.776 C293.696,118.824 296.704,121.832 302.656,121.832 C311.616,121.832 318.144,114.28 318.144,104.232 C318.144,94.12 311.168,86.632 302.144,86.632 C296.384,86.632 293.568,89.768 292.224,91.496 L291.648,91.496 L291.648,87.464 L284.16,87.464 L284.16,135.72 L291.712,135.72 Z M301.056,114.728 C295.872,114.728 291.584,110.888 291.584,104.232 C291.584,98.536 295.232,93.736 300.928,93.736 C306.24,93.736 310.4,97.896 310.4,104.232 C310.4,110.44 306.368,114.728 301.056,114.728 Z M345.472,121 L345.472,114.28 L339.648,114.28 C337.344,114.28 336.384,113.256 336.384,110.888 L336.384,94.12 L345.856,94.12 L345.856,87.464 L336.384,87.464 L336.384,78.056 L329.216,78.056 L329.216,87.464 L322.944,87.464 L322.944,94.12 L328.768,94.12 L328.768,110.952 C328.768,118.056 333.056,121 339.584,121 L345.472,121 Z M377.984,82.28 C380.736,82.28 382.784,80.232 382.784,77.544 C382.784,74.92 380.736,72.872 377.984,72.872 C375.232,72.872 373.184,74.92 373.184,77.544 C373.184,80.232 375.232,82.28 377.984,82.28 Z M381.696,121 L381.696,87.464 L368.256,87.464 L368.256,94.12 L374.144,94.12 L374.144,121 L381.696,121 Z M399.616,121 L399.616,101.224 C399.616,97 402.752,93.8 406.912,93.8 C410.752,93.8 413.696,96.68 413.696,100.84 L413.696,121 L421.248,121 L421.248,99.048 C421.248,92.136 416.576,86.632 409.216,86.632 C404.736,86.632 401.664,88.744 400.192,91.304 L399.616,91.304 L399.616,87.464 L392.064,87.464 L392.064,121 L399.616,121 Z M594.816,121 L594.816,101.096 C594.816,96.68 597.824,93.8 601.472,93.8 C605.056,93.8 607.872,96.232 607.872,100.328 L607.872,121 L615.424,121 L615.424,101.224 C615.424,96.424 618.496,93.8 622.144,93.8 C625.856,93.8 628.416,96.296 628.416,101.224 L628.416,121 L636.032,121 L636.032,98.728 C636.032,91.88 631.104,86.632 623.936,86.632 C619.328,86.632 616,88.744 614.08,92.072 L613.504,92.072 C611.776,88.872 608.576,86.632 603.968,86.632 C599.552,86.632 596.736,88.936 595.392,91.24 L594.816,91.24 L594.816,87.464 L587.264,87.464 L587.264,121 L594.816,121 Z M652.8,82.28 C655.552,82.28 657.6,80.232 657.6,77.544 C657.6,74.92 655.552,72.872 652.8,72.872 C650.048,72.872 648,74.92 648,77.544 C648,80.232 650.048,82.28 652.8,82.28 Z M656.512,121 L656.512,87.464 L643.072,87.464 L643.072,94.12 L648.96,94.12 L648.96,121 L656.512,121 Z M674.432,121 L674.432,101.224 C674.432,97 677.568,93.8 681.728,93.8 C685.568,93.8 688.512,96.68 688.512,100.84 L688.512,121 L696.064,121 L696.064,99.048 C696.064,92.136 691.392,86.632 684.032,86.632 C679.552,86.632 676.48,88.744 675.008,91.304 L674.432,91.304 L674.432,87.464 L666.88,87.464 L666.88,121 L674.432,121 Z M717.056,121.832 C721.536,121.832 724.608,119.72 726.08,117.16 L726.656,117.16 L726.656,121 L734.208,121 L734.208,87.464 L726.656,87.464 L726.656,107.048 C726.656,111.272 723.52,114.472 719.36,114.472 C715.52,114.472 712.576,111.592 712.576,107.432 L712.576,87.464 L705.024,87.464 L705.024,109.416 C705.024,116.328 709.696,121.832 717.056,121.832 Z M763.776,121 L763.776,114.28 L757.952,114.28 C755.648,114.28 754.688,113.256 754.688,110.888 L754.688,94.12 L764.16,94.12 L764.16,87.464 L754.688,87.464 L754.688,78.056 L747.52,78.056 L747.52,87.464 L741.248,87.464 L741.248,94.12 L747.072,94.12 L747.072,110.952 C747.072,118.056 751.36,121 757.888,121 L763.776,121 Z M786.688,121.832 C793.664,121.832 799.808,118.376 801.984,111.4 L795.072,109.736 C793.856,113.448 790.336,115.368 786.624,115.368 C781.12,115.368 777.472,111.784 777.408,106.152 L802.816,106.152 L802.816,104.04 C802.816,94.056 796.608,86.632 786.368,86.632 C777.344,86.632 769.6,93.736 769.6,104.296 C769.6,114.536 776.448,121.832 786.688,121.832 Z M795.136,100.648 L777.472,100.648 C777.92,96.616 781.568,93.224 786.368,93.224 C790.976,93.224 794.752,96.104 795.136,100.648 Z M821.568,121.832 C829.824,121.832 835.072,117.352 835.072,110.76 C835.072,97.256 816.384,103.144 816.384,96.872 C816.384,94.888 818.304,93.48 821.504,93.48 C824.704,93.48 826.88,94.824 827.52,97.768 L834.24,95.912 C833.024,89.896 827.968,86.632 821.504,86.632 C813.888,86.632 809.152,91.048 809.152,96.744 C809.152,110.376 827.328,104.68 827.328,111.464 C827.328,113.704 825.408,115.048 821.76,115.048 C818.24,115.048 815.808,113.384 815.104,109.864 L807.936,111.464 C808.832,118.312 814.272,121.832 821.568,121.832 Z",
            id: "JavaScriptin14minutes",
            fill: "#363636",
            fillRule: "nonzero"
        }), r.createElement("path", {
            d: "M515.136,76.2 L515.136,113.96 L523.008,113.96 L523.008,121 L498.752,121 L498.752,113.96 L507.648,113.96 L507.648,83.816 L507.072,83.816 L497.088,89.064 L497.088,81.448 L506.944,76.2 L515.136,76.2 Z M556.8,76.2 L556.8,103.656 L562.304,103.656 L562.304,110.632 L556.8,110.632 L556.8,121 L549.312,121 L549.312,110.632 L529.408,110.632 L529.408,102.824 L545.664,76.2 L556.8,76.2 Z M549.312,83.816 L548.736,83.816 L536.96,103.08 L536.96,103.656 L549.312,103.656 L549.312,83.816 Z",
            id: "Combined-Shape",
            fill: "#363636",
            fillRule: "nonzero"
        })));
        var B = ()=>r.createElement("svg", {
            width: "630px",
            height: "630px",
            viewBox: "0 0 630 630",
            version: "1.1",
            xmlns: "https://www.w3.org/2000/svg"
        }, r.createElement("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, r.createElement("g", {
            fillRule: "nonzero"
        }, r.createElement("rect", {
            fill: "#F7DF1E",
            x: "0",
            y: "0",
            width: "630",
            height: "630"
        }), r.createElement("path", {
            d: "M423.2,492.19 C435.89,512.91 452.4,528.14 481.6,528.14 C506.13,528.14 521.8,515.88 521.8,498.94 C521.8,478.64 505.7,471.45 478.7,459.64 L463.9,453.29 C421.18,435.09 392.8,412.29 392.8,364.09 C392.8,319.69 426.63,285.89 479.5,285.89 C517.14,285.89 544.2,298.99 563.7,333.29 L517.6,362.89 C507.45,344.69 496.5,337.52 479.5,337.52 C462.16,337.52 451.17,348.52 451.17,362.89 C451.17,380.65 462.17,387.84 487.57,398.84 L502.37,405.18 C552.67,426.75 581.07,448.74 581.07,498.18 C581.07,551.48 539.2,580.68 482.97,580.68 C427.99,580.68 392.47,554.48 375.09,520.14 L423.2,492.19 Z M214.07,497.32 C223.37,513.82 231.83,527.77 252.17,527.77 C271.62,527.77 283.89,520.16 283.89,490.57 L283.89,289.27 L343.09,289.27 L343.09,491.37 C343.09,552.67 307.15,580.57 254.69,580.57 C207.29,580.57 179.84,556.04 165.88,526.495 L214.07,497.32 Z",
            fill: "#000000"
        }))));
        var T = ()=>r.createElement("svg", {
            viewBox: "0 0 320 320",
            height: "320",
            width: "320",
            id: "svg2",
            version: "1.1"
        }, r.createElement("g", {
            transform: "matrix(1.3333333,0,0,-1.3333333,0,320)",
            id: "g10"
        }, r.createElement("g", {
            id: "g12"
        }, r.createElement("g", {
            clipPath: "url(#clipPath18)",
            id: "g14"
        }, r.createElement("g", {
            transform: "translate(180,140)",
            id: "g20"
        }, r.createElement("path", {
            id: "path22",
            fill: "#232323",
            d: "M 0,0 H 20 C 59,0 60,40 60,40 50,30 20,30 20,30 h -80 l 5,20 h 20 c 50,0 50,50 50,50 C -5,80 -35,80 -35,80 h -80 c -50,0 -50,-50 -50,-50 20,20 50,20 50,20 h 20 l -25,-100 c -10,-30 -40,-20 -40,-20 20,0 20,20 20,20 0,0 0,20 -20,20 0,0 -20,0 -20,-20 0,-41.231 50,-40 50,-40 0,0 40,0 50,40 L -67.5,0 H -40 l -21,-80 c -19,-60 46,-60 46,-60 0,0 40,0 40,40 0,20 -20,20 -20,20 -20,0 -20,-20 -20,-20 0,0 -0.666,-14.667 10,-20 0,0 -25,0 -20,20 z"
        }))))));
        var A = ()=>r.createElement("svg", {
            version: "1.1",
            width: "280px",
            height: "280px",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "80 85 280 280"
        }, r.createElement("path", {
            fill: "#FF2D20",
            d: "M357.38,149.42c-0.03-0.13-0.11-0.24-0.15-0.37c-0.09-0.23-0.16-0.47-0.28-0.68c-0.08-0.14-0.2-0.26-0.3-0.39 c-0.13-0.17-0.24-0.36-0.39-0.51c-0.13-0.13-0.29-0.22-0.43-0.33c-0.16-0.13-0.3-0.27-0.48-0.37c0,0,0,0,0,0c0,0,0,0,0,0 l-52.45-30.2c-1.35-0.78-3.01-0.78-4.36,0l-52.45,30.2c0,0,0,0,0,0c0,0,0,0,0,0c-0.18,0.1-0.32,0.25-0.48,0.37 c-0.14,0.11-0.3,0.2-0.43,0.33c-0.15,0.15-0.26,0.34-0.39,0.51c-0.1,0.13-0.22,0.25-0.3,0.39c-0.12,0.21-0.2,0.45-0.28,0.68 c-0.05,0.12-0.12,0.24-0.15,0.37c-0.1,0.37-0.15,0.75-0.15,1.14v57.36l-43.71,25.17V120.87c0-0.39-0.05-0.77-0.15-1.14 c-0.03-0.13-0.11-0.24-0.15-0.37c-0.09-0.23-0.16-0.47-0.28-0.68c-0.08-0.14-0.2-0.26-0.3-0.39c-0.13-0.17-0.24-0.36-0.39-0.51 c-0.13-0.13-0.29-0.22-0.43-0.33c-0.16-0.13-0.3-0.27-0.48-0.37c0,0,0,0,0,0c0,0,0,0,0,0l-52.45-30.2c-1.35-0.78-3.01-0.78-4.36,0 l-52.45,30.2c0,0,0,0,0,0c0,0,0,0,0,0c-0.18,0.1-0.32,0.25-0.48,0.37c-0.14,0.11-0.3,0.2-0.43,0.33c-0.15,0.15-0.26,0.34-0.39,0.51 c-0.1,0.13-0.22,0.25-0.3,0.39c-0.12,0.21-0.2,0.45-0.28,0.68c-0.05,0.12-0.12,0.24-0.15,0.37c-0.1,0.37-0.15,0.75-0.15,1.14v179.66 c0,1.56,0.84,3.01,2.19,3.79l104.91,60.4c0.23,0.13,0.48,0.21,0.72,0.3c0.11,0.04,0.22,0.11,0.34,0.14c0.37,0.1,0.74,0.15,1.12,0.15 s0.75-0.05,1.12-0.15c0.1-0.03,0.19-0.09,0.29-0.12c0.26-0.09,0.52-0.18,0.76-0.31l104.91-60.4c1.36-0.78,2.19-2.22,2.19-3.79 v-57.36l50.26-28.94c1.36-0.78,2.19-2.22,2.19-3.79v-59.89C357.53,150.17,357.47,149.79,357.38,149.42z M195.78,295.5l-43.63-24.69 l45.82-26.38c0,0,0,0,0,0l50.27-28.94l43.67,25.14l-32.04,18.29L195.78,295.5z M296.33,183.29v49.8l-18.36-10.57l-25.36-14.6v-49.8 l18.36,10.57L296.33,183.29z M300.7,125.4l43.69,25.16l-43.69,25.16l-43.69-25.16L300.7,125.4z M166.07,252.72l-18.36,10.57V153.6 l25.36-14.6l18.36-10.57v109.68L166.07,252.72z M143.34,95.72l43.69,25.16l-43.69,25.16l-43.69-25.16L143.34,95.72z M95.25,128.43 L113.61,139l25.36,14.6v117.24c0,0,0,0.01,0,0.01s0,0.01,0,0.01c0,0.17,0.05,0.33,0.07,0.49c0.03,0.21,0.03,0.43,0.09,0.64 c0,0,0,0.01,0,0.01c0.05,0.17,0.14,0.33,0.21,0.49c0.08,0.18,0.13,0.38,0.23,0.55c0,0,0,0.01,0.01,0.01 c0.09,0.15,0.22,0.28,0.33,0.42c0.12,0.16,0.22,0.32,0.36,0.46c0,0,0.01,0.01,0.01,0.01c0.12,0.12,0.28,0.21,0.42,0.32 c0.16,0.12,0.3,0.26,0.47,0.36c0.01,0,0.01,0,0.02,0.01c0.01,0,0.01,0.01,0.02,0.01l50.24,28.43v50.29L95.25,298V128.43z M296.33,298l-96.17,55.37v-50.3l71.22-40.66l24.95-14.24V298z M348.78,207.92l-43.71,25.17v-49.8l25.36-14.6l18.36-10.57V207.92z"
        }));
        var q = ()=>r.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512"
        }, r.createElement("path", {
            d: "M3.472 3.425V508.59h505.172V3.425H3.472z",
            fill: "#fff"
        }), r.createElement("path", {
            d: "M3.472 3.425V508.59h505.172V3.425H3.472zm471.561 209.982c-.83 15.736-5.841 35.352-10.256 48.458-17.762 52.775-38.357 85.493-86.053 85.493-14.042 0-38.954-3.725-48.133-28.709l-2.175-5.928-3.909 4.953c-14.916 18.893-37.082 29.796-60.802 29.908-18.2.083-32.823-6.011-42.284-17.64l-2.594-3.19-2.763 3.05c-10.104 11.154-27.7 17.552-48.278 17.552-16.158 0-30.11-5.494-39.29-15.45l-2.5-2.717-2.6 2.626c-10.205 10.303-26.285 15.494-46.504 15.02-24.529-.584-39.463-14.272-39.947-36.633-.74-34.474 32.625-107.009 46.435-129.063 8.966-14.732 21.296-21.874 37.707-21.874 11.17 0 18.81 2.334 23.348 7.142 4.133 4.375 4.95 8.063 5.318 16.935l.473 11.47 6.054-9.754c14.646-23.596 38.918-26.855 62.966-26.855 16.72 0 31.31 6.149 37.17 15.664l2.163 3.508 3.129-2.663c12.394-10.534 29.879-16.332 49.235-16.332 21.13 0 36.482 5.253 45.64 15.613 2.08 2.352 3.457 3.996 5.368 8.016l2.352 4.935 3.53-4.172c13.409-15.86 31.713-23.897 54.429-23.897 17.99 0 31.649 4.783 40.586 14.215 11.213 11.817 12.814 28.448 12.185 40.32z",
            fill: "#f6ec36"
        }), r.createElement("path", {
            d: "M3.472 3.425V508.59h505.172V3.425H3.472zm485.787 229.363c-2.286 18.384-14.71 52.446-21.31 66.058-17.712 36.493-41.374 64.53-86.967 64.53-24.356 0-44.39-7.767-56.106-22.698-17.156 15.035-38.39 22.91-61.254 22.91-17.614 0-33.18-5.086-45.051-14.493-13.1 9.23-30.779 14.378-50.37 14.378-16.364 0-31.088-4.494-42.612-12.799-12.749 8.46-29.457 12.665-49.069 12.2-32.632-.77-55.163-21.47-55.81-51.522-.852-39.921 32.766-112.987 48.61-138.29 11.857-19.478 29.955-29.957 52.132-29.957 24.07 0 32.795 6.874 37.09 15.627 18.572-15.772 43.191-16.679 60.719-16.679 19.348 0 31.49 5.137 41.815 13.356 14.262-8.555 30.623-13.002 50.109-13.002 24.915 0 43.425 5.795 56.337 18.558 15.056-12.532 33.914-18.243 55.018-18.243 27.907 0 46.269 10.064 57.052 25.07 15.184 21.166 12.467 42.472 9.667 64.996z",
            fill: "#d01012"
        }), r.createElement("path", {
            d: "M0 0v512h512V0H0zm504.96 7.052v497.915H7.047V7.052h497.911z"
        }), r.createElement("path", {
            d: "M486.792 153.639v-3.486h2.366c1.73 0 2.63.607 2.63 1.73 0 .892-.578 1.756-2.337 1.756h-2.659zm8.493 7.232l-1.474-2.558c-1.279-2.236-1.633-2.59-2.727-2.973v-.069c2.153-.252 3.431-1.636 3.431-3.55 0-2.024-1.278-3.555-4.006-3.555h-6.336v12.712h2.626v-5.206h.48c1.124 0 1.572.127 2.081.636.513.52 1.28 1.6 1.73 2.493l1.027 2.077 3.168-.007zm-6.253-16.245c5.455 0 9.887 4.4 9.887 9.847 0 5.448-4.44 9.866-9.887 9.866-5.44 0-9.826-4.425-9.826-9.866 0-5.44 4.385-9.847 9.826-9.847zm0-2.42c-6.781 0-12.254 5.476-12.254 12.267 0 6.788 5.473 12.26 12.254 12.26a12.24 12.24 0 0 0 12.271-12.26 12.235 12.235 0 0 0-12.271-12.268zM422.262 155.344c-26.462 0-44.745 10.49-57.121 25.146-2.092-4.385-3.681-6.307-5.917-8.84-10.133-11.451-26.419-16.794-48.278-16.794-21.357 0-39.163 6.669-51.525 17.174-6.42-10.44-21.722-17.351-40.175-17.351-24.11 0-50.38 3.41-65.968 28.524-.375-9.042-1.192-13.828-6.274-19.207-6.178-6.539-16.174-8.244-25.913-8.244-17.745 0-31.085 7.752-40.698 23.535-13.941 22.264-47.729 95.518-46.967 131 .495 22.917 15.87 39.433 43.387 40.084 21.501.516 38.364-5.235 49.094-16.065 9.627 10.462 24.315 16.596 41.89 16.596 19.57 0 39.26-5.878 50.893-18.72 9.797 12.036 25.212 19.041 45.04 18.944 25.92-.127 48.686-12.42 63.556-31.256 8.16 22.21 28.845 31.032 51.445 31.032 49.524 0 71.271-34.059 89.402-87.9 4.083-12.126 9.534-32.378 10.437-49.389 1.492-28.318-10.487-58.27-56.308-58.27zM92.74 290.72c25.624-4.45 32.065 4.812 31.26 13.392-2.418 25.68-25.978 31.425-46.436 30.944-14.837-.361-28.177-7.152-28.55-24.377-.65-30.135 30.085-99.852 44.553-122.961 6.684-10.971 14.826-16.397 27.81-16.397 12.304 0 15.353 6.318 15.172 13.886-.484 20.19-33.105 81.548-43.809 105.513zm83.442-23.669c-1.695 4.588-4.902 14.197-7.5 24.385 8.41-2.103 14.718-3.562 25.523-3.302 12.31.303 20.179 5.404 20.179 15.584 0 24.68-27.278 31.927-46.2 31.927-20.776 0-39.026-11.83-39.026-34.55 0-26.634 14.439-67.022 27.99-93.928 16.639-33.04 33.64-37.432 62.926-37.432 12.867 0 27.697 5.505 27.697 17.658 0 16.841-14.27 23.264-28.416 24.077-6.04.347-15.339.679-20.902.285 0 0-4.707 7.171-9.71 19.952 26.197-3.688 37.306 2.258 32.884 17.412-5.986 20.472-23.723 21.82-45.445 17.932zm128.85-63.695c-7.084 0-11.718 4.487-15.165 9.331-7.593 10.664-24.045 53.396-26.606 70.95-1.756 12.022 3.436 14.47 9.11 14.47 9.104 0 19.31-9.63 22.792-25.518 0 0-17.329-.422-12.553-15.79 4.642-14.912 13.449-18.142 28.047-18.741 28.76-1.174 25.92 20.06 23.619 31.385-7.475 36.775-33.647 66.307-70.668 66.307-25.345 0-41.078-14.02-41.078-39.864 0-18.416 9.136-47.327 16.38-64.244 15.414-36.01 31.58-61.21 72.766-61.21 24.71 0 44.199 8.88 41.341 32.028-2.095 16.99-10.599 26.967-26.046 28.174-4.32.336-21.996-.112-16.133-16.834 2.04-5.849 2.886-10.444-5.806-10.444zm155.544 30.392c-4.353 21.682-14.147 47.327-24.778 66.44-17.344 31.187-38.412 35.555-56.8 35.334-18.398-.22-39.123-7.012-39.282-35.384-.112-20.37 8.674-49.122 16.134-67.969 13.001-34.167 26.288-62.026 68.29-61.524 48.982.582 40.247 44.141 36.436 63.103zm-41.551-29.68c-4.205-.058-7.875.766-11.173 5.852-7.41 9.598-29.07 68.789-28.687 80.594.137 4.241 2.481 7.951 7.705 7.951 5.993.008 9.324-4.136 12.268-9.135 6.817-11.535 25.985-63.855 26.512-76.935.156-3.812-.48-8.251-6.625-8.327z"
        }));
        var R = ()=>r.createElement("svg", {
            width: "53px",
            height: "65px",
            viewBox: "0 0 53 65"
        }, r.createElement("g", {
            className: "dark-path",
            id: "Louis-Vuitton",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, r.createElement("path", {
            d: "M39.1410638,0.0132505176 C43.6888486,0.0132505176 48.2372966,0.0125879917 52.7850814,0.0139130435 C52.7877347,1.036853 52.7797747,2.06045549 52.7897247,3.08405797 C51.6342053,3.13440994 50.452816,3.26360248 49.388836,3.74658385 C48.3095995,4.23089027 47.4048185,5.11204969 46.9391615,6.20322981 C41.4089862,19.187412 35.882791,32.1729193 30.3585857,45.1597516 C30.2630663,45.3730849 30.1861202,45.593706 30.0746809,45.7997516 C28.0966333,45.7765631 26.1179224,45.7964389 24.1398748,45.7891511 C23.2669337,44.056646 22.4079224,42.316853 21.5276846,40.588323 C20.518761,43.2887785 19.5038673,45.9865839 18.4949437,48.6863768 C25.0201126,48.6870393 31.5452816,48.6863768 38.0704506,48.6870393 C39.2651064,48.70294 40.495582,48.6532505 41.6132916,48.1868323 C43.4706133,47.4414907 44.949174,46.0011594 46.1524531,44.4395859 C47.6051439,42.547412 48.707597,40.4173913 49.6899875,38.2529193 C50.7917772,38.2436439 51.8929036,38.2562319 52.99403,38.2542443 C50.9058698,42.7090683 48.8070964,47.1599172 46.700363,51.6061284 C31.6640175,51.6067909 16.6283354,51.6061284 1.59198999,51.6061284 C1.95814768,50.6514286 2.30639549,49.6887785 2.69908636,48.7440166 C2.72296621,48.6466253 2.84435544,48.6711387 2.91798498,48.6618634 C4.79520651,48.6479503 6.68503129,48.5750725 8.52709637,48.1848447 C9.48560701,47.9602484 10.4772841,47.6607867 11.2149061,46.97706 C11.6049437,46.605383 11.7263329,46.0627743 11.8556821,45.5619048 C13.6314143,40.8155694 15.4097997,36.0698965 17.1868586,31.3242236 C13.4310889,23.3315114 9.66271589,15.3434369 5.9049562,7.35138716 C5.6024781,6.65242236 5.20315394,5.96008282 4.57498123,5.50492754 C3.27485607,4.53233954 1.5853567,4.40910973 0.0198998748,4.3468323 C0.0185732165,3.20132505 0.0198998748,2.05648033 0.0192365457,0.910973085 C5.29867334,0.908985507 10.5774468,0.909648033 15.8568836,0.910310559 C15.8575469,2.05581781 15.8582103,3.20132505 15.8562203,4.3468323 C15.1683479,4.39055901 14.4380225,4.37929607 13.8151564,4.71917184 C13.5060451,4.86492754 13.3242929,5.23196687 13.4038924,5.56587992 C13.5014018,6.11246377 13.9338924,6.50269151 14.152791,6.99627329 C16.3822403,11.7922981 18.6116896,16.5889855 20.8477722,21.3830228 C21.9681352,18.253913 23.0884981,15.1254658 24.2135044,11.9983437 C24.3786733,11.5637267 24.4370463,11.0615321 24.2486608,10.624265 C24.1007384,10.279089 23.7650939,10.0657557 23.4340926,9.92198758 C22.7906633,9.65697723 22.0835544,9.65962733 21.4016521,9.61060041 C21.7498999,8.64397516 22.1001377,7.6773499 22.4609887,6.71602484 C22.5445682,6.66236025 22.6606508,6.70343685 22.7568335,6.69018634 C28.1132165,6.69349896 33.4702628,6.69018634 38.8273091,6.69217391 C38.4571715,7.66343685 38.0890238,8.63469979 37.7228661,9.60728778 C36.4326909,9.66691511 35.1027159,9.69937888 33.8928035,10.2028986 C33.3382603,10.4347826 32.813567,10.789234 32.4858824,11.302029 C32.2583605,11.6776812 32.1170713,12.09706 31.9645056,12.506501 C29.726433,18.6030642 27.4677972,24.691677 25.2549312,30.7975155 C26.4807635,33.5648861 27.7583354,36.3084058 29.0087109,39.0645135 C33.549199,28.3554451 38.0883605,17.6450518 42.6341552,6.93797101 C42.9406133,6.29399586 43.4394368,5.7063354 43.4785732,4.96563147 C43.516383,4.38592133 43.0858824,3.88571429 42.5870588,3.64786749 C41.5118023,3.15229814 40.3032165,3.12778468 39.1410638,3.08604555 C39.1397372,2.06178054 39.1397372,1.03751553 39.1410638,0.0132505176 Z",
            id: "path5",
            fill: "#000000",
            fillRule: "nonzero"
        }), r.createElement("path", {
            d: "M47.3975219,57.675528 C48.8309762,59.1582609 50.2531539,60.6509317 51.6726783,62.1462526 C51.6706884,60.7562733 51.6786483,59.3656315 51.6773217,57.9756522 C51.9227534,57.9763147 52.1681852,57.9736646 52.4142804,57.970352 C52.4149437,59.954617 52.4149437,61.9395445 52.4142804,63.9238095 C50.9794994,62.4483644 49.5659449,60.9530435 48.1384606,59.4703106 C48.1404506,60.8689027 48.1351439,62.2681573 48.1344806,63.667412 C47.8883855,63.6693996 47.6429537,63.6687371 47.3975219,63.6687371 C47.3968586,61.670559 47.3961952,59.6730435 47.3975219,57.675528 Z",
            id: "path7",
            fill: "#000000",
            fillRule: "nonzero"
        }), r.createElement("path", {
            d: "M5.66814768,57.8795859 C7.24753442,57.6371014 8.91846058,58.8720497 9.05908636,60.4806625 C9.19175219,61.400911 8.83421777,62.3602484 8.15961202,62.9942857 C7.05052566,64.0781781 5.05589487,64.0583023 3.97931164,62.9359834 C3.39757196,62.3728364 3.06590738,61.5612422 3.10106383,60.7509731 C3.11698373,59.341118 4.28377972,58.0816563 5.66814768,57.8795859 Z M5.66881101,58.6083644 C4.7494368,58.7580952 4.0012015,59.5643892 3.87251564,60.4780124 C3.69739675,61.5161905 4.33883605,62.6332091 5.34245307,62.9724224 C6.22070088,63.3036853 7.28932416,62.9916356 7.85315394,62.2429814 C8.58215269,61.3293582 8.45877347,59.8552381 7.56195244,59.096646 C7.05782228,58.6388406 6.32882353,58.4877847 5.66881101,58.6083644 Z",
            id: "path9",
            fill: "#000000",
            fillRule: "nonzero"
        }), r.createElement("path", {
            d: "M17.0734293,58.1863354 C17.8826909,57.5794617 19.2047059,57.830559 19.6716896,58.7474948 C19.4766708,58.8574741 19.2816521,58.9681159 19.0866333,59.0780952 C18.7357322,58.5301863 17.8807009,58.3963561 17.4090738,58.8614493 C17.2094118,59.007205 17.2313016,59.2742029 17.2525282,59.493499 C17.3095745,59.7797101 17.6147059,59.9009524 17.8395745,60.0354451 C18.4193242,60.340207 19.1158198,60.5157764 19.5231039,61.068323 C19.9774844,61.6851346 19.9025282,62.6033954 19.4070213,63.1744928 C18.8889612,63.8005797 17.9417272,63.9529607 17.2173717,63.6250104 C16.6615019,63.3507246 16.3178974,62.7710145 16.2064581,62.1767288 C16.4552065,62.117764 16.7052816,62.0634369 16.9546934,62.0077847 C16.9798999,62.5497308 17.4011139,63.0976398 17.9742303,63.1075776 C18.7476721,63.1917184 19.3625782,62.1873292 18.9121777,61.5466667 C18.4312641,60.8927536 17.5039299,60.8834783 16.9507134,60.3183437 C16.2993242,59.7863354 16.3649937,58.6395031 17.0734293,58.1863354 Z",
            id: "path11",
            fill: "#000000",
            fillRule: "nonzero"
        }), r.createElement("path", {
            d: "M43.4785732,57.8756108 C44.5133667,57.7464182 45.5826533,58.2234369 46.2181227,59.0409938 C47.1341802,60.1858385 46.9875845,62.0124224 45.900388,62.9969358 C45.2795119,63.6097723 44.366771,63.8621946 43.5097497,63.7714286 C42.6626783,63.7157764 41.87,63.2414079 41.3811264,62.5550311 C40.8544431,61.82294 40.7177972,60.8443892 40.967209,59.9837681 C41.2929036,58.8687371 42.3316771,58.0213665 43.4785732,57.8756108 Z M43.3518773,58.6183023 C42.2109512,58.8124224 41.3950563,60.0261698 41.5953817,61.1551139 C41.7220776,62.2409938 42.7535544,63.1248033 43.8447309,63.104265 C44.5889862,63.116853 45.2987484,62.6954865 45.7000626,62.0793375 C46.3096621,61.196853 46.1491364,59.8930021 45.3637547,59.1668737 C44.8496746,58.6467909 44.0556696,58.4712215 43.3518773,58.6183023 Z",
            id: "path13",
            fill: "#000000",
            fillRule: "nonzero"
        }), r.createElement("path", {
            d: "M0.612252816,57.971677 C0.847734668,57.970352 1.08321652,57.970352 1.31869837,57.971677 C1.3193617,59.6538302 1.31803504,61.336646 1.3193617,63.0187992 C1.90441802,63.0201242 2.48881101,63.0187992 3.07386733,63.0194617 C3.07519399,63.2354451 3.07519399,63.4514286 3.07453066,63.6680745 C2.25332916,63.6687371 1.43279099,63.6693996 0.612252816,63.6680745 C0.612916145,61.7692754 0.612916145,59.8704762 0.612252816,57.971677 Z",
            id: "path15",
            fill: "#000000",
            fillRule: "nonzero"
        }), r.createElement("path", {
            d: "M9.63021277,57.9763147 C9.87962453,57.9743271 10.1290363,57.9749896 10.3791114,57.9756522 C10.3811014,59.096646 10.3757947,60.2183023 10.3817647,61.3392961 C10.3930413,61.8322153 10.4540676,62.3741615 10.8029787,62.7537888 C11.3581852,63.2977226 12.4486984,63.220207 12.8360826,62.5152795 C13.0317647,62.1840166 13.088811,61.7918012 13.0835044,61.4128364 C13.0788611,60.2673292 13.0788611,59.1218219 13.0795244,57.9756522 C13.3289362,57.9743271 13.5783479,57.9749896 13.8277597,57.9756522 C13.8277597,59.1450104 13.830413,60.3143685 13.8270964,61.4837267 C13.828423,62.0144099 13.7362203,62.5755694 13.3965957,63.002236 C12.6662703,64.012588 10.9734543,64.0702277 10.1734793,63.115528 C9.79339174,62.7180124 9.63684606,62.1575155 9.63153942,61.6182195 C9.62822278,60.404472 9.6308761,59.1900621 9.63021277,57.9763147 Z",
            id: "path17",
            fill: "#000000",
            fillRule: "nonzero"
        }), r.createElement("path", {
            d: "M14.7491239,57.9723395 C14.9945557,57.9696894 15.2406508,57.970352 15.4867459,57.971677 C15.4867459,59.8704762 15.4874093,61.7692754 15.4860826,63.6687371 C15.2406508,63.6687371 14.9945557,63.6693996 14.7484606,63.667412 C14.7497872,61.7692754 14.7497872,59.8704762 14.7491239,57.9723395 Z",
            id: "path19",
            fill: "#000000",
            fillRule: "nonzero"
        }), r.createElement("path", {
            d: "M22.1352941,57.9769772 C22.4052691,57.9696894 22.6765707,57.9696894 22.947209,57.9710145 C23.5136921,59.3556936 24.0715519,60.7436853 24.6280851,62.1323395 C25.1832916,60.748323 25.754418,59.3709317 26.2970213,57.9822774 C26.5749562,57.959089 26.8535544,57.9749896 27.1321527,57.9710145 C26.3036546,59.9857557 25.4718398,61.9991718 24.6360451,64.0106004 C23.7856571,62.0064596 22.9657822,59.9890683 22.1352941,57.9769772 Z",
            id: "path21",
            fill: "#000000",
            fillRule: "nonzero"
        }), r.createElement("path", {
            d: "M27.4697872,57.970352 C27.715219,57.9736646 27.9606508,57.9763147 28.2067459,57.9756522 C28.2153692,59.0794203 28.2054193,60.1838509 28.2147059,61.287619 C28.2319524,61.811677 28.2724155,62.4059627 28.6730663,62.7942029 C29.1354068,63.1897308 29.8717021,63.2142443 30.365219,62.8624431 C30.6524406,62.6583851 30.8103129,62.3191718 30.8726658,61.9812836 C30.9708385,61.3995859 30.9356821,60.8079503 30.9423154,60.2209524 C30.9462954,59.4729607 30.9469587,58.7249689 30.945632,57.9769772 C31.1817772,57.9743271 31.4185857,57.9749896 31.6553942,57.9756522 C31.6660075,59.0131677 31.6573842,60.0500207 31.6600375,61.0875362 C31.6766208,61.7308489 31.6560576,62.4291511 31.26403,62.9724224 C30.5774844,63.9615735 28.9974343,64.0682402 28.1284731,63.2645963 C27.6939925,62.8631056 27.4757572,62.2708075 27.4724406,61.6864596 C27.4658073,60.4475362 27.4711139,59.2092754 27.4697872,57.970352 Z",
            id: "path23",
            fill: "#000000",
            fillRule: "nonzero"
        }), r.createElement("path", {
            d: "M32.5814018,57.9756522 C32.8374468,57.9763147 33.0934919,57.9736646 33.3502003,57.9710145 C33.3502003,59.8698137 33.3495369,61.7686128 33.3502003,63.6680745 C33.0921652,63.6687371 32.8347935,63.6687371 32.5774218,63.6680745 C32.5747685,61.7706004 32.5833917,59.8731263 32.5814018,57.9756522 Z",
            id: "path25",
            fill: "#000000",
            fillRule: "nonzero"
        }), r.createElement("path", {
            d: "M33.8105507,57.9756522 C36.1103129,57.9776398 38.4094118,57.971677 40.709174,57.9722878 C40.7085106,58.1995859 40.7085106,58.4268323 40.709174,58.6547412 C40.2680601,58.6567288 39.8276095,58.6547412 39.3871589,58.6554037 C39.385169,60.326294 39.3864956,61.9971843 39.3864956,63.6680745 C39.1297872,63.6687371 38.8737422,63.6687371 38.6170338,63.6680745 C38.6157071,61.9971843 38.6216771,60.326294 38.6143805,58.6554037 C37.7115895,58.6567288 36.8087985,58.6547412 35.9060075,58.6560663 C35.9046809,60.3269565 35.9060075,61.9971843 35.9053442,63.6680745 C35.6698623,63.6687371 35.4343805,63.6687371 35.199562,63.6680745 C35.1988986,61.9971843 35.2002253,60.3269565 35.1988986,58.6560663 C34.7358949,58.6547412 34.2735544,58.6567288 33.8105507,58.6547412 C33.8098874,58.4281573 33.8098874,58.2015735 33.8105507,57.9756522 Z",
            id: "path27",
            fill: "#000000",
            fillRule: "nonzero"
        })));
        var N = ()=>r.createElement("svg", {
            version: "1.2",
            baseProfile: "tiny",
            x: "0px",
            y: "0px",
            width: "1033.746px",
            height: "220.695px",
            viewBox: "0 0 1033.746 220.695"
        }, r.createElement("path", {
            className: "dark-path",
            fill: "#777777",
            d: "M1033.746,99.839v-18.18h-22.576V53.394l-0.76,0.234l-21.205,6.487l-0.418,0.128v21.415\r h-33.469v-11.93c0-5.555,1.242-9.806,3.689-12.641c2.432-2.802,5.91-4.226,10.344-4.226c3.188,0,6.49,0.752,9.811,2.233l0.832,0.371\r V36.321l-0.391-0.144c-3.1-1.114-7.314-1.675-12.539-1.675c-6.584,0-12.568,1.432-17.785,4.272\r c-5.223,2.844-9.33,6.903-12.205,12.065c-2.869,5.156-4.322,11.111-4.322,17.701v13.117h-15.721v18.18h15.721v76.589h22.566V99.839\r h33.469v48.671c0,20.045,9.455,30.204,28.102,30.204c3.064,0,6.289-0.36,9.582-1.063c3.352-0.722,5.635-1.443,6.979-2.213\r l0.297-0.175v-18.349l-0.918,0.607c-1.225,0.817-2.75,1.483-4.539,1.979c-1.795,0.505-3.295,0.759-4.457,0.759\r c-4.369,0-7.6-1.178-9.605-3.5c-2.027-2.344-3.057-6.444-3.057-12.178V99.839H1033.746L1033.746,99.839z M866.634,160.26\r c-8.191,0-14.648-2.717-19.201-8.066c-4.578-5.378-6.898-13.044-6.898-22.784c0-10.049,2.32-17.913,6.902-23.386\r c4.553-5.437,10.949-8.195,19.014-8.195c7.824,0,14.053,2.635,18.514,7.836c4.486,5.228,6.76,13.03,6.76,23.196\r c0,10.292-2.139,18.196-6.359,23.484C881.175,157.594,874.875,160.26,866.634,160.26 M867.638,79.375\r c-15.627,0-28.039,4.579-36.889,13.61c-8.844,9.032-13.328,21.531-13.328,37.154c0,14.837,4.377,26.772,13.012,35.467\r c8.633,8.699,20.383,13.105,34.92,13.105c15.148,0,27.312-4.643,36.16-13.799c8.844-9.147,13.326-21.527,13.326-36.785\r c0-15.07-4.205-27.094-12.504-35.731C894.035,83.756,882.359,79.375,867.638,79.375 M781.035,79.375\r c-10.629,0-19.422,2.719-26.139,8.08c-6.758,5.393-10.186,12.466-10.186,21.024c0,4.449,0.74,8.401,2.195,11.753\r c1.467,3.364,3.734,6.324,6.744,8.809c2.99,2.465,7.604,5.048,13.719,7.674c5.139,2.115,8.973,3.905,11.406,5.315\r c2.381,1.381,4.07,2.771,5.023,4.123c0.928,1.324,1.398,3.136,1.398,5.373c0,6.366-4.768,9.464-14.578,9.464\r c-3.639,0-7.791-0.759-12.338-2.258c-4.551-1.496-8.801-3.647-12.635-6.406l-0.936-0.671v21.726l0.344,0.16\r c3.193,1.474,7.219,2.717,11.963,3.695c4.736,0.979,9.039,1.478,12.779,1.478c11.533,0,20.822-2.732,27.6-8.125\r c6.822-5.43,10.279-12.67,10.279-21.526c0-6.388-1.861-11.866-5.529-16.284c-3.643-4.382-9.965-8.404-18.785-11.961\r c-7.027-2.82-11.527-5.161-13.385-6.957c-1.789-1.736-2.697-4.191-2.697-7.301c0-2.756,1.121-4.963,3.424-6.752\r c2.322-1.798,5.551-2.711,9.604-2.711c3.76,0,7.607,0.594,11.434,1.757c3.824,1.164,7.182,2.723,9.984,4.63l0.922,0.63V83.504\r l-0.354-0.152c-2.588-1.109-5.996-2.058-10.139-2.828C788.029,79.76,784.289,79.375,781.035,79.375 M685.878,160.26\r c-8.189,0-14.648-2.717-19.199-8.066c-4.58-5.378-6.896-13.041-6.896-22.784c0-10.049,2.318-17.913,6.902-23.386\r c4.549-5.437,10.943-8.195,19.012-8.195c7.822,0,14.051,2.635,18.514,7.836c4.484,5.228,6.76,13.03,6.76,23.196\r c0,10.292-2.141,18.196-6.361,23.484C700.419,157.594,694.121,160.26,685.878,160.26 M686.886,79.375\r c-15.633,0-28.045,4.579-36.889,13.61c-8.844,9.032-13.332,21.531-13.332,37.154c0,14.844,4.381,26.772,13.014,35.467\r c8.635,8.699,20.383,13.105,34.92,13.105c15.145,0,27.314-4.643,36.16-13.799c8.842-9.147,13.326-21.527,13.326-36.785\r c0-15.07-4.207-27.094-12.506-35.731C713.277,83.756,701.603,79.375,686.886,79.375 M602.41,98.07V81.659h-22.293v94.766h22.293\r v-48.477c0-8.243,1.867-15.015,5.555-20.13c3.643-5.054,8.494-7.614,14.418-7.614c2.008,0,4.262,0.331,6.703,0.986\r c2.416,0.65,4.166,1.357,5.199,2.101l0.936,0.679V81.496l-0.361-0.155c-2.076-0.882-5.012-1.327-8.729-1.327\r c-5.602,0-10.615,1.8-14.908,5.344c-3.77,3.115-6.494,7.387-8.578,12.713H602.41L602.41,98.07z M540.195,79.375\r c-10.225,0-19.348,2.193-27.108,6.517c-7.775,4.332-13.787,10.519-17.879,18.385c-4.072,7.848-6.14,17.014-6.14,27.234\r c0,8.954,2.005,17.172,5.967,24.413c3.966,7.254,9.578,12.929,16.682,16.865c7.093,3.931,15.292,5.925,24.371,5.925\r c10.594,0,19.639-2.119,26.891-6.295l0.293-0.169v-20.423l-0.938,0.684c-3.285,2.393-6.955,4.303-10.906,5.68\r c-3.939,1.375-7.531,2.069-10.68,2.069c-8.748,0-15.77-2.737-20.867-8.132c-5.109-5.404-7.699-12.99-7.699-22.538\r c0-9.607,2.701-17.389,8.025-23.131c5.307-5.726,12.342-8.629,20.908-8.629c7.326,0,14.467,2.481,21.223,7.381l0.934,0.679V84.371\r l-0.303-0.17c-2.541-1.423-6.008-2.598-10.312-3.488C548.371,79.824,544.179,79.375,540.195,79.375 M473.715,81.659h-22.293v94.766\r h22.293V81.659z M462.796,41.288c-3.668,0-6.868,1.248-9.497,3.724c-2.64,2.482-3.98,5.607-3.98,9.295\r c0,3.63,1.324,6.697,3.938,9.113c2.598,2.409,5.808,3.63,9.54,3.63c3.731,0,6.954-1.221,9.583-3.626\r c2.646-2.42,3.987-5.487,3.987-9.117c0-3.559-1.305-6.652-3.879-9.195C469.918,42.574,466.656,41.288,462.796,41.288\r M407.177,74.667v101.758h22.75V44.189H398.44l-40.022,98.221l-38.839-98.221H286.81v132.235h21.378V74.657h0.735l41.013,101.768\r h16.134l40.372-101.758H407.177L407.177,74.667z"
        }), r.createElement("path", {
            fill: "#F35325",
            d: "M104.868,104.868H0V0h104.868V104.868z"
        }), r.createElement("path", {
            fill: "#81BC06",
            d: "M220.654,104.868H115.788V0h104.866V104.868z"
        }), r.createElement("path", {
            fill: "#05A6F0",
            d: "M104.865,220.695H0V115.828h104.865V220.695z"
        }), r.createElement("path", {
            fill: "#FFBA08",
            d: "M220.654,220.695H115.788V115.828h104.866V220.695z"
        }));
        var O = ()=>r.createElement("svg", {
            width: "898px",
            height: "170px",
            viewBox: "0 0 898 170",
            version: "1.1"
        }, r.createElement("g", {
            id: "logo",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, r.createElement("g", {
            id: "icon"
        }, r.createElement("polygon", {
            id: "Path-3",
            fill: "#EB2889",
            points: "80 83 122 104 120 130 80 110"
        }), r.createElement("path", {
            d: "M95,72.5 L160,105 L160,107 L80,147 L60,137 L60,135 L120,105 L86,88 L86,77 L95,72.5 Z M65,72.5 L74,77 L74,90 L40,107 L20,95 L65,72.5 Z M60,0 L80,10 L80,13 L20,42 L0,33 L0,30 L60,0 Z",
            id: "Light",
            fill: "#FF2B95"
        }), r.createElement("path", {
            d: "M60,135 L82,146 L82,168 L80,170 L60,160 L60,135 Z M0,30 L22,41 L22,137 L20,140 L0,130 L0,30 Z",
            id: "Medium",
            fill: "#EB2889"
        }), r.createElement("path", {
            d: "M160,105 L160,130 L80,170 L80,145 L160,105 Z M80,10 L80,35 L40,55 L40,105 L78,86 L78,111 L20,140 L20,40 L80,10 Z",
            id: "Dark",
            fill: "#D1247A"
        }), r.createElement("g", {
            id: "Cube",
            transform: "translate(50.000000, 47.500000)",
            strokeWidth: "1"
        }, r.createElement("g", {
            id: "Group"
        }, r.createElement("polygon", {
            id: "Path",
            fill: "#FFD455",
            points: "0 15 0 32 60 32 60 15 30 0"
        }), r.createElement("polygon", {
            id: "Path",
            fill: "#FFBF00",
            points: "0 15 32 31 32 65 30 67.5 0 52.5"
        }), r.createElement("polygon", {
            id: "Path",
            fill: "#FFAF17",
            points: "60 15 30 30 30 67.5 60 52.5"
        })))), r.createElement("g", {
            id: "Type",
            transform: "translate(220.000000, 40.000000)"
        }, r.createElement("path", {
            d: "M49.248,3.348 C52.596,3.348 55.404,6.156 55.404,9.504 L55.404,71.604 C55.404,74.952 52.596,77.76 49.248,77.76 C47.196,77.76 45.252,76.68 44.172,75.06 L12.312,29.052 L12.312,71.604 C12.312,74.952 9.504,77.76 6.156,77.76 C2.808,77.76 -5.68434189e-14,74.952 -5.68434189e-14,71.604 L-5.68434189e-14,9.504 C-5.68434189e-14,6.156 2.808,3.348 6.156,3.348 C8.316,3.348 10.044,4.32 11.124,5.94 L43.092,52.272 L43.092,9.504 C43.092,6.156 45.9,3.348 49.248,3.348 Z M61.3440001,52.164 C61.3440001,35.64 69.9840001,26.352 84.6720001,26.352 C102.924,26.352 106.272,40.392 106.272,47.844 C106.272,51.84 106.272,56.484 99.6840001,56.484 L73.0080001,56.484 C73.0080001,64.26 78.5160001,67.824 85.6440001,67.824 C90.3960001,67.824 93.7440001,66.204 96.3360001,64.476 C97.5240001,63.72 98.3880001,63.288 99.7920001,63.288 C102.6,63.288 104.868,65.556 104.868,68.364 C104.868,70.092 104.004,71.496 103.032,72.36 C101.196,74.088 95.4720001,78.3 85.6440001,78.3 C70.6320001,78.3 61.3440001,70.2 61.3440001,52.164 Z M84.6720001,36.288 C78.4080001,36.288 73.8720001,39.852 73.3320001,46.764 L94.7160001,46.764 C94.7160001,41.472 91.6920001,36.288 84.6720001,36.288 Z M114.912,27.864 L114.912,18.792 C114.912,15.66 117.504,13.068 120.636,13.068 C123.768,13.068 126.36,15.66 126.36,18.792 L126.36,27.864 L131.22,27.864 C133.92,27.864 136.08,30.024 136.08,32.724 C136.08,35.424 133.92,37.584 131.22,37.584 L126.36,37.584 L126.36,63.72 C126.36,66.204 128.52,67.608 130.464,67.608 C133.272,67.608 135.54,69.876 135.54,72.684 C135.54,75.492 133.272,77.76 130.464,77.76 C120.852,77.76 114.912,71.604 114.912,63.072 L114.912,37.584 L112.428,37.584 C109.728,37.584 107.568,35.424 107.568,32.724 C107.568,30.024 109.728,27.864 112.428,27.864 L114.912,27.864 Z M158.328,36.504 C154.332,36.504 151.956,37.908 151.956,40.608 C151.956,48.6 178.524,44.928 178.524,62.748 C178.524,72.9 169.884,78.084 158.76,78.084 C149.472,78.084 142.344,73.872 139.644,70.524 C138.78,69.444 138.348,68.472 138.348,67.176 C138.348,64.368 140.724,61.992 143.532,61.992 C144.612,61.992 145.692,62.316 146.88,63.288 C149.796,65.664 153.36,67.716 158.76,67.716 C163.62,67.716 166.752,66.42 166.752,63.396 C166.752,54.648 140.292,59.184 140.292,40.824 C140.292,31.104 148.392,26.352 158.328,26.352 C165.996,26.352 172.8,29.268 175.824,33.048 C176.472,33.912 176.904,34.668 176.904,36.288 C176.904,39.096 174.528,41.472 171.72,41.472 C170.208,41.472 169.236,40.824 168.048,39.96 C165.672,38.232 162.756,36.504 158.328,36.504 Z M195.804,32.832 C197.424,30.132 202.5,26.352 208.548,26.352 C222.696,26.352 230.472,34.668 230.472,52.272 C230.472,69.876 222.588,78.3 208.548,78.3 C203.148,78.3 198.396,76.572 195.804,73.656 L195.804,92.772 C195.804,96.012 193.212,98.604 189.972,98.604 C186.732,98.604 184.14,96.012 184.14,92.772 L184.14,32.832 C184.14,29.592 186.732,27 189.972,27 C193.212,27 195.804,29.592 195.804,32.832 Z M218.592,52.38 C218.592,41.688 214.596,36.288 207.036,36.288 C199.476,36.288 195.48,41.688 195.48,52.38 C195.48,62.964 199.476,68.364 207.036,68.364 C214.596,68.364 218.592,62.964 218.592,52.38 Z M233.712,52.164 C233.712,35.64 242.352,26.352 257.04,26.352 C275.292,26.352 278.64,40.392 278.64,47.844 C278.64,51.84 278.64,56.484 272.052,56.484 L245.376,56.484 C245.376,64.26 250.884,67.824 258.012,67.824 C262.764,67.824 266.112,66.204 268.704,64.476 C269.892,63.72 270.756,63.288 272.16,63.288 C274.968,63.288 277.236,65.556 277.236,68.364 C277.236,70.092 276.372,71.496 275.4,72.36 C273.564,74.088 267.84,78.3 258.012,78.3 C243,78.3 233.712,70.2 233.712,52.164 Z M257.04,36.288 C250.776,36.288 246.24,39.852 245.7,46.764 L267.084,46.764 C267.084,41.472 264.06,36.288 257.04,36.288 Z M302.832001,36.72 C298.080001,36.72 294.732001,38.88 292.032001,40.824 C290.952001,41.58 290.088001,41.904 288.792001,41.904 C285.984001,41.904 283.716001,39.636 283.716001,36.828 C283.716001,35.64 284.148001,34.344 285.120001,33.264 C288.144001,29.916 293.544001,26.352 302.832001,26.352 C316.224001,26.352 324.216001,32.94 324.216001,44.388 L324.216001,72.036 C324.216001,75.168 321.624001,77.76 318.492001,77.76 C315.360001,77.76 312.768001,75.168 312.768001,72.036 C309.852001,76.68 305.100001,78.3 298.620001,78.3 C288.036001,78.3 281.016001,71.712 281.016001,61.992 C281.016001,51.948 289.116001,46.764 298.512001,46.764 L312.660001,46.764 L312.660001,44.82 C312.660001,39.96 309.096001,36.72 302.832001,36.72 Z M301.644001,68.58 C307.368001,68.58 312.660001,64.908 312.660001,58.86 L312.660001,55.836 L300.024001,55.836 C295.272001,55.836 292.680001,58.104 292.680001,61.992 C292.680001,66.096 295.596001,68.58 301.644001,68.58 Z M367.524001,77.76 C365.472001,77.76 363.960001,76.788 362.988001,75.492 L346.896001,53.892 L343.440001,56.592 L343.440001,72.144 C343.440001,75.384 340.848001,77.76 337.608001,77.76 C334.260001,77.76 331.776001,75.384 331.776001,72.144 L331.776001,5.616 C331.776001,2.376 334.260001,1.42108547e-14 337.608001,1.42108547e-14 C340.848001,1.42108547e-14 343.440001,2.376 343.440001,5.616 L343.440001,43.74 L362.988001,28.404 C364.392001,27.324 365.472001,27 366.768001,27 C369.900001,27 372.384001,29.484 372.384001,32.616 C372.384001,34.236 371.628001,35.964 370.224001,37.044 L356.076001,47.844 L371.952001,68.688 C372.816001,69.876 373.140001,71.064 373.140001,72.144 C373.140001,75.276 370.656001,77.76 367.524001,77.76 Z",
            id: "Netspeak-Games",
            fill: "#FFFFFF"
        }), r.createElement("path", {
            d: "M431.136001,2.7 C441.396001,2.7 450.360001,7.128 455.436001,14.148 C455.976001,14.904 456.192001,15.66 456.192001,16.416 C456.192001,18.36 454.680001,19.872 452.736001,19.872 C451.764001,19.872 450.792001,19.548 449.928001,18.468 C446.256001,13.392 439.344001,9.396 431.136001,9.396 C414.504001,9.396 405.000001,19.44 405.000001,40.608 C405.000001,63.072 414.504001,71.712 431.136001,71.712 C441.180001,71.712 447.660001,67.5 451.224001,63.072 L451.224001,47.412 L433.188001,47.412 C431.352001,47.412 429.840001,45.9 429.840001,44.064 C429.840001,42.228 431.352001,40.716 433.188001,40.716 L455.004001,40.716 C456.732001,40.716 458.352001,42.228 458.352001,44.064 L458.352001,62.964 C458.352001,64.26 457.920001,65.34 456.948001,66.528 C451.764001,72.576 444.204001,78.408 431.136001,78.408 C410.184001,78.408 397.440001,67.176 397.440001,40.608 C397.440001,15.012 410.184001,2.7 431.136001,2.7 Z M485.460001,26.352 C497.988001,26.352 504.900001,33.696 504.900001,44.712 L504.900001,74.412 C504.900001,76.248 503.388001,77.76 501.552001,77.76 C499.716001,77.76 498.204001,76.248 498.204001,74.412 L498.204001,70.524 C495.504001,75.6 489.240001,78.3 482.760001,78.3 C471.312001,78.3 464.076001,72.792 464.076001,62.856 C464.076001,53.352 471.312001,47.628 482.976001,47.628 L498.204001,47.628 L498.204001,44.712 C498.204001,37.368 493.344001,32.832 485.460001,32.832 C479.736001,32.832 476.280001,34.56 472.932001,38.34 C471.852001,39.528 471.096001,39.852 470.124001,39.852 C468.396001,39.852 466.992001,38.448 466.992001,36.72 C466.992001,35.964 467.208001,35.424 467.532001,34.884 C470.556001,30.132 476.388001,26.352 485.460001,26.352 Z M616.356002,26.352 C633.636002,26.352 636.984002,40.068 636.984002,47.412 C636.984002,50.544 636.984002,54.324 632.664002,54.324 L601.128002,54.324 C601.128002,65.016 607.284002,71.928 617.436002,71.928 C623.700002,71.928 627.372002,69.552 630.396002,67.284 C631.044002,66.852 631.476002,66.636 632.340002,66.636 C634.068002,66.636 635.472002,68.04 635.472002,69.768 C635.472002,70.956 634.932002,71.604 634.284002,72.252 C632.664002,73.872 627.048002,78.3 617.436002,78.3 C603.072002,78.3 594.108002,70.416 594.108002,52.272 C594.108002,35.64 602.316002,26.352 616.356002,26.352 Z M659.124002,26.46 C666.468002,26.46 672.192002,28.944 675.540002,33.372 C675.864002,33.804 676.296002,34.452 676.296002,35.424 C676.296002,37.152 674.892002,38.556 673.164002,38.556 C672.624002,38.556 671.760002,38.448 670.896002,37.584 C667.980002,34.776 664.740002,33.048 659.124002,33.048 C654.264002,33.048 649.512002,34.56 649.512002,39.528 C649.512002,50.868 677.916002,46.656 677.916002,63.936 C677.916002,73.764 669.816002,78.192 659.556002,78.192 C650.700002,78.192 643.896002,73.98 641.088002,70.416 C640.548002,69.66 640.332002,69.12 640.332002,68.364 C640.332002,66.636 641.736002,65.232 643.464002,65.232 C644.112002,65.232 644.976002,65.448 645.840002,66.312 C649.188002,69.66 653.508002,71.604 659.556002,71.604 C665.712002,71.604 671.004002,69.552 671.004002,63.936 C671.004002,52.812 642.600002,57.24 642.600002,39.528 C642.600002,30.564 649.944002,26.46 659.124002,26.46 Z M567.864001,26.352 C584.496001,26.352 588.276001,36.288 588.276001,45.468 L588.276001,74.304 C588.276001,76.248 586.764001,77.76 584.820001,77.76 C582.876001,77.76 581.364001,76.248 581.364001,74.304 L581.364001,46.872 C581.364001,38.34 578.340001,32.508 567.864001,32.508 C558.576001,32.508 554.364001,37.476 554.364001,45.468 L554.364001,74.304 C554.364001,76.248 552.852001,77.76 550.908001,77.76 C548.964001,77.76 547.452001,76.248 547.452001,74.304 L547.452001,46.872 C547.452001,38.34 544.752001,32.508 534.168001,32.508 C524.124001,32.508 520.884001,38.556 520.884001,47.628 L520.884001,74.304 C520.884001,76.248 519.372001,77.76 517.428001,77.76 C515.484001,77.76 513.972001,76.248 513.972001,74.304 L513.972001,30.456 C513.972001,28.512 515.484001,27 517.428001,27 C519.372001,27 520.884001,28.512 520.884001,30.456 L520.884001,33.912 C522.720001,29.916 527.904001,26.352 534.924001,26.352 C543.780001,26.352 549.504001,29.592 552.096001,33.912 C554.796001,29.7 559.548001,26.352 567.864001,26.352 Z M498.204001,53.676 L482.976001,53.676 C475.956001,53.676 471.096001,56.592 471.096001,62.856 C471.096001,68.472 474.984001,72.036 483.408001,72.036 C490.968001,72.036 498.204001,67.392 498.204001,58.212 L498.204001,53.676 Z M616.356002,32.616 C606.960002,32.616 601.776002,38.664 601.128002,48.276 L630.180002,48.276 C630.180002,40.5 627.480002,32.616 616.356002,32.616 Z",
            id: "Combined-Shape",
            fill: "#EB2889"
        }))));
        var j = ()=>r.createElement("svg", {
            width: "589.827",
            height: "361.238",
            version: "1.2",
            viewBox: "0 0 442.37 270.929"
        }, r.createElement("defs", null, r.createElement("clipPath", {
            id: "nodejsa"
        }, r.createElement("path", {
            d: "M239.03 226.605l-42.13 24.317c-1.578.91-2.546 2.59-2.546 4.406v48.668c0 1.817.968 3.496 2.546 4.406l42.133 24.336c1.575.907 3.517.907 5.09 0l42.126-24.336c1.57-.91 2.54-2.59 2.54-4.406v-48.668c0-1.816-.97-3.496-2.55-4.406l-42.12-24.317c-.79-.453-1.67-.68-2.55-.68-.88 0-1.76.227-2.55.68"
        })), r.createElement("linearGradient", {
            id: "nodejsb",
            x1: "-.348",
            x2: "1.251",
            gradientTransform: "rotate(116.114 53.1 202.97) scale(86.48)",
            gradientUnits: "userSpaceOnUse"
        }, r.createElement("stop", {
            offset: ".3",
            stopColor: "#3E863D"
        }), r.createElement("stop", {
            offset: ".5",
            stopColor: "#55934F"
        }), r.createElement("stop", {
            offset: ".8",
            stopColor: "#5AAD45"
        })), r.createElement("clipPath", {
            id: "nodejsc"
        }, r.createElement("path", {
            d: "M195.398 307.086c.403.523.907.976 1.5 1.316l36.14 20.875 6.02 3.46c.9.52 1.926.74 2.934.665.336-.027.672-.09 1-.183l44.434-81.36c-.34-.37-.738-.68-1.184-.94l-27.586-15.93-14.582-8.39c-.414-.24-.863-.41-1.32-.53zm0 0"
        })), r.createElement("linearGradient", {
            id: "nodejsd",
            x1: "-.456",
            x2: ".582",
            gradientTransform: "rotate(-36.46 550.846 -214.337) scale(132.798)",
            gradientUnits: "userSpaceOnUse"
        }, r.createElement("stop", {
            offset: ".57",
            stopColor: "#3E863D"
        }), r.createElement("stop", {
            offset: ".72",
            stopColor: "#619857"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#76AC64"
        })), r.createElement("clipPath", {
            id: "nodejse"
        }, r.createElement("path", {
            d: "M241.066 225.953c-.707.07-1.398.29-2.035.652l-42.01 24.247 45.3 82.51c.63-.09 1.25-.3 1.81-.624l42.13-24.336c1.3-.754 2.19-2.03 2.46-3.476l-46.18-78.89c-.34-.067-.68-.102-1.03-.102-.14 0-.28.007-.42.02"
        })), r.createElement("linearGradient", {
            id: "nodejsf",
            x1: ".043",
            x2: ".984",
            gradientTransform: "translate(192.862 279.652) scale(97.417)",
            gradientUnits: "userSpaceOnUse"
        }, r.createElement("stop", {
            offset: ".16",
            stopColor: "#6BBF47"
        }), r.createElement("stop", {
            offset: ".38",
            stopColor: "#79B461"
        }), r.createElement("stop", {
            offset: ".47",
            stopColor: "#75AC64"
        }), r.createElement("stop", {
            offset: ".7",
            stopColor: "#659E5A"
        }), r.createElement("stop", {
            offset: ".9",
            stopColor: "#3E863D"
        }))), r.createElement("path", {
            fill: "#689f63",
            d: "M218.647 270.93c-1.46 0-2.91-.383-4.19-1.12l-13.337-7.896c-1.992-1.114-1.02-1.508-.363-1.735 2.656-.93 3.195-1.14 6.03-2.75.298-.17.688-.11.993.07l10.246 6.08c.37.2.895.2 1.238 0l39.95-23.06c.37-.21.61-.64.61-1.08v-46.1c0-.46-.24-.87-.618-1.1l-39.934-23.04c-.37-.22-.86-.22-1.23 0l-39.926 23.04c-.387.22-.633.65-.633 1.09v46.1c0 .44.24.86.62 1.07l10.94 6.32c5.94 2.97 9.57-.53 9.57-4.05v-45.5c0-.65.51-1.15 1.16-1.15h5.06c.63 0 1.15.5 1.15 1.15v45.52c0 7.92-4.32 12.47-11.83 12.47-2.31 0-4.13 0-9.21-2.5l-10.48-6.04c-2.59-1.5-4.19-4.3-4.19-7.29v-46.1c0-3 1.6-5.8 4.19-7.28l39.99-23.07c2.53-1.43 5.89-1.43 8.4 0l39.94 23.08c2.58 1.49 4.19 4.28 4.19 7.28v46.1c0 2.99-1.61 5.78-4.19 7.28l-39.94 23.07c-1.28.74-2.73 1.12-4.21 1.12"
        }), r.createElement("path", {
            fill: "#689f63",
            d: "M230.987 239.164c-17.48 0-21.145-8.024-21.145-14.754 0-.64.516-1.15 1.157-1.15h5.16c.57 0 1.05.415 1.14.978.78 5.258 3.1 7.91 13.67 7.91 8.42 0 12-1.902 12-6.367 0-2.57-1.02-4.48-14.1-5.76-10.94-1.08-17.7-3.49-17.7-12.24 0-8.06 6.8-12.86 18.19-12.86 12.79 0 19.13 4.44 19.93 13.98.03.33-.09.65-.31.89-.22.23-.53.37-.85.37h-5.19c-.54 0-1.01-.38-1.12-.9-1.25-5.53-4.27-7.3-12.48-7.3-9.19 0-10.26 3.2-10.26 5.6 0 2.91 1.26 3.76 13.66 5.4 12.28 1.63 18.11 3.93 18.11 12.56 0 8.7-7.26 13.69-19.92 13.69m48.66-48.89h1.34c1.1 0 1.31-.77 1.31-1.22 0-1.18-.81-1.18-1.26-1.18h-1.38zm-1.63-3.78h2.97c1.02 0 3.02 0 3.02 2.28 0 1.59-1.02 1.92-1.63 2.12 1.19.08 1.27.86 1.43 1.96.08.69.21 1.88.45 2.28h-1.83c-.05-.4-.33-2.6-.33-2.72-.12-.49-.29-.73-.9-.73h-1.51v3.46h-1.67zm-3.57 4.3c0 3.58 2.89 6.48 6.44 6.48 3.58 0 6.47-2.96 6.47-6.48 0-3.59-2.93-6.44-6.48-6.44-3.5 0-6.44 2.81-6.44 6.43m14.16.03c0 4.24-3.47 7.7-7.7 7.7-4.2 0-7.7-3.42-7.7-7.7 0-4.36 3.58-7.7 7.7-7.7 4.15 0 7.69 3.35 7.69 7.7"
        }), r.createElement("path", {
            fill: "#333",
            fillRule: "evenodd",
            d: "M94.936 90.55c0-1.84-.97-3.53-2.558-4.445l-42.356-24.37c-.715-.42-1.516-.64-2.328-.67h-.438c-.812.03-1.613.25-2.34.67L2.562 86.105C.984 87.025 0 88.715 0 90.555l.093 65.64c0 .91.47 1.76 1.27 2.21.78.48 1.76.48 2.54 0l25.18-14.42c1.59-.946 2.56-2.618 2.56-4.44V108.88c0-1.83.97-3.52 2.555-4.43l10.72-6.174c.796-.46 1.67-.688 2.56-.688.876 0 1.77.226 2.544.687l10.715 6.172c1.586.91 2.56 2.6 2.56 4.43v30.663c0 1.82.983 3.5 2.565 4.44l25.164 14.41c.79.47 1.773.47 2.56 0 .776-.45 1.268-1.3 1.268-2.21zm199.868 34.176c0 .457-.243.88-.64 1.106l-14.548 8.386c-.395.227-.883.227-1.277 0l-14.55-8.386c-.4-.227-.64-.65-.64-1.106V107.93c0-.458.24-.88.63-1.11l14.54-8.4c.4-.23.89-.23 1.29 0l14.55 8.4c.4.23.64.652.64 1.11zM298.734.324c-.794-.442-1.76-.43-2.544.027-.78.46-1.262 1.3-1.262 2.21v65c0 .64-.34 1.23-.894 1.55-.55.32-1.235.32-1.79 0L281.634 63c-1.58-.914-3.526-.914-5.112 0l-42.37 24.453c-1.583.91-2.56 2.6-2.56 4.42v48.92c0 1.83.977 3.51 2.56 4.43l42.37 24.47c1.582.91 3.53.91 5.117 0l42.37-24.48c1.58-.92 2.56-2.6 2.56-4.43V18.863c0-1.856-1.01-3.563-2.63-4.47zm141.093 107.164c1.574-.914 2.543-2.602 2.543-4.422V91.21c0-1.824-.97-3.507-2.547-4.425l-42.1-24.44c-1.59-.92-3.54-.92-5.13 0l-42.36 24.45c-1.59.92-2.56 2.6-2.56 4.43v48.9c0 1.84.99 3.54 2.58 4.45l42.09 23.99c1.55.89 3.45.9 5.02.03l25.46-14.15c.8-.45 1.31-1.3 1.31-2.22 0-.92-.49-1.78-1.29-2.23l-42.62-24.46c-.8-.45-1.29-1.3-1.29-2.21v-15.34c0-.916.48-1.76 1.28-2.216l13.26-7.65c.79-.46 1.76-.46 2.55 0l13.27 7.65c.79.45 1.28 1.3 1.28 2.21v12.06c0 .91.49 1.76 1.28 2.22.79.45 1.77.45 2.56-.01zm0 0"
        }), r.createElement("path", {
            fill: "#689f63",
            fillRule: "evenodd",
            d: "M394.538 105.2c.3-.177.676-.177.98 0l8.13 4.69c.304.176.49.5.49.85v9.39c0 .35-.186.674-.49.85l-8.13 4.69c-.304.177-.68.177-.98 0l-8.125-4.69c-.31-.176-.5-.5-.5-.85v-9.39c0-.35.18-.674.49-.85zm0 0"
        }), r.createElement("g", {
            clipPath: "url(#nodejsa)",
            transform: "translate(-78.306 -164.016)"
        }, r.createElement("path", {
            fill: "url(#nodejsb)",
            d: "M331.363 246.793l-118.715-58.19-60.87 124.174L270.49 370.97zm0 0"
        })), r.createElement("g", {
            clipPath: "url(#nodejsc)",
            transform: "translate(-78.306 -164.016)"
        }, r.createElement("path", {
            fill: "url(#nodejsd)",
            d: "M144.07 264.004l83.825 113.453 110.86-81.906-83.83-113.45zm0 0"
        })), r.createElement("g", {
            clipPath: "url(#nodejse)",
            transform: "translate(-78.306 -164.016)"
        }, r.createElement("path", {
            fill: "url(#nodejsf)",
            d: "M197.02 225.934v107.43h91.683v-107.43zm0 0"
        })));
        var V = ()=>r.createElement("svg", {
            viewBox: "5 5 38 38",
            xmlns: "http://www.w3.org/2000/svg",
            height: "48px",
            width: "48px"
        }, r.createElement("defs", null, r.createElement("style", {
            dangerouslySetInnerHTML: {
                __html: ".cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#linear-gradient-2);}.cls-3{fill:url(#linear-gradient-3);}.cls-4{fill:#666;}.cls-5{fill:url(#linear-gradient-4);}.cls-6{fill:url(#linear-gradient-5);}.cls-7{fill:url(#linear-gradient-6);}.cls-8{fill:url(#linear-gradient-7);}.cls-9{fill:url(#linear-gradient-8);}.cls-10{fill:url(#linear-gradient-9);}.cls-11{fill:url(#linear-gradient-10);}.cls-12{fill:url(#linear-gradient-11);}.cls-13{fill:url(#linear-gradient-12);}.cls-14{fill:url(#linear-gradient-13);}.cls-15{fill:url(#linear-gradient-14);}"
            }
        }), r.createElement("linearGradient", {
            gradientUnits: "userSpaceOnUse",
            id: "linear-gradient",
            x1: "22.98",
            x2: "26.48",
            y1: "23.9",
            y2: "28.27"
        }, r.createElement("stop", {
            offset: "0.04",
            stopColor: "#fbb480"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#c27c4a"
        })), r.createElement("linearGradient", {
            id: "linear-gradient-2",
            x1: "7.85",
            x2: "11.63",
            y1: "35.07",
            y2: "39.53"
        }), r.createElement("linearGradient", {
            id: "linear-gradient-3",
            x1: "7.26",
            x2: "12.14",
            y1: "33.38",
            y2: "38.26"
        }), r.createElement("linearGradient", {
            id: "linear-gradient-4",
            x1: "35.06",
            x2: "41.75",
            y1: "9.61",
            y2: "16.3"
        }), r.createElement("linearGradient", {
            id: "linear-gradient-5",
            x1: "32.45",
            x2: "41.29",
            y1: "6.23",
            y2: "17.91"
        }), r.createElement("linearGradient", {
            gradientTransform: "translate(21.95 -5.88) rotate(44.99)",
            gradientUnits: "userSpaceOnUse",
            id: "linear-gradient-6",
            x1: "17.07",
            x2: "22.48",
            y1: "22.56",
            y2: "27.98"
        }, r.createElement("stop", {
            offset: "0.01",
            stopColor: "#ffdc2e"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#f79139"
        })), r.createElement("linearGradient", {
            gradientTransform: "translate(28.21 -8.47) rotate(45)",
            gradientUnits: "userSpaceOnUse",
            id: "linear-gradient-7",
            x1: "22.57",
            x2: "26.35",
            y1: "28.06",
            y2: "31.84"
        }, r.createElement("stop", {
            offset: "0.01",
            stopColor: "#f46000"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#de722c"
        })), r.createElement("linearGradient", {
            gradientTransform: "translate(25.08 -7.17) rotate(45)",
            gradientUnits: "userSpaceOnUse",
            id: "linear-gradient-8",
            x1: "20.21",
            x2: "24.85",
            y1: "25.7",
            y2: "30.35"
        }, r.createElement("stop", {
            offset: "0.01",
            stopColor: "#f99d46"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#f46000"
        })), r.createElement("linearGradient", {
            gradientTransform: "translate(23.66 -19.41) rotate(44.98)",
            gradientUnits: "userSpaceOnUse",
            id: "linear-gradient-9",
            x1: "34.09",
            x2: "36.35",
            y1: "17.69",
            y2: "19.95"
        }, r.createElement("stop", {
            offset: "0.01",
            stopColor: "#a1a1a1"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#828282"
        })), r.createElement("linearGradient", {
            gradientTransform: "translate(17.4 -16.81) rotate(44.98)",
            gradientUnits: "userSpaceOnUse",
            id: "linear-gradient-10",
            x1: "27.79",
            x2: "30.61",
            y1: "11.39",
            y2: "14.22"
        }, r.createElement("stop", {
            offset: "0.01",
            stopColor: "#fafafa"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#dedede"
        })), r.createElement("linearGradient", {
            gradientTransform: "translate(20.55 -18.12) rotate(45)",
            gradientUnits: "userSpaceOnUse",
            id: "linear-gradient-11",
            x1: "30.43",
            x2: "34.61",
            y1: "14.03",
            y2: "18.21"
        }, r.createElement("stop", {
            offset: "0.01",
            stopColor: "#d4d4d4"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#a6a6a6"
        })), r.createElement("linearGradient", {
            gradientTransform: "translate(23.67 -19.41) rotate(44.99)",
            gradientUnits: "userSpaceOnUse",
            id: "linear-gradient-12",
            x1: "33.9",
            x2: "36.13",
            y1: "17.5",
            y2: "19.73"
        }, r.createElement("stop", {
            offset: "0.01",
            stopColor: "#b2b2b2"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#939393"
        })), r.createElement("linearGradient", {
            gradientTransform: "translate(17.41 -16.82) rotate(44.99)",
            gradientUnits: "userSpaceOnUse",
            id: "linear-gradient-13",
            x1: "28.07",
            x2: "30.21",
            y1: "11.67",
            y2: "13.81"
        }, r.createElement("stop", {
            offset: "0.01",
            stopColor: "#fafafa"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#efefef"
        })), r.createElement("linearGradient", {
            gradientTransform: "translate(20.55 -18.12) rotate(45)",
            gradientUnits: "userSpaceOnUse",
            id: "linear-gradient-14",
            x1: "30.39",
            x2: "34.73",
            y1: "14",
            y2: "18.34"
        }, r.createElement("stop", {
            offset: "0.01",
            stopColor: "#e5e5e5"
        }), r.createElement("stop", {
            offset: "1",
            stopColor: "#b7b7b7"
        }))), r.createElement("title", null), r.createElement("g", {
            id: "icons"
        }, r.createElement("g", {
            "data-name": "Layer 3",
            id: "Layer_3"
        }, r.createElement("path", {
            className: "cls-1",
            d: "M41.43,11.27,36.61,6.46a2.8,2.8,0,0,0-4,0L8,31.06,6.27,38.73l3.06,3.06,7.49-1.94,24.61-24.6A2.83,2.83,0,0,0,41.43,11.27Z"
        }), r.createElement("polygon", {
            className: "cls-2",
            points: "7.24 39.7 10.56 33.59 14.29 37.32 8.19 40.65 7.24 39.7"
        }), r.createElement("polygon", {
            className: "cls-3",
            points: "9.33 41.78 16.82 39.85 18.45 38.23 14.29 37.32 8.19 40.65 9.33 41.78"
        }), r.createElement("path", {
            className: "cls-4",
            d: "M7.33,42.3l2-.51L6.27,38.73s-.21.91-.46,2S6.23,42.58,7.33,42.3Z"
        }), r.createElement("path", {
            className: "cls-5",
            d: "M41.43,11.27,36.61,6.46a2.8,2.8,0,0,0-4,0L29.92,9.17l2.53,2.53,3.73,3.73L38.71,18l2.72-2.71A2.83,2.83,0,0,0,41.43,11.27Z"
        }), r.createElement("path", {
            className: "cls-6",
            d: "M41.46,11.87,37.62,8a2.25,2.25,0,0,0-3.17,0l-3.07,3.08,2,2,3,3,2,2L41.46,15A2.24,2.24,0,0,0,41.46,11.87Z"
        }), r.createElement("rect", {
            className: "cls-7",
            height: "3.58",
            transform: "translate(-11.37 19.67) rotate(-44.99)",
            width: "24.8",
            x: "5.67",
            y: "21.77"
        }), r.createElement("rect", {
            className: "cls-8",
            height: "3.58",
            transform: "translate(-13.96 25.93) rotate(-45)",
            width: "24.8",
            x: "11.92",
            y: "28.03"
        }), r.createElement("rect", {
            className: "cls-9",
            height: "5.27",
            transform: "translate(-12.66 22.8) rotate(-45)",
            width: "24.8",
            x: "8.79",
            y: "24.05"
        }), r.createElement("rect", {
            className: "cls-10",
            height: "3.58",
            transform: "translate(-3.02 30.45) rotate(-44.98)",
            width: "7.63",
            x: "31.46",
            y: "17.08"
        }), r.createElement("rect", {
            className: "cls-11",
            height: "3.58",
            transform: "translate(-0.43 24.2) rotate(-44.98)",
            width: "7.62",
            x: "25.2",
            y: "10.83"
        }), r.createElement("rect", {
            className: "cls-12",
            height: "5.27",
            transform: "translate(-1.72 27.34) rotate(-45)",
            width: "7.62",
            x: "28.33",
            y: "13.11"
        }), r.createElement("rect", {
            className: "cls-13",
            height: "3.58",
            transform: "translate(-3.02 30.46) rotate(-44.99)",
            width: "6.15",
            x: "32.19",
            y: "17.08"
        }), r.createElement("rect", {
            className: "cls-14",
            height: "3.58",
            transform: "translate(-0.43 24.2) rotate(-44.99)",
            width: "6.15",
            x: "25.94",
            y: "10.83"
        }), r.createElement("rect", {
            className: "cls-15",
            height: "5.27",
            transform: "translate(-1.72 27.34) rotate(-45)",
            width: "6.15",
            x: "29.06",
            y: "13.11"
        }))));
        var H = ()=>r.createElement("svg", {
            version: "1.1",
            x: "0px",
            y: "0px",
            viewBox: "0 0 240 234",
            width: "240px",
            height: "234px"
        }, r.createElement("path", {
            fill: "#001D26",
            d: "M10,10h220v214H10V10z"
        }), r.createElement("path", {
            fill: "#00C8FF",
            d: "M0,0v234h240V0H0z M10,10h220v214H10V10z M58,54.8c0-0.7,1.4-1.2,2.2-1.2c6.4-0.3,15.9-0.5,25.8-0.5 c27.7,0,38.5,15.2,38.5,34.7c0,25.4-18.4,36.3-41,36.3c-3.8,0-5.1-0.2-7.8-0.2v38.4c0,0.8-0.3,1.2-1.2,1.2H59.2 c-0.8,0-1.2-0.3-1.2-1.2L58,54.8L58,54.8z M75.8,107.9c2.3,0.2,4.1,0.2,8.1,0.2c11.7,0,22.7-4.1,22.7-20c0-12.7-7.9-19.1-21.2-19.1 c-4,0-7.8,0.2-9.6,0.3V107.9L75.8,107.9z M161.8,96c-7.9,0-10.6,4-10.6,7.3c0,3.6,1.8,6.1,12.4,11.6c15.7,7.6,20.6,14.9,20.6,25.6 c0,16-12.2,24.6-28.7,24.6c-8.7,0-16.2-1.8-20.5-4.3c-0.7-0.3-0.8-0.8-0.8-1.6v-14.7c0-1,0.5-1.3,1.2-0.8c6.3,4.1,13.5,5.9,20.1,5.9 c7.9,0,11.2-3.3,11.2-7.8c0-3.6-2.3-6.8-12.4-12c-14.2-6.8-20.1-13.7-20.1-25.2c0-12.9,10.1-23.6,27.6-23.6c8.6,0,14.6,1.3,17.9,2.8 c0.8,0.5,1,1.3,1,2v13.7c0,0.8-0.5,1.3-1.5,1C174.8,97.7,168.3,96,161.8,96L161.8,96z"
        }));
        var P = ()=>r.createElement("svg", {
            width: "40px",
            height: "33px",
            viewBox: "0 0 40 33",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, r.createElement("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, r.createElement("path", {
            d: "M2.55859375,32.0507812 C3.69140625,31.4648438 5.1953125,30.5371094 7.0703125,29.2675781 C8.9453125,27.9980469 10.6640625,26.5625 12.2265625,24.9609375 C13.75,23.3984375 15.078125,21.5527344 16.2109375,19.4238281 C17.34375,17.2949219 17.9101562,14.9414062 17.9101562,12.3632812 C17.9101562,8.80859375 17.1875,5.92773438 15.7421875,3.72070312 C14.296875,1.51367188 11.9140625,0.41015625 8.59375,0.41015625 C6.4453125,0.41015625 4.74609375,1.12304688 3.49609375,2.54882812 C2.24609375,3.97460938 1.62109375,5.48828125 1.62109375,7.08984375 C1.62109375,9.31640625 2.3046875,11.0546875 3.671875,12.3046875 C5.0390625,13.5546875 6.953125,14.1796875 9.4140625,14.1796875 L9.4140625,14.1796875 L12.2265625,14.1796875 C12.0703125,16.25 11.6796875,17.9199219 11.0546875,19.1894531 C10.4296875,20.4589844 9.58984375,21.6796875 8.53515625,22.8515625 C7.75390625,23.75 6.63085938,24.6972656 5.16601562,25.6933594 C3.70117188,26.6894531 2.16796875,27.65625 0.56640625,28.59375 L0.56640625,28.59375 L2.55859375,32.0507812 Z M24.2382812,32.0507812 C25.3710938,31.4648438 26.875,30.5371094 28.75,29.2675781 C30.625,27.9980469 32.34375,26.5625 33.90625,24.9609375 C35.4296875,23.3984375 36.7578125,21.5527344 37.890625,19.4238281 C39.0234375,17.2949219 39.5898438,14.9414062 39.5898438,12.3632812 C39.5898438,8.80859375 38.8671875,5.92773438 37.421875,3.72070312 C35.9765625,1.51367188 33.59375,0.41015625 30.2734375,0.41015625 C28.125,0.41015625 26.4257812,1.12304688 25.1757812,2.54882812 C23.9257812,3.97460938 23.3007812,5.48828125 23.3007812,7.08984375 C23.3007812,9.31640625 23.984375,11.0546875 25.3515625,12.3046875 C26.71875,13.5546875 28.6328125,14.1796875 31.09375,14.1796875 L31.09375,14.1796875 L33.90625,14.1796875 C33.75,16.25 33.359375,17.9199219 32.734375,19.1894531 C32.109375,20.4589844 31.2695312,21.6796875 30.2148438,22.8515625 C29.4335938,23.75 28.3105469,24.6972656 26.8457031,25.6933594 C25.3808594,26.6894531 23.8476562,27.65625 22.2460938,28.59375 L22.2460938,28.59375 L24.2382812,32.0507812 Z",
            id: "”",
            fill: "#FFFFFF",
            fillRule: "nonzero"
        })));
        var G = ()=>r.createElement("svg", {
            width: "40px",
            height: "33px",
            viewBox: "0 0 40 33",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, r.createElement("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, r.createElement("path", {
            d: "M10.0039062,32.2851562 C12.1523438,32.2851562 13.8417969,31.5722656 15.0722656,30.1464844 C16.3027344,28.7207031 16.9179688,27.1875 16.9179688,25.546875 C16.9179688,23.2421875 16.2246094,21.4941406 14.8378906,20.3027344 C13.4511719,19.1113281 11.546875,18.515625 9.125,18.515625 L9.125,18.515625 L6.3125,18.515625 C6.546875,16.484375 6.95703125,14.8242188 7.54296875,13.5351562 C8.12890625,12.2460938 8.96875,11.015625 10.0625,9.84375 C11.234375,8.59375 12.3867188,7.58789062 13.5195312,6.82617188 C14.6523438,6.06445312 16.1367188,5.15625 17.9726562,4.1015625 L17.9726562,4.1015625 L15.8632812,0.5859375 C14.6523438,1.328125 13.1484375,2.28515625 11.3515625,3.45703125 C9.5546875,4.62890625 7.85546875,6.0546875 6.25390625,7.734375 C4.69140625,9.375 3.36328125,11.2402344 2.26953125,13.3300781 C1.17578125,15.4199219 0.62890625,17.734375 0.62890625,20.2734375 C0.62890625,23.8671875 1.3515625,26.7675781 2.796875,28.9746094 C4.2421875,31.1816406 6.64453125,32.2851562 10.0039062,32.2851562 Z M31.6835938,32.2851562 C33.8320312,32.2851562 35.5214844,31.5722656 36.7519531,30.1464844 C37.9824219,28.7207031 38.5976562,27.1875 38.5976562,25.546875 C38.5976562,23.2421875 37.9042969,21.4941406 36.5175781,20.3027344 C35.1308594,19.1113281 33.2265625,18.515625 30.8046875,18.515625 L30.8046875,18.515625 L27.9921875,18.515625 C28.2265625,16.484375 28.6269531,14.8339844 29.1933594,13.5644531 C29.7597656,12.2949219 30.609375,11.0546875 31.7421875,9.84375 C32.9140625,8.59375 34.0664062,7.58789062 35.1992188,6.82617188 C36.3320312,6.06445312 37.8164062,5.15625 39.6523438,4.1015625 L39.6523438,4.1015625 L37.5429688,0.5859375 C36.3320312,1.328125 34.828125,2.28515625 33.03125,3.45703125 C31.234375,4.62890625 29.5351562,6.0546875 27.9335938,7.734375 C26.3710938,9.375 25.0429688,11.2402344 23.9492188,13.3300781 C22.8554688,15.4199219 22.3085938,17.734375 22.3085938,20.2734375 C22.3085938,23.8671875 23.03125,26.7675781 24.4765625,28.9746094 C25.921875,31.1816406 28.3242188,32.2851562 31.6835938,32.2851562 Z",
            id: "“",
            fill: "#FFFFFF",
            fillRule: "nonzero"
        })));
        var D = ()=>r.createElement("svg", {
            id: "Layer_1",
            "data-name": "Layer 1",
            viewBox: "0 0 23 20.46348",
            width: "230px",
            height: "230px"
        }, r.createElement("title", null, "logo"), r.createElement("path", {
            d: "M18.9107,6.63257h0q-.36721-.126-.74042-.2333.06187-.25141.11441-.505c.56045-2.72064.194-4.91237-1.05739-5.63386-1.1998-.692-3.1621.02952-5.14394,1.75414q-.29293.2555-.57267.52554-.18727-.17951-.3811-.352C9.05257.3439,6.97066-.43316,5.72058.29046,4.52191.98436,4.16686,3.04489,4.67144,5.62322q.0753.383.17.76179c-.29458.08367-.57908.17284-.85127.26771C1.55514,7.50165,0,8.83225,0,10.21231c0,1.42546,1.66935,2.8552,4.20575,3.722q.3085.10494.62193.19442-.10179.408-.18068.82114c-.48106,2.53354-.10535,4.54521,1.09017,5.23484,1.23481.712,3.30725-.01985,5.32533-1.78387q.23926-.20917.47994-.44238.3029.29225.62173.56727c1.95477,1.68207,3.88531,2.36132,5.07982,1.66986,1.23369-.71416,1.63454-2.87525,1.114-5.50459q-.05955-.30124-.13792-.61481.21834-.06443.42772-.13355C21.28454,13.06915,23,11.65681,23,10.21232,23,8.82726,21.39478,7.48771,18.9107,6.63257ZM12.7284,2.75581C14.42646,1.278,16.01346.69457,16.73657,1.1116h0c.77014.44421,1.06971,2.2354.5858,4.58441q-.04758.22953-.10342.45724a23.53752,23.53752,0,0,0-3.07527-.48584A23.08128,23.08128,0,0,0,12.1995,3.24094Q12.45788,2.99184,12.7284,2.75581ZM6.79111,11.39124q.312.60265.65207,1.19013.34692.59911.7221,1.18117a20.92168,20.92168,0,0,1-2.11967-.3408C6.24867,12.766,6.49887,12.08443,6.79111,11.39124ZM6.79,9.08041c-.28613-.67863-.53093-1.34586-.73085-1.99019.65624-.14688,1.356-.26689,2.08516-.358q-.36611.571-.7051,1.15877Q7.10076,8.478,6.79,9.08041Zm.52228,1.15552q.45411-.94517.9783-1.8542v.0002q.52369-.90857,1.11521-1.77542c.684-.05171,1.38536-.07879,2.09432-.07879.71212,0,1.41437.02728,2.09819.0794q.58514.86487,1.10818,1.76941.52565.90635.99153,1.84545-.46083.94817-.98828,1.86173h-.0001q-.52261.90786-1.1034,1.7803c-.6824.04876-1.3876.0739-2.10623.0739-.71568,0-1.41193-.02229-2.08241-.06575q-.59555-.86995-1.12406-1.78305Q7.76789,11.18148,7.31227,10.23593Zm8.24853,2.33862q.347-.60182.667-1.21863h0a20.86671,20.86671,0,0,1,.77238,2.02327,20.85164,20.85164,0,0,1-2.14552.36573Q15.21935,13.16682,15.5608,12.57455Zm.65767-3.49343q-.31883-.605-.66163-1.19684h0q-.33727-.58258-.6994-1.15022c.7339.09263,1.437.21579,2.09717.36654A20.95909,20.95909,0,0,1,16.21847,9.08112ZM11.511,3.94359a21.01288,21.01288,0,0,1,1.3535,1.63393q-1.35843-.06419-2.7184-.00061C10.593,4.98765,11.0507,4.44022,11.511,3.94359ZM6.21284,1.14081c.76953-.44543,2.47095.18973,4.26428,1.782.11461.10179.22974.20836.34507.3186A23.54542,23.54542,0,0,0,8.86294,5.66608a24.008,24.008,0,0,0-3.06916.477q-.088-.35228-.15808-.70866v.0001C5.20339,3.22536,5.49044,1.559,6.21284,1.14081ZM5.09132,13.18233q-.286-.08187-.56778-.17773A8.32371,8.32371,0,0,1,1.841,11.57955a2.03072,2.03072,0,0,1-.85849-1.36724c0-.83742,1.24865-1.90571,3.33117-2.63178q.39208-.1361.79162-.24908a23.56455,23.56455,0,0,0,1.121,2.90478A23.92247,23.92247,0,0,0,5.09132,13.18233ZM10.41594,17.661a8.32161,8.32161,0,0,1-2.57467,1.61184h-.0001a2.03042,2.03042,0,0,1-1.61306.06067c-.72556-.41836-1.02706-2.03376-.61573-4.20035q.07337-.38407.168-.76363a23.10444,23.10444,0,0,0,3.0995.44869,23.90954,23.90954,0,0,0,1.97431,2.43929Q10.64,17.46459,10.41594,17.661Zm1.12223-1.11053c-.46569-.50253-.93015-1.05831-1.38383-1.65612q.66051.026,1.34566.02606.70326,0,1.38841-.03084A20.89425,20.89425,0,0,1,11.53817,16.55045Zm5.96651,1.367a2.03039,2.03039,0,0,1-.753,1.4278c-.72485.41958-2.275-.12581-3.94659-1.56431q-.2875-.24735-.57837-.52727a23.08914,23.08914,0,0,0,1.9279-2.448,22.93647,22.93647,0,0,0,3.11507-.48014q.07024.284.12449.55638h0A8.32,8.32,0,0,1,17.50468,17.91749Zm.83417-4.90739h-.0001c-.12571.04163-.25478.08184-.38629.12082a23.06121,23.06121,0,0,0-1.16468-2.91373,23.05112,23.05112,0,0,0,1.11938-2.87128c.23524.0682.46365.14.68372.21579,2.12842.73258,3.42665,1.81593,3.42665,2.65061C22.01753,11.10145,20.61538,12.25574,18.33885,13.0101Z",
            fill: "#61dafb"
        }), r.createElement("path", {
            d: "M11.5,8.1585a2.05386,2.05386,0,1,1-2.05381,2.05381A2.05381,2.05381,0,0,1,11.5,8.1585",
            fill: "#61dafb"
        }));
        var U = ()=>r.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "411",
            height: "155",
            viewBox: "0 0 411 155"
        }, r.createElement("g", {
            fill: "#CC0000",
            "fill-rule": "evenodd",
            transform: "translate(8 8)"
        }, r.createElement("path", {
            d: "M344.6 121.5L344.6 139.6 377.3 139.6C384 139.6 395.5 134.7 395.9 121L395.9 114C395.9 102.3 386.3 95.4 377.3 95.4L361 95.4 361 87 393.3 87 393.3 68.8 362.3 68.8C354.3 68.8 343.6 75.4 343.6 87.7L343.6 94C343.6 106.3 354.2 112.6 362.3 112.6 384.8 112.7 356.9 112.6 377.7 112.6L377.7 121.4M169.4 117.1C169.4 117.1 186.9 115.6 186.9 93 186.9 70.4 165.7 68.3 165.7 68.3L127.5 68.3 127.5 139.6 146.7 139.6 146.7 122.4 163.3 139.6 191.7 139.6 169.4 117.1zM162 102.5L146.7 102.5 146.7 86.2 162.1 86.2C162.1 86.2 166.4 87.8 166.4 94.3 166.4 100.8 162 102.5 162 102.5zM234.3 68.8L214.8 68.8C200.9 68.8 196.2 81.4 196.2 87.4L196.2 139.6 215.7 139.6 215.7 127.1 234 127.1 234 139.6 252.9 139.6 252.9 87.4C252.9 72.2 239.1 68.8 234.3 68.8zM234 106.9L215.6 106.9 215.6 89.6C215.6 89.6 215.6 85.7 221.7 85.7L228.4 85.7C233.8 85.7 233.9 89.6 233.9 89.6L233.9 106.9 234 106.9z"
        }), r.createElement("rect", {
            width: "20.3",
            height: "70.8",
            x: "261.8",
            y: "68.8"
        }), r.createElement("polygon", {
            points: "310.6 121.3 310.6 68.8 290.4 68.8 290.4 121.3 290.4 139.6 310.6 139.6 337.9 139.6 337.9 121.3"
        }), r.createElement("path", {
            d: "M7,139.6 L86,139.6 C86,139.6 70.9,70.7 120.9,42.8 C131.8,37.5 166.5,17.7 223.3,59.7 C225.1,58.2 226.8,57 226.8,57 C226.8,57 174.8,5.1 116.9,10.9 C87.8,13.5 52,40 31,75 C10,110 7,139.6 7,139.6 Z"
        }), r.createElement("path", {
            d: "M7,139.6 L86,139.6 C86,139.6 70.9,70.7 120.9,42.8 C131.8,37.5 166.5,17.7 223.3,59.7 C225.1,58.2 226.8,57 226.8,57 C226.8,57 174.8,5.1 116.9,10.9 C87.8,13.5 52,40 31,75 C10,110 7,139.6 7,139.6 Z"
        }), r.createElement("path", {
            d: "M7 139.6L86 139.6C86 139.6 70.9 70.7 120.9 42.8 131.8 37.5 166.5 17.7 223.3 59.7 225.1 58.2 226.8 57 226.8 57 226.8 57 174.8 5.1 116.9 10.9 87.7 13.5 51.9 40 30.9 75 9.9 110 7 139.6 7 139.6zM171.6 16.5L172 9.8C171.1 9.3 168.6 8.1 162.3 6.3L161.9 12.9C165.2 14 168.4 15.2 171.6 16.5z"
        }), r.createElement("path", {
            d: "M162.1 37.7L161.7 44C165 44.1 168.3 44.5 171.6 45.2L172 39C168.6 38.3 165.3 37.9 162.1 37.7zM125.1 6.5L126.1 6.5 124.1.4C121 .4 117.8.6 114.5 1L116.4 6.9C119.3 6.6 122.2 6.5 125.1 6.5zM129.9 43.3L132.2 50.2C135.1 48.8 138 47.6 140.9 46.7L138.7 40.1C135.3 41.1 132.4 42.2 129.9 43.3zM84.5 17L80 10.1C77.5 11.4 74.9 12.8 72.2 14.4L76.8 21.4C79.4 19.8 81.9 18.3 84.5 17zM105 62L109.8 69.2C111.5 66.7 113.5 64.4 115.7 62.1L111.2 55.3C108.9 57.4 106.8 59.7 105 62zM90.5 94.2L98.6 100.6C99 96.7 99.7 92.8 100.7 88.9L93.5 83.2C92.2 86.9 91.3 90.6 90.5 94.2zM46.7 46.7L39.6 40.5C37 43 34.5 45.5 32.2 48L39.9 54.6C42 51.9 44.3 49.2 46.7 46.7zM16.5 91.4L5 87.2C3.1 91.5 1 96.5 0 99.2L11.5 103.4C12.8 100 14.9 95.1 16.5 91.4zM89 119.6C89.2 124.9 89.7 129.2 90.2 132.2L102.2 136.5C101.3 132.6 100.4 128.2 99.8 123.5L89 119.6z"
        })));
        var I = ()=>r.createElement("svg", {
            viewBox: "0 0 730.35999 547.46667",
            height: "547.46667",
            width: "730.35999",
            id: "svg2",
            version: "1.1"
        }, r.createElement("g", {
            transform: "matrix(1.3333333,0,0,-1.3333333,0,547.46667)",
            id: "g10"
        }, r.createElement("g", {
            transform: "scale(0.1)",
            id: "g12"
        }, r.createElement("path", {
            fill: "#cd4a9c",
            d: "m 3873.13,1003.19 c -17.38,12.37 -14.49,52.35 42.67,176.87 22.44,48.89 73.64,131.2 162.65,209.86 10.31,-32.35 16.6,-63.37 16.42,-92.25 -1.15,-192.66 -138.61,-264.61 -221.74,-294.48 z M 3141.45,836.402 c -23.3,-12.191 -44.66,-19.851 -54.59,-13.941 -7.28,4.348 9.61,20.398 9.61,20.398 0,0 118.81,127.801 165.6,186.001 27.22,33.84 58.78,74.01 93.17,118.94 0.28,-4.49 0.43,-8.94 0.43,-13.34 -0.35,-153.12 -148.26,-256.499 -214.22,-298.058 z m -949.78,453.178 c -54.96,-133.99 -169.99,-476.779 -240,-458.408 -60.1,15.769 -96.7,276.348 -12,532.798 42.63,129.09 133.7,283.34 187.2,343.21 86.13,96.34 180.96,127.85 204,88.79 29.37,-49.77 -104.74,-422.4 -139.2,-506.39 z M 1042.07,508.059 C 884.273,335.91 663.809,270.852 569.273,325.648 467.191,384.84 507.621,638.281 701.27,820.961 c 118.031,111.328 270.398,213.869 371.48,277.029 23,13.84 56.8,34.17 97.87,58.78 6.81,3.88 10.65,6.03 10.65,6.03 l -0.15,0.26 c 7.93,4.74 16.05,9.61 24.44,14.62 70.46,-260.02 2.14,-488.938 -163.49,-669.621 z m 3672.1,1237.981 c -191.45,-1.01 -357.27,-46.97 -496.27,-115.48 -50.84,101.46 -102.29,190.72 -110.93,257.09 -10.09,77.48 -21.78,123.7 -9.6,216 12.19,92.3 65.59,223 64.81,232.79 -0.78,9.79 -11.98,56.81 -122.4,57.61 -110.43,0.79 -204.89,-21.24 -216,-50.4 -11.12,-29.16 -32.38,-94.78 -45.61,-163.2 -19.34,-100.13 -220.47,-457.23 -334.67,-644.05 -37.35,72.91 -69.11,137.2 -75.73,188.04 -10.08,77.48 -21.78,123.7 -9.6,216.01 12.19,92.29 65.59,223.01 64.81,232.8 -0.78,9.79 -11.97,56.8 -122.4,57.6 -110.43,0.79 -204.89,-21.24 -216,-50.4 -11.12,-29.16 -22.99,-97.29 -45.61,-163.2 -22.62,-65.92 -289.98,-661.61 -360,-816.01 -35.68,-78.67 -66.73,-141.87 -88.65,-185.04 -0.06,0.11 -0.14,0.24 -0.14,0.24 0,0 -1.35,-2.87 -3.68,-7.72 -18.76,-36.74 -29.93,-57.068 -29.93,-57.068 0,0 0.12,-0.281 0.33,-0.761 -14.88,-26.981 -30.83,-52.039 -38.73,-52.039 -5.52,0 -16.57,71.82 2.41,170.398 39.78,206.64 135.35,528.9 134.4,540 -0.5,5.69 17.76,61.84 -62.41,91.2 -77.93,28.52 -105.68,-19.05 -112.79,-19.2 -6.89,-0.15 -12.01,-16.81 -12.01,-16.81 0,0 86.82,362.4 -165.6,362.4 -157.81,0 -376.48,-172.63 -484.2,-329.11 -67.98,-37.08 -213.45,-116.49 -367.79,-201.29 -59.28,-32.56 -119.77,-65.85 -177.13,-97.45 -3.9,4.32 -7.79,8.65 -11.8,12.93 -306.074,326.55 -871.887,557.52 -847.875,996.53 8.727,159.6 64.203,579.84 1087.205,1089.6 838,417.58 1508.86,302.67 1624.8,48 C 3291,3182.21 2766.84,2506 1896.57,2408.45 c -331.58,-37.17 -506.17,91.33 -549.6,139.2 -45.71,50.38 -52.53,52.65 -69.6,43.2 -27.8,-15.41 -10.18,-59.89 0,-86.4 25.99,-67.63 132.61,-187.55 314.4,-247.2 159.92,-52.48 549.22,-81.31 1020,100.8 527.3,203.96 939.04,771.34 818.1,1245.6 -122.99,482.35 -922.76,640.92 -1679.69,372 C 1299.69,3815.61 812.016,3564.42 461.379,3236.45 44.4609,2846.48 -22.0234,2507.07 5.37109,2365.25 102.711,1861.34 797.262,1533.19 1075.39,1289.99 c -13.73,-7.57 -26.6,-14.68 -38.31,-21.14 C 897.637,1199.87 368.203,922.801 235.773,630.051 85.5547,297.98 259.688,59.7305 374.973,27.6523 732.156,-71.7383 1098.69,107.031 1295.67,400.84 c 196.94,293.742 172.89,676.22 82.5,850.81 -1.12,2.17 -2.36,4.29 -3.51,6.44 36,21.31 72.72,42.98 109.11,64.35 70.97,41.67 140.63,80.55 201.09,113.45 -33.82,-92.69 -58.6,-203.79 -71.49,-364.24 -15.14,-188.502 62.11,-432.15 163.2,-528.009 44.51,-42.2 98.06,-43.192 132,-43.192 117.63,0 171.31,97.86 230.4,213.602 72.49,141.949 136.8,307.199 136.8,307.199 0,0 -80.72,-446.398 139.21,-446.398 80.13,0 160.74,103.91 196.64,156.89 0.1,-0.582 0.15,-0.89 0.15,-0.89 0,0 2.09,3.449 6.17,10.367 8.32,12.722 13.03,20.82 13.03,20.82 0,0 0.16,0.84 0.42,2.301 32.21,55.93 103.65,183.441 210.79,393.71 138.42,271.67 271.19,612 271.19,612 0,0 12.35,-83.21 52.8,-220.8 23.8,-80.96 74.36,-170.45 114.25,-256.27 -32.11,-44.55 -51.85,-70.14 -51.85,-70.14 0,0 0.19,-0.47 0.54,-1.33 -25.66,-34.06 -54.43,-70.82 -84.53,-106.66 -109.25,-130.12 -239.38,-278.709 -256.81,-321.6 -20.52,-50.531 -15.67,-87.699 24,-117.602 28.98,-21.839 80.57,-25.226 134.4,-21.597 98.18,6.597 167.26,30.949 201.34,45.781 53.13,18.789 115,48.34 173.07,91.02 107.17,78.789 171.81,191.5 165.6,340.798 -3.44,82.28 -29.68,163.83 -62.87,240.82 9.73,13.98 19.48,28.09 29.26,42.38 168.95,246.99 300,518.4 300,518.4 0,0 12.35,-83.2 52.81,-220.8 20.47,-69.65 60.86,-145.62 97.18,-220.14 -158.86,-129.08 -257.38,-279.06 -291.59,-377.46 -63.25,-181.971 -13.71,-264.428 79.21,-283.198 42.09,-8.511 101.53,10.778 146.25,29.707 55.64,18.45 122.5,49.18 184.95,95.082 107.17,78.789 210.21,189.119 204,338.409 -2.84,67.97 -21.27,135.43 -46.28,200.24 134.66,56.09 309.01,87.28 531.08,61.35 476.4,-55.63 569.86,-353.09 552,-477.59 -17.87,-124.51 -117.8,-192.94 -151.21,-213.612 -33.4,-20.656 -43.6,-27.828 -40.79,-43.199 4.06,-22.34 19.51,-21.48 47.99,-16.68 39.22,6.621 250.17,101.27 259.2,331.081 11.47,291.76 -268.06,612.24 -763.2,609.6"
        }))));
        var W = ()=>r.createElement("svg", {
            width: "494px",
            height: "447px",
            viewBox: "0 0 494 447",
            version: "1.1"
        }, r.createElement("g", {
            id: "Page-1",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, r.createElement("g", {
            id: "Sketch-Flat-Logo",
            transform: "translate(-9.000000, -28.000000)"
        }, r.createElement("g", {
            id: "Group",
            transform: "translate(9.000000, 28.000000)"
        }, r.createElement("g", {
            id: "Base",
            fill: "#FFAE00"
        }, r.createElement("polygon", {
            id: "Polygon",
            transform: "translate(247.000000, 223.500000) rotate(-180.000000) translate(-247.000000, -223.500000) ",
            points: "247 5.68434189e-14 494 287 387 432 247 447 107 432 -2.84217094e-13 287"
        })), r.createElement("g", {
            id: "Bottom-Back",
            transform: "translate(0.000000, 160.000000)",
            fill: "#EC6C00"
        }, r.createElement("polygon", {
            id: "Polygon",
            transform: "translate(247.000000, 143.500000) rotate(-180.000000) translate(-247.000000, -143.500000) ",
            points: "247 1.13686838e-13 494 287 -5.68434189e-14 287"
        })), r.createElement("g", {
            id: "Bottom-Mid",
            transform: "translate(100.000000, 160.000000)",
            fill: "#FFAE00"
        }, r.createElement("polygon", {
            id: "Polygon",
            transform: "translate(147.000000, 143.500000) rotate(-180.000000) translate(-147.000000, -143.500000) ",
            points: "147 0 294 287 2.84217094e-13 287"
        })), r.createElement("g", {
            id: "Top-Mid",
            transform: "translate(100.000000, 0.000000)",
            fill: "#FFEFB4"
        }, r.createElement("polygon", {
            id: "Polygon",
            transform: "translate(147.000000, 80.000000) rotate(-180.000000) translate(-147.000000, -80.000000) ",
            points: "147 160 294 2.70983236e-12 5.68434189e-14 -5.68434189e-14"
        })), r.createElement("g", {
            id: "Top-Side-Left",
            transform: "translate(0.000000, 15.000000)",
            fill: "#FFAE00"
        }, r.createElement("polygon", {
            id: "Polygon",
            transform: "translate(53.500000, 72.500000) rotate(-180.000000) translate(-53.500000, -72.500000) ",
            points: "-2.27373675e-13 145 55 72 107 2.72848411e-12 6 5.68434189e-14"
        })), r.createElement("g", {
            id: "Top-Side-Right",
            transform: "translate(440.500000, 87.500000) scale(-1, 1) translate(-440.500000, -87.500000) translate(387.000000, 15.000000)",
            fill: "#FFAE00"
        }, r.createElement("polygon", {
            id: "Polygon",
            transform: "translate(53.500000, 72.500000) rotate(-180.000000) translate(-53.500000, -72.500000) ",
            points: "-2.27373675e-13 145 55 72 107 2.72848411e-12 6 5.68434189e-14"
        })), r.createElement("g", {
            id: "Top-Left",
            transform: "translate(100.000000, 0.000000)",
            fill: "#FED305"
        }, r.createElement("polygon", {
            id: "Polygon",
            transform: "translate(73.500000, 80.000000) rotate(-180.000000) translate(-73.500000, -80.000000) ",
            points: "140 145 147 2.95585778e-12 2.27373675e-13 160"
        })), r.createElement("g", {
            id: "Top-Right",
            transform: "translate(247.000000, 0.000000)",
            fill: "#FED305"
        }, r.createElement("polygon", {
            id: "Polygon",
            transform: "translate(73.500000, 80.000000) scale(-1, 1) rotate(-180.000000) translate(-73.500000, -80.000000) ",
            points: "140 145 147 0 -1.42108547e-14 160"
        }))))));
        var _ = ()=>r.createElement("svg", {
            className: "sphere",
            viewBox: "0 0 440 440"
        }, r.createElement("path", {
            d: "M361.604 361.238c-24.407 24.408-51.119 37.27-59.662 28.727-8.542-8.543 4.319-35.255 28.726-59.663 24.408-24.407 51.12-37.269 59.663-28.726 8.542 8.543-4.319 35.255-28.727 59.662z"
        }), r.createElement("path", {
            d: "M360.72 360.354c-35.879 35.88-75.254 54.677-87.946 41.985-12.692-12.692 6.105-52.067 41.985-87.947 35.879-35.879 75.254-54.676 87.946-41.984 12.692 12.692-6.105 52.067-41.984 87.946z"
        }), r.createElement("path", {
            d: "M357.185 356.819c-44.91 44.91-94.376 68.258-110.485 52.149-16.11-16.11 7.238-65.575 52.149-110.485 44.91-44.91 94.376-68.259 110.485-52.15 16.11 16.11-7.239 65.576-52.149 110.486z"
        }), r.createElement("path", {
            d: "M350.998 350.632c-53.21 53.209-111.579 81.107-130.373 62.313-18.794-18.793 9.105-77.163 62.314-130.372 53.209-53.21 111.579-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z"
        }), r.createElement("path", {
            d: "M343.043 342.677c-59.8 59.799-125.292 91.26-146.283 70.268-20.99-20.99 10.47-86.483 70.269-146.282 59.799-59.8 125.292-91.26 146.283-70.269 20.99 20.99-10.47 86.484-70.27 146.283z"
        }), r.createElement("path", {
            d: "M334.646 334.28c-65.169 65.169-136.697 99.3-159.762 76.235-23.065-23.066 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z"
        }), r.createElement("path", {
            d: "M324.923 324.557c-69.806 69.806-146.38 106.411-171.031 81.76-24.652-24.652 11.953-101.226 81.759-171.032 69.806-69.806 146.38-106.411 171.031-81.76 24.652 24.653-11.953 101.226-81.759 171.032z"
        }), r.createElement("path", {
            d: "M312.99 312.625c-73.222 73.223-153.555 111.609-179.428 85.736-25.872-25.872 12.514-106.205 85.737-179.428s153.556-111.609 179.429-85.737c25.872 25.873-12.514 106.205-85.737 179.429z"
        }), r.createElement("path", {
            d: "M300.175 299.808c-75.909 75.909-159.11 115.778-185.837 89.052-26.726-26.727 13.143-109.929 89.051-185.837 75.908-75.908 159.11-115.778 185.837-89.051 26.726 26.726-13.143 109.928-89.051 185.836z"
        }), r.createElement("path", {
            d: "M284.707 284.34c-77.617 77.617-162.303 118.773-189.152 91.924-26.848-26.848 14.308-111.534 91.924-189.15C265.096 109.496 349.782 68.34 376.63 95.188c26.849 26.849-14.307 111.535-91.923 189.151z"
        }), r.createElement("path", {
            d: "M269.239 267.989c-78.105 78.104-163.187 119.656-190.035 92.807-26.849-26.848 14.703-111.93 92.807-190.035 78.105-78.104 163.187-119.656 190.035-92.807 26.849 26.848-14.703 111.93-92.807 190.035z"
        }), r.createElement("path", {
            d: "M252.887 252.52C175.27 330.138 90.584 371.294 63.736 344.446 36.887 317.596 78.043 232.91 155.66 155.293 233.276 77.677 317.962 36.521 344.81 63.37c26.85 26.848-14.307 111.534-91.923 189.15z"
        }), r.createElement("path", {
            d: "M236.977 236.61C161.069 312.52 77.867 352.389 51.14 325.663c-26.726-26.727 13.143-109.928 89.052-185.837 75.908-75.908 159.11-115.777 185.836-89.05 26.727 26.726-13.143 109.928-89.051 185.836z"
        }), r.createElement("path", {
            d: "M221.067 220.7C147.844 293.925 67.51 332.31 41.639 306.439c-25.873-25.873 12.513-106.206 85.736-179.429C200.6 53.786 280.931 15.4 306.804 41.272c25.872 25.873-12.514 106.206-85.737 179.429z"
        }), r.createElement("path", {
            d: "M205.157 204.79c-69.806 69.807-146.38 106.412-171.031 81.76-24.652-24.652 11.953-101.225 81.759-171.031 69.806-69.807 146.38-106.411 171.031-81.76 24.652 24.652-11.953 101.226-81.759 171.032z"
        }), r.createElement("path", {
            d: "M189.247 188.881c-65.169 65.169-136.696 99.3-159.762 76.235-23.065-23.065 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z"
        }), r.createElement("path", {
            d: "M173.337 172.971c-59.799 59.8-125.292 91.26-146.282 70.269-20.991-20.99 10.47-86.484 70.268-146.283 59.8-59.799 125.292-91.26 146.283-70.269 20.99 20.991-10.47 86.484-70.269 146.283z"
        }), r.createElement("path", {
            d: "M157.427 157.061c-53.209 53.21-111.578 81.108-130.372 62.314-18.794-18.794 9.104-77.164 62.313-130.373 53.21-53.209 111.58-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z"
        }), r.createElement("path", {
            d: "M141.517 141.151c-44.91 44.91-94.376 68.259-110.485 52.15-16.11-16.11 7.239-65.576 52.15-110.486 44.91-44.91 94.375-68.258 110.485-52.15 16.109 16.11-7.24 65.576-52.15 110.486z"
        }), r.createElement("path", {
            d: "M125.608 125.241c-35.88 35.88-75.255 54.677-87.947 41.985-12.692-12.692 6.105-52.067 41.985-87.947C115.525 43.4 154.9 24.603 167.592 37.295c12.692 12.692-6.105 52.067-41.984 87.946z"
        }), r.createElement("path", {
            d: "M109.698 109.332c-24.408 24.407-51.12 37.268-59.663 28.726-8.542-8.543 4.319-35.255 28.727-59.662 24.407-24.408 51.12-37.27 59.662-28.727 8.543 8.543-4.319 35.255-28.726 59.663z"
        }));
        var Y = ()=>r.createElement("svg", {
            version: "1.2",
            baseProfile: "tiny",
            xmlns: "https://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            width: "710px",
            height: "130px",
            viewBox: "0 0 710 130"
        }, r.createElement("path", {
            className: "dark-path",
            d: "M695.99,21.7c-5.09,0-7.16,0.97-10.98,5.48c-1.75,2.06-41.17,48.839-42.24,50.11\r c-0.56,0.67-0.51,1.59-0.51,2.14v22.801c0,0.459,0.101,2.629,0.3,3.119c0.471,1.17,1.5,2.291,3.011,2.771\r c0.52,0.17,3.21,0.25,3.819,0.25h14.341v14.43h-76.15v-14.43l13.58,0.01c0.61,0,3.34-0.08,3.86-0.25c1.51-0.489,2.54-1.6,3.01-2.771\r c0.2-0.489,0.3-2.659,0.3-3.119c0,0,0.01-22.051,0.01-22.811c0-0.55-0.04-0.789-0.93-2c-0.99-1.34-39.99-47.31-41.771-49.32\r c-2.22-2.52-6.109-6.41-12.029-6.41H540.05V7.26h76.54v14.42h-9.229c-2.13,0-3.54,2.11-1.721,4.45c0,0,25.75,32.04,25.99,32.38\r c0.25,0.33,0.45,0.41,0.78,0.1c0.32-0.32,26.39-32.18,26.6-32.44c1.24-1.55,0.4-4.47-2.27-4.47h-9.471V7.26H710V21.7H695.99\r L695.99,21.7z M505.36,30.67l1.189,92.17H484.19l-87.91-81.61l0.01,57.92c0.08,6.289,0.36,9.26,6.6,9.26h15.681v14.42H354.47v-14.42\r h14.98c5.6,0,5.38-5.551,5.38-9.59V31.21c0-4.36-0.59-9.5-9.38-9.5H353.3V7.26h54.59L484.23,78.9l-0.79-48.23\r c-0.08-6.33-1.2-8.97-7.771-8.97h-14.36V7.27h65.271V21.7h-14C505.87,21.7,505.45,23.94,505.36,30.67L505.36,30.67z M252.95,130\r c-25.72,0-49.59-8.02-65.53-22.891C175.38,95.87,169.59,80.6,169.59,64.89c0-15.53,6.04-30.9,17.83-42.08\r C202.21,8.79,228.35,0,252.95,0c27.22,0,49.01,7.14,65.67,22.85c11.85,11.19,17.58,26.49,17.58,42.04\r c0,15.07-6.08,31.11-17.58,42.219C303.11,122.08,278.73,130,252.95,130z M288.1,30.9c-8.72-8.94-21.69-13.97-35.15-13.97\r c-13.51,0-26.49,4.98-35.22,13.97c-8.41,8.67-12.84,20.94-12.84,33.99c0,13.01,4.47,25.26,12.84,33.92\r c8.74,9.039,21.67,14.039,35.22,14.039c13.65,0,26.31-4.899,35.15-14.039c8.79-9.09,12.88-20.271,12.88-33.92\r C300.98,51.81,296.56,39.57,288.1,30.9z M70.84,46.26c9.68,1.05,29.9,3.87,38.84,6.15c4.61,1.18,10.24,3.27,13.81,5.02\r c4.1,1.99,8.03,4.6,11.25,7.94c2.36,2.46,9.07,10.54,9.07,23.55c0,13.551-7.72,21.02-11.23,23.93c-6.5,5.391-14.5,8.86-20.97,10.78\r c-6.87,2.05-16.81,5.17-35.31,5.17c-11.34,0-17.22-1.42-26.34-3.39c-11.12-2.43-21.76-6.83-25.38-8.54\r c-2.92-1.38-3.75,1.51-3.75,2.2v6.15H3.47V79.73h15.62c0,5.399,2.46,10.85,4.03,12.84c6.29,7.99,13.04,11.14,19.47,13.52\r c5.58,2.07,20.89,6.061,33.63,6.061c17.24,0,26.84-4.58,28.23-5.15c1.39-0.58,9.39-3.279,9.39-12.1c0-8.86-7.6-10.49-12.12-11.68\r c-5.68-1.5-19.65-2.98-33.84-4.531c-14.3-1.56-28.66-3.91-35.37-5.43C17.48,69.84,11.74,64.02,8.17,60.6\r C8.39,60.82,0,52.78,0.01,39.04c0-15.25,10.03-24.44,22.29-30.13c13.27-6.17,28.91-8.85,42.66-8.85\r c24.28,0.04,44.08,8.29,51.08,12.1c2.79,1.6,4.27-0.33,4.27-1.82v-4.6h15.64v39.6h-14.01c-1.51-7.33-5.7-12.57-8.68-15.1\r c-2.64-2.24-5.96-4.14-8.8-5.46c-8.36-3.88-21.49-7.57-37-7.51c-13.12,0-25.7,2.53-31.93,6.58c-3.93,2.56-5.91,5.72-5.91,9.45\r c0,5.24,4.34,7.39,6.47,8.08C43.11,43.64,60.71,45.16,70.84,46.26L70.84,46.26z"
        }));
        var J = ()=>r.createElement("svg", {
            width: "1792",
            height: "1792",
            viewBox: "0 0 1792 1792",
            xmlns: "http://www.w3.org/2000/svg"
        }, r.createElement("path", {
            d: "M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
        }));
        var X = ()=>r.createElement("svg", {
            version: "1.1",
            viewBox: "0 0 98.1 118",
            width: "98.1px",
            height: "118px"
        }, r.createElement("path", {
            fill: "#FF3E00",
            d: "M91.8,15.6C80.9-0.1,59.2-4.7,43.6,5.2L16.1,22.8C8.6,27.5,3.4,35.2,1.9,43.9c-1.3,7.3-0.2,14.8,3.3,21.3 c-2.4,3.6-4,7.6-4.7,11.8c-1.6,8.9,0.5,18.1,5.7,25.4c11,15.7,32.6,20.3,48.2,10.4l27.5-17.5c7.5-4.7,12.7-12.4,14.2-21.1 c1.3-7.3,0.2-14.8-3.3-21.3c2.4-3.6,4-7.6,4.7-11.8C99.2,32.1,97.1,22.9,91.8,15.6"
        }), r.createElement("path", {
            fill: "#FFFFFF",
            d: "M40.9,103.9c-8.9,2.3-18.2-1.2-23.4-8.7c-3.2-4.4-4.4-9.9-3.5-15.3c0.2-0.9,0.4-1.7,0.6-2.6l0.5-1.6l1.4,1 c3.3,2.4,6.9,4.2,10.8,5.4l1,0.3l-0.1,1c-0.1,1.4,0.3,2.9,1.1,4.1c1.6,2.3,4.4,3.4,7.1,2.7c0.6-0.2,1.2-0.4,1.7-0.7L65.5,72 c1.4-0.9,2.3-2.2,2.6-3.8c0.3-1.6-0.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7l-10.5,6.7 c-1.7,1.1-3.6,1.9-5.6,2.4c-8.9,2.3-18.2-1.2-23.4-8.7c-3.1-4.4-4.4-9.9-3.4-15.3c0.9-5.2,4.1-9.9,8.6-12.7l27.5-17.5 c1.7-1.1,3.6-1.9,5.6-2.5c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.2,0.9-0.4,1.7-0.7,2.6l-0.5,1.6l-1.4-1 c-3.3-2.4-6.9-4.2-10.8-5.4l-1-0.3l0.1-1c0.1-1.4-0.3-2.9-1.1-4.1c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7L32.4,46.1 c-1.4,0.9-2.3,2.2-2.6,3.8s0.1,3.3,1,4.6c1.6,2.3,4.4,3.3,7.1,2.6c0.6-0.2,1.2-0.4,1.7-0.7l10.5-6.7c1.7-1.1,3.6-1.9,5.6-2.5 c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.9,5.2-4.1,9.9-8.6,12.7l-27.5,17.5C44.8,102.5,42.9,103.3,40.9,103.9"
        }));
        var K = ()=>r.createElement("svg", {
            width: "1792",
            height: "1792",
            viewBox: "0 0 1792 1792",
            xmlns: "https://www.w3.org/2000/svg"
        }, r.createElement("path", {
            d: "M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"
        }));
        var Q = ()=>r.createElement("svg", {
            version: "1.2",
            baseProfile: "tiny",
            x: "0px",
            y: "0px",
            width: "411.113px",
            height: "155.127px",
            viewBox: "0 0 411.113 155.127"
        }, r.createElement("g", {
            className: "dark-path",
            transform: "translate(-173.61898,-705.231)"
        }, r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,380.32318,739.96493)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0c0.078,0.117,0.314,0.039,0.48,0.035\r C0.703,0.03,0.65-0.3,0.959-0.235c0.308,0.066,0.312-0.293,0.752-0.28c0.442,0.014-0.088-0.154-0.088-0.154\r S1.35-0.537,1.174-0.626C1.08-0.673,1.208-0.599,1.051-0.471C0.809-0.273,0.842-0.508,0.436-0.163C0.148,0.081-0.128-0.192,0,0"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,365.6907,741.97331)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0c-0.261,0.422-0.066,0.947,0.23,1.458\r C0.447,1.834,1.028,2,1.533,1.803C2.1,2.25,2.236,1.769,2.738,1.986c0.66,0.286,0.291-0.759,0.929-1.022\r c0.264,0.704-0.601,1.233-0.059,1.564c0.388,0.237,0.681,0.384,0.84,0.7C4.674,3.68,4.762,4.01,4.937,4.069\r c0.402,0.138,0.315,0.52,0.315,0.52s0.429-0.125,0.761,0.187C5.759,4.914,5.387,5.031,5.486,5.305\r c0.115,0.322,0.977-0.333,1.232,0.196C6.205,5.724,5.681,6.21,5.368,6.322C5.154,6.087,5.019,6.181,4.742,6.4\r C4.273,6.771,4.234,6.419,3.94,6.673C3.707,6.204,4.06,6.241,4.167,6.124c0.301-0.331-0.305,0.295-0.246-0.545\r C3.936,5.361,3.614,5.32,3.374,5.793C3.249,6.04,2.253,5.989,2.102,6.224C2.24,6.498,3.413,7.475,5.212,7.24\r C2.597,8.268-0.935,7.146-0.971,6.756c-0.352-0.221-0.231-0.474-0.407-0.532c-0.305-0.102-0.636-1.032-0.636-1.032\r s0.189-0.126-0.402-0.788c-0.487-0.545-0.631-1.371-0.631-1.371s0.322-0.589,0.26-1.267c-0.045-0.518-0.067-0.134,0.158-0.509\r c0.131-0.22,0.274-0.986,0.361-0.687c0.166,0.57-0.303,1.098-0.225,1.665c0.018-0.071,0.18,0.225,0.174-0.043\r c-0.017-0.7,0.862-2.05,0.862-2.05s-0.328-0.334,0.016-0.334l-0.088-0.207c0,0,0.255,0.015,0.419-0.119\r c0.165-0.135,0.307-0.301,0.457-0.301h2.529c0,0,0.18,0.767,0.327,0.898c0.147,0.13-0.294,0-0.424,0.13\r C1.648,0.34,1.566,0.095,1.501-0.035C1.435-0.166,1.354-0.395,1.158-0.46C0.962-0.525,0.49-0.558,0.392-0.558\r C0.294-0.558,0,0,0,0"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,417.99241,778.22125)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0c-0.098,0.13,0.016,0.327,0.016,0.327h-7.131\r l0.795-0.694c0.174-0.07,0.394-0.245,0.495-0.512c0.238-0.631-0.116-0.12-0.116-1.074c0-0.877-0.247-0.735-0.247-0.735\r s-0.053-1.037-0.59-1.674c-0.341-0.343-0.076-0.627-0.076-0.627s-0.115-0.065-0.282-0.817c-0.055-0.243,0.257-0.619,0.527-0.525\r c0.203,0.071-0.492,0.138,0.262,0.455c0.29,0.123,0.053,0.354,0.053,0.354s0.487,0.038,0.762,0.775\r c0.486-0.071,0.306,0.227,1.306,0.443c0.264,0.056,0.32,0.136,0.287,0.384c-0.033,0.249,0.326-0.036,1.317,0.975\r c0.78,0.797,0.499,0.977,1.039,1.266c0.571,0.304,0.623-0.026,0.814,0.221c0.436,0.568,0.283,0.531,0.464,0.893l0.129,0.199\r C-0.176-0.366,0.097-0.13,0,0"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,395.99296,744.63496)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0l-0.159-0.095l-0.032,0.158L0,0z"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,393.47697,744.0788)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0c-0.255-0.055-0.524,0-0.761-0.19L-0.92-0.063\r h-0.095c0.222,0.182-0.127,0.372,0.254,0.38C-0.468,0.309-0.255,0.104,0,0"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,325.85858,745.08078)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0c1.647,5.094,5.546,9.028,12.062,9.028\r c6.055,0,10.504-3.988,12.118-9.139c-1.684,4.801-6.469,8.264-12.109,8.264C6.473,8.153,1.718,4.743,0,0 M24.153-7.792\r c-1.639-5.107-6.249-9.08-12.091-9.08c-6.197,0-10.361,3.919-12.036,8.969c1.743-4.704,6.476-8.078,12.045-8.078\r C17.681-15.981,22.446-12.554,24.153-7.792"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,282.89249,750.58506)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0h-1.987l0.297-0.353v-2.61\r c0-0.586-0.388-0.833-0.969-0.833c-0.579,0-0.968,0.247-0.968,0.833v2.61L-3.33,0h-1.987l0.297-0.353v-2.652\r c0-1.301,0.728-1.803,2.361-1.803s2.361,0.502,2.361,1.803v2.652L0,0"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,313.33158,750.58506)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0h-1.676l0.296-0.353v-2.376L-3.783,0h-1.506\r l0.297-0.353v-4.009l-0.297-0.354h1.676L-3.91-4.362v2.418l2.552-2.772h1.061v4.363L0,0z"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,330.37412,771.40159)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0l-0.297,0.353v4.009L0,4.716h-2.001l0.298-0.354\r V0.353L-2.001,0H0z"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,359.49783,750.58506)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0h-1.683l0.297-0.353l-1.188-2.595l-1.145,2.595\r L-3.422,0h-1.979l2.198-4.716h0.983L0,0z"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,384.30463,771.40159)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0v1.28l-0.354-0.297h-2.411v0.905h1.528l0.346-0.298\r v1.535l-0.346-0.297h-1.528v0.905h2.411L0,3.436v1.28h-4.44l0.296-0.354V0.353L-4.44,0H0z"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,406.9618,757.32527)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0c0-0.339-0.325-0.615-0.778-0.615h-0.897v1.159\r h1.067C-0.297,0.544,0,0.389,0,0 M1.626-3.189l-1.279,1.86c0.629,0.254,1.068,0.742,1.068,1.428c0,0.785-0.481,1.428-1.825,1.428\r h-2.941l0.297-0.354v-4.008l-0.297-0.354h1.972l-0.296,0.354v1.336h0.594l0.904-1.336l-0.296-0.354H1.626"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,440.50392,765.31465)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0c0,0.749-0.602,1.167-1.471,1.45\r c-0.566,0.176-1.365,0.303-1.365,0.678c0,0.184,0.219,0.311,0.601,0.311c0.51,0,1.343-0.212,1.994-0.523v1.577l-0.375-0.361\r c-0.396,0.163-1.082,0.333-1.555,0.333c-1.605,0-2.121-0.707-2.121-1.351c0-0.877,0.58-1.259,1.492-1.577\r c0.678-0.233,1.308-0.254,1.308-0.642c0-0.334-0.389-0.376-0.588-0.376c-0.501,0-1.392,0.177-2.184,0.693v-1.746l0.375,0.41\r c0.368-0.141,1.195-0.382,1.873-0.382C-0.622-1.506,0-0.891,0,0"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,461.61618,763.91099)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0h-1.562l0.778,1.689L0,0z M2.269-1.697l-2.32,4.716\r h-1.59l0.169-0.354l-2.099-4.362h1.731l-0.296,0.354l0.233,0.495h2.248l0.228-0.495L0.275-1.697H2.269z"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,496.29715,771.40159)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0v1.28l-0.354-0.297h-2.27v3.379l0.297,0.354H-4.3\r l0.298-0.354V0.353L-4.3,0H0z"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,491.90519,755.08737)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0c0,0.519,0.422,0.94,0.941,0.94\r C1.46,0.94,1.882,0.519,1.882,0S1.46-0.94,0.941-0.94C0.422-0.94,0-0.519,0,0 M0.089,0c0-0.47,0.38-0.853,0.852-0.853\r C1.412-0.853,1.794-0.47,1.794,0c0,0.471-0.382,0.853-0.853,0.853C0.469,0.853,0.089,0.471,0.089,0"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,497.62135,753.46301)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0c-0.093,0.079-0.205,0.116-0.326,0.116\r c-0.277,0-0.483-0.215-0.483-0.487c0-0.274,0.202-0.49,0.481-0.49c0.125,0,0.244,0.046,0.34,0.129v0.123\r c-0.087-0.103-0.211-0.167-0.345-0.167c-0.221,0-0.384,0.192-0.384,0.405c0,0.213,0.165,0.401,0.386,0.401\r c0.133,0,0.243-0.055,0.331-0.152V0"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,188.53837,846.92991)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0v-1.785c0-0.876-0.49-1.214-1.59-1.214\r c-1.099,0-1.59,0.338-1.59,1.214V0l-0.2,0.238h1.338L-2.242,0v-1.756c0-0.395,0.262-0.562,0.652-0.562\r c0.391,0,0.652,0.167,0.652,0.562V0l-0.2,0.238H0.2L0,0"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,211.18672,846.92991)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0v-2.937h-0.714l-1.718,1.866v-1.628l0.2-0.238\r h-1.129l0.2,0.238V0l-0.2,0.238h1.014l1.619-1.837V0l-0.2,0.238H0.2L0,0z"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,219.73667,859.89389)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0l0.2,0.238v2.699L0,3.175h1.347l-0.2-0.238V0.238\r L1.347,0H0z"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,240.91515,859.89389)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0h-0.662l-1.48,3.175h1.333l-0.2-0.238l0.771-1.747\r l0.8,1.747l-0.2,0.238h1.133L0,0z"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,253.18613,859.89389)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0l0.2,0.238v2.699L0,3.175h2.989V2.313l-0.238,0.2\r H1.128V1.904h1.028l0.233,0.2V1.071l-0.233,0.2H1.128V0.662h1.623l0.238,0.2V0H0z"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,281.99203,848.80145)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0h-0.719v-0.78h0.605\r c0.304,0,0.523,0.185,0.523,0.414C0.409-0.104,0.209,0,0,0 M0.09-2.513l0.2,0.238l-0.609,0.9h-0.4v-0.9l0.2-0.238h-1.328\r l0.2,0.238v2.699l-0.2,0.238h1.98c0.905,0,1.228-0.433,1.228-0.962c0-0.461-0.295-0.79-0.718-0.961l0.861-1.252H0.09"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,302.5393,860.27349)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0c-0.457,0-1.014,0.162-1.261,0.257l-0.253-0.276\r v1.176C-0.981,0.809-0.381,0.69-0.043,0.69c0.133,0,0.395,0.029,0.395,0.252c0,0.262-0.423,0.277-0.88,0.434\r C-1.142,1.59-1.533,1.847-1.533,2.437c0,0.433,0.348,0.909,1.428,0.909c0.319,0,0.781-0.114,1.048-0.224l0.252,0.243V2.304\r c-0.438,0.209-1,0.352-1.343,0.352c-0.257,0-0.404-0.086-0.404-0.209c0-0.253,0.538-0.338,0.918-0.457\r c0.586-0.191,0.991-0.471,0.991-0.976C1.357,0.414,0.938,0,0,0"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,322.58337,849.82992)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0l-0.523-1.138h1.052L0,0z M0.714-2.28l0.2,0.238\r L0.762-1.709h-1.514l-0.157-0.333l0.2-0.238h-1.166l1.414,2.937l-0.115,0.238h1.071L2.057-2.28H0.714z"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,337.64843,859.89389)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0l0.2,0.238v2.699L0,3.175h1.328l-0.2-0.238V0.662\r h1.528l0.238,0.2V0H0z"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,381.91665,859.89389)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0l0.2,0.238v1.523L-0.643,0h-0.442l-0.953,1.79V0.238\r L-1.838,0h-1.099l0.2,0.238v2.699l-0.2,0.238h1.119l1.032-1.942l0.943,1.942h1.142l-0.2-0.238V0.238L1.299,0H0z"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,409.50424,846.92991)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0v-1.785c0-0.876-0.491-1.214-1.59-1.214\r c-1.099,0-1.59,0.338-1.59,1.214V0l-0.2,0.238h1.338L-2.242,0v-1.756c0-0.395,0.262-0.562,0.652-0.562\r c0.39,0,0.652,0.167,0.652,0.562V0l-0.2,0.238H0.2L0,0"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,423.8763,860.27349)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0c-0.457,0-1.014,0.162-1.261,0.257l-0.253-0.276\r v1.176C-0.981,0.809-0.381,0.69-0.043,0.69c0.133,0,0.395,0.029,0.395,0.252c0,0.262-0.423,0.277-0.88,0.434\r C-1.142,1.59-1.533,1.847-1.533,2.437c0,0.433,0.348,0.909,1.429,0.909c0.318,0,0.78-0.114,1.046-0.224l0.253,0.243V2.304\r c-0.438,0.209-1,0.352-1.343,0.352c-0.257,0-0.404-0.086-0.404-0.209c0-0.253,0.538-0.338,0.919-0.457\r c0.585-0.191,0.99-0.471,0.99-0.976C1.357,0.414,0.938,0,0,0"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,437.32141,859.89389)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0l0.2,0.238v2.699L0,3.175h1.347l-0.2-0.238V0.238\r L1.347,0H0z"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,458.31008,860.16756)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0c-0.966,0-1.837,0.476-1.837,1.652\r c0,0.928,0.666,1.647,1.875,1.647c0.367,0,0.762-0.086,0.985-0.172l0.219,0.21V2.28C0.9,2.489,0.538,2.613,0.091,2.613\r c-0.672,0-0.934-0.447-0.934-0.961c0-0.576,0.381-0.967,0.962-0.967c0.585,0,0.938,0.229,1.128,0.348V0.29\r C1.019,0.157,0.471,0,0,0"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,492.36867,852.9418)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0h1.133v-1.271C0.852-1.447,0.228-1.637-0.309-1.637\r c-0.967,0-1.876,0.476-1.876,1.651c0,1.19,0.99,1.647,1.876,1.647c0.514,0,0.847-0.129,1.047-0.2L0.99,1.699v-1.09\r C0.647,0.8,0.238,0.976-0.262,0.976c-0.581,0-0.928-0.386-0.928-0.962c0-0.576,0.347-0.966,0.928-0.966\r c0.148,0,0.314,0.024,0.467,0.052v0.658L0,0"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,512.35094,848.80145)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0h-0.719v-0.78h0.605\r c0.304,0,0.523,0.185,0.523,0.414C0.409-0.104,0.209,0,0,0 M0.09-2.513l0.2,0.238l-0.609,0.9h-0.4v-0.9l0.2-0.238h-1.328\r l0.2,0.238v2.699l-0.2,0.238h1.98c0.905,0,1.228-0.433,1.228-0.962c0-0.461-0.295-0.79-0.718-0.961l0.861-1.252H0.09"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,533.63539,848.54544)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0c-0.595,0-0.837-0.395-0.837-0.981\r c0-0.585,0.242-0.985,0.837-0.985c0.595,0,0.833,0.4,0.833,0.985C0.833-0.395,0.595,0,0,0 M0-2.651\r c-0.895,0-1.837,0.466-1.837,1.67c0,1.205,0.942,1.666,1.837,1.666c0.895,0,1.828-0.461,1.828-1.666\r C1.828-2.185,0.895-2.651,0-2.651"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,562.75469,846.92991)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0v-1.785c0-0.876-0.49-1.214-1.59-1.214\r c-1.099,0-1.59,0.338-1.59,1.214V0l-0.2,0.238h1.338L-2.242,0v-1.756c0-0.395,0.262-0.562,0.652-0.562s0.652,0.167,0.652,0.562V0\r l-0.2,0.238H0.2L0,0"
        })), r.createElement("g", {
            transform: "matrix(4.4140213,0,0,-4.4140213,577.90361,848.80145)"
        }, r.createElement("path", {
            fill: "#231F20",
            d: "M0,0h-0.533v-0.961h0.447\r c0.429,0,0.667,0.109,0.667,0.514C0.581-0.095,0.338,0,0,0 M0.019-1.59h-0.552v-0.685l0.2-0.238h-1.328l0.2,0.238v2.699\r l-0.2,0.238h1.709c0.628,0,1.499-0.176,1.499-1.052C1.547-1.39,0.781-1.59,0.019-1.59"
        }))));
        var $ = ()=>r.createElement("svg", {
            version: "1.1",
            viewBox: "0 0 261.76 226.69",
            width: "261.76px",
            height: "226.69px",
            xmlns: "http://www.w3.org/2000/svg"
        }, r.createElement("g", {
            transform: "matrix(1.3333 0 0 -1.3333 -76.311 313.34)"
        }, r.createElement("g", {
            transform: "translate(178.06 235.01)"
        }, r.createElement("path", {
            d: "m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z",
            fill: "#41b883"
        })), r.createElement("g", {
            transform: "translate(178.06 235.01)"
        }, r.createElement("path", {
            d: "m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z",
            fill: "#34495e"
        }))));
        var ee = ()=>r.createElement("svg", {
            width: "1460px",
            height: "280px",
            viewBox: "0 0 1460 280",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, r.createElement("g", {
            id: "W4-Copy",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, r.createElement("g", {
            id: "Icon"
        }, r.createElement("circle", {
            id: "Oval",
            fill: "#E81C4F",
            cx: "140",
            cy: "140",
            r: "140"
        }), r.createElement("path", {
            d: "M188,84 L188,147.999 L212,148 L212,172 L188,171.999 L188,196 L164,196 L164,171.999 L121,172 L132,148 L164,147.999 L164,112.216 L177.185,84 L188,84 Z",
            id: "Combined-Shape",
            fill: "#4D0013"
        }), r.createElement("polygon", {
            fill: "#FFFFFF",
            id: "path-1",
            points: "156.442375 127.908767 135.822034 84 111.028602 84 132.622881 128.097004 122.705508 146.950071 92.7934322 84 68 84 119.186441 196 124.625 196"
        })), r.createElement("path", {
            className: "dark-path",
            d: "M388.904297,167 L405.408203,111.384766 L407.166016,104.353516 L408.972656,111.384766 L425.085938,167 L430.847656,167 L449.060547,95.90625 L442.908203,95.90625 L430.066406,147.810547 L427.722656,158.943359 L425.085938,148.298828 L409.851562,95.90625 L404.431641,95.90625 L389.001953,148.298828 L386.316406,158.845703 L384.119141,147.810547 L371.130859,95.90625 L364.978516,95.90625 L383.142578,167 L388.904297,167 Z M479.724609,167.976562 C487.895182,167.976562 494.128906,164.867839 498.425781,158.650391 L498.425781,158.650391 L494.763672,155.867188 C492.810547,158.373698 490.637695,160.196615 488.245117,161.335938 C485.852539,162.47526 483.09375,163.044922 479.96875,163.044922 C474.760417,163.044922 470.439128,161.051107 467.004883,157.063477 C463.570638,153.075846 461.853516,148.08724 461.853516,142.097656 L461.853516,142.097656 L461.853516,140.974609 L499.548828,140.974609 L499.548828,137.703125 C499.548828,130.11849 497.668945,124.137044 493.90918,119.758789 C490.149414,115.380534 485.063151,113.191406 478.650391,113.191406 C474.548828,113.191406 470.740234,114.355143 467.224609,116.682617 C463.708984,119.010091 460.966471,122.208333 458.99707,126.277344 C457.027669,130.346354 456.042969,134.919922 456.042969,139.998047 L456.042969,139.998047 L456.042969,142.097656 C456.042969,147.013021 457.052083,151.448242 459.070312,155.40332 C461.088542,159.358398 463.912435,162.442708 467.541992,164.65625 C471.171549,166.869792 475.232422,167.976562 479.724609,167.976562 Z M493.738281,135.994141 L462.048828,135.994141 C462.69987,130.557943 464.530924,126.228516 467.541992,123.005859 C470.55306,119.783203 474.255859,118.171875 478.650391,118.171875 C483.077474,118.171875 486.658203,119.766927 489.392578,122.957031 C492.126953,126.147135 493.575521,130.28125 493.738281,135.359375 L493.738281,135.359375 L493.738281,135.994141 Z M533.289062,167.976562 C539.441406,167.976562 544.340495,165.55957 547.986328,160.725586 C551.632161,155.891602 553.455078,149.356771 553.455078,141.121094 L553.455078,141.121094 L553.455078,140.242188 C553.455078,131.746094 551.640299,125.113607 548.010742,120.344727 C544.381185,115.575846 539.441406,113.191406 533.191406,113.191406 C525.89974,113.191406 520.398438,116.072266 516.6875,121.833984 L516.6875,121.833984 L516.6875,92 L510.876953,92 L510.876953,167 L516.345703,167 L516.589844,159.773438 C520.365885,165.242188 525.932292,167.976562 533.289062,167.976562 Z M532.214844,162.898438 C524.792969,162.898438 519.617188,159.578125 516.6875,152.9375 L516.6875,152.9375 L516.6875,129.109375 C518.022135,125.561198 519.991536,122.867513 522.595703,121.02832 C525.19987,119.189128 528.373698,118.269531 532.117188,118.269531 C537.032552,118.269531 540.841146,120.16569 543.542969,123.958008 C546.244792,127.750326 547.595703,133.129557 547.595703,140.095703 C547.595703,147.680339 546.236654,153.376953 543.518555,157.185547 C540.800456,160.994141 537.032552,162.898438 532.214844,162.898438 Z M611.462891,167 C617.517578,167 622.880534,165.665365 627.551758,162.996094 C632.222982,160.326823 635.844401,156.534505 638.416016,151.619141 C640.98763,146.703776 642.273438,141.072266 642.273438,134.724609 L642.273438,134.724609 L642.273438,128.181641 C642.273438,121.866536 640.979492,116.235026 638.391602,111.287109 C635.803711,106.339193 632.198568,102.538737 627.576172,99.8857422 C622.953776,97.2327474 617.729167,95.90625 611.902344,95.90625 L611.902344,95.90625 L592.029297,95.90625 L592.029297,167 L611.462891,167 Z M611.511719,161.921875 L598.035156,161.921875 L598.035156,101.033203 L612,101.033203 C619.291667,101.065755 625.167318,103.539714 629.626953,108.455078 C634.086589,113.370443 636.316406,119.913411 636.316406,128.083984 L636.316406,128.083984 L636.316406,134.333984 C636.316406,142.797526 634.054036,149.511393 629.529297,154.475586 C625.004557,159.439779 618.998698,161.921875 611.511719,161.921875 L611.511719,161.921875 Z M676.599609,167.976562 C684.770182,167.976562 691.003906,164.867839 695.300781,158.650391 L695.300781,158.650391 L691.638672,155.867188 C689.685547,158.373698 687.512695,160.196615 685.120117,161.335938 C682.727539,162.47526 679.96875,163.044922 676.84375,163.044922 C671.635417,163.044922 667.314128,161.051107 663.879883,157.063477 C660.445638,153.075846 658.728516,148.08724 658.728516,142.097656 L658.728516,142.097656 L658.728516,140.974609 L696.423828,140.974609 L696.423828,137.703125 C696.423828,130.11849 694.543945,124.137044 690.78418,119.758789 C687.024414,115.380534 681.938151,113.191406 675.525391,113.191406 C671.423828,113.191406 667.615234,114.355143 664.099609,116.682617 C660.583984,119.010091 657.841471,122.208333 655.87207,126.277344 C653.902669,130.346354 652.917969,134.919922 652.917969,139.998047 L652.917969,139.998047 L652.917969,142.097656 C652.917969,147.013021 653.927083,151.448242 655.945312,155.40332 C657.963542,159.358398 660.787435,162.442708 664.416992,164.65625 C668.046549,166.869792 672.107422,167.976562 676.599609,167.976562 Z M690.613281,135.994141 L658.923828,135.994141 C659.57487,130.557943 661.405924,126.228516 664.416992,123.005859 C667.42806,119.783203 671.130859,118.171875 675.525391,118.171875 C679.952474,118.171875 683.533203,119.766927 686.267578,122.957031 C689.001953,126.147135 690.450521,130.28125 690.613281,135.359375 L690.613281,135.359375 L690.613281,135.994141 Z M725.818359,167.976562 C731.61263,167.976562 736.308268,166.641927 739.905273,163.972656 C743.502279,161.303385 745.300781,157.738932 745.300781,153.279297 C745.300781,150.544922 744.682292,148.217448 743.445312,146.296875 C742.208333,144.376302 740.312174,142.732422 737.756836,141.365234 C735.201497,139.998047 731.360352,138.71224 726.233398,137.507812 C721.106445,136.303385 717.574544,134.976888 715.637695,133.52832 C713.700846,132.079753 712.732422,130.037109 712.732422,127.400391 C712.732422,124.666016 713.896159,122.444336 716.223633,120.735352 C718.551107,119.026367 721.635417,118.171875 725.476562,118.171875 C729.415365,118.171875 732.678711,119.197266 735.266602,121.248047 C737.854492,123.298828 739.148438,125.870443 739.148438,128.962891 L739.148438,128.962891 L745.007812,128.962891 C745.007812,124.275391 743.225586,120.474935 739.661133,117.561523 C736.09668,114.648112 731.36849,113.191406 725.476562,113.191406 C720.040365,113.191406 715.580729,114.550456 712.097656,117.268555 C708.614583,119.986654 706.873047,123.429036 706.873047,127.595703 C706.873047,130.232422 707.499674,132.478516 708.75293,134.333984 C710.006185,136.189453 711.926758,137.760091 714.514648,139.045898 C717.102539,140.331706 720.740234,141.471029 725.427734,142.463867 C730.115234,143.456706 733.622721,144.832031 735.950195,146.589844 C738.277669,148.347656 739.441406,150.67513 739.441406,153.572266 C739.441406,156.306641 738.188151,158.56901 735.681641,160.359375 C733.17513,162.14974 729.88737,163.044922 725.818359,163.044922 C721.45638,163.044922 717.948893,162.092773 715.295898,160.188477 C712.642904,158.28418 711.202474,155.623047 710.974609,152.205078 L710.974609,152.205078 L705.115234,152.205078 C705.115234,156.76237 707.027669,160.530273 710.852539,163.508789 C714.677409,166.487305 719.666016,167.976562 725.818359,167.976562 Z M762.097656,102.791016 C763.334635,102.791016 764.319336,102.416667 765.051758,101.667969 C765.78418,100.919271 766.150391,99.9915365 766.150391,98.8847656 C766.150391,97.7779948 765.78418,96.8421224 765.051758,96.0771484 C764.319336,95.3121745 763.334635,94.9296875 762.097656,94.9296875 C760.860677,94.9296875 759.884115,95.3121745 759.167969,96.0771484 C758.451823,96.8421224 758.09375,97.7779948 758.09375,98.8847656 C758.09375,99.9915365 758.451823,100.919271 759.167969,101.667969 C759.884115,102.416667 760.860677,102.791016 762.097656,102.791016 Z M764.978516,167 L764.978516,114.167969 L759.119141,114.167969 L759.119141,167 L764.978516,167 Z M799.890625,188.044922 C806.401042,188.044922 811.560547,186.059245 815.369141,182.087891 C819.177734,178.116536 821.082031,172.729167 821.082031,165.925781 L821.082031,165.925781 L821.082031,114.167969 L815.613281,114.167969 L815.320312,121.785156 C811.576823,116.05599 806.108073,113.191406 798.914062,113.191406 C792.63151,113.191406 787.65918,115.608398 783.99707,120.442383 C780.334961,125.276367 778.503906,131.827474 778.503906,140.095703 L778.503906,140.095703 L778.503906,140.876953 C778.503906,149.177734 780.359375,155.769531 784.070312,160.652344 C787.78125,165.535156 792.696615,167.976562 798.816406,167.976562 C805.977865,167.976562 811.430339,165.372396 815.173828,160.164062 L815.173828,160.164062 L815.173828,166.804688 C815.076172,171.915365 813.660156,175.911133 810.925781,178.791992 C808.191406,181.672852 804.382812,183.113281 799.5,183.113281 C793.803385,183.113281 788.888021,180.574219 784.753906,175.496094 L784.753906,175.496094 L781.482422,179.011719 C783.402995,181.746094 786.031576,183.935221 789.368164,185.579102 C792.704753,187.222982 796.21224,188.044922 799.890625,188.044922 Z M799.890625,162.898438 C794.97526,162.898438 791.166667,160.953451 788.464844,157.063477 C785.763021,153.173503 784.412109,147.859375 784.412109,141.121094 C784.412109,133.601562 785.779297,127.913086 788.513672,124.055664 C791.248047,120.198242 795.072917,118.269531 799.988281,118.269531 C803.601562,118.269531 806.69401,119.156576 809.265625,120.930664 C811.83724,122.704753 813.806641,125.284505 815.173828,128.669922 L815.173828,128.669922 L815.173828,153.230469 C812.179036,159.675781 807.084635,162.898438 799.890625,162.898438 Z M842.126953,167 L842.126953,130.818359 C843.461589,126.977214 845.520508,123.925456 848.303711,121.663086 C851.086914,119.400716 854.285156,118.269531 857.898438,118.269531 C862.227865,118.269531 865.377279,119.42513 867.34668,121.736328 C869.316081,124.047526 870.317057,127.563151 870.349609,132.283203 L870.349609,132.283203 L870.349609,167 L876.160156,167 L876.160156,132.332031 C876.127604,125.951823 874.727865,121.166667 871.960938,117.976562 C869.19401,114.786458 864.978516,113.191406 859.314453,113.191406 C855.733724,113.191406 852.46224,114.045898 849.5,115.754883 C846.53776,117.463867 844.063802,119.945964 842.078125,123.201172 L842.078125,123.201172 L841.882812,114.167969 L836.316406,114.167969 L836.316406,167 L842.126953,167 Z M919.226562,102.791016 C920.463542,102.791016 921.448242,102.416667 922.180664,101.667969 C922.913086,100.919271 923.279297,99.9915365 923.279297,98.8847656 C923.279297,97.7779948 922.913086,96.8421224 922.180664,96.0771484 C921.448242,95.3121745 920.463542,94.9296875 919.226562,94.9296875 C917.989583,94.9296875 917.013021,95.3121745 916.296875,96.0771484 C915.580729,96.8421224 915.222656,97.7779948 915.222656,98.8847656 C915.222656,99.9915365 915.580729,100.919271 916.296875,101.667969 C917.013021,102.416667 917.989583,102.791016 919.226562,102.791016 Z M922.107422,167 L922.107422,114.167969 L916.248047,114.167969 L916.248047,167 L922.107422,167 Z M943.787109,167 L943.787109,130.818359 C945.121745,126.977214 947.180664,123.925456 949.963867,121.663086 C952.74707,119.400716 955.945312,118.269531 959.558594,118.269531 C963.888021,118.269531 967.037435,119.42513 969.006836,121.736328 C970.976237,124.047526 971.977214,127.563151 972.009766,132.283203 L972.009766,132.283203 L972.009766,167 L977.820312,167 L977.820312,132.332031 C977.78776,125.951823 976.388021,121.166667 973.621094,117.976562 C970.854167,114.786458 966.638672,113.191406 960.974609,113.191406 C957.39388,113.191406 954.122396,114.045898 951.160156,115.754883 C948.197917,117.463867 945.723958,119.945964 943.738281,123.201172 L943.738281,123.201172 L943.542969,114.167969 L937.976562,114.167969 L937.976562,167 L943.787109,167 Z M1052.18555,167 L1052.18555,149.03125 L1063.26953,149.03125 L1063.26953,144.099609 L1052.18555,144.099609 L1052.18555,95.90625 L1045.78906,95.90625 L1012.87891,145.710938 L1012.87891,149.03125 L1046.32617,149.03125 L1046.32617,167 L1052.18555,167 Z M1046.32617,144.099609 L1020.05664,144.099609 L1043.73828,107.966797 L1046.32617,103.474609 L1046.32617,144.099609 Z M1102.52734,167 L1102.52734,130.769531 C1103.79688,126.635417 1105.75,123.518555 1108.38672,121.418945 C1111.02344,119.319336 1114.18099,118.269531 1117.85938,118.269531 C1122.22135,118.269531 1125.45215,119.38444 1127.55176,121.614258 C1129.65137,123.844076 1130.71745,127.221354 1130.75,131.746094 L1130.75,131.746094 L1130.75,167 L1136.60938,167 L1136.60938,132.039062 C1136.9349,128.230469 1138.54622,124.999674 1141.44336,122.34668 C1144.34049,119.693685 1147.88867,118.334635 1152.08789,118.269531 C1156.61263,118.269531 1159.87598,119.408854 1161.87793,121.6875 C1163.87988,123.966146 1164.89714,127.465495 1164.92969,132.185547 L1164.92969,132.185547 L1164.92969,167 L1170.78906,167 L1170.78906,131.746094 C1170.5612,119.376302 1164.7832,113.191406 1153.45508,113.191406 C1149.64648,113.191406 1146.16341,114.078451 1143.00586,115.852539 C1139.84831,117.626628 1137.32552,120.157552 1135.4375,123.445312 C1133.19141,116.609375 1127.90169,113.191406 1119.56836,113.191406 C1115.98763,113.191406 1112.73242,113.988932 1109.80273,115.583984 C1106.87305,117.179036 1104.43164,119.571615 1102.47852,122.761719 L1102.47852,122.761719 L1102.2832,114.167969 L1096.66797,114.167969 L1096.66797,167 L1102.52734,167 Z M1189.24609,102.791016 C1190.48307,102.791016 1191.46777,102.416667 1192.2002,101.667969 C1192.93262,100.919271 1193.29883,99.9915365 1193.29883,98.8847656 C1193.29883,97.7779948 1192.93262,96.8421224 1192.2002,96.0771484 C1191.46777,95.3121745 1190.48307,94.9296875 1189.24609,94.9296875 C1188.00911,94.9296875 1187.03255,95.3121745 1186.31641,96.0771484 C1185.60026,96.8421224 1185.24219,97.7779948 1185.24219,98.8847656 C1185.24219,99.9915365 1185.60026,100.919271 1186.31641,101.667969 C1187.03255,102.416667 1188.00911,102.791016 1189.24609,102.791016 Z M1192.12695,167 L1192.12695,114.167969 L1186.26758,114.167969 L1186.26758,167 L1192.12695,167 Z M1213.80664,167 L1213.80664,130.818359 C1215.14128,126.977214 1217.2002,123.925456 1219.9834,121.663086 C1222.7666,119.400716 1225.96484,118.269531 1229.57812,118.269531 C1233.90755,118.269531 1237.05697,119.42513 1239.02637,121.736328 C1240.99577,124.047526 1241.99674,127.563151 1242.0293,132.283203 L1242.0293,132.283203 L1242.0293,167 L1247.83984,167 L1247.83984,132.332031 C1247.80729,125.951823 1246.40755,121.166667 1243.64062,117.976562 C1240.8737,114.786458 1236.6582,113.191406 1230.99414,113.191406 C1227.41341,113.191406 1224.14193,114.045898 1221.17969,115.754883 C1218.21745,117.463867 1215.74349,119.945964 1213.75781,123.201172 L1213.75781,123.201172 L1213.5625,114.167969 L1207.99609,114.167969 L1207.99609,167 L1213.80664,167 Z M1280.06641,167.976562 C1287.78125,167.976562 1293.39648,165.421224 1296.91211,160.310547 L1296.91211,160.310547 L1297.00977,167 L1302.67383,167 L1302.67383,114.167969 L1296.81445,114.167969 L1296.81445,152.400391 C1294.56836,159.399089 1289.21354,162.898438 1280.75,162.898438 C1272.61198,162.898438 1268.54297,157.869141 1268.54297,147.810547 L1268.54297,147.810547 L1268.54297,114.167969 L1262.73242,114.167969 L1262.73242,148.542969 C1262.79753,154.955729 1264.29492,159.797852 1267.22461,163.069336 C1270.1543,166.34082 1274.4349,167.976562 1280.06641,167.976562 Z M1332.55664,167.976562 C1335.19336,167.976562 1337.27669,167.69987 1338.80664,167.146484 L1338.80664,167.146484 L1338.5625,162.361328 C1336.38151,162.686849 1334.80273,162.849609 1333.82617,162.849609 C1331.35221,162.849609 1329.58626,162.133464 1328.52832,160.701172 C1327.47038,159.26888 1326.94141,157.087891 1326.94141,154.158203 L1326.94141,154.158203 L1326.94141,118.953125 L1337.87891,118.953125 L1337.87891,114.167969 L1326.94141,114.167969 L1326.94141,100.642578 L1321.08203,100.642578 L1321.08203,114.167969 L1311.36523,114.167969 L1311.36523,118.953125 L1321.08203,118.953125 L1321.08203,154.207031 C1321.08203,158.731771 1321.99349,162.157878 1323.81641,164.485352 C1325.63932,166.812826 1328.55273,167.976562 1332.55664,167.976562 Z M1370.44727,167.976562 C1378.61784,167.976562 1384.85156,164.867839 1389.14844,158.650391 L1389.14844,158.650391 L1385.48633,155.867188 C1383.5332,158.373698 1381.36035,160.196615 1378.96777,161.335938 C1376.5752,162.47526 1373.81641,163.044922 1370.69141,163.044922 C1365.48307,163.044922 1361.16178,161.051107 1357.72754,157.063477 C1354.29329,153.075846 1352.57617,148.08724 1352.57617,142.097656 L1352.57617,142.097656 L1352.57617,140.974609 L1390.27148,140.974609 L1390.27148,137.703125 C1390.27148,130.11849 1388.3916,124.137044 1384.63184,119.758789 C1380.87207,115.380534 1375.78581,113.191406 1369.37305,113.191406 C1365.27148,113.191406 1361.46289,114.355143 1357.94727,116.682617 C1354.43164,119.010091 1351.68913,122.208333 1349.71973,126.277344 C1347.75033,130.346354 1346.76562,134.919922 1346.76562,139.998047 L1346.76562,139.998047 L1346.76562,142.097656 C1346.76562,147.013021 1347.77474,151.448242 1349.79297,155.40332 C1351.8112,159.358398 1354.63509,162.442708 1358.26465,164.65625 C1361.89421,166.869792 1365.95508,167.976562 1370.44727,167.976562 Z M1384.46094,135.994141 L1352.77148,135.994141 C1353.42253,130.557943 1355.25358,126.228516 1358.26465,123.005859 C1361.27572,119.783203 1364.97852,118.171875 1369.37305,118.171875 C1373.80013,118.171875 1377.38086,119.766927 1380.11523,122.957031 C1382.84961,126.147135 1384.29818,130.28125 1384.46094,135.359375 L1384.46094,135.359375 L1384.46094,135.994141 Z M1419.66602,167.976562 C1425.46029,167.976562 1430.15592,166.641927 1433.75293,163.972656 C1437.34993,161.303385 1439.14844,157.738932 1439.14844,153.279297 C1439.14844,150.544922 1438.52995,148.217448 1437.29297,146.296875 C1436.05599,144.376302 1434.15983,142.732422 1431.60449,141.365234 C1429.04915,139.998047 1425.20801,138.71224 1420.08105,137.507812 C1414.9541,136.303385 1411.4222,134.976888 1409.48535,133.52832 C1407.5485,132.079753 1406.58008,130.037109 1406.58008,127.400391 C1406.58008,124.666016 1407.74382,122.444336 1410.07129,120.735352 C1412.39876,119.026367 1415.48307,118.171875 1419.32422,118.171875 C1423.26302,118.171875 1426.52637,119.197266 1429.11426,121.248047 C1431.70215,123.298828 1432.99609,125.870443 1432.99609,128.962891 L1432.99609,128.962891 L1438.85547,128.962891 C1438.85547,124.275391 1437.07324,120.474935 1433.50879,117.561523 C1429.94434,114.648112 1425.21615,113.191406 1419.32422,113.191406 C1413.88802,113.191406 1409.42839,114.550456 1405.94531,117.268555 C1402.46224,119.986654 1400.7207,123.429036 1400.7207,127.595703 C1400.7207,130.232422 1401.34733,132.478516 1402.60059,134.333984 C1403.85384,136.189453 1405.77441,137.760091 1408.3623,139.045898 C1410.9502,140.331706 1414.58789,141.471029 1419.27539,142.463867 C1423.96289,143.456706 1427.47038,144.832031 1429.79785,146.589844 C1432.12533,148.347656 1433.28906,150.67513 1433.28906,153.572266 C1433.28906,156.306641 1432.03581,158.56901 1429.5293,160.359375 C1427.02279,162.14974 1423.73503,163.044922 1419.66602,163.044922 C1415.30404,163.044922 1411.79655,162.092773 1409.14355,160.188477 C1406.49056,158.28418 1405.05013,155.623047 1404.82227,152.205078 L1404.82227,152.205078 L1398.96289,152.205078 C1398.96289,156.76237 1400.87533,160.530273 1404.7002,163.508789 C1408.52507,166.487305 1413.51367,167.976562 1419.66602,167.976562 Z",
            id: "WebDesignin4minutes",
            fill: "#1B1E21",
            fillRule: "nonzero"
        })));
        var te = ()=>r.createElement("svg", {
            version: "1.0",
            x: "0px",
            y: "0px",
            width: "122.523px",
            height: "122.523px",
            viewBox: "0 0 122.523 122.523",
            enableBackground: "new 0 0 122.523 122.523"
        }, r.createElement("g", null, r.createElement("g", null, r.createElement("path", {
            fill: "#00749A",
            d: "M8.708,61.26c0,20.802,12.089,38.779,29.619,47.298L13.258,39.872 C10.342,46.408,8.708,53.641,8.708,61.26z"
        }), r.createElement("path", {
            fill: "#00749A",
            d: "M96.74,58.608c0-6.495-2.333-10.993-4.334-14.494c-2.664-4.329-5.161-7.995-5.161-12.324 c0-4.831,3.664-9.328,8.825-9.328c0.233,0,0.454,0.029,0.681,0.042c-9.35-8.566-21.807-13.796-35.489-13.796 c-18.36,0-34.513,9.42-43.91,23.688c1.233,0.037,2.395,0.063,3.382,0.063c5.497,0,14.006-0.667,14.006-0.667 c2.833-0.167,3.167,3.994,0.337,4.329c0,0-2.847,0.335-6.015,0.501L48.2,93.547l11.501-34.493l-8.188-22.434 c-2.83-0.166-5.511-0.501-5.511-0.501c-2.832-0.166-2.5-4.496,0.332-4.329c0,0,8.679,0.667,13.843,0.667 c5.496,0,14.006-0.667,14.006-0.667c2.835-0.167,3.168,3.994,0.337,4.329c0,0-2.853,0.335-6.015,0.501l18.992,56.494 l5.242-17.517C95.011,68.328,96.74,63.107,96.74,58.608z"
        }), r.createElement("path", {
            fill: "#00749A",
            d: "M62.184,65.857l-15.768,45.819c4.708,1.384,9.687,2.141,14.846,2.141c6.12,0,11.989-1.058,17.452-2.979 c-0.141-0.225-0.269-0.464-0.374-0.724L62.184,65.857z"
        }), r.createElement("path", {
            fill: "#00749A",
            d: "M107.376,36.046c0.226,1.674,0.354,3.471,0.354,5.404c0,5.333-0.996,11.328-3.996,18.824l-16.053,46.413 c15.624-9.111,26.133-26.038,26.133-45.426C113.815,52.124,111.481,43.532,107.376,36.046z"
        }), r.createElement("path", {
            fill: "#00749A",
            d: "M61.262,0C27.483,0,0,27.481,0,61.26c0,33.783,27.483,61.263,61.262,61.263 c33.778,0,61.265-27.48,61.265-61.263C122.526,27.481,95.04,0,61.262,0z M61.262,119.715c-32.23,0-58.453-26.223-58.453-58.455 c0-32.23,26.222-58.451,58.453-58.451c32.229,0,58.45,26.221,58.45,58.451C119.712,93.492,93.491,119.715,61.262,119.715z"
        }))));
        var ne = ()=>r.createElement("svg", {
            version: "1.0",
            x: "0px",
            y: "0px",
            width: "540px",
            height: "122.523px",
            viewBox: "0 0 540 122.523",
            enableBackground: "new 0 0 540 122.523"
        }, r.createElement("g", null, r.createElement("path", {
            fill: "#00749A",
            d: "M313.19,48.227h-21.257v2.255c6.649,0,7.718,1.425,7.718,9.857V75.54c0,8.431-1.068,9.975-7.718,9.975 c-5.105-0.712-8.55-3.444-13.3-8.669l-5.462-5.937c7.362-1.308,11.28-5.938,11.28-11.164c0-6.53-5.58-11.518-16.031-11.518h-20.9 v2.255c6.649,0,7.718,1.425,7.718,9.857V75.54c0,8.431-1.069,9.975-7.718,9.975v2.256h23.631v-2.256 c-6.649,0-7.718-1.544-7.718-9.975v-4.274h2.018l13.182,16.505h34.557c16.981,0,24.344-9.024,24.344-19.832 C337.534,57.133,330.172,48.227,313.19,48.227z M263.434,67.582V51.79h4.868c5.343,0,7.719,3.681,7.719,7.956 c0,4.157-2.376,7.837-7.719,7.837H263.434z M313.547,84.09h-0.832c-4.274,0-4.868-1.068-4.868-6.531V51.79c0,0,5.225,0,5.7,0 c12.35,0,14.605,9.024,14.605,16.031C328.152,75.064,325.896,84.09,313.547,84.09z"
        }), r.createElement("path", {
            fill: "#00749A",
            d: "M181.378,71.978l8.194-24.227c2.376-7.006,1.307-9.024-6.293-9.024v-2.376h22.325v2.376 c-7.481,0-9.262,1.781-12.231,10.45L179.834,89.79h-1.543l-12.114-37.17l-12.349,37.17h-1.544l-13.181-40.613 c-2.85-8.669-4.75-10.45-11.638-10.45v-2.376h26.363v2.376c-7.007,0-8.908,1.662-6.413,9.024l7.956,24.227l11.994-35.627h2.257 L181.378,71.978z"
        }), r.createElement("path", {
            fill: "#00749A",
            d: "M221.752,89.314c-13.062,0-23.75-9.618-23.75-21.376c0-11.637,10.689-21.257,23.75-21.257 c13.063,0,23.75,9.62,23.75,21.257C245.502,79.696,234.815,89.314,221.752,89.314z M221.752,50.365 c-10.924,0-14.725,9.855-14.725,17.574c0,7.839,3.801,17.576,14.725,17.576c11.045,0,14.845-9.737,14.845-17.576 C236.597,60.22,232.797,50.365,221.752,50.365z"
        }), r.createElement("path", {
            className: "dark-path",
            fill: "#464342",
            d: "M366.864,85.396v2.375H339.67v-2.375c7.957,0,9.382-2.018,9.382-13.895V52.502 c0-11.877-1.425-13.776-9.382-13.776v-2.376h24.581c12.231,0,19.002,6.294,19.002,14.727c0,8.194-6.771,14.606-19.002,14.606 h-6.769v5.817C357.482,83.378,358.907,85.396,366.864,85.396z M364.251,40.625h-6.769v20.664h6.769 c6.651,0,9.738-4.631,9.738-10.212C373.989,45.377,370.902,40.625,364.251,40.625z"
        }), r.createElement("path", {
            className: "dark-path",
            fill: "#464342",
            d: "M464.833,76.609l-0.594,2.137c-1.068,3.919-2.376,5.344-10.807,5.344h-1.663 c-6.174,0-7.243-1.425-7.243-9.856v-5.462c9.263,0,9.976,0.83,9.976,7.006h2.256V58.083h-2.256c0,6.175-0.713,7.006-9.976,7.006 V51.79h6.53c8.433,0,9.738,1.425,10.807,5.344l0.595,2.255h1.899l-0.83-11.162h-34.914v2.255c6.649,0,7.719,1.425,7.719,9.857 V75.54c0,7.713-0.908,9.656-6.151,9.933c-4.983-0.761-8.404-3.479-13.085-8.627l-5.463-5.937 c7.363-1.308,11.282-5.938,11.282-11.164c0-6.53-5.581-11.518-16.031-11.518h-20.9v2.255c6.649,0,7.718,1.425,7.718,9.857V75.54 c0,8.431-1.068,9.975-7.718,9.975v2.256h23.632v-2.256c-6.649,0-7.719-1.544-7.719-9.975v-4.274h2.019l13.181,16.505h48.806 l0.713-11.161H464.833z M401.896,67.582V51.79h4.868c5.344,0,7.72,3.681,7.72,7.956c0,4.157-2.376,7.837-7.72,7.837H401.896z"
        }), r.createElement("path", {
            className: "dark-path",
            fill: "#464342",
            d: "M488.939,89.314c-4.75,0-8.907-2.493-10.688-4.038c-0.594,0.595-1.662,2.376-1.899,4.038h-2.257V72.928 h2.375c0.951,7.837,6.412,12.468,13.419,12.468c3.8,0,6.888-2.137,6.888-5.699c0-3.087-2.731-5.463-7.6-7.719l-6.769-3.206 c-4.751-2.258-8.313-6.177-8.313-11.401c0-5.7,5.344-10.568,12.707-10.568c3.919,0,7.243,1.425,9.263,3.087 c0.593-0.475,1.187-1.782,1.544-3.208h2.256v14.014h-2.494c-0.832-5.582-3.919-10.213-10.212-10.213 c-3.325,0-6.414,1.9-6.414,4.87c0,3.087,2.494,4.749,8.195,7.362l6.53,3.206c5.701,2.731,7.956,7.127,7.956,10.689 C503.426,84.09,496.895,89.314,488.939,89.314z"
        }), r.createElement("path", {
            className: "dark-path",
            fill: "#464342",
            d: "M525.514,89.314c-4.751,0-8.908-2.493-10.688-4.038c-0.594,0.595-1.662,2.376-1.899,4.038h-2.257V72.928 h2.375c0.95,7.837,6.412,12.468,13.419,12.468c3.8,0,6.888-2.137,6.888-5.699c0-3.087-2.731-5.463-7.601-7.719l-6.769-3.206 c-4.75-2.258-8.313-6.177-8.313-11.401c0-5.7,5.344-10.568,12.707-10.568c3.919,0,7.243,1.425,9.263,3.087 c0.593-0.475,1.187-1.782,1.542-3.208h2.257v14.014h-2.493c-0.832-5.582-3.919-10.213-10.212-10.213 c-3.325,0-6.414,1.9-6.414,4.87c0,3.087,2.494,4.749,8.195,7.362l6.53,3.206c5.701,2.731,7.956,7.127,7.956,10.689 C540,84.09,533.469,89.314,525.514,89.314z"
        }), r.createElement("g", {
            className: "dark-path"
        }, r.createElement("path", {
            fill: "#464342",
            d: "M8.708,61.26c0,20.802,12.089,38.779,29.619,47.298L13.258,39.872 C10.342,46.408,8.708,53.641,8.708,61.26z"
        }), r.createElement("path", {
            fill: "#464342",
            d: "M96.74,58.608c0-6.495-2.333-10.993-4.334-14.494c-2.664-4.329-5.161-7.995-5.161-12.324 c0-4.831,3.664-9.328,8.825-9.328c0.233,0,0.454,0.029,0.681,0.042c-9.35-8.566-21.807-13.796-35.489-13.796 c-18.36,0-34.513,9.42-43.91,23.688c1.233,0.037,2.395,0.063,3.382,0.063c5.497,0,14.006-0.667,14.006-0.667 c2.833-0.167,3.167,3.994,0.337,4.329c0,0-2.847,0.335-6.015,0.501L48.2,93.547l11.501-34.493l-8.188-22.434 c-2.83-0.166-5.511-0.501-5.511-0.501c-2.832-0.166-2.5-4.496,0.332-4.329c0,0,8.679,0.667,13.843,0.667 c5.496,0,14.006-0.667,14.006-0.667c2.835-0.167,3.168,3.994,0.337,4.329c0,0-2.853,0.335-6.015,0.501l18.992,56.494 l5.242-17.517C95.011,68.328,96.74,63.107,96.74,58.608z"
        }), r.createElement("path", {
            fill: "#464342",
            d: "M62.184,65.857l-15.768,45.819c4.708,1.384,9.687,2.141,14.846,2.141c6.12,0,11.989-1.058,17.452-2.979 c-0.141-0.225-0.269-0.464-0.374-0.724L62.184,65.857z"
        }), r.createElement("path", {
            fill: "#464342",
            d: "M107.376,36.046c0.226,1.674,0.354,3.471,0.354,5.404c0,5.333-0.996,11.328-3.996,18.824l-16.053,46.413 c15.624-9.111,26.133-26.038,26.133-45.426C113.815,52.124,111.481,43.532,107.376,36.046z"
        }), r.createElement("path", {
            fill: "#464342",
            d: "M61.262,0C27.483,0,0,27.481,0,61.26c0,33.783,27.483,61.263,61.262,61.263 c33.778,0,61.265-27.48,61.265-61.263C122.526,27.481,95.04,0,61.262,0z M61.262,119.715c-32.23,0-58.453-26.223-58.453-58.455 c0-32.23,26.222-58.451,58.453-58.451c32.229,0,58.45,26.221,58.45,58.451C119.712,93.492,93.491,119.715,61.262,119.715z"
        }))));
        const re = {
            star: {
                name: "star",
                svg: r.createElement(J, null)
            },
            sphere: {
                name: "sphere",
                svg: r.createElement(_, null)
            },
            lego: {
                name: "lego",
                svg: r.createElement(q, null)
            },
            rubyOnRails: {
                name: "Ruby on Rails",
                svg: r.createElement(U, null)
            },
            fifa: {
                name: "fifa",
                svg: r.createElement(w, null)
            },
            svelte: {
                name: "svelte",
                svg: r.createElement(X, null)
            },
            figma: {
                name: "Figma",
                svg: r.createElement(M, null)
            },
            ellipsis: {
                name: "Ellipsis",
                svg: r.createElement(f, null)
            },
            compoundAdvisors: {
                name: "Compound Advisors",
                svg: r.createElement(C, null)
            },
            laravel: {
                name: "Laravel",
                svg: r.createElement(A, null)
            },
            fabula: {
                name: "Fabula",
                svg: r.createElement(E, null)
            },
            cssReference: {
                name: "CSS Reference",
                svg: r.createElement(d, null)
            },
            htmlReference: {
                name: "HTML Reference",
                svg: r.createElement(z, null)
            },
            js14: {
                name: "js14",
                svg: r.createElement(S, null)
            },
            wd4: {
                name: "wd4",
                svg: r.createElement(ee, null)
            },
            bulmaLogo: {
                name: "bulma",
                svg: r.createElement(o, null)
            },
            jt: {
                name: "jt",
                svg: r.createElement(T, null)
            },
            lv: {
                name: "Louis Vuitton",
                svg: r.createElement(R, null)
            },
            ms: {
                name: "Microsoft",
                svg: r.createElement(N, null)
            },
            sony: {
                name: "Sony",
                svg: r.createElement(Y, null)
            },
            umg: {
                name: "Universal Music Group",
                svg: r.createElement(Q, null)
            },
            drawing: {
                name: "drawing",
                svg: r.createElement(u, null)
            },
            photoshop: {
                name: "photoshop",
                svg: r.createElement(H, null)
            },
            illustrator: {
                name: "illustrator",
                svg: r.createElement(k, null)
            },
            sketch: {
                name: "sketch",
                svg: r.createElement(W, null)
            },
            html5: {
                name: "html5",
                svg: r.createElement(Z, null)
            },
            css3: {
                name: "css3",
                svg: r.createElement(m, null)
            },
            sass: {
                name: "sass",
                svg: r.createElement(I, null)
            },
            wordpress: {
                name: "wordpress",
                svg: r.createElement(ne, null)
            },
            wordpressIcon: {
                name: "wordpress-icon",
                svg: r.createElement(te, null)
            },
            js: {
                name: "js",
                svg: r.createElement(B, null)
            },
            react: {
                name: "react",
                svg: r.createElement(D, null)
            },
            nodejs: {
                name: "nodejs",
                svg: r.createElement(j, null)
            },
            angular: {
                name: "angular",
                svg: r.createElement(l, null)
            },
            vue: {
                name: "vue",
                svg: r.createElement($, null)
            },
            elm: {
                name: "elm",
                svg: r.createElement(h, null)
            },
            ember: {
                name: "ember",
                svg: r.createElement(L, null)
            },
            twitter: {
                name: "twitter",
                svg: r.createElement(K, null)
            },
            facebook: {
                name: "facebook",
                svg: r.createElement(v, null)
            },
            github: {
                name: "github",
                svg: r.createElement(x, null)
            },
            arrow: {
                name: "arrow",
                svg: r.createElement(c, null)
            },
            arrowDown: {
                name: "arrowDown",
                svg: r.createElement(a, null)
            },
            quoteOpen: {
                name: "quoteOpen",
                svg: r.createElement(G, null)
            },
            quoteClose: {
                name: "quoteClose",
                svg: r.createElement(P, null)
            },
            externalLink: {
                name: "externalLink",
                svg: r.createElement(g, null)
            },
            email: {
                name: "email",
                svg: r.createElement(p, null)
            },
            chevronLeft: {
                name: "chevronLeft",
                svg: r.createElement(i, null)
            },
            chevronRight: {
                name: "chevronRight",
                svg: r.createElement(s, null)
            },
            gatsby: {
                name: "Gatsby",
                svg: r.createElement(b, null)
            },
            gatsbyIcon: {
                name: "Gatsby icon",
                svg: r.createElement(y, null)
            },
            ivanBallini: {
                name: "ivan-ballini",
                svg: r.createElement(F, null)
            },
            netspeakGames: {
                name: "netspeak-games",
                svg: r.createElement(O, null)
            },
            pencil: {
                name: "pencil",
                svg: r.createElement(V, null)
            }
        };
        var le = e=>{
            let {id: t} = e;
            return t in re ? re[t].svg : null
        }
    },
    4284: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return u
            }
        });
        var r = n(7294);
        n(8142),
        n(7905);
        n(2551);
        n(585);
        var l = n(1721)
          , a = n(8745)
          , c = n(9025)
          , o = n(5900)
          , i = n.n(o);
        let s = function(e) {
            function t() {
                for (var t, n = arguments.length, r = new Array(n), l = 0; l < n; l++)
                    r[l] = arguments[l];
                return (t = e.call.apply(e, [this].concat(r)) || this).onPressingEscape = e=>{
                    const {closeModal: n} = t.props;
                    27 === e.keyCode && n()
                }
                ,
                t
            }
            (0,
            l.Z)(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                document.addEventListener("keydown", this.onPressingEscape, !1)
            }
            ,
            n.componentWillUnmount = function() {
                document.removeEventListener("keydown", this.onPressingEscape, !1)
            }
            ,
            n.render = function() {
                const {modalOpen: e, closeModal: t} = this.props;
                return r.createElement("div", {
                    id: "c",
                    className: i()("modal", e && "is-active")
                }, r.createElement("div", {
                    className: "modal-background",
                    onClick: t
                }), r.createElement("div", {
                    className: "modal-content"
                }, r.createElement("div", {
                    className: "modal-module--e--wMwK-"
                }, r.createElement(c.Z, {
                    path: "global",
                    slug: "e",
                    alt: "Bulma book book cover",
                    width: "320",
                    height: "80"
                }))), r.createElement("button", {
                    onClick: t,
                    className: "modal-close is-large",
                    "aria-label": "close"
                }))
            }
            ,
            t
        }(r.Component);
        (0,
        a.$j)((e=>{
            let {modalOpen: t} = e;
            return {
                modalOpen: t
            }
        }
        ), (e=>({
            closeModal: ()=>e({
                type: "CLOSE_MODAL"
            })
        })))(s);
        n(5733);
        n(1597);
        var C = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).getCount = ()=>{
                    const e = window.getComputedStyle(n.componentRef.current).getPropertyValue("--count");
                    return parseInt(e)
                }
                ,
                n.setCount = e=>{
                    n.componentRef.current.style.setProperty("--count", e)
                }
                ,
                n.handleClick = ()=>{
                    const {onToggle: e} = n.props;
                    n.setCount(n.getCount() + 1),
                    e()
                }
                ,
                n.componentRef = r.createRef(),
                n
            }
            return (0,
            l.Z)(t, e),
            t.prototype.render = function() {
                return r.createElement("button", {
                    className: "theme-toggle-module--component--VwErg",
                    onClick: this.handleClick,
                    ref: this.componentRef
                }, r.createElement("div", {
                    className: "theme-toggle-module--wheel--iFb3t"
                }, r.createElement("p", {
                    className: "theme-toggle-module--light--fVTPs"
                }), r.createElement("p", {
                    className: "theme-toggle-module--dark--seCuM"
                })))
            }
            ,
            t
        }(r.Component);
        const m = "light"
          , d = ()=>{
            const {0: e, 1: t} = (0,
            r.useState)(m);
            return (0,
            r.useEffect)((()=>{
                const e = window.localStorage.getItem("theme");
                if (e)
                    document.documentElement.setAttribute("data-theme", e),
                    t(e);
                else {
                    const e = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : m;
                    document.documentElement.setAttribute("data-theme", e),
                    window.localStorage.setItem("theme", e),
                    t(e)
                }
            }
            )),
            [e, ()=>{
                "light" === e ? (t("dark"),
                window.localStorage.setItem("theme", "dark")) : (t("light"),
                window.localStorage.setItem("theme", "light"))
            }
            ]
        }
        ;
        var u = e=>{
            let {children: t, hideNewsletter: n=!0, hideFooter: l=!1} = e;
            const [a,c] = d();
            return r.createElement("div", null, r.createElement(C, {
                theme: a,
                onToggle: c
            }), t)
        }
    },
    7326: function(e, t, n) {
        "use strict";
        function r(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    7892: function(e) {
        "use strict";
        e.exports = JSON.parse('{"by_id":{"twitter":{"id":"twitter","href":"https://twitter.com/jgthms","label":"Twitter"},"github":{"id":"github","href":"https://github.com/jgthms","label":"GitHub"},"index":{"id":"index","to":"/","label":"Home"},"opensource":{"id":"opensource","to":"/open-source-activist/","label":"Open Source"},"work":{"id":"work","to":"/freelance-designer-developer-london/","dropdown":true,"label":"Work"},"freelance":{"id":"freelance","to":"/freelance-designer-developer-london/","label":"Freelance"},"branding":{"id":"branding","to":"/brand-identity/","label":"Branding"},"ui":{"id":"ui","to":"/graphic-design/","label":"Design"},"design":{"id":"design","to":"/graphic-design/","label":"UI/UX Design"},"css":{"id":"css","to":"/html-css-frontend-development/","label":"HTML/CSS"},"htmlcss":{"id":"htmlcss","to":"/html-css-frontend-development/","label":"HTML & CSS"},"wordpress":{"id":"wordpress","to":"/freelance-wordpress-developer/","label":"WordPress"},"backend":{"id":"backend","to":"/freelance-wordpress-developer/","label":"Backend"},"javascript":{"id":"javascript","to":"/frontend-javascript-developer/","label":"JavaScript"},"js":{"id":"js","to":"/frontend-javascript-developer/","label":"JavaScript"},"programming":{"id":"programming","to":"/freelance-wordpress-developer/","label":"Programming"},"books":{"id":"books","to":"/css-in-44-minutes-ebook/","dropdown":true,"label":"Books"},"css44":{"id":"css44","to":"/css-in-44-minutes-ebook/","label":"CSS Book"},"ciwb":{"id":"ciwb","to":"/creating-interfaces-with-bulma-ebook/","label":"Bulma Book"},"teaching":{"id":"teaching","to":"/london-html-css-javascript-code-teacher/","label":"Teaching"},"contact":{"id":"contact","to":"/contact/","label":"Contact"},"caseStudies":{"id":"caseStudies","to":"/ivan-ballini-estates/","dropdown":true,"label":"Case Studies"},"ivanBallini":{"id":"ivanBallini","to":"/ivan-ballini-estates/","label":"Ivan Ballini Estates"},"netspeakGames":{"id":"netspeakGames","to":"/netspeak-games/","label":"Netspeak Games"},"fabula":{"id":"fabula","to":"/fabula/","label":"Fabula"},"compound":{"id":"compound","to":"/compound-advisors/","label":"Compound Advisors"}},"list":["index","freelance","css44","ciwb","teaching","contact"],"header":["index","work","caseStudies","opensource","books","contact","twitter","github"],"work":["freelance","branding","design","htmlcss","js","backend","teaching"],"caseStudies":["ivanBallini","netspeakGames","fabula","compound"],"books":["css44","ciwb"],"switcher":["index","freelance","css44","ciwb","teaching","contact"],"skills":["freelance","branding","ui","css","wordpress","javascript","teaching"],"talents":["freelance","branding","design","htmlcss","js","backend","teaching"],"allNext":["freelance","branding","ui","css","wordpress","javascript","teaching","ivanBallini","netspeakGames","fabula","compound","css44"]}')
    },
    2551: function(e) {
        "use strict";
        e.exports = JSON.parse('{"by_id":{"bulma":{"id":"bulma","svg":"bulmaLogo","slug":"bulma","url":"https://bulma.io/","surtitle":"Open source","title":"Bulma","subtitle":"My CSS framework based on Flexbox","description":"<p>In 2016, I created a small project to help streamline my development process. Built with Sass and relying heavily Flexbox, a new CSS framework was born.</p><p>I open sourced it and it quickly gathered the interest of hundreds of thousands of developers across the world.</p>","github":true,"year":2016,"width":158,"height":40},"fbt":{"id":"fbt","slug":"football-tables","url":"https://jgthms.com/football-tables/","surtitle":"Fun stuff","title":"footballtabl.es","subtitle":"All football leagues, with classic and alternative tables","year":2018,"width":1200,"height":600},"wd4":{"id":"wd4","svg":"wd4","slug":"web-design-in-4-minutes","url":"https://jgthms.com/web-design-in-4-minutes/","surtitle":"Fun stuff","title":"Web Design in 4 minutes","subtitle":"Innovative tutorial","description":"<p>I always wanted to find a way to explain how simple a website actually is.</p><p>Within minutes, I came up with the idea of an innovative tutorial that would only take a few minutes to read.</p><p>Its interactivity made the project go viral.</p>","year":2017,"width":288,"height":56},"js14":{"id":"js14","svg":"js14","slug":"javascript-in-14-minutes","url":"https://jgthms.com/javascript-in-14-minutes/","surtitle":"Fun stuff","title":"JavaScript in 14 minutes","subtitle":"Interactive tutorial","year":2018,"width":318,"height":52},"htmlref":{"id":"htmlref","svg":"htmlReference","slug":"html-reference","url":"https://htmlreference.io/","surtitle":"Knowledge","title":"HTML Reference","subtitle":"Guide to all HTML elements and attributes","year":2017,"width":272,"height":48},"cssref":{"id":"cssref","svg":"cssReference","slug":"css-reference","url":"https://cssreference.io/","surtitle":"Knowledge","title":"CSS Reference","subtitle":"Visual guide to all CSS properties","description":"<p>As I was dealing with CSS daily, I could never find a reliable reference that was both straightforward and easy to understand. I came up with a new way to present how CSS works: by providing a visual example for each property and each of their possible values.</p>","year":2017,"width":248,"height":48},"wysiwyg":{"id":"wysiwyg","slug":"wysiwyg.css","url":"https://jgthms.com/wysiwyg.css/","surtitle":"Open source","title":"wysiwyg.css","subtitle":"Style your Markdown or WYSIWYG content","year":2016,"width":300,"height":157.5},"minireset":{"id":"minireset","slug":"minireset.css","url":"https://jgthms.com/minireset.css/","surtitle":"Open source","title":"minireset.css","subtitle":"Tiny modern CSS reset","year":2016,"width":160,"height":160},"marksheet":{"id":"marksheet","slug":"marksheet","url":"https://marksheet.io/","surtitle":"Knowledge","title":"MarkSheet","subtitle":"Free HTML & CSS lessons","year":2015,"width":200,"height":150},"ivan":{"id":"ivan","slug":"ivan-ballini","url":"http://ivanballiniestates.com/","surtitle":"Freelance","title":"Ivan Ballini Estates","subtitle":"Normandy real estate agency","width":183298,"height":83282},"arnaud":{"id":"arnaud","slug":"arnaud","url":"http://arnaudbenard.com/","surtitle":"Freelance","title":"Arnaud Bénard","subtitle":"Data scientist","width":183298,"height":83282},"f1":{"id":"f1","slug":"f1standings","url":"https://jgthms.com/f1-standings/","surtitle":"Fun stuff","title":"F1 Standings","subtitle":"All F1 standings and races calendar, simple and intuitive","year":2019,"width":1800,"height":900}},"list":{"open_source":["marksheet","bulma","minireset","wysiwyg","wd4","htmlref","cssref","js14"],"fun":["f1","fbt"]}}')
    },
    4709: function(e) {
        "use strict";
        e.exports = JSON.parse('{"website":"https://jgthms.com","twitter":"https://twitter.com/jgthms","github":"https://github.com/jgthms","freelance":"/freelance-designer-developer-london","teaching":"/london-html-css-javascript-code-teacher","bulma":"https://bulma.io/","cssref":"https://cssreference.io/","htmlref":"https://htmlreference.io/","wd4":"https://jgthms.com/web-design-in-4-minutes/","js14":"https://jgthms.com/javascript-in-14-minutes/"}')
    }
}]);
//# sourceMappingURL=commons-305d93fb405811566aec.js.map
