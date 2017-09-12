import $ from 'jquery'
import React from 'react'


export let searchNetflix = (query, callback) => {
  $.ajax({
    url: 'https://netflixroulette.net/api/api.php',
    type: 'GET',
    data: {
      title: query
    },
    success: (movies) => {
      console.log('netflix: got the movie', movies);
      callback(movies);
    },
    error: (data) => {
      console.error('error', data)
    }
  });
};

