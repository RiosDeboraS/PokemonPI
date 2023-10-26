import {GET_ALL_POKEMONS } from "./actions-types";





const initialState ={
  pokemons: [],
  
  
}

const reducer= (state= initialState, action) =>{
switch(action.type){
case GET_ALL_POKEMONS: 
return {...state, pokemons: action.payload,};

default: {
    return{...state}
};

};
};




export default reducer;