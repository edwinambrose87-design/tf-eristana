const CACHE_NAME = 'tf-eristana-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './logo.png'
];

// Install the "Engine"
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Fetch data from the "Engine" instead of the web
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});