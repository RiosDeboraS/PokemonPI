import {Link} from "react-router-dom"
import style from "./navBar.module.css"
import SearchBar from "../../views/searchbar/SearchBar";



const NavBar = () => {
    return (
        <div className={style.nav}>
            
            <SearchBar/>
            <Link to="/home">Home</Link>
            <Link to="/form">Form</Link>
            

        </div>
    )
    
};

export default NavBar;