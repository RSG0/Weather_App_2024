import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import WeatherIcon from './weatherIcon';

export default function WeatherCarousel() 
{
  return (
    <ScrollView style={styles.container} horizontal>
        <WeatherIcon/>
        <WeatherIcon/>
        <WeatherIcon/>
        <WeatherIcon/>
        <WeatherIcon/>
        <WeatherIcon/>
        <WeatherIcon/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {

    width: "90%",
    height: "100%"
  },
  row:{
    flexDirection:'row',
    alignItems:'center'
  },
  column:{
    flexDirection: 'column'
  },
  iconSize: {
    fontSize: 20,
    color: "white",
    marginVertical: 30,
    width: '40%',      
    height: 50,        
    borderRadius: 20,  
    padding: 10,       
    borderWidth: 2,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,  
    height: '110%',
  },
});
