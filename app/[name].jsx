import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { gql } from 'graphql-request';
// import exercises from '../assets/data/exercises.json';
import { useQuery } from '@tanstack/react-query';
import graphqlClient from '../src/components/graphqlClient';
import NewSetInput from '../src/components/NewSetInput';

const exerciseQuery = gql`
  query exercises($name: String) {
    exercises(name: $name) {
      name
      muscle
      instructions
      equipment
    }
  }
`;

export default function ExerciseDetailsScreen(){
    const {name} = useLocalSearchParams();
    const {data, isLoading, error} = useQuery({
      queryKey: ['exercises', name],
      queryFn: () => graphqlClient.request(exerciseQuery, { name }),
    });

    const [isInstructionExpanded, setIsInstructionExpanded] = useState(false);

    if (isLoading){
      return <ActivityIndicator />;
    }

    if (error){
      return <Text>Failed to fetch data</Text>;
    }
    const exercise = data.exercises[0];

    if (!exercise) {
        return <Text>Exercise not found</Text>;
    }
    return (
        <ScrollView contentContainerStyle = {styles.container}>
            <Stack.Screen options={{title: exercise.name}} />

            <View style={styles.panel}>
            <Text style = {styles.excerciseName}>{exercise.name}</Text>
            <Text style = {styles.exerciseSubtitle}>
                <Text style={styles.subValue}>{exercise.muscle}</Text> |{' '}
                <Text style={styles.subValue}>{exercise.equipment}</Text>
                </Text>
                </View>
                <View style={styles.panel}>
                <Text style={styles.instructions} numberOfLines={isInstructionExpanded ? 0 : 3}>
                    {exercise.instructions} 
                </Text>
                <Text 
                onPress={() => setIsInstructionExpanded(!isInstructionExpanded)} 
                style={styles.seeMore}>{isInstructionExpanded ? 'See less' : 'See More'}</Text>
                </View>
                <NewSetInput></NewSetInput>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff1493',
        padding: 10,
        gap: 10,
    },
    panel: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    excerciseName:{
        fontSize: 20,
        fontWeight: '500',
      },
      exerciseSubtitle:{
        color: 'black',
      },
      subValue: {
        textTransform: 'capitalize'
      },
      instructions: {
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 2,
        fontStyle: 'script',
        color: 'black',
      },
      seeMore: {
        alignSelf: 'center',
        padding: 5,
        fontWeight: '600',
        color: 'gray',
      }
});