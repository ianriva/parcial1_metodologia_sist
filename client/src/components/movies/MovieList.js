import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function MovieList() {
    const [movies, setMovies] = useState([]);
    async function fetchMovies() {
        await fetch('http://localhost:3001/movies')
            .then(response => response.json())
            .then(
                data => {
                    console.log(data);
                    setMovies(data);
                }
            );
    }
    useEffect(() => {
        fetchMovies();
    }, []);
    return (
        <div>
            <h1>Películas</h1>
            <div className="table-responsive-md">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie.id}>
                                <td>
                                    {movie.title}
                                </td>
                                <td><Link to={`/movie/${movie.id}`} className="btn btn-primary">Detalle</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MovieList
