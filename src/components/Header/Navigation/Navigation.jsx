import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

import Union from "../../../images/Union.png"

export default function Navigation({isLogged, onOpenPopup, signIn, username}){
    const location = useLocation()
    const isHome = location.pathname === "/"
    return(
        <section className="nav">
            <div className="nav__menu nav__menu_black"/>
            <Link className="nav__text" to="/">Home</Link>
            {isLogged?
                <>
                    <Link className="nav__text" to="/savednews">Saved articles</Link>
                    <button className={`nav__button-logout ${!isHome && "nav__button_black"}`} >{username}<img className="nav__button-image" src={Union}/></button> 
                </>
                :
                <button className={`nav__button-signin ${!isHome&& "nav__button_black"}`}
                onClick={()=> onOpenPopup(signIn)}
                >SignIn</button>}
        </section>
    )
}