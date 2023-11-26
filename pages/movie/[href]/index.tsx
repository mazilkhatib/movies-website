import React, {FC} from 'react';
import "@/app/globals.css"

interface MovieProps {
    title: string;
    year: number;
    cast: string[];
    genres: string[];
    href: string;
    extract: string;
    thumbnail: string | undefined;
    thumbnail_width: number | undefined;
    thumbnail_height: number | undefined;
    trailerUrl: string;
}

interface PageProps {
    movie: MovieProps
}

const Index: FC<PageProps> = ({movie}) => {
    const videoId = movie?.trailerUrl.split('=')[1].split('&')[0];

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-center">
                <div className="lg:w-1/2">
                    <img
                        src={movie.thumbnail}
                        alt={movie.title}
                        className="w-full h-full lg:h-1/2 lg:w-1/2 rounded-lg shadow-lg"
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
        </div>
    );
};

export default Index;

interface Movie {
    href?: string;
}

interface Params {
    href: string;
}

export async function getStaticPaths() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/movies.json`);
    const data: Movie[] = await response.json();

    const paths = data.map(movie => {
        const href = movie.href ? movie.href.toString() : '';
        return {
            params: { href }
        }
    });

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }: {params: Params}) {
    const { href } = params;

    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/movies.json`);
    const data: Movie[] = await response.json();

    const movie = data.find(movie => movie.href === href);

    return {
        props: {
            movie
        },
        revalidate: 60
    };
}