const express = require("express");

const router = express.Router();

const brandControllers = require("../controllers/brandControllers");

router.get("/brands", brandControllers.browse);
router.get("/brands/:id", brandControllers.read);
router.put("/brands/:id", brandControllers.edit);
router.post("/brands", brandControllers.add);
router.delete("/brands/:id", brandControllers.destroy);

module.exports = router;
