const express = require("express");

const router = express.Router();

const screensizeControllers = require("../controllers/screenSizeControllers");

router.get("/screensize", screensizeControllers.browse);
router.get("/screensize/:id", screensizeControllers.read);
router.put("/screensize/:id", screensizeControllers.edit);
router.post("/screensize", screensizeControllers.add);
router.delete("/screensize/:id", screensizeControllers.destroy);

module.exports = router;
