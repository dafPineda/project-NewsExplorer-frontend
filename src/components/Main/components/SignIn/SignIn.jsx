export default function SignIn(){
    return (
        <form className="form" id="signIn" name="signIn" noValidate>
            <label className="form__label"
            >Email</label>
            <input
            type="email"
            className="form__input"
            name="email"
            id="emailSignin"
            placeholder="Enter email"
            minLength={2}
            required
            />
            <span className="form__input-error">Invalid email address</span>
            <label className="form__label">Password</label>
            <input 
            type="text"
            className="form__input"
            id="passwordSignin"
            minLength={3}
            placeholder="Enter password"
            required
            />
            <span className="form__input-error">Insert more of three </span>
            <button type="submit" class="form__button " id="submitSignIn" name="submitSignIn" >
                Sign in
            </button>
        </form>
    )
}