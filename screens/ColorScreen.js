import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const ListScreen=()=>{
    const friends=[
        { name:'  A farmer has 17 sheep, all of them but 8 die. How many sheep are still standing?',key:'1',ans:9,op1:8,op2:9,op3:10,op4:11},
        {name:'Who was the first Twitter user to reach 20 million followers?',key:'2',ans:9,op1:8,op2:9,op3:10,op4:11},
        { name:'Friend #3',key:'3',age:32},
        { name:'Friend #4',key:'4',age:27},
        { name:'Friend #5',key:'5',age:53},
        { name:'Friend #6',key:'6',age:30},
        { name:'Friend #7',key:'7',age:56},
        { name:'Friend #8',key:'8',age:78},
        { name:'Friend #9',key:'9',age:45},
    ];
    return(
        <View>
            <Text style={styles.TopText}>
               Attempt Quiz
            </Text>
        <FlatList
        showsHorizontalScrollIndicator={false}
            data={friends}
            renderItem={({ item }) => {
               return <Text style={styles.textStyle}>{item.name} {item.age}</Text>
                
            }}
        />
        </View>
    );
};
const styles=StyleSheet.create({
    textStyle:{
        marginVertical:60
        
    },
    TopText:{
       marginLeft:130,
       alignItems:"center",
       flex:0
    }
});
export default ListScreen;
