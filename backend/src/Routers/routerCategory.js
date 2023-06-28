const express = require("express");

const router = express.Router();

const itemControllers = require("../controllers/itemControllers");

router.get("/category", itemControllers.browse);
router.get("/category/:id", itemControllers.read);
router.put("/category/:id", itemControllers.edit);
router.post("/category", itemControllers.add);
router.delete("/category/:id", itemControllers.destroy);

module.exports = router;
