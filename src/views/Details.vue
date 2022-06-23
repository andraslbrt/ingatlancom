<template>
  <div class="container py-md-4 p-0">
    <div v-if="isLoaded">
      <div v-if="item?.adId">

        <div class="row d-none d-md-flex">
          <div class="col-4">
            <button type="button" class="btn btn-outline-primary" @click="goBack">
              <BIconArrowLeft class="me-2" />
              Vissza
            </button>
          </div>
          <div class="col-8">
            <div class="card a-card">
              <div class="card-body">
                <div class="card-title h3 m-0">Részletek</div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-md-none position-absolute mt-3 ms-3">
          <button type="button" class="btn btn-secondary" @click="goBack">
            <BIconChevronLeft />
          </button>
        </div>

        <div class="text-center m-0 my-md-4">
          <img :src="item.image" :alt="`${item.address} képe`" class="img-fluid">
        </div>

        <div class="card a-card">
          <div class="card-body">
            <div class="card-title h3">{{ item.address }}</div>
            <div class="card-text h5">Ár: {{ item.price }} {{ item.currency }}</div>
            <div class="card-text mt-4">
              <BIconCalendarEvent class="me-2" />
              {{ item.uploadDate }}
            </div>
            <ul class="card-text list-group my-4">
              <li class="list-group-item">{{ item.description }}</li>
            </ul>
            <div class="row">
              <div class="col-0 col-md-9"></div>
              <div class="col-12 col-md-3">
                <button type="button" class="btn btn-primary  w-100" data-bs-toggle="modal" data-bs-target="#contactModal">
                  Kapcsolatfelvétel
                </button>
              </div>
            </div>

          </div>
        </div>

        <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="contactModalLabel">Kapcsolatfelvétel</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div>
                  Email cím: <a :href="`mailto:${item.contact.email}`"> {{ item.contact.email }}</a>
                </div>
                <div v-if="item.contact.parsedPhoneNumbers.length > 1">
                  Telefonszámok:
                  <ul>
                    <li v-for="phone in item.contact.parsedPhoneNumbers"><a :href="`tel:${phone}`">{{ phone }}</a></li>
                  </ul>
                </div>
                <div v-else-if="item.contact.parsedPhoneNumbers.length === 1">
                  Telefonszám: <a :href="`tel:${item.contact.parsedPhoneNumbers[0]}`">{{ item.contact.parsedPhoneNumbers[0] }}</a>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Bezárás</button>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div v-else>
        ERRROR 404
      </div>
    </div>
    <div v-else>Betöltés...</div>
  </div>
</template>

<script>

import { useRoute, useRouter } from 'vue-router';
import { onMounted, reactive, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Details',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const item = reactive({});
    const currId = ref(null);
    const isLoaded = ref(false);

    async function load() {
      isLoaded.value = false;

      currId.value = route.params.id;
      await store.dispatch('ads/get', { adId: currId.value });
      Object.assign(item, store.getters['ads/getById'](currId.value));

      isLoaded.value = true;
    }

    async function goBack() {
      console.log('goback');
      await router.go(-1);
    }

    onMounted(async () => {
      await load();
    });

    return {
      item,
      isLoaded,
      goBack,
    };
  },
  components: {},
};
</script>
