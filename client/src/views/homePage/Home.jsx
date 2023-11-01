import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_all_pokemons } from "../../Redux/actions";
import CardsConteiner from "../../components/cardsConteiner/CardsConteiner";

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(get_all_pokemons());
  }, [dispatch]);

  return (
    <div>
      <CardsConteiner pokemons={pokemons} />
    </div>
  );
};

export default Home;
