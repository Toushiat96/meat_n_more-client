import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'


function Checkout() {
  const [cart , setCart] = useState(JSON.parse(localStorage.getItem("cart")) ?? [])
    const [totalValue , setTotalValue] = useState()
    useEffect(()=>{
        let value = 0
        cart.length>0 && cart.map((cartV)=>{
                 value = value + parseInt(cartV.price)
        })
        setTotalValue(value)
        

    },[])

  
  const [user, setUser] = useState({
      fname:'',
      lname:'',
      phone:'',
      delivery_date:'',
      payment_method:'COD',
      address:'',
      total_amount:'',
      cart:cart
      
  });

  // get data from the input field
  let name,value;
  const handleInputs =(e)=>{
   name = e.target.name;
   value = e.target.value;
   setUser({...user,[name]:value})

  }

  
  // sending data to server
  const PostData = async(e)=>{
    e.preventDefault();
    const {fname, lname, address,delivery_date,phone,payment_method,total_amount,cart} = user;
    
    setUser({total_amount:totalValue})
   const res =  await fetch('http://localhost:5000/checkout',{
       method:"POST",
       headers:{
           "Content-Type":"application/json"
       },
       body:JSON.stringify({
        fname, lname, address,delivery_date,phone,payment_method,total_amount,cart
       })

   });
  const data = res.json();
  if(res.status === 422 || !data){
      window.alert('Invalid Registration!!');
  }
  else{
      window.alert('Registration Successfull');
      
  }

  }
  return (
    <div>
        <Header></Header>
        <div className="maincontainer">
       {/* <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
          <h5 class="my-0 mr-md-auto font-weight-normal">Company name</h5>
          <nav class="my-2 my-md-0 mr-md-3">
            <a class="p-2 text-dark" href="#">Features</a>
            <a class="p-2 text-dark" href="#">Enterprise</a>
            <a class="p-2 text-dark" href="#">Support</a>
            <a class="p-2 text-dark" href="#">Pricing</a>
          </nav>
          <a class="btn btn-outline-primary" href="#">Sign up</a>
        </div> */}
        <div class="container">
          <div class="py-5 text-center">
            
            <h2>Checkout form</h2>
            <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>

          <div class="row">
            <div class="col-md-4 order-md-2 mb-4">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Your cart</span>
                <span class="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Product name</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">12</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Second product</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">$8</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Third item</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">$5</span>
                </li>
                {/* <li class="list-group-item d-flex justify-content-between bg-light">
                  <div class="text-success">
                    <h6 class="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span class="text-success">-$5</span>
                </li> */}
                <li class="list-group-item d-flex justify-content-between">
                  <span>Total (BDT)</span>
                  <strong>{totalValue}</strong>
                </li>
              </ul>

              {/* <form class="card p-2">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Promo code"/>
                  <div class="input-group-append">
                    <button type="button" class="btn btn-secondary">Redeem</button>
                  </div>
                </div>
              </form> */}
            </div>
            <div class="col-md-8 order-md-1">
              <h4 class="mb-3">Shipping  Address</h4>
              <form class="needs-validation" method='POST' novalidate>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" class="form-control" name="fname" value={user.fname} onChange={handleInputs} id="fname" placeholder=""  required />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" name="lname" value={user.lname} onChange={handleInputs} required />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="username">Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">@</span>
                    </div>
                    <input type="text" class="form-control" id="username" placeholder="Username" required />
                    <div class="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="email">Enter Your Valid Phone Number <span class="text-muted"></span></label>
                  <input type="phone" class="form-control" name="phone" value={user.phone} onChange={handleInputs} id="phone" placeholder="123-45-678" />
                  <div class="invalid-feedback">
                    Please enter a valid phone number for shipping updates.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="email">Enter Your Delivary Date  <span class="text-muted"></span></label>
                  <input type="date" name="delivery_date" value={user.delivery_date} onChange={handleInputs} id="date"  />
                  <div class="invalid-feedback">
                    Please enter a valid date for shipping updates.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="email">Email <span class="text-muted"></span></label>
                  <input type="email" class="form-control" id="email" placeholder="you@gmail.com" />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div class="mb-3">
                  <label for="address">Address</label>
                  <input type="text" class="form-control" name="address" value={user.address} onChange={handleInputs} id="address" placeholder="1234 Main St" required />
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div class="mb-3">
                  <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                  <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
                </div>
{/* 
                <div class="row">
                  <div class="col-md-5 mb-3">
                    <label for="country">Country</label>
                    <select class="custom-select d-block w-100" id="country" required>
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="state">State</label>
                    <select class="custom-select d-block w-100" id="state" required>
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="zip">Zip</label>
                    <input type="text" class="form-control" id="zip" placeholder="" required />
                    <div class="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div> */}
                <hr class="mb-4" />
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="same-address" />
                  <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                </div>
                {/* <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="save-info" />
                  <label class="custom-control-label" for="save-info">Save this information for next time</label>
                </div> */}
                <hr class="mb-4" />

                <h4 class="mb-3">Payment</h4>

                <div class="d-block my-3">
                  <div class="custom-control custom-radio">
                    <input id="credit" name="payment_method" value={user.payment_method} onChange={handleInputs} type="radio" class="custom-control-input" checked required />
                    <label class="custom-control-label" for="credit">Cash On Delivery</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="debit" name="payment_method" value={user.payment_method} onChange={handleInputs} type="radio" class="custom-control-input" required />
                    <label class="custom-control-label" for="debit">Bkash</label>
                  </div>
                  {/* <div class="custom-control custom-radio">
                    <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required />
                    <label class="custom-control-label" for="paypal">Paypal</label>
                  </div> */}
                </div>
               
                
                <hr class="mb-4" />
                <input type="text" name='total_amount'  value={totalValue} />
                <button onClick={PostData} class="btn btn-primary btn-lg btn-block" type="button">Confirm Order</button>
              </form>
            </div>
          </div>

          <footer class="my-5 pt-5 text-muted text-center text-small">
            <p class="mb-1">&copy; 2022 wwww.meatnmore.com</p>
            <ul class="list-inline">
              <li class="list-inline-item"><a href="/home">Home</a></li>
              <li class="list-inline-item"><a href="#">Terms</a></li>
              <li class="list-inline-item"><a href="#">Support</a></li>
            </ul>
          </footer>
        </div>
     
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Checkout