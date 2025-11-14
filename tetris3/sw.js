const CACHE_NAME = 'tetris-v3';
const urlsToCache = [
  '/tetris3',
  '/tetris3/tetris3.html',
  '/tetris3/manifest.json',
  '/tetris3/icon-192.png',
  '/tetris3/icon-512.png'
  // 如果有外部 CSS/JS 也要加
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});