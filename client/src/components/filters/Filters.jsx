

import { useDispatch, useSelector } from 'react-redux';
import {  filterSource, get_types, orderAlf, orderAttack } from '../../redux/actions';
import { useEffect } from 'react';

const Filter = () => {
    const dispatch = useDispatch();
    const typesBD = useSelector((state) => state.types)
   

    useEffect(() => {
        dispatch(get_types())
    }, [])

    const handleFilterType = (event) => {
        dispatch(filterSource(event.target.value))
    }


    

    const handleFilterSource = (event) => {
        dispatch(filterSource(event.target.value))
    }
    
    

    const handleAlphabeticalOrder = () => {
        dispatch(orderAlf());
    };

    const handleAttackOrder = () => {
        dispatch(orderAttack());
    };

    return (
        <div>
            <div>
                  <label >Filter by Type</label>
                <select name="selectType" onChange={handleFilterType}>

                    <option> - </option>
                    {typesBD.map((type, index) => (
                        <option key={index} value={type.name} >
                            {type.name}
                        </option>
                    ))}
                </select>
                </div>
                <div>
                <label >Filter by source</label>
                <select name="selectSource" onChange={handleFilterSource}>

                    <option> - </option>

                    <option value="API">Viewed</option>
                    <option value="DB">Captured</option>

                </select>
                </div>
            <button onClick={handleAlphabeticalOrder}>Orden Alfabético</button>
            <button onClick={handleAttackOrder}>Orden por Ataque</button>
        </div>
    );
}

export default Filter;
