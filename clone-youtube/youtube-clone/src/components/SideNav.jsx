import React from 'react'


import {categories} from "./../utils/constants.jsx"

import { useContext } from 'react'
import { YoutubeContext } from '../context/youtubeContext.jsx'

const SideNav = () => {
   const {selectedCategory,setSelectedCategory} = useContext(YoutubeContext);
  return (
    <nav className='flex flex-col pt-4'>
         {
            categories.map((item)=>(
                <>
                <div className={`${selectedCategory === item.name && "bg-blue-600"} flex items-center gap-2 p-2 text-lg cursor-pointer hover:bg-gray-800 py-6'}`}
                onClick={()=>setSelectedCategory(item.name)}>
                    {item.icon}
                    <span>{item.name}</span>
                </div>
                {item.divider && <hr />}
                </>
            )

            )
         }

    </nav>
  )
}

export default SideNav;