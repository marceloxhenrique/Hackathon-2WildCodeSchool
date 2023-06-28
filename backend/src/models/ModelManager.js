const AbstractManager = require("./AbstractManager");

class ModelManager extends AbstractManager {
  constructor() {
    super({ table: "model" });
  }

  find(modelId) {
    return this.database.query(
      `
      SELECT *
      FROM model
      WHERE model.id = ?
    `,
      [modelId]
    );
  }

  findAll() {
    return this.database.query(`SELECT *
    FROM ${this.table}`);
  }

  insert(model) {
    return this.database.query(`insert into ${this.table} (model) values (?)`, [
      model.model,
    ]);
  }

  update(model) {
    return this.database.query(
      `update ${this.table} set model = ? where id = ?`,
      [model.model, model.id]
    );
  }
}

module.exports = ModelManager;
