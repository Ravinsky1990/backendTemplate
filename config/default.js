module.exports = {
  swagger: {
    isActive: true
  },
  server: {
    port: 3000,
    baseUrl: "http://localhost:3000"
  },
  security: {
    passwordHash: {
      length: 128,
      iterations: 1
    },
    jwt: {
      secret: "1234"
    }
}