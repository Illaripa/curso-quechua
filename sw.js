var CACHE_NAME = 'yachay-v1';
var urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './css/variables.css',
  './css/base.css',
  './css/morning.css',
  './css/home.css',
  './css/reader.css',
  './css/reference.css',
  './css/flashcards.css',
  './css/quiz.css',
  './css/chat.css',
  './css/elements.css',
  './css/responsive.css',
  './data/elements.js',
  './data/morning.js',
  './data/content-quechua.js',
  './data/content-aymara.js',
  './data/verbs-quechua.js',
  './data/verbs-aymara.js',
  './data/suffixes-quechua.js',
  './data/suffixes-aymara.js',
  './data/vocabulary.js',
  './data/quiz-quechua.js',
  './data/quiz-aymara.js',
  './js/morning.js',
  './js/elements.js',
  './js/reader.js',
  './js/reference.js',
  './js/flashcards.js',
  './js/quiz.js',
  './js/chat.js',
  './js/app.js',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(name) {
          return name !== CACHE_NAME;
        }).map(function(name) {
          return caches.delete(name);
        })
      );
    })
  );
});
