module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4a0082691eaf9361e174988927f4b147'),
  },
});
