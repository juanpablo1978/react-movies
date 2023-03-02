import React from 'react'
import { MdBookmarkBorder } from "react-icons/md";

const MovieDetailContainer = ({movie}) => {

  return (
    <section className='flex flex-col items-center pt-10'>
      <article>
        <div className='h-96 w-80 bg-slate-50  rounded-[2.4rem]  overflow-hidden relative'>
          <img className=' w-full h-full  object-cover' src={movie.image} alt="imagen de detalle"/>
          <div className='flex justify-center items-center absolute top-5 right-5 w-10 h-10 rounded-full
          text-white text-3xl bg-[#00000025] cursor-pointer'>
        <MdBookmarkBorder/>
        </div>
        </div>
        
        <div className=' h-96 w-80 bg-slate-50  rounded-[2.4rem]  overflow-hidden py-8 px-6
        relative top-[-50px]'>
          <h3 className=' text-2xl font-extrabold'>{movie.title}</h3>
          <h4 className=' text-gray-400  font-medium text-base'>{movie.original_title}</h4>
          <h4 className=' text-gray-400 font-medium text-sm'>Runtime {movie.running_time} min</h4>
          <p className=' text-gray-600 mt-6 line-clamp-[10]'>{movie.description}</p>
          <div className='flex  items-center justify-between mt-8'>
            <button className=' bg-black text-sm font-semibold uppercase text-white px-5 py-3  
            rounded-3xl cursor-pointer'>Add Favorites</button>
            <div className='flex justify-center items-center rounded-full text-white font-semibold
             bg-green-600 w-10 h-10'>{movie.rt_score}</div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default MovieDetailContainer