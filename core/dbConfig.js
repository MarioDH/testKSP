const mongoose = require("mongoose");

const username = "marioDominguezAdmin";
const password = "AkFFZT95o8Amm9z3";
const dbname = "db_ksp";

const dbConnect = () => {
    //const DB_URI = process.env.DB_URI;
    const urlBD =  `mongodb+srv://${username}:${password}@cluster0.rmncpeg.mongodb.net/${dbname}?retryWrites=true&w=majority`;
    mongoose.connect( urlBD , {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
}

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error de Conexión: "));
db.once("open", function () {
  console.log("Conexión exitosa");
});

module.exports = dbConnect