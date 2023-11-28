import { useState, useEffect } from "react";
import moviesData from "@/public/movies.json";

export function useFilterMovies(genre:string) {
    const [filteredMovies, setFilteredMovies] = useState([] as object);

    useEffect(() => {
        const moviesByGenre = moviesData.filter((movie) => {
            return movie.genres.some((g) => g?.includes(genre));
        });
        setFilteredMovies(moviesByGenre);
    }, [genre]);

    return filteredMovies;
}
