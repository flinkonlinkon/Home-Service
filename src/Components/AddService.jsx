import React from 'react'
import { useContext } from 'react'
import { Apicon } from './ConTextPro'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AddService() {
  let {user} = useContext(Apicon)
  let navigate = useNavigate()

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

axios.post('http://localhost:5000/addData',allData).then(res => {
    if(res.data){
        Swal.fire({
            title: "Data Added",
            text: "Data Added Successfully",
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
  placeholder="Service Name"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='serviceDescription'
  placeholder="Service Description"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='serviceImage'
  placeholder="Service Image"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='providername'
  placeholder="Provider Name"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='provideremail'
  placeholder="Provider Email"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='providerimage'
  placeholder="Provider Image"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='servicePrice'
  placeholder="Service Price"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='location'
  placeholder="Location"
  className="input input-bordered input-primary w-full max-w-xs" />

  <button className='btn'>
  <input type="submit" value="Add Data" />
  </button>


      </form>
    </div>
  )
}
