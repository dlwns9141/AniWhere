const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    place: {type:String, default: '' },
    movie: { type: String, default: '' },
    outline: { type: String, default: '' },
    content: { type:String, default:'' },
    latitude: { type:Number, default: 0.0},
    longitude: { type:Number, default: 0.0},
    courseID: {type:Array}

})

const Place = mongoose.model('placeInfo', placeSchema)
mongoose.model('placeInfo', placeSchema)
mongoose.set('useCreateIndex', true);
module.exports = Place