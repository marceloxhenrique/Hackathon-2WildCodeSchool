const express = require("express");

const router = express.Router();

const itemControllers = require("../controllers/itemControllers");

router.get("/memory", itemControllers.browse);
router.get("/memory/:id", itemControllers.read);
router.put("/memory/:id", itemControllers.edit);
router.post("/memory", itemControllers.add);
router.delete("/memory/:id", itemControllers.destroy);

module.exports = router;
