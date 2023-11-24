import React, { FC } from 'react';

interface HeroProps {
    title: string;
    subtitle: string;
    image: string;
}

const Hero: FC<HeroProps> = ({ title, subtitle, image }) => (
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

export default Hero;
