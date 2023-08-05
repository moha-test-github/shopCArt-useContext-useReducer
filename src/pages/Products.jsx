import React from 'react'
import products  from '../products'
import ProductsList from '../components/ProductsList'

function Products() {
  
 
  return (
    <main className="main">
       <div className="product-list">
       {products.map((product) => (
            <ProductsList product={product} key={product.id} />
          ))}
        </div>
    </main>
  )
}


export default  Products