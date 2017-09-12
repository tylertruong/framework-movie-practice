import React from 'react'
import ReactDOM from 'react-dom'
import {AddMovies} from './components/AddMovies'
import {MovieList} from './components/MovieList'
import {MovieEntry} from './components/MovieEntry'
import {MovieInfo} from './components/MovieInfo'
import {Search} from './components/Search'
import {Watched} from './components/Watched'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: window.movies,
      searchTerm: '',
      finalSearch: '',
      movieTerm: '',
      movies: [],
      watched: null,
    };
  }
 
  toggleWatched(title) {
    let newMovies = this.state.movies.slice();
    
    for (let i = 0; i < newMovies.length; i++) {
      if (newMovies[i].title === title) {
        newMovies[i].watched = !newMovies[i].watched;
      }
    }

    this.setState({
      movies: newMovies,
    });

  }

  clickWatched() {
    this.setState({
      watched: true,
    });
  }

  clickWatchedOff() {
    this.setState({
      watched: false,
    })
  }

  typeSearch(query) {
    this.setState({
      searchTerm: query,
    });
  }

  typeMovie(query){
    this.setState({
      movieTerm: query,
    });
  }
  
  enterSearch() {
    this.setState({
      finalSearch: this.state.searchTerm,
    });
  }

  enterMovie(){
    this.setState({
      movies: this.state.movies.concat({title: this.state.movieTerm, watched: false}),
    });
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <AddMovies typeMovie={this.typeMovie.bind(this)} enterMovie={this.enterMovie.bind(this)} />
        <Watched movies={this.state.movies} clickWatched={this.clickWatched.bind(this)} clickWatchedOff={this.clickWatchedOff.bind(this)} watched={this.state.watched}/>
        <Search typeSearch={this.typeSearch.bind(this)} enterSearch={this.enterSearch.bind(this)} />
        <MovieList movies={this.state.movies} finalSearch={this.state.finalSearch} watched={this.state.watched} toggleWatched={this.toggleWatched.bind(this)}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

