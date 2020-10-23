---
to: src/api/<%= folder %>/index.js
---
import apiReq from '@/api/apiRequest.js'

// let initConfig = {}

let request = apiReq() // 可选参数 config 基地址之类的

export const _example = (data) => {
  return request('get', '/baidu', data)
}