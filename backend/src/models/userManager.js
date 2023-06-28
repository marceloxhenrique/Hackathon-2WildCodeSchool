const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  find(userId) {
    return this.database.query(
      `
      SELECT *
      FROM user
      WHERE user.id = ?
    `,
      [userId]
    );
  }

  findByEmailWithPassword(email) {
    return this.database.query(
      `SELECT * FROM ${this.table} 
      WHERE email = ?`,
      [email]
    );
  }

  findAll() {
    return this.database.query(`SELECT *
    FROM ${this.table}`);
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (fullname, email, phone, city, hashedPassword, admin) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        user.fullname,
        user.email,
        user.phone,
        user.city,
        user.hashedPassword,
        user.admin,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `UPDATE ${this.table} set fullname = ?, email = ?, phone = ?, city = ?, hashedPassword = ?, admin = ?  where id = ${user.id}`,
      [
        user.fullname,
        user.email,
        user.phone,
        user.city,
        user.hashedPassword,
        user.admin,
      ]
    );
  }
}

module.exports = UserManager;
