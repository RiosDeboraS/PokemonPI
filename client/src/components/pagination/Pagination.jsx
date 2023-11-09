import { useDispatch, useSelector } from 'react-redux';
import style from './pagination.module.css';
import React, { useEffect, useState } from 'react';
import { clear_results, get_all_pokemons } from '../../redux/actions';
import CardsConteiner from '../cardsConteiner/CardsConteiner';

const itemsPerPage = 12;

const Pagination = ({currentPage, setCurrentPage}) => {

  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const [isLoading, setIsLoading] = useState(false); 

  const totalPokemon = pokemons?.length;
  const totalPage = Math.ceil(totalPokemon / itemsPerPage);


  useEffect(() => {
    setIsLoading(true); 
    dispatch(clear_results());
    dispatch(get_all_pokemons()).then(() => {
      setIsLoading(false); 
    });
  }, [dispatch, currentPage]);

const indexprimPokemon = currentPage * itemsPerPage;
const indexultmPokemon = Math.min(indexprimPokemon + itemsPerPage, totalPokemon);

const currentPokemons = pokemons?.slice(indexprimPokemon, indexultmPokemon);

const nextHandler = () => {
    if (currentPage < totalPage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

const prevHandler = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  

  return (
    <div className={style.div}>
      {isLoading ? (
        <div className={style.loading}>
          <div className={style.spinner}></div>
        </div>
      ) : (
        <>
          <button className={style.button} onClick={prevHandler}>
            back
          </button>
          <span>
            {currentPage + 1} de {totalPage}
          </span>
          <button className={style.button} onClick={nextHandler}>
            next
          </button>
          <CardsConteiner pokemons={currentPokemons} />
        </>
      )}
    </div>
  );
};

export default Pagination;
