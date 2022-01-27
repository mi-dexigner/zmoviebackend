module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5bcf087b45be4b02a49ff922eaa3800c'),
  },
});
