import { FILTER_ORIGIN, FILTER_TYPE, GET_ALL_POKEMONS, GET_BY_ID, GET_BY_NAME, GET_TYPES, POST_POKEMONS } from "./actions-types";







const initialState ={
  pokemons: [],
  newPokes: [],
  pokemonsid: [],
  types: [],
  pokemonsCopy:[]
  
  
}

const reducer= (state= initialState, actions) =>{
switch(actions.type){
case GET_ALL_POKEMONS: 
return {...state,pokemonsCopy: actions.payload, pokemons: actions.payload};
case GET_BY_NAME:
  return {...state, pokemons: [actions.payload]};
case GET_BY_ID:
  return {...state, pokemonsid: actions.payload};
  case POST_POKEMONS:
    return { ...state, newPokes: [...state.newPokes, actions.payload], pokemons: [...state.pokemons, actions.payload] }

  case GET_TYPES:
  return {...state, types: actions.payload}

  case FILTER_TYPE: 
  const dataCopy= [...state.pokemonsCopy]
  const response = [...dataCopy.filter((poke)=>{
    return poke.types && poke.types.map(elemn => elemn.trim()).includes(actions.payload)
  })]
  return {
    ...state,
    pokemons: response
}


case FILTER_ORIGIN: 
let filterOrigin;
if( actions.payload === "api"){
  filterOrigin = state.pokemonsCopy.filter((poke)=> poke.id.toString().length < 6)
}
if( actions.payload === "db"){
  filterOrigin = state.pokemonsCopy.filter((poke)=> poke.id.toString().length > 6)
}
return {
  ...state,
  pokemons: [...filterOrigin]
}





default: { 
    return{...state}
};

};
};




export default reducer;