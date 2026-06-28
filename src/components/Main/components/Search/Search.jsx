export default function Search(){
    return(
        <section className="search">
            <h2 className="search__title">What's going on in the world?</h2>
            <h3 className="search__subtitle">Find the latest news on any topic and save them in your personal account.</h3>
            <form className="search__form">
                    <input
                    className="form__input"
                    id="searchInput"
                    name="searchInput"
                    type="text"
                    placeholder="Enter topic"
                    />
                    <button
                    className="form__button"
                    name="searchSubmit"
                    id="searchSubmit"
                    type="submit"
                    >Search</button>
            </form>
        </section>
    )
}