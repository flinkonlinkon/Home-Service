import React, { useContext } from 'react'
import { Apicon } from './ContextPro'
import ManageService from './ManageService'
import { useNavigate } from 'react-router-dom'


export default function ManageServiceCardMap() {
    let {api} = useContext(Apicon)
    let navigate = useNavigate()

   

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3'>
      {
        api.map(x => <ManageService x={x}></ManageService>)
      }
    </div>
  )
}
