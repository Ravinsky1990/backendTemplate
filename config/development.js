const isLocalhost = process.env.NODE_ENV === "localhost";

module.exports = {
  server: {
    port: isLocalhost ? 3000 : process.env.PORT,
  },
};
