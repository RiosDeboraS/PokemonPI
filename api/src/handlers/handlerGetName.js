const getNamePokemons = require("../controllers/getNamePokemons")


const handlersName= async(req, res)=> {
    try {
        const {name}= req.query
        const pokemon= await getNamePokemons(name);

    res.status(200).json(pokemon)
    } catch (error) {
        res.status(404).json({error: error.message})
        
    }
}

module.exports=handlersName;