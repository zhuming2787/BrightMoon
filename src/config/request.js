import axios from "axios";
import { h } from "vue";
import { ElNotification } from "element-plus";
import { user } from "@/store/index";
import { useLoadingStore } from "@/store/index";
import { useCacheStore } from '@/store/cacheStore';
import { getCache, setCache } from '@/utils/cache';

const http = axios.create({
  timeout: 10000, // 请求超时时间毫秒
  withCredentials: true, // 异步请求携带cookie
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

// 带缓存的请求函数
export const requestWithCache = async (config,expireSeconds,forceRefresh = false) => {
  // 获取缓存列表
  const cacheStore = useCacheStore();
  const cacheKey = `${config.url}_${JSON.stringify(config.params || config.data)}`;

  if(expireSeconds && !forceRefresh){
    const cacheData = getCache(cacheKey,cacheStore);
    if(cacheData){
      return Promise.resolve(cacheData);
    }
  }

  try{
    const response = await http(config);
    if(expireSeconds){
      setCache(cacheKey, response.data, expireSeconds, cacheStore);
    }
    return response.data;
  }catch(error){
    throw error;
  }
}

// 无感刷新核心变量
let isRefreshing = false;
let requestQueue = [];

// 刷新Token接口
const refreshTokenAPI = async () => {
  const userStore = user();
  const refreshToken = userStore.getRefreshToken;
  if(!refreshToken) throw new Error("无可用的刷新令牌");

  const res = await axios.post('/api/refreshToken', {
    refreshToken: refreshToken // 传给后端的是解密后的真实值
  }, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    }
  });
  return res.data;
}

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    const userStore = user();

    if (userStore.getToken) { 
      Object.assign(config.headers, {
        Authorization: userStore.getToken,
      });
    }

    const loadingStore = useLoadingStore();
    loadingStore.startLoading();
    return config;
  },
  (error) => {
    const loadingStore = useLoadingStore()
    loadingStore.endLoading();
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    const dataAxios = response.data;
    const { code, message } = dataAxios;

    switch (code + "") {
      case "100":
        ElNotification({
          offset: 60,
          title: "温馨提示",
          message: h("div", { style: "color: #e6c081; font-weight: 600;" }, message),
        });
        break;
    }

    const loadingStore = useLoadingStore()
    loadingStore.endLoading();

    return dataAxios;
  },
  async (error) => {

    const loadingStore = useLoadingStore()
    loadingStore.endLoading();

    let errorStatus, errorData;
    let errorMsg = "请求失败，请稍后再试";
    // 服务器返回了响应（状态码非2xx）
    if (error.response) {
      ({ status: errorStatus, data: errorData } = error.response);
      errorMsg = errorData?.message || `请求失败（状态码：${errorStatus}）`;

      //处理401
      if(errorStatus === 401){
        if(isRefreshing){
          return new Promise((resolv) => {
            requestQueue.push(() => {
              resolve(http(originalRequest));
            });
          });
        }

        isRefreshing = true;

        try{
          const refreshRes = await refreshTokenAPI();
          if (refreshRes.code === 200 && refreshRes.data?.accessToken) {
            // 刷新成功：加密存储新的accessToken
            userStore.updateAccessToken(refreshRes.data.accessToken);
            // 重试队列请求
            requestQueue.forEach(cb => cb());
            requestQueue = [];
            // 重试原请求（携带新Token）
            originalRequest.headers.Authorization = userStore.getToken;
            return http(originalRequest);
          } else {
            throw new Error('刷新Token失败');
          }
        }catch(refreshError){
          // 刷新失败：清空用户信息，提示登录
          errorMsg = "登录状态已失效，请重新登录";
          ElNotification({
            offset: 60,
            title: "错误提示",
            message: h("div", { style: "color: #f56c6c; font-weight: 600;" }, errorMsg),
          });
          userStore.clearUserInfo();
          userStore.setShowLogin(true);
          return Promise.reject(error);
        }finally{
          isRefreshing = false;
        }
      }
      
      // 根据状态码处理不同业务场景
      switch (errorStatus + "") {
        case "403":
          errorMsg = errorData.message || "权限不足，无法操作";
          ElNotification({
            offset: 60,
            title: "错误提示",
            message: h("div", { style: "color: #f56c6c; font-weight: 600;" }, errorMsg),
          });
          break;
        case "404":
          errorMsg = "请求的接口不存在";
          ElNotification({
            offset: 60,
            title: "错误提示",
            message: h("div", { style: "color: #f56c6c; font-weight: 600;" }, errorMsg),
          });
          break;
        case "408":
          errorMsg = errorData.message || "请求超时，请重试"; // 修复注释错误（原注释写205）
          ElNotification({
            offset: 60,
            title: "温馨提示",
            message: h("div", { style: "color: #e6c081; font-weight: 600;" }, errorMsg),
          });
          break;
        case "429":
          errorMsg = errorData.message || "请求过于频繁，请稍后再试";
          ElNotification({
            offset: 60,
            title: "温馨提示",
            message: h("div", { style: "color: #e6c081; font-weight: 600;" }, errorMsg),
          });
          break;
        case "500":
          errorMsg = errorData.message || "服务器内部错误，请稍后再试";
          ElNotification({
            offset: 60,
            title: "错误提示",
            message: h("div", { style: "color: #f56c6c; font-weight: 600;" }, errorMsg),
          });
          break;
        default:
          // 其他4xx/5xx状态码，统一提示
          ElNotification({
            offset: 60,
            title: "错误提示",
            message: h("div", { style: "color: #f56c6c; font-weight: 600;" }, errorMsg),
          });
      }
    }
    // 2. 请求已发送，但服务器无响应（如超时、服务崩溃）
    else if (error.request) {
      errorMsg = "网络异常，服务器未响应";
      ElNotification({
        offset: 60,
        title: "错误提示",
        message: h("div", { style: "color: #f56c6c; font-weight: 600;" }, errorMsg),
      });
      console.error("请求信息：", error.request);
    }
    // 3. 请求未发送成功（如网络断开、跨域、配置错误）
    else {
      errorMsg = `请求失败：${error.message}`;
      ElNotification({
        offset: 60,
        title: "错误提示",
        message: h("div", { style: "color: #f56c6c; font-weight: 600;" }, errorMsg),
      });
      console.error("请求配置错误：", error.message);
    }

    return Promise.reject(error); // 始终返回reject，供上层业务处理
  }
);

export default http;
