import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`], bgColor ? {backgroundColor : bgColor} : {}]}>
            <Text style={[styles.text, styles[`text_${type}`], fgColor ? {color : fgColor} : {}]}>{text}</Text>
        </Pressable>
    );
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 8,
        alignItems: 'center',
        borderRadius: 5,

    },

    container_PRIMARY: {
        backgroundColor: '#44CEE0',

    },

    container_SECONDARY:{
        borderColor: '#44CEE0',
        borderWidth: 2,
    },

    container_TERTITARY: {},


    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_TERTITARY: {
        color: 'gray',
    },

    text_SECONDARY:{
        color: 'white',
    },
});

export default CustomButton;