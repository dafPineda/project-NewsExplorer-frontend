import NothingFound from "./NothingFound/NothingFound";
import Preloader from "./Preloader/Preloader";

export default function NewsCardList(){
    return(
        <section className="new-card-list">
            {/* <NothingFound/> */}
            <Preloader/>
        </section>
    )
}