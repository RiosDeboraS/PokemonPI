
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear_results, get_all_pokemons } from "../../Redux/actions";
import CardsConteiner from "../../components/cardsConteiner/CardsConteiner";
import Pagination from "../../components/pagination/Pagination";
import Filter from "../../components/filters/Filter";
import style from './home.module.css'




const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  const [isLoading, setIsLoading] = useState(true); // Estado de carga

  useEffect(() => {
    dispatch(get_all_pokemons())
      .then(() => setIsLoading(false)) // Cuando la carga se complete, establece isLoading en false
      .catch((error) => {
        console.error("Error al cargar los pokemons:", error);
        setIsLoading(false); // En caso de error, asegúrate de que isLoading sea false
      });

    return () => {
      dispatch(clear_results());
    };
  }, [dispatch]);

  // Número de elementos
  const itemsPerPage = 12;

  // Obtiene el número total de pokemons
  const totalPokemon = pokemons?.length;

  const [currentPage, setCurrentPage] = useState(0);

  // Calcula los índices del primer y último pokemon que quieres mostrar en la página actual
  const indexOfLastPokemon = (currentPage + 1) * itemsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - itemsPerPage;

  // Usa esos índices para obtener los pokemons que quieres mostrar en la página actual
  const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  return (
    <div>
    {isLoading ? (
      <div className={style.loading}>
        <div className={style.spinner}></div>
      </div>
    ) : (
        
        <>
          <Filter />
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={totalPokemon}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <CardsConteiner pokemons={currentPokemons} />
        </>
      )}
    </div>
  );
};

export default Home;
