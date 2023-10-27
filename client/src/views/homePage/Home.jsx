import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_all_pokemons, get_by_name } from "../../redux/actions";
import CardsConteiner from "../../components/cardsConteiner/CardsConteiner";
import SearchBar from "../../components/searchBar/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state?.pokemons);
  const [errorSearch, setErrorSearch] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]); // Nuevo estado para los resultados de la búsqueda

  useEffect(() => {
    dispatch(get_all_pokemons());
  }, [dispatch]);

  const onSearch = async (name) => {
    if (parseInt(name)) {
      setErrorSearch("Nombre de Pokémon inválido");
      return;
    }
    try {
      const response = await dispatch(get_by_name(name)); // Realiza la búsqueda por nombre y actualiza el estado global
      if (response && response.length > 0) {
        setFilteredPokemons(response); // Actualiza el estado con los resultados de la búsqueda
      } else {
        setErrorSearch("No se encontraron Pokémon con ese nombre");
      }
    } catch (error) {
      setErrorSearch("Error al buscar el Pokémon");
    }
  };

  return (
    <div>
      <p>Este es Home</p>
      <SearchBar onSearch={onSearch} />
      {filteredPokemons.length > 0 ? (
        <CardsConteiner pokemons={filteredPokemons} /> // Renderiza los resultados de la búsqueda si existen
      ) : (
        <CardsConteiner pokemons={globalState} /> // Renderiza todos los Pokémon si no hay resultados de búsqueda
      )}
    </div>
  );
};

export default Home;
