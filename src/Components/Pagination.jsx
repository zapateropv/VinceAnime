import React from 'react'


import { FaArrowRight, FaArrowLeft } from "react-icons/fa";



const Pagination = ({currentPage, lastPage,setCurrentPage }) => {
  return (
     <div className="text-white flex items-center m-auto justify-center gap-10 text-xl mt-10 mb-15">
            Page {currentPage} of {lastPage}
            <div>
              <button
                className="cursor-pointer"
                disabled={currentPage == 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <FaArrowLeft />
              </button>
            </div>
            <div className="font-bold">
              <button
                className="cursor-pointer"
                disabled={currentPage == 1}
                onClick={() => setCurrentPage(1)}
              >
                1
              </button>
            </div>
            <div>
              <button
                className="cursor-pointer"
                disabled={currentPage === lastPage}
                onClick={() => setCurrentPage(2)}
              >
                2
              </button>
            </div>
            <div>
              <button className="cursor-pointer">3</button>
            </div>
            <div>
              <button
                disabled={currentPage === lastPage}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <FaArrowRight className="cursor-pointer" />
              </button>
            </div>
          </div>
  )
}

export default Pagination
