import { itemsRepository, usersRepository } from '../repository';

export const buyingServices = {
  async buyItem(req) {
    const { userId } = req.headers;
    const { itemId } = req.body;
    if (userId && itemId) {
      try {
        const item = await itemsRepository.getItemsById(itemId);
        if (item.length === 0) {
          throw { statusCode: 400, message: 'This item is not available.' };
        }
        
        await usersRepository.walletReduction(userId, item[0].price);
        await usersRepository.walletIncrement(item[0].owner_id, item[0].price);
        await itemsRepository.sellItem(itemId);
      } catch (error) {
        console.log(error);
        throw error;
      }
    } else {
      throw { statusCode: 400, message: 'Required data missing' };
    }
  },
};
