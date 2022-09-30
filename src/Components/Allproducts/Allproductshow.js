import React, { useEffect, useState } from 'react'
import fakedata from '../../fakadata/fakedata.json'
import Header from '../Header/Header';
import mutton from '../../images/2.jpg'
import chiken from '../../images/04.jpg'
import mach from '../../images/12.jpg'
import egg from '../../images/09.jpg'
import Footer from '../Footer/Footer';
import axios from "axios";
import { baseUrl } from '../../BaseUrl/BaseUrl';

function Allproductshow({cartInsUpdate}) {

  const [allProduct, setAllProduct] = useState([])

  useEffect(() => {
    axios.get(`${baseUrl}/productShow`).then((response) => {
      setAllProduct(response?.data?.result);
    });
  }, [])

  const addCart = (value) =>{
         const localCartValue = JSON.parse(localStorage.getItem("cart")) ?? []
         const updateValue = [...localCartValue , value]    
         localStorage.setItem("cart",JSON.stringify(updateValue))
         cartInsUpdate()
  }

  return (
    <div>
      <Header></Header>
      <div class="container">
        <div class="product-header">


          <h1 className='text-center'>ALL PRODUCTS</h1>


        </div>
        <div class="card-deck">
          {
            console.log("allProduct", allProduct)
          }
          {
            allProduct && allProduct.length > 0 && allProduct.map((value) => {
              return <>
                <div className="col-md-3 col-sm-6">
                  <div class="card  ">
                    <img class="card-img-top" src={`${baseUrl}/images/${value}.jpg`} alt="Card image cap" />
                    <div class="card-body text-center">
                      <h5 class="card-title">{value.name}</h5>
                      <p class="card-text">Price : {value.price}</p>
                      <p class="card-text">quantity : {value.quantity}</p>
                      <button class="buy-now-button" onClick={()=>addCart(value)}>Add To Cart</button>
                    </div>

                  </div>
                </div>
              </>
            })
          }
        
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Allproductshow