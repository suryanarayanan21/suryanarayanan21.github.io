window.addEventListener('load', e => {
    new PWAConfApp();
    registerSW(); // <-- Add this
  });

  async function registerSW() { // (1)
    if ('serviceWorker' in navigator) { // (2)
      try {
        await navigator.serviceWorker.register('sw.js'); // (3)
      } catch (e) {
        alert('ServiceWorker registration failed. Sorry about that.'); // (4)
      }
    } else {
      document.querySelector('.alert').removeAttribute('hidden'); //(5)
    }
  }

  self.addEventListener('install',async event => console.log("install event"));

  self.addEventListener('fetch', async event => console.log('fetch event') );