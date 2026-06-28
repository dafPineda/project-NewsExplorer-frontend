import github from "../../images/github.png"
import github from "../../images/facebook.png"
export default function Footer(){
    return(
        <footer>
            <p className="footer__copyright">© 2026 Supersite, Powered by News API</p>
            <p className="footer__text">Home</p>
            <p className="footer__text">Practicum by Dafne Pineda</p>
            <img className="footer__media" src="{github}"/>
            <img className="footer__media" src="{facebook}"/>
        </footer>
    )
}