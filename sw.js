.const cacheName = 'syed-grocery-v1';
const assets = [
  '/',
  '/index.html',
  '/manifest.json'
];

// ইনস্টল করার সময় ফাইলগুলো সেভ করা
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// অফলাইনে থাকার সময় ক্যাশ থেকে ডাটা দেখানো
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
