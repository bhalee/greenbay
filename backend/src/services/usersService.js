import { usersRepository } from '../repository';
import * as bcrypt from 'bcryptjs';
import { validate } from '../utils/validate';
const salt = bcrypt.genSaltSync(10);
export const usersService = {
  async postUser({ username, password }) {
    validate.registration(username, password);
    try {
      const encryptedPass = bcrypt.hashSync(password, salt);
      return await usersRepository.createUser(username, encryptedPass);
    } catch (error) {
      if (error.message === `Duplicate entry '${username}' for key 'users.username'`) {
        throw { statusCode: 400, message: 'Username already exist' };
      }
      throw error;
    }
  },
};