import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from  'react-icons/ai'
import {BsInfoLg} from  'react-icons/bs'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex justify-between items-center '>
        <div className='flex mx-5'>
          <MenuItem Icon={AiFillHome
          }  title="HOME" adress="/" />
          <MenuItem title="ABOUT" adress="/about" Icon={BsInfoLg} />
        </div>
        <div className=''>
            <Link href='/'>
              <h2 className='text-2l m-6'><span className='rounded-lg px-2 py-1 bg-amber-500 font-bold'>IMDb</span><span>Clone</span></h2>
            </Link>
        </div>

    
    </div>
  )
}
