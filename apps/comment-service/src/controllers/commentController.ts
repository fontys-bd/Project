// import commentService from '../services/commentService';

// exports.getAllUsers = async (req: any, res: any) => {
//   const users = await commentService.getAllUsers();
//   res.json(users);
// };

// exports.createUser = async (req: any, res: any) => {
//   const user = await commentService.createUser(req.body);
//   res.status(201).json(user);
// };

// exports.getUserById = async (req: any, res: any) => {
//   const user = await commentService.getUserById(req.params.userId);
//   if (!user) {
//     res.status(404).send('User not found');
//   } else {
//     res.json(user);
//   }
// };

// exports.updateUser = async (req: any, res: any) => {
//   const updatedUser = await commentService.updateUser(req.params.userId, req.body);
//   if (!updatedUser) {
//     res.status(404).send('User not found');
//   } else {
//     res.json(updatedUser);
//   }
// };

// exports.deleteUser = async (req: any, res: any) => {
//   const deletedUser = await commentService.deleteUser(req.params.userId);
//   if (!deletedUser) {
//     res.status(404).send('User not found');
//   } else {
//     res.sendStatus(204);
//   }
// };
