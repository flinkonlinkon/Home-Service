import React, { useContext } from 'react'
import { Apicon } from './ContextPro'
import Buy from './Buy'

export default function Book() {
  let {book} = useContext(Apicon)
  return (
    <div className='gap-3'>
      {
        book.map(x => <Buy x={x}></Buy>)
      }
    </div>
  )
}
