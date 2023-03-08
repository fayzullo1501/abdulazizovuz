(self.webpackChunkjgthms_com = self.webpackChunkjgthms_com || []).push([[678], {
    8938: function(e, t, n) {
        var r;
        "undefined" != typeof self && self,
        r = e=>(()=>{
            var t = {
                7403: (e,t,n)=>{
                    "use strict";
                    n.d(t, {
                        default: ()=>j
                    });
                    var r = n(4087)
                      , o = n.n(r);
                    const a = function(e) {
                        return new RegExp(/<[a-z][\s\S]*>/i).test(e)
                    }
                      , i = function(e) {
                        var t = document.createElement("div");
                        return t.innerHTML = e,
                        t.childNodes
                    }
                      , s = function(e, t) {
                        return Math.floor(Math.random() * (t - e + 1)) + e
                    };
                    var l = "TYPE_CHARACTER"
                      , c = "REMOVE_CHARACTER"
                      , u = "REMOVE_ALL"
                      , p = "REMOVE_LAST_VISIBLE_NODE"
                      , f = "PAUSE_FOR"
                      , d = "CALL_FUNCTION"
                      , m = "ADD_HTML_TAG_ELEMENT"
                      , v = "CHANGE_DELETE_SPEED"
                      , h = "CHANGE_DELAY"
                      , g = "CHANGE_CURSOR"
                      , y = "PASTE_STRING"
                      , b = "HTML_TAG";
                    function w(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }
                            ))),
                            n.push.apply(n, r)
                        }
                        return n
                    }
                    function E(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? w(Object(n), !0).forEach((function(t) {
                                C(e, t, n[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }
                            ))
                        }
                        return e
                    }
                    function _(e) {
                        return function(e) {
                            if (Array.isArray(e))
                                return x(e)
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                return Array.from(e)
                        }(e) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e)
                                    return x(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name),
                                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? x(e, t) : void 0
                            }
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }
                    function x(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++)
                            r[n] = e[n];
                        return r
                    }
                    function C(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n,
                        e
                    }
                    const j = function() {
                        function e(t, n) {
                            var w = this;
                            if (function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }(this, e),
                            C(this, "state", {
                                cursorAnimation: null,
                                lastFrameTime: null,
                                pauseUntil: null,
                                eventQueue: [],
                                eventLoop: null,
                                eventLoopPaused: !1,
                                reverseCalledEvents: [],
                                calledEvents: [],
                                visibleNodes: [],
                                initialOptions: null,
                                elements: {
                                    container: null,
                                    wrapper: document.createElement("span"),
                                    cursor: document.createElement("span")
                                }
                            }),
                            C(this, "options", {
                                strings: null,
                                cursor: "|",
                                delay: "natural",
                                pauseFor: 1500,
                                deleteSpeed: "natural",
                                loop: !1,
                                autoStart: !1,
                                devMode: !1,
                                skipAddStyles: !1,
                                wrapperClassName: "Typewriter__wrapper",
                                cursorClassName: "Typewriter__cursor",
                                stringSplitter: null,
                                onCreateTextNode: null,
                                onRemoveNode: null
                            }),
                            C(this, "setupWrapperElement", (function() {
                                w.state.elements.container && (w.state.elements.wrapper.className = w.options.wrapperClassName,
                                w.state.elements.cursor.className = w.options.cursorClassName,
                                w.state.elements.cursor.innerHTML = w.options.cursor,
                                w.state.elements.container.innerHTML = "",
                                w.state.elements.container.appendChild(w.state.elements.wrapper),
                                w.state.elements.container.appendChild(w.state.elements.cursor))
                            }
                            )),
                            C(this, "start", (function() {
                                return w.state.eventLoopPaused = !1,
                                w.runEventLoop(),
                                w
                            }
                            )),
                            C(this, "pause", (function() {
                                return w.state.eventLoopPaused = !0,
                                w
                            }
                            )),
                            C(this, "stop", (function() {
                                return w.state.eventLoop && ((0,
                                r.cancel)(w.state.eventLoop),
                                w.state.eventLoop = null),
                                w
                            }
                            )),
                            C(this, "pauseFor", (function(e) {
                                return w.addEventToQueue(f, {
                                    ms: e
                                }),
                                w
                            }
                            )),
                            C(this, "typeOutAllStrings", (function() {
                                return "string" == typeof w.options.strings ? (w.typeString(w.options.strings).pauseFor(w.options.pauseFor),
                                w) : (w.options.strings.forEach((function(e) {
                                    w.typeString(e).pauseFor(w.options.pauseFor).deleteAll(w.options.deleteSpeed)
                                }
                                )),
                                w)
                            }
                            )),
                            C(this, "typeString", (function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                if (a(e))
                                    return w.typeOutHTMLString(e, t);
                                if (e) {
                                    var n = w.options || {}
                                      , r = n.stringSplitter
                                      , o = "function" == typeof r ? r(e) : e.split("");
                                    w.typeCharacters(o, t)
                                }
                                return w
                            }
                            )),
                            C(this, "pasteString", (function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                return a(e) ? w.typeOutHTMLString(e, t, !0) : (e && w.addEventToQueue(y, {
                                    character: e,
                                    node: t
                                }),
                                w)
                            }
                            )),
                            C(this, "typeOutHTMLString", (function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                                  , n = arguments.length > 2 ? arguments[2] : void 0
                                  , r = i(e);
                                if (r.length > 0)
                                    for (var o = 0; o < r.length; o++) {
                                        var a = r[o]
                                          , s = a.innerHTML;
                                        a && 3 !== a.nodeType ? (a.innerHTML = "",
                                        w.addEventToQueue(m, {
                                            node: a,
                                            parentNode: t
                                        }),
                                        n ? w.pasteString(s, a) : w.typeString(s, a)) : a.textContent && (n ? w.pasteString(a.textContent, t) : w.typeString(a.textContent, t))
                                    }
                                return w
                            }
                            )),
                            C(this, "deleteAll", (function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
                                return w.addEventToQueue(u, {
                                    speed: e
                                }),
                                w
                            }
                            )),
                            C(this, "changeDeleteSpeed", (function(e) {
                                if (!e)
                                    throw new Error("Must provide new delete speed");
                                return w.addEventToQueue(v, {
                                    speed: e
                                }),
                                w
                            }
                            )),
                            C(this, "changeDelay", (function(e) {
                                if (!e)
                                    throw new Error("Must provide new delay");
                                return w.addEventToQueue(h, {
                                    delay: e
                                }),
                                w
                            }
                            )),
                            C(this, "changeCursor", (function(e) {
                                if (!e)
                                    throw new Error("Must provide new cursor");
                                return w.addEventToQueue(g, {
                                    cursor: e
                                }),
                                w
                            }
                            )),
                            C(this, "deleteChars", (function(e) {
                                if (!e)
                                    throw new Error("Must provide amount of characters to delete");
                                for (var t = 0; t < e; t++)
                                    w.addEventToQueue(c);
                                return w
                            }
                            )),
                            C(this, "callFunction", (function(e, t) {
                                if (!e || "function" != typeof e)
                                    throw new Error("Callbak must be a function");
                                return w.addEventToQueue(d, {
                                    cb: e,
                                    thisArg: t
                                }),
                                w
                            }
                            )),
                            C(this, "typeCharacters", (function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                if (!e || !Array.isArray(e))
                                    throw new Error("Characters must be an array");
                                return e.forEach((function(e) {
                                    w.addEventToQueue(l, {
                                        character: e,
                                        node: t
                                    })
                                }
                                )),
                                w
                            }
                            )),
                            C(this, "removeCharacters", (function(e) {
                                if (!e || !Array.isArray(e))
                                    throw new Error("Characters must be an array");
                                return e.forEach((function() {
                                    w.addEventToQueue(c)
                                }
                                )),
                                w
                            }
                            )),
                            C(this, "addEventToQueue", (function(e, t) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return w.addEventToStateProperty(e, t, n, "eventQueue")
                            }
                            )),
                            C(this, "addReverseCalledEvent", (function(e, t) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                                  , r = w.options.loop;
                                return r ? w.addEventToStateProperty(e, t, n, "reverseCalledEvents") : w
                            }
                            )),
                            C(this, "addEventToStateProperty", (function(e, t) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                                  , r = arguments.length > 3 ? arguments[3] : void 0
                                  , o = {
                                    eventName: e,
                                    eventArgs: t || {}
                                };
                                return w.state[r] = n ? [o].concat(_(w.state[r])) : [].concat(_(w.state[r]), [o]),
                                w
                            }
                            )),
                            C(this, "runEventLoop", (function() {
                                w.state.lastFrameTime || (w.state.lastFrameTime = Date.now());
                                var e = Date.now()
                                  , t = e - w.state.lastFrameTime;
                                if (!w.state.eventQueue.length) {
                                    if (!w.options.loop)
                                        return;
                                    w.state.eventQueue = _(w.state.calledEvents),
                                    w.state.calledEvents = [],
                                    w.options = E({}, w.state.initialOptions)
                                }
                                if (w.state.eventLoop = o()(w.runEventLoop),
                                !w.state.eventLoopPaused) {
                                    if (w.state.pauseUntil) {
                                        if (e < w.state.pauseUntil)
                                            return;
                                        w.state.pauseUntil = null
                                    }
                                    var n, r = _(w.state.eventQueue), a = r.shift();
                                    if (!(t <= (n = a.eventName === p || a.eventName === c ? "natural" === w.options.deleteSpeed ? s(40, 80) : w.options.deleteSpeed : "natural" === w.options.delay ? s(120, 160) : w.options.delay))) {
                                        var i = a.eventName
                                          , x = a.eventArgs;
                                        switch (w.logInDevMode({
                                            currentEvent: a,
                                            state: w.state,
                                            delay: n
                                        }),
                                        i) {
                                        case y:
                                        case l:
                                            var C = x.character
                                              , j = x.node
                                              , O = document.createTextNode(C)
                                              , N = O;
                                            w.options.onCreateTextNode && "function" == typeof w.options.onCreateTextNode && (N = w.options.onCreateTextNode(C, O)),
                                            N && (j ? j.appendChild(N) : w.state.elements.wrapper.appendChild(N)),
                                            w.state.visibleNodes = [].concat(_(w.state.visibleNodes), [{
                                                type: "TEXT_NODE",
                                                character: C,
                                                node: N
                                            }]);
                                            break;
                                        case c:
                                            r.unshift({
                                                eventName: p,
                                                eventArgs: {
                                                    removingCharacterNode: !0
                                                }
                                            });
                                            break;
                                        case f:
                                            var S = a.eventArgs.ms;
                                            w.state.pauseUntil = Date.now() + parseInt(S);
                                            break;
                                        case d:
                                            var H = a.eventArgs
                                              , A = H.cb
                                              , T = H.thisArg;
                                            A.call(T, {
                                                elements: w.state.elements
                                            });
                                            break;
                                        case m:
                                            var M = a.eventArgs
                                              , V = M.node
                                              , k = M.parentNode;
                                            k ? k.appendChild(V) : w.state.elements.wrapper.appendChild(V),
                                            w.state.visibleNodes = [].concat(_(w.state.visibleNodes), [{
                                                type: b,
                                                node: V,
                                                parentNode: k || w.state.elements.wrapper
                                            }]);
                                            break;
                                        case u:
                                            var L = w.state.visibleNodes
                                              , P = x.speed
                                              , F = [];
                                            P && F.push({
                                                eventName: v,
                                                eventArgs: {
                                                    speed: P,
                                                    temp: !0
                                                }
                                            });
                                            for (var Z = 0, D = L.length; Z < D; Z++)
                                                F.push({
                                                    eventName: p,
                                                    eventArgs: {
                                                        removingCharacterNode: !1
                                                    }
                                                });
                                            P && F.push({
                                                eventName: v,
                                                eventArgs: {
                                                    speed: w.options.deleteSpeed,
                                                    temp: !0
                                                }
                                            }),
                                            r.unshift.apply(r, F);
                                            break;
                                        case p:
                                            var R = a.eventArgs.removingCharacterNode;
                                            if (w.state.visibleNodes.length) {
                                                var B = w.state.visibleNodes.pop()
                                                  , z = B.type
                                                  , I = B.node
                                                  , Q = B.character;
                                                w.options.onRemoveNode && "function" == typeof w.options.onRemoveNode && w.options.onRemoveNode({
                                                    node: I,
                                                    character: Q
                                                }),
                                                I && I.parentNode.removeChild(I),
                                                z === b && R && r.unshift({
                                                    eventName: p,
                                                    eventArgs: {}
                                                })
                                            }
                                            break;
                                        case v:
                                            w.options.deleteSpeed = a.eventArgs.speed;
                                            break;
                                        case h:
                                            w.options.delay = a.eventArgs.delay;
                                            break;
                                        case g:
                                            w.options.cursor = a.eventArgs.cursor,
                                            w.state.elements.cursor.innerHTML = a.eventArgs.cursor
                                        }
                                        w.options.loop && (a.eventName === p || a.eventArgs && a.eventArgs.temp || (w.state.calledEvents = [].concat(_(w.state.calledEvents), [a]))),
                                        w.state.eventQueue = r,
                                        w.state.lastFrameTime = e
                                    }
                                }
                            }
                            )),
                            t)
                                if ("string" == typeof t) {
                                    var x = document.querySelector(t);
                                    if (!x)
                                        throw new Error("Could not find container element");
                                    this.state.elements.container = x
                                } else
                                    this.state.elements.container = t;
                            n && (this.options = E(E({}, this.options), n)),
                            this.state.initialOptions = E({}, this.options),
                            this.init()
                        }
                        var t, n;
                        return t = e,
                        (n = [{
                            key: "init",
                            value: function() {
                                var e;
                                this.setupWrapperElement(),
                                this.addEventToQueue(g, {
                                    cursor: this.options.cursor
                                }, !0),
                                this.addEventToQueue(u, null, !0),
                                !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles || ((e = document.createElement("style")).appendChild(document.createTextNode(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")),
                                document.head.appendChild(e),
                                window.___TYPEWRITER_JS_STYLES_ADDED___ = !0),
                                !0 === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start()
                            }
                        }, {
                            key: "logInDevMode",
                            value: function(e) {
                                this.options.devMode && console.log(e)
                            }
                        }]) && function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1,
                                r.configurable = !0,
                                "value"in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r)
                            }
                        }(t.prototype, n),
                        Object.defineProperty(t, "prototype", {
                            writable: !1
                        }),
                        e
                    }()
                }
                ,
                8552: (e,t,n)=>{
                    var r = n(852)(n(5639), "DataView");
                    e.exports = r
                }
                ,
                1989: (e,t,n)=>{
                    var r = n(1789)
                      , o = n(401)
                      , a = n(7667)
                      , i = n(1327)
                      , s = n(1866);
                    function l(e) {
                        var t = -1
                          , n = null == e ? 0 : e.length;
                        for (this.clear(); ++t < n; ) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }
                    l.prototype.clear = r,
                    l.prototype.delete = o,
                    l.prototype.get = a,
                    l.prototype.has = i,
                    l.prototype.set = s,
                    e.exports = l
                }
                ,
                8407: (e,t,n)=>{
                    var r = n(7040)
                      , o = n(4125)
                      , a = n(2117)
                      , i = n(7518)
                      , s = n(4705);
                    function l(e) {
                        var t = -1
                          , n = null == e ? 0 : e.length;
                        for (this.clear(); ++t < n; ) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }
                    l.prototype.clear = r,
                    l.prototype.delete = o,
                    l.prototype.get = a,
                    l.prototype.has = i,
                    l.prototype.set = s,
                    e.exports = l
                }
                ,
                7071: (e,t,n)=>{
                    var r = n(852)(n(5639), "Map");
                    e.exports = r
                }
                ,
                3369: (e,t,n)=>{
                    var r = n(4785)
                      , o = n(1285)
                      , a = n(6e3)
                      , i = n(9916)
                      , s = n(5265);
                    function l(e) {
                        var t = -1
                          , n = null == e ? 0 : e.length;
                        for (this.clear(); ++t < n; ) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }
                    l.prototype.clear = r,
                    l.prototype.delete = o,
                    l.prototype.get = a,
                    l.prototype.has = i,
                    l.prototype.set = s,
                    e.exports = l
                }
                ,
                3818: (e,t,n)=>{
                    var r = n(852)(n(5639), "Promise");
                    e.exports = r
                }
                ,
                8525: (e,t,n)=>{
                    var r = n(852)(n(5639), "Set");
                    e.exports = r
                }
                ,
                8668: (e,t,n)=>{
                    var r = n(3369)
                      , o = n(619)
                      , a = n(2385);
                    function i(e) {
                        var t = -1
                          , n = null == e ? 0 : e.length;
                        for (this.__data__ = new r; ++t < n; )
                            this.add(e[t])
                    }
                    i.prototype.add = i.prototype.push = o,
                    i.prototype.has = a,
                    e.exports = i
                }
                ,
                6384: (e,t,n)=>{
                    var r = n(8407)
                      , o = n(7465)
                      , a = n(3779)
                      , i = n(7599)
                      , s = n(4758)
                      , l = n(4309);
                    function c(e) {
                        var t = this.__data__ = new r(e);
                        this.size = t.size
                    }
                    c.prototype.clear = o,
                    c.prototype.delete = a,
                    c.prototype.get = i,
                    c.prototype.has = s,
                    c.prototype.set = l,
                    e.exports = c
                }
                ,
                2705: (e,t,n)=>{
                    var r = n(5639).Symbol;
                    e.exports = r
                }
                ,
                1149: (e,t,n)=>{
                    var r = n(5639).Uint8Array;
                    e.exports = r
                }
                ,
                577: (e,t,n)=>{
                    var r = n(852)(n(5639), "WeakMap");
                    e.exports = r
                }
                ,
                4963: e=>{
                    e.exports = function(e, t) {
                        for (var n = -1, r = null == e ? 0 : e.length, o = 0, a = []; ++n < r; ) {
                            var i = e[n];
                            t(i, n, e) && (a[o++] = i)
                        }
                        return a
                    }
                }
                ,
                4636: (e,t,n)=>{
                    var r = n(2545)
                      , o = n(5694)
                      , a = n(1469)
                      , i = n(4144)
                      , s = n(5776)
                      , l = n(6719)
                      , c = Object.prototype.hasOwnProperty;
                    e.exports = function(e, t) {
                        var n = a(e)
                          , u = !n && o(e)
                          , p = !n && !u && i(e)
                          , f = !n && !u && !p && l(e)
                          , d = n || u || p || f
                          , m = d ? r(e.length, String) : []
                          , v = m.length;
                        for (var h in e)
                            !t && !c.call(e, h) || d && ("length" == h || p && ("offset" == h || "parent" == h) || f && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || s(h, v)) || m.push(h);
                        return m
                    }
                }
                ,
                2488: e=>{
                    e.exports = function(e, t) {
                        for (var n = -1, r = t.length, o = e.length; ++n < r; )
                            e[o + n] = t[n];
                        return e
                    }
                }
                ,
                2908: e=>{
                    e.exports = function(e, t) {
                        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                            if (t(e[n], n, e))
                                return !0;
                        return !1
                    }
                }
                ,
                8470: (e,t,n)=>{
                    var r = n(7813);
                    e.exports = function(e, t) {
                        for (var n = e.length; n--; )
                            if (r(e[n][0], t))
                                return n;
                        return -1
                    }
                }
                ,
                8866: (e,t,n)=>{
                    var r = n(2488)
                      , o = n(1469);
                    e.exports = function(e, t, n) {
                        var a = t(e);
                        return o(e) ? a : r(a, n(e))
                    }
                }
                ,
                4239: (e,t,n)=>{
                    var r = n(2705)
                      , o = n(9607)
                      , a = n(2333)
                      , i = r ? r.toStringTag : void 0;
                    e.exports = function(e) {
                        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? o(e) : a(e)
                    }
                }
                ,
                9454: (e,t,n)=>{
                    var r = n(4239)
                      , o = n(7005);
                    e.exports = function(e) {
                        return o(e) && "[object Arguments]" == r(e)
                    }
                }
                ,
                939: (e,t,n)=>{
                    var r = n(2492)
                      , o = n(7005);
                    e.exports = function e(t, n, a, i, s) {
                        return t === n || (null == t || null == n || !o(t) && !o(n) ? t != t && n != n : r(t, n, a, i, e, s))
                    }
                }
                ,
                2492: (e,t,n)=>{
                    var r = n(6384)
                      , o = n(7114)
                      , a = n(8351)
                      , i = n(6096)
                      , s = n(4160)
                      , l = n(1469)
                      , c = n(4144)
                      , u = n(6719)
                      , p = "[object Arguments]"
                      , f = "[object Array]"
                      , d = "[object Object]"
                      , m = Object.prototype.hasOwnProperty;
                    e.exports = function(e, t, n, v, h, g) {
                        var y = l(e)
                          , b = l(t)
                          , w = y ? f : s(e)
                          , E = b ? f : s(t)
                          , _ = (w = w == p ? d : w) == d
                          , x = (E = E == p ? d : E) == d
                          , C = w == E;
                        if (C && c(e)) {
                            if (!c(t))
                                return !1;
                            y = !0,
                            _ = !1
                        }
                        if (C && !_)
                            return g || (g = new r),
                            y || u(e) ? o(e, t, n, v, h, g) : a(e, t, w, n, v, h, g);
                        if (!(1 & n)) {
                            var j = _ && m.call(e, "__wrapped__")
                              , O = x && m.call(t, "__wrapped__");
                            if (j || O) {
                                var N = j ? e.value() : e
                                  , S = O ? t.value() : t;
                                return g || (g = new r),
                                h(N, S, n, v, g)
                            }
                        }
                        return !!C && (g || (g = new r),
                        i(e, t, n, v, h, g))
                    }
                }
                ,
                8458: (e,t,n)=>{
                    var r = n(3560)
                      , o = n(5346)
                      , a = n(3218)
                      , i = n(346)
                      , s = /^\[object .+?Constructor\]$/
                      , l = Function.prototype
                      , c = Object.prototype
                      , u = l.toString
                      , p = c.hasOwnProperty
                      , f = RegExp("^" + u.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                    e.exports = function(e) {
                        return !(!a(e) || o(e)) && (r(e) ? f : s).test(i(e))
                    }
                }
                ,
                8749: (e,t,n)=>{
                    var r = n(4239)
                      , o = n(1780)
                      , a = n(7005)
                      , i = {};
                    i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0,
                    i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1,
                    e.exports = function(e) {
                        return a(e) && o(e.length) && !!i[r(e)]
                    }
                }
                ,
                280: (e,t,n)=>{
                    var r = n(5726)
                      , o = n(6916)
                      , a = Object.prototype.hasOwnProperty;
                    e.exports = function(e) {
                        if (!r(e))
                            return o(e);
                        var t = [];
                        for (var n in Object(e))
                            a.call(e, n) && "constructor" != n && t.push(n);
                        return t
                    }
                }
                ,
                2545: e=>{
                    e.exports = function(e, t) {
                        for (var n = -1, r = Array(e); ++n < e; )
                            r[n] = t(n);
                        return r
                    }
                }
                ,
                1717: e=>{
                    e.exports = function(e) {
                        return function(t) {
                            return e(t)
                        }
                    }
                }
                ,
                4757: e=>{
                    e.exports = function(e, t) {
                        return e.has(t)
                    }
                }
                ,
                4429: (e,t,n)=>{
                    var r = n(5639)["__core-js_shared__"];
                    e.exports = r
                }
                ,
                7114: (e,t,n)=>{
                    var r = n(8668)
                      , o = n(2908)
                      , a = n(4757);
                    e.exports = function(e, t, n, i, s, l) {
                        var c = 1 & n
                          , u = e.length
                          , p = t.length;
                        if (u != p && !(c && p > u))
                            return !1;
                        var f = l.get(e)
                          , d = l.get(t);
                        if (f && d)
                            return f == t && d == e;
                        var m = -1
                          , v = !0
                          , h = 2 & n ? new r : void 0;
                        for (l.set(e, t),
                        l.set(t, e); ++m < u; ) {
                            var g = e[m]
                              , y = t[m];
                            if (i)
                                var b = c ? i(y, g, m, t, e, l) : i(g, y, m, e, t, l);
                            if (void 0 !== b) {
                                if (b)
                                    continue;
                                v = !1;
                                break
                            }
                            if (h) {
                                if (!o(t, (function(e, t) {
                                    if (!a(h, t) && (g === e || s(g, e, n, i, l)))
                                        return h.push(t)
                                }
                                ))) {
                                    v = !1;
                                    break
                                }
                            } else if (g !== y && !s(g, y, n, i, l)) {
                                v = !1;
                                break
                            }
                        }
                        return l.delete(e),
                        l.delete(t),
                        v
                    }
                }
                ,
                8351: (e,t,n)=>{
                    var r = n(2705)
                      , o = n(1149)
                      , a = n(7813)
                      , i = n(7114)
                      , s = n(8776)
                      , l = n(1814)
                      , c = r ? r.prototype : void 0
                      , u = c ? c.valueOf : void 0;
                    e.exports = function(e, t, n, r, c, p, f) {
                        switch (n) {
                        case "[object DataView]":
                            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                                return !1;
                            e = e.buffer,
                            t = t.buffer;
                        case "[object ArrayBuffer]":
                            return !(e.byteLength != t.byteLength || !p(new o(e), new o(t)));
                        case "[object Boolean]":
                        case "[object Date]":
                        case "[object Number]":
                            return a(+e, +t);
                        case "[object Error]":
                            return e.name == t.name && e.message == t.message;
                        case "[object RegExp]":
                        case "[object String]":
                            return e == t + "";
                        case "[object Map]":
                            var d = s;
                        case "[object Set]":
                            var m = 1 & r;
                            if (d || (d = l),
                            e.size != t.size && !m)
                                return !1;
                            var v = f.get(e);
                            if (v)
                                return v == t;
                            r |= 2,
                            f.set(e, t);
                            var h = i(d(e), d(t), r, c, p, f);
                            return f.delete(e),
                            h;
                        case "[object Symbol]":
                            if (u)
                                return u.call(e) == u.call(t)
                        }
                        return !1
                    }
                }
                ,
                6096: (e,t,n)=>{
                    var r = n(8234)
                      , o = Object.prototype.hasOwnProperty;
                    e.exports = function(e, t, n, a, i, s) {
                        var l = 1 & n
                          , c = r(e)
                          , u = c.length;
                        if (u != r(t).length && !l)
                            return !1;
                        for (var p = u; p--; ) {
                            var f = c[p];
                            if (!(l ? f in t : o.call(t, f)))
                                return !1
                        }
                        var d = s.get(e)
                          , m = s.get(t);
                        if (d && m)
                            return d == t && m == e;
                        var v = !0;
                        s.set(e, t),
                        s.set(t, e);
                        for (var h = l; ++p < u; ) {
                            var g = e[f = c[p]]
                              , y = t[f];
                            if (a)
                                var b = l ? a(y, g, f, t, e, s) : a(g, y, f, e, t, s);
                            if (!(void 0 === b ? g === y || i(g, y, n, a, s) : b)) {
                                v = !1;
                                break
                            }
                            h || (h = "constructor" == f)
                        }
                        if (v && !h) {
                            var w = e.constructor
                              , E = t.constructor;
                            w == E || !("constructor"in e) || !("constructor"in t) || "function" == typeof w && w instanceof w && "function" == typeof E && E instanceof E || (v = !1)
                        }
                        return s.delete(e),
                        s.delete(t),
                        v
                    }
                }
                ,
                1957: (e,t,n)=>{
                    var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
                    e.exports = r
                }
                ,
                8234: (e,t,n)=>{
                    var r = n(8866)
                      , o = n(9551)
                      , a = n(3674);
                    e.exports = function(e) {
                        return r(e, a, o)
                    }
                }
                ,
                5050: (e,t,n)=>{
                    var r = n(7019);
                    e.exports = function(e, t) {
                        var n = e.__data__;
                        return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
                    }
                }
                ,
                852: (e,t,n)=>{
                    var r = n(8458)
                      , o = n(7801);
                    e.exports = function(e, t) {
                        var n = o(e, t);
                        return r(n) ? n : void 0
                    }
                }
                ,
                9607: (e,t,n)=>{
                    var r = n(2705)
                      , o = Object.prototype
                      , a = o.hasOwnProperty
                      , i = o.toString
                      , s = r ? r.toStringTag : void 0;
                    e.exports = function(e) {
                        var t = a.call(e, s)
                          , n = e[s];
                        try {
                            e[s] = void 0;
                            var r = !0
                        } catch (e) {}
                        var o = i.call(e);
                        return r && (t ? e[s] = n : delete e[s]),
                        o
                    }
                }
                ,
                9551: (e,t,n)=>{
                    var r = n(4963)
                      , o = n(479)
                      , a = Object.prototype.propertyIsEnumerable
                      , i = Object.getOwnPropertySymbols
                      , s = i ? function(e) {
                        return null == e ? [] : (e = Object(e),
                        r(i(e), (function(t) {
                            return a.call(e, t)
                        }
                        )))
                    }
                    : o;
                    e.exports = s
                }
                ,
                4160: (e,t,n)=>{
                    var r = n(8552)
                      , o = n(7071)
                      , a = n(3818)
                      , i = n(8525)
                      , s = n(577)
                      , l = n(4239)
                      , c = n(346)
                      , u = "[object Map]"
                      , p = "[object Promise]"
                      , f = "[object Set]"
                      , d = "[object WeakMap]"
                      , m = "[object DataView]"
                      , v = c(r)
                      , h = c(o)
                      , g = c(a)
                      , y = c(i)
                      , b = c(s)
                      , w = l;
                    (r && w(new r(new ArrayBuffer(1))) != m || o && w(new o) != u || a && w(a.resolve()) != p || i && w(new i) != f || s && w(new s) != d) && (w = function(e) {
                        var t = l(e)
                          , n = "[object Object]" == t ? e.constructor : void 0
                          , r = n ? c(n) : "";
                        if (r)
                            switch (r) {
                            case v:
                                return m;
                            case h:
                                return u;
                            case g:
                                return p;
                            case y:
                                return f;
                            case b:
                                return d
                            }
                        return t
                    }
                    ),
                    e.exports = w
                }
                ,
                7801: e=>{
                    e.exports = function(e, t) {
                        return null == e ? void 0 : e[t]
                    }
                }
                ,
                1789: (e,t,n)=>{
                    var r = n(4536);
                    e.exports = function() {
                        this.__data__ = r ? r(null) : {},
                        this.size = 0
                    }
                }
                ,
                401: e=>{
                    e.exports = function(e) {
                        var t = this.has(e) && delete this.__data__[e];
                        return this.size -= t ? 1 : 0,
                        t
                    }
                }
                ,
                7667: (e,t,n)=>{
                    var r = n(4536)
                      , o = Object.prototype.hasOwnProperty;
                    e.exports = function(e) {
                        var t = this.__data__;
                        if (r) {
                            var n = t[e];
                            return "__lodash_hash_undefined__" === n ? void 0 : n
                        }
                        return o.call(t, e) ? t[e] : void 0
                    }
                }
                ,
                1327: (e,t,n)=>{
                    var r = n(4536)
                      , o = Object.prototype.hasOwnProperty;
                    e.exports = function(e) {
                        var t = this.__data__;
                        return r ? void 0 !== t[e] : o.call(t, e)
                    }
                }
                ,
                1866: (e,t,n)=>{
                    var r = n(4536);
                    e.exports = function(e, t) {
                        var n = this.__data__;
                        return this.size += this.has(e) ? 0 : 1,
                        n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t,
                        this
                    }
                }
                ,
                5776: e=>{
                    var t = /^(?:0|[1-9]\d*)$/;
                    e.exports = function(e, n) {
                        var r = typeof e;
                        return !!(n = null == n ? 9007199254740991 : n) && ("number" == r || "symbol" != r && t.test(e)) && e > -1 && e % 1 == 0 && e < n
                    }
                }
                ,
                7019: e=>{
                    e.exports = function(e) {
                        var t = typeof e;
                        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                    }
                }
                ,
                5346: (e,t,n)=>{
                    var r, o = n(4429), a = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
                    e.exports = function(e) {
                        return !!a && a in e
                    }
                }
                ,
                5726: e=>{
                    var t = Object.prototype;
                    e.exports = function(e) {
                        var n = e && e.constructor;
                        return e === ("function" == typeof n && n.prototype || t)
                    }
                }
                ,
                7040: e=>{
                    e.exports = function() {
                        this.__data__ = [],
                        this.size = 0
                    }
                }
                ,
                4125: (e,t,n)=>{
                    var r = n(8470)
                      , o = Array.prototype.splice;
                    e.exports = function(e) {
                        var t = this.__data__
                          , n = r(t, e);
                        return !(n < 0 || (n == t.length - 1 ? t.pop() : o.call(t, n, 1),
                        --this.size,
                        0))
                    }
                }
                ,
                2117: (e,t,n)=>{
                    var r = n(8470);
                    e.exports = function(e) {
                        var t = this.__data__
                          , n = r(t, e);
                        return n < 0 ? void 0 : t[n][1]
                    }
                }
                ,
                7518: (e,t,n)=>{
                    var r = n(8470);
                    e.exports = function(e) {
                        return r(this.__data__, e) > -1
                    }
                }
                ,
                4705: (e,t,n)=>{
                    var r = n(8470);
                    e.exports = function(e, t) {
                        var n = this.__data__
                          , o = r(n, e);
                        return o < 0 ? (++this.size,
                        n.push([e, t])) : n[o][1] = t,
                        this
                    }
                }
                ,
                4785: (e,t,n)=>{
                    var r = n(1989)
                      , o = n(8407)
                      , a = n(7071);
                    e.exports = function() {
                        this.size = 0,
                        this.__data__ = {
                            hash: new r,
                            map: new (a || o),
                            string: new r
                        }
                    }
                }
                ,
                1285: (e,t,n)=>{
                    var r = n(5050);
                    e.exports = function(e) {
                        var t = r(this, e).delete(e);
                        return this.size -= t ? 1 : 0,
                        t
                    }
                }
                ,
                6e3: (e,t,n)=>{
                    var r = n(5050);
                    e.exports = function(e) {
                        return r(this, e).get(e)
                    }
                }
                ,
                9916: (e,t,n)=>{
                    var r = n(5050);
                    e.exports = function(e) {
                        return r(this, e).has(e)
                    }
                }
                ,
                5265: (e,t,n)=>{
                    var r = n(5050);
                    e.exports = function(e, t) {
                        var n = r(this, e)
                          , o = n.size;
                        return n.set(e, t),
                        this.size += n.size == o ? 0 : 1,
                        this
                    }
                }
                ,
                8776: e=>{
                    e.exports = function(e) {
                        var t = -1
                          , n = Array(e.size);
                        return e.forEach((function(e, r) {
                            n[++t] = [r, e]
                        }
                        )),
                        n
                    }
                }
                ,
                4536: (e,t,n)=>{
                    var r = n(852)(Object, "create");
                    e.exports = r
                }
                ,
                6916: (e,t,n)=>{
                    var r = n(5569)(Object.keys, Object);
                    e.exports = r
                }
                ,
                1167: (e,t,n)=>{
                    e = n.nmd(e);
                    var r = n(1957)
                      , o = t && !t.nodeType && t
                      , a = o && e && !e.nodeType && e
                      , i = a && a.exports === o && r.process
                      , s = function() {
                        try {
                            return a && a.require && a.require("util").types || i && i.binding && i.binding("util")
                        } catch (e) {}
                    }();
                    e.exports = s
                }
                ,
                2333: e=>{
                    var t = Object.prototype.toString;
                    e.exports = function(e) {
                        return t.call(e)
                    }
                }
                ,
                5569: e=>{
                    e.exports = function(e, t) {
                        return function(n) {
                            return e(t(n))
                        }
                    }
                }
                ,
                5639: (e,t,n)=>{
                    var r = n(1957)
                      , o = "object" == typeof self && self && self.Object === Object && self
                      , a = r || o || Function("return this")();
                    e.exports = a
                }
                ,
                619: e=>{
                    e.exports = function(e) {
                        return this.__data__.set(e, "__lodash_hash_undefined__"),
                        this
                    }
                }
                ,
                2385: e=>{
                    e.exports = function(e) {
                        return this.__data__.has(e)
                    }
                }
                ,
                1814: e=>{
                    e.exports = function(e) {
                        var t = -1
                          , n = Array(e.size);
                        return e.forEach((function(e) {
                            n[++t] = e
                        }
                        )),
                        n
                    }
                }
                ,
                7465: (e,t,n)=>{
                    var r = n(8407);
                    e.exports = function() {
                        this.__data__ = new r,
                        this.size = 0
                    }
                }
                ,
                3779: e=>{
                    e.exports = function(e) {
                        var t = this.__data__
                          , n = t.delete(e);
                        return this.size = t.size,
                        n
                    }
                }
                ,
                7599: e=>{
                    e.exports = function(e) {
                        return this.__data__.get(e)
                    }
                }
                ,
                4758: e=>{
                    e.exports = function(e) {
                        return this.__data__.has(e)
                    }
                }
                ,
                4309: (e,t,n)=>{
                    var r = n(8407)
                      , o = n(7071)
                      , a = n(3369);
                    e.exports = function(e, t) {
                        var n = this.__data__;
                        if (n instanceof r) {
                            var i = n.__data__;
                            if (!o || i.length < 199)
                                return i.push([e, t]),
                                this.size = ++n.size,
                                this;
                            n = this.__data__ = new a(i)
                        }
                        return n.set(e, t),
                        this.size = n.size,
                        this
                    }
                }
                ,
                346: e=>{
                    var t = Function.prototype.toString;
                    e.exports = function(e) {
                        if (null != e) {
                            try {
                                return t.call(e)
                            } catch (e) {}
                            try {
                                return e + ""
                            } catch (e) {}
                        }
                        return ""
                    }
                }
                ,
                7813: e=>{
                    e.exports = function(e, t) {
                        return e === t || e != e && t != t
                    }
                }
                ,
                5694: (e,t,n)=>{
                    var r = n(9454)
                      , o = n(7005)
                      , a = Object.prototype
                      , i = a.hasOwnProperty
                      , s = a.propertyIsEnumerable
                      , l = r(function() {
                        return arguments
                    }()) ? r : function(e) {
                        return o(e) && i.call(e, "callee") && !s.call(e, "callee")
                    }
                    ;
                    e.exports = l
                }
                ,
                1469: e=>{
                    var t = Array.isArray;
                    e.exports = t
                }
                ,
                8612: (e,t,n)=>{
                    var r = n(3560)
                      , o = n(1780);
                    e.exports = function(e) {
                        return null != e && o(e.length) && !r(e)
                    }
                }
                ,
                4144: (e,t,n)=>{
                    e = n.nmd(e);
                    var r = n(5639)
                      , o = n(5062)
                      , a = t && !t.nodeType && t
                      , i = a && e && !e.nodeType && e
                      , s = i && i.exports === a ? r.Buffer : void 0
                      , l = (s ? s.isBuffer : void 0) || o;
                    e.exports = l
                }
                ,
                8446: (e,t,n)=>{
                    var r = n(939);
                    e.exports = function(e, t) {
                        return r(e, t)
                    }
                }
                ,
                3560: (e,t,n)=>{
                    var r = n(4239)
                      , o = n(3218);
                    e.exports = function(e) {
                        if (!o(e))
                            return !1;
                        var t = r(e);
                        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
                    }
                }
                ,
                1780: e=>{
                    e.exports = function(e) {
                        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                    }
                }
                ,
                3218: e=>{
                    e.exports = function(e) {
                        var t = typeof e;
                        return null != e && ("object" == t || "function" == t)
                    }
                }
                ,
                7005: e=>{
                    e.exports = function(e) {
                        return null != e && "object" == typeof e
                    }
                }
                ,
                6719: (e,t,n)=>{
                    var r = n(8749)
                      , o = n(1717)
                      , a = n(1167)
                      , i = a && a.isTypedArray
                      , s = i ? o(i) : r;
                    e.exports = s
                }
                ,
                3674: (e,t,n)=>{
                    var r = n(4636)
                      , o = n(280)
                      , a = n(8612);
                    e.exports = function(e) {
                        return a(e) ? r(e) : o(e)
                    }
                }
                ,
                479: e=>{
                    e.exports = function() {
                        return []
                    }
                }
                ,
                5062: e=>{
                    e.exports = function() {
                        return !1
                    }
                }
                ,
                75: function(e) {
                    (function() {
                        var t, n, r, o, a, i;
                        "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                            return performance.now()
                        }
                        : "undefined" != typeof process && null !== process && process.hrtime ? (e.exports = function() {
                            return (t() - a) / 1e6
                        }
                        ,
                        n = process.hrtime,
                        o = (t = function() {
                            var e;
                            return 1e9 * (e = n())[0] + e[1]
                        }
                        )(),
                        i = 1e9 * process.uptime(),
                        a = o - i) : Date.now ? (e.exports = function() {
                            return Date.now() - r
                        }
                        ,
                        r = Date.now()) : (e.exports = function() {
                            return (new Date).getTime() - r
                        }
                        ,
                        r = (new Date).getTime())
                    }
                    ).call(this)
                },
                4087: (e,t,n)=>{
                    for (var r = n(75), o = "undefined" == typeof window ? n.g : window, a = ["moz", "webkit"], i = "AnimationFrame", s = o["request" + i], l = o["cancel" + i] || o["cancelRequest" + i], c = 0; !s && c < a.length; c++)
                        s = o[a[c] + "Request" + i],
                        l = o[a[c] + "Cancel" + i] || o[a[c] + "CancelRequest" + i];
                    if (!s || !l) {
                        var u = 0
                          , p = 0
                          , f = [];
                        s = function(e) {
                            if (0 === f.length) {
                                var t = r()
                                  , n = Math.max(0, 16.666666666666668 - (t - u));
                                u = n + t,
                                setTimeout((function() {
                                    var e = f.slice(0);
                                    f.length = 0;
                                    for (var t = 0; t < e.length; t++)
                                        if (!e[t].cancelled)
                                            try {
                                                e[t].callback(u)
                                            } catch (e) {
                                                setTimeout((function() {
                                                    throw e
                                                }
                                                ), 0)
                                            }
                                }
                                ), Math.round(n))
                            }
                            return f.push({
                                handle: ++p,
                                callback: e,
                                cancelled: !1
                            }),
                            p
                        }
                        ,
                        l = function(e) {
                            for (var t = 0; t < f.length; t++)
                                f[t].handle === e && (f[t].cancelled = !0)
                        }
                    }
                    e.exports = function(e) {
                        return s.call(o, e)
                    }
                    ,
                    e.exports.cancel = function() {
                        l.apply(o, arguments)
                    }
                    ,
                    e.exports.polyfill = function(e) {
                        e || (e = o),
                        e.requestAnimationFrame = s,
                        e.cancelAnimationFrame = l
                    }
                }
                ,
                8156: t=>{
                    "use strict";
                    t.exports = e
                }
            }
              , n = {};
            function r(e) {
                var o = n[e];
                if (void 0 !== o)
                    return o.exports;
                var a = n[e] = {
                    id: e,
                    loaded: !1,
                    exports: {}
                };
                return t[e].call(a.exports, a, a.exports, r),
                a.loaded = !0,
                a.exports
            }
            r.n = e=>{
                var t = e && e.__esModule ? ()=>e.default : ()=>e;
                return r.d(t, {
                    a: t
                }),
                t
            }
            ,
            r.d = (e,t)=>{
                for (var n in t)
                    r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
            }
            ,
            r.g = function() {
                if ("object" == typeof globalThis)
                    return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (e) {
                    if ("object" == typeof window)
                        return window
                }
            }(),
            r.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
            r.nmd = e=>(e.paths = [],
            e.children || (e.children = []),
            e);
            var o = {};
            return (()=>{
                "use strict";
                r.d(o, {
                    default: ()=>v
                });
                var e = r(8156)
                  , t = r.n(e)
                  , n = r(7403)
                  , a = r(8446)
                  , i = r.n(a);
                function s(e) {
                    return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                    ,
                    s(e)
                }
                function l(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                function c(e, t) {
                    return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t,
                        e
                    }
                    ,
                    c(e, t)
                }
                function u(e, t) {
                    if (t && ("object" === s(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return p(e)
                }
                function p(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }
                function f(e) {
                    return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }
                    ,
                    f(e)
                }
                function d(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n,
                    e
                }
                var m = function(e) {
                    !function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        Object.defineProperty(e, "prototype", {
                            writable: !1
                        }),
                        t && c(e, t)
                    }(v, e);
                    var r, o, a, s, m = (a = v,
                    s = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                            ))),
                            !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    function() {
                        var e, t = f(a);
                        if (s) {
                            var n = f(this).constructor;
                            e = Reflect.construct(t, arguments, n)
                        } else
                            e = t.apply(this, arguments);
                        return u(this, e)
                    }
                    );
                    function v() {
                        var e;
                        l(this, v);
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                            n[r] = arguments[r];
                        return d(p(e = m.call.apply(m, [this].concat(n))), "state", {
                            instance: null
                        }),
                        e
                    }
                    return r = v,
                    (o = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this
                              , t = new n.default(this.typewriter,this.props.options);
                            this.setState({
                                instance: t
                            }, (function() {
                                var n = e.props.onInit;
                                n && n(t)
                            }
                            ))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            i()(this.props.options, e.options) || this.setState({
                                instance: new n.default(this.typewriter,this.props.options)
                            })
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.state.instance && this.state.instance.stop()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this
                              , n = this.props.component;
                            return t().createElement(n, {
                                ref: function(t) {
                                    return e.typewriter = t
                                },
                                className: "Typewriter",
                                "data-testid": "typewriter-wrapper"
                            })
                        }
                    }]) && function(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                            "value"in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                        }
                    }(r.prototype, o),
                    Object.defineProperty(r, "prototype", {
                        writable: !1
                    }),
                    v
                }(e.Component);
                m.defaultProps = {
                    component: "div"
                };
                const v = m
            }
            )(),
            o.default
        }
        )(),
        e.exports = r(n(7294))
    },
    8615: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return f
            }
        });
        var r = {};
        n.r(r),
        n.d(r, {
            component: function() {
                return l
            },
            github: function() {
                return c
            },
            twitter: function() {
                return u
            }
        });
        var o = n(7294)
          , a = n(9347)
          , i = n(5900)
          , s = n.n(i)
          , l = "brag-module--component--Y3AKS"
          , c = "brag-module--github--J48FR"
          , u = "brag-module--twitter--B8V5V";
        const p = n(4709);
        var f = e=>{
            const {type: t} = e
              , n = {
                github: {
                    svg: o.createElement(a.Z, {
                        id: "star"
                    }),
                    count: "60,000+",
                    label: "GitHub stars"
                },
                twitter: {
                    svg: [o.createElement(a.Z, {
                        key: "twitter",
                        id: "twitter"
                    }), o.createElement(a.Z, {
                        key: "github",
                        id: "github"
                    })],
                    count: "17,000+",
                    label: "Total followers"
                }
            }
              , i = s()({
                [l]: !0,
                [r[t]]: t
            });
            return o.createElement("a", {
                className: i,
                href: p[t],
                target: "_blank"
            }, o.createElement("figure", null, n[t].svg), o.createElement("div", null, o.createElement("strong", null, n[t].count), o.createElement("span", null, n[t].label)))
        }
    },
    3060: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return x
            }
        });
        var r = {};
        n.r(r),
        n.d(r, {
            button: function() {
                return u
            },
            colorAmazon: function() {
                return p
            },
            colorBulma: function() {
                return f
            },
            colorFreelance: function() {
                return d
            },
            colorOpensource: function() {
                return m
            },
            colorPrimary: function() {
                return v
            },
            colorSuccess: function() {
                return h
            },
            colorTurquoise: function() {
                return g
            },
            invert: function() {
                return y
            },
            isWarning: function() {
                return b
            },
            opensource: function() {
                return w
            },
            rainbow: function() {
                return E
            },
            sizeMedium: function() {
                return _
            }
        });
        var o = n(1721)
          , a = n(7294)
          , i = n(1597)
          , s = n(7888)
          , l = n(5900)
          , c = n.n(l)
          , u = "button-module--button--l5gbw"
          , p = "button-module--color-amazon--OAoOK"
          , f = "button-module--color-bulma--b8gF8"
          , d = "button-module--color-freelance--xuVY+"
          , m = "button-module--color-opensource--m9QWp"
          , v = "button-module--color-primary--FQmUI"
          , h = "button-module--color-success--LOSug"
          , g = "button-module--color-turquoise--Slu4d"
          , y = "button-module--invert--x1J6-"
          , b = "button-module--is-warning--Dlx2U"
          , w = "button-module--opensource--D8dcI"
          , E = "button-module--rainbow--2mIbk"
          , _ = "button-module--size-medium--2CaKn";
        var x = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).state = {
                    currentIndex: 0
                },
                n.componentRef = a.createRef(),
                n
            }
            return (0,
            o.Z)(t, e),
            t.prototype.render = function() {
                const {id: e, to: t="", href: n="", size: o="", color: l="", children: p, onSubmit: f, external: d, type: m, light: v, disabled: h, loading: g, parentClass: y, button: b, onClick: w, variant: E} = this.props
                  , _ = (0,
                s.Mj)("size-" + o)
                  , x = (0,
                s.Mj)("color-" + l)
                  , C = {
                    className: c()({
                        [u]: !0,
                        [r[_]]: "" !== o,
                        [r[x]]: "" !== l,
                        "is-disabled": h,
                        "is-loading": g,
                        "is-light": v,
                        [r[E]]: E,
                        [y]: y
                    }),
                    ref: this.componentRef,
                    id: e,
                    onSubmit: f,
                    type: m,
                    disabled: h,
                    onClick: w
                };
                return n && "" !== n ? (d && (C.target = "_blank",
                C.ref = "noopener noreferrer"),
                a.createElement("a", Object.assign({
                    href: n
                }, C), p)) : t && "" !== t ? a.createElement(i.Link, Object.assign({
                    to: t
                }, C), p) : a.createElement("button", C, p)
            }
            ,
            t
        }(a.Component)
    },
    1293: function(e, t, n) {
        "use strict";
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
        "use strict";
        function r(e, t) {
            return e.list[t].map((t=>e.by_id[t]))
        }
        function o(e) {
            return e.replace(/\W+(.)/g, ((e,t)=>t.toUpperCase()))
        }
        function a(e, t) {
            return e.reduce(((e,n)=>((e[n[t]] = e[n[t]] || []).push(n),
            e)), {})
        }
        function i(e, t) {
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
            !function o() {
                n += 1 / 60;
                const a = n / r
                  , i = l.easeOutQuint(a);
                a < 1 ? (window.requestAnimationFrame(o),
                window.scroll(0, e + (t - e) * i)) : window.scroll(0, t)
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
                return o
            },
            X9: function() {
                return a
            },
            Xb: function() {
                return i
            },
            wc: function() {
                return r
            }
        });
        const l = {
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
    8923: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return ae
            }
        });
        var r = {};
        n.r(r),
        n.d(r, {
            client: function() {
                return G
            },
            clients: function() {
                return Y
            },
            fifa: function() {
                return J
            },
            lego: function() {
                return $
            },
            lv: function() {
                return X
            },
            ms: function() {
                return K
            },
            sony: function() {
                return ee
            },
            umg: function() {
                return te
            }
        });
        var o = n(7294)
          , a = n(4284)
          , i = n(9357)
          , s = n(5461)
          , l = n(1597)
          , c = (n(5414),
        n(8615))
          , u = n(9347)
          , p = n(1293)
          , f = n(3060);
        var d = ()=>o.createElement("svg", {
            className: "a",
            width: "51",
            height: "85",
            viewBox: "0 0 51 85",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.createElement("path", {
            d: "M21.792 65.832C26.656 65.832 29.344 63.976 31.136 61.416H31.84C31.84 63.336 33.376 65 35.552 65H44V57.192H42.656C41.76 57.192 41.12 56.68 41.12 55.784V31.272H31.776V34.408H31.072C29.088 32.104 26.016 30.44 21.728 30.44C13.088 30.44 6.24 37.928 6.24 48.104C6.24 58.216 13.152 65.832 21.792 65.832ZM23.84 56.872C19.36 56.872 15.712 53.48 15.712 48.168C15.712 42.856 19.296 39.464 23.776 39.464C28.192 39.464 31.904 42.6 31.904 48.168C31.904 52.904 28.704 56.872 23.84 56.872Z",
            fill: "#111111"
        }));
        var m = ()=>o.createElement("svg", {
            className: "b",
            width: "49",
            height: "85",
            viewBox: "0 0 49 85",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.createElement("path", {
            d: "M26.976 65.832C35.68 65.832 42.72 58.216 42.72 48.104C42.72 38.248 36.192 30.44 27.488 30.44C22.304 30.44 19.488 32.744 17.888 34.728H17.184V17H7.84V65H17.184V61.864H17.888C19.488 63.976 22.176 65.832 26.976 65.832ZM25.12 57C20.256 57 17.056 52.904 17.056 48.168C17.056 42.6 20.768 39.336 25.184 39.336C29.728 39.336 33.248 42.856 33.248 48.168C33.248 53.48 29.6 57 25.12 57Z",
            fill: "#111111"
        }));
        var v = ()=>o.createElement("svg", {
            className: "c",
            width: "47",
            height: "85",
            viewBox: "0 0 47 85",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.createElement("path", {
            d: "M23.776 65.832C31.968 65.832 38.624 61.544 40.736 53.16L32.032 51.048C31.008 54.76 28 56.936 24.032 56.936C18.976 56.936 15.712 53.096 15.712 48.168C15.712 43.176 18.912 39.336 24.032 39.336C28 39.336 31.072 41.576 32.096 45.416L40.736 43.24C38.56 34.792 31.968 30.44 23.776 30.44C13.152 30.44 6.24 38.312 6.24 48.168C6.24 57.896 13.152 65.832 23.776 65.832Z",
            fill: "#111111"
        }));
        var h = ()=>o.createElement("svg", {
            className: "d",
            width: "49",
            height: "85",
            viewBox: "0 0 49 85",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.createElement("path", {
            d: "M21.984 65.832C26.784 65.832 29.472 63.976 31.072 61.864H31.776V65H41.12V17H31.776V34.728H31.072C29.472 32.744 26.656 30.44 21.472 30.44C12.768 30.44 6.24 38.248 6.24 48.104C6.24 58.216 13.28 65.832 21.984 65.832ZM23.84 57C19.36 57 15.712 53.48 15.712 48.168C15.712 42.856 19.232 39.336 23.776 39.336C28.192 39.336 31.904 42.6 31.904 48.168C31.904 52.904 28.704 57 23.84 57Z",
            fill: "#111111"
        }));
        var g = ()=>o.createElement("svg", {
            className: "e",
            width: "47",
            height: "85",
            viewBox: "0 0 47 85",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.createElement("path", {
            d: "M23.712 65.832C30.24 65.832 36.768 63.016 39.2 55.464L30.88 53.544C29.6 56.36 26.656 57.576 23.584 57.576C19.168 57.576 15.904 54.888 15.84 50.472H40.288V48.104C40.288 38.12 33.824 30.44 23.456 30.44C14.048 30.44 6.24 37.608 6.24 48.168C6.24 58.344 13.408 65.832 23.712 65.832ZM15.904 44.264C16.352 41.256 19.104 38.184 23.456 38.184C27.424 38.184 30.432 40.872 30.88 44.264H15.904Z",
            fill: "#111111"
        }));
        var y = ()=>o.createElement("svg", {
            className: "f",
            width: "35",
            height: "85",
            viewBox: "0 0 35 85",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.createElement("path", {
            d: "M10.848 65H20.128V39.528H28.704V31.272H20.128V27.496C20.128 26.024 20.704 25.384 22.304 25.384H28.512V17H22.048C15.264 17 10.848 20.072 10.848 27.432V31.272H5.28V39.528H10.848V65Z",
            fill: "#111111"
        }));
        var b = ()=>o.createElement("svg", {
            className: "g",
            width: "49",
            height: "85",
            viewBox: "0 0 49 85",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.createElement("path", {
            d: "M14.624 79.72H29.856C36.64 79.72 41.12 76.648 41.12 69.288V31.272H31.84V34.728H31.136C29.344 32.808 26.848 30.44 21.536 30.44C12.832 30.44 6.24 38.248 6.24 48.104C6.24 58.216 13.28 65.832 21.984 65.832C26.72 65.832 29.28 64.04 31.072 61.864H31.776V68.84C31.776 70.376 31.2 71.144 29.664 71.144H14.624V79.72ZM23.84 57C19.36 57 15.776 53.416 15.776 48.104C15.776 42.856 19.36 39.336 23.84 39.336C28.32 39.336 31.904 42.728 31.904 48.104C31.904 53.032 28.64 57 23.84 57Z",
            fill: "#111111"
        }));
        var w = ()=>o.createElement("svg", {
            className: "h",
            width: "46",
            height: "85",
            viewBox: "0 0 46 85",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.createElement("path", {
            d: "M7.84 65H17.184V45.352C17.184 42.024 19.68 39.464 23.072 39.464C26.464 39.464 28.704 41.96 28.704 45.352V65H38.048V42.344C38.048 35.752 33.184 30.44 26.08 30.44C22.048 30.44 19.36 32.296 17.824 34.344H17.184V17H7.84V65Z",
            fill: "#111111"
        }));
        var E = ()=>o.createElement("svg", {
            className: "i",
            width: "30",
            height: "85",
            viewBox: "0 0 30 85",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.createElement("path", {
            d: "M16.928 26.792C20.064 26.792 22.432 24.424 22.432 21.352C22.432 18.344 20.064 15.976 16.928 15.976C13.728 15.976 11.36 18.344 11.36 21.352C11.36 24.424 13.728 26.792 16.928 26.792ZM12.128 65H21.408V31.272H6.56V39.528H12.128V65Z",
            fill: "#111111"
        }));
        var _ = ()=>o.createElement("svg", {
            className: "k",
            width: "44",
            height: "85",
            viewBox: "0 0 44 85",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.createElement("path", {
            d: "M7.84 65H17.184V51.176H20.192L27.744 65H38.88L28.064 47.016V46.312L38.368 31.272H27.296L20 42.6H17.184V17H7.84V65Z",
            fill: "#111111"
        }));
        var x = ()=>o.createElement("svg", {
            className: "l",
            width: "34",
            height: "85",
            viewBox: "0 0 34 85",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.createElement("path", {
            d: "M6.56 65H27.68V56.68H21.792V17H6.56V25.32H12.448V56.68H6.56V65Z",
            fill: "#111111"
        }));
        var C = ()=>o.createElement("svg", {
            className: "n",
            width: "46",
            height: "85",
            viewBox: "0 0 46 85",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.createElement("path", {
            d: "M7.84 65H17.184V45.416C17.184 42.024 19.552 39.464 22.944 39.464C26.208 39.464 28.512 41.96 28.512 45.352V65H37.856V42.344C37.856 35.752 33.12 30.44 26.016 30.44C22.112 30.44 19.36 32.168 17.824 34.344H17.184V31.272H7.84V65Z",
            fill: "#111111"
        }));
        var j = ()=>o.createElement("svg", {
            className: "o",
            width: "49",
            height: "85",
            viewBox: "0 0 49 85",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.createElement("path", {
            d: "M24.224 65.832C34.72 65.832 42.144 58.152 42.144 48.168C42.144 38.184 34.784 30.44 24.224 30.44C13.728 30.44 6.24 38.12 6.24 48.168C6.24 58.152 13.664 65.832 24.224 65.832ZM24.224 56.936C19.232 56.936 15.712 53.16 15.712 48.168C15.712 43.112 19.232 39.336 24.224 39.336C29.216 39.336 32.672 43.112 32.672 48.168C32.672 53.16 29.216 56.936 24.224 56.936Z",
            fill: "#111111"
        }));
        var O = ()=>o.createElement("svg", {
            className: "p",
            width: "49",
            height: "85",
            viewBox: "0 0 49 85",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.createElement("path", {
            d: "M7.84 79.72H17.184V61.544H17.888C19.296 63.592 22.304 65.832 27.488 65.832C36.192 65.832 42.72 58.024 42.72 48.168C42.72 38.056 35.68 30.44 26.976 30.44C22.304 30.44 19.552 32.296 17.888 34.408H17.184V31.272H7.84V79.72ZM25.184 57C20.768 57 17.056 53.736 17.056 48.104C17.056 43.368 20.256 39.336 25.12 39.336C29.6 39.336 33.248 42.856 33.248 48.104C33.248 53.416 29.728 57 25.184 57Z",
            fill: "#111111"
        }));
        var N = ()=>o.createElement("svg", {
            className: "r",
            width: "35",
            height: "85",
            viewBox: "0 0 35 85",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.createElement("path", {
            d: "M7.84 65H17.12V49.192C17.12 42.92 20.448 39.72 25.568 39.72H29.024V30.44H26.336C22.496 30.44 19.168 32.872 17.696 35.752H17.056V31.272H7.84V65Z",
            fill: "#111111"
        }));
        var S = ()=>o.createElement("svg", {
            className: "s",
            width: "41",
            height: "85",
            viewBox: "0 0 41 85",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.createElement("path", {
            d: "M20.384 65.832C29.152 65.832 34.464 61.16 34.464 54.376C34.464 41.448 16.608 45.8 16.608 40.552C16.608 39.08 18.144 38.12 20.384 38.12C22.88 38.12 24.928 39.528 25.632 41.896L33.696 39.72C32.224 33.64 27.296 30.44 20.256 30.44C12.768 30.44 7.392 35.112 7.392 40.936C7.392 54.376 25.056 49.704 25.056 55.272C25.056 56.872 23.648 57.96 20.832 57.96C17.632 57.96 14.816 56.552 14.432 53.416L6.24 54.888C7.2 62.376 13.216 65.832 20.384 65.832Z",
            fill: "#111111"
        }));
        var H = ()=>o.createElement("svg", {
            className: "t",
            width: "37",
            height: "85",
            viewBox: "0 0 37 85",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.createElement("path", {
            d: "M22.048 65H29.408V56.616H22.944C21.408 56.616 20.832 55.976 20.832 54.504V39.528H29.792V31.272H20.832V22.056H12.128V31.272H5.92V39.528H11.488V54.568C11.488 61.928 15.264 65 22.048 65Z",
            fill: "#111111"
        }));
        var A = ()=>o.createElement("svg", {
            className: "u",
            width: "45",
            height: "85",
            viewBox: "0 0 45 85",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.createElement("path", {
            d: "M19.04 65.832C22.944 65.832 25.696 64.104 27.232 61.928H27.872V65H37.216V31.272H27.872V50.856C27.872 54.248 25.504 56.808 22.112 56.808C18.848 56.808 16.544 54.312 16.544 50.92V31.272H7.2V53.928C7.2 60.52 11.936 65.832 19.04 65.832Z",
            fill: "#111111"
        }));
        var T = ()=>o.createElement("svg", {
            className: "v",
            width: "44",
            height: "85",
            viewBox: "0 0 44 85",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.createElement("path", {
            d: "M15.52 65H28.32L39.136 31.272H29.024L22.176 56.104H21.472L14.688 31.272H4.64L15.52 65Z",
            fill: "#111111"
        }));
        var M = e=>{
            const {id: t} = e;
            return o.createElement("div", {
                className: "designer-module--component--Vcm4u"
            }, o.createElement("div", {
                className: "designer-module--rainbow--KkOL5"
            }, o.createElement(h, null), o.createElement(g, null), o.createElement(S, null), o.createElement(E, null), o.createElement(b, null), o.createElement(C, null), o.createElement(g, null), o.createElement(N, null)), o.createElement("div", {
                className: "designer-module--line--PXNUl"
            }, o.createElement(h, null), o.createElement(g, null), o.createElement(S, null), o.createElement(E, null), o.createElement(b, null), o.createElement(C, null), o.createElement(g, null), o.createElement(N, null)))
        }
        ;
        var V = e=>{
            const {id: t} = e;
            return o.createElement("div", {
                className: "developer-module--component--BRB+j"
            }, o.createElement("div", {
                className: "developer-module--text--bo9iJ"
            }, o.createElement(h, null), o.createElement(g, null), o.createElement(T, null), o.createElement(g, null), o.createElement(x, null), o.createElement(j, null), o.createElement(O, null), o.createElement(g, null), o.createElement(N, null)))
        }
        ;
        var k = e=>{
            const {id: t} = e;
            return o.createElement("div", {
                className: "book-author-module--component--nWKDd"
            }, o.createElement("div", {
                className: "book-author-module--text--+XH7h"
            }, o.createElement(m, null), o.createElement(j, null), o.createElement(j, null), o.createElement(_, null), o.createElement(d, null), o.createElement(A, null), o.createElement(H, null), o.createElement(w, null), o.createElement(j, null), o.createElement(N, null)))
        }
        ;
        var L = e=>{
            const {id: t} = e;
            return o.createElement("div", {
                className: "freelancer-module--component--dUW32"
            }, o.createElement("div", {
                className: "freelancer-module--text--1YneX"
            }, o.createElement(y, null), o.createElement(N, null), o.createElement(g, null), o.createElement(g, null), o.createElement(x, null), o.createElement(d, null), o.createElement(C, null), o.createElement(v, null), o.createElement(g, null), o.createElement(N, null)))
        }
          , P = n(8938)
          , F = n.n(P);
        const Z = 986
          , D = n(7892);
        var R = ()=>{
            const e = (e,t,n)=>{
                const r = e.elements.container.parentNode;
                r.style.setProperty("--h", "var(--" + t + "-h)"),
                r.style.setProperty("--s", "var(--" + t + "-s)");
                const o = D.by_id[n].to;
                r.setAttribute("href", o)
            }
            ;
            return o.createElement("span", {
                className: "writer-module--component--9m9Yn"
            }, o.createElement("span", {
                className: "writer-module--placeholder--dcqOG"
            }, "open sourcerer|"), o.createElement("span", {
                className: "writer-module--typewriter--iEh6E"
            }, o.createElement(F(), {
                options: {
                    autoStart: !0,
                    delay: 48,
                    loop: !0
                },
                onInit: t=>{
                    t.callFunction((t=>e(t, "design", "branding"))).typeString("designer").pauseFor(Z).deleteAll().callFunction((t=>e(t, "htmlcss", "htmlcss"))).typeString("developer").pauseFor(Z).deleteAll().callFunction((t=>e(t, "opensource", "opensource"))).typeString("open sourcerer").pauseFor(Z).deleteAll().callFunction((t=>e(t, "css44", "css44"))).typeString("book author").pauseFor(Z).deleteAll().callFunction((t=>e(t, "freelance", "freelance"))).typeString("freelancer").pauseFor(Z).deleteAll().start()
                }
            })))
        }
        ;
        const B = n(7892)
          , z = n(4709)
          , I = (l.Link,
        B.by_id.branding.to,
        B.by_id.branding.to,
        l.Link,
        B.by_id.htmlcss.to,
        B.by_id.htmlcss.to,
        l.Link,
        B.by_id.css44.to,
        B.by_id.css44.to,
        l.Link,
        B.by_id.freelance.to,
        B.by_id.freelance.to,
        [3e3, 3e3, 5e3, 3e3]);
        var Q = ()=>{
            const {0: e, 1: t} = (0,
            o.useState)(0)
              , n = setTimeout((()=>{
                t((e=>e + 1))
            }
            ), I[e % 4]);
            return (0,
            o.useEffect)((()=>setTimeout(n, I[0])), []),
            o.createElement("div", {
                className: "hi-module--component--RmHY6"
            }, o.createElement("h1", {
                className: "hi-module--title--fW77M"
            }, "Hi, I’m Jeremy Thomas, ", o.createElement("span", {
                className: "hi-module--a--B8IZX"
            }, "a"), o.createElement(R, null)), o.createElement("p", null, "I build ", o.createElement("strong", null, "design systems"), " and", " ", o.createElement("strong", null, "code websites"), " for leaders and brands all around the world."), o.createElement("p", null, "Within my ", o.createElement("strong", null, "15 years"), " of experience, my professional work and open source contributions have already impacted", " ", o.createElement("strong", null, "millions of people"), "."), o.createElement(p.Z, null, o.createElement(f.Z, {
                color: "primary",
                to: B.by_id.freelance.to
            }, "See my Work"), o.createElement(f.Z, {
                to: B.by_id.css44.to
            }, "Buy my Book")), o.createElement("p", {
                className: "hi-module--find--CL069"
            }, "Find me on", " ", o.createElement("a", {
                className: "hi-module--tw--xnpeE",
                href: z.twitter,
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Twitter"), " ", "and", " ", o.createElement("a", {
                className: "hi-module--gh--gM2i2",
                href: z.github,
                target: "_blank",
                rel: "noopener noreferrer"
            }, "GitHub"), "."), o.createElement("div", {
                className: "hi-module--brags--8P0ct"
            }, o.createElement(c.Z, {
                type: "github"
            }), o.createElement(c.Z, {
                type: "twitter"
            })))
        }
          , U = n(7888)
          , W = n(5900)
          , q = n.n(W)
          , G = "clients-module--client--nb3c2"
          , Y = "clients-module--clients--YH72s"
          , J = "clients-module--fifa--rbFyH"
          , $ = "clients-module--lego--NoNB4"
          , X = "clients-module--lv--x6TeY"
          , K = "clients-module--ms--YMvcO"
          , ee = "clients-module--sony--nzS40"
          , te = "clients-module--umg--1T99M";
        const ne = n(8636);
        var re = e=>{
            let {data: t} = e;
            const n = (0,
            U.wc)(ne, "clients");
            return o.createElement("div", null, o.createElement("div", {
                className: Y
            }, n.map((e=>o.createElement("div", {
                key: e.id,
                className: q()(G, r[e.id])
            }, o.createElement(u.Z, {
                id: e.id
            }))))))
        }
          , oe = n(585);
        var ae = ()=>o.createElement(a.Z, null, o.createElement(i.Z, {
            title: "JT is a CSS Guru",
            description: "Jeremy Thomas is a frontend developer from 🇫🇷 Bordeaux, living in 🇬🇧 London. He's a 🎨 designer, 🔨 developer, 👨‍🏫 code teacher and ❤️ open source contributor. 👍",
            keywords: ["css", "jt", "guru"]
        }), o.createElement("div", {
            className: "index-module--page--xNDgj"
        }, o.createElement(s.Z, {
            title: "CSS Guru"
        }), o.createElement("div", {
            className: "index-module--hi--qcaqM"
        }, o.createElement(Q, null)), o.createElement("div", {
            className: "index-module--clients--mrqnf"
        }, o.createElement(re, null))), o.createElement(oe.Z, null))
    },
    8636: function(e) {
        "use strict";
        e.exports = JSON.parse('{"by_id":{"fifa":{"id":"fifa","slug":"fifa","title":"FIFA","width":200,"height":352},"lego":{"id":"lego","slug":"lego","title":"LEGO","width":200,"height":352},"sony":{"id":"sony","slug":"sony","title":"Sony","width":200,"height":352},"ms":{"id":"ms","slug":"microsoft","title":"MicroSoft","width":300,"height":380},"lv":{"id":"lv","slug":"louis-vuitton","title":"Louis Vuitton","width":300,"height":380},"umg":{"id":"umg","slug":"universal-music-group","title":"Universal Music Group","width":300,"height":380}},"list":{"clients":["fifa","lego","umg","ms","lv","sony"]}}')
    }
}]);
//# sourceMappingURL=component---src-pages-index-js-83c3368b119a3ea0a631.js.map
