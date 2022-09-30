import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Cart.css'
import {Link } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../BaseUrl/BaseUrl'
function Cart() {
    const [cart , setCart] = useState(JSON.parse(localStorage.getItem("cart")) ?? [])
    const [totalValue , setTotalValue] = useState(0)
    useEffect(()=>{
        let value = 0
        cart.length>0 && cart.map((cartV)=>{
                 value = value + parseInt(cartV.price)
        })
        setTotalValue(value)
        

    },cart)

// const handleCheckOut =()=>{
//     axios.post(`${baseUrl}/addCart`,{cart:cart , userid:1 , amount:totalValue}).then((res)=>{
//         console.log(res)
//     })
// }
  return (
    <div>
    <Header></Header>
 
    <main class="page">
	 	<section class="shopping-cart dark">
	 		<div class="container">
		        <div class="block-heading">
		          <h2>Shopping Cart</h2>
		          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
		        </div>
		        <div class="content">
	 				<div class="row">
	 					<div class="col-md-12 col-lg-8">
                            {
                                cart && cart.length > 0 && cart.map((value)=>{
                                   return <div class="items">
                                    <div class="product">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <img class="img-fluid mx-auto d-block image" src="assets/img/image.jpg"/>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="info">
                                                    <div class="row">
                                                        <div class="col-md-5 product-name">
                                                            <div class="product-name">
   
                                                                <div class="product-info">
                                                                    <div>{value.name}</div>
                                                                    <div></div>
                                                                
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 quantity">
                                                            <label for="quantity">Quantity:</label>
                                                            <input id="quantity" type="number" value ="1" class="form-control quantity-input"/>
                                                        </div>
                                                        <div class="col-md-3 price">
                                                            <span>{value.price}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    
                                </div>
                                })
                            }
			 			</div>
			 			<div class="col-md-12 col-lg-4">
			 				<div class="summary">
			 					<h3>Summary</h3>
			 					<div class="summary-item"><span class="text">Subtotal:</span><span class="price"></span></div>
			 					<div class="summary-item"><span class="text">Shipping:</span><span class="price"></span></div>
			 					<div class="summary-item"><span class="text">Total:{totalValue ?? 0}</span><span class="price"></span></div>
			 					<Link to ='/checkout'><button type="button" class="btn btn-primary btn-lg btn-block">Checkout</button> </Link>
                                {/* <button type="button" class="btn btn-primary btn-lg btn-block" onClick={()=>handleCheckOut()}>Checkout</button> */}
				 			</div>
			 			</div>
		 			</div> 
		 		</div>
	 		</div>
		</section>
	</main>
  
  <Footer></Footer>
</div>
  )
}

export default Cart