import React, { useContext, useState } from 'react'
import { Apicon } from './ConTextPro';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function Buy() {
    let {oldData,user} = useContext(Apicon)
    let navigate = useNavigate()
    const [date, setDate] = useState('');
    let [address, setAddress] = useState('')

    const {serviceId,serviceName,serviceDescription,serviceImage,serviceProvider,servicePrice,location} = oldData || {};
    function mod(){
        Swal.fire({
            title: "Successfully Purchase",
            icon: "success",
            draggable: true
            
          });
let userEmail = user.email
          let newData = {date,address,serviceId,serviceName,serviceDescription,serviceImage,serviceProvider,servicePrice,location,userEmail}
         
          console.log(newData);
          
          navigate('/')
    }
  return (
    <div>
         <div className='font-medium'>
       Service Data
         Name:{serviceProvider.name}
         <br></br>  

        Email:{serviceProvider.email } <br></br>  
              Service Id:{serviceId} <br></br>  
           Your Email : {user.email}
           <br></br> 
               Your Name:{user.displayName}
              
                </div> 
                <div>
                <input
  type="text"
  name='address'
  value={address}
  onChange={(e) => setAddress(e.target.value)}
  placeholder="Your Address"
  className="input input-bordered input-primary w-full max-w-xs" />
  <input
        className="ml-3 shadow-lg h-14 p-3 rounded-md"
        name="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
                </div>
                <button onClick={mod} className='btn'>Purchase</button>
    </div>
  )
}
