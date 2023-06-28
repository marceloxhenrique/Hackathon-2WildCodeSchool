const express = require("express");

const router = express.Router();

const networkControllers = require("../controllers/networkControllers");

router.get("/networks", networkControllers.browse);
router.get("/networks/:id", networkControllers.read);
router.put("/networks/:id", networkControllers.edit);
router.post("/networks", networkControllers.add);
router.delete("/networks/:id", networkControllers.destroy);

module.exports = router;
