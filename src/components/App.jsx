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
import Menu from "./Menu/Menu"

import ProtectedRoute from "./ProtectedRoute/ProtectedRoute"
import CurrentUserContext from "../contexts/CurrentUserContext"

import { getNews } from "../utils/newsExplorer"

function App() {
  const [isLoggedIn, setIsLoggedIn]= useState(localStorage.getItem('userInfo')? true:false)
  const [popup, setPopup] = useState(null)
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchError, setSearchError] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [keyword, setKeyWord] = useState("")

  const [savedArticles, setSavedArticles] = useState(
    JSON.parse(localStorage.getItem('savedArticles')) || []
  )

  const [userInfo, setUserInfo]= useState(JSON.parse(localStorage.getItem('userInfo')) || [])
  
  const location = useLocation()
  
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

 function handleSearch(keyword) {
    setHasSearched(true)
    setIsLoading(true)
    setSearchError(false)
    setKeyWord(keyword)
    getNews(keyword)
      .then((data) => {
        setArticles(data)
        localStorage.setItem('articles', JSON.stringify(data))
        localStorage.setItem('keyword', keyword)
      })
      .catch(() => setSearchError(true))
      .finally(() => setIsLoading(false))
  }
  function handleSaveArticle(article) {
    const articleWithKeyword = { ...article, keyword }
    const updated = [...savedArticles, articleWithKeyword]
    setSavedArticles(updated)
    localStorage.setItem('savedArticles', JSON.stringify(updated))
  }
  function handleDeleteArticle(article) {
    const updated = savedArticles.filter((a) => a.url !== article.url)
    setSavedArticles(updated)
    localStorage.setItem('savedArticles', JSON.stringify(updated))
  }

  function handleSignUp(userInfo){
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    setUserInfo(userInfo)
  }
  function handleLogout(){
    localStorage.removeItem('userInfo')
    setIsLoggedIn(false)
  }
  function handleLogin({email, password}){
    if(userInfo.email !== email || userInfo.password !== password) return {message:"Email or password invalid"}
    else{
      setIsLoggedIn(true)
      handleClosePopup()
    }
  }
  function handleCloseMenu(){
    setIsOpenMenu(false)
  }
  function handleOpenMenu(){
    setIsOpenMenu(true)
  }
  const isHome = location.pathname === "/"

  const signUp = {title:"Sign up", children:<SignUp  onRegister={handleSignUp} onSuccess={handleSuccesRegister}/>}
  const signIn = {title:"Sign in", children:<SignIn onSignIn={handleLogin} userInfo={userInfo}/>}

  return (
    <CurrentUserContext value={{userName:userInfo.username, isLoggedIn}}>
      <div className="page">
      <Menu
          isOpen={isOpenMenu} 
          onOpenPopup={handleOpenPopup}
          signIn={signIn}
          onLogout={handleLogout}
          onClose={handleCloseMenu}
          />
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
            onOpenPopup={handleOpenPopup}
            signIn={signIn}
            onLogout={handleLogout}
            onOpenMenu={handleOpenMenu}
            />
        {isHome && <Search onSearch={handleSearch}/>}
        </div>
        <Routes>
          <Route path="/" element={
            <Main
            onOpenPopup={handleOpenPopup}
            signIn={signIn}
            articles={articles} 
            isLoading={isLoading} 
            searchError={searchError} 
            isSearched={hasSearched}
            savedArticles={savedArticles}
            onSavedArticle={handleSaveArticle}
            onDeleteArticle={handleDeleteArticle}
            />
          }/>
            <Route path="/saved-news" element={
              <ProtectedRoute>
                <SavedNews savedArticles={savedArticles} onDelete={handleDeleteArticle}/>
              </ProtectedRoute>
                }
                />
            <Route path="*" element={
              isLoggedIn 
              ? <Navigate to="/" replace/> 
              : <Navigate to="/saved-news" replace/>
            }/>
        </Routes>
        <Footer/>
      </div>
    </CurrentUserContext>
  )
}

export default App
