require("dotenv").config();

const mysql = require("mysql2/promise");

// create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// try a connection

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});

// declare and fill models: that's where you should register your own managers

const models = {};

const ItemManager = require("./ItemManager");
const UserManager = require("./userManager");
const MemoryManager = require("./MemoryManager");
const BrandManager = require("./BrandManager");
const ModelManager = require("./ModelManager");
const CategoryManager = require("./CategoryManager");
const ColorManager = require("./ColorManager");
const NetworkManager = require("./NetworkManager");
const OsManager = require("./OsManager");
const ScreensizeManager = require("./ScreensizeManager");
const StateManager = require("./StateManager");
const StorageManager = require("./StorageManager");
const PhoneManager = require("./PhoneManager");

models.item = new ItemManager();
models.user = new UserManager();
models.memory = new MemoryManager();
models.brand = new BrandManager();
models.model = new ModelManager();
models.category = new CategoryManager();
models.color = new ColorManager();
models.network = new NetworkManager();
models.os = new OsManager();
models.screensize = new ScreensizeManager();
models.state = new StateManager();
models.storage = new StorageManager();
models.phone = new PhoneManager();

models.item.setDatabase(pool);
models.user.setDatabase(pool);
models.memory.setDatabase(pool);
models.brand.setDatabase(pool);
models.model.setDatabase(pool);
models.category.setDatabase(pool);
models.color.setDatabase(pool);
models.network.setDatabase(pool);
models.os.setDatabase(pool);
models.screensize.setDatabase(pool);
models.state.setDatabase(pool);
models.storage.setDatabase(pool);
models.phone.setDatabase(pool);

// bonus: use a proxy to personalize error message,
// when asking for a non existing model

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};

module.exports = new Proxy(models, handler);
