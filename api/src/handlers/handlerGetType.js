const getTypes = require('../controllers/getTypesPokemons');


const handlerType= async(req, res)=>{
    try {
        const type = await getTypes();
        res.status(200).json(type)
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
};

module.exports = handlerType;