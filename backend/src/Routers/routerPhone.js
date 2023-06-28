const express = require("express");

const routerPhone = express.Router();
const phoneControllers = require("../controllers/phoneControllers");

routerPhone.get("/phones", phoneControllers.browse);
routerPhone.get("/phones/:id", phoneControllers.read);
routerPhone.put("/phones/:id", phoneControllers.edit);
routerPhone.post("/phones", phoneControllers.add);
routerPhone.delete("/phones/:id", phoneControllers.destroy);

module.exports = routerPhone;
