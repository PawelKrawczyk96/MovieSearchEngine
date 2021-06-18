import React from 'react';
import Movie from './Movie'
import prev from './../images/prev.svg'
import next from './../images/next.svg'
import PropTypes from 'prop-types'

const MoviesList = ({moviesData,turnPage,pages,page,orderBy,movieList}) => {

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
            <div className="filters_form">
                <label>Sotrowanie</label>
                <select id="order_by" name="order" form="filters" onChange={(e)=> orderBy(e.target.value)}>
                    <option value="title.asc">Nazwa A-Z</option>
                    <option value="title.desc">Nazwa Z-A</option>
                    <option value="vote_average.asc">Ocena rosnąco</option>
                    <option value="vote_average.desc">Ocena malejąco</option>
                    <option value="release_date.asc">Data wydania od najstarszego</option>
                    <option value="release_date.desc">Data wydania od najmłodszego</option>
                </select>
                <label>Wybór listy filmów</label>
                <select id="movies_list" name="movies_list" form="filters" onChange={(e)=> movieList(e.target.value)}>
                    <option value="1">Filmy Marvela</option>
                    <option value="3">DC Comics universe</option>
                    <option value="5">Filmy o postaciach z Marvela</option>
                </select>
            </div>
            {movies}
            <div className="page_controls">
                <button className="btn_page" onClick={prevPage}><img src={prev} /></button>
                <p>{page}</p>
                <button className="btn_page" onClick={nextPage}><img src={next} /></button>
            </div>
        </div>

        
    )
}

MoviesList.propTypes = {
    moviesData: PropTypes.array.isRequired,
    turnPage: PropTypes.func.isRequired,
    pages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    orderBy: PropTypes.func.isRequired,
    movieList: PropTypes.func.isRequired
}

export default MoviesList