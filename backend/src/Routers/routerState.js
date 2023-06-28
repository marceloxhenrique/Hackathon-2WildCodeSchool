const express = require("express");

const router = express.Router();

const itemControllers = require("../controllers/itemControllers");

router.get("/state", itemControllers.browse);
router.get("/state/:id", itemControllers.read);
router.put("/state/:id", itemControllers.edit);
router.post("/state", itemControllers.add);
router.delete("/state/:id", itemControllers.destroy);

module.exports = router;
