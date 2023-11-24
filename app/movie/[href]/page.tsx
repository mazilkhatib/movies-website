"use client"
import React, {FC} from 'react';
import {useParams} from 'next/navigation'

interface MovieProps {
    title: string;
    year: number;
    cast: string[];
    genres: string[];
    href: string;
    extract: string;
    thumbnail: string;
    thumbnail_width: number;
    thumbnail_height: number;
    trailerUrl: string;
}

interface MoviePageParams {
    href: string;
}

const Page: FC<MoviePageParams> = () => {
    const params = useParams();
    const href = params.href;
    const fetchMovie = async (href: string | string[]) => {
        const response = await fetch('/movies.json');
        const data = await response.json();
        return data.find((movie: MovieProps) => movie.href === href);
    };

    const [movie, setMovie] = React.useState<MovieProps | null>(null);


    React.useEffect(() => {
        fetchMovie(href).then((movie) => setMovie(movie));
    }, [href]);

    const videoId = movie?.trailerUrl.split('=')[1].split('&')[0];

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    console.log(embedUrl)

    return (
        <div className="container mx-auto px-4 py-8">
            {movie ? (
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    <div className="lg:w-1/2">
                        <img
                            src={movie.thumbnail}
                            alt={movie.title}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="lg:w-1/2 lg:pl-8">
                        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                            {movie.title} ({movie.year})
                        </h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            {movie.extract}
                        </p>
                        <div className="mt-4 flex flex-wrap items-center">
                          <span className="text-sm font-semibold text-gray-800 dark:text-white mr-2">
                            Cast:
                          </span>
                            {movie.cast.map((actor, index) => (
                                <span
                                    key={index}
                                    className="text-sm text-gray-600 dark:text-gray-300 mr-2"
                                >
                  {                 actor}
                                    {index < movie.cast.length - 1 && ','}
                                </span>
                            ))}
                        </div>
                        <div className="mt-4 flex flex-wrap items-center">
                          <span className="text-sm font-semibold text-gray-800 dark:text-white mr-2">
                            Genres:
                          </span>
                            {movie.genres.map((genre, index) => (
                                <span
                                    key={index}
                                    className="text-sm text-gray-600 dark:text-gray-300 mr-2"
                                >
                                {genre}
                                    {index < movie.genres.length - 1 && ','}
                                </span>
                            ))}
                        </div>
                        <div className="mt-4">
                            <iframe
                                width="560"
                                height="315"
                                src={movie.trailerUrl && embedUrl}
                                title={movie.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center">
                    <p className="text-gray-600 dark:text-gray-300">Loading movie...</p>
                </div>
            )}
        </div>
    );
};

export default Page;
