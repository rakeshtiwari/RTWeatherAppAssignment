/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React, { useState, useEffect, state } from 'react';
import { createStore } from 'redux' ;
import  rootReducer from './Reducers'
import  { Provider } from 'react-redux';



const store = createStore(rootReducer);

//  we wrap our App component with the Provider component from react-redux. The Provider component will take in one prop, store which will be set to the store from createStore.


const RNRedux = () => (
    <Provider store = { store }>
      <App />
    </Provider>
  )


AppRegistry.registerComponent(appName, () => RNRedux);

