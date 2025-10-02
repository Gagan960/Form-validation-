import React, { useRef, useState } from 'react'
import { isValidPassword } from '../Helper/Validatepassword';
import { isValidEmail } from '../Helper/Validateemail';
import "./Form.css"; // Importing the CSS file

function Form() {
    const [formvalue, setformvalue] = useState({
        email: "",
        password: ""
    });

    const passwordref = useRef(null);
    const emailRef = useRef(null);

    function validatingemail() {
        if (!isValidPassword(formvalue.password)) {
            console.log("password not as required")
        }
    }

    function validatingpassword() {
        if (!isValidEmail(formvalue.email)) {
            console.log("email not as required")
        }
    }

    function handler(event) {
        event.preventDefault();
        console.log(formvalue);
        validatingpassword();
        validatingemail();
        emailRef.current.focus();
    }

    return (
        <div className="form-container">
            <h2>Login Form</h2>
            <form onSubmit={handler} className="form-box">
                <label>Email:</label>
                <input 
                    type="text"
                    value={formvalue.email}
                    ref={emailRef}
                    onChange={(e) => setformvalue({ ...formvalue, email: e.target.value })}
                />

                <label>Password:</label>
                <input
                    type="password"
                    value={formvalue.password}
                    ref={passwordref}
                    onChange={(e) => setformvalue({ ...formvalue, password: e.target.value })}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
