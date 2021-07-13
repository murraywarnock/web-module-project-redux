<<<<<<< HEAD
import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesActions'
=======
//import { ADD_FAVORITE, DELETE_FAVORITE } from '../actions/favoritesActions.js';
>>>>>>> 06573486bd1cf7323e261bbcba52752c393c52f8

const initialState = {
    favorites: [],
    displayFavorites: true
}

<<<<<<< HEAD
const favoritesReducer = (state=initialState, action)=> {
    switch(action.type) {
        case(TOGGLE_FAVORITES): 
            return({
                ...state,
                displayFavorites: !state.displayFavorites
            })
        case(ADD_FAVORITE):
            return({
                ...state, 
                favorites: [...state.favorites, action.payload]
            })
        case(REMOVE_FAVORITE):
            return({
                ...state,
                favorites: [state.filter(item=>item.id !== action.payload)]
            })
=======
const reducer = (state = initialState, action) => {
    switch(action.type) {
        // case ADD_FAVORITE:
        //     console.log("in add favorites reducer")
        //     return {
        //         ...state,
        //         favorites: [...favorites, newFavorite]
        //     }
        // case DELETE_FAVORITE:
        //     console.log("in delete favorites reducer")
        //     return {
        //         favorites: state.favorites.filter(item=>(action.payload !== item.id))
        //     }
>>>>>>> 06573486bd1cf7323e261bbcba52752c393c52f8
        default:
            return state;
    }
}

<<<<<<< HEAD
export default favoritesReducer;
=======
export default reducer;
>>>>>>> 06573486bd1cf7323e261bbcba52752c393c52f8
