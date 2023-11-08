const {Driver} = require("../db")
const axios = require('axios');
const driver = require("../models/driver");
const infoCleaner = require('../utils/index')

const createDriverDB = async ( name , lastName , description , image , nationality , birthDate) => {
    return await Driver.create({name , lastName , description , image , nationality , birthDate})
     ;
};

const getDriverById = async(id,source) =>{

    const driver = 
        source === "api"
         ? (await axios.get(`http://localhost:5000/drivers/${id}`)).
            data
        : await Driver.findByPk(id)
    return driver;
}

const getAllDrivers = async() => {
    const driverDB = await Driver.findAll()
    
    const infoApi= (await axios.get("http://localhost:5000/drivers")).data
    const driverApi=infoCleaner(infoApi)

    return [...driverDB,...driverApi]
}

const getDriverByName = async (name) =>{
    const infoApi= (await axios.get("http://localhost:5000/drivers")).data
    const driverApi=infoCleaner(infoApi);

    const driversFiltered=driverApi.filter(driver=>driver.name===name)

    const driverBDD= await Driver.findAll({where: {name:name}});

    return[...driversFiltered,...driverBDD]        

}




module.exports={createDriverDB,getDriverById,getDriverByName,getAllDrivers}