export default function NewsCard(){
    return(
            <li className="card">
                <div className="card__flag"/>
               <img className="card__image"/>
                <div className="card__info">
                    <p className="card__info-date"></p>
                    <h2 className="card__info-title"></h2>
                    <p className="card__info-text"></p>
                    <p className="card__info-edit"></p>
                </div>
            </li>
    )
}