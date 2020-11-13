import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Colors from '../constent/Colors';


const Header = props => {

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Weather App </Text>
        </View>
    );

};

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        width: '100%',
        height: 90,
        paddingTop: 40,
      //  paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
     //   borderBottomColor: Platform.OS == 'ios' ? '#ccc' : 'white',
      //  borderBottomWidth: Platform.OS === 'ios' ? 1 : 0

    },
    headerTitle: {
        color: '#fff',
        fontSize: 23,



    },

});

export default Header;

