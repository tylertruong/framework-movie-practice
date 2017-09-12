import React from 'react'

export let MovieEntry = ({movie, toggleWatched}) => (
  <li className="listentry">{movie.title} <div className={movie.watched ? 'watchToggle-green' : 'watchToggle'} onClick={() => toggleWatched(movie.title)}>{movie.watched ? 'Watched' : 'To Watch'}</div></li> 
);
