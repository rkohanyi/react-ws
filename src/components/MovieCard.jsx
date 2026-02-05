export function MovieCard({ index, id, title, onSelected }) {
    console.log("MovieCard instantiated")

    return <div id={"movie-" + id}>
        <h1>Hey I'm Mr. Movie Card!</h1>
        <h2>{title}</h2>
        <button onClick={() => onSelected(index)}>Click me!</button>
    </div>
}