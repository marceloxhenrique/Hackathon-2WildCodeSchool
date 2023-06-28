const express = require("express");

const router = express.Router();

const itemControllers = require("../controllers/itemControllers");

router.get("/screensize", itemControllers.browse);
router.get("/screensize/:id", itemControllers.read);
router.put("/screensize/:id", itemControllers.edit);
router.post("/screensize", itemControllers.add);
router.delete("/screensize/:id", itemControllers.destroy);

module.exports = router;
