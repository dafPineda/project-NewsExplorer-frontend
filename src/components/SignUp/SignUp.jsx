import { useState } from "react"

export default function SignUp({onSuccess, onRegister}){
    const [values, setValues] = useState({email:"", password:"", username:""})
    const [errors, setErrors] = useState({email:"", password:"", username:""})
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
        onRegister(values)
        onSuccess()
    }
    return(
        <form className="popup__form" id="signUp" name="signUp" noValidate >
            <label className="popup__label"
            >Email</label>
            <input
            type="email"
            className="popup__input"
            name="email"
            id="emailSignUp"
            placeholder="Enter your email"
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
            id="passwordSignUp"
            name="password"
            minLength={3}
            placeholder="Enter password"
            value={values.password}
            onChange={handleChange}
            required
            />
            <span className="popup__input-error">{errors.password} </span>
            <label className="popup__label">Username</label>
            <input 
            type="text"
            className="popup__input"
            id="username"
            name="username"
            minLength={3}
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
            required
            />
            <span className="popup__input-error">{errors.username}</span>
            <button 
            type="submit" 
            id="submitSignUn" 
            className={`popup__button ${!isValid ? "popup__button_disabled" : ""}`}
            disabled={!isValid}
            onClick={handleSubmit}>
                Sign up
            </button>
        </form>
    )
}