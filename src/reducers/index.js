import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
<<<<<<< HEAD
    movieReducer, 
    favoritesReducer
});

export default rootReducer;
=======
    movie: movieReducer,
    favorites: favoritesReducer
});

export default rootReducer ;
>>>>>>> 06573486bd1cf7323e261bbcba52752c393c52f8
