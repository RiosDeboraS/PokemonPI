const axios = require("axios");
const { Pokemon, Type } = require("../db.js");

const getNamePokemons = async (name) => {
  let BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

 //Busca en la db el pokemon por name que llega por query
 const pokemon = await Pokemon.findOne({
    where: { name: name },
    include: [
        {
            model: Type,
            attributes: ["name"],
            through: { attributes: [] } // Evita traer los datos de la tabla intermedia si existe
        }]
})
//Responde con el pokemon
if (pokemon) {
    return pokemon
    //Busca en la api el pokemon por name que llega por query
} else {
    const { id, sprites, stats, height, weight, types } = (await axios.get(`${BASE_URL}/${name}`)).data
    const pokemon = {
        id: id,
        name: name,
        //image: sprites.other.home.front_shiny,
        // image: sprites.front_shiny,
        image: sprites.other['official-artwork'].front_default,
        life: stats[0].base_stat,
        attack: stats[1].base_stat,
        defense: stats[2].base_stat,
        speed: stats[5].base_stat,
        height: height,
        weight: weight,
        types: types.map(e => e.type.name)
    }
    return pokemon
}
};

module.exports = getNamePokemons;


    

    


    