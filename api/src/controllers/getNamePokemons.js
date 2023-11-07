const axios = require("axios");
const { Pokemon, Type } = require("../db.js");

const getNamePokemons = async (name) => {
  let BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

 //Busca en la db el pokemon por name que llega por query
 const dbpokemon = await Pokemon.findOne({
    where: { name: name },
    
    include: [
                {
                    model: Type
                  
                }
            ],
          
        });
       
        if (dbpokemon) {
            const mapeo = {
              id: dbpokemon.id,
              name: dbpokemon.name,
              image: dbpokemon.image,
              attack: dbpokemon.attack,
              defense: dbpokemon.defense,
              height: dbpokemon.height,
              weight: dbpokemon.weight,
              life: dbpokemon.life,
              types: dbpokemon.types.map((type) => type.name),
            };
            return mapeo;
          }


    const poke = await axios.get(`${BASE_URL}/${name}`)
    const response = poke.data
   console.log(response)
    const pokemon = {
      id: response.id,
      name: response.name,
      image: response.sprites.other['official-artwork'].front_default,
      life: response.stats[0].base_stat,
      attack: response.stats[1].base_stat,
      defense: response.stats[2].base_stat,
      height: response.height,
      weight: response.weight,
      types: response.types.map((e) => e.type.name),
    };

    return pokemon;
  }

module.exports = getNamePokemons;


    

    


    