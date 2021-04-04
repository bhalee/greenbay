import { buyingServices } from '../services';

export const buyingController = {
  async post(req, res) {
    try {
      await buyingServices.buyItem(req);
      res.status(201).json({ message: 'You bought this item' });
    } catch (error) {
      console.log(error);
      res.status(error.statusCode).json({ message: error.message });
    }
  },
};
