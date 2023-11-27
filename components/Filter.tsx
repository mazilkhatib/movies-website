import React, { useRef, useEffect } from "react";
import {MenuAlt3Icon} from "@heroicons/react/outline";

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
    // Define a ref to the filter element
    const filterRef = useRef<HTMLDivElement>(null);

    // Define a function to toggle the visibility of the list
    const toggleList = () => {
        const list = document.getElementById("genre-list");
        list?.classList.toggle("hidden");
    };

    // Define a function to hide the list if the click target is outside the filter element
    const handleClickOutside = (event:any) => {
        if (filterRef.current && !filterRef.current.contains(event.target)) {
            const list = document.getElementById("genre-list");
            list?.classList.add("hidden");
        }
    };

    // Use the useEffect hook to add and remove the event listener
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={filterRef}>
            <button
                className="py-2 px-4 rounded bg-white shadow-lg dark:bg-gray-800"
                onClick={toggleList}
            >
                <MenuAlt3Icon className="h-6 w-6" />
            </button>
            <ul
                className="absolute right-0 mt-2 hidden font-bold py-2 w-48 rounded bg-white shadow-lg dark:bg-gray-800"
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

export default Filter;
