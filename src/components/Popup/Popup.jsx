export default function Popup(props) {
  const { onClose, title, children, isOpen, onOpen, popupOpen, signIn, signUp} = props;

  return (
    <div className={`popup ${isOpen ? "popup__open": ""}`}>
      <div className ="popup__block">
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        <h3 className="popup__title">{title}</h3>
        {children}
        {popupOpen.title === "Sign in"?
          <p className="popup__signup" onClick={()=>onOpen(signUp)}>or <span className="popup__signup_blue">sign up</span></p>
          :
          popupOpen.title === "Sign up" ?
          <p className="popup__signup" onClick={()=>onOpen(signIn)}>or <span className="popup__signup_blue">sign in</span></p>
          :
          <p className="popup__signup" onClick={()=>onOpen(signIn)}><span className="popup__signup_blue">sign in</span></p>
        }
      </div>
    </div>
  );
}
