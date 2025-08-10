const CACHE = 'catzee-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './cat-icon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
