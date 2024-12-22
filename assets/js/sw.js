self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-website-cache').then((cache) => {
        return cache.addAll([
          '/',
          'index.html',
          'about.html',
          'services.html',
          'contact.html',
          'gallery.html',
          'assets/css/style.css',
          'assets/js/app.js',
          'assets/images/logo.png',
          'assets/images/home.jpg',
          'assets/images/about.jpg',
          'assets/images/services.jpg',
          'assets/images/contact.jpg',
          'assets/images/gallery.jpg'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  