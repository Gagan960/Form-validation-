import React, { useRef, useState } from 'react'
import { isValidPassword } from '../Helper/Validatepassword';
import { isValidEmail } from '../Helper/Validateemail';
function Form() {

    const [formvalue, setformvalue] = useState({
        email: "",
        password: ""
    });

    const passwordref =useRef(null);
    const emailRef = useRef(null);

    function validatingemail(){
        if(!isValidPassword(formvalue.password)){
            console.log("password not as required")
        }
    }

    function validatingpassword(){
        if(!isValidEmail(formvalue.email)){
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
        <div>Form
            <form onSubmit={handler}>
                email:<input type='text'
                    value={formvalue.email}
                    ref={emailRef}
                    onChange={(e) => setformvalue({ ...formvalue, email: e.target.value })}
                />
                password:<input
                    type='password'
                    value={formvalue.password}
                    ref={passwordref}
                    onChange={(e) => setformvalue({ ...formvalue, password: e.target.value })}
                />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default Form