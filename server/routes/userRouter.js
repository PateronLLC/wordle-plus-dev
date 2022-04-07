import authController from '../controllers/authController.js';
import userController from '../controllers/userController.js';
import express from 'express';

const userRouter = express.Router();

userRouter.post('/', userController.newUser, authController.authenticate, (req, res, next) => {
  return res.status(200).json(res.locals);
});

// router.get('/');

export default userRouter;
