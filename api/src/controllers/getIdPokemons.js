
const axios = require("axios");
const { Pokemon, Type } = require("../db.js");

const getPokemonById = async (uuid) => {
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

  // Intenta buscar en la base de datos local utilizando el UUID.
  const dbPokemon = await Pokemon.findOne({ uuid: uuid });

  if (dbPokemon) {
    // Si se encuentra en la base de datos local, retorna los datos locales del Pokémon.
    // Debes asegurarte de que los tipos estén relacionados en la base de datos.
    // Esto dependerá de cómo tengas estructurada tu base de datos.
    return dbPokemon;
  }

  // Si no se encuentra en la base de datos local, realiza una solicitud a la API de Pokémon utilizando el ID.
  const id = parseInt(uuid); // Convierte el UUID a un número (ID en la API).
  const response = await axios.get(`${BASE_URL}${id}`);
  const data = response.data;

  // Mapear los tipos de la API y obtener los tipos de la base de datos en un solo paso.
  const types = await Promise.all(data.types.map(async (typeData) => {
    
    const typeName = typeData.type.name;
    const dbType = await Type.findOne({ where: { name: typeName } });
    return dbType ? dbType.displayName : typeName;
  }));

  // Crear un objeto 'dataPokemon' con datos específicos del Pokémon encontrado en la API.
  const dataPokemon = {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    height: data.height,
    weight: data.weight,
    life: data.stats[0].base_stat,
    types: data.types,
  };

  return dataPokemon;
};

module.exports = getPokemonById;



module.exports = getPokemonById;
