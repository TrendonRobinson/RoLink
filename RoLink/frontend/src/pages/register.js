import axios from "axios";
import { useState, useEffect } from 'react';

import validator from 'validator'

import "../css/register.css"

let passwordValidator = require('password-validator');

let schema =  new passwordValidator();

// Add properties to it
schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
// .has().digits(2)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

export default function Register(Props) {
    
    // States
    const [validEmail, setValidEmail] = useState(true)
    const [matching, setMatching] = useState(true)
    const [validPassword, setValidPassword] = useState(true)
    const [canSubmit, setCanSubmit] = useState(false)
    const [inputs, setInputs] = useState({ 
        first: "", 
        last: "",
        email: "",
        username: "",
        password: "",
        confirm: ""
    })

    // Functions
    const validateEmail = (e) => {
        var email = e.target.value
      
        if (validator.isEmail(email)) {
            setValidEmail(true)
        } else {
            setValidEmail(false)
        }
        setCanSubmit(validEmail)
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        let url = "http://127.0.0.1:8000/api/users/"

        console.log(canSubmit, inputs)

        if (canSubmit) {
            // axios.post(url, inputs) // 4
            //     .then(res => alert("Form Submitted")) // 5
            //     .catch(errors => console.log(errors)) // 6

            const postRequest = async () => {
                try {
                    const resp = await axios.post(url, {
                        "email": inputs.email,
                        "username": inputs.first,
                        "password": inputs.password,
                        "first": inputs.first,
                        "last": inputs.last,
                        "is_admin": false,
                        "is_staff": false
                    });
                    console.log(resp.data);
                } catch (err) {
                    console.error(err);
                }
            }
            postRequest()
        }
    }

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        const copy = Object.assign({}, inputs)

        copy[name] = value

        if (value === "") {
            setCanSubmit(false)
        } else {
            setCanSubmit(true)
        }

        if (name === "confirm") {
            let bool = copy[name] === copy['password']
            setCanSubmit(bool)
            setMatching(bool)
        } else if (name === "email") {
            validateEmail(e)
            
        } else if (name === "password") {
            setValidPassword(schema.validate(value))
            setCanSubmit(validPassword)
        }

        

        setInputs(copy)
    }

    console.log(canSubmit)

    return (
        <div className="background">
            <div className="signup-box">
                        <h1>Register</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="Name">
                                <div className="Field">
                                    <input name="first" onChange={handleChange} type="text" placeholder="First Name" value={inputs.first || ""} />
                                </div>
                                <div className="Field">
                                    <input name="last" onChange={handleChange} type="text" placeholder="Last Name" value={inputs.last} />
                                </div>
                            </div>
                            
                            <div className="Field">
                                {validEmail ? '' : <p>Invalid Valid</p>}
                                <input name="email"  onChange={handleChange} type="email" placeholder="Email" value={inputs.email} />
                            </div>

                            <div className="Field">
                                {/* {validEmail ? '' : <p>Invalid Valid</p>} */}
                                <input name="username"  onChange={handleChange} type="username" placeholder="Username" value={inputs.username} />
                            </div>
                            
                            
                            <div className="Field">
                                {validPassword ? '' : <p>Invalid Password</p>}
                                <input name="password" onChange={handleChange} type="password" placeholder="Password" value={inputs.password} />
                            </div>

                            <div className="Field">
                                {matching ? '' : <p>Does not match password</p>}
                                <input name="confirm" onChange={handleChange} type="password" placeholder="Confirm" value={inputs.confirm} />
                            </div>
                            <input className="Submit" type="submit" value="Submit" />
                        </form>
                    </div>
        </div>
    );
}
