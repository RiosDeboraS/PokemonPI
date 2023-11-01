const { Pokemon, Type } = require('../db');

const createPokemon = async (name, image, life, speed, attack, defense, height, weight, types) => {
  // Crea un nuevo Pokémon y almacénalo en la variable 'response'
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

 

  await Promise.all(types.map(async (temp) => {
    // Busca un Tipo en la base de datos con el nombre proporcionado
    const primerType = await Type.findOne({ where: { name: temp } });

    // Si se encontró un Tipo coincidente, asígneselo al Pokémon creado
    if (primerType) {
      await response.addType(primerType);
    }
  }))

  // Devuelve el Pokémon creado con los Tipos asociados
  return response;
}

module.exports = createPokemon;
