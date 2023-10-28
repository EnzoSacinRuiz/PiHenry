const express = require("express");
const mainRouter = require("./routes/mainRouter");
const teamsRouter = require("./routes/teamsRouter")
const morgan = require("morgan");
const cors = require("cors");

//Acá creas el servidor
const server = express();

//Middleware
server.use(morgan("dev"));

server.use(express.json());
server.use(cors());

server.use(mainRouter);
//server.use(teamsRouter);

//Endpoint prueba
// server.get("/", (req,res)=>{
//     res.status(200).send("llegue al endpoint")

// })











module.exports = server;
