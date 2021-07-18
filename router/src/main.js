import {
  createApp
} from 'vue';
import {
  createRouter,
  createWebHistory
} from 'vue-router';
import App from './App.vue';
import WelcomeScreen from './pages/WelcomeScreen.vue';
import UsersList from './pages/UsersList.vue';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: WelcomeScreen
    },
    {
      path: '/users',
      component: UsersList
    },
  ],
});

app.use(router);
router.isReady().then(() => {
  app.mount('#app');
});
