import {useEffect, useState} from 'react'
import MoviesList from './components/MoviesList'
import './App.css';


function App() {
  const [movies,setMovies] = useState([])

  useEffect ( () => {
    const fetchMovies = async () =>{
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=3036901935fc0bc6a369621b7b9cd611')
      const {results} = await response.json()
      setMovies(results)
    }
    fetchMovies()
  },[])

  return (
    <div className="App">
      <MoviesList moviesData={movies}/>
    </div>
  );
}

export default App;
