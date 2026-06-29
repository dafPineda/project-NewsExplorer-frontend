export default function SignIn(){
    return (
        <form className="popup__form" id="signIn" name="signIn" noValidate>
            <label className="popup__label"
            >Email</label>
            <input
            type="email"
            className="popup__input"
            name="email"
            id="emailSignin"
            placeholder="Enter email"
            minLength={2}
            required
            />
            <span className="popup__input-error">Invalid email address</span>
            <label className="popup__label">Password</label>
            <input 
            type="text"
            className="popup__input"
            id="passwordSignin"
            minLength={3}
            placeholder="Enter password"
            required
            />
            <span className="popup__input-error">Insert more of three </span>
            <button type="submit" className="popup__button popup__button_disabled" id="submitSignIn" name="submitSignIn" disabled>
                Sign in
            </button>
        </form>
    )
}