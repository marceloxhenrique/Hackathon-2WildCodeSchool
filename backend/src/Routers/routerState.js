const express = require("express");

const router = express.Router();

const stateControllers = require("../controllers/stateControllers");

router.get("/states", stateControllers.browse);
router.get("/states/:id", stateControllers.read);
router.put("/states/:id", stateControllers.edit);
router.post("/states", stateControllers.add);
router.delete("/states/:id", stateControllers.destroy);

module.exports = router;
