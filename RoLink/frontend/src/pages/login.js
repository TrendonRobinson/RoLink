import axios from "axios";
import { useState, useEffect } from 'react';

import "../css/register.css"

export default function Login(props) {

  let url = "http://127.0.0.1:8000/api/users/"


  // States
  let [users, setUsers] = useState([])
  let [inputs, setInputs] = useState({
    email: '',
    password: ''
  })


  // useEffect
  useEffect(() => {
    axios
      .get("/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, [])


  // Functions
  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .get("/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));

  }

  const handleChange = (e) => {
      const value = e.target.value
      const name = e.target.name
      const copy = Object.assign({}, inputs)

      copy[name] = value

      setInputs(copy)

      
  }

  console.log(users)

  return (
    <div className="background">
            <div className="signup-box">
                        <h1>Login</h1>
                        <form onSubmit={handleSubmit}>
                            
                            <div className="Field">
                                <input name="email"  onChange={handleChange} type="email" placeholder="Email" value={inputs.email} />
                            </div>
                            
                            
                            <div className="Field">
                                <input name="password" onChange={handleChange} type="password" placeholder="Password" value={inputs.password} />
                            </div>

                            <input className="Submit" type="submit" value="Submit" />
                        </form>
                    </div>
        </div>
  );
}
