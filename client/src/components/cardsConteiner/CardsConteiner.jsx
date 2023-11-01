import Card from '../card/Card';
import style from './cardsContainer.module.css';

const CardsConteiner = ({ pokemons }) => {

  const pokemonList = Array.isArray(pokemons) ? [...pokemons] : [pokemons];



  return (
    <div className={style.conteiner}>
      {pokemonList.map((pokemon,) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
        />
      ))}
    </div>
  );
};

export default CardsConteiner;