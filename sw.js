console.log('tesssss');
var urlsToCache = ['/', '/assets/styles.css'];
cacheName = 'v1';

self.addEventListener('install', function(event) {
});
self.addEventListener('fetch', e => {
    console.log('request ', e.request);
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const resClone = res.clone();
        caches.open(cacheName).then(cache => {
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch(error => caches.match(e.request).then(res => res)),
  );
});
