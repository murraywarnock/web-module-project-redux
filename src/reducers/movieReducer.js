import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

<<<<<<< HEAD
const reducer = (state=initialState, action) => {
    // console.log("Made it to the reducer: ", state, action);
=======
const reducer = (state = initialState, action) => {
>>>>>>> 06573486bd1cf7323e261bbcba52752c393c52f8
    switch(action.type) {
        case ADD_MOVIE:
            console.log("in add movie reducer")
            return {
                ...state,
                movies: [...state.movies, {
                    description: action.payload.description,
                    director: action.payload.director,
                    genre: action.payload.genre,
                    id: action.payload.id,
                    metascore: action.payload.metascore,
                    title: action.payload.title
                }]
            }
        case DELETE_MOVIE:
            console.log("in delete movie reducer")
            return {
                ...state,
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }
            default:
            return state;
    }
}

export default reducer;