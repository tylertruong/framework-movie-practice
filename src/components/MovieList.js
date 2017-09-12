import {MovieEntry} from './MovieEntry'
import {MovieInfo} from './MovieInfo'
import React from 'react'


export let MovieList = ({movies, finalSearch, watched, toggleWatched}) => (
  <div className="movielist"> 
    {movies.map((movie) => {
      if (movie.title.toLowerCase().indexOf(finalSearch.toLowerCase()) >= 0) {
        if ( (watched === null) || (!watched && !movie.watched) || (watched && movie.watched) ) {
          return (
          <div key={movie.title}>
            <MovieEntry movie={movie} toggleWatched={toggleWatched}/>
            <MovieInfo movie={movie} />
          </div>
          )
        } 
      }
    })}
  </div>
)

