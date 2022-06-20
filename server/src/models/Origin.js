const mongoose = require('mongoose');
const originSchema = mongoose.Schema;



const OriginSchema = new originSchema({
    title : String,
    description : String,
    locationX: Number, 
    locationY : Number,
    radius : Number
})

module.exports = mongoose.model('origin', OriginSchema);