import 'react-native-gesture-handler';
//import * as React from 'react';

import React, { useState, useEffect, state } from 'react';
import { View, StyleSheet, FlatList, SectionList , Text, ImageBackground, ActivityIndicator , Button, TextInput, TouchableOpacity} from 'react-native';
import Header from './components/Header';
import axios from 'axios';
import ListItem from './components/ListItem';
import Colors from './constent/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, combineReducers } from 'redux';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import allActions from  './action'


function DetailsScreen({ route, navigation }) {
 
  const { ZIPCode } = route.params;

  // const [isData, isDataSet] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch()

  const weatherData  = useSelector(state => state.dataReducer)


  useEffect(() => {

     var MyZipCode = ZIPCode
   
     var APIKey = "eb9daa42f3cea08a19a17e235f276c67"
     var countryCode = "IN"

    axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${MyZipCode},${countryCode}&appid=${APIKey}`)
      .then((response) => {
       
        console.log("API Call ")
        console.log( response.data.list.length)
     
        //isDataSet(response.data.list);
        //store.dispatch(populateData());
         
          dispatch(allActions.populateData(response.data.list))

      })
      .catch(function(error) {
       alert(error.message);

      })
      .finally(function() {
        // always executed
        //setIsLoading(false);
         
         dispatch(allActions.setLoadingBool(false))

      });
      

  }, []);

      const isLoadingBool = useSelector(state =>state.isLoadingReducer)
  //    Replace  isLoading below with  isLoadingBool created above 

  if (isLoadingBool) {

    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' color={Colors.primaryColor} />
      </View>);
  };

  console.log("checking weather data")

  console.log(weatherData[0])
  console.log(weatherData[0].length) 

  const forecastData = weatherData[0]
 
  const DATA = [
    {
      title: " Day 1 ",
      data: forecastData.slice(0,8)

    },
    {
      title: " Day 2 ",
      data: forecastData.slice(8,16)
    },
    {
      title: " Day 3 ",
      data: forecastData.slice(16,24)
    },
    {
      title: " Day 4 ",
      data: forecastData.slice(24,32)
    },
    {
      title: " Day 5 ",
      data: forecastData.slice(32,40)
    },
  ];

  return (
    <View style={styles.imageContainer}>
      <ImageBackground style={styles.backgroundImage} source={require('./assets/weatherbackground.jpg')} >
        {/* <Header />   */}
        <View style={styles.lisContainer}>
          <ListItem 
            temp='Temperature '
            humidity='Humidity'
            wind='Wind Speed' />

            <SectionList  
                    sections= { DATA }
                    renderItem= {({ item }) =>

                    <ListItem
                      temp={item.main.temp}
                      humidity={item.main.humidity}
                      wind={item.wind.speed}
                    /> }  
                    renderSectionHeader={({section}) => <Text style = {styles.sectionHeader} > {section.title} </Text>}  
                    keyExtractor={(item, index) => index}  
            />  
        </View>
        </ImageBackground>

    </View>

  );
}


 function HomeScreen({ navigation })  {

  const [text, setText] = useState('');

  const dispatch = useDispatch()

  const  zipCode1 = useSelector(state => state.zipCodeReducer)

  //    Replace  text below with  zipCode created above

    function setZipCodeData(text1) {

      if (text1.length == 6) {
       // console.log("2222222")
        dispatch(allActions.zipcodeData(text1))
      }
    // dispatch(allActions.zipcodeData(text1))

   }
  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', padding : 110}}>
      <Text  style = {styles.text} >  Enter Zip Code </Text>
      <TextInput  style = {styles.textInput}
      // style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      keyboardType = "number-pad"
      onChangeText={text => setZipCodeData(text) }
       
      text={zipCode1}
    />
        
 
<TouchableOpacity
     // style = {styles.submitButton}
      onPress={() => {
      navigation.navigate('Details', {
  
      ZIPCode : zipCode1 ,
      otherParam: 'anything you want here',
});
}}
>
<Text style = {styles.Buttontext}> Get Forecast Details </Text>
</TouchableOpacity>

    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome to Weather App' }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'

  },
  textInput: {
    fontSize: 26,
    height: 40,
    width : 160,
    justifyContent:"center",
    borderColor: 'gray',
    borderWidth: 1,
    paddingTop:0,
    paddingBottom:0,

  },
  text: {
    fontSize: 24,
    color: 'red'
    
  },
  Buttontext: {
    fontSize: 18,
    //numberOfLines :1,
    color: 'blue'
    
  },
  sectionHeader: {
    fontSize: 25, 
    height : 40,
    fontWeight: 'bold',  
    alignContent:'center',
    color: "white",  
    backgroundColor: '#FF5733',  
    
    
  },

  imageContainer: {
    width: '100%',
    height: '100%'
  },
  lisContainer: {
    padding: 15
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default App;

