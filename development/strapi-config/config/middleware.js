module.exports = () => ({
  settings: {
    cors: {
      enabled: true,
      origin: [
        process.env.ADMIN_HOST,
        process.env.CLIENT_ROOTED_HOST,
        process.env.CLIENT_ROOTLESS_HOST,
      ],
    },
  },
});
