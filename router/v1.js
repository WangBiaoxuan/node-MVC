import express from 'express';
const router = express.Router();
import UserController from '../controller/v1/user';

router.use(()=> { console.log('time')})
router.get('/login', UserController.login)
router.get('/logOut', UserController.logOut)

export default router