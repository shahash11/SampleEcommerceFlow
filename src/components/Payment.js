import React from "react"
import {Link} from "react-router-dom"


const Payment=(props)=>{
console.log(props)
    return(
        <div>
           <h1>WELCOME TO PAYMENT PAGE</h1>
           <div className="centered">
               <h2>Shipping Address</h2>
               <label>Zipcode</label>
               <input type="number"  />
               <br/>
               <label>City</label>
               <input type="city" />
               <br/>
               <label>State</label>
               <input type="state" />
            </div>

            <div>
                <h2>Payment Details</h2>
                <label>Card Type</label>
                <select>
                    <option>Visa</option>
                    <option>Master Card</option>
                    <option>Debit Card</option>
                    <option>Credit Card</option>
                </select>
                <br />
                <label>Card Number</label>
                <input type="text" placeholder="card number" />
                <br />
                <label>Expiry Date</label>
                <input type="date" />
                <br />
                <label>Security Code</label>
                <input type="text" />
            </div>

            <Link to={"/order/" + props.match.params.id} className="button_order">Continue</Link>
        </div>
    )
}

export default Payment;