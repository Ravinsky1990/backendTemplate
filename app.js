const config = require("config");
const Koa = require("koa");
const Router = require("koa-router");
const koaLogger = require("koa-logger");
const serveStatic = require("koa-static");
const bodyParser = require("koa-body");
const cors = require("@koa/cors");
const helmet = require("koa-helmet");

// require middlewares and other modules
const middlewares = require('./src/middlewares')

const app = new Koa();

app.use(koa-logger());
app.use(helmet());
app.use(cors({ credentials: true }));
if (config.get("swagger.isActive")) {
  app.use(serveStatic("docs"));
  app.use(middlewares.swagger());
}

const apiRouter = new Router({ prefix: "/api" });

//set routes

app.use(apiRouter.routes());

const port = config.get("server.port");
app.listen(port, () => {
  console.log(`Server started on ${port} port`);
});
