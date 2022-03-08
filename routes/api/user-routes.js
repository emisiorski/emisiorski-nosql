const router = require('express').Router();
const { getAllUsers, getUserById, createUser, updateUser, removeUser, addFriend, removeFriend } = require('../../controllers/user-controller');

// Routes for User Model interactions
router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getUserById).put(updateUser).delete(removeUser);

router.route('/:userId/friends').post(addFriend);

router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;