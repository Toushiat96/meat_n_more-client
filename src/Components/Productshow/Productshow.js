import React, { useState } from 'react'
import fakedata from '../../fakadata/fakedata.json'
import Product from './Product';
function Productshow() {
    const first10 = fakedata.slice(0,8)
//    console.log(first10);
 const [product,setProduct] =useState(first10);
  return (
   
    <div className="container">
       
        <h3 className="text-center font-weight-bold">Provide awesome <span style={{color:"#7AB259"}}>products</span></h3>
        <div className="row mt-5">
        {
            product.map(pd=><Product products={pd}></Product>)
        }
        </div>
        <a className='text-right' href='/allproductshow'><h4>See More Products</h4></a>
        </div>
  )
}

export default Productshow