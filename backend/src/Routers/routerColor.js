const express = require("express");

const router = express.Router();

const itemControllers = require("../controllers/itemControllers");

router.get("/color", itemControllers.browse);
router.get("/color/:id", itemControllers.read);
router.put("/color/:id", itemControllers.edit);
router.post("/color", itemControllers.add);
router.delete("/color/:id", itemControllers.destroy);

module.exports = router;
