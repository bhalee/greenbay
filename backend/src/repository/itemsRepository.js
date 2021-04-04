import { db } from '../data/connection';

export const itemsRepository = {
  async createItem(ownerId, name, description, photoUrl, price) {
    const SQL = `INSERT INTO items (owner_id, name, description, photo_url, price) VALUES (?,?,?,?,?);`;
    try {
      const data = await db.query(SQL, [ownerId, name, description, photoUrl, price]);
      return data.results.insertId;
    } catch (error) {
      console.log(error);
      throw { statusCode: 500, message: error.sqlMessage };
    }
  },

  async getItems() {
    const SQL = `SELECT items.item_id, items.owner_id, items.name, items.description, items.photo_url, items.price, users.username
    FROM items
    INNER JOIN users
    on users.user_id = items.owner_id
    where items.status = 'active' AND users.status = 'active';`;
    try {
      const data = await db.query(SQL);
      return data.results;
    } catch (error) {
      throw { statusCode: 500, message: error.sqlMessage };
    }
  },

  async getItemsById(itemId) {
    const SQL = `SELECT items.item_id, items.owner_id, items.name, items.description, items.photo_url, items.price, users.username
    FROM items
    INNER JOIN users
    on users.user_id = items.owner_id
    where items.item_id = (?) AND items.status = 'active' AND users.status = 'active';`;
    try {
      const data = await db.query(SQL, [itemId]);
      return data.results;
    } catch (error) {
      throw { statusCode: 500, message: error.sqlMessage };
    }
  },

  async sellItem(itemId) {
    const SQL = `UPDATE items SET status = 'sold' WHERE item_id = (?);`;
    try {
      const data = await db.query(SQL, [itemId]);
      return data;
    } catch (error) {
      throw { statusCode: 500, message: error.sqlMessage };
    }
  },
};
