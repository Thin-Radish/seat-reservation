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
    open:true,
    proxy: { // 配置跨域
      '/api': {
        target: 'http://114.55.38.15:15001', 
        changOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
}
