import React, { useState, useEffect } from 'react'
import {useParams } from 'react-router-dom'
import MovieDetailContainer from '../components/MovieDetailContainer';

const DetailPage = () => {
    const URL = "https://run.mocky.io/v3/c38dfed6-bc92-4cc1-9bcb-ed52bd12c7a2";
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async (id) => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            const result = data.find(movie => movie.id === id); 
            setMovie(result);
                console.log(result);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
      getMovie(id);
    }, [id]);
    

  return (
    <main>
    {movie ? <MovieDetailContainer movie={movie}/> :
     <p className='text-blue-50'>Cargando película</p> } 
    </main>
  )
}

export default DetailPage