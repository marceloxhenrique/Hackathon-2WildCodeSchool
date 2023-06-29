const express = require("express");

const router = express.Router();

const storageControllers = require("../controllers/storageControllers");

router.get("/storages", storageControllers.browse);
router.get("/storages/:id", storageControllers.read);
router.put("/storages/:id", storageControllers.edit);
router.post("/storages", storageControllers.add);
router.delete("/storages/:id", storageControllers.destroy);

module.exports = router;
