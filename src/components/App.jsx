import { Routes, Route } from "react-router-dom"
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Search from "./Search/Search"
function App() {
  return (
    <div className="page">
     <div className="header__image">
      <Header/>
      <Search/>
     </div>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
