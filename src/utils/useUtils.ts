import { isRef, unref } from 'vue';

/**
 * 通用工具函数 Composables
 * 包含：数据类型判断、深拷贝、日期格式化、防抖、节流、空值判断等
 */
export const useUtils = () => {
    /**
     * 精准判断数据类型
     * @param value 要判断的值
     * @returns 类型字符串（如：string/number/array/object/date/regexp/null/undefined）
     */
    const typeOf = (value: any): string => {
        return Object.prototype.toString.call(value).slice(8,-1).toLowerCase();
    }

    

  /**
   * 2. 深拷贝（支持基本类型、数组、对象、日期、正则，避免循环引用）
   * @param target 要拷贝的目标
   * @param cache 缓存已拷贝的对象（解决循环引用）
   * @returns 拷贝后的新值
   */
  const deepClone = <T>(target: T, cache = new WeakMap()): T => {
    // 处理基本类型/Null/Undefined
    if (target === null || typeof target !== 'object') {
      return target;
    }

    // 处理循环引用
    if (cache.has(target)) {
      return cache.get(target);
    }

    let result: any;
    const type = typeOf(target);

    // 处理日期
    if (type === 'date') {
      result = new Date(target as unknown as Date);
      cache.set(target, result);
      return result;
    }

    // 处理正则
    if (type === 'regexp') {
      result = new RegExp((target as unknown as RegExp).source, (target as unknown as RegExp).flags);
      cache.set(target, result);
      return result;
    }

    // 处理数组
    if (type === 'array') {
      result = [];
      cache.set(target, result);
      (target as Array<any>).forEach((item, index) => {
        result[index] = deepClone(item, cache);
      });
      return result;
    }

    // 处理普通对象（排除 Date/RegExp 等特殊对象）
    if (type === 'object') {
      result = {};
      cache.set(target, result);
      Object.keys(target as object).forEach((key) => {
        result[key] = deepClone((target as Record<string, any>)[key], cache);
      });
      return result;
    }

    // 其他类型（如 Function，直接返回，因为函数无需拷贝）
    return target;
  };

  /**
   * 日期格式化（支持自定义格式）
   * @param date 日期（Date对象/时间戳/字符串）
   * @param format 格式（默认：YYYY-MM-DD HH:mm:ss）
   * @returns 格式化后的日期字符串
   */
  const formatDate = (date: Date | number | string, format = 'YYYY-MM-DD HH:mm:ss'): string => {
    // 统一转为 Date 对象
    let targetDate: Date;
    if (typeOf(date) === 'number') {
      targetDate = new Date(date as number); // 时间戳
    } else if (typeOf(date) === 'string') {
      targetDate = new Date(date as string); // 日期字符串
    } else if (typeOf(date) === 'date') {
      targetDate = date as Date; // Date 对象
    } else {
      console.error('日期格式错误：', date);
      return '';
    }

    // 补零函数
    const padZero = (num: number): string => num.toString().padStart(2, '0');

    // 提取日期部分
    const year = targetDate.getFullYear();
    const month = padZero(targetDate.getMonth() + 1); // 月份从0开始
    const day = padZero(targetDate.getDate());
    const hours = padZero(targetDate.getHours());
    const minutes = padZero(targetDate.getMinutes());
    const seconds = padZero(targetDate.getSeconds());

    // 替换格式符
    return format
      .replace('YYYY', year.toString())
      .replace('MM', month)
      .replace('DD', day)
      .replace('HH', hours)
      .replace('mm', minutes)
      .replace('ss', seconds);
  };

  /**
   * 防抖函数（高频触发时只执行最后一次）
   * @param fn 要防抖的函数
   * @param delay 延迟时间（ms）
   * @returns 防抖后的函数
   */
  const debounce = <T extends (...args: any[]) => any>(fn: T, delay = 300): ((...args: Parameters<T>) => void) => {
    let timer: NodeJS.Timeout | null = null;
    return (...args: Parameters<T>) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  /**
   * 节流函数（高频触发时固定频率执行）
   * @param fn 要节流的函数
   * @param interval 间隔时间（ms）
   * @returns 节流后的函数
   */
  const throttle = <T extends (...args: any[]) => any>(fn: T, interval = 300): ((...args: Parameters<T>) => void) => {
    let lastTime = 0;
    return (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastTime >= interval) {
        fn(...args);
        lastTime = now;
      }
    };
  };

  /**
   * 判断值是否为空（null/undefined/空字符串/空数组/空对象）
   * @param value 要判断的值
   * @returns 是否为空
   */
  const isEmpty = (value: any): boolean => {
    const type = typeOf(value);
    if (value === null || value === undefined) return true;
    if (type === 'string' && value.trim() === '') return true;
    if (type === 'array' && (value as Array<any>).length === 0) return true;
    if (type === 'object' && Object.keys(value as object).length === 0) return true;
    return false;
  };

  /**
   * 处理 Ref/非Ref 值（统一取值）
   * @param value 可能是 Ref 或普通值
   * @returns 原始值
   */
  const unrefValue = <T>(value: T): T => {
    return (isRef(value) ? unref(value) : value) as any;
  };

  // 返回所有工具函数
  return {
    typeOf,
    deepClone,
    formatDate,
    debounce,
    throttle,
    isEmpty,
    unrefValue,
  };
};