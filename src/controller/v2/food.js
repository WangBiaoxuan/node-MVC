class Food {
  constructor(){

  }
  foodList(req, res, next) {
    res.send({
      code: 200,
      name: 'food list',
      message: '获取数据',
    });
  }
  async foodInfo(req, res, next) {
    res.send({
      code: 200,
      list: 'food info',
      message: '获取数据失败',
    });
  }
}
export default new Food()