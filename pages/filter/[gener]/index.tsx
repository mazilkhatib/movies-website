import React, { FC } from "react";
import moviesData from "@/public/movies.json";
import MovieGrid from "@/components/MovieGrid";
import "@/app/globals.css";
import { useRouter } from "next/router";
import { MenuAlt3Icon } from '@heroicons/react/outline';
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const genres = [
    "Action",
    "Adventure",
    "Comedy",
    "Crime",
    "Drama",
    "Fantasy",
    "Horror",
    "Romance",
    "Science Fiction",
    "Thriller",
    "Western",
];

interface Props {
    onChange: (genre: string) => void;
}

function Filter({ onChange }: Props) {
    const toggleList = () => {
        const list = document.getElementById("genre-list");
        list?.classList.toggle("hidden");
    };

    return (
        <div className="relative">
            <button
                className="py-2 px-4 rounded bg-white shadow-lg dark:bg-gray-800"
                onClick={toggleList}
            >
                <MenuAlt3Icon className="h-6 w-6"/>
            </button>
            <ul
                className="absolute right-0 mt-2 font-bold py-2 w-48 rounded bg-white shadow-lg dark:bg-gray-800"
                id="genre-list"
            >
                {genres.map((genre) => (
                    <li
                        className="py-1 px-4 cursor-pointer bg-white dark:bg-gray-800 hover:bg-gray-400"
                        key={genre}
                        onClick={() => onChange(genre)}
                    >
                        {genre}
                    </li>
                ))}
            </ul>
        </div>
    );
}

const Index: FC = () => {
    const router = useRouter();
    const { gener } = router.query;

    const filteredMovies = moviesData.filter((movie) => {
        return movie.genres.some((g) => g?.includes(gener as string));
    });

    const handleGenreChange = (genre:string) => {
        router.push(`/filter/${genre}`);
    };

    return (
        <>
            <Navbar/>
            <div className="absolute right-52 z-50 p-4">
                <Filter onChange={handleGenreChange} />
            </div>
            <MovieGrid movies={filteredMovies} />
            <Footer/>
        </>
    );
};
export default Index;
