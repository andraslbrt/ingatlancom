import { createApp } from 'vue';
import {
  BIconListUl, BIconStarFill, BIconStar, BIconArrowLeft, BIconCalendarEvent, BIconList, BIconChevronLeft,
} from 'bootstrap-icons-vue';
import App from './App.vue';
import router from './router';
import store from './store';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


const app = createApp(App);

app.use(store)
  .use(router)
  .component('BIconListUl', BIconListUl)
  .component('BIconStarFill', BIconStarFill)
  .component('BIconStar', BIconStar)
  .component('BIconArrowLeft', BIconArrowLeft)
  .component('BIconCalendarEvent', BIconCalendarEvent)
  .component('BIconList', BIconList)
  .component('BIconChevronLeft', BIconChevronLeft)
  .mount('#app');
