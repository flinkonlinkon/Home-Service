import React, { useContext, useEffect, useState } from 'react'
import { Apicon } from './ConTextPro'
import Card from './Card'
import axios from 'axios'

export default function AllService() {
  let {api} = useContext(Apicon)
  let [find,setFind] = useState('')
  let [getData,setGetData] = useState(api)
  useEffect(()=>{
    axios.get(`http://localhost:5000/alldata?findData=${find}`).then(res => {
      setGetData(res.data);
      console.log(res.data);
      
      
    })
  },[find])
  

  
  return (
    <div className='w-11/12'>
      <input
  type="text"
onChange={(e)=> setFind(e.target.value)}
  placeholder="Type here"
  className="input input-bordered input-md w-full max-w-xs" />
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3'>
      
{

  getData.map(x => <Card x={x}></Card>)

}
</div>
    </div>
  )
}
