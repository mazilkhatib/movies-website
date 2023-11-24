import React,{FC} from 'react';
interface HeroProps {
    title: string;
    subtitle: string | undefined;
    image: string | undefined;
}

const Hero: FC<HeroProps> = ({ title, subtitle, image }) => (
    <div className="lg:flex">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2 lg:ml-16 lg:pl-16">
            <div className="max-w-xl">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">{title}</h2>

                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">{subtitle}</p>

                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                    <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">Watch Now</a>
                </div>
            </div>
        </div>

        <div className="w-full h-64 lg:w-1/5 lg:h-auto lg:ml-56 lg:p-12 ">
            <div className="w-full h-full bg-cover rounded-lg" style={{ backgroundImage: `url(${image})` }}>
                <div className="w-full h-full bg-black opacity-25 "></div>
            </div>
        </div>
    </div>
);

export default Hero;
