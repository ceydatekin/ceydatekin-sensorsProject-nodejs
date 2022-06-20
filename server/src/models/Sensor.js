const mongoose = require('mongoose');
const sensorSchema = mongoose.Schema;

const SensorSchema = new sensorSchema({
    type : String,
    locationX: Number,
    locationY : Number,
    measuringRange : Number,
    originId : {
        type : Mongoose.Types.ObjectId,
        ref : "origin"
    },
    records : {
        type: Array
    }
})

module.exports('sensors', SensorSchema);