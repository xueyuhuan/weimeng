const target='http://192.168.0.184:8080';
module.exports = {
  // 基本路径
  baseUrl: './',
  // 输出文件目录
  outputDir: 'docs',
  devServer:{
    port:80,
    disableHostCheck: true,
    proxy:{
      '/proxy':{
        target:target,
        changeOrigin:true,
        pathRewrite:{
          '^/proxy':''
        }
      },
    }
  }
};