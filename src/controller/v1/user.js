import BaseComponent from './../../base/baseComponent';
import UserModel from '../../models/v1/user'

class User extends BaseComponent{
  constructor() {
    super()
  }

  create(req, res, next) {
    const randomNumber = Math.floor(Math.random() * 10000)
    const newObj = {
      username: 'admin' + randomNumber,
      password: 'password' + randomNumber,
    }
    UserModel.create(newObj, (err, data) => {
      res.send({
        err: err,
        data: data,
      })
    });
  }

  async createAsync(req, res, next) {
    const randomNumber = Math.floor(Math.random() * 10000)
    const newObj = {
      username: 'admin' + randomNumber,
      password: 'password' + randomNumber,
    }
    try {
      const data = await UserModel.create(newObj);
      res.send({
        data: data,
      })
    } catch(err) {
      console.log('创建用户数据失败', err);
      res.send({
        err: err,
      })
    }
  }

  userList(req, res, next) {
    UserModel.find({}, { 'createTime': true, 'username': true, 'password': true }, (err, data) => {
      res.send({
        err: err,
        userList: data,
      })
    })
  }

  userDetail(req, res, next) {
    UserModel.find({username: req.params.name}, (err, data) => {
      res.send({
        err: err,
        data: data,
      })
    })
  }

  userDelete(req, res, next) {
    UserModel.remove({username: req.params.name}, (err, data) => {
      res.send({
        err: err,
        data: data,
      })
    })
  }
}
export default new User()