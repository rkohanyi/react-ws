import { useState } from "react"

export function AddNewMovie({ onMovieAdd }) {
    console.log("AddNewMovie instantiated")

    const [id, setId] = useState(null)
    const [title, setTitle] = useState(null)

    return <div>
        <h2>Add New Movie</h2>

        <label>ID</label>
        <input onInput={(event) => setId(event.target.value)}></input>
        <label>Title</label>
        <input onInput={(event) => setTitle(event.target.value)}></input>
        <button onClick={() => onMovieAdd(id, title)}>Add new movie!</button>
    </div>
}