import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import WeatherIcon from './app/weatherIcon';
import WeatherCarousel from './app/weatherCarousel';

import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

export default function Weather() {
  const searchBar = 

  <View style={styles.row}>
    <TextInput placeholder='search...' placeholderTextColor={"white"} style={styles.textInput} />
    <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 40, margin: 10 }}>
      <FontAwesome style={{ margin: 10 }} name="search" size={24} color="white" />
    </TouchableOpacity>
  </View>;

  const WindSpeed = <View style={styles.row}>
    <FontAwesome6 name="wind" size={44} color="white" />
    <View style={styles.column}>
    </View>
    <View style={styles.column}>
      <Text style={ styles.textStyle } >Wind Speed: {"\n"}4.2 mi/hr</Text>
    </View>
  </View>;
  const HumidityPercentage = <View style={styles.row}>
      <Entypo name="air" size={44} color="white" />
      <View style={[styles.column]}>
      <Text style={styles.textStyle} >Humidity %: {"\n"}42% </Text>
    </View>
  </View>;
  return (
      <LinearGradient
        style={styles.background}

        // Background Linear Gradient
        colors={['#2f4680', '#500ae4']}
        start={{ x: 0, y: 0 }}  // Start from the left
        end={{ x: 1, y: 0 }}    // End at the right
      >
      <ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center',}}>
      <View style={{margin: 15}}/>
      {searchBar}
      <View style={{marginTop: 40}}>
        <Ionicons name="sunny" size={150} color="yellow"/>
        <Text style={[styles.textStyle, {alignSelf: 'center', fontSize: "25%"}]} >Sunny</Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 60, fontWeight: 'bold', color: 'white'}}>22.2°c</Text>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>Irving</Text>
      </View>

      <View style={[styles.row, {justifyContent: 'space-evenly', width: "100%",marginVertical: 30}]}>
      {HumidityPercentage}
      
      {WindSpeed}
      </View>
      <WeatherCarousel/>
      <View style={{margin: 30}} />
      </View>
      </ScrollView>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  textStyle:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: "15%",
    margin: 10
  },
  row:{
    flexDirection:'row',
    alignItems:'center'
  },
  column:{
    flexDirection: 'column'
  },
  textInput: {
    borderColor: 'white',
    
    fontSize: 20,
    color: "white",
    marginVertical: 30,
    width: '60%',            // Increase width for better usability
    height: 40,              // Set a fixed height for a more rectangular shape
    borderRadius: 20,        // Reduce borderRadius to avoid circular shape
    padding: 10,             // Adjust padding to be appropriate for the new height
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