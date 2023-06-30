const AbstractManager = require("./AbstractManager");

class PhoneManager extends AbstractManager {
  constructor() {
    super({ table: "phone" });
  }

  find(phoneId) {
    return this.database.query(
      `
      SELECT phone.id, user_id, phone.charger, os.id, os.os, os.version, brand.id, brand.brand, model.id, model.model, model.indice, color.id, color.color, memory.id, memory.memory, memory.val_m, storage.id, storage.storage, storage.val_s, state.id, state.state, state.ponderation, category.id, category.category, category.val_min, category.val_max, network.id, network.network, screen_size.id, screen_size.size
      FROM phone
      INNER JOIN user ON phone.user_id = user.id
      INNER JOIN os ON phone.os_id = os.id
      INNER JOIN brand ON phone.brand_id = brand.id
      INNER JOIN model ON phone.model_id = model.id
      INNER JOIN color ON phone.color_id = color.id
      INNER JOIN memory ON phone.memory_id = memory.id
      INNER JOIN storage ON phone.storage_id = storage.id
      INNER JOIN state ON phone.state_id = state.id
      INNER JOIN category ON phone.category_id = category.id
      INNER JOIN network ON phone.network_id = network.id
      INNER JOIN screen_size ON phone.screen_size_id = screen_size.id
      WHERE phone.id = ?
    `,
      [phoneId]
    );
  }

  findPhoneByUserId(userId) {
    return this.database.query(
      `
      SELECT phone.id, user_id, phone.charger, os.id, os.os, os.version, brand.id, brand.brand, model.id, model.model, model.indice, color.id, color.color, memory.id, memory.memory, memory.val_m, storage.id, storage.storage, storage.val_s, state.id, state.state, state.ponderation, category.id, category.category, category.val_min, category.val_max, network.id, network.network, screen_size.id, screen_size.size
      FROM phone
      INNER JOIN user ON phone.user_id = user.id
      INNER JOIN os ON phone.os_id = os.id
      INNER JOIN brand ON phone.brand_id = brand.id
      INNER JOIN model ON phone.model_id = model.id
      INNER JOIN color ON phone.color_id = color.id
      INNER JOIN memory ON phone.memory_id = memory.id
      INNER JOIN storage ON phone.storage_id = storage.id
      INNER JOIN state ON phone.state_id = state.id
      INNER JOIN category ON phone.category_id = category.id
      INNER JOIN network ON phone.network_id = network.id
      INNER JOIN screen_size ON phone.screen_size_id = screen_size.id
      WHERE phone.id = ?
      `,
      [userId]
    );
  }

  findAll() {
    return this.database.query(`
      SELECT phone.id, phone.user_id, phone.charger, os.id, os.os, os.version, brand.id, brand.brand, model.id, model.model, model.indice, color.id, color.color, memory.id, memory.memory, memory.val_m, storage.id, storage.storage, storage.val_s, state.id, state.state, state.ponderation, category.id, category.category, category.val_min, category.val_max, network.id, network.network, screen_size.id, screen_size.size
      FROM ${this.table}
      INNER JOIN user ON phone.user_id = user.id
      INNER JOIN os ON phone.os_id = os.id
      INNER JOIN brand ON phone.brand_id = brand.id
      INNER JOIN model ON phone.model_id = model.id
      INNER JOIN color ON phone.color_id = color.id
      INNER JOIN memory ON phone.memory_id = memory.id
      INNER JOIN storage ON phone.storage_id = storage.id
      INNER JOIN state ON phone.state_id = state.id
      INNER JOIN category ON phone.category_id = category.id
      INNER JOIN network ON phone.network_id = network.id
      INNER JOIN screen_size ON phone.screen_size_id = screen_size.id
    `);
  }

  insert(phone) {
    return this.database.query(
      `
      INSERT INTO phone (os_id, brand_id, model_id, color_id, memory_id, storage_id, state_id, category_id, charger, network_id, screen_size_id, user_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
      [
        phone.os_id,
        phone.brand_id,
        phone.model_id,
        phone.color_id,
        phone.memory_id,
        phone.storage_id,
        phone.state_id,
        phone.category_id,
        phone.charger,
        phone.network_id,
        phone.screen_size_id,
        phone.user_id,
      ]
    );
  }

  update(phone) {
    return this.database.query(
      `
      UPDATE ${this.table} SET os_id = ?, brand_id = ?, model_id = ?, color_id = ?, memory_id = ?, storage_id = ?, state_id = ?, category_id = ?, charger = ?, network_id = ?, screen_size_id = ?
      WHERE id = ?
    `,
      [
        phone.os_id,
        phone.brand_id,
        phone.model_id,
        phone.color_id,
        phone.memory_id,
        phone.storage_id,
        phone.state_id,
        phone.category_id,
        phone.charger,
        phone.network_id,
        phone.screen_size_id,
        phone.id,
      ]
    );
  }

  delete(phoneId) {
    return this.database.query(`DELETE FROM phone WHERE id = ?`, [phoneId]);
  }
}

module.exports = PhoneManager;
