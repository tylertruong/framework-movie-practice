import React from 'react'

export let Search = ({typeSearch, enterSearch}) => (
  <div>
    <input type="text" placeholder="Search..." onChange={event => typeSearch(event.target.value)}/> 
    <button onClick={enterSearch}>Go!</button>
  </div>
);

