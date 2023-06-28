const express = require("express");

const router = express.Router();

const networkControllers = require("../controllers/networkControllers");

router.get("/network", networkControllers.browse);
router.get("/network/:id", networkControllers.read);
router.put("/network/:id", networkControllers.edit);
router.post("/network", networkControllers.add);
router.delete("/network/:id", networkControllers.destroy);

module.exports = router;
