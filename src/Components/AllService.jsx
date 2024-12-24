import React, { useContext } from 'react'
import { Apicon } from './ConTextPro'
import Card from './Card'

export default function AllService() {
  let {api} = useContext(Apicon)
  return (
    <div className='w-11/12'>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3'>
{

  api.map(x => <Card x={x}></Card>)

}
</div>
    </div>
  )
}
