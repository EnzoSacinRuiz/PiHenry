const {Team} = require("../db")
const getAllteams = async()=> {
    return await Team.findAll()
}

const createTeamBD= async(name)=>{
    return await Team.create({name});
}

module.exports= getAllteams,createTeamBD