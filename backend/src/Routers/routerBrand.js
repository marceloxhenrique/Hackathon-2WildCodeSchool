const express = require("express");

const router = express.Router();

const itemControllers = require("../controllers/itemControllers");

router.get("/brands", itemControllers.browse);
router.get("/brands/:id", itemControllers.read);
router.put("/brands/:id", itemControllers.edit);
router.post("/brands", itemControllers.add);
router.delete("/brands/:id", itemControllers.destroy);

module.exports = router;
