var mongoose = require( 'mongoose');

var StudentSchema = new mongoose.Schema({
	name: {type :String, required: true},
	emailid:{type :String,unique:true, required: true},
	data: {
		profile_pic: {type : String, required: true},
		quote : {type: String, required: true}
	}
})

var CommentSchema =New mongoose.Schema({
	from: {
    type: Schema.Types.ObjectId,
    ref: "Student"
  } 
  hashtag:[{
  	type: String
  }]
  review:{
  	type: String
  }
  to:{
  	type: Schema.Types.ObjectId,
    ref: "Student"
  }
})