import React from 'react';
import MovieCard from "@/components/MovieCard";
interface MovieGridProps {
    movies: [];
}
const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
    return (
        <div className="container mx-auto">
            <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
                {movies.map((movie) => (
                    // eslint-disable-next-line react/jsx-key
                    <MovieCard movie={movie}/>
                ))}
            </div>
        </div>
    );
};

export default MovieGrid;
