import React, { useContext } from 'react'
import { Apicon } from './ContextPro'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function Details() {
    let {arrData,setArrData,handaleClick,setOlddata,oldData,user} = useContext(Apicon)
    let navigate = useNavigate()
    const {serviceId,serviceName,serviceDescription,serviceImage,serviceProvider,servicePrice,location} = oldData || {};
    console.log(user);
    
    function modal(){
       navigate('/buy')
    }
    
  return (
    <div className='w-11/12 mx-auto mt-3 mb-3 shadow-lg'>

        <div className='md:flex gap-3 p-3'>

        

        <div>
            <img className='h-[600px] w-[341px] object-cover rounded-2xl' src={serviceImage} alt="" />
        </div>
        <div className='relative left-[55px]'>

            <h1 className='text-2xl font-bold md:text-3xl'>{serviceName}</h1>

            <div className='flex font-semibold justify-center items-center'>
      <p><img className='w-20 rounded-full object-cover' src={serviceProvider.image} alt="" /></p>
      <div>
        <p>Name: {serviceProvider.name}</p>
        <p>Email: {serviceProvider.email}</p>
      </div>
    </div>



            <p className='font-bold mt-3'>Location:{location}</p>
            

       
        <div>
        <p className='text-xl font-bold'>ShortDescription:</p><p className='text-gray-500 font-semibold'>{serviceDescription}</p>
        </div>
       



        <button onClick={modal} className='btn'>Book Now</button>


        </div>

        

        </div>
      
    </div>
  )
}