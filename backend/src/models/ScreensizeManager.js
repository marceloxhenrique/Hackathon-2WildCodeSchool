const AbstractManager = require("./AbstractManager");

class ScreensizeManager extends AbstractManager {
  constructor() {
    super({ table: "screen_size" });
  }

  find(screensizeId) {
    return this.database.query(
      `
      SELECT *
      FROM screensize
      WHERE screensize.id = ?
    `,
      [screensizeId]
    );
  }

  findAll() {
    return this.database.query(`SELECT *
    FROM ${this.table}`);
  }

  insert(screensize) {
    return this.database.query(
      `insert into ${this.table} (screen_size) values (?)`,
      [screensize.screen_size]
    );
  }

  update(screensize) {
    return this.database.query(
      `update ${this.table} set screen_size = ? where id = ?`,
      [screensize.screen_size, screensize.id]
    );
  }
}

module.exports = ScreensizeManager;
