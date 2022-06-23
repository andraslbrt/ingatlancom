<template>
  <AsyncHeader />

  <div v-if="error" class="card">
    <div class="card-body">
      <pre>{{ error }}</pre>
    </div>
  </div>

  <router-view />

  <AsyncFooter />
</template>

<script>
import { defineAsyncComponent, onErrorCaptured, ref } from 'vue';

export default {
  name: 'App',
  setup() {
    const isDevelop = process.env.NODE_ENV === 'development';
    const error = ref(null);

    onErrorCaptured(async (caughtError) => {
      if (isDevelop) {
        console.log('onErrorCaptured caughtError', { caughtError });
        error.value = caughtError;
      }
    });

    return {
      error,
    };
  },
  components: {
    AsyncHeader: defineAsyncComponent(() => import('./views/_partials/Header.vue')),
    AsyncFooter: defineAsyncComponent(() => import('./views/_partials/Footer.vue')),
  },
};
</script>


<style lang="scss">
@import "assets/app.scss";
</style>
