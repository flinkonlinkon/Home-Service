import React, { useContext, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { Apicon } from './ConTextPro'
import Swal from 'sweetalert2'
import axios from 'axios'

export default function Update() {
  let {user} = useContext(Apicon)

    let data = useLoaderData()
    let navigate = useNavigate()

    
    let {_id,serviceId,serviceName,serviceDescription,serviceImage,serviceProvider,servicePrice,location} = data

    console.log(data);

    function handleInput(e){
      e.preventDefault()
  
      let serviceName = e.target.serviceName.value
      let serviceDescription = e.target.serviceDescription.value
      let location = e.target.location.value
      let serviceImage = e.target.serviceImage.value
      let providername = e.target.providername.value
      let provideremail = e.target.provideremail.value
      let providerimage = e.target.providerimage.value
      let servicePrice = e.target.servicePrice.value
  
      let userEmail = user.email
  
      let serviceProvider = {provideremail,providerimage,providername}
      let allData = {serviceProvider,serviceName,serviceDescription,serviceImage,servicePrice,location,userEmail}
  console.log(allData);
  
  axios.put(`http://localhost:5000/updateHome/${_id}`,allData).then(res => {
    console.log(res.data);
    
    if(res.data){
        Swal.fire({
            title: "Update",
            text: "Update Data Successfully",
            icon: "success"
          });
        navigate('/')
    }
})
  
  
  
    }

    
    

  return (
    <div>
      <form className='grid grid-cols-1 md:grid-cols-3 gap-3 mb-5 mt-5' onSubmit={handleInput}>

      <input
  type="text"
  name='serviceName'
  defaultValue={serviceName}
  placeholder="Service Name"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='serviceDescription'
  defaultValue={serviceDescription}
  placeholder="Service Description"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='serviceImage'
  defaultValue={serviceImage}
  placeholder="Service Image"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='providername'
  defaultValue={serviceProvider.providername}
  placeholder="Provider Name"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='provideremail'
  defaultValue={serviceProvider.provideremail}
  placeholder="Provider Email"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='providerimage'
  defaultValue={serviceProvider.providerimage}
  placeholder="Provider Image"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='servicePrice'
  defaultValue={servicePrice}
  placeholder="Service Price"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='location'
  defaultValue={location}
  placeholder="Location"
  className="input input-bordered input-primary w-full max-w-xs" />

  <button className='btn'>
  <input type="submit" value="Update Data" />
  </button>


      </form>
    </div>
  )
}
