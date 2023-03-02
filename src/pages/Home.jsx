import React, {useState} from 'react'
import { FiSearch } from "react-icons/fi";
import MovieList from '../components/MovieList';

export const Home = () => {
    const urlBase = "http://www.omdbapi.com";
    const api_key = "b126e47c";
    const [query, setQuery] = useState("");
    const [movie, setMovie] = useState(null);

  const handleInput = (e) => {
    setQuery(e.target.value);

  }

  const getMovieByTitle = async (param) => {
    try {
      const response = await fetch(`${urlBase}/?t=${param}&apikey${api_key}`);
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error(error);
      
    }
  }

  const handleSubmit = (e) => {
    e.preventDeafault();

    getMovieByTitle(query)
  }

  return (

    <div className='mt-4 p-4'>
      <form className='flex items-center gap-2 text-white text-2xl px-3'
      onSubmit={handleSubmit}>
        <button type='submit'>
        <FiSearch/>
        </button>
        <input type="text" className='w-full text-xl bg-transparent outline-none'
        placeholder='Search for movies or TV series'
        value={query}
        onChange={handleInput} />
        
      </form>
        {movie && <h2 className='text-white'>{movie.title}</h2>
        }

        <MovieList title='Listado de películas
        '/>
        
    </div>
  )
}

export default Home
