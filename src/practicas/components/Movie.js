import React, { useContext } from 'react'
import UserContext from './contex/UserContext';

const Movie = ({movie}) => {
    const {user,idPeliculaFavorite}=useContext(UserContext)
    const imgStyles={
        height:"260px",
        objectFit:"cover",
    }
    
    const isFavorite=user?.favoriteMovies?.includes(movie.id);
    return (
        <div className="card">
            <img
                src={movie.imageUrl}
                alt={movie.title}
                className="card-img-top"
                style={imgStyles}
            />
            <div className="card-body">
                <h4>{movie.title}</h4>
                {user?.id&&
                <button onClick={()=>idPeliculaFavorite(movie.id)}
                className={`btn ${isFavorite?'btn-success':`btn-outline-primary`}`}>
                    Favoritos
                </button>
                }   
            </div>
            
        </div>
    )
}

export default Movie
