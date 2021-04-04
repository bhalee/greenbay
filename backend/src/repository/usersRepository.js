import { db } from '../data/connection';

export const usersRepository = {
  async createUser(username, password) {
    const SQL = 'INSERT INTO users (username, password) VALUES (?,?);';
    try {
      await db.query(SQL, [username, password]);
      return { message: 'You have been succesfully registered.' };
    } catch (error) {
      throw { statusCode: 500, message: error.sqlMessage };
    }
  },

  async walletReduction(userId, amount) {
    const SQL = `UPDATE users SET wallet = wallet - ${amount} WHERE user_id = (?);`;
    try {
      return await db.query(SQL, [userId, amount]);
    } catch (error) {
      throw { statusCode: 500, message: error.sqlMessage };
    }
  },

  async walletIncrement(userId, amount) {
    const SQL = `UPDATE users SET wallet = wallet + ${amount} WHERE user_id = (?);`;
    try {
      return await db.query(SQL, [userId, amount]);
    } catch (error) {
      throw { statusCode: 500, message: error.sqlMessage };
    }
  },
};
