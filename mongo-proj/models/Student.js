const mongoose = require('mongoose')

const Student = new mongoose.Schema({
	firstName: {type:String, trim:true, default:''}, // 'bob', 'bob ', ' bob'
	lastName: {type:String, trim:true, default:''},
	age: {type:Number, default:0},
	school: {type:Schema.Types.ObjectId, trim:true, default:''},
	grade: {type:String, trim:true, default:''}
})

StudentSchema
  .virtual('url')
  .get(function() {
	  return '/api/student/' + this._id;
  });

module.exports = mongoose.model('Student', Student)

