import React from 'react';
import { connect } from 'react-redux';

import { connect } from 'react-redux';

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';


const MovieList = (props)=> {
<<<<<<< HEAD
=======
    // const movies = [];
>>>>>>> 06573486bd1cf7323e261bbcba52752c393c52f8
    const movies = props.movies;

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}

const mapStateToProps = (state) => {
<<<<<<< HEAD
    return({
        movies: state.movieReducer.movies
    })
=======
    return {
        appTitle: state.appTitle,
        movies: state.movies
    }
>>>>>>> 06573486bd1cf7323e261bbcba52752c393c52f8
}

export default connect(mapStateToProps)(MovieList);