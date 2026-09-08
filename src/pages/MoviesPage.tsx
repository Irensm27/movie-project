import MoviesList from "../components/movieComponents/MoviesList.tsx";
import Pagination from "../components/pagination/Pagination.tsx";
import GenreButtonComponent from "../components/genreComponents/GenreButtonComponent.tsx";
import MovieBanner from "../components/movieComponents/MovieBanner.tsx";

const MoviesPage = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[140px]"/>

                <div className="absolute -right-40 top-[500px] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[140px]"/>

                <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-yellow-400/5 blur-[120px]"/>
            </div>

            <div className="relative z-10">
                <MovieBanner/>
                <GenreButtonComponent/>
                <MoviesList/>
                <Pagination/>
            </div>

        </div>
    );
};

export default MoviesPage;