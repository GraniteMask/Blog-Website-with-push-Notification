import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './store/reducers/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {reduxFirestore, getFirestore,  createFirestoreInstance} from 'redux-firestore'
import { ReactReduxFirebaseProvider,reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import firebase, {fbconfig} from './config/fbconfig'

//for attachAuthIsReady or authisloaded with v3 latest version
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';

const store = createStore(rootReducer, 
  compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(firebase, fbconfig)
  //reactReduxFirebase(fbconfig)
  )
);

//This piece of code is used to get initials of name in navbar
const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
}

const rrfProps ={
  firebase,
  config: fbconfig,
  config: profileSpecificProps, //This piece of code is used to get initials of name in navbar
  dispatch: store.dispatch,
  createFirestoreInstance,

  userProfile: 'users', // where profiles are stored in database
  presence: 'presence', // where list of online users is stored in database
  sessions: 'sessions'
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
      return children
}


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>   
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//install npm redux-thunk
//npm install react-redux-firebase redux-firestore