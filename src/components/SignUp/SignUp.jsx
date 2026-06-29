export default function SignUp(){
    return(
        <form className="popup__form" id="signUp" name="signUp" noValidate>
            <label className="popup__label"
            >Email</label>
            <input
            type="email"
            className="popup__input"
            name="email"
            id="emailSignUp"
            placeholder="Enter your email"
            minLength={2}
            required
            />
            <span className="popup__input-error">Email valid is required</span>
            <label className="popup__label">Password</label>
            <input 
            type="text"
            className="popup__input"
            id="passwordSignUp"
            minLength={3}
            placeholder="Enter password"
            required
            />
            <span className="popup__input-error">Insert more of two </span>
            <label className="popup__label">Username</label>
            <input 
            type="text"
            className="popup__input"
            id="username"
            minLength={2}
            placeholder="Enter your username"
            required
            />
            <span className="popup__input-error">Insert more </span>
            <span className="popup__input-error">This username is not available</span>
            <button type="submit" className="popup__button " id="submitSignUn" name="submitSignUn" >
                Sign up
            </button>
        </form>
    )
}