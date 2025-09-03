
const CACHE='ib2025-v2';
const ASSETS=['/','/index.html','/pendaftaran.html','/aturan.html','/js/main.js','/js/countdown.js','/js/daftar.js','/css/none.css'];
self.addEventListener('install', e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e=>{ e.waitUntil(clients.claim()); });
self.addEventListener('fetch', e=>{ e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request))); });
