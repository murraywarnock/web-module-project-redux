import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesActions.js';

export const initialState = {
            favorites: [],
            displayFavorites: true
};
  
export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
       console.log("TOGGLE_FAVORITES state", state);
       return {
        ...state,
        displayFavorites: !state.displayFavorites
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]       
      };
      case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(item=>(action.payload !== item.id))
      };
    default:
      return state;
  }
};
