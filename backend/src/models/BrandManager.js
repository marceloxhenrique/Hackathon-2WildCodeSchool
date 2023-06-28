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
    return this.database.query(`insert into ${this.table} (brand) values (?)`, [
      brand.brand,
    ]);
  }

  update(brand) {
    return this.database.query(
      `update ${this.table} set brand = ? where id = ?`,
      [brand.brand, brand.id]
    );
  }
}

module.exports = BrandManager;
