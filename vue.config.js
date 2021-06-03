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
    proxy: { 
      '/api': {
        target: 'http://114.55.38.15:15001', 
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
}
