import MoviesList from "../components/MoviesList.tsx";
import Pagination from "../components/Pagination.tsx";


const MoviesPage = () => {
    return (
        <div>
            <MoviesList/>
            <Pagination/>
        </div>
    );
};

export default MoviesPage;