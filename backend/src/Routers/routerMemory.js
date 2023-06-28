const express = require("express");

const router = express.Router();

const memoryControllers = require("../controllers/memoryControllers");

router.get("/memories", memoryControllers.browse);
router.get("/memories/:id", memoryControllers.read);
router.put("/memories/:id", memoryControllers.edit);
router.post("/memories", memoryControllers.add);
router.delete("/memories/:id", memoryControllers.destroy);

module.exports = router;
