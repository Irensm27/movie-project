import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {loadTopRatedMovies} from "../../redux/movieThunks.ts";

const MovieBanner = () => {
    const dispatch = useAppDispatch();

    const topMovies = useAppSelector(
        state => state.movieStoreSlice.topMovies
    );

    const [currentIndex, setCurrentIndex] = useState(0);

    const bannerMovies = topMovies.slice(0, 10);

    const topMovie = bannerMovies[currentIndex];

    useEffect(() => {
        dispatch(loadTopRatedMovies());
    }, [dispatch]);

    useEffect(() => {
        if (!bannerMovies.length) {
            return;
        }

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => {
                if (prevIndex < bannerMovies.length - 1) {
                    return prevIndex + 1;
                }

                return 0;
            });
        }, 10000);

        return () => clearInterval(interval);
    }, [bannerMovies.length]);

    return (
        <div>
            {
                topMovie &&
                <div className="mx-auto max-w-7xl px-6 py-6">

                    <div className="group relative overflow-hidden rounded-2xl">

                        <img
                            src={`https://image.tmdb.org/t/p/w1280${topMovie.backdrop_path}`}
                            alt={topMovie.title}
                            className="aspect-16/7 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent"/>

                        <button
                            onClick={() => {
                                if (currentIndex > 0) {
                                    setCurrentIndex(currentIndex - 1);
                                } else {
                                    setCurrentIndex(bannerMovies.length - 1);
                                }
                            }}
                            className="absolute left-5 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-yellow-400 hover:bg-yellow-400 hover:text-neutral-900"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-5 w-5"
                            >
                                <path
                                    d="M15 18l-6-6 6-6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        <button
                            onClick={() => {
                                if (currentIndex < bannerMovies.length - 1) {
                                    setCurrentIndex(currentIndex + 1);
                                } else {
                                    setCurrentIndex(0);
                                }
                            }}
                            className="absolute right-5 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-yellow-400 hover:bg-yellow-400 hover:text-neutral-900"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-5 w-5"
                            >
                                <path
                                    d="M9 18l6-6-6-6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        <div className="absolute bottom-0 left-0 max-w-xl p-10 text-white">

                            <div className="mb-3 text-lg font-semibold text-yellow-400">
                                ★ {topMovie.vote_average.toFixed(1)}
                            </div>

                            <h1 className="mb-4 text-4xl font-bold">
                                {topMovie.title}
                            </h1>

                            <Link
                                to={`/movies/${topMovie.id}`}
                                className="inline-block rounded-lg bg-yellow-400 px-5 py-2 font-semibold text-neutral-900 transition hover:bg-yellow-300"
                            >
                                View details
                            </Link>

                        </div>

                        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                            {
                                bannerMovies.map((movie, index) => (
                                    <button
                                        key={movie.id}
                                        onClick={() => setCurrentIndex(index)}
                                        className={
                                            index === currentIndex
                                                ? "h-2.5 w-6 rounded-full bg-yellow-400 transition"
                                                : "h-2.5 w-2.5 rounded-full bg-white/50 transition hover:bg-white"
                                        }
                                    />
                                ))
                            }
                        </div>

                    </div>

                </div>
            }
        </div>
    );
};

export default MovieBanner;