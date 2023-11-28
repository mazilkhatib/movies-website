import React, { FC } from "react";
import moviesData from "@/public/movies.json";
import MovieGrid from "@/components/MovieGrid";
import "@/app/globals.css";
import { useRouter } from "next/router";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Filter from "@/components/Filter";
import Head from "next/head";

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
            <Head>
                <title>Movies by Genre</title>
                <meta name="description" content="Browse movies by genre and filter by rating, year, and popularity." />
                <meta name="keywords" content="movies, genre, filter, rating, year, popularity" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar/>
            <div className="absolute z-20 p-4">
                <Filter onChange={handleGenreChange} />
            </div>
            <MovieGrid movies={filteredMovies} />
            <Footer/>
        </>
    );
};
export default Index;
