import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger';

import rootReducer from './reducers/rootReducer';
import {
    reduxFirestore,
    getFirestore,
    createFirestoreInstance
  } from "redux-firestore";
  import { getFirebase } from "react-redux-firebase";
  import {fbConfig} from "../config/fbConfig";
  import firebase from "firebase/app";

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
};

export const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase})),
        reduxFirestore(firebase, fbConfig),
        )
);

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
};

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};