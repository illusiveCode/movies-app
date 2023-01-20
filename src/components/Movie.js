import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w500"

const setVoteClass = (vote) => {
    if(vote >= 8){
        return 'green'
    } else if (vote >= 6){
        return 'orange'
    } else {
        return 'red'
    }
}

const Movie = ({title, poster_path, overview, vote_average, vote_count}) => {
    return ( 
            
            <div className="shadow-md movie m-2" >
                
                <img className="card-img-top" src={IMG_API+poster_path} alt={title}/>
                <div className="card-body movie-info">
                    <h5 className="card-title">{title}</h5>
                    <span className={`tag bold ${setVoteClass(vote_average)}`}>{vote_average}</span>
                </div>
                
                <div className="movie-overview">
                    
                    <h2 className="pb-2">Overview</h2>
                    <p>{overview}</p>
            
                </div>
            </div> 
     );
}
 
export default Movie;