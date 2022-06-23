const routes = [
  { path: '/', name: 'list', component: () => import('../views/List.vue') },
  { path: '/reszletek/:id', name: 'details', component: () => import('../views/Details.vue') },
  { path: '/kedvencek', name: 'favourites', component: () => import('../views/Favourites.vue') },
];


export default routes;
