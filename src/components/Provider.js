import React, {useState, createContext} from "react"

const AuthContext = createContext()

const AuthProvider = (props)=>{
// console.log(props)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    console.log(useState)

    const login=()=>{
        setIsLoggedIn(true)
    }

    const logout=()=>{
        setIsLoggedIn(false)
    }
    const authValues={
        isLoggedIn, setIsLoggedIn, login, logout
    };
    return(
        <AuthContext.Provider value={authValues}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}

