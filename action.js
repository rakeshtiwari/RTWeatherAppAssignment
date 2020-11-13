

//   ACTION  CREATERS  /   ACTIONS


  const populateData = (data) => {
    return {
      type:  'POPULATE_DATA' ,
      payload: data 
    }
   }
   
   
   const setLoadingBool = (isLoad) => {
     return {
       type:  'IS_LOADING' ,
       payload: isLoad 
     }
    }
   

    const zipcodeData = (pincode) => {
     return {
       type:  'ZIPCODE' ,
       payload: pincode 
     }
  }
 

  const allActions  =  {
    populateData,
    setLoadingBool ,
    zipcodeData

 }


  export default allActions


