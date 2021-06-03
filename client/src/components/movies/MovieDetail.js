import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function MovieDetail(props) {
    const [movie, setMovie] = useState({});
    async function fetchMovie() {
        await fetch(`http://localhost:3001/movies/detail/${props.match.params.id}`)
            .then(response => response.json())
            .then(
                data => {
                    console.log(data);
                    setMovie(data);
                }
            );
    }
    console.log(props);
    useEffect(() => {
        fetchMovie();
    }, []);
    return (
        <div>
            <Link className="btn btn-outline-secondary my-3" to="/movies">Atrás</Link>
            <div>
                <h1 className="text-danger">{movie.title}</h1>
                <p>Duración: {movie.length}</p>
                <p>Cantidad de premios: {movie.awards}</p>
                <p>Puntuación: {movie.rating}</p>
                <p>Fecha de lanzamiento: {movie.release_date}</p>

            </div>
        </div>
    )
}

export default MovieDetail;