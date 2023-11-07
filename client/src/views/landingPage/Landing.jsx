import style from './landing.module.css'
import { Link } from 'react-router-dom';
const  Landing = () =>  {
  

  return (
    <div >


      <h1>welcome to the pokedex</h1>
      <Link to='/home'>
        <button className={style.button}>START</button>
      </Link>
    </div>
  );
}

export default Landing;