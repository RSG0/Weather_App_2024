import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function WeatherIcon() 
{
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{fontSize: 20, color: 'white'}} >MON</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'white',
    // backgroundColor: 'blue',
    borderRadius: 20
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
