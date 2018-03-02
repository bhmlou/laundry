var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FavoriteColorSchema = new Schema({
    userName : String,
    favoriteColor: String,
}, {strict: true});

module.exports = mongoose.model('favoriteColor', FavoriteColorSchema );
