const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  find(categoryId) {
    return this.database.query(
      `
      SELECT *
      FROM category
      WHERE category.id = ?
    `,
      [categoryId]
    );
  }

  findAll() {
    return this.database.query(`SELECT *
    FROM ${this.table}`);
  }

  insert(category) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      category.title,
    ]);
  }

  update(category) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [category.title, category.id]
    );
  }
}

module.exports = CategoryManager;
