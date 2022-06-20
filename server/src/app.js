const express = require('express');
const config = require("./config");
const loaders = require("./loaders");
const helmet = require("helmet");
const cors = require("cors");
//const socket = require("socket.io");
const app = express();

const SensorModel = require('../src/models/Sensor');

const { MainPointRoutes, SensorRoutes} = require("./routes");

config();
loaders();

app.use(cors());
app.use(express.json());
app.use(helmet());

// app.get('/', (req, res) => {

//   const photo = {
//     id: 1,
//     name: "Photo Name",
//     description: "Photo description"
//   }
//   res.send(photo)
// });



const port = 3000;
const server = app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
    app.use("/mainpoints", MainPointRoutes);
    app.use("/sensors", SensorRoutes);
    app.use((req, res, next) => {
        const error = new Error("Aradığınız sayfa bulunamadı");
        error.status = 404;
        next(error);
        
    })
    
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