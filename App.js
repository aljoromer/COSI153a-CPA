import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateCharacterScreen from './components/CreateCharacterScreen';

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "Profile" component = {ProfileScreen}/>
        <Stack.Screen name = "About" component = {AboutScreen}/>
        <Stack.Screen name = "Create a Character" component = {CharacterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}





function HomeScreen({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (

  <View style={styles.container}>
    {/*Title Text*/}
    <View>
      <Text style={styles.titleText}>Welcome to my app!</Text>
    </View>
    {/*Text Input*/}
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Name"

      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Age"
        keyboardType="numeric"
      />
    </View>

    {/*Button + Image */}
    <View style = {{flexDirection: 'row', alignContent: 'space-between'}}>
    <Image
        style={styles.image}
        source={{
          uri: "https://toppng.com//public/uploads/preview/d20-vector-dungeons-and-dragons-dungeons-dragons-11563505944huesix7rp4.png"
        }}
      />
      
    </View>
    <View style = {styles.navButtonRow}>
      <Button
          title="Profile"
          styles = {{borderRadius: 40}}
          onPress={() => navigation.navigate('Profile', )}
        />
      <Button
          title="About"
          onPress={() => navigation.navigate('About', )}
        />
        <Button 
          title="Create a Character"
          onPress={() => navigation.navigate('Create a Character')}
        />
      
    </View>
  </View>)
}

function CharacterScreen({ navigation }) {
  return (
    <View style = {{flex:1}}>
      <CreateCharacterScreen />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SetAlarms />

      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', marginVertical: 8 }}>
      <View>
        <Text style = {{fontSize: 20, fontWeight: 'bold'}}>This app will be an alarm clock. When the alarm goes off, the user will have to solve a math problem, or a puzzle, to turn it off.</Text>
      </View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
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
    width: 200,
    height: 200
  },
  navButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});
