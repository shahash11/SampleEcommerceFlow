import React,{useState} from "react"
import DatePicker from 'react-datepicker';
import {Link} from "react-router-dom"

const SignUp = ()=>{
    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [startDate, setStartDate] = useState(new Date())

    const changeHandler=(e)=>{
        
        console.log(e.target.value)

    }

    const createAccount=()=>{
        alert("Signed Up successfully")
    }

    return(
        <div>
            SignUp Page
            <div>
                <label>FirstName</label>
                <input type= "text" placeholder="FirstName" value={fname} name="fname" onChange={changeHandler} />
                <br />

                <label>LastName</label>
                <input type= "text" placeholder="LastName" value={lname} name="lname" onChange={changeHandler} />
                <br />

                <label>Date of birth</label>
                <DatePicker 
                selected={startDate}
                onChange={(date)=>setStartDate(date)}
                />
                
                <button onClick={createAccount}>Sign Up</button>
                <br />
                {/* make this button to reach out LoginPage */}
                <Link to ="/" className="btn" >Already Have an Account</Link >
            </div>
        </div>
    )
}

export default SignUp;