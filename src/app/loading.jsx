import React from 'react'
import Image from 'next/image'

export default function loading() {
  return (
    <div className='flex justify-center'>
        <img className='h-26' src="spinner1.svg" alt="loading..." />
    </div>
  )
}
