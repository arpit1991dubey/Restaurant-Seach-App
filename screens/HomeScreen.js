import React from 'react';
import { Text, StyleSheet,View,Button ,TouchableOpacity} from 'react-native';



const HomeScreen = props => {
  return (
  <View>
     <Text style={styles.text}>HomeScreen</Text>
     <Button 
     onPress={()=>props.navigation.navigate('Components')}
     title="Go To Component Screen"/>
     <Button
     onPress={()=>props.navigation.navigate('List')}
    title="Go To List Screen"/>
    {/* <Button
    onPress={()=>props.navigation.navigate('Image')}
    title="Go To Image Screen"/> */}
     <Button
    onPress={()=>props.navigation.navigate('Counter')}
    title="Go To Counter Screen"/>
    <Button
    onPress={()=>props.navigation.navigate('Color')}
    title="Go To olor Screen"/>
    <Button
    onPress={()=>props.navigation.navigate('Box')}
    title="Go To Box Screen"/>
     <Button 
     onPress={()=>props.navigation.navigate('Search')}
     title="Go To Search Screen"/>
      <Button
     onPress={()=>props.navigation.navigate('Onboard')}
    title="Go To onboarding Screen"/>
     <Button
     onPress={()=>props.navigation.navigate('Set')}
    title="Go To setting Screen"/>
     <Button
     onPress={()=>props.navigation.navigate('Login')}
    title="Go To Login Screen"/>
    
     
 </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
