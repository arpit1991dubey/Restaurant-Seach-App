import React from 'react';
import {Text,StyleSheet,View} from 'react-native';
const BoxScreen=()=>{
    return (
        
    <View>
        <Text style={styles.textStyle}>BoxScreen</Text>
    </View>
    );
};
const styles=StyleSheet.create({
    textStyle:{
        fontSize:30
    },
    textStyle2:{
        fontSize:20
    }

});
export default BoxScreen;