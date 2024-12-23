import React, { useContext, useState } from 'react'
import { Apicon } from './ContextPro'

export default function Update() {

    let {api} = useContext(Apicon)

    let [serviceName,setserviceName] = useState(api?.serviceName)
    let [serviceDescription,setserviceDescription] = useState(api?.serviceDescription)
    let [location,setlocation] = useState(api?.location)
    let [serviceImage,setserviceImage] = useState(api?.serviceImage)
    let [providername,setprovidername] = useState(api?.providername)
    let [provideremail,setprovideremail] = useState(api?.provideremail)
    let [providerimage,setproviderimage] = useState(api?.providerimage)
    let [servicePrice,setservicePrice] = useState(api?.servicePrice)


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
    
    
      }





  return (
    <div>
       <div>
      <form className='grid grid-cols-1 md:grid-cols-3 gap-3 mb-5 mt-5' onSubmit={handleInput}>

      <input
  type="text"
  name='serviceName'
  value={serviceName}
  onChange={(e)=> setserviceName(e.target.value)}
  placeholder="Service Name"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='serviceDescription'
  value={serviceDescription}
  onChange={(e)=> setserviceDescription(e.target.value)}
  placeholder="Service Description"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='serviceImage'
  value={serviceImage}
  onChange={(e)=> setserviceImage(e.target.value)}
  placeholder="Service Image"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='providername'
  value={providername}
  onChange={(e)=> setprovidername(e.target.value)}
  placeholder="Provider Name"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='provideremail'
  value={provideremail}
  onChange={(e)=> setprovideremail(e.target.value)}
  placeholder="Provider Email"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='providerimage'
  value={providerimage}
  onChange={(e)=> setproviderimage(e.target.value)}
  placeholder="Provider Image"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='servicePrice'
  value={servicePrice}
  onChange={(e)=> setservicePrice(e.target.value)}
  placeholder="Service Price"
  className="input input-bordered input-primary w-full max-w-xs" />
      <input
  type="text"
  name='location'
  value={location}
  onChange={(e)=> setlocation(e.target.value)}
  placeholder="Location"
  className="input input-bordered input-primary w-full max-w-xs" />

  <button className='btn'>
  <input type="submit" value="Update Data" />
  </button>


      </form>
    </div>
    </div>
  )
}
