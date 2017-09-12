import React from 'react'

export let Watched = ({movies, clickWatched, clickWatchedOff, watched}) => (
  <div>
    <div className={(watched === true) ? 'watched-green' : 'watched-off'} onClick={() => clickWatched()}>Watched</div>
    <div className={(watched === false) ? 'watched-green' : 'watched-off'} onClick={() => clickWatchedOff()}>To Watch</div>
  </div>
);

