import React from 'react'
import {searchNetflix} from '../../lib/SearchNetflix'

export class MovieInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state ={};
    searchNetflix(this.props.movie.title, (movies) => {
      this.setState({
        year: movies.release_year,
        runtime: movies.runtime,
        rating: movies.rating,
        cast: movies.show_cast,
        poster: movies.poster,
      });
    });
  }
 render () {
    return (
      <div className="movieinfo">
        <img src={this.state.poster} />
        <li>Year: {this.state.year}</li>
        <li>Runtime: {this.state.runtime}</li>
        <li>imdbRating: {this.state.rating}</li>
        <li>Cast: {this.state.cast}</li>
        <li>Watched: {this.props.movie.watched ? 'watched' : 'to watch'} </li>
      </div>
    );
  }  
}


