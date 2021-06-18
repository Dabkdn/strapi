module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        uri: env(
          "DATABASE_HOST",
          "mongodb+srv://nguyenkhanhha40091:Ha123123@cluster0.y64ly.mongodb.net/strapi"
        ),
      },
      options: {
        ssl: true,
      },
    },
  },
});
