import React, { useContext } from 'react'
import { Apicon } from './ContextPro'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function ManageService({x}) {
  let {handaleClick} = useContext(Apicon)
  let navigate = useNavigate()


  let {_id,serviceId,serviceName,serviceDescription,serviceImage,serviceProvider,servicePrice,location} = x
  
  function handleUpdate(x){
    console.log(x);
    
    navigate(`/updateHome/${_id}`)
    
}

function handleDelete(x){

  axios.delete(`http://localhost:5000/delete/${_id}`)
  .then(res =>{
    console.log(res.data);
    
  })

}

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl rounded-lg">
  <figure>
    <img className='w-36 object-cover'
      src={serviceImage}
      alt={serviceName} />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{serviceName}</h2>
    <div className='flex font-semibold'>
    <p><img className='w-20 rounded-full object-cover' src={serviceProvider.providerimage} alt="" /></p>
      <div>
        <p>Name: {serviceProvider.providername}</p>
        <p>Email: {serviceProvider.provideremail}</p>
      </div>
    </div>
    <p className='font-bold'>{serviceDescription}</p>
    <p className='font-bold'>Price: {servicePrice}</p>
    <p className='font-bold'>Location: {location}</p>

    <div className="card-actions justify-end">
      <button onClick={()=>handleUpdate(x)}  className="btn btn-primary">Update</button>
      <button onClick={()=>handleDelete(x)} className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
    </div>
  )
}
