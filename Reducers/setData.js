

//import { Action } from '../action' ;


const  setDataReducer = ( state = [] , action) =>  {

    switch (action.type) {
      case 'POPULATE_DATA' : 
    
        const newState = [ ...state , action.payload];
        return newState
     
      default:
        return state
       } 
     }


     export default setDataReducer;