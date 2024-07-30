import React from 'react';
import { View, Text, StyleSheet,Platform } from 'react-native';

import Colors from '../constants/Colors';
import TitleText from './TitleText';

const Header = props => {
    return (
        <View style={{...styles.headerBase,...Platform.select({ios:styles.headerIos,android:styles.headerAndroid})}}>
            <TitleText style={styles.title}>{props.title}</TitleText>
        </View>
    );
};

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        paddingTop: 36,
    
        alignItems: 'center',
        justifyContent: 'center'
      
    },
    headerIos:{
        backgroundColor:'white',
        borderBottomColor:'#ccc',
        borderBottomWidth:1
    },
    headerAndroid:{  
          backgroundColor: Colors.primary,
        borderBottomColor:'transparent',
        borderBottomWidth:0},
    title: {
        color: Platform.OS==='ios'? Colors.primary:'white'
    }
 
});

export default Header;
