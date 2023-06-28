const express = require("express");

const router = express.Router();

const osControllers = require("../controllers/osControllers");

router.get("/os", osControllers.browse);
router.get("/os/:id", osControllers.read);
router.put("/os/:id", osControllers.edit);
router.post("/os", osControllers.add);
router.delete("/os/:id", osControllers.destroy);

module.exports = router;
