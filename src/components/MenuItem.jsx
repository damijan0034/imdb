import Link from 'next/link'
import React from 'react'

export default function MenuItem({title,adress,Icon}) {
  return (
    
    <div>
        <Link href={adress} 
            className="mx-4 lg:mx-6 hover:text-amber-500">
            <Icon className="text-2xl md:hidden" />
            <p className='hidden sm:inline-flex mx-2'>{title}</p>
        </Link>
    </div>
  )
}
