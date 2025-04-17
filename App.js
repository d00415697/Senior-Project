import React from 'react';
import { SafeAreaView,  StyleSheet, Text} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmEmailScreen from './app/ConfirmEmailScreen';
const App = () => {
    return (
        <SafeAreaView style ={styles.root}>
            <ConfirmEmailScreen />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'red', //does nothing, look at later
    },
});

export default App;