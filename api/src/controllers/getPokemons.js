const axios = require('axios');

let BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

const getPokemons = async () => {
  const allPokemons = [];

  while (allPokemons.length < 50) {
    const response = await axios.get(BASE_URL);
    allPokemons.push(...response.data.results);
    BASE_URL = response.data.next;
  }

  const pokemonPromises = allPokemons
    .slice(0, 50)
    .map(async (pokemon) => {
      const response = await axios.get(pokemon.url);
      const data = response.data;

      // Obtener los tipos del Pokémon
      const types = data.types.map((typeData) => typeData.type.name);

      return {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        attack: data.stats.find((stat) => stat.stat.name === "attack").base_stat,
        defense: data.stats.find((stat) => stat.stat.name === "defense").base_stat,
        height: data.height,
        weight: data.weight,
        life: data.stats[0].base_stat,
        types: data.types,
      };
    });

  const pokemonData = await Promise.all(pokemonPromises);

  return pokemonData;
};

module.exports = getPokemons;
