
import { useParams} from "react-router-dom";
import { clear_detail, get_by_id } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './Detail.module.css'


const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector(state => state.pokemonsid);
    

    useEffect(() => {

    dispatch(get_by_id(id))
    return() => dispatch(clear_detail())
    }, [dispatch,id])


   

    return (
        <div >
            
            <div className={style.detail}>
            <img src={detail?.image} alt={detail?.name} />
                <h3>Id: {detail?.id}</h3>
                <h3>life: {detail?.life}</h3>
                <h3>Attack: {detail?.attack}</h3>
                <h3>Defense: {detail?.defense}</h3>
                <h3>Height: {detail?.height}</h3>
                <h3>Weight: {detail?.weight}</h3>
                <h3>types: {detail?.types}</h3>
            </div>
        </div>
    );
};

export default Detail;

