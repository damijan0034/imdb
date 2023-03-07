import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
        ></Image>
      </Link>
      </div>
  )
}
