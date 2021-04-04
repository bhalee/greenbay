import jwt from 'jsonwebtoken';
import config from '../config';

export const authMiddleware = {
  validate(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(401).json({ message: 'Invalid or missing token!' });
      return;
    }
    const token = authHeader.split(' ')[1];
    try {
      const verifiedPayload = jwt.verify(token, config.jwtsecret || 'theSecretKey');
      req.headers.username = verifiedPayload.username;
      req.headers.userId = verifiedPayload.userId;
      req.headers.wallet = verifiedPayload.wallet
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: error.message });
    }
  },
};
