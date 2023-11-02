import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { filter_origin, filter_type, get_types, order_Alf, order_Attack } from '../../redux/actions';
import style from './filters.module.css'

const Filter = () => {

    const types = useSelector(state => state.types);
    const dispatch = useDispatch()
    const [type, setType]= useState("")

    useEffect(()=>
    {
    dispatch(get_types())

    }, [])

    const handlerFiltersTypes= (event) =>{
        const filtritos = event.target.value;
        setType(filtritos);
        dispatch(filter_type(filtritos));
    }


    const handlerfilterOrigin = (event)=>{
        const filter = event.target.value;
        dispatch(filter_origin(filter))
    }

        
    
    const handlerOrder = (event) => {
        dispatch(order_Alf(event.target.value));
    }

    const handlerOrderAttack = (event) => {
        dispatch(order_Attack(event.target.value))
    }


    return(
        <div className={style.div}>
            <button onClick={() => handlerOrder({target: {value: 'asc'}})}>A - Z</button>
             <button onClick={() => handlerOrder({target: {value: 'desc'}})}>Z - A</button>
             <button onClick={() => handlerOrder({target: {value: 'asc'}})}>Attack MaxMin</button>
             <button onClick={() => handlerOrder({target: {value: 'desc'}})}>Attack MinMax</button>
            <select onChange={handlerfilterOrigin}>
                <option value= "api">Pokedex</option>
                <option value= "db"> Mis Capturados</option>
            </select>


            <select  onChange={handlerFiltersTypes}>
                {types.map(type => (
                    <option key={type.id} value={type.name}>
                        {type.name}
                    </option>
                ))}
            </select>
        </div>
    )

}
export default Filter;