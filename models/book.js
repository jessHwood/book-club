var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BookSchema = new Schema({
     title: String,
     author: String,
     image: String,
     description: String,
});

var Book = mongoose.model('Book', BookSchema);
module.exports = Book;