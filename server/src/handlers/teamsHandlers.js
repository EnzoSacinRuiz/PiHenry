const getAllteams = require('../controllers/teamsControllers')
const createTeamBD = require('../controllers/teamsControllers')

const getTeamsHandlers= async (req,res)=>{
    try {
        const response = await getAllteams()
        res.status(200).json(response)
        
    } catch (error) {
        res.status(400).json({error:error.message}) 
    
    }
}

const postTeamsHandlers= async (req,res)=>{
    const {name} = req.body
    try {
        const response = await createTeamBD(name)
        res.status(200).json(response)
        
        
    } catch (error) {
        res.status(400).json({error:error.message})        
    }
}



module.exports=getTeamsHandlers,postTeamsHandlers;