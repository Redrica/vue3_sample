import { createRouter, createWebHistory} from 'vue-router';
import HomePage from '../pages';
import EssentialsPart from '../pages/essentials';
import PiniaPart from '../pages/pinia';

import EssentialPage from '../components/pages/essentials/EssentialPage';

const routes = [
  {
    path: '/',
    component: HomePage,
    title: 'Start Screen'
  },
  {
    path: '/essentials',
    name: 'essentials',
    component: EssentialsPart,
    title: 'Vue 3: essentials',
    children: [
      {
        path: '',
        component: EssentialPage,
      },
      {
        path: 'setup',
        name: 'setup',
        component: EssentialPage,
        title: 'About Setup function, Methods and Computed Properties',
      },
      {
        path: 'reactive-syntax',
        name: 'reactive-syntax',
        component: EssentialPage,
        title: 'About Reactive Syntax',
      },
      {
        path: 'modularizing',
        name: 'modularizing',
        component: EssentialPage,
        title: 'About Modularizing',
      },
      {
        path: 'watch',
        name: 'watch',
        component: EssentialPage,
        title: 'About Watch function',
      },
      {
        path: 'sharing-state',
        name: 'sharing-state',
        component: EssentialPage,
        title: 'About Sharing State',
      },
      {
        path: 'suspense',
        name: 'suspense',
        component: EssentialPage,
        title: 'About Suspense',
      },
      {
        path: 'teleport',
        name: 'teleport',
        component: EssentialPage,
        title: 'About Teleport',
      },
    ],
  },
  {
    path: '/pinia',
    component: PiniaPart,
    title: 'Pinia via docs'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { routes, router };
