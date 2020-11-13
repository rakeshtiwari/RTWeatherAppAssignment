

 //import {  } from '../action' ;

 

  const  ZipCodeReducer = ( state = "" , action) =>  {

    switch (action.type) {
    
      case 'ZIPCODE' : 
        const newState = [ ...state , action.payload];
        return newState
     
      default:
        return state
    
     }
    }

    export default ZipCodeReducer;
