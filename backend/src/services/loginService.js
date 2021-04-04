import { loginRepository } from '../repository';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

export const loginService = {
  async loginChecker(req) {
    const { username, password } = req.body;
    if (username && password) {
      try {
        const { results } = await loginRepository.getByUsername(username);
        
        if (results.length === 0) {
          throw { message: 'Username or password incorrect.', statusCode: 400 };
        }
        const validPassword = bcrypt.compareSync(password, results[0].password);

        if (!validPassword) {
          throw { message: 'Username or password incorrect.', statusCode: 400 };
        }
        const payload = {
          userId: results[0].user_id,
          username: results[0].username,
        };
        const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET || 'jwtsecret');
        const returnObject = {
          userId: results[0].user_id,
          username: results[0].username,
          wallet: results[0].wallet,
          token,
        };
        return returnObject;
      } catch (error) {
        console.log(error);
        throw { statusCode: error.statusCode, message: error.message };
      }
    } else {
      res.status(400).json({ message: 'All fields are required.' });
    }
  },
};
