import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Search from "./Search/Search"
import Popup from "./Popup/Popup"

function App() {
  const [isLoggedIn, setIsLoggedIn]= useState(false)
  const [popup, setPopup] = useState(null)

  function handleOpenPopup(popup){
      setPopup(popup)
  }
  function handleClosePopup() {
      setPopup(null);
  }
  return (
    <div className="page">
    {popup && (
        <Popup 
        onClose={handleClosePopup} 
        title={popup.title} 
        isOpen={!!popup}
        onOpen={handleOpenPopup}
        popupOpen={popup}>
            {popup.children}
        </Popup>
    )} 
     <div className="header__image">
      <Header isLogged={isLoggedIn} onOpenPopup={handleOpenPopup}/>
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

/* Primero que se vea bonito el popup de sign in y signup */