import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome6';

import WeatherIcon from './app/weatherIcon';
import WeatherCarousel from './app/weatherCarousel';

import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { useEffect, useRef, useState } from 'react';

export default function Weather() {
  const [weatherData, setWeatherData] = useState(false);
  const [city, setCity] = useState(false);
  // const input = useRef();

  const sizeOfImages = 150;
  const allImages =
  {
    "01d": <Ionicons name="sunny" size={sizeOfImages} color="yellow"/>,
    "01n": <Ionicons name="sunny" size={sizeOfImages} color="yellow"/>,
    "02d": <Entypo name="cloud" size={sizeOfImages} color="white" />,
    "02n": <Entypo name="cloud" size={sizeOfImages} color="white" />,
    "03d": <Entypo name="cloud" size={sizeOfImages} color="white" />,
    "03n": <Entypo name="cloud" size={sizeOfImages} color="white" />,
    "04d": <Feather name="cloud-drizzle" size={sizeOfImages} color="white" />,
    "04n": <Feather name="cloud-drizzle" size={sizeOfImages} color="white" />,
    "09d": <FontAwesome5 name="cloud-rain" size={sizeOfImages} color="black" />,
    "09n": <FontAwesome5 name="cloud-rain" size={sizeOfImages} color="black" />,
    "10d": <FontAwesome5 name="cloud-rain" size={sizeOfImages} color="black" />,
    "10n": <FontAwesome5 name="cloud-rain" size={sizeOfImages} color="black" />,
    "13d": <FontAwesome5 name="cloud-rain" size={sizeOfImages} color="black" />,
    "13n": <FontAwesome5 name="cloud-rain" size={sizeOfImages} color="black" />,
  }

  const searchBar = 

  <View style={styles.row}>
    <TextInput placeholder='search...' placeholderTextColor={"white"} style={styles.textInput} value={city} onChangeText={setCity}/>
    <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 40, margin: 10 }} onPress={() => search(city)} >
      <FontAwesome style={{ margin: 10 }} name="search" size={24} color="black" />
    </TouchableOpacity>
  </View>;

  const WindSpeed = <View style={styles.row}>
    <FontAwesome6 name="wind" size={44} color="white" />
    <View style={styles.column}>
    </View>
    <View style={styles.column}>
      <Text style={ styles.textStyle } >Wind Speed: {"\n"}{Number(weatherData.windSpeed).toFixed(1)} Kilo.M/sec</Text>
    </View>
  </View>;
  const HumidityPercentage = <View style={styles.row}>
      <Entypo name="air" size={44} color="white" />
      <View style={[styles.column]}>
      <Text style={styles.textStyle} >Humidity %: {"\n"}{weatherData.humidity}% </Text>
    </View>
  </View>;

  const captialize = (word) =>
  {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  const search = async (city) =>
  {
    if (city === "")
      {
        Alert.alert("Enter city name")
        return;
      }
    try 
    {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a42c92b989efd531fd7fd6fd1691c0c7`;
      const response =await fetch(url);
      const data = await response.json();
      const icon = allImages[data.weather[0].icon] || <Ionicons name="sunny" size={150} color="yellow"/> 
      console.log(data);
      setWeatherData({
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        temperature: data.main.temp,
        windSpeed: data.wind.speed,
        description: data.weather[0].description,
        icon: icon

      })
      console.log(weatherData.description + " DONT BE AN ERROR"); //Shouldnt be undefined
    } catch (error) {
      console.log("ERROR--- " + error + " ---ERROR");
    }
  }
  useEffect( () =>
  {
    console.log(city);
    search("Portland")
  }, [])
  useEffect(() =>
  {
    console.log(city);
  }, [city])
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
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>{weatherData.city} | <Text style={{ opacity: .6}} >{weatherData.country}</Text></Text>

      <View style={{marginTop: 40}}>

      {weatherData.icon}
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={[styles.textStyle, {alignSelf: 'center', fontSize: "25%"}]} >{captialize(String(weatherData.description))}</Text>
        <Text style={{fontSize: 60, fontWeight: 'bold', color: 'white'}}>{Number(weatherData.temperature).toFixed(1)}°c</Text>

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