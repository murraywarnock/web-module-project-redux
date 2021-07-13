import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { STATEMENT_OR_BLOCK_KEYS } from '@babel/types';
import { deleteMovie } from '../actions/movieActions'
import { addFavorite } from '../actions/favoritesActions'
=======

import { deleteMovie } from "../actions/movieActions"
>>>>>>> 06573486bd1cf7323e261bbcba52752c393c52f8

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    // const movies = [];
<<<<<<< HEAD
    const { movies, addFavorite, deleteMovie } = props;
    const movie = movies.find(movie=>movie.id===Number(id));

    const deleteMovieClick = () => {
        deleteMovie(movie.id);
        push('/movies');
    }
    const addFavoriteClick = () => {
        addFavorite(movie);
    }
  
=======
    const movies = props.movies;
    const movie = movies.find(movie=>movie.id===Number(id));

  const handleClick = ()=> {
    props.deleteMovie(id);
    push('/movies');
  }

    
>>>>>>> 06573486bd1cf7323e261bbcba52752c393c52f8
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
<<<<<<< HEAD
                            <span className="m-2 btn btn-dark" onClick={addFavoriteClick}>Favorite</span>
                            <span className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete" onClick={deleteMovieClick}/></span>
=======
                            <span className="m-2 btn btn-dark">Favorite</span>
                            <span className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete" onClick={handleClick}/></span>
>>>>>>> 06573486bd1cf7323e261bbcba52752c393c52f8
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

<<<<<<< HEAD
const mapStateToProps = (state)=> {
    return({
        displayFavorites: state.favoritesReducer.displayFavorites,
        movies: state.movieReducer.movies
    })
};

export default connect(mapStateToProps, {deleteMovie, addFavorite}) (Movie);
=======
const mapStateToProps = (state) => {
    return {
        appTitle: state.appTitle,
        movies: state.movies
    }
}

export default connect(mapStateToProps, {deleteMovie})(Movie);
>>>>>>> 06573486bd1cf7323e261bbcba52752c393c52f8
