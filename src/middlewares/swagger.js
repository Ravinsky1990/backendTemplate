const config = require("config");
const swaggerUi = require("koa2-swagger-ui");

module.exports = () => {
  return swaggerUi({
    title: "Some title",
    hideTopbar: true,
    swaggerOptions: { url: `${config.get("server.baseUrl")}/spec.yml` }
  });
};
