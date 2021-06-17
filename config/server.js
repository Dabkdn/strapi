module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '0f2b720f22ac9dbcc438ef6999fb9a7d'),
    },
  },
});
