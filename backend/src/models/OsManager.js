const AbstractManager = require("./AbstractManager");

class OsManager extends AbstractManager {
  constructor() {
    super({ table: "os" });
  }

  find(osId) {
    return this.database.query(
      `
      SELECT *
      FROM os
      WHERE os.id = ?
    `,
      [osId]
    );
  }

  findAll() {
    return this.database.query(`SELECT *
    FROM ${this.table}`);
  }

  insert(os) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      os.title,
    ]);
  }

  update(os) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [os.title, os.id]
    );
  }
}

module.exports = OsManager;
