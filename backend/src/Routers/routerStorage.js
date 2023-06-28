const express = require("express");

const router = express.Router();

const storageControllers = require("../controllers/storageControllers");

router.get("/storage", storageControllers.browse);
router.get("/storage/:id", storageControllers.read);
router.put("/storage/:id", storageControllers.edit);
router.post("/storage", storageControllers.add);
router.delete("/storage/:id", storageControllers.destroy);

module.exports = router;
