module.exports = {
  devServer:{
    proxy: 'http://95.217.131.10:8080/'
   //proxy: 'http://talagram.org'
  },

  transpileDependencies: [
    'vuetify'
  ]
}
