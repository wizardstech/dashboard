module.exports = {
  devServer: {
    proxy: {
      '/jira/*': {
        target: process.env.VUE_APP_JIRA_ENDPOINT,
        pathRewrite: { '/jira/': '' },
        changeOrigin: true,
        ws: true,
        secure: false,
      },
      '/front': {
        target: process.env.VUE_APP_FRONT_ENDPOINT,
        pathRewrite: { '/front': '' },
        changeOrigin: true,
        ws: true,
        secure: false,
      },
      '/api': {
        target: process.env.VUE_APP_API_ENDPOINT,
        pathRewrite: { '/api': '' },
        changeOrigin: true,
        ws: true,
        secure: false,
      },
      '/back': {
        target: process.env.VUE_APP_BACK_ENDPOINT,
        pathRewrite: { '/back': '' },
        changeOrigin: true,
        ws: true,
        secure: false,
      },
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
};
