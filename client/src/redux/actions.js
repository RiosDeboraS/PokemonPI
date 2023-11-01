
import axios from "axios";
import { GET_ALL_POKEMONS, GET_BY_ID, GET_BY_NAME, GET_TYPES, POST_POKEMONS } from "./actions-types";

export const get_all_pokemons = () => {
 return async (dispatch) => {
 const apiData = await axios.get("http://localhost:3001/pokemons");
 
 const pokemons= apiData.data;
 dispatch({type: GET_ALL_POKEMONS, payload: pokemons})

 };

};

export const get_by_name = (name) => {
    return async (dispatch) => {
        const apiData = await axios.get(`http://localhost:3001/name?name=${name}`);
        const pokemons= apiData.data;
        dispatch({type: GET_BY_NAME, payload: pokemons})
         
};
};

export const get_by_id = (id) => {
    return async (dispatch) => {
        const apiData = await axios.get(`http://localhost:3001/pokemons/${id}`);
        console.log(apiData)
        const pokemons= apiData.data;
        dispatch({type: GET_BY_ID, payload: pokemons})
         
};
};

export const createPokemon = (data) =>{
  console.log({data})
  return async (dispatch) => {
      try {
          const response = await axios.post('http://localhost:3001/create', data)
          console.log(response.data);
          alert('ya esta creado')
          dispatch ({
              type:POST_POKEMONS,
              payload: response.data,
          });
      } catch (error) {
          console.log(error);
          alert(error.response.data.error)
          
      }
  }
}
  
/*export function postPokemon(payload) {
  return (dispatch) => {
    axios
      .post('http://localhost:3001/create', payload)
      .then((res) => res.data)
      .then((pokemon) => {
        return pokemon;
      })
      .catch((error) => console.log(error));
  };
}*/




  export const get_types = () => {
    return async (dispatch) => {
      const response = await axios.get("http://localhost:3001/type");
        const getTypes= response.data;
        dispatch({ type: GET_TYPES, payload: getTypes });
    };
  };
 






