import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import MovieGrid from "@/components/MovieGrid";
import moviesData from "@/public/movies.json";
import Footer from "@/components/Footer";

export default function Home() {
    let filteredMovies = [];

    for (let movie of moviesData) {
        if (movie.thumbnail) {
            movie.href = movie.href.replace(/%/g, "_");
            filteredMovies.push(movie);
        }
    }

    return (
        <>
            <Navbar/>
            <Hero moviesData={filteredMovies} />
            <div className="lg:flex mb-5">
                <MovieGrid movies={moviesData} />
            </div>
            <Footer/>
        </>

    )
}
