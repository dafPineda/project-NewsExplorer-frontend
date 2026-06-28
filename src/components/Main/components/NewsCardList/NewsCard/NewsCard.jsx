export default function NewsCard({link, date, title, text, edit}){
    return(
            <li className="card">
                <div className="card__flag"/>
               <img className="card__image" src={link}/>
                <div className="card__info">
                    <p className="card__info-date">{date}</p>
                    <h2 className="card__info-title">{title}</h2>
                    <p className="card__info-text">{text}</p>
                    <p className="card__info-edit">{edit}</p>
                </div>
            </li>
    )
}