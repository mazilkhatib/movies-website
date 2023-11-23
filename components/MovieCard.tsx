import React, {FC} from 'react';
import Image from 'next/image';

interface Movie {
    title: string;
    year: number;
    cast: string[];
    genres: string[];
    href: string;
    extract: string;
    thumbnail: string;
    thumbnail_width: number;
    thumbnail_height: number;
    trailer:string;
    trailerUrl: string;
}
interface MovieGridProps {
    movies: Movie[];
}

// Create a new component for MovieCard
const MovieCard: FC<{movie: Movie}> = ({ movie }) => {
    return (
        movie.thumbnail &&
        <div
            key={movie.title}
            className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
        >
            <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
                    {movie.title}
                </h1>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 h-44 overflow-ellipsis overflow-hidden">
                    {movie.extract}
                </p>

            </div>

            <Image
                src={movie.thumbnail}
                alt={movie.title}
                width={movie.thumbnail_width}
                height={movie.thumbnail_height}
                className="object-cover w-full h-48 mt-2"
            />

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white">{movie.year}</h1>
                <a
                    href={movie.trailerUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                >
                    Watch trailer
                </a>
            </div>
        </div>
    );
};

export default MovieCard