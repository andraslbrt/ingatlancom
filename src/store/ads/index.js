import { api } from '@/boot/axios';
import { LocalStore } from '@/utils/helper';
import _ from 'lodash';

const url = 'listings.json';
const name = 'Ads';

export default {
  namespaced: true,


  actions: {
    async load({ commit, state }, payload) {
      if (state.all.length === 0) {
        const res = await api.get(`${url}`, payload);
        commit('setAll', { data: res.data.ads });
      }
    },
    async get({ commit, state }, payload) {
      if (payload?.adId) {
        if (state.all.length === 0) {
          const res = await api.get(`${url}`, payload);
          commit('setAll', { data: res.data.ads });
        }
      } else {
        throw new Error(`${name} - ID not found.`);
      }
    },
    async addFav({ commit }, payload) {
      if (payload?.adId) {
        commit('addFav', { id: payload?.adId });
      } else {
        throw new Error(`${name} - ID not found.`);
      }
    },
    async removeFav({ commit }, payload) {
      if (payload?.adId) {
        commit('removeFav', { id: payload?.adId });
      } else {
        throw new Error(`${name} - ID not found.`);
      }
    },
  },


  mutations: {
    setAll(state, { data }) {
      if (LocalStore.getAds()?.length) {
        state.all = LocalStore.getAds();
      } else {
        state.all = data;
      }
    },
    addFav(state, { id }) {
      const currIndex = _.findIndex(state.all, { adId: id });
      state.all[currIndex].status = 'checked';
      LocalStore.storeAds(state.all);
    },
    removeFav(state, { id }) {
      const currIndex = _.findIndex(state.all, { adId: id });
      state.all[currIndex].status = 'unchecked';
      LocalStore.storeAds(state.all);
    },
  },


  state: {
    all: [],
  },


  getters: {
    getAll(state) {
      return state.all;
    },
    getById(state) {
      return (adId) => _.find(state.all, (ad => +ad.adId === +adId));
    },
  },
};
