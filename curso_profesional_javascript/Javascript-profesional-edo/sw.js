const VERSION = 'v1';
self.addEventListener(`install`, event => {
event.waitUntil (precache())
}) 

self.addEventListener('fetch', event => {
    const request = event.request;
    // get
    if (request.method !== 'GET') {
      return;
    }

    
  // buscar en cache
  event.respondWith(cachedResponse(request));

  // actualizar el cache
  event.waitUntil(updateCache(request));
});



async function precache () {
    const cache = await caches.open('VERSION')
    return cache.addAll([
        '/',
        './index.html',
        './MediaPlayer.js',
        './AutoPlay.js',
        './AutoPause.js',
        './index1.css',
        './logoMB.png',
        './claseg.mp4',
        './index.js',

    ]);
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
  }
  
  async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
  }
  
