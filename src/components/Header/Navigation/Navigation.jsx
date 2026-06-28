import Union from "../../../images/Union.png"
export default function Navigation({isLogged}){
    return(
        <section className="nav">
            <p className="nav__text">Home</p>
            {isLogged?
                <>
                    <p className="nav__text">Saved articles</p>
                    <button className="nav__button-logout">Username<img className="nav__button-image" src={Union}/></button> 
                </>
                :
                <button className="nav__button-signin">SignIn</button>}
        </section>
    )
}