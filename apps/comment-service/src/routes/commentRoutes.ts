import express from 'express';

const commentRouter = express.Router();
const commentController = require('../controllers/commentController');


commentRouter.get('/', commentController.getAllUsers);


commentRouter.post('/', commentController.createUser);


commentRouter.get('/:userId', commentController.getUserById);


commentRouter.put('/:userId', commentController.updateUser);


commentRouter.delete('/:userId', commentController.deleteUser);

export default commentRouter;
