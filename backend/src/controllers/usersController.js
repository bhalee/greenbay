import { usersService } from '../services/';

export const usersController = {
  async post (req, res) {
    try{
      const response = await usersService.postUser(req.body);
      res.status(201).json(response);
    }catch(error) {
      console.log(error);
      res.status(error.statusCode).json({ message: error.message });
    }
  }
}