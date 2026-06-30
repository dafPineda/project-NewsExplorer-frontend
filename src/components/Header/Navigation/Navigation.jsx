import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useContext } from "react"

import CurrentUserContext from "../../../contexts/CurrentUserContext"
import Union from "../../../images/Union.png"

export default function Navigation({onOpenPopup, signIn, onLogout, onOpenMenu}){
    const { userName, isLoggedIn } = useContext(CurrentUserContext)
    const location = useLocation()
    const isHome = location.pathname === "/"
    return(
        <section className="nav">
            <div className={`nav__menu ${!isHome&& "nav__menu_black"}`} onClick={()=>onOpenMenu()}/>
            <Link className="nav__text" to="/">Home</Link>
            {isLoggedIn?
                <>
                    <Link className="nav__text" to="/saved-news">Saved articles</Link>
                    <button className={`nav__button-logout ${!isHome && "nav__button_black"}`} onClick={()=>onLogout()}>{userName}<img className="nav__button-image" src={Union}/></button> 
                </>
                :
                <button className={`nav__button-signin ${!isHome&& "nav__button_black"}`}
                onClick={()=> onOpenPopup(signIn)}
                >SignIn</button>}
        </section>
    )
}