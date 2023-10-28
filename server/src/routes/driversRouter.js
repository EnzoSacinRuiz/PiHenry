const { Router } = require("express");

const driversRouter = Router();
const {
    getDriversHandler, 
    getDetailHandler, 
    postDriversHandler}
    =require("../handlers/driversHandler")



driversRouter.get("/",getDriversHandler)
driversRouter.get("/:id",getDetailHandler)
driversRouter.post("/",postDriversHandler)

module.exports=driversRouter;