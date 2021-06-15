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

    const test = (() =>{
        console.log('test')
    })
    return (
        <div>
            <div className="filters_form">
                <label>Sotrowanie</label>
                <select id="order_by" name="order" form="filters" onChange={test}>
                    <option value="title.asc">Nazwa A-Z</option>
                    <option value="title.desc">Nazwa Z-A</option>
                    <option value="vote_average.asc">Ocena rosnąco</option>
                    <option value="vote_average.desc">Ocena malejąco</option>
                    <option value="release_date.asc">Data wydania od najstarszego</option>
                    <option value="release_date.desc">Data wydania od najmłodszego</option>
                </select>
            </div>
            {movies}
            <button onClick={prevPage}>{'<<'}</button>
            <button onClick={nextPage}>{'>>'}</button>
        </div>

        
    )
}

export default MoviesList