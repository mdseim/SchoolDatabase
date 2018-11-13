const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const SchoolSchema = new mongoose.Schema({
	name: {type:String, trim:true, default:''}, // 'bob', 'bob ', ' bob'
	address: {type:String, default:''},
	city: {type:String, trim:true, default:''},
	state: {type:String, trim:true, default:''},
})

SchoolSchema
  .virtual('url')
  .get(function() {
	  return '/api/school/' + this._id;
  });

module.exports = mongoose.model('School', SchoolSchema)

