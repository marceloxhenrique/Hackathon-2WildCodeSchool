const express = require("express");

const router = express.Router();

const stateControllers = require("../controllers/stateControllers");

router.get("/state", stateControllers.browse);
router.get("/state/:id", stateControllers.read);
router.put("/state/:id", stateControllers.edit);
router.post("/state", stateControllers.add);
router.delete("/state/:id", stateControllers.destroy);

module.exports = router;
