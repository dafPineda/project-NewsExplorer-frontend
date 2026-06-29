import Navigation from "./Navigation/Navigation"

export default function Header({isLogged, onOpenPopup, signIn}){
    return(
        <header className="header">
            <div className="header__block">
                <h1 className="header__title">NewsExplorer</h1>
                <Navigation isLogged={isLogged} onOpenPopup={onOpenPopup} signIn={signIn}/>
            </div>
            <hr/>
        </header>
    )
}