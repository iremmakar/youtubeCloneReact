import React, { useState } from 'react'


import {FaBell,FaYoutube} from "react-icons/fa"
import {FiSearch} from "react-icons/fi"

import { Link, useNavigate } from 'react-router-dom'

import { Navigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();

  const [query,setQuery] = useState("");

 


  return (
    <header className='flex justify-between items-center p-5 sticky'>

    <Link to={"/"}>
      <div className='flex items-center'>
      <FaYoutube style={{color:"red"}} className='h-12 w-12 mr-5'/>
      <h1 className='text-2xl'>Youtube</h1>
      </div>
      </Link>
      <form action="" className='bg-white'>
        <input type="text" className='px-4 py-1 rounded text-black' onChange={(e)=>setQuery(e.target.value)}/>
        <button className='text-black mr-2' >
          <Link to={`/results?search=${query}`}>
          <FiSearch />
          </Link></button>
      </form>
      <FaBell />
    </header>
  )
}

export default Header