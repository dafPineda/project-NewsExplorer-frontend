import About from "./components/About/About"
import NewsCardList from "./components/NewsCardList/NewsCardList"

export default function Main({isLoggedIn, articles, isLoading, searchError, 
    isSearched, savedArticles, onSavedArticle, onDeleteArticle}){
    return(
        <main className="main">
            <NewsCardList 
            isLoggedIn={isLoggedIn}
            articles={articles} 
            isLoading={isLoading} 
            searchError={searchError} 
            isSearched={isSearched}
            savedArticles={savedArticles}
            onSave={onSavedArticle}
            onDelete={onDeleteArticle}/>
            <About/>
        </main>
    )
}