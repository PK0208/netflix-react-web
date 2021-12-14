import React, {useState, useEffect} from 'react';
import axios from '../../axios';
import "./Row.css"

const image_url = "https://image.tmdb.org/t/p/w500";


function Row({title, fetchUrl, isLargeRow}) {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
   // when the component loads this will run only runs once and dont run again

   async function fetchData(){
      const request = await axios.get(fetchUrl);
      console.log("fetchData-Response", request.data.results)
      setMovies(request.data.results)
      return request;
   }

   fetchData();
    
  }, [fetchUrl])

  //[] --variable here movies every single time movies changes


    return (
      <div className='row'>
        <h2>{title}</h2>
        <div className= "row__posters">
            {movies.map(movie => (
              <div>
              
              <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}  key={movie.id} src={`${image_url}${ isLargeRow? movie.poster_path: movie.backdrop_path}`} alt={movie.name} />
              </div>
            ))}
              
              
        </div>
      </div>
    );
  }
  
  export default Row;