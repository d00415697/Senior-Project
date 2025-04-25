import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../src/components/Custominput/Custominput';
import CustomButton from '../src/components/CustomButton';

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');


    const onSignInPressed = () => {
        console.warn('onSignInPressed');
    };

    const onConfirmPressed = () => {
        console.warn('onConfirmPressed');
    };

   const onResendPress = () => {
    console.warn('onResendPressed');
   };


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Confirm your email</Text>
           
           <CustomInput 
           placeholder="Enter your confirmation code" 
           value={code} 
           setValue={setCode}
           />
           
    
           
           <CustomButton text="Confirm" onPress={onConfirmPressed}/>
           <CustomButton text="Resend code" onPress={onResendPress} type='SECONDARY'/>
           
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

export default ConfirmEmailScreen;