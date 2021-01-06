

module.exports = {
  configureWebpack: {
    // externals: {
    //   'vue': 'Vue' // 配置使用CDN
    // }
  },
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: ['src/assets/css/theme.scss']
        })
        .end()
    })
  },
  //...
  pages: {
    index: {
      entry: './src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
    // login: 'src/login/login.js',
    // register: 'src/register/register.js',    
  },
  publicPath: './',
  outputDir: 'dist', // 打包的目录
  // lintOnSave: true, // 在保存时校验格式
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  transpileDependencies: [
    // 'webpack-dev-server/client',
    // 'vue-calendar-component'
  ],
  lintOnSave: false,// 在保存时校验格式

  devServer: {
    open: true, // 启动服务后是否打开浏览器
    // host: '0.0.0.0',
    port: 8090, // 服务端口
    https: false,
    hotOnly: false,
    proxy: {
      'login': {
        // target: 'http://124.70.132.216:3000/',//whj华为云
        target: 'http://192.168.100.14:3000/',
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
          '^/login': ''
        },
      },
      // '/notice': {  //whj 通知公告代理前缀
      //   target: 'http://172.22.26.180:8091/',
      //   changeOrigin: true,
      //   // ws: true,
      //   pathRewrite: {
      //     '^/notice': ''
      //   }
      // },
      // '/upload': {  //whj 上传
      //   target: 'http://172.22.26.180:8090/',
      //   changeOrigin: true,
      //   // ws: true,
      //   pathRewrite: {
      //     '^/upload': ''
      //   }
      // },
    }, 
    disableHostCheck: true, // 加上这段
    // before: app => {
    // },

  },
}
