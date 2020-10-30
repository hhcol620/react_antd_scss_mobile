/* eslint-disable no-undef */
// 根据环境设置baseUrl
const config =
  process.env.NODE_ENV === 'production'
    ? require('./.env.production')
    : require('./.env.development')
module.exports = config
