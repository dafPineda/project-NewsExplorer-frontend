import NothingFound from "./NothingFound/NothingFound";
import Preloader from "./Preloader/Preloader";
import NewsCard from "../../../NewsCard/NewsCard";

export default function NewsCardList(){
    return(
        <section className="new-card-list">
            <NothingFound/>
            <Preloader/>
            <div className="new-card-list__result">
                <h1 className="result__title">Search result</h1>
                <ul className="cards">
                    <NewsCard 
                    link="https://rarehistoricalphotos.com/wp-content/uploads/2023/12/historical-colorized-photos.jpg"

                    date="November 4, 2020" 
                    title="Everyone Needs a Special 'Sit Spot' in Nature"
                    text= "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.из местных чудес природы."
                    edit="national geographic"
                    />
                    <NewsCard 
                    link="https://rarehistoricalphotos.com/wp-content/uploads/2023/12/historical-colorized-photos.jpg"
                    
                    date="November 4, 2020" 
                    title="Everyone Needs a Special 'Sit Spot' in Nature"
                    text= "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.из местных чудес природы."
                    edit="national geographic"
                    />
                    <NewsCard 
                    link="https://rarehistoricalphotos.com/wp-content/uploads/2023/12/historical-colorized-photos.jpg"
                    
                    date="November 4, 2020" 
                    title="Everyone Needs a Special 'Sit Spot' in Nature"
                    text= "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.из местных чудес природы."
                    edit="national geographic"
                    />
                </ul>
                <button className="result-button">Show more</button>
            </div>
        </section>
    )
}