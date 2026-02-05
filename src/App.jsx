import { useState } from 'react'
import { MovieCard } from './components/MovieCard'

function App() { // Top movie component thingy
  console.log('App instantiated')

  const movieList = [
    {
      id: 1,
      title: 'Die Hard 1'
    },
    {
      id: 2,
      title: 'Die Hard 2'
    },
    {
      id: 3,
      title: 'Die Hard 3'
    }
  ]

  const [lastSelectedIndex, setLastSelectedIndex] = useState(-1)

  function updateLastSelected(index) {
    setLastSelectedIndex(index)
  }

  return (
    <>
      <h1>Top Level Movie Thingy</h1>
      {
        lastSelectedIndex === -1
          ? <h3>None selected yet</h3>
          : <h3>{movieList[lastSelectedIndex].title}</h3>
      }
      <hr></hr>
      {
        movieList.map((movie, index) => <MovieCard key={movie.id}
          index={index}
          id={movie.id}
          title={movie.title}
          onSelected={updateLastSelected} />)
      }
    </>)
}

export default App
