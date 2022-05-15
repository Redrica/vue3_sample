import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import './assets/scss/main.scss';
import { createPinia } from 'pinia';

// так можно добавлять плагины, простейший пример – добавление свойства во все сторы в виде customProperties
function secretPiniaPlugin() {
  return { secret: 'the cake is a lie' };
}

const pinia = createPinia();
pinia.use(secretPiniaPlugin);

createApp(App).use(router).use(pinia).mount('#app')
