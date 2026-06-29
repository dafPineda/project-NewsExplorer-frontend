import Union from "../../../images/Union.png"

import SignIn from "../../SignIn/SignIn"

export default function Navigation({isLogged, onOpenPopup}){
      const signIn = {title:"Sign in", children:<SignIn/>}
    return(
        <section className="nav">
            <p className="nav__text">Home</p>
            {isLogged?
                <>
                    <p className="nav__text">Saved articles</p>
                    <button className="nav__button-logout">Username<img className="nav__button-image" src={Union}/></button> 
                </>
                :
                <button className="nav__button-signin" 
                onClick={()=> onOpenPopup(signIn)}
                >SignIn</button>}
        </section>
    )
}