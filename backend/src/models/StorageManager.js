const AbstractManager = require("./AbstractManager");

class StorageManager extends AbstractManager {
  constructor() {
    super({ table: "storage" });
  }

  find(storageId) {
    return this.database.query(
      `
      SELECT *
      FROM storage
      WHERE storage.id = ?
    `,
      [storageId]
    );
  }

  findAll() {
    return this.database.query(`SELECT *
    FROM ${this.table}`);
  }

  insert(storage) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      storage.title,
    ]);
  }

  update(storage) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [storage.title, storage.id]
    );
  }
}

module.exports = StorageManager;
