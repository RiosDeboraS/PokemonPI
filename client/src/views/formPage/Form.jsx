import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPokemon, get_types } from '../../redux/actions';
import validation from './validation';
const Form = () => {
    const dispatch = useDispatch();
    const types = useSelector(state => state.types);
    const [errors, setErrors] = useState({})


    const [pokemonData, setPokemonData] = useState({
        name: '',
        image: '',
        life: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: []
    });
console.log({pokemonData})
    useEffect(() => {
        dispatch(get_types())
    }, [dispatch])

    const handleChange = (event) => {
        if (event.target.name === 'types') 
        return setPokemonData( { ...pokemonData, 
             types: [...pokemonData.types, event.target.value],
         }) 
         setPokemonData({
                ...pokemonData,
                [event.target.name]: event.target.value
            });
        setErrors(validation({...pokemonData, 
        [event.target.name]: event.target.value})
        )

        
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        


        dispatch(createPokemon(pokemonData));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nombre" onChange={handleChange} />
            <p >{errors.name}</p>
            <input type="text" name="image" placeholder="Imagen URL" onChange={handleChange} />
            <p>{errors.image}</p>
            <input type="number" name="life" placeholder="Vida" onChange={handleChange} />
            
            <input type="number" name="attack" placeholder="Ataque" onChange={handleChange} />
            
            <input type="number" name="defense" placeholder="Defensa" onChange={handleChange} />
            
            <input type="number" name="speed" placeholder="Velocidad" onChange={handleChange} />
            
            <input type="number" name="height" placeholder="Altura" onChange={handleChange} />
            
            <input type="number" name="weight" placeholder="Peso" onChange={handleChange} />
            
            <select name="types" multiple onChange={handleChange}>
          
                {types.map(type => (
                    <option key={type.id} value={type.name}>
                        {type.name}
                    </option>
                ))}
            </select>
            <button type='submit'>Crear Pokemon</button>
        </form>
    );
};

export default Form;
