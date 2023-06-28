// import some node modules for later

const fs = require("node:fs");
const path = require("node:path");

// create express app

const express = require("express");

const app = express();

// use some application-level middlewares

app.use(express.json());

const cors = require("cors");

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);

// import and mount the API routes

const router = require("./router");
const routerUsers = require("./Routers/routerUser");
const routerModels = require("./Routers/routerModel");
const routerState = require("./Routers/routerState");
const routerScreenSize = require("./Routers/routerScreenSize");
const routerOs = require("./Routers/routerOs");
const routerNetwork = require("./Routers/routerNetwork");
const routerMemory = require("./Routers/routerMemory");
const routerColor = require("./Routers/routerColor");
const routerCategory = require("./Routers/routerCategory");
const routerBrand = require("./Routers/routerBrand");
const routerStorage = require("./Routers/routerStorage");
const routerPhone = require("./Routers/routerPhone");

app.use(router);
app.use(routerUsers);
app.use(routerModels);
app.use(routerState);
app.use(routerScreenSize);
app.use(routerOs);
app.use(routerNetwork);
app.use(routerMemory);
app.use(routerColor);
app.use(routerCategory);
app.use(routerBrand);
app.use(routerStorage);
app.use(routerPhone);

// serve the `backend/public` folder for public resources

app.use(express.static(path.join(__dirname, "../public")));

// serve REACT APP

const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  // serve REACT resources

  app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

  // redirect all requests to the REACT index file

  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// ready to export

module.exports = app;
