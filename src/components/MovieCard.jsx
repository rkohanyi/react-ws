export function MovieCard({ id, title, onSelected, onDeleted }) {
    console.log("MovieCard instantiated")

    return <div id={"movie-" + id}>
        <h1>Hey I'm Mr. Movie Card!</h1>
        <h2>{title}</h2>
        <button onClick={() => onSelected(id)}>Click me!</button>
        <button onClick={() => onDeleted(id)}>Delete me!</button>
    </div>
}