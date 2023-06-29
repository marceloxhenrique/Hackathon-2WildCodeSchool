const express = require("express");

const {
  hashPassword,
  verifyPassword,
  verifyToken,
  logout,
} = require("../services/auth");
const {
  getUserByEmailMiddleWare,
  register,
} = require("../controllers/authControllers");

const routerUser = express.Router();

// Public routes
// Auth
routerUser.post("/register", hashPassword, register);
routerUser.post("/login", getUserByEmailMiddleWare, verifyPassword);
routerUser.get("/logout", verifyToken, logout);

const userControllers = require("../controllers/userControllers");

routerUser.get("/users", userControllers.browse);
routerUser.get("/users/:id", userControllers.read);
routerUser.put("/users/:id", userControllers.edit);
routerUser.post("/users", userControllers.add);
routerUser.delete("/users/:id", userControllers.destroy);

// Private routes
const usersControllers = require("../controllers/userControllers");

routerUser.get("/profile", verifyToken, usersControllers.profile);

module.exports = routerUser;
