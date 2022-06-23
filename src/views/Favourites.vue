<template>
  <div class="container py-4">
    <div class="row">

      <div class="col-4 d-none d-md-block">
        <Menu />
      </div>

      <div class="col-12 col-md-8">
        <PlaceList only-favs show-date title="Kedvencek" />
      </div>

    </div>
  </div>
</template>

<script>

import { defineAsyncComponent } from 'vue';

export default {
  name: 'Favourites',
  components: {
    PlaceList: defineAsyncComponent(() => import('@/components/PlaceList.vue')),
    Menu: defineAsyncComponent(() => import('@/views/_partials/Menu.vue')),
  },
};
</script>
