import React, { useContext } from 'react'
import Slider from './Slider'
import { motion, animate, useTransform } from "framer-motion";
import { Apicon } from './ConTextPro';
import Card from './Card';

export default function Home() {
  let {api} = useContext(Apicon)
  return (
    <div className='w-11/12 mx-auto  bg-slate-200 rounded-md'>
      <Slider></Slider>
      
      <motion.div
      animate={{color:['#34ebc0','#ebc634']}}
      transition={{duration:2,repeat:Infinity}}
      className='text-3xl text-center font-bold mt-5 mb-5'>
        You Can Repair Any Home Product
      </motion.div>
      <div className='w-11/12 mx-auto bg-white'>

<div className='grid grid-cols-1 md:grid-cols-3 md:gap-3'>
{

  api.map(x => <Card x={x}></Card>)

}
</div>


      </div>
    </div>
  )
}
