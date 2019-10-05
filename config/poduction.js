module.exports = {
  swagger: {
    isActive: false
  },
  server: {
    port: process.env.PORT,
  },
  security: {
    passwordHash: {
      length: 128,
      iterations: 1000
    },
    jwt: {
      secret: ""
    }
  }
}