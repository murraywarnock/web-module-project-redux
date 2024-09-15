export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export function toggleFavorites() {
    return { type: TOGGLE_FAVORITES };
}

export const addFavorite = newFavorite => {
    return { type: ADD_FAVORITE, payload: newFavorite };
};

export const removeFavorite = id => {
    return { type: REMOVE_FAVORITE, payload: id };
};