import { View, Text, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

const FoodListItem = ({ item }) =>{
    return(
        <View style = {styles.container}>
            <View style={{flex: 1, gap: '5'}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>{item.label}</Text>
            <Text style={{color: 'gainsboro'}}>{item.cal} cal, {item.brand}</Text>
            </View>
        <AntDesign name="pluscircleo" size={24} color="#02BAED" />
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ff1493', 
        padding: 10, 
        borderRadius: 5, 
        gap: 5, 
        flexDirection:'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export default FoodListItem;