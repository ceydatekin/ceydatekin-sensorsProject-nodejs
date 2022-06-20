const mongoose = require('mongoose');
const sensorSchema = mongoose.Schema;

const SensorSchema = new sensorSchema({
    type : String,
    locationX: Number,
    locationY : Number,
    measuringRange : Number,
    originId : {
        type : mongoose.Types.ObjectId,
        ref : "origin"
    },
    records : {
        type: Array
    }
})

module.exports = mongoose.model('sensors', SensorSchema);