import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Apicon } from './ContextPro'

export default function Navbar() {
  let {user,singsOut} = useContext(Apicon)

    
        
    
  return (
    <div className='w-11/12 mx-auto'>
      <div className="navbar bg-base-100">
  <div className="navbar-start z-50">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <li><NavLink to='/'>Home</NavLink></li>
        <li>
          <NavLink to='/allservices'>All Services</NavLink>
          
        </li>

        <li className= {user ? 'block' : 'hidden'} >
          <a>Dashboard</a>
          <ul className="p-2">
          <li>
          <NavLink to='/addservice'>Add-A-Service</NavLink>
          
        </li>
        <li>
          <NavLink to='/manageservices'>Manage-Services</NavLink>
          
        </li>
        <li>
          <NavLink to='/bookedservice'>Booked Service</NavLink>
          
        </li>
        <li>
          <NavLink to='/doservice'>Service-To-Do</NavLink>
          
        </li>
          </ul>
        </li>
        
      </ul>
    </div>
    <div className='flex gap-x-4 justify-center items-center'>
    <img className='w-20' src="https://i.ibb.co.com/HDDxmry/6499901.jpg" alt="" />
    <a className="btn btn-ghost text-xl hidden md:block">My Home Service</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 md:flex md:justify-center md:items-center">
    <li><NavLink to='/'>Home</NavLink></li>
    <li>
          <NavLink to='/allservices'>All Services</NavLink>
          
        </li>




        <details className= {user ? 'block' : 'hidden'}>
    
          <summary>Dashboard</summary>
          <ul className="p-2">
          <li>
          <NavLink to='/addservice'>Add-A-Service</NavLink>
          
        </li>
        <li>
          <NavLink to='/manageservices'>Manage-Services</NavLink>
          
        </li>
        <li>
          <NavLink to='/bookedservice'>Booked Service</NavLink>
          
        </li>
        <li>
          <NavLink to='/doservice'>Service-To-Do</NavLink>
          
        </li>
          </ul>
        

        </details>




   
       
        
    </ul>
  </div>
  <div className="navbar-end gap-x-2">
    {
      user ? (<Link onClick={()=>singsOut()} className="btn">Sing Out</Link>) : (<Link to='/login' className="btn">Log In</Link>) 
    }
    
    
    <div className="avatar">
  
</div>
<div className="avatar">
  <div className="w-24 rounded-full">
    <img  src={user? user.photoURL : 'https://i.ibb.co.com/6ZH9wxD/3551911.jpg'} />
  </div>
</div>
  </div>
</div>
    </div>
  )
}