const express = require("express");

const router = express.Router();

const itemControllers = require("../controllers/itemControllers");

router.get("/newtork", itemControllers.browse);
router.get("/newtork/:id", itemControllers.read);
router.put("/newtork/:id", itemControllers.edit);
router.post("/newtork", itemControllers.add);
router.delete("/newtork/:id", itemControllers.destroy);

module.exports = router;
