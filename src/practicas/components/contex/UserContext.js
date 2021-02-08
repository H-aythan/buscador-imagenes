import React, {createContext,useState} from 'react';
import Movie from '../Movie';

const UserContext=createContext();
const initialUser={id:1,name:"Haythan",favoriteMovies:[]}

const UserProvider=({children})=>{
    const [user,setUser]=useState(initialUser);

    const login=()=>{
        setUser(initialUser);
    }
    const logout=()=>{
        setUser(null);
    }
    const idPeliculaFavorite=(movieId)=>{
        const isFavorite=user?.favoriteMovies?.includes(movieId)
        const favoriteMovies=isFavorite
             ?user.favoriteMovies.filter(favMovId=>favMovId!==movieId)
             :[...user.favoriteMovies,movieId]
        setUser({
            ...user,favoriteMovies
        })
    }
    const data={user,login,logout,idPeliculaFavorite}
    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}
export {UserProvider}
export default UserContext;