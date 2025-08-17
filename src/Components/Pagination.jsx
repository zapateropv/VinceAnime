import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';

const Pagination = ({ currentPage, lastPage, setCurrentPage }) => {

  const [animePage, setAnimePage] = useState();

  const changePage = () => {
    setCurrentPage(animePage);
  }

  return (
    <div className="text-white flex flex-col  items-center m-auto justify-center gap-10 text-xl mt-10 mb-15">
      <p>Page {currentPage} of {lastPage}</p>
      <div className='flex items-center justify-center gap-10'>
        <div>
          <button
            className="cursor-pointer hover:text-red-500"
            disabled={currentPage == 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="font-bold">
          <button
            className="cursor-pointer hover:text-red-500"
            disabled={currentPage == 1}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
        </div>
        <div>
          <button
            className="cursor-pointer hover:text-red-500"
            disabled={currentPage === lastPage}
            onClick={() => setCurrentPage(2)}
          >
            2
          </button>
        </div>
        <div>
          <button className="cursor-pointer hover:text-red-500">3</button>
        </div>
        <div>
          <button
            disabled={currentPage === lastPage}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <FaArrowRight className="cursor-pointer hover:text-red-500" />
          </button>
        </div>
       
      </div>
       <div className='flex items-center'>
      <span className="relative">
        <input
          type="number"
          className="bg-neutral-800 p-2 rounded-4xl text-sm appearance-none [appearance:textfield] 
                    [&::-webkit-outer-spin-button]:appearance-none 
                    [&::-webkit-inner-spin-button]:appearance-none w-full pr-8"
          placeholder="enter page"
          value={animePage}
          onChange={(e)=> setAnimePage(e.target.value)}
        />
        <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-white"
        onClick={changePage} />
      </span>
</div>

    </div>
  )
}

export default Pagination
