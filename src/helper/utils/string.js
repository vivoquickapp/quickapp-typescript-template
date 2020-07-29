export default {
  queryString(url, query) {
    let str = []
    for (let key in query) {
      if (typeof query[key] === 'object') {
        query[key] = JSON.stringify(query[key])
      }
      str.push(key + '=' + query[key])
    }
    let paramStr = str.join('&')
    return paramStr ? `${url}?${paramStr}` : url
  }
}
