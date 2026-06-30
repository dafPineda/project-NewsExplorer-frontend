import About from "./components/About/About"
import NewsCardList from "./components/NewsCardList/NewsCardList"

export default function Main({articles, isLoading, searchError, 
    isSearched, savedArticles, onSavedArticle, onDeleteArticle, onOpenPopup, signIn}){
    return(
        <main className="main">
            <NewsCardList 
            articles={articles} 
            isLoading={isLoading} 
            searchError={searchError} 
            isSearched={isSearched}
            savedArticles={savedArticles}
            onSave={onSavedArticle}
            onDelete={onDeleteArticle}
            onOpenPopup={onOpenPopup} 
            signIn={signIn}/>
            <About/>
        </main>
    )
}