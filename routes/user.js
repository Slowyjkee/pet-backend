import express from 'express'
import {
    checkStatus, followUser, getAllUsers,
    getCurrentUser, getUser,
    RouteProtect,
    signin,
    signup,
    singin, unfollowUser,
    updateCurrentUser, updateUserAvatar, updateUserBackground
} from "../controllers/user";
import {uploadImage} from "../utils/upload";
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/status', RouteProtect,  checkStatus);
router.get('/current', RouteProtect,  getCurrentUser);
router.patch('/updateCurrentUser', RouteProtect, updateCurrentUser);
router.patch('/updateAvatar', RouteProtect, uploadImage('avatar'), updateUserAvatar);
router.patch('/updateBackground', RouteProtect, uploadImage('background'), updateUserBackground);
router.patch('/updateBackground', RouteProtect, uploadImage('background'), updateUserBackground);
router.post('/follow/:id', RouteProtect, followUser);
router.delete('/unfollow/:id', RouteProtect, unfollowUser);

router
    .route('/')
    .get(getAllUsers);

router
    .route('/:id')
    .get(getUser)
module.exports = router;

