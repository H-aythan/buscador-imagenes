import React, { useContext } from 'react'
import Movie from './Movie'

import MoviesContext from './contex/MoviesProvider'

const MovieList = () => {
    const {movies}=useContext(MoviesContext)

    return (
        <div className="container">
           <div className="row">
                {movies.map(movie=>{
                    return(
                    <div className="col-md-4" key={movie.id}>
                        <Movie
                            movie={movie}
                        />                
                    </div>
                    )
                })}
           </div> 
        </div>
    )
}

export default MovieList
                       

                       
                  
