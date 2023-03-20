const proxy = {
    '/static': {
        target: 'http://www.qianduanheidong.com', //host
        secure: false,
        changeOrigin: true,
    },
    '/wedrug': {
        target: 'https://yiyao-h5.meituan.com', //host
        secure: false,
        changeOrigin: true,
    }
}
// http://www.qianduanheidong.com//img/gongzhonghao.jpg

module.exports =  proxy;