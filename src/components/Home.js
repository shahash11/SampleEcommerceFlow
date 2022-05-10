import React from "react"
import Items from "./Items"
// import Product from "./product.json"
import { useContext } from "react"
import { productContext } from "../App"
import { AuthContext } from "./Provider"

const Home = (props)=>{
    
    // const auth = useContext(authContext)
    const product = useContext(productContext)
    const {isLoggedIn, logout} = useContext(AuthContext);
    // console.log("product from context", product[0].product_name)
    // console.log(auth.isLoggedIn)
    console.log('login', localStorage.getItem('loginCheck'))
   
    console.log('is logged in', false);

    const logoutHandler=(e)=>{
        e.preventDefault();
        localStorage.setItem('loginCheck', "false");
        props.history.push("/")

    }

    if((localStorage.getItem('loginCheck')) ==="false")
    {
      props.history.push('/');
    }
   
    

    return (
        <div>
            
            
           <h1 style={{fontFamily:"Times", textAlign:"center", color:"blue"}}>Home Page</h1>
        
           <p style={{backgroundColor:"red", color:"white", textAlign:"center"}}>EBAY WELCOMES YOU</p>
           <button style={{display:"flow", flow:"right"}} onClick={logoutHandler}>Logout</button>
    
          

           <div>
               {product.map((value)=><Items key={value.id} id={value.id} name={value.product_name} price={value.price} rating={value.rating} />)}
           </div>
           
        </div>
    )
}

export default Home;