const mongoose = require('mongoose')

const School = new mongoose.Schema({
	name: {type:String, trim:true, default:''}, // 'bob', 'bob ', ' bob'
	adress: {type:String, default:0},
	city: {type:String, trim:true, default:''},
	state: {type:String, trim:true, default:''},
})

StudentSchema
  .virtual('url')
  .get(function() {
	  return '/api/school/' + this._id;
  });

module.exports = mongoose.model('School', School)

