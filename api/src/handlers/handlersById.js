const getPokemonById= require('../controllers/getIdPokemons')


const handlerById= async(req, res)=>{
try {
    const {id}= req.params;
    const pokemon= await getPokemonById(id);
    res.status(200).json(pokemon)
    
} catch (error) {
    res.status(404).json({error: error.message})
    
}
}
module.exports= handlerById;