import React from 'react'
import anime from '../assets/anime.jpg'
import Home from './Home'

const TopHome = () => {
  return (
    <>
      <div className="text-white relative">
        <div className=''>
          <img src={anime}
            alt="anime"
            className="w-full h-screen object-cover object-center" />
        </div>

        <div className="absolute text-center inset-1 flex flex-col items-center justify-center">
          <p className='md:text-6xl font-archivo xs:text-5xl mb-5'>Discover Your Next <span className='italic  '>Anime</span> Adventure</p>
          <p className='md:text-xl xs:text-lg font-poppins'>Your place to watch, share, and love anime.</p>
        </div>

      </div>

   


    </>

  )
}

export default TopHome
