const mongoose = require('mongoose');
const sensorSchema = mongoose.Schema;

const SensorSchema = new sensorSchema({
    type : String,
    locationX: Number,
    locationY : Number,
    reportInterval  : Number,
    origin_id : {
        type : mongoose.Types.ObjectId,
        ref : "origin"
    },
    records : {
        type: Array
    }
},{timestamps: true, versionKey: false});

module.exports = mongoose.model('sensors', SensorSchema);