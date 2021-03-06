// native 在 window 中注入处理 handler
// 模拟 native 的注入函数
window.YTKJsBridge = function (data) {
  alert('native recieve: methodName: ' + data.methodName + ', args: ' + JSON.stringify(data.args))
  switch(data.methodName) {
    case 'getAppVersion':
      return {
        ret: navigator.appVersion,
        code: 0
      };
    case 'uploadFile':
      setTimeout(() => {
        window.dispatchCallbackFromNative && window.dispatchCallbackFromNative({
          ret: 'https://www.yuanfudao.com',
          code: 0,
          callId: data.callId
        })
      }, 100)
      return false
    default:
      return false
  }
}

window.sendEvent = function (data) {
  var str = typeof data === 'string' ? data : JSON.stringify(data)
  alert('native recieve: event: ' + data.event + ', data: ' + str)
}

window.makeCallback = function (data) {
  alert('native recieve: data: ' + JSON.stringify(data))
}
