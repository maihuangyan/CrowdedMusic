const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://192.168.10.216:31839',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "/api": ""
    }
  }))
}
