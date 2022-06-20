const Mongoose = require("mongoose");

const db = Mongoose.connection;

db.once("open", () => {
    console.log("DB Bağlantısı başarılı !");
})
const localUri = 'mongodb://localhost:27017/sensorsDB';
const uri = 'mongodb+srv://sensorproje:sensorproje_1234@sensor.hq3l0.mongodb.net/?retryWrites=true&w=majority';
const connectedDB = async () => {
  await Mongoose.connect( localUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    family: 4,
  });
}

module.exports = {
    connectedDB,
}