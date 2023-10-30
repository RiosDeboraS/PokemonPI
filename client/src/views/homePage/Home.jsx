import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_all_pokemons } from "../../redux/actions";
import CardsConteiner from "../../components/cardsConteiner/CardsConteiner";

const Home = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state?.pokemons); // Accedes a la lista de Pokémon en el estado global
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(get_all_pokemons());
  }, [dispatch]);

  const POKEMONS_PER_PAGE = 12; // Cantidad de pokémones por página

  // Calcula la cantidad total de páginas en función del estado global
  const totalPages = Math.ceil(globalState?.length / POKEMONS_PER_PAGE);

  // Resto 1 porque las páginas comienzan en 1
  const startIndex = (currentPage - 1) * POKEMONS_PER_PAGE;

  // Obtén los Pokémon que serán visibles en la página actual
  const visiblePokemons = globalState?.slice(startIndex, startIndex + POKEMONS_PER_PAGE);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => goToPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      <CardsConteiner pokemons={visiblePokemons} /> 
    </div>
  );
};

export default Home;
