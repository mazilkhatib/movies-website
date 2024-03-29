import React, {FC} from 'react';
import Image from 'next/image';
import Link from "next/link";
interface Movie {
    title: string;
    year: number;
    cast: string[];
    genres: string[];
    href: string | null;
    extract: string | undefined;
    thumbnail: string | undefined;
    thumbnail_width: number | undefined;
    thumbnail_height: number | undefined;
    trailerUrl: string;
}
const MovieCard: FC<{movie: Movie}> = ({ movie }) => {
    return (
        movie.thumbnail &&
            <Link href={`${process.env.NEXT_PUBLIC_SERVER_URL}/movie/${movie.href}`} legacyBehavior>
                    <div
                        key={movie.title}
                        className="max-w-xs cursor-pointer overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 transform hover:z-20 hover:scale-125 transition duration-300"
                    >
                        <div className="px-4 py-2">
                            <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white truncate">
                                {movie.title}
                            </h1>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400  h-36 overflow-hidden">
                                {movie.extract}
                            </p>

                        </div>

                        <Image
                            src={movie.thumbnail}
                            alt={movie.title}
                            width={movie.thumbnail_width}
                            height={movie.thumbnail_height}
                            className="object-cover w-full h-48 mt-2 "
                        />

                        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                            <h1 className="text-lg font-bold text-white">{movie.year}</h1>
                            <a
                                href={`${process.env.NEXT_PUBLIC_SERVER_URL}/movie/${movie.href}`}
                                rel="noreferrer"
                                className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                            >
                                Details
                            </a>
                        </div>
                    </div>
            </Link>


    );
};

export default MovieCard
