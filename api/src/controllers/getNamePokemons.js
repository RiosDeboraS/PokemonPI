const axios = require("axios");
const { Pokemon, Type } = require("../db.js");

const getNamePokemons = async (name) => {
  let BASE_URL = "https://pokeapi.co/api/v2/pokemon/";


 const dbpokemon = await Pokemon.findOne({
    where: { name: name },

    include: [
                {
                    model: Type

                }
            ],

        });

        if (dbpokemon) {
            const formateo = {
              id: dbpokemon.id,
              name: dbpokemon.name,
              image: dbpokemon.image,
              attack: dbpokemon.attack,
              defense: dbpokemon.defense,
              height: dbpokemon.height,
              weight: dbpokemon.weight,
              life: dbpokemon.life,
              types: dbpokemon.Types.map(type => type.name),
            };
            return formateo;
          };

  const poke = await axios.get(`${BASE_URL}/${name}`)
    const response = poke.data
   
    const pokemon = {
      id: response.id,
      name: response.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${response.id}.png`,
      life: response.stats[0].base_stat,
      attack: response.stats[1].base_stat,
      defense: response.stats[2].base_stat,
      height: response.height,
      weight: response.weight,
      types: response.types.map((type) => type.type.name),
    };

    return pokemon;
  }

module.exports = getNamePokemons;