const AbstractManager = require("./AbstractManager");

class StateManager extends AbstractManager {
  constructor() {
    super({ table: "state" });
  }

  find(stateId) {
    return this.database.query(
      `
      SELECT *
      FROM state
      WHERE state.id = ?
    `,
      [stateId]
    );
  }

  findAll() {
    return this.database.query(`SELECT *
    FROM ${this.table}`);
  }

  insert(state) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      state.title,
    ]);
  }

  update(state) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [state.title, state.id]
    );
  }
}

module.exports = StateManager;
