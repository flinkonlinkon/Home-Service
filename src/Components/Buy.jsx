import React, { useContext, useState } from 'react'
import { Apicon } from './ConTextPro';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Buy({x}) {
    let {oldData,user} = useContext(Apicon)
    let navigate = useNavigate()
    const [date, setDate] = useState('');
    let [address, setAddress] = useState('')
    // console.log(x);
    

    const {serviceId,serviceName,serviceDescription,serviceImage,serviceProvider,servicePrice,location} = x || {};
    function mod(){
        Swal.fire({
            title: "Successfully Purchase",
            icon: "success",
            draggable: true
            
          });
let userEmail = user.email
          let newData = {date,address,serviceId,serviceName,serviceDescription,serviceImage,serviceProvider,servicePrice,location,userEmail}
         
          // console.log(newData);

          axios.post('http://localhost:5000/buy',newData).then(res =>{
            if(res.data){
              navigate('/')
            }
          })
          
          
    }
  return (
    <div className='p-3 gap-1 mt-3 mb-3 shadow-md rounded-md'>
         <div className='font-medium'>
       Service Data
         Name:{serviceProvider.providername}
         <br></br>  

        Email:{serviceProvider.provideremail } <br></br>  
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
