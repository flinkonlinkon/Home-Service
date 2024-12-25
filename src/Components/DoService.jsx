import React, { useContext } from 'react'
import { Apicon } from './ContextPro'
import Buy from './Buy'
import DoCard from './DoCard'

export default function DoService() {
 let {book} = useContext(Apicon)
  return (
    <div>
       {
              book.map(x => <DoCard x={x}></DoCard>)
            }
    </div>
  )
}
