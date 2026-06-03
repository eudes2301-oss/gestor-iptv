const CACHE_NAME = 'iptv-app-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Instala o aplicativo no cache do celular
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Responde com o cache quando estiver sem internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
