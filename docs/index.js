const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

module.exports = class Swagger {
  static host(req, _, next) {
    swaggerDocument.host = req.get("host");
    req.swaggerDoc = swaggerDocument;
    next();
  }

  static ui(router) {
    router.use("/api-monopoly-game-docs", this.host, swaggerUi.serve);
    router.get("/api-monopoly-game-docs", swaggerUi.setup(swaggerDocument));
  }
};