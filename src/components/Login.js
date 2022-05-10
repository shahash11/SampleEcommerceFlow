import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Users from "./users.json"
import {useContext} from "react"
import { AuthContext } from "./Provider";
const Login = (props) => {


  const {login, logout, isLoggedIn} = useContext(AuthContext)
  //console.log('is logged in ',isLoggedIn)
  console.log('login', localStorage.getItem('loginCheck'))
  const [user, setUser]=useState("")
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
     
  const userHanlder = (e) => {
    console.log(e.target.value);
    let item = e.target.value;
    if (item === "shahash") {
      setUserError(false);
    } else {
      setUserError(true);
    }
    setUser(e.target.value);
  };

  const passwordHandler = (e) => {
    let item = e.target.value;
    if (item.length <= 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
 
    for(let i=0;i<6;i++)
    {
      if(user===Users[i].name && password===Users[i].pass)
      {
        localStorage.setItem('loginCheck', "true");
        props.history.push("/home");
      }
    }
      
    
  };
  
  
  return (
    <div>
      Login Page:
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input
          type="text" 
          placeholder="Enter your username"
          value={user}
          name="user"
          onChange={userHanlder}
        />
        {userError ? <p>Must enter "shahash"</p> : ""}
        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          name="password"
          onChange={passwordHandler}
        />
        {passwordError ? (
          <p>
            Password must be at least 7 digits or either number or alphabets
          </p>
        ) : (
          ""
        )}
        <br />

        <button>Submit</button>
        <br />
        <Link to="/signUp" className="btn">
          SignUp
        </Link>
        
      </form>
    </div>
  );
};

export default Login;
