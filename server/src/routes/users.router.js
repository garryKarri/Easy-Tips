const { Router } = require('express');
const usersController = require('../controllers/users.controller');
const checkAuth = require('../middleware/checkAuth');
const checkAuthor = require('../middleware/checkAuthor');

const usersRouter = Router();
//      /users
usersRouter.get('/', checkAuth, usersController.getAllUsers);
usersRouter.route('/:id')
  .patch(checkAuth, checkAuthor, usersController.editUser)
  .get(usersController.getOneUser);
usersRouter.get('/check', usersController.getUser);

module.exports = usersRouter;
