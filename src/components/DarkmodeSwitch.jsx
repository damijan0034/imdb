"use client"

import React from 'react'
import {MdLightMode} from 'react-icons/md'
import {MdDarkMode} from 'react-icons/md'
import { useTheme } from 'next-themes'

export default function DarkmodeSwitch() {

  const{systemTheme,theme,setTheme}=useTheme()
  const currentTheme =theme === 'system' ? systemTheme : theme

  return ( 
    <div className='flex'>

      {currentTheme ==='dark' ?(
        <MdLightMode className='cursor-pointer hover:text-amber-500' onClick={()=>setTheme("light")} />
      ):
       (<MdDarkMode className='cursor-pointer hover:text-amber-500' onClick={()=>setTheme("dark")} />)
       }
      
      
    </div>
  )
}
