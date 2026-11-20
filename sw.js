// Offline support: the app opens without a connection. It always tries the network first,
// skipping the browser's own cache, so a new version shows up as soon as you're online; the cached copy is only a fallback.
const CACHE = 'oathkeeper-2123b03741';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192-v2.png', './icon-512-v2.png', './apple-touch-icon-v2.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;   // GitHub sync and fonts go straight to the network
  e.respondWith(fetch(e.request, {cache:'no-cache'}).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request).then(m => m || caches.match('./index.html'))));
});
