// 缓存项类型定义
export interface CacheItem{
    key: string;
    data: any;
    cacheTime: number;
    expireTime: number;
}