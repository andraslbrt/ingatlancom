import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.getElementById('app').classList.remove(`page-${from.name}`);
  document.getElementById('app').classList.add(`page-${to.name}`);

  next();
});

export default router;
