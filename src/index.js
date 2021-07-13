import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';

// import reducer from './reducers';
import reducer, {movie, favorites} from './reducers';

import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

<<<<<<< HEAD
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider>,
  documentElementById('root')
=======
const store = createStore(reducer);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
>>>>>>> 06573486bd1cf7323e261bbcba52752c393c52f8
);
