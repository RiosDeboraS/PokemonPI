

import { useState,useEffect  } from 'react';
import validationsCreate from "../../../Utils/validationsCreate"
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { createPokemon } from '../../../reudx/actions/actions';
import { useDispatch } from 'react-redux';



const  Create = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
      id:"",
    name: "",
    image: "",
    hitPoints: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    type1: "",
   // type2: "",
  });
  console.log(formData)
  const [errors, setErrors] = useState({})
  const [allFieldsCompleted, setAllFieldsCompleted] = useState(false);

  const handleChange= (event) =>{
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
    setErrors(validationsCreate(formData))
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch(createPokemon(formData))
   
  }

  const areAllFieldsCompleted = () => {
    const fields = Object.values(formData);
    return fields.every((field) => field !== "" && field !== null);
  };

useEffect(() => {
    setAllFieldsCompleted(areAllFieldsCompleted());
}, [formData,]);


  return (
   <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id"> Number</label>
      </div>
      <div>
        <input 
          type="number" 
          key="id" 
          name="id" 
          placeholder="Choose a number" 
          value={formData.id} 
          onChange={handleChange}
        />
          <br/>
        {errors.id ?  <span className={style.error}>{errors.id}</span> : null}
      </div>

      <div>
        <label htmlFor="name"> Name</label>
      </div>
      <div>
        <input 
          type="text" 
          key="name" 
          name="name" 
          placeholder="Choose a name" 
          value={formData.name} 
          onChange={handleChange}
        />
          <br/>
        {errors.name ?  <span className={style.error}>{errors.name}</span> : null}
      </div>

      <div>
        <label htmlFor="hitPoints"> HitPoints </label>
      </div>
      <div>
        <input 
          type="number" 
          key="hitPoints" 
          name="hitPoints" 
          placeholder="0-100" 
          value={formData.hitPoints} 
          onChange={handleChange}
        />
          <br/>
        {errors.hitPoints ?  <span className={style.error}>{errors.hitPoints}</span> : null}
      </div>

      <div>
        <label htmlFor="attack"> Attack </label>
      </div>
      <div>
        <input 
          type="number" 
          key="attack" 
          name="attack" 
          placeholder="0-100" 
          value={formData.attack} 
          onChange={handleChange}
        />
          <br/>
        {errors.attack ?  <span className={style.error}>{errors.attack}</span> : null}
      </div>

      <div>
        <label htmlFor="defense"> Defense </label>
      </div>
      <div>
        <input 
          type="number" 
          key="defense" 
          name="defense" 
          placeholder="0-100" 
          value={formData.defense} 
          onChange={handleChange}
        />
          <br/>
        {errors.defense ?  <span className={style.error}>{errors.defense}</span> : null}
      </div>

      <div>
        <label htmlFor="speed"> Speed </label>
      </div>
      <div>
        <input 
          type="number" 
          key="speed" 
          name="speed" 
          placeholder="0-100" 
          value={formData.speed} 
          onChange={handleChange}
        />
          <br/>
        {errors.speed ?  <span className={style.error}>{errors.speed}</span> : null}
      </div>

      <div>
        <label htmlFor="height"> Height </label>
      </div>
      <div>
        <input 
          type="number" 
          key="height" 
          name="height" 
          placeholder="0-100" 
          value={formData.height} 
          onChange={handleChange}
        />
          <br/>
        {errors.height ?  <span className={style.error}>{errors.height}</span> : null}
      </div>

      <div>
        <label htmlFor="image"> Image </label>
      </div>
      <div>
        <input 
          type="text" 
          key="image" 
          name="image" 
          placeholder="image" 
          value={formData.image} 
          onChange={handleChange}
        />
          <br/>
        {errors.height ?  <span className={style.error}>{errors.height}</span> : null}
      </div>
      <div>
        <label htmlFor="weight"> Weight </label>
      </div>
      <div>
        <input 
          type="number" 
          key="weight" 
          name="weight" 
          placeholder="0-100" 
          value={formData.weight} 
          onChange={handleChange}
        />
          <br/>
        {errors.weight ?  <span className={style.error}>{errors.weight}</span> : null}
      </div>

      <div className={style.row}>
        <div className={style.col1}>
          <label htmlFor="type1">Type</label>
        </div>
        <div className={style.col2}>
          <select id="type1" name="type1" value={formData.type1} onChange={handleChange}>
            <option value="">Select a type</option>
            <option value="normal">normal</option>
            <option value="fighting">fighting</option>
            <option value="flying">flying</option>
            <option value="poison">poison</option>
            <option value="ground">ground</option>
            <option value="rock">rock</option>
            <option value="bug">bug</option>
            <option value="ghost">ghost</option>
            <option value="steel">steel</option>
            <option value="fire">fire</option>
            <option value="water">water</option>
            <option value="grass">grass</option>
            <option value="electric">electric</option>
            <option value="psychic">psychic</option>
            <option value="ice">ice</option>
            <option value="dragon">dragon</option>
            <option value="dark">dark</option>
            <option value="fairy">fairy</option>
            <option value="shadow">shadow</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
        </div>
        {/* <div className={style.row}>
          <div className={style.col1}>
            <label htmlFor="type2">Type</label>
          </div>
          <div className={style.col2}>
            <select id="type2" name="type2" value={formData.type2} onChange={handleChange}>
              <option value="">Select a type</option>
              <option value="normal">normal</option>
              <option value="fighting">fighting</option>
              <option value="flying">flying</option>
              <option value="poison">poison</option>
              <option value="ground">ground</option>
              <option value="rock">rock</option>
              <option value="bug">bug</option>
              <option value="ghost">ghost</option>
              <option value="steel">steel</option>
              <option value="fire">fire</option>
              <option value="water">water</option>
              <option value="grass">grass</option>
              <option value="electric">electric</option>
              <option value="psychic">psychic</option>
              <option value="ice">ice</option>
              <option value="dragon">dragon</option>
              <option value="dark">dark</option>
              <option value="fairy">fairy</option>
              <option value="shadow">shadow</option>
              <option value="unknown">unknown</option>
            </select>
          </div>
        </div> */}

        <div className={style.row}>
          <button 
            type="submit" 
            name="createButton" 
            className={`${style.button} ${allFieldsCompleted ? '' : style.disabledButton}`}
            disabled={!allFieldsCompleted}> Create your Pokemon!</button>
        </div> 
    <div>
      <button>
        <Link to="/home"> Back </Link>
      </button>
    </div>
   </form>
  );
}

export default Create;