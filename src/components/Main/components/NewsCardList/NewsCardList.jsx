import NothingFound from "./NothingFound/NothingFound";
import Preloader from "./Preloader/Preloader";
import NewsCard from "./NewsCard/NewsCard";

export default function NewsCardList(){
    return(
        <section className="new-card-list">
            {/* <NothingFound/> */}
            {/* <Preloader/> */}
            <div className="new-card-list__result">
                <h1 className="result__title">Search result</h1>
                <ul className="cards">
                    <NewsCard/>
                </ul>
                <button className="result-button">Show more</button>
            </div>
        </section>
    )
}