import Image from 'next/image';
import React from 'react'



async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
}

export default async function MoviePage({params}) {
  const movieId=params.id;
  
  const movie=await getMovie(movieId);

  return (
    <div className='w-full'>
        <div className='p-4 flex flex-col items-center content-center max-w-6xl mx-auto'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
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
        <div>
          <h2 className='text-lg font-bold mb-3'>{movie.title || movie.name}</h2>
          <p className='text-lg font-semibold mr-1'><span>Overview:</span>
            {movie.overview}
          </p>
          <p>
            <span className='font-semibold mr-1'>Realesed Date:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p>
            <span className='font-semibold mr-1'>Rating:</span>
            {movie.vote_count }
          </p>
        </div>
        </div>
    </div>
  )
}
