"use client"
import React, { useState } from 'react';
import MovieCard from "@/components/MovieCard";

interface MovieGridProps {
    movies: any[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const itemsPerPage = 20;

    const handleLoadMore = () => {
        setPage(page + 1);
    };
    const filterMovies = (movies: any[], searchTerm: string) => {
        return movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
    };

    const filteredMovies = filterMovies(movies, searchTerm);

    const paginatedMovies = filteredMovies.slice(0, page * itemsPerPage);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        filterMovies(movies, searchTerm);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="container mx-auto">
            <form onSubmit={handleSubmit} className="flex justify-center my-4">
                <div className="relative mt-4 md:mt-0">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </span>
                    <input type="text" onChange={handleChange} className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search"/>
                </div>
            </form>

            <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
                {paginatedMovies.map((movie) => (
                    // eslint-disable-next-line react/jsx-key
                    <MovieCard movie={movie} />
                ))}
            </div>
            {movies.length > paginatedMovies.length && (
                <div className="flex justify-center mt-4">
                    <button
                        onClick={handleLoadMore}
                        className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default MovieGrid;
