import { Link } from "react-router-dom"
import github from "../../images/github.png"
import facebook from "../../images/facebook.png"

export default function Footer(){
    return(
        <footer className="footer">
            <p className="footer__copyright">© 2026 Supersite, Powered by News API</p>
            <p className="footer__text"><Link href="#">Home</Link></p>
            <p className="footer__text" href="#about">Practicum by Dafne Pineda</p>
            <a href="https://github.com/dafPineda"><img className="footer__media" src={github} alt="github"/></a>
            <a href="https://www.facebook.com/dafne.a.pineda"><img className="footer__media" src={facebook} alt="facebook"/></a>
        </footer>
    )
}