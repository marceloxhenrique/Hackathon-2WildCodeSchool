const express = require("express");

const router = express.Router();

const colorControllers = require("../controllers/colorControllers");

router.get("/color", colorControllers.browse);
router.get("/color/:id", colorControllers.read);
router.put("/color/:id", colorControllers.edit);
router.post("/color", colorControllers.add);
router.delete("/color/:id", colorControllers.destroy);

module.exports = router;
