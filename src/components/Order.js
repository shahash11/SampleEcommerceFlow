import React from 'react'
// import Product from "./product.json"
import { useContext } from 'react'
import { productContext } from '../App'
import { Link } from 'react-router-dom'

const Order = (props) => {
    console.log(props)

    const product = useContext(productContext)
  return (
    <div>
        <h1>Welcome to Order Details Page</h1>
        <div>
        <p>Order Summary</p>
        {product.map((value)=>
        {
            if(value.id===props.match.params.id)
            {
                return (
                    <div>
                    <p>Item Name: {value.product_name}</p>
                    <p>Item Price: {value.price}</p>
                    <p>Tax: {0.1 * 'as'}</p>
                    <p>Order Total: {value.price}</p>
                    </div>
                )
            }
        })}
        <Link to= "/home" className="button_order1">Place your Order</Link>
        </div>
        
        
    </div>
  )
}

export default Order