
import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const userSchema = new Schema({
	user_id: Number,
	username: String,
	password: String,
})

userSchema.index({ user_id: 1 });

userSchema.statics.initData = async function (user_id, username){
	try{
		const data = await this.findOne({user_id});
		if (!data) {
			const newUser = {
				user_id: user_id,
				username: username,
				password: 'admin',
			}
			await this.create(newUser);
			return true
		}else{
			return false
		}
	}catch(err){
		console.log('初始化用户数据失败');
		throw new Error(err)
	}
}

const User = mongoose.model('User', userSchema);


User.findOne((err, data) => {
	if (!data) {
		User.create({ user: 'admin', password: 'admin'});
	}
})

export default User