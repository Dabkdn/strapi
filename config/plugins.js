const serviceAccount = require('../strapi-upload-31370-firebase-adminsdk-9rt2v-9d61646cb1.json')
module.exports = ({ env }) => ({
  upload: {
    provider: "to-firebase",
    providerOptions: {
      serviceAccount: serviceAccount,
      bucket: "strapi-upload-31370.appspot.com",
      debugLogs: true,
    },
  },
});
