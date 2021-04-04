import { loginService } from '../services';

export const loginController = {
  async post(req, res) {
    try {
      const validate = await loginService.loginChecker(req);
      if (validate !== 0) {
        res.status(201).json({ accesToken: validate });
      }
    } catch (error) {
      console.log(error);
      res.status(error.statusCode).json({ message: error.message });
    }
  },
};
