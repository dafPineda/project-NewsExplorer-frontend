export default function NewsCard({link, date, title, text, edit, keyword}){
    const otherCard = (keyword===undefined)  
    return(
            <li className="card">
                
                {otherCard? 
                    <div className="card__flag"/>
                :
                <>
                    <p className="card__keyword">{keyword}</p>
                    <div className="card__trash"/>
                </>
                }
               <img className="card__image" src={link}/>
                <div className="card__info">
                    <p className="card__info-date">{date}</p>
                    <h2 className="card__info-title">{title}</h2>
                    <p className="card__info-text">{text}</p>
                    <p className="card__info-category">{edit}</p>
                </div>
            </li>
    )
}