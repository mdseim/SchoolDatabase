const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const StudentSchema = new mongoose.Schema({
	firstName: {type:String, trim:true, default:''}, // 'bob', 'bob ', ' bob'
	lastName: {type:String, trim:true, default:''},
	age: {type:Number, default:0},
	school: {type: String, required: true },
	grade: {type:String, trim:true, default:''},
	address: {type:String, trim:true, default:''},
	city: {type:String, trim:true, default:''},
	state: {type:String, trim:true, default:''},
	phone: {type:Number, default:1112223333}
})

StudentSchema
  .virtual('url')
  .get(function() {
	  return '/api/student/' + this._id;
  });

StudentSchema
.virtual('name')
.get(function () {
  return this.lastName + ', ' + this.lastName;
});

module.exports = mongoose.model('Student', StudentSchema)

