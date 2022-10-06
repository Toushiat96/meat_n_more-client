
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import mach from '../../images/12.jpg'
import mach1 from '../../images/05.jpg'
import mach3 from '../../images/07.jpg'
import mach4 from '../../images/08.jpg'
import Footer from '../Footer/Footer'
import { baseUrl } from '../../BaseUrl/BaseUrl';
import axios from "axios";
function Fish({cartInsUpdate}) {
  const [allProduct, setAllProduct] = useState([])

  useEffect(() => {
    axios.get(`${baseUrl}/productCategory/3`).then((response) => {
      setAllProduct(response?.data?.result);
    });
  }, [])

// Add to cart

const addCart = (value) =>{
  const localCartValue = JSON.parse(localStorage.getItem("cart")) ?? []
  const updateValue = [...localCartValue , value]    
  localStorage.setItem("cart",JSON.stringify(updateValue))
  cartInsUpdate()
}

  return (
   

    <div>
        <Header></Header>
        <div className='container'>
        <div class="card-deck">
          {/* {
            console.log("allProduct", allProduct)
          } */}
          {
            allProduct && allProduct.length > 0 && allProduct.map((value,index) => {
              return <>
                <div className="col-md-3 col-sm-6">
                  <div class="card  ">
                    <img class="card-img-top" src={`images/${index}.jpg`} alt="Card image cap" />
                    <div class="card-body text-center">
                      <h5 class="card-title">{value.name}</h5>
                      <p class="card-text">Price : {value.price}</p>
                      <button class="buy-now-button"onClick={()=>addCart(value)} >Add To Cart</button>
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

export default Fish