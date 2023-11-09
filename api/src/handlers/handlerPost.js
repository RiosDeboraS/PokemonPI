const createPokemon = require('../controllers/postPokemnons');

const createPost = async(req, res)=>{

    try { 
        const { name, image, life,  attack, defense, height, weight, types} = req.body;
        
            const pokemon = await createPokemon( name, image, life,  attack, defense, height, weight, types)
            res.status(200).json(pokemon)
        
    } catch (error) {
        res.status(404).json({error: error.message});
    };
    };
    

module.exports = createPost;