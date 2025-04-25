import { StyleSheet, Text, View, FlatList, TextInput, Button } from "react-native";
import FoodListItem from "../src/components/FoodListItem";
import { useState } from "react";


const foodItems = [
    { label: 'CheeseBurger', cal: 500, brand: 'Wayback' },
    { label: 'HotDog', cal: 200, brand: 'Five Guys' },
    { label: 'Grilled Cheese', cal: 500, brand: 'Five Guys' },
];

export default function Calories(){
    const [search, setSearch] = useState('');

    const performSearch = () => {
        console.warn('Searching for: ', search);
        setSearch('');
    };

    return(
        <View style={styles.container}>
            <TextInput value={search} 
            onChangeText={setSearch}
            placeholder="Search..." 
            style={styles.input}
            />

            {search && <Button title="Search" onPress={performSearch}/>}


            <FlatList
            data={foodItems}
            renderItem={({ item }) => <FoodListItem item={item}/>}
            contentContainerStyle={{gap: 5}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      padding: 10,
      paddingTop : 70,
      gap: '5',
    },

    input: {
        backgroundColor: '#02BAED',
        padding: 10,
        borderRadius: 20,
    },
  });