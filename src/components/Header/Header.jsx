import Navigation from "./Navigation/Navigation"
import { useLocation } from "react-router-dom"

export default function Header({onOpenPopup, signIn, onLogout, onOpenMenu}){
    const location = useLocation()
    const isHome = location.pathname === "/"
    return(
        <header className="header">
            <div className={`header__block ${!isHome&& "header__block_black"}`}>
                <h1 className="header__title">NewsExplorer</h1>
                <Navigation 
                onOpenPopup={onOpenPopup}
                 signIn={signIn}
                 onLogout={onLogout}
                 onOpenMenu={onOpenMenu}
                 />
            </div>
            <hr/>
        </header>
    )
}