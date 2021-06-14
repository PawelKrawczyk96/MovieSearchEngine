const Movie = ({data}) =>{
    return (
        <div className="movie_info">
            <div>
                <h1>{data.title}</h1>
                <p>Ocena: {data.vote_average}</p>
            </div>
            <div>
                <p>{data.overview} </p>
                <p><b>Data wydania:{data.release_date}</b></p>
            </div>
        </div>
    )
}

export default Movie