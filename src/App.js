import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/movies");
      console.log(response);
      setMovies(response.data);
    } catch (error) {
      console.log("Error while fetching api--", error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="App">
      <h1>Movies App</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
