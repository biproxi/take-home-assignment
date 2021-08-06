
import formReducer from './reducers/index';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const initStore = (initialState, options) => {
    let composeEnhancers = compose;

    //Check if function running on the sever or client
    if (!options.isServer) {
        //Setup Redux Debuger
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }



    const store = createStore(formReducer, initialState, composeEnhancers(
        applyMiddleware(thunk) //Applying redux-thunk middleware
    ));

    return store;
};


export default initStore;