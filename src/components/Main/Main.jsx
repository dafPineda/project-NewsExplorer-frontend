import About from "./components/About/About"
import NewsCardList from "./components/NewsCardList/NewsCardList"
import SignIn from "./components/SignIn/SignIn"

export default function Main(){
    return(
        <main className="main">
            <NewsCardList/>
            <About/>
        </main>
    )
}