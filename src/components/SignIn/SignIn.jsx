import { use, useState } from "react"

export default function SignIn({onSignIn}){
    const [values, setValues] = useState({email:"", password:""})
    const [errors, setErrors] = useState({email:"", password:""})
    const [isValid, setIsValid] = useState(false)


    function handleChange(evt){
        const { name, value, validity } = evt.target;
        setValues({
            ...values,
            [name]: value,
        });
        let error = "";

        if (validity.valueMissing) {
            error = "This field is required.";
        } else if (validity.typeMismatch) {
            error = "Invalid email address.";
        } else if (validity.tooShort) {
            error = "Must contain at least 3 characters.";
        }

        setErrors({
            ...errors,
            [name]: error,
        });

        setIsValid(evt.target.closest("form").checkValidity());
    }
    function handleSubmit(evt){
        evt.preventDefault();
        const err = onSignIn(values)

        if(err.message) {
            setErrors({
                ...errors,
                password: err.message,
            });
        }
    }
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
            value={values.email}
            onChange={handleChange}
            required
            />
            <span className="popup__input-error">{errors.email}</span>
            <label className="popup__label">Password</label>
            <input 
            type="password"
            className="popup__input"
            id="passwordSignin"
            name="password"
            minLength={3}
            placeholder="Enter password"
            value={values.password}
            onChange={handleChange}
            required
            />
            <span className="popup__input-error">{errors.password} </span>
            <button 
            type="submit" 
            id="submitSignIn" 
            name="submitSignIn"
            className={`popup__button ${!isValid ? "popup__button_disabled" : ""}`}
            disabled={!isValid}
            onClick={handleSubmit}>
                Sign in
            </button>
        </form>
    )
}