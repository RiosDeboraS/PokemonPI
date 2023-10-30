const createPokemon = require('../controllers/postPokemnons');


const handlerPost = async(req, res)=>{

try { 
    const {name, image, life, speed, attack, defense, height, weight, types} = req.body;
    console.log(req.body)
        const poke = await createPokemon(name, image, life, speed, attack, defense, height, weight, types)
        res.status(200).json(poke)
    
} catch (error) {
    res.status(404).json({error: error.message});
};
};

module.exports= handlerPost;