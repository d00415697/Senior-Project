import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../src/components/Custominput/Custominput';
import CustomButton from '../src/components/CustomButton';

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');


    const onSignInPressed = () => {
        console.warn('onSignInPressed');
    };

    const onSendPressed = () => {
        console.warn('onSendPressed');
    };



    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset your password</Text>
           
           <CustomInput 
           placeholder="Username" 
           value={username} 
           setValue={setUsername}
           />
           
    
           
           <CustomButton text="Send" onPress={onSendPressed}/>           
           <CustomButton text="Back to Sign in" onPress={onSignInPressed} type="TERTITARY"/>




        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'black', //currently controls the signin screen background
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        margin: 10,
    },
    text:{
        color: 'gray',
        marginVertical: 10,
    },
    link:{
        color: '#FDB075',
    },
});

export default ForgotPasswordScreen;