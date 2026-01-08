import {config} from "@/config/config";

// Base64主要是解决二进制数据 / 特殊字符在文本协议中传输的兼容性问题
export const Base64 = {
  encode: function (v) {
    return window.btoa(window.encodeURIComponent(v));
  },
  decode: function (v) {
    return window.decodeURIComponent(window.atob(v));
  },
};

// 本地存储
export const _setLocalItem = function(key,value){
    try{
        if(key === "" || key === undefined){
            return;
        }
        if(key){
            if(value == 0){
                value = JSON.stringify(value);
                localStorage.setItem(config.ENCRYPTION ? Base64.encode(key) : key,value);
                return;
            }
            if(value === null || value === undefined || value === ""){
                return "";
            }
            //编码... 
            let enObj = JSON.stringify(value);
            if(config.ENCRYPTION){
                localStorage.setItem(Base64.encode(key),Base64.encode(enObj));
            }else{
                localStorage.setItem(key,enObj);
            }
        }
    }catch(err){
        console.error(err);
    }
};

// 根据key，获取value
export const _getLocalItem = function (key) {
  try {
    if (key === null || key === "" || key === undefined) {
      return "";
    }
    if (key) {
      let value = localStorage.getItem(config.ENCRYPTION ? Base64.encode(key) : key);
      if (value === null || value === undefined || value === "") {
        return "";
      } else {
        value = config.ENCRYPTION ? Base64.decode(value) : value;
        return JSON.parse(value);
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export const _setSessionItem = function (key, value) {
  try {
    if (key === "" || key === undefined) {
      return;
    }
    if (key) {
      if (value == 0) {
        value = JSON.stringify(value);
        sessionStorage.setItem(config.ENCRYPTION ? Base64.encode(key) : key, value);
      }
      if (value === null || value === undefined || value === "") {
        return "";
      }
      // 编码
      let enObj = JSON.stringify(value);
      if (config.ENCRYPTION) {
        sessionStorage.setItem(Base64.encode(key), Base64.encode(enObj));
      } else {
        sessionStorage.setItem(key, enObj);
      }
    }
  } catch (e) {
    console.log(e);
    return sessionStorage.setItem(config.ENCRYPTION ? Base64.encode(key) : key, value);
  }
};
export const _getSessionItem = function (key) {
  if (key === null || key === "" || key === undefined) {
    return null;
  }
  try {
    if (key) {
      let value = sessionStorage.getItem(config.ENCRYPTION ? Base64.encode(key) : key);
      if (value === null || value === undefined || value === "") {
        return value;
      } else {
        value = config.ENCRYPTION ? Base64.decode(value) : value;
        return JSON.parse(value);
      }
    } else {
      return key;
    }
  } catch (e) {
    console.log(e);
    return sessionStorage.getItem(config.ENCRYPTION ? Base64.encode(key) : key);
  }
};
export const _removeLocalItem = function (key) {
  if (key === null || key === "" || key === undefined) {
    return;
  }
  if (key) {
    let enObj = config.ENCRYPTION ? Base64.encode(key) : key;
    localStorage.removeItem(enObj);
  }
};

// 清空session数据
export const _removeSessionItem = function (key) {
  if (key === null || key === "" || key === undefined) {
    return;
  }
  if (key) {
    let enObj = config.ENCRYPTION ? Base64.encode(key) : key;
    sessionStorage.removeItem(enObj);
  }
};

// 递归深拷贝
// 判断是否是手机端
// 随机颜色？

// 防抖
export const debounce = (fn,delay = 100,immediate = false) => {
  let timer = null;
  let isExecuted = false;
  
  const debounced = function(...args){
    const context = this;

    // 每次触发，先清除旧定时器
    clearTimeout(timer);

    if(immediate && !isExecuted){
      fn.apply(context,args);
      isExecuted = true; 
    }else{
      timer = setTimeout(()=>{
        fn.apply(context,args);
        isExecuted = false;
      },delay)
    }
  }
  
  debounced.cancel = function(){
    clearTimeout(timer);
    timer = null;
    isExecuted = false;
  }

  return debounced;
}

// 节流:固定时间间隔，只让函数执行一次
export const throttle = (fn,delay = 100) => {
  let timer = null;
  return(...args) => {
    if(!timer){
      timer = setTimeout(()=>{
        fn.apply(this,args);
        timer = null;
      },delay)
    }
  }
}
// 图片压缩
export const imageConversion = (file) => {
  return new Promise((resolve) => {
    try {
      // 创建文件读取对象
      const reader = new FileReader();
      // 读取文件
      reader.readAsDataURL(file);
      // 文件读取完成
      reader.onload = (e) => {
        // 创建图片对象
        const image = new Image();
        // 赋值图片的src
        image.src = e.target.result;
        // 图片加载完成
        image.onload = () => {
          // 创建画布
          const canvas = document.createElement("canvas");
          // 宽高
          canvas.width = image.width;
          // 高度
          canvas.height = image.height;
          // 绘制图片
          canvas.getContext("2d").drawImage(image, 0, 0);
          // 转换图片
          canvas.toBlob((blob) => {
            resolve(blob);
          }, "image/webp");
        };
      };
    } catch (err) {
      console.error(err);
    }
  });
};
