const path = require('path')
module.exports = {
    lintOnSave: false
        /*  configureWebpack: {
             resolve: {
                 alias: {
                     'src': path.resolve(__dirname, 'src')
                 }
             }
         } */
        ,

    css: {
        requireModuleExtension: false,

    }
}