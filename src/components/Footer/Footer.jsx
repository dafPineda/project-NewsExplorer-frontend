import { Link } from "react-router-dom"
import github from "../../images/github.png"
import facebook from "../../images/facebook.png"

export default function Footer(){
    return(
        <footer className="footer">
            <p className="footer__copyright">© 2026 Supersite, Powered by News API</p>
            <p className="footer__text footer__text-home"><Link to="/" >Home</Link></p>
            <p className="footer__text footer__text-autor" >Practicum by Dafne Pineda</p>
            <a href="https://github.com/dafPineda" target="_blank" rel="noopener noreferrer"><img className="footer__media footer__media-github" src={github} alt="github"/></a>
            <a href="https://www.facebook.com/dafne.a.pineda" target="_blank" rel="noopener noreferrer"><img className="footer__media footer__media-facebook" src={facebook} alt="facebook"/></a>
        </footer>
    )
}