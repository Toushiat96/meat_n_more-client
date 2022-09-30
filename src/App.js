import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Allproductshow from './Components/Allproducts/Allproductshow';
import Beef from './Components/Beef/Beef';
import Mutton from './Components/Mutton/Mutton';
import Fish from './Components/Fish/Fish';
import Chicken from './Components/Chicken/Chicken';
import Other from './Components/Other/Other';
import Checkout from './Components/Checkout/Checkout';
import Cart from './Components/Cart/Cart';
import { useEffect, useState } from 'react';
function App() {
  const [pageLoad , setPageLoad] = useState(false)
  const cartInsUpdate = ()=>{
    setPageLoad(true)
  }
  useEffect(()=>{
      setPageLoad(true)
  },[pageLoad])
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home pageLoad={pageLoad}></Home>}></Route>
          <Route path='/allproductshow' element={<Allproductshow cartInsUpdate={()=>cartInsUpdate()}></Allproductshow>}></Route>
          <Route path='/beef' element={<Beef></Beef>}></Route>
          <Route path='/mutton' element={<Mutton></Mutton>}></Route>
          <Route path='/fish' element={<Fish></Fish>}></Route>
          <Route path='/chicken' element={<Chicken></Chicken>}></Route>
          <Route path='/other' element={<Other></Other>}></Route>
          <Route path='/checkout' element={<Checkout></Checkout>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
