const { Pokemon, Type } = require('../db');

const createPokemon = async (name, image, life, speed, attack, defense, height, weight, types ) => {
  const response = await Pokemon.create({  
    name,
    image,
    attack,
    defense,
    height,
    weight,
    life,
    speed,
    
  });

  types.map((async(temp)=>{
    const firstType= await Type.findOne({where: {name: temp}});
    console.log(temp)
    await response.addTypes(firstType)
  }))

  
  return response;
}

module.exports = createPokemon;
