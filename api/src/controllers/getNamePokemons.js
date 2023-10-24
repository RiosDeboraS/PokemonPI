const axios = require("axios");
const { Pokemon } = require("../db.js");



const getNamePokemons= async(name)=>{
    const BASE_URL= "https://pokeapi.co/api/v2/pokemon/";
   
// Buscar en la base de datos por nombre 
 
const dBPokemon = await Pokemon.findAll({ where: {name: name}});

    // Si no se encuentra en la base de datos, busca en la API 
      const getPokemonByName = await axios.get(`${BASE_URL}/${name}`);
      const data = getPokemonByName.data;
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
 
       return dBPokemon.concat(dataPokemon);
  }
    

module.exports = getNamePokemons;
    


    