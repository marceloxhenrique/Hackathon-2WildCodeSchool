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
    return this.database.query(
      `insert into ${this.table} (memory) values (?)`,
      [memory.memory]
    );
  }

  update(memory) {
    return this.database.query(
      `update ${this.table} set memory = ? where id = ?`,
      [memory.memory, memory.id]
    );
  }
}

module.exports = MemoryManager;
