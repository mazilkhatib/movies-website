import React, { FC } from "react";
import moviesData from "@/public/movies.json";
import MovieGrid from "@/components/MovieGrid";
import "@/app/globals.css";
import { useRouter } from "next/router";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Filter from "@/components/Filter";

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
