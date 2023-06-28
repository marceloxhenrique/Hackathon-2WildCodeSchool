const AbstractManager = require("./AbstractManager");

class NetworkManager extends AbstractManager {
  constructor() {
    super({ table: "network" });
  }

  find(networkId) {
    return this.database.query(
      `
      SELECT *
      FROM network
      WHERE network.id = ?
    `,
      [networkId]
    );
  }

  findAll() {
    return this.database.query(`SELECT *
    FROM ${this.table}`);
  }

  insert(network) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      network.title,
    ]);
  }

  update(network) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [network.title, network.id]
    );
  }
}

module.exports = NetworkManager;
