const { Pokemon, Type } = require('../db');




const createPokemon = async (name, image, life,  attack, defense, height, weight, types) => {

  
  const response = await Pokemon.create({
    name,
    image,
    attack,
    defense,
    height,
    weight,
    life,
 });

 

  await Promise.all(types.map(async (typeName) => {
   
    const primerType = await Type.findOne({ where: { name: typeName} });

    if (primerType) {
      await response.addType(primerType);
    }
  }))
  
  return response;
}

module.exports = createPokemon;
