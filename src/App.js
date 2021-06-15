import {useEffect, useState} from 'react'
import MoviesList from './components/MoviesList'
import './App.css';


function App() {
  const [movies,setMovies] = useState([])
  const [page,setPage] = useState(1)
  const [pages,setPages] = useState(0)
  const [order,setOrder] = useState('title.asc')

  useEffect ( () => {
    const fetchMovies = async () =>{
      const response = await fetch(`https://api.themoviedb.org/4/list/1?page=${page}&api_key=3036901935fc0bc6a369621b7b9cd611&language=pl-PL&sort_by=${order}`)
      const {results,total_pages} = await response.json()
      setMovies(results)
      setPages(total_pages)
    }
    fetchMovies()
  },[page,order])

  const turnPage = (page) => {
    setPage(page)
  }

  const orderBy = ((order) =>{
    setOrder(order)
  })

  return (
    <div className="App">
      <MoviesList moviesData={movies} pages={pages} turnPage={turnPage} page={page} orderBy={orderBy}/>
    </div>
  );
}

export default App;
