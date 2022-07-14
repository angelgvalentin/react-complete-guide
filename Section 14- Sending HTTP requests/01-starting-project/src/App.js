import React, {useEffect, useState, useCallback} from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(
                "https://react-http-cdc3d-default-rtdb.firebaseio.com/movies.json"
            );
            if (!response.ok) {
                throw new Error("Something is wrong!");
            }
            const data = await response.json();

            const transformedMovies = data.results.map((movieData) => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date,
                };
            });
            setMovies(transformedMovies);
            setIsLoading(false);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    const addMovieHandler = (movie) => {
        console.log(movie);
    };

    let content = <p>Found no movies.</p>;

    if (error) {
        content = <p>{error} </p>;
    }

    if (isLoading) {
        content = <span class="loader"></span>;
    }

    if (movies.length > 0) {
        content = <MoviesList movies={movies} />;
    }

    return (
        <React.Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </React.Fragment>
    );
}

export default App;
