import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_types, postPokemonData} from '../../redux/actions';


const Form = () => {
    const dispatch = useDispatch();
    const types = useSelector(state => state.type);

    

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
        setPokemonData({
            ...pokemonData,
            [e.target.name]: e.target.value
        });
    };

    const handleTypeChange = (e) => {
        setPokemonData({
            ...pokemonData,
            types: Array.from(e.target.selectedOptions, option => option.value)
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postPokemonData(pokemonData));
    };

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
            <select multiple={true} value={pokemonData.types} onChange={handleTypeChange}>
                {types.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                ))}
            </select>
            <button type="submit">Crear Pokémon</button>
        </form>
    );
};

export default Form;
