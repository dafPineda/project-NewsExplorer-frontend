import Navigation from "./Navigation/Navigation"
import { useLocation } from "react-router-dom"

export default function Header({isLogged, onOpenPopup, signIn, username, onLogout}){
    const location = useLocation()
    const isHome = location.pathname === "/"
    return(
        <header className="header">
            <div className={`header__block ${!isHome&& "header__block_black"}`}>
                <h1 className="header__title">NewsExplorer</h1>
                <Navigation 
                isLogged={isLogged} 
                onOpenPopup={onOpenPopup}
                 signIn={signIn}
                 username={username}
                 onLogout={onLogout}
                 />
            </div>
            <hr/>
        </header>
    )
}