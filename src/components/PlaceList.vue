<template>
  <div class="card a-card">
    <div class="card-body">
      <div class="card-title m-0">
        <span class="h4">{{ title }}</span>
        <span class="float-end">{{ ordered.length }} db</span>
      </div>
    </div>
  </div>

  <div v-if="onlyFavs" class="card a-card mt-3">
    <div class="card-body">
      <div class="d-flex justify-content-evenly align-items-center flex-column flex-md-row flex-wrap">
        <span><b>Rendezés:</b></span>
        <div class="flex-break d-lg-none mt-2"></div>
        <div class="mt-2 mt-md-0">
          <input v-model="orderBy" :value="null" type="radio" class="btn-check" id="order-none" />
          <label for="order-none" class="btn btn-outline-primary">Nincs</label>
        </div>

        <div class="mt-2 mt-md-0">
          <input v-model="orderBy" :value="'latest'" type="radio" class="btn-check" id="order-latest" />
          <label for="order-latest" class="btn btn-outline-primary">Legfrissebb legfelül</label>
        </div>

        <div class="mt-2 mt-md-0">
          <input v-model="orderBy" :value="'cheapest'" type="radio" class="btn-check" id="order-cheapest" />
          <label for="order-cheapest" class="btn btn-outline-primary">Legolcsóbb legfelül</label>
        </div>
      </div>
    </div>
  </div>

  <router-link
    v-for="ad in ordered"
    class="a-box mt-5 d-block text-decoration-none"
    :to="{ name: 'details', params: { id: ad.adId} }"
  >
    <div class="card a-card">
    <div class="row g-0">
      <div class="col-md-4 a-img-container">
        <img :src="ad.image" :alt="`${ad.address} képe`">
      </div>
      <div class="col-md-8">
        <div class="card-body h-100">
          <div class="float-end" @click.prevent="">
            <button
              v-if="ad.status === 'checked'"
              type="button"
              class="btn fav-btn fav-checked"
              @click="removeFav(ad.adId)"
            >
              <BIconStarFill />
            </button>
            <button
              v-else
              type="button"
              class="btn fav-btn fav-unchecked"
              @click="addFav(ad.adId)"
            >
              <BIconStar />
            </button>
          </div>
          <div class="h-100 d-flex flex-column">
            <div class="card-title h4">{{ ad.address }}</div>
            <div class="card-text">Ár: {{ ad.price }} {{ad.currency }}</div>
            <div v-if="showDate" class="card-text flex-grow-1 d-flex align-items-end">
              <span><BIconCalendarEvent class="me-2" /> {{ ad.uploadDate }}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  </router-link>
</template>

<script>

import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import _ from 'lodash';

export default {
  name: 'PlaceList',
  props: {
    title: { type: String, default: 'Lista' },
    showDate: { type: Boolean, default: false },
    onlyFavs: { type: Boolean, default: false },
  },
  setup() {
    const store = useStore();
    const ads = ref([]);
    const orderBy = ref(null);


    async function load() {
      await store.dispatch('ads/load');
      ads.value = store.getters['ads/getAll'];
    }

    async function addFav(id) {
      await store.dispatch('ads/addFav', { adId: id });
      const currIndex = _.findIndex(ads.value, { adId: id });
      ads.value[currIndex].status = 'checked';
    }

    async function removeFav(id) {
      await store.dispatch('ads/removeFav', { adId: id });
      const currIndex = _.findIndex(ads.value, { adId: id });
      ads.value[currIndex].status = 'unchecked';
    }


    onMounted(async () => {
      await load();
    });

    return {
      ads,
      addFav,
      removeFav,
      orderBy,
    };
  },
  computed: {
    filtered() {
      if (this.ads.length > 0 && this.onlyFavs) {
        return this.ads.filter(ad => ad.status === 'checked');
      }
      return this.ads;
    },
    ordered() {
      if (this.orderBy === 'cheapest') {
        return _.orderBy(this.filtered, 'price', 'ASC');
      }
      if (this.orderBy === 'latest') {
        return _.orderBy(this.filtered, 'updated', 'DESC');
      }
      return this.filtered;
    },
  },
  components: {
  },
};
</script>
