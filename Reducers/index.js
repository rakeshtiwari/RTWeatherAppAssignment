
import dataReducer from './setData' ;
import isLoadingReducer from './isLoading' ; 
import zipCodeReducer from  './zipcode' ;

import {combineReducers} from 'redux' ;



const  rootReducer = combineReducers ({
     dataReducer, 
     isLoadingReducer ,
     zipCodeReducer

}) ;


export default rootReducer;