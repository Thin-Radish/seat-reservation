module.exports = {
  configureWebpack: {
    resolve: {
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'api':'@/api',
        'views':'@/views',
      }
    }
  },
  devServer: {
    proxy: { // 配置跨域
      '/api': {
        target: 'http://114.55.38.15:15001', // 这里后台的地址模拟的;应该填写你们真实的后台接口
        changOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
}
