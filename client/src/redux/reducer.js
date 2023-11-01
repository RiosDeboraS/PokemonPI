import { GET_ALL_POKEMONS, GET_BY_ID, GET_BY_NAME, GET_TYPES, POST_POKEMONS } from "./actions-types";







const initialState ={
  pokemons: [],
  newPokes: [],
  pokemonsid: [],
  types: [],

  
  
}

const reducer= (state= initialState, actions) =>{
switch(actions.type){
case GET_ALL_POKEMONS: 
return {...state, pokemons: actions.payload,};
case GET_BY_NAME:
  return {...state, pokemons: actions.payload};
case GET_BY_ID:
  return {...state, pokemonsid: actions.payload};
  case POST_POKEMONS:
    return { ...state, newPokes: [...state.newPokes, actions.payload], pokemons: [...state.pokemons, actions.payload] }

  case GET_TYPES:
  return {...state, types: actions.payload}
default: {
    return{...state}
};

};
};




export default reducer;