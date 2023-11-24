// Second file
import React, { FC } from 'react';

interface HeroProps {
    moviesData: any[];
}

const Hero: FC<HeroProps> = ({ moviesData }) => {
    const getRandomMovieWithImage = () => {
        const moviesWithImage = moviesData.filter(movie => movie.thumbnail);
        const length = moviesWithImage.length;
        const index = Math.floor(Math.random() * length);
        return moviesWithImage[index];
    };

    const movie = getRandomMovieWithImage();
    const title:string = movie.title;
    const subtitle:string | undefined = movie.extract;
    const image: string | undefined = movie.thumbnail;

    return (
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg lg:ml-20">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">{title}</h2>

                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">{subtitle}</p>

                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                        <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">Watch Now</a>
                    </div>

                </div>

            </div>

            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                <img
                    className="object-cover w-full h-full mx-auto rounded-md lg:w-1/2"
                    src={image}
                    alt="glasses photo"
                />
            </div>
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://.../movies.json')
    const moviesData = await res.json()
    return {
        props: {
            moviesData,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

export async function getStaticPaths() {
    const res = await fetch('/movies.json')
    const moviesData = await res.json()
    // Get the paths we want to pre-render based on movies
    const paths = moviesData.map( (movie) => ( { params: { href: movie.href }, }))
    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if the path doesn't exist.
    return {
        paths,
        fallback: 'blocking'
    }
}

export default Hero;
