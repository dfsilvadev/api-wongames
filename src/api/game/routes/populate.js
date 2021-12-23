module.exports = {
  routes: [
    {
      method: "POST",
      path: "/games/populate",
      handler: "populate.populate",
      config: {
        auth: false,
      },
    },
  ],
};
