import {Link} from "react-router-dom"
import style from "./navBar.module.css"



const NavBar = () => {
    return (
        <div className={style.nav}>
            <Link to="/home">Home</Link>
            <Link to="/form">Form</Link>

        </div>
    )
};

export default NavBar;