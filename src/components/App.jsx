import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Search from "./Search/Search"
import Popup from "./Popup/Popup"
import SignIn from "./SignIn/SignIn"
import SignUp from "./SignUp/SignUp"
import SavedNews from "./SavedNews/SavedNews"

import ProtectedRoute from "./ProtectedRoute/ProtectedRoute"

function App() {
  const signUp = {title:"Sign up", children:<SignUp onSuccess={handleSuccesRegister}/>}
  const signIn = {title:"Sign in", children:<SignIn/>}
  const [isLoggedIn, setIsLoggedIn]= useState(false)
  const [popup, setPopup] = useState(null)

  const location = useLocation()
  const isHome = location.pathname === "/"

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
      <div className={isHome ? "header__image" : ""}>
        <Header 
          isLogged={isLoggedIn} 
          onOpenPopup={handleOpenPopup}
          signIn={signIn}
          username="Elise"
        />
       {isHome && <Search/>}
      </div>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/savednews" element={<SavedNews/>}/>
        <Route path="*" element={
          isLoggedIn 
            ? <Navigate to="/" replace/> 
            : <Navigate to="/savednews" replace/>
        }/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
