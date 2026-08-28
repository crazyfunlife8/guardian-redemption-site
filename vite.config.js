export default {
  server: {
    proxy: {
      '/api': {
        target: 'https://guardian.nest-creation.com',
        changeOrigin: true,
      },
    },
  },
}
