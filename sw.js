/* Service worker de « Mon sac à dos »
   Stratégie : réseau d'abord, cache en secours.
   L'application se met donc à jour toute seule dès qu'il y a du réseau,
   et reste utilisable sans connexion (utile en montagne). */

const CACHE = 'mon-sac-a-dos-v1';

const FICHIERS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './favicon.png',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(FICHIERS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cles => Promise.all(
        cles.filter(cle => cle !== CACHE).map(cle => caches.delete(cle))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(reponse => {
        const copie = reponse.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copie));
        return reponse;
      })
      .catch(() => caches.match(event.request)
        .then(enCache => enCache || caches.match('./index.html')))
  );
});
