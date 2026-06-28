import { Routes, Route } from "react-router-dom"
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="page">
     <div className="header__image">

      <Header/>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
     </div>
      <Footer/>
    </div>
  )
}

export default App
