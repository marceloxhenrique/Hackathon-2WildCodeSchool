const express = require("express");

const router = express.Router();

const categoryControllers = require("../controllers/categoryControllers");

router.get("/categories", categoryControllers.browse);
router.get("/categories/:id", categoryControllers.read);
router.put("/categories/:id", categoryControllers.edit);
router.post("/categories", categoryControllers.add);
router.delete("/categories/:id", categoryControllers.destroy);

module.exports = router;
