import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_all_pokemons} from "../../redux/actions";
import CardsConteiner from "../../components/cardsConteiner/CardsConteiner";




const Home = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state?.pokemons);

  

  useEffect(() => {
    dispatch(get_all_pokemons());
  }, [dispatch]);

  return (
    <div>
    
    
      <CardsConteiner pokemons={globalState} />
    </div>
  );
};

export default Home;

