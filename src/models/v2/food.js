import mongoose from 'mongoose'
var x = 1;
const Schema = mongoose.Schema;

const foodSchema = new Schema({
	title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  }
})
foodSchema.methods.getWeight = function(cb) {
  return this.model('Food').find({ type: this.type }, cb);
}

foodSchema.index({item_id: 1});

const Food = mongoose.model('Food',   foodSchema);

export default Food;