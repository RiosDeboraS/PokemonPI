const axios = require('axios');
const { Pokemon, Type } = require('../db');

// Definimos la URL base de la API
let BASE_URL = "https://pokeapi.co/api/v2/pokemon/?limit=50";

const getPokemons = async () => {
  // Obtenemos los Pokémon de la base de datos local, incluyendo los tipos asociados.
  const dbPokemons = await Pokemon.findAll({ include: { model: Type } });

  // Mapeamos los datos de la base de datos a un nuevo formato.
  const newPokemons = dbPokemons.map((poke) => {
    return {
      id: poke.id,
      name: poke.name,
      image: poke.image,
      attack: poke.attack,
      defense: poke.defense,
      height: poke.height,
      weight: poke.weight,
      life: poke.life,
      speed: poke.speed,
      types: poke.Types.map((types) => types.name),
    };
  });

  // Realizamos una solicitud a la API externa para obtener datos de Pokémon.
  const solicitPokemons = await axios.get(BASE_URL);

  // Obtenemos los resultados de la API.
  const response = solicitPokemons.data.results;

  // Mapeamos los datos de la API externa a un nuevo formato.
  const apiPokemons = response.map(async (pokemon) => {
    const apiData = await axios.get(pokemon.url);
    const data = apiData.data;
    const mapData = {
      id: data.id,
      name: data.name,
      image: data.sprites.other['official-artwork'].front_default,
      attack: data.stats[1]["base_stat"],
      defense: data.stats[2]["base_stat"],
      speed: data.stats[5].base_stat,
      height: data.height,
      weight: data.weight,
      life: data.stats[0]["base_stat"],
      types: data.types.map((type) => type.type.name),
    };
    return mapData;
  });

  // Esperamos a que se completen todas las promesas de la API externa.
  const pokedata = await Promise.all(apiPokemons);

  // Combinamos los datos de la base de datos local y la API externa.
  const totalData = newPokemons.concat(pokedata);

  return totalData;
};

module.exports = getPokemons;
