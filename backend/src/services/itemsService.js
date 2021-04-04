import { itemsRepository } from '../repository';
import { validate } from '../utils/validate';
import { verifyImageURL } from 'verify-image-url';

export const itemsService = {
  getItems() {
    return itemsRepository.getItems();
  },

  getItemById(itemId) {
    return itemsRepository.getItemsById(itemId);
  },

  async postItem(req) {
    const { name, description, photoUrl, price } = req.body;
    const { userId } = req.headers;
    if (name && description && photoUrl && price && userId) {
      try {
        validate.valideNumber(price);
        if (!(await verifyImageURL(photoUrl)).isImage) {
          throw { statusCode: 400, message: 'Invalid image url.' };
        }
        const createItem = await itemsRepository.createItem(userId, name, description, photoUrl, price);
        return await itemsRepository.getItemsById(createItem);
      } catch (error) {
        throw error;
      }
    } else {
      throw { statusCode: 400, message: 'All fields are required.' };
    }
  },
};
