import { createRouter, createWebHistory} from 'vue-router';
import StartScreen from '../src/components/pages/StartScreen';
import VideoSetup from '../src/components/pages/VideoSetup';
import VideoMethods from '../src/components/pages/VideoMethods';
import VideoReactiveSyntax from '../src/components/pages/VideoReactiveSyntax';
import VideoModularizing from '../src/components/pages/VideoModularizing';
import VideoHooks from '../src/components/pages/VideoHooks';
import VideoWatch from '../src/components/pages/VideoWatch';
import VideoSharingState from '../src/components/pages/VideoSharingState';
import VideoSuspense from '../src/components/pages/VideoSuspense';
import VideoTeleport from '../src/components/pages/VideoTeleport';

const routes = [
  {
    path: '/',
    component: StartScreen,
  },
  {
    path: '/setup',
    component: VideoSetup,
    title: 'About Setup function',
  },
  {
    path: '/methods',
    component: VideoMethods,
    title: 'About Methods',
  },
  {
    path: '/reactive-syntax',
    component: VideoReactiveSyntax,
    title: 'About Reactive Syntax',
  },
  {
    path: '/modularizing',
    component: VideoModularizing,
    title: 'About Modularizing',
  },
  {
    path: '/hooks',
    component: VideoHooks,
    title: 'About Lifecycle Hooks',
  },
  {
    path: '/watch',
    component: VideoWatch,
    title: 'About Watch function',
  },
  {
    path: '/sharing-state',
    component: VideoSharingState,
    title: 'About Sharing State',
  },
  {
    path: '/suspense',
    component: VideoSuspense,
    title: 'About Suspense',
  },
  {
    path: '/teleport',
    component: VideoTeleport,
    title: 'About Teleport',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { routes, router };
