const express = require("express");

const router = express.Router();

const screensizeControllers = require("../controllers/screenSizeControllers");

router.get("/screensizes", screensizeControllers.browse);
router.get("/screensizes/:id", screensizeControllers.read);
router.put("/screensizes/:id", screensizeControllers.edit);
router.post("/screensizes", screensizeControllers.add);
router.delete("/screensizes/:id", screensizeControllers.destroy);

module.exports = router;
