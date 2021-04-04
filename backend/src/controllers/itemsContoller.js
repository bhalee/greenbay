import { itemsService } from '../services';

export const itemsController = {
  async get(req, res) {
    try {
      const items = await itemsService.getItems();
      res.status(200).json(items);
    } catch (error) {
      console.log(error);
      res.status(error.statusCode).json({message: error.message});
    }
  },

  async getById(req, res){
    try {
      const item = await itemsService.getItemById(req.params.id)
      res.status(200).json(item)
    }catch(error){
      res.status(error.statusCode).json(error.message)
    }
  },

  async post(req, res) {
    try {
      const newItem = await itemsService.postItem(req);
      res.status(201).json(newItem);
    } catch (error) {
      console.log(error);
      res.status(error.statusCode).json({message: error.message});
    }
  },
};
