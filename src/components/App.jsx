import { Routes, Route } from "react-router-dom"
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
