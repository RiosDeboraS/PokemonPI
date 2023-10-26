import { useDispatch, useSelector } from "react-redux";
import { get_all_pokemons } from "../../redux/actions";
import CardsConteiner from "../../components/cardsConteiner/CardsConteiner";
import { useEffect } from "react";



const Home = () => {

const globalState = useSelector((state)=> state?.pokemons)

const dispatch = useDispatch();

useEffect(()=>{
 dispatch(get_all_pokemons());
},[dispatch])





    return(
        <div>
            <p>este es Home</p>
            <CardsConteiner pokemons={globalState}
            ></CardsConteiner>
        
        </div>
    )
}

export default Home;