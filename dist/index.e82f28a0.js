// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4tgfT":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "207a8fdfe82f28a0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"dV6cC":[function(require,module,exports) {
"use strict";
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// VIDEO UPLOAD
document.addEventListener("DOMContentLoaded", function() {
    let filenameInput = document.getElementById("filename");
    let dummyFileInput = document.getElementById("dummy_file");
    filenameInput.addEventListener("change", function() {
        let file = this.files[0];
        if (file !== null) dummyFileInput.value = file.name;
    });
    if (document.forms.form1.filename.value === "") dummyFileInput.value = "";
});
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
class Memory {
    data = new Date();
    id = (Date.now() + "").slice(-10);
    constructor(coords, country, city, day, title, people, satisfaction, thumbnail, img1, img2, img3, img4, video, dialy){
        this.coords = coords;
        this.country = country;
        this.city = city;
        this.day = day;
        this.title = title;
        this.people = people;
        this.satisfaction = satisfaction;
        this.thumbnail = thumbnail;
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;
        this.img4 = img4;
        this.video = video;
        this.dialy = dialy;
    }
}
class Daily extends Memory {
    type = "daily";
    constructor(coords, country, city, day, title, people, satisfaction, thumbnail, img1, img2, img3, img4, video, dialy, place){
        super(coords, country, city, day, title, people, satisfaction, thumbnail, img1, img2, img3, img4, video, dialy);
        this.place = place;
    }
}
class Travel extends Memory {
    type = "travel";
    constructor(coords, country, city, day, title, people, satisfaction, thumbnail, img1, img2, img3, img4, video, dialy, transportation){
        super(coords, country, city, day, title, people, satisfaction, thumbnail, img1, img2, img3, img4, video, dialy);
        this.transportation = transportation;
    }
}
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
const map = document.getElementById("map");
const info = document.querySelector(".info");
const overlay = document.querySelector(".overlay");
const infoBtn = document.querySelector(".infomation-btn");
const form = document.querySelector(".form");
const mainContainer = document.querySelector(".memories");
const containerMemories = document.querySelector(".memories-container");
const memory = document.querySelector(".memory");
const inputTitle = document.querySelector(".form__input--title");
const inputDay = document.querySelector(".form__input--day");
const inputType = document.querySelector(".form__input--type");
const inputPeople = document.querySelector(".form__input--people");
const inputTrans = document.querySelector(".form__input--transportation");
const inputPlace = document.querySelector(".form__input--place");
const inputSatisfy = document.querySelector(".form__input--satisfaction");
const inputText = document.querySelector(".form__input--dialy");
const input0 = document.getElementById("input0");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const img0 = document.getElementById("memory-img-0");
const img1 = document.getElementById("memory-img-1");
const img2 = document.getElementById("memory-img-2");
const img3 = document.getElementById("memory-img-3");
const img4 = document.getElementById("memory-img-4");
const formImg0 = document.querySelector(".form__img-0");
const formImg1 = document.querySelector(".form__img-1");
const formImg2 = document.querySelector(".form__img-2");
const formImg3 = document.querySelector(".form__img-3");
const formImg4 = document.querySelector(".form__img-4");
let thumbnailUrl;
let imgUrl1;
let imgUrl2;
let imgUrl3;
let imgUrl4;
const description = document.querySelector(".detail");
const detailBtn = document.querySelector(".detail__row--btn");
const detailImg0 = document.querySelector(".detail__img-0");
const detailImg1 = document.querySelector(".detail__img-1");
const detailImg2 = document.querySelector(".detail__img-2");
const detailImg3 = document.querySelector(".detail__img-3");
const detailImg4 = document.querySelector(".detail__img-4");
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
class App {
    #map;
    #mapEvent;
    #mapZoomLevel = 13;
    #memories = [];
    constructor(){
        // Get user's position
        this._getPosition();
        // Get data from local storage
        this._getLocalStorage();
        // get thumbnail URL and other photos URL
        input0.addEventListener("change", this._getThumbnail);
        input1.addEventListener("change", this._getUrl1);
        input2.addEventListener("change", this._getUrl2);
        input3.addEventListener("change", this._getUrl3);
        input4.addEventListener("change", this._getUrl4);
        ///////////////////////////
        // Attach event handlers
        form.addEventListener("submit", this._newMemory.bind(this));
        inputType.addEventListener("change", this._toggleInput);
        containerMemories.addEventListener("click", this._moveToPopup.bind(this));
        // Show informatation page
        infoBtn.addEventListener("click", this._openInfo);
        overlay.addEventListener("click", this._closeInfo);
        // show direct image on form
        input0.addEventListener("change", this._directImg0);
        input1.addEventListener("change", this._directImg1);
        input2.addEventListener("change", this._directImg2);
        input3.addEventListener("change", this._directImg3);
        input4.addEventListener("change", this._directImg4);
        // close description
        detailBtn.addEventListener("click", this._closeDescription);
        ///////////////////////////////////////////////////////u
        // If you need delete your data, You have to use 'reset()' function
        this.reset();
    }
    _getPosition() {
        if (navigator.geolocation) navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function() {
            alert("Could not get your position");
        });
    }
    _loadMap(position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        const coords = [
            latitude,
            longitude
        ];
        this.#map = L.map("map").setView(coords, this.#mapZoomLevel);
        L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
            maxZoom: 18,
            subdomains: [
                "mt0",
                "mt1",
                "mt2",
                "mt3"
            ]
        }).addTo(this.#map);
        // Handlings clicks on map
        this.#map.on("click", this._showForm.bind(this));
        this.#memories.forEach((memory)=>{
            this._renderMemoryMarker(memory);
        });
    }
    _showForm(mapE) {
        this.#mapEvent = mapE;
        // inputTitle.focus();
        // Show form
        form.classList.remove("hidden");
        inputTitle.focus();
    }
    _hideForm() {
        // Empty inputs
        inputTitle.value = inputDay.value = inputPeople.value = inputTrans.value = inputPlace.value = inputSatisfy.value = inputText.value = inputType.value = thumbnailUrl = "";
        form.style.display = "none";
        form.classList.add("hidden");
        setTimeout(()=>form.style.display = "grid", 1000);
        // empty directing photo on form
        formImg0.style.opacity = formImg1.style.opacity = formImg2.style.opacity = formImg3.style.opacity = formImg4.style.opacity = 0;
    }
    _toggleInput() {
        inputTrans.closest(".form__row").classList.toggle("form__row--hidden");
        inputPlace.closest(".form__row").classList.toggle("form__row--hidden");
    }
    //////////////////////////////////////////////////////////////////
    // Photo URL
    _getThumbnail(e) {
        let input = e.target;
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                thumbnailUrl = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    _getUrl1(e) {
        let input = e.target;
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                imgUrl1 = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    _getUrl2(e) {
        let input = e.target;
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                imgUrl2 = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    _getUrl3(e) {
        let input = e.target;
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                imgUrl3 = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    _getUrl4(e) {
        let input = e.target;
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                imgUrl4 = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    //////////////////////////////////////////////////////////////////
    // Information
    _openInfo() {
        info.classList.toggle("hidden");
        overlay.classList.toggle("hidden");
    }
    _closeInfo() {
        info.classList.add("hidden");
        overlay.classList.add("hidden");
    }
    //////////////////////////////////////////////////////////////////
    // Direct image
    _directImg0(event) {
        let input = event.target;
        let img = img0;
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                img.src = e.target.result;
                formImg0.style.opacity = 1;
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    _directImg1(event) {
        let input = event.target;
        let img = img1;
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                img.src = e.target.result;
                formImg1.style.opacity = 1;
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    _directImg2(event) {
        let input = event.target;
        let img = img2;
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                img.src = e.target.result;
                formImg2.style.opacity = 1;
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    _directImg3(event) {
        let input = event.target;
        let img = img3;
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                img.src = e.target.result;
                formImg3.style.opacity = 1;
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    _directImg4(event) {
        let input = event.target;
        let img = img4;
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                img.src = e.target.result;
                formImg4.style.opacity = 1;
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    _newMemory(e) {
        const validInputs = (...inputs)=>inputs.every((inp)=>Number.isFinite(inp));
        const allPositive = (...inputs)=>inputs.every((inp)=>inp > 0);
        const allString = (...inputs)=>inputs.every((inp)=>typeof inp === "string");
        e.preventDefault();
        const { lat, lng } = this.#mapEvent.latlng;
        let memory, city, country;
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`).then((res)=>{
            if (!res.ok) throw new Error(`Can't receive memory city and country data`);
            return res.json();
        }).then((data)=>{
            city = data.city;
            country = data.countryName;
        }).catch((err)=>alert(err.message)).finally(()=>{
            // get data from form
            const title = inputTitle.value;
            const day = inputDay.value;
            const type = inputType.value;
            const people = +inputPeople.value;
            const satisfy = +inputSatisfy.value;
            const text = inputText.value;
            /////////////////////
            // const video = inputVideo.value;
            /////////////////////
            // If memory daily, create daily object
            if (type === "daily") {
                const place = inputPlace.value;
                // check if data is valid and string
                if (!validInputs(people, satisfy) || !allPositive(people, satisfy) || !allString(title, day, place, text)) return alert("Satisfaction and number of people must be positive numbers. Otherwise, it must be a string.");
                memory = new Daily([
                    lat,
                    lng
                ], country, city, day, title, people, satisfy, thumbnailUrl, imgUrl1, imgUrl2, imgUrl3, imgUrl4, "", text, place);
            }
            // If memory travel, create travel object
            if (type === "travel") {
                const way = inputTrans.value;
                // check if data is valid
                if (!validInputs(people, satisfy) || !allPositive(people, satisfy) || !allString(title, day, way, text)) return alert("Satisfaction and number of people must be positive numbers. Otherwise, it must be a string.");
                memory = new Travel([
                    lat,
                    lng
                ], country, city, day, title, people, satisfy, thumbnailUrl, imgUrl1, imgUrl2, imgUrl3, imgUrl4, "", text, way);
            }
            // Add new object to memories array
            this.#memories.push(memory);
            console.log(memory);
            // Render memory on map as marker
            this._renderMemoryMarker(memory);
            // Render memory on list
            this._renderMemory(memory);
            // Hide form + clear input fields
            this._hideForm();
            // Set local storage to all memories
            this._setLocalStorage();
        //////////////////////
        });
    }
    _renderMemoryMarker(memory) {
        L.marker(memory.coords).addTo(this.#map).bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${memory.type}-popup`
        })).setPopupContent(memory.title).openPopup().on("click", (e)=>this._openDescription(e));
    ////////////////////////////////////////////////////////
    }
    _openDescription(e) {
        ////////////////////////////////////////////////////////
        description.classList.remove("hidden");
        const { lat, lng } = e.latlng;
        const memory = this.#memories.find((memory)=>memory.coords.toString() === [
                lat,
                lng
            ].toString());
        ////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////
        console.log(memory);
        this._renderDetails(memory);
    }
    _renderDetails(memory) {
        const detailDate = document.querySelector(".detail__date--txt");
        const detailTitle = document.querySelector(".detail__title--txt");
        const detailLocation = document.querySelector(".detail__location--txt");
        const detailType = document.querySelector(".detail__row--type");
        const detailTravel = document.querySelector(".detail__type--travel");
        const detailDaily = document.querySelector(".detail__type--daily");
        const detailPeople = document.querySelector(".detail__value--people");
        const detailWay = document.querySelector(".detail__value--way");
        const detailPlace = document.querySelector(".detail__value--place");
        const detailSatisfy = document.querySelector(".detail__value--satisfy");
        const detailImg0 = document.getElementById("detailImg-0");
        const detailImg1 = document.getElementById("detailImg-1");
        const detailImg2 = document.getElementById("detailImg-2");
        const detailImg3 = document.getElementById("detailImg-3");
        const detailImg4 = document.getElementById("detailImg-4");
        const detailDialy = document.querySelector(".detail__row--dialy");
        /////////////////////////////////
        // REVERSE GEOLOCATION
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${memory.coords[0]}&longitude=${memory.coords[1]}&localityLanguage=en`).then((response)=>{
            return response.json();
        }).then((data)=>{
            const { city, countryName } = data;
            detailLocation.textContent = `${city}: ${countryName}`;
        });
        ///////////////////////////////////
        detailDate.textContent = memory.day;
        detailTitle.textContent = memory.title;
        detailPeople.textContent = memory.people;
        detailSatisfy.textContent = memory.satisfaction;
        detailDialy.textContent = memory.dialy;
        if (memory.type === "travel") {
            detailWay.textContent = memory.transportation;
            detailDaily.classList.add("hidden");
            detailTravel.classList.remove("hidden");
        }
        if (memory.type === "daily") {
            detailPlace.textContent = memory.place;
            detailTravel.classList.add("hidden");
            detailDaily.classList.remove("hidden");
        }
        if (memory.thumbnail) {
            detailImg0.src = memory.thumbnail;
            detailImg0.style.opacity = 1;
        }
        if (memory.img1) {
            detailImg1.src = memory.img1;
            detailImg1.style.opacity = 1;
        }
        if (memory.img2) {
            detailImg2.src = memory.img2;
            detailImg2.style.opacity = 1;
        }
        if (memory.img3) {
            detailImg3.src = memory.img3;
            detailImg3.style.opacity = 1;
        }
        if (memory.img4) {
            detailImg4.src = memory.img4;
            detailImg4.style.opacity = 1;
        }
    }
    _closeDescription() {
        description.classList.add("hidden");
    }
    _renderMemory(memory) {
        let htmlList = `
    <li class="memory memory--${memory.type}" data-id="${memory.id}">
      <div class="memory__date">
        <ion-icon class="memory__date--icon" name="calendar"></ion-icon>
        <span>${memory.day}</span>
      </div>
      <h2 class="memory__title">
        ${memory.type === "daily" ? "Daily" : "Travel"}&nbsp;&nbsp;&nbsp;${memory.title}
      </h2>
      <div class="memory__details">
        <span class="memory__icon">👪</span>
        <span class="memory__value">${memory.people}</span>
        <span class="memory__unit">人</span>
      </div>
    `;
        if (memory.type === "daily") htmlList += `
        <div class="memory__details">
          <span class="memory__icon">🗺️</span>
          <span class="memory__value">${memory.place}</span>
        </div>
        <div class="memory__details">
        <span class="memory__icon">⭐</span>
        <span class="memory__value">${memory.satisfaction}</span>
        <span class="memory__unit">つ</span>
      </div>
      <div class="memory__thumbnail">
        <img
          src="${memory.thumbnail}"
          alt="IMAGE"
          class="memory__thumbnail--img"
        />
      </div>
    </li>
      `;
        if (memory.type === "travel") htmlList += `
      <div class="memory__details">
        <span class="memory__icon">🚶</span>
        <span class="memory__value">${memory.transportation}</span>
      </div>
      <div class="memory__details">
        <span class="memory__icon">⭐</span>
        <span class="memory__value">${memory.satisfaction}</span>
        <span class="memory__unit">つ</span>
      </div>
      <div class="memory__thumbnail">
        <img
          src="${memory.thumbnail}"
          alt="IMAGE"
          class="memory__thumbnail--img"
        />
      </div>
    </li>
      `;
        containerMemories.insertAdjacentHTML("beforeend", htmlList);
    }
    _moveToPopup(e) {
        // BUGFIX: When we click on a workout before the map has loaded, we get an error. But there is an easy fix:
        if (!this.#map) return;
        const memoryEl = e.target.closest(".memory");
        if (!memoryEl) return;
        const memory = this.#memories.find((memory)=>memory.id === memoryEl.dataset.id);
        this.#map.setView(memory.coords, this.#mapZoomLevel, {
            animate: true,
            pan: {
                duration: 1
            }
        });
    }
    _setLocalStorage() {
        localStorage.setItem("memories", JSON.stringify(this.#memories));
    }
    _getLocalStorage() {
        const data = JSON.parse(localStorage.getItem("memories"));
        if (!data) return;
        this.#memories = data;
        this.#memories.forEach((memory)=>{
            this._renderMemory(memory);
        });
    }
    reset() {
        localStorage.removeItem("memories");
        location.reload();
    }
}
const app = new App();

},{}]},["4tgfT","dV6cC"], "dV6cC", "parcelRequire7d3c")

//# sourceMappingURL=index.e82f28a0.js.map
