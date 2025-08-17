import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Navbar = ({setAnimePage, setToggleAnime}) => {

    const [toggle, setToggle] = useState(false);
    const [search, setSearch] = useState("")
    

    console.log(search)

    const searchAnimeBtn = async() => {
        try{
            const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(search)}&limit=10`)
            setAnimePage(response.data.data)
            setSearch(" ")
            setToggleAnime(true)
           
        }catch(error){
            alert(error)
        }
    }
 
  
    const toggleHamburger = () => {
        setToggle(!toggle);
    }
    return (

        <div className="flex  justify-between items-center p-5 sticky top-0 z-60 bg-black text-white ">
            <div>
                <NavLink to={'/'}>
                     <p className="md:text-2xl xs:text-lg font-archivo hover:text-red-600">VinceAnime</p>
                </NavLink>
               
            </div>
            <div className="flex items-center lg:w-lg ">
                <span className="relative flex items-center rounded-2xl w-full max-w-md  mx-10 ">
                    <input
                        type="text"
                        placeholder="search"
                        className=" rounded-full w-full p-2 mx-2 sm:text-md sm:placeholder-gray-400 placeholder-transparent text-white 
                        bg-neutral-800
                        "
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                    />
                    <CiSearch className="absolute right-5 text-white md:text-2xl xs:text-xl cursor-pointer " 
                    onClick={searchAnimeBtn}/>
                </span>
            </div>

            <div className="hidden font-poppins md:flex items-center justify-between gap-10 font-semibold text-lg">
                 <NavLink to={'/'} >
                 <p className='hover:text-red-600'>Home</p>
                      
                 </NavLink>
                
               <a href='https://jikan.moe/'><p className='hover:text-red-600 cursor-pointer'>API</p></a> 
                <a href='https://github.com/zapateropv/VinceAnime'><FaGithub /></a>
            </div>

            <div className="md:hidden">
                <RxHamburgerMenu className=" text-white xs:text-2xl" onClick={toggleHamburger} />
                <div className={`${toggle ? "z-50 top-20 rounded-lg h-40 p-3 absolute right-1 flex flex-col justify-start items-center bg-white text-black" : "hidden"}`}>
                    <ul>
                        <NavLink to={'/'}>
                            <li className="flex items-center gap-5 mb-5" >
                                <FaHome className="text-2xl" />
                                 Home
                            </li>
                        </NavLink>
                      
                        <li className="flex items-center gap-5"><MdOutlineCategory className="text-2xl" /><a href='https://jikan.moe/'>API</a></li>
                    </ul>
                </div>
            </div>
            
        </div>

    )
}

export default Navbar
