import NewsCard from "../NewsCard/NewsCard"

export default function SavedNews({username="Elise", numArticles=5, keywords, savedNews}){
    return(
        <section className="saved-news">
            <h3 className="saved-news__subtitle">Saved articles</h3>
            <h2 className="saved-news__title">{`${username}, you have ${numArticles} saved articles`}</h2>
            <p className="saved-news__text">By keywords: <span className="saved-news__keywords">Nature, Yellowstone, and 2 other</span></p>

            <ul className="cards">
                <NewsCard 
                link="https://rarehistoricalphotos.com/wp-content/uploads/2023/12/historical-colorized-photos.jpg"
                keyword="natural"
                date="November 4, 2020" 
                title="Everyone Needs a Special 'Sit Spot' in Nature"
                text= "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.из местных чудес природы."
                edit="national geographic"
                />
                <NewsCard 
                link="https://rarehistoricalphotos.com/wp-content/uploads/2023/12/historical-colorized-photos.jpg"
                keyword="natural"
                date="November 4, 2020" 
                title="Everyone Needs a Special 'Sit Spot' in Nature"
                text= "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.из местных чудес природы."
                edit="national geographic"
                />
                <NewsCard 
                link="https://rarehistoricalphotos.com/wp-content/uploads/2023/12/historical-colorized-photos.jpg"
                keyword="natural"
                date="November 4, 2020" 
                title="Everyone Needs a Special 'Sit Spot' in Nature"
                text= "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.из местных чудес природы."
                edit="national geographic"
                />
            </ul>  
        </section>
    )
}