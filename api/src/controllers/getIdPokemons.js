const axios = require("axios");



const getPokemonById = async (id) => {

  const BASE_URL= "https://pokeapi.co/api/v2/pokemon/";
  const getPokemonById = await axios(`${BASE_URL}/${id}`);
  const data = getPokemonById.data;
  const dataPokemon={
       id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        attack: data.stats[1]["base_stat"],
        defense: data.stats[2]["base_stat"],
        height: data.height,
        weight: data.weight,
        life: data.life,
  };

      return dataPokemon;
      
  }




module.exports = getPokemonById;