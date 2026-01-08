import http from "@/config/request";
import { user } from "@/store/index.js";
import { h } from "vue";
import { ElNotification } from "element-plus";
import { imageConversion } from "@/utils/tool";

// 数据缓存
import { useCacheStore }  from "@/store/cacheStore"
import { requestWithCache } from "@/config/request";
import { removeCache } from "@/utils/cache";

// 引入API常量
import { API } from "@/utils/constans";

/** 登录 */
export const reqLogin = (data) => {
  return http.post(API.USER.LOGIN,data);
};

/** 注册 */
export const reqRegister = (data) => {
  return http.post(API.USER.REGISTER,data)
};

/** 用户修改个人信息 */
export const updateUserInfo = (data) => {
  return http.put(API.USER.UPDATE_OWN_INFO, data);
};

/** 用户修改密码 */
export const updateUserPassword = (data) => {
  return http.put(API.USER.UPDATE_PASSWORD, data);
};

/** 获取当前登录人的信息 */
// export const getUserInfoById = (id) => {
//   return new Promise((resolve, reject) => {
//     http.get("/api/user/getUserInfoById/" + id, {}).then((res) => {
//       resolve(res);
//     });
//   });
// };
// → 修改为需要缓存的数据接口
export const getUserInfoById = (id,forceRefresh = false) => {
  return requestWithCache(
    {
      url: API.USER.GET_INFO_BY_ID(id), // 使用常量生成动态地址
      method: "get",
      params: {},
    },
    300, // 缓存5分钟
    forceRefresh // 支持手动刷新缓存
  );
}

/** 图片上传 - 保留所有压缩/上传逻辑，仅替换接口地址 */
export const imgUpload = async ( data ) => {
  // 文件压缩：服务器限制，大于800KB才压缩
  let res = undefined;
  if (data.raw.size / 1024 > 800) {
    res = await imageConversion(data.raw);
    if (!res) {
      ElNotification({
        offset: 60,
        title: "错误提示",
        message: h("div", { style: "color: #f56c6c; font-weight: 600;" }, "图片上传失败"),
      });
      return Promise.reject(new Error("图片压缩失败"));
    }
  } else {
    res = data.raw;
  }

  const formData = new FormData();
  formData.append("file", res);
  const userStore = user();

  // 替换上传接口地址，保留原有请求配置
  return http.post(API.UPLOAD.IMG, formData, {
    config: {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: userStore.getToken,
      },
    },
  });
};