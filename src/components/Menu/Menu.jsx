import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { use, useContext } from "react"

import CurrentUserContext from "../../contexts/CurrentUserContext"

export default function Menu({isOpen, onOpenPopup, signIn, onLogout, onClose}){
    const { isLoggedIn } = useContext(CurrentUserContext)
    const location = useLocation()
    const isHome = location.pathname === "/"
    
    return(
        <div className={`menu ${isOpen? "menu_open":""}`}>
            <div className="menu-block">
                <button
                aria-label="Close modal"
                className="menu__close"
                type="button"
                onClick={onClose}
                />
                <h1 className="menu__title">NewsExplorer</h1>
                <hr className="menu__line"/>
                <Link className="menu__text" to="/" onClick={()=>onClose()}>Home</Link>
                {isLoggedIn?
                    <>
                        <Link className="menu__text" to="/saved-news" onClick={()=>onClose()}>Saved articles</Link>
                        <button className={`menu__button-logout`} onClick={()=>{onClose();onLogout()}}>Log out</button> 
                    </>
                    :
                    <button className={`menu__button-signin`}
                    onClick={()=> { onClose(); onOpenPopup(signIn)}}
                    >SignIn</button>}
            </div>
        </div>
    )
}