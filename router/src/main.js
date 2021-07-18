import {
  createApp
} from 'vue';
import {
  createRouter
} from 'vue-router';
import App from './App.vue';

const app = createApp(App);
const router = createRouter({
  mode: 'history',
  routes: [{
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
app.mount('#app');
