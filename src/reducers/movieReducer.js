import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state=initialState, action) => {
    // console.log("Made it to the reducer: ", state, action);
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        case ADD_MOVIE:
            // const newMovie = {
            //     ...action.payload,
            //     id: Date.now()
            // }
            console.log("In reducer, case ADD_MOVIE: ", action.payload, state);
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }
            default:
            return state;
    }
}

export default reducer;