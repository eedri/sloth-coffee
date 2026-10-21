/* Offline support: the whole app is cached on the first visit, so it keeps working
   on the playa with no signal. Bump VERSION whenever any cached file changes. */
var VERSION = "sloth-v2";
var FILES = [
  "./",
  "index.html",
  "style.css",
  "data.js",
  "data-en.js",
  "app.js",
  "manifest.webmanifest",
  "assets/logo.jpg",
  "assets/sloth.jpg",
  "assets/favicon.png",
  "assets/icon-192.png",
  "assets/icon-512.png",
  "assets/apple-touch-icon.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FILES); }));
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; })
      .map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

/* Cache first (instant, works offline); refresh the cached copy in the background when online. */
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  var req = e.request.mode === "navigate" ? "index.html" : e.request;
  e.respondWith(caches.open(VERSION).then(function (c) {
    return c.match(req, { ignoreSearch: true }).then(function (hit) {
      var net = fetch(e.request).then(function (res) {
        if (res.ok && e.request.mode !== "navigate") c.put(e.request, res.clone());
        return res;
      }).catch(function () { return hit; });
      return hit || net;
    });
  }));
});
