import style from "./card.module.css"

const Card = ({name, types, image, id}) => {
    return(
        <div className={style.card}>
        <p>id:{id}</p>
        <p>name: {name}</p>
        <img src={image}></img>
        <p>types: {types}</p>
       
        </div>
    )
};

export default Card;