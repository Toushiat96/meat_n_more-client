import React from 'react'
import {Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className="ml-5 sidebar d-flex flex-column justify-content-between  py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
            <li> 
                    <Link className="text-decoration-none text-dark item" to="/addproduct"> Add Product </Link>
                </li>
                <li>
        
                </li>
                <li>
                <Link className="text-decoration-none text-dark item" to="/review"> Review</Link>
                </li>
            </ul>
        </div>
  )
}

export default Sidebar