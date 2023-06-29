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
    return this.database.query(`insert into ${this.table} (state) values (?)`, [
      state.state,
    ]);
  }

  update(state) {
    return this.database.query(
      `update ${this.table} set state = ? where id = ?`,
      [state.state, state.id]
    );
  }
}

module.exports = StateManager;
