var CACHE_NAME = 'yachay-v2';
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
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  // Network first for JS/CSS, cache first for data/icons
  var url = event.request.url;
  if (url.includes('/js/') || url.includes('/css/') || url.endsWith('.html') || url.endsWith('sw.js')) {
    // Network first: try fresh, fallback to cache
    event.respondWith(
      fetch(event.request).then(function(response) {
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) { cache.put(event.request, clone); });
        return response;
      }).catch(function() {
        return caches.match(event.request);
      })
    );
  } else {
    // Cache first for heavy data files
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  }
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
    }).then(function() {
      return self.clients.claim();
    })
  );
});
