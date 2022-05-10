import React from 'react'
import { Link } from 'react-router-dom'
// import Product from "./product.json"
import { useContext } from 'react'
import { productContext } from '../App'

const Detail = (props) => {
  console.log(props)
  const product = useContext(productContext)
  

  return (
    <div>
        DETAILS PAGE
        {product.map((value)=>
        {
          if(value.id===props.match.params.id)
          {
            console.log(value.product_name);
            return(
              <div key={value.id}>
                <p>{value.product_name}</p>
                <p>{value.price}</p>
                <p>{value.rating}</p>

                </div>
              
            )
            
            
            
          }
        }
        )}

        <p>Item ID Number: {props.match.params.id}</p> 
        <Link to={"/payment/" +props.match.params.id} className='button'>Buy</Link>
    </div>
  )
}

export default Detail