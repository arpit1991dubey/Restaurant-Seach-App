import React ,{useState}from 'react';
import {View,Text,StyleSheet,Image,Button} from 'react-native';


const CounterScreen= props=>{
    const [counter,setCounter]=useState(0);
    return(
        <View>
   <Button 
     onPress={()=>setCounter(counter+1)}
     title="Increment"/>
     <Button 
     onPress={()=>setCounter(counter-1)}
     title="Decrement"/> 
    <Text>Current Count:{counter}</Text>
    </View>
    );
};

const styles=StyleSheet.create({});
export default CounterScreen;