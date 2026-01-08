import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCacheStore = defineStore('cacheStore', () => {
  const cacheList = ref([]);

  const setCacheItem = (cacheItem) => {
    cacheList.value = cacheList.value.filter(item => item.key !== cacheItem.key);
    cacheList.value.push(cacheItem);
  };

  const getCacheItem = (key) => {
    return cacheList.value.find(item => item.key === key) || null;
  };

  const removeCacheItem = (key) => {
    cacheList.value = cacheList.value.filter(item => item.key !== key);
  };

  const clearAllCache = () => {
    cacheList.value = [];
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('cache_')) localStorage.removeItem(key);
    });
  };

  const setCacheList = (list) => {
      cacheList.value = Array.isArray(list) ? list : []; 
  };
  
  return {
    cacheList,
    setCacheItem,
    getCacheItem,
    setCacheList,
    removeCacheItem,
    clearAllCache
  };
});