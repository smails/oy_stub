module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/sass/_global.sass";'
      },
    },
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'UI kit OY',
    },
  }
}