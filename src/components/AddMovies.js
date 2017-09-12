import React from 'react'

export let AddMovies = ({typeMovie, enterMovie}) => (
  <div>
    <input type="text" placeholder="Add movie title here" onChange={event => typeMovie(event.target.value)}/>
    <button onClick={enterMovie}>Add</button>
  </div>
);

  