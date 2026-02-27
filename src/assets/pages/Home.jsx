 import { useState } from "react"
 import MovieCard from "../../components/MovieCard"

 function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    
    const movies = [
      { id: 1, title: "John Wick", release_date: "2020" },
      { id: 2, title: "Hard Ball", release_date: "2022" },
      { id: 3, title: "Speed", release_date: "2021" },
    ];

    const handleSearch = () => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Seach for movies..." 
            className="search-input"
            value={searchQuery}
            onChange= {(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movie-grid">
            {movies.map(
                (movie) => 
                (
                <MovieCard movie={movie} key={movie.id}/>
                )
            )}
        </div>
    </div>
 }

 export default Home;