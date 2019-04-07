console.log('tesssss');
var urlsToCache = ['/', '/assets/styles.css'];

self.addEventListener('install', function(event) {
  // Perform install steps
  console.log('installlllled ');
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    }),
  );
});
self.addEventListener('fetch', function(event) {
  console.log('fetccccching');
  console.log({event});
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    }),
  );
});
