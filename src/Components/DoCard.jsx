import React, { useContext } from 'react'
import { use } from 'react'
import { Apicon } from './ContextPro'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function DoCard({x}) {

    let navigate = useNavigate()

    function handleStatus(e,id){
        // console.log(e.target.value,id);
        const data ={
            status : e.target.value
        }

        axios.put(`http://localhost:5000/updateStatus/${id}`, data).then(res => {
            // console.log(res.data);
            
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
    // console.log(x);
    
  return (
    <div>
     <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Service To Do</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={x.serviceProvider.providerimage}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{x.serviceProvider.providername}</div>
              
            </div>
          </div>
        </td>
        <td>
        {x.serviceProvider.providername}
          <br />
          <span className="badge badge-ghost badge-sm">{x.serviceName}</span>
        </td>
        <td>{x.serviceName}</td>

        <select defaultValue={x.status || 'Pending'} onChange={(e)=> handleStatus(e, x._id)} className="select select-bordered select-xs w-full max-w-xs">
  <option disabled>Pending</option>
  <option>Working</option>
  <option>Completed</option>
 
</select>
        
      </tr>
      
    </tbody>
    {/* foot */}
    
  </table>
</div>
    </div>
  )
}
