import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaStar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import slugify from 'slugify-now';
import SearchAnime from './SearchAnime';
import Pagination from './Pagination';
import ShowAnime from './ShowAnime';
import NotFound from './NotFound';

const Home = ({ animePage, toggleAnime }) => {
    const [anime, setAnime] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [loading, setLoading] = useState(false);

    console.log(anime)
    const itemsPerPage = 25;

    useEffect(() => {
        const fetchAnime = async () => {
            setLoading(true); // loading toggle
            try {
                const response = await axios.get(
                    `https://api.jikan.moe/v4/anime?page=${currentPage}&limit=${itemsPerPage}`
                );
                setAnime(response.data.data);
                setLastPage(response.data.pagination.last_visible_page);
            } catch (error) {
                alert(error);
            } finally {
                setLoading(false); // for loading 
            }
        };

        fetchAnime();
    }, [currentPage]);

    return (
        <>
        {animePage.length ==0 && toggleAnime ? <NotFound/>: null}
        
            {toggleAnime ? (
                <SearchAnime animePage={animePage} />
            )  :  (
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-white text-center md:text-6xl xs:text-4xl mt-10 font-archivo">
                        Top Anime
                    </h1>

                    {loading ? (

                        <div className="mt-20 flex justify-center items-center">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-solid"></div>
                        </div>
                    ) : (

                       <ShowAnime anime={anime}/>
                    )}
                </div>
            )}

            {/* para sa pagination pls */}
            <Pagination currentPage={currentPage}
                lastPage={lastPage}
                setCurrentPage={setCurrentPage} />
        </>
    );
};

export default Home;
