// const { defineConfig } = require('@vue/cli-service');

const proxies = require('./proxies');
const pages = require('./page');

module.exports = {
  transpileDependencies: true,
  pages: pages,
  devServer: {
    port: 8081, // 默认端口号
    // inline: true,
    // https: false, // 是否为https 请求 https:{type:Boolean}
    // compress: true,
    // disableHostCheck: true, // 加上这段
    proxy: {...proxies},
  },
  // before: function(app){
  //   console.log('app', app);
  // }
}



// module.exports = defineConfig({
//   transpileDependencies: true
// })
