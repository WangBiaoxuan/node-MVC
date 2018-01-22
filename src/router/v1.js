import express from 'express';
const router = express.Router();
import UserController from '../controller/v1/user';

router.use((req, res, next)=> { next()})
//router.get('/login', UserController.login)
//router.get('/logOut', UserController.logOut)
router.get('/create', UserController.create)
router.get('/createAsync', UserController.createAsync)
router.get('/userList', UserController.userList)
router.get('/user/:name', UserController.userDetail)
router.get('/userDelete/:name', UserController.userDelete)

export default router