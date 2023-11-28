"use client"
import React, { useState } from 'react';
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";

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

    return (
        <div className="container mx-auto mb-5">
            <SearchBar setSearchTerm={setSearchTerm}/>
            <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2 z-10">
                {paginatedMovies.map((movie) => (
                    // eslint-disable-next-line react/jsx-key
                    <MovieCard movie={movie} />
                ))}
            </div>
            { paginatedMovies.length > 10 && (
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
