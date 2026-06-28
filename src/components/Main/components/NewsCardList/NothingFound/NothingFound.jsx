import notFound from "../../../../../images/notFound.png"

export default function NothingFound(){
    return(
        <div className="nothing-found">
            <img className="nothing-found__image" src={notFound}/>
            <h2 className="nothing-found__title">Nothing found</h2>
            <p className="nothing-found__text">Sorry, but nothing matched 
your search terms.</p>
        </div>
    )
}