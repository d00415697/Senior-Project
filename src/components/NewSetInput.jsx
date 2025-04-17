import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { useState } from 'react';

const NewSetInput = () => {
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');

    const addSet = () => {
        console.warn('Add set: ', reps, weight);


        setReps('');
        setWeight('');
    };
    return(
        <View style= {styles.container}>
            <TextInput value={reps} onChangeText={setReps} placeholder="Reps" style={styles.input} keyboardType="numeric"/>
            <TextInput weight={weight} onChangeText={setWeight} placeholder="Weight" style={styles.input} keyboardType="numeric"/>
            <Button title="Add" onPress={addSet}/>
        </View>
    );
};

export default NewSetInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
    },
    input:{
        borderWidth: StyleSheet.hairlineWidth,
        BorderColor: 'black',
        padding: 10,
        flex: 1,
        borderRadius: 5,
    },
});