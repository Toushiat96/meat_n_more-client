import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { baseUrl } from '../../BaseUrl/BaseUrl';
import Footer from '../Footer/Footer'
import axios from "axios";
function Chicken() {
    const [allProduct, setAllProduct] = useState([])

    useEffect(() => {
      axios.get(`${baseUrl}/productCategory/4`).then((response) => {
        setAllProduct(response?.data?.result);
      });
    }, [])
    return (
     
  
      <div>
          <Header></Header>
          <div className='container'>
          <div class="card-deck">
            {/* {
              console.log("allProduct", allProduct)
            } */}
            {
              allProduct && allProduct.length > 0 && allProduct.map((value) => {
                return <>
                  <div className="col-md-3 col-sm-6">
                    <div class="card  ">
                      <img class="card-img-top" src={`${baseUrl}/images/${value}.jpg`} alt="Card image cap" />
                      <div class="card-body text-center">
                        <h5 class="card-title">{value.name}</h5>
                        <p class="card-text">Price : {value.price}</p>
                        <button class="buy-now-button">Add To Cart</button>
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

export default Chicken