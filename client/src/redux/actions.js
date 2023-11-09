
import axios from "axios";
import { CLEAR_DETAIL, CLEAR_RESULTS, FILTER_ORIGIN, FILTER_TYPE, GET_ALL_POKEMONS, GET_BY_ID, GET_BY_NAME, GET_TYPES, ORDER_ALF, ORDER_ATTACK, POST_POKEMONS } from "./actions-types";

export const get_all_pokemons = () => {
 return async (dispatch) => {
 const apiData = await axios.get("http://localhost:3001/pokemons");
 
 const pokemons= apiData.data;
 dispatch({type: GET_ALL_POKEMONS, payload: pokemons})

 };

};

export const get_by_name = (name) => {
    return async (dispatch) => {
       try {
           const apiData = await axios.get(`http://localhost:3001/name?name=${name}`);
           const pokemons= apiData.data;
          dispatch({type: GET_BY_NAME, payload: pokemons
          })
    } catch (error) {  
      alert('No se encontro pokemon con ese nombre')
    }
}; 
};

export const get_by_id = (id) => {
    return async (dispatch) => {
        const apiData = await axios.get(`http://localhost:3001/pokemons/${id}`);
        
        const pokemons= apiData.data;
        dispatch({type: GET_BY_ID, payload: pokemons})
         
};
};

export const createPokemon = (data) =>{
  console.log({data})
  return async (dispatch) => {
      try {
          const response = await axios.post('http://localhost:3001/create', data)
          
          alert('Capturado con exito')
          dispatch ({
              type:POST_POKEMONS,
              payload: response.data,
          });
      } catch (error) {
          
          alert('No se puedo capturar')
          
      }
  }
}
  





  export const get_types = () => {
    return async (dispatch) => {
      const response = await axios.get("http://localhost:3001/type");
        const getTypes= response.data;
        dispatch({ type: GET_TYPES, payload: getTypes });
    };
  };
 

  export const filter_type = (name) => {
    return{ type: FILTER_TYPE, payload: name} 
    
  }


export const filter_origin = (value) => {
    return{ type: FILTER_ORIGIN, payload: value} 
    
  }

  export const order_Alf= (order) =>{
    return { type: ORDER_ALF, payload: order}
}

export const order_Attack = (order) =>{
    return{ type: ORDER_ATTACK, payload: order }
}

export const clear_results = ()=> {
  return {type: CLEAR_RESULTS}
}

export const clear_detail = () => {
  return {type: CLEAR_DETAIL}
}




