import {Link} from "react-router-dom"
import style from "./navBar.module.css"
import SearchBar from "../../views/searchbar/SearchBar";



const NavBar = () => {
    return (
        <div className={style.nav}>
             <button className={style.button}><Link to="/home">Home</Link></button>
            <div className={style.Search}><SearchBar/></div>
           <button className={style.button}><Link to="/form">Form</Link></button>
            
            

        </div>
    )
    
};

export default NavBar;