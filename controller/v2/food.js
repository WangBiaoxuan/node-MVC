class Food {
  constructor(){

  }
  foodList(req, res, next) {
    console.log(req)
    res.send({
      code: 200,
      name: 'food list',
      message: '获取数据',
    });
    console.log('111111')
  }
  async foodInfo(req, res, next) {
    res.send({
      code: 200,
      list: 'food info',
      message: '获取数据失败',
    });
    consle.log('333333')
  }
}
export default new Food()