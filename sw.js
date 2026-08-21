/* Service worker de « Mon sac à dos »
   Stratégie : réseau d'abord, cache en secours.
   L'application se met donc à jour toute seule dès qu'il y a du réseau,
   et reste utilisable sans connexion (utile en montagne). */

const CACHE = 'mon-sac-a-dos-v2';

const FICHIERS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './favicon.png',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './emoji/catalogue.json',
  './emoji/1f302.svg',
  './emoji/1f31f.svg',
  './emoji/1f327.svg',
  './emoji/1f330.svg',
  './emoji/1f336.svg',
  './emoji/1f33d.svg',
  './emoji/1f33e.svg',
  './emoji/1f344.svg',
  './emoji/1f347.svg',
  './emoji/1f34a.svg',
  './emoji/1f34b.svg',
  './emoji/1f34c.svg',
  './emoji/1f34d.svg',
  './emoji/1f34e.svg',
  './emoji/1f351.svg',
  './emoji/1f353.svg',
  './emoji/1f356.svg',
  './emoji/1f357.svg',
  './emoji/1f35a.svg',
  './emoji/1f35c.svg',
  './emoji/1f35d.svg',
  './emoji/1f35e.svg',
  './emoji/1f369.svg',
  './emoji/1f36a.svg',
  './emoji/1f36b.svg',
  './emoji/1f36c.svg',
  './emoji/1f36f.svg',
  './emoji/1f370.svg',
  './emoji/1f372.svg',
  './emoji/1f373.svg',
  './emoji/1f374.svg',
  './emoji/1f375.svg',
  './emoji/1f377.svg',
  './emoji/1f37a.svg',
  './emoji/1f37d.svg',
  './emoji/1f37f.svg',
  './emoji/1f392.svg',
  './emoji/1f3d5.svg',
  './emoji/1f3fa.svg',
  './emoji/1f41f.svg',
  './emoji/1f446.svg',
  './emoji/1f452.svg',
  './emoji/1f455.svg',
  './emoji/1f456.svg',
  './emoji/1f45f.svg',
  './emoji/1f48a.svg',
  './emoji/1f4a7.svg',
  './emoji/1f4b3.svg',
  './emoji/1f4be.svg',
  './emoji/1f4c2.svg',
  './emoji/1f4cd.svg',
  './emoji/1f4d6.svg',
  './emoji/1f4dd.svg',
  './emoji/1f4e1.svg',
  './emoji/1f4e2.svg',
  './emoji/1f4e6.svg',
  './emoji/1f4f1.svg',
  './emoji/1f4f7.svg',
  './emoji/1f501.svg',
  './emoji/1f50b.svg',
  './emoji/1f50c.svg',
  './emoji/1f511.svg',
  './emoji/1f525.svg',
  './emoji/1f526.svg',
  './emoji/1f527.svg',
  './emoji/1f52a.svg',
  './emoji/1f52d.svg',
  './emoji/1f56f.svg',
  './emoji/1f576.svg',
  './emoji/1f5d1.svg',
  './emoji/1f5fa.svg',
  './emoji/1f6bf.svg',
  './emoji/1f6cc.svg',
  './emoji/1f6cf.svg',
  './emoji/1f6d2.svg',
  './emoji/1f944.svg',
  './emoji/1f950.svg',
  './emoji/1f953.svg',
  './emoji/1f954.svg',
  './emoji/1f955.svg',
  './emoji/1f956.svg',
  './emoji/1f957.svg',
  './emoji/1f95a.svg',
  './emoji/1f95b.svg',
  './emoji/1f95c.svg',
  './emoji/1f95e.svg',
  './emoji/1f962.svg',
  './emoji/1f963.svg',
  './emoji/1f964.svg',
  './emoji/1f965.svg',
  './emoji/1f968.svg',
  './emoji/1f969.svg',
  './emoji/1f96a.svg',
  './emoji/1f96b.svg',
  './emoji/1f96d.svg',
  './emoji/1f96f.svg',
  './emoji/1f97d.svg',
  './emoji/1f97e.svg',
  './emoji/1f9b7.svg',
  './emoji/1f9c0.svg',
  './emoji/1f9c2.svg',
  './emoji/1f9c3.svg',
  './emoji/1f9c4.svg',
  './emoji/1f9c5.svg',
  './emoji/1f9c7.svg',
  './emoji/1f9c8.svg',
  './emoji/1f9ca.svg',
  './emoji/1f9d7.svg',
  './emoji/1f9e2.svg',
  './emoji/1f9e3.svg',
  './emoji/1f9e4.svg',
  './emoji/1f9e5.svg',
  './emoji/1f9e6.svg',
  './emoji/1f9ed.svg',
  './emoji/1f9ef.svg',
  './emoji/1f9f0.svg',
  './emoji/1f9f4.svg',
  './emoji/1f9f5.svg',
  './emoji/1f9fa.svg',
  './emoji/1f9fb.svg',
  './emoji/1f9fc.svg',
  './emoji/1f9fd.svg',
  './emoji/1fa73.svg',
  './emoji/1fa79.svg',
  './emoji/1fa7a.svg',
  './emoji/1fa93.svg',
  './emoji/1faa1.svg',
  './emoji/1faa2.svg',
  './emoji/1faa5.svg',
  './emoji/1faaa.svg',
  './emoji/1fab5.svg',
  './emoji/1fad2.svg',
  './emoji/1fad7.svg',
  './emoji/1fad8.svg',
  './emoji/1fad9.svg',
  './emoji/21a9.svg',
  './emoji/231a.svg',
  './emoji/2600.svg',
  './emoji/2614.svg',
  './emoji/2615.svg',
  './emoji/267b.svg',
  './emoji/2696.svg',
  './emoji/2699.svg',
  './emoji/26a0.svg',
  './emoji/26c5.svg',
  './emoji/26cf.svg',
  './emoji/26fa.svg',
  './emoji/270f.svg',
  './emoji/2744.svg',
  './emoji/2753.svg',
  './emoji/2795.svg'
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
