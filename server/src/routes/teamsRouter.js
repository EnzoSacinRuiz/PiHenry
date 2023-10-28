const { Router } = require("express");
const teamsRouter = Router();
const getTeamsHandlers=require("../handlers/teamsHandlers")
const postTeamsHandlers=require("../handlers/teamsHandlers")





teamsRouter.get("/",getTeamsHandlers )
teamsRouter.post("/",postTeamsHandlers )

module.exports=teamsRouter;