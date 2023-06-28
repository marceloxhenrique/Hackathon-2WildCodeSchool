const AbstractManager = require("./AbstractManager");

class ColorManager extends AbstractManager {
  constructor() {
    super({ table: "color" });
  }

  find(colorId) {
    return this.database.query(
      `
      SELECT *
      FROM color
      WHERE color.id = ?
    `,
      [colorId]
    );
  }

  findAll() {
    return this.database.query(`SELECT *
    FROM ${this.table}`);
  }

  insert(color) {
    return this.database.query(`insert into ${this.table} (color) values (?)`, [
      color.color,
    ]);
  }

  update(color) {
    return this.database.query(
      `update ${this.table} set color = ? where id = ?`,
      [color.color, color.id]
    );
  }
}

module.exports = ColorManager;
