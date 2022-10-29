import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import logo from '../../images/logo.jpg'
import {Link } from 'react-router-dom'
import axios from "axios";
import { baseUrl } from '../../BaseUrl/BaseUrl'
import Sidebar from './Sidebar';

function AdminPanel() {
    const [information, setInformation] = useState([])

  useEffect(() => {
    axios.get(`${baseUrl}/information`).then((response) => {
      setInformation(response?.data?.result);
    });
  }, [])

  return (
    <div>
        {/* <Header></Header> */}
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 mt-5">
                    <div className="mb-5">
                        <Link to="/home">
                            <img className="img-fluid w-50" src={logo} alt="" />
                        </Link>
                    </div>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-5">
                    <h1 className="font-weight-bold">Service List</h1>
                    <div className="bg-light p-5 rounded">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Delivary Date</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Payment method</th>
                                    
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Product Quantity</th>
                                    <th scope="col">Product Price</th>
                                    <th scope="col">Total Amount</th>
                                </tr>
                            </thead>
                           
                            
                            {
                               information.map((inf)=>(
                                <tbody>
                                <td>{inf.lname}</td>
                                <td>{inf.phone}</td>
                                <td>{inf.delivary_date}</td>
                                <td>{inf.address}</td>
                                <td>{inf.payment_method}</td>
                                <td>{inf.product_name}</td>
                                <td>{inf.product_quantity}</td>
                                <td>{inf.product_price}</td>
                                <td>{inf.total_amount}</td>
                                
                               
                             
                                

                            </tbody>
                               ))}




                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminPanel