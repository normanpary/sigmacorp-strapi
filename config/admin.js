module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c0a4d2d8f216e54af3f3345b5a29798a'),
  },
});
