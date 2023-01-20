import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Movie from './components/Movie';
import './index.css';

const POPULAR_API = "https://api.themoviedb.org/3/movie/popular?api_key=82acffd2156dfe45bd2c2988c5e9072c"

const SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=82acffd2156dfe45bd2c2988c5e9072c&query="

function App() {

  const [popular, setPopular] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const handleFocus = (e) => e.target.select();
  useEffect(() => {
    getPopular(POPULAR_API);
  }, [])

  const getPopular = (API) =>{
    fetch(API)
    .then((res) => res.json())
    .then(res => {
      console.log(res);
      setPopular(res.results)
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm){
         getPopular(SEARCH+searchTerm)
        }
      }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (

    <>
      <form onSubmit={handleOnSubmit}>
        <header className='fixed-top'>
            <input 
              style={{color: "#6c757d"}}
              onFocus={handleFocus}
              className='search rounded-1' 
              type="search" placeholder='search' 
              value={searchTerm} 
              onChange={handleOnChange}
            />
        </header>
      </form>
      
      <div className='movie-container' >
            {popular && popular.map(movie =>(
            <Movie key={movie.id} {...movie}/>
            ))}
      </div>
    </>
  );
}

export default App;
