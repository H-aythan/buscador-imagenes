import React from 'react'
import { MoviesProvider } from './contex/MoviesProvider'
import {UserProvider} from './contex/UserContext'
import MovieList from './MovieList'
import NavBar from './NavBar'


const Index = () => {
    
    return (
        <div>
            <UserProvider >
                <MoviesProvider>
                    <NavBar/>
                    <MovieList/>
                </MoviesProvider>
            </UserProvider>
        </div>
    )
}

export default Index
