import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPokemon, get_types } from '../../redux/actions';

const Form = () => {
    const dispatch = useDispatch();
    const types = useSelector(state => state.types);

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

    useEffect(() => {
        dispatch(get_types())
    }, [dispatch])

    const handleChange = (e) => {
        if (e.target.name === 'types') {
            let selectedTypes = [...pokemonData.types]; 
            selectedTypes.push(e.target.value); 
            setPokemonData({
                ...pokemonData,
                [e.target.name]: selectedTypes 
            });
        } else {
            setPokemonData({
                ...pokemonData,
                [e.target.name]: e.target.value
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validations
        if (!/^.{4,}$/.test(pokemonData.name)) {
            alert('El nombre debe contener al menos 4 letras');
            return;
        }
        
        if (!/^.{1,250}$/.test(pokemonData.image)) {
            alert('La URL de la imagen debe tener menos de 250 caracteres');
            return;
        }
        
        if (!/^[1-9][0-9]?$|^100$/.test(pokemonData.life) ||
            !/^[1-9][0-9]?$|^100$/.test(pokemonData.attack) ||
            !/^[1-9][0-9]?$|^100$/.test(pokemonData.defense) ||
            !/^[1-9][0-9]?$|^100$/.test(pokemonData.speed) ||
            !/^[1-9][0-9]?$|^100$/.test(pokemonData.height) ||
            !/^[1-9][0-9]?$|^100$/.test(pokemonData.weight)) {
            alert('Los campos numéricos deben tener un número entre 1 y 100');
            return;
        }
        
        if (pokemonData.types.length === 0) {
            alert('Debes elegir al menos un tipo');
            return;
        }

        dispatch(createPokemon(pokemonData));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nombre" onChange={handleChange} />
            <input type="text" name="image" placeholder="Imagen URL" onChange={handleChange} />
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
