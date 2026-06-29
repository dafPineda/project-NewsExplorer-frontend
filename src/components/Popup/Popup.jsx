import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";

export default function Popup(props) {
  const { onClose, title, children, isOpen, onOpen, popupOpen} = props;
  
  const signUp = {title:"Sign up", children:<SignUp/>}
  const signIn = {title:"Sign in", children:<SignIn/>}

  return (
    <div className={`popup ${isOpen ? "popup__open": ""}`}>
      <div
        className = {`popup__block ${!title ? "popup__content_content_image" : ""}`}
      >
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
          <p className="popup__signup" onClick={()=>onOpen(signIn)}>or <span className="popup__signup_blue">sign in</span></p>
        }
      </div>
    </div>
  );
}
