import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return (<View style={{ ...styles.card, ...props.style }}>{props.children}</View>);
   
};
const styles = StyleSheet.create({
    card: {
        
        shadowOffset: { width: 0, height: 2 },
        shdowRadius: 6,
        shadowOpacity: 0.26,
        shadowColor: 'black',
        backgroundColor: 'white',
        elevation: 8,
        padding: 20,
        borderRadius: 10
    }
});
export default Card;
