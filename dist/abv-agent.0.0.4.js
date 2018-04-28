(function() {
    function e(t, r, i) {
        function n(s, f) {
            if (!r[s]) {
                if (!t[s]) {
                    var o = "function" == typeof require && require;
                    if (!f && o) return o(s, !0);
                    if (a) return a(s, !0);
                    var c = new Error("Cannot find module '" + s + "'");
                    throw c.code = "MODULE_NOT_FOUND", c;
                }
                var u = r[s] = {
                    exports: {}
                };
                t[s][0].call(u.exports, function(e) {
                    var r = t[s][1][e];
                    return n(r || e);
                }, u, u.exports, e, t, r, i);
            }
            return r[s].exports;
        }
        for (var a = "function" == typeof require && require, s = 0; s < i.length; s++) n(i[s]);
        return n;
    }
    return e;
})()({
    1: [ function(e, t, r) {
        "use strict";
        const i = e("abv-ts")("abv:agent");
        const n = e("crypto");
        const a = e("jszip");
        const s = new a();
        const f = e("./lib/CAgent.js");
        const o = e("abv-vfs");
        const c = e("./package.json");
        if (i.isBrowser) {
            if (!window.ts) window.ts = i;
            if (!window.zip) window.zip = s;
            if (!window.abv) window.abv = {};
            window.abv.CAgent = f;
            window.abv.fs = o;
            window.abv.pjson = c;
        }
        t.exports = {
            CAgent: f
        };
    }, {
        "./lib/CAgent.js": 2,
        "./package.json": 244,
        "abv-ts": 3,
        "abv-vfs": 6,
        crypto: 94,
        jszip: 151
    } ],
    2: [ function(e, t, r) {
        "use strict";
        const i = e("abv-ts")("abv:CAgent");
        const n = e("abv-socket");
        class a extends n.CSocket {
            constructor(e, t) {
                super(e, t);
                this.online = new Map();
                const r = this;
                this.on("write", e => {
                    const t = e.b;
                    delete e.b;
                    r._read(e, t);
                });
                this.on("echo", e => {
                    var t = Date.now() + "";
                    return t;
                });
                this.on("msg", e => {
                    return r.out(e);
                });
                this.on("id", e => {
                    r.id = e.t;
                    r.name = e.t;
                });
                this.on("online", e => {
                    let t = null;
                    try {
                        t = new Map(JSON.parse(e.b));
                    } catch (e) {}
                    if (t) {
                        this.online = t;
                        const e = Array.from(t.keys()).join(",");
                        r.out("online: " + e);
                    }
                });
                this.on("file", e => {
                    r.file(e);
                });
                this.on("error", e => {
                    i.error(57, e);
                });
            }
        }
        t.exports = a;
    }, {
        "abv-socket": 247,
        "abv-ts": 3
    } ],
    3: [ function(e, t, r) {
        (function(e, r) {
            "use strict";
            const i = console.log.bind(console);
            const n = "function";
            const a = "object";
            const s = "string";
            const f = "undefined";
            const o = "Unknown";
            const c = "Int";
            const u = "Float";
            const h = "Static class!";
            const d = typeof window !== f && window;
            const l = d ? false : e.execArgv.indexOf("--inspect") !== -1;
            const p = "no";
            const v = "error";
            const b = "warn";
            const m = "log";
            const g = "info";
            const y = "debug";
            const w = [ p, v, b, m, g, y ];
            Object.freeze(w);
            const _ = "red";
            const S = "blue";
            const k = "green";
            const x = "yellow";
            const E = "orange";
            const A = "magenta";
            const M = "cyan";
            const B = "gray";
            const I = "black";
            const j = "white";
            const C = [ _, S, k, E, A, M, B ];
            Object.freeze(C);
            const R = "[0m";
            const z = "[1m";
            const T = "[2m";
            const O = "[4m";
            const D = "[5m";
            const P = "[7m";
            const L = "[8m";
            const N = "[30m";
            const U = "[31m";
            const F = "[32m";
            const q = "[33m";
            const W = "[34m";
            const K = "[35m";
            const H = "[36m";
            const Z = "[37m";
            const V = "[40m";
            const G = "[41m";
            const X = "[42m";
            const Y = "[43m";
            const J = "[44m";
            const Q = "[45m";
            const $ = "[46m";
            const ee = "[47m";
            let te = 0 | 0;
            const re = e => {
                return e.reduce(function(e, t) {
                    return e + t;
                }, 0);
            };
            const ie = e => {
                return e.reduce((e, t) => {
                    const r = new Set(t);
                    return e.filter(e => r.has(e));
                });
            };
            const ne = e => {
                const t = e.reduce((e, t) => e.concat(t), []);
                return Array.from(new Set(t));
            };
            const ae = e => {
                const t = new Set(ie(e));
                const r = ne(e);
                return r.filter(e => !t.has(e));
            };
            const se = (e, t = false) => {
                let r = e;
                if (d || l) return r;
                if (!e) r = R; else if (e === _) r = t ? G : U; else if (e === S) r = t ? J : W; else if (e === k) r = t ? X : F; else if (e === E) r = t ? Y : q; else if (e === x) r = t ? Y : q; else if (e === A) r = t ? Q : K; else if (e === M) r = t ? $ : H; else if (e === B) r = t ? ee : T; else if (e === I) r = t ? V : N; else if (e === j) r = t ? ee : Z;
                return r;
            };
            const fe = e => {
                let t = "[" + a + "]";
                try {
                    t = JSON.stringify(e);
                } catch (e) {}
                return t;
            };
            const oe = e => {
                let t = {};
                try {
                    t = JSON.parse(e);
                } catch (e) {}
                return t;
            };
            const ce = e => {
                let t = "-1";
                try {
                    const r = new DataView(e);
                    const i = e.byteLength / 2;
                    const n = new Uint16Array(i);
                    for (let e = 0; e < i; e++) {
                        n[e] = r.getUint16(e * 2);
                    }
                    t = String.fromCharCode.apply(null, n);
                } catch (e) {}
                return t;
            };
            const ue = e => {
                if (!pe(e, String)) e = "-1";
                const t = new ArrayBuffer(e.length * 2);
                const r = new DataView(t);
                for (let t in e) {
                    r.setUint16(t * 2, e.charCodeAt(t));
                }
                return t;
            };
            const he = (t, r, n) => {
                t = pe(t, String) ? t : String(t);
                if (d) {
                    i(t);
                } else {
                    if (r) {
                        t = se(r) + t + R;
                        if (n) t = se(n, true) + t;
                    }
                    e.stdout.write(t);
                }
            };
            const de = (e, t, r, n, a) => {
                let s = "";
                let f = ke.time ? " +" + a : "";
                if (!a) f = "";
                if (!ke.color) {
                    s = t + ": " + e + f;
                    if (!ke.test) i(s);
                } else if (d || l || ke.browser) {
                    s = "%c " + t + " %c " + e + f;
                    if (!ke.test) i(s, "background: " + se(n, true) + "; color: white", "color: " + se(r));
                } else {
                    if (ke.test) n = _;
                    s = se(n, true) + Z + z + " " + t + " " + R + " " + se(r) + e + f + R;
                    if (!ke.test) i(s);
                }
                return s;
            };
            const le = (e, t) => {
                let r;
                if (pe(e, t)) {
                    r = e;
                } else {
                    throw new TypeError("Cast error");
                }
                return r;
            };
            const pe = (e, t) => {
                let i = false;
                if (typeof e === f || typeof t === f) return i;
                if (t === String) {
                    i = typeof e === s || e instanceof String;
                } else if (t === ArrayBuffer) {
                    i = e instanceof ArrayBuffer;
                } else if (t === r) {
                    i = e instanceof r;
                } else if (t instanceof Array) {
                    if (t.length !== 1) {} else if (e instanceof Array) {
                        let r = true;
                        for (let i in e) {
                            if (!pe(e[i], t[0])) {
                                r = false;
                                break;
                            }
                        }
                        if (r) i = true;
                    }
                } else if (t === c) {
                    i = Number.isInteger(e);
                } else if (t === u) {
                    i = Number.isFinite(e) && !Number.isInteger(e);
                } else if (t === Number) {
                    i = typeof e === "number";
                } else if (t === Boolean) {
                    i = typeof e === "boolean" || e instanceof Boolean;
                } else if (e instanceof t) {
                    i = true;
                } else {
                    i = be([ e, t, 215 ]) === "";
                }
                return i;
            };
            const ve = e => {
                let t = "";
                const r = [];
                const i = e.length % 2 === 0 ? e.length : e.length - 1;
                for (let t = 0; t < i; t += 2) {
                    if (!pe(e[t], e[t + 1])) {
                        r.push("arg" + Math.round((t + 1) / 2));
                    }
                }
                const n = e.length > i ? e[i] + " " : "";
                if (r.length > 0) t = n + "TypeError: " + r.join(", ");
                return t;
            };
            const be = e => {
                let t = "";
                const r = [];
                const i = n;
                let a = typeof e[0] === i ? new e[0]() : e[0];
                const s = Array.from(Object.keys(a));
                const f = a.constructor.name + "{}";
                let o = [];
                do {
                    o = o.concat(Object.getOwnPropertyNames(a));
                } while (a = Object.getPrototypeOf(a));
                let u, h, d, l, p;
                const v = pe(e[e.length - 1], c) ? e.length - 1 : e.length;
                for (let t = 1; t < v; t++) {
                    u = typeof e[t] === i ? new e[t]() : e[t];
                    p = u.constructor.name;
                    h = Object.getOwnPropertyNames(Object.getPrototypeOf(u));
                    d = Array.from(Object.keys(u));
                    l = ie([ s, d ]);
                    l = ae([ l, d ]);
                    if (l.length > 0) r.push(p + "{" + l + "}");
                    l = ie([ o, h ]);
                    l = ae([ l, h ]);
                    if (l.length > 0) r.push(p + "(" + l + ")");
                }
                const b = e.length > v ? e[v] + " " : "";
                if (r.length > 0) t = b + f + " missing: " + r.join(", ");
                return t;
            };
            const me = (e, t, r = null) => {
                e = e.endsWith(t) ? e : e + t;
                if (r) e = e.startsWith(r) ? e : r + e;
                return e;
            };
            const ge = e => {
                for (let t in e) e[t] = e[t].trim();
            };
            const ye = e => {
                const t = {};
                if (!e) e = "";
                let r = [];
                try {
                    r = e.split(",");
                    ge(r);
                } catch (e) {}
                let i = r[0] ? r[0] : "";
                const n = r[1] ? r[1] : y;
                try {
                    r = i.split(":");
                    ge(r);
                } catch (e) {}
                t.proj = r[0] ? r[0] : "";
                t.mod = r[1] ? r[1] : "";
                t.bg = C[te % C.length];
                i = w.indexOf(n);
                t.level = i === -1 ? 0 : i;
                return t;
            };
            const we = e => {
                let t = [];
                let r = "";
                for (let r in e) {
                    if (typeof e[r] !== a) {
                        t.push(e[r]);
                    } else {
                        t.push(fe(e[r]));
                    }
                }
                return t.join(", ");
            };
            const _e = e => {
                if (e < 1e3) return e + "ms";
                let t = e / 1e3;
                if (t < 60) return t.toFixed(2) + "s";
                t = Math.floor(e % 6e4 / 1e3);
                let r = Math.floor(e / 6e4);
                if (r < 60) return r + ":" + (t < 10 ? "0" : "") + t + "m";
                r = Math.floor(e % 36e5 / 6e4);
                let i = Math.floor(e / 36e5);
                return i + ":" + (r < 10 ? "0" : "") + r + "h";
            };
            const Se = e => {
                if (!pe(e, String)) e = "";
                let t = 5381 | 0;
                for (let r in e) {
                    t = (t << 5) + t + e.charCodeAt(r);
                }
                return t;
            };
            const ke = ye((d ? localStorage.debug : e.env.DEBUG) || "");
            ke.color = true;
            ke.time = true;
            ke.test = false;
            ke.browser = false;
            class xe {
                constructor(e) {
                    const t = ye(e);
                    this.level = ke.level < t.level ? ke.level : t.level;
                    if (ke.proj !== t.proj) this.level = 0; else if (ke.mod === "" || ke.mod === "*") {} else if (ke.mod !== t.mod) this.level = 0;
                    this.name = t.proj + (t.mod ? ":" + t.mod : "");
                    if (this.name == "") this.name = "ts:" + this.rand;
                    this.bg = t.bg;
                    te++;
                    if (te > C.length) te = 0;
                    this.now = Date.now();
                }
                get FN() {
                    return n;
                }
                get OBJ() {
                    return a;
                }
                get STR() {
                    return s;
                }
                get UD() {
                    return f;
                }
                get UK() {
                    return o;
                }
                get INT() {
                    return c;
                }
                get FLOAT() {
                    return u;
                }
                get SC() {
                    return h;
                }
                get RED() {
                    return _;
                }
                get BLUE() {
                    return S;
                }
                get GREEN() {
                    return k;
                }
                get YELLOW() {
                    return x;
                }
                get ORANGE() {
                    return E;
                }
                get MAGENTA() {
                    return A;
                }
                get CYAN() {
                    return M;
                }
                get GRAY() {
                    return B;
                }
                get BLACK() {
                    return I;
                }
                get WHITE() {
                    return j;
                }
                get colors() {
                    return C;
                }
                get levels() {
                    return w;
                }
                get isBrowser() {
                    return d;
                }
                get isInspector() {
                    return l;
                }
                range(e, t, r = 0) {
                    return e >= r && e < t;
                }
                time(e) {
                    return _e(e);
                }
                rs(e) {
                    return e.replace(/\/\/+/g, "/");
                }
                add(e, t, r = null) {
                    return me(e, t, r);
                }
                trim(e) {
                    ge(e);
                }
                toString(e) {
                    return fe(e);
                }
                fromString(e) {
                    return oe(e);
                }
                ab2str(e) {
                    return ce(e);
                }
                str2ab(e) {
                    return ue(e);
                }
                djb2(e) {
                    return Se(e);
                }
                clear(e) {
                    e.length = 0;
                }
                clr2c(e, t = false) {
                    return se(e, t);
                }
                toJson(e) {
                    return JSON.stringify(e, null, 2);
                }
                print(e, t, r) {
                    he(e, t, r);
                }
                println(e, t, r) {
                    he(e + "\n", t, r);
                }
                rand() {
                    const e = Se(Date.now() + this.name);
                    return Math.random().toString(36).slice(2) + e;
                }
                set(e) {
                    if (typeof e !== a) return;
                    if (e.level) {
                        const t = w.indexOf(e.level);
                        if (t !== -1) e.level = this.level = t;
                    }
                    Object.keys(e).forEach(t => {
                        if (ke.hasOwnProperty(t)) ke[t] = e[t];
                    });
                }
                dt() {
                    const e = Date.now();
                    const t = e - this.now;
                    this.now = e;
                    return _e(t);
                }
                error(e) {
                    if (this.level < 1) return "";
                    return de(we(arguments), this.name, _, this.bg, this.dt());
                }
                warn(e) {
                    if (this.level < 2) return "";
                    return de(we(arguments), this.name, E, this.bg, this.dt());
                }
                log(e) {
                    if (this.level < 3) return "";
                    return de(we(arguments), this.name, B, this.bg, this.dt());
                }
                info(e) {
                    if (this.level < 4) return "";
                    return de(we(arguments), this.name, S, this.bg, this.dt());
                }
                debug(e) {
                    if (this.level < 5) return "";
                    return de(we(arguments), this.name, k, this.bg, this.dt());
                }
                type(e, t) {
                    let r = "";
                    if (this.level < 5) return r;
                    if (e === null) r = "null"; else if (e && e.constructor) r = e.constructor.name; else r = typeof e;
                    de([ r ], this.name, _, this.bg, this.dt());
                    if (t) throw new Error(String(t));
                }
                cast(e, t) {
                    return le(e, t);
                }
                is(e, t) {
                    return pe(e, t);
                }
                params(e, t, r) {
                    if (this.level < 5) return true;
                    const i = ve(Array.from(arguments));
                    if (i !== "") {
                        this.error(i);
                        return false;
                    }
                    return true;
                }
                implements(e, t, r) {
                    if (this.level < 5) return true;
                    const i = be(Array.from(arguments));
                    if (i !== "") {
                        this.error(i);
                        return false;
                    }
                    return true;
                }
                intersec(e, t) {
                    const r = Array.from(arguments);
                    if (r.length < 2) {
                        this.error("arg2..?");
                        return [];
                    }
                    return ie(r);
                }
                diff(e, t) {
                    const r = Array.from(arguments);
                    if (r.length < 2) {
                        this.error("arg2..?");
                        return [];
                    }
                    return ae(r);
                }
                union(e, t) {
                    const r = Array.from(arguments);
                    if (r.length < 2) {
                        this.error("arg2..?");
                        return [];
                    }
                    return ne(r);
                }
                sum(e) {
                    return re(e);
                }
            }
            t.exports = (e => {
                return new xe(e);
            });
        }).call(this, e("_process"), e("buffer").Buffer);
    }, {
        _process: 211,
        buffer: 65
    } ],
    4: [ function(e, t, r) {
        "use strict";
        const i = e("abv-ts")("abv:vfs.FS");
        const n = e("./package.json");
        const a = e("./lib/MFS.js");
        const s = i.isBrowser ? new a("nfs") : e("fs");
        const f = e("./lib/TStream.js");
        const o = e("./lib/RStream.js");
        const c = e("./lib/WStream.js");
        const u = e("./mimetype.js");
        const h = e("./File.js");
        const d = e("abv-wallet");
        const l = i.isBrowser ? [] : e("./lib/IPs.js");
        const p = new Map();
        let v = "nfs";
        const b = 4194304;
        class m {
            constructor() {
                this.mount(s);
                this.fs = s;
                this.name = "afs";
                this._cache = {
                    m: null,
                    max: 0,
                    timeout: 0
                };
            }
            get ns() {
                return v;
            }
            set ns(e) {
                if (!p.has(e)) throw new Error("fs? " + e);
                v = e;
                this.fs = p.get(e);
            }
            mimetype(e, t) {
                return u(e, t);
            }
            mount(e) {
                if (!e) return;
                const t = e.name ? e.name : v;
                p.set(t, e);
            }
            umount(e) {
                if (!e) return;
                p.delete(e);
            }
            realpathSync(e) {
                return this.fs.realpathSync(e);
            }
            lstatSync(e) {
                return this.fs.lstatSync(e);
            }
            mkdirSync(e, t) {
                this.fs.mkdirSync(e, t);
            }
            readdirSync(e) {
                return this.fs.readdirSync(e);
            }
            rebuildAbv(e) {
                const t = [];
                let r;
                const i = this.readdirAbv(e);
                for (let n of i) {
                    r = this.readFileAbv(e + "/" + n);
                    if (r !== null) {
                        if (!r.sort) {} else if (Number.isInteger(r.sort)) t[r.sort] = r; else t.push(r);
                    }
                }
                const a = {
                    name: this.name,
                    version: n.version,
                    files: t
                };
                const s = "const meta = `\n" + JSON.stringify(a, null, 2) + "\n`;";
                this.writeFileSync(e + "/" + this.name + ".js", s, "utf8");
                return a;
            }
            readdirAbv(e) {
                const t = this.fs.readdirSync(e);
                const r = [];
                let i;
                for (let n of t) {
                    i = s.lstatSync(e + "/" + n);
                    if (i.isDirectory()) r.push(n);
                }
                return r;
            }
            readFileAbv(t) {
                let r = null;
                try {
                    const i = JSON.parse(e(t + "/meta.js"));
                    r = new h(i.name);
                    r.desc = i.desc;
                    r.tags = i.tags;
                    r.logo = {
                        name: i.logo
                    };
                    r.price = i.price;
                    r.sort = i.sort;
                } catch (e) {}
                return r;
            }
            cache(e = 32, t = 6e4) {
                if (!this._cache.m) {
                    this._cache.m = new d(this.name, e, t);
                    this._cache.max = e;
                    this._cache.timeout = t;
                }
            }
            stat() {
                return d.i(this.name);
            }
            existsSync(e) {
                return this.fs.existsSync(e);
            }
            readFileSync(e, t, r = 0) {
                let i = null;
                if (this._cache.m) {
                    i = this._cache.m.get(e);
                    if (i) return i.file;
                }
                const n = s.lstatSync(e);
                i = this.fs.readFileSync(e, t);
                if (i && n.size < b && r > 0) {
                    this._cache.m.set(e, {
                        file: i,
                        size: n.size
                    }, r);
                }
                return i;
            }
            writeFileSync(e, t, r) {
                this.fs.writeFileSync(e, t, r);
            }
            createReadStream(e, t) {
                return this.fs.createReadStream(e, t);
            }
            createWriteStream(e, t, r) {
                return this.fs.createWriteStream(e, t, r);
            }
            createTStream(e, t, r) {
                return new f(e, t, r);
            }
            createWStream(e, t, r) {
                return new c(e, t, r);
            }
            createRStream(e, t, r) {
                return new o(e, t, r);
            }
            IPs() {
                return l;
            }
            get MAX_FILE_SIZE() {
                return b;
            }
            Wallet(e, t = 32, r = 6e4) {
                return new d(e, t, r);
            }
            MFS(e = "mfs") {
                return new a(e);
            }
        }
        t.exports = m;
    }, {
        "./File.js": 5,
        "./lib/IPs.js": 8,
        "./lib/MFS.js": 9,
        "./lib/RStream.js": 10,
        "./lib/TStream.js": 11,
        "./lib/WStream.js": 12,
        "./mimetype.js": 13,
        "./package.json": 14,
        "abv-ts": 3,
        "abv-wallet": 15,
        fs: 62
    } ],
    5: [ function(e, t, r) {
        (function(r) {
            "use strict";
            const i = e("abv-ts")("abv:vfs.File");
            const n = e("./mimetype.js");
            class a {
                constructor(e = "", t = "") {
                    this._name = e;
                    this.title = "";
                    this.desc = "";
                    this.logo = null;
                    this.sort = 0;
                    this.tags = [];
                    this._size = 0;
                    this._type = "";
                    this._time = i.now;
                    this.bin = false;
                    this.body = t;
                }
                get name() {
                    return this._name;
                }
                get body() {
                    return this._body;
                }
                set body(e) {
                    if (!(i.is(e, r) || i.is(e, String) || i.is(e, ArrayBuffer))) {
                        i.error(26, "type?");
                        this._body = "";
                        return;
                    }
                    const t = r.from(e);
                    try {
                        this.bin = r.from(e).includes("000", "hex");
                    } catch (e) {
                        this.bin = [ ...t ].toString().includes("0,0,0,");
                    }
                    if (i.isBrowser) {
                        this._type = n(this._name);
                    } else {
                        this._type = n(this._name, e);
                    }
                    this._body = this.bin ? e : e.toString();
                    this._size = r.byteLength(this._body);
                }
                get size() {
                    return this._size;
                }
                set size(e) {
                    if (e >= 0) this._size = e;
                }
                get time() {
                    return this._time;
                }
                set time(e) {
                    if (e >= 0) this._time = e;
                }
                get type() {
                    return this._type;
                }
                slice(e, t, r) {
                    return this._body;
                }
                export() {
                    const e = {
                        name: this.name,
                        title: this.title,
                        desc: this.desc,
                        sort: this.sort,
                        tags: this.tags,
                        size: this.size,
                        type: this.type,
                        time: this.time
                    };
                    if (this.logo) e.logo = this.logo.name;
                    const t = {
                        meta: JSON.stringify(e, null, 2),
                        body: body
                    };
                    if (this.logo) t.logo = this.logo.body;
                    return t;
                }
                get webkitRelativePath() {
                    return "";
                }
                get lastModified() {
                    return this.time;
                }
                get lastModifiedDate() {
                    return new Date(this.time).toUTCString();
                }
            }
            t.exports = a;
        }).call(this, e("buffer").Buffer);
    }, {
        "./mimetype.js": 13,
        "abv-ts": 3,
        buffer: 65
    } ],
    6: [ function(e, t, r) {
        "use strict";
        const i = e("abv-ts")("abv:vfs");
        const n = e("./FS.js");
        const a = new n();
        if (i.isBrowser) {
            window.ts = i;
            if (window.abv) window.abv.fs = a; else window.abv = {
                fs: a
            };
        }
        t.exports = a;
    }, {
        "./FS.js": 4,
        "abv-ts": 3
    } ],
    7: [ function(e, t, r) {
        "use strict";
        const i = e("abv-ts")("abv:vfs.BFS");
        const n = e("./TStream.js");
        const a = e("./RStream.js");
        const s = e("./WStream.js");
        const f = e => {
            throw new Error("Override me! " + e);
        };
        class o {
            constructor(e) {
                if (!e) throw new Error(i.UK);
                this.name = e;
            }
            existsSync(e) {
                return f(e);
            }
            realpathSync(e) {
                return f(e);
            }
            lstatSync(e) {
                return f(e);
            }
            mkdirSync(e, t) {
                return f(e);
            }
            readdirSync(e) {
                return f(e);
            }
            readFileSync(e, t) {
                return f(e);
            }
            writeFileSync(e, t, r) {
                return f(e);
            }
            createReadStream(e, t) {
                return f(e);
            }
            createWriteStream(e, t) {
                return f(e);
            }
            createTStream(e, t, r) {
                return new n(e, t, r);
            }
            createWStream(e, t, r) {
                return new s(e, t, r);
            }
            createRStream(e, t, r) {
                return new a(e, t, r);
            }
        }
        t.exports = o;
    }, {
        "./RStream.js": 10,
        "./TStream.js": 11,
        "./WStream.js": 12,
        "abv-ts": 3
    } ],
    8: [ function(e, t, r) {
        const i = e("os");
        const n = () => {
            const e = i.networkInterfaces();
            const t = new Set();
            Object.keys(e).forEach(r => {
                let i = 0;
                e[r].forEach(e => {
                    if ("IPv4" !== e.family || e.internal !== false) return;
                    t.add(e.address);
                    ++i;
                });
            });
            return t.size > 0 ? Array.from(t) : [ "localhost" ];
        };
        t.exports = n();
    }, {
        os: 182
    } ],
    9: [ function(e, t, r) {
        (function(r) {
            "use strict";
            const i = e("abv-ts")("abv:vfs.MFS");
            const n = e("./BFS.js");
            const a = e("abv-wallet");
            const s = e("../File.js");
            class f extends n {
                constructor(e = "mfs") {
                    super(e);
                    this.cache = new a(e);
                }
                existsSync(e) {
                    return this.cache.has(e);
                }
                mkdirSync(e, t) {}
                readFileSync(e, t) {
                    let r = null;
                    const i = this.cache.get(e);
                    if (i) r = new Uint8Array([ ...i.body ]).buffer;
                    return r;
                }
                writeFileSync(e, t, r) {
                    const i = new s(e, t);
                    return this.cache.set(e, i);
                }
                createReadStream(e, t) {
                    return this.createRStream(this, e, t);
                }
                createWriteStream(e, t, r) {
                    return this.createWStream(this, r, t);
                }
                _write(e, t) {
                    let i;
                    const n = e.n;
                    if (!this.cache.has(n)) {
                        i = new s(n, t);
                        this.cache.set(n, i);
                        return;
                    }
                    i = this.cache.get(n);
                    if (t) {
                        const e = i.body.byteLength + t.byteLength;
                        i.body = r.concat([ i.body, t ], e);
                    }
                }
            }
            t.exports = f;
        }).call(this, e("buffer").Buffer);
    }, {
        "../File.js": 5,
        "./BFS.js": 7,
        "abv-ts": 3,
        "abv-wallet": 15,
        buffer: 65
    } ],
    10: [ function(e, t, r) {
        (function(r) {
            "use strict";
            const i = e("abv-ts")("abv:vfs.RStream");
            const n = e("stream").Readable;
            class a extends n {
                constructor(e, t, n) {
                    if (!e) throw new Error("owner?");
                    if (typeof e._read !== i.FN) throw new TypeError("owner._read()?");
                    super(n);
                    this.owner = e;
                    this.body = t ? r.from(t) : null;
                    this.ext = this.body ? true : false;
                }
                _read(e) {
                    if (this.body) {
                        this.push(this.body.slice(0, e));
                        this.body = this.body.slice(e);
                    } else if (this.ext) {
                        this.push(null);
                    } else i.error(29, "???");
                }
            }
            t.exports = a;
        }).call(this, e("buffer").Buffer);
    }, {
        "abv-ts": 3,
        buffer: 65,
        stream: 240
    } ],
    11: [ function(e, t, r) {
        "use strict";
        const i = e("abv-ts")("abv:vfs.TStream");
        const n = e("stream").Transform;
        class a extends n {
            constructor(e, t, r) {
                if (!e) throw new Error("owner?");
                if (typeof e._write !== i.FN) throw new TypeError("owner._write()?");
                super(r);
                this.meta = t ? t : {};
                this.owner = e;
            }
            _transform(e, t, r) {
                this.owner._write(this.meta, e);
                r();
            }
            _flush(e) {
                this.meta.end = true;
                this.owner._write(this.meta, null);
                e();
            }
        }
        t.exports = a;
    }, {
        "abv-ts": 3,
        stream: 240
    } ],
    12: [ function(e, t, r) {
        "use strict";
        const i = e("abv-ts")("abv:vfs.WStream");
        const n = e("stream").Writable;
        class a extends n {
            constructor(e, t, r) {
                if (!e) throw new Error("owner?");
                if (typeof e._write !== i.FN) throw new TypeError("owner._write()?");
                super(r);
                this.meta = t ? t : {};
                this.owner = e;
                this.on("finish", () => {
                    this.meta.end = true;
                    this.owner._write(this.meta, null);
                });
            }
            _write(e, t, r) {
                this.meta.type = t;
                this.owner._write(this.meta, e);
                r();
            }
        }
        t.exports = a;
    }, {
        "abv-ts": 3,
        stream: 240
    } ],
    13: [ function(e, t, r) {
        (function(r) {
            "use strict";
            const i = e("abv-ts")("abv:vfs.mime");
            const n = e("path");
            const a = [ "htm", "html", "shtm", "shtml", "xhtml", "css", "js", "svg", "txt", "xml", "json", "xslt", "xsl", "hx" ];
            const s = new Map();
            s.set("html", "text/html");
            s.set("htm", "text/html");
            s.set("xhtml", "application/xhtml+xml");
            s.set("shtm", "text/html");
            s.set("shtml", "text/html");
            s.set("css", "text/css");
            s.set("js", "application/x-javascript");
            s.set("ico", "image/x-icon");
            s.set("gif", "image/gif");
            s.set("jpg", "image/jpeg");
            s.set("jpeg", "image/jpeg");
            s.set("png", "image/png");
            s.set("bmp", "image/bmp");
            s.set("svg", "image/svg+xml");
            s.set("txt", "text/plain");
            s.set("torrent", "application/x-bittorrent");
            s.set("wav", "audio/x-wav");
            s.set("mp3", "audio/x-mp3");
            s.set("mid", "audio/mid");
            s.set("m3u", "audio/x-mpegurl");
            s.set("ogg", "audio/ogg");
            s.set("ram", "audio/x-pn-realaudio");
            s.set("xml", "text/xml");
            s.set("json", "text/json");
            s.set("xslt", "application/xml");
            s.set("xsl", "application/xml");
            s.set("ra", "audio/x-pn-realaudio");
            s.set("doc", "application/msword");
            s.set("exe", "application/octet-stream");
            s.set("bin", "application/octet-stream");
            s.set("zip", "application/x-zip-compressed");
            s.set("7z", "application/x-7z-compressed");
            s.set("xls", "application/excel");
            s.set("tgz", "application/x-tar-gz");
            s.set("tar", "application/x-tar");
            s.set("gz", "application/x-gunzip");
            s.set("arj", "application/x-arj-compressed");
            s.set("rar", "application/x-arj-compressed");
            s.set("rtf", "application/rtf");
            s.set("pdf", "application/pdf");
            s.set("swf", "application/x-shockwave-flash");
            s.set("mpg", "video/mpeg");
            s.set("webm", "video/webm");
            s.set("mpeg", "video/mpeg");
            s.set("mov", "video/quicktime");
            s.set("mp4", "video/mp4");
            s.set("m4v", "video/x-m4v");
            s.set("asf", "video/x-ms-asf");
            s.set("avi", "video/x-msvideo");
            s.set("hx", "text/plain");
            s.set("n", "application/octet-stream");
            s.set("ttf", "application/x-font-ttf");
            s.set("post-url", "application/x-www-form-urlencoded");
            s.set("post-dat", "multipart/form-data");
            s.set("post-mix", "multipart/mixed");
            const f = (e, t = "") => {
                let i = "";
                const f = n.extname(e).substr(1).toLowerCase();
                if (s.has(f)) i = s.get(f);
                if (!t || t === "") return i;
                const o = r.from(t);
                let c;
                try {
                    c = r.from(v).includes("000", "hex");
                } catch (e) {
                    c = [ ...o ].toString().includes("0,0,0,");
                }
                if (i !== "") {
                    if (a.includes(f)) {
                        if (c) i = s.get("bin");
                    } else {
                        if (!c) i = s.get("txt");
                    }
                } else if (c) {
                    i = s.get("bin");
                } else {
                    if (t && t.includes("</html>", "utf8")) i = s.get("htm"); else i = s.get("txt");
                }
                if (!c) i += "; charset=utf-8";
                return i;
            };
            t.exports = f;
        }).call(this, e("buffer").Buffer);
    }, {
        "abv-ts": 3,
        buffer: 65,
        path: 204
    } ],
    14: [ function(e, t, r) {
        t.exports = {
            _from: "abv-vfs@0.0.3",
            _id: "abv-vfs@0.0.3",
            _inBundle: false,
            _integrity: "sha512-l62SBgURb07hYYHJMpq1mAS5nx+/uw7+w49/LkapJDTuczGv/Vhj5QGgi9YQM08K9x6t2zCNieJ1lQ+axvRAOQ==",
            _location: "/abv-vfs",
            _phantomChildren: {},
            _requested: {
                type: "version",
                registry: true,
                raw: "abv-vfs@0.0.3",
                name: "abv-vfs",
                escapedName: "abv-vfs",
                rawSpec: "0.0.3",
                saveSpec: null,
                fetchSpec: "0.0.3"
            },
            _requiredBy: [ "/", "/abv-socket" ],
            _resolved: "https://registry.npmjs.org/abv-vfs/-/abv-vfs-0.0.3.tgz",
            _shasum: "5b699f8e42bc22000c449b193ebbf2d0a67b4ade",
            _spec: "abv-vfs@0.0.3",
            _where: "/home/tondy/abvos/dev/abv-agent",
            author: {
                name: "Todor Angelov",
                email: "abv@tondy.com",
                url: "http://tondy.com"
            },
            bugs: {
                url: "https://github.com/tondy67/abv-vfs/issues"
            },
            bundleDependencies: false,
            dependencies: {
                "abv-events": "0.0.2",
                "abv-ts": "0.0.3",
                "abv-wallet": "0.0.3"
            },
            deprecated: false,
            description: "Abvos virtual file system",
            homepage: "https://github.com/tondy67/abv-vfs#readme",
            keywords: [ "abv", "abvos", "fs", "filesystem" ],
            license: "MIT",
            main: "index.js",
            name: "abv-vfs",
            repository: {
                type: "git",
                url: "git+https://github.com/tondy67/abv-vfs.git"
            },
            scripts: {
                test: 'echo "Error: no test specified" && exit 1'
            },
            version: "0.0.3"
        };
    }, {} ],
    15: [ function(e, t, r) {
        "use strict";
        const i = e("abv-ts")("abv:wallet");
        const n = e("./lib/Wallet.js");
        if (i.isBrowser) {
            if (!window.ts) window.ts = i;
            if (window.abv) window.abv.Wallet = n; else window.abv = {
                Wallet: n
            };
        }
        t.exports = n;
    }, {
        "./lib/Wallet.js": 16,
        "abv-ts": 3
    } ],
    16: [ function(e, t, r) {
        "use strict";
        const i = e("abv-ts")("abv:Wallet");
        const n = new Map();
        const a = 134217728;
        class s {
            constructor(e, t = 32, r = 6e4) {
                if (!e) throw new Error("no name");
                t *= 1048576;
                if (t < 0 || t > a) throw new Error("Limit: 0-" + a);
                this.max = t;
                this.timeout = r;
                this.cache = new Map();
                this.total = 0;
                this.log = [];
                this.ls = 0;
                n.set(e, this);
            }
            err(e) {}
            _purge(e, t) {
                if (!t) return null;
                let r = t.obj;
                if (t.out > 0 && Date.now() > t.out) {
                    this.delete(e);
                    r = null;
                }
                return r;
            }
            purge() {
                for (let [e, t] of this.cache.entries()) this._purge(e, t);
            }
            get(e) {
                if (!this.cache.has(e)) return null;
                const t = this.cache.get(e);
                return this._purge(e, t);
            }
            set(e, t, r = 0) {
                if (!e || !t) return;
                if (!i.is(t.size, i.INT)) throw new TypeError("obj.size?"); else if (t.size < 0) throw new Error("obj.size < 0 ?");
                const n = t.size;
                if (n < 0 || n > this.max) return i.error(61, "size: ", n);
                this.purge();
                if (this.ls + this.total + n > this.max) return this.err({
                    size: this.total,
                    log: this.ls,
                    claim: n
                });
                this.total += t.size;
                const a = r === 0 ? 0 : Date.now() + r;
                this.cache.set(e, {
                    out: a,
                    obj: t
                });
                e = String(e);
                this.ls += e.length;
                this.log.push({
                    key: e,
                    time: Date.now()
                });
            }
            get size() {
                return this.cache.size;
            }
            clear() {
                this.total = 0;
                this.cache.clear();
                this.ls = 0;
                this.log.length = [];
            }
            delete(e) {
                const t = this.cache.get(e);
                if (t) this.total -= t.obj.size;
                return this.cache.delete(e);
            }
            has(e) {
                return this.cache.has(e);
            }
            keys() {
                return this.cache.keys();
            }
            entries() {
                return this.cache.entries();
            }
            static get limit() {
                return a;
            }
            static set limit(e) {
                if (i.is(e, i.INT) && e > 0) a = e;
            }
            static i(e = "") {
                if (e === "") return n;
                return n.get(e);
            }
        }
        t.exports = s;
    }, {
        "abv-ts": 3
    } ],
    17: [ function(e, t, r) {
        var i = r;
        i.bignum = e("bn.js");
        i.define = e("./asn1/api").define;
        i.base = e("./asn1/base");
        i.constants = e("./asn1/constants");
        i.decoders = e("./asn1/decoders");
        i.encoders = e("./asn1/encoders");
    }, {
        "./asn1/api": 18,
        "./asn1/base": 20,
        "./asn1/constants": 24,
        "./asn1/decoders": 26,
        "./asn1/encoders": 29,
        "bn.js": 32
    } ],
    18: [ function(e, t, r) {
        var i = e("../asn1");
        var n = e("inherits");
        var a = r;
        a.define = function e(t, r) {
            return new s(t, r);
        };
        function s(e, t) {
            this.name = e;
            this.body = t;
            this.decoders = {};
            this.encoders = {};
        }
        s.prototype._createNamed = function t(r) {
            var i;
            try {
                i = e("vm").runInThisContext("(function " + this.name + "(entity) {\n" + "  this._initNamed(entity);\n" + "})");
            } catch (e) {
                i = function(e) {
                    this._initNamed(e);
                };
            }
            n(i, r);
            i.prototype._initNamed = function e(t) {
                r.call(this, t);
            };
            return new i(this);
        };
        s.prototype._getDecoder = function e(t) {
            t = t || "der";
            if (!this.decoders.hasOwnProperty(t)) this.decoders[t] = this._createNamed(i.decoders[t]);
            return this.decoders[t];
        };
        s.prototype.decode = function e(t, r, i) {
            return this._getDecoder(r).decode(t, i);
        };
        s.prototype._getEncoder = function e(t) {
            t = t || "der";
            if (!this.encoders.hasOwnProperty(t)) this.encoders[t] = this._createNamed(i.encoders[t]);
            return this.encoders[t];
        };
        s.prototype.encode = function e(t, r, i) {
            return this._getEncoder(r).encode(t, i);
        };
    }, {
        "../asn1": 17,
        inherits: 139,
        vm: 243
    } ],
    19: [ function(e, t, r) {
        var i = e("inherits");
        var n = e("../base").Reporter;
        var a = e("buffer").Buffer;
        function s(e, t) {
            n.call(this, t);
            if (!a.isBuffer(e)) {
                this.error("Input not Buffer");
                return;
            }
            this.base = e;
            this.offset = 0;
            this.length = e.length;
        }
        i(s, n);
        r.DecoderBuffer = s;
        s.prototype.save = function e() {
            return {
                offset: this.offset,
                reporter: n.prototype.save.call(this)
            };
        };
        s.prototype.restore = function e(t) {
            var r = new s(this.base);
            r.offset = t.offset;
            r.length = this.offset;
            this.offset = t.offset;
            n.prototype.restore.call(this, t.reporter);
            return r;
        };
        s.prototype.isEmpty = function e() {
            return this.offset === this.length;
        };
        s.prototype.readUInt8 = function e(t) {
            if (this.offset + 1 <= this.length) return this.base.readUInt8(this.offset++, true); else return this.error(t || "DecoderBuffer overrun");
        };
        s.prototype.skip = function e(t, r) {
            if (!(this.offset + t <= this.length)) return this.error(r || "DecoderBuffer overrun");
            var i = new s(this.base);
            i._reporterState = this._reporterState;
            i.offset = this.offset;
            i.length = this.offset + t;
            this.offset += t;
            return i;
        };
        s.prototype.raw = function e(t) {
            return this.base.slice(t ? t.offset : this.offset, this.length);
        };
        function f(e, t) {
            if (Array.isArray(e)) {
                this.length = 0;
                this.value = e.map(function(e) {
                    if (!(e instanceof f)) e = new f(e, t);
                    this.length += e.length;
                    return e;
                }, this);
            } else if (typeof e === "number") {
                if (!(0 <= e && e <= 255)) return t.error("non-byte EncoderBuffer value");
                this.value = e;
                this.length = 1;
            } else if (typeof e === "string") {
                this.value = e;
                this.length = a.byteLength(e);
            } else if (a.isBuffer(e)) {
                this.value = e;
                this.length = e.length;
            } else {
                return t.error("Unsupported type: " + typeof e);
            }
        }
        r.EncoderBuffer = f;
        f.prototype.join = function e(t, r) {
            if (!t) t = new a(this.length);
            if (!r) r = 0;
            if (this.length === 0) return t;
            if (Array.isArray(this.value)) {
                this.value.forEach(function(e) {
                    e.join(t, r);
                    r += e.length;
                });
            } else {
                if (typeof this.value === "number") t[r] = this.value; else if (typeof this.value === "string") t.write(this.value, r); else if (a.isBuffer(this.value)) this.value.copy(t, r);
                r += this.length;
            }
            return t;
        };
    }, {
        "../base": 20,
        buffer: 65,
        inherits: 139
    } ],
    20: [ function(e, t, r) {
        var i = r;
        i.Reporter = e("./reporter").Reporter;
        i.DecoderBuffer = e("./buffer").DecoderBuffer;
        i.EncoderBuffer = e("./buffer").EncoderBuffer;
        i.Node = e("./node");
    }, {
        "./buffer": 19,
        "./node": 21,
        "./reporter": 22
    } ],
    21: [ function(e, t, r) {
        var i = e("../base").Reporter;
        var n = e("../base").EncoderBuffer;
        var a = e("../base").DecoderBuffer;
        var s = e("minimalistic-assert");
        var f = [ "seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr" ];
        var o = [ "key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains" ].concat(f);
        var c = [ "_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool" ];
        function u(e, t) {
            var r = {};
            this._baseState = r;
            r.enc = e;
            r.parent = t || null;
            r.children = null;
            r.tag = null;
            r.args = null;
            r.reverseArgs = null;
            r.choice = null;
            r.optional = false;
            r.any = false;
            r.obj = false;
            r.use = null;
            r.useDecoder = null;
            r.key = null;
            r["default"] = null;
            r.explicit = null;
            r.implicit = null;
            r.contains = null;
            if (!r.parent) {
                r.children = [];
                this._wrap();
            }
        }
        t.exports = u;
        var h = [ "enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains" ];
        u.prototype.clone = function e() {
            var t = this._baseState;
            var r = {};
            h.forEach(function(e) {
                r[e] = t[e];
            });
            var i = new this.constructor(r.parent);
            i._baseState = r;
            return i;
        };
        u.prototype._wrap = function e() {
            var t = this._baseState;
            o.forEach(function(e) {
                this[e] = function r() {
                    var i = new this.constructor(this);
                    t.children.push(i);
                    return i[e].apply(i, arguments);
                };
            }, this);
        };
        u.prototype._init = function e(t) {
            var r = this._baseState;
            s(r.parent === null);
            t.call(this);
            r.children = r.children.filter(function(e) {
                return e._baseState.parent === this;
            }, this);
            s.equal(r.children.length, 1, "Root node can have only one child");
        };
        u.prototype._useArgs = function e(t) {
            var r = this._baseState;
            var i = t.filter(function(e) {
                return e instanceof this.constructor;
            }, this);
            t = t.filter(function(e) {
                return !(e instanceof this.constructor);
            }, this);
            if (i.length !== 0) {
                s(r.children === null);
                r.children = i;
                i.forEach(function(e) {
                    e._baseState.parent = this;
                }, this);
            }
            if (t.length !== 0) {
                s(r.args === null);
                r.args = t;
                r.reverseArgs = t.map(function(e) {
                    if (typeof e !== "object" || e.constructor !== Object) return e;
                    var t = {};
                    Object.keys(e).forEach(function(r) {
                        if (r == (r | 0)) r |= 0;
                        var i = e[r];
                        t[i] = r;
                    });
                    return t;
                });
            }
        };
        c.forEach(function(e) {
            u.prototype[e] = function t() {
                var r = this._baseState;
                throw new Error(e + " not implemented for encoding: " + r.enc);
            };
        });
        f.forEach(function(e) {
            u.prototype[e] = function t() {
                var r = this._baseState;
                var i = Array.prototype.slice.call(arguments);
                s(r.tag === null);
                r.tag = e;
                this._useArgs(i);
                return this;
            };
        });
        u.prototype.use = function e(t) {
            s(t);
            var r = this._baseState;
            s(r.use === null);
            r.use = t;
            return this;
        };
        u.prototype.optional = function e() {
            var t = this._baseState;
            t.optional = true;
            return this;
        };
        u.prototype.def = function e(t) {
            var r = this._baseState;
            s(r["default"] === null);
            r["default"] = t;
            r.optional = true;
            return this;
        };
        u.prototype.explicit = function e(t) {
            var r = this._baseState;
            s(r.explicit === null && r.implicit === null);
            r.explicit = t;
            return this;
        };
        u.prototype.implicit = function e(t) {
            var r = this._baseState;
            s(r.explicit === null && r.implicit === null);
            r.implicit = t;
            return this;
        };
        u.prototype.obj = function e() {
            var t = this._baseState;
            var r = Array.prototype.slice.call(arguments);
            t.obj = true;
            if (r.length !== 0) this._useArgs(r);
            return this;
        };
        u.prototype.key = function e(t) {
            var r = this._baseState;
            s(r.key === null);
            r.key = t;
            return this;
        };
        u.prototype.any = function e() {
            var t = this._baseState;
            t.any = true;
            return this;
        };
        u.prototype.choice = function e(t) {
            var r = this._baseState;
            s(r.choice === null);
            r.choice = t;
            this._useArgs(Object.keys(t).map(function(e) {
                return t[e];
            }));
            return this;
        };
        u.prototype.contains = function e(t) {
            var r = this._baseState;
            s(r.use === null);
            r.contains = t;
            return this;
        };
        u.prototype._decode = function e(t, r) {
            var i = this._baseState;
            if (i.parent === null) return t.wrapResult(i.children[0]._decode(t, r));
            var n = i["default"];
            var s = true;
            var f = null;
            if (i.key !== null) f = t.enterKey(i.key);
            if (i.optional) {
                var o = null;
                if (i.explicit !== null) o = i.explicit; else if (i.implicit !== null) o = i.implicit; else if (i.tag !== null) o = i.tag;
                if (o === null && !i.any) {
                    var c = t.save();
                    try {
                        if (i.choice === null) this._decodeGeneric(i.tag, t, r); else this._decodeChoice(t, r);
                        s = true;
                    } catch (e) {
                        s = false;
                    }
                    t.restore(c);
                } else {
                    s = this._peekTag(t, o, i.any);
                    if (t.isError(s)) return s;
                }
            }
            var u;
            if (i.obj && s) u = t.enterObject();
            if (s) {
                if (i.explicit !== null) {
                    var h = this._decodeTag(t, i.explicit);
                    if (t.isError(h)) return h;
                    t = h;
                }
                var d = t.offset;
                if (i.use === null && i.choice === null) {
                    if (i.any) var c = t.save();
                    var l = this._decodeTag(t, i.implicit !== null ? i.implicit : i.tag, i.any);
                    if (t.isError(l)) return l;
                    if (i.any) n = t.raw(c); else t = l;
                }
                if (r && r.track && i.tag !== null) r.track(t.path(), d, t.length, "tagged");
                if (r && r.track && i.tag !== null) r.track(t.path(), t.offset, t.length, "content");
                if (i.any) n = n; else if (i.choice === null) n = this._decodeGeneric(i.tag, t, r); else n = this._decodeChoice(t, r);
                if (t.isError(n)) return n;
                if (!i.any && i.choice === null && i.children !== null) {
                    i.children.forEach(function e(i) {
                        i._decode(t, r);
                    });
                }
                if (i.contains && (i.tag === "octstr" || i.tag === "bitstr")) {
                    var p = new a(n);
                    n = this._getUse(i.contains, t._reporterState.obj)._decode(p, r);
                }
            }
            if (i.obj && s) n = t.leaveObject(u);
            if (i.key !== null && (n !== null || s === true)) t.leaveKey(f, i.key, n); else if (f !== null) t.exitKey(f);
            return n;
        };
        u.prototype._decodeGeneric = function e(t, r, i) {
            var n = this._baseState;
            if (t === "seq" || t === "set") return null;
            if (t === "seqof" || t === "setof") return this._decodeList(r, t, n.args[0], i); else if (/str$/.test(t)) return this._decodeStr(r, t, i); else if (t === "objid" && n.args) return this._decodeObjid(r, n.args[0], n.args[1], i); else if (t === "objid") return this._decodeObjid(r, null, null, i); else if (t === "gentime" || t === "utctime") return this._decodeTime(r, t, i); else if (t === "null_") return this._decodeNull(r, i); else if (t === "bool") return this._decodeBool(r, i); else if (t === "objDesc") return this._decodeStr(r, t, i); else if (t === "int" || t === "enum") return this._decodeInt(r, n.args && n.args[0], i);
            if (n.use !== null) {
                return this._getUse(n.use, r._reporterState.obj)._decode(r, i);
            } else {
                return r.error("unknown tag: " + t);
            }
        };
        u.prototype._getUse = function e(t, r) {
            var i = this._baseState;
            i.useDecoder = this._use(t, r);
            s(i.useDecoder._baseState.parent === null);
            i.useDecoder = i.useDecoder._baseState.children[0];
            if (i.implicit !== i.useDecoder._baseState.implicit) {
                i.useDecoder = i.useDecoder.clone();
                i.useDecoder._baseState.implicit = i.implicit;
            }
            return i.useDecoder;
        };
        u.prototype._decodeChoice = function e(t, r) {
            var i = this._baseState;
            var n = null;
            var a = false;
            Object.keys(i.choice).some(function(e) {
                var s = t.save();
                var f = i.choice[e];
                try {
                    var o = f._decode(t, r);
                    if (t.isError(o)) return false;
                    n = {
                        type: e,
                        value: o
                    };
                    a = true;
                } catch (e) {
                    t.restore(s);
                    return false;
                }
                return true;
            }, this);
            if (!a) return t.error("Choice not matched");
            return n;
        };
        u.prototype._createEncoderBuffer = function e(t) {
            return new n(t, this.reporter);
        };
        u.prototype._encode = function e(t, r, i) {
            var n = this._baseState;
            if (n["default"] !== null && n["default"] === t) return;
            var a = this._encodeValue(t, r, i);
            if (a === undefined) return;
            if (this._skipDefault(a, r, i)) return;
            return a;
        };
        u.prototype._encodeValue = function e(t, r, n) {
            var a = this._baseState;
            if (a.parent === null) return a.children[0]._encode(t, r || new i());
            var s = null;
            this.reporter = r;
            if (a.optional && t === undefined) {
                if (a["default"] !== null) t = a["default"]; else return;
            }
            var f = null;
            var o = false;
            if (a.any) {
                s = this._createEncoderBuffer(t);
            } else if (a.choice) {
                s = this._encodeChoice(t, r);
            } else if (a.contains) {
                f = this._getUse(a.contains, n)._encode(t, r);
                o = true;
            } else if (a.children) {
                f = a.children.map(function(e) {
                    if (e._baseState.tag === "null_") return e._encode(null, r, t);
                    if (e._baseState.key === null) return r.error("Child should have a key");
                    var i = r.enterKey(e._baseState.key);
                    if (typeof t !== "object") return r.error("Child expected, but input is not object");
                    var n = e._encode(t[e._baseState.key], r, t);
                    r.leaveKey(i);
                    return n;
                }, this).filter(function(e) {
                    return e;
                });
                f = this._createEncoderBuffer(f);
            } else {
                if (a.tag === "seqof" || a.tag === "setof") {
                    if (!(a.args && a.args.length === 1)) return r.error("Too many args for : " + a.tag);
                    if (!Array.isArray(t)) return r.error("seqof/setof, but data is not Array");
                    var c = this.clone();
                    c._baseState.implicit = null;
                    f = this._createEncoderBuffer(t.map(function(e) {
                        var i = this._baseState;
                        return this._getUse(i.args[0], t)._encode(e, r);
                    }, c));
                } else if (a.use !== null) {
                    s = this._getUse(a.use, n)._encode(t, r);
                } else {
                    f = this._encodePrimitive(a.tag, t);
                    o = true;
                }
            }
            var s;
            if (!a.any && a.choice === null) {
                var u = a.implicit !== null ? a.implicit : a.tag;
                var h = a.implicit === null ? "universal" : "context";
                if (u === null) {
                    if (a.use === null) r.error("Tag could be omitted only for .use()");
                } else {
                    if (a.use === null) s = this._encodeComposite(u, o, h, f);
                }
            }
            if (a.explicit !== null) s = this._encodeComposite(a.explicit, false, "context", s);
            return s;
        };
        u.prototype._encodeChoice = function e(t, r) {
            var i = this._baseState;
            var n = i.choice[t.type];
            if (!n) {
                s(false, t.type + " not found in " + JSON.stringify(Object.keys(i.choice)));
            }
            return n._encode(t.value, r);
        };
        u.prototype._encodePrimitive = function e(t, r) {
            var i = this._baseState;
            if (/str$/.test(t)) return this._encodeStr(r, t); else if (t === "objid" && i.args) return this._encodeObjid(r, i.reverseArgs[0], i.args[1]); else if (t === "objid") return this._encodeObjid(r, null, null); else if (t === "gentime" || t === "utctime") return this._encodeTime(r, t); else if (t === "null_") return this._encodeNull(); else if (t === "int" || t === "enum") return this._encodeInt(r, i.args && i.reverseArgs[0]); else if (t === "bool") return this._encodeBool(r); else if (t === "objDesc") return this._encodeStr(r, t); else throw new Error("Unsupported tag: " + t);
        };
        u.prototype._isNumstr = function e(t) {
            return /^[0-9 ]*$/.test(t);
        };
        u.prototype._isPrintstr = function e(t) {
            return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(t);
        };
    }, {
        "../base": 20,
        "minimalistic-assert": 180
    } ],
    22: [ function(e, t, r) {
        var i = e("inherits");
        function n(e) {
            this._reporterState = {
                obj: null,
                path: [],
                options: e || {},
                errors: []
            };
        }
        r.Reporter = n;
        n.prototype.isError = function e(t) {
            return t instanceof a;
        };
        n.prototype.save = function e() {
            var t = this._reporterState;
            return {
                obj: t.obj,
                pathLen: t.path.length
            };
        };
        n.prototype.restore = function e(t) {
            var r = this._reporterState;
            r.obj = t.obj;
            r.path = r.path.slice(0, t.pathLen);
        };
        n.prototype.enterKey = function e(t) {
            return this._reporterState.path.push(t);
        };
        n.prototype.exitKey = function e(t) {
            var r = this._reporterState;
            r.path = r.path.slice(0, t - 1);
        };
        n.prototype.leaveKey = function e(t, r, i) {
            var n = this._reporterState;
            this.exitKey(t);
            if (n.obj !== null) n.obj[r] = i;
        };
        n.prototype.path = function e() {
            return this._reporterState.path.join("/");
        };
        n.prototype.enterObject = function e() {
            var t = this._reporterState;
            var r = t.obj;
            t.obj = {};
            return r;
        };
        n.prototype.leaveObject = function e(t) {
            var r = this._reporterState;
            var i = r.obj;
            r.obj = t;
            return i;
        };
        n.prototype.error = function e(t) {
            var r;
            var i = this._reporterState;
            var n = t instanceof a;
            if (n) {
                r = t;
            } else {
                r = new a(i.path.map(function(e) {
                    return "[" + JSON.stringify(e) + "]";
                }).join(""), t.message || t, t.stack);
            }
            if (!i.options.partial) throw r;
            if (!n) i.errors.push(r);
            return r;
        };
        n.prototype.wrapResult = function e(t) {
            var r = this._reporterState;
            if (!r.options.partial) return t;
            return {
                result: this.isError(t) ? null : t,
                errors: r.errors
            };
        };
        function a(e, t) {
            this.path = e;
            this.rethrow(t);
        }
        i(a, Error);
        a.prototype.rethrow = function e(t) {
            this.message = t + " at: " + (this.path || "(shallow)");
            if (Error.captureStackTrace) Error.captureStackTrace(this, a);
            if (!this.stack) {
                try {
                    throw new Error(this.message);
                } catch (e) {
                    this.stack = e.stack;
                }
            }
            return this;
        };
    }, {
        inherits: 139
    } ],
    23: [ function(e, t, r) {
        var i = e("../constants");
        r.tagClass = {
            0: "universal",
            1: "application",
            2: "context",
            3: "private"
        };
        r.tagClassByName = i._reverse(r.tagClass);
        r.tag = {
            0: "end",
            1: "bool",
            2: "int",
            3: "bitstr",
            4: "octstr",
            5: "null_",
            6: "objid",
            7: "objDesc",
            8: "external",
            9: "real",
            10: "enum",
            11: "embed",
            12: "utf8str",
            13: "relativeOid",
            16: "seq",
            17: "set",
            18: "numstr",
            19: "printstr",
            20: "t61str",
            21: "videostr",
            22: "ia5str",
            23: "utctime",
            24: "gentime",
            25: "graphstr",
            26: "iso646str",
            27: "genstr",
            28: "unistr",
            29: "charstr",
            30: "bmpstr"
        };
        r.tagByName = i._reverse(r.tag);
    }, {
        "../constants": 24
    } ],
    24: [ function(e, t, r) {
        var i = r;
        i._reverse = function e(t) {
            var r = {};
            Object.keys(t).forEach(function(e) {
                if ((e | 0) == e) e = e | 0;
                var i = t[e];
                r[i] = e;
            });
            return r;
        };
        i.der = e("./der");
    }, {
        "./der": 23
    } ],
    25: [ function(e, t, r) {
        var i = e("inherits");
        var n = e("../../asn1");
        var a = n.base;
        var s = n.bignum;
        var f = n.constants.der;
        function o(e) {
            this.enc = "der";
            this.name = e.name;
            this.entity = e;
            this.tree = new c();
            this.tree._init(e.body);
        }
        t.exports = o;
        o.prototype.decode = function e(t, r) {
            if (!(t instanceof a.DecoderBuffer)) t = new a.DecoderBuffer(t, r);
            return this.tree._decode(t, r);
        };
        function c(e) {
            a.Node.call(this, "der", e);
        }
        i(c, a.Node);
        c.prototype._peekTag = function e(t, r, i) {
            if (t.isEmpty()) return false;
            var n = t.save();
            var a = u(t, 'Failed to peek tag: "' + r + '"');
            if (t.isError(a)) return a;
            t.restore(n);
            return a.tag === r || a.tagStr === r || a.tagStr + "of" === r || i;
        };
        c.prototype._decodeTag = function e(t, r, i) {
            var n = u(t, 'Failed to decode tag of "' + r + '"');
            if (t.isError(n)) return n;
            var a = h(t, n.primitive, 'Failed to get length of "' + r + '"');
            if (t.isError(a)) return a;
            if (!i && n.tag !== r && n.tagStr !== r && n.tagStr + "of" !== r) {
                return t.error('Failed to match tag: "' + r + '"');
            }
            if (n.primitive || a !== null) return t.skip(a, 'Failed to match body of: "' + r + '"');
            var s = t.save();
            var f = this._skipUntilEnd(t, 'Failed to skip indefinite length body: "' + this.tag + '"');
            if (t.isError(f)) return f;
            a = t.offset - s.offset;
            t.restore(s);
            return t.skip(a, 'Failed to match body of: "' + r + '"');
        };
        c.prototype._skipUntilEnd = function e(t, r) {
            while (true) {
                var i = u(t, r);
                if (t.isError(i)) return i;
                var n = h(t, i.primitive, r);
                if (t.isError(n)) return n;
                var a;
                if (i.primitive || n !== null) a = t.skip(n); else a = this._skipUntilEnd(t, r);
                if (t.isError(a)) return a;
                if (i.tagStr === "end") break;
            }
        };
        c.prototype._decodeList = function e(t, r, i, n) {
            var a = [];
            while (!t.isEmpty()) {
                var s = this._peekTag(t, "end");
                if (t.isError(s)) return s;
                var f = i.decode(t, "der", n);
                if (t.isError(f) && s) break;
                a.push(f);
            }
            return a;
        };
        c.prototype._decodeStr = function e(t, r) {
            if (r === "bitstr") {
                var i = t.readUInt8();
                if (t.isError(i)) return i;
                return {
                    unused: i,
                    data: t.raw()
                };
            } else if (r === "bmpstr") {
                var n = t.raw();
                if (n.length % 2 === 1) return t.error("Decoding of string type: bmpstr length mismatch");
                var a = "";
                for (var s = 0; s < n.length / 2; s++) {
                    a += String.fromCharCode(n.readUInt16BE(s * 2));
                }
                return a;
            } else if (r === "numstr") {
                var f = t.raw().toString("ascii");
                if (!this._isNumstr(f)) {
                    return t.error("Decoding of string type: " + "numstr unsupported characters");
                }
                return f;
            } else if (r === "octstr") {
                return t.raw();
            } else if (r === "objDesc") {
                return t.raw();
            } else if (r === "printstr") {
                var o = t.raw().toString("ascii");
                if (!this._isPrintstr(o)) {
                    return t.error("Decoding of string type: " + "printstr unsupported characters");
                }
                return o;
            } else if (/str$/.test(r)) {
                return t.raw().toString();
            } else {
                return t.error("Decoding of string type: " + r + " unsupported");
            }
        };
        c.prototype._decodeObjid = function e(t, r, i) {
            var n;
            var a = [];
            var s = 0;
            while (!t.isEmpty()) {
                var f = t.readUInt8();
                s <<= 7;
                s |= f & 127;
                if ((f & 128) === 0) {
                    a.push(s);
                    s = 0;
                }
            }
            if (f & 128) a.push(s);
            var o = a[0] / 40 | 0;
            var c = a[0] % 40;
            if (i) n = a; else n = [ o, c ].concat(a.slice(1));
            if (r) {
                var u = r[n.join(" ")];
                if (u === undefined) u = r[n.join(".")];
                if (u !== undefined) n = u;
            }
            return n;
        };
        c.prototype._decodeTime = function e(t, r) {
            var i = t.raw().toString();
            if (r === "gentime") {
                var n = i.slice(0, 4) | 0;
                var a = i.slice(4, 6) | 0;
                var s = i.slice(6, 8) | 0;
                var f = i.slice(8, 10) | 0;
                var o = i.slice(10, 12) | 0;
                var c = i.slice(12, 14) | 0;
            } else if (r === "utctime") {
                var n = i.slice(0, 2) | 0;
                var a = i.slice(2, 4) | 0;
                var s = i.slice(4, 6) | 0;
                var f = i.slice(6, 8) | 0;
                var o = i.slice(8, 10) | 0;
                var c = i.slice(10, 12) | 0;
                if (n < 70) n = 2e3 + n; else n = 1900 + n;
            } else {
                return t.error("Decoding " + r + " time is not supported yet");
            }
            return Date.UTC(n, a - 1, s, f, o, c, 0);
        };
        c.prototype._decodeNull = function e(t) {
            return null;
        };
        c.prototype._decodeBool = function e(t) {
            var r = t.readUInt8();
            if (t.isError(r)) return r; else return r !== 0;
        };
        c.prototype._decodeInt = function e(t, r) {
            var i = t.raw();
            var n = new s(i);
            if (r) n = r[n.toString(10)] || n;
            return n;
        };
        c.prototype._use = function e(t, r) {
            if (typeof t === "function") t = t(r);
            return t._getDecoder("der").tree;
        };
        function u(e, t) {
            var r = e.readUInt8(t);
            if (e.isError(r)) return r;
            var i = f.tagClass[r >> 6];
            var n = (r & 32) === 0;
            if ((r & 31) === 31) {
                var a = r;
                r = 0;
                while ((a & 128) === 128) {
                    a = e.readUInt8(t);
                    if (e.isError(a)) return a;
                    r <<= 7;
                    r |= a & 127;
                }
            } else {
                r &= 31;
            }
            var s = f.tag[r];
            return {
                cls: i,
                primitive: n,
                tag: r,
                tagStr: s
            };
        }
        function h(e, t, r) {
            var i = e.readUInt8(r);
            if (e.isError(i)) return i;
            if (!t && i === 128) return null;
            if ((i & 128) === 0) {
                return i;
            }
            var n = i & 127;
            if (n > 4) return e.error("length octect is too long");
            i = 0;
            for (var a = 0; a < n; a++) {
                i <<= 8;
                var s = e.readUInt8(r);
                if (e.isError(s)) return s;
                i |= s;
            }
            return i;
        }
    }, {
        "../../asn1": 17,
        inherits: 139
    } ],
    26: [ function(e, t, r) {
        var i = r;
        i.der = e("./der");
        i.pem = e("./pem");
    }, {
        "./der": 25,
        "./pem": 27
    } ],
    27: [ function(e, t, r) {
        var i = e("inherits");
        var n = e("buffer").Buffer;
        var a = e("./der");
        function s(e) {
            a.call(this, e);
            this.enc = "pem";
        }
        i(s, a);
        t.exports = s;
        s.prototype.decode = function e(t, r) {
            var i = t.toString().split(/[\r\n]+/g);
            var s = r.label.toUpperCase();
            var f = /^-----(BEGIN|END) ([^-]+)-----$/;
            var o = -1;
            var c = -1;
            for (var u = 0; u < i.length; u++) {
                var h = i[u].match(f);
                if (h === null) continue;
                if (h[2] !== s) continue;
                if (o === -1) {
                    if (h[1] !== "BEGIN") break;
                    o = u;
                } else {
                    if (h[1] !== "END") break;
                    c = u;
                    break;
                }
            }
            if (o === -1 || c === -1) throw new Error("PEM section not found for: " + s);
            var d = i.slice(o + 1, c).join("");
            d.replace(/[^a-z0-9\+\/=]+/gi, "");
            var l = new n(d, "base64");
            return a.prototype.decode.call(this, l, r);
        };
    }, {
        "./der": 25,
        buffer: 65,
        inherits: 139
    } ],
    28: [ function(e, t, r) {
        var i = e("inherits");
        var n = e("buffer").Buffer;
        var a = e("../../asn1");
        var s = a.base;
        var f = a.constants.der;
        function o(e) {
            this.enc = "der";
            this.name = e.name;
            this.entity = e;
            this.tree = new c();
            this.tree._init(e.body);
        }
        t.exports = o;
        o.prototype.encode = function e(t, r) {
            return this.tree._encode(t, r).join();
        };
        function c(e) {
            s.Node.call(this, "der", e);
        }
        i(c, s.Node);
        c.prototype._encodeComposite = function e(t, r, i, a) {
            var s = h(t, r, i, this.reporter);
            if (a.length < 128) {
                var f = new n(2);
                f[0] = s;
                f[1] = a.length;
                return this._createEncoderBuffer([ f, a ]);
            }
            var o = 1;
            for (var c = a.length; c >= 256; c >>= 8) o++;
            var f = new n(1 + 1 + o);
            f[0] = s;
            f[1] = 128 | o;
            for (var c = 1 + o, u = a.length; u > 0; c--, u >>= 8) f[c] = u & 255;
            return this._createEncoderBuffer([ f, a ]);
        };
        c.prototype._encodeStr = function e(t, r) {
            if (r === "bitstr") {
                return this._createEncoderBuffer([ t.unused | 0, t.data ]);
            } else if (r === "bmpstr") {
                var i = new n(t.length * 2);
                for (var a = 0; a < t.length; a++) {
                    i.writeUInt16BE(t.charCodeAt(a), a * 2);
                }
                return this._createEncoderBuffer(i);
            } else if (r === "numstr") {
                if (!this._isNumstr(t)) {
                    return this.reporter.error("Encoding of string type: numstr supports " + "only digits and space");
                }
                return this._createEncoderBuffer(t);
            } else if (r === "printstr") {
                if (!this._isPrintstr(t)) {
                    return this.reporter.error("Encoding of string type: printstr supports " + "only latin upper and lower case letters, " + "digits, space, apostrophe, left and rigth " + "parenthesis, plus sign, comma, hyphen, " + "dot, slash, colon, equal sign, " + "question mark");
                }
                return this._createEncoderBuffer(t);
            } else if (/str$/.test(r)) {
                return this._createEncoderBuffer(t);
            } else if (r === "objDesc") {
                return this._createEncoderBuffer(t);
            } else {
                return this.reporter.error("Encoding of string type: " + r + " unsupported");
            }
        };
        c.prototype._encodeObjid = function e(t, r, i) {
            if (typeof t === "string") {
                if (!r) return this.reporter.error("string objid given, but no values map found");
                if (!r.hasOwnProperty(t)) return this.reporter.error("objid not found in values map");
                t = r[t].split(/[\s\.]+/g);
                for (var a = 0; a < t.length; a++) t[a] |= 0;
            } else if (Array.isArray(t)) {
                t = t.slice();
                for (var a = 0; a < t.length; a++) t[a] |= 0;
            }
            if (!Array.isArray(t)) {
                return this.reporter.error("objid() should be either array or string, " + "got: " + JSON.stringify(t));
            }
            if (!i) {
                if (t[1] >= 40) return this.reporter.error("Second objid identifier OOB");
                t.splice(0, 2, t[0] * 40 + t[1]);
            }
            var s = 0;
            for (var a = 0; a < t.length; a++) {
                var f = t[a];
                for (s++; f >= 128; f >>= 7) s++;
            }
            var o = new n(s);
            var c = o.length - 1;
            for (var a = t.length - 1; a >= 0; a--) {
                var f = t[a];
                o[c--] = f & 127;
                while ((f >>= 7) > 0) o[c--] = 128 | f & 127;
            }
            return this._createEncoderBuffer(o);
        };
        function u(e) {
            if (e < 10) return "0" + e; else return e;
        }
        c.prototype._encodeTime = function e(t, r) {
            var i;
            var n = new Date(t);
            if (r === "gentime") {
                i = [ u(n.getFullYear()), u(n.getUTCMonth() + 1), u(n.getUTCDate()), u(n.getUTCHours()), u(n.getUTCMinutes()), u(n.getUTCSeconds()), "Z" ].join("");
            } else if (r === "utctime") {
                i = [ u(n.getFullYear() % 100), u(n.getUTCMonth() + 1), u(n.getUTCDate()), u(n.getUTCHours()), u(n.getUTCMinutes()), u(n.getUTCSeconds()), "Z" ].join("");
            } else {
                this.reporter.error("Encoding " + r + " time is not supported yet");
            }
            return this._encodeStr(i, "octstr");
        };
        c.prototype._encodeNull = function e() {
            return this._createEncoderBuffer("");
        };
        c.prototype._encodeInt = function e(t, r) {
            if (typeof t === "string") {
                if (!r) return this.reporter.error("String int or enum given, but no values map");
                if (!r.hasOwnProperty(t)) {
                    return this.reporter.error("Values map doesn't contain: " + JSON.stringify(t));
                }
                t = r[t];
            }
            if (typeof t !== "number" && !n.isBuffer(t)) {
                var i = t.toArray();
                if (!t.sign && i[0] & 128) {
                    i.unshift(0);
                }
                t = new n(i);
            }
            if (n.isBuffer(t)) {
                var a = t.length;
                if (t.length === 0) a++;
                var s = new n(a);
                t.copy(s);
                if (t.length === 0) s[0] = 0;
                return this._createEncoderBuffer(s);
            }
            if (t < 128) return this._createEncoderBuffer(t);
            if (t < 256) return this._createEncoderBuffer([ 0, t ]);
            var a = 1;
            for (var f = t; f >= 256; f >>= 8) a++;
            var s = new Array(a);
            for (var f = s.length - 1; f >= 0; f--) {
                s[f] = t & 255;
                t >>= 8;
            }
            if (s[0] & 128) {
                s.unshift(0);
            }
            return this._createEncoderBuffer(new n(s));
        };
        c.prototype._encodeBool = function e(t) {
            return this._createEncoderBuffer(t ? 255 : 0);
        };
        c.prototype._use = function e(t, r) {
            if (typeof t === "function") t = t(r);
            return t._getEncoder("der").tree;
        };
        c.prototype._skipDefault = function e(t, r, i) {
            var n = this._baseState;
            var a;
            if (n["default"] === null) return false;
            var s = t.join();
            if (n.defaultBuffer === undefined) n.defaultBuffer = this._encodeValue(n["default"], r, i).join();
            if (s.length !== n.defaultBuffer.length) return false;
            for (a = 0; a < s.length; a++) if (s[a] !== n.defaultBuffer[a]) return false;
            return true;
        };
        function h(e, t, r, i) {
            var n;
            if (e === "seqof") e = "seq"; else if (e === "setof") e = "set";
            if (f.tagByName.hasOwnProperty(e)) n = f.tagByName[e]; else if (typeof e === "number" && (e | 0) === e) n = e; else return i.error("Unknown tag: " + e);
            if (n >= 31) return i.error("Multi-octet tag encoding unsupported");
            if (!t) n |= 32;
            n |= f.tagClassByName[r || "universal"] << 6;
            return n;
        }
    }, {
        "../../asn1": 17,
        buffer: 65,
        inherits: 139
    } ],
    29: [ function(e, t, r) {
        var i = r;
        i.der = e("./der");
        i.pem = e("./pem");
    }, {
        "./der": 28,
        "./pem": 30
    } ],
    30: [ function(e, t, r) {
        var i = e("inherits");
        var n = e("./der");
        function a(e) {
            n.call(this, e);
            this.enc = "pem";
        }
        i(a, n);
        t.exports = a;
        a.prototype.encode = function e(t, r) {
            var i = n.prototype.encode.call(this, t);
            var a = i.toString("base64");
            var s = [ "-----BEGIN " + r.label + "-----" ];
            for (var f = 0; f < a.length; f += 64) s.push(a.slice(f, f + 64));
            s.push("-----END " + r.label + "-----");
            return s.join("\n");
        };
    }, {
        "./der": 28,
        inherits: 139
    } ],
    31: [ function(e, t, r) {
        "use strict";
        r.byteLength = u;
        r.toByteArray = d;
        r.fromByteArray = v;
        var i = [];
        var n = [];
        var a = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
        var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (var f = 0, o = s.length; f < o; ++f) {
            i[f] = s[f];
            n[s.charCodeAt(f)] = f;
        }
        n["-".charCodeAt(0)] = 62;
        n["_".charCodeAt(0)] = 63;
        function c(e) {
            var t = e.length;
            if (t % 4 > 0) {
                throw new Error("Invalid string. Length must be a multiple of 4");
            }
            var r = e.indexOf("=");
            if (r === -1) r = t;
            var i = r === t ? 0 : 4 - r % 4;
            return [ r, i ];
        }
        function u(e) {
            var t = c(e);
            var r = t[0];
            var i = t[1];
            return (r + i) * 3 / 4 - i;
        }
        function h(e, t, r) {
            return (t + r) * 3 / 4 - r;
        }
        function d(e) {
            var t;
            var r = c(e);
            var i = r[0];
            var s = r[1];
            var f = new a(h(e, i, s));
            var o = 0;
            var u = s > 0 ? i - 4 : i;
            for (var d = 0; d < u; d += 4) {
                t = n[e.charCodeAt(d)] << 18 | n[e.charCodeAt(d + 1)] << 12 | n[e.charCodeAt(d + 2)] << 6 | n[e.charCodeAt(d + 3)];
                f[o++] = t >> 16 & 255;
                f[o++] = t >> 8 & 255;
                f[o++] = t & 255;
            }
            if (s === 2) {
                t = n[e.charCodeAt(d)] << 2 | n[e.charCodeAt(d + 1)] >> 4;
                f[o++] = t & 255;
            }
            if (s === 1) {
                t = n[e.charCodeAt(d)] << 10 | n[e.charCodeAt(d + 1)] << 4 | n[e.charCodeAt(d + 2)] >> 2;
                f[o++] = t >> 8 & 255;
                f[o++] = t & 255;
            }
            return f;
        }
        function l(e) {
            return i[e >> 18 & 63] + i[e >> 12 & 63] + i[e >> 6 & 63] + i[e & 63];
        }
        function p(e, t, r) {
            var i;
            var n = [];
            for (var a = t; a < r; a += 3) {
                i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (e[a + 2] & 255);
                n.push(l(i));
            }
            return n.join("");
        }
        function v(e) {
            var t;
            var r = e.length;
            var n = r % 3;
            var a = [];
            var s = 16383;
            for (var f = 0, o = r - n; f < o; f += s) {
                a.push(p(e, f, f + s > o ? o : f + s));
            }
            if (n === 1) {
                t = e[r - 1];
                a.push(i[t >> 2] + i[t << 4 & 63] + "==");
            } else if (n === 2) {
                t = (e[r - 2] << 8) + e[r - 1];
                a.push(i[t >> 10] + i[t >> 4 & 63] + i[t << 2 & 63] + "=");
            }
            return a.join("");
        }
    }, {} ],
    32: [ function(e, t, r) {
        (function(t, r) {
            "use strict";
            function i(e, t) {
                if (!e) throw new Error(t || "Assertion failed");
            }
            function n(e, t) {
                e.super_ = t;
                var r = function() {};
                r.prototype = t.prototype;
                e.prototype = new r();
                e.prototype.constructor = e;
            }
            function a(e, t, r) {
                if (a.isBN(e)) {
                    return e;
                }
                this.negative = 0;
                this.words = null;
                this.length = 0;
                this.red = null;
                if (e !== null) {
                    if (t === "le" || t === "be") {
                        r = t;
                        t = 10;
                    }
                    this._init(e || 0, t || 10, r || "be");
                }
            }
            if (typeof t === "object") {
                t.exports = a;
            } else {
                r.BN = a;
            }
            a.BN = a;
            a.wordSize = 26;
            var s;
            try {
                s = e("buffer").Buffer;
            } catch (e) {}
            a.isBN = function e(t) {
                if (t instanceof a) {
                    return true;
                }
                return t !== null && typeof t === "object" && t.constructor.wordSize === a.wordSize && Array.isArray(t.words);
            };
            a.max = function e(t, r) {
                if (t.cmp(r) > 0) return t;
                return r;
            };
            a.min = function e(t, r) {
                if (t.cmp(r) < 0) return t;
                return r;
            };
            a.prototype._init = function e(t, r, n) {
                if (typeof t === "number") {
                    return this._initNumber(t, r, n);
                }
                if (typeof t === "object") {
                    return this._initArray(t, r, n);
                }
                if (r === "hex") {
                    r = 16;
                }
                i(r === (r | 0) && r >= 2 && r <= 36);
                t = t.toString().replace(/\s+/g, "");
                var a = 0;
                if (t[0] === "-") {
                    a++;
                }
                if (r === 16) {
                    this._parseHex(t, a);
                } else {
                    this._parseBase(t, r, a);
                }
                if (t[0] === "-") {
                    this.negative = 1;
                }
                this.strip();
                if (n !== "le") return;
                this._initArray(this.toArray(), r, n);
            };
            a.prototype._initNumber = function e(t, r, n) {
                if (t < 0) {
                    this.negative = 1;
                    t = -t;
                }
                if (t < 67108864) {
                    this.words = [ t & 67108863 ];
                    this.length = 1;
                } else if (t < 4503599627370496) {
                    this.words = [ t & 67108863, t / 67108864 & 67108863 ];
                    this.length = 2;
                } else {
                    i(t < 9007199254740992);
                    this.words = [ t & 67108863, t / 67108864 & 67108863, 1 ];
                    this.length = 3;
                }
                if (n !== "le") return;
                this._initArray(this.toArray(), r, n);
            };
            a.prototype._initArray = function e(t, r, n) {
                i(typeof t.length === "number");
                if (t.length <= 0) {
                    this.words = [ 0 ];
                    this.length = 1;
                    return this;
                }
                this.length = Math.ceil(t.length / 3);
                this.words = new Array(this.length);
                for (var a = 0; a < this.length; a++) {
                    this.words[a] = 0;
                }
                var s, f;
                var o = 0;
                if (n === "be") {
                    for (a = t.length - 1, s = 0; a >= 0; a -= 3) {
                        f = t[a] | t[a - 1] << 8 | t[a - 2] << 16;
                        this.words[s] |= f << o & 67108863;
                        this.words[s + 1] = f >>> 26 - o & 67108863;
                        o += 24;
                        if (o >= 26) {
                            o -= 26;
                            s++;
                        }
                    }
                } else if (n === "le") {
                    for (a = 0, s = 0; a < t.length; a += 3) {
                        f = t[a] | t[a + 1] << 8 | t[a + 2] << 16;
                        this.words[s] |= f << o & 67108863;
                        this.words[s + 1] = f >>> 26 - o & 67108863;
                        o += 24;
                        if (o >= 26) {
                            o -= 26;
                            s++;
                        }
                    }
                }
                return this.strip();
            };
            function f(e, t, r) {
                var i = 0;
                var n = Math.min(e.length, r);
                for (var a = t; a < n; a++) {
                    var s = e.charCodeAt(a) - 48;
                    i <<= 4;
                    if (s >= 49 && s <= 54) {
                        i |= s - 49 + 10;
                    } else if (s >= 17 && s <= 22) {
                        i |= s - 17 + 10;
                    } else {
                        i |= s & 15;
                    }
                }
                return i;
            }
            a.prototype._parseHex = function e(t, r) {
                this.length = Math.ceil((t.length - r) / 6);
                this.words = new Array(this.length);
                for (var i = 0; i < this.length; i++) {
                    this.words[i] = 0;
                }
                var n, a;
                var s = 0;
                for (i = t.length - 6, n = 0; i >= r; i -= 6) {
                    a = f(t, i, i + 6);
                    this.words[n] |= a << s & 67108863;
                    this.words[n + 1] |= a >>> 26 - s & 4194303;
                    s += 24;
                    if (s >= 26) {
                        s -= 26;
                        n++;
                    }
                }
                if (i + 6 !== r) {
                    a = f(t, r, i + 6);
                    this.words[n] |= a << s & 67108863;
                    this.words[n + 1] |= a >>> 26 - s & 4194303;
                }
                this.strip();
            };
            function o(e, t, r, i) {
                var n = 0;
                var a = Math.min(e.length, r);
                for (var s = t; s < a; s++) {
                    var f = e.charCodeAt(s) - 48;
                    n *= i;
                    if (f >= 49) {
                        n += f - 49 + 10;
                    } else if (f >= 17) {
                        n += f - 17 + 10;
                    } else {
                        n += f;
                    }
                }
                return n;
            }
            a.prototype._parseBase = function e(t, r, i) {
                this.words = [ 0 ];
                this.length = 1;
                for (var n = 0, a = 1; a <= 67108863; a *= r) {
                    n++;
                }
                n--;
                a = a / r | 0;
                var s = t.length - i;
                var f = s % n;
                var c = Math.min(s, s - f) + i;
                var u = 0;
                for (var h = i; h < c; h += n) {
                    u = o(t, h, h + n, r);
                    this.imuln(a);
                    if (this.words[0] + u < 67108864) {
                        this.words[0] += u;
                    } else {
                        this._iaddn(u);
                    }
                }
                if (f !== 0) {
                    var d = 1;
                    u = o(t, h, t.length, r);
                    for (h = 0; h < f; h++) {
                        d *= r;
                    }
                    this.imuln(d);
                    if (this.words[0] + u < 67108864) {
                        this.words[0] += u;
                    } else {
                        this._iaddn(u);
                    }
                }
            };
            a.prototype.copy = function e(t) {
                t.words = new Array(this.length);
                for (var r = 0; r < this.length; r++) {
                    t.words[r] = this.words[r];
                }
                t.length = this.length;
                t.negative = this.negative;
                t.red = this.red;
            };
            a.prototype.clone = function e() {
                var t = new a(null);
                this.copy(t);
                return t;
            };
            a.prototype._expand = function e(t) {
                while (this.length < t) {
                    this.words[this.length++] = 0;
                }
                return this;
            };
            a.prototype.strip = function e() {
                while (this.length > 1 && this.words[this.length - 1] === 0) {
                    this.length--;
                }
                return this._normSign();
            };
            a.prototype._normSign = function e() {
                if (this.length === 1 && this.words[0] === 0) {
                    this.negative = 0;
                }
                return this;
            };
            a.prototype.inspect = function e() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
            };
            var c = [ "", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000" ];
            var u = [ 0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ];
            var h = [ 0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176 ];
            a.prototype.toString = function e(t, r) {
                t = t || 10;
                r = r | 0 || 1;
                var n;
                if (t === 16 || t === "hex") {
                    n = "";
                    var a = 0;
                    var s = 0;
                    for (var f = 0; f < this.length; f++) {
                        var o = this.words[f];
                        var d = ((o << a | s) & 16777215).toString(16);
                        s = o >>> 24 - a & 16777215;
                        if (s !== 0 || f !== this.length - 1) {
                            n = c[6 - d.length] + d + n;
                        } else {
                            n = d + n;
                        }
                        a += 2;
                        if (a >= 26) {
                            a -= 26;
                            f--;
                        }
                    }
                    if (s !== 0) {
                        n = s.toString(16) + n;
                    }
                    while (n.length % r !== 0) {
                        n = "0" + n;
                    }
                    if (this.negative !== 0) {
                        n = "-" + n;
                    }
                    return n;
                }
                if (t === (t | 0) && t >= 2 && t <= 36) {
                    var l = u[t];
                    var p = h[t];
                    n = "";
                    var v = this.clone();
                    v.negative = 0;
                    while (!v.isZero()) {
                        var b = v.modn(p).toString(t);
                        v = v.idivn(p);
                        if (!v.isZero()) {
                            n = c[l - b.length] + b + n;
                        } else {
                            n = b + n;
                        }
                    }
                    if (this.isZero()) {
                        n = "0" + n;
                    }
                    while (n.length % r !== 0) {
                        n = "0" + n;
                    }
                    if (this.negative !== 0) {
                        n = "-" + n;
                    }
                    return n;
                }
                i(false, "Base should be between 2 and 36");
            };
            a.prototype.toNumber = function e() {
                var t = this.words[0];
                if (this.length === 2) {
                    t += this.words[1] * 67108864;
                } else if (this.length === 3 && this.words[2] === 1) {
                    t += 4503599627370496 + this.words[1] * 67108864;
                } else if (this.length > 2) {
                    i(false, "Number can only safely store up to 53 bits");
                }
                return this.negative !== 0 ? -t : t;
            };
            a.prototype.toJSON = function e() {
                return this.toString(16);
            };
            a.prototype.toBuffer = function e(t, r) {
                i(typeof s !== "undefined");
                return this.toArrayLike(s, t, r);
            };
            a.prototype.toArray = function e(t, r) {
                return this.toArrayLike(Array, t, r);
            };
            a.prototype.toArrayLike = function e(t, r, n) {
                var a = this.byteLength();
                var s = n || Math.max(1, a);
                i(a <= s, "byte array longer than desired length");
                i(s > 0, "Requested array length <= 0");
                this.strip();
                var f = r === "le";
                var o = new t(s);
                var c, u;
                var h = this.clone();
                if (!f) {
                    for (u = 0; u < s - a; u++) {
                        o[u] = 0;
                    }
                    for (u = 0; !h.isZero(); u++) {
                        c = h.andln(255);
                        h.iushrn(8);
                        o[s - u - 1] = c;
                    }
                } else {
                    for (u = 0; !h.isZero(); u++) {
                        c = h.andln(255);
                        h.iushrn(8);
                        o[u] = c;
                    }
                    for (;u < s; u++) {
                        o[u] = 0;
                    }
                }
                return o;
            };
            if (Math.clz32) {
                a.prototype._countBits = function e(t) {
                    return 32 - Math.clz32(t);
                };
            } else {
                a.prototype._countBits = function e(t) {
                    var r = t;
                    var i = 0;
                    if (r >= 4096) {
                        i += 13;
                        r >>>= 13;
                    }
                    if (r >= 64) {
                        i += 7;
                        r >>>= 7;
                    }
                    if (r >= 8) {
                        i += 4;
                        r >>>= 4;
                    }
                    if (r >= 2) {
                        i += 2;
                        r >>>= 2;
                    }
                    return i + r;
                };
            }
            a.prototype._zeroBits = function e(t) {
                if (t === 0) return 26;
                var r = t;
                var i = 0;
                if ((r & 8191) === 0) {
                    i += 13;
                    r >>>= 13;
                }
                if ((r & 127) === 0) {
                    i += 7;
                    r >>>= 7;
                }
                if ((r & 15) === 0) {
                    i += 4;
                    r >>>= 4;
                }
                if ((r & 3) === 0) {
                    i += 2;
                    r >>>= 2;
                }
                if ((r & 1) === 0) {
                    i++;
                }
                return i;
            };
            a.prototype.bitLength = function e() {
                var t = this.words[this.length - 1];
                var r = this._countBits(t);
                return (this.length - 1) * 26 + r;
            };
            function d(e) {
                var t = new Array(e.bitLength());
                for (var r = 0; r < t.length; r++) {
                    var i = r / 26 | 0;
                    var n = r % 26;
                    t[r] = (e.words[i] & 1 << n) >>> n;
                }
                return t;
            }
            a.prototype.zeroBits = function e() {
                if (this.isZero()) return 0;
                var t = 0;
                for (var r = 0; r < this.length; r++) {
                    var i = this._zeroBits(this.words[r]);
                    t += i;
                    if (i !== 26) break;
                }
                return t;
            };
            a.prototype.byteLength = function e() {
                return Math.ceil(this.bitLength() / 8);
            };
            a.prototype.toTwos = function e(t) {
                if (this.negative !== 0) {
                    return this.abs().inotn(t).iaddn(1);
                }
                return this.clone();
            };
            a.prototype.fromTwos = function e(t) {
                if (this.testn(t - 1)) {
                    return this.notn(t).iaddn(1).ineg();
                }
                return this.clone();
            };
            a.prototype.isNeg = function e() {
                return this.negative !== 0;
            };
            a.prototype.neg = function e() {
                return this.clone().ineg();
            };
            a.prototype.ineg = function e() {
                if (!this.isZero()) {
                    this.negative ^= 1;
                }
                return this;
            };
            a.prototype.iuor = function e(t) {
                while (this.length < t.length) {
                    this.words[this.length++] = 0;
                }
                for (var r = 0; r < t.length; r++) {
                    this.words[r] = this.words[r] | t.words[r];
                }
                return this.strip();
            };
            a.prototype.ior = function e(t) {
                i((this.negative | t.negative) === 0);
                return this.iuor(t);
            };
            a.prototype.or = function e(t) {
                if (this.length > t.length) return this.clone().ior(t);
                return t.clone().ior(this);
            };
            a.prototype.uor = function e(t) {
                if (this.length > t.length) return this.clone().iuor(t);
                return t.clone().iuor(this);
            };
            a.prototype.iuand = function e(t) {
                var r;
                if (this.length > t.length) {
                    r = t;
                } else {
                    r = this;
                }
                for (var i = 0; i < r.length; i++) {
                    this.words[i] = this.words[i] & t.words[i];
                }
                this.length = r.length;
                return this.strip();
            };
            a.prototype.iand = function e(t) {
                i((this.negative | t.negative) === 0);
                return this.iuand(t);
            };
            a.prototype.and = function e(t) {
                if (this.length > t.length) return this.clone().iand(t);
                return t.clone().iand(this);
            };
            a.prototype.uand = function e(t) {
                if (this.length > t.length) return this.clone().iuand(t);
                return t.clone().iuand(this);
            };
            a.prototype.iuxor = function e(t) {
                var r;
                var i;
                if (this.length > t.length) {
                    r = this;
                    i = t;
                } else {
                    r = t;
                    i = this;
                }
                for (var n = 0; n < i.length; n++) {
                    this.words[n] = r.words[n] ^ i.words[n];
                }
                if (this !== r) {
                    for (;n < r.length; n++) {
                        this.words[n] = r.words[n];
                    }
                }
                this.length = r.length;
                return this.strip();
            };
            a.prototype.ixor = function e(t) {
                i((this.negative | t.negative) === 0);
                return this.iuxor(t);
            };
            a.prototype.xor = function e(t) {
                if (this.length > t.length) return this.clone().ixor(t);
                return t.clone().ixor(this);
            };
            a.prototype.uxor = function e(t) {
                if (this.length > t.length) return this.clone().iuxor(t);
                return t.clone().iuxor(this);
            };
            a.prototype.inotn = function e(t) {
                i(typeof t === "number" && t >= 0);
                var r = Math.ceil(t / 26) | 0;
                var n = t % 26;
                this._expand(r);
                if (n > 0) {
                    r--;
                }
                for (var a = 0; a < r; a++) {
                    this.words[a] = ~this.words[a] & 67108863;
                }
                if (n > 0) {
                    this.words[a] = ~this.words[a] & 67108863 >> 26 - n;
                }
                return this.strip();
            };
            a.prototype.notn = function e(t) {
                return this.clone().inotn(t);
            };
            a.prototype.setn = function e(t, r) {
                i(typeof t === "number" && t >= 0);
                var n = t / 26 | 0;
                var a = t % 26;
                this._expand(n + 1);
                if (r) {
                    this.words[n] = this.words[n] | 1 << a;
                } else {
                    this.words[n] = this.words[n] & ~(1 << a);
                }
                return this.strip();
            };
            a.prototype.iadd = function e(t) {
                var r;
                if (this.negative !== 0 && t.negative === 0) {
                    this.negative = 0;
                    r = this.isub(t);
                    this.negative ^= 1;
                    return this._normSign();
                } else if (this.negative === 0 && t.negative !== 0) {
                    t.negative = 0;
                    r = this.isub(t);
                    t.negative = 1;
                    return r._normSign();
                }
                var i, n;
                if (this.length > t.length) {
                    i = this;
                    n = t;
                } else {
                    i = t;
                    n = this;
                }
                var a = 0;
                for (var s = 0; s < n.length; s++) {
                    r = (i.words[s] | 0) + (n.words[s] | 0) + a;
                    this.words[s] = r & 67108863;
                    a = r >>> 26;
                }
                for (;a !== 0 && s < i.length; s++) {
                    r = (i.words[s] | 0) + a;
                    this.words[s] = r & 67108863;
                    a = r >>> 26;
                }
                this.length = i.length;
                if (a !== 0) {
                    this.words[this.length] = a;
                    this.length++;
                } else if (i !== this) {
                    for (;s < i.length; s++) {
                        this.words[s] = i.words[s];
                    }
                }
                return this;
            };
            a.prototype.add = function e(t) {
                var r;
                if (t.negative !== 0 && this.negative === 0) {
                    t.negative = 0;
                    r = this.sub(t);
                    t.negative ^= 1;
                    return r;
                } else if (t.negative === 0 && this.negative !== 0) {
                    this.negative = 0;
                    r = t.sub(this);
                    this.negative = 1;
                    return r;
                }
                if (this.length > t.length) return this.clone().iadd(t);
                return t.clone().iadd(this);
            };
            a.prototype.isub = function e(t) {
                if (t.negative !== 0) {
                    t.negative = 0;
                    var r = this.iadd(t);
                    t.negative = 1;
                    return r._normSign();
                } else if (this.negative !== 0) {
                    this.negative = 0;
                    this.iadd(t);
                    this.negative = 1;
                    return this._normSign();
                }
                var i = this.cmp(t);
                if (i === 0) {
                    this.negative = 0;
                    this.length = 1;
                    this.words[0] = 0;
                    return this;
                }
                var n, a;
                if (i > 0) {
                    n = this;
                    a = t;
                } else {
                    n = t;
                    a = this;
                }
                var s = 0;
                for (var f = 0; f < a.length; f++) {
                    r = (n.words[f] | 0) - (a.words[f] | 0) + s;
                    s = r >> 26;
                    this.words[f] = r & 67108863;
                }
                for (;s !== 0 && f < n.length; f++) {
                    r = (n.words[f] | 0) + s;
                    s = r >> 26;
                    this.words[f] = r & 67108863;
                }
                if (s === 0 && f < n.length && n !== this) {
                    for (;f < n.length; f++) {
                        this.words[f] = n.words[f];
                    }
                }
                this.length = Math.max(this.length, f);
                if (n !== this) {
                    this.negative = 1;
                }
                return this.strip();
            };
            a.prototype.sub = function e(t) {
                return this.clone().isub(t);
            };
            function l(e, t, r) {
                r.negative = t.negative ^ e.negative;
                var i = e.length + t.length | 0;
                r.length = i;
                i = i - 1 | 0;
                var n = e.words[0] | 0;
                var a = t.words[0] | 0;
                var s = n * a;
                var f = s & 67108863;
                var o = s / 67108864 | 0;
                r.words[0] = f;
                for (var c = 1; c < i; c++) {
                    var u = o >>> 26;
                    var h = o & 67108863;
                    var d = Math.min(c, t.length - 1);
                    for (var l = Math.max(0, c - e.length + 1); l <= d; l++) {
                        var p = c - l | 0;
                        n = e.words[p] | 0;
                        a = t.words[l] | 0;
                        s = n * a + h;
                        u += s / 67108864 | 0;
                        h = s & 67108863;
                    }
                    r.words[c] = h | 0;
                    o = u | 0;
                }
                if (o !== 0) {
                    r.words[c] = o | 0;
                } else {
                    r.length--;
                }
                return r.strip();
            }
            var p = function e(t, r, i) {
                var n = t.words;
                var a = r.words;
                var s = i.words;
                var f = 0;
                var o;
                var c;
                var u;
                var h = n[0] | 0;
                var d = h & 8191;
                var l = h >>> 13;
                var p = n[1] | 0;
                var v = p & 8191;
                var b = p >>> 13;
                var m = n[2] | 0;
                var g = m & 8191;
                var y = m >>> 13;
                var w = n[3] | 0;
                var _ = w & 8191;
                var S = w >>> 13;
                var k = n[4] | 0;
                var x = k & 8191;
                var E = k >>> 13;
                var A = n[5] | 0;
                var M = A & 8191;
                var B = A >>> 13;
                var I = n[6] | 0;
                var j = I & 8191;
                var C = I >>> 13;
                var R = n[7] | 0;
                var z = R & 8191;
                var T = R >>> 13;
                var O = n[8] | 0;
                var D = O & 8191;
                var P = O >>> 13;
                var L = n[9] | 0;
                var N = L & 8191;
                var U = L >>> 13;
                var F = a[0] | 0;
                var q = F & 8191;
                var W = F >>> 13;
                var K = a[1] | 0;
                var H = K & 8191;
                var Z = K >>> 13;
                var V = a[2] | 0;
                var G = V & 8191;
                var X = V >>> 13;
                var Y = a[3] | 0;
                var J = Y & 8191;
                var Q = Y >>> 13;
                var $ = a[4] | 0;
                var ee = $ & 8191;
                var te = $ >>> 13;
                var re = a[5] | 0;
                var ie = re & 8191;
                var ne = re >>> 13;
                var ae = a[6] | 0;
                var se = ae & 8191;
                var fe = ae >>> 13;
                var oe = a[7] | 0;
                var ce = oe & 8191;
                var ue = oe >>> 13;
                var he = a[8] | 0;
                var de = he & 8191;
                var le = he >>> 13;
                var pe = a[9] | 0;
                var ve = pe & 8191;
                var be = pe >>> 13;
                i.negative = t.negative ^ r.negative;
                i.length = 19;
                o = Math.imul(d, q);
                c = Math.imul(d, W);
                c = c + Math.imul(l, q) | 0;
                u = Math.imul(l, W);
                var me = (f + o | 0) + ((c & 8191) << 13) | 0;
                f = (u + (c >>> 13) | 0) + (me >>> 26) | 0;
                me &= 67108863;
                o = Math.imul(v, q);
                c = Math.imul(v, W);
                c = c + Math.imul(b, q) | 0;
                u = Math.imul(b, W);
                o = o + Math.imul(d, H) | 0;
                c = c + Math.imul(d, Z) | 0;
                c = c + Math.imul(l, H) | 0;
                u = u + Math.imul(l, Z) | 0;
                var ge = (f + o | 0) + ((c & 8191) << 13) | 0;
                f = (u + (c >>> 13) | 0) + (ge >>> 26) | 0;
                ge &= 67108863;
                o = Math.imul(g, q);
                c = Math.imul(g, W);
                c = c + Math.imul(y, q) | 0;
                u = Math.imul(y, W);
                o = o + Math.imul(v, H) | 0;
                c = c + Math.imul(v, Z) | 0;
                c = c + Math.imul(b, H) | 0;
                u = u + Math.imul(b, Z) | 0;
                o = o + Math.imul(d, G) | 0;
                c = c + Math.imul(d, X) | 0;
                c = c + Math.imul(l, G) | 0;
                u = u + Math.imul(l, X) | 0;
                var ye = (f + o | 0) + ((c & 8191) << 13) | 0;
                f = (u + (c >>> 13) | 0) + (ye >>> 26) | 0;
                ye &= 67108863;
                o = Math.imul(_, q);
                c = Math.imul(_, W);
                c = c + Math.imul(S, q) | 0;
                u = Math.imul(S, W);
                o = o + Math.imul(g, H) | 0;
                c = c + Math.imul(g, Z) | 0;
                c = c + Math.imul(y, H) | 0;
                u = u + Math.imul(y, Z) | 0;
                o = o + Math.imul(v, G) | 0;
                c = c + Math.imul(v, X) | 0;
                c = c + Math.imul(b, G) | 0;
                u = u + Math.imul(b, X) | 0;
                o = o + Math.imul(d, J) | 0;
                c = c + Math.imul(d, Q) | 0;
                c = c + Math.imul(l, J) | 0;
                u = u + Math.imul(l, Q) | 0;
                var we = (f + o | 0) + ((c & 8191) << 13) | 0;
                f = (u + (c >>> 13) | 0) + (we >>> 26) | 0;
                we &= 67108863;
                o = Math.imul(x, q);
                c = Math.imul(x, W);
                c = c + Math.imul(E, q) | 0;
                u = Math.imul(E, W);
                o = o + Math.imul(_, H) | 0;
                c = c + Math.imul(_, Z) | 0;
                c = c + Math.imul(S, H) | 0;
                u = u + Math.imul(S, Z) | 0;
                o = o + Math.imul(g, G) | 0;
                c = c + Math.imul(g, X) | 0;
                c = c + Math.imul(y, G) | 0;
                u = u + Math.imul(y, X) | 0;
                o = o + Math.imul(v, J) | 0;
                c = c + Math.imul(v, Q) | 0;
                c = c + Math.imul(b, J) | 0;
                u = u + Math.imul(b, Q) | 0;
                o = o + Math.imul(d, ee) | 0;
                c = c + Math.imul(d, te) | 0;
                c = c + Math.imul(l, ee) | 0;
                u = u + Math.imul(l, te) | 0;
                var _e = (f + o | 0) + ((c & 8191) << 13) | 0;
                f = (u + (c >>> 13) | 0) + (_e >>> 26) | 0;
                _e &= 67108863;
                o = Math.imul(M, q);
                c = Math.imul(M, W);
                c = c + Math.imul(B, q) | 0;
                u = Math.imul(B, W);
                o = o + Math.imul(x, H) | 0;
                c = c + Math.imul(x, Z) | 0;
                c = c + Math.imul(E, H) | 0;
                u = u + Math.imul(E, Z) | 0;
                o = o + Math.imul(_, G) | 0;
                c = c + Math.imul(_, X) | 0;
                c = c + Math.imul(S, G) | 0;
                u = u + Math.imul(S, X) | 0;
                o = o + Math.imul(g, J) | 0;
                c = c + Math.imul(g, Q) | 0;
                c = c + Math.imul(y, J) | 0;
                u = u + Math.imul(y, Q) | 0;
                o = o + Math.imul(v, ee) | 0;
                c = c + Math.imul(v, te) | 0;
                c = c + Math.imul(b, ee) | 0;
                u = u + Math.imul(b, te) | 0;
                o = o + Math.imul(d, ie) | 0;
                c = c + Math.imul(d, ne) | 0;
                c = c + Math.imul(l, ie) | 0;
                u = u + Math.imul(l, ne) | 0;
                var Se = (f + o | 0) + ((c & 8191) << 13) | 0;
                f = (u + (c >>> 13) | 0) + (Se >>> 26) | 0;
                Se &= 67108863;
                o = Math.imul(j, q);
                c = Math.imul(j, W);
                c = c + Math.imul(C, q) | 0;
                u = Math.imul(C, W);
                o = o + Math.imul(M, H) | 0;
                c = c + Math.imul(M, Z) | 0;
                c = c + Math.imul(B, H) | 0;
                u = u + Math.imul(B, Z) | 0;
                o = o + Math.imul(x, G) | 0;
                c = c + Math.imul(x, X) | 0;
                c = c + Math.imul(E, G) | 0;
                u = u + Math.imul(E, X) | 0;
                o = o + Math.imul(_, J) | 0;
                c = c + Math.imul(_, Q) | 0;
                c = c + Math.imul(S, J) | 0;
                u = u + Math.imul(S, Q) | 0;
                o = o + Math.imul(g, ee) | 0;
                c = c + Math.imul(g, te) | 0;
                c = c + Math.imul(y, ee) | 0;
                u = u + Math.imul(y, te) | 0;
                o = o + Math.imul(v, ie) | 0;
                c = c + Math.imul(v, ne) | 0;
                c = c + Math.imul(b, ie) | 0;
                u = u + Math.imul(b, ne) | 0;
                o = o + Math.imul(d, se) | 0;
                c = c + Math.imul(d, fe) | 0;
                c = c + Math.imul(l, se) | 0;
                u = u + Math.imul(l, fe) | 0;
                var ke = (f + o | 0) + ((c & 8191) << 13) | 0;
                f = (u + (c >>> 13) | 0) + (ke >>> 26) | 0;
                ke &= 67108863;
                o = Math.imul(z, q);
                c = Math.imul(z, W);
                c = c + Math.imul(T, q) | 0;
                u = Math.imul(T, W);
                o = o + Math.imul(j, H) | 0;
                c = c + Math.imul(j, Z) | 0;
                c = c + Math.imul(C, H) | 0;
                u = u + Math.imul(C, Z) | 0;
                o = o + Math.imul(M, G) | 0;
                c = c + Math.imul(M, X) | 0;
                c = c + Math.imul(B, G) | 0;
                u = u + Math.imul(B, X) | 0;
                o = o + Math.imul(x, J) | 0;
                c = c + Math.imul(x, Q) | 0;
                c = c + Math.imul(E, J) | 0;
                u = u + Math.imul(E, Q) | 0;
                o = o + Math.imul(_, ee) | 0;
                c = c + Math.imul(_, te) | 0;
                c = c + Math.imul(S, ee) | 0;
                u = u + Math.imul(S, te) | 0;
                o = o + Math.imul(g, ie) | 0;
                c = c + Math.imul(g, ne) | 0;
                c = c + Math.imul(y, ie) | 0;
                u = u + Math.imul(y, ne) | 0;
                o = o + Math.imul(v, se) | 0;
                c = c + Math.imul(v, fe) | 0;
                c = c + Math.imul(b, se) | 0;
                u = u + Math.imul(b, fe) | 0;
                o = o + Math.imul(d, ce) | 0;
                c = c + Math.imul(d, ue) | 0;
                c = c + Math.imul(l, ce) | 0;
                u = u + Math.imul(l, ue) | 0;
                var xe = (f + o | 0) + ((c & 8191) << 13) | 0;
                f = (u + (c >>> 13) | 0) + (xe >>> 26) | 0;
                xe &= 67108863;
                o = Math.imul(D, q);
                c = Math.imul(D, W);
                c = c + Math.imul(P, q) | 0;
                u = Math.imul(P, W);
                o = o + Math.imul(z, H) | 0;
                c = c + Math.imul(z, Z) | 0;
                c = c + Math.imul(T, H) | 0;
                u = u + Math.imul(T, Z) | 0;
                o = o + Math.imul(j, G) | 0;
                c = c + Math.imul(j, X) | 0;
                c = c + Math.imul(C, G) | 0;
                u = u + Math.imul(C, X) | 0;
                o = o + Math.imul(M, J) | 0;
                c = c + Math.imul(M, Q) | 0;
                c = c + Math.imul(B, J) | 0;
                u = u + Math.imul(B, Q) | 0;
                o = o + Math.imul(x, ee) | 0;
                c = c + Math.imul(x, te) | 0;
                c = c + Math.imul(E, ee) | 0;
                u = u + Math.imul(E, te) | 0;
                o = o + Math.imul(_, ie) | 0;
                c = c + Math.imul(_, ne) | 0;
                c = c + Math.imul(S, ie) | 0;
                u = u + Math.imul(S, ne) | 0;
                o = o + Math.imul(g, se) | 0;
                c = c + Math.imul(g, fe) | 0;
                c = c + Math.imul(y, se) | 0;
                u = u + Math.imul(y, fe) | 0;
                o = o + Math.imul(v, ce) | 0;
                c = c + Math.imul(v, ue) | 0;
                c = c + Math.imul(b, ce) | 0;
                u = u + Math.imul(b, ue) | 0;
                o = o + Math.imul(d, de) | 0;
                c = c + Math.imul(d, le) | 0;
                c = c + Math.imul(l, de) | 0;
                u = u + Math.imul(l, le) | 0;
                var Ee = (f + o | 0) + ((c & 8191) << 13) | 0;
                f = (u + (c >>> 13) | 0) + (Ee >>> 26) | 0;
                Ee &= 67108863;
                o = Math.imul(N, q);
                c = Math.imul(N, W);
                c = c + Math.imul(U, q) | 0;
                u = Math.imul(U, W);
                o = o + Math.imul(D, H) | 0;
                c = c + Math.imul(D, Z) | 0;
                c = c + Math.imul(P, H) | 0;
                u = u + Math.imul(P, Z) | 0;
                o = o + Math.imul(z, G) | 0;
                c = c + Math.imul(z, X) | 0;
                c = c + Math.imul(T, G) | 0;
                u = u + Math.imul(T, X) | 0;
                o = o + Math.imul(j, J) | 0;
                c = c + Math.imul(j, Q) | 0;
                c = c + Math.imul(C, J) | 0;
                u = u + Math.imul(C, Q) | 0;
                o = o + Math.imul(M, ee) | 0;
                c = c + Math.imul(M, te) | 0;
                c = c + Math.imul(B, ee) | 0;
                u = u + Math.imul(B, te) | 0;
                o = o + Math.imul(x, ie) | 0;
                c = c + Math.imul(x, ne) | 0;
                c = c + Math.imul(E, ie) | 0;
                u = u + Math.imul(E, ne) | 0;
                o = o + Math.imul(_, se) | 0;
                c = c + Math.imul(_, fe) | 0;
                c = c + Math.imul(S, se) | 0;
                u = u + Math.imul(S, fe) | 0;
                o = o + Math.imul(g, ce) | 0;
                c = c + Math.imul(g, ue) | 0;
                c = c + Math.imul(y, ce) | 0;
                u = u + Math.imul(y, ue) | 0;
                o = o + Math.imul(v, de) | 0;
                c = c + Math.imul(v, le) | 0;
                c = c + Math.imul(b, de) | 0;
                u = u + Math.imul(b, le) | 0;
                o = o + Math.imul(d, ve) | 0;
                c = c + Math.imul(d, be) | 0;
                c = c + Math.imul(l, ve) | 0;
                u = u + Math.imul(l, be) | 0;
                var Ae = (f + o | 0) + ((c & 8191) << 13) | 0;
                f = (u + (c >>> 13) | 0) + (Ae >>> 26) | 0;
                Ae &= 67108863;
                o = Math.imul(N, H);
                c = Math.imul(N, Z);
                c = c + Math.imul(U, H) | 0;
                u = Math.imul(U, Z);
                o = o + Math.imul(D, G) | 0;
                c = c + Math.imul(D, X) | 0;
                c = c + Math.imul(P, G) | 0;
                u = u + Math.imul(P, X) | 0;
                o = o + Math.imul(z, J) | 0;
                c = c + Math.imul(z, Q) | 0;
                c = c + Math.imul(T, J) | 0;
                u = u + Math.imul(T, Q) | 0;
                o = o + Math.imul(j, ee) | 0;
                c = c + Math.imul(j, te) | 0;
                c = c + Math.imul(C, ee) | 0;
                u = u + Math.imul(C, te) | 0;
                o = o + Math.imul(M, ie) | 0;
                c = c + Math.imul(M, ne) | 0;
                c = c + Math.imul(B, ie) | 0;
                u = u + Math.imul(B, ne) | 0;
                o = o + Math.imul(x, se) | 0;
                c = c + Math.imul(x, fe) | 0;
                c = c + Math.imul(E, se) | 0;
                u = u + Math.imul(E, fe) | 0;
                o = o + Math.imul(_, ce) | 0;
                c = c + Math.imul(_, ue) | 0;
                c = c + Math.imul(S, ce) | 0;
                u = u + Math.imul(S, ue) | 0;
                o = o + Math.imul(g, de) | 0;
                c = c + Math.imul(g, le) | 0;
                c = c + Math.imul(y, de) | 0;
                u = u + Math.imul(y, le) | 0;
                o = o + Math.imul(v, ve) | 0;
                c = c + Math.imul(v, be) | 0;
                c = c + Math.imul(b, ve) | 0;
                u = u + Math.imul(b, be) | 0;
                var Me = (f + o | 0) + ((c & 8191) << 13) | 0;
                f = (u + (c >>> 13) | 0) + (Me >>> 26) | 0;
                Me &= 67108863;
                o = Math.imul(N, G);
                c = Math.imul(N, X);
                c = c + Math.imul(U, G) | 0;
                u = Math.imul(U, X);
                o = o + Math.imul(D, J) | 0;
                c = c + Math.imul(D, Q) | 0;
                c = c + Math.imul(P, J) | 0;
                u = u + Math.imul(P, Q) | 0;
                o = o + Math.imul(z, ee) | 0;
                c = c + Math.imul(z, te) | 0;
                c = c + Math.imul(T, ee) | 0;
                u = u + Math.imul(T, te) | 0;
                o = o + Math.imul(j, ie) | 0;
                c = c + Math.imul(j, ne) | 0;
                c = c + Math.imul(C, ie) | 0;
                u = u + Math.imul(C, ne) | 0;
                o = o + Math.imul(M, se) | 0;
                c = c + Math.imul(M, fe) | 0;
                c = c + Math.imul(B, se) | 0;
                u = u + Math.imul(B, fe) | 0;
                o = o + Math.imul(x, ce) | 0;
                c = c + Math.imul(x, ue) | 0;
                c = c + Math.imul(E, ce) | 0;
                u = u + Math.imul(E, ue) | 0;
                o = o + Math.imul(_, de) | 0;
                c = c + Math.imul(_, le) | 0;
                c = c + Math.imul(S, de) | 0;
                u = u + Math.imul(S, le) | 0;
                o = o + Math.imul(g, ve) | 0;
                c = c + Math.imul(g, be) | 0;
                c = c + Math.imul(y, ve) | 0;
                u = u + Math.imul(y, be) | 0;
                var Be = (f + o | 0) + ((c & 8191) << 13) | 0;
                f = (u + (c >>> 13) | 0) + (Be >>> 26) | 0;
                Be &= 67108863;
                o = Math.imul(N, J);
                c = Math.imul(N, Q);
                c = c + Math.imul(U, J) | 0;
                u = Math.imul(U, Q);
                o = o + Math.imul(D, ee) | 0;
                c = c + Math.imul(D, te) | 0;
                c = c + Math.imul(P, ee) | 0;
                u = u + Math.imul(P, te) | 0;
                o = o + Math.imul(z, ie) | 0;
                c = c + Math.imul(z, ne) | 0;
                c = c + Math.imul(T, ie) | 0;
                u = u + Math.imul(T, ne) | 0;
                o = o + Math.imul(j, se) | 0;
                c = c + Math.imul(j, fe) | 0;
                c = c + Math.imul(C, se) | 0;
                u = u + Math.imul(C, fe) | 0;
                o = o + Math.imul(M, ce) | 0;
                c = c + Math.imul(M, ue) | 0;
                c = c + Math.imul(B, ce) | 0;
                u = u + Math.imul(B, ue) | 0;
                o = o + Math.imul(x, de) | 0;
                c = c + Math.imul(x, le) | 0;
                c = c + Math.imul(E, de) | 0;
                u = u + Math.imul(E, le) | 0;
                o = o + Math.imul(_, ve) | 0;
                c = c + Math.imul(_, be) | 0;
                c = c + Math.imul(S, ve) | 0;
                u = u + Math.imul(S, be) | 0;
                var Ie = (f + o | 0) + ((c & 8191) << 13) | 0;
                f = (u + (c >>> 13) | 0) + (Ie >>> 26) | 0;
                Ie &= 67108863;
                o = Math.imul(N, ee);
                c = Math.imul(N, te);
                c = c + Math.imul(U, ee) | 0;
                u = Math.imul(U, te);
                o = o + Math.imul(D, ie) | 0;
                c = c + Math.imul(D, ne) | 0;
                c = c + Math.imul(P, ie) | 0;
                u = u + Math.imul(P, ne) | 0;
                o = o + Math.imul(z, se) | 0;
                c = c + Math.imul(z, fe) | 0;
                c = c + Math.imul(T, se) | 0;
                u = u + Math.imul(T, fe) | 0;
                o = o + Math.imul(j, ce) | 0;
                c = c + Math.imul(j, ue) | 0;
                c = c + Math.imul(C, ce) | 0;
                u = u + Math.imul(C, ue) | 0;
                o = o + Math.imul(M, de) | 0;
                c = c + Math.imul(M, le) | 0;
                c = c + Math.imul(B, de) | 0;
                u = u + Math.imul(B, le) | 0;
                o = o + Math.imul(x, ve) | 0;
                c = c + Math.imul(x, be) | 0;
                c = c + Math.imul(E, ve) | 0;
                u = u + Math.imul(E, be) | 0;
                var je = (f + o | 0) + ((c & 8191) << 13) | 0;
                f = (u + (c >>> 13) | 0) + (je >>> 26) | 0;
                je &= 67108863;
                o = Math.imul(N, ie);
                c = Math.imul(N, ne);
                c = c + Math.imul(U, ie) | 0;
                u = Math.imul(U, ne);
                o = o + Math.imul(D, se) | 0;
                c = c + Math.imul(D, fe) | 0;
                c = c + Math.imul(P, se) | 0;
                u = u + Math.imul(P, fe) | 0;
                o = o + Math.imul(z, ce) | 0;
                c = c + Math.imul(z, ue) | 0;
                c = c + Math.imul(T, ce) | 0;
                u = u + Math.imul(T, ue) | 0;
                o = o + Math.imul(j, de) | 0;
                c = c + Math.imul(j, le) | 0;
                c = c + Math.imul(C, de) | 0;
                u = u + Math.imul(C, le) | 0;
                o = o + Math.imul(M, ve) | 0;
                c = c + Math.imul(M, be) | 0;
                c = c + Math.imul(B, ve) | 0;
                u = u + Math.imul(B, be) | 0;
                var Ce = (f + o | 0) + ((c & 8191) << 13) | 0;
                f = (u + (c >>> 13) | 0) + (Ce >>> 26) | 0;
                Ce &= 67108863;
                o = Math.imul(N, se);
                c = Math.imul(N, fe);
                c = c + Math.imul(U, se) | 0;
                u = Math.imul(U, fe);
                o = o + Math.imul(D, ce) | 0;
                c = c + Math.imul(D, ue) | 0;
                c = c + Math.imul(P, ce) | 0;
                u = u + Math.imul(P, ue) | 0;
                o = o + Math.imul(z, de) | 0;
                c = c + Math.imul(z, le) | 0;
                c = c + Math.imul(T, de) | 0;
                u = u + Math.imul(T, le) | 0;
                o = o + Math.imul(j, ve) | 0;
                c = c + Math.imul(j, be) | 0;
                c = c + Math.imul(C, ve) | 0;
                u = u + Math.imul(C, be) | 0;
                var Re = (f + o | 0) + ((c & 8191) << 13) | 0;
                f = (u + (c >>> 13) | 0) + (Re >>> 26) | 0;
                Re &= 67108863;
                o = Math.imul(N, ce);
                c = Math.imul(N, ue);
                c = c + Math.imul(U, ce) | 0;
                u = Math.imul(U, ue);
                o = o + Math.imul(D, de) | 0;
                c = c + Math.imul(D, le) | 0;
                c = c + Math.imul(P, de) | 0;
                u = u + Math.imul(P, le) | 0;
                o = o + Math.imul(z, ve) | 0;
                c = c + Math.imul(z, be) | 0;
                c = c + Math.imul(T, ve) | 0;
                u = u + Math.imul(T, be) | 0;
                var ze = (f + o | 0) + ((c & 8191) << 13) | 0;
                f = (u + (c >>> 13) | 0) + (ze >>> 26) | 0;
                ze &= 67108863;
                o = Math.imul(N, de);
                c = Math.imul(N, le);
                c = c + Math.imul(U, de) | 0;
                u = Math.imul(U, le);
                o = o + Math.imul(D, ve) | 0;
                c = c + Math.imul(D, be) | 0;
                c = c + Math.imul(P, ve) | 0;
                u = u + Math.imul(P, be) | 0;
                var Te = (f + o | 0) + ((c & 8191) << 13) | 0;
                f = (u + (c >>> 13) | 0) + (Te >>> 26) | 0;
                Te &= 67108863;
                o = Math.imul(N, ve);
                c = Math.imul(N, be);
                c = c + Math.imul(U, ve) | 0;
                u = Math.imul(U, be);
                var Oe = (f + o | 0) + ((c & 8191) << 13) | 0;
                f = (u + (c >>> 13) | 0) + (Oe >>> 26) | 0;
                Oe &= 67108863;
                s[0] = me;
                s[1] = ge;
                s[2] = ye;
                s[3] = we;
                s[4] = _e;
                s[5] = Se;
                s[6] = ke;
                s[7] = xe;
                s[8] = Ee;
                s[9] = Ae;
                s[10] = Me;
                s[11] = Be;
                s[12] = Ie;
                s[13] = je;
                s[14] = Ce;
                s[15] = Re;
                s[16] = ze;
                s[17] = Te;
                s[18] = Oe;
                if (f !== 0) {
                    s[19] = f;
                    i.length++;
                }
                return i;
            };
            if (!Math.imul) {
                p = l;
            }
            function v(e, t, r) {
                r.negative = t.negative ^ e.negative;
                r.length = e.length + t.length;
                var i = 0;
                var n = 0;
                for (var a = 0; a < r.length - 1; a++) {
                    var s = n;
                    n = 0;
                    var f = i & 67108863;
                    var o = Math.min(a, t.length - 1);
                    for (var c = Math.max(0, a - e.length + 1); c <= o; c++) {
                        var u = a - c;
                        var h = e.words[u] | 0;
                        var d = t.words[c] | 0;
                        var l = h * d;
                        var p = l & 67108863;
                        s = s + (l / 67108864 | 0) | 0;
                        p = p + f | 0;
                        f = p & 67108863;
                        s = s + (p >>> 26) | 0;
                        n += s >>> 26;
                        s &= 67108863;
                    }
                    r.words[a] = f;
                    i = s;
                    s = n;
                }
                if (i !== 0) {
                    r.words[a] = i;
                } else {
                    r.length--;
                }
                return r.strip();
            }
            function b(e, t, r) {
                var i = new m();
                return i.mulp(e, t, r);
            }
            a.prototype.mulTo = function e(t, r) {
                var i;
                var n = this.length + t.length;
                if (this.length === 10 && t.length === 10) {
                    i = p(this, t, r);
                } else if (n < 63) {
                    i = l(this, t, r);
                } else if (n < 1024) {
                    i = v(this, t, r);
                } else {
                    i = b(this, t, r);
                }
                return i;
            };
            function m(e, t) {
                this.x = e;
                this.y = t;
            }
            m.prototype.makeRBT = function e(t) {
                var r = new Array(t);
                var i = a.prototype._countBits(t) - 1;
                for (var n = 0; n < t; n++) {
                    r[n] = this.revBin(n, i, t);
                }
                return r;
            };
            m.prototype.revBin = function e(t, r, i) {
                if (t === 0 || t === i - 1) return t;
                var n = 0;
                for (var a = 0; a < r; a++) {
                    n |= (t & 1) << r - a - 1;
                    t >>= 1;
                }
                return n;
            };
            m.prototype.permute = function e(t, r, i, n, a, s) {
                for (var f = 0; f < s; f++) {
                    n[f] = r[t[f]];
                    a[f] = i[t[f]];
                }
            };
            m.prototype.transform = function e(t, r, i, n, a, s) {
                this.permute(s, t, r, i, n, a);
                for (var f = 1; f < a; f <<= 1) {
                    var o = f << 1;
                    var c = Math.cos(2 * Math.PI / o);
                    var u = Math.sin(2 * Math.PI / o);
                    for (var h = 0; h < a; h += o) {
                        var d = c;
                        var l = u;
                        for (var p = 0; p < f; p++) {
                            var v = i[h + p];
                            var b = n[h + p];
                            var m = i[h + p + f];
                            var g = n[h + p + f];
                            var y = d * m - l * g;
                            g = d * g + l * m;
                            m = y;
                            i[h + p] = v + m;
                            n[h + p] = b + g;
                            i[h + p + f] = v - m;
                            n[h + p + f] = b - g;
                            if (p !== o) {
                                y = c * d - u * l;
                                l = c * l + u * d;
                                d = y;
                            }
                        }
                    }
                }
            };
            m.prototype.guessLen13b = function e(t, r) {
                var i = Math.max(r, t) | 1;
                var n = i & 1;
                var a = 0;
                for (i = i / 2 | 0; i; i = i >>> 1) {
                    a++;
                }
                return 1 << a + 1 + n;
            };
            m.prototype.conjugate = function e(t, r, i) {
                if (i <= 1) return;
                for (var n = 0; n < i / 2; n++) {
                    var a = t[n];
                    t[n] = t[i - n - 1];
                    t[i - n - 1] = a;
                    a = r[n];
                    r[n] = -r[i - n - 1];
                    r[i - n - 1] = -a;
                }
            };
            m.prototype.normalize13b = function e(t, r) {
                var i = 0;
                for (var n = 0; n < r / 2; n++) {
                    var a = Math.round(t[2 * n + 1] / r) * 8192 + Math.round(t[2 * n] / r) + i;
                    t[n] = a & 67108863;
                    if (a < 67108864) {
                        i = 0;
                    } else {
                        i = a / 67108864 | 0;
                    }
                }
                return t;
            };
            m.prototype.convert13b = function e(t, r, n, a) {
                var s = 0;
                for (var f = 0; f < r; f++) {
                    s = s + (t[f] | 0);
                    n[2 * f] = s & 8191;
                    s = s >>> 13;
                    n[2 * f + 1] = s & 8191;
                    s = s >>> 13;
                }
                for (f = 2 * r; f < a; ++f) {
                    n[f] = 0;
                }
                i(s === 0);
                i((s & ~8191) === 0);
            };
            m.prototype.stub = function e(t) {
                var r = new Array(t);
                for (var i = 0; i < t; i++) {
                    r[i] = 0;
                }
                return r;
            };
            m.prototype.mulp = function e(t, r, i) {
                var n = 2 * this.guessLen13b(t.length, r.length);
                var a = this.makeRBT(n);
                var s = this.stub(n);
                var f = new Array(n);
                var o = new Array(n);
                var c = new Array(n);
                var u = new Array(n);
                var h = new Array(n);
                var d = new Array(n);
                var l = i.words;
                l.length = n;
                this.convert13b(t.words, t.length, f, n);
                this.convert13b(r.words, r.length, u, n);
                this.transform(f, s, o, c, n, a);
                this.transform(u, s, h, d, n, a);
                for (var p = 0; p < n; p++) {
                    var v = o[p] * h[p] - c[p] * d[p];
                    c[p] = o[p] * d[p] + c[p] * h[p];
                    o[p] = v;
                }
                this.conjugate(o, c, n);
                this.transform(o, c, l, s, n, a);
                this.conjugate(l, s, n);
                this.normalize13b(l, n);
                i.negative = t.negative ^ r.negative;
                i.length = t.length + r.length;
                return i.strip();
            };
            a.prototype.mul = function e(t) {
                var r = new a(null);
                r.words = new Array(this.length + t.length);
                return this.mulTo(t, r);
            };
            a.prototype.mulf = function e(t) {
                var r = new a(null);
                r.words = new Array(this.length + t.length);
                return b(this, t, r);
            };
            a.prototype.imul = function e(t) {
                return this.clone().mulTo(t, this);
            };
            a.prototype.imuln = function e(t) {
                i(typeof t === "number");
                i(t < 67108864);
                var r = 0;
                for (var n = 0; n < this.length; n++) {
                    var a = (this.words[n] | 0) * t;
                    var s = (a & 67108863) + (r & 67108863);
                    r >>= 26;
                    r += a / 67108864 | 0;
                    r += s >>> 26;
                    this.words[n] = s & 67108863;
                }
                if (r !== 0) {
                    this.words[n] = r;
                    this.length++;
                }
                return this;
            };
            a.prototype.muln = function e(t) {
                return this.clone().imuln(t);
            };
            a.prototype.sqr = function e() {
                return this.mul(this);
            };
            a.prototype.isqr = function e() {
                return this.imul(this.clone());
            };
            a.prototype.pow = function e(t) {
                var r = d(t);
                if (r.length === 0) return new a(1);
                var i = this;
                for (var n = 0; n < r.length; n++, i = i.sqr()) {
                    if (r[n] !== 0) break;
                }
                if (++n < r.length) {
                    for (var s = i.sqr(); n < r.length; n++, s = s.sqr()) {
                        if (r[n] === 0) continue;
                        i = i.mul(s);
                    }
                }
                return i;
            };
            a.prototype.iushln = function e(t) {
                i(typeof t === "number" && t >= 0);
                var r = t % 26;
                var n = (t - r) / 26;
                var a = 67108863 >>> 26 - r << 26 - r;
                var s;
                if (r !== 0) {
                    var f = 0;
                    for (s = 0; s < this.length; s++) {
                        var o = this.words[s] & a;
                        var c = (this.words[s] | 0) - o << r;
                        this.words[s] = c | f;
                        f = o >>> 26 - r;
                    }
                    if (f) {
                        this.words[s] = f;
                        this.length++;
                    }
                }
                if (n !== 0) {
                    for (s = this.length - 1; s >= 0; s--) {
                        this.words[s + n] = this.words[s];
                    }
                    for (s = 0; s < n; s++) {
                        this.words[s] = 0;
                    }
                    this.length += n;
                }
                return this.strip();
            };
            a.prototype.ishln = function e(t) {
                i(this.negative === 0);
                return this.iushln(t);
            };
            a.prototype.iushrn = function e(t, r, n) {
                i(typeof t === "number" && t >= 0);
                var a;
                if (r) {
                    a = (r - r % 26) / 26;
                } else {
                    a = 0;
                }
                var s = t % 26;
                var f = Math.min((t - s) / 26, this.length);
                var o = 67108863 ^ 67108863 >>> s << s;
                var c = n;
                a -= f;
                a = Math.max(0, a);
                if (c) {
                    for (var u = 0; u < f; u++) {
                        c.words[u] = this.words[u];
                    }
                    c.length = f;
                }
                if (f === 0) {} else if (this.length > f) {
                    this.length -= f;
                    for (u = 0; u < this.length; u++) {
                        this.words[u] = this.words[u + f];
                    }
                } else {
                    this.words[0] = 0;
                    this.length = 1;
                }
                var h = 0;
                for (u = this.length - 1; u >= 0 && (h !== 0 || u >= a); u--) {
                    var d = this.words[u] | 0;
                    this.words[u] = h << 26 - s | d >>> s;
                    h = d & o;
                }
                if (c && h !== 0) {
                    c.words[c.length++] = h;
                }
                if (this.length === 0) {
                    this.words[0] = 0;
                    this.length = 1;
                }
                return this.strip();
            };
            a.prototype.ishrn = function e(t, r, n) {
                i(this.negative === 0);
                return this.iushrn(t, r, n);
            };
            a.prototype.shln = function e(t) {
                return this.clone().ishln(t);
            };
            a.prototype.ushln = function e(t) {
                return this.clone().iushln(t);
            };
            a.prototype.shrn = function e(t) {
                return this.clone().ishrn(t);
            };
            a.prototype.ushrn = function e(t) {
                return this.clone().iushrn(t);
            };
            a.prototype.testn = function e(t) {
                i(typeof t === "number" && t >= 0);
                var r = t % 26;
                var n = (t - r) / 26;
                var a = 1 << r;
                if (this.length <= n) return false;
                var s = this.words[n];
                return !!(s & a);
            };
            a.prototype.imaskn = function e(t) {
                i(typeof t === "number" && t >= 0);
                var r = t % 26;
                var n = (t - r) / 26;
                i(this.negative === 0, "imaskn works only with positive numbers");
                if (this.length <= n) {
                    return this;
                }
                if (r !== 0) {
                    n++;
                }
                this.length = Math.min(n, this.length);
                if (r !== 0) {
                    var a = 67108863 ^ 67108863 >>> r << r;
                    this.words[this.length - 1] &= a;
                }
                return this.strip();
            };
            a.prototype.maskn = function e(t) {
                return this.clone().imaskn(t);
            };
            a.prototype.iaddn = function e(t) {
                i(typeof t === "number");
                i(t < 67108864);
                if (t < 0) return this.isubn(-t);
                if (this.negative !== 0) {
                    if (this.length === 1 && (this.words[0] | 0) < t) {
                        this.words[0] = t - (this.words[0] | 0);
                        this.negative = 0;
                        return this;
                    }
                    this.negative = 0;
                    this.isubn(t);
                    this.negative = 1;
                    return this;
                }
                return this._iaddn(t);
            };
            a.prototype._iaddn = function e(t) {
                this.words[0] += t;
                for (var r = 0; r < this.length && this.words[r] >= 67108864; r++) {
                    this.words[r] -= 67108864;
                    if (r === this.length - 1) {
                        this.words[r + 1] = 1;
                    } else {
                        this.words[r + 1]++;
                    }
                }
                this.length = Math.max(this.length, r + 1);
                return this;
            };
            a.prototype.isubn = function e(t) {
                i(typeof t === "number");
                i(t < 67108864);
                if (t < 0) return this.iaddn(-t);
                if (this.negative !== 0) {
                    this.negative = 0;
                    this.iaddn(t);
                    this.negative = 1;
                    return this;
                }
                this.words[0] -= t;
                if (this.length === 1 && this.words[0] < 0) {
                    this.words[0] = -this.words[0];
                    this.negative = 1;
                } else {
                    for (var r = 0; r < this.length && this.words[r] < 0; r++) {
                        this.words[r] += 67108864;
                        this.words[r + 1] -= 1;
                    }
                }
                return this.strip();
            };
            a.prototype.addn = function e(t) {
                return this.clone().iaddn(t);
            };
            a.prototype.subn = function e(t) {
                return this.clone().isubn(t);
            };
            a.prototype.iabs = function e() {
                this.negative = 0;
                return this;
            };
            a.prototype.abs = function e() {
                return this.clone().iabs();
            };
            a.prototype._ishlnsubmul = function e(t, r, n) {
                var a = t.length + n;
                var s;
                this._expand(a);
                var f;
                var o = 0;
                for (s = 0; s < t.length; s++) {
                    f = (this.words[s + n] | 0) + o;
                    var c = (t.words[s] | 0) * r;
                    f -= c & 67108863;
                    o = (f >> 26) - (c / 67108864 | 0);
                    this.words[s + n] = f & 67108863;
                }
                for (;s < this.length - n; s++) {
                    f = (this.words[s + n] | 0) + o;
                    o = f >> 26;
                    this.words[s + n] = f & 67108863;
                }
                if (o === 0) return this.strip();
                i(o === -1);
                o = 0;
                for (s = 0; s < this.length; s++) {
                    f = -(this.words[s] | 0) + o;
                    o = f >> 26;
                    this.words[s] = f & 67108863;
                }
                this.negative = 1;
                return this.strip();
            };
            a.prototype._wordDiv = function e(t, r) {
                var i = this.length - t.length;
                var n = this.clone();
                var s = t;
                var f = s.words[s.length - 1] | 0;
                var o = this._countBits(f);
                i = 26 - o;
                if (i !== 0) {
                    s = s.ushln(i);
                    n.iushln(i);
                    f = s.words[s.length - 1] | 0;
                }
                var c = n.length - s.length;
                var u;
                if (r !== "mod") {
                    u = new a(null);
                    u.length = c + 1;
                    u.words = new Array(u.length);
                    for (var h = 0; h < u.length; h++) {
                        u.words[h] = 0;
                    }
                }
                var d = n.clone()._ishlnsubmul(s, 1, c);
                if (d.negative === 0) {
                    n = d;
                    if (u) {
                        u.words[c] = 1;
                    }
                }
                for (var l = c - 1; l >= 0; l--) {
                    var p = (n.words[s.length + l] | 0) * 67108864 + (n.words[s.length + l - 1] | 0);
                    p = Math.min(p / f | 0, 67108863);
                    n._ishlnsubmul(s, p, l);
                    while (n.negative !== 0) {
                        p--;
                        n.negative = 0;
                        n._ishlnsubmul(s, 1, l);
                        if (!n.isZero()) {
                            n.negative ^= 1;
                        }
                    }
                    if (u) {
                        u.words[l] = p;
                    }
                }
                if (u) {
                    u.strip();
                }
                n.strip();
                if (r !== "div" && i !== 0) {
                    n.iushrn(i);
                }
                return {
                    div: u || null,
                    mod: n
                };
            };
            a.prototype.divmod = function e(t, r, n) {
                i(!t.isZero());
                if (this.isZero()) {
                    return {
                        div: new a(0),
                        mod: new a(0)
                    };
                }
                var s, f, o;
                if (this.negative !== 0 && t.negative === 0) {
                    o = this.neg().divmod(t, r);
                    if (r !== "mod") {
                        s = o.div.neg();
                    }
                    if (r !== "div") {
                        f = o.mod.neg();
                        if (n && f.negative !== 0) {
                            f.iadd(t);
                        }
                    }
                    return {
                        div: s,
                        mod: f
                    };
                }
                if (this.negative === 0 && t.negative !== 0) {
                    o = this.divmod(t.neg(), r);
                    if (r !== "mod") {
                        s = o.div.neg();
                    }
                    return {
                        div: s,
                        mod: o.mod
                    };
                }
                if ((this.negative & t.negative) !== 0) {
                    o = this.neg().divmod(t.neg(), r);
                    if (r !== "div") {
                        f = o.mod.neg();
                        if (n && f.negative !== 0) {
                            f.isub(t);
                        }
                    }
                    return {
                        div: o.div,
                        mod: f
                    };
                }
                if (t.length > this.length || this.cmp(t) < 0) {
                    return {
                        div: new a(0),
                        mod: this
                    };
                }
                if (t.length === 1) {
                    if (r === "div") {
                        return {
                            div: this.divn(t.words[0]),
                            mod: null
                        };
                    }
                    if (r === "mod") {
                        return {
                            div: null,
                            mod: new a(this.modn(t.words[0]))
                        };
                    }
                    return {
                        div: this.divn(t.words[0]),
                        mod: new a(this.modn(t.words[0]))
                    };
                }
                return this._wordDiv(t, r);
            };
            a.prototype.div = function e(t) {
                return this.divmod(t, "div", false).div;
            };
            a.prototype.mod = function e(t) {
                return this.divmod(t, "mod", false).mod;
            };
            a.prototype.umod = function e(t) {
                return this.divmod(t, "mod", true).mod;
            };
            a.prototype.divRound = function e(t) {
                var r = this.divmod(t);
                if (r.mod.isZero()) return r.div;
                var i = r.div.negative !== 0 ? r.mod.isub(t) : r.mod;
                var n = t.ushrn(1);
                var a = t.andln(1);
                var s = i.cmp(n);
                if (s < 0 || a === 1 && s === 0) return r.div;
                return r.div.negative !== 0 ? r.div.isubn(1) : r.div.iaddn(1);
            };
            a.prototype.modn = function e(t) {
                i(t <= 67108863);
                var r = (1 << 26) % t;
                var n = 0;
                for (var a = this.length - 1; a >= 0; a--) {
                    n = (r * n + (this.words[a] | 0)) % t;
                }
                return n;
            };
            a.prototype.idivn = function e(t) {
                i(t <= 67108863);
                var r = 0;
                for (var n = this.length - 1; n >= 0; n--) {
                    var a = (this.words[n] | 0) + r * 67108864;
                    this.words[n] = a / t | 0;
                    r = a % t;
                }
                return this.strip();
            };
            a.prototype.divn = function e(t) {
                return this.clone().idivn(t);
            };
            a.prototype.egcd = function e(t) {
                i(t.negative === 0);
                i(!t.isZero());
                var r = this;
                var n = t.clone();
                if (r.negative !== 0) {
                    r = r.umod(t);
                } else {
                    r = r.clone();
                }
                var s = new a(1);
                var f = new a(0);
                var o = new a(0);
                var c = new a(1);
                var u = 0;
                while (r.isEven() && n.isEven()) {
                    r.iushrn(1);
                    n.iushrn(1);
                    ++u;
                }
                var h = n.clone();
                var d = r.clone();
                while (!r.isZero()) {
                    for (var l = 0, p = 1; (r.words[0] & p) === 0 && l < 26; ++l, p <<= 1) ;
                    if (l > 0) {
                        r.iushrn(l);
                        while (l-- > 0) {
                            if (s.isOdd() || f.isOdd()) {
                                s.iadd(h);
                                f.isub(d);
                            }
                            s.iushrn(1);
                            f.iushrn(1);
                        }
                    }
                    for (var v = 0, b = 1; (n.words[0] & b) === 0 && v < 26; ++v, b <<= 1) ;
                    if (v > 0) {
                        n.iushrn(v);
                        while (v-- > 0) {
                            if (o.isOdd() || c.isOdd()) {
                                o.iadd(h);
                                c.isub(d);
                            }
                            o.iushrn(1);
                            c.iushrn(1);
                        }
                    }
                    if (r.cmp(n) >= 0) {
                        r.isub(n);
                        s.isub(o);
                        f.isub(c);
                    } else {
                        n.isub(r);
                        o.isub(s);
                        c.isub(f);
                    }
                }
                return {
                    a: o,
                    b: c,
                    gcd: n.iushln(u)
                };
            };
            a.prototype._invmp = function e(t) {
                i(t.negative === 0);
                i(!t.isZero());
                var r = this;
                var n = t.clone();
                if (r.negative !== 0) {
                    r = r.umod(t);
                } else {
                    r = r.clone();
                }
                var s = new a(1);
                var f = new a(0);
                var o = n.clone();
                while (r.cmpn(1) > 0 && n.cmpn(1) > 0) {
                    for (var c = 0, u = 1; (r.words[0] & u) === 0 && c < 26; ++c, u <<= 1) ;
                    if (c > 0) {
                        r.iushrn(c);
                        while (c-- > 0) {
                            if (s.isOdd()) {
                                s.iadd(o);
                            }
                            s.iushrn(1);
                        }
                    }
                    for (var h = 0, d = 1; (n.words[0] & d) === 0 && h < 26; ++h, d <<= 1) ;
                    if (h > 0) {
                        n.iushrn(h);
                        while (h-- > 0) {
                            if (f.isOdd()) {
                                f.iadd(o);
                            }
                            f.iushrn(1);
                        }
                    }
                    if (r.cmp(n) >= 0) {
                        r.isub(n);
                        s.isub(f);
                    } else {
                        n.isub(r);
                        f.isub(s);
                    }
                }
                var l;
                if (r.cmpn(1) === 0) {
                    l = s;
                } else {
                    l = f;
                }
                if (l.cmpn(0) < 0) {
                    l.iadd(t);
                }
                return l;
            };
            a.prototype.gcd = function e(t) {
                if (this.isZero()) return t.abs();
                if (t.isZero()) return this.abs();
                var r = this.clone();
                var i = t.clone();
                r.negative = 0;
                i.negative = 0;
                for (var n = 0; r.isEven() && i.isEven(); n++) {
                    r.iushrn(1);
                    i.iushrn(1);
                }
                do {
                    while (r.isEven()) {
                        r.iushrn(1);
                    }
                    while (i.isEven()) {
                        i.iushrn(1);
                    }
                    var a = r.cmp(i);
                    if (a < 0) {
                        var s = r;
                        r = i;
                        i = s;
                    } else if (a === 0 || i.cmpn(1) === 0) {
                        break;
                    }
                    r.isub(i);
                } while (true);
                return i.iushln(n);
            };
            a.prototype.invm = function e(t) {
                return this.egcd(t).a.umod(t);
            };
            a.prototype.isEven = function e() {
                return (this.words[0] & 1) === 0;
            };
            a.prototype.isOdd = function e() {
                return (this.words[0] & 1) === 1;
            };
            a.prototype.andln = function e(t) {
                return this.words[0] & t;
            };
            a.prototype.bincn = function e(t) {
                i(typeof t === "number");
                var r = t % 26;
                var n = (t - r) / 26;
                var a = 1 << r;
                if (this.length <= n) {
                    this._expand(n + 1);
                    this.words[n] |= a;
                    return this;
                }
                var s = a;
                for (var f = n; s !== 0 && f < this.length; f++) {
                    var o = this.words[f] | 0;
                    o += s;
                    s = o >>> 26;
                    o &= 67108863;
                    this.words[f] = o;
                }
                if (s !== 0) {
                    this.words[f] = s;
                    this.length++;
                }
                return this;
            };
            a.prototype.isZero = function e() {
                return this.length === 1 && this.words[0] === 0;
            };
            a.prototype.cmpn = function e(t) {
                var r = t < 0;
                if (this.negative !== 0 && !r) return -1;
                if (this.negative === 0 && r) return 1;
                this.strip();
                var n;
                if (this.length > 1) {
                    n = 1;
                } else {
                    if (r) {
                        t = -t;
                    }
                    i(t <= 67108863, "Number is too big");
                    var a = this.words[0] | 0;
                    n = a === t ? 0 : a < t ? -1 : 1;
                }
                if (this.negative !== 0) return -n | 0;
                return n;
            };
            a.prototype.cmp = function e(t) {
                if (this.negative !== 0 && t.negative === 0) return -1;
                if (this.negative === 0 && t.negative !== 0) return 1;
                var r = this.ucmp(t);
                if (this.negative !== 0) return -r | 0;
                return r;
            };
            a.prototype.ucmp = function e(t) {
                if (this.length > t.length) return 1;
                if (this.length < t.length) return -1;
                var r = 0;
                for (var i = this.length - 1; i >= 0; i--) {
                    var n = this.words[i] | 0;
                    var a = t.words[i] | 0;
                    if (n === a) continue;
                    if (n < a) {
                        r = -1;
                    } else if (n > a) {
                        r = 1;
                    }
                    break;
                }
                return r;
            };
            a.prototype.gtn = function e(t) {
                return this.cmpn(t) === 1;
            };
            a.prototype.gt = function e(t) {
                return this.cmp(t) === 1;
            };
            a.prototype.gten = function e(t) {
                return this.cmpn(t) >= 0;
            };
            a.prototype.gte = function e(t) {
                return this.cmp(t) >= 0;
            };
            a.prototype.ltn = function e(t) {
                return this.cmpn(t) === -1;
            };
            a.prototype.lt = function e(t) {
                return this.cmp(t) === -1;
            };
            a.prototype.lten = function e(t) {
                return this.cmpn(t) <= 0;
            };
            a.prototype.lte = function e(t) {
                return this.cmp(t) <= 0;
            };
            a.prototype.eqn = function e(t) {
                return this.cmpn(t) === 0;
            };
            a.prototype.eq = function e(t) {
                return this.cmp(t) === 0;
            };
            a.red = function e(t) {
                return new x(t);
            };
            a.prototype.toRed = function e(t) {
                i(!this.red, "Already a number in reduction context");
                i(this.negative === 0, "red works only with positives");
                return t.convertTo(this)._forceRed(t);
            };
            a.prototype.fromRed = function e() {
                i(this.red, "fromRed works only with numbers in reduction context");
                return this.red.convertFrom(this);
            };
            a.prototype._forceRed = function e(t) {
                this.red = t;
                return this;
            };
            a.prototype.forceRed = function e(t) {
                i(!this.red, "Already a number in reduction context");
                return this._forceRed(t);
            };
            a.prototype.redAdd = function e(t) {
                i(this.red, "redAdd works only with red numbers");
                return this.red.add(this, t);
            };
            a.prototype.redIAdd = function e(t) {
                i(this.red, "redIAdd works only with red numbers");
                return this.red.iadd(this, t);
            };
            a.prototype.redSub = function e(t) {
                i(this.red, "redSub works only with red numbers");
                return this.red.sub(this, t);
            };
            a.prototype.redISub = function e(t) {
                i(this.red, "redISub works only with red numbers");
                return this.red.isub(this, t);
            };
            a.prototype.redShl = function e(t) {
                i(this.red, "redShl works only with red numbers");
                return this.red.shl(this, t);
            };
            a.prototype.redMul = function e(t) {
                i(this.red, "redMul works only with red numbers");
                this.red._verify2(this, t);
                return this.red.mul(this, t);
            };
            a.prototype.redIMul = function e(t) {
                i(this.red, "redMul works only with red numbers");
                this.red._verify2(this, t);
                return this.red.imul(this, t);
            };
            a.prototype.redSqr = function e() {
                i(this.red, "redSqr works only with red numbers");
                this.red._verify1(this);
                return this.red.sqr(this);
            };
            a.prototype.redISqr = function e() {
                i(this.red, "redISqr works only with red numbers");
                this.red._verify1(this);
                return this.red.isqr(this);
            };
            a.prototype.redSqrt = function e() {
                i(this.red, "redSqrt works only with red numbers");
                this.red._verify1(this);
                return this.red.sqrt(this);
            };
            a.prototype.redInvm = function e() {
                i(this.red, "redInvm works only with red numbers");
                this.red._verify1(this);
                return this.red.invm(this);
            };
            a.prototype.redNeg = function e() {
                i(this.red, "redNeg works only with red numbers");
                this.red._verify1(this);
                return this.red.neg(this);
            };
            a.prototype.redPow = function e(t) {
                i(this.red && !t.red, "redPow(normalNum)");
                this.red._verify1(this);
                return this.red.pow(this, t);
            };
            var g = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };
            function y(e, t) {
                this.name = e;
                this.p = new a(t, 16);
                this.n = this.p.bitLength();
                this.k = new a(1).iushln(this.n).isub(this.p);
                this.tmp = this._tmp();
            }
            y.prototype._tmp = function e() {
                var t = new a(null);
                t.words = new Array(Math.ceil(this.n / 13));
                return t;
            };
            y.prototype.ireduce = function e(t) {
                var r = t;
                var i;
                do {
                    this.split(r, this.tmp);
                    r = this.imulK(r);
                    r = r.iadd(this.tmp);
                    i = r.bitLength();
                } while (i > this.n);
                var n = i < this.n ? -1 : r.ucmp(this.p);
                if (n === 0) {
                    r.words[0] = 0;
                    r.length = 1;
                } else if (n > 0) {
                    r.isub(this.p);
                } else {
                    r.strip();
                }
                return r;
            };
            y.prototype.split = function e(t, r) {
                t.iushrn(this.n, 0, r);
            };
            y.prototype.imulK = function e(t) {
                return t.imul(this.k);
            };
            function w() {
                y.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
            }
            n(w, y);
            w.prototype.split = function e(t, r) {
                var i = 4194303;
                var n = Math.min(t.length, 9);
                for (var a = 0; a < n; a++) {
                    r.words[a] = t.words[a];
                }
                r.length = n;
                if (t.length <= 9) {
                    t.words[0] = 0;
                    t.length = 1;
                    return;
                }
                var s = t.words[9];
                r.words[r.length++] = s & i;
                for (a = 10; a < t.length; a++) {
                    var f = t.words[a] | 0;
                    t.words[a - 10] = (f & i) << 4 | s >>> 22;
                    s = f;
                }
                s >>>= 22;
                t.words[a - 10] = s;
                if (s === 0 && t.length > 10) {
                    t.length -= 10;
                } else {
                    t.length -= 9;
                }
            };
            w.prototype.imulK = function e(t) {
                t.words[t.length] = 0;
                t.words[t.length + 1] = 0;
                t.length += 2;
                var r = 0;
                for (var i = 0; i < t.length; i++) {
                    var n = t.words[i] | 0;
                    r += n * 977;
                    t.words[i] = r & 67108863;
                    r = n * 64 + (r / 67108864 | 0);
                }
                if (t.words[t.length - 1] === 0) {
                    t.length--;
                    if (t.words[t.length - 1] === 0) {
                        t.length--;
                    }
                }
                return t;
            };
            function _() {
                y.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
            }
            n(_, y);
            function S() {
                y.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
            }
            n(S, y);
            function k() {
                y.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
            }
            n(k, y);
            k.prototype.imulK = function e(t) {
                var r = 0;
                for (var i = 0; i < t.length; i++) {
                    var n = (t.words[i] | 0) * 19 + r;
                    var a = n & 67108863;
                    n >>>= 26;
                    t.words[i] = a;
                    r = n;
                }
                if (r !== 0) {
                    t.words[t.length++] = r;
                }
                return t;
            };
            a._prime = function e(t) {
                if (g[t]) return g[t];
                var e;
                if (t === "k256") {
                    e = new w();
                } else if (t === "p224") {
                    e = new _();
                } else if (t === "p192") {
                    e = new S();
                } else if (t === "p25519") {
                    e = new k();
                } else {
                    throw new Error("Unknown prime " + t);
                }
                g[t] = e;
                return e;
            };
            function x(e) {
                if (typeof e === "string") {
                    var t = a._prime(e);
                    this.m = t.p;
                    this.prime = t;
                } else {
                    i(e.gtn(1), "modulus must be greater than 1");
                    this.m = e;
                    this.prime = null;
                }
            }
            x.prototype._verify1 = function e(t) {
                i(t.negative === 0, "red works only with positives");
                i(t.red, "red works only with red numbers");
            };
            x.prototype._verify2 = function e(t, r) {
                i((t.negative | r.negative) === 0, "red works only with positives");
                i(t.red && t.red === r.red, "red works only with red numbers");
            };
            x.prototype.imod = function e(t) {
                if (this.prime) return this.prime.ireduce(t)._forceRed(this);
                return t.umod(this.m)._forceRed(this);
            };
            x.prototype.neg = function e(t) {
                if (t.isZero()) {
                    return t.clone();
                }
                return this.m.sub(t)._forceRed(this);
            };
            x.prototype.add = function e(t, r) {
                this._verify2(t, r);
                var i = t.add(r);
                if (i.cmp(this.m) >= 0) {
                    i.isub(this.m);
                }
                return i._forceRed(this);
            };
            x.prototype.iadd = function e(t, r) {
                this._verify2(t, r);
                var i = t.iadd(r);
                if (i.cmp(this.m) >= 0) {
                    i.isub(this.m);
                }
                return i;
            };
            x.prototype.sub = function e(t, r) {
                this._verify2(t, r);
                var i = t.sub(r);
                if (i.cmpn(0) < 0) {
                    i.iadd(this.m);
                }
                return i._forceRed(this);
            };
            x.prototype.isub = function e(t, r) {
                this._verify2(t, r);
                var i = t.isub(r);
                if (i.cmpn(0) < 0) {
                    i.iadd(this.m);
                }
                return i;
            };
            x.prototype.shl = function e(t, r) {
                this._verify1(t);
                return this.imod(t.ushln(r));
            };
            x.prototype.imul = function e(t, r) {
                this._verify2(t, r);
                return this.imod(t.imul(r));
            };
            x.prototype.mul = function e(t, r) {
                this._verify2(t, r);
                return this.imod(t.mul(r));
            };
            x.prototype.isqr = function e(t) {
                return this.imul(t, t.clone());
            };
            x.prototype.sqr = function e(t) {
                return this.mul(t, t);
            };
            x.prototype.sqrt = function e(t) {
                if (t.isZero()) return t.clone();
                var r = this.m.andln(3);
                i(r % 2 === 1);
                if (r === 3) {
                    var n = this.m.add(new a(1)).iushrn(2);
                    return this.pow(t, n);
                }
                var s = this.m.subn(1);
                var f = 0;
                while (!s.isZero() && s.andln(1) === 0) {
                    f++;
                    s.iushrn(1);
                }
                i(!s.isZero());
                var o = new a(1).toRed(this);
                var c = o.redNeg();
                var u = this.m.subn(1).iushrn(1);
                var h = this.m.bitLength();
                h = new a(2 * h * h).toRed(this);
                while (this.pow(h, u).cmp(c) !== 0) {
                    h.redIAdd(c);
                }
                var d = this.pow(h, s);
                var l = this.pow(t, s.addn(1).iushrn(1));
                var p = this.pow(t, s);
                var v = f;
                while (p.cmp(o) !== 0) {
                    var b = p;
                    for (var m = 0; b.cmp(o) !== 0; m++) {
                        b = b.redSqr();
                    }
                    i(m < v);
                    var g = this.pow(d, new a(1).iushln(v - m - 1));
                    l = l.redMul(g);
                    d = g.redSqr();
                    p = p.redMul(d);
                    v = m;
                }
                return l;
            };
            x.prototype.invm = function e(t) {
                var r = t._invmp(this.m);
                if (r.negative !== 0) {
                    r.negative = 0;
                    return this.imod(r).redNeg();
                } else {
                    return this.imod(r);
                }
            };
            x.prototype.pow = function e(t, r) {
                if (r.isZero()) return new a(1).toRed(this);
                if (r.cmpn(1) === 0) return t.clone();
                var i = 4;
                var n = new Array(1 << i);
                n[0] = new a(1).toRed(this);
                n[1] = t;
                for (var s = 2; s < n.length; s++) {
                    n[s] = this.mul(n[s - 1], t);
                }
                var f = n[0];
                var o = 0;
                var c = 0;
                var u = r.bitLength() % 26;
                if (u === 0) {
                    u = 26;
                }
                for (s = r.length - 1; s >= 0; s--) {
                    var h = r.words[s];
                    for (var d = u - 1; d >= 0; d--) {
                        var l = h >> d & 1;
                        if (f !== n[0]) {
                            f = this.sqr(f);
                        }
                        if (l === 0 && o === 0) {
                            c = 0;
                            continue;
                        }
                        o <<= 1;
                        o |= l;
                        c++;
                        if (c !== i && (s !== 0 || d !== 0)) continue;
                        f = this.mul(f, n[o]);
                        c = 0;
                        o = 0;
                    }
                    u = 26;
                }
                return f;
            };
            x.prototype.convertTo = function e(t) {
                var r = t.umod(this.m);
                return r === t ? r.clone() : r;
            };
            x.prototype.convertFrom = function e(t) {
                var r = t.clone();
                r.red = null;
                return r;
            };
            a.mont = function e(t) {
                return new E(t);
            };
            function E(e) {
                x.call(this, e);
                this.shift = this.m.bitLength();
                if (this.shift % 26 !== 0) {
                    this.shift += 26 - this.shift % 26;
                }
                this.r = new a(1).iushln(this.shift);
                this.r2 = this.imod(this.r.sqr());
                this.rinv = this.r._invmp(this.m);
                this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
                this.minv = this.minv.umod(this.r);
                this.minv = this.r.sub(this.minv);
            }
            n(E, x);
            E.prototype.convertTo = function e(t) {
                return this.imod(t.ushln(this.shift));
            };
            E.prototype.convertFrom = function e(t) {
                var r = this.imod(t.mul(this.rinv));
                r.red = null;
                return r;
            };
            E.prototype.imul = function e(t, r) {
                if (t.isZero() || r.isZero()) {
                    t.words[0] = 0;
                    t.length = 1;
                    return t;
                }
                var i = t.imul(r);
                var n = i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
                var a = i.isub(n).iushrn(this.shift);
                var s = a;
                if (a.cmp(this.m) >= 0) {
                    s = a.isub(this.m);
                } else if (a.cmpn(0) < 0) {
                    s = a.iadd(this.m);
                }
                return s._forceRed(this);
            };
            E.prototype.mul = function e(t, r) {
                if (t.isZero() || r.isZero()) return new a(0)._forceRed(this);
                var i = t.mul(r);
                var n = i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
                var s = i.isub(n).iushrn(this.shift);
                var f = s;
                if (s.cmp(this.m) >= 0) {
                    f = s.isub(this.m);
                } else if (s.cmpn(0) < 0) {
                    f = s.iadd(this.m);
                }
                return f._forceRed(this);
            };
            E.prototype.invm = function e(t) {
                var r = this.imod(t._invmp(this.m).mul(this.r2));
                return r._forceRed(this);
            };
        })(typeof t === "undefined" || t, this);
    }, {
        buffer: 34
    } ],
    33: [ function(e, t, r) {
        var i;
        t.exports = function e(t) {
            if (!i) i = new n(null);
            return i.generate(t);
        };
        function n(e) {
            this.rand = e;
        }
        t.exports.Rand = n;
        n.prototype.generate = function e(t) {
            return this._rand(t);
        };
        n.prototype._rand = function e(t) {
            if (this.rand.getBytes) return this.rand.getBytes(t);
            var r = new Uint8Array(t);
            for (var i = 0; i < r.length; i++) r[i] = this.rand.getByte();
            return r;
        };
        if (typeof self === "object") {
            if (self.crypto && self.crypto.getRandomValues) {
                n.prototype._rand = function e(t) {
                    var r = new Uint8Array(t);
                    self.crypto.getRandomValues(r);
                    return r;
                };
            } else if (self.msCrypto && self.msCrypto.getRandomValues) {
                n.prototype._rand = function e(t) {
                    var r = new Uint8Array(t);
                    self.msCrypto.getRandomValues(r);
                    return r;
                };
            } else if (typeof window === "object") {
                n.prototype._rand = function() {
                    throw new Error("Not implemented yet");
                };
            }
        } else {
            try {
                var a = e("crypto");
                if (typeof a.randomBytes !== "function") throw new Error("Not supported");
                n.prototype._rand = function e(t) {
                    return a.randomBytes(t);
                };
            } catch (e) {}
        }
    }, {
        crypto: 34
    } ],
    34: [ function(e, t, r) {}, {} ],
    35: [ function(e, t, r) {
        var i = e("safe-buffer").Buffer;
        function n(e) {
            if (!i.isBuffer(e)) e = i.from(e);
            var t = e.length / 4 | 0;
            var r = new Array(t);
            for (var n = 0; n < t; n++) {
                r[n] = e.readUInt32BE(n * 4);
            }
            return r;
        }
        function a(e) {
            for (var t = 0; t < e.length; e++) {
                e[t] = 0;
            }
        }
        function s(e, t, r, i, n) {
            var a = r[0];
            var s = r[1];
            var f = r[2];
            var o = r[3];
            var c = e[0] ^ t[0];
            var u = e[1] ^ t[1];
            var h = e[2] ^ t[2];
            var d = e[3] ^ t[3];
            var l, p, v, b;
            var m = 4;
            for (var g = 1; g < n; g++) {
                l = a[c >>> 24] ^ s[u >>> 16 & 255] ^ f[h >>> 8 & 255] ^ o[d & 255] ^ t[m++];
                p = a[u >>> 24] ^ s[h >>> 16 & 255] ^ f[d >>> 8 & 255] ^ o[c & 255] ^ t[m++];
                v = a[h >>> 24] ^ s[d >>> 16 & 255] ^ f[c >>> 8 & 255] ^ o[u & 255] ^ t[m++];
                b = a[d >>> 24] ^ s[c >>> 16 & 255] ^ f[u >>> 8 & 255] ^ o[h & 255] ^ t[m++];
                c = l;
                u = p;
                h = v;
                d = b;
            }
            l = (i[c >>> 24] << 24 | i[u >>> 16 & 255] << 16 | i[h >>> 8 & 255] << 8 | i[d & 255]) ^ t[m++];
            p = (i[u >>> 24] << 24 | i[h >>> 16 & 255] << 16 | i[d >>> 8 & 255] << 8 | i[c & 255]) ^ t[m++];
            v = (i[h >>> 24] << 24 | i[d >>> 16 & 255] << 16 | i[c >>> 8 & 255] << 8 | i[u & 255]) ^ t[m++];
            b = (i[d >>> 24] << 24 | i[c >>> 16 & 255] << 16 | i[u >>> 8 & 255] << 8 | i[h & 255]) ^ t[m++];
            l = l >>> 0;
            p = p >>> 0;
            v = v >>> 0;
            b = b >>> 0;
            return [ l, p, v, b ];
        }
        var f = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ];
        var o = function() {
            var e = new Array(256);
            for (var t = 0; t < 256; t++) {
                if (t < 128) {
                    e[t] = t << 1;
                } else {
                    e[t] = t << 1 ^ 283;
                }
            }
            var r = [];
            var i = [];
            var n = [ [], [], [], [] ];
            var a = [ [], [], [], [] ];
            var s = 0;
            var f = 0;
            for (var o = 0; o < 256; ++o) {
                var c = f ^ f << 1 ^ f << 2 ^ f << 3 ^ f << 4;
                c = c >>> 8 ^ c & 255 ^ 99;
                r[s] = c;
                i[c] = s;
                var u = e[s];
                var h = e[u];
                var d = e[h];
                var l = e[c] * 257 ^ c * 16843008;
                n[0][s] = l << 24 | l >>> 8;
                n[1][s] = l << 16 | l >>> 16;
                n[2][s] = l << 8 | l >>> 24;
                n[3][s] = l;
                l = d * 16843009 ^ h * 65537 ^ u * 257 ^ s * 16843008;
                a[0][c] = l << 24 | l >>> 8;
                a[1][c] = l << 16 | l >>> 16;
                a[2][c] = l << 8 | l >>> 24;
                a[3][c] = l;
                if (s === 0) {
                    s = f = 1;
                } else {
                    s = u ^ e[e[e[d ^ u]]];
                    f ^= e[e[f]];
                }
            }
            return {
                SBOX: r,
                INV_SBOX: i,
                SUB_MIX: n,
                INV_SUB_MIX: a
            };
        }();
        function c(e) {
            this._key = n(e);
            this._reset();
        }
        c.blockSize = 4 * 4;
        c.keySize = 256 / 8;
        c.prototype.blockSize = c.blockSize;
        c.prototype.keySize = c.keySize;
        c.prototype._reset = function() {
            var e = this._key;
            var t = e.length;
            var r = t + 6;
            var i = (r + 1) * 4;
            var n = [];
            for (var a = 0; a < t; a++) {
                n[a] = e[a];
            }
            for (a = t; a < i; a++) {
                var s = n[a - 1];
                if (a % t === 0) {
                    s = s << 8 | s >>> 24;
                    s = o.SBOX[s >>> 24] << 24 | o.SBOX[s >>> 16 & 255] << 16 | o.SBOX[s >>> 8 & 255] << 8 | o.SBOX[s & 255];
                    s ^= f[a / t | 0] << 24;
                } else if (t > 6 && a % t === 4) {
                    s = o.SBOX[s >>> 24] << 24 | o.SBOX[s >>> 16 & 255] << 16 | o.SBOX[s >>> 8 & 255] << 8 | o.SBOX[s & 255];
                }
                n[a] = n[a - t] ^ s;
            }
            var c = [];
            for (var u = 0; u < i; u++) {
                var h = i - u;
                var d = n[h - (u % 4 ? 0 : 4)];
                if (u < 4 || h <= 4) {
                    c[u] = d;
                } else {
                    c[u] = o.INV_SUB_MIX[0][o.SBOX[d >>> 24]] ^ o.INV_SUB_MIX[1][o.SBOX[d >>> 16 & 255]] ^ o.INV_SUB_MIX[2][o.SBOX[d >>> 8 & 255]] ^ o.INV_SUB_MIX[3][o.SBOX[d & 255]];
                }
            }
            this._nRounds = r;
            this._keySchedule = n;
            this._invKeySchedule = c;
        };
        c.prototype.encryptBlockRaw = function(e) {
            e = n(e);
            return s(e, this._keySchedule, o.SUB_MIX, o.SBOX, this._nRounds);
        };
        c.prototype.encryptBlock = function(e) {
            var t = this.encryptBlockRaw(e);
            var r = i.allocUnsafe(16);
            r.writeUInt32BE(t[0], 0);
            r.writeUInt32BE(t[1], 4);
            r.writeUInt32BE(t[2], 8);
            r.writeUInt32BE(t[3], 12);
            return r;
        };
        c.prototype.decryptBlock = function(e) {
            e = n(e);
            var t = e[1];
            e[1] = e[3];
            e[3] = t;
            var r = s(e, this._invKeySchedule, o.INV_SUB_MIX, o.INV_SBOX, this._nRounds);
            var a = i.allocUnsafe(16);
            a.writeUInt32BE(r[0], 0);
            a.writeUInt32BE(r[3], 4);
            a.writeUInt32BE(r[2], 8);
            a.writeUInt32BE(r[1], 12);
            return a;
        };
        c.prototype.scrub = function() {
            a(this._keySchedule);
            a(this._invKeySchedule);
            a(this._key);
        };
        t.exports.AES = c;
    }, {
        "safe-buffer": 231
    } ],
    36: [ function(e, t, r) {
        var i = e("./aes");
        var n = e("safe-buffer").Buffer;
        var a = e("cipher-base");
        var s = e("inherits");
        var f = e("./ghash");
        var o = e("buffer-xor");
        var c = e("./incr32");
        function u(e, t) {
            var r = 0;
            if (e.length !== t.length) r++;
            var i = Math.min(e.length, t.length);
            for (var n = 0; n < i; ++n) {
                r += e[n] ^ t[n];
            }
            return r;
        }
        function h(e, t, r) {
            if (t.length === 12) {
                e._finID = n.concat([ t, n.from([ 0, 0, 0, 1 ]) ]);
                return n.concat([ t, n.from([ 0, 0, 0, 2 ]) ]);
            }
            var i = new f(r);
            var a = t.length;
            var s = a % 16;
            i.update(t);
            if (s) {
                s = 16 - s;
                i.update(n.alloc(s, 0));
            }
            i.update(n.alloc(8, 0));
            var o = a * 8;
            var u = n.alloc(8);
            u.writeUIntBE(o, 0, 8);
            i.update(u);
            e._finID = i.state;
            var h = n.from(e._finID);
            c(h);
            return h;
        }
        function d(e, t, r, s) {
            a.call(this);
            var o = n.alloc(4, 0);
            this._cipher = new i.AES(t);
            var c = this._cipher.encryptBlock(o);
            this._ghash = new f(c);
            r = h(this, r, c);
            this._prev = n.from(r);
            this._cache = n.allocUnsafe(0);
            this._secCache = n.allocUnsafe(0);
            this._decrypt = s;
            this._alen = 0;
            this._len = 0;
            this._mode = e;
            this._authTag = null;
            this._called = false;
        }
        s(d, a);
        d.prototype._update = function(e) {
            if (!this._called && this._alen) {
                var t = 16 - this._alen % 16;
                if (t < 16) {
                    t = n.alloc(t, 0);
                    this._ghash.update(t);
                }
            }
            this._called = true;
            var r = this._mode.encrypt(this, e);
            if (this._decrypt) {
                this._ghash.update(e);
            } else {
                this._ghash.update(r);
            }
            this._len += e.length;
            return r;
        };
        d.prototype._final = function() {
            if (this._decrypt && !this._authTag) throw new Error("Unsupported state or unable to authenticate data");
            var e = o(this._ghash.final(this._alen * 8, this._len * 8), this._cipher.encryptBlock(this._finID));
            if (this._decrypt && u(e, this._authTag)) throw new Error("Unsupported state or unable to authenticate data");
            this._authTag = e;
            this._cipher.scrub();
        };
        d.prototype.getAuthTag = function e() {
            if (this._decrypt || !n.isBuffer(this._authTag)) throw new Error("Attempting to get auth tag in unsupported state");
            return this._authTag;
        };
        d.prototype.setAuthTag = function e(t) {
            if (!this._decrypt) throw new Error("Attempting to set auth tag in unsupported state");
            this._authTag = t;
        };
        d.prototype.setAAD = function e(t) {
            if (this._called) throw new Error("Attempting to set AAD in unsupported state");
            this._ghash.update(t);
            this._alen += t.length;
        };
        t.exports = d;
    }, {
        "./aes": 35,
        "./ghash": 40,
        "./incr32": 41,
        "buffer-xor": 64,
        "cipher-base": 66,
        inherits: 139,
        "safe-buffer": 231
    } ],
    37: [ function(e, t, r) {
        var i = e("./encrypter");
        var n = e("./decrypter");
        var a = e("./modes/list.json");
        function s() {
            return Object.keys(a);
        }
        r.createCipher = r.Cipher = i.createCipher;
        r.createCipheriv = r.Cipheriv = i.createCipheriv;
        r.createDecipher = r.Decipher = n.createDecipher;
        r.createDecipheriv = r.Decipheriv = n.createDecipheriv;
        r.listCiphers = r.getCiphers = s;
    }, {
        "./decrypter": 38,
        "./encrypter": 39,
        "./modes/list.json": 49
    } ],
    38: [ function(e, t, r) {
        var i = e("./authCipher");
        var n = e("safe-buffer").Buffer;
        var a = e("./modes");
        var s = e("./streamCipher");
        var f = e("cipher-base");
        var o = e("./aes");
        var c = e("evp_bytestokey");
        var u = e("inherits");
        function h(e, t, r) {
            f.call(this);
            this._cache = new d();
            this._last = void 0;
            this._cipher = new o.AES(t);
            this._prev = n.from(r);
            this._mode = e;
            this._autopadding = true;
        }
        u(h, f);
        h.prototype._update = function(e) {
            this._cache.add(e);
            var t;
            var r;
            var i = [];
            while (t = this._cache.get(this._autopadding)) {
                r = this._mode.decrypt(this, t);
                i.push(r);
            }
            return n.concat(i);
        };
        h.prototype._final = function() {
            var e = this._cache.flush();
            if (this._autopadding) {
                return l(this._mode.decrypt(this, e));
            } else if (e) {
                throw new Error("data not multiple of block length");
            }
        };
        h.prototype.setAutoPadding = function(e) {
            this._autopadding = !!e;
            return this;
        };
        function d() {
            this.cache = n.allocUnsafe(0);
        }
        d.prototype.add = function(e) {
            this.cache = n.concat([ this.cache, e ]);
        };
        d.prototype.get = function(e) {
            var t;
            if (e) {
                if (this.cache.length > 16) {
                    t = this.cache.slice(0, 16);
                    this.cache = this.cache.slice(16);
                    return t;
                }
            } else {
                if (this.cache.length >= 16) {
                    t = this.cache.slice(0, 16);
                    this.cache = this.cache.slice(16);
                    return t;
                }
            }
            return null;
        };
        d.prototype.flush = function() {
            if (this.cache.length) return this.cache;
        };
        function l(e) {
            var t = e[15];
            if (t < 1 || t > 16) {
                throw new Error("unable to decrypt data");
            }
            var r = -1;
            while (++r < t) {
                if (e[r + (16 - t)] !== t) {
                    throw new Error("unable to decrypt data");
                }
            }
            if (t === 16) return;
            return e.slice(0, 16 - t);
        }
        function p(e, t, r) {
            var f = a[e.toLowerCase()];
            if (!f) throw new TypeError("invalid suite type");
            if (typeof r === "string") r = n.from(r);
            if (f.mode !== "GCM" && r.length !== f.iv) throw new TypeError("invalid iv length " + r.length);
            if (typeof t === "string") t = n.from(t);
            if (t.length !== f.key / 8) throw new TypeError("invalid key length " + t.length);
            if (f.type === "stream") {
                return new s(f.module, t, r, true);
            } else if (f.type === "auth") {
                return new i(f.module, t, r, true);
            }
            return new h(f.module, t, r);
        }
        function v(e, t) {
            var r = a[e.toLowerCase()];
            if (!r) throw new TypeError("invalid suite type");
            var i = c(t, false, r.key, r.iv);
            return p(e, i.key, i.iv);
        }
        r.createDecipher = v;
        r.createDecipheriv = p;
    }, {
        "./aes": 35,
        "./authCipher": 36,
        "./modes": 48,
        "./streamCipher": 51,
        "cipher-base": 66,
        evp_bytestokey: 122,
        inherits: 139,
        "safe-buffer": 231
    } ],
    39: [ function(e, t, r) {
        var i = e("./modes");
        var n = e("./authCipher");
        var a = e("safe-buffer").Buffer;
        var s = e("./streamCipher");
        var f = e("cipher-base");
        var o = e("./aes");
        var c = e("evp_bytestokey");
        var u = e("inherits");
        function h(e, t, r) {
            f.call(this);
            this._cache = new l();
            this._cipher = new o.AES(t);
            this._prev = a.from(r);
            this._mode = e;
            this._autopadding = true;
        }
        u(h, f);
        h.prototype._update = function(e) {
            this._cache.add(e);
            var t;
            var r;
            var i = [];
            while (t = this._cache.get()) {
                r = this._mode.encrypt(this, t);
                i.push(r);
            }
            return a.concat(i);
        };
        var d = a.alloc(16, 16);
        h.prototype._final = function() {
            var e = this._cache.flush();
            if (this._autopadding) {
                e = this._mode.encrypt(this, e);
                this._cipher.scrub();
                return e;
            }
            if (!e.equals(d)) {
                this._cipher.scrub();
                throw new Error("data not multiple of block length");
            }
        };
        h.prototype.setAutoPadding = function(e) {
            this._autopadding = !!e;
            return this;
        };
        function l() {
            this.cache = a.allocUnsafe(0);
        }
        l.prototype.add = function(e) {
            this.cache = a.concat([ this.cache, e ]);
        };
        l.prototype.get = function() {
            if (this.cache.length > 15) {
                var e = this.cache.slice(0, 16);
                this.cache = this.cache.slice(16);
                return e;
            }
            return null;
        };
        l.prototype.flush = function() {
            var e = 16 - this.cache.length;
            var t = a.allocUnsafe(e);
            var r = -1;
            while (++r < e) {
                t.writeUInt8(e, r);
            }
            return a.concat([ this.cache, t ]);
        };
        function p(e, t, r) {
            var f = i[e.toLowerCase()];
            if (!f) throw new TypeError("invalid suite type");
            if (typeof t === "string") t = a.from(t);
            if (t.length !== f.key / 8) throw new TypeError("invalid key length " + t.length);
            if (typeof r === "string") r = a.from(r);
            if (f.mode !== "GCM" && r.length !== f.iv) throw new TypeError("invalid iv length " + r.length);
            if (f.type === "stream") {
                return new s(f.module, t, r);
            } else if (f.type === "auth") {
                return new n(f.module, t, r);
            }
            return new h(f.module, t, r);
        }
        function v(e, t) {
            var r = i[e.toLowerCase()];
            if (!r) throw new TypeError("invalid suite type");
            var n = c(t, false, r.key, r.iv);
            return p(e, n.key, n.iv);
        }
        r.createCipheriv = p;
        r.createCipher = v;
    }, {
        "./aes": 35,
        "./authCipher": 36,
        "./modes": 48,
        "./streamCipher": 51,
        "cipher-base": 66,
        evp_bytestokey: 122,
        inherits: 139,
        "safe-buffer": 231
    } ],
    40: [ function(e, t, r) {
        var i = e("safe-buffer").Buffer;
        var n = i.alloc(16, 0);
        function a(e) {
            return [ e.readUInt32BE(0), e.readUInt32BE(4), e.readUInt32BE(8), e.readUInt32BE(12) ];
        }
        function s(e) {
            var t = i.allocUnsafe(16);
            t.writeUInt32BE(e[0] >>> 0, 0);
            t.writeUInt32BE(e[1] >>> 0, 4);
            t.writeUInt32BE(e[2] >>> 0, 8);
            t.writeUInt32BE(e[3] >>> 0, 12);
            return t;
        }
        function f(e) {
            this.h = e;
            this.state = i.alloc(16, 0);
            this.cache = i.allocUnsafe(0);
        }
        f.prototype.ghash = function(e) {
            var t = -1;
            while (++t < e.length) {
                this.state[t] ^= e[t];
            }
            this._multiply();
        };
        f.prototype._multiply = function() {
            var e = a(this.h);
            var t = [ 0, 0, 0, 0 ];
            var r, i, n;
            var f = -1;
            while (++f < 128) {
                i = (this.state[~~(f / 8)] & 1 << 7 - f % 8) !== 0;
                if (i) {
                    t[0] ^= e[0];
                    t[1] ^= e[1];
                    t[2] ^= e[2];
                    t[3] ^= e[3];
                }
                n = (e[3] & 1) !== 0;
                for (r = 3; r > 0; r--) {
                    e[r] = e[r] >>> 1 | (e[r - 1] & 1) << 31;
                }
                e[0] = e[0] >>> 1;
                if (n) {
                    e[0] = e[0] ^ 225 << 24;
                }
            }
            this.state = s(t);
        };
        f.prototype.update = function(e) {
            this.cache = i.concat([ this.cache, e ]);
            var t;
            while (this.cache.length >= 16) {
                t = this.cache.slice(0, 16);
                this.cache = this.cache.slice(16);
                this.ghash(t);
            }
        };
        f.prototype.final = function(e, t) {
            if (this.cache.length) {
                this.ghash(i.concat([ this.cache, n ], 16));
            }
            this.ghash(s([ 0, e, 0, t ]));
            return this.state;
        };
        t.exports = f;
    }, {
        "safe-buffer": 231
    } ],
    41: [ function(e, t, r) {
        function i(e) {
            var t = e.length;
            var r;
            while (t--) {
                r = e.readUInt8(t);
                if (r === 255) {
                    e.writeUInt8(0, t);
                } else {
                    r++;
                    e.writeUInt8(r, t);
                    break;
                }
            }
        }
        t.exports = i;
    }, {} ],
    42: [ function(e, t, r) {
        var i = e("buffer-xor");
        r.encrypt = function(e, t) {
            var r = i(t, e._prev);
            e._prev = e._cipher.encryptBlock(r);
            return e._prev;
        };
        r.decrypt = function(e, t) {
            var r = e._prev;
            e._prev = t;
            var n = e._cipher.decryptBlock(t);
            return i(n, r);
        };
    }, {
        "buffer-xor": 64
    } ],
    43: [ function(e, t, r) {
        var i = e("safe-buffer").Buffer;
        var n = e("buffer-xor");
        function a(e, t, r) {
            var a = t.length;
            var s = n(t, e._cache);
            e._cache = e._cache.slice(a);
            e._prev = i.concat([ e._prev, r ? t : s ]);
            return s;
        }
        r.encrypt = function(e, t, r) {
            var n = i.allocUnsafe(0);
            var s;
            while (t.length) {
                if (e._cache.length === 0) {
                    e._cache = e._cipher.encryptBlock(e._prev);
                    e._prev = i.allocUnsafe(0);
                }
                if (e._cache.length <= t.length) {
                    s = e._cache.length;
                    n = i.concat([ n, a(e, t.slice(0, s), r) ]);
                    t = t.slice(s);
                } else {
                    n = i.concat([ n, a(e, t, r) ]);
                    break;
                }
            }
            return n;
        };
    }, {
        "buffer-xor": 64,
        "safe-buffer": 231
    } ],
    44: [ function(e, t, r) {
        var i = e("safe-buffer").Buffer;
        function n(e, t, r) {
            var i;
            var n = -1;
            var s = 8;
            var f = 0;
            var o, c;
            while (++n < s) {
                i = e._cipher.encryptBlock(e._prev);
                o = t & 1 << 7 - n ? 128 : 0;
                c = i[0] ^ o;
                f += (c & 128) >> n % 8;
                e._prev = a(e._prev, r ? o : c);
            }
            return f;
        }
        function a(e, t) {
            var r = e.length;
            var n = -1;
            var a = i.allocUnsafe(e.length);
            e = i.concat([ e, i.from([ t ]) ]);
            while (++n < r) {
                a[n] = e[n] << 1 | e[n + 1] >> 7;
            }
            return a;
        }
        r.encrypt = function(e, t, r) {
            var a = t.length;
            var s = i.allocUnsafe(a);
            var f = -1;
            while (++f < a) {
                s[f] = n(e, t[f], r);
            }
            return s;
        };
    }, {
        "safe-buffer": 231
    } ],
    45: [ function(e, t, r) {
        var i = e("safe-buffer").Buffer;
        function n(e, t, r) {
            var n = e._cipher.encryptBlock(e._prev);
            var a = n[0] ^ t;
            e._prev = i.concat([ e._prev.slice(1), i.from([ r ? t : a ]) ]);
            return a;
        }
        r.encrypt = function(e, t, r) {
            var a = t.length;
            var s = i.allocUnsafe(a);
            var f = -1;
            while (++f < a) {
                s[f] = n(e, t[f], r);
            }
            return s;
        };
    }, {
        "safe-buffer": 231
    } ],
    46: [ function(e, t, r) {
        var i = e("buffer-xor");
        var n = e("safe-buffer").Buffer;
        var a = e("../incr32");
        function s(e) {
            var t = e._cipher.encryptBlockRaw(e._prev);
            a(e._prev);
            return t;
        }
        var f = 16;
        r.encrypt = function(e, t) {
            var r = Math.ceil(t.length / f);
            var a = e._cache.length;
            e._cache = n.concat([ e._cache, n.allocUnsafe(r * f) ]);
            for (var o = 0; o < r; o++) {
                var c = s(e);
                var u = a + o * f;
                e._cache.writeUInt32BE(c[0], u + 0);
                e._cache.writeUInt32BE(c[1], u + 4);
                e._cache.writeUInt32BE(c[2], u + 8);
                e._cache.writeUInt32BE(c[3], u + 12);
            }
            var h = e._cache.slice(0, t.length);
            e._cache = e._cache.slice(t.length);
            return i(t, h);
        };
    }, {
        "../incr32": 41,
        "buffer-xor": 64,
        "safe-buffer": 231
    } ],
    47: [ function(e, t, r) {
        r.encrypt = function(e, t) {
            return e._cipher.encryptBlock(t);
        };
        r.decrypt = function(e, t) {
            return e._cipher.decryptBlock(t);
        };
    }, {} ],
    48: [ function(e, t, r) {
        var i = {
            ECB: e("./ecb"),
            CBC: e("./cbc"),
            CFB: e("./cfb"),
            CFB8: e("./cfb8"),
            CFB1: e("./cfb1"),
            OFB: e("./ofb"),
            CTR: e("./ctr"),
            GCM: e("./ctr")
        };
        var n = e("./list.json");
        for (var a in n) {
            n[a].module = i[n[a].mode];
        }
        t.exports = n;
    }, {
        "./cbc": 42,
        "./cfb": 43,
        "./cfb1": 44,
        "./cfb8": 45,
        "./ctr": 46,
        "./ecb": 47,
        "./list.json": 49,
        "./ofb": 50
    } ],
    49: [ function(e, t, r) {
        t.exports = {
            "aes-128-ecb": {
                cipher: "AES",
                key: 128,
                iv: 0,
                mode: "ECB",
                type: "block"
            },
            "aes-192-ecb": {
                cipher: "AES",
                key: 192,
                iv: 0,
                mode: "ECB",
                type: "block"
            },
            "aes-256-ecb": {
                cipher: "AES",
                key: 256,
                iv: 0,
                mode: "ECB",
                type: "block"
            },
            "aes-128-cbc": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            "aes-192-cbc": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            "aes-256-cbc": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            aes128: {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            aes192: {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            aes256: {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            "aes-128-cfb": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CFB",
                type: "stream"
            },
            "aes-192-cfb": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CFB",
                type: "stream"
            },
            "aes-256-cfb": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CFB",
                type: "stream"
            },
            "aes-128-cfb8": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CFB8",
                type: "stream"
            },
            "aes-192-cfb8": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CFB8",
                type: "stream"
            },
            "aes-256-cfb8": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CFB8",
                type: "stream"
            },
            "aes-128-cfb1": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CFB1",
                type: "stream"
            },
            "aes-192-cfb1": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CFB1",
                type: "stream"
            },
            "aes-256-cfb1": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CFB1",
                type: "stream"
            },
            "aes-128-ofb": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "OFB",
                type: "stream"
            },
            "aes-192-ofb": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "OFB",
                type: "stream"
            },
            "aes-256-ofb": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "OFB",
                type: "stream"
            },
            "aes-128-ctr": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CTR",
                type: "stream"
            },
            "aes-192-ctr": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CTR",
                type: "stream"
            },
            "aes-256-ctr": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CTR",
                type: "stream"
            },
            "aes-128-gcm": {
                cipher: "AES",
                key: 128,
                iv: 12,
                mode: "GCM",
                type: "auth"
            },
            "aes-192-gcm": {
                cipher: "AES",
                key: 192,
                iv: 12,
                mode: "GCM",
                type: "auth"
            },
            "aes-256-gcm": {
                cipher: "AES",
                key: 256,
                iv: 12,
                mode: "GCM",
                type: "auth"
            }
        };
    }, {} ],
    50: [ function(e, t, r) {
        (function(t) {
            var i = e("buffer-xor");
            function n(e) {
                e._prev = e._cipher.encryptBlock(e._prev);
                return e._prev;
            }
            r.encrypt = function(e, r) {
                while (e._cache.length < r.length) {
                    e._cache = t.concat([ e._cache, n(e) ]);
                }
                var a = e._cache.slice(0, r.length);
                e._cache = e._cache.slice(r.length);
                return i(r, a);
            };
        }).call(this, e("buffer").Buffer);
    }, {
        buffer: 65,
        "buffer-xor": 64
    } ],
    51: [ function(e, t, r) {
        var i = e("./aes");
        var n = e("safe-buffer").Buffer;
        var a = e("cipher-base");
        var s = e("inherits");
        function f(e, t, r, s) {
            a.call(this);
            this._cipher = new i.AES(t);
            this._prev = n.from(r);
            this._cache = n.allocUnsafe(0);
            this._secCache = n.allocUnsafe(0);
            this._decrypt = s;
            this._mode = e;
        }
        s(f, a);
        f.prototype._update = function(e) {
            return this._mode.encrypt(this, e, this._decrypt);
        };
        f.prototype._final = function() {
            this._cipher.scrub();
        };
        t.exports = f;
    }, {
        "./aes": 35,
        "cipher-base": 66,
        inherits: 139,
        "safe-buffer": 231
    } ],
    52: [ function(e, t, r) {
        var i = e("browserify-des");
        var n = e("browserify-aes/browser");
        var a = e("browserify-aes/modes");
        var s = e("browserify-des/modes");
        var f = e("evp_bytestokey");
        function o(e, t) {
            e = e.toLowerCase();
            var r, i;
            if (a[e]) {
                r = a[e].key;
                i = a[e].iv;
            } else if (s[e]) {
                r = s[e].key * 8;
                i = s[e].iv;
            } else {
                throw new TypeError("invalid suite type");
            }
            var n = f(t, false, r, i);
            return u(e, n.key, n.iv);
        }
        function c(e, t) {
            e = e.toLowerCase();
            var r, i;
            if (a[e]) {
                r = a[e].key;
                i = a[e].iv;
            } else if (s[e]) {
                r = s[e].key * 8;
                i = s[e].iv;
            } else {
                throw new TypeError("invalid suite type");
            }
            var n = f(t, false, r, i);
            return h(e, n.key, n.iv);
        }
        function u(e, t, r) {
            e = e.toLowerCase();
            if (a[e]) return n.createCipheriv(e, t, r);
            if (s[e]) return new i({
                key: t,
                iv: r,
                mode: e
            });
            throw new TypeError("invalid suite type");
        }
        function h(e, t, r) {
            e = e.toLowerCase();
            if (a[e]) return n.createDecipheriv(e, t, r);
            if (s[e]) return new i({
                key: t,
                iv: r,
                mode: e,
                decrypt: true
            });
            throw new TypeError("invalid suite type");
        }
        function d() {
            return Object.keys(s).concat(n.getCiphers());
        }
        r.createCipher = r.Cipher = o;
        r.createCipheriv = r.Cipheriv = u;
        r.createDecipher = r.Decipher = c;
        r.createDecipheriv = r.Decipheriv = h;
        r.listCiphers = r.getCiphers = d;
    }, {
        "browserify-aes/browser": 37,
        "browserify-aes/modes": 48,
        "browserify-des": 53,
        "browserify-des/modes": 54,
        evp_bytestokey: 122
    } ],
    53: [ function(e, t, r) {
        (function(r) {
            var i = e("cipher-base");
            var n = e("des.js");
            var a = e("inherits");
            var s = {
                "des-ede3-cbc": n.CBC.instantiate(n.EDE),
                "des-ede3": n.EDE,
                "des-ede-cbc": n.CBC.instantiate(n.EDE),
                "des-ede": n.EDE,
                "des-cbc": n.CBC.instantiate(n.DES),
                "des-ecb": n.DES
            };
            s.des = s["des-cbc"];
            s.des3 = s["des-ede3-cbc"];
            t.exports = f;
            a(f, i);
            function f(e) {
                i.call(this);
                var t = e.mode.toLowerCase();
                var n = s[t];
                var a;
                if (e.decrypt) {
                    a = "decrypt";
                } else {
                    a = "encrypt";
                }
                var f = e.key;
                if (t === "des-ede" || t === "des-ede-cbc") {
                    f = r.concat([ f, f.slice(0, 8) ]);
                }
                var o = e.iv;
                this._des = n.create({
                    key: f,
                    iv: o,
                    type: a
                });
            }
            f.prototype._update = function(e) {
                return new r(this._des.update(e));
            };
            f.prototype._final = function() {
                return new r(this._des.final());
            };
        }).call(this, e("buffer").Buffer);
    }, {
        buffer: 65,
        "cipher-base": 66,
        "des.js": 95,
        inherits: 139
    } ],
    54: [ function(e, t, r) {
        r["des-ecb"] = {
            key: 8,
            iv: 0
        };
        r["des-cbc"] = r.des = {
            key: 8,
            iv: 8
        };
        r["des-ede3-cbc"] = r.des3 = {
            key: 24,
            iv: 8
        };
        r["des-ede3"] = {
            key: 24,
            iv: 0
        };
        r["des-ede-cbc"] = {
            key: 16,
            iv: 8
        };
        r["des-ede"] = {
            key: 16,
            iv: 0
        };
    }, {} ],
    55: [ function(e, t, r) {
        (function(r) {
            var i = e("bn.js");
            var n = e("randombytes");
            t.exports = s;
            function a(e) {
                var t = f(e);
                var r = t.toRed(i.mont(e.modulus)).redPow(new i(e.publicExponent)).fromRed();
                return {
                    blinder: r,
                    unblinder: t.invm(e.modulus)
                };
            }
            function s(e, t) {
                var n = a(t);
                var s = t.modulus.byteLength();
                var f = i.mont(t.modulus);
                var o = new i(e).mul(n.blinder).umod(t.modulus);
                var c = o.toRed(i.mont(t.prime1));
                var u = o.toRed(i.mont(t.prime2));
                var h = t.coefficient;
                var d = t.prime1;
                var l = t.prime2;
                var p = c.redPow(t.exponent1);
                var v = u.redPow(t.exponent2);
                p = p.fromRed();
                v = v.fromRed();
                var b = p.isub(v).imul(h).umod(d);
                b.imul(l);
                v.iadd(b);
                return new r(v.imul(n.unblinder).umod(t.modulus).toArray(false, s));
            }
            s.getr = f;
            function f(e) {
                var t = e.modulus.byteLength();
                var r = new i(n(t));
                while (r.cmp(e.modulus) >= 0 || !r.umod(e.prime1) || !r.umod(e.prime2)) {
                    r = new i(n(t));
                }
                return r;
            }
        }).call(this, e("buffer").Buffer);
    }, {
        "bn.js": 32,
        buffer: 65,
        randombytes: 218
    } ],
    56: [ function(e, t, r) {
        t.exports = e("./browser/algorithms.json");
    }, {
        "./browser/algorithms.json": 57
    } ],
    57: [ function(e, t, r) {
        t.exports = {
            sha224WithRSAEncryption: {
                sign: "rsa",
                hash: "sha224",
                id: "302d300d06096086480165030402040500041c"
            },
            "RSA-SHA224": {
                sign: "ecdsa/rsa",
                hash: "sha224",
                id: "302d300d06096086480165030402040500041c"
            },
            sha256WithRSAEncryption: {
                sign: "rsa",
                hash: "sha256",
                id: "3031300d060960864801650304020105000420"
            },
            "RSA-SHA256": {
                sign: "ecdsa/rsa",
                hash: "sha256",
                id: "3031300d060960864801650304020105000420"
            },
            sha384WithRSAEncryption: {
                sign: "rsa",
                hash: "sha384",
                id: "3041300d060960864801650304020205000430"
            },
            "RSA-SHA384": {
                sign: "ecdsa/rsa",
                hash: "sha384",
                id: "3041300d060960864801650304020205000430"
            },
            sha512WithRSAEncryption: {
                sign: "rsa",
                hash: "sha512",
                id: "3051300d060960864801650304020305000440"
            },
            "RSA-SHA512": {
                sign: "ecdsa/rsa",
                hash: "sha512",
                id: "3051300d060960864801650304020305000440"
            },
            "RSA-SHA1": {
                sign: "rsa",
                hash: "sha1",
                id: "3021300906052b0e03021a05000414"
            },
            "ecdsa-with-SHA1": {
                sign: "ecdsa",
                hash: "sha1",
                id: ""
            },
            sha256: {
                sign: "ecdsa",
                hash: "sha256",
                id: ""
            },
            sha224: {
                sign: "ecdsa",
                hash: "sha224",
                id: ""
            },
            sha384: {
                sign: "ecdsa",
                hash: "sha384",
                id: ""
            },
            sha512: {
                sign: "ecdsa",
                hash: "sha512",
                id: ""
            },
            "DSA-SHA": {
                sign: "dsa",
                hash: "sha1",
                id: ""
            },
            "DSA-SHA1": {
                sign: "dsa",
                hash: "sha1",
                id: ""
            },
            DSA: {
                sign: "dsa",
                hash: "sha1",
                id: ""
            },
            "DSA-WITH-SHA224": {
                sign: "dsa",
                hash: "sha224",
                id: ""
            },
            "DSA-SHA224": {
                sign: "dsa",
                hash: "sha224",
                id: ""
            },
            "DSA-WITH-SHA256": {
                sign: "dsa",
                hash: "sha256",
                id: ""
            },
            "DSA-SHA256": {
                sign: "dsa",
                hash: "sha256",
                id: ""
            },
            "DSA-WITH-SHA384": {
                sign: "dsa",
                hash: "sha384",
                id: ""
            },
            "DSA-SHA384": {
                sign: "dsa",
                hash: "sha384",
                id: ""
            },
            "DSA-WITH-SHA512": {
                sign: "dsa",
                hash: "sha512",
                id: ""
            },
            "DSA-SHA512": {
                sign: "dsa",
                hash: "sha512",
                id: ""
            },
            "DSA-RIPEMD160": {
                sign: "dsa",
                hash: "rmd160",
                id: ""
            },
            ripemd160WithRSA: {
                sign: "rsa",
                hash: "rmd160",
                id: "3021300906052b2403020105000414"
            },
            "RSA-RIPEMD160": {
                sign: "rsa",
                hash: "rmd160",
                id: "3021300906052b2403020105000414"
            },
            md5WithRSAEncryption: {
                sign: "rsa",
                hash: "md5",
                id: "3020300c06082a864886f70d020505000410"
            },
            "RSA-MD5": {
                sign: "rsa",
                hash: "md5",
                id: "3020300c06082a864886f70d020505000410"
            }
        };
    }, {} ],
    58: [ function(e, t, r) {
        t.exports = {
            "1.3.132.0.10": "secp256k1",
            "1.3.132.0.33": "p224",
            "1.2.840.10045.3.1.1": "p192",
            "1.2.840.10045.3.1.7": "p256",
            "1.3.132.0.34": "p384",
            "1.3.132.0.35": "p521"
        };
    }, {} ],
    59: [ function(e, t, r) {
        (function(r) {
            var i = e("create-hash");
            var n = e("stream");
            var a = e("inherits");
            var s = e("./sign");
            var f = e("./verify");
            var o = e("./algorithms.json");
            Object.keys(o).forEach(function(e) {
                o[e].id = new r(o[e].id, "hex");
                o[e.toLowerCase()] = o[e];
            });
            function c(e) {
                n.Writable.call(this);
                var t = o[e];
                if (!t) throw new Error("Unknown message digest");
                this._hashType = t.hash;
                this._hash = i(t.hash);
                this._tag = t.id;
                this._signType = t.sign;
            }
            a(c, n.Writable);
            c.prototype._write = function e(t, r, i) {
                this._hash.update(t);
                i();
            };
            c.prototype.update = function e(t, i) {
                if (typeof t === "string") t = new r(t, i);
                this._hash.update(t);
                return this;
            };
            c.prototype.sign = function e(t, r) {
                this.end();
                var i = this._hash.digest();
                var n = s(i, t, this._hashType, this._signType, this._tag);
                return r ? n.toString(r) : n;
            };
            function u(e) {
                n.Writable.call(this);
                var t = o[e];
                if (!t) throw new Error("Unknown message digest");
                this._hash = i(t.hash);
                this._tag = t.id;
                this._signType = t.sign;
            }
            a(u, n.Writable);
            u.prototype._write = function e(t, r, i) {
                this._hash.update(t);
                i();
            };
            u.prototype.update = function e(t, i) {
                if (typeof t === "string") t = new r(t, i);
                this._hash.update(t);
                return this;
            };
            u.prototype.verify = function e(t, i, n) {
                if (typeof i === "string") i = new r(i, n);
                this.end();
                var a = this._hash.digest();
                return f(i, a, t, this._signType, this._tag);
            };
            function h(e) {
                return new c(e);
            }
            function d(e) {
                return new u(e);
            }
            t.exports = {
                Sign: h,
                Verify: d,
                createSign: h,
                createVerify: d
            };
        }).call(this, e("buffer").Buffer);
    }, {
        "./algorithms.json": 57,
        "./sign": 60,
        "./verify": 61,
        buffer: 65,
        "create-hash": 90,
        inherits: 139,
        stream: 240
    } ],
    60: [ function(e, t, r) {
        (function(r) {
            var i = e("create-hmac");
            var n = e("browserify-rsa");
            var a = e("elliptic").ec;
            var s = e("bn.js");
            var f = e("parse-asn1");
            var o = e("./curves.json");
            function c(e, t, i, a, s) {
                var o = f(t);
                if (o.curve) {
                    if (a !== "ecdsa" && a !== "ecdsa/rsa") throw new Error("wrong private key type");
                    return u(e, o);
                } else if (o.type === "dsa") {
                    if (a !== "dsa") throw new Error("wrong private key type");
                    return h(e, o, i);
                } else {
                    if (a !== "rsa" && a !== "ecdsa/rsa") throw new Error("wrong private key type");
                }
                e = r.concat([ s, e ]);
                var c = o.modulus.byteLength();
                var d = [ 0, 1 ];
                while (e.length + d.length + 1 < c) d.push(255);
                d.push(0);
                var l = -1;
                while (++l < e.length) d.push(e[l]);
                var p = n(d, o);
                return p;
            }
            function u(e, t) {
                var i = o[t.curve.join(".")];
                if (!i) throw new Error("unknown curve " + t.curve.join("."));
                var n = new a(i);
                var s = n.keyFromPrivate(t.privateKey);
                var f = s.sign(e);
                return new r(f.toDER());
            }
            function h(e, t, r) {
                var i = t.params.priv_key;
                var n = t.params.p;
                var a = t.params.q;
                var f = t.params.g;
                var o = new s(0);
                var c;
                var u = p(e, a).mod(a);
                var h = false;
                var v = l(i, a, e, r);
                while (h === false) {
                    c = b(a, v, r);
                    o = m(f, c, n, a);
                    h = c.invm(a).imul(u.add(i.mul(o))).mod(a);
                    if (h.cmpn(0) === 0) {
                        h = false;
                        o = new s(0);
                    }
                }
                return d(o, h);
            }
            function d(e, t) {
                e = e.toArray();
                t = t.toArray();
                if (e[0] & 128) e = [ 0 ].concat(e);
                if (t[0] & 128) t = [ 0 ].concat(t);
                var i = e.length + t.length + 4;
                var n = [ 48, i, 2, e.length ];
                n = n.concat(e, [ 2, t.length ], t);
                return new r(n);
            }
            function l(e, t, n, a) {
                e = new r(e.toArray());
                if (e.length < t.byteLength()) {
                    var s = new r(t.byteLength() - e.length);
                    s.fill(0);
                    e = r.concat([ s, e ]);
                }
                var f = n.length;
                var o = v(n, t);
                var c = new r(f);
                c.fill(1);
                var u = new r(f);
                u.fill(0);
                u = i(a, u).update(c).update(new r([ 0 ])).update(e).update(o).digest();
                c = i(a, u).update(c).digest();
                u = i(a, u).update(c).update(new r([ 1 ])).update(e).update(o).digest();
                c = i(a, u).update(c).digest();
                return {
                    k: u,
                    v: c
                };
            }
            function p(e, t) {
                var r = new s(e);
                var i = (e.length << 3) - t.bitLength();
                if (i > 0) r.ishrn(i);
                return r;
            }
            function v(e, t) {
                e = p(e, t);
                e = e.mod(t);
                var i = new r(e.toArray());
                if (i.length < t.byteLength()) {
                    var n = new r(t.byteLength() - i.length);
                    n.fill(0);
                    i = r.concat([ n, i ]);
                }
                return i;
            }
            function b(e, t, n) {
                var a;
                var s;
                do {
                    a = new r(0);
                    while (a.length * 8 < e.bitLength()) {
                        t.v = i(n, t.k).update(t.v).digest();
                        a = r.concat([ a, t.v ]);
                    }
                    s = p(a, e);
                    t.k = i(n, t.k).update(t.v).update(new r([ 0 ])).digest();
                    t.v = i(n, t.k).update(t.v).digest();
                } while (s.cmp(e) !== -1);
                return s;
            }
            function m(e, t, r, i) {
                return e.toRed(s.mont(r)).redPow(t).fromRed().mod(i);
            }
            t.exports = c;
            t.exports.getKey = l;
            t.exports.makeKey = b;
        }).call(this, e("buffer").Buffer);
    }, {
        "./curves.json": 58,
        "bn.js": 32,
        "browserify-rsa": 55,
        buffer: 65,
        "create-hmac": 92,
        elliptic: 105,
        "parse-asn1": 203
    } ],
    61: [ function(e, t, r) {
        (function(r) {
            var i = e("bn.js");
            var n = e("elliptic").ec;
            var a = e("parse-asn1");
            var s = e("./curves.json");
            function f(e, t, n, s, f) {
                var u = a(n);
                if (u.type === "ec") {
                    if (s !== "ecdsa" && s !== "ecdsa/rsa") throw new Error("wrong public key type");
                    return o(e, t, u);
                } else if (u.type === "dsa") {
                    if (s !== "dsa") throw new Error("wrong public key type");
                    return c(e, t, u);
                } else {
                    if (s !== "rsa" && s !== "ecdsa/rsa") throw new Error("wrong public key type");
                }
                t = r.concat([ f, t ]);
                var h = u.modulus.byteLength();
                var d = [ 1 ];
                var l = 0;
                while (t.length + d.length + 2 < h) {
                    d.push(255);
                    l++;
                }
                d.push(0);
                var p = -1;
                while (++p < t.length) {
                    d.push(t[p]);
                }
                d = new r(d);
                var v = i.mont(u.modulus);
                e = new i(e).toRed(v);
                e = e.redPow(new i(u.publicExponent));
                e = new r(e.fromRed().toArray());
                var b = l < 8 ? 1 : 0;
                h = Math.min(e.length, d.length);
                if (e.length !== d.length) b = 1;
                p = -1;
                while (++p < h) b |= e[p] ^ d[p];
                return b === 0;
            }
            function o(e, t, r) {
                var i = s[r.data.algorithm.curve.join(".")];
                if (!i) throw new Error("unknown curve " + r.data.algorithm.curve.join("."));
                var a = new n(i);
                var f = r.data.subjectPrivateKey.data;
                return a.verify(t, e, f);
            }
            function c(e, t, r) {
                var n = r.data.p;
                var s = r.data.q;
                var f = r.data.g;
                var o = r.data.pub_key;
                var c = a.signature.decode(e, "der");
                var h = c.s;
                var d = c.r;
                u(h, s);
                u(d, s);
                var l = i.mont(n);
                var p = h.invm(s);
                var v = f.toRed(l).redPow(new i(t).mul(p).mod(s)).fromRed().mul(o.toRed(l).redPow(d.mul(p).mod(s)).fromRed()).mod(n).mod(s);
                return v.cmp(d) === 0;
            }
            function u(e, t) {
                if (e.cmpn(0) <= 0) throw new Error("invalid sig");
                if (e.cmp(t) >= t) throw new Error("invalid sig");
            }
            t.exports = f;
        }).call(this, e("buffer").Buffer);
    }, {
        "./curves.json": 58,
        "bn.js": 32,
        buffer: 65,
        elliptic: 105,
        "parse-asn1": 203
    } ],
    62: [ function(e, t, r) {
        arguments[4][34][0].apply(r, arguments);
    }, {
        dup: 34
    } ],
    63: [ function(e, t, r) {
        "use strict";
        var i = e("safe-buffer").Buffer;
        var n = i.isEncoding || function(e) {
            e = "" + e;
            switch (e && e.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return true;

              default:
                return false;
            }
        };
        function a(e) {
            if (!e) return "utf8";
            var t;
            while (true) {
                switch (e) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";

                  case "latin1":
                  case "binary":
                    return "latin1";

                  case "base64":
                  case "ascii":
                  case "hex":
                    return e;

                  default:
                    if (t) return;
                    e = ("" + e).toLowerCase();
                    t = true;
                }
            }
        }
        function s(e) {
            var t = a(e);
            if (typeof t !== "string" && (i.isEncoding === n || !n(e))) throw new Error("Unknown encoding: " + e);
            return t || e;
        }
        r.StringDecoder = f;
        function f(e) {
            this.encoding = s(e);
            var t;
            switch (this.encoding) {
              case "utf16le":
                this.text = p;
                this.end = v;
                t = 4;
                break;

              case "utf8":
                this.fillLast = h;
                t = 4;
                break;

              case "base64":
                this.text = b;
                this.end = m;
                t = 3;
                break;

              default:
                this.write = g;
                this.end = y;
                return;
            }
            this.lastNeed = 0;
            this.lastTotal = 0;
            this.lastChar = i.allocUnsafe(t);
        }
        f.prototype.write = function(e) {
            if (e.length === 0) return "";
            var t;
            var r;
            if (this.lastNeed) {
                t = this.fillLast(e);
                if (t === undefined) return "";
                r = this.lastNeed;
                this.lastNeed = 0;
            } else {
                r = 0;
            }
            if (r < e.length) return t ? t + this.text(e, r) : this.text(e, r);
            return t || "";
        };
        f.prototype.end = l;
        f.prototype.text = d;
        f.prototype.fillLast = function(e) {
            if (this.lastNeed <= e.length) {
                e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
                return this.lastChar.toString(this.encoding, 0, this.lastTotal);
            }
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length);
            this.lastNeed -= e.length;
        };
        function o(e) {
            if (e <= 127) return 0; else if (e >> 5 === 6) return 2; else if (e >> 4 === 14) return 3; else if (e >> 3 === 30) return 4;
            return e >> 6 === 2 ? -1 : -2;
        }
        function c(e, t, r) {
            var i = t.length - 1;
            if (i < r) return 0;
            var n = o(t[i]);
            if (n >= 0) {
                if (n > 0) e.lastNeed = n - 1;
                return n;
            }
            if (--i < r || n === -2) return 0;
            n = o(t[i]);
            if (n >= 0) {
                if (n > 0) e.lastNeed = n - 2;
                return n;
            }
            if (--i < r || n === -2) return 0;
            n = o(t[i]);
            if (n >= 0) {
                if (n > 0) {
                    if (n === 2) n = 0; else e.lastNeed = n - 3;
                }
                return n;
            }
            return 0;
        }
        function u(e, t, r) {
            if ((t[0] & 192) !== 128) {
                e.lastNeed = 0;
                return "�";
            }
            if (e.lastNeed > 1 && t.length > 1) {
                if ((t[1] & 192) !== 128) {
                    e.lastNeed = 1;
                    return "�";
                }
                if (e.lastNeed > 2 && t.length > 2) {
                    if ((t[2] & 192) !== 128) {
                        e.lastNeed = 2;
                        return "�";
                    }
                }
            }
        }
        function h(e) {
            var t = this.lastTotal - this.lastNeed;
            var r = u(this, e, t);
            if (r !== undefined) return r;
            if (this.lastNeed <= e.length) {
                e.copy(this.lastChar, t, 0, this.lastNeed);
                return this.lastChar.toString(this.encoding, 0, this.lastTotal);
            }
            e.copy(this.lastChar, t, 0, e.length);
            this.lastNeed -= e.length;
        }
        function d(e, t) {
            var r = c(this, e, t);
            if (!this.lastNeed) return e.toString("utf8", t);
            this.lastTotal = r;
            var i = e.length - (r - this.lastNeed);
            e.copy(this.lastChar, 0, i);
            return e.toString("utf8", t, i);
        }
        function l(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) return t + "�";
            return t;
        }
        function p(e, t) {
            if ((e.length - t) % 2 === 0) {
                var r = e.toString("utf16le", t);
                if (r) {
                    var i = r.charCodeAt(r.length - 1);
                    if (i >= 55296 && i <= 56319) {
                        this.lastNeed = 2;
                        this.lastTotal = 4;
                        this.lastChar[0] = e[e.length - 2];
                        this.lastChar[1] = e[e.length - 1];
                        return r.slice(0, -1);
                    }
                }
                return r;
            }
            this.lastNeed = 1;
            this.lastTotal = 2;
            this.lastChar[0] = e[e.length - 1];
            return e.toString("utf16le", t, e.length - 1);
        }
        function v(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
                var r = this.lastTotal - this.lastNeed;
                return t + this.lastChar.toString("utf16le", 0, r);
            }
            return t;
        }
        function b(e, t) {
            var r = (e.length - t) % 3;
            if (r === 0) return e.toString("base64", t);
            this.lastNeed = 3 - r;
            this.lastTotal = 3;
            if (r === 1) {
                this.lastChar[0] = e[e.length - 1];
            } else {
                this.lastChar[0] = e[e.length - 2];
                this.lastChar[1] = e[e.length - 1];
            }
            return e.toString("base64", t, e.length - r);
        }
        function m(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) return t + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
            return t;
        }
        function g(e) {
            return e.toString(this.encoding);
        }
        function y(e) {
            return e && e.length ? this.write(e) : "";
        }
    }, {
        "safe-buffer": 231
    } ],
    64: [ function(e, t, r) {
        (function(e) {
            t.exports = function t(r, i) {
                var n = Math.min(r.length, i.length);
                var a = new e(n);
                for (var s = 0; s < n; ++s) {
                    a[s] = r[s] ^ i[s];
                }
                return a;
            };
        }).call(this, e("buffer").Buffer);
    }, {
        buffer: 65
    } ],
    65: [ function(e, t, r) {
        "use strict";
        var i = e("base64-js");
        var n = e("ieee754");
        r.Buffer = o;
        r.SlowBuffer = g;
        r.INSPECT_MAX_BYTES = 50;
        var a = 2147483647;
        r.kMaxLength = a;
        o.TYPED_ARRAY_SUPPORT = s();
        if (!o.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
            console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
        }
        function s() {
            try {
                var e = new Uint8Array(1);
                e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42;
                    }
                };
                return e.foo() === 42;
            } catch (e) {
                return false;
            }
        }
        Object.defineProperty(o.prototype, "parent", {
            get: function() {
                if (!(this instanceof o)) {
                    return undefined;
                }
                return this.buffer;
            }
        });
        Object.defineProperty(o.prototype, "offset", {
            get: function() {
                if (!(this instanceof o)) {
                    return undefined;
                }
                return this.byteOffset;
            }
        });
        function f(e) {
            if (e > a) {
                throw new RangeError("Invalid typed array length");
            }
            var t = new Uint8Array(e);
            t.__proto__ = o.prototype;
            return t;
        }
        function o(e, t, r) {
            if (typeof e === "number") {
                if (typeof t === "string") {
                    throw new Error("If encoding is specified then the first argument must be a string");
                }
                return d(e);
            }
            return c(e, t, r);
        }
        if (typeof Symbol !== "undefined" && Symbol.species && o[Symbol.species] === o) {
            Object.defineProperty(o, Symbol.species, {
                value: null,
                configurable: true,
                enumerable: false,
                writable: false
            });
        }
        o.poolSize = 8192;
        function c(e, t, r) {
            if (typeof e === "number") {
                throw new TypeError('"value" argument must not be a number');
            }
            if (J(e) || e && J(e.buffer)) {
                return v(e, t, r);
            }
            if (typeof e === "string") {
                return l(e, t);
            }
            return b(e);
        }
        o.from = function(e, t, r) {
            return c(e, t, r);
        };
        o.prototype.__proto__ = Uint8Array.prototype;
        o.__proto__ = Uint8Array;
        function u(e) {
            if (typeof e !== "number") {
                throw new TypeError('"size" argument must be of type number');
            } else if (e < 0) {
                throw new RangeError('"size" argument must not be negative');
            }
        }
        function h(e, t, r) {
            u(e);
            if (e <= 0) {
                return f(e);
            }
            if (t !== undefined) {
                return typeof r === "string" ? f(e).fill(t, r) : f(e).fill(t);
            }
            return f(e);
        }
        o.alloc = function(e, t, r) {
            return h(e, t, r);
        };
        function d(e) {
            u(e);
            return f(e < 0 ? 0 : m(e) | 0);
        }
        o.allocUnsafe = function(e) {
            return d(e);
        };
        o.allocUnsafeSlow = function(e) {
            return d(e);
        };
        function l(e, t) {
            if (typeof t !== "string" || t === "") {
                t = "utf8";
            }
            if (!o.isEncoding(t)) {
                throw new TypeError("Unknown encoding: " + t);
            }
            var r = y(e, t) | 0;
            var i = f(r);
            var n = i.write(e, t);
            if (n !== r) {
                i = i.slice(0, n);
            }
            return i;
        }
        function p(e) {
            var t = e.length < 0 ? 0 : m(e.length) | 0;
            var r = f(t);
            for (var i = 0; i < t; i += 1) {
                r[i] = e[i] & 255;
            }
            return r;
        }
        function v(e, t, r) {
            if (t < 0 || e.byteLength < t) {
                throw new RangeError('"offset" is outside of buffer bounds');
            }
            if (e.byteLength < t + (r || 0)) {
                throw new RangeError('"length" is outside of buffer bounds');
            }
            var i;
            if (t === undefined && r === undefined) {
                i = new Uint8Array(e);
            } else if (r === undefined) {
                i = new Uint8Array(e, t);
            } else {
                i = new Uint8Array(e, t, r);
            }
            i.__proto__ = o.prototype;
            return i;
        }
        function b(e) {
            if (o.isBuffer(e)) {
                var t = m(e.length) | 0;
                var r = f(t);
                if (r.length === 0) {
                    return r;
                }
                e.copy(r, 0, 0, t);
                return r;
            }
            if (e) {
                if (ArrayBuffer.isView(e) || "length" in e) {
                    if (typeof e.length !== "number" || Q(e.length)) {
                        return f(0);
                    }
                    return p(e);
                }
                if (e.type === "Buffer" && Array.isArray(e.data)) {
                    return p(e.data);
                }
            }
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object.");
        }
        function m(e) {
            if (e >= a) {
                throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + a.toString(16) + " bytes");
            }
            return e | 0;
        }
        function g(e) {
            if (+e != e) {
                e = 0;
            }
            return o.alloc(+e);
        }
        o.isBuffer = function e(t) {
            return t != null && t._isBuffer === true;
        };
        o.compare = function e(t, r) {
            if (!o.isBuffer(t) || !o.isBuffer(r)) {
                throw new TypeError("Arguments must be Buffers");
            }
            if (t === r) return 0;
            var i = t.length;
            var n = r.length;
            for (var a = 0, s = Math.min(i, n); a < s; ++a) {
                if (t[a] !== r[a]) {
                    i = t[a];
                    n = r[a];
                    break;
                }
            }
            if (i < n) return -1;
            if (n < i) return 1;
            return 0;
        };
        o.isEncoding = function e(t) {
            switch (String(t).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return true;

              default:
                return false;
            }
        };
        o.concat = function e(t, r) {
            if (!Array.isArray(t)) {
                throw new TypeError('"list" argument must be an Array of Buffers');
            }
            if (t.length === 0) {
                return o.alloc(0);
            }
            var i;
            if (r === undefined) {
                r = 0;
                for (i = 0; i < t.length; ++i) {
                    r += t[i].length;
                }
            }
            var n = o.allocUnsafe(r);
            var a = 0;
            for (i = 0; i < t.length; ++i) {
                var s = t[i];
                if (ArrayBuffer.isView(s)) {
                    s = o.from(s);
                }
                if (!o.isBuffer(s)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                s.copy(n, a);
                a += s.length;
            }
            return n;
        };
        function y(e, t) {
            if (o.isBuffer(e)) {
                return e.length;
            }
            if (ArrayBuffer.isView(e) || J(e)) {
                return e.byteLength;
            }
            if (typeof e !== "string") {
                e = "" + e;
            }
            var r = e.length;
            if (r === 0) return 0;
            var i = false;
            for (;;) {
                switch (t) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return r;

                  case "utf8":
                  case "utf-8":
                  case undefined:
                    return Z(e).length;

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return r * 2;

                  case "hex":
                    return r >>> 1;

                  case "base64":
                    return X(e).length;

                  default:
                    if (i) return Z(e).length;
                    t = ("" + t).toLowerCase();
                    i = true;
                }
            }
        }
        o.byteLength = y;
        function w(e, t, r) {
            var i = false;
            if (t === undefined || t < 0) {
                t = 0;
            }
            if (t > this.length) {
                return "";
            }
            if (r === undefined || r > this.length) {
                r = this.length;
            }
            if (r <= 0) {
                return "";
            }
            r >>>= 0;
            t >>>= 0;
            if (r <= t) {
                return "";
            }
            if (!e) e = "utf8";
            while (true) {
                switch (e) {
                  case "hex":
                    return D(this, t, r);

                  case "utf8":
                  case "utf-8":
                    return C(this, t, r);

                  case "ascii":
                    return T(this, t, r);

                  case "latin1":
                  case "binary":
                    return O(this, t, r);

                  case "base64":
                    return j(this, t, r);

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return P(this, t, r);

                  default:
                    if (i) throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase();
                    i = true;
                }
            }
        }
        o.prototype._isBuffer = true;
        function _(e, t, r) {
            var i = e[t];
            e[t] = e[r];
            e[r] = i;
        }
        o.prototype.swap16 = function e() {
            var t = this.length;
            if (t % 2 !== 0) {
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            }
            for (var r = 0; r < t; r += 2) {
                _(this, r, r + 1);
            }
            return this;
        };
        o.prototype.swap32 = function e() {
            var t = this.length;
            if (t % 4 !== 0) {
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            }
            for (var r = 0; r < t; r += 4) {
                _(this, r, r + 3);
                _(this, r + 1, r + 2);
            }
            return this;
        };
        o.prototype.swap64 = function e() {
            var t = this.length;
            if (t % 8 !== 0) {
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            }
            for (var r = 0; r < t; r += 8) {
                _(this, r, r + 7);
                _(this, r + 1, r + 6);
                _(this, r + 2, r + 5);
                _(this, r + 3, r + 4);
            }
            return this;
        };
        o.prototype.toString = function e() {
            var t = this.length;
            if (t === 0) return "";
            if (arguments.length === 0) return C(this, 0, t);
            return w.apply(this, arguments);
        };
        o.prototype.toLocaleString = o.prototype.toString;
        o.prototype.equals = function e(t) {
            if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            if (this === t) return true;
            return o.compare(this, t) === 0;
        };
        o.prototype.inspect = function e() {
            var t = "";
            var i = r.INSPECT_MAX_BYTES;
            if (this.length > 0) {
                t = this.toString("hex", 0, i).match(/.{2}/g).join(" ");
                if (this.length > i) t += " ... ";
            }
            return "<Buffer " + t + ">";
        };
        o.prototype.compare = function e(t, r, i, n, a) {
            if (!o.isBuffer(t)) {
                throw new TypeError("Argument must be a Buffer");
            }
            if (r === undefined) {
                r = 0;
            }
            if (i === undefined) {
                i = t ? t.length : 0;
            }
            if (n === undefined) {
                n = 0;
            }
            if (a === undefined) {
                a = this.length;
            }
            if (r < 0 || i > t.length || n < 0 || a > this.length) {
                throw new RangeError("out of range index");
            }
            if (n >= a && r >= i) {
                return 0;
            }
            if (n >= a) {
                return -1;
            }
            if (r >= i) {
                return 1;
            }
            r >>>= 0;
            i >>>= 0;
            n >>>= 0;
            a >>>= 0;
            if (this === t) return 0;
            var s = a - n;
            var f = i - r;
            var c = Math.min(s, f);
            var u = this.slice(n, a);
            var h = t.slice(r, i);
            for (var d = 0; d < c; ++d) {
                if (u[d] !== h[d]) {
                    s = u[d];
                    f = h[d];
                    break;
                }
            }
            if (s < f) return -1;
            if (f < s) return 1;
            return 0;
        };
        function S(e, t, r, i, n) {
            if (e.length === 0) return -1;
            if (typeof r === "string") {
                i = r;
                r = 0;
            } else if (r > 2147483647) {
                r = 2147483647;
            } else if (r < -2147483648) {
                r = -2147483648;
            }
            r = +r;
            if (Q(r)) {
                r = n ? 0 : e.length - 1;
            }
            if (r < 0) r = e.length + r;
            if (r >= e.length) {
                if (n) return -1; else r = e.length - 1;
            } else if (r < 0) {
                if (n) r = 0; else return -1;
            }
            if (typeof t === "string") {
                t = o.from(t, i);
            }
            if (o.isBuffer(t)) {
                if (t.length === 0) {
                    return -1;
                }
                return k(e, t, r, i, n);
            } else if (typeof t === "number") {
                t = t & 255;
                if (typeof Uint8Array.prototype.indexOf === "function") {
                    if (n) {
                        return Uint8Array.prototype.indexOf.call(e, t, r);
                    } else {
                        return Uint8Array.prototype.lastIndexOf.call(e, t, r);
                    }
                }
                return k(e, [ t ], r, i, n);
            }
            throw new TypeError("val must be string, number or Buffer");
        }
        function k(e, t, r, i, n) {
            var a = 1;
            var s = e.length;
            var f = t.length;
            if (i !== undefined) {
                i = String(i).toLowerCase();
                if (i === "ucs2" || i === "ucs-2" || i === "utf16le" || i === "utf-16le") {
                    if (e.length < 2 || t.length < 2) {
                        return -1;
                    }
                    a = 2;
                    s /= 2;
                    f /= 2;
                    r /= 2;
                }
            }
            function o(e, t) {
                if (a === 1) {
                    return e[t];
                } else {
                    return e.readUInt16BE(t * a);
                }
            }
            var c;
            if (n) {
                var u = -1;
                for (c = r; c < s; c++) {
                    if (o(e, c) === o(t, u === -1 ? 0 : c - u)) {
                        if (u === -1) u = c;
                        if (c - u + 1 === f) return u * a;
                    } else {
                        if (u !== -1) c -= c - u;
                        u = -1;
                    }
                }
            } else {
                if (r + f > s) r = s - f;
                for (c = r; c >= 0; c--) {
                    var h = true;
                    for (var d = 0; d < f; d++) {
                        if (o(e, c + d) !== o(t, d)) {
                            h = false;
                            break;
                        }
                    }
                    if (h) return c;
                }
            }
            return -1;
        }
        o.prototype.includes = function e(t, r, i) {
            return this.indexOf(t, r, i) !== -1;
        };
        o.prototype.indexOf = function e(t, r, i) {
            return S(this, t, r, i, true);
        };
        o.prototype.lastIndexOf = function e(t, r, i) {
            return S(this, t, r, i, false);
        };
        function x(e, t, r, i) {
            r = Number(r) || 0;
            var n = e.length - r;
            if (!i) {
                i = n;
            } else {
                i = Number(i);
                if (i > n) {
                    i = n;
                }
            }
            var a = t.length;
            if (i > a / 2) {
                i = a / 2;
            }
            for (var s = 0; s < i; ++s) {
                var f = parseInt(t.substr(s * 2, 2), 16);
                if (Q(f)) return s;
                e[r + s] = f;
            }
            return s;
        }
        function E(e, t, r, i) {
            return Y(Z(t, e.length - r), e, r, i);
        }
        function A(e, t, r, i) {
            return Y(V(t), e, r, i);
        }
        function M(e, t, r, i) {
            return A(e, t, r, i);
        }
        function B(e, t, r, i) {
            return Y(X(t), e, r, i);
        }
        function I(e, t, r, i) {
            return Y(G(t, e.length - r), e, r, i);
        }
        o.prototype.write = function e(t, r, i, n) {
            if (r === undefined) {
                n = "utf8";
                i = this.length;
                r = 0;
            } else if (i === undefined && typeof r === "string") {
                n = r;
                i = this.length;
                r = 0;
            } else if (isFinite(r)) {
                r = r >>> 0;
                if (isFinite(i)) {
                    i = i >>> 0;
                    if (n === undefined) n = "utf8";
                } else {
                    n = i;
                    i = undefined;
                }
            } else {
                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            }
            var a = this.length - r;
            if (i === undefined || i > a) i = a;
            if (t.length > 0 && (i < 0 || r < 0) || r > this.length) {
                throw new RangeError("Attempt to write outside buffer bounds");
            }
            if (!n) n = "utf8";
            var s = false;
            for (;;) {
                switch (n) {
                  case "hex":
                    return x(this, t, r, i);

                  case "utf8":
                  case "utf-8":
                    return E(this, t, r, i);

                  case "ascii":
                    return A(this, t, r, i);

                  case "latin1":
                  case "binary":
                    return M(this, t, r, i);

                  case "base64":
                    return B(this, t, r, i);

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return I(this, t, r, i);

                  default:
                    if (s) throw new TypeError("Unknown encoding: " + n);
                    n = ("" + n).toLowerCase();
                    s = true;
                }
            }
        };
        o.prototype.toJSON = function e() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            };
        };
        function j(e, t, r) {
            if (t === 0 && r === e.length) {
                return i.fromByteArray(e);
            } else {
                return i.fromByteArray(e.slice(t, r));
            }
        }
        function C(e, t, r) {
            r = Math.min(e.length, r);
            var i = [];
            var n = t;
            while (n < r) {
                var a = e[n];
                var s = null;
                var f = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
                if (n + f <= r) {
                    var o, c, u, h;
                    switch (f) {
                      case 1:
                        if (a < 128) {
                            s = a;
                        }
                        break;

                      case 2:
                        o = e[n + 1];
                        if ((o & 192) === 128) {
                            h = (a & 31) << 6 | o & 63;
                            if (h > 127) {
                                s = h;
                            }
                        }
                        break;

                      case 3:
                        o = e[n + 1];
                        c = e[n + 2];
                        if ((o & 192) === 128 && (c & 192) === 128) {
                            h = (a & 15) << 12 | (o & 63) << 6 | c & 63;
                            if (h > 2047 && (h < 55296 || h > 57343)) {
                                s = h;
                            }
                        }
                        break;

                      case 4:
                        o = e[n + 1];
                        c = e[n + 2];
                        u = e[n + 3];
                        if ((o & 192) === 128 && (c & 192) === 128 && (u & 192) === 128) {
                            h = (a & 15) << 18 | (o & 63) << 12 | (c & 63) << 6 | u & 63;
                            if (h > 65535 && h < 1114112) {
                                s = h;
                            }
                        }
                    }
                }
                if (s === null) {
                    s = 65533;
                    f = 1;
                } else if (s > 65535) {
                    s -= 65536;
                    i.push(s >>> 10 & 1023 | 55296);
                    s = 56320 | s & 1023;
                }
                i.push(s);
                n += f;
            }
            return z(i);
        }
        var R = 4096;
        function z(e) {
            var t = e.length;
            if (t <= R) {
                return String.fromCharCode.apply(String, e);
            }
            var r = "";
            var i = 0;
            while (i < t) {
                r += String.fromCharCode.apply(String, e.slice(i, i += R));
            }
            return r;
        }
        function T(e, t, r) {
            var i = "";
            r = Math.min(e.length, r);
            for (var n = t; n < r; ++n) {
                i += String.fromCharCode(e[n] & 127);
            }
            return i;
        }
        function O(e, t, r) {
            var i = "";
            r = Math.min(e.length, r);
            for (var n = t; n < r; ++n) {
                i += String.fromCharCode(e[n]);
            }
            return i;
        }
        function D(e, t, r) {
            var i = e.length;
            if (!t || t < 0) t = 0;
            if (!r || r < 0 || r > i) r = i;
            var n = "";
            for (var a = t; a < r; ++a) {
                n += H(e[a]);
            }
            return n;
        }
        function P(e, t, r) {
            var i = e.slice(t, r);
            var n = "";
            for (var a = 0; a < i.length; a += 2) {
                n += String.fromCharCode(i[a] + i[a + 1] * 256);
            }
            return n;
        }
        o.prototype.slice = function e(t, r) {
            var i = this.length;
            t = ~~t;
            r = r === undefined ? i : ~~r;
            if (t < 0) {
                t += i;
                if (t < 0) t = 0;
            } else if (t > i) {
                t = i;
            }
            if (r < 0) {
                r += i;
                if (r < 0) r = 0;
            } else if (r > i) {
                r = i;
            }
            if (r < t) r = t;
            var n = this.subarray(t, r);
            n.__proto__ = o.prototype;
            return n;
        };
        function L(e, t, r) {
            if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > r) throw new RangeError("Trying to access beyond buffer length");
        }
        o.prototype.readUIntLE = function e(t, r, i) {
            t = t >>> 0;
            r = r >>> 0;
            if (!i) L(t, r, this.length);
            var n = this[t];
            var a = 1;
            var s = 0;
            while (++s < r && (a *= 256)) {
                n += this[t + s] * a;
            }
            return n;
        };
        o.prototype.readUIntBE = function e(t, r, i) {
            t = t >>> 0;
            r = r >>> 0;
            if (!i) {
                L(t, r, this.length);
            }
            var n = this[t + --r];
            var a = 1;
            while (r > 0 && (a *= 256)) {
                n += this[t + --r] * a;
            }
            return n;
        };
        o.prototype.readUInt8 = function e(t, r) {
            t = t >>> 0;
            if (!r) L(t, 1, this.length);
            return this[t];
        };
        o.prototype.readUInt16LE = function e(t, r) {
            t = t >>> 0;
            if (!r) L(t, 2, this.length);
            return this[t] | this[t + 1] << 8;
        };
        o.prototype.readUInt16BE = function e(t, r) {
            t = t >>> 0;
            if (!r) L(t, 2, this.length);
            return this[t] << 8 | this[t + 1];
        };
        o.prototype.readUInt32LE = function e(t, r) {
            t = t >>> 0;
            if (!r) L(t, 4, this.length);
            return (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
        };
        o.prototype.readUInt32BE = function e(t, r) {
            t = t >>> 0;
            if (!r) L(t, 4, this.length);
            return this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
        };
        o.prototype.readIntLE = function e(t, r, i) {
            t = t >>> 0;
            r = r >>> 0;
            if (!i) L(t, r, this.length);
            var n = this[t];
            var a = 1;
            var s = 0;
            while (++s < r && (a *= 256)) {
                n += this[t + s] * a;
            }
            a *= 128;
            if (n >= a) n -= Math.pow(2, 8 * r);
            return n;
        };
        o.prototype.readIntBE = function e(t, r, i) {
            t = t >>> 0;
            r = r >>> 0;
            if (!i) L(t, r, this.length);
            var n = r;
            var a = 1;
            var s = this[t + --n];
            while (n > 0 && (a *= 256)) {
                s += this[t + --n] * a;
            }
            a *= 128;
            if (s >= a) s -= Math.pow(2, 8 * r);
            return s;
        };
        o.prototype.readInt8 = function e(t, r) {
            t = t >>> 0;
            if (!r) L(t, 1, this.length);
            if (!(this[t] & 128)) return this[t];
            return (255 - this[t] + 1) * -1;
        };
        o.prototype.readInt16LE = function e(t, r) {
            t = t >>> 0;
            if (!r) L(t, 2, this.length);
            var i = this[t] | this[t + 1] << 8;
            return i & 32768 ? i | 4294901760 : i;
        };
        o.prototype.readInt16BE = function e(t, r) {
            t = t >>> 0;
            if (!r) L(t, 2, this.length);
            var i = this[t + 1] | this[t] << 8;
            return i & 32768 ? i | 4294901760 : i;
        };
        o.prototype.readInt32LE = function e(t, r) {
            t = t >>> 0;
            if (!r) L(t, 4, this.length);
            return this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
        };
        o.prototype.readInt32BE = function e(t, r) {
            t = t >>> 0;
            if (!r) L(t, 4, this.length);
            return this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
        };
        o.prototype.readFloatLE = function e(t, r) {
            t = t >>> 0;
            if (!r) L(t, 4, this.length);
            return n.read(this, t, true, 23, 4);
        };
        o.prototype.readFloatBE = function e(t, r) {
            t = t >>> 0;
            if (!r) L(t, 4, this.length);
            return n.read(this, t, false, 23, 4);
        };
        o.prototype.readDoubleLE = function e(t, r) {
            t = t >>> 0;
            if (!r) L(t, 8, this.length);
            return n.read(this, t, true, 52, 8);
        };
        o.prototype.readDoubleBE = function e(t, r) {
            t = t >>> 0;
            if (!r) L(t, 8, this.length);
            return n.read(this, t, false, 52, 8);
        };
        function N(e, t, r, i, n, a) {
            if (!o.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > n || t < a) throw new RangeError('"value" argument is out of bounds');
            if (r + i > e.length) throw new RangeError("Index out of range");
        }
        o.prototype.writeUIntLE = function e(t, r, i, n) {
            t = +t;
            r = r >>> 0;
            i = i >>> 0;
            if (!n) {
                var a = Math.pow(2, 8 * i) - 1;
                N(this, t, r, i, a, 0);
            }
            var s = 1;
            var f = 0;
            this[r] = t & 255;
            while (++f < i && (s *= 256)) {
                this[r + f] = t / s & 255;
            }
            return r + i;
        };
        o.prototype.writeUIntBE = function e(t, r, i, n) {
            t = +t;
            r = r >>> 0;
            i = i >>> 0;
            if (!n) {
                var a = Math.pow(2, 8 * i) - 1;
                N(this, t, r, i, a, 0);
            }
            var s = i - 1;
            var f = 1;
            this[r + s] = t & 255;
            while (--s >= 0 && (f *= 256)) {
                this[r + s] = t / f & 255;
            }
            return r + i;
        };
        o.prototype.writeUInt8 = function e(t, r, i) {
            t = +t;
            r = r >>> 0;
            if (!i) N(this, t, r, 1, 255, 0);
            this[r] = t & 255;
            return r + 1;
        };
        o.prototype.writeUInt16LE = function e(t, r, i) {
            t = +t;
            r = r >>> 0;
            if (!i) N(this, t, r, 2, 65535, 0);
            this[r] = t & 255;
            this[r + 1] = t >>> 8;
            return r + 2;
        };
        o.prototype.writeUInt16BE = function e(t, r, i) {
            t = +t;
            r = r >>> 0;
            if (!i) N(this, t, r, 2, 65535, 0);
            this[r] = t >>> 8;
            this[r + 1] = t & 255;
            return r + 2;
        };
        o.prototype.writeUInt32LE = function e(t, r, i) {
            t = +t;
            r = r >>> 0;
            if (!i) N(this, t, r, 4, 4294967295, 0);
            this[r + 3] = t >>> 24;
            this[r + 2] = t >>> 16;
            this[r + 1] = t >>> 8;
            this[r] = t & 255;
            return r + 4;
        };
        o.prototype.writeUInt32BE = function e(t, r, i) {
            t = +t;
            r = r >>> 0;
            if (!i) N(this, t, r, 4, 4294967295, 0);
            this[r] = t >>> 24;
            this[r + 1] = t >>> 16;
            this[r + 2] = t >>> 8;
            this[r + 3] = t & 255;
            return r + 4;
        };
        o.prototype.writeIntLE = function e(t, r, i, n) {
            t = +t;
            r = r >>> 0;
            if (!n) {
                var a = Math.pow(2, 8 * i - 1);
                N(this, t, r, i, a - 1, -a);
            }
            var s = 0;
            var f = 1;
            var o = 0;
            this[r] = t & 255;
            while (++s < i && (f *= 256)) {
                if (t < 0 && o === 0 && this[r + s - 1] !== 0) {
                    o = 1;
                }
                this[r + s] = (t / f >> 0) - o & 255;
            }
            return r + i;
        };
        o.prototype.writeIntBE = function e(t, r, i, n) {
            t = +t;
            r = r >>> 0;
            if (!n) {
                var a = Math.pow(2, 8 * i - 1);
                N(this, t, r, i, a - 1, -a);
            }
            var s = i - 1;
            var f = 1;
            var o = 0;
            this[r + s] = t & 255;
            while (--s >= 0 && (f *= 256)) {
                if (t < 0 && o === 0 && this[r + s + 1] !== 0) {
                    o = 1;
                }
                this[r + s] = (t / f >> 0) - o & 255;
            }
            return r + i;
        };
        o.prototype.writeInt8 = function e(t, r, i) {
            t = +t;
            r = r >>> 0;
            if (!i) N(this, t, r, 1, 127, -128);
            if (t < 0) t = 255 + t + 1;
            this[r] = t & 255;
            return r + 1;
        };
        o.prototype.writeInt16LE = function e(t, r, i) {
            t = +t;
            r = r >>> 0;
            if (!i) N(this, t, r, 2, 32767, -32768);
            this[r] = t & 255;
            this[r + 1] = t >>> 8;
            return r + 2;
        };
        o.prototype.writeInt16BE = function e(t, r, i) {
            t = +t;
            r = r >>> 0;
            if (!i) N(this, t, r, 2, 32767, -32768);
            this[r] = t >>> 8;
            this[r + 1] = t & 255;
            return r + 2;
        };
        o.prototype.writeInt32LE = function e(t, r, i) {
            t = +t;
            r = r >>> 0;
            if (!i) N(this, t, r, 4, 2147483647, -2147483648);
            this[r] = t & 255;
            this[r + 1] = t >>> 8;
            this[r + 2] = t >>> 16;
            this[r + 3] = t >>> 24;
            return r + 4;
        };
        o.prototype.writeInt32BE = function e(t, r, i) {
            t = +t;
            r = r >>> 0;
            if (!i) N(this, t, r, 4, 2147483647, -2147483648);
            if (t < 0) t = 4294967295 + t + 1;
            this[r] = t >>> 24;
            this[r + 1] = t >>> 16;
            this[r + 2] = t >>> 8;
            this[r + 3] = t & 255;
            return r + 4;
        };
        function U(e, t, r, i, n, a) {
            if (r + i > e.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("Index out of range");
        }
        function F(e, t, r, i, a) {
            t = +t;
            r = r >>> 0;
            if (!a) {
                U(e, t, r, 4, 3.4028234663852886e38, -3.4028234663852886e38);
            }
            n.write(e, t, r, i, 23, 4);
            return r + 4;
        }
        o.prototype.writeFloatLE = function e(t, r, i) {
            return F(this, t, r, true, i);
        };
        o.prototype.writeFloatBE = function e(t, r, i) {
            return F(this, t, r, false, i);
        };
        function q(e, t, r, i, a) {
            t = +t;
            r = r >>> 0;
            if (!a) {
                U(e, t, r, 8, 1.7976931348623157e308, -1.7976931348623157e308);
            }
            n.write(e, t, r, i, 52, 8);
            return r + 8;
        }
        o.prototype.writeDoubleLE = function e(t, r, i) {
            return q(this, t, r, true, i);
        };
        o.prototype.writeDoubleBE = function e(t, r, i) {
            return q(this, t, r, false, i);
        };
        o.prototype.copy = function e(t, r, i, n) {
            if (!o.isBuffer(t)) throw new TypeError("argument should be a Buffer");
            if (!i) i = 0;
            if (!n && n !== 0) n = this.length;
            if (r >= t.length) r = t.length;
            if (!r) r = 0;
            if (n > 0 && n < i) n = i;
            if (n === i) return 0;
            if (t.length === 0 || this.length === 0) return 0;
            if (r < 0) {
                throw new RangeError("targetStart out of bounds");
            }
            if (i < 0 || i >= this.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            if (n > this.length) n = this.length;
            if (t.length - r < n - i) {
                n = t.length - r + i;
            }
            var a = n - i;
            if (this === t && typeof Uint8Array.prototype.copyWithin === "function") {
                this.copyWithin(r, i, n);
            } else if (this === t && i < r && r < n) {
                for (var s = a - 1; s >= 0; --s) {
                    t[s + r] = this[s + i];
                }
            } else {
                Uint8Array.prototype.set.call(t, this.subarray(i, n), r);
            }
            return a;
        };
        o.prototype.fill = function e(t, r, i, n) {
            if (typeof t === "string") {
                if (typeof r === "string") {
                    n = r;
                    r = 0;
                    i = this.length;
                } else if (typeof i === "string") {
                    n = i;
                    i = this.length;
                }
                if (n !== undefined && typeof n !== "string") {
                    throw new TypeError("encoding must be a string");
                }
                if (typeof n === "string" && !o.isEncoding(n)) {
                    throw new TypeError("Unknown encoding: " + n);
                }
                if (t.length === 1) {
                    var a = t.charCodeAt(0);
                    if (n === "utf8" && a < 128 || n === "latin1") {
                        t = a;
                    }
                }
            } else if (typeof t === "number") {
                t = t & 255;
            }
            if (r < 0 || this.length < r || this.length < i) {
                throw new RangeError("Out of range index");
            }
            if (i <= r) {
                return this;
            }
            r = r >>> 0;
            i = i === undefined ? this.length : i >>> 0;
            if (!t) t = 0;
            var s;
            if (typeof t === "number") {
                for (s = r; s < i; ++s) {
                    this[s] = t;
                }
            } else {
                var f = o.isBuffer(t) ? t : new o(t, n);
                var c = f.length;
                if (c === 0) {
                    throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                }
                for (s = 0; s < i - r; ++s) {
                    this[s + r] = f[s % c];
                }
            }
            return this;
        };
        var W = /[^+/0-9A-Za-z-_]/g;
        function K(e) {
            e = e.split("=")[0];
            e = e.trim().replace(W, "");
            if (e.length < 2) return "";
            while (e.length % 4 !== 0) {
                e = e + "=";
            }
            return e;
        }
        function H(e) {
            if (e < 16) return "0" + e.toString(16);
            return e.toString(16);
        }
        function Z(e, t) {
            t = t || Infinity;
            var r;
            var i = e.length;
            var n = null;
            var a = [];
            for (var s = 0; s < i; ++s) {
                r = e.charCodeAt(s);
                if (r > 55295 && r < 57344) {
                    if (!n) {
                        if (r > 56319) {
                            if ((t -= 3) > -1) a.push(239, 191, 189);
                            continue;
                        } else if (s + 1 === i) {
                            if ((t -= 3) > -1) a.push(239, 191, 189);
                            continue;
                        }
                        n = r;
                        continue;
                    }
                    if (r < 56320) {
                        if ((t -= 3) > -1) a.push(239, 191, 189);
                        n = r;
                        continue;
                    }
                    r = (n - 55296 << 10 | r - 56320) + 65536;
                } else if (n) {
                    if ((t -= 3) > -1) a.push(239, 191, 189);
                }
                n = null;
                if (r < 128) {
                    if ((t -= 1) < 0) break;
                    a.push(r);
                } else if (r < 2048) {
                    if ((t -= 2) < 0) break;
                    a.push(r >> 6 | 192, r & 63 | 128);
                } else if (r < 65536) {
                    if ((t -= 3) < 0) break;
                    a.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
                } else if (r < 1114112) {
                    if ((t -= 4) < 0) break;
                    a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
                } else {
                    throw new Error("Invalid code point");
                }
            }
            return a;
        }
        function V(e) {
            var t = [];
            for (var r = 0; r < e.length; ++r) {
                t.push(e.charCodeAt(r) & 255);
            }
            return t;
        }
        function G(e, t) {
            var r, i, n;
            var a = [];
            for (var s = 0; s < e.length; ++s) {
                if ((t -= 2) < 0) break;
                r = e.charCodeAt(s);
                i = r >> 8;
                n = r % 256;
                a.push(n);
                a.push(i);
            }
            return a;
        }
        function X(e) {
            return i.toByteArray(K(e));
        }
        function Y(e, t, r, i) {
            for (var n = 0; n < i; ++n) {
                if (n + r >= t.length || n >= e.length) break;
                t[n + r] = e[n];
            }
            return n;
        }
        function J(e) {
            return e instanceof ArrayBuffer || e != null && e.constructor != null && e.constructor.name === "ArrayBuffer" && typeof e.byteLength === "number";
        }
        function Q(e) {
            return e !== e;
        }
    }, {
        "base64-js": 31,
        ieee754: 137
    } ],
    66: [ function(e, t, r) {
        var i = e("safe-buffer").Buffer;
        var n = e("stream").Transform;
        var a = e("string_decoder").StringDecoder;
        var s = e("inherits");
        function f(e) {
            n.call(this);
            this.hashMode = typeof e === "string";
            if (this.hashMode) {
                this[e] = this._finalOrDigest;
            } else {
                this.final = this._finalOrDigest;
            }
            if (this._final) {
                this.__final = this._final;
                this._final = null;
            }
            this._decoder = null;
            this._encoding = null;
        }
        s(f, n);
        f.prototype.update = function(e, t, r) {
            if (typeof e === "string") {
                e = i.from(e, t);
            }
            var n = this._update(e);
            if (this.hashMode) return this;
            if (r) {
                n = this._toString(n, r);
            }
            return n;
        };
        f.prototype.setAutoPadding = function() {};
        f.prototype.getAuthTag = function() {
            throw new Error("trying to get auth tag in unsupported state");
        };
        f.prototype.setAuthTag = function() {
            throw new Error("trying to set auth tag in unsupported state");
        };
        f.prototype.setAAD = function() {
            throw new Error("trying to set aad in unsupported state");
        };
        f.prototype._transform = function(e, t, r) {
            var i;
            try {
                if (this.hashMode) {
                    this._update(e);
                } else {
                    this.push(this._update(e));
                }
            } catch (e) {
                i = e;
            } finally {
                r(i);
            }
        };
        f.prototype._flush = function(e) {
            var t;
            try {
                this.push(this.__final());
            } catch (e) {
                t = e;
            }
            e(t);
        };
        f.prototype._finalOrDigest = function(e) {
            var t = this.__final() || i.alloc(0);
            if (e) {
                t = this._toString(t, e, true);
            }
            return t;
        };
        f.prototype._toString = function(e, t, r) {
            if (!this._decoder) {
                this._decoder = new a(t);
                this._encoding = t;
            }
            if (this._encoding !== t) throw new Error("can't switch encodings");
            var i = this._decoder.write(e);
            if (r) {
                i += this._decoder.end();
            }
            return i;
        };
        t.exports = f;
    }, {
        inherits: 139,
        "safe-buffer": 231,
        stream: 240,
        string_decoder: 63
    } ],
    67: [ function(e, t, r) {
        e("../modules/web.immediate");
        t.exports = e("../modules/_core").setImmediate;
    }, {
        "../modules/_core": 71,
        "../modules/web.immediate": 87
    } ],
    68: [ function(e, t, r) {
        t.exports = function(e) {
            if (typeof e != "function") throw TypeError(e + " is not a function!");
            return e;
        };
    }, {} ],
    69: [ function(e, t, r) {
        var i = e("./_is-object");
        t.exports = function(e) {
            if (!i(e)) throw TypeError(e + " is not an object!");
            return e;
        };
    }, {
        "./_is-object": 82
    } ],
    70: [ function(e, t, r) {
        var i = {}.toString;
        t.exports = function(e) {
            return i.call(e).slice(8, -1);
        };
    }, {} ],
    71: [ function(e, t, r) {
        var i = t.exports = {
            version: "2.3.0"
        };
        if (typeof __e == "number") __e = i;
    }, {} ],
    72: [ function(e, t, r) {
        var i = e("./_a-function");
        t.exports = function(e, t, r) {
            i(e);
            if (t === undefined) return e;
            switch (r) {
              case 1:
                return function(r) {
                    return e.call(t, r);
                };

              case 2:
                return function(r, i) {
                    return e.call(t, r, i);
                };

              case 3:
                return function(r, i, n) {
                    return e.call(t, r, i, n);
                };
            }
            return function() {
                return e.apply(t, arguments);
            };
        };
    }, {
        "./_a-function": 68
    } ],
    73: [ function(e, t, r) {
        t.exports = !e("./_fails")(function() {
            return Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a != 7;
        });
    }, {
        "./_fails": 76
    } ],
    74: [ function(e, t, r) {
        var i = e("./_is-object"), n = e("./_global").document, a = i(n) && i(n.createElement);
        t.exports = function(e) {
            return a ? n.createElement(e) : {};
        };
    }, {
        "./_global": 77,
        "./_is-object": 82
    } ],
    75: [ function(e, t, r) {
        var i = e("./_global"), n = e("./_core"), a = e("./_ctx"), s = e("./_hide"), f = "prototype";
        var o = function(e, t, r) {
            var c = e & o.F, u = e & o.G, h = e & o.S, d = e & o.P, l = e & o.B, p = e & o.W, v = u ? n : n[t] || (n[t] = {}), b = v[f], m = u ? i : h ? i[t] : (i[t] || {})[f], g, y, w;
            if (u) r = t;
            for (g in r) {
                y = !c && m && m[g] !== undefined;
                if (y && g in v) continue;
                w = y ? m[g] : r[g];
                v[g] = u && typeof m[g] != "function" ? r[g] : l && y ? a(w, i) : p && m[g] == w ? function(e) {
                    var t = function(t, r, i) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                              case 0:
                                return new e();

                              case 1:
                                return new e(t);

                              case 2:
                                return new e(t, r);
                            }
                            return new e(t, r, i);
                        }
                        return e.apply(this, arguments);
                    };
                    t[f] = e[f];
                    return t;
                }(w) : d && typeof w == "function" ? a(Function.call, w) : w;
                if (d) {
                    (v.virtual || (v.virtual = {}))[g] = w;
                    if (e & o.R && b && !b[g]) s(b, g, w);
                }
            }
        };
        o.F = 1;
        o.G = 2;
        o.S = 4;
        o.P = 8;
        o.B = 16;
        o.W = 32;
        o.U = 64;
        o.R = 128;
        t.exports = o;
    }, {
        "./_core": 71,
        "./_ctx": 72,
        "./_global": 77,
        "./_hide": 78
    } ],
    76: [ function(e, t, r) {
        t.exports = function(e) {
            try {
                return !!e();
            } catch (e) {
                return true;
            }
        };
    }, {} ],
    77: [ function(e, t, r) {
        var i = t.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
        if (typeof __g == "number") __g = i;
    }, {} ],
    78: [ function(e, t, r) {
        var i = e("./_object-dp"), n = e("./_property-desc");
        t.exports = e("./_descriptors") ? function(e, t, r) {
            return i.f(e, t, n(1, r));
        } : function(e, t, r) {
            e[t] = r;
            return e;
        };
    }, {
        "./_descriptors": 73,
        "./_object-dp": 83,
        "./_property-desc": 84
    } ],
    79: [ function(e, t, r) {
        t.exports = e("./_global").document && document.documentElement;
    }, {
        "./_global": 77
    } ],
    80: [ function(e, t, r) {
        t.exports = !e("./_descriptors") && !e("./_fails")(function() {
            return Object.defineProperty(e("./_dom-create")("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a != 7;
        });
    }, {
        "./_descriptors": 73,
        "./_dom-create": 74,
        "./_fails": 76
    } ],
    81: [ function(e, t, r) {
        t.exports = function(e, t, r) {
            var i = r === undefined;
            switch (t.length) {
              case 0:
                return i ? e() : e.call(r);

              case 1:
                return i ? e(t[0]) : e.call(r, t[0]);

              case 2:
                return i ? e(t[0], t[1]) : e.call(r, t[0], t[1]);

              case 3:
                return i ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);

              case 4:
                return i ? e(t[0], t[1], t[2], t[3]) : e.call(r, t[0], t[1], t[2], t[3]);
            }
            return e.apply(r, t);
        };
    }, {} ],
    82: [ function(e, t, r) {
        t.exports = function(e) {
            return typeof e === "object" ? e !== null : typeof e === "function";
        };
    }, {} ],
    83: [ function(e, t, r) {
        var i = e("./_an-object"), n = e("./_ie8-dom-define"), a = e("./_to-primitive"), s = Object.defineProperty;
        r.f = e("./_descriptors") ? Object.defineProperty : function e(t, r, f) {
            i(t);
            r = a(r, true);
            i(f);
            if (n) try {
                return s(t, r, f);
            } catch (e) {}
            if ("get" in f || "set" in f) throw TypeError("Accessors not supported!");
            if ("value" in f) t[r] = f.value;
            return t;
        };
    }, {
        "./_an-object": 69,
        "./_descriptors": 73,
        "./_ie8-dom-define": 80,
        "./_to-primitive": 86
    } ],
    84: [ function(e, t, r) {
        t.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            };
        };
    }, {} ],
    85: [ function(e, t, r) {
        var i = e("./_ctx"), n = e("./_invoke"), a = e("./_html"), s = e("./_dom-create"), f = e("./_global"), o = f.process, c = f.setImmediate, u = f.clearImmediate, h = f.MessageChannel, d = 0, l = {}, p = "onreadystatechange", v, b, m;
        var g = function() {
            var e = +this;
            if (l.hasOwnProperty(e)) {
                var t = l[e];
                delete l[e];
                t();
            }
        };
        var y = function(e) {
            g.call(e.data);
        };
        if (!c || !u) {
            c = function e(t) {
                var r = [], i = 1;
                while (arguments.length > i) r.push(arguments[i++]);
                l[++d] = function() {
                    n(typeof t == "function" ? t : Function(t), r);
                };
                v(d);
                return d;
            };
            u = function e(t) {
                delete l[t];
            };
            if (e("./_cof")(o) == "process") {
                v = function(e) {
                    o.nextTick(i(g, e, 1));
                };
            } else if (h) {
                b = new h();
                m = b.port2;
                b.port1.onmessage = y;
                v = i(m.postMessage, m, 1);
            } else if (f.addEventListener && typeof postMessage == "function" && !f.importScripts) {
                v = function(e) {
                    f.postMessage(e + "", "*");
                };
                f.addEventListener("message", y, false);
            } else if (p in s("script")) {
                v = function(e) {
                    a.appendChild(s("script"))[p] = function() {
                        a.removeChild(this);
                        g.call(e);
                    };
                };
            } else {
                v = function(e) {
                    setTimeout(i(g, e, 1), 0);
                };
            }
        }
        t.exports = {
            set: c,
            clear: u
        };
    }, {
        "./_cof": 70,
        "./_ctx": 72,
        "./_dom-create": 74,
        "./_global": 77,
        "./_html": 79,
        "./_invoke": 81
    } ],
    86: [ function(e, t, r) {
        var i = e("./_is-object");
        t.exports = function(e, t) {
            if (!i(e)) return e;
            var r, n;
            if (t && typeof (r = e.toString) == "function" && !i(n = r.call(e))) return n;
            if (typeof (r = e.valueOf) == "function" && !i(n = r.call(e))) return n;
            if (!t && typeof (r = e.toString) == "function" && !i(n = r.call(e))) return n;
            throw TypeError("Can't convert object to primitive value");
        };
    }, {
        "./_is-object": 82
    } ],
    87: [ function(e, t, r) {
        var i = e("./_export"), n = e("./_task");
        i(i.G + i.B, {
            setImmediate: n.set,
            clearImmediate: n.clear
        });
    }, {
        "./_export": 75,
        "./_task": 85
    } ],
    88: [ function(e, t, r) {
        (function(e) {
            function t(e) {
                if (Array.isArray) {
                    return Array.isArray(e);
                }
                return b(e) === "[object Array]";
            }
            r.isArray = t;
            function i(e) {
                return typeof e === "boolean";
            }
            r.isBoolean = i;
            function n(e) {
                return e === null;
            }
            r.isNull = n;
            function a(e) {
                return e == null;
            }
            r.isNullOrUndefined = a;
            function s(e) {
                return typeof e === "number";
            }
            r.isNumber = s;
            function f(e) {
                return typeof e === "string";
            }
            r.isString = f;
            function o(e) {
                return typeof e === "symbol";
            }
            r.isSymbol = o;
            function c(e) {
                return e === void 0;
            }
            r.isUndefined = c;
            function u(e) {
                return b(e) === "[object RegExp]";
            }
            r.isRegExp = u;
            function h(e) {
                return typeof e === "object" && e !== null;
            }
            r.isObject = h;
            function d(e) {
                return b(e) === "[object Date]";
            }
            r.isDate = d;
            function l(e) {
                return b(e) === "[object Error]" || e instanceof Error;
            }
            r.isError = l;
            function p(e) {
                return typeof e === "function";
            }
            r.isFunction = p;
            function v(e) {
                return e === null || typeof e === "boolean" || typeof e === "number" || typeof e === "string" || typeof e === "symbol" || typeof e === "undefined";
            }
            r.isPrimitive = v;
            r.isBuffer = e.isBuffer;
            function b(e) {
                return Object.prototype.toString.call(e);
            }
        }).call(this, {
            isBuffer: e("../../is-buffer/index.js")
        });
    }, {
        "../../is-buffer/index.js": 140
    } ],
    89: [ function(e, t, r) {
        (function(r) {
            var i = e("elliptic");
            var n = e("bn.js");
            t.exports = function e(t) {
                return new s(t);
            };
            var a = {
                secp256k1: {
                    name: "secp256k1",
                    byteLength: 32
                },
                secp224r1: {
                    name: "p224",
                    byteLength: 28
                },
                prime256v1: {
                    name: "p256",
                    byteLength: 32
                },
                prime192v1: {
                    name: "p192",
                    byteLength: 24
                },
                ed25519: {
                    name: "ed25519",
                    byteLength: 32
                },
                secp384r1: {
                    name: "p384",
                    byteLength: 48
                },
                secp521r1: {
                    name: "p521",
                    byteLength: 66
                }
            };
            a.p224 = a.secp224r1;
            a.p256 = a.secp256r1 = a.prime256v1;
            a.p192 = a.secp192r1 = a.prime192v1;
            a.p384 = a.secp384r1;
            a.p521 = a.secp521r1;
            function s(e) {
                this.curveType = a[e];
                if (!this.curveType) {
                    this.curveType = {
                        name: e
                    };
                }
                this.curve = new i.ec(this.curveType.name);
                this.keys = void 0;
            }
            s.prototype.generateKeys = function(e, t) {
                this.keys = this.curve.genKeyPair();
                return this.getPublicKey(e, t);
            };
            s.prototype.computeSecret = function(e, t, i) {
                t = t || "utf8";
                if (!r.isBuffer(e)) {
                    e = new r(e, t);
                }
                var n = this.curve.keyFromPublic(e).getPublic();
                var a = n.mul(this.keys.getPrivate()).getX();
                return f(a, i, this.curveType.byteLength);
            };
            s.prototype.getPublicKey = function(e, t) {
                var r = this.keys.getPublic(t === "compressed", true);
                if (t === "hybrid") {
                    if (r[r.length - 1] % 2) {
                        r[0] = 7;
                    } else {
                        r[0] = 6;
                    }
                }
                return f(r, e);
            };
            s.prototype.getPrivateKey = function(e) {
                return f(this.keys.getPrivate(), e);
            };
            s.prototype.setPublicKey = function(e, t) {
                t = t || "utf8";
                if (!r.isBuffer(e)) {
                    e = new r(e, t);
                }
                this.keys._importPublic(e);
                return this;
            };
            s.prototype.setPrivateKey = function(e, t) {
                t = t || "utf8";
                if (!r.isBuffer(e)) {
                    e = new r(e, t);
                }
                var i = new n(e);
                i = i.toString(16);
                this.keys._importPrivate(i);
                return this;
            };
            function f(e, t, i) {
                if (!Array.isArray(e)) {
                    e = e.toArray();
                }
                var n = new r(e);
                if (i && n.length < i) {
                    var a = new r(i - n.length);
                    a.fill(0);
                    n = r.concat([ a, n ]);
                }
                if (!t) {
                    return n;
                } else {
                    return n.toString(t);
                }
            }
        }).call(this, e("buffer").Buffer);
    }, {
        "bn.js": 32,
        buffer: 65,
        elliptic: 105
    } ],
    90: [ function(e, t, r) {
        "use strict";
        var i = e("inherits");
        var n = e("md5.js");
        var a = e("ripemd160");
        var s = e("sha.js");
        var f = e("cipher-base");
        function o(e) {
            f.call(this, "digest");
            this._hash = e;
        }
        i(o, f);
        o.prototype._update = function(e) {
            this._hash.update(e);
        };
        o.prototype._final = function() {
            return this._hash.digest();
        };
        t.exports = function e(t) {
            t = t.toLowerCase();
            if (t === "md5") return new n();
            if (t === "rmd160" || t === "ripemd160") return new a();
            return new o(s(t));
        };
    }, {
        "cipher-base": 66,
        inherits: 139,
        "md5.js": 178,
        ripemd160: 230,
        "sha.js": 233
    } ],
    91: [ function(e, t, r) {
        var i = e("md5.js");
        t.exports = function(e) {
            return new i().update(e).digest();
        };
    }, {
        "md5.js": 178
    } ],
    92: [ function(e, t, r) {
        "use strict";
        var i = e("inherits");
        var n = e("./legacy");
        var a = e("cipher-base");
        var s = e("safe-buffer").Buffer;
        var f = e("create-hash/md5");
        var o = e("ripemd160");
        var c = e("sha.js");
        var u = s.alloc(128);
        function h(e, t) {
            a.call(this, "digest");
            if (typeof t === "string") {
                t = s.from(t);
            }
            var r = e === "sha512" || e === "sha384" ? 128 : 64;
            this._alg = e;
            this._key = t;
            if (t.length > r) {
                var i = e === "rmd160" ? new o() : c(e);
                t = i.update(t).digest();
            } else if (t.length < r) {
                t = s.concat([ t, u ], r);
            }
            var n = this._ipad = s.allocUnsafe(r);
            var f = this._opad = s.allocUnsafe(r);
            for (var h = 0; h < r; h++) {
                n[h] = t[h] ^ 54;
                f[h] = t[h] ^ 92;
            }
            this._hash = e === "rmd160" ? new o() : c(e);
            this._hash.update(n);
        }
        i(h, a);
        h.prototype._update = function(e) {
            this._hash.update(e);
        };
        h.prototype._final = function() {
            var e = this._hash.digest();
            var t = this._alg === "rmd160" ? new o() : c(this._alg);
            return t.update(this._opad).update(e).digest();
        };
        t.exports = function e(t, r) {
            t = t.toLowerCase();
            if (t === "rmd160" || t === "ripemd160") {
                return new h("rmd160", r);
            }
            if (t === "md5") {
                return new n(f, r);
            }
            return new h(t, r);
        };
    }, {
        "./legacy": 93,
        "cipher-base": 66,
        "create-hash/md5": 91,
        inherits: 139,
        ripemd160: 230,
        "safe-buffer": 231,
        "sha.js": 233
    } ],
    93: [ function(e, t, r) {
        "use strict";
        var i = e("inherits");
        var n = e("safe-buffer").Buffer;
        var a = e("cipher-base");
        var s = n.alloc(128);
        var f = 64;
        function o(e, t) {
            a.call(this, "digest");
            if (typeof t === "string") {
                t = n.from(t);
            }
            this._alg = e;
            this._key = t;
            if (t.length > f) {
                t = e(t);
            } else if (t.length < f) {
                t = n.concat([ t, s ], f);
            }
            var r = this._ipad = n.allocUnsafe(f);
            var i = this._opad = n.allocUnsafe(f);
            for (var o = 0; o < f; o++) {
                r[o] = t[o] ^ 54;
                i[o] = t[o] ^ 92;
            }
            this._hash = [ r ];
        }
        i(o, a);
        o.prototype._update = function(e) {
            this._hash.push(e);
        };
        o.prototype._final = function() {
            var e = this._alg(n.concat(this._hash));
            return this._alg(n.concat([ this._opad, e ]));
        };
        t.exports = o;
    }, {
        "cipher-base": 66,
        inherits: 139,
        "safe-buffer": 231
    } ],
    94: [ function(e, t, r) {
        "use strict";
        r.randomBytes = r.rng = r.pseudoRandomBytes = r.prng = e("randombytes");
        r.createHash = r.Hash = e("create-hash");
        r.createHmac = r.Hmac = e("create-hmac");
        var i = e("browserify-sign/algos");
        var n = Object.keys(i);
        var a = [ "sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160" ].concat(n);
        r.getHashes = function() {
            return a;
        };
        var s = e("pbkdf2");
        r.pbkdf2 = s.pbkdf2;
        r.pbkdf2Sync = s.pbkdf2Sync;
        var f = e("browserify-cipher");
        r.Cipher = f.Cipher;
        r.createCipher = f.createCipher;
        r.Cipheriv = f.Cipheriv;
        r.createCipheriv = f.createCipheriv;
        r.Decipher = f.Decipher;
        r.createDecipher = f.createDecipher;
        r.Decipheriv = f.Decipheriv;
        r.createDecipheriv = f.createDecipheriv;
        r.getCiphers = f.getCiphers;
        r.listCiphers = f.listCiphers;
        var o = e("diffie-hellman");
        r.DiffieHellmanGroup = o.DiffieHellmanGroup;
        r.createDiffieHellmanGroup = o.createDiffieHellmanGroup;
        r.getDiffieHellman = o.getDiffieHellman;
        r.createDiffieHellman = o.createDiffieHellman;
        r.DiffieHellman = o.DiffieHellman;
        var c = e("browserify-sign");
        r.createSign = c.createSign;
        r.Sign = c.Sign;
        r.createVerify = c.createVerify;
        r.Verify = c.Verify;
        r.createECDH = e("create-ecdh");
        var u = e("public-encrypt");
        r.publicEncrypt = u.publicEncrypt;
        r.privateEncrypt = u.privateEncrypt;
        r.publicDecrypt = u.publicDecrypt;
        r.privateDecrypt = u.privateDecrypt;
        var h = e("randomfill");
        r.randomFill = h.randomFill;
        r.randomFillSync = h.randomFillSync;
        r.createCredentials = function() {
            throw new Error([ "sorry, createCredentials is not implemented yet", "we accept pull requests", "https://github.com/crypto-browserify/crypto-browserify" ].join("\n"));
        };
        r.constants = {
            DH_CHECK_P_NOT_SAFE_PRIME: 2,
            DH_CHECK_P_NOT_PRIME: 1,
            DH_UNABLE_TO_CHECK_GENERATOR: 4,
            DH_NOT_SUITABLE_GENERATOR: 8,
            NPN_ENABLED: 1,
            ALPN_ENABLED: 1,
            RSA_PKCS1_PADDING: 1,
            RSA_SSLV23_PADDING: 2,
            RSA_NO_PADDING: 3,
            RSA_PKCS1_OAEP_PADDING: 4,
            RSA_X931_PADDING: 5,
            RSA_PKCS1_PSS_PADDING: 6,
            POINT_CONVERSION_COMPRESSED: 2,
            POINT_CONVERSION_UNCOMPRESSED: 4,
            POINT_CONVERSION_HYBRID: 6
        };
    }, {
        "browserify-cipher": 52,
        "browserify-sign": 59,
        "browserify-sign/algos": 56,
        "create-ecdh": 89,
        "create-hash": 90,
        "create-hmac": 92,
        "diffie-hellman": 101,
        pbkdf2: 205,
        "public-encrypt": 212,
        randombytes: 218,
        randomfill: 219
    } ],
    95: [ function(e, t, r) {
        "use strict";
        r.utils = e("./des/utils");
        r.Cipher = e("./des/cipher");
        r.DES = e("./des/des");
        r.CBC = e("./des/cbc");
        r.EDE = e("./des/ede");
    }, {
        "./des/cbc": 96,
        "./des/cipher": 97,
        "./des/des": 98,
        "./des/ede": 99,
        "./des/utils": 100
    } ],
    96: [ function(e, t, r) {
        "use strict";
        var i = e("minimalistic-assert");
        var n = e("inherits");
        var a = {};
        function s(e) {
            i.equal(e.length, 8, "Invalid IV length");
            this.iv = new Array(8);
            for (var t = 0; t < this.iv.length; t++) this.iv[t] = e[t];
        }
        function f(e) {
            function t(t) {
                e.call(this, t);
                this._cbcInit();
            }
            n(t, e);
            var r = Object.keys(a);
            for (var i = 0; i < r.length; i++) {
                var s = r[i];
                t.prototype[s] = a[s];
            }
            t.create = function e(r) {
                return new t(r);
            };
            return t;
        }
        r.instantiate = f;
        a._cbcInit = function e() {
            var t = new s(this.options.iv);
            this._cbcState = t;
        };
        a._update = function e(t, r, i, n) {
            var a = this._cbcState;
            var s = this.constructor.super_.prototype;
            var f = a.iv;
            if (this.type === "encrypt") {
                for (var o = 0; o < this.blockSize; o++) f[o] ^= t[r + o];
                s._update.call(this, f, 0, i, n);
                for (var o = 0; o < this.blockSize; o++) f[o] = i[n + o];
            } else {
                s._update.call(this, t, r, i, n);
                for (var o = 0; o < this.blockSize; o++) i[n + o] ^= f[o];
                for (var o = 0; o < this.blockSize; o++) f[o] = t[r + o];
            }
        };
    }, {
        inherits: 139,
        "minimalistic-assert": 180
    } ],
    97: [ function(e, t, r) {
        "use strict";
        var i = e("minimalistic-assert");
        function n(e) {
            this.options = e;
            this.type = this.options.type;
            this.blockSize = 8;
            this._init();
            this.buffer = new Array(this.blockSize);
            this.bufferOff = 0;
        }
        t.exports = n;
        n.prototype._init = function e() {};
        n.prototype.update = function e(t) {
            if (t.length === 0) return [];
            if (this.type === "decrypt") return this._updateDecrypt(t); else return this._updateEncrypt(t);
        };
        n.prototype._buffer = function e(t, r) {
            var i = Math.min(this.buffer.length - this.bufferOff, t.length - r);
            for (var n = 0; n < i; n++) this.buffer[this.bufferOff + n] = t[r + n];
            this.bufferOff += i;
            return i;
        };
        n.prototype._flushBuffer = function e(t, r) {
            this._update(this.buffer, 0, t, r);
            this.bufferOff = 0;
            return this.blockSize;
        };
        n.prototype._updateEncrypt = function e(t) {
            var r = 0;
            var i = 0;
            var n = (this.bufferOff + t.length) / this.blockSize | 0;
            var a = new Array(n * this.blockSize);
            if (this.bufferOff !== 0) {
                r += this._buffer(t, r);
                if (this.bufferOff === this.buffer.length) i += this._flushBuffer(a, i);
            }
            var s = t.length - (t.length - r) % this.blockSize;
            for (;r < s; r += this.blockSize) {
                this._update(t, r, a, i);
                i += this.blockSize;
            }
            for (;r < t.length; r++, this.bufferOff++) this.buffer[this.bufferOff] = t[r];
            return a;
        };
        n.prototype._updateDecrypt = function e(t) {
            var r = 0;
            var i = 0;
            var n = Math.ceil((this.bufferOff + t.length) / this.blockSize) - 1;
            var a = new Array(n * this.blockSize);
            for (;n > 0; n--) {
                r += this._buffer(t, r);
                i += this._flushBuffer(a, i);
            }
            r += this._buffer(t, r);
            return a;
        };
        n.prototype.final = function e(t) {
            var r;
            if (t) r = this.update(t);
            var i;
            if (this.type === "encrypt") i = this._finalEncrypt(); else i = this._finalDecrypt();
            if (r) return r.concat(i); else return i;
        };
        n.prototype._pad = function e(t, r) {
            if (r === 0) return false;
            while (r < t.length) t[r++] = 0;
            return true;
        };
        n.prototype._finalEncrypt = function e() {
            if (!this._pad(this.buffer, this.bufferOff)) return [];
            var t = new Array(this.blockSize);
            this._update(this.buffer, 0, t, 0);
            return t;
        };
        n.prototype._unpad = function e(t) {
            return t;
        };
        n.prototype._finalDecrypt = function e() {
            i.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
            var t = new Array(this.blockSize);
            this._flushBuffer(t, 0);
            return this._unpad(t);
        };
    }, {
        "minimalistic-assert": 180
    } ],
    98: [ function(e, t, r) {
        "use strict";
        var i = e("minimalistic-assert");
        var n = e("inherits");
        var a = e("../des");
        var s = a.utils;
        var f = a.Cipher;
        function o() {
            this.tmp = new Array(2);
            this.keys = null;
        }
        function c(e) {
            f.call(this, e);
            var t = new o();
            this._desState = t;
            this.deriveKeys(t, e.key);
        }
        n(c, f);
        t.exports = c;
        c.create = function e(t) {
            return new c(t);
        };
        var u = [ 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1 ];
        c.prototype.deriveKeys = function e(t, r) {
            t.keys = new Array(16 * 2);
            i.equal(r.length, this.blockSize, "Invalid key length");
            var n = s.readUInt32BE(r, 0);
            var a = s.readUInt32BE(r, 4);
            s.pc1(n, a, t.tmp, 0);
            n = t.tmp[0];
            a = t.tmp[1];
            for (var f = 0; f < t.keys.length; f += 2) {
                var o = u[f >>> 1];
                n = s.r28shl(n, o);
                a = s.r28shl(a, o);
                s.pc2(n, a, t.keys, f);
            }
        };
        c.prototype._update = function e(t, r, i, n) {
            var a = this._desState;
            var f = s.readUInt32BE(t, r);
            var o = s.readUInt32BE(t, r + 4);
            s.ip(f, o, a.tmp, 0);
            f = a.tmp[0];
            o = a.tmp[1];
            if (this.type === "encrypt") this._encrypt(a, f, o, a.tmp, 0); else this._decrypt(a, f, o, a.tmp, 0);
            f = a.tmp[0];
            o = a.tmp[1];
            s.writeUInt32BE(i, f, n);
            s.writeUInt32BE(i, o, n + 4);
        };
        c.prototype._pad = function e(t, r) {
            var i = t.length - r;
            for (var n = r; n < t.length; n++) t[n] = i;
            return true;
        };
        c.prototype._unpad = function e(t) {
            var r = t[t.length - 1];
            for (var n = t.length - r; n < t.length; n++) i.equal(t[n], r);
            return t.slice(0, t.length - r);
        };
        c.prototype._encrypt = function e(t, r, i, n, a) {
            var f = r;
            var o = i;
            for (var c = 0; c < t.keys.length; c += 2) {
                var u = t.keys[c];
                var h = t.keys[c + 1];
                s.expand(o, t.tmp, 0);
                u ^= t.tmp[0];
                h ^= t.tmp[1];
                var d = s.substitute(u, h);
                var l = s.permute(d);
                var p = o;
                o = (f ^ l) >>> 0;
                f = p;
            }
            s.rip(o, f, n, a);
        };
        c.prototype._decrypt = function e(t, r, i, n, a) {
            var f = i;
            var o = r;
            for (var c = t.keys.length - 2; c >= 0; c -= 2) {
                var u = t.keys[c];
                var h = t.keys[c + 1];
                s.expand(f, t.tmp, 0);
                u ^= t.tmp[0];
                h ^= t.tmp[1];
                var d = s.substitute(u, h);
                var l = s.permute(d);
                var p = f;
                f = (o ^ l) >>> 0;
                o = p;
            }
            s.rip(f, o, n, a);
        };
    }, {
        "../des": 95,
        inherits: 139,
        "minimalistic-assert": 180
    } ],
    99: [ function(e, t, r) {
        "use strict";
        var i = e("minimalistic-assert");
        var n = e("inherits");
        var a = e("../des");
        var s = a.Cipher;
        var f = a.DES;
        function o(e, t) {
            i.equal(t.length, 24, "Invalid key length");
            var r = t.slice(0, 8);
            var n = t.slice(8, 16);
            var a = t.slice(16, 24);
            if (e === "encrypt") {
                this.ciphers = [ f.create({
                    type: "encrypt",
                    key: r
                }), f.create({
                    type: "decrypt",
                    key: n
                }), f.create({
                    type: "encrypt",
                    key: a
                }) ];
            } else {
                this.ciphers = [ f.create({
                    type: "decrypt",
                    key: a
                }), f.create({
                    type: "encrypt",
                    key: n
                }), f.create({
                    type: "decrypt",
                    key: r
                }) ];
            }
        }
        function c(e) {
            s.call(this, e);
            var t = new o(this.type, this.options.key);
            this._edeState = t;
        }
        n(c, s);
        t.exports = c;
        c.create = function e(t) {
            return new c(t);
        };
        c.prototype._update = function e(t, r, i, n) {
            var a = this._edeState;
            a.ciphers[0]._update(t, r, i, n);
            a.ciphers[1]._update(i, n, i, n);
            a.ciphers[2]._update(i, n, i, n);
        };
        c.prototype._pad = f.prototype._pad;
        c.prototype._unpad = f.prototype._unpad;
    }, {
        "../des": 95,
        inherits: 139,
        "minimalistic-assert": 180
    } ],
    100: [ function(e, t, r) {
        "use strict";
        r.readUInt32BE = function e(t, r) {
            var i = t[0 + r] << 24 | t[1 + r] << 16 | t[2 + r] << 8 | t[3 + r];
            return i >>> 0;
        };
        r.writeUInt32BE = function e(t, r, i) {
            t[0 + i] = r >>> 24;
            t[1 + i] = r >>> 16 & 255;
            t[2 + i] = r >>> 8 & 255;
            t[3 + i] = r & 255;
        };
        r.ip = function e(t, r, i, n) {
            var a = 0;
            var s = 0;
            for (var f = 6; f >= 0; f -= 2) {
                for (var o = 0; o <= 24; o += 8) {
                    a <<= 1;
                    a |= r >>> o + f & 1;
                }
                for (var o = 0; o <= 24; o += 8) {
                    a <<= 1;
                    a |= t >>> o + f & 1;
                }
            }
            for (var f = 6; f >= 0; f -= 2) {
                for (var o = 1; o <= 25; o += 8) {
                    s <<= 1;
                    s |= r >>> o + f & 1;
                }
                for (var o = 1; o <= 25; o += 8) {
                    s <<= 1;
                    s |= t >>> o + f & 1;
                }
            }
            i[n + 0] = a >>> 0;
            i[n + 1] = s >>> 0;
        };
        r.rip = function e(t, r, i, n) {
            var a = 0;
            var s = 0;
            for (var f = 0; f < 4; f++) {
                for (var o = 24; o >= 0; o -= 8) {
                    a <<= 1;
                    a |= r >>> o + f & 1;
                    a <<= 1;
                    a |= t >>> o + f & 1;
                }
            }
            for (var f = 4; f < 8; f++) {
                for (var o = 24; o >= 0; o -= 8) {
                    s <<= 1;
                    s |= r >>> o + f & 1;
                    s <<= 1;
                    s |= t >>> o + f & 1;
                }
            }
            i[n + 0] = a >>> 0;
            i[n + 1] = s >>> 0;
        };
        r.pc1 = function e(t, r, i, n) {
            var a = 0;
            var s = 0;
            for (var f = 7; f >= 5; f--) {
                for (var o = 0; o <= 24; o += 8) {
                    a <<= 1;
                    a |= r >> o + f & 1;
                }
                for (var o = 0; o <= 24; o += 8) {
                    a <<= 1;
                    a |= t >> o + f & 1;
                }
            }
            for (var o = 0; o <= 24; o += 8) {
                a <<= 1;
                a |= r >> o + f & 1;
            }
            for (var f = 1; f <= 3; f++) {
                for (var o = 0; o <= 24; o += 8) {
                    s <<= 1;
                    s |= r >> o + f & 1;
                }
                for (var o = 0; o <= 24; o += 8) {
                    s <<= 1;
                    s |= t >> o + f & 1;
                }
            }
            for (var o = 0; o <= 24; o += 8) {
                s <<= 1;
                s |= t >> o + f & 1;
            }
            i[n + 0] = a >>> 0;
            i[n + 1] = s >>> 0;
        };
        r.r28shl = function e(t, r) {
            return t << r & 268435455 | t >>> 28 - r;
        };
        var i = [ 14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24 ];
        r.pc2 = function e(t, r, n, a) {
            var s = 0;
            var f = 0;
            var o = i.length >>> 1;
            for (var c = 0; c < o; c++) {
                s <<= 1;
                s |= t >>> i[c] & 1;
            }
            for (var c = o; c < i.length; c++) {
                f <<= 1;
                f |= r >>> i[c] & 1;
            }
            n[a + 0] = s >>> 0;
            n[a + 1] = f >>> 0;
        };
        r.expand = function e(t, r, i) {
            var n = 0;
            var a = 0;
            n = (t & 1) << 5 | t >>> 27;
            for (var s = 23; s >= 15; s -= 4) {
                n <<= 6;
                n |= t >>> s & 63;
            }
            for (var s = 11; s >= 3; s -= 4) {
                a |= t >>> s & 63;
                a <<= 6;
            }
            a |= (t & 31) << 1 | t >>> 31;
            r[i + 0] = n >>> 0;
            r[i + 1] = a >>> 0;
        };
        var n = [ 14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11 ];
        r.substitute = function e(t, r) {
            var i = 0;
            for (var a = 0; a < 4; a++) {
                var s = t >>> 18 - a * 6 & 63;
                var f = n[a * 64 + s];
                i <<= 4;
                i |= f;
            }
            for (var a = 0; a < 4; a++) {
                var s = r >>> 18 - a * 6 & 63;
                var f = n[4 * 64 + a * 64 + s];
                i <<= 4;
                i |= f;
            }
            return i >>> 0;
        };
        var a = [ 16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7 ];
        r.permute = function e(t) {
            var r = 0;
            for (var i = 0; i < a.length; i++) {
                r <<= 1;
                r |= t >>> a[i] & 1;
            }
            return r >>> 0;
        };
        r.padSplit = function e(t, r, i) {
            var n = t.toString(2);
            while (n.length < r) n = "0" + n;
            var a = [];
            for (var s = 0; s < r; s += i) a.push(n.slice(s, s + i));
            return a.join(" ");
        };
    }, {} ],
    101: [ function(e, t, r) {
        (function(t) {
            var i = e("./lib/generatePrime");
            var n = e("./lib/primes.json");
            var a = e("./lib/dh");
            function s(e) {
                var r = new t(n[e].prime, "hex");
                var i = new t(n[e].gen, "hex");
                return new a(r, i);
            }
            var f = {
                binary: true,
                hex: true,
                base64: true
            };
            function o(e, r, n, s) {
                if (t.isBuffer(r) || f[r] === undefined) {
                    return o(e, "binary", r, n);
                }
                r = r || "binary";
                s = s || "binary";
                n = n || new t([ 2 ]);
                if (!t.isBuffer(n)) {
                    n = new t(n, s);
                }
                if (typeof e === "number") {
                    return new a(i(e, n), n, true);
                }
                if (!t.isBuffer(e)) {
                    e = new t(e, r);
                }
                return new a(e, n, true);
            }
            r.DiffieHellmanGroup = r.createDiffieHellmanGroup = r.getDiffieHellman = s;
            r.createDiffieHellman = r.DiffieHellman = o;
        }).call(this, e("buffer").Buffer);
    }, {
        "./lib/dh": 102,
        "./lib/generatePrime": 103,
        "./lib/primes.json": 104,
        buffer: 65
    } ],
    102: [ function(e, t, r) {
        (function(r) {
            var i = e("bn.js");
            var n = e("miller-rabin");
            var a = new n();
            var s = new i(24);
            var f = new i(11);
            var o = new i(10);
            var c = new i(3);
            var u = new i(7);
            var h = e("./generatePrime");
            var d = e("randombytes");
            t.exports = m;
            function l(e, t) {
                t = t || "utf8";
                if (!r.isBuffer(e)) {
                    e = new r(e, t);
                }
                this._pub = new i(e);
                return this;
            }
            function p(e, t) {
                t = t || "utf8";
                if (!r.isBuffer(e)) {
                    e = new r(e, t);
                }
                this._priv = new i(e);
                return this;
            }
            var v = {};
            function b(e, t) {
                var r = t.toString("hex");
                var i = [ r, e.toString(16) ].join("_");
                if (i in v) {
                    return v[i];
                }
                var n = 0;
                if (e.isEven() || !h.simpleSieve || !h.fermatTest(e) || !a.test(e)) {
                    n += 1;
                    if (r === "02" || r === "05") {
                        n += 8;
                    } else {
                        n += 4;
                    }
                    v[i] = n;
                    return n;
                }
                if (!a.test(e.shrn(1))) {
                    n += 2;
                }
                var d;
                switch (r) {
                  case "02":
                    if (e.mod(s).cmp(f)) {
                        n += 8;
                    }
                    break;

                  case "05":
                    d = e.mod(o);
                    if (d.cmp(c) && d.cmp(u)) {
                        n += 8;
                    }
                    break;

                  default:
                    n += 4;
                }
                v[i] = n;
                return n;
            }
            function m(e, t, r) {
                this.setGenerator(t);
                this.__prime = new i(e);
                this._prime = i.mont(this.__prime);
                this._primeLen = e.length;
                this._pub = undefined;
                this._priv = undefined;
                this._primeCode = undefined;
                if (r) {
                    this.setPublicKey = l;
                    this.setPrivateKey = p;
                } else {
                    this._primeCode = 8;
                }
            }
            Object.defineProperty(m.prototype, "verifyError", {
                enumerable: true,
                get: function() {
                    if (typeof this._primeCode !== "number") {
                        this._primeCode = b(this.__prime, this.__gen);
                    }
                    return this._primeCode;
                }
            });
            m.prototype.generateKeys = function() {
                if (!this._priv) {
                    this._priv = new i(d(this._primeLen));
                }
                this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed();
                return this.getPublicKey();
            };
            m.prototype.computeSecret = function(e) {
                e = new i(e);
                e = e.toRed(this._prime);
                var t = e.redPow(this._priv).fromRed();
                var n = new r(t.toArray());
                var a = this.getPrime();
                if (n.length < a.length) {
                    var s = new r(a.length - n.length);
                    s.fill(0);
                    n = r.concat([ s, n ]);
                }
                return n;
            };
            m.prototype.getPublicKey = function e(t) {
                return g(this._pub, t);
            };
            m.prototype.getPrivateKey = function e(t) {
                return g(this._priv, t);
            };
            m.prototype.getPrime = function(e) {
                return g(this.__prime, e);
            };
            m.prototype.getGenerator = function(e) {
                return g(this._gen, e);
            };
            m.prototype.setGenerator = function(e, t) {
                t = t || "utf8";
                if (!r.isBuffer(e)) {
                    e = new r(e, t);
                }
                this.__gen = e;
                this._gen = new i(e);
                return this;
            };
            function g(e, t) {
                var i = new r(e.toArray());
                if (!t) {
                    return i;
                } else {
                    return i.toString(t);
                }
            }
        }).call(this, e("buffer").Buffer);
    }, {
        "./generatePrime": 103,
        "bn.js": 32,
        buffer: 65,
        "miller-rabin": 179,
        randombytes: 218
    } ],
    103: [ function(e, t, r) {
        var i = e("randombytes");
        t.exports = k;
        k.simpleSieve = _;
        k.fermatTest = S;
        var n = e("bn.js");
        var a = new n(24);
        var s = e("miller-rabin");
        var f = new s();
        var o = new n(1);
        var c = new n(2);
        var u = new n(5);
        var h = new n(16);
        var d = new n(8);
        var l = new n(10);
        var p = new n(3);
        var v = new n(7);
        var b = new n(11);
        var m = new n(4);
        var g = new n(12);
        var y = null;
        function w() {
            if (y !== null) return y;
            var e = 1048576;
            var t = [];
            t[0] = 2;
            for (var r = 1, i = 3; i < e; i += 2) {
                var n = Math.ceil(Math.sqrt(i));
                for (var a = 0; a < r && t[a] <= n; a++) if (i % t[a] === 0) break;
                if (r !== a && t[a] <= n) continue;
                t[r++] = i;
            }
            y = t;
            return t;
        }
        function _(e) {
            var t = w();
            for (var r = 0; r < t.length; r++) if (e.modn(t[r]) === 0) {
                if (e.cmpn(t[r]) === 0) {
                    return true;
                } else {
                    return false;
                }
            }
            return true;
        }
        function S(e) {
            var t = n.mont(e);
            return c.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1) === 0;
        }
        function k(e, t) {
            if (e < 16) {
                if (t === 2 || t === 5) {
                    return new n([ 140, 123 ]);
                } else {
                    return new n([ 140, 39 ]);
                }
            }
            t = new n(t);
            var r, s;
            while (true) {
                r = new n(i(Math.ceil(e / 8)));
                while (r.bitLength() > e) {
                    r.ishrn(1);
                }
                if (r.isEven()) {
                    r.iadd(o);
                }
                if (!r.testn(1)) {
                    r.iadd(c);
                }
                if (!t.cmp(c)) {
                    while (r.mod(a).cmp(b)) {
                        r.iadd(m);
                    }
                } else if (!t.cmp(u)) {
                    while (r.mod(l).cmp(p)) {
                        r.iadd(m);
                    }
                }
                s = r.shrn(1);
                if (_(s) && _(r) && S(s) && S(r) && f.test(s) && f.test(r)) {
                    return r;
                }
            }
        }
    }, {
        "bn.js": 32,
        "miller-rabin": 179,
        randombytes: 218
    } ],
    104: [ function(e, t, r) {
        t.exports = {
            modp1: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"
            },
            modp2: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"
            },
            modp5: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"
            },
            modp14: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"
            },
            modp15: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"
            },
            modp16: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"
            },
            modp17: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"
            },
            modp18: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"
            }
        };
    }, {} ],
    105: [ function(e, t, r) {
        "use strict";
        var i = r;
        i.version = e("../package.json").version;
        i.utils = e("./elliptic/utils");
        i.rand = e("brorand");
        i.curve = e("./elliptic/curve");
        i.curves = e("./elliptic/curves");
        i.ec = e("./elliptic/ec");
        i.eddsa = e("./elliptic/eddsa");
    }, {
        "../package.json": 120,
        "./elliptic/curve": 108,
        "./elliptic/curves": 111,
        "./elliptic/ec": 112,
        "./elliptic/eddsa": 115,
        "./elliptic/utils": 119,
        brorand: 33
    } ],
    106: [ function(e, t, r) {
        "use strict";
        var i = e("bn.js");
        var n = e("../../elliptic");
        var a = n.utils;
        var s = a.getNAF;
        var f = a.getJSF;
        var o = a.assert;
        function c(e, t) {
            this.type = e;
            this.p = new i(t.p, 16);
            this.red = t.prime ? i.red(t.prime) : i.mont(this.p);
            this.zero = new i(0).toRed(this.red);
            this.one = new i(1).toRed(this.red);
            this.two = new i(2).toRed(this.red);
            this.n = t.n && new i(t.n, 16);
            this.g = t.g && this.pointFromJSON(t.g, t.gRed);
            this._wnafT1 = new Array(4);
            this._wnafT2 = new Array(4);
            this._wnafT3 = new Array(4);
            this._wnafT4 = new Array(4);
            var r = this.n && this.p.div(this.n);
            if (!r || r.cmpn(100) > 0) {
                this.redN = null;
            } else {
                this._maxwellTrick = true;
                this.redN = this.n.toRed(this.red);
            }
        }
        t.exports = c;
        c.prototype.point = function e() {
            throw new Error("Not implemented");
        };
        c.prototype.validate = function e() {
            throw new Error("Not implemented");
        };
        c.prototype._fixedNafMul = function e(t, r) {
            o(t.precomputed);
            var i = t._getDoubles();
            var n = s(r, 1);
            var a = (1 << i.step + 1) - (i.step % 2 === 0 ? 2 : 1);
            a /= 3;
            var f = [];
            for (var c = 0; c < n.length; c += i.step) {
                var u = 0;
                for (var r = c + i.step - 1; r >= c; r--) u = (u << 1) + n[r];
                f.push(u);
            }
            var h = this.jpoint(null, null, null);
            var d = this.jpoint(null, null, null);
            for (var l = a; l > 0; l--) {
                for (var c = 0; c < f.length; c++) {
                    var u = f[c];
                    if (u === l) d = d.mixedAdd(i.points[c]); else if (u === -l) d = d.mixedAdd(i.points[c].neg());
                }
                h = h.add(d);
            }
            return h.toP();
        };
        c.prototype._wnafMul = function e(t, r) {
            var i = 4;
            var n = t._getNAFPoints(i);
            i = n.wnd;
            var a = n.points;
            var f = s(r, i);
            var c = this.jpoint(null, null, null);
            for (var u = f.length - 1; u >= 0; u--) {
                for (var r = 0; u >= 0 && f[u] === 0; u--) r++;
                if (u >= 0) r++;
                c = c.dblp(r);
                if (u < 0) break;
                var h = f[u];
                o(h !== 0);
                if (t.type === "affine") {
                    if (h > 0) c = c.mixedAdd(a[h - 1 >> 1]); else c = c.mixedAdd(a[-h - 1 >> 1].neg());
                } else {
                    if (h > 0) c = c.add(a[h - 1 >> 1]); else c = c.add(a[-h - 1 >> 1].neg());
                }
            }
            return t.type === "affine" ? c.toP() : c;
        };
        c.prototype._wnafMulAdd = function e(t, r, i, n, a) {
            var o = this._wnafT1;
            var c = this._wnafT2;
            var u = this._wnafT3;
            var h = 0;
            for (var d = 0; d < n; d++) {
                var l = r[d];
                var p = l._getNAFPoints(t);
                o[d] = p.wnd;
                c[d] = p.points;
            }
            for (var d = n - 1; d >= 1; d -= 2) {
                var v = d - 1;
                var b = d;
                if (o[v] !== 1 || o[b] !== 1) {
                    u[v] = s(i[v], o[v]);
                    u[b] = s(i[b], o[b]);
                    h = Math.max(u[v].length, h);
                    h = Math.max(u[b].length, h);
                    continue;
                }
                var m = [ r[v], null, null, r[b] ];
                if (r[v].y.cmp(r[b].y) === 0) {
                    m[1] = r[v].add(r[b]);
                    m[2] = r[v].toJ().mixedAdd(r[b].neg());
                } else if (r[v].y.cmp(r[b].y.redNeg()) === 0) {
                    m[1] = r[v].toJ().mixedAdd(r[b]);
                    m[2] = r[v].add(r[b].neg());
                } else {
                    m[1] = r[v].toJ().mixedAdd(r[b]);
                    m[2] = r[v].toJ().mixedAdd(r[b].neg());
                }
                var g = [ -3, -1, -5, -7, 0, 7, 5, 1, 3 ];
                var y = f(i[v], i[b]);
                h = Math.max(y[0].length, h);
                u[v] = new Array(h);
                u[b] = new Array(h);
                for (var w = 0; w < h; w++) {
                    var _ = y[0][w] | 0;
                    var S = y[1][w] | 0;
                    u[v][w] = g[(_ + 1) * 3 + (S + 1)];
                    u[b][w] = 0;
                    c[v] = m;
                }
            }
            var k = this.jpoint(null, null, null);
            var x = this._wnafT4;
            for (var d = h; d >= 0; d--) {
                var E = 0;
                while (d >= 0) {
                    var A = true;
                    for (var w = 0; w < n; w++) {
                        x[w] = u[w][d] | 0;
                        if (x[w] !== 0) A = false;
                    }
                    if (!A) break;
                    E++;
                    d--;
                }
                if (d >= 0) E++;
                k = k.dblp(E);
                if (d < 0) break;
                for (var w = 0; w < n; w++) {
                    var M = x[w];
                    var l;
                    if (M === 0) continue; else if (M > 0) l = c[w][M - 1 >> 1]; else if (M < 0) l = c[w][-M - 1 >> 1].neg();
                    if (l.type === "affine") k = k.mixedAdd(l); else k = k.add(l);
                }
            }
            for (var d = 0; d < n; d++) c[d] = null;
            if (a) return k; else return k.toP();
        };
        function u(e, t) {
            this.curve = e;
            this.type = t;
            this.precomputed = null;
        }
        c.BasePoint = u;
        u.prototype.eq = function e() {
            throw new Error("Not implemented");
        };
        u.prototype.validate = function e() {
            return this.curve.validate(this);
        };
        c.prototype.decodePoint = function e(t, r) {
            t = a.toArray(t, r);
            var i = this.p.byteLength();
            if ((t[0] === 4 || t[0] === 6 || t[0] === 7) && t.length - 1 === 2 * i) {
                if (t[0] === 6) o(t[t.length - 1] % 2 === 0); else if (t[0] === 7) o(t[t.length - 1] % 2 === 1);
                var n = this.point(t.slice(1, 1 + i), t.slice(1 + i, 1 + 2 * i));
                return n;
            } else if ((t[0] === 2 || t[0] === 3) && t.length - 1 === i) {
                return this.pointFromX(t.slice(1, 1 + i), t[0] === 3);
            }
            throw new Error("Unknown point format");
        };
        u.prototype.encodeCompressed = function e(t) {
            return this.encode(t, true);
        };
        u.prototype._encode = function e(t) {
            var r = this.curve.p.byteLength();
            var i = this.getX().toArray("be", r);
            if (t) return [ this.getY().isEven() ? 2 : 3 ].concat(i);
            return [ 4 ].concat(i, this.getY().toArray("be", r));
        };
        u.prototype.encode = function e(t, r) {
            return a.encode(this._encode(r), t);
        };
        u.prototype.precompute = function e(t) {
            if (this.precomputed) return this;
            var r = {
                doubles: null,
                naf: null,
                beta: null
            };
            r.naf = this._getNAFPoints(8);
            r.doubles = this._getDoubles(4, t);
            r.beta = this._getBeta();
            this.precomputed = r;
            return this;
        };
        u.prototype._hasDoubles = function e(t) {
            if (!this.precomputed) return false;
            var r = this.precomputed.doubles;
            if (!r) return false;
            return r.points.length >= Math.ceil((t.bitLength() + 1) / r.step);
        };
        u.prototype._getDoubles = function e(t, r) {
            if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
            var i = [ this ];
            var n = this;
            for (var a = 0; a < r; a += t) {
                for (var s = 0; s < t; s++) n = n.dbl();
                i.push(n);
            }
            return {
                step: t,
                points: i
            };
        };
        u.prototype._getNAFPoints = function e(t) {
            if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
            var r = [ this ];
            var i = (1 << t) - 1;
            var n = i === 1 ? null : this.dbl();
            for (var a = 1; a < i; a++) r[a] = r[a - 1].add(n);
            return {
                wnd: t,
                points: r
            };
        };
        u.prototype._getBeta = function e() {
            return null;
        };
        u.prototype.dblp = function e(t) {
            var r = this;
            for (var i = 0; i < t; i++) r = r.dbl();
            return r;
        };
    }, {
        "../../elliptic": 105,
        "bn.js": 32
    } ],
    107: [ function(e, t, r) {
        "use strict";
        var i = e("../curve");
        var n = e("../../elliptic");
        var a = e("bn.js");
        var s = e("inherits");
        var f = i.base;
        var o = n.utils.assert;
        function c(e) {
            this.twisted = (e.a | 0) !== 1;
            this.mOneA = this.twisted && (e.a | 0) === -1;
            this.extended = this.mOneA;
            f.call(this, "edwards", e);
            this.a = new a(e.a, 16).umod(this.red.m);
            this.a = this.a.toRed(this.red);
            this.c = new a(e.c, 16).toRed(this.red);
            this.c2 = this.c.redSqr();
            this.d = new a(e.d, 16).toRed(this.red);
            this.dd = this.d.redAdd(this.d);
            o(!this.twisted || this.c.fromRed().cmpn(1) === 0);
            this.oneC = (e.c | 0) === 1;
        }
        s(c, f);
        t.exports = c;
        c.prototype._mulA = function e(t) {
            if (this.mOneA) return t.redNeg(); else return this.a.redMul(t);
        };
        c.prototype._mulC = function e(t) {
            if (this.oneC) return t; else return this.c.redMul(t);
        };
        c.prototype.jpoint = function e(t, r, i, n) {
            return this.point(t, r, i, n);
        };
        c.prototype.pointFromX = function e(t, r) {
            t = new a(t, 16);
            if (!t.red) t = t.toRed(this.red);
            var i = t.redSqr();
            var n = this.c2.redSub(this.a.redMul(i));
            var s = this.one.redSub(this.c2.redMul(this.d).redMul(i));
            var f = n.redMul(s.redInvm());
            var o = f.redSqrt();
            if (o.redSqr().redSub(f).cmp(this.zero) !== 0) throw new Error("invalid point");
            var c = o.fromRed().isOdd();
            if (r && !c || !r && c) o = o.redNeg();
            return this.point(t, o);
        };
        c.prototype.pointFromY = function e(t, r) {
            t = new a(t, 16);
            if (!t.red) t = t.toRed(this.red);
            var i = t.redSqr();
            var n = i.redSub(this.one);
            var s = i.redMul(this.d).redAdd(this.one);
            var f = n.redMul(s.redInvm());
            if (f.cmp(this.zero) === 0) {
                if (r) throw new Error("invalid point"); else return this.point(this.zero, t);
            }
            var o = f.redSqrt();
            if (o.redSqr().redSub(f).cmp(this.zero) !== 0) throw new Error("invalid point");
            if (o.isOdd() !== r) o = o.redNeg();
            return this.point(o, t);
        };
        c.prototype.validate = function e(t) {
            if (t.isInfinity()) return true;
            t.normalize();
            var r = t.x.redSqr();
            var i = t.y.redSqr();
            var n = r.redMul(this.a).redAdd(i);
            var a = this.c2.redMul(this.one.redAdd(this.d.redMul(r).redMul(i)));
            return n.cmp(a) === 0;
        };
        function u(e, t, r, i, n) {
            f.BasePoint.call(this, e, "projective");
            if (t === null && r === null && i === null) {
                this.x = this.curve.zero;
                this.y = this.curve.one;
                this.z = this.curve.one;
                this.t = this.curve.zero;
                this.zOne = true;
            } else {
                this.x = new a(t, 16);
                this.y = new a(r, 16);
                this.z = i ? new a(i, 16) : this.curve.one;
                this.t = n && new a(n, 16);
                if (!this.x.red) this.x = this.x.toRed(this.curve.red);
                if (!this.y.red) this.y = this.y.toRed(this.curve.red);
                if (!this.z.red) this.z = this.z.toRed(this.curve.red);
                if (this.t && !this.t.red) this.t = this.t.toRed(this.curve.red);
                this.zOne = this.z === this.curve.one;
                if (this.curve.extended && !this.t) {
                    this.t = this.x.redMul(this.y);
                    if (!this.zOne) this.t = this.t.redMul(this.z.redInvm());
                }
            }
        }
        s(u, f.BasePoint);
        c.prototype.pointFromJSON = function e(t) {
            return u.fromJSON(this, t);
        };
        c.prototype.point = function e(t, r, i, n) {
            return new u(this, t, r, i, n);
        };
        u.fromJSON = function e(t, r) {
            return new u(t, r[0], r[1], r[2]);
        };
        u.prototype.inspect = function e() {
            if (this.isInfinity()) return "<EC Point Infinity>";
            return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
        };
        u.prototype.isInfinity = function e() {
            return this.x.cmpn(0) === 0 && this.y.cmp(this.z) === 0;
        };
        u.prototype._extDbl = function e() {
            var t = this.x.redSqr();
            var r = this.y.redSqr();
            var i = this.z.redSqr();
            i = i.redIAdd(i);
            var n = this.curve._mulA(t);
            var a = this.x.redAdd(this.y).redSqr().redISub(t).redISub(r);
            var s = n.redAdd(r);
            var f = s.redSub(i);
            var o = n.redSub(r);
            var c = a.redMul(f);
            var u = s.redMul(o);
            var h = a.redMul(o);
            var d = f.redMul(s);
            return this.curve.point(c, u, d, h);
        };
        u.prototype._projDbl = function e() {
            var t = this.x.redAdd(this.y).redSqr();
            var r = this.x.redSqr();
            var i = this.y.redSqr();
            var n;
            var a;
            var s;
            if (this.curve.twisted) {
                var f = this.curve._mulA(r);
                var o = f.redAdd(i);
                if (this.zOne) {
                    n = t.redSub(r).redSub(i).redMul(o.redSub(this.curve.two));
                    a = o.redMul(f.redSub(i));
                    s = o.redSqr().redSub(o).redSub(o);
                } else {
                    var c = this.z.redSqr();
                    var u = o.redSub(c).redISub(c);
                    n = t.redSub(r).redISub(i).redMul(u);
                    a = o.redMul(f.redSub(i));
                    s = o.redMul(u);
                }
            } else {
                var f = r.redAdd(i);
                var c = this.curve._mulC(this.c.redMul(this.z)).redSqr();
                var u = f.redSub(c).redSub(c);
                n = this.curve._mulC(t.redISub(f)).redMul(u);
                a = this.curve._mulC(f).redMul(r.redISub(i));
                s = f.redMul(u);
            }
            return this.curve.point(n, a, s);
        };
        u.prototype.dbl = function e() {
            if (this.isInfinity()) return this;
            if (this.curve.extended) return this._extDbl(); else return this._projDbl();
        };
        u.prototype._extAdd = function e(t) {
            var r = this.y.redSub(this.x).redMul(t.y.redSub(t.x));
            var i = this.y.redAdd(this.x).redMul(t.y.redAdd(t.x));
            var n = this.t.redMul(this.curve.dd).redMul(t.t);
            var a = this.z.redMul(t.z.redAdd(t.z));
            var s = i.redSub(r);
            var f = a.redSub(n);
            var o = a.redAdd(n);
            var c = i.redAdd(r);
            var u = s.redMul(f);
            var h = o.redMul(c);
            var d = s.redMul(c);
            var l = f.redMul(o);
            return this.curve.point(u, h, l, d);
        };
        u.prototype._projAdd = function e(t) {
            var r = this.z.redMul(t.z);
            var i = r.redSqr();
            var n = this.x.redMul(t.x);
            var a = this.y.redMul(t.y);
            var s = this.curve.d.redMul(n).redMul(a);
            var f = i.redSub(s);
            var o = i.redAdd(s);
            var c = this.x.redAdd(this.y).redMul(t.x.redAdd(t.y)).redISub(n).redISub(a);
            var u = r.redMul(f).redMul(c);
            var h;
            var d;
            if (this.curve.twisted) {
                h = r.redMul(o).redMul(a.redSub(this.curve._mulA(n)));
                d = f.redMul(o);
            } else {
                h = r.redMul(o).redMul(a.redSub(n));
                d = this.curve._mulC(f).redMul(o);
            }
            return this.curve.point(u, h, d);
        };
        u.prototype.add = function e(t) {
            if (this.isInfinity()) return t;
            if (t.isInfinity()) return this;
            if (this.curve.extended) return this._extAdd(t); else return this._projAdd(t);
        };
        u.prototype.mul = function e(t) {
            if (this._hasDoubles(t)) return this.curve._fixedNafMul(this, t); else return this.curve._wnafMul(this, t);
        };
        u.prototype.mulAdd = function e(t, r, i) {
            return this.curve._wnafMulAdd(1, [ this, r ], [ t, i ], 2, false);
        };
        u.prototype.jmulAdd = function e(t, r, i) {
            return this.curve._wnafMulAdd(1, [ this, r ], [ t, i ], 2, true);
        };
        u.prototype.normalize = function e() {
            if (this.zOne) return this;
            var t = this.z.redInvm();
            this.x = this.x.redMul(t);
            this.y = this.y.redMul(t);
            if (this.t) this.t = this.t.redMul(t);
            this.z = this.curve.one;
            this.zOne = true;
            return this;
        };
        u.prototype.neg = function e() {
            return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
        };
        u.prototype.getX = function e() {
            this.normalize();
            return this.x.fromRed();
        };
        u.prototype.getY = function e() {
            this.normalize();
            return this.y.fromRed();
        };
        u.prototype.eq = function e(t) {
            return this === t || this.getX().cmp(t.getX()) === 0 && this.getY().cmp(t.getY()) === 0;
        };
        u.prototype.eqXToP = function e(t) {
            var r = t.toRed(this.curve.red).redMul(this.z);
            if (this.x.cmp(r) === 0) return true;
            var i = t.clone();
            var n = this.curve.redN.redMul(this.z);
            for (;;) {
                i.iadd(this.curve.n);
                if (i.cmp(this.curve.p) >= 0) return false;
                r.redIAdd(n);
                if (this.x.cmp(r) === 0) return true;
            }
            return false;
        };
        u.prototype.toP = u.prototype.normalize;
        u.prototype.mixedAdd = u.prototype.add;
    }, {
        "../../elliptic": 105,
        "../curve": 108,
        "bn.js": 32,
        inherits: 139
    } ],
    108: [ function(e, t, r) {
        "use strict";
        var i = r;
        i.base = e("./base");
        i.short = e("./short");
        i.mont = e("./mont");
        i.edwards = e("./edwards");
    }, {
        "./base": 106,
        "./edwards": 107,
        "./mont": 109,
        "./short": 110
    } ],
    109: [ function(e, t, r) {
        "use strict";
        var i = e("../curve");
        var n = e("bn.js");
        var a = e("inherits");
        var s = i.base;
        var f = e("../../elliptic");
        var o = f.utils;
        function c(e) {
            s.call(this, "mont", e);
            this.a = new n(e.a, 16).toRed(this.red);
            this.b = new n(e.b, 16).toRed(this.red);
            this.i4 = new n(4).toRed(this.red).redInvm();
            this.two = new n(2).toRed(this.red);
            this.a24 = this.i4.redMul(this.a.redAdd(this.two));
        }
        a(c, s);
        t.exports = c;
        c.prototype.validate = function e(t) {
            var r = t.normalize().x;
            var i = r.redSqr();
            var n = i.redMul(r).redAdd(i.redMul(this.a)).redAdd(r);
            var a = n.redSqrt();
            return a.redSqr().cmp(n) === 0;
        };
        function u(e, t, r) {
            s.BasePoint.call(this, e, "projective");
            if (t === null && r === null) {
                this.x = this.curve.one;
                this.z = this.curve.zero;
            } else {
                this.x = new n(t, 16);
                this.z = new n(r, 16);
                if (!this.x.red) this.x = this.x.toRed(this.curve.red);
                if (!this.z.red) this.z = this.z.toRed(this.curve.red);
            }
        }
        a(u, s.BasePoint);
        c.prototype.decodePoint = function e(t, r) {
            return this.point(o.toArray(t, r), 1);
        };
        c.prototype.point = function e(t, r) {
            return new u(this, t, r);
        };
        c.prototype.pointFromJSON = function e(t) {
            return u.fromJSON(this, t);
        };
        u.prototype.precompute = function e() {};
        u.prototype._encode = function e() {
            return this.getX().toArray("be", this.curve.p.byteLength());
        };
        u.fromJSON = function e(t, r) {
            return new u(t, r[0], r[1] || t.one);
        };
        u.prototype.inspect = function e() {
            if (this.isInfinity()) return "<EC Point Infinity>";
            return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
        };
        u.prototype.isInfinity = function e() {
            return this.z.cmpn(0) === 0;
        };
        u.prototype.dbl = function e() {
            var t = this.x.redAdd(this.z);
            var r = t.redSqr();
            var i = this.x.redSub(this.z);
            var n = i.redSqr();
            var a = r.redSub(n);
            var s = r.redMul(n);
            var f = a.redMul(n.redAdd(this.curve.a24.redMul(a)));
            return this.curve.point(s, f);
        };
        u.prototype.add = function e() {
            throw new Error("Not supported on Montgomery curve");
        };
        u.prototype.diffAdd = function e(t, r) {
            var i = this.x.redAdd(this.z);
            var n = this.x.redSub(this.z);
            var a = t.x.redAdd(t.z);
            var s = t.x.redSub(t.z);
            var f = s.redMul(i);
            var o = a.redMul(n);
            var c = r.z.redMul(f.redAdd(o).redSqr());
            var u = r.x.redMul(f.redISub(o).redSqr());
            return this.curve.point(c, u);
        };
        u.prototype.mul = function e(t) {
            var r = t.clone();
            var i = this;
            var n = this.curve.point(null, null);
            var a = this;
            for (var s = []; r.cmpn(0) !== 0; r.iushrn(1)) s.push(r.andln(1));
            for (var f = s.length - 1; f >= 0; f--) {
                if (s[f] === 0) {
                    i = i.diffAdd(n, a);
                    n = n.dbl();
                } else {
                    n = i.diffAdd(n, a);
                    i = i.dbl();
                }
            }
            return n;
        };
        u.prototype.mulAdd = function e() {
            throw new Error("Not supported on Montgomery curve");
        };
        u.prototype.jumlAdd = function e() {
            throw new Error("Not supported on Montgomery curve");
        };
        u.prototype.eq = function e(t) {
            return this.getX().cmp(t.getX()) === 0;
        };
        u.prototype.normalize = function e() {
            this.x = this.x.redMul(this.z.redInvm());
            this.z = this.curve.one;
            return this;
        };
        u.prototype.getX = function e() {
            this.normalize();
            return this.x.fromRed();
        };
    }, {
        "../../elliptic": 105,
        "../curve": 108,
        "bn.js": 32,
        inherits: 139
    } ],
    110: [ function(e, t, r) {
        "use strict";
        var i = e("../curve");
        var n = e("../../elliptic");
        var a = e("bn.js");
        var s = e("inherits");
        var f = i.base;
        var o = n.utils.assert;
        function c(e) {
            f.call(this, "short", e);
            this.a = new a(e.a, 16).toRed(this.red);
            this.b = new a(e.b, 16).toRed(this.red);
            this.tinv = this.two.redInvm();
            this.zeroA = this.a.fromRed().cmpn(0) === 0;
            this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0;
            this.endo = this._getEndomorphism(e);
            this._endoWnafT1 = new Array(4);
            this._endoWnafT2 = new Array(4);
        }
        s(c, f);
        t.exports = c;
        c.prototype._getEndomorphism = function e(t) {
            if (!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1) return;
            var r;
            var i;
            if (t.beta) {
                r = new a(t.beta, 16).toRed(this.red);
            } else {
                var n = this._getEndoRoots(this.p);
                r = n[0].cmp(n[1]) < 0 ? n[0] : n[1];
                r = r.toRed(this.red);
            }
            if (t.lambda) {
                i = new a(t.lambda, 16);
            } else {
                var s = this._getEndoRoots(this.n);
                if (this.g.mul(s[0]).x.cmp(this.g.x.redMul(r)) === 0) {
                    i = s[0];
                } else {
                    i = s[1];
                    o(this.g.mul(i).x.cmp(this.g.x.redMul(r)) === 0);
                }
            }
            var f;
            if (t.basis) {
                f = t.basis.map(function(e) {
                    return {
                        a: new a(e.a, 16),
                        b: new a(e.b, 16)
                    };
                });
            } else {
                f = this._getEndoBasis(i);
            }
            return {
                beta: r,
                lambda: i,
                basis: f
            };
        };
        c.prototype._getEndoRoots = function e(t) {
            var r = t === this.p ? this.red : a.mont(t);
            var i = new a(2).toRed(r).redInvm();
            var n = i.redNeg();
            var s = new a(3).toRed(r).redNeg().redSqrt().redMul(i);
            var f = n.redAdd(s).fromRed();
            var o = n.redSub(s).fromRed();
            return [ f, o ];
        };
        c.prototype._getEndoBasis = function e(t) {
            var r = this.n.ushrn(Math.floor(this.n.bitLength() / 2));
            var i = t;
            var n = this.n.clone();
            var s = new a(1);
            var f = new a(0);
            var o = new a(0);
            var c = new a(1);
            var u;
            var h;
            var d;
            var l;
            var p;
            var v;
            var b;
            var m = 0;
            var g;
            var y;
            while (i.cmpn(0) !== 0) {
                var w = n.div(i);
                g = n.sub(w.mul(i));
                y = o.sub(w.mul(s));
                var _ = c.sub(w.mul(f));
                if (!d && g.cmp(r) < 0) {
                    u = b.neg();
                    h = s;
                    d = g.neg();
                    l = y;
                } else if (d && ++m === 2) {
                    break;
                }
                b = g;
                n = i;
                i = g;
                o = s;
                s = y;
                c = f;
                f = _;
            }
            p = g.neg();
            v = y;
            var S = d.sqr().add(l.sqr());
            var k = p.sqr().add(v.sqr());
            if (k.cmp(S) >= 0) {
                p = u;
                v = h;
            }
            if (d.negative) {
                d = d.neg();
                l = l.neg();
            }
            if (p.negative) {
                p = p.neg();
                v = v.neg();
            }
            return [ {
                a: d,
                b: l
            }, {
                a: p,
                b: v
            } ];
        };
        c.prototype._endoSplit = function e(t) {
            var r = this.endo.basis;
            var i = r[0];
            var n = r[1];
            var a = n.b.mul(t).divRound(this.n);
            var s = i.b.neg().mul(t).divRound(this.n);
            var f = a.mul(i.a);
            var o = s.mul(n.a);
            var c = a.mul(i.b);
            var u = s.mul(n.b);
            var h = t.sub(f).sub(o);
            var d = c.add(u).neg();
            return {
                k1: h,
                k2: d
            };
        };
        c.prototype.pointFromX = function e(t, r) {
            t = new a(t, 16);
            if (!t.red) t = t.toRed(this.red);
            var i = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b);
            var n = i.redSqrt();
            if (n.redSqr().redSub(i).cmp(this.zero) !== 0) throw new Error("invalid point");
            var s = n.fromRed().isOdd();
            if (r && !s || !r && s) n = n.redNeg();
            return this.point(t, n);
        };
        c.prototype.validate = function e(t) {
            if (t.inf) return true;
            var r = t.x;
            var i = t.y;
            var n = this.a.redMul(r);
            var a = r.redSqr().redMul(r).redIAdd(n).redIAdd(this.b);
            return i.redSqr().redISub(a).cmpn(0) === 0;
        };
        c.prototype._endoWnafMulAdd = function e(t, r, i) {
            var n = this._endoWnafT1;
            var a = this._endoWnafT2;
            for (var s = 0; s < t.length; s++) {
                var f = this._endoSplit(r[s]);
                var o = t[s];
                var c = o._getBeta();
                if (f.k1.negative) {
                    f.k1.ineg();
                    o = o.neg(true);
                }
                if (f.k2.negative) {
                    f.k2.ineg();
                    c = c.neg(true);
                }
                n[s * 2] = o;
                n[s * 2 + 1] = c;
                a[s * 2] = f.k1;
                a[s * 2 + 1] = f.k2;
            }
            var u = this._wnafMulAdd(1, n, a, s * 2, i);
            for (var h = 0; h < s * 2; h++) {
                n[h] = null;
                a[h] = null;
            }
            return u;
        };
        function u(e, t, r, i) {
            f.BasePoint.call(this, e, "affine");
            if (t === null && r === null) {
                this.x = null;
                this.y = null;
                this.inf = true;
            } else {
                this.x = new a(t, 16);
                this.y = new a(r, 16);
                if (i) {
                    this.x.forceRed(this.curve.red);
                    this.y.forceRed(this.curve.red);
                }
                if (!this.x.red) this.x = this.x.toRed(this.curve.red);
                if (!this.y.red) this.y = this.y.toRed(this.curve.red);
                this.inf = false;
            }
        }
        s(u, f.BasePoint);
        c.prototype.point = function e(t, r, i) {
            return new u(this, t, r, i);
        };
        c.prototype.pointFromJSON = function e(t, r) {
            return u.fromJSON(this, t, r);
        };
        u.prototype._getBeta = function e() {
            if (!this.curve.endo) return;
            var t = this.precomputed;
            if (t && t.beta) return t.beta;
            var r = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (t) {
                var i = this.curve;
                var n = function(e) {
                    return i.point(e.x.redMul(i.endo.beta), e.y);
                };
                t.beta = r;
                r.precomputed = {
                    beta: null,
                    naf: t.naf && {
                        wnd: t.naf.wnd,
                        points: t.naf.points.map(n)
                    },
                    doubles: t.doubles && {
                        step: t.doubles.step,
                        points: t.doubles.points.map(n)
                    }
                };
            }
            return r;
        };
        u.prototype.toJSON = function e() {
            if (!this.precomputed) return [ this.x, this.y ];
            return [ this.x, this.y, this.precomputed && {
                doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1)
                },
                naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1)
                }
            } ];
        };
        u.fromJSON = function e(t, r, i) {
            if (typeof r === "string") r = JSON.parse(r);
            var n = t.point(r[0], r[1], i);
            if (!r[2]) return n;
            function a(e) {
                return t.point(e[0], e[1], i);
            }
            var s = r[2];
            n.precomputed = {
                beta: null,
                doubles: s.doubles && {
                    step: s.doubles.step,
                    points: [ n ].concat(s.doubles.points.map(a))
                },
                naf: s.naf && {
                    wnd: s.naf.wnd,
                    points: [ n ].concat(s.naf.points.map(a))
                }
            };
            return n;
        };
        u.prototype.inspect = function e() {
            if (this.isInfinity()) return "<EC Point Infinity>";
            return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
        };
        u.prototype.isInfinity = function e() {
            return this.inf;
        };
        u.prototype.add = function e(t) {
            if (this.inf) return t;
            if (t.inf) return this;
            if (this.eq(t)) return this.dbl();
            if (this.neg().eq(t)) return this.curve.point(null, null);
            if (this.x.cmp(t.x) === 0) return this.curve.point(null, null);
            var r = this.y.redSub(t.y);
            if (r.cmpn(0) !== 0) r = r.redMul(this.x.redSub(t.x).redInvm());
            var i = r.redSqr().redISub(this.x).redISub(t.x);
            var n = r.redMul(this.x.redSub(i)).redISub(this.y);
            return this.curve.point(i, n);
        };
        u.prototype.dbl = function e() {
            if (this.inf) return this;
            var t = this.y.redAdd(this.y);
            if (t.cmpn(0) === 0) return this.curve.point(null, null);
            var r = this.curve.a;
            var i = this.x.redSqr();
            var n = t.redInvm();
            var a = i.redAdd(i).redIAdd(i).redIAdd(r).redMul(n);
            var s = a.redSqr().redISub(this.x.redAdd(this.x));
            var f = a.redMul(this.x.redSub(s)).redISub(this.y);
            return this.curve.point(s, f);
        };
        u.prototype.getX = function e() {
            return this.x.fromRed();
        };
        u.prototype.getY = function e() {
            return this.y.fromRed();
        };
        u.prototype.mul = function e(t) {
            t = new a(t, 16);
            if (this._hasDoubles(t)) return this.curve._fixedNafMul(this, t); else if (this.curve.endo) return this.curve._endoWnafMulAdd([ this ], [ t ]); else return this.curve._wnafMul(this, t);
        };
        u.prototype.mulAdd = function e(t, r, i) {
            var n = [ this, r ];
            var a = [ t, i ];
            if (this.curve.endo) return this.curve._endoWnafMulAdd(n, a); else return this.curve._wnafMulAdd(1, n, a, 2);
        };
        u.prototype.jmulAdd = function e(t, r, i) {
            var n = [ this, r ];
            var a = [ t, i ];
            if (this.curve.endo) return this.curve._endoWnafMulAdd(n, a, true); else return this.curve._wnafMulAdd(1, n, a, 2, true);
        };
        u.prototype.eq = function e(t) {
            return this === t || this.inf === t.inf && (this.inf || this.x.cmp(t.x) === 0 && this.y.cmp(t.y) === 0);
        };
        u.prototype.neg = function e(t) {
            if (this.inf) return this;
            var r = this.curve.point(this.x, this.y.redNeg());
            if (t && this.precomputed) {
                var i = this.precomputed;
                var n = function(e) {
                    return e.neg();
                };
                r.precomputed = {
                    naf: i.naf && {
                        wnd: i.naf.wnd,
                        points: i.naf.points.map(n)
                    },
                    doubles: i.doubles && {
                        step: i.doubles.step,
                        points: i.doubles.points.map(n)
                    }
                };
            }
            return r;
        };
        u.prototype.toJ = function e() {
            if (this.inf) return this.curve.jpoint(null, null, null);
            var t = this.curve.jpoint(this.x, this.y, this.curve.one);
            return t;
        };
        function h(e, t, r, i) {
            f.BasePoint.call(this, e, "jacobian");
            if (t === null && r === null && i === null) {
                this.x = this.curve.one;
                this.y = this.curve.one;
                this.z = new a(0);
            } else {
                this.x = new a(t, 16);
                this.y = new a(r, 16);
                this.z = new a(i, 16);
            }
            if (!this.x.red) this.x = this.x.toRed(this.curve.red);
            if (!this.y.red) this.y = this.y.toRed(this.curve.red);
            if (!this.z.red) this.z = this.z.toRed(this.curve.red);
            this.zOne = this.z === this.curve.one;
        }
        s(h, f.BasePoint);
        c.prototype.jpoint = function e(t, r, i) {
            return new h(this, t, r, i);
        };
        h.prototype.toP = function e() {
            if (this.isInfinity()) return this.curve.point(null, null);
            var t = this.z.redInvm();
            var r = t.redSqr();
            var i = this.x.redMul(r);
            var n = this.y.redMul(r).redMul(t);
            return this.curve.point(i, n);
        };
        h.prototype.neg = function e() {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        };
        h.prototype.add = function e(t) {
            if (this.isInfinity()) return t;
            if (t.isInfinity()) return this;
            var r = t.z.redSqr();
            var i = this.z.redSqr();
            var n = this.x.redMul(r);
            var a = t.x.redMul(i);
            var s = this.y.redMul(r.redMul(t.z));
            var f = t.y.redMul(i.redMul(this.z));
            var o = n.redSub(a);
            var c = s.redSub(f);
            if (o.cmpn(0) === 0) {
                if (c.cmpn(0) !== 0) return this.curve.jpoint(null, null, null); else return this.dbl();
            }
            var u = o.redSqr();
            var h = u.redMul(o);
            var d = n.redMul(u);
            var l = c.redSqr().redIAdd(h).redISub(d).redISub(d);
            var p = c.redMul(d.redISub(l)).redISub(s.redMul(h));
            var v = this.z.redMul(t.z).redMul(o);
            return this.curve.jpoint(l, p, v);
        };
        h.prototype.mixedAdd = function e(t) {
            if (this.isInfinity()) return t.toJ();
            if (t.isInfinity()) return this;
            var r = this.z.redSqr();
            var i = this.x;
            var n = t.x.redMul(r);
            var a = this.y;
            var s = t.y.redMul(r).redMul(this.z);
            var f = i.redSub(n);
            var o = a.redSub(s);
            if (f.cmpn(0) === 0) {
                if (o.cmpn(0) !== 0) return this.curve.jpoint(null, null, null); else return this.dbl();
            }
            var c = f.redSqr();
            var u = c.redMul(f);
            var h = i.redMul(c);
            var d = o.redSqr().redIAdd(u).redISub(h).redISub(h);
            var l = o.redMul(h.redISub(d)).redISub(a.redMul(u));
            var p = this.z.redMul(f);
            return this.curve.jpoint(d, l, p);
        };
        h.prototype.dblp = function e(t) {
            if (t === 0) return this;
            if (this.isInfinity()) return this;
            if (!t) return this.dbl();
            if (this.curve.zeroA || this.curve.threeA) {
                var r = this;
                for (var i = 0; i < t; i++) r = r.dbl();
                return r;
            }
            var n = this.curve.a;
            var a = this.curve.tinv;
            var s = this.x;
            var f = this.y;
            var o = this.z;
            var c = o.redSqr().redSqr();
            var u = f.redAdd(f);
            for (var i = 0; i < t; i++) {
                var h = s.redSqr();
                var d = u.redSqr();
                var l = d.redSqr();
                var p = h.redAdd(h).redIAdd(h).redIAdd(n.redMul(c));
                var v = s.redMul(d);
                var b = p.redSqr().redISub(v.redAdd(v));
                var m = v.redISub(b);
                var g = p.redMul(m);
                g = g.redIAdd(g).redISub(l);
                var y = u.redMul(o);
                if (i + 1 < t) c = c.redMul(l);
                s = b;
                o = y;
                u = g;
            }
            return this.curve.jpoint(s, u.redMul(a), o);
        };
        h.prototype.dbl = function e() {
            if (this.isInfinity()) return this;
            if (this.curve.zeroA) return this._zeroDbl(); else if (this.curve.threeA) return this._threeDbl(); else return this._dbl();
        };
        h.prototype._zeroDbl = function e() {
            var t;
            var r;
            var i;
            if (this.zOne) {
                var n = this.x.redSqr();
                var a = this.y.redSqr();
                var s = a.redSqr();
                var f = this.x.redAdd(a).redSqr().redISub(n).redISub(s);
                f = f.redIAdd(f);
                var o = n.redAdd(n).redIAdd(n);
                var c = o.redSqr().redISub(f).redISub(f);
                var u = s.redIAdd(s);
                u = u.redIAdd(u);
                u = u.redIAdd(u);
                t = c;
                r = o.redMul(f.redISub(c)).redISub(u);
                i = this.y.redAdd(this.y);
            } else {
                var h = this.x.redSqr();
                var d = this.y.redSqr();
                var l = d.redSqr();
                var p = this.x.redAdd(d).redSqr().redISub(h).redISub(l);
                p = p.redIAdd(p);
                var v = h.redAdd(h).redIAdd(h);
                var b = v.redSqr();
                var m = l.redIAdd(l);
                m = m.redIAdd(m);
                m = m.redIAdd(m);
                t = b.redISub(p).redISub(p);
                r = v.redMul(p.redISub(t)).redISub(m);
                i = this.y.redMul(this.z);
                i = i.redIAdd(i);
            }
            return this.curve.jpoint(t, r, i);
        };
        h.prototype._threeDbl = function e() {
            var t;
            var r;
            var i;
            if (this.zOne) {
                var n = this.x.redSqr();
                var a = this.y.redSqr();
                var s = a.redSqr();
                var f = this.x.redAdd(a).redSqr().redISub(n).redISub(s);
                f = f.redIAdd(f);
                var o = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a);
                var c = o.redSqr().redISub(f).redISub(f);
                t = c;
                var u = s.redIAdd(s);
                u = u.redIAdd(u);
                u = u.redIAdd(u);
                r = o.redMul(f.redISub(c)).redISub(u);
                i = this.y.redAdd(this.y);
            } else {
                var h = this.z.redSqr();
                var d = this.y.redSqr();
                var l = this.x.redMul(d);
                var p = this.x.redSub(h).redMul(this.x.redAdd(h));
                p = p.redAdd(p).redIAdd(p);
                var v = l.redIAdd(l);
                v = v.redIAdd(v);
                var b = v.redAdd(v);
                t = p.redSqr().redISub(b);
                i = this.y.redAdd(this.z).redSqr().redISub(d).redISub(h);
                var m = d.redSqr();
                m = m.redIAdd(m);
                m = m.redIAdd(m);
                m = m.redIAdd(m);
                r = p.redMul(v.redISub(t)).redISub(m);
            }
            return this.curve.jpoint(t, r, i);
        };
        h.prototype._dbl = function e() {
            var t = this.curve.a;
            var r = this.x;
            var i = this.y;
            var n = this.z;
            var a = n.redSqr().redSqr();
            var s = r.redSqr();
            var f = i.redSqr();
            var o = s.redAdd(s).redIAdd(s).redIAdd(t.redMul(a));
            var c = r.redAdd(r);
            c = c.redIAdd(c);
            var u = c.redMul(f);
            var h = o.redSqr().redISub(u.redAdd(u));
            var d = u.redISub(h);
            var l = f.redSqr();
            l = l.redIAdd(l);
            l = l.redIAdd(l);
            l = l.redIAdd(l);
            var p = o.redMul(d).redISub(l);
            var v = i.redAdd(i).redMul(n);
            return this.curve.jpoint(h, p, v);
        };
        h.prototype.trpl = function e() {
            if (!this.curve.zeroA) return this.dbl().add(this);
            var t = this.x.redSqr();
            var r = this.y.redSqr();
            var i = this.z.redSqr();
            var n = r.redSqr();
            var a = t.redAdd(t).redIAdd(t);
            var s = a.redSqr();
            var f = this.x.redAdd(r).redSqr().redISub(t).redISub(n);
            f = f.redIAdd(f);
            f = f.redAdd(f).redIAdd(f);
            f = f.redISub(s);
            var o = f.redSqr();
            var c = n.redIAdd(n);
            c = c.redIAdd(c);
            c = c.redIAdd(c);
            c = c.redIAdd(c);
            var u = a.redIAdd(f).redSqr().redISub(s).redISub(o).redISub(c);
            var h = r.redMul(u);
            h = h.redIAdd(h);
            h = h.redIAdd(h);
            var d = this.x.redMul(o).redISub(h);
            d = d.redIAdd(d);
            d = d.redIAdd(d);
            var l = this.y.redMul(u.redMul(c.redISub(u)).redISub(f.redMul(o)));
            l = l.redIAdd(l);
            l = l.redIAdd(l);
            l = l.redIAdd(l);
            var p = this.z.redAdd(f).redSqr().redISub(i).redISub(o);
            return this.curve.jpoint(d, l, p);
        };
        h.prototype.mul = function e(t, r) {
            t = new a(t, r);
            return this.curve._wnafMul(this, t);
        };
        h.prototype.eq = function e(t) {
            if (t.type === "affine") return this.eq(t.toJ());
            if (this === t) return true;
            var r = this.z.redSqr();
            var i = t.z.redSqr();
            if (this.x.redMul(i).redISub(t.x.redMul(r)).cmpn(0) !== 0) return false;
            var n = r.redMul(this.z);
            var a = i.redMul(t.z);
            return this.y.redMul(a).redISub(t.y.redMul(n)).cmpn(0) === 0;
        };
        h.prototype.eqXToP = function e(t) {
            var r = this.z.redSqr();
            var i = t.toRed(this.curve.red).redMul(r);
            if (this.x.cmp(i) === 0) return true;
            var n = t.clone();
            var a = this.curve.redN.redMul(r);
            for (;;) {
                n.iadd(this.curve.n);
                if (n.cmp(this.curve.p) >= 0) return false;
                i.redIAdd(a);
                if (this.x.cmp(i) === 0) return true;
            }
            return false;
        };
        h.prototype.inspect = function e() {
            if (this.isInfinity()) return "<EC JPoint Infinity>";
            return "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
        };
        h.prototype.isInfinity = function e() {
            return this.z.cmpn(0) === 0;
        };
    }, {
        "../../elliptic": 105,
        "../curve": 108,
        "bn.js": 32,
        inherits: 139
    } ],
    111: [ function(e, t, r) {
        "use strict";
        var i = r;
        var n = e("hash.js");
        var a = e("../elliptic");
        var s = a.utils.assert;
        function f(e) {
            if (e.type === "short") this.curve = new a.curve.short(e); else if (e.type === "edwards") this.curve = new a.curve.edwards(e); else this.curve = new a.curve.mont(e);
            this.g = this.curve.g;
            this.n = this.curve.n;
            this.hash = e.hash;
            s(this.g.validate(), "Invalid curve");
            s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
        }
        i.PresetCurve = f;
        function o(e, t) {
            Object.defineProperty(i, e, {
                configurable: true,
                enumerable: true,
                get: function() {
                    var r = new f(t);
                    Object.defineProperty(i, e, {
                        configurable: true,
                        enumerable: true,
                        value: r
                    });
                    return r;
                }
            });
        }
        o("p192", {
            type: "short",
            prime: "p192",
            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
            hash: n.sha256,
            gRed: false,
            g: [ "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811" ]
        });
        o("p224", {
            type: "short",
            prime: "p224",
            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
            hash: n.sha256,
            gRed: false,
            g: [ "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34" ]
        });
        o("p256", {
            type: "short",
            prime: null,
            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
            hash: n.sha256,
            gRed: false,
            g: [ "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5" ]
        });
        o("p384", {
            type: "short",
            prime: null,
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff " + "fffffffe ffffffff 00000000 00000000 ffffffff",
            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff " + "fffffffe ffffffff 00000000 00000000 fffffffc",
            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f " + "5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 " + "f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
            hash: n.sha384,
            gRed: false,
            g: [ "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 " + "5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 " + "0a60b1ce 1d7e819d 7a431d7c 90ea0e5f" ]
        });
        o("p521", {
            type: "short",
            prime: null,
            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff " + "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff " + "ffffffff ffffffff ffffffff ffffffff ffffffff",
            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff " + "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff " + "ffffffff ffffffff ffffffff ffffffff fffffffc",
            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b " + "99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd " + "3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff " + "ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 " + "f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
            hash: n.sha512,
            gRed: false,
            g: [ "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 " + "053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 " + "a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 " + "579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 " + "3fad0761 353c7086 a272c240 88be9476 9fd16650" ]
        });
        o("curve25519", {
            type: "mont",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "76d06",
            b: "1",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: n.sha256,
            gRed: false,
            g: [ "9" ]
        });
        o("ed25519", {
            type: "edwards",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "-1",
            c: "1",
            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: n.sha256,
            gRed: false,
            g: [ "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658" ]
        });
        var c;
        try {
            c = e("./precomputed/secp256k1");
        } catch (e) {
            c = undefined;
        }
        o("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: n.sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [ {
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3"
            }, {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15"
            } ],
            gRed: false,
            g: [ "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", c ]
        });
    }, {
        "../elliptic": 105,
        "./precomputed/secp256k1": 118,
        "hash.js": 124
    } ],
    112: [ function(e, t, r) {
        "use strict";
        var i = e("bn.js");
        var n = e("hmac-drbg");
        var a = e("../../elliptic");
        var s = a.utils;
        var f = s.assert;
        var o = e("./key");
        var c = e("./signature");
        function u(e) {
            if (!(this instanceof u)) return new u(e);
            if (typeof e === "string") {
                f(a.curves.hasOwnProperty(e), "Unknown curve " + e);
                e = a.curves[e];
            }
            if (e instanceof a.curves.PresetCurve) e = {
                curve: e
            };
            this.curve = e.curve.curve;
            this.n = this.curve.n;
            this.nh = this.n.ushrn(1);
            this.g = this.curve.g;
            this.g = e.curve.g;
            this.g.precompute(e.curve.n.bitLength() + 1);
            this.hash = e.hash || e.curve.hash;
        }
        t.exports = u;
        u.prototype.keyPair = function e(t) {
            return new o(this, t);
        };
        u.prototype.keyFromPrivate = function e(t, r) {
            return o.fromPrivate(this, t, r);
        };
        u.prototype.keyFromPublic = function e(t, r) {
            return o.fromPublic(this, t, r);
        };
        u.prototype.genKeyPair = function e(t) {
            if (!t) t = {};
            var r = new n({
                hash: this.hash,
                pers: t.pers,
                persEnc: t.persEnc || "utf8",
                entropy: t.entropy || a.rand(this.hash.hmacStrength),
                entropyEnc: t.entropy && t.entropyEnc || "utf8",
                nonce: this.n.toArray()
            });
            var s = this.n.byteLength();
            var f = this.n.sub(new i(2));
            do {
                var o = new i(r.generate(s));
                if (o.cmp(f) > 0) continue;
                o.iaddn(1);
                return this.keyFromPrivate(o);
            } while (true);
        };
        u.prototype._truncateToN = function e(t, r) {
            var i = t.byteLength() * 8 - this.n.bitLength();
            if (i > 0) t = t.ushrn(i);
            if (!r && t.cmp(this.n) >= 0) return t.sub(this.n); else return t;
        };
        u.prototype.sign = function e(t, r, a, s) {
            if (typeof a === "object") {
                s = a;
                a = null;
            }
            if (!s) s = {};
            r = this.keyFromPrivate(r, a);
            t = this._truncateToN(new i(t, 16));
            var f = this.n.byteLength();
            var o = r.getPrivate().toArray("be", f);
            var u = t.toArray("be", f);
            var h = new n({
                hash: this.hash,
                entropy: o,
                nonce: u,
                pers: s.pers,
                persEnc: s.persEnc || "utf8"
            });
            var d = this.n.sub(new i(1));
            for (var l = 0; true; l++) {
                var p = s.k ? s.k(l) : new i(h.generate(this.n.byteLength()));
                p = this._truncateToN(p, true);
                if (p.cmpn(1) <= 0 || p.cmp(d) >= 0) continue;
                var v = this.g.mul(p);
                if (v.isInfinity()) continue;
                var b = v.getX();
                var m = b.umod(this.n);
                if (m.cmpn(0) === 0) continue;
                var g = p.invm(this.n).mul(m.mul(r.getPrivate()).iadd(t));
                g = g.umod(this.n);
                if (g.cmpn(0) === 0) continue;
                var y = (v.getY().isOdd() ? 1 : 0) | (b.cmp(m) !== 0 ? 2 : 0);
                if (s.canonical && g.cmp(this.nh) > 0) {
                    g = this.n.sub(g);
                    y ^= 1;
                }
                return new c({
                    r: m,
                    s: g,
                    recoveryParam: y
                });
            }
        };
        u.prototype.verify = function e(t, r, n, a) {
            t = this._truncateToN(new i(t, 16));
            n = this.keyFromPublic(n, a);
            r = new c(r, "hex");
            var s = r.r;
            var f = r.s;
            if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return false;
            if (f.cmpn(1) < 0 || f.cmp(this.n) >= 0) return false;
            var o = f.invm(this.n);
            var u = o.mul(t).umod(this.n);
            var h = o.mul(s).umod(this.n);
            if (!this.curve._maxwellTrick) {
                var d = this.g.mulAdd(u, n.getPublic(), h);
                if (d.isInfinity()) return false;
                return d.getX().umod(this.n).cmp(s) === 0;
            }
            var d = this.g.jmulAdd(u, n.getPublic(), h);
            if (d.isInfinity()) return false;
            return d.eqXToP(s);
        };
        u.prototype.recoverPubKey = function(e, t, r, n) {
            f((3 & r) === r, "The recovery param is more than two bits");
            t = new c(t, n);
            var a = this.n;
            var s = new i(e);
            var o = t.r;
            var u = t.s;
            var h = r & 1;
            var d = r >> 1;
            if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && d) throw new Error("Unable to find sencond key candinate");
            if (d) o = this.curve.pointFromX(o.add(this.curve.n), h); else o = this.curve.pointFromX(o, h);
            var l = t.r.invm(a);
            var p = a.sub(s).mul(l).umod(a);
            var v = u.mul(l).umod(a);
            return this.g.mulAdd(p, o, v);
        };
        u.prototype.getKeyRecoveryParam = function(e, t, r, i) {
            t = new c(t, i);
            if (t.recoveryParam !== null) return t.recoveryParam;
            for (var n = 0; n < 4; n++) {
                var a;
                try {
                    a = this.recoverPubKey(e, t, n);
                } catch (e) {
                    continue;
                }
                if (a.eq(r)) return n;
            }
            throw new Error("Unable to find valid recovery factor");
        };
    }, {
        "../../elliptic": 105,
        "./key": 113,
        "./signature": 114,
        "bn.js": 32,
        "hmac-drbg": 136
    } ],
    113: [ function(e, t, r) {
        "use strict";
        var i = e("bn.js");
        var n = e("../../elliptic");
        var a = n.utils;
        var s = a.assert;
        function f(e, t) {
            this.ec = e;
            this.priv = null;
            this.pub = null;
            if (t.priv) this._importPrivate(t.priv, t.privEnc);
            if (t.pub) this._importPublic(t.pub, t.pubEnc);
        }
        t.exports = f;
        f.fromPublic = function e(t, r, i) {
            if (r instanceof f) return r;
            return new f(t, {
                pub: r,
                pubEnc: i
            });
        };
        f.fromPrivate = function e(t, r, i) {
            if (r instanceof f) return r;
            return new f(t, {
                priv: r,
                privEnc: i
            });
        };
        f.prototype.validate = function e() {
            var t = this.getPublic();
            if (t.isInfinity()) return {
                result: false,
                reason: "Invalid public key"
            };
            if (!t.validate()) return {
                result: false,
                reason: "Public key is not a point"
            };
            if (!t.mul(this.ec.curve.n).isInfinity()) return {
                result: false,
                reason: "Public key * N != O"
            };
            return {
                result: true,
                reason: null
            };
        };
        f.prototype.getPublic = function e(t, r) {
            if (typeof t === "string") {
                r = t;
                t = null;
            }
            if (!this.pub) this.pub = this.ec.g.mul(this.priv);
            if (!r) return this.pub;
            return this.pub.encode(r, t);
        };
        f.prototype.getPrivate = function e(t) {
            if (t === "hex") return this.priv.toString(16, 2); else return this.priv;
        };
        f.prototype._importPrivate = function e(t, r) {
            this.priv = new i(t, r || 16);
            this.priv = this.priv.umod(this.ec.curve.n);
        };
        f.prototype._importPublic = function e(t, r) {
            if (t.x || t.y) {
                if (this.ec.curve.type === "mont") {
                    s(t.x, "Need x coordinate");
                } else if (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") {
                    s(t.x && t.y, "Need both x and y coordinate");
                }
                this.pub = this.ec.curve.point(t.x, t.y);
                return;
            }
            this.pub = this.ec.curve.decodePoint(t, r);
        };
        f.prototype.derive = function e(t) {
            return t.mul(this.priv).getX();
        };
        f.prototype.sign = function e(t, r, i) {
            return this.ec.sign(t, this, r, i);
        };
        f.prototype.verify = function e(t, r) {
            return this.ec.verify(t, r, this);
        };
        f.prototype.inspect = function e() {
            return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
        };
    }, {
        "../../elliptic": 105,
        "bn.js": 32
    } ],
    114: [ function(e, t, r) {
        "use strict";
        var i = e("bn.js");
        var n = e("../../elliptic");
        var a = n.utils;
        var s = a.assert;
        function f(e, t) {
            if (e instanceof f) return e;
            if (this._importDER(e, t)) return;
            s(e.r && e.s, "Signature without r or s");
            this.r = new i(e.r, 16);
            this.s = new i(e.s, 16);
            if (e.recoveryParam === undefined) this.recoveryParam = null; else this.recoveryParam = e.recoveryParam;
        }
        t.exports = f;
        function o() {
            this.place = 0;
        }
        function c(e, t) {
            var r = e[t.place++];
            if (!(r & 128)) {
                return r;
            }
            var i = r & 15;
            var n = 0;
            for (var a = 0, s = t.place; a < i; a++, s++) {
                n <<= 8;
                n |= e[s];
            }
            t.place = s;
            return n;
        }
        function u(e) {
            var t = 0;
            var r = e.length - 1;
            while (!e[t] && !(e[t + 1] & 128) && t < r) {
                t++;
            }
            if (t === 0) {
                return e;
            }
            return e.slice(t);
        }
        f.prototype._importDER = function e(t, r) {
            t = a.toArray(t, r);
            var n = new o();
            if (t[n.place++] !== 48) {
                return false;
            }
            var s = c(t, n);
            if (s + n.place !== t.length) {
                return false;
            }
            if (t[n.place++] !== 2) {
                return false;
            }
            var f = c(t, n);
            var u = t.slice(n.place, f + n.place);
            n.place += f;
            if (t[n.place++] !== 2) {
                return false;
            }
            var h = c(t, n);
            if (t.length !== h + n.place) {
                return false;
            }
            var d = t.slice(n.place, h + n.place);
            if (u[0] === 0 && u[1] & 128) {
                u = u.slice(1);
            }
            if (d[0] === 0 && d[1] & 128) {
                d = d.slice(1);
            }
            this.r = new i(u);
            this.s = new i(d);
            this.recoveryParam = null;
            return true;
        };
        function h(e, t) {
            if (t < 128) {
                e.push(t);
                return;
            }
            var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
            e.push(r | 128);
            while (--r) {
                e.push(t >>> (r << 3) & 255);
            }
            e.push(t);
        }
        f.prototype.toDER = function e(t) {
            var r = this.r.toArray();
            var i = this.s.toArray();
            if (r[0] & 128) r = [ 0 ].concat(r);
            if (i[0] & 128) i = [ 0 ].concat(i);
            r = u(r);
            i = u(i);
            while (!i[0] && !(i[1] & 128)) {
                i = i.slice(1);
            }
            var n = [ 2 ];
            h(n, r.length);
            n = n.concat(r);
            n.push(2);
            h(n, i.length);
            var s = n.concat(i);
            var f = [ 48 ];
            h(f, s.length);
            f = f.concat(s);
            return a.encode(f, t);
        };
    }, {
        "../../elliptic": 105,
        "bn.js": 32
    } ],
    115: [ function(e, t, r) {
        "use strict";
        var i = e("hash.js");
        var n = e("../../elliptic");
        var a = n.utils;
        var s = a.assert;
        var f = a.parseBytes;
        var o = e("./key");
        var c = e("./signature");
        function u(e) {
            s(e === "ed25519", "only tested with ed25519 so far");
            if (!(this instanceof u)) return new u(e);
            var e = n.curves[e].curve;
            this.curve = e;
            this.g = e.g;
            this.g.precompute(e.n.bitLength() + 1);
            this.pointClass = e.point().constructor;
            this.encodingLength = Math.ceil(e.n.bitLength() / 8);
            this.hash = i.sha512;
        }
        t.exports = u;
        u.prototype.sign = function e(t, r) {
            t = f(t);
            var i = this.keyFromSecret(r);
            var n = this.hashInt(i.messagePrefix(), t);
            var a = this.g.mul(n);
            var s = this.encodePoint(a);
            var o = this.hashInt(s, i.pubBytes(), t).mul(i.priv());
            var c = n.add(o).umod(this.curve.n);
            return this.makeSignature({
                R: a,
                S: c,
                Rencoded: s
            });
        };
        u.prototype.verify = function e(t, r, i) {
            t = f(t);
            r = this.makeSignature(r);
            var n = this.keyFromPublic(i);
            var a = this.hashInt(r.Rencoded(), n.pubBytes(), t);
            var s = this.g.mul(r.S());
            var o = r.R().add(n.pub().mul(a));
            return o.eq(s);
        };
        u.prototype.hashInt = function e() {
            var t = this.hash();
            for (var r = 0; r < arguments.length; r++) t.update(arguments[r]);
            return a.intFromLE(t.digest()).umod(this.curve.n);
        };
        u.prototype.keyFromPublic = function e(t) {
            return o.fromPublic(this, t);
        };
        u.prototype.keyFromSecret = function e(t) {
            return o.fromSecret(this, t);
        };
        u.prototype.makeSignature = function e(t) {
            if (t instanceof c) return t;
            return new c(this, t);
        };
        u.prototype.encodePoint = function e(t) {
            var r = t.getY().toArray("le", this.encodingLength);
            r[this.encodingLength - 1] |= t.getX().isOdd() ? 128 : 0;
            return r;
        };
        u.prototype.decodePoint = function e(t) {
            t = a.parseBytes(t);
            var r = t.length - 1;
            var i = t.slice(0, r).concat(t[r] & ~128);
            var n = (t[r] & 128) !== 0;
            var s = a.intFromLE(i);
            return this.curve.pointFromY(s, n);
        };
        u.prototype.encodeInt = function e(t) {
            return t.toArray("le", this.encodingLength);
        };
        u.prototype.decodeInt = function e(t) {
            return a.intFromLE(t);
        };
        u.prototype.isPoint = function e(t) {
            return t instanceof this.pointClass;
        };
    }, {
        "../../elliptic": 105,
        "./key": 116,
        "./signature": 117,
        "hash.js": 124
    } ],
    116: [ function(e, t, r) {
        "use strict";
        var i = e("../../elliptic");
        var n = i.utils;
        var a = n.assert;
        var s = n.parseBytes;
        var f = n.cachedProperty;
        function o(e, t) {
            this.eddsa = e;
            this._secret = s(t.secret);
            if (e.isPoint(t.pub)) this._pub = t.pub; else this._pubBytes = s(t.pub);
        }
        o.fromPublic = function e(t, r) {
            if (r instanceof o) return r;
            return new o(t, {
                pub: r
            });
        };
        o.fromSecret = function e(t, r) {
            if (r instanceof o) return r;
            return new o(t, {
                secret: r
            });
        };
        o.prototype.secret = function e() {
            return this._secret;
        };
        f(o, "pubBytes", function e() {
            return this.eddsa.encodePoint(this.pub());
        });
        f(o, "pub", function e() {
            if (this._pubBytes) return this.eddsa.decodePoint(this._pubBytes);
            return this.eddsa.g.mul(this.priv());
        });
        f(o, "privBytes", function e() {
            var t = this.eddsa;
            var r = this.hash();
            var i = t.encodingLength - 1;
            var n = r.slice(0, t.encodingLength);
            n[0] &= 248;
            n[i] &= 127;
            n[i] |= 64;
            return n;
        });
        f(o, "priv", function e() {
            return this.eddsa.decodeInt(this.privBytes());
        });
        f(o, "hash", function e() {
            return this.eddsa.hash().update(this.secret()).digest();
        });
        f(o, "messagePrefix", function e() {
            return this.hash().slice(this.eddsa.encodingLength);
        });
        o.prototype.sign = function e(t) {
            a(this._secret, "KeyPair can only verify");
            return this.eddsa.sign(t, this);
        };
        o.prototype.verify = function e(t, r) {
            return this.eddsa.verify(t, r, this);
        };
        o.prototype.getSecret = function e(t) {
            a(this._secret, "KeyPair is public only");
            return n.encode(this.secret(), t);
        };
        o.prototype.getPublic = function e(t) {
            return n.encode(this.pubBytes(), t);
        };
        t.exports = o;
    }, {
        "../../elliptic": 105
    } ],
    117: [ function(e, t, r) {
        "use strict";
        var i = e("bn.js");
        var n = e("../../elliptic");
        var a = n.utils;
        var s = a.assert;
        var f = a.cachedProperty;
        var o = a.parseBytes;
        function c(e, t) {
            this.eddsa = e;
            if (typeof t !== "object") t = o(t);
            if (Array.isArray(t)) {
                t = {
                    R: t.slice(0, e.encodingLength),
                    S: t.slice(e.encodingLength)
                };
            }
            s(t.R && t.S, "Signature without R or S");
            if (e.isPoint(t.R)) this._R = t.R;
            if (t.S instanceof i) this._S = t.S;
            this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded;
            this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded;
        }
        f(c, "S", function e() {
            return this.eddsa.decodeInt(this.Sencoded());
        });
        f(c, "R", function e() {
            return this.eddsa.decodePoint(this.Rencoded());
        });
        f(c, "Rencoded", function e() {
            return this.eddsa.encodePoint(this.R());
        });
        f(c, "Sencoded", function e() {
            return this.eddsa.encodeInt(this.S());
        });
        c.prototype.toBytes = function e() {
            return this.Rencoded().concat(this.Sencoded());
        };
        c.prototype.toHex = function e() {
            return a.encode(this.toBytes(), "hex").toUpperCase();
        };
        t.exports = c;
    }, {
        "../../elliptic": 105,
        "bn.js": 32
    } ],
    118: [ function(e, t, r) {
        t.exports = {
            doubles: {
                step: 4,
                points: [ [ "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821" ], [ "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf" ], [ "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695" ], [ "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9" ], [ "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36" ], [ "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f" ], [ "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999" ], [ "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09" ], [ "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d" ], [ "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088" ], [ "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d" ], [ "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8" ], [ "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a" ], [ "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453" ], [ "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160" ], [ "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0" ], [ "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6" ], [ "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589" ], [ "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17" ], [ "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda" ], [ "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd" ], [ "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2" ], [ "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6" ], [ "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f" ], [ "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01" ], [ "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3" ], [ "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f" ], [ "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7" ], [ "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78" ], [ "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1" ], [ "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150" ], [ "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82" ], [ "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc" ], [ "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b" ], [ "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51" ], [ "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45" ], [ "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120" ], [ "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84" ], [ "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d" ], [ "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d" ], [ "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8" ], [ "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8" ], [ "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac" ], [ "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f" ], [ "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962" ], [ "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907" ], [ "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec" ], [ "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d" ], [ "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414" ], [ "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd" ], [ "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0" ], [ "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811" ], [ "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1" ], [ "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c" ], [ "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73" ], [ "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd" ], [ "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405" ], [ "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589" ], [ "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e" ], [ "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27" ], [ "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1" ], [ "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482" ], [ "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945" ], [ "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573" ], [ "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82" ] ]
            },
            naf: {
                wnd: 7,
                points: [ [ "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672" ], [ "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6" ], [ "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da" ], [ "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37" ], [ "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b" ], [ "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81" ], [ "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58" ], [ "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77" ], [ "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a" ], [ "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c" ], [ "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67" ], [ "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402" ], [ "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55" ], [ "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482" ], [ "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82" ], [ "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396" ], [ "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49" ], [ "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf" ], [ "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a" ], [ "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7" ], [ "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933" ], [ "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a" ], [ "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6" ], [ "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37" ], [ "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e" ], [ "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6" ], [ "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476" ], [ "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40" ], [ "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61" ], [ "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683" ], [ "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5" ], [ "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b" ], [ "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417" ], [ "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868" ], [ "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a" ], [ "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6" ], [ "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996" ], [ "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e" ], [ "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d" ], [ "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2" ], [ "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e" ], [ "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437" ], [ "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311" ], [ "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4" ], [ "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575" ], [ "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d" ], [ "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d" ], [ "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629" ], [ "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06" ], [ "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374" ], [ "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee" ], [ "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1" ], [ "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b" ], [ "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661" ], [ "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6" ], [ "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e" ], [ "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d" ], [ "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc" ], [ "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4" ], [ "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c" ], [ "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b" ], [ "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913" ], [ "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154" ], [ "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865" ], [ "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc" ], [ "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224" ], [ "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e" ], [ "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6" ], [ "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511" ], [ "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b" ], [ "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2" ], [ "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c" ], [ "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3" ], [ "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d" ], [ "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700" ], [ "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4" ], [ "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196" ], [ "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4" ], [ "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257" ], [ "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13" ], [ "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096" ], [ "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38" ], [ "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f" ], [ "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448" ], [ "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a" ], [ "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4" ], [ "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437" ], [ "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7" ], [ "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d" ], [ "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a" ], [ "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54" ], [ "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77" ], [ "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517" ], [ "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10" ], [ "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125" ], [ "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e" ], [ "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1" ], [ "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2" ], [ "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423" ], [ "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8" ], [ "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758" ], [ "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375" ], [ "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d" ], [ "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec" ], [ "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0" ], [ "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c" ], [ "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4" ], [ "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f" ], [ "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649" ], [ "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826" ], [ "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5" ], [ "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87" ], [ "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b" ], [ "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc" ], [ "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c" ], [ "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f" ], [ "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a" ], [ "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46" ], [ "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f" ], [ "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03" ], [ "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08" ], [ "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8" ], [ "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373" ], [ "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3" ], [ "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8" ], [ "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1" ], [ "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9" ] ]
            }
        };
    }, {} ],
    119: [ function(e, t, r) {
        "use strict";
        var i = r;
        var n = e("bn.js");
        var a = e("minimalistic-assert");
        var s = e("minimalistic-crypto-utils");
        i.assert = a;
        i.toArray = s.toArray;
        i.zero2 = s.zero2;
        i.toHex = s.toHex;
        i.encode = s.encode;
        function f(e, t) {
            var r = [];
            var i = 1 << t + 1;
            var n = e.clone();
            while (n.cmpn(1) >= 0) {
                var a;
                if (n.isOdd()) {
                    var s = n.andln(i - 1);
                    if (s > (i >> 1) - 1) a = (i >> 1) - s; else a = s;
                    n.isubn(a);
                } else {
                    a = 0;
                }
                r.push(a);
                var f = n.cmpn(0) !== 0 && n.andln(i - 1) === 0 ? t + 1 : 1;
                for (var o = 1; o < f; o++) r.push(0);
                n.iushrn(f);
            }
            return r;
        }
        i.getNAF = f;
        function o(e, t) {
            var r = [ [], [] ];
            e = e.clone();
            t = t.clone();
            var i = 0;
            var n = 0;
            while (e.cmpn(-i) > 0 || t.cmpn(-n) > 0) {
                var a = e.andln(3) + i & 3;
                var s = t.andln(3) + n & 3;
                if (a === 3) a = -1;
                if (s === 3) s = -1;
                var f;
                if ((a & 1) === 0) {
                    f = 0;
                } else {
                    var o = e.andln(7) + i & 7;
                    if ((o === 3 || o === 5) && s === 2) f = -a; else f = a;
                }
                r[0].push(f);
                var c;
                if ((s & 1) === 0) {
                    c = 0;
                } else {
                    var o = t.andln(7) + n & 7;
                    if ((o === 3 || o === 5) && a === 2) c = -s; else c = s;
                }
                r[1].push(c);
                if (2 * i === f + 1) i = 1 - i;
                if (2 * n === c + 1) n = 1 - n;
                e.iushrn(1);
                t.iushrn(1);
            }
            return r;
        }
        i.getJSF = o;
        function c(e, t, r) {
            var i = "_" + t;
            e.prototype[t] = function e() {
                return this[i] !== undefined ? this[i] : this[i] = r.call(this);
            };
        }
        i.cachedProperty = c;
        function u(e) {
            return typeof e === "string" ? i.toArray(e, "hex") : e;
        }
        i.parseBytes = u;
        function h(e) {
            return new n(e, "hex", "le");
        }
        i.intFromLE = h;
    }, {
        "bn.js": 32,
        "minimalistic-assert": 180,
        "minimalistic-crypto-utils": 181
    } ],
    120: [ function(e, t, r) {
        t.exports = {
            _from: "elliptic@^6.0.0",
            _id: "elliptic@6.4.0",
            _inBundle: false,
            _integrity: "sha1-ysmvh2LIWDYYcAPI3+GT5eLq5d8=",
            _location: "/elliptic",
            _phantomChildren: {},
            _requested: {
                type: "range",
                registry: true,
                raw: "elliptic@^6.0.0",
                name: "elliptic",
                escapedName: "elliptic",
                rawSpec: "^6.0.0",
                saveSpec: null,
                fetchSpec: "^6.0.0"
            },
            _requiredBy: [ "/browserify-sign", "/create-ecdh" ],
            _resolved: "https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz",
            _shasum: "cac9af8762c85836187003c8dfe193e5e2eae5df",
            _spec: "elliptic@^6.0.0",
            _where: "/home/tondy/abvos/dev/abv-agent/node_modules/browserify-sign",
            author: {
                name: "Fedor Indutny",
                email: "fedor@indutny.com"
            },
            bugs: {
                url: "https://github.com/indutny/elliptic/issues"
            },
            bundleDependencies: false,
            dependencies: {
                "bn.js": "^4.4.0",
                brorand: "^1.0.1",
                "hash.js": "^1.0.0",
                "hmac-drbg": "^1.0.0",
                inherits: "^2.0.1",
                "minimalistic-assert": "^1.0.0",
                "minimalistic-crypto-utils": "^1.0.0"
            },
            deprecated: false,
            description: "EC cryptography",
            devDependencies: {
                brfs: "^1.4.3",
                coveralls: "^2.11.3",
                grunt: "^0.4.5",
                "grunt-browserify": "^5.0.0",
                "grunt-cli": "^1.2.0",
                "grunt-contrib-connect": "^1.0.0",
                "grunt-contrib-copy": "^1.0.0",
                "grunt-contrib-uglify": "^1.0.1",
                "grunt-mocha-istanbul": "^3.0.1",
                "grunt-saucelabs": "^8.6.2",
                istanbul: "^0.4.2",
                jscs: "^2.9.0",
                jshint: "^2.6.0",
                mocha: "^2.1.0"
            },
            files: [ "lib" ],
            homepage: "https://github.com/indutny/elliptic",
            keywords: [ "EC", "Elliptic", "curve", "Cryptography" ],
            license: "MIT",
            main: "lib/elliptic.js",
            name: "elliptic",
            repository: {
                type: "git",
                url: "git+ssh://git@github.com/indutny/elliptic.git"
            },
            scripts: {
                jscs: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
                jshint: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
                lint: "npm run jscs && npm run jshint",
                test: "npm run lint && npm run unit",
                unit: "istanbul test _mocha --reporter=spec test/index.js",
                version: "grunt dist && git add dist/"
            },
            version: "6.4.0"
        };
    }, {} ],
    121: [ function(e, t, r) {
        var i = Object.create || k;
        var n = Object.keys || x;
        var a = Function.prototype.bind || E;
        function s() {
            if (!this._events || !Object.prototype.hasOwnProperty.call(this, "_events")) {
                this._events = i(null);
                this._eventsCount = 0;
            }
            this._maxListeners = this._maxListeners || undefined;
        }
        t.exports = s;
        s.EventEmitter = s;
        s.prototype._events = undefined;
        s.prototype._maxListeners = undefined;
        var f = 10;
        var o;
        try {
            var c = {};
            if (Object.defineProperty) Object.defineProperty(c, "x", {
                value: 0
            });
            o = c.x === 0;
        } catch (e) {
            o = false;
        }
        if (o) {
            Object.defineProperty(s, "defaultMaxListeners", {
                enumerable: true,
                get: function() {
                    return f;
                },
                set: function(e) {
                    if (typeof e !== "number" || e < 0 || e !== e) throw new TypeError('"defaultMaxListeners" must be a positive number');
                    f = e;
                }
            });
        } else {
            s.defaultMaxListeners = f;
        }
        s.prototype.setMaxListeners = function e(t) {
            if (typeof t !== "number" || t < 0 || isNaN(t)) throw new TypeError('"n" argument must be a positive number');
            this._maxListeners = t;
            return this;
        };
        function u(e) {
            if (e._maxListeners === undefined) return s.defaultMaxListeners;
            return e._maxListeners;
        }
        s.prototype.getMaxListeners = function e() {
            return u(this);
        };
        function h(e, t, r) {
            if (t) e.call(r); else {
                var i = e.length;
                var n = _(e, i);
                for (var a = 0; a < i; ++a) n[a].call(r);
            }
        }
        function d(e, t, r, i) {
            if (t) e.call(r, i); else {
                var n = e.length;
                var a = _(e, n);
                for (var s = 0; s < n; ++s) a[s].call(r, i);
            }
        }
        function l(e, t, r, i, n) {
            if (t) e.call(r, i, n); else {
                var a = e.length;
                var s = _(e, a);
                for (var f = 0; f < a; ++f) s[f].call(r, i, n);
            }
        }
        function p(e, t, r, i, n, a) {
            if (t) e.call(r, i, n, a); else {
                var s = e.length;
                var f = _(e, s);
                for (var o = 0; o < s; ++o) f[o].call(r, i, n, a);
            }
        }
        function v(e, t, r, i) {
            if (t) e.apply(r, i); else {
                var n = e.length;
                var a = _(e, n);
                for (var s = 0; s < n; ++s) a[s].apply(r, i);
            }
        }
        s.prototype.emit = function e(t) {
            var r, i, n, a, s, f;
            var o = t === "error";
            f = this._events;
            if (f) o = o && f.error == null; else if (!o) return false;
            if (o) {
                if (arguments.length > 1) r = arguments[1];
                if (r instanceof Error) {
                    throw r;
                } else {
                    var c = new Error('Unhandled "error" event. (' + r + ")");
                    c.context = r;
                    throw c;
                }
                return false;
            }
            i = f[t];
            if (!i) return false;
            var u = typeof i === "function";
            n = arguments.length;
            switch (n) {
              case 1:
                h(i, u, this);
                break;

              case 2:
                d(i, u, this, arguments[1]);
                break;

              case 3:
                l(i, u, this, arguments[1], arguments[2]);
                break;

              case 4:
                p(i, u, this, arguments[1], arguments[2], arguments[3]);
                break;

              default:
                a = new Array(n - 1);
                for (s = 1; s < n; s++) a[s - 1] = arguments[s];
                v(i, u, this, a);
            }
            return true;
        };
        function b(e, t, r, n) {
            var a;
            var s;
            var f;
            if (typeof r !== "function") throw new TypeError('"listener" argument must be a function');
            s = e._events;
            if (!s) {
                s = e._events = i(null);
                e._eventsCount = 0;
            } else {
                if (s.newListener) {
                    e.emit("newListener", t, r.listener ? r.listener : r);
                    s = e._events;
                }
                f = s[t];
            }
            if (!f) {
                f = s[t] = r;
                ++e._eventsCount;
            } else {
                if (typeof f === "function") {
                    f = s[t] = n ? [ r, f ] : [ f, r ];
                } else {
                    if (n) {
                        f.unshift(r);
                    } else {
                        f.push(r);
                    }
                }
                if (!f.warned) {
                    a = u(e);
                    if (a && a > 0 && f.length > a) {
                        f.warned = true;
                        var o = new Error("Possible EventEmitter memory leak detected. " + f.length + ' "' + String(t) + '" listeners ' + "added. Use emitter.setMaxListeners() to " + "increase limit.");
                        o.name = "MaxListenersExceededWarning";
                        o.emitter = e;
                        o.type = t;
                        o.count = f.length;
                        if (typeof console === "object" && console.warn) {
                            console.warn("%s: %s", o.name, o.message);
                        }
                    }
                }
            }
            return e;
        }
        s.prototype.addListener = function e(t, r) {
            return b(this, t, r, false);
        };
        s.prototype.on = s.prototype.addListener;
        s.prototype.prependListener = function e(t, r) {
            return b(this, t, r, true);
        };
        function m() {
            if (!this.fired) {
                this.target.removeListener(this.type, this.wrapFn);
                this.fired = true;
                switch (arguments.length) {
                  case 0:
                    return this.listener.call(this.target);

                  case 1:
                    return this.listener.call(this.target, arguments[0]);

                  case 2:
                    return this.listener.call(this.target, arguments[0], arguments[1]);

                  case 3:
                    return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);

                  default:
                    var e = new Array(arguments.length);
                    for (var t = 0; t < e.length; ++t) e[t] = arguments[t];
                    this.listener.apply(this.target, e);
                }
            }
        }
        function g(e, t, r) {
            var i = {
                fired: false,
                wrapFn: undefined,
                target: e,
                type: t,
                listener: r
            };
            var n = a.call(m, i);
            n.listener = r;
            i.wrapFn = n;
            return n;
        }
        s.prototype.once = function e(t, r) {
            if (typeof r !== "function") throw new TypeError('"listener" argument must be a function');
            this.on(t, g(this, t, r));
            return this;
        };
        s.prototype.prependOnceListener = function e(t, r) {
            if (typeof r !== "function") throw new TypeError('"listener" argument must be a function');
            this.prependListener(t, g(this, t, r));
            return this;
        };
        s.prototype.removeListener = function e(t, r) {
            var n, a, s, f, o;
            if (typeof r !== "function") throw new TypeError('"listener" argument must be a function');
            a = this._events;
            if (!a) return this;
            n = a[t];
            if (!n) return this;
            if (n === r || n.listener === r) {
                if (--this._eventsCount === 0) this._events = i(null); else {
                    delete a[t];
                    if (a.removeListener) this.emit("removeListener", t, n.listener || r);
                }
            } else if (typeof n !== "function") {
                s = -1;
                for (f = n.length - 1; f >= 0; f--) {
                    if (n[f] === r || n[f].listener === r) {
                        o = n[f].listener;
                        s = f;
                        break;
                    }
                }
                if (s < 0) return this;
                if (s === 0) n.shift(); else w(n, s);
                if (n.length === 1) a[t] = n[0];
                if (a.removeListener) this.emit("removeListener", t, o || r);
            }
            return this;
        };
        s.prototype.removeAllListeners = function e(t) {
            var r, a, s;
            a = this._events;
            if (!a) return this;
            if (!a.removeListener) {
                if (arguments.length === 0) {
                    this._events = i(null);
                    this._eventsCount = 0;
                } else if (a[t]) {
                    if (--this._eventsCount === 0) this._events = i(null); else delete a[t];
                }
                return this;
            }
            if (arguments.length === 0) {
                var f = n(a);
                var o;
                for (s = 0; s < f.length; ++s) {
                    o = f[s];
                    if (o === "removeListener") continue;
                    this.removeAllListeners(o);
                }
                this.removeAllListeners("removeListener");
                this._events = i(null);
                this._eventsCount = 0;
                return this;
            }
            r = a[t];
            if (typeof r === "function") {
                this.removeListener(t, r);
            } else if (r) {
                for (s = r.length - 1; s >= 0; s--) {
                    this.removeListener(t, r[s]);
                }
            }
            return this;
        };
        s.prototype.listeners = function e(t) {
            var r;
            var i;
            var n = this._events;
            if (!n) i = []; else {
                r = n[t];
                if (!r) i = []; else if (typeof r === "function") i = [ r.listener || r ]; else i = S(r);
            }
            return i;
        };
        s.listenerCount = function(e, t) {
            if (typeof e.listenerCount === "function") {
                return e.listenerCount(t);
            } else {
                return y.call(e, t);
            }
        };
        s.prototype.listenerCount = y;
        function y(e) {
            var t = this._events;
            if (t) {
                var r = t[e];
                if (typeof r === "function") {
                    return 1;
                } else if (r) {
                    return r.length;
                }
            }
            return 0;
        }
        s.prototype.eventNames = function e() {
            return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
        };
        function w(e, t) {
            for (var r = t, i = r + 1, n = e.length; i < n; r += 1, i += 1) e[r] = e[i];
            e.pop();
        }
        function _(e, t) {
            var r = new Array(t);
            for (var i = 0; i < t; ++i) r[i] = e[i];
            return r;
        }
        function S(e) {
            var t = new Array(e.length);
            for (var r = 0; r < t.length; ++r) {
                t[r] = e[r].listener || e[r];
            }
            return t;
        }
        function k(e) {
            var t = function() {};
            t.prototype = e;
            return new t();
        }
        function x(e) {
            var t = [];
            for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
                t.push(r);
            }
            return r;
        }
        function E(e) {
            var t = this;
            return function() {
                return t.apply(e, arguments);
            };
        }
    }, {} ],
    122: [ function(e, t, r) {
        var i = e("safe-buffer").Buffer;
        var n = e("md5.js");
        function a(e, t, r, a) {
            if (!i.isBuffer(e)) e = i.from(e, "binary");
            if (t) {
                if (!i.isBuffer(t)) t = i.from(t, "binary");
                if (t.length !== 8) throw new RangeError("salt should be Buffer with 8 byte length");
            }
            var s = r / 8;
            var f = i.alloc(s);
            var o = i.alloc(a || 0);
            var c = i.alloc(0);
            while (s > 0 || a > 0) {
                var u = new n();
                u.update(c);
                u.update(e);
                if (t) u.update(t);
                c = u.digest();
                var h = 0;
                if (s > 0) {
                    var d = f.length - s;
                    h = Math.min(s, c.length);
                    c.copy(f, d, 0, h);
                    s -= h;
                }
                if (h < c.length && a > 0) {
                    var l = o.length - a;
                    var p = Math.min(a, c.length - h);
                    c.copy(o, l, h, h + p);
                    a -= p;
                }
            }
            c.fill(0);
            return {
                key: f,
                iv: o
            };
        }
        t.exports = a;
    }, {
        "md5.js": 178,
        "safe-buffer": 231
    } ],
    123: [ function(e, t, r) {
        "use strict";
        var i = e("safe-buffer").Buffer;
        var n = e("stream").Transform;
        var a = e("inherits");
        function s(e, t) {
            if (!i.isBuffer(e) && typeof e !== "string") {
                throw new TypeError(t + " must be a string or a buffer");
            }
        }
        function f(e) {
            n.call(this);
            this._block = i.allocUnsafe(e);
            this._blockSize = e;
            this._blockOffset = 0;
            this._length = [ 0, 0, 0, 0 ];
            this._finalized = false;
        }
        a(f, n);
        f.prototype._transform = function(e, t, r) {
            var i = null;
            try {
                this.update(e, t);
            } catch (e) {
                i = e;
            }
            r(i);
        };
        f.prototype._flush = function(e) {
            var t = null;
            try {
                this.push(this.digest());
            } catch (e) {
                t = e;
            }
            e(t);
        };
        f.prototype.update = function(e, t) {
            s(e, "Data");
            if (this._finalized) throw new Error("Digest already called");
            if (!i.isBuffer(e)) e = i.from(e, t);
            var r = this._block;
            var n = 0;
            while (this._blockOffset + e.length - n >= this._blockSize) {
                for (var a = this._blockOffset; a < this._blockSize; ) r[a++] = e[n++];
                this._update();
                this._blockOffset = 0;
            }
            while (n < e.length) r[this._blockOffset++] = e[n++];
            for (var f = 0, o = e.length * 8; o > 0; ++f) {
                this._length[f] += o;
                o = this._length[f] / 4294967296 | 0;
                if (o > 0) this._length[f] -= 4294967296 * o;
            }
            return this;
        };
        f.prototype._update = function() {
            throw new Error("_update is not implemented");
        };
        f.prototype.digest = function(e) {
            if (this._finalized) throw new Error("Digest already called");
            this._finalized = true;
            var t = this._digest();
            if (e !== undefined) t = t.toString(e);
            this._block.fill(0);
            this._blockOffset = 0;
            for (var r = 0; r < 4; ++r) this._length[r] = 0;
            return t;
        };
        f.prototype._digest = function() {
            throw new Error("_digest is not implemented");
        };
        t.exports = f;
    }, {
        inherits: 139,
        "safe-buffer": 231,
        stream: 240
    } ],
    124: [ function(e, t, r) {
        var i = r;
        i.utils = e("./hash/utils");
        i.common = e("./hash/common");
        i.sha = e("./hash/sha");
        i.ripemd = e("./hash/ripemd");
        i.hmac = e("./hash/hmac");
        i.sha1 = i.sha.sha1;
        i.sha256 = i.sha.sha256;
        i.sha224 = i.sha.sha224;
        i.sha384 = i.sha.sha384;
        i.sha512 = i.sha.sha512;
        i.ripemd160 = i.ripemd.ripemd160;
    }, {
        "./hash/common": 125,
        "./hash/hmac": 126,
        "./hash/ripemd": 127,
        "./hash/sha": 128,
        "./hash/utils": 135
    } ],
    125: [ function(e, t, r) {
        "use strict";
        var i = e("./utils");
        var n = e("minimalistic-assert");
        function a() {
            this.pending = null;
            this.pendingTotal = 0;
            this.blockSize = this.constructor.blockSize;
            this.outSize = this.constructor.outSize;
            this.hmacStrength = this.constructor.hmacStrength;
            this.padLength = this.constructor.padLength / 8;
            this.endian = "big";
            this._delta8 = this.blockSize / 8;
            this._delta32 = this.blockSize / 32;
        }
        r.BlockHash = a;
        a.prototype.update = function e(t, r) {
            t = i.toArray(t, r);
            if (!this.pending) this.pending = t; else this.pending = this.pending.concat(t);
            this.pendingTotal += t.length;
            if (this.pending.length >= this._delta8) {
                t = this.pending;
                var n = t.length % this._delta8;
                this.pending = t.slice(t.length - n, t.length);
                if (this.pending.length === 0) this.pending = null;
                t = i.join32(t, 0, t.length - n, this.endian);
                for (var a = 0; a < t.length; a += this._delta32) this._update(t, a, a + this._delta32);
            }
            return this;
        };
        a.prototype.digest = function e(t) {
            this.update(this._pad());
            n(this.pending === null);
            return this._digest(t);
        };
        a.prototype._pad = function e() {
            var t = this.pendingTotal;
            var r = this._delta8;
            var i = r - (t + this.padLength) % r;
            var n = new Array(i + this.padLength);
            n[0] = 128;
            for (var a = 1; a < i; a++) n[a] = 0;
            t <<= 3;
            if (this.endian === "big") {
                for (var s = 8; s < this.padLength; s++) n[a++] = 0;
                n[a++] = 0;
                n[a++] = 0;
                n[a++] = 0;
                n[a++] = 0;
                n[a++] = t >>> 24 & 255;
                n[a++] = t >>> 16 & 255;
                n[a++] = t >>> 8 & 255;
                n[a++] = t & 255;
            } else {
                n[a++] = t & 255;
                n[a++] = t >>> 8 & 255;
                n[a++] = t >>> 16 & 255;
                n[a++] = t >>> 24 & 255;
                n[a++] = 0;
                n[a++] = 0;
                n[a++] = 0;
                n[a++] = 0;
                for (s = 8; s < this.padLength; s++) n[a++] = 0;
            }
            return n;
        };
    }, {
        "./utils": 135,
        "minimalistic-assert": 180
    } ],
    126: [ function(e, t, r) {
        "use strict";
        var i = e("./utils");
        var n = e("minimalistic-assert");
        function a(e, t, r) {
            if (!(this instanceof a)) return new a(e, t, r);
            this.Hash = e;
            this.blockSize = e.blockSize / 8;
            this.outSize = e.outSize / 8;
            this.inner = null;
            this.outer = null;
            this._init(i.toArray(t, r));
        }
        t.exports = a;
        a.prototype._init = function e(t) {
            if (t.length > this.blockSize) t = new this.Hash().update(t).digest();
            n(t.length <= this.blockSize);
            for (var r = t.length; r < this.blockSize; r++) t.push(0);
            for (r = 0; r < t.length; r++) t[r] ^= 54;
            this.inner = new this.Hash().update(t);
            for (r = 0; r < t.length; r++) t[r] ^= 106;
            this.outer = new this.Hash().update(t);
        };
        a.prototype.update = function e(t, r) {
            this.inner.update(t, r);
            return this;
        };
        a.prototype.digest = function e(t) {
            this.outer.update(this.inner.digest());
            return this.outer.digest(t);
        };
    }, {
        "./utils": 135,
        "minimalistic-assert": 180
    } ],
    127: [ function(e, t, r) {
        "use strict";
        var i = e("./utils");
        var n = e("./common");
        var a = i.rotl32;
        var s = i.sum32;
        var f = i.sum32_3;
        var o = i.sum32_4;
        var c = n.BlockHash;
        function u() {
            if (!(this instanceof u)) return new u();
            c.call(this);
            this.h = [ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ];
            this.endian = "little";
        }
        i.inherits(u, c);
        r.ripemd160 = u;
        u.blockSize = 512;
        u.outSize = 160;
        u.hmacStrength = 192;
        u.padLength = 64;
        u.prototype._update = function e(t, r) {
            var i = this.h[0];
            var n = this.h[1];
            var c = this.h[2];
            var u = this.h[3];
            var g = this.h[4];
            var y = i;
            var w = n;
            var _ = c;
            var S = u;
            var k = g;
            for (var x = 0; x < 80; x++) {
                var E = s(a(o(i, h(x, n, c, u), t[p[x] + r], d(x)), b[x]), g);
                i = g;
                g = u;
                u = a(c, 10);
                c = n;
                n = E;
                E = s(a(o(y, h(79 - x, w, _, S), t[v[x] + r], l(x)), m[x]), k);
                y = k;
                k = S;
                S = a(_, 10);
                _ = w;
                w = E;
            }
            E = f(this.h[1], c, S);
            this.h[1] = f(this.h[2], u, k);
            this.h[2] = f(this.h[3], g, y);
            this.h[3] = f(this.h[4], i, w);
            this.h[4] = f(this.h[0], n, _);
            this.h[0] = E;
        };
        u.prototype._digest = function e(t) {
            if (t === "hex") return i.toHex32(this.h, "little"); else return i.split32(this.h, "little");
        };
        function h(e, t, r, i) {
            if (e <= 15) return t ^ r ^ i; else if (e <= 31) return t & r | ~t & i; else if (e <= 47) return (t | ~r) ^ i; else if (e <= 63) return t & i | r & ~i; else return t ^ (r | ~i);
        }
        function d(e) {
            if (e <= 15) return 0; else if (e <= 31) return 1518500249; else if (e <= 47) return 1859775393; else if (e <= 63) return 2400959708; else return 2840853838;
        }
        function l(e) {
            if (e <= 15) return 1352829926; else if (e <= 31) return 1548603684; else if (e <= 47) return 1836072691; else if (e <= 63) return 2053994217; else return 0;
        }
        var p = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13 ];
        var v = [ 5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11 ];
        var b = [ 11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6 ];
        var m = [ 8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11 ];
    }, {
        "./common": 125,
        "./utils": 135
    } ],
    128: [ function(e, t, r) {
        "use strict";
        r.sha1 = e("./sha/1");
        r.sha224 = e("./sha/224");
        r.sha256 = e("./sha/256");
        r.sha384 = e("./sha/384");
        r.sha512 = e("./sha/512");
    }, {
        "./sha/1": 129,
        "./sha/224": 130,
        "./sha/256": 131,
        "./sha/384": 132,
        "./sha/512": 133
    } ],
    129: [ function(e, t, r) {
        "use strict";
        var i = e("../utils");
        var n = e("../common");
        var a = e("./common");
        var s = i.rotl32;
        var f = i.sum32;
        var o = i.sum32_5;
        var c = a.ft_1;
        var u = n.BlockHash;
        var h = [ 1518500249, 1859775393, 2400959708, 3395469782 ];
        function d() {
            if (!(this instanceof d)) return new d();
            u.call(this);
            this.h = [ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ];
            this.W = new Array(80);
        }
        i.inherits(d, u);
        t.exports = d;
        d.blockSize = 512;
        d.outSize = 160;
        d.hmacStrength = 80;
        d.padLength = 64;
        d.prototype._update = function e(t, r) {
            var i = this.W;
            for (var n = 0; n < 16; n++) i[n] = t[r + n];
            for (;n < i.length; n++) i[n] = s(i[n - 3] ^ i[n - 8] ^ i[n - 14] ^ i[n - 16], 1);
            var a = this.h[0];
            var u = this.h[1];
            var d = this.h[2];
            var l = this.h[3];
            var p = this.h[4];
            for (n = 0; n < i.length; n++) {
                var v = ~~(n / 20);
                var b = o(s(a, 5), c(v, u, d, l), p, i[n], h[v]);
                p = l;
                l = d;
                d = s(u, 30);
                u = a;
                a = b;
            }
            this.h[0] = f(this.h[0], a);
            this.h[1] = f(this.h[1], u);
            this.h[2] = f(this.h[2], d);
            this.h[3] = f(this.h[3], l);
            this.h[4] = f(this.h[4], p);
        };
        d.prototype._digest = function e(t) {
            if (t === "hex") return i.toHex32(this.h, "big"); else return i.split32(this.h, "big");
        };
    }, {
        "../common": 125,
        "../utils": 135,
        "./common": 134
    } ],
    130: [ function(e, t, r) {
        "use strict";
        var i = e("../utils");
        var n = e("./256");
        function a() {
            if (!(this instanceof a)) return new a();
            n.call(this);
            this.h = [ 3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428 ];
        }
        i.inherits(a, n);
        t.exports = a;
        a.blockSize = 512;
        a.outSize = 224;
        a.hmacStrength = 192;
        a.padLength = 64;
        a.prototype._digest = function e(t) {
            if (t === "hex") return i.toHex32(this.h.slice(0, 7), "big"); else return i.split32(this.h.slice(0, 7), "big");
        };
    }, {
        "../utils": 135,
        "./256": 131
    } ],
    131: [ function(e, t, r) {
        "use strict";
        var i = e("../utils");
        var n = e("../common");
        var a = e("./common");
        var s = e("minimalistic-assert");
        var f = i.sum32;
        var o = i.sum32_4;
        var c = i.sum32_5;
        var u = a.ch32;
        var h = a.maj32;
        var d = a.s0_256;
        var l = a.s1_256;
        var p = a.g0_256;
        var v = a.g1_256;
        var b = n.BlockHash;
        var m = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ];
        function g() {
            if (!(this instanceof g)) return new g();
            b.call(this);
            this.h = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ];
            this.k = m;
            this.W = new Array(64);
        }
        i.inherits(g, b);
        t.exports = g;
        g.blockSize = 512;
        g.outSize = 256;
        g.hmacStrength = 192;
        g.padLength = 64;
        g.prototype._update = function e(t, r) {
            var i = this.W;
            for (var n = 0; n < 16; n++) i[n] = t[r + n];
            for (;n < i.length; n++) i[n] = o(v(i[n - 2]), i[n - 7], p(i[n - 15]), i[n - 16]);
            var a = this.h[0];
            var b = this.h[1];
            var m = this.h[2];
            var g = this.h[3];
            var y = this.h[4];
            var w = this.h[5];
            var _ = this.h[6];
            var S = this.h[7];
            s(this.k.length === i.length);
            for (n = 0; n < i.length; n++) {
                var k = c(S, l(y), u(y, w, _), this.k[n], i[n]);
                var x = f(d(a), h(a, b, m));
                S = _;
                _ = w;
                w = y;
                y = f(g, k);
                g = m;
                m = b;
                b = a;
                a = f(k, x);
            }
            this.h[0] = f(this.h[0], a);
            this.h[1] = f(this.h[1], b);
            this.h[2] = f(this.h[2], m);
            this.h[3] = f(this.h[3], g);
            this.h[4] = f(this.h[4], y);
            this.h[5] = f(this.h[5], w);
            this.h[6] = f(this.h[6], _);
            this.h[7] = f(this.h[7], S);
        };
        g.prototype._digest = function e(t) {
            if (t === "hex") return i.toHex32(this.h, "big"); else return i.split32(this.h, "big");
        };
    }, {
        "../common": 125,
        "../utils": 135,
        "./common": 134,
        "minimalistic-assert": 180
    } ],
    132: [ function(e, t, r) {
        "use strict";
        var i = e("../utils");
        var n = e("./512");
        function a() {
            if (!(this instanceof a)) return new a();
            n.call(this);
            this.h = [ 3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428 ];
        }
        i.inherits(a, n);
        t.exports = a;
        a.blockSize = 1024;
        a.outSize = 384;
        a.hmacStrength = 192;
        a.padLength = 128;
        a.prototype._digest = function e(t) {
            if (t === "hex") return i.toHex32(this.h.slice(0, 12), "big"); else return i.split32(this.h.slice(0, 12), "big");
        };
    }, {
        "../utils": 135,
        "./512": 133
    } ],
    133: [ function(e, t, r) {
        "use strict";
        var i = e("../utils");
        var n = e("../common");
        var a = e("minimalistic-assert");
        var s = i.rotr64_hi;
        var f = i.rotr64_lo;
        var o = i.shr64_hi;
        var c = i.shr64_lo;
        var u = i.sum64;
        var h = i.sum64_hi;
        var d = i.sum64_lo;
        var l = i.sum64_4_hi;
        var p = i.sum64_4_lo;
        var v = i.sum64_5_hi;
        var b = i.sum64_5_lo;
        var m = n.BlockHash;
        var g = [ 1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591 ];
        function y() {
            if (!(this instanceof y)) return new y();
            m.call(this);
            this.h = [ 1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209 ];
            this.k = g;
            this.W = new Array(160);
        }
        i.inherits(y, m);
        t.exports = y;
        y.blockSize = 1024;
        y.outSize = 512;
        y.hmacStrength = 192;
        y.padLength = 128;
        y.prototype._prepareBlock = function e(t, r) {
            var i = this.W;
            for (var n = 0; n < 32; n++) i[n] = t[r + n];
            for (;n < i.length; n += 2) {
                var a = j(i[n - 4], i[n - 3]);
                var s = C(i[n - 4], i[n - 3]);
                var f = i[n - 14];
                var o = i[n - 13];
                var c = B(i[n - 30], i[n - 29]);
                var u = I(i[n - 30], i[n - 29]);
                var h = i[n - 32];
                var d = i[n - 31];
                i[n] = l(a, s, f, o, c, u, h, d);
                i[n + 1] = p(a, s, f, o, c, u, h, d);
            }
        };
        y.prototype._update = function e(t, r) {
            this._prepareBlock(t, r);
            var i = this.W;
            var n = this.h[0];
            var s = this.h[1];
            var f = this.h[2];
            var o = this.h[3];
            var c = this.h[4];
            var l = this.h[5];
            var p = this.h[6];
            var m = this.h[7];
            var g = this.h[8];
            var y = this.h[9];
            var B = this.h[10];
            var I = this.h[11];
            var j = this.h[12];
            var C = this.h[13];
            var R = this.h[14];
            var z = this.h[15];
            a(this.k.length === i.length);
            for (var T = 0; T < i.length; T += 2) {
                var O = R;
                var D = z;
                var P = A(g, y);
                var L = M(g, y);
                var N = w(g, y, B, I, j, C);
                var U = _(g, y, B, I, j, C);
                var F = this.k[T];
                var q = this.k[T + 1];
                var W = i[T];
                var K = i[T + 1];
                var H = v(O, D, P, L, N, U, F, q, W, K);
                var Z = b(O, D, P, L, N, U, F, q, W, K);
                O = x(n, s);
                D = E(n, s);
                P = S(n, s, f, o, c, l);
                L = k(n, s, f, o, c, l);
                var V = h(O, D, P, L);
                var G = d(O, D, P, L);
                R = j;
                z = C;
                j = B;
                C = I;
                B = g;
                I = y;
                g = h(p, m, H, Z);
                y = d(m, m, H, Z);
                p = c;
                m = l;
                c = f;
                l = o;
                f = n;
                o = s;
                n = h(H, Z, V, G);
                s = d(H, Z, V, G);
            }
            u(this.h, 0, n, s);
            u(this.h, 2, f, o);
            u(this.h, 4, c, l);
            u(this.h, 6, p, m);
            u(this.h, 8, g, y);
            u(this.h, 10, B, I);
            u(this.h, 12, j, C);
            u(this.h, 14, R, z);
        };
        y.prototype._digest = function e(t) {
            if (t === "hex") return i.toHex32(this.h, "big"); else return i.split32(this.h, "big");
        };
        function w(e, t, r, i, n) {
            var a = e & r ^ ~e & n;
            if (a < 0) a += 4294967296;
            return a;
        }
        function _(e, t, r, i, n, a) {
            var s = t & i ^ ~t & a;
            if (s < 0) s += 4294967296;
            return s;
        }
        function S(e, t, r, i, n) {
            var a = e & r ^ e & n ^ r & n;
            if (a < 0) a += 4294967296;
            return a;
        }
        function k(e, t, r, i, n, a) {
            var s = t & i ^ t & a ^ i & a;
            if (s < 0) s += 4294967296;
            return s;
        }
        function x(e, t) {
            var r = s(e, t, 28);
            var i = s(t, e, 2);
            var n = s(t, e, 7);
            var a = r ^ i ^ n;
            if (a < 0) a += 4294967296;
            return a;
        }
        function E(e, t) {
            var r = f(e, t, 28);
            var i = f(t, e, 2);
            var n = f(t, e, 7);
            var a = r ^ i ^ n;
            if (a < 0) a += 4294967296;
            return a;
        }
        function A(e, t) {
            var r = s(e, t, 14);
            var i = s(e, t, 18);
            var n = s(t, e, 9);
            var a = r ^ i ^ n;
            if (a < 0) a += 4294967296;
            return a;
        }
        function M(e, t) {
            var r = f(e, t, 14);
            var i = f(e, t, 18);
            var n = f(t, e, 9);
            var a = r ^ i ^ n;
            if (a < 0) a += 4294967296;
            return a;
        }
        function B(e, t) {
            var r = s(e, t, 1);
            var i = s(e, t, 8);
            var n = o(e, t, 7);
            var a = r ^ i ^ n;
            if (a < 0) a += 4294967296;
            return a;
        }
        function I(e, t) {
            var r = f(e, t, 1);
            var i = f(e, t, 8);
            var n = c(e, t, 7);
            var a = r ^ i ^ n;
            if (a < 0) a += 4294967296;
            return a;
        }
        function j(e, t) {
            var r = s(e, t, 19);
            var i = s(t, e, 29);
            var n = o(e, t, 6);
            var a = r ^ i ^ n;
            if (a < 0) a += 4294967296;
            return a;
        }
        function C(e, t) {
            var r = f(e, t, 19);
            var i = f(t, e, 29);
            var n = c(e, t, 6);
            var a = r ^ i ^ n;
            if (a < 0) a += 4294967296;
            return a;
        }
    }, {
        "../common": 125,
        "../utils": 135,
        "minimalistic-assert": 180
    } ],
    134: [ function(e, t, r) {
        "use strict";
        var i = e("../utils");
        var n = i.rotr32;
        function a(e, t, r, i) {
            if (e === 0) return s(t, r, i);
            if (e === 1 || e === 3) return o(t, r, i);
            if (e === 2) return f(t, r, i);
        }
        r.ft_1 = a;
        function s(e, t, r) {
            return e & t ^ ~e & r;
        }
        r.ch32 = s;
        function f(e, t, r) {
            return e & t ^ e & r ^ t & r;
        }
        r.maj32 = f;
        function o(e, t, r) {
            return e ^ t ^ r;
        }
        r.p32 = o;
        function c(e) {
            return n(e, 2) ^ n(e, 13) ^ n(e, 22);
        }
        r.s0_256 = c;
        function u(e) {
            return n(e, 6) ^ n(e, 11) ^ n(e, 25);
        }
        r.s1_256 = u;
        function h(e) {
            return n(e, 7) ^ n(e, 18) ^ e >>> 3;
        }
        r.g0_256 = h;
        function d(e) {
            return n(e, 17) ^ n(e, 19) ^ e >>> 10;
        }
        r.g1_256 = d;
    }, {
        "../utils": 135
    } ],
    135: [ function(e, t, r) {
        "use strict";
        var i = e("minimalistic-assert");
        var n = e("inherits");
        r.inherits = n;
        function a(e, t) {
            if (Array.isArray(e)) return e.slice();
            if (!e) return [];
            var r = [];
            if (typeof e === "string") {
                if (!t) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e.charCodeAt(i);
                        var a = n >> 8;
                        var s = n & 255;
                        if (a) r.push(a, s); else r.push(s);
                    }
                } else if (t === "hex") {
                    e = e.replace(/[^a-z0-9]+/gi, "");
                    if (e.length % 2 !== 0) e = "0" + e;
                    for (i = 0; i < e.length; i += 2) r.push(parseInt(e[i] + e[i + 1], 16));
                }
            } else {
                for (i = 0; i < e.length; i++) r[i] = e[i] | 0;
            }
            return r;
        }
        r.toArray = a;
        function s(e) {
            var t = "";
            for (var r = 0; r < e.length; r++) t += c(e[r].toString(16));
            return t;
        }
        r.toHex = s;
        function f(e) {
            var t = e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (e & 255) << 24;
            return t >>> 0;
        }
        r.htonl = f;
        function o(e, t) {
            var r = "";
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                if (t === "little") n = f(n);
                r += u(n.toString(16));
            }
            return r;
        }
        r.toHex32 = o;
        function c(e) {
            if (e.length === 1) return "0" + e; else return e;
        }
        r.zero2 = c;
        function u(e) {
            if (e.length === 7) return "0" + e; else if (e.length === 6) return "00" + e; else if (e.length === 5) return "000" + e; else if (e.length === 4) return "0000" + e; else if (e.length === 3) return "00000" + e; else if (e.length === 2) return "000000" + e; else if (e.length === 1) return "0000000" + e; else return e;
        }
        r.zero8 = u;
        function h(e, t, r, n) {
            var a = r - t;
            i(a % 4 === 0);
            var s = new Array(a / 4);
            for (var f = 0, o = t; f < s.length; f++, o += 4) {
                var c;
                if (n === "big") c = e[o] << 24 | e[o + 1] << 16 | e[o + 2] << 8 | e[o + 3]; else c = e[o + 3] << 24 | e[o + 2] << 16 | e[o + 1] << 8 | e[o];
                s[f] = c >>> 0;
            }
            return s;
        }
        r.join32 = h;
        function d(e, t) {
            var r = new Array(e.length * 4);
            for (var i = 0, n = 0; i < e.length; i++, n += 4) {
                var a = e[i];
                if (t === "big") {
                    r[n] = a >>> 24;
                    r[n + 1] = a >>> 16 & 255;
                    r[n + 2] = a >>> 8 & 255;
                    r[n + 3] = a & 255;
                } else {
                    r[n + 3] = a >>> 24;
                    r[n + 2] = a >>> 16 & 255;
                    r[n + 1] = a >>> 8 & 255;
                    r[n] = a & 255;
                }
            }
            return r;
        }
        r.split32 = d;
        function l(e, t) {
            return e >>> t | e << 32 - t;
        }
        r.rotr32 = l;
        function p(e, t) {
            return e << t | e >>> 32 - t;
        }
        r.rotl32 = p;
        function v(e, t) {
            return e + t >>> 0;
        }
        r.sum32 = v;
        function b(e, t, r) {
            return e + t + r >>> 0;
        }
        r.sum32_3 = b;
        function m(e, t, r, i) {
            return e + t + r + i >>> 0;
        }
        r.sum32_4 = m;
        function g(e, t, r, i, n) {
            return e + t + r + i + n >>> 0;
        }
        r.sum32_5 = g;
        function y(e, t, r, i) {
            var n = e[t];
            var a = e[t + 1];
            var s = i + a >>> 0;
            var f = (s < i ? 1 : 0) + r + n;
            e[t] = f >>> 0;
            e[t + 1] = s;
        }
        r.sum64 = y;
        function w(e, t, r, i) {
            var n = t + i >>> 0;
            var a = (n < t ? 1 : 0) + e + r;
            return a >>> 0;
        }
        r.sum64_hi = w;
        function _(e, t, r, i) {
            var n = t + i;
            return n >>> 0;
        }
        r.sum64_lo = _;
        function S(e, t, r, i, n, a, s, f) {
            var o = 0;
            var c = t;
            c = c + i >>> 0;
            o += c < t ? 1 : 0;
            c = c + a >>> 0;
            o += c < a ? 1 : 0;
            c = c + f >>> 0;
            o += c < f ? 1 : 0;
            var u = e + r + n + s + o;
            return u >>> 0;
        }
        r.sum64_4_hi = S;
        function k(e, t, r, i, n, a, s, f) {
            var o = t + i + a + f;
            return o >>> 0;
        }
        r.sum64_4_lo = k;
        function x(e, t, r, i, n, a, s, f, o, c) {
            var u = 0;
            var h = t;
            h = h + i >>> 0;
            u += h < t ? 1 : 0;
            h = h + a >>> 0;
            u += h < a ? 1 : 0;
            h = h + f >>> 0;
            u += h < f ? 1 : 0;
            h = h + c >>> 0;
            u += h < c ? 1 : 0;
            var d = e + r + n + s + o + u;
            return d >>> 0;
        }
        r.sum64_5_hi = x;
        function E(e, t, r, i, n, a, s, f, o, c) {
            var u = t + i + a + f + c;
            return u >>> 0;
        }
        r.sum64_5_lo = E;
        function A(e, t, r) {
            var i = t << 32 - r | e >>> r;
            return i >>> 0;
        }
        r.rotr64_hi = A;
        function M(e, t, r) {
            var i = e << 32 - r | t >>> r;
            return i >>> 0;
        }
        r.rotr64_lo = M;
        function B(e, t, r) {
            return e >>> r;
        }
        r.shr64_hi = B;
        function I(e, t, r) {
            var i = e << 32 - r | t >>> r;
            return i >>> 0;
        }
        r.shr64_lo = I;
    }, {
        inherits: 139,
        "minimalistic-assert": 180
    } ],
    136: [ function(e, t, r) {
        "use strict";
        var i = e("hash.js");
        var n = e("minimalistic-crypto-utils");
        var a = e("minimalistic-assert");
        function s(e) {
            if (!(this instanceof s)) return new s(e);
            this.hash = e.hash;
            this.predResist = !!e.predResist;
            this.outLen = this.hash.outSize;
            this.minEntropy = e.minEntropy || this.hash.hmacStrength;
            this._reseed = null;
            this.reseedInterval = null;
            this.K = null;
            this.V = null;
            var t = n.toArray(e.entropy, e.entropyEnc || "hex");
            var r = n.toArray(e.nonce, e.nonceEnc || "hex");
            var i = n.toArray(e.pers, e.persEnc || "hex");
            a(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits");
            this._init(t, r, i);
        }
        t.exports = s;
        s.prototype._init = function e(t, r, i) {
            var n = t.concat(r).concat(i);
            this.K = new Array(this.outLen / 8);
            this.V = new Array(this.outLen / 8);
            for (var a = 0; a < this.V.length; a++) {
                this.K[a] = 0;
                this.V[a] = 1;
            }
            this._update(n);
            this._reseed = 1;
            this.reseedInterval = 281474976710656;
        };
        s.prototype._hmac = function e() {
            return new i.hmac(this.hash, this.K);
        };
        s.prototype._update = function e(t) {
            var r = this._hmac().update(this.V).update([ 0 ]);
            if (t) r = r.update(t);
            this.K = r.digest();
            this.V = this._hmac().update(this.V).digest();
            if (!t) return;
            this.K = this._hmac().update(this.V).update([ 1 ]).update(t).digest();
            this.V = this._hmac().update(this.V).digest();
        };
        s.prototype.reseed = function e(t, r, i, s) {
            if (typeof r !== "string") {
                s = i;
                i = r;
                r = null;
            }
            t = n.toArray(t, r);
            i = n.toArray(i, s);
            a(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits");
            this._update(t.concat(i || []));
            this._reseed = 1;
        };
        s.prototype.generate = function e(t, r, i, a) {
            if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
            if (typeof r !== "string") {
                a = i;
                i = r;
                r = null;
            }
            if (i) {
                i = n.toArray(i, a || "hex");
                this._update(i);
            }
            var s = [];
            while (s.length < t) {
                this.V = this._hmac().update(this.V).digest();
                s = s.concat(this.V);
            }
            var f = s.slice(0, t);
            this._update(i);
            this._reseed++;
            return n.encode(f, r);
        };
    }, {
        "hash.js": 124,
        "minimalistic-assert": 180,
        "minimalistic-crypto-utils": 181
    } ],
    137: [ function(e, t, r) {
        r.read = function(e, t, r, i, n) {
            var a, s;
            var f = n * 8 - i - 1;
            var o = (1 << f) - 1;
            var c = o >> 1;
            var u = -7;
            var h = r ? n - 1 : 0;
            var d = r ? -1 : 1;
            var l = e[t + h];
            h += d;
            a = l & (1 << -u) - 1;
            l >>= -u;
            u += f;
            for (;u > 0; a = a * 256 + e[t + h], h += d, u -= 8) {}
            s = a & (1 << -u) - 1;
            a >>= -u;
            u += i;
            for (;u > 0; s = s * 256 + e[t + h], h += d, u -= 8) {}
            if (a === 0) {
                a = 1 - c;
            } else if (a === o) {
                return s ? NaN : (l ? -1 : 1) * Infinity;
            } else {
                s = s + Math.pow(2, i);
                a = a - c;
            }
            return (l ? -1 : 1) * s * Math.pow(2, a - i);
        };
        r.write = function(e, t, r, i, n, a) {
            var s, f, o;
            var c = a * 8 - n - 1;
            var u = (1 << c) - 1;
            var h = u >> 1;
            var d = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
            var l = i ? 0 : a - 1;
            var p = i ? 1 : -1;
            var v = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
            t = Math.abs(t);
            if (isNaN(t) || t === Infinity) {
                f = isNaN(t) ? 1 : 0;
                s = u;
            } else {
                s = Math.floor(Math.log(t) / Math.LN2);
                if (t * (o = Math.pow(2, -s)) < 1) {
                    s--;
                    o *= 2;
                }
                if (s + h >= 1) {
                    t += d / o;
                } else {
                    t += d * Math.pow(2, 1 - h);
                }
                if (t * o >= 2) {
                    s++;
                    o /= 2;
                }
                if (s + h >= u) {
                    f = 0;
                    s = u;
                } else if (s + h >= 1) {
                    f = (t * o - 1) * Math.pow(2, n);
                    s = s + h;
                } else {
                    f = t * Math.pow(2, h - 1) * Math.pow(2, n);
                    s = 0;
                }
            }
            for (;n >= 8; e[r + l] = f & 255, l += p, f /= 256, n -= 8) {}
            s = s << n | f;
            c += n;
            for (;c > 0; e[r + l] = s & 255, l += p, s /= 256, c -= 8) {}
            e[r + l - p] |= v * 128;
        };
    }, {} ],
    138: [ function(e, t, r) {
        (function(e) {
            "use strict";
            var r = e.MutationObserver || e.WebKitMutationObserver;
            var i;
            {
                if (r) {
                    var n = 0;
                    var a = new r(u);
                    var s = e.document.createTextNode("");
                    a.observe(s, {
                        characterData: true
                    });
                    i = function() {
                        s.data = n = ++n % 2;
                    };
                } else if (!e.setImmediate && typeof e.MessageChannel !== "undefined") {
                    var f = new e.MessageChannel();
                    f.port1.onmessage = u;
                    i = function() {
                        f.port2.postMessage(0);
                    };
                } else if ("document" in e && "onreadystatechange" in e.document.createElement("script")) {
                    i = function() {
                        var t = e.document.createElement("script");
                        t.onreadystatechange = function() {
                            u();
                            t.onreadystatechange = null;
                            t.parentNode.removeChild(t);
                            t = null;
                        };
                        e.document.documentElement.appendChild(t);
                    };
                } else {
                    i = function() {
                        setTimeout(u, 0);
                    };
                }
            }
            var o;
            var c = [];
            function u() {
                o = true;
                var e, t;
                var r = c.length;
                while (r) {
                    t = c;
                    c = [];
                    e = -1;
                    while (++e < r) {
                        t[e]();
                    }
                    r = c.length;
                }
                o = false;
            }
            t.exports = h;
            function h(e) {
                if (c.push(e) === 1 && !o) {
                    i();
                }
            }
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {} ],
    139: [ function(e, t, r) {
        if (typeof Object.create === "function") {
            t.exports = function e(t, r) {
                t.super_ = r;
                t.prototype = Object.create(r.prototype, {
                    constructor: {
                        value: t,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
            };
        } else {
            t.exports = function e(t, r) {
                t.super_ = r;
                var i = function() {};
                i.prototype = r.prototype;
                t.prototype = new i();
                t.prototype.constructor = t;
            };
        }
    }, {} ],
    140: [ function(e, t, r) {
        t.exports = function(e) {
            return e != null && (i(e) || n(e) || !!e._isBuffer);
        };
        function i(e) {
            return !!e.constructor && typeof e.constructor.isBuffer === "function" && e.constructor.isBuffer(e);
        }
        function n(e) {
            return typeof e.readFloatLE === "function" && typeof e.slice === "function" && i(e.slice(0, 0));
        }
    }, {} ],
    141: [ function(e, t, r) {
        var i = {}.toString;
        t.exports = Array.isArray || function(e) {
            return i.call(e) == "[object Array]";
        };
    }, {} ],
    142: [ function(e, t, r) {
        "use strict";
        var i = e("./utils");
        var n = e("./support");
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        r.encode = function(e) {
            var t = [];
            var r, n, s, f, o, c, u;
            var h = 0, d = e.length, l = d;
            var p = i.getTypeOf(e) !== "string";
            while (h < e.length) {
                l = d - h;
                if (!p) {
                    r = e.charCodeAt(h++);
                    n = h < d ? e.charCodeAt(h++) : 0;
                    s = h < d ? e.charCodeAt(h++) : 0;
                } else {
                    r = e[h++];
                    n = h < d ? e[h++] : 0;
                    s = h < d ? e[h++] : 0;
                }
                f = r >> 2;
                o = (r & 3) << 4 | n >> 4;
                c = l > 1 ? (n & 15) << 2 | s >> 6 : 64;
                u = l > 2 ? s & 63 : 64;
                t.push(a.charAt(f) + a.charAt(o) + a.charAt(c) + a.charAt(u));
            }
            return t.join("");
        };
        r.decode = function(e) {
            var t, r, i;
            var s, f, o, c;
            var u = 0, h = 0;
            var d = "data:";
            if (e.substr(0, d.length) === d) {
                throw new Error("Invalid base64 input, it looks like a data url.");
            }
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            var l = e.length * 3 / 4;
            if (e.charAt(e.length - 1) === a.charAt(64)) {
                l--;
            }
            if (e.charAt(e.length - 2) === a.charAt(64)) {
                l--;
            }
            if (l % 1 !== 0) {
                throw new Error("Invalid base64 input, bad content length.");
            }
            var p;
            if (n.uint8array) {
                p = new Uint8Array(l | 0);
            } else {
                p = new Array(l | 0);
            }
            while (u < e.length) {
                s = a.indexOf(e.charAt(u++));
                f = a.indexOf(e.charAt(u++));
                o = a.indexOf(e.charAt(u++));
                c = a.indexOf(e.charAt(u++));
                t = s << 2 | f >> 4;
                r = (f & 15) << 4 | o >> 2;
                i = (o & 3) << 6 | c;
                p[h++] = t;
                if (o !== 64) {
                    p[h++] = r;
                }
                if (c !== 64) {
                    p[h++] = i;
                }
            }
            return p;
        };
    }, {
        "./support": 171,
        "./utils": 173
    } ],
    143: [ function(e, t, r) {
        "use strict";
        var i = e("./external");
        var n = e("./stream/DataWorker");
        var a = e("./stream/DataLengthProbe");
        var s = e("./stream/Crc32Probe");
        var a = e("./stream/DataLengthProbe");
        function f(e, t, r, i, n) {
            this.compressedSize = e;
            this.uncompressedSize = t;
            this.crc32 = r;
            this.compression = i;
            this.compressedContent = n;
        }
        f.prototype = {
            getContentWorker: function() {
                var e = new n(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length"));
                var t = this;
                e.on("end", function() {
                    if (this.streamInfo["data_length"] !== t.uncompressedSize) {
                        throw new Error("Bug : uncompressed data size mismatch");
                    }
                });
                return e;
            },
            getCompressedWorker: function() {
                return new n(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
            }
        };
        f.createWorkerFrom = function(e, t, r) {
            return e.pipe(new s()).pipe(new a("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression", t);
        };
        t.exports = f;
    }, {
        "./external": 147,
        "./stream/Crc32Probe": 166,
        "./stream/DataLengthProbe": 167,
        "./stream/DataWorker": 168
    } ],
    144: [ function(e, t, r) {
        "use strict";
        var i = e("./stream/GenericWorker");
        r.STORE = {
            magic: "\0\0",
            compressWorker: function(e) {
                return new i("STORE compression");
            },
            uncompressWorker: function() {
                return new i("STORE decompression");
            }
        };
        r.DEFLATE = e("./flate");
    }, {
        "./flate": 148,
        "./stream/GenericWorker": 169
    } ],
    145: [ function(e, t, r) {
        "use strict";
        var i = e("./utils");
        function n() {
            var e, t = [];
            for (var r = 0; r < 256; r++) {
                e = r;
                for (var i = 0; i < 8; i++) {
                    e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
                }
                t[r] = e;
            }
            return t;
        }
        var a = n();
        function s(e, t, r, i) {
            var n = a, s = i + r;
            e = e ^ -1;
            for (var f = i; f < s; f++) {
                e = e >>> 8 ^ n[(e ^ t[f]) & 255];
            }
            return e ^ -1;
        }
        function f(e, t, r, i) {
            var n = a, s = i + r;
            e = e ^ -1;
            for (var f = i; f < s; f++) {
                e = e >>> 8 ^ n[(e ^ t.charCodeAt(f)) & 255];
            }
            return e ^ -1;
        }
        t.exports = function e(t, r) {
            if (typeof t === "undefined" || !t.length) {
                return 0;
            }
            var n = i.getTypeOf(t) !== "string";
            if (n) {
                return s(r | 0, t, t.length, 0);
            } else {
                return f(r | 0, t, t.length, 0);
            }
        };
    }, {
        "./utils": 173
    } ],
    146: [ function(e, t, r) {
        "use strict";
        r.base64 = false;
        r.binary = false;
        r.dir = false;
        r.createFolders = true;
        r.date = null;
        r.compression = null;
        r.compressionOptions = null;
        r.comment = null;
        r.unixPermissions = null;
        r.dosPermissions = null;
    }, {} ],
    147: [ function(e, t, r) {
        "use strict";
        var i = null;
        if (typeof Promise !== "undefined") {
            i = Promise;
        } else {
            i = e("lie");
        }
        t.exports = {
            Promise: i
        };
    }, {
        lie: 177
    } ],
    148: [ function(e, t, r) {
        "use strict";
        var i = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Uint32Array !== "undefined";
        var n = e("pako");
        var a = e("./utils");
        var s = e("./stream/GenericWorker");
        var f = i ? "uint8array" : "array";
        r.magic = "\b\0";
        function o(e, t) {
            s.call(this, "FlateWorker/" + e);
            this._pako = null;
            this._pakoAction = e;
            this._pakoOptions = t;
            this.meta = {};
        }
        a.inherits(o, s);
        o.prototype.processChunk = function(e) {
            this.meta = e.meta;
            if (this._pako === null) {
                this._createPako();
            }
            this._pako.push(a.transformTo(f, e.data), false);
        };
        o.prototype.flush = function() {
            s.prototype.flush.call(this);
            if (this._pako === null) {
                this._createPako();
            }
            this._pako.push([], true);
        };
        o.prototype.cleanUp = function() {
            s.prototype.cleanUp.call(this);
            this._pako = null;
        };
        o.prototype._createPako = function() {
            this._pako = new n[this._pakoAction]({
                raw: true,
                level: this._pakoOptions.level || -1
            });
            var e = this;
            this._pako.onData = function(t) {
                e.push({
                    data: t,
                    meta: e.meta
                });
            };
        };
        r.compressWorker = function(e) {
            return new o("Deflate", e);
        };
        r.uncompressWorker = function() {
            return new o("Inflate", {});
        };
    }, {
        "./stream/GenericWorker": 169,
        "./utils": 173,
        pako: 183
    } ],
    149: [ function(e, t, r) {
        "use strict";
        var i = e("../utils");
        var n = e("../stream/GenericWorker");
        var a = e("../utf8");
        var s = e("../crc32");
        var f = e("../signature");
        var o = function(e, t) {
            var r = "", i;
            for (i = 0; i < t; i++) {
                r += String.fromCharCode(e & 255);
                e = e >>> 8;
            }
            return r;
        };
        var c = function(e, t) {
            var r = e;
            if (!e) {
                r = t ? 16893 : 33204;
            }
            return (r & 65535) << 16;
        };
        var u = function(e, t) {
            return (e || 0) & 63;
        };
        var h = function(e, t, r, n, h, d) {
            var l = e["file"], p = e["compression"], v = d !== a.utf8encode, b = i.transformTo("string", d(l.name)), m = i.transformTo("string", a.utf8encode(l.name)), g = l.comment, y = i.transformTo("string", d(g)), w = i.transformTo("string", a.utf8encode(g)), _ = m.length !== l.name.length, S = w.length !== g.length, k, x, E = "", A = "", M = "", B = l.dir, I = l.date;
            var j = {
                crc32: 0,
                compressedSize: 0,
                uncompressedSize: 0
            };
            if (!t || r) {
                j.crc32 = e["crc32"];
                j.compressedSize = e["compressedSize"];
                j.uncompressedSize = e["uncompressedSize"];
            }
            var C = 0;
            if (t) {
                C |= 8;
            }
            if (!v && (_ || S)) {
                C |= 2048;
            }
            var R = 0;
            var z = 0;
            if (B) {
                R |= 16;
            }
            if (h === "UNIX") {
                z = 798;
                R |= c(l.unixPermissions, B);
            } else {
                z = 20;
                R |= u(l.dosPermissions, B);
            }
            k = I.getUTCHours();
            k = k << 6;
            k = k | I.getUTCMinutes();
            k = k << 5;
            k = k | I.getUTCSeconds() / 2;
            x = I.getUTCFullYear() - 1980;
            x = x << 4;
            x = x | I.getUTCMonth() + 1;
            x = x << 5;
            x = x | I.getUTCDate();
            if (_) {
                A = o(1, 1) + o(s(b), 4) + m;
                E += "up" + o(A.length, 2) + A;
            }
            if (S) {
                M = o(1, 1) + o(s(y), 4) + w;
                E += "uc" + o(M.length, 2) + M;
            }
            var T = "";
            T += "\n\0";
            T += o(C, 2);
            T += p.magic;
            T += o(k, 2);
            T += o(x, 2);
            T += o(j.crc32, 4);
            T += o(j.compressedSize, 4);
            T += o(j.uncompressedSize, 4);
            T += o(b.length, 2);
            T += o(E.length, 2);
            var O = f.LOCAL_FILE_HEADER + T + b + E;
            var D = f.CENTRAL_FILE_HEADER + o(z, 2) + T + o(y.length, 2) + "\0\0" + "\0\0" + o(R, 4) + o(n, 4) + b + E + y;
            return {
                fileRecord: O,
                dirRecord: D
            };
        };
        var d = function(e, t, r, n, a) {
            var s = "";
            var c = i.transformTo("string", a(n));
            s = f.CENTRAL_DIRECTORY_END + "\0\0" + "\0\0" + o(e, 2) + o(e, 2) + o(t, 4) + o(r, 4) + o(c.length, 2) + c;
            return s;
        };
        var l = function(e) {
            var t = "";
            t = f.DATA_DESCRIPTOR + o(e["crc32"], 4) + o(e["compressedSize"], 4) + o(e["uncompressedSize"], 4);
            return t;
        };
        function p(e, t, r, i) {
            n.call(this, "ZipFileWorker");
            this.bytesWritten = 0;
            this.zipComment = t;
            this.zipPlatform = r;
            this.encodeFileName = i;
            this.streamFiles = e;
            this.accumulate = false;
            this.contentBuffer = [];
            this.dirRecords = [];
            this.currentSourceOffset = 0;
            this.entriesCount = 0;
            this.currentFile = null;
            this._sources = [];
        }
        i.inherits(p, n);
        p.prototype.push = function(e) {
            var t = e.meta.percent || 0;
            var r = this.entriesCount;
            var i = this._sources.length;
            if (this.accumulate) {
                this.contentBuffer.push(e);
            } else {
                this.bytesWritten += e.data.length;
                n.prototype.push.call(this, {
                    data: e.data,
                    meta: {
                        currentFile: this.currentFile,
                        percent: r ? (t + 100 * (r - i - 1)) / r : 100
                    }
                });
            }
        };
        p.prototype.openedSource = function(e) {
            this.currentSourceOffset = this.bytesWritten;
            this.currentFile = e["file"].name;
            var t = this.streamFiles && !e["file"].dir;
            if (t) {
                var r = h(e, t, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                this.push({
                    data: r.fileRecord,
                    meta: {
                        percent: 0
                    }
                });
            } else {
                this.accumulate = true;
            }
        };
        p.prototype.closedSource = function(e) {
            this.accumulate = false;
            var t = this.streamFiles && !e["file"].dir;
            var r = h(e, t, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            this.dirRecords.push(r.dirRecord);
            if (t) {
                this.push({
                    data: l(e),
                    meta: {
                        percent: 100
                    }
                });
            } else {
                this.push({
                    data: r.fileRecord,
                    meta: {
                        percent: 0
                    }
                });
                while (this.contentBuffer.length) {
                    this.push(this.contentBuffer.shift());
                }
            }
            this.currentFile = null;
        };
        p.prototype.flush = function() {
            var e = this.bytesWritten;
            for (var t = 0; t < this.dirRecords.length; t++) {
                this.push({
                    data: this.dirRecords[t],
                    meta: {
                        percent: 100
                    }
                });
            }
            var r = this.bytesWritten - e;
            var i = d(this.dirRecords.length, r, e, this.zipComment, this.encodeFileName);
            this.push({
                data: i,
                meta: {
                    percent: 100
                }
            });
        };
        p.prototype.prepareNextSource = function() {
            this.previous = this._sources.shift();
            this.openedSource(this.previous.streamInfo);
            if (this.isPaused) {
                this.previous.pause();
            } else {
                this.previous.resume();
            }
        };
        p.prototype.registerPrevious = function(e) {
            this._sources.push(e);
            var t = this;
            e.on("data", function(e) {
                t.processChunk(e);
            });
            e.on("end", function() {
                t.closedSource(t.previous.streamInfo);
                if (t._sources.length) {
                    t.prepareNextSource();
                } else {
                    t.end();
                }
            });
            e.on("error", function(e) {
                t.error(e);
            });
            return this;
        };
        p.prototype.resume = function() {
            if (!n.prototype.resume.call(this)) {
                return false;
            }
            if (!this.previous && this._sources.length) {
                this.prepareNextSource();
                return true;
            }
            if (!this.previous && !this._sources.length && !this.generatedError) {
                this.end();
                return true;
            }
        };
        p.prototype.error = function(e) {
            var t = this._sources;
            if (!n.prototype.error.call(this, e)) {
                return false;
            }
            for (var r = 0; r < t.length; r++) {
                try {
                    t[r].error(e);
                } catch (e) {}
            }
            return true;
        };
        p.prototype.lock = function() {
            n.prototype.lock.call(this);
            var e = this._sources;
            for (var t = 0; t < e.length; t++) {
                e[t].lock();
            }
        };
        t.exports = p;
    }, {
        "../crc32": 145,
        "../signature": 164,
        "../stream/GenericWorker": 169,
        "../utf8": 172,
        "../utils": 173
    } ],
    150: [ function(e, t, r) {
        "use strict";
        var i = e("../compressions");
        var n = e("./ZipFileWorker");
        var a = function(e, t) {
            var r = e || t;
            var n = i[r];
            if (!n) {
                throw new Error(r + " is not a valid compression method !");
            }
            return n;
        };
        r.generateWorker = function(e, t, r) {
            var i = new n(t.streamFiles, r, t.platform, t.encodeFileName);
            var s = 0;
            try {
                e.forEach(function(e, r) {
                    s++;
                    var n = a(r.options.compression, t.compression);
                    var f = r.options.compressionOptions || t.compressionOptions || {};
                    var o = r.dir, c = r.date;
                    r._compressWorker(n, f).withStreamInfo("file", {
                        name: e,
                        dir: o,
                        date: c,
                        comment: r.comment || "",
                        unixPermissions: r.unixPermissions,
                        dosPermissions: r.dosPermissions
                    }).pipe(i);
                });
                i.entriesCount = s;
            } catch (e) {
                i.error(e);
            }
            return i;
        };
    }, {
        "../compressions": 144,
        "./ZipFileWorker": 149
    } ],
    151: [ function(e, t, r) {
        "use strict";
        function i() {
            if (!(this instanceof i)) {
                return new i();
            }
            if (arguments.length) {
                throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
            }
            this.files = {};
            this.comment = null;
            this.root = "";
            this.clone = function() {
                var e = new i();
                for (var t in this) {
                    if (typeof this[t] !== "function") {
                        e[t] = this[t];
                    }
                }
                return e;
            };
        }
        i.prototype = e("./object");
        i.prototype.loadAsync = e("./load");
        i.support = e("./support");
        i.defaults = e("./defaults");
        i.version = "3.1.5";
        i.loadAsync = function(e, t) {
            return new i().loadAsync(e, t);
        };
        i.external = e("./external");
        t.exports = i;
    }, {
        "./defaults": 146,
        "./external": 147,
        "./load": 152,
        "./object": 156,
        "./support": 171
    } ],
    152: [ function(e, t, r) {
        "use strict";
        var i = e("./utils");
        var n = e("./external");
        var a = e("./utf8");
        var i = e("./utils");
        var s = e("./zipEntries");
        var f = e("./stream/Crc32Probe");
        var o = e("./nodejsUtils");
        function c(e) {
            return new n.Promise(function(t, r) {
                var i = e.decompressed.getContentWorker().pipe(new f());
                i.on("error", function(e) {
                    r(e);
                }).on("end", function() {
                    if (i.streamInfo.crc32 !== e.decompressed.crc32) {
                        r(new Error("Corrupted zip : CRC32 mismatch"));
                    } else {
                        t();
                    }
                }).resume();
            });
        }
        t.exports = function(e, t) {
            var r = this;
            t = i.extend(t || {}, {
                base64: false,
                checkCRC32: false,
                optimizedBinaryString: false,
                createFolders: false,
                decodeFileName: a.utf8decode
            });
            if (o.isNode && o.isStream(e)) {
                return n.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file."));
            }
            return i.prepareContent("the loaded zip file", e, true, t.optimizedBinaryString, t.base64).then(function(e) {
                var r = new s(t);
                r.load(e);
                return r;
            }).then(function e(r) {
                var i = [ n.Promise.resolve(r) ];
                var a = r.files;
                if (t.checkCRC32) {
                    for (var s = 0; s < a.length; s++) {
                        i.push(c(a[s]));
                    }
                }
                return n.Promise.all(i);
            }).then(function e(i) {
                var n = i.shift();
                var a = n.files;
                for (var s = 0; s < a.length; s++) {
                    var f = a[s];
                    r.file(f.fileNameStr, f.decompressed, {
                        binary: true,
                        optimizedBinaryString: true,
                        date: f.date,
                        dir: f.dir,
                        comment: f.fileCommentStr.length ? f.fileCommentStr : null,
                        unixPermissions: f.unixPermissions,
                        dosPermissions: f.dosPermissions,
                        createFolders: t.createFolders
                    });
                }
                if (n.zipComment.length) {
                    r.comment = n.zipComment;
                }
                return r;
            });
        };
    }, {
        "./external": 147,
        "./nodejsUtils": 155,
        "./stream/Crc32Probe": 166,
        "./utf8": 172,
        "./utils": 173,
        "./zipEntries": 174
    } ],
    153: [ function(e, t, r) {
        "use strict";
        var i = e("../utils");
        var n = e("../stream/GenericWorker");
        function a(e, t) {
            n.call(this, "Nodejs stream input adapter for " + e);
            this._upstreamEnded = false;
            this._bindStream(t);
        }
        i.inherits(a, n);
        a.prototype._bindStream = function(e) {
            var t = this;
            this._stream = e;
            e.pause();
            e.on("data", function(e) {
                t.push({
                    data: e,
                    meta: {
                        percent: 0
                    }
                });
            }).on("error", function(e) {
                if (t.isPaused) {
                    this.generatedError = e;
                } else {
                    t.error(e);
                }
            }).on("end", function() {
                if (t.isPaused) {
                    t._upstreamEnded = true;
                } else {
                    t.end();
                }
            });
        };
        a.prototype.pause = function() {
            if (!n.prototype.pause.call(this)) {
                return false;
            }
            this._stream.pause();
            return true;
        };
        a.prototype.resume = function() {
            if (!n.prototype.resume.call(this)) {
                return false;
            }
            if (this._upstreamEnded) {
                this.end();
            } else {
                this._stream.resume();
            }
            return true;
        };
        t.exports = a;
    }, {
        "../stream/GenericWorker": 169,
        "../utils": 173
    } ],
    154: [ function(e, t, r) {
        "use strict";
        var i = e("readable-stream").Readable;
        var n = e("../utils");
        n.inherits(a, i);
        function a(e, t, r) {
            i.call(this, t);
            this._helper = e;
            var n = this;
            e.on("data", function(e, t) {
                if (!n.push(e)) {
                    n._helper.pause();
                }
                if (r) {
                    r(t);
                }
            }).on("error", function(e) {
                n.emit("error", e);
            }).on("end", function() {
                n.push(null);
            });
        }
        a.prototype._read = function() {
            this._helper.resume();
        };
        t.exports = a;
    }, {
        "../utils": 173,
        "readable-stream": 157
    } ],
    155: [ function(e, t, r) {
        (function(e) {
            "use strict";
            t.exports = {
                isNode: typeof e !== "undefined",
                newBufferFrom: function(t, r) {
                    return new e(t, r);
                },
                allocBuffer: function(t) {
                    if (e.alloc) {
                        return e.alloc(t);
                    } else {
                        return new e(t);
                    }
                },
                isBuffer: function(t) {
                    return e.isBuffer(t);
                },
                isStream: function(e) {
                    return e && typeof e.on === "function" && typeof e.pause === "function" && typeof e.resume === "function";
                }
            };
        }).call(this, e("buffer").Buffer);
    }, {
        buffer: 65
    } ],
    156: [ function(e, t, r) {
        "use strict";
        var i = e("./utf8");
        var n = e("./utils");
        var a = e("./stream/GenericWorker");
        var s = e("./stream/StreamHelper");
        var f = e("./defaults");
        var o = e("./compressedObject");
        var c = e("./zipObject");
        var u = e("./generate");
        var h = e("./nodejsUtils");
        var d = e("./nodejs/NodejsStreamInputAdapter");
        var l = function(e, t, r) {
            var i = n.getTypeOf(t), s;
            var u = n.extend(r || {}, f);
            u.date = u.date || new Date();
            if (u.compression !== null) {
                u.compression = u.compression.toUpperCase();
            }
            if (typeof u.unixPermissions === "string") {
                u.unixPermissions = parseInt(u.unixPermissions, 8);
            }
            if (u.unixPermissions && u.unixPermissions & 16384) {
                u.dir = true;
            }
            if (u.dosPermissions && u.dosPermissions & 16) {
                u.dir = true;
            }
            if (u.dir) {
                e = v(e);
            }
            if (u.createFolders && (s = p(e))) {
                b.call(this, s, true);
            }
            var l = i === "string" && u.binary === false && u.base64 === false;
            if (!r || typeof r.binary === "undefined") {
                u.binary = !l;
            }
            var m = t instanceof o && t.uncompressedSize === 0;
            if (m || u.dir || !t || t.length === 0) {
                u.base64 = false;
                u.binary = true;
                t = "";
                u.compression = "STORE";
                i = "string";
            }
            var g = null;
            if (t instanceof o || t instanceof a) {
                g = t;
            } else if (h.isNode && h.isStream(t)) {
                g = new d(e, t);
            } else {
                g = n.prepareContent(e, t, u.binary, u.optimizedBinaryString, u.base64);
            }
            var y = new c(e, g, u);
            this.files[e] = y;
        };
        var p = function(e) {
            if (e.slice(-1) === "/") {
                e = e.substring(0, e.length - 1);
            }
            var t = e.lastIndexOf("/");
            return t > 0 ? e.substring(0, t) : "";
        };
        var v = function(e) {
            if (e.slice(-1) !== "/") {
                e += "/";
            }
            return e;
        };
        var b = function(e, t) {
            t = typeof t !== "undefined" ? t : f.createFolders;
            e = v(e);
            if (!this.files[e]) {
                l.call(this, e, null, {
                    dir: true,
                    createFolders: t
                });
            }
            return this.files[e];
        };
        function m(e) {
            return Object.prototype.toString.call(e) === "[object RegExp]";
        }
        var g = {
            load: function() {
                throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
            },
            forEach: function(e) {
                var t, r, i;
                for (t in this.files) {
                    if (!this.files.hasOwnProperty(t)) {
                        continue;
                    }
                    i = this.files[t];
                    r = t.slice(this.root.length, t.length);
                    if (r && t.slice(0, this.root.length) === this.root) {
                        e(r, i);
                    }
                }
            },
            filter: function(e) {
                var t = [];
                this.forEach(function(r, i) {
                    if (e(r, i)) {
                        t.push(i);
                    }
                });
                return t;
            },
            file: function(e, t, r) {
                if (arguments.length === 1) {
                    if (m(e)) {
                        var i = e;
                        return this.filter(function(e, t) {
                            return !t.dir && i.test(e);
                        });
                    } else {
                        var n = this.files[this.root + e];
                        if (n && !n.dir) {
                            return n;
                        } else {
                            return null;
                        }
                    }
                } else {
                    e = this.root + e;
                    l.call(this, e, t, r);
                }
                return this;
            },
            folder: function(e) {
                if (!e) {
                    return this;
                }
                if (m(e)) {
                    return this.filter(function(t, r) {
                        return r.dir && e.test(t);
                    });
                }
                var t = this.root + e;
                var r = b.call(this, t);
                var i = this.clone();
                i.root = r.name;
                return i;
            },
            remove: function(e) {
                e = this.root + e;
                var t = this.files[e];
                if (!t) {
                    if (e.slice(-1) !== "/") {
                        e += "/";
                    }
                    t = this.files[e];
                }
                if (t && !t.dir) {
                    delete this.files[e];
                } else {
                    var r = this.filter(function(t, r) {
                        return r.name.slice(0, e.length) === e;
                    });
                    for (var i = 0; i < r.length; i++) {
                        delete this.files[r[i].name];
                    }
                }
                return this;
            },
            generate: function(e) {
                throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
            },
            generateInternalStream: function(e) {
                var t, r = {};
                try {
                    r = n.extend(e || {}, {
                        streamFiles: false,
                        compression: "STORE",
                        compressionOptions: null,
                        type: "",
                        platform: "DOS",
                        comment: null,
                        mimeType: "application/zip",
                        encodeFileName: i.utf8encode
                    });
                    r.type = r.type.toLowerCase();
                    r.compression = r.compression.toUpperCase();
                    if (r.type === "binarystring") {
                        r.type = "string";
                    }
                    if (!r.type) {
                        throw new Error("No output type specified.");
                    }
                    n.checkSupport(r.type);
                    if (r.platform === "darwin" || r.platform === "freebsd" || r.platform === "linux" || r.platform === "sunos") {
                        r.platform = "UNIX";
                    }
                    if (r.platform === "win32") {
                        r.platform = "DOS";
                    }
                    var f = r.comment || this.comment || "";
                    t = u.generateWorker(this, r, f);
                } catch (e) {
                    t = new a("error");
                    t.error(e);
                }
                return new s(t, r.type || "string", r.mimeType);
            },
            generateAsync: function(e, t) {
                return this.generateInternalStream(e).accumulate(t);
            },
            generateNodeStream: function(e, t) {
                e = e || {};
                if (!e.type) {
                    e.type = "nodebuffer";
                }
                return this.generateInternalStream(e).toNodejsStream(t);
            }
        };
        t.exports = g;
    }, {
        "./compressedObject": 143,
        "./defaults": 146,
        "./generate": 150,
        "./nodejs/NodejsStreamInputAdapter": 153,
        "./nodejsUtils": 155,
        "./stream/GenericWorker": 169,
        "./stream/StreamHelper": 170,
        "./utf8": 172,
        "./utils": 173,
        "./zipObject": 176
    } ],
    157: [ function(e, t, r) {
        t.exports = e("stream");
    }, {
        stream: 240
    } ],
    158: [ function(e, t, r) {
        "use strict";
        var i = e("./DataReader");
        var n = e("../utils");
        function a(e) {
            i.call(this, e);
            for (var t = 0; t < this.data.length; t++) {
                e[t] = e[t] & 255;
            }
        }
        n.inherits(a, i);
        a.prototype.byteAt = function(e) {
            return this.data[this.zero + e];
        };
        a.prototype.lastIndexOfSignature = function(e) {
            var t = e.charCodeAt(0), r = e.charCodeAt(1), i = e.charCodeAt(2), n = e.charCodeAt(3);
            for (var a = this.length - 4; a >= 0; --a) {
                if (this.data[a] === t && this.data[a + 1] === r && this.data[a + 2] === i && this.data[a + 3] === n) {
                    return a - this.zero;
                }
            }
            return -1;
        };
        a.prototype.readAndCheckSignature = function(e) {
            var t = e.charCodeAt(0), r = e.charCodeAt(1), i = e.charCodeAt(2), n = e.charCodeAt(3), a = this.readData(4);
            return t === a[0] && r === a[1] && i === a[2] && n === a[3];
        };
        a.prototype.readData = function(e) {
            this.checkOffset(e);
            if (e === 0) {
                return [];
            }
            var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
            this.index += e;
            return t;
        };
        t.exports = a;
    }, {
        "../utils": 173,
        "./DataReader": 159
    } ],
    159: [ function(e, t, r) {
        "use strict";
        var i = e("../utils");
        function n(e) {
            this.data = e;
            this.length = e.length;
            this.index = 0;
            this.zero = 0;
        }
        n.prototype = {
            checkOffset: function(e) {
                this.checkIndex(this.index + e);
            },
            checkIndex: function(e) {
                if (this.length < this.zero + e || e < 0) {
                    throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?");
                }
            },
            setIndex: function(e) {
                this.checkIndex(e);
                this.index = e;
            },
            skip: function(e) {
                this.setIndex(this.index + e);
            },
            byteAt: function(e) {},
            readInt: function(e) {
                var t = 0, r;
                this.checkOffset(e);
                for (r = this.index + e - 1; r >= this.index; r--) {
                    t = (t << 8) + this.byteAt(r);
                }
                this.index += e;
                return t;
            },
            readString: function(e) {
                return i.transformTo("string", this.readData(e));
            },
            readData: function(e) {},
            lastIndexOfSignature: function(e) {},
            readAndCheckSignature: function(e) {},
            readDate: function() {
                var e = this.readInt(4);
                return new Date(Date.UTC((e >> 25 & 127) + 1980, (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (e & 31) << 1));
            }
        };
        t.exports = n;
    }, {
        "../utils": 173
    } ],
    160: [ function(e, t, r) {
        "use strict";
        var i = e("./Uint8ArrayReader");
        var n = e("../utils");
        function a(e) {
            i.call(this, e);
        }
        n.inherits(a, i);
        a.prototype.readData = function(e) {
            this.checkOffset(e);
            var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
            this.index += e;
            return t;
        };
        t.exports = a;
    }, {
        "../utils": 173,
        "./Uint8ArrayReader": 162
    } ],
    161: [ function(e, t, r) {
        "use strict";
        var i = e("./DataReader");
        var n = e("../utils");
        function a(e) {
            i.call(this, e);
        }
        n.inherits(a, i);
        a.prototype.byteAt = function(e) {
            return this.data.charCodeAt(this.zero + e);
        };
        a.prototype.lastIndexOfSignature = function(e) {
            return this.data.lastIndexOf(e) - this.zero;
        };
        a.prototype.readAndCheckSignature = function(e) {
            var t = this.readData(4);
            return e === t;
        };
        a.prototype.readData = function(e) {
            this.checkOffset(e);
            var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
            this.index += e;
            return t;
        };
        t.exports = a;
    }, {
        "../utils": 173,
        "./DataReader": 159
    } ],
    162: [ function(e, t, r) {
        "use strict";
        var i = e("./ArrayReader");
        var n = e("../utils");
        function a(e) {
            i.call(this, e);
        }
        n.inherits(a, i);
        a.prototype.readData = function(e) {
            this.checkOffset(e);
            if (e === 0) {
                return new Uint8Array(0);
            }
            var t = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
            this.index += e;
            return t;
        };
        t.exports = a;
    }, {
        "../utils": 173,
        "./ArrayReader": 158
    } ],
    163: [ function(e, t, r) {
        "use strict";
        var i = e("../utils");
        var n = e("../support");
        var a = e("./ArrayReader");
        var s = e("./StringReader");
        var f = e("./NodeBufferReader");
        var o = e("./Uint8ArrayReader");
        t.exports = function(e) {
            var t = i.getTypeOf(e);
            i.checkSupport(t);
            if (t === "string" && !n.uint8array) {
                return new s(e);
            }
            if (t === "nodebuffer") {
                return new f(e);
            }
            if (n.uint8array) {
                return new o(i.transformTo("uint8array", e));
            }
            return new a(i.transformTo("array", e));
        };
    }, {
        "../support": 171,
        "../utils": 173,
        "./ArrayReader": 158,
        "./NodeBufferReader": 160,
        "./StringReader": 161,
        "./Uint8ArrayReader": 162
    } ],
    164: [ function(e, t, r) {
        "use strict";
        r.LOCAL_FILE_HEADER = "PK";
        r.CENTRAL_FILE_HEADER = "PK";
        r.CENTRAL_DIRECTORY_END = "PK";
        r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK";
        r.ZIP64_CENTRAL_DIRECTORY_END = "PK";
        r.DATA_DESCRIPTOR = "PK\b";
    }, {} ],
    165: [ function(e, t, r) {
        "use strict";
        var i = e("./GenericWorker");
        var n = e("../utils");
        function a(e) {
            i.call(this, "ConvertWorker to " + e);
            this.destType = e;
        }
        n.inherits(a, i);
        a.prototype.processChunk = function(e) {
            this.push({
                data: n.transformTo(this.destType, e.data),
                meta: e.meta
            });
        };
        t.exports = a;
    }, {
        "../utils": 173,
        "./GenericWorker": 169
    } ],
    166: [ function(e, t, r) {
        "use strict";
        var i = e("./GenericWorker");
        var n = e("../crc32");
        var a = e("../utils");
        function s() {
            i.call(this, "Crc32Probe");
            this.withStreamInfo("crc32", 0);
        }
        a.inherits(s, i);
        s.prototype.processChunk = function(e) {
            this.streamInfo.crc32 = n(e.data, this.streamInfo.crc32 || 0);
            this.push(e);
        };
        t.exports = s;
    }, {
        "../crc32": 145,
        "../utils": 173,
        "./GenericWorker": 169
    } ],
    167: [ function(e, t, r) {
        "use strict";
        var i = e("../utils");
        var n = e("./GenericWorker");
        function a(e) {
            n.call(this, "DataLengthProbe for " + e);
            this.propName = e;
            this.withStreamInfo(e, 0);
        }
        i.inherits(a, n);
        a.prototype.processChunk = function(e) {
            if (e) {
                var t = this.streamInfo[this.propName] || 0;
                this.streamInfo[this.propName] = t + e.data.length;
            }
            n.prototype.processChunk.call(this, e);
        };
        t.exports = a;
    }, {
        "../utils": 173,
        "./GenericWorker": 169
    } ],
    168: [ function(e, t, r) {
        "use strict";
        var i = e("../utils");
        var n = e("./GenericWorker");
        var a = 16 * 1024;
        function s(e) {
            n.call(this, "DataWorker");
            var t = this;
            this.dataIsReady = false;
            this.index = 0;
            this.max = 0;
            this.data = null;
            this.type = "";
            this._tickScheduled = false;
            e.then(function(e) {
                t.dataIsReady = true;
                t.data = e;
                t.max = e && e.length || 0;
                t.type = i.getTypeOf(e);
                if (!t.isPaused) {
                    t._tickAndRepeat();
                }
            }, function(e) {
                t.error(e);
            });
        }
        i.inherits(s, n);
        s.prototype.cleanUp = function() {
            n.prototype.cleanUp.call(this);
            this.data = null;
        };
        s.prototype.resume = function() {
            if (!n.prototype.resume.call(this)) {
                return false;
            }
            if (!this._tickScheduled && this.dataIsReady) {
                this._tickScheduled = true;
                i.delay(this._tickAndRepeat, [], this);
            }
            return true;
        };
        s.prototype._tickAndRepeat = function() {
            this._tickScheduled = false;
            if (this.isPaused || this.isFinished) {
                return;
            }
            this._tick();
            if (!this.isFinished) {
                i.delay(this._tickAndRepeat, [], this);
                this._tickScheduled = true;
            }
        };
        s.prototype._tick = function() {
            if (this.isPaused || this.isFinished) {
                return false;
            }
            var e = a;
            var t = null, r = Math.min(this.max, this.index + e);
            if (this.index >= this.max) {
                return this.end();
            } else {
                switch (this.type) {
                  case "string":
                    t = this.data.substring(this.index, r);
                    break;

                  case "uint8array":
                    t = this.data.subarray(this.index, r);
                    break;

                  case "array":
                  case "nodebuffer":
                    t = this.data.slice(this.index, r);
                    break;
                }
                this.index = r;
                return this.push({
                    data: t,
                    meta: {
                        percent: this.max ? this.index / this.max * 100 : 0
                    }
                });
            }
        };
        t.exports = s;
    }, {
        "../utils": 173,
        "./GenericWorker": 169
    } ],
    169: [ function(e, t, r) {
        "use strict";
        function i(e) {
            this.name = e || "default";
            this.streamInfo = {};
            this.generatedError = null;
            this.extraStreamInfo = {};
            this.isPaused = true;
            this.isFinished = false;
            this.isLocked = false;
            this._listeners = {
                data: [],
                end: [],
                error: []
            };
            this.previous = null;
        }
        i.prototype = {
            push: function(e) {
                this.emit("data", e);
            },
            end: function() {
                if (this.isFinished) {
                    return false;
                }
                this.flush();
                try {
                    this.emit("end");
                    this.cleanUp();
                    this.isFinished = true;
                } catch (e) {
                    this.emit("error", e);
                }
                return true;
            },
            error: function(e) {
                if (this.isFinished) {
                    return false;
                }
                if (this.isPaused) {
                    this.generatedError = e;
                } else {
                    this.isFinished = true;
                    this.emit("error", e);
                    if (this.previous) {
                        this.previous.error(e);
                    }
                    this.cleanUp();
                }
                return true;
            },
            on: function(e, t) {
                this._listeners[e].push(t);
                return this;
            },
            cleanUp: function() {
                this.streamInfo = this.generatedError = this.extraStreamInfo = null;
                this._listeners = [];
            },
            emit: function(e, t) {
                if (this._listeners[e]) {
                    for (var r = 0; r < this._listeners[e].length; r++) {
                        this._listeners[e][r].call(this, t);
                    }
                }
            },
            pipe: function(e) {
                return e.registerPrevious(this);
            },
            registerPrevious: function(e) {
                if (this.isLocked) {
                    throw new Error("The stream '" + this + "' has already been used.");
                }
                this.streamInfo = e.streamInfo;
                this.mergeStreamInfo();
                this.previous = e;
                var t = this;
                e.on("data", function(e) {
                    t.processChunk(e);
                });
                e.on("end", function() {
                    t.end();
                });
                e.on("error", function(e) {
                    t.error(e);
                });
                return this;
            },
            pause: function() {
                if (this.isPaused || this.isFinished) {
                    return false;
                }
                this.isPaused = true;
                if (this.previous) {
                    this.previous.pause();
                }
                return true;
            },
            resume: function() {
                if (!this.isPaused || this.isFinished) {
                    return false;
                }
                this.isPaused = false;
                var e = false;
                if (this.generatedError) {
                    this.error(this.generatedError);
                    e = true;
                }
                if (this.previous) {
                    this.previous.resume();
                }
                return !e;
            },
            flush: function() {},
            processChunk: function(e) {
                this.push(e);
            },
            withStreamInfo: function(e, t) {
                this.extraStreamInfo[e] = t;
                this.mergeStreamInfo();
                return this;
            },
            mergeStreamInfo: function() {
                for (var e in this.extraStreamInfo) {
                    if (!this.extraStreamInfo.hasOwnProperty(e)) {
                        continue;
                    }
                    this.streamInfo[e] = this.extraStreamInfo[e];
                }
            },
            lock: function() {
                if (this.isLocked) {
                    throw new Error("The stream '" + this + "' has already been used.");
                }
                this.isLocked = true;
                if (this.previous) {
                    this.previous.lock();
                }
            },
            toString: function() {
                var e = "Worker " + this.name;
                if (this.previous) {
                    return this.previous + " -> " + e;
                } else {
                    return e;
                }
            }
        };
        t.exports = i;
    }, {} ],
    170: [ function(e, t, r) {
        (function(r) {
            "use strict";
            var i = e("../utils");
            var n = e("./ConvertWorker");
            var a = e("./GenericWorker");
            var s = e("../base64");
            var f = e("../support");
            var o = e("../external");
            var c = null;
            if (f.nodestream) {
                try {
                    c = e("../nodejs/NodejsStreamOutputAdapter");
                } catch (e) {}
            }
            function u(e, t, r) {
                switch (e) {
                  case "blob":
                    return i.newBlob(i.transformTo("arraybuffer", t), r);

                  case "base64":
                    return s.encode(t);

                  default:
                    return i.transformTo(e, t);
                }
            }
            function h(e, t) {
                var i, n = 0, a = null, s = 0;
                for (i = 0; i < t.length; i++) {
                    s += t[i].length;
                }
                switch (e) {
                  case "string":
                    return t.join("");

                  case "array":
                    return Array.prototype.concat.apply([], t);

                  case "uint8array":
                    a = new Uint8Array(s);
                    for (i = 0; i < t.length; i++) {
                        a.set(t[i], n);
                        n += t[i].length;
                    }
                    return a;

                  case "nodebuffer":
                    return r.concat(t);

                  default:
                    throw new Error("concat : unsupported type '" + e + "'");
                }
            }
            function d(e, t) {
                return new o.Promise(function(r, i) {
                    var n = [];
                    var a = e._internalType, s = e._outputType, f = e._mimeType;
                    e.on("data", function(e, r) {
                        n.push(e);
                        if (t) {
                            t(r);
                        }
                    }).on("error", function(e) {
                        n = [];
                        i(e);
                    }).on("end", function() {
                        try {
                            var e = u(s, h(a, n), f);
                            r(e);
                        } catch (e) {
                            i(e);
                        }
                        n = [];
                    }).resume();
                });
            }
            function l(e, t, r) {
                var s = t;
                switch (t) {
                  case "blob":
                  case "arraybuffer":
                    s = "uint8array";
                    break;

                  case "base64":
                    s = "string";
                    break;
                }
                try {
                    this._internalType = s;
                    this._outputType = t;
                    this._mimeType = r;
                    i.checkSupport(s);
                    this._worker = e.pipe(new n(s));
                    e.lock();
                } catch (e) {
                    this._worker = new a("error");
                    this._worker.error(e);
                }
            }
            l.prototype = {
                accumulate: function(e) {
                    return d(this, e);
                },
                on: function(e, t) {
                    var r = this;
                    if (e === "data") {
                        this._worker.on(e, function(e) {
                            t.call(r, e.data, e.meta);
                        });
                    } else {
                        this._worker.on(e, function() {
                            i.delay(t, arguments, r);
                        });
                    }
                    return this;
                },
                resume: function() {
                    i.delay(this._worker.resume, [], this._worker);
                    return this;
                },
                pause: function() {
                    this._worker.pause();
                    return this;
                },
                toNodejsStream: function(e) {
                    i.checkSupport("nodestream");
                    if (this._outputType !== "nodebuffer") {
                        throw new Error(this._outputType + " is not supported by this method");
                    }
                    return new c(this, {
                        objectMode: this._outputType !== "nodebuffer"
                    }, e);
                }
            };
            t.exports = l;
        }).call(this, e("buffer").Buffer);
    }, {
        "../base64": 142,
        "../external": 147,
        "../nodejs/NodejsStreamOutputAdapter": 154,
        "../support": 171,
        "../utils": 173,
        "./ConvertWorker": 165,
        "./GenericWorker": 169,
        buffer: 65
    } ],
    171: [ function(e, t, r) {
        (function(t) {
            "use strict";
            r.base64 = true;
            r.array = true;
            r.string = true;
            r.arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
            r.nodebuffer = typeof t !== "undefined";
            r.uint8array = typeof Uint8Array !== "undefined";
            if (typeof ArrayBuffer === "undefined") {
                r.blob = false;
            } else {
                var i = new ArrayBuffer(0);
                try {
                    r.blob = new Blob([ i ], {
                        type: "application/zip"
                    }).size === 0;
                } catch (e) {
                    try {
                        var n = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
                        var a = new n();
                        a.append(i);
                        r.blob = a.getBlob("application/zip").size === 0;
                    } catch (e) {
                        r.blob = false;
                    }
                }
            }
            try {
                r.nodestream = !!e("readable-stream").Readable;
            } catch (e) {
                r.nodestream = false;
            }
        }).call(this, e("buffer").Buffer);
    }, {
        buffer: 65,
        "readable-stream": 157
    } ],
    172: [ function(e, t, r) {
        "use strict";
        var i = e("./utils");
        var n = e("./support");
        var a = e("./nodejsUtils");
        var s = e("./stream/GenericWorker");
        var f = new Array(256);
        for (var o = 0; o < 256; o++) {
            f[o] = o >= 252 ? 6 : o >= 248 ? 5 : o >= 240 ? 4 : o >= 224 ? 3 : o >= 192 ? 2 : 1;
        }
        f[254] = f[254] = 1;
        var c = function(e) {
            var t, r, i, a, s, f = e.length, o = 0;
            for (a = 0; a < f; a++) {
                r = e.charCodeAt(a);
                if ((r & 64512) === 55296 && a + 1 < f) {
                    i = e.charCodeAt(a + 1);
                    if ((i & 64512) === 56320) {
                        r = 65536 + (r - 55296 << 10) + (i - 56320);
                        a++;
                    }
                }
                o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
            }
            if (n.uint8array) {
                t = new Uint8Array(o);
            } else {
                t = new Array(o);
            }
            for (s = 0, a = 0; s < o; a++) {
                r = e.charCodeAt(a);
                if ((r & 64512) === 55296 && a + 1 < f) {
                    i = e.charCodeAt(a + 1);
                    if ((i & 64512) === 56320) {
                        r = 65536 + (r - 55296 << 10) + (i - 56320);
                        a++;
                    }
                }
                if (r < 128) {
                    t[s++] = r;
                } else if (r < 2048) {
                    t[s++] = 192 | r >>> 6;
                    t[s++] = 128 | r & 63;
                } else if (r < 65536) {
                    t[s++] = 224 | r >>> 12;
                    t[s++] = 128 | r >>> 6 & 63;
                    t[s++] = 128 | r & 63;
                } else {
                    t[s++] = 240 | r >>> 18;
                    t[s++] = 128 | r >>> 12 & 63;
                    t[s++] = 128 | r >>> 6 & 63;
                    t[s++] = 128 | r & 63;
                }
            }
            return t;
        };
        var u = function(e, t) {
            var r;
            t = t || e.length;
            if (t > e.length) {
                t = e.length;
            }
            r = t - 1;
            while (r >= 0 && (e[r] & 192) === 128) {
                r--;
            }
            if (r < 0) {
                return t;
            }
            if (r === 0) {
                return t;
            }
            return r + f[e[r]] > t ? r : t;
        };
        var h = function(e) {
            var t, r, n, a, s;
            var o = e.length;
            var c = new Array(o * 2);
            for (n = 0, r = 0; r < o; ) {
                a = e[r++];
                if (a < 128) {
                    c[n++] = a;
                    continue;
                }
                s = f[a];
                if (s > 4) {
                    c[n++] = 65533;
                    r += s - 1;
                    continue;
                }
                a &= s === 2 ? 31 : s === 3 ? 15 : 7;
                while (s > 1 && r < o) {
                    a = a << 6 | e[r++] & 63;
                    s--;
                }
                if (s > 1) {
                    c[n++] = 65533;
                    continue;
                }
                if (a < 65536) {
                    c[n++] = a;
                } else {
                    a -= 65536;
                    c[n++] = 55296 | a >> 10 & 1023;
                    c[n++] = 56320 | a & 1023;
                }
            }
            if (c.length !== n) {
                if (c.subarray) {
                    c = c.subarray(0, n);
                } else {
                    c.length = n;
                }
            }
            return i.applyFromCharCode(c);
        };
        r.utf8encode = function e(t) {
            if (n.nodebuffer) {
                return a.newBufferFrom(t, "utf-8");
            }
            return c(t);
        };
        r.utf8decode = function e(t) {
            if (n.nodebuffer) {
                return i.transformTo("nodebuffer", t).toString("utf-8");
            }
            t = i.transformTo(n.uint8array ? "uint8array" : "array", t);
            return h(t);
        };
        function d() {
            s.call(this, "utf-8 decode");
            this.leftOver = null;
        }
        i.inherits(d, s);
        d.prototype.processChunk = function(e) {
            var t = i.transformTo(n.uint8array ? "uint8array" : "array", e.data);
            if (this.leftOver && this.leftOver.length) {
                if (n.uint8array) {
                    var a = t;
                    t = new Uint8Array(a.length + this.leftOver.length);
                    t.set(this.leftOver, 0);
                    t.set(a, this.leftOver.length);
                } else {
                    t = this.leftOver.concat(t);
                }
                this.leftOver = null;
            }
            var s = u(t);
            var f = t;
            if (s !== t.length) {
                if (n.uint8array) {
                    f = t.subarray(0, s);
                    this.leftOver = t.subarray(s, t.length);
                } else {
                    f = t.slice(0, s);
                    this.leftOver = t.slice(s, t.length);
                }
            }
            this.push({
                data: r.utf8decode(f),
                meta: e.meta
            });
        };
        d.prototype.flush = function() {
            if (this.leftOver && this.leftOver.length) {
                this.push({
                    data: r.utf8decode(this.leftOver),
                    meta: {}
                });
                this.leftOver = null;
            }
        };
        r.Utf8DecodeWorker = d;
        function l() {
            s.call(this, "utf-8 encode");
        }
        i.inherits(l, s);
        l.prototype.processChunk = function(e) {
            this.push({
                data: r.utf8encode(e.data),
                meta: e.meta
            });
        };
        r.Utf8EncodeWorker = l;
    }, {
        "./nodejsUtils": 155,
        "./stream/GenericWorker": 169,
        "./support": 171,
        "./utils": 173
    } ],
    173: [ function(e, t, r) {
        "use strict";
        var i = e("./support");
        var n = e("./base64");
        var a = e("./nodejsUtils");
        var s = e("core-js/library/fn/set-immediate");
        var f = e("./external");
        function o(e) {
            var t = null;
            if (i.uint8array) {
                t = new Uint8Array(e.length);
            } else {
                t = new Array(e.length);
            }
            return u(e, t);
        }
        r.newBlob = function(e, t) {
            r.checkSupport("blob");
            try {
                return new Blob([ e ], {
                    type: t
                });
            } catch (r) {
                try {
                    var i = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
                    var n = new i();
                    n.append(e);
                    return n.getBlob(t);
                } catch (e) {
                    throw new Error("Bug : can't construct the Blob.");
                }
            }
        };
        function c(e) {
            return e;
        }
        function u(e, t) {
            for (var r = 0; r < e.length; ++r) {
                t[r] = e.charCodeAt(r) & 255;
            }
            return t;
        }
        var h = {
            stringifyByChunk: function(e, t, r) {
                var i = [], n = 0, a = e.length;
                if (a <= r) {
                    return String.fromCharCode.apply(null, e);
                }
                while (n < a) {
                    if (t === "array" || t === "nodebuffer") {
                        i.push(String.fromCharCode.apply(null, e.slice(n, Math.min(n + r, a))));
                    } else {
                        i.push(String.fromCharCode.apply(null, e.subarray(n, Math.min(n + r, a))));
                    }
                    n += r;
                }
                return i.join("");
            },
            stringifyByChar: function(e) {
                var t = "";
                for (var r = 0; r < e.length; r++) {
                    t += String.fromCharCode(e[r]);
                }
                return t;
            },
            applyCanBeUsed: {
                uint8array: function() {
                    try {
                        return i.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
                    } catch (e) {
                        return false;
                    }
                }(),
                nodebuffer: function() {
                    try {
                        return i.nodebuffer && String.fromCharCode.apply(null, a.allocBuffer(1)).length === 1;
                    } catch (e) {
                        return false;
                    }
                }()
            }
        };
        function d(e) {
            var t = 65536, i = r.getTypeOf(e), n = true;
            if (i === "uint8array") {
                n = h.applyCanBeUsed.uint8array;
            } else if (i === "nodebuffer") {
                n = h.applyCanBeUsed.nodebuffer;
            }
            if (n) {
                while (t > 1) {
                    try {
                        return h.stringifyByChunk(e, i, t);
                    } catch (e) {
                        t = Math.floor(t / 2);
                    }
                }
            }
            return h.stringifyByChar(e);
        }
        r.applyFromCharCode = d;
        function l(e, t) {
            for (var r = 0; r < e.length; r++) {
                t[r] = e[r];
            }
            return t;
        }
        var p = {};
        p["string"] = {
            string: c,
            array: function(e) {
                return u(e, new Array(e.length));
            },
            arraybuffer: function(e) {
                return p["string"]["uint8array"](e).buffer;
            },
            uint8array: function(e) {
                return u(e, new Uint8Array(e.length));
            },
            nodebuffer: function(e) {
                return u(e, a.allocBuffer(e.length));
            }
        };
        p["array"] = {
            string: d,
            array: c,
            arraybuffer: function(e) {
                return new Uint8Array(e).buffer;
            },
            uint8array: function(e) {
                return new Uint8Array(e);
            },
            nodebuffer: function(e) {
                return a.newBufferFrom(e);
            }
        };
        p["arraybuffer"] = {
            string: function(e) {
                return d(new Uint8Array(e));
            },
            array: function(e) {
                return l(new Uint8Array(e), new Array(e.byteLength));
            },
            arraybuffer: c,
            uint8array: function(e) {
                return new Uint8Array(e);
            },
            nodebuffer: function(e) {
                return a.newBufferFrom(new Uint8Array(e));
            }
        };
        p["uint8array"] = {
            string: d,
            array: function(e) {
                return l(e, new Array(e.length));
            },
            arraybuffer: function(e) {
                return e.buffer;
            },
            uint8array: c,
            nodebuffer: function(e) {
                return a.newBufferFrom(e);
            }
        };
        p["nodebuffer"] = {
            string: d,
            array: function(e) {
                return l(e, new Array(e.length));
            },
            arraybuffer: function(e) {
                return p["nodebuffer"]["uint8array"](e).buffer;
            },
            uint8array: function(e) {
                return l(e, new Uint8Array(e.length));
            },
            nodebuffer: c
        };
        r.transformTo = function(e, t) {
            if (!t) {
                t = "";
            }
            if (!e) {
                return t;
            }
            r.checkSupport(e);
            var i = r.getTypeOf(t);
            var n = p[i][e](t);
            return n;
        };
        r.getTypeOf = function(e) {
            if (typeof e === "string") {
                return "string";
            }
            if (Object.prototype.toString.call(e) === "[object Array]") {
                return "array";
            }
            if (i.nodebuffer && a.isBuffer(e)) {
                return "nodebuffer";
            }
            if (i.uint8array && e instanceof Uint8Array) {
                return "uint8array";
            }
            if (i.arraybuffer && e instanceof ArrayBuffer) {
                return "arraybuffer";
            }
        };
        r.checkSupport = function(e) {
            var t = i[e.toLowerCase()];
            if (!t) {
                throw new Error(e + " is not supported by this platform");
            }
        };
        r.MAX_VALUE_16BITS = 65535;
        r.MAX_VALUE_32BITS = -1;
        r.pretty = function(e) {
            var t = "", r, i;
            for (i = 0; i < (e || "").length; i++) {
                r = e.charCodeAt(i);
                t += "\\x" + (r < 16 ? "0" : "") + r.toString(16).toUpperCase();
            }
            return t;
        };
        r.delay = function(e, t, r) {
            s(function() {
                e.apply(r || null, t || []);
            });
        };
        r.inherits = function(e, t) {
            var r = function() {};
            r.prototype = t.prototype;
            e.prototype = new r();
        };
        r.extend = function() {
            var e = {}, t, r;
            for (t = 0; t < arguments.length; t++) {
                for (r in arguments[t]) {
                    if (arguments[t].hasOwnProperty(r) && typeof e[r] === "undefined") {
                        e[r] = arguments[t][r];
                    }
                }
            }
            return e;
        };
        r.prepareContent = function(e, t, a, s, c) {
            var u = f.Promise.resolve(t).then(function(e) {
                var t = i.blob && (e instanceof Blob || [ "[object File]", "[object Blob]" ].indexOf(Object.prototype.toString.call(e)) !== -1);
                if (t && typeof FileReader !== "undefined") {
                    return new f.Promise(function(t, r) {
                        var i = new FileReader();
                        i.onload = function(e) {
                            t(e.target.result);
                        };
                        i.onerror = function(e) {
                            r(e.target.error);
                        };
                        i.readAsArrayBuffer(e);
                    });
                } else {
                    return e;
                }
            });
            return u.then(function(t) {
                var i = r.getTypeOf(t);
                if (!i) {
                    return f.Promise.reject(new Error("Can't read the data of '" + e + "'. Is it " + "in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
                }
                if (i === "arraybuffer") {
                    t = r.transformTo("uint8array", t);
                } else if (i === "string") {
                    if (c) {
                        t = n.decode(t);
                    } else if (a) {
                        if (s !== true) {
                            t = o(t);
                        }
                    }
                }
                return t;
            });
        };
    }, {
        "./base64": 142,
        "./external": 147,
        "./nodejsUtils": 155,
        "./support": 171,
        "core-js/library/fn/set-immediate": 67
    } ],
    174: [ function(e, t, r) {
        "use strict";
        var i = e("./reader/readerFor");
        var n = e("./utils");
        var a = e("./signature");
        var s = e("./zipEntry");
        var f = e("./utf8");
        var o = e("./support");
        function c(e) {
            this.files = [];
            this.loadOptions = e;
        }
        c.prototype = {
            checkSignature: function(e) {
                if (!this.reader.readAndCheckSignature(e)) {
                    this.reader.index -= 4;
                    var t = this.reader.readString(4);
                    throw new Error("Corrupted zip or bug: unexpected signature " + "(" + n.pretty(t) + ", expected " + n.pretty(e) + ")");
                }
            },
            isSignature: function(e, t) {
                var r = this.reader.index;
                this.reader.setIndex(e);
                var i = this.reader.readString(4);
                var n = i === t;
                this.reader.setIndex(r);
                return n;
            },
            readBlockEndOfCentral: function() {
                this.diskNumber = this.reader.readInt(2);
                this.diskWithCentralDirStart = this.reader.readInt(2);
                this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
                this.centralDirRecords = this.reader.readInt(2);
                this.centralDirSize = this.reader.readInt(4);
                this.centralDirOffset = this.reader.readInt(4);
                this.zipCommentLength = this.reader.readInt(2);
                var e = this.reader.readData(this.zipCommentLength);
                var t = o.uint8array ? "uint8array" : "array";
                var r = n.transformTo(t, e);
                this.zipComment = this.loadOptions.decodeFileName(r);
            },
            readBlockZip64EndOfCentral: function() {
                this.zip64EndOfCentralSize = this.reader.readInt(8);
                this.reader.skip(4);
                this.diskNumber = this.reader.readInt(4);
                this.diskWithCentralDirStart = this.reader.readInt(4);
                this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
                this.centralDirRecords = this.reader.readInt(8);
                this.centralDirSize = this.reader.readInt(8);
                this.centralDirOffset = this.reader.readInt(8);
                this.zip64ExtensibleData = {};
                var e = this.zip64EndOfCentralSize - 44, t = 0, r, i, n;
                while (t < e) {
                    r = this.reader.readInt(2);
                    i = this.reader.readInt(4);
                    n = this.reader.readData(i);
                    this.zip64ExtensibleData[r] = {
                        id: r,
                        length: i,
                        value: n
                    };
                }
            },
            readBlockZip64EndOfCentralLocator: function() {
                this.diskWithZip64CentralDirStart = this.reader.readInt(4);
                this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
                this.disksCount = this.reader.readInt(4);
                if (this.disksCount > 1) {
                    throw new Error("Multi-volumes zip are not supported");
                }
            },
            readLocalFiles: function() {
                var e, t;
                for (e = 0; e < this.files.length; e++) {
                    t = this.files[e];
                    this.reader.setIndex(t.localHeaderOffset);
                    this.checkSignature(a.LOCAL_FILE_HEADER);
                    t.readLocalPart(this.reader);
                    t.handleUTF8();
                    t.processAttributes();
                }
            },
            readCentralDir: function() {
                var e;
                this.reader.setIndex(this.centralDirOffset);
                while (this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER)) {
                    e = new s({
                        zip64: this.zip64
                    }, this.loadOptions);
                    e.readCentralPart(this.reader);
                    this.files.push(e);
                }
                if (this.centralDirRecords !== this.files.length) {
                    if (this.centralDirRecords !== 0 && this.files.length === 0) {
                        throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
                    } else {}
                }
            },
            readEndOfCentral: function() {
                var e = this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);
                if (e < 0) {
                    var t = !this.isSignature(0, a.LOCAL_FILE_HEADER);
                    if (t) {
                        throw new Error("Can't find end of central directory : is this a zip file ? " + "If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
                    } else {
                        throw new Error("Corrupted zip: can't find end of central directory");
                    }
                }
                this.reader.setIndex(e);
                var r = e;
                this.checkSignature(a.CENTRAL_DIRECTORY_END);
                this.readBlockEndOfCentral();
                if (this.diskNumber === n.MAX_VALUE_16BITS || this.diskWithCentralDirStart === n.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === n.MAX_VALUE_16BITS || this.centralDirRecords === n.MAX_VALUE_16BITS || this.centralDirSize === n.MAX_VALUE_32BITS || this.centralDirOffset === n.MAX_VALUE_32BITS) {
                    this.zip64 = true;
                    e = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
                    if (e < 0) {
                        throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
                    }
                    this.reader.setIndex(e);
                    this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
                    this.readBlockZip64EndOfCentralLocator();
                    if (!this.isSignature(this.relativeOffsetEndOfZip64CentralDir, a.ZIP64_CENTRAL_DIRECTORY_END)) {
                        this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END);
                        if (this.relativeOffsetEndOfZip64CentralDir < 0) {
                            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
                        }
                    }
                    this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
                    this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END);
                    this.readBlockZip64EndOfCentral();
                }
                var i = this.centralDirOffset + this.centralDirSize;
                if (this.zip64) {
                    i += 20;
                    i += 12 + this.zip64EndOfCentralSize;
                }
                var s = r - i;
                if (s > 0) {
                    if (this.isSignature(r, a.CENTRAL_FILE_HEADER)) {} else {
                        this.reader.zero = s;
                    }
                } else if (s < 0) {
                    throw new Error("Corrupted zip: missing " + Math.abs(s) + " bytes.");
                }
            },
            prepareReader: function(e) {
                this.reader = i(e);
            },
            load: function(e) {
                this.prepareReader(e);
                this.readEndOfCentral();
                this.readCentralDir();
                this.readLocalFiles();
            }
        };
        t.exports = c;
    }, {
        "./reader/readerFor": 163,
        "./signature": 164,
        "./support": 171,
        "./utf8": 172,
        "./utils": 173,
        "./zipEntry": 175
    } ],
    175: [ function(e, t, r) {
        "use strict";
        var i = e("./reader/readerFor");
        var n = e("./utils");
        var a = e("./compressedObject");
        var s = e("./crc32");
        var f = e("./utf8");
        var o = e("./compressions");
        var c = e("./support");
        var u = 0;
        var h = 3;
        var d = function(e) {
            for (var t in o) {
                if (!o.hasOwnProperty(t)) {
                    continue;
                }
                if (o[t].magic === e) {
                    return o[t];
                }
            }
            return null;
        };
        function l(e, t) {
            this.options = e;
            this.loadOptions = t;
        }
        l.prototype = {
            isEncrypted: function() {
                return (this.bitFlag & 1) === 1;
            },
            useUTF8: function() {
                return (this.bitFlag & 2048) === 2048;
            },
            readLocalPart: function(e) {
                var t, r;
                e.skip(22);
                this.fileNameLength = e.readInt(2);
                r = e.readInt(2);
                this.fileName = e.readData(this.fileNameLength);
                e.skip(r);
                if (this.compressedSize === -1 || this.uncompressedSize === -1) {
                    throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory " + "(compressedSize === -1 || uncompressedSize === -1)");
                }
                t = d(this.compressionMethod);
                if (t === null) {
                    throw new Error("Corrupted zip : compression " + n.pretty(this.compressionMethod) + " unknown (inner file : " + n.transformTo("string", this.fileName) + ")");
                }
                this.decompressed = new a(this.compressedSize, this.uncompressedSize, this.crc32, t, e.readData(this.compressedSize));
            },
            readCentralPart: function(e) {
                this.versionMadeBy = e.readInt(2);
                e.skip(2);
                this.bitFlag = e.readInt(2);
                this.compressionMethod = e.readString(2);
                this.date = e.readDate();
                this.crc32 = e.readInt(4);
                this.compressedSize = e.readInt(4);
                this.uncompressedSize = e.readInt(4);
                var t = e.readInt(2);
                this.extraFieldsLength = e.readInt(2);
                this.fileCommentLength = e.readInt(2);
                this.diskNumberStart = e.readInt(2);
                this.internalFileAttributes = e.readInt(2);
                this.externalFileAttributes = e.readInt(4);
                this.localHeaderOffset = e.readInt(4);
                if (this.isEncrypted()) {
                    throw new Error("Encrypted zip are not supported");
                }
                e.skip(t);
                this.readExtraFields(e);
                this.parseZIP64ExtraField(e);
                this.fileComment = e.readData(this.fileCommentLength);
            },
            processAttributes: function() {
                this.unixPermissions = null;
                this.dosPermissions = null;
                var e = this.versionMadeBy >> 8;
                this.dir = this.externalFileAttributes & 16 ? true : false;
                if (e === u) {
                    this.dosPermissions = this.externalFileAttributes & 63;
                }
                if (e === h) {
                    this.unixPermissions = this.externalFileAttributes >> 16 & 65535;
                }
                if (!this.dir && this.fileNameStr.slice(-1) === "/") {
                    this.dir = true;
                }
            },
            parseZIP64ExtraField: function(e) {
                if (!this.extraFields[1]) {
                    return;
                }
                var t = i(this.extraFields[1].value);
                if (this.uncompressedSize === n.MAX_VALUE_32BITS) {
                    this.uncompressedSize = t.readInt(8);
                }
                if (this.compressedSize === n.MAX_VALUE_32BITS) {
                    this.compressedSize = t.readInt(8);
                }
                if (this.localHeaderOffset === n.MAX_VALUE_32BITS) {
                    this.localHeaderOffset = t.readInt(8);
                }
                if (this.diskNumberStart === n.MAX_VALUE_32BITS) {
                    this.diskNumberStart = t.readInt(4);
                }
            },
            readExtraFields: function(e) {
                var t = e.index + this.extraFieldsLength, r, i, n;
                if (!this.extraFields) {
                    this.extraFields = {};
                }
                while (e.index < t) {
                    r = e.readInt(2);
                    i = e.readInt(2);
                    n = e.readData(i);
                    this.extraFields[r] = {
                        id: r,
                        length: i,
                        value: n
                    };
                }
            },
            handleUTF8: function() {
                var e = c.uint8array ? "uint8array" : "array";
                if (this.useUTF8()) {
                    this.fileNameStr = f.utf8decode(this.fileName);
                    this.fileCommentStr = f.utf8decode(this.fileComment);
                } else {
                    var t = this.findExtraFieldUnicodePath();
                    if (t !== null) {
                        this.fileNameStr = t;
                    } else {
                        var r = n.transformTo(e, this.fileName);
                        this.fileNameStr = this.loadOptions.decodeFileName(r);
                    }
                    var i = this.findExtraFieldUnicodeComment();
                    if (i !== null) {
                        this.fileCommentStr = i;
                    } else {
                        var a = n.transformTo(e, this.fileComment);
                        this.fileCommentStr = this.loadOptions.decodeFileName(a);
                    }
                }
            },
            findExtraFieldUnicodePath: function() {
                var e = this.extraFields[28789];
                if (e) {
                    var t = i(e.value);
                    if (t.readInt(1) !== 1) {
                        return null;
                    }
                    if (s(this.fileName) !== t.readInt(4)) {
                        return null;
                    }
                    return f.utf8decode(t.readData(e.length - 5));
                }
                return null;
            },
            findExtraFieldUnicodeComment: function() {
                var e = this.extraFields[25461];
                if (e) {
                    var t = i(e.value);
                    if (t.readInt(1) !== 1) {
                        return null;
                    }
                    if (s(this.fileComment) !== t.readInt(4)) {
                        return null;
                    }
                    return f.utf8decode(t.readData(e.length - 5));
                }
                return null;
            }
        };
        t.exports = l;
    }, {
        "./compressedObject": 143,
        "./compressions": 144,
        "./crc32": 145,
        "./reader/readerFor": 163,
        "./support": 171,
        "./utf8": 172,
        "./utils": 173
    } ],
    176: [ function(e, t, r) {
        "use strict";
        var i = e("./stream/StreamHelper");
        var n = e("./stream/DataWorker");
        var a = e("./utf8");
        var s = e("./compressedObject");
        var f = e("./stream/GenericWorker");
        var o = function(e, t, r) {
            this.name = e;
            this.dir = r.dir;
            this.date = r.date;
            this.comment = r.comment;
            this.unixPermissions = r.unixPermissions;
            this.dosPermissions = r.dosPermissions;
            this._data = t;
            this._dataBinary = r.binary;
            this.options = {
                compression: r.compression,
                compressionOptions: r.compressionOptions
            };
        };
        o.prototype = {
            internalStream: function(e) {
                var t = null, r = "string";
                try {
                    if (!e) {
                        throw new Error("No output type specified.");
                    }
                    r = e.toLowerCase();
                    var n = r === "string" || r === "text";
                    if (r === "binarystring" || r === "text") {
                        r = "string";
                    }
                    t = this._decompressWorker();
                    var s = !this._dataBinary;
                    if (s && !n) {
                        t = t.pipe(new a.Utf8EncodeWorker());
                    }
                    if (!s && n) {
                        t = t.pipe(new a.Utf8DecodeWorker());
                    }
                } catch (e) {
                    t = new f("error");
                    t.error(e);
                }
                return new i(t, r, "");
            },
            async: function(e, t) {
                return this.internalStream(e).accumulate(t);
            },
            nodeStream: function(e, t) {
                return this.internalStream(e || "nodebuffer").toNodejsStream(t);
            },
            _compressWorker: function(e, t) {
                if (this._data instanceof s && this._data.compression.magic === e.magic) {
                    return this._data.getCompressedWorker();
                } else {
                    var r = this._decompressWorker();
                    if (!this._dataBinary) {
                        r = r.pipe(new a.Utf8EncodeWorker());
                    }
                    return s.createWorkerFrom(r, e, t);
                }
            },
            _decompressWorker: function() {
                if (this._data instanceof s) {
                    return this._data.getContentWorker();
                } else if (this._data instanceof f) {
                    return this._data;
                } else {
                    return new n(this._data);
                }
            }
        };
        var c = [ "asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer" ];
        var u = function() {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        };
        for (var h = 0; h < c.length; h++) {
            o.prototype[c[h]] = u;
        }
        t.exports = o;
    }, {
        "./compressedObject": 143,
        "./stream/DataWorker": 168,
        "./stream/GenericWorker": 169,
        "./stream/StreamHelper": 170,
        "./utf8": 172
    } ],
    177: [ function(e, t, r) {
        "use strict";
        var i = e("immediate");
        function n() {}
        var a = {};
        var s = [ "REJECTED" ];
        var f = [ "FULFILLED" ];
        var o = [ "PENDING" ];
        t.exports = c;
        function c(e) {
            if (typeof e !== "function") {
                throw new TypeError("resolver must be a function");
            }
            this.state = o;
            this.queue = [];
            this.outcome = void 0;
            if (e !== n) {
                l(this, e);
            }
        }
        c.prototype["catch"] = function(e) {
            return this.then(null, e);
        };
        c.prototype.then = function(e, t) {
            if (typeof e !== "function" && this.state === f || typeof t !== "function" && this.state === s) {
                return this;
            }
            var r = new this.constructor(n);
            if (this.state !== o) {
                var i = this.state === f ? e : t;
                h(r, i, this.outcome);
            } else {
                this.queue.push(new u(r, e, t));
            }
            return r;
        };
        function u(e, t, r) {
            this.promise = e;
            if (typeof t === "function") {
                this.onFulfilled = t;
                this.callFulfilled = this.otherCallFulfilled;
            }
            if (typeof r === "function") {
                this.onRejected = r;
                this.callRejected = this.otherCallRejected;
            }
        }
        u.prototype.callFulfilled = function(e) {
            a.resolve(this.promise, e);
        };
        u.prototype.otherCallFulfilled = function(e) {
            h(this.promise, this.onFulfilled, e);
        };
        u.prototype.callRejected = function(e) {
            a.reject(this.promise, e);
        };
        u.prototype.otherCallRejected = function(e) {
            h(this.promise, this.onRejected, e);
        };
        function h(e, t, r) {
            i(function() {
                var i;
                try {
                    i = t(r);
                } catch (t) {
                    return a.reject(e, t);
                }
                if (i === e) {
                    a.reject(e, new TypeError("Cannot resolve promise with itself"));
                } else {
                    a.resolve(e, i);
                }
            });
        }
        a.resolve = function(e, t) {
            var r = p(d, t);
            if (r.status === "error") {
                return a.reject(e, r.value);
            }
            var i = r.value;
            if (i) {
                l(e, i);
            } else {
                e.state = f;
                e.outcome = t;
                var n = -1;
                var s = e.queue.length;
                while (++n < s) {
                    e.queue[n].callFulfilled(t);
                }
            }
            return e;
        };
        a.reject = function(e, t) {
            e.state = s;
            e.outcome = t;
            var r = -1;
            var i = e.queue.length;
            while (++r < i) {
                e.queue[r].callRejected(t);
            }
            return e;
        };
        function d(e) {
            var t = e && e.then;
            if (e && (typeof e === "object" || typeof e === "function") && typeof t === "function") {
                return function r() {
                    t.apply(e, arguments);
                };
            }
        }
        function l(e, t) {
            var r = false;
            function i(t) {
                if (r) {
                    return;
                }
                r = true;
                a.reject(e, t);
            }
            function n(t) {
                if (r) {
                    return;
                }
                r = true;
                a.resolve(e, t);
            }
            function s() {
                t(n, i);
            }
            var f = p(s);
            if (f.status === "error") {
                i(f.value);
            }
        }
        function p(e, t) {
            var r = {};
            try {
                r.value = e(t);
                r.status = "success";
            } catch (e) {
                r.status = "error";
                r.value = e;
            }
            return r;
        }
        c.resolve = v;
        function v(e) {
            if (e instanceof this) {
                return e;
            }
            return a.resolve(new this(n), e);
        }
        c.reject = b;
        function b(e) {
            var t = new this(n);
            return a.reject(t, e);
        }
        c.all = m;
        function m(e) {
            var t = this;
            if (Object.prototype.toString.call(e) !== "[object Array]") {
                return this.reject(new TypeError("must be an array"));
            }
            var r = e.length;
            var i = false;
            if (!r) {
                return this.resolve([]);
            }
            var s = new Array(r);
            var f = 0;
            var o = -1;
            var c = new this(n);
            while (++o < r) {
                u(e[o], o);
            }
            return c;
            function u(e, n) {
                t.resolve(e).then(o, function(e) {
                    if (!i) {
                        i = true;
                        a.reject(c, e);
                    }
                });
                function o(e) {
                    s[n] = e;
                    if (++f === r && !i) {
                        i = true;
                        a.resolve(c, s);
                    }
                }
            }
        }
        c.race = g;
        function g(e) {
            var t = this;
            if (Object.prototype.toString.call(e) !== "[object Array]") {
                return this.reject(new TypeError("must be an array"));
            }
            var r = e.length;
            var i = false;
            if (!r) {
                return this.resolve([]);
            }
            var s = -1;
            var f = new this(n);
            while (++s < r) {
                o(e[s]);
            }
            return f;
            function o(e) {
                t.resolve(e).then(function(e) {
                    if (!i) {
                        i = true;
                        a.resolve(f, e);
                    }
                }, function(e) {
                    if (!i) {
                        i = true;
                        a.reject(f, e);
                    }
                });
            }
        }
    }, {
        immediate: 138
    } ],
    178: [ function(e, t, r) {
        (function(r) {
            "use strict";
            var i = e("inherits");
            var n = e("hash-base");
            var a = new Array(16);
            function s() {
                n.call(this, 64);
                this._a = 1732584193;
                this._b = 4023233417;
                this._c = 2562383102;
                this._d = 271733878;
            }
            i(s, n);
            s.prototype._update = function() {
                var e = a;
                for (var t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(t * 4);
                var r = this._a;
                var i = this._b;
                var n = this._c;
                var s = this._d;
                r = o(r, i, n, s, e[0], 3614090360, 7);
                s = o(s, r, i, n, e[1], 3905402710, 12);
                n = o(n, s, r, i, e[2], 606105819, 17);
                i = o(i, n, s, r, e[3], 3250441966, 22);
                r = o(r, i, n, s, e[4], 4118548399, 7);
                s = o(s, r, i, n, e[5], 1200080426, 12);
                n = o(n, s, r, i, e[6], 2821735955, 17);
                i = o(i, n, s, r, e[7], 4249261313, 22);
                r = o(r, i, n, s, e[8], 1770035416, 7);
                s = o(s, r, i, n, e[9], 2336552879, 12);
                n = o(n, s, r, i, e[10], 4294925233, 17);
                i = o(i, n, s, r, e[11], 2304563134, 22);
                r = o(r, i, n, s, e[12], 1804603682, 7);
                s = o(s, r, i, n, e[13], 4254626195, 12);
                n = o(n, s, r, i, e[14], 2792965006, 17);
                i = o(i, n, s, r, e[15], 1236535329, 22);
                r = c(r, i, n, s, e[1], 4129170786, 5);
                s = c(s, r, i, n, e[6], 3225465664, 9);
                n = c(n, s, r, i, e[11], 643717713, 14);
                i = c(i, n, s, r, e[0], 3921069994, 20);
                r = c(r, i, n, s, e[5], 3593408605, 5);
                s = c(s, r, i, n, e[10], 38016083, 9);
                n = c(n, s, r, i, e[15], 3634488961, 14);
                i = c(i, n, s, r, e[4], 3889429448, 20);
                r = c(r, i, n, s, e[9], 568446438, 5);
                s = c(s, r, i, n, e[14], 3275163606, 9);
                n = c(n, s, r, i, e[3], 4107603335, 14);
                i = c(i, n, s, r, e[8], 1163531501, 20);
                r = c(r, i, n, s, e[13], 2850285829, 5);
                s = c(s, r, i, n, e[2], 4243563512, 9);
                n = c(n, s, r, i, e[7], 1735328473, 14);
                i = c(i, n, s, r, e[12], 2368359562, 20);
                r = u(r, i, n, s, e[5], 4294588738, 4);
                s = u(s, r, i, n, e[8], 2272392833, 11);
                n = u(n, s, r, i, e[11], 1839030562, 16);
                i = u(i, n, s, r, e[14], 4259657740, 23);
                r = u(r, i, n, s, e[1], 2763975236, 4);
                s = u(s, r, i, n, e[4], 1272893353, 11);
                n = u(n, s, r, i, e[7], 4139469664, 16);
                i = u(i, n, s, r, e[10], 3200236656, 23);
                r = u(r, i, n, s, e[13], 681279174, 4);
                s = u(s, r, i, n, e[0], 3936430074, 11);
                n = u(n, s, r, i, e[3], 3572445317, 16);
                i = u(i, n, s, r, e[6], 76029189, 23);
                r = u(r, i, n, s, e[9], 3654602809, 4);
                s = u(s, r, i, n, e[12], 3873151461, 11);
                n = u(n, s, r, i, e[15], 530742520, 16);
                i = u(i, n, s, r, e[2], 3299628645, 23);
                r = h(r, i, n, s, e[0], 4096336452, 6);
                s = h(s, r, i, n, e[7], 1126891415, 10);
                n = h(n, s, r, i, e[14], 2878612391, 15);
                i = h(i, n, s, r, e[5], 4237533241, 21);
                r = h(r, i, n, s, e[12], 1700485571, 6);
                s = h(s, r, i, n, e[3], 2399980690, 10);
                n = h(n, s, r, i, e[10], 4293915773, 15);
                i = h(i, n, s, r, e[1], 2240044497, 21);
                r = h(r, i, n, s, e[8], 1873313359, 6);
                s = h(s, r, i, n, e[15], 4264355552, 10);
                n = h(n, s, r, i, e[6], 2734768916, 15);
                i = h(i, n, s, r, e[13], 1309151649, 21);
                r = h(r, i, n, s, e[4], 4149444226, 6);
                s = h(s, r, i, n, e[11], 3174756917, 10);
                n = h(n, s, r, i, e[2], 718787259, 15);
                i = h(i, n, s, r, e[9], 3951481745, 21);
                this._a = this._a + r | 0;
                this._b = this._b + i | 0;
                this._c = this._c + n | 0;
                this._d = this._d + s | 0;
            };
            s.prototype._digest = function() {
                this._block[this._blockOffset++] = 128;
                if (this._blockOffset > 56) {
                    this._block.fill(0, this._blockOffset, 64);
                    this._update();
                    this._blockOffset = 0;
                }
                this._block.fill(0, this._blockOffset, 56);
                this._block.writeUInt32LE(this._length[0], 56);
                this._block.writeUInt32LE(this._length[1], 60);
                this._update();
                var e = new r(16);
                e.writeInt32LE(this._a, 0);
                e.writeInt32LE(this._b, 4);
                e.writeInt32LE(this._c, 8);
                e.writeInt32LE(this._d, 12);
                return e;
            };
            function f(e, t) {
                return e << t | e >>> 32 - t;
            }
            function o(e, t, r, i, n, a, s) {
                return f(e + (t & r | ~t & i) + n + a | 0, s) + t | 0;
            }
            function c(e, t, r, i, n, a, s) {
                return f(e + (t & i | r & ~i) + n + a | 0, s) + t | 0;
            }
            function u(e, t, r, i, n, a, s) {
                return f(e + (t ^ r ^ i) + n + a | 0, s) + t | 0;
            }
            function h(e, t, r, i, n, a, s) {
                return f(e + (r ^ (t | ~i)) + n + a | 0, s) + t | 0;
            }
            t.exports = s;
        }).call(this, e("buffer").Buffer);
    }, {
        buffer: 65,
        "hash-base": 123,
        inherits: 139
    } ],
    179: [ function(e, t, r) {
        var i = e("bn.js");
        var n = e("brorand");
        function a(e) {
            this.rand = e || new n.Rand();
        }
        t.exports = a;
        a.create = function e(t) {
            return new a(t);
        };
        a.prototype._randbelow = function e(t) {
            var r = t.bitLength();
            var n = Math.ceil(r / 8);
            do {
                var a = new i(this.rand.generate(n));
            } while (a.cmp(t) >= 0);
            return a;
        };
        a.prototype._randrange = function e(t, r) {
            var i = r.sub(t);
            return t.add(this._randbelow(i));
        };
        a.prototype.test = function e(t, r, n) {
            var a = t.bitLength();
            var s = i.mont(t);
            var f = new i(1).toRed(s);
            if (!r) r = Math.max(1, a / 48 | 0);
            var o = t.subn(1);
            for (var c = 0; !o.testn(c); c++) {}
            var u = t.shrn(c);
            var h = o.toRed(s);
            var d = true;
            for (;r > 0; r--) {
                var l = this._randrange(new i(2), o);
                if (n) n(l);
                var p = l.toRed(s).redPow(u);
                if (p.cmp(f) === 0 || p.cmp(h) === 0) continue;
                for (var v = 1; v < c; v++) {
                    p = p.redSqr();
                    if (p.cmp(f) === 0) return false;
                    if (p.cmp(h) === 0) break;
                }
                if (v === c) return false;
            }
            return d;
        };
        a.prototype.getDivisor = function e(t, r) {
            var n = t.bitLength();
            var a = i.mont(t);
            var s = new i(1).toRed(a);
            if (!r) r = Math.max(1, n / 48 | 0);
            var f = t.subn(1);
            for (var o = 0; !f.testn(o); o++) {}
            var c = t.shrn(o);
            var u = f.toRed(a);
            for (;r > 0; r--) {
                var h = this._randrange(new i(2), f);
                var d = t.gcd(h);
                if (d.cmpn(1) !== 0) return d;
                var l = h.toRed(a).redPow(c);
                if (l.cmp(s) === 0 || l.cmp(u) === 0) continue;
                for (var p = 1; p < o; p++) {
                    l = l.redSqr();
                    if (l.cmp(s) === 0) return l.fromRed().subn(1).gcd(t);
                    if (l.cmp(u) === 0) break;
                }
                if (p === o) {
                    l = l.redSqr();
                    return l.fromRed().subn(1).gcd(t);
                }
            }
            return false;
        };
    }, {
        "bn.js": 32,
        brorand: 33
    } ],
    180: [ function(e, t, r) {
        t.exports = i;
        function i(e, t) {
            if (!e) throw new Error(t || "Assertion failed");
        }
        i.equal = function e(t, r, i) {
            if (t != r) throw new Error(i || "Assertion failed: " + t + " != " + r);
        };
    }, {} ],
    181: [ function(e, t, r) {
        "use strict";
        var i = r;
        function n(e, t) {
            if (Array.isArray(e)) return e.slice();
            if (!e) return [];
            var r = [];
            if (typeof e !== "string") {
                for (var i = 0; i < e.length; i++) r[i] = e[i] | 0;
                return r;
            }
            if (t === "hex") {
                e = e.replace(/[^a-z0-9]+/gi, "");
                if (e.length % 2 !== 0) e = "0" + e;
                for (var i = 0; i < e.length; i += 2) r.push(parseInt(e[i] + e[i + 1], 16));
            } else {
                for (var i = 0; i < e.length; i++) {
                    var n = e.charCodeAt(i);
                    var a = n >> 8;
                    var s = n & 255;
                    if (a) r.push(a, s); else r.push(s);
                }
            }
            return r;
        }
        i.toArray = n;
        function a(e) {
            if (e.length === 1) return "0" + e; else return e;
        }
        i.zero2 = a;
        function s(e) {
            var t = "";
            for (var r = 0; r < e.length; r++) t += a(e[r].toString(16));
            return t;
        }
        i.toHex = s;
        i.encode = function e(t, r) {
            if (r === "hex") return s(t); else return t;
        };
    }, {} ],
    182: [ function(e, t, r) {
        r.endianness = function() {
            return "LE";
        };
        r.hostname = function() {
            if (typeof location !== "undefined") {
                return location.hostname;
            } else return "";
        };
        r.loadavg = function() {
            return [];
        };
        r.uptime = function() {
            return 0;
        };
        r.freemem = function() {
            return Number.MAX_VALUE;
        };
        r.totalmem = function() {
            return Number.MAX_VALUE;
        };
        r.cpus = function() {
            return [];
        };
        r.type = function() {
            return "Browser";
        };
        r.release = function() {
            if (typeof navigator !== "undefined") {
                return navigator.appVersion;
            }
            return "";
        };
        r.networkInterfaces = r.getNetworkInterfaces = function() {
            return {};
        };
        r.arch = function() {
            return "javascript";
        };
        r.platform = function() {
            return "browser";
        };
        r.tmpdir = r.tmpDir = function() {
            return "/tmp";
        };
        r.EOL = "\n";
        r.homedir = function() {
            return "/";
        };
    }, {} ],
    183: [ function(e, t, r) {
        "use strict";
        var i = e("./lib/utils/common").assign;
        var n = e("./lib/deflate");
        var a = e("./lib/inflate");
        var s = e("./lib/zlib/constants");
        var f = {};
        i(f, n, a, s);
        t.exports = f;
    }, {
        "./lib/deflate": 184,
        "./lib/inflate": 185,
        "./lib/utils/common": 186,
        "./lib/zlib/constants": 189
    } ],
    184: [ function(e, t, r) {
        "use strict";
        var i = e("./zlib/deflate");
        var n = e("./utils/common");
        var a = e("./utils/strings");
        var s = e("./zlib/messages");
        var f = e("./zlib/zstream");
        var o = Object.prototype.toString;
        var c = 0;
        var u = 4;
        var h = 0;
        var d = 1;
        var l = 2;
        var p = -1;
        var v = 0;
        var b = 8;
        function m(e) {
            if (!(this instanceof m)) return new m(e);
            this.options = n.assign({
                level: p,
                method: b,
                chunkSize: 16384,
                windowBits: 15,
                memLevel: 8,
                strategy: v,
                to: ""
            }, e || {});
            var t = this.options;
            if (t.raw && t.windowBits > 0) {
                t.windowBits = -t.windowBits;
            } else if (t.gzip && t.windowBits > 0 && t.windowBits < 16) {
                t.windowBits += 16;
            }
            this.err = 0;
            this.msg = "";
            this.ended = false;
            this.chunks = [];
            this.strm = new f();
            this.strm.avail_out = 0;
            var r = i.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
            if (r !== h) {
                throw new Error(s[r]);
            }
            if (t.header) {
                i.deflateSetHeader(this.strm, t.header);
            }
            if (t.dictionary) {
                var c;
                if (typeof t.dictionary === "string") {
                    c = a.string2buf(t.dictionary);
                } else if (o.call(t.dictionary) === "[object ArrayBuffer]") {
                    c = new Uint8Array(t.dictionary);
                } else {
                    c = t.dictionary;
                }
                r = i.deflateSetDictionary(this.strm, c);
                if (r !== h) {
                    throw new Error(s[r]);
                }
                this._dict_set = true;
            }
        }
        m.prototype.push = function(e, t) {
            var r = this.strm;
            var s = this.options.chunkSize;
            var f, p;
            if (this.ended) {
                return false;
            }
            p = t === ~~t ? t : t === true ? u : c;
            if (typeof e === "string") {
                r.input = a.string2buf(e);
            } else if (o.call(e) === "[object ArrayBuffer]") {
                r.input = new Uint8Array(e);
            } else {
                r.input = e;
            }
            r.next_in = 0;
            r.avail_in = r.input.length;
            do {
                if (r.avail_out === 0) {
                    r.output = new n.Buf8(s);
                    r.next_out = 0;
                    r.avail_out = s;
                }
                f = i.deflate(r, p);
                if (f !== d && f !== h) {
                    this.onEnd(f);
                    this.ended = true;
                    return false;
                }
                if (r.avail_out === 0 || r.avail_in === 0 && (p === u || p === l)) {
                    if (this.options.to === "string") {
                        this.onData(a.buf2binstring(n.shrinkBuf(r.output, r.next_out)));
                    } else {
                        this.onData(n.shrinkBuf(r.output, r.next_out));
                    }
                }
            } while ((r.avail_in > 0 || r.avail_out === 0) && f !== d);
            if (p === u) {
                f = i.deflateEnd(this.strm);
                this.onEnd(f);
                this.ended = true;
                return f === h;
            }
            if (p === l) {
                this.onEnd(h);
                r.avail_out = 0;
                return true;
            }
            return true;
        };
        m.prototype.onData = function(e) {
            this.chunks.push(e);
        };
        m.prototype.onEnd = function(e) {
            if (e === h) {
                if (this.options.to === "string") {
                    this.result = this.chunks.join("");
                } else {
                    this.result = n.flattenChunks(this.chunks);
                }
            }
            this.chunks = [];
            this.err = e;
            this.msg = this.strm.msg;
        };
        function g(e, t) {
            var r = new m(t);
            r.push(e, true);
            if (r.err) {
                throw r.msg || s[r.err];
            }
            return r.result;
        }
        function y(e, t) {
            t = t || {};
            t.raw = true;
            return g(e, t);
        }
        function w(e, t) {
            t = t || {};
            t.gzip = true;
            return g(e, t);
        }
        r.Deflate = m;
        r.deflate = g;
        r.deflateRaw = y;
        r.gzip = w;
    }, {
        "./utils/common": 186,
        "./utils/strings": 187,
        "./zlib/deflate": 191,
        "./zlib/messages": 196,
        "./zlib/zstream": 198
    } ],
    185: [ function(e, t, r) {
        "use strict";
        var i = e("./zlib/inflate");
        var n = e("./utils/common");
        var a = e("./utils/strings");
        var s = e("./zlib/constants");
        var f = e("./zlib/messages");
        var o = e("./zlib/zstream");
        var c = e("./zlib/gzheader");
        var u = Object.prototype.toString;
        function h(e) {
            if (!(this instanceof h)) return new h(e);
            this.options = n.assign({
                chunkSize: 16384,
                windowBits: 0,
                to: ""
            }, e || {});
            var t = this.options;
            if (t.raw && t.windowBits >= 0 && t.windowBits < 16) {
                t.windowBits = -t.windowBits;
                if (t.windowBits === 0) {
                    t.windowBits = -15;
                }
            }
            if (t.windowBits >= 0 && t.windowBits < 16 && !(e && e.windowBits)) {
                t.windowBits += 32;
            }
            if (t.windowBits > 15 && t.windowBits < 48) {
                if ((t.windowBits & 15) === 0) {
                    t.windowBits |= 15;
                }
            }
            this.err = 0;
            this.msg = "";
            this.ended = false;
            this.chunks = [];
            this.strm = new o();
            this.strm.avail_out = 0;
            var r = i.inflateInit2(this.strm, t.windowBits);
            if (r !== s.Z_OK) {
                throw new Error(f[r]);
            }
            this.header = new c();
            i.inflateGetHeader(this.strm, this.header);
        }
        h.prototype.push = function(e, t) {
            var r = this.strm;
            var f = this.options.chunkSize;
            var o = this.options.dictionary;
            var c, h;
            var d, l, p;
            var v;
            var b = false;
            if (this.ended) {
                return false;
            }
            h = t === ~~t ? t : t === true ? s.Z_FINISH : s.Z_NO_FLUSH;
            if (typeof e === "string") {
                r.input = a.binstring2buf(e);
            } else if (u.call(e) === "[object ArrayBuffer]") {
                r.input = new Uint8Array(e);
            } else {
                r.input = e;
            }
            r.next_in = 0;
            r.avail_in = r.input.length;
            do {
                if (r.avail_out === 0) {
                    r.output = new n.Buf8(f);
                    r.next_out = 0;
                    r.avail_out = f;
                }
                c = i.inflate(r, s.Z_NO_FLUSH);
                if (c === s.Z_NEED_DICT && o) {
                    if (typeof o === "string") {
                        v = a.string2buf(o);
                    } else if (u.call(o) === "[object ArrayBuffer]") {
                        v = new Uint8Array(o);
                    } else {
                        v = o;
                    }
                    c = i.inflateSetDictionary(this.strm, v);
                }
                if (c === s.Z_BUF_ERROR && b === true) {
                    c = s.Z_OK;
                    b = false;
                }
                if (c !== s.Z_STREAM_END && c !== s.Z_OK) {
                    this.onEnd(c);
                    this.ended = true;
                    return false;
                }
                if (r.next_out) {
                    if (r.avail_out === 0 || c === s.Z_STREAM_END || r.avail_in === 0 && (h === s.Z_FINISH || h === s.Z_SYNC_FLUSH)) {
                        if (this.options.to === "string") {
                            d = a.utf8border(r.output, r.next_out);
                            l = r.next_out - d;
                            p = a.buf2string(r.output, d);
                            r.next_out = l;
                            r.avail_out = f - l;
                            if (l) {
                                n.arraySet(r.output, r.output, d, l, 0);
                            }
                            this.onData(p);
                        } else {
                            this.onData(n.shrinkBuf(r.output, r.next_out));
                        }
                    }
                }
                if (r.avail_in === 0 && r.avail_out === 0) {
                    b = true;
                }
            } while ((r.avail_in > 0 || r.avail_out === 0) && c !== s.Z_STREAM_END);
            if (c === s.Z_STREAM_END) {
                h = s.Z_FINISH;
            }
            if (h === s.Z_FINISH) {
                c = i.inflateEnd(this.strm);
                this.onEnd(c);
                this.ended = true;
                return c === s.Z_OK;
            }
            if (h === s.Z_SYNC_FLUSH) {
                this.onEnd(s.Z_OK);
                r.avail_out = 0;
                return true;
            }
            return true;
        };
        h.prototype.onData = function(e) {
            this.chunks.push(e);
        };
        h.prototype.onEnd = function(e) {
            if (e === s.Z_OK) {
                if (this.options.to === "string") {
                    this.result = this.chunks.join("");
                } else {
                    this.result = n.flattenChunks(this.chunks);
                }
            }
            this.chunks = [];
            this.err = e;
            this.msg = this.strm.msg;
        };
        function d(e, t) {
            var r = new h(t);
            r.push(e, true);
            if (r.err) {
                throw r.msg || f[r.err];
            }
            return r.result;
        }
        function l(e, t) {
            t = t || {};
            t.raw = true;
            return d(e, t);
        }
        r.Inflate = h;
        r.inflate = d;
        r.inflateRaw = l;
        r.ungzip = d;
    }, {
        "./utils/common": 186,
        "./utils/strings": 187,
        "./zlib/constants": 189,
        "./zlib/gzheader": 192,
        "./zlib/inflate": 194,
        "./zlib/messages": 196,
        "./zlib/zstream": 198
    } ],
    186: [ function(e, t, r) {
        "use strict";
        var i = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
        function n(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }
        r.assign = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            while (t.length) {
                var r = t.shift();
                if (!r) {
                    continue;
                }
                if (typeof r !== "object") {
                    throw new TypeError(r + "must be non-object");
                }
                for (var i in r) {
                    if (n(r, i)) {
                        e[i] = r[i];
                    }
                }
            }
            return e;
        };
        r.shrinkBuf = function(e, t) {
            if (e.length === t) {
                return e;
            }
            if (e.subarray) {
                return e.subarray(0, t);
            }
            e.length = t;
            return e;
        };
        var a = {
            arraySet: function(e, t, r, i, n) {
                if (t.subarray && e.subarray) {
                    e.set(t.subarray(r, r + i), n);
                    return;
                }
                for (var a = 0; a < i; a++) {
                    e[n + a] = t[r + a];
                }
            },
            flattenChunks: function(e) {
                var t, r, i, n, a, s;
                i = 0;
                for (t = 0, r = e.length; t < r; t++) {
                    i += e[t].length;
                }
                s = new Uint8Array(i);
                n = 0;
                for (t = 0, r = e.length; t < r; t++) {
                    a = e[t];
                    s.set(a, n);
                    n += a.length;
                }
                return s;
            }
        };
        var s = {
            arraySet: function(e, t, r, i, n) {
                for (var a = 0; a < i; a++) {
                    e[n + a] = t[r + a];
                }
            },
            flattenChunks: function(e) {
                return [].concat.apply([], e);
            }
        };
        r.setTyped = function(e) {
            if (e) {
                r.Buf8 = Uint8Array;
                r.Buf16 = Uint16Array;
                r.Buf32 = Int32Array;
                r.assign(r, a);
            } else {
                r.Buf8 = Array;
                r.Buf16 = Array;
                r.Buf32 = Array;
                r.assign(r, s);
            }
        };
        r.setTyped(i);
    }, {} ],
    187: [ function(e, t, r) {
        "use strict";
        var i = e("./common");
        var n = true;
        var a = true;
        try {
            String.fromCharCode.apply(null, [ 0 ]);
        } catch (e) {
            n = false;
        }
        try {
            String.fromCharCode.apply(null, new Uint8Array(1));
        } catch (e) {
            a = false;
        }
        var s = new i.Buf8(256);
        for (var f = 0; f < 256; f++) {
            s[f] = f >= 252 ? 6 : f >= 248 ? 5 : f >= 240 ? 4 : f >= 224 ? 3 : f >= 192 ? 2 : 1;
        }
        s[254] = s[254] = 1;
        r.string2buf = function(e) {
            var t, r, n, a, s, f = e.length, o = 0;
            for (a = 0; a < f; a++) {
                r = e.charCodeAt(a);
                if ((r & 64512) === 55296 && a + 1 < f) {
                    n = e.charCodeAt(a + 1);
                    if ((n & 64512) === 56320) {
                        r = 65536 + (r - 55296 << 10) + (n - 56320);
                        a++;
                    }
                }
                o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
            }
            t = new i.Buf8(o);
            for (s = 0, a = 0; s < o; a++) {
                r = e.charCodeAt(a);
                if ((r & 64512) === 55296 && a + 1 < f) {
                    n = e.charCodeAt(a + 1);
                    if ((n & 64512) === 56320) {
                        r = 65536 + (r - 55296 << 10) + (n - 56320);
                        a++;
                    }
                }
                if (r < 128) {
                    t[s++] = r;
                } else if (r < 2048) {
                    t[s++] = 192 | r >>> 6;
                    t[s++] = 128 | r & 63;
                } else if (r < 65536) {
                    t[s++] = 224 | r >>> 12;
                    t[s++] = 128 | r >>> 6 & 63;
                    t[s++] = 128 | r & 63;
                } else {
                    t[s++] = 240 | r >>> 18;
                    t[s++] = 128 | r >>> 12 & 63;
                    t[s++] = 128 | r >>> 6 & 63;
                    t[s++] = 128 | r & 63;
                }
            }
            return t;
        };
        function o(e, t) {
            if (t < 65537) {
                if (e.subarray && a || !e.subarray && n) {
                    return String.fromCharCode.apply(null, i.shrinkBuf(e, t));
                }
            }
            var r = "";
            for (var s = 0; s < t; s++) {
                r += String.fromCharCode(e[s]);
            }
            return r;
        }
        r.buf2binstring = function(e) {
            return o(e, e.length);
        };
        r.binstring2buf = function(e) {
            var t = new i.Buf8(e.length);
            for (var r = 0, n = t.length; r < n; r++) {
                t[r] = e.charCodeAt(r);
            }
            return t;
        };
        r.buf2string = function(e, t) {
            var r, i, n, a;
            var f = t || e.length;
            var c = new Array(f * 2);
            for (i = 0, r = 0; r < f; ) {
                n = e[r++];
                if (n < 128) {
                    c[i++] = n;
                    continue;
                }
                a = s[n];
                if (a > 4) {
                    c[i++] = 65533;
                    r += a - 1;
                    continue;
                }
                n &= a === 2 ? 31 : a === 3 ? 15 : 7;
                while (a > 1 && r < f) {
                    n = n << 6 | e[r++] & 63;
                    a--;
                }
                if (a > 1) {
                    c[i++] = 65533;
                    continue;
                }
                if (n < 65536) {
                    c[i++] = n;
                } else {
                    n -= 65536;
                    c[i++] = 55296 | n >> 10 & 1023;
                    c[i++] = 56320 | n & 1023;
                }
            }
            return o(c, i);
        };
        r.utf8border = function(e, t) {
            var r;
            t = t || e.length;
            if (t > e.length) {
                t = e.length;
            }
            r = t - 1;
            while (r >= 0 && (e[r] & 192) === 128) {
                r--;
            }
            if (r < 0) {
                return t;
            }
            if (r === 0) {
                return t;
            }
            return r + s[e[r]] > t ? r : t;
        };
    }, {
        "./common": 186
    } ],
    188: [ function(e, t, r) {
        "use strict";
        function i(e, t, r, i) {
            var n = e & 65535 | 0, a = e >>> 16 & 65535 | 0, s = 0;
            while (r !== 0) {
                s = r > 2e3 ? 2e3 : r;
                r -= s;
                do {
                    n = n + t[i++] | 0;
                    a = a + n | 0;
                } while (--s);
                n %= 65521;
                a %= 65521;
            }
            return n | a << 16 | 0;
        }
        t.exports = i;
    }, {} ],
    189: [ function(e, t, r) {
        "use strict";
        t.exports = {
            Z_NO_FLUSH: 0,
            Z_PARTIAL_FLUSH: 1,
            Z_SYNC_FLUSH: 2,
            Z_FULL_FLUSH: 3,
            Z_FINISH: 4,
            Z_BLOCK: 5,
            Z_TREES: 6,
            Z_OK: 0,
            Z_STREAM_END: 1,
            Z_NEED_DICT: 2,
            Z_ERRNO: -1,
            Z_STREAM_ERROR: -2,
            Z_DATA_ERROR: -3,
            Z_BUF_ERROR: -5,
            Z_NO_COMPRESSION: 0,
            Z_BEST_SPEED: 1,
            Z_BEST_COMPRESSION: 9,
            Z_DEFAULT_COMPRESSION: -1,
            Z_FILTERED: 1,
            Z_HUFFMAN_ONLY: 2,
            Z_RLE: 3,
            Z_FIXED: 4,
            Z_DEFAULT_STRATEGY: 0,
            Z_BINARY: 0,
            Z_TEXT: 1,
            Z_UNKNOWN: 2,
            Z_DEFLATED: 8
        };
    }, {} ],
    190: [ function(e, t, r) {
        "use strict";
        function i() {
            var e, t = [];
            for (var r = 0; r < 256; r++) {
                e = r;
                for (var i = 0; i < 8; i++) {
                    e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
                }
                t[r] = e;
            }
            return t;
        }
        var n = i();
        function a(e, t, r, i) {
            var a = n, s = i + r;
            e ^= -1;
            for (var f = i; f < s; f++) {
                e = e >>> 8 ^ a[(e ^ t[f]) & 255];
            }
            return e ^ -1;
        }
        t.exports = a;
    }, {} ],
    191: [ function(e, t, r) {
        "use strict";
        var i = e("../utils/common");
        var n = e("./trees");
        var a = e("./adler32");
        var s = e("./crc32");
        var f = e("./messages");
        var o = 0;
        var c = 1;
        var u = 3;
        var h = 4;
        var d = 5;
        var l = 0;
        var p = 1;
        var v = -2;
        var b = -3;
        var m = -5;
        var g = -1;
        var y = 1;
        var w = 2;
        var _ = 3;
        var S = 4;
        var k = 0;
        var x = 2;
        var E = 8;
        var A = 9;
        var M = 15;
        var B = 8;
        var I = 29;
        var j = 256;
        var C = j + 1 + I;
        var R = 30;
        var z = 19;
        var T = 2 * C + 1;
        var O = 15;
        var D = 3;
        var P = 258;
        var L = P + D + 1;
        var N = 32;
        var U = 42;
        var F = 69;
        var q = 73;
        var W = 91;
        var K = 103;
        var H = 113;
        var Z = 666;
        var V = 1;
        var G = 2;
        var X = 3;
        var Y = 4;
        var J = 3;
        function Q(e, t) {
            e.msg = f[t];
            return t;
        }
        function $(e) {
            return (e << 1) - (e > 4 ? 9 : 0);
        }
        function ee(e) {
            var t = e.length;
            while (--t >= 0) {
                e[t] = 0;
            }
        }
        function te(e) {
            var t = e.state;
            var r = t.pending;
            if (r > e.avail_out) {
                r = e.avail_out;
            }
            if (r === 0) {
                return;
            }
            i.arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out);
            e.next_out += r;
            t.pending_out += r;
            e.total_out += r;
            e.avail_out -= r;
            t.pending -= r;
            if (t.pending === 0) {
                t.pending_out = 0;
            }
        }
        function re(e, t) {
            n._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t);
            e.block_start = e.strstart;
            te(e.strm);
        }
        function ie(e, t) {
            e.pending_buf[e.pending++] = t;
        }
        function ne(e, t) {
            e.pending_buf[e.pending++] = t >>> 8 & 255;
            e.pending_buf[e.pending++] = t & 255;
        }
        function ae(e, t, r, n) {
            var f = e.avail_in;
            if (f > n) {
                f = n;
            }
            if (f === 0) {
                return 0;
            }
            e.avail_in -= f;
            i.arraySet(t, e.input, e.next_in, f, r);
            if (e.state.wrap === 1) {
                e.adler = a(e.adler, t, f, r);
            } else if (e.state.wrap === 2) {
                e.adler = s(e.adler, t, f, r);
            }
            e.next_in += f;
            e.total_in += f;
            return f;
        }
        function se(e, t) {
            var r = e.max_chain_length;
            var i = e.strstart;
            var n;
            var a;
            var s = e.prev_length;
            var f = e.nice_match;
            var o = e.strstart > e.w_size - L ? e.strstart - (e.w_size - L) : 0;
            var c = e.window;
            var u = e.w_mask;
            var h = e.prev;
            var d = e.strstart + P;
            var l = c[i + s - 1];
            var p = c[i + s];
            if (e.prev_length >= e.good_match) {
                r >>= 2;
            }
            if (f > e.lookahead) {
                f = e.lookahead;
            }
            do {
                n = t;
                if (c[n + s] !== p || c[n + s - 1] !== l || c[n] !== c[i] || c[++n] !== c[i + 1]) {
                    continue;
                }
                i += 2;
                n++;
                do {} while (c[++i] === c[++n] && c[++i] === c[++n] && c[++i] === c[++n] && c[++i] === c[++n] && c[++i] === c[++n] && c[++i] === c[++n] && c[++i] === c[++n] && c[++i] === c[++n] && i < d);
                a = P - (d - i);
                i = d - P;
                if (a > s) {
                    e.match_start = t;
                    s = a;
                    if (a >= f) {
                        break;
                    }
                    l = c[i + s - 1];
                    p = c[i + s];
                }
            } while ((t = h[t & u]) > o && --r !== 0);
            if (s <= e.lookahead) {
                return s;
            }
            return e.lookahead;
        }
        function fe(e) {
            var t = e.w_size;
            var r, n, a, s, f;
            do {
                s = e.window_size - e.lookahead - e.strstart;
                if (e.strstart >= t + (t - L)) {
                    i.arraySet(e.window, e.window, t, t, 0);
                    e.match_start -= t;
                    e.strstart -= t;
                    e.block_start -= t;
                    n = e.hash_size;
                    r = n;
                    do {
                        a = e.head[--r];
                        e.head[r] = a >= t ? a - t : 0;
                    } while (--n);
                    n = t;
                    r = n;
                    do {
                        a = e.prev[--r];
                        e.prev[r] = a >= t ? a - t : 0;
                    } while (--n);
                    s += t;
                }
                if (e.strm.avail_in === 0) {
                    break;
                }
                n = ae(e.strm, e.window, e.strstart + e.lookahead, s);
                e.lookahead += n;
                if (e.lookahead + e.insert >= D) {
                    f = e.strstart - e.insert;
                    e.ins_h = e.window[f];
                    e.ins_h = (e.ins_h << e.hash_shift ^ e.window[f + 1]) & e.hash_mask;
                    while (e.insert) {
                        e.ins_h = (e.ins_h << e.hash_shift ^ e.window[f + D - 1]) & e.hash_mask;
                        e.prev[f & e.w_mask] = e.head[e.ins_h];
                        e.head[e.ins_h] = f;
                        f++;
                        e.insert--;
                        if (e.lookahead + e.insert < D) {
                            break;
                        }
                    }
                }
            } while (e.lookahead < L && e.strm.avail_in !== 0);
        }
        function oe(e, t) {
            var r = 65535;
            if (r > e.pending_buf_size - 5) {
                r = e.pending_buf_size - 5;
            }
            for (;;) {
                if (e.lookahead <= 1) {
                    fe(e);
                    if (e.lookahead === 0 && t === o) {
                        return V;
                    }
                    if (e.lookahead === 0) {
                        break;
                    }
                }
                e.strstart += e.lookahead;
                e.lookahead = 0;
                var i = e.block_start + r;
                if (e.strstart === 0 || e.strstart >= i) {
                    e.lookahead = e.strstart - i;
                    e.strstart = i;
                    re(e, false);
                    if (e.strm.avail_out === 0) {
                        return V;
                    }
                }
                if (e.strstart - e.block_start >= e.w_size - L) {
                    re(e, false);
                    if (e.strm.avail_out === 0) {
                        return V;
                    }
                }
            }
            e.insert = 0;
            if (t === h) {
                re(e, true);
                if (e.strm.avail_out === 0) {
                    return X;
                }
                return Y;
            }
            if (e.strstart > e.block_start) {
                re(e, false);
                if (e.strm.avail_out === 0) {
                    return V;
                }
            }
            return V;
        }
        function ce(e, t) {
            var r;
            var i;
            for (;;) {
                if (e.lookahead < L) {
                    fe(e);
                    if (e.lookahead < L && t === o) {
                        return V;
                    }
                    if (e.lookahead === 0) {
                        break;
                    }
                }
                r = 0;
                if (e.lookahead >= D) {
                    e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + D - 1]) & e.hash_mask;
                    r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
                    e.head[e.ins_h] = e.strstart;
                }
                if (r !== 0 && e.strstart - r <= e.w_size - L) {
                    e.match_length = se(e, r);
                }
                if (e.match_length >= D) {
                    i = n._tr_tally(e, e.strstart - e.match_start, e.match_length - D);
                    e.lookahead -= e.match_length;
                    if (e.match_length <= e.max_lazy_match && e.lookahead >= D) {
                        e.match_length--;
                        do {
                            e.strstart++;
                            e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + D - 1]) & e.hash_mask;
                            r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
                            e.head[e.ins_h] = e.strstart;
                        } while (--e.match_length !== 0);
                        e.strstart++;
                    } else {
                        e.strstart += e.match_length;
                        e.match_length = 0;
                        e.ins_h = e.window[e.strstart];
                        e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
                    }
                } else {
                    i = n._tr_tally(e, 0, e.window[e.strstart]);
                    e.lookahead--;
                    e.strstart++;
                }
                if (i) {
                    re(e, false);
                    if (e.strm.avail_out === 0) {
                        return V;
                    }
                }
            }
            e.insert = e.strstart < D - 1 ? e.strstart : D - 1;
            if (t === h) {
                re(e, true);
                if (e.strm.avail_out === 0) {
                    return X;
                }
                return Y;
            }
            if (e.last_lit) {
                re(e, false);
                if (e.strm.avail_out === 0) {
                    return V;
                }
            }
            return G;
        }
        function ue(e, t) {
            var r;
            var i;
            var a;
            for (;;) {
                if (e.lookahead < L) {
                    fe(e);
                    if (e.lookahead < L && t === o) {
                        return V;
                    }
                    if (e.lookahead === 0) {
                        break;
                    }
                }
                r = 0;
                if (e.lookahead >= D) {
                    e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + D - 1]) & e.hash_mask;
                    r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
                    e.head[e.ins_h] = e.strstart;
                }
                e.prev_length = e.match_length;
                e.prev_match = e.match_start;
                e.match_length = D - 1;
                if (r !== 0 && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - L) {
                    e.match_length = se(e, r);
                    if (e.match_length <= 5 && (e.strategy === y || e.match_length === D && e.strstart - e.match_start > 4096)) {
                        e.match_length = D - 1;
                    }
                }
                if (e.prev_length >= D && e.match_length <= e.prev_length) {
                    a = e.strstart + e.lookahead - D;
                    i = n._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - D);
                    e.lookahead -= e.prev_length - 1;
                    e.prev_length -= 2;
                    do {
                        if (++e.strstart <= a) {
                            e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + D - 1]) & e.hash_mask;
                            r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
                            e.head[e.ins_h] = e.strstart;
                        }
                    } while (--e.prev_length !== 0);
                    e.match_available = 0;
                    e.match_length = D - 1;
                    e.strstart++;
                    if (i) {
                        re(e, false);
                        if (e.strm.avail_out === 0) {
                            return V;
                        }
                    }
                } else if (e.match_available) {
                    i = n._tr_tally(e, 0, e.window[e.strstart - 1]);
                    if (i) {
                        re(e, false);
                    }
                    e.strstart++;
                    e.lookahead--;
                    if (e.strm.avail_out === 0) {
                        return V;
                    }
                } else {
                    e.match_available = 1;
                    e.strstart++;
                    e.lookahead--;
                }
            }
            if (e.match_available) {
                i = n._tr_tally(e, 0, e.window[e.strstart - 1]);
                e.match_available = 0;
            }
            e.insert = e.strstart < D - 1 ? e.strstart : D - 1;
            if (t === h) {
                re(e, true);
                if (e.strm.avail_out === 0) {
                    return X;
                }
                return Y;
            }
            if (e.last_lit) {
                re(e, false);
                if (e.strm.avail_out === 0) {
                    return V;
                }
            }
            return G;
        }
        function he(e, t) {
            var r;
            var i;
            var a, s;
            var f = e.window;
            for (;;) {
                if (e.lookahead <= P) {
                    fe(e);
                    if (e.lookahead <= P && t === o) {
                        return V;
                    }
                    if (e.lookahead === 0) {
                        break;
                    }
                }
                e.match_length = 0;
                if (e.lookahead >= D && e.strstart > 0) {
                    a = e.strstart - 1;
                    i = f[a];
                    if (i === f[++a] && i === f[++a] && i === f[++a]) {
                        s = e.strstart + P;
                        do {} while (i === f[++a] && i === f[++a] && i === f[++a] && i === f[++a] && i === f[++a] && i === f[++a] && i === f[++a] && i === f[++a] && a < s);
                        e.match_length = P - (s - a);
                        if (e.match_length > e.lookahead) {
                            e.match_length = e.lookahead;
                        }
                    }
                }
                if (e.match_length >= D) {
                    r = n._tr_tally(e, 1, e.match_length - D);
                    e.lookahead -= e.match_length;
                    e.strstart += e.match_length;
                    e.match_length = 0;
                } else {
                    r = n._tr_tally(e, 0, e.window[e.strstart]);
                    e.lookahead--;
                    e.strstart++;
                }
                if (r) {
                    re(e, false);
                    if (e.strm.avail_out === 0) {
                        return V;
                    }
                }
            }
            e.insert = 0;
            if (t === h) {
                re(e, true);
                if (e.strm.avail_out === 0) {
                    return X;
                }
                return Y;
            }
            if (e.last_lit) {
                re(e, false);
                if (e.strm.avail_out === 0) {
                    return V;
                }
            }
            return G;
        }
        function de(e, t) {
            var r;
            for (;;) {
                if (e.lookahead === 0) {
                    fe(e);
                    if (e.lookahead === 0) {
                        if (t === o) {
                            return V;
                        }
                        break;
                    }
                }
                e.match_length = 0;
                r = n._tr_tally(e, 0, e.window[e.strstart]);
                e.lookahead--;
                e.strstart++;
                if (r) {
                    re(e, false);
                    if (e.strm.avail_out === 0) {
                        return V;
                    }
                }
            }
            e.insert = 0;
            if (t === h) {
                re(e, true);
                if (e.strm.avail_out === 0) {
                    return X;
                }
                return Y;
            }
            if (e.last_lit) {
                re(e, false);
                if (e.strm.avail_out === 0) {
                    return V;
                }
            }
            return G;
        }
        function le(e, t, r, i, n) {
            this.good_length = e;
            this.max_lazy = t;
            this.nice_length = r;
            this.max_chain = i;
            this.func = n;
        }
        var pe;
        pe = [ new le(0, 0, 0, 0, oe), new le(4, 4, 8, 4, ce), new le(4, 5, 16, 8, ce), new le(4, 6, 32, 32, ce), new le(4, 4, 16, 16, ue), new le(8, 16, 32, 32, ue), new le(8, 16, 128, 128, ue), new le(8, 32, 128, 256, ue), new le(32, 128, 258, 1024, ue), new le(32, 258, 258, 4096, ue) ];
        function ve(e) {
            e.window_size = 2 * e.w_size;
            ee(e.head);
            e.max_lazy_match = pe[e.level].max_lazy;
            e.good_match = pe[e.level].good_length;
            e.nice_match = pe[e.level].nice_length;
            e.max_chain_length = pe[e.level].max_chain;
            e.strstart = 0;
            e.block_start = 0;
            e.lookahead = 0;
            e.insert = 0;
            e.match_length = e.prev_length = D - 1;
            e.match_available = 0;
            e.ins_h = 0;
        }
        function be() {
            this.strm = null;
            this.status = 0;
            this.pending_buf = null;
            this.pending_buf_size = 0;
            this.pending_out = 0;
            this.pending = 0;
            this.wrap = 0;
            this.gzhead = null;
            this.gzindex = 0;
            this.method = E;
            this.last_flush = -1;
            this.w_size = 0;
            this.w_bits = 0;
            this.w_mask = 0;
            this.window = null;
            this.window_size = 0;
            this.prev = null;
            this.head = null;
            this.ins_h = 0;
            this.hash_size = 0;
            this.hash_bits = 0;
            this.hash_mask = 0;
            this.hash_shift = 0;
            this.block_start = 0;
            this.match_length = 0;
            this.prev_match = 0;
            this.match_available = 0;
            this.strstart = 0;
            this.match_start = 0;
            this.lookahead = 0;
            this.prev_length = 0;
            this.max_chain_length = 0;
            this.max_lazy_match = 0;
            this.level = 0;
            this.strategy = 0;
            this.good_match = 0;
            this.nice_match = 0;
            this.dyn_ltree = new i.Buf16(T * 2);
            this.dyn_dtree = new i.Buf16((2 * R + 1) * 2);
            this.bl_tree = new i.Buf16((2 * z + 1) * 2);
            ee(this.dyn_ltree);
            ee(this.dyn_dtree);
            ee(this.bl_tree);
            this.l_desc = null;
            this.d_desc = null;
            this.bl_desc = null;
            this.bl_count = new i.Buf16(O + 1);
            this.heap = new i.Buf16(2 * C + 1);
            ee(this.heap);
            this.heap_len = 0;
            this.heap_max = 0;
            this.depth = new i.Buf16(2 * C + 1);
            ee(this.depth);
            this.l_buf = 0;
            this.lit_bufsize = 0;
            this.last_lit = 0;
            this.d_buf = 0;
            this.opt_len = 0;
            this.static_len = 0;
            this.matches = 0;
            this.insert = 0;
            this.bi_buf = 0;
            this.bi_valid = 0;
        }
        function me(e) {
            var t;
            if (!e || !e.state) {
                return Q(e, v);
            }
            e.total_in = e.total_out = 0;
            e.data_type = x;
            t = e.state;
            t.pending = 0;
            t.pending_out = 0;
            if (t.wrap < 0) {
                t.wrap = -t.wrap;
            }
            t.status = t.wrap ? U : H;
            e.adler = t.wrap === 2 ? 0 : 1;
            t.last_flush = o;
            n._tr_init(t);
            return l;
        }
        function ge(e) {
            var t = me(e);
            if (t === l) {
                ve(e.state);
            }
            return t;
        }
        function ye(e, t) {
            if (!e || !e.state) {
                return v;
            }
            if (e.state.wrap !== 2) {
                return v;
            }
            e.state.gzhead = t;
            return l;
        }
        function we(e, t, r, n, a, s) {
            if (!e) {
                return v;
            }
            var f = 1;
            if (t === g) {
                t = 6;
            }
            if (n < 0) {
                f = 0;
                n = -n;
            } else if (n > 15) {
                f = 2;
                n -= 16;
            }
            if (a < 1 || a > A || r !== E || n < 8 || n > 15 || t < 0 || t > 9 || s < 0 || s > S) {
                return Q(e, v);
            }
            if (n === 8) {
                n = 9;
            }
            var o = new be();
            e.state = o;
            o.strm = e;
            o.wrap = f;
            o.gzhead = null;
            o.w_bits = n;
            o.w_size = 1 << o.w_bits;
            o.w_mask = o.w_size - 1;
            o.hash_bits = a + 7;
            o.hash_size = 1 << o.hash_bits;
            o.hash_mask = o.hash_size - 1;
            o.hash_shift = ~~((o.hash_bits + D - 1) / D);
            o.window = new i.Buf8(o.w_size * 2);
            o.head = new i.Buf16(o.hash_size);
            o.prev = new i.Buf16(o.w_size);
            o.lit_bufsize = 1 << a + 6;
            o.pending_buf_size = o.lit_bufsize * 4;
            o.pending_buf = new i.Buf8(o.pending_buf_size);
            o.d_buf = 1 * o.lit_bufsize;
            o.l_buf = (1 + 2) * o.lit_bufsize;
            o.level = t;
            o.strategy = s;
            o.method = r;
            return ge(e);
        }
        function _e(e, t) {
            return we(e, t, E, M, B, k);
        }
        function Se(e, t) {
            var r, i;
            var a, f;
            if (!e || !e.state || t > d || t < 0) {
                return e ? Q(e, v) : v;
            }
            i = e.state;
            if (!e.output || !e.input && e.avail_in !== 0 || i.status === Z && t !== h) {
                return Q(e, e.avail_out === 0 ? m : v);
            }
            i.strm = e;
            r = i.last_flush;
            i.last_flush = t;
            if (i.status === U) {
                if (i.wrap === 2) {
                    e.adler = 0;
                    ie(i, 31);
                    ie(i, 139);
                    ie(i, 8);
                    if (!i.gzhead) {
                        ie(i, 0);
                        ie(i, 0);
                        ie(i, 0);
                        ie(i, 0);
                        ie(i, 0);
                        ie(i, i.level === 9 ? 2 : i.strategy >= w || i.level < 2 ? 4 : 0);
                        ie(i, J);
                        i.status = H;
                    } else {
                        ie(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (!i.gzhead.extra ? 0 : 4) + (!i.gzhead.name ? 0 : 8) + (!i.gzhead.comment ? 0 : 16));
                        ie(i, i.gzhead.time & 255);
                        ie(i, i.gzhead.time >> 8 & 255);
                        ie(i, i.gzhead.time >> 16 & 255);
                        ie(i, i.gzhead.time >> 24 & 255);
                        ie(i, i.level === 9 ? 2 : i.strategy >= w || i.level < 2 ? 4 : 0);
                        ie(i, i.gzhead.os & 255);
                        if (i.gzhead.extra && i.gzhead.extra.length) {
                            ie(i, i.gzhead.extra.length & 255);
                            ie(i, i.gzhead.extra.length >> 8 & 255);
                        }
                        if (i.gzhead.hcrc) {
                            e.adler = s(e.adler, i.pending_buf, i.pending, 0);
                        }
                        i.gzindex = 0;
                        i.status = F;
                    }
                } else {
                    var b = E + (i.w_bits - 8 << 4) << 8;
                    var g = -1;
                    if (i.strategy >= w || i.level < 2) {
                        g = 0;
                    } else if (i.level < 6) {
                        g = 1;
                    } else if (i.level === 6) {
                        g = 2;
                    } else {
                        g = 3;
                    }
                    b |= g << 6;
                    if (i.strstart !== 0) {
                        b |= N;
                    }
                    b += 31 - b % 31;
                    i.status = H;
                    ne(i, b);
                    if (i.strstart !== 0) {
                        ne(i, e.adler >>> 16);
                        ne(i, e.adler & 65535);
                    }
                    e.adler = 1;
                }
            }
            if (i.status === F) {
                if (i.gzhead.extra) {
                    a = i.pending;
                    while (i.gzindex < (i.gzhead.extra.length & 65535)) {
                        if (i.pending === i.pending_buf_size) {
                            if (i.gzhead.hcrc && i.pending > a) {
                                e.adler = s(e.adler, i.pending_buf, i.pending - a, a);
                            }
                            te(e);
                            a = i.pending;
                            if (i.pending === i.pending_buf_size) {
                                break;
                            }
                        }
                        ie(i, i.gzhead.extra[i.gzindex] & 255);
                        i.gzindex++;
                    }
                    if (i.gzhead.hcrc && i.pending > a) {
                        e.adler = s(e.adler, i.pending_buf, i.pending - a, a);
                    }
                    if (i.gzindex === i.gzhead.extra.length) {
                        i.gzindex = 0;
                        i.status = q;
                    }
                } else {
                    i.status = q;
                }
            }
            if (i.status === q) {
                if (i.gzhead.name) {
                    a = i.pending;
                    do {
                        if (i.pending === i.pending_buf_size) {
                            if (i.gzhead.hcrc && i.pending > a) {
                                e.adler = s(e.adler, i.pending_buf, i.pending - a, a);
                            }
                            te(e);
                            a = i.pending;
                            if (i.pending === i.pending_buf_size) {
                                f = 1;
                                break;
                            }
                        }
                        if (i.gzindex < i.gzhead.name.length) {
                            f = i.gzhead.name.charCodeAt(i.gzindex++) & 255;
                        } else {
                            f = 0;
                        }
                        ie(i, f);
                    } while (f !== 0);
                    if (i.gzhead.hcrc && i.pending > a) {
                        e.adler = s(e.adler, i.pending_buf, i.pending - a, a);
                    }
                    if (f === 0) {
                        i.gzindex = 0;
                        i.status = W;
                    }
                } else {
                    i.status = W;
                }
            }
            if (i.status === W) {
                if (i.gzhead.comment) {
                    a = i.pending;
                    do {
                        if (i.pending === i.pending_buf_size) {
                            if (i.gzhead.hcrc && i.pending > a) {
                                e.adler = s(e.adler, i.pending_buf, i.pending - a, a);
                            }
                            te(e);
                            a = i.pending;
                            if (i.pending === i.pending_buf_size) {
                                f = 1;
                                break;
                            }
                        }
                        if (i.gzindex < i.gzhead.comment.length) {
                            f = i.gzhead.comment.charCodeAt(i.gzindex++) & 255;
                        } else {
                            f = 0;
                        }
                        ie(i, f);
                    } while (f !== 0);
                    if (i.gzhead.hcrc && i.pending > a) {
                        e.adler = s(e.adler, i.pending_buf, i.pending - a, a);
                    }
                    if (f === 0) {
                        i.status = K;
                    }
                } else {
                    i.status = K;
                }
            }
            if (i.status === K) {
                if (i.gzhead.hcrc) {
                    if (i.pending + 2 > i.pending_buf_size) {
                        te(e);
                    }
                    if (i.pending + 2 <= i.pending_buf_size) {
                        ie(i, e.adler & 255);
                        ie(i, e.adler >> 8 & 255);
                        e.adler = 0;
                        i.status = H;
                    }
                } else {
                    i.status = H;
                }
            }
            if (i.pending !== 0) {
                te(e);
                if (e.avail_out === 0) {
                    i.last_flush = -1;
                    return l;
                }
            } else if (e.avail_in === 0 && $(t) <= $(r) && t !== h) {
                return Q(e, m);
            }
            if (i.status === Z && e.avail_in !== 0) {
                return Q(e, m);
            }
            if (e.avail_in !== 0 || i.lookahead !== 0 || t !== o && i.status !== Z) {
                var y = i.strategy === w ? de(i, t) : i.strategy === _ ? he(i, t) : pe[i.level].func(i, t);
                if (y === X || y === Y) {
                    i.status = Z;
                }
                if (y === V || y === X) {
                    if (e.avail_out === 0) {
                        i.last_flush = -1;
                    }
                    return l;
                }
                if (y === G) {
                    if (t === c) {
                        n._tr_align(i);
                    } else if (t !== d) {
                        n._tr_stored_block(i, 0, 0, false);
                        if (t === u) {
                            ee(i.head);
                            if (i.lookahead === 0) {
                                i.strstart = 0;
                                i.block_start = 0;
                                i.insert = 0;
                            }
                        }
                    }
                    te(e);
                    if (e.avail_out === 0) {
                        i.last_flush = -1;
                        return l;
                    }
                }
            }
            if (t !== h) {
                return l;
            }
            if (i.wrap <= 0) {
                return p;
            }
            if (i.wrap === 2) {
                ie(i, e.adler & 255);
                ie(i, e.adler >> 8 & 255);
                ie(i, e.adler >> 16 & 255);
                ie(i, e.adler >> 24 & 255);
                ie(i, e.total_in & 255);
                ie(i, e.total_in >> 8 & 255);
                ie(i, e.total_in >> 16 & 255);
                ie(i, e.total_in >> 24 & 255);
            } else {
                ne(i, e.adler >>> 16);
                ne(i, e.adler & 65535);
            }
            te(e);
            if (i.wrap > 0) {
                i.wrap = -i.wrap;
            }
            return i.pending !== 0 ? l : p;
        }
        function ke(e) {
            var t;
            if (!e || !e.state) {
                return v;
            }
            t = e.state.status;
            if (t !== U && t !== F && t !== q && t !== W && t !== K && t !== H && t !== Z) {
                return Q(e, v);
            }
            e.state = null;
            return t === H ? Q(e, b) : l;
        }
        function xe(e, t) {
            var r = t.length;
            var n;
            var s, f;
            var o;
            var c;
            var u;
            var h;
            var d;
            if (!e || !e.state) {
                return v;
            }
            n = e.state;
            o = n.wrap;
            if (o === 2 || o === 1 && n.status !== U || n.lookahead) {
                return v;
            }
            if (o === 1) {
                e.adler = a(e.adler, t, r, 0);
            }
            n.wrap = 0;
            if (r >= n.w_size) {
                if (o === 0) {
                    ee(n.head);
                    n.strstart = 0;
                    n.block_start = 0;
                    n.insert = 0;
                }
                d = new i.Buf8(n.w_size);
                i.arraySet(d, t, r - n.w_size, n.w_size, 0);
                t = d;
                r = n.w_size;
            }
            c = e.avail_in;
            u = e.next_in;
            h = e.input;
            e.avail_in = r;
            e.next_in = 0;
            e.input = t;
            fe(n);
            while (n.lookahead >= D) {
                s = n.strstart;
                f = n.lookahead - (D - 1);
                do {
                    n.ins_h = (n.ins_h << n.hash_shift ^ n.window[s + D - 1]) & n.hash_mask;
                    n.prev[s & n.w_mask] = n.head[n.ins_h];
                    n.head[n.ins_h] = s;
                    s++;
                } while (--f);
                n.strstart = s;
                n.lookahead = D - 1;
                fe(n);
            }
            n.strstart += n.lookahead;
            n.block_start = n.strstart;
            n.insert = n.lookahead;
            n.lookahead = 0;
            n.match_length = n.prev_length = D - 1;
            n.match_available = 0;
            e.next_in = u;
            e.input = h;
            e.avail_in = c;
            n.wrap = o;
            return l;
        }
        r.deflateInit = _e;
        r.deflateInit2 = we;
        r.deflateReset = ge;
        r.deflateResetKeep = me;
        r.deflateSetHeader = ye;
        r.deflate = Se;
        r.deflateEnd = ke;
        r.deflateSetDictionary = xe;
        r.deflateInfo = "pako deflate (from Nodeca project)";
    }, {
        "../utils/common": 186,
        "./adler32": 188,
        "./crc32": 190,
        "./messages": 196,
        "./trees": 197
    } ],
    192: [ function(e, t, r) {
        "use strict";
        function i() {
            this.text = 0;
            this.time = 0;
            this.xflags = 0;
            this.os = 0;
            this.extra = null;
            this.extra_len = 0;
            this.name = "";
            this.comment = "";
            this.hcrc = 0;
            this.done = false;
        }
        t.exports = i;
    }, {} ],
    193: [ function(e, t, r) {
        "use strict";
        var i = 30;
        var n = 12;
        t.exports = function e(t, r) {
            var a;
            var s;
            var f;
            var o;
            var c;
            var u;
            var h;
            var d;
            var l;
            var p;
            var v;
            var b;
            var m;
            var g;
            var y;
            var w;
            var _;
            var S;
            var k;
            var x;
            var E;
            var A;
            var M;
            var B, I;
            a = t.state;
            s = t.next_in;
            B = t.input;
            f = s + (t.avail_in - 5);
            o = t.next_out;
            I = t.output;
            c = o - (r - t.avail_out);
            u = o + (t.avail_out - 257);
            h = a.dmax;
            d = a.wsize;
            l = a.whave;
            p = a.wnext;
            v = a.window;
            b = a.hold;
            m = a.bits;
            g = a.lencode;
            y = a.distcode;
            w = (1 << a.lenbits) - 1;
            _ = (1 << a.distbits) - 1;
            e: do {
                if (m < 15) {
                    b += B[s++] << m;
                    m += 8;
                    b += B[s++] << m;
                    m += 8;
                }
                S = g[b & w];
                t: for (;;) {
                    k = S >>> 24;
                    b >>>= k;
                    m -= k;
                    k = S >>> 16 & 255;
                    if (k === 0) {
                        I[o++] = S & 65535;
                    } else if (k & 16) {
                        x = S & 65535;
                        k &= 15;
                        if (k) {
                            if (m < k) {
                                b += B[s++] << m;
                                m += 8;
                            }
                            x += b & (1 << k) - 1;
                            b >>>= k;
                            m -= k;
                        }
                        if (m < 15) {
                            b += B[s++] << m;
                            m += 8;
                            b += B[s++] << m;
                            m += 8;
                        }
                        S = y[b & _];
                        r: for (;;) {
                            k = S >>> 24;
                            b >>>= k;
                            m -= k;
                            k = S >>> 16 & 255;
                            if (k & 16) {
                                E = S & 65535;
                                k &= 15;
                                if (m < k) {
                                    b += B[s++] << m;
                                    m += 8;
                                    if (m < k) {
                                        b += B[s++] << m;
                                        m += 8;
                                    }
                                }
                                E += b & (1 << k) - 1;
                                if (E > h) {
                                    t.msg = "invalid distance too far back";
                                    a.mode = i;
                                    break e;
                                }
                                b >>>= k;
                                m -= k;
                                k = o - c;
                                if (E > k) {
                                    k = E - k;
                                    if (k > l) {
                                        if (a.sane) {
                                            t.msg = "invalid distance too far back";
                                            a.mode = i;
                                            break e;
                                        }
                                    }
                                    A = 0;
                                    M = v;
                                    if (p === 0) {
                                        A += d - k;
                                        if (k < x) {
                                            x -= k;
                                            do {
                                                I[o++] = v[A++];
                                            } while (--k);
                                            A = o - E;
                                            M = I;
                                        }
                                    } else if (p < k) {
                                        A += d + p - k;
                                        k -= p;
                                        if (k < x) {
                                            x -= k;
                                            do {
                                                I[o++] = v[A++];
                                            } while (--k);
                                            A = 0;
                                            if (p < x) {
                                                k = p;
                                                x -= k;
                                                do {
                                                    I[o++] = v[A++];
                                                } while (--k);
                                                A = o - E;
                                                M = I;
                                            }
                                        }
                                    } else {
                                        A += p - k;
                                        if (k < x) {
                                            x -= k;
                                            do {
                                                I[o++] = v[A++];
                                            } while (--k);
                                            A = o - E;
                                            M = I;
                                        }
                                    }
                                    while (x > 2) {
                                        I[o++] = M[A++];
                                        I[o++] = M[A++];
                                        I[o++] = M[A++];
                                        x -= 3;
                                    }
                                    if (x) {
                                        I[o++] = M[A++];
                                        if (x > 1) {
                                            I[o++] = M[A++];
                                        }
                                    }
                                } else {
                                    A = o - E;
                                    do {
                                        I[o++] = I[A++];
                                        I[o++] = I[A++];
                                        I[o++] = I[A++];
                                        x -= 3;
                                    } while (x > 2);
                                    if (x) {
                                        I[o++] = I[A++];
                                        if (x > 1) {
                                            I[o++] = I[A++];
                                        }
                                    }
                                }
                            } else if ((k & 64) === 0) {
                                S = y[(S & 65535) + (b & (1 << k) - 1)];
                                continue r;
                            } else {
                                t.msg = "invalid distance code";
                                a.mode = i;
                                break e;
                            }
                            break;
                        }
                    } else if ((k & 64) === 0) {
                        S = g[(S & 65535) + (b & (1 << k) - 1)];
                        continue t;
                    } else if (k & 32) {
                        a.mode = n;
                        break e;
                    } else {
                        t.msg = "invalid literal/length code";
                        a.mode = i;
                        break e;
                    }
                    break;
                }
            } while (s < f && o < u);
            x = m >> 3;
            s -= x;
            m -= x << 3;
            b &= (1 << m) - 1;
            t.next_in = s;
            t.next_out = o;
            t.avail_in = s < f ? 5 + (f - s) : 5 - (s - f);
            t.avail_out = o < u ? 257 + (u - o) : 257 - (o - u);
            a.hold = b;
            a.bits = m;
            return;
        };
    }, {} ],
    194: [ function(e, t, r) {
        "use strict";
        var i = e("../utils/common");
        var n = e("./adler32");
        var a = e("./crc32");
        var s = e("./inffast");
        var f = e("./inftrees");
        var o = 0;
        var c = 1;
        var u = 2;
        var h = 4;
        var d = 5;
        var l = 6;
        var p = 0;
        var v = 1;
        var b = 2;
        var m = -2;
        var g = -3;
        var y = -4;
        var w = -5;
        var _ = 8;
        var S = 1;
        var k = 2;
        var x = 3;
        var E = 4;
        var A = 5;
        var M = 6;
        var B = 7;
        var I = 8;
        var j = 9;
        var C = 10;
        var R = 11;
        var z = 12;
        var T = 13;
        var O = 14;
        var D = 15;
        var P = 16;
        var L = 17;
        var N = 18;
        var U = 19;
        var F = 20;
        var q = 21;
        var W = 22;
        var K = 23;
        var H = 24;
        var Z = 25;
        var V = 26;
        var G = 27;
        var X = 28;
        var Y = 29;
        var J = 30;
        var Q = 31;
        var $ = 32;
        var ee = 852;
        var te = 592;
        var re = 15;
        var ie = re;
        function ne(e) {
            return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
        }
        function ae() {
            this.mode = 0;
            this.last = false;
            this.wrap = 0;
            this.havedict = false;
            this.flags = 0;
            this.dmax = 0;
            this.check = 0;
            this.total = 0;
            this.head = null;
            this.wbits = 0;
            this.wsize = 0;
            this.whave = 0;
            this.wnext = 0;
            this.window = null;
            this.hold = 0;
            this.bits = 0;
            this.length = 0;
            this.offset = 0;
            this.extra = 0;
            this.lencode = null;
            this.distcode = null;
            this.lenbits = 0;
            this.distbits = 0;
            this.ncode = 0;
            this.nlen = 0;
            this.ndist = 0;
            this.have = 0;
            this.next = null;
            this.lens = new i.Buf16(320);
            this.work = new i.Buf16(288);
            this.lendyn = null;
            this.distdyn = null;
            this.sane = 0;
            this.back = 0;
            this.was = 0;
        }
        function se(e) {
            var t;
            if (!e || !e.state) {
                return m;
            }
            t = e.state;
            e.total_in = e.total_out = t.total = 0;
            e.msg = "";
            if (t.wrap) {
                e.adler = t.wrap & 1;
            }
            t.mode = S;
            t.last = 0;
            t.havedict = 0;
            t.dmax = 32768;
            t.head = null;
            t.hold = 0;
            t.bits = 0;
            t.lencode = t.lendyn = new i.Buf32(ee);
            t.distcode = t.distdyn = new i.Buf32(te);
            t.sane = 1;
            t.back = -1;
            return p;
        }
        function fe(e) {
            var t;
            if (!e || !e.state) {
                return m;
            }
            t = e.state;
            t.wsize = 0;
            t.whave = 0;
            t.wnext = 0;
            return se(e);
        }
        function oe(e, t) {
            var r;
            var i;
            if (!e || !e.state) {
                return m;
            }
            i = e.state;
            if (t < 0) {
                r = 0;
                t = -t;
            } else {
                r = (t >> 4) + 1;
                if (t < 48) {
                    t &= 15;
                }
            }
            if (t && (t < 8 || t > 15)) {
                return m;
            }
            if (i.window !== null && i.wbits !== t) {
                i.window = null;
            }
            i.wrap = r;
            i.wbits = t;
            return fe(e);
        }
        function ce(e, t) {
            var r;
            var i;
            if (!e) {
                return m;
            }
            i = new ae();
            e.state = i;
            i.window = null;
            r = oe(e, t);
            if (r !== p) {
                e.state = null;
            }
            return r;
        }
        function ue(e) {
            return ce(e, ie);
        }
        var he = true;
        var de, le;
        function pe(e) {
            if (he) {
                var t;
                de = new i.Buf32(512);
                le = new i.Buf32(32);
                t = 0;
                while (t < 144) {
                    e.lens[t++] = 8;
                }
                while (t < 256) {
                    e.lens[t++] = 9;
                }
                while (t < 280) {
                    e.lens[t++] = 7;
                }
                while (t < 288) {
                    e.lens[t++] = 8;
                }
                f(c, e.lens, 0, 288, de, 0, e.work, {
                    bits: 9
                });
                t = 0;
                while (t < 32) {
                    e.lens[t++] = 5;
                }
                f(u, e.lens, 0, 32, le, 0, e.work, {
                    bits: 5
                });
                he = false;
            }
            e.lencode = de;
            e.lenbits = 9;
            e.distcode = le;
            e.distbits = 5;
        }
        function ve(e, t, r, n) {
            var a;
            var s = e.state;
            if (s.window === null) {
                s.wsize = 1 << s.wbits;
                s.wnext = 0;
                s.whave = 0;
                s.window = new i.Buf8(s.wsize);
            }
            if (n >= s.wsize) {
                i.arraySet(s.window, t, r - s.wsize, s.wsize, 0);
                s.wnext = 0;
                s.whave = s.wsize;
            } else {
                a = s.wsize - s.wnext;
                if (a > n) {
                    a = n;
                }
                i.arraySet(s.window, t, r - n, a, s.wnext);
                n -= a;
                if (n) {
                    i.arraySet(s.window, t, r - n, n, 0);
                    s.wnext = n;
                    s.whave = s.wsize;
                } else {
                    s.wnext += a;
                    if (s.wnext === s.wsize) {
                        s.wnext = 0;
                    }
                    if (s.whave < s.wsize) {
                        s.whave += a;
                    }
                }
            }
            return 0;
        }
        function be(e, t) {
            var r;
            var ee, te;
            var re;
            var ie;
            var ae, se;
            var fe;
            var oe;
            var ce, ue;
            var he;
            var de;
            var le;
            var be = 0;
            var me, ge, ye;
            var we, _e, Se;
            var ke;
            var xe;
            var Ee = new i.Buf8(4);
            var Ae;
            var Me;
            var Be = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];
            if (!e || !e.state || !e.output || !e.input && e.avail_in !== 0) {
                return m;
            }
            r = e.state;
            if (r.mode === z) {
                r.mode = T;
            }
            ie = e.next_out;
            te = e.output;
            se = e.avail_out;
            re = e.next_in;
            ee = e.input;
            ae = e.avail_in;
            fe = r.hold;
            oe = r.bits;
            ce = ae;
            ue = se;
            xe = p;
            e: for (;;) {
                switch (r.mode) {
                  case S:
                    if (r.wrap === 0) {
                        r.mode = T;
                        break;
                    }
                    while (oe < 16) {
                        if (ae === 0) {
                            break e;
                        }
                        ae--;
                        fe += ee[re++] << oe;
                        oe += 8;
                    }
                    if (r.wrap & 2 && fe === 35615) {
                        r.check = 0;
                        Ee[0] = fe & 255;
                        Ee[1] = fe >>> 8 & 255;
                        r.check = a(r.check, Ee, 2, 0);
                        fe = 0;
                        oe = 0;
                        r.mode = k;
                        break;
                    }
                    r.flags = 0;
                    if (r.head) {
                        r.head.done = false;
                    }
                    if (!(r.wrap & 1) || (((fe & 255) << 8) + (fe >> 8)) % 31) {
                        e.msg = "incorrect header check";
                        r.mode = J;
                        break;
                    }
                    if ((fe & 15) !== _) {
                        e.msg = "unknown compression method";
                        r.mode = J;
                        break;
                    }
                    fe >>>= 4;
                    oe -= 4;
                    ke = (fe & 15) + 8;
                    if (r.wbits === 0) {
                        r.wbits = ke;
                    } else if (ke > r.wbits) {
                        e.msg = "invalid window size";
                        r.mode = J;
                        break;
                    }
                    r.dmax = 1 << ke;
                    e.adler = r.check = 1;
                    r.mode = fe & 512 ? C : z;
                    fe = 0;
                    oe = 0;
                    break;

                  case k:
                    while (oe < 16) {
                        if (ae === 0) {
                            break e;
                        }
                        ae--;
                        fe += ee[re++] << oe;
                        oe += 8;
                    }
                    r.flags = fe;
                    if ((r.flags & 255) !== _) {
                        e.msg = "unknown compression method";
                        r.mode = J;
                        break;
                    }
                    if (r.flags & 57344) {
                        e.msg = "unknown header flags set";
                        r.mode = J;
                        break;
                    }
                    if (r.head) {
                        r.head.text = fe >> 8 & 1;
                    }
                    if (r.flags & 512) {
                        Ee[0] = fe & 255;
                        Ee[1] = fe >>> 8 & 255;
                        r.check = a(r.check, Ee, 2, 0);
                    }
                    fe = 0;
                    oe = 0;
                    r.mode = x;

                  case x:
                    while (oe < 32) {
                        if (ae === 0) {
                            break e;
                        }
                        ae--;
                        fe += ee[re++] << oe;
                        oe += 8;
                    }
                    if (r.head) {
                        r.head.time = fe;
                    }
                    if (r.flags & 512) {
                        Ee[0] = fe & 255;
                        Ee[1] = fe >>> 8 & 255;
                        Ee[2] = fe >>> 16 & 255;
                        Ee[3] = fe >>> 24 & 255;
                        r.check = a(r.check, Ee, 4, 0);
                    }
                    fe = 0;
                    oe = 0;
                    r.mode = E;

                  case E:
                    while (oe < 16) {
                        if (ae === 0) {
                            break e;
                        }
                        ae--;
                        fe += ee[re++] << oe;
                        oe += 8;
                    }
                    if (r.head) {
                        r.head.xflags = fe & 255;
                        r.head.os = fe >> 8;
                    }
                    if (r.flags & 512) {
                        Ee[0] = fe & 255;
                        Ee[1] = fe >>> 8 & 255;
                        r.check = a(r.check, Ee, 2, 0);
                    }
                    fe = 0;
                    oe = 0;
                    r.mode = A;

                  case A:
                    if (r.flags & 1024) {
                        while (oe < 16) {
                            if (ae === 0) {
                                break e;
                            }
                            ae--;
                            fe += ee[re++] << oe;
                            oe += 8;
                        }
                        r.length = fe;
                        if (r.head) {
                            r.head.extra_len = fe;
                        }
                        if (r.flags & 512) {
                            Ee[0] = fe & 255;
                            Ee[1] = fe >>> 8 & 255;
                            r.check = a(r.check, Ee, 2, 0);
                        }
                        fe = 0;
                        oe = 0;
                    } else if (r.head) {
                        r.head.extra = null;
                    }
                    r.mode = M;

                  case M:
                    if (r.flags & 1024) {
                        he = r.length;
                        if (he > ae) {
                            he = ae;
                        }
                        if (he) {
                            if (r.head) {
                                ke = r.head.extra_len - r.length;
                                if (!r.head.extra) {
                                    r.head.extra = new Array(r.head.extra_len);
                                }
                                i.arraySet(r.head.extra, ee, re, he, ke);
                            }
                            if (r.flags & 512) {
                                r.check = a(r.check, ee, he, re);
                            }
                            ae -= he;
                            re += he;
                            r.length -= he;
                        }
                        if (r.length) {
                            break e;
                        }
                    }
                    r.length = 0;
                    r.mode = B;

                  case B:
                    if (r.flags & 2048) {
                        if (ae === 0) {
                            break e;
                        }
                        he = 0;
                        do {
                            ke = ee[re + he++];
                            if (r.head && ke && r.length < 65536) {
                                r.head.name += String.fromCharCode(ke);
                            }
                        } while (ke && he < ae);
                        if (r.flags & 512) {
                            r.check = a(r.check, ee, he, re);
                        }
                        ae -= he;
                        re += he;
                        if (ke) {
                            break e;
                        }
                    } else if (r.head) {
                        r.head.name = null;
                    }
                    r.length = 0;
                    r.mode = I;

                  case I:
                    if (r.flags & 4096) {
                        if (ae === 0) {
                            break e;
                        }
                        he = 0;
                        do {
                            ke = ee[re + he++];
                            if (r.head && ke && r.length < 65536) {
                                r.head.comment += String.fromCharCode(ke);
                            }
                        } while (ke && he < ae);
                        if (r.flags & 512) {
                            r.check = a(r.check, ee, he, re);
                        }
                        ae -= he;
                        re += he;
                        if (ke) {
                            break e;
                        }
                    } else if (r.head) {
                        r.head.comment = null;
                    }
                    r.mode = j;

                  case j:
                    if (r.flags & 512) {
                        while (oe < 16) {
                            if (ae === 0) {
                                break e;
                            }
                            ae--;
                            fe += ee[re++] << oe;
                            oe += 8;
                        }
                        if (fe !== (r.check & 65535)) {
                            e.msg = "header crc mismatch";
                            r.mode = J;
                            break;
                        }
                        fe = 0;
                        oe = 0;
                    }
                    if (r.head) {
                        r.head.hcrc = r.flags >> 9 & 1;
                        r.head.done = true;
                    }
                    e.adler = r.check = 0;
                    r.mode = z;
                    break;

                  case C:
                    while (oe < 32) {
                        if (ae === 0) {
                            break e;
                        }
                        ae--;
                        fe += ee[re++] << oe;
                        oe += 8;
                    }
                    e.adler = r.check = ne(fe);
                    fe = 0;
                    oe = 0;
                    r.mode = R;

                  case R:
                    if (r.havedict === 0) {
                        e.next_out = ie;
                        e.avail_out = se;
                        e.next_in = re;
                        e.avail_in = ae;
                        r.hold = fe;
                        r.bits = oe;
                        return b;
                    }
                    e.adler = r.check = 1;
                    r.mode = z;

                  case z:
                    if (t === d || t === l) {
                        break e;
                    }

                  case T:
                    if (r.last) {
                        fe >>>= oe & 7;
                        oe -= oe & 7;
                        r.mode = G;
                        break;
                    }
                    while (oe < 3) {
                        if (ae === 0) {
                            break e;
                        }
                        ae--;
                        fe += ee[re++] << oe;
                        oe += 8;
                    }
                    r.last = fe & 1;
                    fe >>>= 1;
                    oe -= 1;
                    switch (fe & 3) {
                      case 0:
                        r.mode = O;
                        break;

                      case 1:
                        pe(r);
                        r.mode = F;
                        if (t === l) {
                            fe >>>= 2;
                            oe -= 2;
                            break e;
                        }
                        break;

                      case 2:
                        r.mode = L;
                        break;

                      case 3:
                        e.msg = "invalid block type";
                        r.mode = J;
                    }
                    fe >>>= 2;
                    oe -= 2;
                    break;

                  case O:
                    fe >>>= oe & 7;
                    oe -= oe & 7;
                    while (oe < 32) {
                        if (ae === 0) {
                            break e;
                        }
                        ae--;
                        fe += ee[re++] << oe;
                        oe += 8;
                    }
                    if ((fe & 65535) !== (fe >>> 16 ^ 65535)) {
                        e.msg = "invalid stored block lengths";
                        r.mode = J;
                        break;
                    }
                    r.length = fe & 65535;
                    fe = 0;
                    oe = 0;
                    r.mode = D;
                    if (t === l) {
                        break e;
                    }

                  case D:
                    r.mode = P;

                  case P:
                    he = r.length;
                    if (he) {
                        if (he > ae) {
                            he = ae;
                        }
                        if (he > se) {
                            he = se;
                        }
                        if (he === 0) {
                            break e;
                        }
                        i.arraySet(te, ee, re, he, ie);
                        ae -= he;
                        re += he;
                        se -= he;
                        ie += he;
                        r.length -= he;
                        break;
                    }
                    r.mode = z;
                    break;

                  case L:
                    while (oe < 14) {
                        if (ae === 0) {
                            break e;
                        }
                        ae--;
                        fe += ee[re++] << oe;
                        oe += 8;
                    }
                    r.nlen = (fe & 31) + 257;
                    fe >>>= 5;
                    oe -= 5;
                    r.ndist = (fe & 31) + 1;
                    fe >>>= 5;
                    oe -= 5;
                    r.ncode = (fe & 15) + 4;
                    fe >>>= 4;
                    oe -= 4;
                    if (r.nlen > 286 || r.ndist > 30) {
                        e.msg = "too many length or distance symbols";
                        r.mode = J;
                        break;
                    }
                    r.have = 0;
                    r.mode = N;

                  case N:
                    while (r.have < r.ncode) {
                        while (oe < 3) {
                            if (ae === 0) {
                                break e;
                            }
                            ae--;
                            fe += ee[re++] << oe;
                            oe += 8;
                        }
                        r.lens[Be[r.have++]] = fe & 7;
                        fe >>>= 3;
                        oe -= 3;
                    }
                    while (r.have < 19) {
                        r.lens[Be[r.have++]] = 0;
                    }
                    r.lencode = r.lendyn;
                    r.lenbits = 7;
                    Ae = {
                        bits: r.lenbits
                    };
                    xe = f(o, r.lens, 0, 19, r.lencode, 0, r.work, Ae);
                    r.lenbits = Ae.bits;
                    if (xe) {
                        e.msg = "invalid code lengths set";
                        r.mode = J;
                        break;
                    }
                    r.have = 0;
                    r.mode = U;

                  case U:
                    while (r.have < r.nlen + r.ndist) {
                        for (;;) {
                            be = r.lencode[fe & (1 << r.lenbits) - 1];
                            me = be >>> 24;
                            ge = be >>> 16 & 255;
                            ye = be & 65535;
                            if (me <= oe) {
                                break;
                            }
                            if (ae === 0) {
                                break e;
                            }
                            ae--;
                            fe += ee[re++] << oe;
                            oe += 8;
                        }
                        if (ye < 16) {
                            fe >>>= me;
                            oe -= me;
                            r.lens[r.have++] = ye;
                        } else {
                            if (ye === 16) {
                                Me = me + 2;
                                while (oe < Me) {
                                    if (ae === 0) {
                                        break e;
                                    }
                                    ae--;
                                    fe += ee[re++] << oe;
                                    oe += 8;
                                }
                                fe >>>= me;
                                oe -= me;
                                if (r.have === 0) {
                                    e.msg = "invalid bit length repeat";
                                    r.mode = J;
                                    break;
                                }
                                ke = r.lens[r.have - 1];
                                he = 3 + (fe & 3);
                                fe >>>= 2;
                                oe -= 2;
                            } else if (ye === 17) {
                                Me = me + 3;
                                while (oe < Me) {
                                    if (ae === 0) {
                                        break e;
                                    }
                                    ae--;
                                    fe += ee[re++] << oe;
                                    oe += 8;
                                }
                                fe >>>= me;
                                oe -= me;
                                ke = 0;
                                he = 3 + (fe & 7);
                                fe >>>= 3;
                                oe -= 3;
                            } else {
                                Me = me + 7;
                                while (oe < Me) {
                                    if (ae === 0) {
                                        break e;
                                    }
                                    ae--;
                                    fe += ee[re++] << oe;
                                    oe += 8;
                                }
                                fe >>>= me;
                                oe -= me;
                                ke = 0;
                                he = 11 + (fe & 127);
                                fe >>>= 7;
                                oe -= 7;
                            }
                            if (r.have + he > r.nlen + r.ndist) {
                                e.msg = "invalid bit length repeat";
                                r.mode = J;
                                break;
                            }
                            while (he--) {
                                r.lens[r.have++] = ke;
                            }
                        }
                    }
                    if (r.mode === J) {
                        break;
                    }
                    if (r.lens[256] === 0) {
                        e.msg = "invalid code -- missing end-of-block";
                        r.mode = J;
                        break;
                    }
                    r.lenbits = 9;
                    Ae = {
                        bits: r.lenbits
                    };
                    xe = f(c, r.lens, 0, r.nlen, r.lencode, 0, r.work, Ae);
                    r.lenbits = Ae.bits;
                    if (xe) {
                        e.msg = "invalid literal/lengths set";
                        r.mode = J;
                        break;
                    }
                    r.distbits = 6;
                    r.distcode = r.distdyn;
                    Ae = {
                        bits: r.distbits
                    };
                    xe = f(u, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, Ae);
                    r.distbits = Ae.bits;
                    if (xe) {
                        e.msg = "invalid distances set";
                        r.mode = J;
                        break;
                    }
                    r.mode = F;
                    if (t === l) {
                        break e;
                    }

                  case F:
                    r.mode = q;

                  case q:
                    if (ae >= 6 && se >= 258) {
                        e.next_out = ie;
                        e.avail_out = se;
                        e.next_in = re;
                        e.avail_in = ae;
                        r.hold = fe;
                        r.bits = oe;
                        s(e, ue);
                        ie = e.next_out;
                        te = e.output;
                        se = e.avail_out;
                        re = e.next_in;
                        ee = e.input;
                        ae = e.avail_in;
                        fe = r.hold;
                        oe = r.bits;
                        if (r.mode === z) {
                            r.back = -1;
                        }
                        break;
                    }
                    r.back = 0;
                    for (;;) {
                        be = r.lencode[fe & (1 << r.lenbits) - 1];
                        me = be >>> 24;
                        ge = be >>> 16 & 255;
                        ye = be & 65535;
                        if (me <= oe) {
                            break;
                        }
                        if (ae === 0) {
                            break e;
                        }
                        ae--;
                        fe += ee[re++] << oe;
                        oe += 8;
                    }
                    if (ge && (ge & 240) === 0) {
                        we = me;
                        _e = ge;
                        Se = ye;
                        for (;;) {
                            be = r.lencode[Se + ((fe & (1 << we + _e) - 1) >> we)];
                            me = be >>> 24;
                            ge = be >>> 16 & 255;
                            ye = be & 65535;
                            if (we + me <= oe) {
                                break;
                            }
                            if (ae === 0) {
                                break e;
                            }
                            ae--;
                            fe += ee[re++] << oe;
                            oe += 8;
                        }
                        fe >>>= we;
                        oe -= we;
                        r.back += we;
                    }
                    fe >>>= me;
                    oe -= me;
                    r.back += me;
                    r.length = ye;
                    if (ge === 0) {
                        r.mode = V;
                        break;
                    }
                    if (ge & 32) {
                        r.back = -1;
                        r.mode = z;
                        break;
                    }
                    if (ge & 64) {
                        e.msg = "invalid literal/length code";
                        r.mode = J;
                        break;
                    }
                    r.extra = ge & 15;
                    r.mode = W;

                  case W:
                    if (r.extra) {
                        Me = r.extra;
                        while (oe < Me) {
                            if (ae === 0) {
                                break e;
                            }
                            ae--;
                            fe += ee[re++] << oe;
                            oe += 8;
                        }
                        r.length += fe & (1 << r.extra) - 1;
                        fe >>>= r.extra;
                        oe -= r.extra;
                        r.back += r.extra;
                    }
                    r.was = r.length;
                    r.mode = K;

                  case K:
                    for (;;) {
                        be = r.distcode[fe & (1 << r.distbits) - 1];
                        me = be >>> 24;
                        ge = be >>> 16 & 255;
                        ye = be & 65535;
                        if (me <= oe) {
                            break;
                        }
                        if (ae === 0) {
                            break e;
                        }
                        ae--;
                        fe += ee[re++] << oe;
                        oe += 8;
                    }
                    if ((ge & 240) === 0) {
                        we = me;
                        _e = ge;
                        Se = ye;
                        for (;;) {
                            be = r.distcode[Se + ((fe & (1 << we + _e) - 1) >> we)];
                            me = be >>> 24;
                            ge = be >>> 16 & 255;
                            ye = be & 65535;
                            if (we + me <= oe) {
                                break;
                            }
                            if (ae === 0) {
                                break e;
                            }
                            ae--;
                            fe += ee[re++] << oe;
                            oe += 8;
                        }
                        fe >>>= we;
                        oe -= we;
                        r.back += we;
                    }
                    fe >>>= me;
                    oe -= me;
                    r.back += me;
                    if (ge & 64) {
                        e.msg = "invalid distance code";
                        r.mode = J;
                        break;
                    }
                    r.offset = ye;
                    r.extra = ge & 15;
                    r.mode = H;

                  case H:
                    if (r.extra) {
                        Me = r.extra;
                        while (oe < Me) {
                            if (ae === 0) {
                                break e;
                            }
                            ae--;
                            fe += ee[re++] << oe;
                            oe += 8;
                        }
                        r.offset += fe & (1 << r.extra) - 1;
                        fe >>>= r.extra;
                        oe -= r.extra;
                        r.back += r.extra;
                    }
                    if (r.offset > r.dmax) {
                        e.msg = "invalid distance too far back";
                        r.mode = J;
                        break;
                    }
                    r.mode = Z;

                  case Z:
                    if (se === 0) {
                        break e;
                    }
                    he = ue - se;
                    if (r.offset > he) {
                        he = r.offset - he;
                        if (he > r.whave) {
                            if (r.sane) {
                                e.msg = "invalid distance too far back";
                                r.mode = J;
                                break;
                            }
                        }
                        if (he > r.wnext) {
                            he -= r.wnext;
                            de = r.wsize - he;
                        } else {
                            de = r.wnext - he;
                        }
                        if (he > r.length) {
                            he = r.length;
                        }
                        le = r.window;
                    } else {
                        le = te;
                        de = ie - r.offset;
                        he = r.length;
                    }
                    if (he > se) {
                        he = se;
                    }
                    se -= he;
                    r.length -= he;
                    do {
                        te[ie++] = le[de++];
                    } while (--he);
                    if (r.length === 0) {
                        r.mode = q;
                    }
                    break;

                  case V:
                    if (se === 0) {
                        break e;
                    }
                    te[ie++] = r.length;
                    se--;
                    r.mode = q;
                    break;

                  case G:
                    if (r.wrap) {
                        while (oe < 32) {
                            if (ae === 0) {
                                break e;
                            }
                            ae--;
                            fe |= ee[re++] << oe;
                            oe += 8;
                        }
                        ue -= se;
                        e.total_out += ue;
                        r.total += ue;
                        if (ue) {
                            e.adler = r.check = r.flags ? a(r.check, te, ue, ie - ue) : n(r.check, te, ue, ie - ue);
                        }
                        ue = se;
                        if ((r.flags ? fe : ne(fe)) !== r.check) {
                            e.msg = "incorrect data check";
                            r.mode = J;
                            break;
                        }
                        fe = 0;
                        oe = 0;
                    }
                    r.mode = X;

                  case X:
                    if (r.wrap && r.flags) {
                        while (oe < 32) {
                            if (ae === 0) {
                                break e;
                            }
                            ae--;
                            fe += ee[re++] << oe;
                            oe += 8;
                        }
                        if (fe !== (r.total & 4294967295)) {
                            e.msg = "incorrect length check";
                            r.mode = J;
                            break;
                        }
                        fe = 0;
                        oe = 0;
                    }
                    r.mode = Y;

                  case Y:
                    xe = v;
                    break e;

                  case J:
                    xe = g;
                    break e;

                  case Q:
                    return y;

                  case $:
                  default:
                    return m;
                }
            }
            e.next_out = ie;
            e.avail_out = se;
            e.next_in = re;
            e.avail_in = ae;
            r.hold = fe;
            r.bits = oe;
            if (r.wsize || ue !== e.avail_out && r.mode < J && (r.mode < G || t !== h)) {
                if (ve(e, e.output, e.next_out, ue - e.avail_out)) {
                    r.mode = Q;
                    return y;
                }
            }
            ce -= e.avail_in;
            ue -= e.avail_out;
            e.total_in += ce;
            e.total_out += ue;
            r.total += ue;
            if (r.wrap && ue) {
                e.adler = r.check = r.flags ? a(r.check, te, ue, e.next_out - ue) : n(r.check, te, ue, e.next_out - ue);
            }
            e.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === z ? 128 : 0) + (r.mode === F || r.mode === D ? 256 : 0);
            if ((ce === 0 && ue === 0 || t === h) && xe === p) {
                xe = w;
            }
            return xe;
        }
        function me(e) {
            if (!e || !e.state) {
                return m;
            }
            var t = e.state;
            if (t.window) {
                t.window = null;
            }
            e.state = null;
            return p;
        }
        function ge(e, t) {
            var r;
            if (!e || !e.state) {
                return m;
            }
            r = e.state;
            if ((r.wrap & 2) === 0) {
                return m;
            }
            r.head = t;
            t.done = false;
            return p;
        }
        function ye(e, t) {
            var r = t.length;
            var i;
            var a;
            var s;
            if (!e || !e.state) {
                return m;
            }
            i = e.state;
            if (i.wrap !== 0 && i.mode !== R) {
                return m;
            }
            if (i.mode === R) {
                a = 1;
                a = n(a, t, r, 0);
                if (a !== i.check) {
                    return g;
                }
            }
            s = ve(e, t, r, r);
            if (s) {
                i.mode = Q;
                return y;
            }
            i.havedict = 1;
            return p;
        }
        r.inflateReset = fe;
        r.inflateReset2 = oe;
        r.inflateResetKeep = se;
        r.inflateInit = ue;
        r.inflateInit2 = ce;
        r.inflate = be;
        r.inflateEnd = me;
        r.inflateGetHeader = ge;
        r.inflateSetDictionary = ye;
        r.inflateInfo = "pako inflate (from Nodeca project)";
    }, {
        "../utils/common": 186,
        "./adler32": 188,
        "./crc32": 190,
        "./inffast": 193,
        "./inftrees": 195
    } ],
    195: [ function(e, t, r) {
        "use strict";
        var i = e("../utils/common");
        var n = 15;
        var a = 852;
        var s = 592;
        var f = 0;
        var o = 1;
        var c = 2;
        var u = [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0 ];
        var h = [ 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78 ];
        var d = [ 1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0 ];
        var l = [ 16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64 ];
        t.exports = function e(t, r, p, v, b, m, g, y) {
            var w = y.bits;
            var _ = 0;
            var S = 0;
            var k = 0, x = 0;
            var E = 0;
            var A = 0;
            var M = 0;
            var B = 0;
            var I = 0;
            var j = 0;
            var C;
            var R;
            var z;
            var T;
            var O;
            var D = null;
            var P = 0;
            var L;
            var N = new i.Buf16(n + 1);
            var U = new i.Buf16(n + 1);
            var F = null;
            var q = 0;
            var W, K, H;
            for (_ = 0; _ <= n; _++) {
                N[_] = 0;
            }
            for (S = 0; S < v; S++) {
                N[r[p + S]]++;
            }
            E = w;
            for (x = n; x >= 1; x--) {
                if (N[x] !== 0) {
                    break;
                }
            }
            if (E > x) {
                E = x;
            }
            if (x === 0) {
                b[m++] = 1 << 24 | 64 << 16 | 0;
                b[m++] = 1 << 24 | 64 << 16 | 0;
                y.bits = 1;
                return 0;
            }
            for (k = 1; k < x; k++) {
                if (N[k] !== 0) {
                    break;
                }
            }
            if (E < k) {
                E = k;
            }
            B = 1;
            for (_ = 1; _ <= n; _++) {
                B <<= 1;
                B -= N[_];
                if (B < 0) {
                    return -1;
                }
            }
            if (B > 0 && (t === f || x !== 1)) {
                return -1;
            }
            U[1] = 0;
            for (_ = 1; _ < n; _++) {
                U[_ + 1] = U[_] + N[_];
            }
            for (S = 0; S < v; S++) {
                if (r[p + S] !== 0) {
                    g[U[r[p + S]]++] = S;
                }
            }
            if (t === f) {
                D = F = g;
                L = 19;
            } else if (t === o) {
                D = u;
                P -= 257;
                F = h;
                q -= 257;
                L = 256;
            } else {
                D = d;
                F = l;
                L = -1;
            }
            j = 0;
            S = 0;
            _ = k;
            O = m;
            A = E;
            M = 0;
            z = -1;
            I = 1 << E;
            T = I - 1;
            if (t === o && I > a || t === c && I > s) {
                return 1;
            }
            for (;;) {
                W = _ - M;
                if (g[S] < L) {
                    K = 0;
                    H = g[S];
                } else if (g[S] > L) {
                    K = F[q + g[S]];
                    H = D[P + g[S]];
                } else {
                    K = 32 + 64;
                    H = 0;
                }
                C = 1 << _ - M;
                R = 1 << A;
                k = R;
                do {
                    R -= C;
                    b[O + (j >> M) + R] = W << 24 | K << 16 | H | 0;
                } while (R !== 0);
                C = 1 << _ - 1;
                while (j & C) {
                    C >>= 1;
                }
                if (C !== 0) {
                    j &= C - 1;
                    j += C;
                } else {
                    j = 0;
                }
                S++;
                if (--N[_] === 0) {
                    if (_ === x) {
                        break;
                    }
                    _ = r[p + g[S]];
                }
                if (_ > E && (j & T) !== z) {
                    if (M === 0) {
                        M = E;
                    }
                    O += k;
                    A = _ - M;
                    B = 1 << A;
                    while (A + M < x) {
                        B -= N[A + M];
                        if (B <= 0) {
                            break;
                        }
                        A++;
                        B <<= 1;
                    }
                    I += 1 << A;
                    if (t === o && I > a || t === c && I > s) {
                        return 1;
                    }
                    z = j & T;
                    b[z] = E << 24 | A << 16 | O - m | 0;
                }
            }
            if (j !== 0) {
                b[O + j] = _ - M << 24 | 64 << 16 | 0;
            }
            y.bits = E;
            return 0;
        };
    }, {
        "../utils/common": 186
    } ],
    196: [ function(e, t, r) {
        "use strict";
        t.exports = {
            2: "need dictionary",
            1: "stream end",
            0: "",
            "-1": "file error",
            "-2": "stream error",
            "-3": "data error",
            "-4": "insufficient memory",
            "-5": "buffer error",
            "-6": "incompatible version"
        };
    }, {} ],
    197: [ function(e, t, r) {
        "use strict";
        var i = e("../utils/common");
        var n = 4;
        var a = 0;
        var s = 1;
        var f = 2;
        function o(e) {
            var t = e.length;
            while (--t >= 0) {
                e[t] = 0;
            }
        }
        var c = 0;
        var u = 1;
        var h = 2;
        var d = 3;
        var l = 258;
        var p = 29;
        var v = 256;
        var b = v + 1 + p;
        var m = 30;
        var g = 19;
        var y = 2 * b + 1;
        var w = 15;
        var _ = 16;
        var S = 7;
        var k = 256;
        var x = 16;
        var E = 17;
        var A = 18;
        var M = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0 ];
        var B = [ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13 ];
        var I = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7 ];
        var j = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];
        var C = 512;
        var R = new Array((b + 2) * 2);
        o(R);
        var z = new Array(m * 2);
        o(z);
        var T = new Array(C);
        o(T);
        var O = new Array(l - d + 1);
        o(O);
        var D = new Array(p);
        o(D);
        var P = new Array(m);
        o(P);
        function L(e, t, r, i, n) {
            this.static_tree = e;
            this.extra_bits = t;
            this.extra_base = r;
            this.elems = i;
            this.max_length = n;
            this.has_stree = e && e.length;
        }
        var N;
        var U;
        var F;
        function q(e, t) {
            this.dyn_tree = e;
            this.max_code = 0;
            this.stat_desc = t;
        }
        function W(e) {
            return e < 256 ? T[e] : T[256 + (e >>> 7)];
        }
        function K(e, t) {
            e.pending_buf[e.pending++] = t & 255;
            e.pending_buf[e.pending++] = t >>> 8 & 255;
        }
        function H(e, t, r) {
            if (e.bi_valid > _ - r) {
                e.bi_buf |= t << e.bi_valid & 65535;
                K(e, e.bi_buf);
                e.bi_buf = t >> _ - e.bi_valid;
                e.bi_valid += r - _;
            } else {
                e.bi_buf |= t << e.bi_valid & 65535;
                e.bi_valid += r;
            }
        }
        function Z(e, t, r) {
            H(e, r[t * 2], r[t * 2 + 1]);
        }
        function V(e, t) {
            var r = 0;
            do {
                r |= e & 1;
                e >>>= 1;
                r <<= 1;
            } while (--t > 0);
            return r >>> 1;
        }
        function G(e) {
            if (e.bi_valid === 16) {
                K(e, e.bi_buf);
                e.bi_buf = 0;
                e.bi_valid = 0;
            } else if (e.bi_valid >= 8) {
                e.pending_buf[e.pending++] = e.bi_buf & 255;
                e.bi_buf >>= 8;
                e.bi_valid -= 8;
            }
        }
        function X(e, t) {
            var r = t.dyn_tree;
            var i = t.max_code;
            var n = t.stat_desc.static_tree;
            var a = t.stat_desc.has_stree;
            var s = t.stat_desc.extra_bits;
            var f = t.stat_desc.extra_base;
            var o = t.stat_desc.max_length;
            var c;
            var u, h;
            var d;
            var l;
            var p;
            var v = 0;
            for (d = 0; d <= w; d++) {
                e.bl_count[d] = 0;
            }
            r[e.heap[e.heap_max] * 2 + 1] = 0;
            for (c = e.heap_max + 1; c < y; c++) {
                u = e.heap[c];
                d = r[r[u * 2 + 1] * 2 + 1] + 1;
                if (d > o) {
                    d = o;
                    v++;
                }
                r[u * 2 + 1] = d;
                if (u > i) {
                    continue;
                }
                e.bl_count[d]++;
                l = 0;
                if (u >= f) {
                    l = s[u - f];
                }
                p = r[u * 2];
                e.opt_len += p * (d + l);
                if (a) {
                    e.static_len += p * (n[u * 2 + 1] + l);
                }
            }
            if (v === 0) {
                return;
            }
            do {
                d = o - 1;
                while (e.bl_count[d] === 0) {
                    d--;
                }
                e.bl_count[d]--;
                e.bl_count[d + 1] += 2;
                e.bl_count[o]--;
                v -= 2;
            } while (v > 0);
            for (d = o; d !== 0; d--) {
                u = e.bl_count[d];
                while (u !== 0) {
                    h = e.heap[--c];
                    if (h > i) {
                        continue;
                    }
                    if (r[h * 2 + 1] !== d) {
                        e.opt_len += (d - r[h * 2 + 1]) * r[h * 2];
                        r[h * 2 + 1] = d;
                    }
                    u--;
                }
            }
        }
        function Y(e, t, r) {
            var i = new Array(w + 1);
            var n = 0;
            var a;
            var s;
            for (a = 1; a <= w; a++) {
                i[a] = n = n + r[a - 1] << 1;
            }
            for (s = 0; s <= t; s++) {
                var f = e[s * 2 + 1];
                if (f === 0) {
                    continue;
                }
                e[s * 2] = V(i[f]++, f);
            }
        }
        function J() {
            var e;
            var t;
            var r;
            var i;
            var n;
            var a = new Array(w + 1);
            r = 0;
            for (i = 0; i < p - 1; i++) {
                D[i] = r;
                for (e = 0; e < 1 << M[i]; e++) {
                    O[r++] = i;
                }
            }
            O[r - 1] = i;
            n = 0;
            for (i = 0; i < 16; i++) {
                P[i] = n;
                for (e = 0; e < 1 << B[i]; e++) {
                    T[n++] = i;
                }
            }
            n >>= 7;
            for (;i < m; i++) {
                P[i] = n << 7;
                for (e = 0; e < 1 << B[i] - 7; e++) {
                    T[256 + n++] = i;
                }
            }
            for (t = 0; t <= w; t++) {
                a[t] = 0;
            }
            e = 0;
            while (e <= 143) {
                R[e * 2 + 1] = 8;
                e++;
                a[8]++;
            }
            while (e <= 255) {
                R[e * 2 + 1] = 9;
                e++;
                a[9]++;
            }
            while (e <= 279) {
                R[e * 2 + 1] = 7;
                e++;
                a[7]++;
            }
            while (e <= 287) {
                R[e * 2 + 1] = 8;
                e++;
                a[8]++;
            }
            Y(R, b + 1, a);
            for (e = 0; e < m; e++) {
                z[e * 2 + 1] = 5;
                z[e * 2] = V(e, 5);
            }
            N = new L(R, M, v + 1, b, w);
            U = new L(z, B, 0, m, w);
            F = new L(new Array(0), I, 0, g, S);
        }
        function Q(e) {
            var t;
            for (t = 0; t < b; t++) {
                e.dyn_ltree[t * 2] = 0;
            }
            for (t = 0; t < m; t++) {
                e.dyn_dtree[t * 2] = 0;
            }
            for (t = 0; t < g; t++) {
                e.bl_tree[t * 2] = 0;
            }
            e.dyn_ltree[k * 2] = 1;
            e.opt_len = e.static_len = 0;
            e.last_lit = e.matches = 0;
        }
        function $(e) {
            if (e.bi_valid > 8) {
                K(e, e.bi_buf);
            } else if (e.bi_valid > 0) {
                e.pending_buf[e.pending++] = e.bi_buf;
            }
            e.bi_buf = 0;
            e.bi_valid = 0;
        }
        function ee(e, t, r, n) {
            $(e);
            if (n) {
                K(e, r);
                K(e, ~r);
            }
            i.arraySet(e.pending_buf, e.window, t, r, e.pending);
            e.pending += r;
        }
        function te(e, t, r, i) {
            var n = t * 2;
            var a = r * 2;
            return e[n] < e[a] || e[n] === e[a] && i[t] <= i[r];
        }
        function re(e, t, r) {
            var i = e.heap[r];
            var n = r << 1;
            while (n <= e.heap_len) {
                if (n < e.heap_len && te(t, e.heap[n + 1], e.heap[n], e.depth)) {
                    n++;
                }
                if (te(t, i, e.heap[n], e.depth)) {
                    break;
                }
                e.heap[r] = e.heap[n];
                r = n;
                n <<= 1;
            }
            e.heap[r] = i;
        }
        function ie(e, t, r) {
            var i;
            var n;
            var a = 0;
            var s;
            var f;
            if (e.last_lit !== 0) {
                do {
                    i = e.pending_buf[e.d_buf + a * 2] << 8 | e.pending_buf[e.d_buf + a * 2 + 1];
                    n = e.pending_buf[e.l_buf + a];
                    a++;
                    if (i === 0) {
                        Z(e, n, t);
                    } else {
                        s = O[n];
                        Z(e, s + v + 1, t);
                        f = M[s];
                        if (f !== 0) {
                            n -= D[s];
                            H(e, n, f);
                        }
                        i--;
                        s = W(i);
                        Z(e, s, r);
                        f = B[s];
                        if (f !== 0) {
                            i -= P[s];
                            H(e, i, f);
                        }
                    }
                } while (a < e.last_lit);
            }
            Z(e, k, t);
        }
        function ne(e, t) {
            var r = t.dyn_tree;
            var i = t.stat_desc.static_tree;
            var n = t.stat_desc.has_stree;
            var a = t.stat_desc.elems;
            var s, f;
            var o = -1;
            var c;
            e.heap_len = 0;
            e.heap_max = y;
            for (s = 0; s < a; s++) {
                if (r[s * 2] !== 0) {
                    e.heap[++e.heap_len] = o = s;
                    e.depth[s] = 0;
                } else {
                    r[s * 2 + 1] = 0;
                }
            }
            while (e.heap_len < 2) {
                c = e.heap[++e.heap_len] = o < 2 ? ++o : 0;
                r[c * 2] = 1;
                e.depth[c] = 0;
                e.opt_len--;
                if (n) {
                    e.static_len -= i[c * 2 + 1];
                }
            }
            t.max_code = o;
            for (s = e.heap_len >> 1; s >= 1; s--) {
                re(e, r, s);
            }
            c = a;
            do {
                s = e.heap[1];
                e.heap[1] = e.heap[e.heap_len--];
                re(e, r, 1);
                f = e.heap[1];
                e.heap[--e.heap_max] = s;
                e.heap[--e.heap_max] = f;
                r[c * 2] = r[s * 2] + r[f * 2];
                e.depth[c] = (e.depth[s] >= e.depth[f] ? e.depth[s] : e.depth[f]) + 1;
                r[s * 2 + 1] = r[f * 2 + 1] = c;
                e.heap[1] = c++;
                re(e, r, 1);
            } while (e.heap_len >= 2);
            e.heap[--e.heap_max] = e.heap[1];
            X(e, t);
            Y(r, o, e.bl_count);
        }
        function ae(e, t, r) {
            var i;
            var n = -1;
            var a;
            var s = t[0 * 2 + 1];
            var f = 0;
            var o = 7;
            var c = 4;
            if (s === 0) {
                o = 138;
                c = 3;
            }
            t[(r + 1) * 2 + 1] = 65535;
            for (i = 0; i <= r; i++) {
                a = s;
                s = t[(i + 1) * 2 + 1];
                if (++f < o && a === s) {
                    continue;
                } else if (f < c) {
                    e.bl_tree[a * 2] += f;
                } else if (a !== 0) {
                    if (a !== n) {
                        e.bl_tree[a * 2]++;
                    }
                    e.bl_tree[x * 2]++;
                } else if (f <= 10) {
                    e.bl_tree[E * 2]++;
                } else {
                    e.bl_tree[A * 2]++;
                }
                f = 0;
                n = a;
                if (s === 0) {
                    o = 138;
                    c = 3;
                } else if (a === s) {
                    o = 6;
                    c = 3;
                } else {
                    o = 7;
                    c = 4;
                }
            }
        }
        function se(e, t, r) {
            var i;
            var n = -1;
            var a;
            var s = t[0 * 2 + 1];
            var f = 0;
            var o = 7;
            var c = 4;
            if (s === 0) {
                o = 138;
                c = 3;
            }
            for (i = 0; i <= r; i++) {
                a = s;
                s = t[(i + 1) * 2 + 1];
                if (++f < o && a === s) {
                    continue;
                } else if (f < c) {
                    do {
                        Z(e, a, e.bl_tree);
                    } while (--f !== 0);
                } else if (a !== 0) {
                    if (a !== n) {
                        Z(e, a, e.bl_tree);
                        f--;
                    }
                    Z(e, x, e.bl_tree);
                    H(e, f - 3, 2);
                } else if (f <= 10) {
                    Z(e, E, e.bl_tree);
                    H(e, f - 3, 3);
                } else {
                    Z(e, A, e.bl_tree);
                    H(e, f - 11, 7);
                }
                f = 0;
                n = a;
                if (s === 0) {
                    o = 138;
                    c = 3;
                } else if (a === s) {
                    o = 6;
                    c = 3;
                } else {
                    o = 7;
                    c = 4;
                }
            }
        }
        function fe(e) {
            var t;
            ae(e, e.dyn_ltree, e.l_desc.max_code);
            ae(e, e.dyn_dtree, e.d_desc.max_code);
            ne(e, e.bl_desc);
            for (t = g - 1; t >= 3; t--) {
                if (e.bl_tree[j[t] * 2 + 1] !== 0) {
                    break;
                }
            }
            e.opt_len += 3 * (t + 1) + 5 + 5 + 4;
            return t;
        }
        function oe(e, t, r, i) {
            var n;
            H(e, t - 257, 5);
            H(e, r - 1, 5);
            H(e, i - 4, 4);
            for (n = 0; n < i; n++) {
                H(e, e.bl_tree[j[n] * 2 + 1], 3);
            }
            se(e, e.dyn_ltree, t - 1);
            se(e, e.dyn_dtree, r - 1);
        }
        function ce(e) {
            var t = 4093624447;
            var r;
            for (r = 0; r <= 31; r++, t >>>= 1) {
                if (t & 1 && e.dyn_ltree[r * 2] !== 0) {
                    return a;
                }
            }
            if (e.dyn_ltree[9 * 2] !== 0 || e.dyn_ltree[10 * 2] !== 0 || e.dyn_ltree[13 * 2] !== 0) {
                return s;
            }
            for (r = 32; r < v; r++) {
                if (e.dyn_ltree[r * 2] !== 0) {
                    return s;
                }
            }
            return a;
        }
        var ue = false;
        function he(e) {
            if (!ue) {
                J();
                ue = true;
            }
            e.l_desc = new q(e.dyn_ltree, N);
            e.d_desc = new q(e.dyn_dtree, U);
            e.bl_desc = new q(e.bl_tree, F);
            e.bi_buf = 0;
            e.bi_valid = 0;
            Q(e);
        }
        function de(e, t, r, i) {
            H(e, (c << 1) + (i ? 1 : 0), 3);
            ee(e, t, r, true);
        }
        function le(e) {
            H(e, u << 1, 3);
            Z(e, k, R);
            G(e);
        }
        function pe(e, t, r, i) {
            var a, s;
            var o = 0;
            if (e.level > 0) {
                if (e.strm.data_type === f) {
                    e.strm.data_type = ce(e);
                }
                ne(e, e.l_desc);
                ne(e, e.d_desc);
                o = fe(e);
                a = e.opt_len + 3 + 7 >>> 3;
                s = e.static_len + 3 + 7 >>> 3;
                if (s <= a) {
                    a = s;
                }
            } else {
                a = s = r + 5;
            }
            if (r + 4 <= a && t !== -1) {
                de(e, t, r, i);
            } else if (e.strategy === n || s === a) {
                H(e, (u << 1) + (i ? 1 : 0), 3);
                ie(e, R, z);
            } else {
                H(e, (h << 1) + (i ? 1 : 0), 3);
                oe(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, o + 1);
                ie(e, e.dyn_ltree, e.dyn_dtree);
            }
            Q(e);
            if (i) {
                $(e);
            }
        }
        function ve(e, t, r) {
            e.pending_buf[e.d_buf + e.last_lit * 2] = t >>> 8 & 255;
            e.pending_buf[e.d_buf + e.last_lit * 2 + 1] = t & 255;
            e.pending_buf[e.l_buf + e.last_lit] = r & 255;
            e.last_lit++;
            if (t === 0) {
                e.dyn_ltree[r * 2]++;
            } else {
                e.matches++;
                t--;
                e.dyn_ltree[(O[r] + v + 1) * 2]++;
                e.dyn_dtree[W(t) * 2]++;
            }
            return e.last_lit === e.lit_bufsize - 1;
        }
        r._tr_init = he;
        r._tr_stored_block = de;
        r._tr_flush_block = pe;
        r._tr_tally = ve;
        r._tr_align = le;
    }, {
        "../utils/common": 186
    } ],
    198: [ function(e, t, r) {
        "use strict";
        function i() {
            this.input = null;
            this.next_in = 0;
            this.avail_in = 0;
            this.total_in = 0;
            this.output = null;
            this.next_out = 0;
            this.avail_out = 0;
            this.total_out = 0;
            this.msg = "";
            this.state = null;
            this.data_type = 2;
            this.adler = 0;
        }
        t.exports = i;
    }, {} ],
    199: [ function(e, t, r) {
        t.exports = {
            "2.16.840.1.101.3.4.1.1": "aes-128-ecb",
            "2.16.840.1.101.3.4.1.2": "aes-128-cbc",
            "2.16.840.1.101.3.4.1.3": "aes-128-ofb",
            "2.16.840.1.101.3.4.1.4": "aes-128-cfb",
            "2.16.840.1.101.3.4.1.21": "aes-192-ecb",
            "2.16.840.1.101.3.4.1.22": "aes-192-cbc",
            "2.16.840.1.101.3.4.1.23": "aes-192-ofb",
            "2.16.840.1.101.3.4.1.24": "aes-192-cfb",
            "2.16.840.1.101.3.4.1.41": "aes-256-ecb",
            "2.16.840.1.101.3.4.1.42": "aes-256-cbc",
            "2.16.840.1.101.3.4.1.43": "aes-256-ofb",
            "2.16.840.1.101.3.4.1.44": "aes-256-cfb"
        };
    }, {} ],
    200: [ function(e, t, r) {
        "use strict";
        var i = e("asn1.js");
        r.certificate = e("./certificate");
        var n = i.define("RSAPrivateKey", function() {
            this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int());
        });
        r.RSAPrivateKey = n;
        var a = i.define("RSAPublicKey", function() {
            this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int());
        });
        r.RSAPublicKey = a;
        var s = i.define("SubjectPublicKeyInfo", function() {
            this.seq().obj(this.key("algorithm").use(f), this.key("subjectPublicKey").bitstr());
        });
        r.PublicKey = s;
        var f = i.define("AlgorithmIdentifier", function() {
            this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional());
        });
        var o = i.define("PrivateKeyInfo", function() {
            this.seq().obj(this.key("version").int(), this.key("algorithm").use(f), this.key("subjectPrivateKey").octstr());
        });
        r.PrivateKey = o;
        var c = i.define("EncryptedPrivateKeyInfo", function() {
            this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr());
        });
        r.EncryptedPrivateKey = c;
        var u = i.define("DSAPrivateKey", function() {
            this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int());
        });
        r.DSAPrivateKey = u;
        r.DSAparam = i.define("DSAparam", function() {
            this.int();
        });
        var h = i.define("ECPrivateKey", function() {
            this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(d), this.key("publicKey").optional().explicit(1).bitstr());
        });
        r.ECPrivateKey = h;
        var d = i.define("ECParameters", function() {
            this.choice({
                namedCurve: this.objid()
            });
        });
        r.signature = i.define("signature", function() {
            this.seq().obj(this.key("r").int(), this.key("s").int());
        });
    }, {
        "./certificate": 201,
        "asn1.js": 17
    } ],
    201: [ function(e, t, r) {
        "use strict";
        var i = e("asn1.js");
        var n = i.define("Time", function() {
            this.choice({
                utcTime: this.utctime(),
                generalTime: this.gentime()
            });
        });
        var a = i.define("AttributeTypeValue", function() {
            this.seq().obj(this.key("type").objid(), this.key("value").any());
        });
        var s = i.define("AlgorithmIdentifier", function() {
            this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional());
        });
        var f = i.define("SubjectPublicKeyInfo", function() {
            this.seq().obj(this.key("algorithm").use(s), this.key("subjectPublicKey").bitstr());
        });
        var o = i.define("RelativeDistinguishedName", function() {
            this.setof(a);
        });
        var c = i.define("RDNSequence", function() {
            this.seqof(o);
        });
        var u = i.define("Name", function() {
            this.choice({
                rdnSequence: this.use(c)
            });
        });
        var h = i.define("Validity", function() {
            this.seq().obj(this.key("notBefore").use(n), this.key("notAfter").use(n));
        });
        var d = i.define("Extension", function() {
            this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(false), this.key("extnValue").octstr());
        });
        var l = i.define("TBSCertificate", function() {
            this.seq().obj(this.key("version").explicit(0).int(), this.key("serialNumber").int(), this.key("signature").use(s), this.key("issuer").use(u), this.key("validity").use(h), this.key("subject").use(u), this.key("subjectPublicKeyInfo").use(f), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(d).optional());
        });
        var p = i.define("X509Certificate", function() {
            this.seq().obj(this.key("tbsCertificate").use(l), this.key("signatureAlgorithm").use(s), this.key("signatureValue").bitstr());
        });
        t.exports = p;
    }, {
        "asn1.js": 17
    } ],
    202: [ function(e, t, r) {
        (function(r) {
            var i = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r\+\/\=]+)[\n\r]+/m;
            var n = /^-----BEGIN ((?:.* KEY)|CERTIFICATE)-----/m;
            var a = /^-----BEGIN ((?:.* KEY)|CERTIFICATE)-----([0-9A-z\n\r\+\/\=]+)-----END \1-----$/m;
            var s = e("evp_bytestokey");
            var f = e("browserify-aes");
            t.exports = function(e, t) {
                var o = e.toString();
                var c = o.match(i);
                var u;
                if (!c) {
                    var h = o.match(a);
                    u = new r(h[2].replace(/[\r\n]/g, ""), "base64");
                } else {
                    var d = "aes" + c[1];
                    var l = new r(c[2], "hex");
                    var p = new r(c[3].replace(/[\r\n]/g, ""), "base64");
                    var v = s(t, l.slice(0, 8), parseInt(c[1], 10)).key;
                    var b = [];
                    var m = f.createDecipheriv(d, v, l);
                    b.push(m.update(p));
                    b.push(m.final());
                    u = r.concat(b);
                }
                var g = o.match(n)[1];
                return {
                    tag: g,
                    data: u
                };
            };
        }).call(this, e("buffer").Buffer);
    }, {
        "browserify-aes": 37,
        buffer: 65,
        evp_bytestokey: 122
    } ],
    203: [ function(e, t, r) {
        (function(r) {
            var i = e("./asn1");
            var n = e("./aesid.json");
            var a = e("./fixProc");
            var s = e("browserify-aes");
            var f = e("pbkdf2");
            t.exports = o;
            function o(e) {
                var t;
                if (typeof e === "object" && !r.isBuffer(e)) {
                    t = e.passphrase;
                    e = e.key;
                }
                if (typeof e === "string") {
                    e = new r(e);
                }
                var n = a(e, t);
                var s = n.tag;
                var f = n.data;
                var o, u;
                switch (s) {
                  case "CERTIFICATE":
                    u = i.certificate.decode(f, "der").tbsCertificate.subjectPublicKeyInfo;

                  case "PUBLIC KEY":
                    if (!u) {
                        u = i.PublicKey.decode(f, "der");
                    }
                    o = u.algorithm.algorithm.join(".");
                    switch (o) {
                      case "1.2.840.113549.1.1.1":
                        return i.RSAPublicKey.decode(u.subjectPublicKey.data, "der");

                      case "1.2.840.10045.2.1":
                        u.subjectPrivateKey = u.subjectPublicKey;
                        return {
                            type: "ec",
                            data: u
                        };

                      case "1.2.840.10040.4.1":
                        u.algorithm.params.pub_key = i.DSAparam.decode(u.subjectPublicKey.data, "der");
                        return {
                            type: "dsa",
                            data: u.algorithm.params
                        };

                      default:
                        throw new Error("unknown key id " + o);
                    }
                    throw new Error("unknown key type " + s);

                  case "ENCRYPTED PRIVATE KEY":
                    f = i.EncryptedPrivateKey.decode(f, "der");
                    f = c(f, t);

                  case "PRIVATE KEY":
                    u = i.PrivateKey.decode(f, "der");
                    o = u.algorithm.algorithm.join(".");
                    switch (o) {
                      case "1.2.840.113549.1.1.1":
                        return i.RSAPrivateKey.decode(u.subjectPrivateKey, "der");

                      case "1.2.840.10045.2.1":
                        return {
                            curve: u.algorithm.curve,
                            privateKey: i.ECPrivateKey.decode(u.subjectPrivateKey, "der").privateKey
                        };

                      case "1.2.840.10040.4.1":
                        u.algorithm.params.priv_key = i.DSAparam.decode(u.subjectPrivateKey, "der");
                        return {
                            type: "dsa",
                            params: u.algorithm.params
                        };

                      default:
                        throw new Error("unknown key id " + o);
                    }
                    throw new Error("unknown key type " + s);

                  case "RSA PUBLIC KEY":
                    return i.RSAPublicKey.decode(f, "der");

                  case "RSA PRIVATE KEY":
                    return i.RSAPrivateKey.decode(f, "der");

                  case "DSA PRIVATE KEY":
                    return {
                        type: "dsa",
                        params: i.DSAPrivateKey.decode(f, "der")
                    };

                  case "EC PRIVATE KEY":
                    f = i.ECPrivateKey.decode(f, "der");
                    return {
                        curve: f.parameters.value,
                        privateKey: f.privateKey
                    };

                  default:
                    throw new Error("unknown key type " + s);
                }
            }
            o.signature = i.signature;
            function c(e, t) {
                var i = e.algorithm.decrypt.kde.kdeparams.salt;
                var a = parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(), 10);
                var o = n[e.algorithm.decrypt.cipher.algo.join(".")];
                var c = e.algorithm.decrypt.cipher.iv;
                var u = e.subjectPrivateKey;
                var h = parseInt(o.split("-")[1], 10) / 8;
                var d = f.pbkdf2Sync(t, i, a, h);
                var l = s.createDecipheriv(o, d, c);
                var p = [];
                p.push(l.update(u));
                p.push(l.final());
                return r.concat(p);
            }
        }).call(this, e("buffer").Buffer);
    }, {
        "./aesid.json": 199,
        "./asn1": 200,
        "./fixProc": 202,
        "browserify-aes": 37,
        buffer: 65,
        pbkdf2: 205
    } ],
    204: [ function(e, t, r) {
        (function(e) {
            function t(e, t) {
                var r = 0;
                for (var i = e.length - 1; i >= 0; i--) {
                    var n = e[i];
                    if (n === ".") {
                        e.splice(i, 1);
                    } else if (n === "..") {
                        e.splice(i, 1);
                        r++;
                    } else if (r) {
                        e.splice(i, 1);
                        r--;
                    }
                }
                if (t) {
                    for (;r--; r) {
                        e.unshift("..");
                    }
                }
                return e;
            }
            var i = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
            var n = function(e) {
                return i.exec(e).slice(1);
            };
            r.resolve = function() {
                var r = "", i = false;
                for (var n = arguments.length - 1; n >= -1 && !i; n--) {
                    var s = n >= 0 ? arguments[n] : e.cwd();
                    if (typeof s !== "string") {
                        throw new TypeError("Arguments to path.resolve must be strings");
                    } else if (!s) {
                        continue;
                    }
                    r = s + "/" + r;
                    i = s.charAt(0) === "/";
                }
                r = t(a(r.split("/"), function(e) {
                    return !!e;
                }), !i).join("/");
                return (i ? "/" : "") + r || ".";
            };
            r.normalize = function(e) {
                var i = r.isAbsolute(e), n = s(e, -1) === "/";
                e = t(a(e.split("/"), function(e) {
                    return !!e;
                }), !i).join("/");
                if (!e && !i) {
                    e = ".";
                }
                if (e && n) {
                    e += "/";
                }
                return (i ? "/" : "") + e;
            };
            r.isAbsolute = function(e) {
                return e.charAt(0) === "/";
            };
            r.join = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return r.normalize(a(e, function(e, t) {
                    if (typeof e !== "string") {
                        throw new TypeError("Arguments to path.join must be strings");
                    }
                    return e;
                }).join("/"));
            };
            r.relative = function(e, t) {
                e = r.resolve(e).substr(1);
                t = r.resolve(t).substr(1);
                function i(e) {
                    var t = 0;
                    for (;t < e.length; t++) {
                        if (e[t] !== "") break;
                    }
                    var r = e.length - 1;
                    for (;r >= 0; r--) {
                        if (e[r] !== "") break;
                    }
                    if (t > r) return [];
                    return e.slice(t, r - t + 1);
                }
                var n = i(e.split("/"));
                var a = i(t.split("/"));
                var s = Math.min(n.length, a.length);
                var f = s;
                for (var o = 0; o < s; o++) {
                    if (n[o] !== a[o]) {
                        f = o;
                        break;
                    }
                }
                var c = [];
                for (var o = f; o < n.length; o++) {
                    c.push("..");
                }
                c = c.concat(a.slice(f));
                return c.join("/");
            };
            r.sep = "/";
            r.delimiter = ":";
            r.dirname = function(e) {
                var t = n(e), r = t[0], i = t[1];
                if (!r && !i) {
                    return ".";
                }
                if (i) {
                    i = i.substr(0, i.length - 1);
                }
                return r + i;
            };
            r.basename = function(e, t) {
                var r = n(e)[2];
                if (t && r.substr(-1 * t.length) === t) {
                    r = r.substr(0, r.length - t.length);
                }
                return r;
            };
            r.extname = function(e) {
                return n(e)[3];
            };
            function a(e, t) {
                if (e.filter) return e.filter(t);
                var r = [];
                for (var i = 0; i < e.length; i++) {
                    if (t(e[i], i, e)) r.push(e[i]);
                }
                return r;
            }
            var s = "ab".substr(-1) === "b" ? function(e, t, r) {
                return e.substr(t, r);
            } : function(e, t, r) {
                if (t < 0) t = e.length + t;
                return e.substr(t, r);
            };
        }).call(this, e("_process"));
    }, {
        _process: 211
    } ],
    205: [ function(e, t, r) {
        r.pbkdf2 = e("./lib/async");
        r.pbkdf2Sync = e("./lib/sync");
    }, {
        "./lib/async": 206,
        "./lib/sync": 209
    } ],
    206: [ function(e, t, r) {
        (function(r, i) {
            var n = e("./precondition");
            var a = e("./default-encoding");
            var s = e("./sync");
            var f = e("safe-buffer").Buffer;
            var o;
            var c = i.crypto && i.crypto.subtle;
            var u = {
                sha: "SHA-1",
                "sha-1": "SHA-1",
                sha1: "SHA-1",
                sha256: "SHA-256",
                "sha-256": "SHA-256",
                sha384: "SHA-384",
                "sha-384": "SHA-384",
                "sha-512": "SHA-512",
                sha512: "SHA-512"
            };
            var h = [];
            function d(e) {
                if (i.process && !i.process.browser) {
                    return Promise.resolve(false);
                }
                if (!c || !c.importKey || !c.deriveBits) {
                    return Promise.resolve(false);
                }
                if (h[e] !== undefined) {
                    return h[e];
                }
                o = o || f.alloc(8);
                var t = l(o, o, 10, 128, e).then(function() {
                    return true;
                }).catch(function() {
                    return false;
                });
                h[e] = t;
                return t;
            }
            function l(e, t, r, i, n) {
                return c.importKey("raw", e, {
                    name: "PBKDF2"
                }, false, [ "deriveBits" ]).then(function(e) {
                    return c.deriveBits({
                        name: "PBKDF2",
                        salt: t,
                        iterations: r,
                        hash: {
                            name: n
                        }
                    }, e, i << 3);
                }).then(function(e) {
                    return f.from(e);
                });
            }
            function p(e, t) {
                e.then(function(e) {
                    r.nextTick(function() {
                        t(null, e);
                    });
                }, function(e) {
                    r.nextTick(function() {
                        t(e);
                    });
                });
            }
            t.exports = function(e, t, o, c, h, v) {
                if (typeof h === "function") {
                    v = h;
                    h = undefined;
                }
                h = h || "sha1";
                var b = u[h.toLowerCase()];
                if (!b || typeof i.Promise !== "function") {
                    return r.nextTick(function() {
                        var r;
                        try {
                            r = s(e, t, o, c, h);
                        } catch (e) {
                            return v(e);
                        }
                        v(null, r);
                    });
                }
                n(e, t, o, c);
                if (typeof v !== "function") throw new Error("No callback provided to pbkdf2");
                if (!f.isBuffer(e)) e = f.from(e, a);
                if (!f.isBuffer(t)) t = f.from(t, a);
                p(d(b).then(function(r) {
                    if (r) return l(e, t, o, c, b);
                    return s(e, t, o, c, h);
                }), v);
            };
        }).call(this, e("_process"), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
        "./default-encoding": 207,
        "./precondition": 208,
        "./sync": 209,
        _process: 211,
        "safe-buffer": 231
    } ],
    207: [ function(e, t, r) {
        (function(e) {
            var r;
            if (e.browser) {
                r = "utf-8";
            } else {
                var i = parseInt(e.version.split(".")[0].slice(1), 10);
                r = i >= 6 ? "utf-8" : "binary";
            }
            t.exports = r;
        }).call(this, e("_process"));
    }, {
        _process: 211
    } ],
    208: [ function(e, t, r) {
        (function(e) {
            var r = Math.pow(2, 30) - 1;
            function i(t, r) {
                if (typeof t !== "string" && !e.isBuffer(t)) {
                    throw new TypeError(r + " must be a buffer or string");
                }
            }
            t.exports = function(e, t, n, a) {
                i(e, "Password");
                i(t, "Salt");
                if (typeof n !== "number") {
                    throw new TypeError("Iterations not a number");
                }
                if (n < 0) {
                    throw new TypeError("Bad iterations");
                }
                if (typeof a !== "number") {
                    throw new TypeError("Key length not a number");
                }
                if (a < 0 || a > r || a !== a) {
                    throw new TypeError("Bad key length");
                }
            };
        }).call(this, {
            isBuffer: e("../../is-buffer/index.js")
        });
    }, {
        "../../is-buffer/index.js": 140
    } ],
    209: [ function(e, t, r) {
        var i = e("create-hash/md5");
        var n = e("ripemd160");
        var a = e("sha.js");
        var s = e("./precondition");
        var f = e("./default-encoding");
        var o = e("safe-buffer").Buffer;
        var c = o.alloc(128);
        var u = {
            md5: 16,
            sha1: 20,
            sha224: 28,
            sha256: 32,
            sha384: 48,
            sha512: 64,
            rmd160: 20,
            ripemd160: 20
        };
        function h(e, t, r) {
            var i = d(e);
            var n = e === "sha512" || e === "sha384" ? 128 : 64;
            if (t.length > n) {
                t = i(t);
            } else if (t.length < n) {
                t = o.concat([ t, c ], n);
            }
            var a = o.allocUnsafe(n + u[e]);
            var s = o.allocUnsafe(n + u[e]);
            for (var f = 0; f < n; f++) {
                a[f] = t[f] ^ 54;
                s[f] = t[f] ^ 92;
            }
            var h = o.allocUnsafe(n + r + 4);
            a.copy(h, 0, 0, n);
            this.ipad1 = h;
            this.ipad2 = a;
            this.opad = s;
            this.alg = e;
            this.blocksize = n;
            this.hash = i;
            this.size = u[e];
        }
        h.prototype.run = function(e, t) {
            e.copy(t, this.blocksize);
            var r = this.hash(t);
            r.copy(this.opad, this.blocksize);
            return this.hash(this.opad);
        };
        function d(e) {
            function t(t) {
                return a(e).update(t).digest();
            }
            if (e === "rmd160" || e === "ripemd160") return n;
            if (e === "md5") return i;
            return t;
        }
        function l(e, t, r, i, n) {
            s(e, t, r, i);
            if (!o.isBuffer(e)) e = o.from(e, f);
            if (!o.isBuffer(t)) t = o.from(t, f);
            n = n || "sha1";
            var a = new h(n, e, t.length);
            var c = o.allocUnsafe(i);
            var d = o.allocUnsafe(t.length + 4);
            t.copy(d, 0, 0, t.length);
            var l = 0;
            var p = u[n];
            var v = Math.ceil(i / p);
            for (var b = 1; b <= v; b++) {
                d.writeUInt32BE(b, t.length);
                var m = a.run(d, a.ipad1);
                var g = m;
                for (var y = 1; y < r; y++) {
                    g = a.run(g, a.ipad2);
                    for (var w = 0; w < p; w++) m[w] ^= g[w];
                }
                m.copy(c, l);
                l += p;
            }
            return c;
        }
        t.exports = l;
    }, {
        "./default-encoding": 207,
        "./precondition": 208,
        "create-hash/md5": 91,
        ripemd160: 230,
        "safe-buffer": 231,
        "sha.js": 233
    } ],
    210: [ function(e, t, r) {
        (function(e) {
            "use strict";
            if (!e.version || e.version.indexOf("v0.") === 0 || e.version.indexOf("v1.") === 0 && e.version.indexOf("v1.8.") !== 0) {
                t.exports = r;
            } else {
                t.exports = e.nextTick;
            }
            function r(t, r, i, n) {
                if (typeof t !== "function") {
                    throw new TypeError('"callback" argument must be a function');
                }
                var a = arguments.length;
                var s, f;
                switch (a) {
                  case 0:
                  case 1:
                    return e.nextTick(t);

                  case 2:
                    return e.nextTick(function e() {
                        t.call(null, r);
                    });

                  case 3:
                    return e.nextTick(function e() {
                        t.call(null, r, i);
                    });

                  case 4:
                    return e.nextTick(function e() {
                        t.call(null, r, i, n);
                    });

                  default:
                    s = new Array(a - 1);
                    f = 0;
                    while (f < s.length) {
                        s[f++] = arguments[f];
                    }
                    return e.nextTick(function e() {
                        t.apply(null, s);
                    });
                }
            }
        }).call(this, e("_process"));
    }, {
        _process: 211
    } ],
    211: [ function(e, t, r) {
        var i = t.exports = {};
        var n;
        var a;
        function s() {
            throw new Error("setTimeout has not been defined");
        }
        function f() {
            throw new Error("clearTimeout has not been defined");
        }
        (function() {
            try {
                if (typeof setTimeout === "function") {
                    n = setTimeout;
                } else {
                    n = s;
                }
            } catch (e) {
                n = s;
            }
            try {
                if (typeof clearTimeout === "function") {
                    a = clearTimeout;
                } else {
                    a = f;
                }
            } catch (e) {
                a = f;
            }
        })();
        function o(e) {
            if (n === setTimeout) {
                return setTimeout(e, 0);
            }
            if ((n === s || !n) && setTimeout) {
                n = setTimeout;
                return setTimeout(e, 0);
            }
            try {
                return n(e, 0);
            } catch (t) {
                try {
                    return n.call(null, e, 0);
                } catch (t) {
                    return n.call(this, e, 0);
                }
            }
        }
        function c(e) {
            if (a === clearTimeout) {
                return clearTimeout(e);
            }
            if ((a === f || !a) && clearTimeout) {
                a = clearTimeout;
                return clearTimeout(e);
            }
            try {
                return a(e);
            } catch (t) {
                try {
                    return a.call(null, e);
                } catch (t) {
                    return a.call(this, e);
                }
            }
        }
        var u = [];
        var h = false;
        var d;
        var l = -1;
        function p() {
            if (!h || !d) {
                return;
            }
            h = false;
            if (d.length) {
                u = d.concat(u);
            } else {
                l = -1;
            }
            if (u.length) {
                v();
            }
        }
        function v() {
            if (h) {
                return;
            }
            var e = o(p);
            h = true;
            var t = u.length;
            while (t) {
                d = u;
                u = [];
                while (++l < t) {
                    if (d) {
                        d[l].run();
                    }
                }
                l = -1;
                t = u.length;
            }
            d = null;
            h = false;
            c(e);
        }
        i.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) {
                for (var r = 1; r < arguments.length; r++) {
                    t[r - 1] = arguments[r];
                }
            }
            u.push(new b(e, t));
            if (u.length === 1 && !h) {
                o(v);
            }
        };
        function b(e, t) {
            this.fun = e;
            this.array = t;
        }
        b.prototype.run = function() {
            this.fun.apply(null, this.array);
        };
        i.title = "browser";
        i.browser = true;
        i.env = {};
        i.argv = [];
        i.version = "";
        i.versions = {};
        function m() {}
        i.on = m;
        i.addListener = m;
        i.once = m;
        i.off = m;
        i.removeListener = m;
        i.removeAllListeners = m;
        i.emit = m;
        i.prependListener = m;
        i.prependOnceListener = m;
        i.listeners = function(e) {
            return [];
        };
        i.binding = function(e) {
            throw new Error("process.binding is not supported");
        };
        i.cwd = function() {
            return "/";
        };
        i.chdir = function(e) {
            throw new Error("process.chdir is not supported");
        };
        i.umask = function() {
            return 0;
        };
    }, {} ],
    212: [ function(e, t, r) {
        r.publicEncrypt = e("./publicEncrypt");
        r.privateDecrypt = e("./privateDecrypt");
        r.privateEncrypt = function e(t, i) {
            return r.publicEncrypt(t, i, true);
        };
        r.publicDecrypt = function e(t, i) {
            return r.privateDecrypt(t, i, true);
        };
    }, {
        "./privateDecrypt": 214,
        "./publicEncrypt": 215
    } ],
    213: [ function(e, t, r) {
        (function(r) {
            var i = e("create-hash");
            t.exports = function(e, t) {
                var a = new r("");
                var s = 0, f;
                while (a.length < t) {
                    f = n(s++);
                    a = r.concat([ a, i("sha1").update(e).update(f).digest() ]);
                }
                return a.slice(0, t);
            };
            function n(e) {
                var t = new r(4);
                t.writeUInt32BE(e, 0);
                return t;
            }
        }).call(this, e("buffer").Buffer);
    }, {
        buffer: 65,
        "create-hash": 90
    } ],
    214: [ function(e, t, r) {
        (function(r) {
            var i = e("parse-asn1");
            var n = e("./mgf");
            var a = e("./xor");
            var s = e("bn.js");
            var f = e("browserify-rsa");
            var o = e("create-hash");
            var c = e("./withPublic");
            t.exports = function e(t, n, a) {
                var o;
                if (t.padding) {
                    o = t.padding;
                } else if (a) {
                    o = 1;
                } else {
                    o = 4;
                }
                var d = i(t);
                var l = d.modulus.byteLength();
                if (n.length > l || new s(n).cmp(d.modulus) >= 0) {
                    throw new Error("decryption error");
                }
                var p;
                if (a) {
                    p = c(new s(n), d);
                } else {
                    p = f(n, d);
                }
                var v = new r(l - p.length);
                v.fill(0);
                p = r.concat([ v, p ], l);
                if (o === 4) {
                    return u(d, p);
                } else if (o === 1) {
                    return h(d, p, a);
                } else if (o === 3) {
                    return p;
                } else {
                    throw new Error("unknown padding");
                }
            };
            function u(e, t) {
                var i = e.modulus;
                var s = e.modulus.byteLength();
                var f = t.length;
                var c = o("sha1").update(new r("")).digest();
                var u = c.length;
                var h = 2 * u;
                if (t[0] !== 0) {
                    throw new Error("decryption error");
                }
                var l = t.slice(1, u + 1);
                var p = t.slice(u + 1);
                var v = a(l, n(p, u));
                var b = a(p, n(v, s - u - 1));
                if (d(c, b.slice(0, u))) {
                    throw new Error("decryption error");
                }
                var m = u;
                while (b[m] === 0) {
                    m++;
                }
                if (b[m++] !== 1) {
                    throw new Error("decryption error");
                }
                return b.slice(m);
            }
            function h(e, t, r) {
                var i = t.slice(0, 2);
                var n = 2;
                var a = 0;
                while (t[n++] !== 0) {
                    if (n >= t.length) {
                        a++;
                        break;
                    }
                }
                var s = t.slice(2, n - 1);
                var f = t.slice(n - 1, n);
                if (i.toString("hex") !== "0002" && !r || i.toString("hex") !== "0001" && r) {
                    a++;
                }
                if (s.length < 8) {
                    a++;
                }
                if (a) {
                    throw new Error("decryption error");
                }
                return t.slice(n);
            }
            function d(e, t) {
                e = new r(e);
                t = new r(t);
                var i = 0;
                var n = e.length;
                if (e.length !== t.length) {
                    i++;
                    n = Math.min(e.length, t.length);
                }
                var a = -1;
                while (++a < n) {
                    i += e[a] ^ t[a];
                }
                return i;
            }
        }).call(this, e("buffer").Buffer);
    }, {
        "./mgf": 213,
        "./withPublic": 216,
        "./xor": 217,
        "bn.js": 32,
        "browserify-rsa": 55,
        buffer: 65,
        "create-hash": 90,
        "parse-asn1": 203
    } ],
    215: [ function(e, t, r) {
        (function(r) {
            var i = e("parse-asn1");
            var n = e("randombytes");
            var a = e("create-hash");
            var s = e("./mgf");
            var f = e("./xor");
            var o = e("bn.js");
            var c = e("./withPublic");
            var u = e("browserify-rsa");
            var h = {
                RSA_PKCS1_OAEP_PADDING: 4,
                RSA_PKCS1_PADDIN: 1,
                RSA_NO_PADDING: 3
            };
            t.exports = function e(t, r, n) {
                var a;
                if (t.padding) {
                    a = t.padding;
                } else if (n) {
                    a = 1;
                } else {
                    a = 4;
                }
                var s = i(t);
                var f;
                if (a === 4) {
                    f = d(s, r);
                } else if (a === 1) {
                    f = l(s, r, n);
                } else if (a === 3) {
                    f = new o(r);
                    if (f.cmp(s.modulus) >= 0) {
                        throw new Error("data too long for modulus");
                    }
                } else {
                    throw new Error("unknown padding");
                }
                if (n) {
                    return u(f, s);
                } else {
                    return c(f, s);
                }
            };
            function d(e, t) {
                var i = e.modulus.byteLength();
                var c = t.length;
                var u = a("sha1").update(new r("")).digest();
                var h = u.length;
                var d = 2 * h;
                if (c > i - d - 2) {
                    throw new Error("message too long");
                }
                var l = new r(i - c - d - 2);
                l.fill(0);
                var p = i - h - 1;
                var v = n(h);
                var b = f(r.concat([ u, l, new r([ 1 ]), t ], p), s(v, p));
                var m = f(v, s(b, h));
                return new o(r.concat([ new r([ 0 ]), m, b ], i));
            }
            function l(e, t, i) {
                var n = t.length;
                var a = e.modulus.byteLength();
                if (n > a - 11) {
                    throw new Error("message too long");
                }
                var s;
                if (i) {
                    s = new r(a - n - 3);
                    s.fill(255);
                } else {
                    s = p(a - n - 3);
                }
                return new o(r.concat([ new r([ 0, i ? 1 : 2 ]), s, new r([ 0 ]), t ], a));
            }
            function p(e, t) {
                var i = new r(e);
                var a = 0;
                var s = n(e * 2);
                var f = 0;
                var o;
                while (a < e) {
                    if (f === s.length) {
                        s = n(e * 2);
                        f = 0;
                    }
                    o = s[f++];
                    if (o) {
                        i[a++] = o;
                    }
                }
                return i;
            }
        }).call(this, e("buffer").Buffer);
    }, {
        "./mgf": 213,
        "./withPublic": 216,
        "./xor": 217,
        "bn.js": 32,
        "browserify-rsa": 55,
        buffer: 65,
        "create-hash": 90,
        "parse-asn1": 203,
        randombytes: 218
    } ],
    216: [ function(e, t, r) {
        (function(r) {
            var i = e("bn.js");
            function n(e, t) {
                return new r(e.toRed(i.mont(t.modulus)).redPow(new i(t.publicExponent)).fromRed().toArray());
            }
            t.exports = n;
        }).call(this, e("buffer").Buffer);
    }, {
        "bn.js": 32,
        buffer: 65
    } ],
    217: [ function(e, t, r) {
        t.exports = function e(t, r) {
            var i = t.length;
            var n = -1;
            while (++n < i) {
                t[n] ^= r[n];
            }
            return t;
        };
    }, {} ],
    218: [ function(e, t, r) {
        (function(r, i) {
            "use strict";
            function n() {
                throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
            }
            var a = e("safe-buffer").Buffer;
            var s = i.crypto || i.msCrypto;
            if (s && s.getRandomValues) {
                t.exports = f;
            } else {
                t.exports = n;
            }
            function f(e, t) {
                if (e > 65536) throw new Error("requested too many random bytes");
                var n = new i.Uint8Array(e);
                if (e > 0) {
                    s.getRandomValues(n);
                }
                var f = a.from(n.buffer);
                if (typeof t === "function") {
                    return r.nextTick(function() {
                        t(null, f);
                    });
                }
                return f;
            }
        }).call(this, e("_process"), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
        _process: 211,
        "safe-buffer": 231
    } ],
    219: [ function(e, t, r) {
        (function(t, i) {
            "use strict";
            function n() {
                throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11");
            }
            var a = e("safe-buffer");
            var s = e("randombytes");
            var f = a.Buffer;
            var o = a.kMaxLength;
            var c = i.crypto || i.msCrypto;
            var u = Math.pow(2, 32) - 1;
            function h(e, t) {
                if (typeof e !== "number" || e !== e) {
                    throw new TypeError("offset must be a number");
                }
                if (e > u || e < 0) {
                    throw new TypeError("offset must be a uint32");
                }
                if (e > o || e > t) {
                    throw new RangeError("offset out of range");
                }
            }
            function d(e, t, r) {
                if (typeof e !== "number" || e !== e) {
                    throw new TypeError("size must be a number");
                }
                if (e > u || e < 0) {
                    throw new TypeError("size must be a uint32");
                }
                if (e + t > r || e > o) {
                    throw new RangeError("buffer too small");
                }
            }
            if (c && c.getRandomValues || !t.browser) {
                r.randomFill = l;
                r.randomFillSync = v;
            } else {
                r.randomFill = n;
                r.randomFillSync = n;
            }
            function l(e, t, r, n) {
                if (!f.isBuffer(e) && !(e instanceof i.Uint8Array)) {
                    throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
                }
                if (typeof t === "function") {
                    n = t;
                    t = 0;
                    r = e.length;
                } else if (typeof r === "function") {
                    n = r;
                    r = e.length - t;
                } else if (typeof n !== "function") {
                    throw new TypeError('"cb" argument must be a function');
                }
                h(t, e.length);
                d(r, t, e.length);
                return p(e, t, r, n);
            }
            function p(e, r, i, n) {
                if (t.browser) {
                    var a = e.buffer;
                    var f = new Uint8Array(a, r, i);
                    c.getRandomValues(f);
                    if (n) {
                        t.nextTick(function() {
                            n(null, e);
                        });
                        return;
                    }
                    return e;
                }
                if (n) {
                    s(i, function(t, i) {
                        if (t) {
                            return n(t);
                        }
                        i.copy(e, r);
                        n(null, e);
                    });
                    return;
                }
                var o = s(i);
                o.copy(e, r);
                return e;
            }
            function v(e, t, r) {
                if (typeof t === "undefined") {
                    t = 0;
                }
                if (!f.isBuffer(e) && !(e instanceof i.Uint8Array)) {
                    throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
                }
                h(t, e.length);
                if (r === undefined) r = e.length - t;
                d(r, t, e.length);
                return p(e, t, r);
            }
        }).call(this, e("_process"), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
        _process: 211,
        randombytes: 218,
        "safe-buffer": 231
    } ],
    220: [ function(e, t, r) {
        t.exports = e("./lib/_stream_duplex.js");
    }, {
        "./lib/_stream_duplex.js": 221
    } ],
    221: [ function(e, t, r) {
        "use strict";
        var i = Object.keys || function(e) {
            var t = [];
            for (var r in e) {
                t.push(r);
            }
            return t;
        };
        t.exports = h;
        var n = e("process-nextick-args");
        var a = e("core-util-is");
        a.inherits = e("inherits");
        var s = e("./_stream_readable");
        var f = e("./_stream_writable");
        a.inherits(h, s);
        var o = i(f.prototype);
        for (var c = 0; c < o.length; c++) {
            var u = o[c];
            if (!h.prototype[u]) h.prototype[u] = f.prototype[u];
        }
        function h(e) {
            if (!(this instanceof h)) return new h(e);
            s.call(this, e);
            f.call(this, e);
            if (e && e.readable === false) this.readable = false;
            if (e && e.writable === false) this.writable = false;
            this.allowHalfOpen = true;
            if (e && e.allowHalfOpen === false) this.allowHalfOpen = false;
            this.once("end", d);
        }
        function d() {
            if (this.allowHalfOpen || this._writableState.ended) return;
            n(l, this);
        }
        function l(e) {
            e.end();
        }
        function p(e, t) {
            for (var r = 0, i = e.length; r < i; r++) {
                t(e[r], r);
            }
        }
    }, {
        "./_stream_readable": 223,
        "./_stream_writable": 225,
        "core-util-is": 88,
        inherits: 139,
        "process-nextick-args": 210
    } ],
    222: [ function(e, t, r) {
        "use strict";
        t.exports = a;
        var i = e("./_stream_transform");
        var n = e("core-util-is");
        n.inherits = e("inherits");
        n.inherits(a, i);
        function a(e) {
            if (!(this instanceof a)) return new a(e);
            i.call(this, e);
        }
        a.prototype._transform = function(e, t, r) {
            r(null, e);
        };
    }, {
        "./_stream_transform": 224,
        "core-util-is": 88,
        inherits: 139
    } ],
    223: [ function(e, t, r) {
        (function(r) {
            "use strict";
            t.exports = v;
            var i = e("process-nextick-args");
            var n = e("isarray");
            var a = e("buffer").Buffer;
            v.ReadableState = p;
            var s = e("events");
            var f = function(e, t) {
                return e.listeners(t).length;
            };
            var o;
            (function() {
                try {
                    o = e("st" + "ream");
                } catch (e) {} finally {
                    if (!o) o = e("events").EventEmitter;
                }
            })();
            var a = e("buffer").Buffer;
            var c = e("core-util-is");
            c.inherits = e("inherits");
            var u = e("util");
            var h = undefined;
            if (u && u.debuglog) {
                h = u.debuglog("stream");
            } else {
                h = function() {};
            }
            var d;
            c.inherits(v, o);
            var l;
            function p(t, r) {
                l = l || e("./_stream_duplex");
                t = t || {};
                this.objectMode = !!t.objectMode;
                if (r instanceof l) this.objectMode = this.objectMode || !!t.readableObjectMode;
                var i = t.highWaterMark;
                var n = this.objectMode ? 16 : 16 * 1024;
                this.highWaterMark = i || i === 0 ? i : n;
                this.highWaterMark = ~~this.highWaterMark;
                this.buffer = [];
                this.length = 0;
                this.pipes = null;
                this.pipesCount = 0;
                this.flowing = null;
                this.ended = false;
                this.endEmitted = false;
                this.reading = false;
                this.sync = true;
                this.needReadable = false;
                this.emittedReadable = false;
                this.readableListening = false;
                this.resumeScheduled = false;
                this.defaultEncoding = t.defaultEncoding || "utf8";
                this.ranOut = false;
                this.awaitDrain = 0;
                this.readingMore = false;
                this.decoder = null;
                this.encoding = null;
                if (t.encoding) {
                    if (!d) d = e("string_decoder/").StringDecoder;
                    this.decoder = new d(t.encoding);
                    this.encoding = t.encoding;
                }
            }
            var l;
            function v(t) {
                l = l || e("./_stream_duplex");
                if (!(this instanceof v)) return new v(t);
                this._readableState = new p(t, this);
                this.readable = true;
                if (t && typeof t.read === "function") this._read = t.read;
                o.call(this);
            }
            v.prototype.push = function(e, t) {
                var r = this._readableState;
                if (!r.objectMode && typeof e === "string") {
                    t = t || r.defaultEncoding;
                    if (t !== r.encoding) {
                        e = new a(e, t);
                        t = "";
                    }
                }
                return b(this, r, e, t, false);
            };
            v.prototype.unshift = function(e) {
                var t = this._readableState;
                return b(this, t, e, "", true);
            };
            v.prototype.isPaused = function() {
                return this._readableState.flowing === false;
            };
            function b(e, t, r, i, n) {
                var a = _(t, r);
                if (a) {
                    e.emit("error", a);
                } else if (r === null) {
                    t.reading = false;
                    S(e, t);
                } else if (t.objectMode || r && r.length > 0) {
                    if (t.ended && !n) {
                        var s = new Error("stream.push() after EOF");
                        e.emit("error", s);
                    } else if (t.endEmitted && n) {
                        var s = new Error("stream.unshift() after end event");
                        e.emit("error", s);
                    } else {
                        var f;
                        if (t.decoder && !n && !i) {
                            r = t.decoder.write(r);
                            f = !t.objectMode && r.length === 0;
                        }
                        if (!n) t.reading = false;
                        if (!f) {
                            if (t.flowing && t.length === 0 && !t.sync) {
                                e.emit("data", r);
                                e.read(0);
                            } else {
                                t.length += t.objectMode ? 1 : r.length;
                                if (n) t.buffer.unshift(r); else t.buffer.push(r);
                                if (t.needReadable) k(e);
                            }
                        }
                        E(e, t);
                    }
                } else if (!n) {
                    t.reading = false;
                }
                return m(t);
            }
            function m(e) {
                return !e.ended && (e.needReadable || e.length < e.highWaterMark || e.length === 0);
            }
            v.prototype.setEncoding = function(t) {
                if (!d) d = e("string_decoder/").StringDecoder;
                this._readableState.decoder = new d(t);
                this._readableState.encoding = t;
                return this;
            };
            var g = 8388608;
            function y(e) {
                if (e >= g) {
                    e = g;
                } else {
                    e--;
                    e |= e >>> 1;
                    e |= e >>> 2;
                    e |= e >>> 4;
                    e |= e >>> 8;
                    e |= e >>> 16;
                    e++;
                }
                return e;
            }
            function w(e, t) {
                if (t.length === 0 && t.ended) return 0;
                if (t.objectMode) return e === 0 ? 0 : 1;
                if (e === null || isNaN(e)) {
                    if (t.flowing && t.buffer.length) return t.buffer[0].length; else return t.length;
                }
                if (e <= 0) return 0;
                if (e > t.highWaterMark) t.highWaterMark = y(e);
                if (e > t.length) {
                    if (!t.ended) {
                        t.needReadable = true;
                        return 0;
                    } else {
                        return t.length;
                    }
                }
                return e;
            }
            v.prototype.read = function(e) {
                h("read", e);
                var t = this._readableState;
                var r = e;
                if (typeof e !== "number" || e > 0) t.emittedReadable = false;
                if (e === 0 && t.needReadable && (t.length >= t.highWaterMark || t.ended)) {
                    h("read: emitReadable", t.length, t.ended);
                    if (t.length === 0 && t.ended) z(this); else k(this);
                    return null;
                }
                e = w(e, t);
                if (e === 0 && t.ended) {
                    if (t.length === 0) z(this);
                    return null;
                }
                var i = t.needReadable;
                h("need readable", i);
                if (t.length === 0 || t.length - e < t.highWaterMark) {
                    i = true;
                    h("length less than watermark", i);
                }
                if (t.ended || t.reading) {
                    i = false;
                    h("reading or ended", i);
                }
                if (i) {
                    h("do read");
                    t.reading = true;
                    t.sync = true;
                    if (t.length === 0) t.needReadable = true;
                    this._read(t.highWaterMark);
                    t.sync = false;
                }
                if (i && !t.reading) e = w(r, t);
                var n;
                if (e > 0) n = R(e, t); else n = null;
                if (n === null) {
                    t.needReadable = true;
                    e = 0;
                }
                t.length -= e;
                if (t.length === 0 && !t.ended) t.needReadable = true;
                if (r !== e && t.ended && t.length === 0) z(this);
                if (n !== null) this.emit("data", n);
                return n;
            };
            function _(e, t) {
                var r = null;
                if (!a.isBuffer(t) && typeof t !== "string" && t !== null && t !== undefined && !e.objectMode) {
                    r = new TypeError("Invalid non-string/buffer chunk");
                }
                return r;
            }
            function S(e, t) {
                if (t.ended) return;
                if (t.decoder) {
                    var r = t.decoder.end();
                    if (r && r.length) {
                        t.buffer.push(r);
                        t.length += t.objectMode ? 1 : r.length;
                    }
                }
                t.ended = true;
                k(e);
            }
            function k(e) {
                var t = e._readableState;
                t.needReadable = false;
                if (!t.emittedReadable) {
                    h("emitReadable", t.flowing);
                    t.emittedReadable = true;
                    if (t.sync) i(x, e); else x(e);
                }
            }
            function x(e) {
                h("emit readable");
                e.emit("readable");
                C(e);
            }
            function E(e, t) {
                if (!t.readingMore) {
                    t.readingMore = true;
                    i(A, e, t);
                }
            }
            function A(e, t) {
                var r = t.length;
                while (!t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark) {
                    h("maybeReadMore read 0");
                    e.read(0);
                    if (r === t.length) break; else r = t.length;
                }
                t.readingMore = false;
            }
            v.prototype._read = function(e) {
                this.emit("error", new Error("not implemented"));
            };
            v.prototype.pipe = function(e, t) {
                var a = this;
                var s = this._readableState;
                switch (s.pipesCount) {
                  case 0:
                    s.pipes = e;
                    break;

                  case 1:
                    s.pipes = [ s.pipes, e ];
                    break;

                  default:
                    s.pipes.push(e);
                    break;
                }
                s.pipesCount += 1;
                h("pipe count=%d opts=%j", s.pipesCount, t);
                var o = (!t || t.end !== false) && e !== r.stdout && e !== r.stderr;
                var c = o ? d : v;
                if (s.endEmitted) i(c); else a.once("end", c);
                e.on("unpipe", u);
                function u(e) {
                    h("onunpipe");
                    if (e === a) {
                        v();
                    }
                }
                function d() {
                    h("onend");
                    e.end();
                }
                var l = M(a);
                e.on("drain", l);
                var p = false;
                function v() {
                    h("cleanup");
                    e.removeListener("close", g);
                    e.removeListener("finish", y);
                    e.removeListener("drain", l);
                    e.removeListener("error", m);
                    e.removeListener("unpipe", u);
                    a.removeListener("end", d);
                    a.removeListener("end", v);
                    a.removeListener("data", b);
                    p = true;
                    if (s.awaitDrain && (!e._writableState || e._writableState.needDrain)) l();
                }
                a.on("data", b);
                function b(t) {
                    h("ondata");
                    var r = e.write(t);
                    if (false === r) {
                        if (s.pipesCount === 1 && s.pipes[0] === e && a.listenerCount("data") === 1 && !p) {
                            h("false write response, pause", a._readableState.awaitDrain);
                            a._readableState.awaitDrain++;
                        }
                        a.pause();
                    }
                }
                function m(t) {
                    h("onerror", t);
                    w();
                    e.removeListener("error", m);
                    if (f(e, "error") === 0) e.emit("error", t);
                }
                if (!e._events || !e._events.error) e.on("error", m); else if (n(e._events.error)) e._events.error.unshift(m); else e._events.error = [ m, e._events.error ];
                function g() {
                    e.removeListener("finish", y);
                    w();
                }
                e.once("close", g);
                function y() {
                    h("onfinish");
                    e.removeListener("close", g);
                    w();
                }
                e.once("finish", y);
                function w() {
                    h("unpipe");
                    a.unpipe(e);
                }
                e.emit("pipe", a);
                if (!s.flowing) {
                    h("pipe resume");
                    a.resume();
                }
                return e;
            };
            function M(e) {
                return function() {
                    var t = e._readableState;
                    h("pipeOnDrain", t.awaitDrain);
                    if (t.awaitDrain) t.awaitDrain--;
                    if (t.awaitDrain === 0 && f(e, "data")) {
                        t.flowing = true;
                        C(e);
                    }
                };
            }
            v.prototype.unpipe = function(e) {
                var t = this._readableState;
                if (t.pipesCount === 0) return this;
                if (t.pipesCount === 1) {
                    if (e && e !== t.pipes) return this;
                    if (!e) e = t.pipes;
                    t.pipes = null;
                    t.pipesCount = 0;
                    t.flowing = false;
                    if (e) e.emit("unpipe", this);
                    return this;
                }
                if (!e) {
                    var r = t.pipes;
                    var i = t.pipesCount;
                    t.pipes = null;
                    t.pipesCount = 0;
                    t.flowing = false;
                    for (var n = 0; n < i; n++) {
                        r[n].emit("unpipe", this);
                    }
                    return this;
                }
                var a = D(t.pipes, e);
                if (a === -1) return this;
                t.pipes.splice(a, 1);
                t.pipesCount -= 1;
                if (t.pipesCount === 1) t.pipes = t.pipes[0];
                e.emit("unpipe", this);
                return this;
            };
            v.prototype.on = function(e, t) {
                var r = o.prototype.on.call(this, e, t);
                if (e === "data" && false !== this._readableState.flowing) {
                    this.resume();
                }
                if (e === "readable" && !this._readableState.endEmitted) {
                    var n = this._readableState;
                    if (!n.readableListening) {
                        n.readableListening = true;
                        n.emittedReadable = false;
                        n.needReadable = true;
                        if (!n.reading) {
                            i(B, this);
                        } else if (n.length) {
                            k(this, n);
                        }
                    }
                }
                return r;
            };
            v.prototype.addListener = v.prototype.on;
            function B(e) {
                h("readable nexttick read 0");
                e.read(0);
            }
            v.prototype.resume = function() {
                var e = this._readableState;
                if (!e.flowing) {
                    h("resume");
                    e.flowing = true;
                    I(this, e);
                }
                return this;
            };
            function I(e, t) {
                if (!t.resumeScheduled) {
                    t.resumeScheduled = true;
                    i(j, e, t);
                }
            }
            function j(e, t) {
                if (!t.reading) {
                    h("resume read 0");
                    e.read(0);
                }
                t.resumeScheduled = false;
                e.emit("resume");
                C(e);
                if (t.flowing && !t.reading) e.read(0);
            }
            v.prototype.pause = function() {
                h("call pause flowing=%j", this._readableState.flowing);
                if (false !== this._readableState.flowing) {
                    h("pause");
                    this._readableState.flowing = false;
                    this.emit("pause");
                }
                return this;
            };
            function C(e) {
                var t = e._readableState;
                h("flow", t.flowing);
                if (t.flowing) {
                    do {
                        var r = e.read();
                    } while (null !== r && t.flowing);
                }
            }
            v.prototype.wrap = function(e) {
                var t = this._readableState;
                var r = false;
                var i = this;
                e.on("end", function() {
                    h("wrapped end");
                    if (t.decoder && !t.ended) {
                        var e = t.decoder.end();
                        if (e && e.length) i.push(e);
                    }
                    i.push(null);
                });
                e.on("data", function(n) {
                    h("wrapped data");
                    if (t.decoder) n = t.decoder.write(n);
                    if (t.objectMode && (n === null || n === undefined)) return; else if (!t.objectMode && (!n || !n.length)) return;
                    var a = i.push(n);
                    if (!a) {
                        r = true;
                        e.pause();
                    }
                });
                for (var n in e) {
                    if (this[n] === undefined && typeof e[n] === "function") {
                        this[n] = function(t) {
                            return function() {
                                return e[t].apply(e, arguments);
                            };
                        }(n);
                    }
                }
                var a = [ "error", "close", "destroy", "pause", "resume" ];
                O(a, function(t) {
                    e.on(t, i.emit.bind(i, t));
                });
                i._read = function(t) {
                    h("wrapped _read", t);
                    if (r) {
                        r = false;
                        e.resume();
                    }
                };
                return i;
            };
            v._fromList = R;
            function R(e, t) {
                var r = t.buffer;
                var i = t.length;
                var n = !!t.decoder;
                var s = !!t.objectMode;
                var f;
                if (r.length === 0) return null;
                if (i === 0) f = null; else if (s) f = r.shift(); else if (!e || e >= i) {
                    if (n) f = r.join(""); else if (r.length === 1) f = r[0]; else f = a.concat(r, i);
                    r.length = 0;
                } else {
                    if (e < r[0].length) {
                        var o = r[0];
                        f = o.slice(0, e);
                        r[0] = o.slice(e);
                    } else if (e === r[0].length) {
                        f = r.shift();
                    } else {
                        if (n) f = ""; else f = new a(e);
                        var c = 0;
                        for (var u = 0, h = r.length; u < h && c < e; u++) {
                            var o = r[0];
                            var d = Math.min(e - c, o.length);
                            if (n) f += o.slice(0, d); else o.copy(f, c, 0, d);
                            if (d < o.length) r[0] = o.slice(d); else r.shift();
                            c += d;
                        }
                    }
                }
                return f;
            }
            function z(e) {
                var t = e._readableState;
                if (t.length > 0) throw new Error("endReadable called on non-empty stream");
                if (!t.endEmitted) {
                    t.ended = true;
                    i(T, t, e);
                }
            }
            function T(e, t) {
                if (!e.endEmitted && e.length === 0) {
                    e.endEmitted = true;
                    t.readable = false;
                    t.emit("end");
                }
            }
            function O(e, t) {
                for (var r = 0, i = e.length; r < i; r++) {
                    t(e[r], r);
                }
            }
            function D(e, t) {
                for (var r = 0, i = e.length; r < i; r++) {
                    if (e[r] === t) return r;
                }
                return -1;
            }
        }).call(this, e("_process"));
    }, {
        "./_stream_duplex": 221,
        _process: 211,
        buffer: 65,
        "core-util-is": 88,
        events: 121,
        inherits: 139,
        isarray: 141,
        "process-nextick-args": 210,
        "string_decoder/": 241,
        util: 34
    } ],
    224: [ function(e, t, r) {
        "use strict";
        t.exports = f;
        var i = e("./_stream_duplex");
        var n = e("core-util-is");
        n.inherits = e("inherits");
        n.inherits(f, i);
        function a(e) {
            this.afterTransform = function(t, r) {
                return s(e, t, r);
            };
            this.needTransform = false;
            this.transforming = false;
            this.writecb = null;
            this.writechunk = null;
            this.writeencoding = null;
        }
        function s(e, t, r) {
            var i = e._transformState;
            i.transforming = false;
            var n = i.writecb;
            if (!n) return e.emit("error", new Error("no writecb in Transform class"));
            i.writechunk = null;
            i.writecb = null;
            if (r !== null && r !== undefined) e.push(r);
            n(t);
            var a = e._readableState;
            a.reading = false;
            if (a.needReadable || a.length < a.highWaterMark) {
                e._read(a.highWaterMark);
            }
        }
        function f(e) {
            if (!(this instanceof f)) return new f(e);
            i.call(this, e);
            this._transformState = new a(this);
            var t = this;
            this._readableState.needReadable = true;
            this._readableState.sync = false;
            if (e) {
                if (typeof e.transform === "function") this._transform = e.transform;
                if (typeof e.flush === "function") this._flush = e.flush;
            }
            this.once("prefinish", function() {
                if (typeof this._flush === "function") this._flush(function(e) {
                    o(t, e);
                }); else o(t);
            });
        }
        f.prototype.push = function(e, t) {
            this._transformState.needTransform = false;
            return i.prototype.push.call(this, e, t);
        };
        f.prototype._transform = function(e, t, r) {
            throw new Error("not implemented");
        };
        f.prototype._write = function(e, t, r) {
            var i = this._transformState;
            i.writecb = r;
            i.writechunk = e;
            i.writeencoding = t;
            if (!i.transforming) {
                var n = this._readableState;
                if (i.needTransform || n.needReadable || n.length < n.highWaterMark) this._read(n.highWaterMark);
            }
        };
        f.prototype._read = function(e) {
            var t = this._transformState;
            if (t.writechunk !== null && t.writecb && !t.transforming) {
                t.transforming = true;
                this._transform(t.writechunk, t.writeencoding, t.afterTransform);
            } else {
                t.needTransform = true;
            }
        };
        function o(e, t) {
            if (t) return e.emit("error", t);
            var r = e._writableState;
            var i = e._transformState;
            if (r.length) throw new Error("calling transform done when ws.length != 0");
            if (i.transforming) throw new Error("calling transform done when still transforming");
            return e.push(null);
        }
    }, {
        "./_stream_duplex": 221,
        "core-util-is": 88,
        inherits: 139
    } ],
    225: [ function(e, t, r) {
        (function(r) {
            "use strict";
            t.exports = l;
            var i = e("process-nextick-args");
            var n = !r.browser && [ "v0.10", "v0.9." ].indexOf(r.version.slice(0, 5)) > -1 ? setImmediate : i;
            var a = e("buffer").Buffer;
            l.WritableState = d;
            var s = e("core-util-is");
            s.inherits = e("inherits");
            var f = {
                deprecate: e("util-deprecate")
            };
            var o;
            (function() {
                try {
                    o = e("st" + "ream");
                } catch (e) {} finally {
                    if (!o) o = e("events").EventEmitter;
                }
            })();
            var a = e("buffer").Buffer;
            s.inherits(l, o);
            function c() {}
            function u(e, t, r) {
                this.chunk = e;
                this.encoding = t;
                this.callback = r;
                this.next = null;
            }
            var h;
            function d(t, r) {
                h = h || e("./_stream_duplex");
                t = t || {};
                this.objectMode = !!t.objectMode;
                if (r instanceof h) this.objectMode = this.objectMode || !!t.writableObjectMode;
                var i = t.highWaterMark;
                var n = this.objectMode ? 16 : 16 * 1024;
                this.highWaterMark = i || i === 0 ? i : n;
                this.highWaterMark = ~~this.highWaterMark;
                this.needDrain = false;
                this.ending = false;
                this.ended = false;
                this.finished = false;
                var a = t.decodeStrings === false;
                this.decodeStrings = !a;
                this.defaultEncoding = t.defaultEncoding || "utf8";
                this.length = 0;
                this.writing = false;
                this.corked = 0;
                this.sync = true;
                this.bufferProcessing = false;
                this.onwrite = function(e) {
                    _(r, e);
                };
                this.writecb = null;
                this.writelen = 0;
                this.bufferedRequest = null;
                this.lastBufferedRequest = null;
                this.pendingcb = 0;
                this.prefinished = false;
                this.errorEmitted = false;
                this.bufferedRequestCount = 0;
                this.corkedRequestsFree = new I(this);
                this.corkedRequestsFree.next = new I(this);
            }
            d.prototype.getBuffer = function e() {
                var t = this.bufferedRequest;
                var r = [];
                while (t) {
                    r.push(t);
                    t = t.next;
                }
                return r;
            };
            (function() {
                try {
                    Object.defineProperty(d.prototype, "buffer", {
                        get: f.deprecate(function() {
                            return this.getBuffer();
                        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer " + "instead.")
                    });
                } catch (e) {}
            })();
            var h;
            function l(t) {
                h = h || e("./_stream_duplex");
                if (!(this instanceof l) && !(this instanceof h)) return new l(t);
                this._writableState = new d(t, this);
                this.writable = true;
                if (t) {
                    if (typeof t.write === "function") this._write = t.write;
                    if (typeof t.writev === "function") this._writev = t.writev;
                }
                o.call(this);
            }
            l.prototype.pipe = function() {
                this.emit("error", new Error("Cannot pipe. Not readable."));
            };
            function p(e, t) {
                var r = new Error("write after end");
                e.emit("error", r);
                i(t, r);
            }
            function v(e, t, r, n) {
                var s = true;
                if (!a.isBuffer(r) && typeof r !== "string" && r !== null && r !== undefined && !t.objectMode) {
                    var f = new TypeError("Invalid non-string/buffer chunk");
                    e.emit("error", f);
                    i(n, f);
                    s = false;
                }
                return s;
            }
            l.prototype.write = function(e, t, r) {
                var i = this._writableState;
                var n = false;
                if (typeof t === "function") {
                    r = t;
                    t = null;
                }
                if (a.isBuffer(e)) t = "buffer"; else if (!t) t = i.defaultEncoding;
                if (typeof r !== "function") r = c;
                if (i.ended) p(this, r); else if (v(this, i, e, r)) {
                    i.pendingcb++;
                    n = m(this, i, e, t, r);
                }
                return n;
            };
            l.prototype.cork = function() {
                var e = this._writableState;
                e.corked++;
            };
            l.prototype.uncork = function() {
                var e = this._writableState;
                if (e.corked) {
                    e.corked--;
                    if (!e.writing && !e.corked && !e.finished && !e.bufferProcessing && e.bufferedRequest) x(this, e);
                }
            };
            l.prototype.setDefaultEncoding = function e(t) {
                if (typeof t === "string") t = t.toLowerCase();
                if (!([ "hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw" ].indexOf((t + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + t);
                this._writableState.defaultEncoding = t;
            };
            function b(e, t, r) {
                if (!e.objectMode && e.decodeStrings !== false && typeof t === "string") {
                    t = new a(t, r);
                }
                return t;
            }
            function m(e, t, r, i, n) {
                r = b(t, r, i);
                if (a.isBuffer(r)) i = "buffer";
                var s = t.objectMode ? 1 : r.length;
                t.length += s;
                var f = t.length < t.highWaterMark;
                if (!f) t.needDrain = true;
                if (t.writing || t.corked) {
                    var o = t.lastBufferedRequest;
                    t.lastBufferedRequest = new u(r, i, n);
                    if (o) {
                        o.next = t.lastBufferedRequest;
                    } else {
                        t.bufferedRequest = t.lastBufferedRequest;
                    }
                    t.bufferedRequestCount += 1;
                } else {
                    g(e, t, false, s, r, i, n);
                }
                return f;
            }
            function g(e, t, r, i, n, a, s) {
                t.writelen = i;
                t.writecb = s;
                t.writing = true;
                t.sync = true;
                if (r) e._writev(n, t.onwrite); else e._write(n, a, t.onwrite);
                t.sync = false;
            }
            function y(e, t, r, n, a) {
                --t.pendingcb;
                if (r) i(a, n); else a(n);
                e._writableState.errorEmitted = true;
                e.emit("error", n);
            }
            function w(e) {
                e.writing = false;
                e.writecb = null;
                e.length -= e.writelen;
                e.writelen = 0;
            }
            function _(e, t) {
                var r = e._writableState;
                var i = r.sync;
                var a = r.writecb;
                w(r);
                if (t) y(e, r, i, t, a); else {
                    var s = E(r);
                    if (!s && !r.corked && !r.bufferProcessing && r.bufferedRequest) {
                        x(e, r);
                    }
                    if (i) {
                        n(S, e, r, s, a);
                    } else {
                        S(e, r, s, a);
                    }
                }
            }
            function S(e, t, r, i) {
                if (!r) k(e, t);
                t.pendingcb--;
                i();
                M(e, t);
            }
            function k(e, t) {
                if (t.length === 0 && t.needDrain) {
                    t.needDrain = false;
                    e.emit("drain");
                }
            }
            function x(e, t) {
                t.bufferProcessing = true;
                var r = t.bufferedRequest;
                if (e._writev && r && r.next) {
                    var i = t.bufferedRequestCount;
                    var n = new Array(i);
                    var a = t.corkedRequestsFree;
                    a.entry = r;
                    var s = 0;
                    while (r) {
                        n[s] = r;
                        r = r.next;
                        s += 1;
                    }
                    g(e, t, true, t.length, n, "", a.finish);
                    t.pendingcb++;
                    t.lastBufferedRequest = null;
                    t.corkedRequestsFree = a.next;
                    a.next = null;
                } else {
                    while (r) {
                        var f = r.chunk;
                        var o = r.encoding;
                        var c = r.callback;
                        var u = t.objectMode ? 1 : f.length;
                        g(e, t, false, u, f, o, c);
                        r = r.next;
                        if (t.writing) {
                            break;
                        }
                    }
                    if (r === null) t.lastBufferedRequest = null;
                }
                t.bufferedRequestCount = 0;
                t.bufferedRequest = r;
                t.bufferProcessing = false;
            }
            l.prototype._write = function(e, t, r) {
                r(new Error("not implemented"));
            };
            l.prototype._writev = null;
            l.prototype.end = function(e, t, r) {
                var i = this._writableState;
                if (typeof e === "function") {
                    r = e;
                    e = null;
                    t = null;
                } else if (typeof t === "function") {
                    r = t;
                    t = null;
                }
                if (e !== null && e !== undefined) this.write(e, t);
                if (i.corked) {
                    i.corked = 1;
                    this.uncork();
                }
                if (!i.ending && !i.finished) B(this, i, r);
            };
            function E(e) {
                return e.ending && e.length === 0 && e.bufferedRequest === null && !e.finished && !e.writing;
            }
            function A(e, t) {
                if (!t.prefinished) {
                    t.prefinished = true;
                    e.emit("prefinish");
                }
            }
            function M(e, t) {
                var r = E(t);
                if (r) {
                    if (t.pendingcb === 0) {
                        A(e, t);
                        t.finished = true;
                        e.emit("finish");
                    } else {
                        A(e, t);
                    }
                }
                return r;
            }
            function B(e, t, r) {
                t.ending = true;
                M(e, t);
                if (r) {
                    if (t.finished) i(r); else e.once("finish", r);
                }
                t.ended = true;
                e.writable = false;
            }
            function I(e) {
                var t = this;
                this.next = null;
                this.entry = null;
                this.finish = function(r) {
                    var i = t.entry;
                    t.entry = null;
                    while (i) {
                        var n = i.callback;
                        e.pendingcb--;
                        n(r);
                        i = i.next;
                    }
                    if (e.corkedRequestsFree) {
                        e.corkedRequestsFree.next = t;
                    } else {
                        e.corkedRequestsFree = t;
                    }
                };
            }
        }).call(this, e("_process"));
    }, {
        "./_stream_duplex": 221,
        _process: 211,
        buffer: 65,
        "core-util-is": 88,
        events: 121,
        inherits: 139,
        "process-nextick-args": 210,
        "util-deprecate": 242
    } ],
    226: [ function(e, t, r) {
        t.exports = e("./lib/_stream_passthrough.js");
    }, {
        "./lib/_stream_passthrough.js": 222
    } ],
    227: [ function(e, t, r) {
        var i = function() {
            try {
                return e("st" + "ream");
            } catch (e) {}
        }();
        r = t.exports = e("./lib/_stream_readable.js");
        r.Stream = i || r;
        r.Readable = r;
        r.Writable = e("./lib/_stream_writable.js");
        r.Duplex = e("./lib/_stream_duplex.js");
        r.Transform = e("./lib/_stream_transform.js");
        r.PassThrough = e("./lib/_stream_passthrough.js");
    }, {
        "./lib/_stream_duplex.js": 221,
        "./lib/_stream_passthrough.js": 222,
        "./lib/_stream_readable.js": 223,
        "./lib/_stream_transform.js": 224,
        "./lib/_stream_writable.js": 225
    } ],
    228: [ function(e, t, r) {
        t.exports = e("./lib/_stream_transform.js");
    }, {
        "./lib/_stream_transform.js": 224
    } ],
    229: [ function(e, t, r) {
        t.exports = e("./lib/_stream_writable.js");
    }, {
        "./lib/_stream_writable.js": 225
    } ],
    230: [ function(e, t, r) {
        "use strict";
        var i = e("buffer").Buffer;
        var n = e("inherits");
        var a = e("hash-base");
        var s = new Array(16);
        var f = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13 ];
        var o = [ 5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11 ];
        var c = [ 11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6 ];
        var u = [ 8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11 ];
        var h = [ 0, 1518500249, 1859775393, 2400959708, 2840853838 ];
        var d = [ 1352829926, 1548603684, 1836072691, 2053994217, 0 ];
        function l() {
            a.call(this, 64);
            this._a = 1732584193;
            this._b = 4023233417;
            this._c = 2562383102;
            this._d = 271733878;
            this._e = 3285377520;
        }
        n(l, a);
        l.prototype._update = function() {
            var e = s;
            for (var t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(t * 4);
            var r = this._a | 0;
            var i = this._b | 0;
            var n = this._c | 0;
            var a = this._d | 0;
            var l = this._e | 0;
            var w = this._a | 0;
            var _ = this._b | 0;
            var S = this._c | 0;
            var k = this._d | 0;
            var x = this._e | 0;
            for (var E = 0; E < 80; E += 1) {
                var A;
                var M;
                if (E < 16) {
                    A = v(r, i, n, a, l, e[f[E]], h[0], c[E]);
                    M = y(w, _, S, k, x, e[o[E]], d[0], u[E]);
                } else if (E < 32) {
                    A = b(r, i, n, a, l, e[f[E]], h[1], c[E]);
                    M = g(w, _, S, k, x, e[o[E]], d[1], u[E]);
                } else if (E < 48) {
                    A = m(r, i, n, a, l, e[f[E]], h[2], c[E]);
                    M = m(w, _, S, k, x, e[o[E]], d[2], u[E]);
                } else if (E < 64) {
                    A = g(r, i, n, a, l, e[f[E]], h[3], c[E]);
                    M = b(w, _, S, k, x, e[o[E]], d[3], u[E]);
                } else {
                    A = y(r, i, n, a, l, e[f[E]], h[4], c[E]);
                    M = v(w, _, S, k, x, e[o[E]], d[4], u[E]);
                }
                r = l;
                l = a;
                a = p(n, 10);
                n = i;
                i = A;
                w = x;
                x = k;
                k = p(S, 10);
                S = _;
                _ = M;
            }
            var B = this._b + n + k | 0;
            this._b = this._c + a + x | 0;
            this._c = this._d + l + w | 0;
            this._d = this._e + r + _ | 0;
            this._e = this._a + i + S | 0;
            this._a = B;
        };
        l.prototype._digest = function() {
            this._block[this._blockOffset++] = 128;
            if (this._blockOffset > 56) {
                this._block.fill(0, this._blockOffset, 64);
                this._update();
                this._blockOffset = 0;
            }
            this._block.fill(0, this._blockOffset, 56);
            this._block.writeUInt32LE(this._length[0], 56);
            this._block.writeUInt32LE(this._length[1], 60);
            this._update();
            var e = i.alloc ? i.alloc(20) : new i(20);
            e.writeInt32LE(this._a, 0);
            e.writeInt32LE(this._b, 4);
            e.writeInt32LE(this._c, 8);
            e.writeInt32LE(this._d, 12);
            e.writeInt32LE(this._e, 16);
            return e;
        };
        function p(e, t) {
            return e << t | e >>> 32 - t;
        }
        function v(e, t, r, i, n, a, s, f) {
            return p(e + (t ^ r ^ i) + a + s | 0, f) + n | 0;
        }
        function b(e, t, r, i, n, a, s, f) {
            return p(e + (t & r | ~t & i) + a + s | 0, f) + n | 0;
        }
        function m(e, t, r, i, n, a, s, f) {
            return p(e + ((t | ~r) ^ i) + a + s | 0, f) + n | 0;
        }
        function g(e, t, r, i, n, a, s, f) {
            return p(e + (t & i | r & ~i) + a + s | 0, f) + n | 0;
        }
        function y(e, t, r, i, n, a, s, f) {
            return p(e + (t ^ (r | ~i)) + a + s | 0, f) + n | 0;
        }
        t.exports = l;
    }, {
        buffer: 65,
        "hash-base": 123,
        inherits: 139
    } ],
    231: [ function(e, t, r) {
        var i = e("buffer");
        var n = i.Buffer;
        function a(e, t) {
            for (var r in e) {
                t[r] = e[r];
            }
        }
        if (n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow) {
            t.exports = i;
        } else {
            a(i, r);
            r.Buffer = s;
        }
        function s(e, t, r) {
            return n(e, t, r);
        }
        a(n, s);
        s.from = function(e, t, r) {
            if (typeof e === "number") {
                throw new TypeError("Argument must not be a number");
            }
            return n(e, t, r);
        };
        s.alloc = function(e, t, r) {
            if (typeof e !== "number") {
                throw new TypeError("Argument must be a number");
            }
            var i = n(e);
            if (t !== undefined) {
                if (typeof r === "string") {
                    i.fill(t, r);
                } else {
                    i.fill(t);
                }
            } else {
                i.fill(0);
            }
            return i;
        };
        s.allocUnsafe = function(e) {
            if (typeof e !== "number") {
                throw new TypeError("Argument must be a number");
            }
            return n(e);
        };
        s.allocUnsafeSlow = function(e) {
            if (typeof e !== "number") {
                throw new TypeError("Argument must be a number");
            }
            return i.SlowBuffer(e);
        };
    }, {
        buffer: 65
    } ],
    232: [ function(e, t, r) {
        var i = e("safe-buffer").Buffer;
        function n(e, t) {
            this._block = i.alloc(e);
            this._finalSize = t;
            this._blockSize = e;
            this._len = 0;
        }
        n.prototype.update = function(e, t) {
            if (typeof e === "string") {
                t = t || "utf8";
                e = i.from(e, t);
            }
            var r = this._block;
            var n = this._blockSize;
            var a = e.length;
            var s = this._len;
            for (var f = 0; f < a; ) {
                var o = s % n;
                var c = Math.min(a - f, n - o);
                for (var u = 0; u < c; u++) {
                    r[o + u] = e[f + u];
                }
                s += c;
                f += c;
                if (s % n === 0) {
                    this._update(r);
                }
            }
            this._len += a;
            return this;
        };
        n.prototype.digest = function(e) {
            var t = this._len % this._blockSize;
            this._block[t] = 128;
            this._block.fill(0, t + 1);
            if (t >= this._finalSize) {
                this._update(this._block);
                this._block.fill(0);
            }
            var r = this._len * 8;
            if (r <= 4294967295) {
                this._block.writeUInt32BE(r, this._blockSize - 4);
            } else {
                var i = (r & 4294967295) >>> 0;
                var n = (r - i) / 4294967296;
                this._block.writeUInt32BE(n, this._blockSize - 8);
                this._block.writeUInt32BE(i, this._blockSize - 4);
            }
            this._update(this._block);
            var a = this._hash();
            return e ? a.toString(e) : a;
        };
        n.prototype._update = function() {
            throw new Error("_update must be implemented by subclass");
        };
        t.exports = n;
    }, {
        "safe-buffer": 231
    } ],
    233: [ function(e, t, r) {
        var r = t.exports = function e(t) {
            t = t.toLowerCase();
            var i = r[t];
            if (!i) throw new Error(t + " is not supported (we accept pull requests)");
            return new i();
        };
        r.sha = e("./sha");
        r.sha1 = e("./sha1");
        r.sha224 = e("./sha224");
        r.sha256 = e("./sha256");
        r.sha384 = e("./sha384");
        r.sha512 = e("./sha512");
    }, {
        "./sha": 234,
        "./sha1": 235,
        "./sha224": 236,
        "./sha256": 237,
        "./sha384": 238,
        "./sha512": 239
    } ],
    234: [ function(e, t, r) {
        var i = e("inherits");
        var n = e("./hash");
        var a = e("safe-buffer").Buffer;
        var s = [ 1518500249, 1859775393, 2400959708 | 0, 3395469782 | 0 ];
        var f = new Array(80);
        function o() {
            this.init();
            this._w = f;
            n.call(this, 64, 56);
        }
        i(o, n);
        o.prototype.init = function() {
            this._a = 1732584193;
            this._b = 4023233417;
            this._c = 2562383102;
            this._d = 271733878;
            this._e = 3285377520;
            return this;
        };
        function c(e) {
            return e << 5 | e >>> 27;
        }
        function u(e) {
            return e << 30 | e >>> 2;
        }
        function h(e, t, r, i) {
            if (e === 0) return t & r | ~t & i;
            if (e === 2) return t & r | t & i | r & i;
            return t ^ r ^ i;
        }
        o.prototype._update = function(e) {
            var t = this._w;
            var r = this._a | 0;
            var i = this._b | 0;
            var n = this._c | 0;
            var a = this._d | 0;
            var f = this._e | 0;
            for (var o = 0; o < 16; ++o) t[o] = e.readInt32BE(o * 4);
            for (;o < 80; ++o) t[o] = t[o - 3] ^ t[o - 8] ^ t[o - 14] ^ t[o - 16];
            for (var d = 0; d < 80; ++d) {
                var l = ~~(d / 20);
                var p = c(r) + h(l, i, n, a) + f + t[d] + s[l] | 0;
                f = a;
                a = n;
                n = u(i);
                i = r;
                r = p;
            }
            this._a = r + this._a | 0;
            this._b = i + this._b | 0;
            this._c = n + this._c | 0;
            this._d = a + this._d | 0;
            this._e = f + this._e | 0;
        };
        o.prototype._hash = function() {
            var e = a.allocUnsafe(20);
            e.writeInt32BE(this._a | 0, 0);
            e.writeInt32BE(this._b | 0, 4);
            e.writeInt32BE(this._c | 0, 8);
            e.writeInt32BE(this._d | 0, 12);
            e.writeInt32BE(this._e | 0, 16);
            return e;
        };
        t.exports = o;
    }, {
        "./hash": 232,
        inherits: 139,
        "safe-buffer": 231
    } ],
    235: [ function(e, t, r) {
        var i = e("inherits");
        var n = e("./hash");
        var a = e("safe-buffer").Buffer;
        var s = [ 1518500249, 1859775393, 2400959708 | 0, 3395469782 | 0 ];
        var f = new Array(80);
        function o() {
            this.init();
            this._w = f;
            n.call(this, 64, 56);
        }
        i(o, n);
        o.prototype.init = function() {
            this._a = 1732584193;
            this._b = 4023233417;
            this._c = 2562383102;
            this._d = 271733878;
            this._e = 3285377520;
            return this;
        };
        function c(e) {
            return e << 1 | e >>> 31;
        }
        function u(e) {
            return e << 5 | e >>> 27;
        }
        function h(e) {
            return e << 30 | e >>> 2;
        }
        function d(e, t, r, i) {
            if (e === 0) return t & r | ~t & i;
            if (e === 2) return t & r | t & i | r & i;
            return t ^ r ^ i;
        }
        o.prototype._update = function(e) {
            var t = this._w;
            var r = this._a | 0;
            var i = this._b | 0;
            var n = this._c | 0;
            var a = this._d | 0;
            var f = this._e | 0;
            for (var o = 0; o < 16; ++o) t[o] = e.readInt32BE(o * 4);
            for (;o < 80; ++o) t[o] = c(t[o - 3] ^ t[o - 8] ^ t[o - 14] ^ t[o - 16]);
            for (var l = 0; l < 80; ++l) {
                var p = ~~(l / 20);
                var v = u(r) + d(p, i, n, a) + f + t[l] + s[p] | 0;
                f = a;
                a = n;
                n = h(i);
                i = r;
                r = v;
            }
            this._a = r + this._a | 0;
            this._b = i + this._b | 0;
            this._c = n + this._c | 0;
            this._d = a + this._d | 0;
            this._e = f + this._e | 0;
        };
        o.prototype._hash = function() {
            var e = a.allocUnsafe(20);
            e.writeInt32BE(this._a | 0, 0);
            e.writeInt32BE(this._b | 0, 4);
            e.writeInt32BE(this._c | 0, 8);
            e.writeInt32BE(this._d | 0, 12);
            e.writeInt32BE(this._e | 0, 16);
            return e;
        };
        t.exports = o;
    }, {
        "./hash": 232,
        inherits: 139,
        "safe-buffer": 231
    } ],
    236: [ function(e, t, r) {
        var i = e("inherits");
        var n = e("./sha256");
        var a = e("./hash");
        var s = e("safe-buffer").Buffer;
        var f = new Array(64);
        function o() {
            this.init();
            this._w = f;
            a.call(this, 64, 56);
        }
        i(o, n);
        o.prototype.init = function() {
            this._a = 3238371032;
            this._b = 914150663;
            this._c = 812702999;
            this._d = 4144912697;
            this._e = 4290775857;
            this._f = 1750603025;
            this._g = 1694076839;
            this._h = 3204075428;
            return this;
        };
        o.prototype._hash = function() {
            var e = s.allocUnsafe(28);
            e.writeInt32BE(this._a, 0);
            e.writeInt32BE(this._b, 4);
            e.writeInt32BE(this._c, 8);
            e.writeInt32BE(this._d, 12);
            e.writeInt32BE(this._e, 16);
            e.writeInt32BE(this._f, 20);
            e.writeInt32BE(this._g, 24);
            return e;
        };
        t.exports = o;
    }, {
        "./hash": 232,
        "./sha256": 237,
        inherits: 139,
        "safe-buffer": 231
    } ],
    237: [ function(e, t, r) {
        var i = e("inherits");
        var n = e("./hash");
        var a = e("safe-buffer").Buffer;
        var s = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ];
        var f = new Array(64);
        function o() {
            this.init();
            this._w = f;
            n.call(this, 64, 56);
        }
        i(o, n);
        o.prototype.init = function() {
            this._a = 1779033703;
            this._b = 3144134277;
            this._c = 1013904242;
            this._d = 2773480762;
            this._e = 1359893119;
            this._f = 2600822924;
            this._g = 528734635;
            this._h = 1541459225;
            return this;
        };
        function c(e, t, r) {
            return r ^ e & (t ^ r);
        }
        function u(e, t, r) {
            return e & t | r & (e | t);
        }
        function h(e) {
            return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10);
        }
        function d(e) {
            return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
        }
        function l(e) {
            return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3;
        }
        function p(e) {
            return (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10;
        }
        o.prototype._update = function(e) {
            var t = this._w;
            var r = this._a | 0;
            var i = this._b | 0;
            var n = this._c | 0;
            var a = this._d | 0;
            var f = this._e | 0;
            var o = this._f | 0;
            var v = this._g | 0;
            var b = this._h | 0;
            for (var m = 0; m < 16; ++m) t[m] = e.readInt32BE(m * 4);
            for (;m < 64; ++m) t[m] = p(t[m - 2]) + t[m - 7] + l(t[m - 15]) + t[m - 16] | 0;
            for (var g = 0; g < 64; ++g) {
                var y = b + d(f) + c(f, o, v) + s[g] + t[g] | 0;
                var w = h(r) + u(r, i, n) | 0;
                b = v;
                v = o;
                o = f;
                f = a + y | 0;
                a = n;
                n = i;
                i = r;
                r = y + w | 0;
            }
            this._a = r + this._a | 0;
            this._b = i + this._b | 0;
            this._c = n + this._c | 0;
            this._d = a + this._d | 0;
            this._e = f + this._e | 0;
            this._f = o + this._f | 0;
            this._g = v + this._g | 0;
            this._h = b + this._h | 0;
        };
        o.prototype._hash = function() {
            var e = a.allocUnsafe(32);
            e.writeInt32BE(this._a, 0);
            e.writeInt32BE(this._b, 4);
            e.writeInt32BE(this._c, 8);
            e.writeInt32BE(this._d, 12);
            e.writeInt32BE(this._e, 16);
            e.writeInt32BE(this._f, 20);
            e.writeInt32BE(this._g, 24);
            e.writeInt32BE(this._h, 28);
            return e;
        };
        t.exports = o;
    }, {
        "./hash": 232,
        inherits: 139,
        "safe-buffer": 231
    } ],
    238: [ function(e, t, r) {
        var i = e("inherits");
        var n = e("./sha512");
        var a = e("./hash");
        var s = e("safe-buffer").Buffer;
        var f = new Array(160);
        function o() {
            this.init();
            this._w = f;
            a.call(this, 128, 112);
        }
        i(o, n);
        o.prototype.init = function() {
            this._ah = 3418070365;
            this._bh = 1654270250;
            this._ch = 2438529370;
            this._dh = 355462360;
            this._eh = 1731405415;
            this._fh = 2394180231;
            this._gh = 3675008525;
            this._hh = 1203062813;
            this._al = 3238371032;
            this._bl = 914150663;
            this._cl = 812702999;
            this._dl = 4144912697;
            this._el = 4290775857;
            this._fl = 1750603025;
            this._gl = 1694076839;
            this._hl = 3204075428;
            return this;
        };
        o.prototype._hash = function() {
            var e = s.allocUnsafe(48);
            function t(t, r, i) {
                e.writeInt32BE(t, i);
                e.writeInt32BE(r, i + 4);
            }
            t(this._ah, this._al, 0);
            t(this._bh, this._bl, 8);
            t(this._ch, this._cl, 16);
            t(this._dh, this._dl, 24);
            t(this._eh, this._el, 32);
            t(this._fh, this._fl, 40);
            return e;
        };
        t.exports = o;
    }, {
        "./hash": 232,
        "./sha512": 239,
        inherits: 139,
        "safe-buffer": 231
    } ],
    239: [ function(e, t, r) {
        var i = e("inherits");
        var n = e("./hash");
        var a = e("safe-buffer").Buffer;
        var s = [ 1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591 ];
        var f = new Array(160);
        function o() {
            this.init();
            this._w = f;
            n.call(this, 128, 112);
        }
        i(o, n);
        o.prototype.init = function() {
            this._ah = 1779033703;
            this._bh = 3144134277;
            this._ch = 1013904242;
            this._dh = 2773480762;
            this._eh = 1359893119;
            this._fh = 2600822924;
            this._gh = 528734635;
            this._hh = 1541459225;
            this._al = 4089235720;
            this._bl = 2227873595;
            this._cl = 4271175723;
            this._dl = 1595750129;
            this._el = 2917565137;
            this._fl = 725511199;
            this._gl = 4215389547;
            this._hl = 327033209;
            return this;
        };
        function c(e, t, r) {
            return r ^ e & (t ^ r);
        }
        function u(e, t, r) {
            return e & t | r & (e | t);
        }
        function h(e, t) {
            return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25);
        }
        function d(e, t) {
            return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23);
        }
        function l(e, t) {
            return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7;
        }
        function p(e, t) {
            return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25);
        }
        function v(e, t) {
            return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6;
        }
        function b(e, t) {
            return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26);
        }
        function m(e, t) {
            return e >>> 0 < t >>> 0 ? 1 : 0;
        }
        o.prototype._update = function(e) {
            var t = this._w;
            var r = this._ah | 0;
            var i = this._bh | 0;
            var n = this._ch | 0;
            var a = this._dh | 0;
            var f = this._eh | 0;
            var o = this._fh | 0;
            var g = this._gh | 0;
            var y = this._hh | 0;
            var w = this._al | 0;
            var _ = this._bl | 0;
            var S = this._cl | 0;
            var k = this._dl | 0;
            var x = this._el | 0;
            var E = this._fl | 0;
            var A = this._gl | 0;
            var M = this._hl | 0;
            for (var B = 0; B < 32; B += 2) {
                t[B] = e.readInt32BE(B * 4);
                t[B + 1] = e.readInt32BE(B * 4 + 4);
            }
            for (;B < 160; B += 2) {
                var I = t[B - 15 * 2];
                var j = t[B - 15 * 2 + 1];
                var C = l(I, j);
                var R = p(j, I);
                I = t[B - 2 * 2];
                j = t[B - 2 * 2 + 1];
                var z = v(I, j);
                var T = b(j, I);
                var O = t[B - 7 * 2];
                var D = t[B - 7 * 2 + 1];
                var P = t[B - 16 * 2];
                var L = t[B - 16 * 2 + 1];
                var N = R + D | 0;
                var U = C + O + m(N, R) | 0;
                N = N + T | 0;
                U = U + z + m(N, T) | 0;
                N = N + L | 0;
                U = U + P + m(N, L) | 0;
                t[B] = U;
                t[B + 1] = N;
            }
            for (var F = 0; F < 160; F += 2) {
                U = t[F];
                N = t[F + 1];
                var q = u(r, i, n);
                var W = u(w, _, S);
                var K = h(r, w);
                var H = h(w, r);
                var Z = d(f, x);
                var V = d(x, f);
                var G = s[F];
                var X = s[F + 1];
                var Y = c(f, o, g);
                var J = c(x, E, A);
                var Q = M + V | 0;
                var $ = y + Z + m(Q, M) | 0;
                Q = Q + J | 0;
                $ = $ + Y + m(Q, J) | 0;
                Q = Q + X | 0;
                $ = $ + G + m(Q, X) | 0;
                Q = Q + N | 0;
                $ = $ + U + m(Q, N) | 0;
                var ee = H + W | 0;
                var te = K + q + m(ee, H) | 0;
                y = g;
                M = A;
                g = o;
                A = E;
                o = f;
                E = x;
                x = k + Q | 0;
                f = a + $ + m(x, k) | 0;
                a = n;
                k = S;
                n = i;
                S = _;
                i = r;
                _ = w;
                w = Q + ee | 0;
                r = $ + te + m(w, Q) | 0;
            }
            this._al = this._al + w | 0;
            this._bl = this._bl + _ | 0;
            this._cl = this._cl + S | 0;
            this._dl = this._dl + k | 0;
            this._el = this._el + x | 0;
            this._fl = this._fl + E | 0;
            this._gl = this._gl + A | 0;
            this._hl = this._hl + M | 0;
            this._ah = this._ah + r + m(this._al, w) | 0;
            this._bh = this._bh + i + m(this._bl, _) | 0;
            this._ch = this._ch + n + m(this._cl, S) | 0;
            this._dh = this._dh + a + m(this._dl, k) | 0;
            this._eh = this._eh + f + m(this._el, x) | 0;
            this._fh = this._fh + o + m(this._fl, E) | 0;
            this._gh = this._gh + g + m(this._gl, A) | 0;
            this._hh = this._hh + y + m(this._hl, M) | 0;
        };
        o.prototype._hash = function() {
            var e = a.allocUnsafe(64);
            function t(t, r, i) {
                e.writeInt32BE(t, i);
                e.writeInt32BE(r, i + 4);
            }
            t(this._ah, this._al, 0);
            t(this._bh, this._bl, 8);
            t(this._ch, this._cl, 16);
            t(this._dh, this._dl, 24);
            t(this._eh, this._el, 32);
            t(this._fh, this._fl, 40);
            t(this._gh, this._gl, 48);
            t(this._hh, this._hl, 56);
            return e;
        };
        t.exports = o;
    }, {
        "./hash": 232,
        inherits: 139,
        "safe-buffer": 231
    } ],
    240: [ function(e, t, r) {
        t.exports = a;
        var i = e("events").EventEmitter;
        var n = e("inherits");
        n(a, i);
        a.Readable = e("readable-stream/readable.js");
        a.Writable = e("readable-stream/writable.js");
        a.Duplex = e("readable-stream/duplex.js");
        a.Transform = e("readable-stream/transform.js");
        a.PassThrough = e("readable-stream/passthrough.js");
        a.Stream = a;
        function a() {
            i.call(this);
        }
        a.prototype.pipe = function(e, t) {
            var r = this;
            function n(t) {
                if (e.writable) {
                    if (false === e.write(t) && r.pause) {
                        r.pause();
                    }
                }
            }
            r.on("data", n);
            function a() {
                if (r.readable && r.resume) {
                    r.resume();
                }
            }
            e.on("drain", a);
            if (!e._isStdio && (!t || t.end !== false)) {
                r.on("end", f);
                r.on("close", o);
            }
            var s = false;
            function f() {
                if (s) return;
                s = true;
                e.end();
            }
            function o() {
                if (s) return;
                s = true;
                if (typeof e.destroy === "function") e.destroy();
            }
            function c(e) {
                u();
                if (i.listenerCount(this, "error") === 0) {
                    throw e;
                }
            }
            r.on("error", c);
            e.on("error", c);
            function u() {
                r.removeListener("data", n);
                e.removeListener("drain", a);
                r.removeListener("end", f);
                r.removeListener("close", o);
                r.removeListener("error", c);
                e.removeListener("error", c);
                r.removeListener("end", u);
                r.removeListener("close", u);
                e.removeListener("close", u);
            }
            r.on("end", u);
            r.on("close", u);
            e.on("close", u);
            e.emit("pipe", r);
            return e;
        };
    }, {
        events: 121,
        inherits: 139,
        "readable-stream/duplex.js": 220,
        "readable-stream/passthrough.js": 226,
        "readable-stream/readable.js": 227,
        "readable-stream/transform.js": 228,
        "readable-stream/writable.js": 229
    } ],
    241: [ function(e, t, r) {
        var i = e("buffer").Buffer;
        var n = i.isEncoding || function(e) {
            switch (e && e.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return true;

              default:
                return false;
            }
        };
        function a(e) {
            if (e && !n(e)) {
                throw new Error("Unknown encoding: " + e);
            }
        }
        var s = r.StringDecoder = function(e) {
            this.encoding = (e || "utf8").toLowerCase().replace(/[-_]/, "");
            a(e);
            switch (this.encoding) {
              case "utf8":
                this.surrogateSize = 3;
                break;

              case "ucs2":
              case "utf16le":
                this.surrogateSize = 2;
                this.detectIncompleteChar = o;
                break;

              case "base64":
                this.surrogateSize = 3;
                this.detectIncompleteChar = c;
                break;

              default:
                this.write = f;
                return;
            }
            this.charBuffer = new i(6);
            this.charReceived = 0;
            this.charLength = 0;
        };
        s.prototype.write = function(e) {
            var t = "";
            while (this.charLength) {
                var r = e.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e.length;
                e.copy(this.charBuffer, this.charReceived, 0, r);
                this.charReceived += r;
                if (this.charReceived < this.charLength) {
                    return "";
                }
                e = e.slice(r, e.length);
                t = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
                var i = t.charCodeAt(t.length - 1);
                if (i >= 55296 && i <= 56319) {
                    this.charLength += this.surrogateSize;
                    t = "";
                    continue;
                }
                this.charReceived = this.charLength = 0;
                if (e.length === 0) {
                    return t;
                }
                break;
            }
            this.detectIncompleteChar(e);
            var n = e.length;
            if (this.charLength) {
                e.copy(this.charBuffer, 0, e.length - this.charReceived, n);
                n -= this.charReceived;
            }
            t += e.toString(this.encoding, 0, n);
            var n = t.length - 1;
            var i = t.charCodeAt(n);
            if (i >= 55296 && i <= 56319) {
                var a = this.surrogateSize;
                this.charLength += a;
                this.charReceived += a;
                this.charBuffer.copy(this.charBuffer, a, 0, a);
                e.copy(this.charBuffer, 0, 0, a);
                return t.substring(0, n);
            }
            return t;
        };
        s.prototype.detectIncompleteChar = function(e) {
            var t = e.length >= 3 ? 3 : e.length;
            for (;t > 0; t--) {
                var r = e[e.length - t];
                if (t == 1 && r >> 5 == 6) {
                    this.charLength = 2;
                    break;
                }
                if (t <= 2 && r >> 4 == 14) {
                    this.charLength = 3;
                    break;
                }
                if (t <= 3 && r >> 3 == 30) {
                    this.charLength = 4;
                    break;
                }
            }
            this.charReceived = t;
        };
        s.prototype.end = function(e) {
            var t = "";
            if (e && e.length) t = this.write(e);
            if (this.charReceived) {
                var r = this.charReceived;
                var i = this.charBuffer;
                var n = this.encoding;
                t += i.slice(0, r).toString(n);
            }
            return t;
        };
        function f(e) {
            return e.toString(this.encoding);
        }
        function o(e) {
            this.charReceived = e.length % 2;
            this.charLength = this.charReceived ? 2 : 0;
        }
        function c(e) {
            this.charReceived = e.length % 3;
            this.charLength = this.charReceived ? 3 : 0;
        }
    }, {
        buffer: 65
    } ],
    242: [ function(e, t, r) {
        (function(e) {
            t.exports = r;
            function r(e, t) {
                if (i("noDeprecation")) {
                    return e;
                }
                var r = false;
                function n() {
                    if (!r) {
                        if (i("throwDeprecation")) {
                            throw new Error(t);
                        } else if (i("traceDeprecation")) {
                            console.trace(t);
                        } else {
                            console.warn(t);
                        }
                        r = true;
                    }
                    return e.apply(this, arguments);
                }
                return n;
            }
            function i(t) {
                try {
                    if (!e.localStorage) return false;
                } catch (e) {
                    return false;
                }
                var r = e.localStorage[t];
                if (null == r) return false;
                return String(r).toLowerCase() === "true";
            }
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {} ],
    243: [ function(require, module, exports) {
        var indexOf = function(e, t) {
            if (e.indexOf) return e.indexOf(t); else for (var r = 0; r < e.length; r++) {
                if (e[r] === t) return r;
            }
            return -1;
        };
        var Object_keys = function(e) {
            if (Object.keys) return Object.keys(e); else {
                var t = [];
                for (var r in e) t.push(r);
                return t;
            }
        };
        var forEach = function(e, t) {
            if (e.forEach) return e.forEach(t); else for (var r = 0; r < e.length; r++) {
                t(e[r], r, e);
            }
        };
        var defineProp = function() {
            try {
                Object.defineProperty({}, "_", {});
                return function(e, t, r) {
                    Object.defineProperty(e, t, {
                        writable: true,
                        enumerable: false,
                        configurable: true,
                        value: r
                    });
                };
            } catch (e) {
                return function(e, t, r) {
                    e[t] = r;
                };
            }
        }();
        var globals = [ "Array", "Boolean", "Date", "Error", "EvalError", "Function", "Infinity", "JSON", "Math", "NaN", "Number", "Object", "RangeError", "ReferenceError", "RegExp", "String", "SyntaxError", "TypeError", "URIError", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "undefined", "unescape" ];
        function Context() {}
        Context.prototype = {};
        var Script = exports.Script = function e(t) {
            if (!(this instanceof Script)) return new Script(t);
            this.code = t;
        };
        Script.prototype.runInContext = function(e) {
            if (!(e instanceof Context)) {
                throw new TypeError("needs a 'context' argument.");
            }
            var t = document.createElement("iframe");
            if (!t.style) t.style = {};
            t.style.display = "none";
            document.body.appendChild(t);
            var r = t.contentWindow;
            var i = r.eval, n = r.execScript;
            if (!i && n) {
                n.call(r, "null");
                i = r.eval;
            }
            forEach(Object_keys(e), function(t) {
                r[t] = e[t];
            });
            forEach(globals, function(t) {
                if (e[t]) {
                    r[t] = e[t];
                }
            });
            var a = Object_keys(r);
            var s = i.call(r, this.code);
            forEach(Object_keys(r), function(t) {
                if (t in e || indexOf(a, t) === -1) {
                    e[t] = r[t];
                }
            });
            forEach(globals, function(t) {
                if (!(t in e)) {
                    defineProp(e, t, r[t]);
                }
            });
            document.body.removeChild(t);
            return s;
        };
        Script.prototype.runInThisContext = function() {
            return eval(this.code);
        };
        Script.prototype.runInNewContext = function(e) {
            var t = Script.createContext(e);
            var r = this.runInContext(t);
            if (e) {
                forEach(Object_keys(t), function(r) {
                    e[r] = t[r];
                });
            }
            return r;
        };
        forEach(Object_keys(Script.prototype), function(e) {
            exports[e] = Script[e] = function(t) {
                var r = Script(t);
                return r[e].apply(r, [].slice.call(arguments, 1));
            };
        });
        exports.createScript = function(e) {
            return exports.Script(e);
        };
        exports.createContext = Script.createContext = function(e) {
            var t = new Context();
            if (typeof e === "object") {
                forEach(Object_keys(e), function(r) {
                    t[r] = e[r];
                });
            }
            return t;
        };
    }, {} ],
    244: [ function(e, t, r) {
        t.exports = {
            name: "abv-agent",
            version: "0.0.4",
            description: "Abvos browser agent",
            engines: {
                node: ">=6.11.3"
            },
            main: "index.js",
            scripts: {
                test: "node test/agent.js",
                dist: "browserify index.js -o dist/tmp.js && uglifyjs dist/tmp.js abv.js -c -m -o dist/abv-agent.0.0.4.js",
                dev: "browserify index.js -o dist/tmp.js && uglifyjs dist/tmp.js abv.js -b -m -o dist/abv-agent.0.0.4.js"
            },
            dependencies: {
                "abv-socket": "file:../abv-socket",
                "abv-core": "file:../abv-core",
                "abv-ts": "0.0.3",
                "abv-vfs": "0.0.3",
                jszip: "^3.1.5",
                ws: "^5.1.1"
            },
            devDependencies: {
                browserify: "latest",
                "uglify-es": "latest"
            },
            repository: {
                type: "git",
                url: "git+https://github.com/tondy67/abv-agent.git"
            },
            keywords: [ "abvos", "websocket", "search" ],
            author: {
                name: "Todor Angelov",
                email: "abv@tondy.com",
                url: "http://tondy.com"
            },
            license: "MIT",
            bugs: {
                url: "https://github.com/tondy67/abv-agent/issues"
            },
            homepage: "https://github.com/tondy67/abv-agent#readme",
            config: {
                server: "free"
            }
        };
    }, {} ],
    245: [ function(e, t, r) {
        "use strict";
        const i = e("./lib/Pack.js");
        t.exports = i;
    }, {
        "./lib/Pack.js": 246
    } ],
    246: [ function(e, t, r) {
        (function(e) {
            "use strict";
            const r = typeof window !== "undefined" && window;
            const i = e => {
                return e.reduce(function(e, t) {
                    return e + t;
                }, 0);
            };
            const n = e => {
                let t = "[" + e + "]";
                try {
                    t = JSON.stringify(e);
                } catch (e) {}
                return t;
            };
            const a = e => {
                let t = {};
                try {
                    t = JSON.parse(e);
                } catch (e) {}
                return t;
            };
            const s = e => {
                let t = "-1";
                try {
                    const r = new DataView(e);
                    const i = e.byteLength / 2;
                    const n = new Uint16Array(i);
                    for (let e = 0; e < i; e++) {
                        n[e] = r.getUint16(e * 2);
                    }
                    t = String.fromCharCode.apply(null, n);
                } catch (e) {}
                return t;
            };
            const f = e => {
                if (typeof e !== "string") e = "-1";
                const t = new ArrayBuffer(e.length * 2);
                const r = new DataView(t);
                for (let t in e) {
                    r.setUint16(t * 2, e.charCodeAt(t));
                }
                return t;
            };
            class o {
                constructor(e = 2097152, t = false) {
                    this._limit = e;
                    this._error = t;
                }
                get limit() {
                    return this._limit;
                }
                encode(t) {
                    let r = null;
                    if (!t) return r;
                    const a = [];
                    const s = [];
                    Object.keys(t).forEach((r, i) => {
                        if (!t[r]) return;
                        if (t[r] instanceof e) {
                            t[r] = t[r].buffer.slice(t[r].byteOffset, t[r].byteOffset + t[r].byteLength);
                        }
                        if (t[r] instanceof ArrayBuffer) {
                            s.push(r);
                            a.push(t[r]);
                            delete t[r];
                        }
                    });
                    let o = f(s.join(","));
                    a.unshift(o);
                    o = f(n(t));
                    a.unshift(o);
                    const c = [];
                    for (let e of a) c.push(e.byteLength);
                    const u = i(c);
                    c.unshift(c.length);
                    const h = u + (c.length + 1) * 4;
                    if (h > this.limit) return this.err(101);
                    const d = new ArrayBuffer(h);
                    const l = new DataView(d);
                    l.setUint32(0, h);
                    let p = 4;
                    for (let e of c) {
                        l.setUint32(p, e);
                        p += 4;
                    }
                    const v = new Uint8Array(d);
                    c.shift();
                    for (let e of a) {
                        v.set(new Uint8Array(e), p);
                        p += c.shift();
                    }
                    r = d;
                    if (r.byteLength > this.limit) return this.err(120);
                    return r;
                }
                decode(t) {
                    let r = null;
                    if (!t) return r;
                    if (t.byteLength > this.limit) return this.err(130);
                    if (t instanceof e) t = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
                    if (!(t instanceof ArrayBuffer)) return r;
                    let i = t.byteLength;
                    if (i < 8) return r;
                    const n = new DataView(t);
                    const f = n.getUint32(0);
                    if (f != i) return r;
                    try {
                        const e = [];
                        const f = [];
                        i = n.getUint32(4) + 2;
                        for (let e = 2; e < i; e++) {
                            f.push(n.getUint32(e * 4));
                        }
                        let o = i * 4;
                        r = a(s(t.slice(o, o + f[0])));
                        o += f[0];
                        const c = s(t.slice(o, o + f[1])).split(",");
                        o += f[1];
                        for (let r = 2; r < f.length; r++) {
                            e.push(t.slice(o, o + f[r]));
                            o += f[r];
                        }
                        for (let t in c) {
                            if (c[t]) r[c[t]] = e[t];
                        }
                    } catch (e) {
                        if (this._error) console.error(164, e);
                    }
                    return r;
                }
                err(e = 100) {
                    if (this._error) console.error(e, "Limit: " + this.limit);
                    return null;
                }
            }
            t.exports = o;
        }).call(this, e("buffer").Buffer);
    }, {
        buffer: 65
    } ],
    247: [ function(e, t, r) {
        "use strict";
        const i = e("./lib/Socket.js");
        const n = e("./lib/CSocket.js");
        const a = e("./lib/SSocket.js");
        const s = e("./lib/Conn.js");
        t.exports = {
            CSocket: n,
            SSocket: a,
            Socket: i,
            Conn: s
        };
    }, {
        "./lib/CSocket.js": 248,
        "./lib/Conn.js": 249,
        "./lib/SSocket.js": 250,
        "./lib/Socket.js": 251
    } ],
    248: [ function(e, t, r) {
        (function(r) {
            "use strict";
            const i = e("abv-ts")("abv:CSocket");
            const n = e("./Socket.js");
            class a extends n {
                constructor(e, t) {
                    super();
                    this.queue = new Map();
                    this.mid = 1;
                    this.connect(e, t);
                }
                connect(e, t) {
                    if (!e || !t) {
                        return false;
                    } else if (t.name == "Socket") {} else if (!e || !e.startsWith("http")) {
                        i.error(70, "No url: " + e);
                        return false;
                    }
                    const r = this;
                    const n = e.replace("http", "ws") + "/abv";
                    i.log(76, n);
                    if (this.sock) this.sock.close();
                    if (i.isBrowser) {
                        this.sock = new t(n);
                    } else if (t.name == "WebSocket") {
                        this.sock = new t(n, {
                            origin: e
                        });
                    } else {
                        this.sock = new t();
                        this.sock.send = r.sock.write;
                        this.sock.connect(8080, "localhost");
                    }
                    this.sock.binaryType = "arraybuffer";
                    if (i.isBrowser) {
                        this.sock.onopen = (() => r.opened());
                        this.sock.onmessage = (e => r.process(e.data));
                        this.sock.onclose = (() => r.closed());
                        this.sock.onerror = (() => r.log("Socket error"));
                    } else {
                        this.sock.on("open", () => r.opened());
                        this.sock.on("message", e => r.process(e));
                        this.sock.on("close", () => r.closed());
                        r.sock.on("connect", () => r.opened());
                        r.sock.on("data", e => r.process(e));
                        this.sock.on("error", e => {
                            if (e && e.code === "ECONNREFUSED") {
                                i.debug("no connection");
                            } else {
                                i.error(111, e);
                            }
                        });
                    }
                    return true;
                }
                opened() {
                    this.log("Connection established");
                    this.info = {
                        name: i.rand()
                    };
                    this.send("id", i.toString(this.info), "");
                }
                closed() {
                    this.log("Connection closed");
                }
                call(e, t, r, n = 0) {
                    if (!n) n = 0;
                    let a = this.c2m(e, t, r);
                    if (a === null) return;
                    if (!a.t.startsWith("@")) {} else if (n > 0) a.m = this.mid++;
                    const s = this;
                    return new Promise((t, r) => {
                        if (s.id === "") return r(new Error("Not ready"));
                        if (a.c === "err") return r(new Error(i.UK + " cmd: " + e));
                        if (a.t === s.id) return r(new Error("Selfcall: " + e));
                        s._send(a, e => {
                            if (e) return r(e);
                            if (a.m) {
                                s.queue.set(a.m, {
                                    resolve: t,
                                    reject: r,
                                    end: Date.now() + n
                                });
                            } else {
                                t("");
                            }
                        });
                    });
                }
                process(e) {
                    const t = this;
                    const r = this.decode(e);
                    if (r && r.c) {
                        const e = this.listeners(r.c)[0];
                        if (typeof e !== i.FN) return i.error(140, i.UK + " cmd: " + r.c);
                        if (r.t === t.id && r.m) {
                            if (this.queue.has(r.m)) {
                                const e = this.queue.get(r.m);
                                const t = Date.now() - e.end;
                                if (t > 0) {
                                    r.b = "Timeout: +" + t + "ms";
                                    r.e = true;
                                }
                                if (r.e) e.reject(r); else e.resolve(r);
                                this.queue.delete(r.m);
                            } else {
                                i.info(152, r);
                                try {
                                    r.b = e(r);
                                } catch (e) {
                                    r.b = e;
                                    r.e = true;
                                }
                                r.t = r.f;
                                r.f = this.id;
                                this._send(r);
                            }
                        } else {
                            this.emit(r.c, r);
                        }
                    } else {
                        i.error(209, i.UK + "msg[" + -1 + "]");
                    }
                }
                file(e) {
                    this.log(e.n);
                }
                out(e) {
                    this.log(e);
                }
                log(e) {}
            }
            t.exports = a;
        }).call(this, e("_process"));
    }, {
        "./Socket.js": 251,
        _process: 211,
        "abv-ts": 253
    } ],
    249: [ function(e, t, r) {
        (function(r, i) {
            "use strict";
            const n = e("abv-ts")("abv:Conn");
            const a = e("abv-events");
            const s = e("abv-pack");
            const f = e("crypto");
            const o = "aes-256-gcm";
            const c = new s();
            const u = {
                psw: "32bytes-67VC61jmV54rIYu1545x4TlY",
                iv: "user.iv"
            };
            class h extends a {
                constructor() {
                    super();
                }
                get limit() {
                    return c.limit;
                }
                process(e) {
                    const t = this.decode(e);
                    if (t && t.c) {
                        this.emit(t.c, t);
                    } else {
                        n.error(31, n.UK + " msg[" + -1 + "]");
                    }
                }
                encode(e, t = null) {
                    n.debug(38, e);
                    let r, i;
                    if (t && t.psw && t.iv) {
                        r = t.psw;
                        i = t.iv;
                    } else {
                        r = u.psw;
                        i = u.iv;
                    }
                    return c.encode(e);
                }
                decode(e, t = null) {
                    let r, i;
                    if (t && t.psw && t.iv) {
                        r = t.psw;
                        i = t.iv;
                    } else {
                        r = u.psw;
                        i = u.iv;
                    }
                    const n = c.decode(e);
                    return n;
                }
                encrypt(e, t, r) {
                    const n = i.from(e);
                    const a = f.createCipheriv(o, t, r);
                    const s = i.concat([ a.update(n), a.final() ]);
                    const u = a.getAuthTag();
                    console.log(s);
                    return c.encode({
                        buf: s,
                        tag: u
                    });
                }
                decrypt(e, t, r) {
                    const n = c.decode(e);
                    if (!n || !n.buf || !n.tag) return null;
                    n.buf = i.from(n.buf);
                    n.tag = i.from(n.tag);
                    const a = f.createDecipheriv(o, t, r);
                    a.setAuthTag(n.tag);
                    const s = i.concat([ a.update(n.buf), a.final() ]);
                    return s;
                }
            }
            t.exports = h;
        }).call(this, e("_process"), e("buffer").Buffer);
    }, {
        _process: 211,
        "abv-events": 252,
        "abv-pack": 245,
        "abv-ts": 253,
        buffer: 65,
        crypto: 94
    } ],
    250: [ function(e, t, r) {
        "use strict";
        const i = e("abv-ts")("abv:SSocket");
        const n = e("./Socket.js");
        const a = e("crypto");
        const s = a.createHash("sha256");
        const f = "BAAuTRrAyDIh6WquBij3qZaoaAbkVz/87Zw1gjg8DUkIKMZlPXZQ3vNt3GHv62EQ1dSH2V5ZMeFdus3lsLxsluxO5wEyniA7FWC/lgLY/bqF9hCU+F6lF51SBqHbINbFx4TH1s5gNxDfd9x/6t++2rqvh+W0UydWBnyIOZPiugrrnsvpcw==";
        const o = "AZUxoeIHsHmbWwKr3VsQ94yRDQWKfAyoqUu95586H+ikIhsgIUqkRKEoC7/o74b40KM1KDDp5OHfZS3orWoUNIjr";
        const c = n.clients;
        const u = n.rooms;
        class h extends n {
            constructor(e) {
                super(e);
            }
            msg2srv(e) {
                i.error(59, e);
            }
            send(e) {
                const t = this;
                let r = null;
                if (!i.is(e.t, String)) e.t = "";
                if (e.t === "") {
                    r = c;
                } else if (e.t === "@0") {
                    this.msg2srv(this.encode(e));
                    return;
                } else if (e.t.startsWith("@")) {
                    r = [ c.get(e.t) ];
                } else if (u.has(e.t)) {
                    r = u.get(e.t);
                } else {
                    i.error(78, "no room: " + e.t);
                    return;
                }
                e.f = t.id;
                i.debug(84, e.c, e.t);
                const n = this.encode(e);
                r.forEach(e => {
                    if (e && e.sock && t.sock !== e.sock) {
                        e.sock.send(n, t => {
                            if (t) {
                                i.error(t);
                                e.close(93);
                            }
                        });
                    }
                });
            }
            auth(e) {}
        }
        t.exports = h;
    }, {
        "./Socket.js": 251,
        "abv-ts": 253,
        crypto: 94
    } ],
    251: [ function(e, t, r) {
        (function(r) {
            "use strict";
            const i = e("abv-ts")("abv:Socket");
            const n = e("abv-vfs");
            const a = e("./Conn.js");
            const s = 1048576;
            const f = 2 * 1048576;
            const o = 4 * 1048576;
            let c = false;
            let u = 1;
            const h = new Map();
            const d = new Map();
            const l = (e, t, r = "", i = 0) => {
                return {
                    n: e,
                    b: t,
                    e: r,
                    l: i
                };
            };
            const p = (e, t, r, n, a = "", s = "") => {
                if (!i.is(n, String)) n = "";
                let f = {
                    c: e,
                    f: r,
                    t: n,
                    s: a,
                    d: s
                };
                if (typeof t === i.OBJ) {
                    if (!t.b) t.b = "";
                    t.c = f.c;
                    t.f = f.f;
                    t.t = f.t;
                    f = t;
                } else if (i.is(t, String)) {
                    f.b = t;
                } else {
                    f.b = String(t);
                }
                return f;
            };
            class v extends a {
                constructor(e) {
                    super();
                    this.sock = e;
                    this.id = e ? "@" + u++ : "";
                    i.debug(50, this.id);
                    this.info = null;
                    h.set(this.id, this);
                    this.rooms = new Set();
                    this.rooms.add(this.id);
                    this.streams = new Map();
                }
                f2o(e, t, r = "", i = 0) {
                    return l(e, t, r, i);
                }
                c2m(e, t, r, i = "", n = "") {
                    return p(e, t, this.id, r, i, n);
                }
                log(e) {
                    i.log(e);
                }
                progress(e, t) {
                    i.debug(78, e);
                }
                _read(e, t) {
                    const a = e.n;
                    if (!this.streams.has(a)) {
                        const t = n.createWriteStream("files/" + a, null, e);
                        t.on("finish", () => {
                            this.streams.delete(a);
                            i.info("finish ");
                        });
                        this.streams.set(a, {
                            ws: t,
                            size: 0
                        });
                    }
                    const s = this.streams.get(a);
                    if (t) {
                        s.ws.write(r.from(t));
                        s.size += t.byteLength;
                        if (s.size > e.l && e.l > 0) s.size = e.l;
                        e.p = e.l > 0 ? Math.round(s.size / e.l * 100) : s.size;
                        this.progress(e, t);
                    }
                    if (e.end) {
                        s.ws.end();
                        this.progress(e, null);
                    }
                }
                _write(e, t) {
                    const r = e.n;
                    const n = this.streams.get(r);
                    let a = false;
                    const f = this.f2o(r, t, e.e, e.l);
                    if (t) {
                        e.size += t.byteLength;
                        if (e.size >= e.l) {
                            e.size = e.l;
                            a = e.end = true;
                        }
                    }
                    f.end = e.end;
                    this.send("write", f, e.to);
                    const o = this.sock.bufferedAmount;
                    const c = 4 * s;
                    if (o > c) {
                        i.debug(122, "pause");
                        n.rs.pause();
                        setTimeout(() => {
                            n.rs.resume();
                        }, o / c * 1e3);
                    }
                    if (e.l > 0) n.cb(Math.round(e.size / e.l * 100));
                    if (a) {
                        this.streams.delete(r);
                        i.info("end");
                    }
                }
                write(e, t, r = "", a = 0, u = "", h = null) {
                    if (c && a > o) return i.error(132, "limit", o);
                    if (this.streams.has(e)) return i.error(133, "exists", e);
                    h = typeof h === i.FN ? h : () => {};
                    const d = this.f2o(e, null, r, a);
                    if (a >= 0 && a < f) {
                        d.b = i.isBrowser ? t : n.readFileSync(e);
                        this.send("file", d, u);
                        h(1);
                        return;
                    }
                    d.to = u;
                    d.end = false;
                    d.size = 0;
                    const l = {
                        highWaterMark: s
                    };
                    const p = t ? n.createRStream(this, t, l) : n.createReadStream(e, l);
                    p.on("error", e => {
                        i.error(149, e.stack);
                    });
                    p.on("data", e => {
                        this._write(d, e);
                    });
                    this.streams.set(e, {
                        rs: p,
                        cb: h
                    });
                }
                _send(e, t) {
                    const r = this;
                    let n = false;
                    t = typeof t === i.FN ? t : false;
                    const a = this.encode(e);
                    if (a === null) {
                        n = "null";
                        if (t) return t(n);
                        return i.error(165, n);
                    }
                    i.debug(163, e.c, e.f, e.t, e.m);
                    if (this.sock) i.debug(164, this.sock.bufferedAmount);
                    const s = r.id + " closed";
                    if (i.isBrowser) {
                        n = false;
                        try {
                            this.sock.send(a);
                        } catch (e) {
                            n = e;
                        }
                        if (n) {
                            i.error(176, s);
                            this.close();
                        }
                        if (t) return t(n);
                    } else {
                        this.sock.send(a, e => {
                            if (e) {
                                i.error(183, e);
                                r.close();
                            }
                            if (t) return t(e);
                        });
                    }
                }
                send(e, t, r) {
                    if (!i.is(e, String)) return i.error(193, i.UK + " cmd: " + e);
                    this._send(p(e, t, this.id, r));
                }
                join(e) {
                    if (e == this.id) return;
                    this.rooms.add(e);
                    if (!d.has(e)) d.set(e, new Set());
                    d.get(e).add(this);
                }
                leave(e) {
                    if (e == this.id) return;
                    this.rooms.delete(e);
                    if (d.has(e)) {
                        d.get(e).delete(this);
                        if (d.get(e).size == 0) d.delete(e);
                    }
                }
                close() {
                    const e = this;
                    if (this.sock) {
                        if (this.sock.url) this.sock.close(); else this.sock.close();
                    }
                    h.delete(e.id);
                    d.forEach(t => t.delete(e.id));
                }
                get throttle() {
                    return c;
                }
                set throttle(e) {
                    c = e === true ? true : false;
                }
                static get clients() {
                    return h;
                }
                static get rooms() {
                    return d;
                }
            }
            t.exports = v;
        }).call(this, e("buffer").Buffer);
    }, {
        "./Conn.js": 249,
        "abv-ts": 253,
        "abv-vfs": 256,
        buffer: 65
    } ],
    252: [ function(e, t, r) {
        "use strict";
        const i = e("events");
        class n extends i {
            constructor() {
                super();
                this._regexes = new Map();
            }
            match(e, t) {
                if (!(e instanceof RegExp)) {
                    e = String(e);
                    const t = e.split("/");
                    const r = t.pop();
                    const i = [ "g", "i", "m", "u", "y" ];
                    if (i.includes(r)) {
                        e = new RegExp(t.join("/"), r);
                    } else {
                        t.push(r);
                        e = new RegExp(t.join("/"));
                    }
                }
                const r = "rgx:" + e.toString();
                this._regexes.set(r, e);
                super.on(r, t);
                return this;
            }
            emit(e, ...t) {
                const r = this.eventNames();
                if (r.includes(e)) return super.emit(e, ...t);
                let i;
                for (let [r, n] of this._regexes) {
                    if (!(n instanceof RegExp)) continue;
                    i = n.exec(e);
                    if (i !== null) {
                        return super.emit(r, i, ...t);
                    }
                }
                return false;
            }
        }
        t.exports = n;
    }, {
        events: 121
    } ],
    253: [ function(e, t, r) {
        arguments[4][3][0].apply(r, arguments);
    }, {
        _process: 211,
        buffer: 65,
        dup: 3
    } ],
    254: [ function(e, t, r) {
        arguments[4][4][0].apply(r, arguments);
    }, {
        "./File.js": 255,
        "./lib/IPs.js": 258,
        "./lib/MFS.js": 259,
        "./lib/RStream.js": 260,
        "./lib/TStream.js": 261,
        "./lib/WStream.js": 262,
        "./mimetype.js": 263,
        "./package.json": 264,
        "abv-ts": 253,
        "abv-wallet": 265,
        dup: 4,
        fs: 62
    } ],
    255: [ function(e, t, r) {
        arguments[4][5][0].apply(r, arguments);
    }, {
        "./mimetype.js": 263,
        "abv-ts": 253,
        buffer: 65,
        dup: 5
    } ],
    256: [ function(e, t, r) {
        arguments[4][6][0].apply(r, arguments);
    }, {
        "./FS.js": 254,
        "abv-ts": 253,
        dup: 6
    } ],
    257: [ function(e, t, r) {
        arguments[4][7][0].apply(r, arguments);
    }, {
        "./RStream.js": 260,
        "./TStream.js": 261,
        "./WStream.js": 262,
        "abv-ts": 253,
        dup: 7
    } ],
    258: [ function(e, t, r) {
        arguments[4][8][0].apply(r, arguments);
    }, {
        dup: 8,
        os: 182
    } ],
    259: [ function(e, t, r) {
        arguments[4][9][0].apply(r, arguments);
    }, {
        "../File.js": 255,
        "./BFS.js": 257,
        "abv-ts": 253,
        "abv-wallet": 265,
        buffer: 65,
        dup: 9
    } ],
    260: [ function(e, t, r) {
        arguments[4][10][0].apply(r, arguments);
    }, {
        "abv-ts": 253,
        buffer: 65,
        dup: 10,
        stream: 240
    } ],
    261: [ function(e, t, r) {
        arguments[4][11][0].apply(r, arguments);
    }, {
        "abv-ts": 253,
        dup: 11,
        stream: 240
    } ],
    262: [ function(e, t, r) {
        arguments[4][12][0].apply(r, arguments);
    }, {
        "abv-ts": 253,
        dup: 12,
        stream: 240
    } ],
    263: [ function(e, t, r) {
        arguments[4][13][0].apply(r, arguments);
    }, {
        "abv-ts": 253,
        buffer: 65,
        dup: 13,
        path: 204
    } ],
    264: [ function(e, t, r) {
        t.exports = {
            _from: "abv-vfs@0.0.3",
            _id: "abv-vfs@0.0.3",
            _inBundle: false,
            _integrity: "sha512-l62SBgURb07hYYHJMpq1mAS5nx+/uw7+w49/LkapJDTuczGv/Vhj5QGgi9YQM08K9x6t2zCNieJ1lQ+axvRAOQ==",
            _location: "/abv-vfs",
            _phantomChildren: {},
            _requested: {
                type: "version",
                registry: true,
                raw: "abv-vfs@0.0.3",
                name: "abv-vfs",
                escapedName: "abv-vfs",
                rawSpec: "0.0.3",
                saveSpec: null,
                fetchSpec: "0.0.3"
            },
            _requiredBy: [ "/" ],
            _resolved: "https://registry.npmjs.org/abv-vfs/-/abv-vfs-0.0.3.tgz",
            _shasum: "5b699f8e42bc22000c449b193ebbf2d0a67b4ade",
            _spec: "abv-vfs@0.0.3",
            _where: "/home/tondy/abvos/dev/abv-socket",
            author: {
                name: "Todor Angelov",
                email: "abv@tondy.com",
                url: "http://tondy.com"
            },
            bugs: {
                url: "https://github.com/tondy67/abv-vfs/issues"
            },
            bundleDependencies: false,
            dependencies: {
                "abv-events": "0.0.2",
                "abv-ts": "0.0.3",
                "abv-wallet": "0.0.3"
            },
            deprecated: false,
            description: "Abvos virtual file system",
            homepage: "https://github.com/tondy67/abv-vfs#readme",
            keywords: [ "abv", "abvos", "fs", "filesystem" ],
            license: "MIT",
            main: "index.js",
            name: "abv-vfs",
            repository: {
                type: "git",
                url: "git+https://github.com/tondy67/abv-vfs.git"
            },
            scripts: {
                test: 'echo "Error: no test specified" && exit 1'
            },
            version: "0.0.3"
        };
    }, {} ],
    265: [ function(e, t, r) {
        arguments[4][15][0].apply(r, arguments);
    }, {
        "./lib/Wallet.js": 266,
        "abv-ts": 253,
        dup: 15
    } ],
    266: [ function(e, t, r) {
        arguments[4][16][0].apply(r, arguments);
    }, {
        "abv-ts": 253,
        dup: 16
    } ]
}, {}, [ 1 ]);

"use strict";

(() => {
    const e = abv.fs;
    const t = abv.CAgent;
    const r = document.querySelector.bind(document);
    const i = r("#messages"), n = r("#msg"), a = r("#file");
    const s = e => {
        const t = typeof e === ts.OBJ ? e.f.substr(0, 5) + ">" + e.t.substr(0, 5) + ": " + e.b : e;
        i.innerHTML += "<br />" + t;
        i.scrollTop = i.scrollHeight;
    };
    const f = e => {
        r("#progress").style.width = e * 1.5 + "px";
    };
    r("#echo").onclick = (() => {
        const e = Date.now();
        o.call("echo", "What time?", "@1", 1).then(t => {
            o.log(27, t, Date.now() - e);
        }, e => {
            ts.error(28, e);
        });
    });
    r("#online").onclick = (() => {
        o.call("online", "", "");
    });
    r("#msgform").addEventListener("submit", e => {
        e.preventDefault();
        const t = r("#room");
        if (a.value !== "") {
            const e = a.files[0];
            const t = e.name;
            const r = e.type;
            const i = new FileReader();
            i.onload = (n => {
                const a = i.result;
                const s = o.f2o(t, a, r);
                o.write(t, a, r, a.byteLength, "", e => {
                    if (e === 1) o.file(s); else f(e);
                });
                f(20);
                ts.info("Send: " + e.name);
            });
            i.onerror = (e => ts.error(e));
            i.readAsArrayBuffer(e);
        } else if (n.value !== "") {
            o.call("online", "", "");
            o.call("msg", n.value, "").then(e => {}, e => {
                ts.error(61, e);
            });
            o.out("all" + " < " + o.id + ": " + n.value);
        }
        n.value = "";
        a.value = "";
    });
    const o = new t(location.origin, WebSocket);
    o.file = (e => {
        let t = document.createElement("br");
        i.appendChild(t);
        let r = new Uint8Array(e.b);
        const n = e.e;
        let a = new window.Blob([ r ], {
            type: n
        });
        let s = window.URL || window.webkitURL;
        let f = s.createObjectURL(a);
        if (n.startsWith("image/")) {
            let t = document.createElement("img");
            t.src = f;
            t.alt = e.n;
            t.width = "200";
            i.appendChild(t);
        } else {
            let t = document.createElement("a");
            let r = document.createTextNode(e.n);
            t.href = f;
            t.target = "_blank";
            t.download = e.n;
            t.appendChild(r);
            i.appendChild(t);
        }
        i.scrollTop = i.scrollHeight;
    });
    const c = new Map();
    o.progress = ((t, r) => {
        if (t.p >= 100) {
            if (c.has(t.n)) return c.delete(t.n);
            c.set(t.n, t);
            const r = e.readFileSync(t.n);
            if (r) {
                const e = {
                    n: t.n,
                    b: r,
                    e: t.e
                };
                o.file(e);
            }
        } else {
            f(t.p);
        }
    });
    o.log = ts.debug.bind(ts);
    o.out = s;
    if (abv.pjson.config) {
        if (abv.pjson.config.server === "free") o.throttle = true;
    }
})();