import React from 'react';
import Movie from './Movie'

const MoviesList = ({moviesData}) => {

    const movies = moviesData.map((movie)=>{
        return <Movie data={movie} />
    })
    return (
        <div>
            {movies}
        </div>
    )
}

export default MoviesList