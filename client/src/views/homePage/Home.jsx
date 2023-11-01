
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_all_pokemons } from "../../Redux/actions";
import CardsConteiner from "../../components/cardsConteiner/CardsConteiner";
import Pagination from "../../components/pagination/Pagination";
import Filter from "../../components/filters/Filter";
const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(get_all_pokemons());
  }, [dispatch]);

  // Número de elementos 
  const itemsPerPage = 12;

  // Obtiene el número total de pokemons
  const totalPokemon = pokemons?.length;

  const [currentPage, setCurrentPage] = useState(0)

  // Calcula los índices del primer y último pokemon que quieres mostrar en la página actual
  const indexOfLastPokemon = (currentPage + 1) * itemsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - itemsPerPage;

  // Usa esos índices para obtener los pokemons que quieres mostrar en la página actual
  const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  return (
    <div>
      <Filter/>
      <Pagination 
        itemsPerPage={itemsPerPage} 
        totalItems={totalPokemon} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
      <CardsConteiner pokemons={currentPokemons} />
    </div>
  );
};

export default Home;
