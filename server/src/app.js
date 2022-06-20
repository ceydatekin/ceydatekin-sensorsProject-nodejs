const express = require('express');
const config = require("./config");
const loaders = require("./loaders");
//const socket = require("socket.io");
const app = express();

config();
loaders();

app.get('/', (req, res) => {

  const photo = {
    id: 1,
    name: "Photo Name",
    description: "Photo description"
  }
  res.send(photo)
});



const port = 3000;
const server = app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});



// const io = socket(server, {
//   cors : {
//       origin : "*",
//       methods : ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
//   }
// });

// io.on('connection', (socket) => {
//   console.log("New user ID : ", socket.id);


//   //for socket test
//   socket.on("msg", (arg) => {
//       console.log(arg); // world
//   });
  
//   SensorModel.watch().on('change', (change) => {
//       const dataString = JSON.stringify(change);
//       const dataObject = JSON.parse(dataString);

//       if (dataObject.operationType == "insert") {
//           socket.emit("added-sensor", dataObject.fullDocument);
//       }
//       if (dataObject.updateDescription) {
//           // console.log("databu :", dataObject.updateDescription.updatedFields.records);
//           // socket.emit("changed-sensor", dataObject.updateDescription.updatedFields.logs);
//           socket.emit("added-record", dataObject);
//       }
//   });
// });