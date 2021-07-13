import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { toggleFavorites } from '../actions/favoritesActions';

const MovieHeader = (props) => {
    // const appTitle = "";
    const { appTitle } = props;
    const { displayFavorites } = props;

    const handleClick = ()=> {
        props.toggleFavorites();
    }
=======

const MovieHeader = (props) => {
    // const appTitle = "";
    const appTitle = props.appTitle;
    const displayFavorites = true;
>>>>>>> 06573486bd1cf7323e261bbcba52752c393c52f8
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div className="btn btn-sm btn-primary"><span onClick={handleClick}>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

<<<<<<< HEAD
const mapStateToProps = (state)=> {
    return({
        displayFavorites: state.favoritesReducer.displayFavorites,
        appTitle: state.movieReducer.appTitle
    })
}

export default connect(mapStateToProps, {toggleFavorites}) (MovieHeader);
=======
const mapStateToProps = (state) => {
    return {
        appTitle: state.appTitle,
        // movies: state.movies
    }
}

export default connect(mapStateToProps)(MovieHeader);
>>>>>>> 06573486bd1cf7323e261bbcba52752c393c52f8
