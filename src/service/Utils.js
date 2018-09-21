let Utils = {
  removeParam: function (key, sourceURL) {
    var rtn = sourceURL.split('?')[0]
    var param
    var paramsArr = []
    var queryString = (sourceURL.indexOf('?') !== -1) ? sourceURL.split('?')[1] : ''
    if (queryString !== '') {
      paramsArr = queryString.split('&')
      for (var i = paramsArr.length - 1; i >= 0; i -= 1) {
        param = paramsArr[i].split('=')[0]
        if (param === key) {
          paramsArr.splice(i, 1)
        }
      }
      rtn = rtn + '?' + paramsArr.join('&')
    }
    return rtn
  }
}
export {Utils}
