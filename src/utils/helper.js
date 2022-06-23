export const storage = {
  LOCAL_STORAGE_TOKEN: 'token',
  LOCAL_STORAGE_ADS: 'ads',
};


export class LocalStore {
  static storeAds(data) {
    localStorage.setItem(storage.LOCAL_STORAGE_ADS, JSON.stringify(data));
  }

  static getAds() {
    try {
      return JSON.parse(localStorage.getItem(storage.LOCAL_STORAGE_ADS));
    } catch (err) {
      return [];
    }
  }

  static getToken() {
    return localStorage.getItem(storage.LOCAL_STORAGE_TOKEN);
  }

  static clear() {
    localStorage.removeItem(storage.LOCAL_STORAGE_ADS);
    localStorage.removeItem(storage.LOCAL_STORAGE_TOKEN);
  }
}

