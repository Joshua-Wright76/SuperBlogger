import bodyReducer from './reducers/bodyReducer.js'
import commentReducer from './reducers/commentReducer.js'
import titleReducer from './reducers/titleReducer.js'

import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    titles: titleReducer,
    comments: commentReducer,
    bodies: bodyReducer,
})

// const createStoreWithMiddleware = applyMiddleware(thunk, composeWithDevTools())(createStore);

export default createStore(
    reducers, applyMiddleware(thunk) /*compose(
        // composeWithDevTools(),
        applyMiddleware(thunk)
    )*/
)

