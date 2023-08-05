import React from 'react'
import {useNavigate, useParams} from "react-router-dom"
import products from '../products'

function ProductDetail() {

    const navigate =useNavigate()

    function goBack(){
        navigate('/products')
    }

    const productId = useParams().productId
    //console.log(productId)
    const thisProd = products.find(prod => prod.id === productId)
    //console.log(thisProd)
    
  return (
    <div className="detail">
        <button className='back' onClick={goBack}>🔙</button>
     <img src={thisProd.image} alt="Product 1" />
     <div className="sub-detail">

     <div>
      <h2>{thisProd.name}</h2>
     </div>

     <div>
      <p>{thisProd.description}</p>
      <h2  className='price'>{thisProd.price}</h2>
     </div>

      <button className="add-to-cart">Buy Now</button>
      </div>
    </div>
  )
}
export default ProductDetail
