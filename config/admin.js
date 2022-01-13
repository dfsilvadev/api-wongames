module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '980ee442ff7e6280a797973129d5bb8f'),
  },
});
