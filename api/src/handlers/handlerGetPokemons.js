const getPokemons = require('../controllers/getPokemons')



const handlerGetPokemons= async(req, res) =>{
    try {
     
        const pokemon= await getPokemons();
        res.status(200).json(pokemon)
        
    } catch (error) {
        res.status(404).json({error: error.message})
        
    }
    }
    module.exports=  handlerGetPokemons;
