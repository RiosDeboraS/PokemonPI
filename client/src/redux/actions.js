import { GET_ALL_POKEMONS, GET_BY_ID, GET_BY_NAME} from "./actions-types";
import axios from "axios";

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


