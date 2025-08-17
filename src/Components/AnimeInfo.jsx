import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import { FaStar } from "react-icons/fa";
import Footer from './Footer';

const AnimeInfo = () => {
  const location = useLocation();
  const items = location.state.item || null;

  return (
    <div className="flex flex-col min-h-screen w-full relative">
      {/* Dark Horizon Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
        }}
      />

      {/* Page Content */}
      <div className="relative z-10 flex-1">
        <Navbar />

        <div className="text-white md:flex md:flex-row md:items-start md:justify-center m-10 
                        xs:flex xs:flex-col xs:items-center">
          {/* Left section */}
          <div className="flex flex-col items-start">
            <a className="cursor-pointer" href={items.url}>
              <img src={items.images.jpg.large_image_url} alt={items.title} />
            </a>

            <ol className="space-y-3 mt-5">
              <li className="text-yellow-500">
                Status:{" "}
                <span className="text-white font-semibold ml-5">{items.status}</span>
              </li>
              <li className="text-yellow-500">
                Type:{" "}
                <span className="text-white font-semibold ml-5">{items.type}</span>
              </li>
              <li className="text-yellow-500">
                Duration:{" "}
                <span className="text-white font-semibold ml-5">{items.duration}</span>
              </li>
              <li className="flex items-center text-yellow-500">
                Popularity:{" "}
                <span className="text-white font-semibold flex items-center ml-5">
                  #{items.popularity}
                </span>
              </li>
              <li className="text-yellow-500">
                Date Published:{" "}
                <span className="text-white font-semibold ml-5">
                  {items.aired.string}
                </span>
              </li>
            </ol>

            <span className="flex flex-wrap mt-5 gap-2">
              {items.genres.map((genre) => (
                <span
                  key={genre.mal_id}
                  className="bg-gray-800 font-semibold text-white px-3 py-1 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </span>
          </div>

          {/* Right section */}
          <div className="flex flex-col w-full md:w-md lg:w-lg ml-0 md:ml-20">
            <span className="flex items-center">
              <h1 className="md:text-4xl font-archivo mr-5 md:mt-0 xs:mt-10 xs:text-2xl">
                {items.title}
              </h1>
              <span className="md:mt-0 xs:mt-10 flex items-center ">
                <p className="md:text-xl font-semibold mr-2">{items.score}</p>
                <FaStar className="text-yellow-500 md:text-2xl" />
              </span>
            </span>

            <p className="bg-orange-600 text-center w-[60px] mt-5 rounded-3xl font-semibold text-white">
              {items.episodes} ep
            </p>

            <h1 className="font-semibold mb-5 text-orange-300 mt-5">Synopsis:</h1>
            <p className="font-poppins text-justify">{items.synopsis}</p>

            <iframe
              src={items.trailer?.embed_url}
              title="Anime Trailer"
              className="w-full max-w-[560px] aspect-video rounded-lg mt-5"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer stays at the bottom */}
      <div className='relative z-50'>
          <Footer />
        </div>
    
    </div>
  );
};

export default AnimeInfo;
