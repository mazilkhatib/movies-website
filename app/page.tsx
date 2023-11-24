import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import MovieGrid from "@/components/MovieGrid";
import moviesData from "@/public/movies.json";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar/>
            <Hero moviesData={moviesData} />
            <div className="lg:flex mb-5">
                <MovieGrid movies={moviesData} />
            </div>
            <Footer/>
        </>

    )
}
