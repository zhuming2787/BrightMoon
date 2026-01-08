import xss from 'xss';

/**
 * 过滤普通文本(纯文字，所有标签转义)
 * @param {string} text 用户输入的普通文本
 * @returns {string} 安全文本
 */
export function filterPlainText(text){
    if(!text) return '';
    //普通文本：使用默认规则，全量转义
    return xss(text);
}

/**
 * 过滤富文本(保留合法标签，过滤恶意属性/标签)
 * @param {string} html 用户输入的富文本
 * @returns {string} 安全的富文本
 */
export function filterRichText(html){
    if(!html) return '';
    // 自定义富文本白名单
    const whiteList = {
        div : ['class','style'],
        p: ['style', 'class'],
        span: ['style', 'class'],
        img: ['src', 'alt', 'width', 'height'],
        a: ['href', 'target', 'rel'], // a标签仅允许href/target/rel（禁止onclick）
        br: [],
        ul: ['class'],
        li: ['class'],
    };
    return xss(html,{
        whiteList,
        stripIgnoreTag: true,
        stripIgnoreTagBody: ['script', 'iframe', 'embed'],
        cssFilter: (css) => css.replace(/expression\(.*?\)/g, ''), //过滤style中的危险样式
    });
}