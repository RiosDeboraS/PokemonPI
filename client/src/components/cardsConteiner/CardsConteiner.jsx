import Card from '../card/Card';
import style from './cardsContainer.module.css';

const CardsConteiner = ({ pokemons }) => {

  

return (
    <div className={style.conteiner}>
      {pokemons.map(({id, name, image, types}) => (
        <Card
          key={id}
          id={id}
          name={name}
          image={image}
          types={types}
        />
      ))}
    </div>
  );
};

export default CardsConteiner;