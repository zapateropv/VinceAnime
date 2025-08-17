import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import slugify from 'slugify-now';

const SearchAnime = ({animePage}) => {
    return (
        <div className='flex flex-col items-center justify-center  '>
            <div className='grid  mt-10 gap-15 lg:grid-cols-4 md:grid-cols-3 m-15 sm:grid-cols-2
                xs:grid-cols-1'>
                {animePage.map((item, index) => (

                    <NavLink key={index} className='flex flex-col  items-start m-auto justify-center
                        bg-gray-900 rounded-bl-lg rounded-br-lg '
                        to={`/anime/${slugify(item.title)}`}
                        state={{ item }} >

                        <div className='relative '>
                            <img src={item.images.jpg.image_url}
                                className='rounded-tl-lg rounded-tr-lg cursor-pointer h-90 w-[250px]  ' />

                            <span className='top-2  p-2 rounded-2xl right-2 absolute bg-gray-800 flex justify-center items-center'>
                                <FaStar className='text-yellow-600 text-sm mr-2' />
                                <p className='text-white text-sm'>{item.score}</p>
                            </span>
                        </div>
                        <div className="text-white mt-2 w-40 p-3">
                            <p className="truncate font-semibold font-poppins">{item.title}</p>

                            <p className="text-sm text-gray-400 mt-2 ">
                                {item.year ?? "Unknown date"}
                            </p>

                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default SearchAnime
