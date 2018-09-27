var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    
	name: {type: String, required: true, min: 3, max: 100},
	
	//book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }, //reference to the associated book
    //imprint: {type: String, required: true},
    //status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
    //due_back: {type: Date, default: Date.now}
  }
);

// Virtual for genre URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('genre', GenreSchema);