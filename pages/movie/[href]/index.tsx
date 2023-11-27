import React, {FC} from 'react';
import "@/app/globals.css"
import 'plyr-react/plyr.css'
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MovieDetails from "@/components/MovieDetails";
import Head from 'next/head';
import { useRouter } from 'next/router';

interface MovieProps {
    title: string;
    year: number;
    cast: string[];
    genres: string[];
    href: string;
    extract: string;
    thumbnail: string | undefined;
    thumbnail_width: number | undefined;
    thumbnail_height: number | undefined;
    trailerUrl: string;
}

interface PageProps {
    movie: MovieProps
}

const Index: FC<PageProps> = ({movie}) => {
    const router = useRouter();
    const { href } = router.query;

    return (
        <>
            <Head>
                <title>{movie.title} | Movie App</title>
                <meta name="description" content={movie.extract} />
                <meta property="og:title" content={movie.title} />
                <meta property="og:description" content={movie.extract} />
                <meta property="og:image" content={movie.thumbnail} />
                <meta property="og:url" content={`https://movie-app.com/${href}`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={movie.title} />
                <meta name="twitter:description" content={movie.extract} />
                <meta name="twitter:image" content={movie.thumbnail} />
            </Head>
            <Navbar/>
            <MovieDetails movie={movie}/>
            <Footer/>
        </>
    );
};

export default Index;

interface Movie {
    href?: string;
}

interface Params {
    href: string;
}



export async function getStaticPaths() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/movies.json`);
    const data: Movie[] = await response.json();

    const paths = data.map(movie => {
        const href = movie.href ? movie.href.toString() : '';
        return {
            params: { href }
        }
    });

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }: {params: Params}) {
    const { href } = params;

    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/movies.json`);
    const data: Movie[] = await response.json();

    const movie = data.find(movie => movie.href === href);

    return {
        props: {
            movie
        },
        revalidate: 60
    };
}
