const express = require("express");

const router = express.Router();

const colorControllers = require("../controllers/colorControllers");

router.get("/colors", colorControllers.browse);
router.get("/colors/:id", colorControllers.read);
router.put("/colors/:id", colorControllers.edit);
router.post("/colors", colorControllers.add);
router.delete("/colors/:id", colorControllers.destroy);

module.exports = router;
