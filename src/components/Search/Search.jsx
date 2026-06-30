import { useState } from "react"

export default function Search({onSearch}){
    const [keyword, setKeyword] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (!keyword.trim()) {
            setError('Por favor, introduzca una palabra clave')
            return
        }  
        setError('')
        onSearch(keyword)
    }

    return(
        <section className="search">
            <h2 className="search__title">What's going on in the world?</h2>
            <h3 className="search__subtitle">Find the latest news on any topic and save them in your personal account.</h3>
            <form className="search__form" onSubmit={handleSubmit}>
                    <input
                    className="form__input"
                    id="searchInput"
                    name="searchInput"
                    type="text"
                    placeholder="Enter topic"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}

                    />
                    <button
                    className="form__button"
                    name="searchSubmit"
                    id="searchSubmit"
                    type="submit"
                    >Search</button>
            </form>
            <span className="popup__input-error">{error}</span>
        </section>
    )
}