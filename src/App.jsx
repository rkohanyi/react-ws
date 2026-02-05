import { useEffect, useState } from 'react'
import { MovieCard } from './components/MovieCard'
import { AddNewMovie } from './components/AddNewMovie'

function mapMovie(movie) {
  return {
    id: movie.id,
    title: movie.original_title,
  }
}

function App() { // Top movie component thingy
  console.log('App instantiated')
  
  const [movieList, setMovieList] = useState([])
  const [lastSelectedId, setLastSelectedId] = useState(-1)
  
  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch('https://jsonfakery.com/movies/random/3')
      setMovieList((await res.json()).map(mapMovie))
    }
    fetchMovies()
  }, [])

  function updateLastSelected(id) {
    setLastSelectedId(id)
  }

  function updateMovieList(id, title) {
    console.log("New movie added: ", id, title)
    const newMovie = { id, title }
    const newMovieList = [...movieList]
    newMovieList.push(newMovie)
    setMovieList(newMovieList)
  }

  function deleteSelected(id) {
    setMovieList(movieList.filter(movie => movie.id !== id))
  }

  return (
    <>
      <h1>Top Level Movie Thingy</h1>
      {
        lastSelectedId === -1
          ? <h3>None selected yet</h3>
          : <h3>{movieList[lastSelectedId].title}</h3>
      }
      <hr></hr>
      <AddNewMovie onMovieAdd={updateMovieList} />
      <hr></hr>
      {
        movieList.map(movie => <MovieCard key={movie.id}
          id={movie.id}
          title={movie.title}
          onSelected={updateLastSelected}
          onDeleted={deleteSelected} />)
      }
    </>)
}

export default App
