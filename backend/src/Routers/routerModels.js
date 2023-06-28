const express = require("express");

const router = express.Router();

const itemControllers = require("../controllers/itemControllers");

router.get("/models", itemControllers.browse);
router.get("/models/:id", itemControllers.read);
router.put("/models/:id", itemControllers.edit);
router.post("/models", itemControllers.add);
router.delete("/models/:id", itemControllers.destroy);

module.exports = router;
