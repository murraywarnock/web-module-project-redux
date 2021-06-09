//import { ADD_FAVORITE, DELETE_FAVORITE } from '../actions/favoritesActions.js';

const initialState = {
    favorites: [],
    displayFavorites: true
}

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
        default:
            return state;
    }
}

export default reducer;