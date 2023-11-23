import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import MovieGrid from "@/components/MovieGrid"; // Import the MovieGrid component
import moviesData from "@/public/movies.json"; // Import the movies data

export default function Home() {
    return (
        <>
            <Navbar/>
            <Hero
                title="Hero Movie Title"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates."
                image="https://upload.wikimedia.org/wikipedia/en/3/30/Ant-Man_and_the_Wasp_Quantumania_poster.jpg"
            />
            <div className="lg:flex">
                <MovieGrid movies={moviesData} />
            </div>
        </>

    )
}
