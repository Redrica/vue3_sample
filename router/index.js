import { createRouter, createWebHistory} from 'vue-router';
import StartScreen from '../src/components/pages/StartScreen';
import VideoSetupMethodsComputed from '../src/components/pages/VideoSetupMethodsComputed';
import VideoReactiveSyntax from '../src/components/pages/VideoReactiveSyntax';
import VideoModularizing from '../src/components/pages/VideoModularizing';
import VideoWatch from '../src/components/pages/VideoWatch';
import VideoSharingState from '../src/components/pages/VideoSharingState';
import VideoSuspense from '../src/components/pages/VideoSuspense';
import VideoTeleport from '../src/components/pages/VideoTeleport';

const routes = [
  {
    path: '/',
    component: StartScreen,
    title: 'Start Screen'
  },
  {
    path: '/setup',
    component: VideoSetupMethodsComputed,
    title: 'About Setup function, Methods and Computed Properties',
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
