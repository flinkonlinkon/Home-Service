// import React, { useContext, useState } from 'react'
// import { Apicon } from './ContextPro'
// import { useLoaderData, useParams } from 'react-router-dom'
// import axios from 'axios';

// export default function Update({x}) {
//     let {user} = useContext(Apicon)

//     const { id } = useParams();

//     let data = useLoaderData() || {};

//     console.log(data);
    
    

    

   

    let [serviceName,setserviceName] = useState(data?.serviceName || "")
//     let [serviceDescription,setserviceDescription] = useState(data?.serviceDescription || "")
//     let [location,setlocation] = useState(data?.location || "")
//     let [serviceImage,setserviceImage] = useState(data?.serviceImage || "")
//     let [providername,setprovidername] = useState(data?.providername || "")
//     let [provideremail,setprovideremail] = useState(data?.provideremail || "")
//     let [providerimage,setproviderimage] = useState(data?.providerimage || "")
//     let [servicePrice,setservicePrice] = useState(data?.servicePrice || "")


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

        axios.put(`http://localhost:5000/updateData/${id}`,allData).then(res=>{
           if(res.data){
            Swal.fire({
                title: "Successfully",
                text: "Update Movie Successfully",
                icon: "success"
              });
           }
            
        })
    
    
      }





//   return (
//     <div>
//        <div>
//       <form className='grid grid-cols-1 md:grid-cols-3 gap-3 mb-5 mt-5' onSubmit={handleInput}>

//       <input
//   type="text"
//   name='serviceName'
//   value={serviceName}
//   onChange={(e)=> setserviceName(e.target.value)}
//   placeholder="Service Name"
//   className="input input-bordered input-primary w-full max-w-xs" />
//       <input
//   type="text"
//   name='serviceDescription'
//   value={serviceDescription}
//   onChange={(e)=> setserviceDescription(e.target.value)}
//   placeholder="Service Description"
//   className="input input-bordered input-primary w-full max-w-xs" />
//       <input
//   type="text"
//   name='serviceImage'
//   value={serviceImage}
//   onChange={(e)=> setserviceImage(e.target.value)}
//   placeholder="Service Image"
//   className="input input-bordered input-primary w-full max-w-xs" />
//       <input
//   type="text"
//   name='providername'
//   value={providername}
//   onChange={(e)=> setprovidername(e.target.value)}
//   placeholder="Provider Name"
//   className="input input-bordered input-primary w-full max-w-xs" />
//       <input
//   type="text"
//   name='provideremail'
//   value={provideremail}
//   onChange={(e)=> setprovideremail(e.target.value)}
//   placeholder="Provider Email"
//   className="input input-bordered input-primary w-full max-w-xs" />
//       <input
//   type="text"
//   name='providerimage'
//   value={providerimage}
//   onChange={(e)=> setproviderimage(e.target.value)}
//   placeholder="Provider Image"
//   className="input input-bordered input-primary w-full max-w-xs" />
//       <input
//   type="text"
//   name='servicePrice'
//   value={servicePrice}
//   onChange={(e)=> setservicePrice(e.target.value)}
//   placeholder="Service Price"
//   className="input input-bordered input-primary w-full max-w-xs" />
//       <input
//   type="text"
//   name='location'
//   value={location}
//   onChange={(e)=> setlocation(e.target.value)}
//   placeholder="Location"
//   className="input input-bordered input-primary w-full max-w-xs" />

//   <button className='btn'>
//   <input type="submit" value="Update Data" />
//   </button>


//       </form>
//     </div>
//     </div>
//   )
// }
