import star from './../images/star.svg'

const Movie = ({data}) =>{
    return (
        <div className="movie_info">
            <div className="movie_header">
                <img className="movie_thumbnail" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />
                <div className="header_des">
                    <h1>{data.title}</h1>
                    <p className="header_date"><b>Data wydania: {data.release_date}</b></p>
                    <p className="header_vote">Ocena: {data.vote_average} <img className="rating_img" src={star}/></p>
                    <div className="movie_des">
                        <p>{data.overview} </p>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Movie