const express = require("express");

const router = express.Router();

const itemControllers = require("../controllers/itemControllers");

router.get("/os", itemControllers.browse);
router.get("/os/:id", itemControllers.read);
router.put("/os/:id", itemControllers.edit);
router.post("/os", itemControllers.add);
router.delete("/os/:id", itemControllers.destroy);

module.exports = router;
