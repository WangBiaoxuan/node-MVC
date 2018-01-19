import express from 'express';
const router = express.Router();
import FoodController from '../controller/v2/food';

router.use((req, res, next)=> {
  console.log('time')
  next() 
})
router.get('/food/list', FoodController.foodList)
router.get('/food/info', FoodController.foodInfo)
router.get('/food', (req, res, next) => {console.log('55555555')})

export default router