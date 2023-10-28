const infoCleaner = (arr) => 
    arr.map((driver)=> {
            return {
                id: driver.id,
                name: driver.name.forename,
                lastName:driver.name.surname ,
                description: driver.description,
                image: driver.image.url,
                nationality: driver.nationality,
                birthDate: driver.dob,
                created:false
            }
        });

module.exports = infoCleaner;