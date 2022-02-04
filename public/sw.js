const cacheName = 'site-static-v1';
const assets = ['/fallback.html'];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== cacheName)
                .map(key => caches.delete(key))
            );
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).then(fetchRes => {
            return fetchRes;
        })
            .catch(() =>
                caches.match('/fallback.html')
            )
    );
});