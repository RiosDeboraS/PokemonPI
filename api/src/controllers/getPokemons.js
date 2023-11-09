const axios = require('axios');
const { Pokemon, Type } = require('../db');


let BASE_URL = "https://pokeapi.co/api/v2/pokemon/?limit=50";

const getPokemons = async () => {



  // Obtenemos los Pokémon de la base de datos local, incluyendo los tipos.
  const dbPokemons = await Pokemon.findAll({ include: { model: Type } });

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
      types: poke.Types.map(type => type.name),
    };
  });

  // Realizamos una solicitud a la API externa para obtener datos de Pokémon.
  const solicitPokemons = await axios.get(BASE_URL);


  const response = solicitPokemons.data.results;

  const apiPokemons = response.map(async (pokemon) => {
    const apiData = await axios.get(pokemon.url);
    const data = apiData.data;
    
    const mapData = {
      id: data.id,
      name: data.name,
      //image: //`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${data.id}.png`,
      image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`,
      //`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
      attack: data.stats[1]["base_stat"],
      defense: data.stats[2]["base_stat"],
      height: data.height,
      weight: data.weight,
      life: data.stats[0]["base_stat"],
      types: data.types.map((type) => type.type.name),
    };
    return mapData;
  });

 
  const pokedata = await Promise.all(apiPokemons);

 
  const totalData = newPokemons.concat(pokedata);

  return totalData;
};

module.exports = getPokemons;
