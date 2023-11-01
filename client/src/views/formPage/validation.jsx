const validation = (pokemonData)=>{
  const errors = {}

  
  if (!/^.{4,}$/.test(pokemonData.name)) {
    errors.name = 'El nombre debe contener al menos 4 letras';
    
}

if (!/^.{1,250}$/.test(pokemonData.image)) {
  errors.image ='La URL de la imagen debe tener menos de 250 caracteres';
    
}

/*if (!/^[1-9][0-9]?$|^100$/.test(pokemonData.life) ||
    !/^[1-9][0-9]?$|^100$/.test(pokemonData.attack) ||
    !/^[1-9][0-9]?$|^100$/.test(pokemonData.defense) ||
    !/^[1-9][0-9]?$|^100$/.test(pokemonData.speed) ||
    !/^[1-9][0-9]?$|^100$/.test(pokemonData.height) ||
    !/^[1-9][0-9]?$|^100$/.test(pokemonData.weight)) {
      errors ='Los campos numéricos deben tener un número entre 1 y 100';
    }

if (pokemonData.types.length === 0) {
   errors.types = ('Debes elegir al menos un tipo');
    
}*/
return errors
}

export default validation;