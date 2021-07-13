export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

<<<<<<< HEAD
export const addMovie = (movie)=>{
    return({type: ADD_MOVIE, payload:movie});
=======
export const addMovie = (newMovie)=>{
    return({type: ADD_MOVIE, payload:newMovie});
>>>>>>> 06573486bd1cf7323e261bbcba52752c393c52f8
}