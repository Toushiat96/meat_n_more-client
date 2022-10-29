import React, { useState } from 'react';
import Header from '../Header/Header'
import { Form } from "react-bootstrap";
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
function AddProduct() {

    const [photo, setPhoto] = useState(null);
    const [info, setInfo] = useState({});


    const handleFileChange = (e) =>{
        const newFile = e.target.files[0];
        console.log(newFile)
        setPhoto(newFile);
    }

    const imageHandlerNidBack =(e)=>{
        const reader = new FileReader();
        reader.onload = ()=>{
            if(reader.readyState === 2){
                setPhoto(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0])
        console.log(reader)
       }
    
const handleBlur = e => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
}


const handleSubmit = (e) =>{
    e.preventDefault()
    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('name',info.name);
    formData.append('tag',info.tag);
    formData.append('quantity',info.quantity);
    formData.append('price',info.price);
    console.log('form data:',formData)
    fetch('http://localhost:5000/addproduct', {
        method: 'POST',
        body: formData
       
    })
    
        .then(response => response.json())
        .then(data => {
            if (data) {
                alert('Your order is submitted...!');
            }
        })
        
        .catch(error => {
            console.error(error)
        })
    
}



  return (
    <div>
        <Header></Header>
        <div className='container'> 
        <div className="col-md-10 mt-5">
           <h1>Add Your Product</h1>
           <Form onSubmit={handleSubmit}>
           <div className="form-group">
                                <input onBlur={handleBlur}  className="form-control  form-control-lg" type="text"  name="name" placeholder="Product Name" />
                            </div>
                        
                            <div className="form-group">
                                <input  onBlur={handleBlur} className="form-control  form-control-lg" type="text" name="tag" placeholder="Tag Id" />
                            </div>
                            <div className="form-group">
                                <input  onBlur={handleBlur} className="form-control  form-control-lg" type="text" name="quantity"  placeholder="Quantitty" />
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-4">
                                    <input  onBlur={handleBlur} className=" form-control-lg" type="text" name="price" placeholder="Price" />
                                </div>
                                <div className="ml-2 col-sm-4">
                                    <input className="form-control-lg" type="file" name="photo" id="" onChange={imageHandlerNidBack} />
                                </div>
                            </div>
                            <div className="form-group">
                                <input  type="submit" value="Submit" className="btn-black"/>
                            </div>
           
           </Form>
           </div>
           </div>
           
    </div>
  )
}

export default AddProduct