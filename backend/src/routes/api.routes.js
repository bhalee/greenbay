import express from 'express';
import { usersController, loginController, itemsController, buyingController } from '../controllers';
import { authMiddleware } from '../middlewares/authMiddleware';
import cors from 'cors';
const router = express.Router();
router.use(cors());
router.use(express.json());

router.post('/users', usersController.post);
router.post('/login', loginController.post);
router.use(authMiddleware.validate);
router.get('/items', itemsController.get);
router.get('/items/:id', itemsController.getById);
router.post('/items', itemsController.post);
router.post('/buying', buyingController.post);



export default router;
