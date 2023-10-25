const axios = require("axios");
const { Pokemon, Type } = require("../db.js");

const getNamePokemons = async (name) => {
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

  // Buscar en la base de datos por nombre.
  const dBPokemon = await Pokemon.findOne({ where: { name: name } });

  if (dBPokemon) {
    // Si se encuentra en la base de datos, devuelve el resultado de la base de datos.
    // Debes asegurarte de que los tipos estén relacionados en la base de datos.
    // Esto dependerá de cómo tengas estructurada tu base de datos.
    return dBPokemon;
  }

  // Si no se encuentra en la base de datos, busca en la API.
  const getPokemonByName = await axios.get(`${BASE_URL}/${name}`);
  const data = getPokemonByName.data;

  // Mapear los tipos de la API a los nombres legibles desde la base de datos.
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

module.exports = getNamePokemons;


    

    


    