import React from 'react';
import Movie from './Movie'

const MoviesList = ({moviesData,turnPage,pages,page}) => {

    const movies = moviesData.map((movie)=>{
        return <Movie data={movie} key={movie.id}/>
    })
    const prevPage = (()=>{
        if((page-1)<=0){
            turnPage(page)
        }
        else
            turnPage(page-1)
    })

    const nextPage = (()=>{
        if((page+1)>pages){
            turnPage(page)
        }
        else
            turnPage(page+1)
    })
    return (
        <div>
            <div className="movies_header">
                <h1>Tytul</h1>
                <h1>Opis</h1>
            </div>
            {movies}
            <button onClick={prevPage}>{'<<'}</button>
            <button onClick={nextPage}>{'>>'}</button>
        </div>

        
    )
}

export default MoviesList