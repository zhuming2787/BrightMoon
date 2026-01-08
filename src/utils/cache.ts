/**
 * 计算过期时间戳
 */
export const calcExpireTime = (expireSeconds) => {
  //超出时间 + 现在时间 之和
  return Date.now() + expireSeconds * 1000;
}

/**
 * 存入缓存
 */
export const setCache = (key, data, expireSeconds, cacheStore) => {
  const cacheItem = {
    key,
    data,
    cacheTime: Date.now(),
    expireTime: calcExpireTime(expireSeconds),
  };
  cacheStore.setCacheItem(cacheItem);
  localStorage.setItem(`cache_${key}`, JSON.stringify(cacheItem));
};

/**
 * 读取缓存
 */
export const getCache = (key, cacheStore) => {
  let cacheItem = cacheStore.getCacheItem(key);
  if (!cacheItem) {
    const localCache = localStorage.getItem(`cache_${key}`);
    if (localCache) {
      cacheItem = JSON.parse(localCache);
      cacheStore.setCacheItem(cacheItem);
    }
  }
  if (cacheItem && Date.now() > cacheItem.expireTime) {
    removeCache(key, cacheStore);
    return null;
  }
  return cacheItem?.data || null;
};


/**
 * 删除缓存
 */
export const removeCache = (key, cacheStore) => {
  cacheStore.removeCacheItem(key);
  localStorage.removeItem(`cache_${key}`);
};

/**
 * 清理过期缓存
 */
export const clearExpiredCache = (cacheStore) => {
    if(!cacheStore){
        console.warn('cacheStore 实例无效，跳过清理过期缓存');
        return;
    }
    
    if (!Array.isArray(cacheStore.cacheList)) {
        cacheStore.setCacheList([]);
        return;
    }

    // 过滤有效缓存
    const validCache = cacheStore.cacheList.filter(item => {
        // 无item/无expireTime/expireTime不是数字 → 视为过期
        if (!item || typeof item.expireTime !== 'number') return false;
        return Date.now() <= item.expireTime;
    });
    
    console.log("这里",validCache);
    cacheStore.setCacheList(validCache);
    console.log('s');
    
    Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('cache_')) {
        const item = JSON.parse(localStorage.getItem(key) || '{}');
        if (Date.now() > item.expireTime) {
            localStorage.removeItem(key);
        }
        }
    });
};