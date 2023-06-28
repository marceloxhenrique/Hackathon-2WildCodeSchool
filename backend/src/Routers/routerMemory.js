const express = require("express");

const router = express.Router();

const memoryControllers = require("../controllers/memoryControllers");

router.get("/memory", memoryControllers.browse);
router.get("/memory/:id", memoryControllers.read);
router.put("/memory/:id", memoryControllers.edit);
router.post("/memory", memoryControllers.add);
router.delete("/memory/:id", memoryControllers.destroy);

module.exports = router;
