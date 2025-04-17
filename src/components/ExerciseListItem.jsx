import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function ExerciseListItem({item}){
  return(
    <Link href = {`/${item.name}`} asChild>
    <Pressable style={styles.exerciseContainer}>
    <Text style = {styles.excerciseName}>{item.name}</Text>
    <Text style = {styles.exerciseSubtitle}>
      <Text style={styles.subValue}>{item.muscle}</Text> |{' '}
      <Text style={styles.subValue}>{item.equipment}</Text>
      </Text>
      </Pressable>
      </Link>
  );
}

const styles = StyleSheet.create({
    exerciseContainer:{
      backgroundColor: '#ff1493',
      padding: 10,
      borderRadius: 10,
      gap: 5,
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
  });
  