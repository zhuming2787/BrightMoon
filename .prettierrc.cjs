module.exports = {
  printWidth: 120, // 每行代码最大长度
  tabWidth: 4, // 缩进 2 个空格（适配 Vue 官方风格）
  useTabs: true, // 使用空格而非制表符
  singleQuote: true, // 字符串使用单引号（Vue/TS 推荐）
  semi: true, // 语句末尾加分号
  trailingComma: 'es5', // 尾逗号（如数组/对象最后一项加逗号）
  bracketSpacing: true, // 对象字面量括号间加空格（{ a: 1 } 而非 {a:1}）
  bracketSameLine: false, // 标签闭合括号换行（Vue 模板友好）
  arrowParens: 'avoid', // 箭头函数单个参数省略括号（x => x 而非 (x) => x）
  endOfLine: 'auto', // 换行符自动适配系统（Windows \r\n / Mac \n）
  vueIndentScriptAndStyle: false, // 不缩进 Vue 单文件的 script/style 标签
};
