import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import MovieGrid from "@/components/MovieGrid";
import moviesData from "@/public/movies.json";
import Footer from "@/components/Footer";

export default function Home() {
    const getRandomMovieWithImage = () => {
        const moviesWithImage = moviesData.filter(movie => movie.thumbnail);
        const length = moviesWithImage.length;
        const index = Math.floor(Math.random() * length);
        return moviesWithImage[index];
    };

    const movie = getRandomMovieWithImage();
    const title:string = movie.title;
    const subtitle:string | undefined = movie.extract;
    const image: string | undefined = movie.thumbnail;

    return (
        <>
            <Navbar/>
            <Hero
                title={title}
                subtitle={subtitle}
                image={image}
            />
            <div className="lg:flex mb-5">
                <MovieGrid movies={moviesData} />
            </div>
            <Footer/>
        </>

    )
}
