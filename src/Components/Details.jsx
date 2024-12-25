import React, { useContext } from 'react'
import { Apicon } from './ContextPro'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Details() {
    let {arrData,setArrData,handaleClick,setOlddata,oldData,user} = useContext(Apicon)
    let navigate = useNavigate()
    const {serviceId,serviceName,serviceDescription,serviceImage,serviceProvider,servicePrice,location} = oldData || {};
    
    
    function modal(){
       navigate('/bookedservice')
       axios.post('http://localhost:5000/book',oldData).then(res =>{
        console.log(res.data);
        
       })
       
    }
    
  return (
    <div className='w-11/12 mx-auto mt-3 mb-3 shadow-lg'>

        <div className='md:flex gap-3 p-3'>

        

        <div>
            <img className='h-[600px] w-[1400px] object-cover rounded-2xl' src={serviceImage} alt="" />
        </div>
        <div className='relative'>

            <h1 className='text-2xl font-bold md:text-3xl'>{serviceName}</h1>

            <div className='flex font-semibold  items-center'>
      <p><img className='w-20 rounded-full object-cover' src={serviceProvider.providerimage} alt="" /></p>
      <div>
        <p>Name: {serviceProvider.providername}</p>
        <p>Email: {serviceProvider.provideremail}</p>
      </div>
    </div>



            <p className='font-bold mt-3'>Location:{location}</p>
            <p className='font-bold mt-3'>Price:{servicePrice}</p>
            

       
        <div>
        <p className='text-xl font-bold w-4/5 mt-5 mb-5'>ShortDescription:</p><p className='text-gray-500 font-semibold'>{serviceDescription}</p>
        </div>
       



        <button onClick={modal} className='btn'>Book Now</button>


        </div>

        

        </div>
      
    </div>
  )
}