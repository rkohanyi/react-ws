import { useState } from "react"

export function AddNewMovie({ onMovieAdd }) {
    console.log("AddNewMovie instantiated")

    const [id, setId] = useState("")
    const [title, setTitle] = useState("")

    function handleMovieAdd() {
        onMovieAdd(id, title)
        setId("")
        setTitle("")
    }

    return <div>
        <h2>Add New Movie</h2>

        <label htmlFor="movie-id">ID</label>
        <input id="movie-id" value={id} onInput={(event) => setId(event.target.value)}></input>
        <label htmlFor="movie-title">Title</label>
        <input id="movie-title" value={title} onInput={(event) => setTitle(event.target.value)}></input>
        <button onClick={() => handleMovieAdd()}>Add new movie!</button>
    </div>
}