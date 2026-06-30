export default function NewsCard({isLoggedIn, link, date, title, text, edit, keyword, article,
     savedArticles, onSave, onDelete, onOpenPopup, signIn}){
    const otherCard = (keyword===undefined)  
    const isSaved = savedArticles?.some((a) => a.url === article?.url)
    function handleFlagClick() {
        if(isLoggedIn){
            if (isSaved) {
            onDelete(article)
            } else {
            onSave(article)
            }
        }else{
            onOpenPopup(signIn)
        }
    }

    return(
            <li className="card">
                
                {otherCard? 
                    <div className={`card__flag ${isSaved ? "card__flag_active" : ""}`}
                        onClick={handleFlagClick}
                        style={{ cursor: isLoggedIn ? "pointer" : "default" }}
                        title={!isLoggedIn ? "Inicia sesión para guardar artículos" : ""}/>   
                :
                <>
                    <p className="card__keyword">{keyword}</p>
                    <div className="card__trash" onClick={() => onDelete(article)}/>
                </>
                }
               <img className="card__image" src={link} alt={title}/>
                <div className="card__info">
                    <p className="card__info-date">{date}</p>
                    <h2 className="card__info-title">{title}</h2>
                    <p className="card__info-text">{text}</p>
                    <p className="card__info-category">{edit}</p>
                </div>
            </li>
    )
}