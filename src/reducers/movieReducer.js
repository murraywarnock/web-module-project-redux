import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
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
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        default:
            return state;
    }
}

export default reducer;