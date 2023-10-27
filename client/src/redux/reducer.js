import {GET_ALL_POKEMONS, GET_BY_ID, GET_BY_NAME } from "./actions-types";





const initialState ={
  pokemons: [],
  pokemonsid: []
  
  
}

const reducer= (state= initialState, actions) =>{
switch(actions.type){
case GET_ALL_POKEMONS: 
return {...state, pokemons: actions.payload,};
case GET_BY_NAME:
  return {...state, pokemons: actions.payload};
  case GET_BY_ID:
  return {...state, pokemonsid: actions.payload};
default: {
    return{...state}
};

};
};




export default reducer;