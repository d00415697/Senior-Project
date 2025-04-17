import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../assets/fitness-buddy.jpg';
import CustomInput from '../src/components/Custominput/Custominput';
import CustomButton from '../src/components/CustomButton';
import SocialSignInButtons from '../src/components/SocialSignInButtons';


const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign In");
    };

    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed')
    };


    const onSignUpPressed = () => {
        console.warn('onSignUpPressed');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
           <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'/>
           <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
           <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>
           
           <CustomButton text="Sign In" onPress={onSignInPressed}/>
           <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>

           
           <CustomButton text="Don't have an account? Create One" onPress={onSignUpPressed} type="TERTIARY"/>

           <SocialSignInButtons/>



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
    logo:{
        width: '100%',
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default SignInScreen;