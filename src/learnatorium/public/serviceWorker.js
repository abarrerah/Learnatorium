const CACHE_NAME = "version-1";
const urlsToCache= ['index.html','offline.html'];

const self = this;

//Installation of the serviceWorker on the PWA app
self.addEventListener('install',(e)=>{
   e.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache)=>{
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
    })
   )
});

//Waiting and listening the cache for initilizate the PWA
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
            .then(() => {
                return fetch(e.request) 
                    .catch(() => caches.match('offline.html'))
            })
    )
});


//Activate the PWA
self.addEventListener('activate', (e) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    e.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
            
    )
});