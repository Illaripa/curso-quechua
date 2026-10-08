var CACHE_NAME = 'yachay-v21';
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
  './data/common-vocabulary.js',
  './data/quiz-quechua.js',
  './data/quiz-extended.js',
  './data/quiz-aymara.js',
  './data/quiz-english.js',
  './data/quiz-french.js',
  './data/content-english.js',
  './data/content-french.js',
  './data/palabras-english.js',
  './data/palabras-french.js',
  './data/completar-english.js',
  './data/completar-french.js',
  './data/wordorder.js',
  './data/wordorder-extended.js',
  './data/oraciones-completar.js',
  './data/dialogos.js',
  './js/dialogos.js',
  './data/songs-quechua.js',
  './data/songs-aymara.js',
  './js/morning.js',
  './js/elements.js',
  './js/reader.js',
  './js/reference.js',
  './js/flashcards.js',
  './js/quiz.js',
  './js/completar.js',
  './js/chat.js',
  './js/songs.js',
  './js/wordorder.js',
  './js/audiolisten.js',
  './js/app.js',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Imágenes de flashcards (una por concepto, compartidas entre idiomas).
// Precache tolerante a fallos: si falta alguna, no rompe la instalación del SW.
var cardImages = [
  './img/cards/abundance-filling.png',
  './img/cards/action-hands.png',
  './img/cards/alpaca-wool.png',
  './img/cards/andean-culture.png',
  './img/cards/animals-nature.png',
  './img/cards/arrival-journey.png',
  './img/cards/being-calm.png',
  './img/cards/being-existence.png',
  './img/cards/being-present.png',
  './img/cards/bird-nature.png',
  './img/cards/birds-flying.png',
  './img/cards/black-night.png',
  './img/cards/blue-sky.png',
  './img/cards/body-wellness.png',
  './img/cards/breathing-meditation-nature.png',
  './img/cards/breathing-nature.png',
  './img/cards/brothers-family.png',
  './img/cards/building-wall.png',
  './img/cards/carrying-bag.png',
  './img/cards/carrying-basket.png',
  './img/cards/cat-animal.png',
  './img/cards/child-joy.png',
  './img/cards/cleaning.png',
  './img/cards/climbing-mountain.png',
  './img/cards/cloudy-sky.png',
  './img/cards/cold-winter.png',
  './img/cards/community-gathering.png',
  './img/cards/community-people.png',
  './img/cards/completing-goal.png',
  './img/cards/condor-bird-flying.png',
  './img/cards/conversation-talking.png',
  './img/cards/cooking-kitchen.png',
  './img/cards/corn-maize.png',
  './img/cards/crafting-hands.png',
  './img/cards/creating-art.png',
  './img/cards/dancing-celebration.png',
  './img/cards/daytime-sunny.png',
  './img/cards/deep-thinking.png',
  './img/cards/descending-mountain.png',
  './img/cards/dog-pet.png',
  './img/cards/doorway-entrance.png',
  './img/cards/drinking-water.png',
  './img/cards/earth-soil-hands.png',
  './img/cards/eating-food.png',
  './img/cards/emotion-expression.png',
  './img/cards/existence-being.png',
  './img/cards/exit-open-door.png',
  './img/cards/eye-vision.png',
  './img/cards/face-portrait.png',
  './img/cards/family-andean.png',
  './img/cards/farm-field.png',
  './img/cards/farming-earth.png',
  './img/cards/farming-harvest.png',
  './img/cards/farming-plow.png',
  './img/cards/father-family.png',
  './img/cards/fear-dark-forest.png',
  './img/cards/fear-shadows.png',
  './img/cards/feeling-touch.png',
  './img/cards/fire-flame.png',
  './img/cards/fish-water.png',
  './img/cards/flowers-blooming.png',
  './img/cards/food-traditional-andean.png',
  './img/cards/foot-walking.png',
  './img/cards/fox-animal.png',
  './img/cards/friends-conversation.png',
  './img/cards/gathering-harvest.png',
  './img/cards/grandfather-elderly.png',
  './img/cards/grandmother-elderly.png',
  './img/cards/green-nature.png',
  './img/cards/growing.png',
  './img/cards/hail-storm.png',
  './img/cards/hands-creating.png',
  './img/cards/hands.png',
  './img/cards/harvest-crops.png',
  './img/cards/healing-wellness.png',
  './img/cards/heart.png',
  './img/cards/helping-hands-together.png',
  './img/cards/home-traditional-andean.png',
  './img/cards/irrigation-water.png',
  './img/cards/joy-celebration.png',
  './img/cards/laughing-joy.png',
  './img/cards/learning.png',
  './img/cards/life-nature-vibrant.png',
  './img/cards/listening-ear.png',
  './img/cards/listening-music.png',
  './img/cards/listening-nature.png',
  './img/cards/llama-andes.png',
  './img/cards/looking-view-landscape.png',
  './img/cards/love-heart.png',
  './img/cards/meat-food.png',
  './img/cards/medicine-healing.png',
  './img/cards/memory-nostalgia.png',
  './img/cards/memory-reflection.png',
  './img/cards/memory.png',
  './img/cards/moon-night-sky.png',
  './img/cards/mother-love.png',
  './img/cards/mountain-andean.png',
  './img/cards/mountain-lake.png',
  './img/cards/mouth-face.png',
  './img/cards/movement-energy.png',
  './img/cards/nature-andean.png',
  './img/cards/night-stars-dark.png',
  './img/cards/night-stars.png',
  './img/cards/observing-nature.png',
  './img/cards/path-trail-mountain.png',
  './img/cards/people-talking.png',
  './img/cards/perception-light.png',
  './img/cards/placing-objects.png',
  './img/cards/plant-growing.png',
  './img/cards/planting-seeds.png',
  './img/cards/plants-green.png',
  './img/cards/potato-food.png',
  './img/cards/prayer.png',
  './img/cards/puma-wild-cat.png',
  './img/cards/question-wonder.png',
  './img/cards/rain-drops.png',
  './img/cards/recognition-awareness.png',
  './img/cards/recognition-meeting.png',
  './img/cards/red-vibrant.png',
  './img/cards/reflection-lake.png',
  './img/cards/reflection-meditation.png',
  './img/cards/resting-nature.png',
  './img/cards/resting-tired.png',
  './img/cards/return-home.png',
  './img/cards/river-flow.png',
  './img/cards/river-flowing.png',
  './img/cards/running-athlete.png',
  './img/cards/running.png',
  './img/cards/sad-reflection.png',
  './img/cards/salt-spice.png',
  './img/cards/sharing-food-community.png',
  './img/cards/singing-music.png',
  './img/cards/sisters-family.png',
  './img/cards/sky-andean.png',
  './img/cards/sky-clouds-blue.png',
  './img/cards/sleeping-peaceful.png',
  './img/cards/sorting.png',
  './img/cards/stars-night.png',
  './img/cards/storm-emotion.png',
  './img/cards/sun-heat-summer.png',
  './img/cards/sunrise-dawn.png',
  './img/cards/sunrise-morning.png',
  './img/cards/sunshine-bright.png',
  './img/cards/sunshine-sun.png',
  './img/cards/tasting-food.png',
  './img/cards/thinking-head.png',
  './img/cards/thinking-meditation.png',
  './img/cards/thinking-wisdom.png',
  './img/cards/throwing-motion.png',
  './img/cards/tree-forest.png',
  './img/cards/valley-low.png',
  './img/cards/waking-up-morning.png',
  './img/cards/walking-path.png',
  './img/cards/watching-horizon.png',
  './img/cards/water-river.png',
  './img/cards/weaving-loom.png',
  './img/cards/weaving-textile.png',
  './img/cards/wellness-body.png',
  './img/cards/wellness-healing.png',
  './img/cards/white-snow.png',
  './img/cards/wind-nature.png',
  './img/cards/wisdom-books.png',
  './img/cards/work-hands-labor.png',
  './img/cards/working-hands.png',
  './img/cards/yellow-sunshine.png'
];

self.addEventListener('install', function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      // App shell + datos: obligatorio (si falla, se reintenta en próxima carga)
      return cache.addAll(urlsToCache).then(function() {
        // Imágenes: tolerante a fallos individuales
        return Promise.all(cardImages.map(function(u) {
          return cache.add(u).catch(function() {});
        }));
      });
    })
  );
});

self.addEventListener('fetch', function(event) {
  // Network first for JS/CSS, cache first for data/icons/imágenes
  var url = event.request.url;
  // Nunca interceptar el API: siempre a la red, sin cache
  if (url.includes('/api/')) return;
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
    // Cache first for heavy data files / imágenes
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request).then(function(resp) {
          var clone = resp.clone();
          caches.open(CACHE_NAME).then(function(cache) { cache.put(event.request, clone); });
          return resp;
        });
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
