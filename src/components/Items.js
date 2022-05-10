import React from "react"
import {Link} from "react-router-dom"
import "./stylesheet.css"
// import { useContext } from "react"
// import { productContext } from "../App"
const Items=(props)=>{
    console.log(props)

    return(
        <div>
            <div>
                <ul>
                <li style={{listStyleType:"none"}}><Link to={"/detail/" + props.id}>{props.name}</Link></li>
                <li style={{listStyleType:"none"}}>{props.rating}</li>
                </ul>
                
            </div>
            <br />
        </div>
    )

}

export default Items;