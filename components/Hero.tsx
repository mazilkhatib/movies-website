"use client"
import React, { FC, useState, useEffect } from 'react';
import Image from "next/image";

interface HeroProps {
    moviesData: any[];
}

const Hero: FC<HeroProps> = ({ moviesData }) => {
    const [movie, setMovie] = useState<any>(null);

    useEffect(() => {
        const pickMovie = () => {
            const moviesWithImage = moviesData.filter(movie => movie.thumbnail);
            const length = moviesWithImage.length;
            const index = Math.floor(Math.random() * length);
            return moviesWithImage[index];
        };
        setMovie(pickMovie());
    }, [moviesData]);

    if (!movie) return (
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg lg:ml-20">
                    <div className="h-10 bg-gray-400 animate-pulse rounded" aria-hidden="true"></div>
                    <div className="mt-4 h-4 bg-gray-400 animate-pulse rounded" aria-hidden="true"></div>
                    <div className="mt-4 h-4 bg-gray-400 animate-pulse rounded" aria-hidden="true"></div>
                    <div className="mt-4 h-4 bg-gray-400 animate-pulse rounded" aria-hidden="true"></div>
                    <div className="mt-4 h-4 bg-gray-400 animate-pulse rounded" aria-hidden="true"></div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                <div className="object-cover w-full h-full mx-auto rounded-md lg:w-1/2 bg-gray-400 animate-pulse rounded" aria-hidden="true"></div>
            </div>
        </div>
    );
    const { title, extract, thumbnail } = movie;

    return (
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-18 lg:flex-row lg:items-center lg:mb-9">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg lg:ml-20">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">{title}</h2>

                    <p className="mt-4 text-sm h-40 overflow-hidden text-gray-500 dark:text-gray-400 lg:text-base">{extract}</p>

                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                        <a href={`movie/${movie.href}`} className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">Watch Now</a>
                    </div>

                </div>

            </div>

            <div className="flex items-center justify-center w-full h-full lg:w-1/2">
                <Image
                    className="object-fill w-full h-full mx-auto rounded-md lg:w-1/2"
                    src={thumbnail}
                    alt="Hero Image"
                    width={500}
                    height={1000}
                    objectFit="contain"
                    style={{willChange: "transform"}}
                />
            </div>
        </div>
    );
};

export default Hero;
