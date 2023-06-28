const AbstractManager = require("./AbstractManager");

class BrandManager extends AbstractManager {
  constructor() {
    super({ table: "brand" });
  }

  find(brandId) {
    return this.database.query(
      `
      SELECT *
      FROM brand
      WHERE brand.id = ?
    `,
      [brandId]
    );
  }

  findAll() {
    return this.database.query(`SELECT *
    FROM ${this.table}`);
  }

  insert(brand) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      brand.title,
    ]);
  }

  update(brand) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [brand.title, brand.id]
    );
  }
}

module.exports = BrandManager;
