import React, { useContext, useState } from 'react'
import { Apicon } from './ContextPro'
import ManageService from './ManageService'
import { useNavigate } from 'react-router-dom'


export default function ManageServiceCardMap() {
    let {api} = useContext(Apicon)
    let navigate = useNavigate()
    let [del,setDel] = useState('')

   

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3'>
      {
        api.map(x => <ManageService x={x} del={del} setDel={setDel}></ManageService>)
      }
    </div>
  )
}
