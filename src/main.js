import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
    }).catch((error) => {
        console.error('Service Worker registration failed:', error);
    });
}