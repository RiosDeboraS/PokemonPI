
const axios = require("axios");
const { Pokemon, Type } = require("../db.js");

const getPokemonById = async (id) => {
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

  if (id.toString().length > 5) {
    const pokemonDb = [await Pokemon.findByPk(id, { include:  { model: Type } })]
    console.log(pokemonDb)
    const newPokemon = pokemonDb.map((pokemon) => {
  
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.image,
        life: pokemon.life,
        attack: pokemon.attack,
        defense: pokemon.defense,
        height: pokemon.height,
        weight:pokemon.weight,
        types: pokemon.Types.map(type => type.name),
      
      }
    })
    return newPokemon[0];
  }



  //

const response = await axios.get(`${BASE_URL}${id}`);
  const data = response.data;

const dataPokemon = {
  id: data.id,
  name: data.name,
  image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`,
  attack: data.stats[1].base_stat,
  defense: data.stats[2].base_stat,
  height: data.height,
  weight: data.weight,
  life: data.stats[0].base_stat,
  types: data.types.map(type => type.type.name),
};
return dataPokemon;
};

module.exports = getPokemonById;









