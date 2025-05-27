
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('d-kurd-cache-v1').then(cache => {
      return cache.addAll([
        './index.html',
        './handpan.png',
        './icon.png',
        './manifest.json',
        './1_D.mp3',
        './2_A.mp3',
        './3_Bb.mp3',
        './4_C.mp3',
        './5_D.mp3',
        './6_E.mp3',
        './7_F.mp3',
        './8_G.mp3',
        './9_A.mp3',
        './10_C.mp3'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
