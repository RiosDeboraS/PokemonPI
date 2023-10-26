import { GET_ALL_POKEMONS} from "./actions-types";
import axios from "axios";

export const get_all_pokemons = () => {
 return async (dispatch) => {
 const apiData = await axios.get("http://localhost:3001/pokemons");
 console.log(apiData)
 const pokemons= apiData.data;
 dispatch({type: GET_ALL_POKEMONS, payload: pokemons})

 }

}