import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Search from "./Search/Search"
import Popup from "./Popup/Popup"
import SignIn from "./SignIn/SignIn"
import SignUp from "./SignUp/SignUp"



function App() {
  const signUp = {title:"Sign up", children:<SignUp/>}
  const signIn = {title:"Sign in", children:<SignIn/>}
  const [isLoggedIn, setIsLoggedIn]= useState(false)
  const [popup, setPopup] = useState(null)

  function handleOpenPopup(popup){
      setPopup(popup)
  }
  function handleClosePopup() {
      setPopup(null);
  }
  function handleSuccesRegister(){
    setPopup({title:"Registration successfully completed!",
      children:null
    })
  }
  return (
    <div className="page">
    {popup && (
        <Popup 
        onClose={handleClosePopup} 
        title={popup.title} 
        isOpen={!!popup}
        onOpen={handleOpenPopup}
        popupOpen={popup}
        signIn={signIn}
        signUp={signUp}>
            {popup.children}
        </Popup>
    )} 
     <div className="header__image">
      <Header 
      isLogged={isLoggedIn} 
      onOpenPopup={handleOpenPopup}
      signIn={signIn}/>
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