import NewsCard from "../NewsCard/NewsCard"

export default function SavedNews({username="Elise", savedArticles, onDelete}){
    const totalSaved = savedArticles.length
    const uniqueKeywords = [...new Set(savedArticles.map(a => a.keyword))]
    function formatKeywordsText(keywords) {
        if (keywords.length === 0) return ''
        if (keywords.length === 1) return keywords[0]
        if (keywords.length === 2) return `${keywords[0]} and ${keywords[1]}`
        if (keywords.length === 3) return `${keywords[0]}, ${keywords[1]} and ${keywords[2]}`
        
        const shown = keywords.slice(0, 2)
        const remaining = keywords.length - 2
        return `${shown.join(', ')}, and ${remaining} other${remaining > 1 ? 's' : ''}`
    }

    return(
        <section className="saved-news">
            <h3 className="saved-news__subtitle">Saved articles</h3>
            <h2 className="saved-news__title">{`${username}, you have ${totalSaved} saved articles`}</h2>
            <p className="saved-news__text">By keywords: <span className="saved-news__keywords">{formatKeywordsText(uniqueKeywords)}</span></p>

            <ul className="cards">
                {savedArticles.map((article,i)=>(
                    <NewsCard 
                    key={i}
                    link={article.urlToImage}
                    date={article.publishedAt}
                    title={article.title}
                    text={article.description}
                    edit={article.source.name}
                    keyword={article.keyword}
                    article={article}
                    onDelete={onDelete}
                    />))}
            </ul>  
        </section>
    )
}