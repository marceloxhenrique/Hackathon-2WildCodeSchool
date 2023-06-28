const express = require("express");

const router = express.Router();

const itemControllers = require("../controllers/itemControllers");

router.get("/storage", itemControllers.browse);
router.get("/storage/:id", itemControllers.read);
router.put("/storage/:id", itemControllers.edit);
router.post("/storage", itemControllers.add);
router.delete("/storage/:id", itemControllers.destroy);

module.exports = router;
