import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

import Union from "../../../images/Union.png"

export default function Navigation({isLogged, onOpenPopup, signIn, username}){
    const location = useLocation()
    const isHome = location.pathname === "/"
    return(
        <section className="nav">
            <div className="nav__menu"/>
            <Link className="nav__text" to="/">Home</Link>
            {isLogged?
                <>
                    <Link className="nav__text" to="/savednews">Saved articles</Link>
                    <button className={`nav__button-logout ${!isHome && "nav__button-logout_black"}`} >{username}<img className="nav__button-image" src={Union}/></button> 
                </>
                :
                <button className="nav__button-signin" 
                onClick={()=> onOpenPopup(signIn)}
                >SignIn</button>}
        </section>
    )
}