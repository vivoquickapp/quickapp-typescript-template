/** @format */

import $fetch from '@system.fetch'
import $utils from './utils'

Promise.prototype.finally = function(callback) {
  let P = this.constructor
  return this.then(
    value => P.resolve(callback()),
    reason =>
      P.resolve(callback()).then(() => {
        throw reason
      })
  )
}

function requestHandle(params) {
  return new Promise((resolve, reject) => {
    $fetch
      .fetch({
        url: params.url,
        method: params.method,
        data: params.data
      })
      .then(response => {
        /* @desc: 优化！存储请求返回的时间，以保证可能需要使用时间的正确性; */
        const result = response.data
        $utils.setCurrentTime(result.headers.Date)

        const content = JSON.parse(result.data)
        /* @desc: 可跟具体不同业务接口数据，返回你所需要的部分，使得使用尽可能便捷 */
        content.success ? resolve(content.value) : resolve(content.message)
      })
      .catch((error, code) => {
        console.log(`🐛 request fail, code = ${code}`)
        reject(error)
      })
      .finally(() => {
        console.log(`✔️ request @${params.url} has been completed.`)
        resolve()
      })
  })
}

export default {
  post: function(url, params) {
    return requestHandle({
      method: 'post',
      url: url,
      data: params
    })
  },
  get: function(url, params) {
    return requestHandle({
      method: 'get',
      url: $utils.queryString(url, params)
    })
  }
}
