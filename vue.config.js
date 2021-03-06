const path = require('path');

function resolve(dir) {
  return path.join(__dirname, './', dir);
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/variable.less'),
      ],
    })
}

const isProduction = process.env.NODE_ENV === 'production';
const externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'axios': 'axios',
}

const cdn = {
  dev: { // 开发环境
    css: [],
    js: [],
  },
  build: { // 生产环境
    css: [],
    js: [
      'https://cdn.bootcss.com/vue/2.6.10/vue.min.js',
      'https://cdn.bootcss.com/vue-router/3.0.3/vue-router.min.js',
      'https://cdn.bootcss.com/axios/0.18.0/axios.min.js',
    ]
  }
}

module.exports = {
  publicPath: isProduction ? process.env.BASE_URL : '/',
  css: {
    sourceMap: false,
  },
  productionSourceMap: false,
  devServer: {
    watchOptions: {
      poll: true
    },
    proxy: {
      '': {
        target: process.env.VUE_APP_BASE_API,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^': '',
        },
      }
    }
    // disableHostCheck: true,
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    // config.plugins.delete('prefetch');
    // config.plugins.delete('preload');
    if (isProduction) {
      config.plugin('html').tap(args => {
        args[0].cdn = cdn.build;
        return args;
      })
    }

    // svg rule loader
    const svgRule = config.module.rule('svg') // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule // 添加svg 新的loader处理
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(resolve('src/icons'))
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  },
  configureWebpack: config => {
    if (isProduction) {
      config.externals = externals;
    }
  }
}