const { Pokemon } = require('../db');

const createPokemon = async (name, image, life, speed, attack, defense, height, weight) => {
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

  
  return response;
}

module.exports = createPokemon;
