const AbstractManager = require("./AbstractManager");

class MemoryManager extends AbstractManager {
  constructor() {
    super({ table: "memory" });
  }

  find(memoryId) {
    return this.database.query(
      `
      SELECT *
      FROM memory
      WHERE memory.id = ?
    `,
      [memoryId]
    );
  }

  findAll() {
    return this.database.query(`SELECT *
    FROM ${this.table}`);
  }

  insert(memory) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      memory.title,
    ]);
  }

  update(memory) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [memory.title, memory.id]
    );
  }
}

module.exports = MemoryManager;
