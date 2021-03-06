const { Router } = require('express');
const authController = require('../controllers/auth.controller');
const checkAuth = require('../middleware/checkAuth');

const authRouter = Router();

// /auth/
authRouter.post('/signup', authController.signUp);
authRouter.post('/signin', authController.signIn);
authRouter.get('/signout', authController.signOut);
authRouter.get('/check', checkAuth, authController.checkAuth);

module.exports = authRouter;
