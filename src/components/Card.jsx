import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'

export default function Card({result}) {
  return (
    <div className='sm:hover:shadow-slate-400 cursor-pointer sm:shadow-md sm:border-slate-400 sm:border transition-shadow duration-200 group sm:m-2 rounded-lg'>
      <Link href={`/movie/${result.id}`}>
      <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className=" sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
        ></Image>
        <div className='p-2'>
            <p className='text-md'>{result.overview}</p>
            <h2 className='text-lg font-bold'>{result.title || result.name}</h2>
            <p className='flex items-center'>{result.release_date || result.first_aire_date}
            <FiThumbsUp className='h-5 ml-1 mr-2' />{result.vote_count }
            </p>
            
        </div>
      </Link>
      </div>
  )
}
