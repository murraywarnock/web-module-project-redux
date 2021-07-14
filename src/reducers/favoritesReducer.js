import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesActions.js';

export const initialState = {
            favorites: [],
            displayFavorites: true
};
  
export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
       console.log("TOGGLE_FAVORITES state.displayFavorites", state.displayFavorites);
       return {
        ...state,
        diplayFavorites: state.displayFavorites ? false : true
      };
    case ADD_FAVORITE:
        console.log("ADD_FAVORITE action.payload: ", action.payload);
      return {
        ...state,
        favorites: [...state.favorites, action.payload]       
      };
      case REMOVE_FAVORITE:
        console.log("REMOVE_FAVORITE action.payload: ", action.payload);
      return {
        ...state,
        favorites: state.favorites.filter(item=>(action.payload !== item.id))
      };
    default:
      return state;
  }
};
