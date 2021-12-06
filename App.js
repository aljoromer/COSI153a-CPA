import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateCharacter from './pages/CreateCharacter';
import Characters from './pages/Characters'
import Dice from './pages/Dice'

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "Create a Character" component = {CreateCharacterScreen}/>
        <Stack.Screen name = "Characters" component = {CharactersScreen}/>
        <Stack.Screen name = "Dice" component = {DiceScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}





function HomeScreen({ navigation }) {
  return (

  <View style={styles.container}>
    <ImageBackground
      source = {{uri: 'https://wallpaperaccess.com/full/1578713.jpg'}}
      resizeMode='cover'
      style = {styles.image2}
    >
      <View>

      <Text style={styles.titleText}>Dungeons and Dragons</Text>
      <Text style={styles.titleText}>Character Creation App</Text>
      </View>
      <Button 
        title="Create a Character"
        onPress={() => navigation.navigate('Create a Character')}
      />

      <Button
        title="Saved Characters"
        onPress ={() => navigation.navigate('Characters')}
      />

      <Button
        title="Dice"
        onPress = {() => navigation.navigate('Dice')}
      />
  </ImageBackground>
  </View>)
}

function CreateCharacterScreen({ navigation }) {
  return (
    <View style = {{flex:1,padding:20}}>
      <CreateCharacter />
    </View>
  );
}

function CharactersScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Characters />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function DiceScreen({navigation}) {
  return (
    <View style = {{flex:1}}>
      <Dice />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgoldenrodyellow',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    width: 400,
    height: 200
  },
  navButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  image2: {
    flex: 1,
    justifyContent: "space-around",
    alignItems:'center',

    width:'100%'
  }
});
