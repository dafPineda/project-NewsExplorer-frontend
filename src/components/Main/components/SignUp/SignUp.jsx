export default function SignUp(){
    return(
        <form className="form" id="signUp" name="signUp" noValidate>
            <label className="form__label"
            >Email</label>
            <input
            type="email"
            className="form__input"
            name="email"
            id="emailSignUp"
            placeholder="Enter your email"
            minLength={2}
            required
            />
            <span className="form__input-error">Email valid is required</span>
            <label className="form__label">Password</label>
            <input 
            type="text"
            className="form__input"
            id="passwordSignUp"
            minLength={3}
            placeholder="Enter password"
            required
            />
            <span className="form__input-error">Insert more of two </span>
            <label className="form__label">Username</label>
            <input 
            type="text"
            className="form__input"
            id="username"
            minLength={2}
            placeholder="Enter your username"
            required
            />
            <span className="form__input-error">Insert more </span>
            <span className="form__input-error">This username is not available</span>
            <button type="submit" class="form__button " id="submitSignUn" name="submitSignUn" >
                Sign up
            </button>
        </form>
    )
}