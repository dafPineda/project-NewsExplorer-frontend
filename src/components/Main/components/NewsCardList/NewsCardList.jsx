import { useState } from "react";

import NothingFound from "./NothingFound/NothingFound";
import Preloader from "./Preloader/Preloader";
import NewsCard from "../../../NewsCard/NewsCard";
import { formatDate } from "../../../../utils/date";


export default function NewsCardList({articles, isLoading, searchError, isSearched, 
    savedArticles, onSave, onDelete, onOpenPopup, signIn}){
    const [visibleCount, setVisibleCount] = useState(3)  
    function handleShowMore() {
        setVisibleCount((prev) => prev + 3)
    }
    return(
        <section className="new-card-list">
            {isLoading&& <Preloader/>}
            {searchError && <p className="new-card-list__error">Lo sentimos, algo ha salido mal...</p>}
            {!isLoading && !searchError && articles.length === 0 && isSearched && <NothingFound/>}
            {!isLoading && !searchError && isSearched && articles.length > 0 && (
                <div className="new-card-list__result">
                <h1 className="result__title">Search result</h1>
                <ul className="cards">
                    {articles.slice(0, visibleCount).map((article)=>(
                        <NewsCard 
                            key={article.url}
                            onOpenPopup={onOpenPopup} 
                            signIn={signIn}
                            link={article.urlToImage}
                            date={formatDate(article.publishedAt)}
                            title={article.title}
                            text={article.description}
                            edit={article.source.name}
                            savedArticles={savedArticles}
                            onSave={onSave}
                            onDelete={onDelete}
                            article={article}
                        />
                    ))
                    }
                </ul>
                {visibleCount < articles.length && (
                    <button className="result-button" onClick={handleShowMore}>
                    Show more
                    </button>
                )}            
            </div>)}
        </section>
    )
}