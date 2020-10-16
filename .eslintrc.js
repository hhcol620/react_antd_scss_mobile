module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    es2020: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      // 修饰器语法
      experimentalDecorators: true,
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  // 第二个参数来解决react-router里面的this.props.history location.pathname 等使用
  plugins: ['react', 'eslint-plugin-react'],

  rules: {
    'react/no-array-index-key': 0, // 防止在数组中遍历中使用数组key做索引
    'no-this-before-super': 2, // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-var': 0, // 要求使用 let 或 const 而不是 var
    'prefer-template': 0, // 要求使用模板字面量而非字符串连接
    'no-useless-constructor': 'warn',
    'jsx-a11y/anchor-is-valid': 'off',
    'eol-last': [2, 'always'],
    'react/prop-types': 'off',
    'eslint-disable': 0, // 使用未生明变量
    'no-extra-semi': 0
  }
}
