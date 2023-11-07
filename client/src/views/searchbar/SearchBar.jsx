import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  get_all_pokemons, get_by_name } from '../../redux/actions';
import { useState } from 'react';
import style from './search.module.css'


const SearchBar = () => {
    const [name, setName] = useState('');
     
    const dispatch = useDispatch()
  

    const handleChange = (event) => {
        setName(event.target.value)
        
    }

   const reset = () => {
    dispatch(get_all_pokemons())
   }

    const onSearch = (name) => {
      dispatch(get_by_name(name));
     
      setName('');
  };

  
  

    return (
        <div >
            <div >

                <input name="myInput" type='search' value={name} onChange={handleChange}  />
               <button className={style.SearchButton} onClick={() => { onSearch(name); setName('') }} >SEARCH</button>
               <button className={style.SearchButton} onClick={reset}>RESET</button>
               
            </div>
        </div>
    )
}

export default SearchBar;
 
