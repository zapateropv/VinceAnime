import React from 'react'
import { FaStar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import slugify from 'slugify-now';


const ShowAnime = ({anime}) => {
  return (
     <div className="grid mt-10 gap-15 lg:grid-cols-4 md:grid-cols-3 m-15 sm:grid-cols-2 xs:grid-cols-1">
                            {anime.map((item, index) => (
                                <NavLink
                                    key={index}
                                    className="flex flex-col items-start m-auto justify-center 
                                        rounded-bl-lg rounded-br-lg bg-gray-900
                                        transform transition duration-300 ease-in-out 
                                        hover:scale-105 hover:shadow-xl hover:shadow-red-500/20"
                                    to={`/anime/${slugify(item.title)}`}
                                    state={{ item }}
                                >
                                    <div className="relative">
                                        <img
                                            src={item.images.jpg.image_url}
                                            className="rounded-tl-lg rounded-tr-lg cursor-pointer h-90 w-[250px]"
                                            alt={item.title}
                                        />
                                        <span className="top-2 p-2 rounded-2xl right-2 absolute bg-gray-800 flex justify-center items-center">
                                            <FaStar className="text-yellow-600 text-sm mr-2" />
                                            <p className="text-white text-sm">{item.score}</p>
                                        </span>
                                    </div>
                                    <div className="text-white mt-2 w-40 p-3">
                                        <p className="truncate font-semibold font-poppins">{item.title}</p>
                                        <p className="text-sm text-gray-400 mt-2">{item.year ?? "Unknown date"}</p>
                                    </div>
                                </NavLink>

                            ))}
                        </div>
  )
}

export default ShowAnime
