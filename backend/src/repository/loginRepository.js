import { db } from '../data/connection';

export const loginRepository = {
  async getByUsername(username) {
    const SQL = `SELECT * FROM users WHERE username = (?) AND status = 'active';`;
    try{
      return await db.query(SQL, [username])
    } catch (error) {
      console.log(error);
      throw { statusCode: 500, message: error.sqlMessage };
    }
  }
}