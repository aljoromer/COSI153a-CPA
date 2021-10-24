import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function Home({navigation}) {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
  
    return (
  
    <View style={styles.container}>
      {/* <ImageBackground
        source = {{uri: 'https://media.dnd.wizards.com/styles/media_resources/public/dnd_background_overlay2.jpg'}}
        resizeMode='cover'
        style = {styles.image2}
        > */}
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
            uri: "https://gamecows.com/wp-content/uploads/2019/09/DungeonsDragons-Board-Games-Header.jpg"
          }}
        />
        
      </View>
      <View style = {styles.navButtonRow}>
        <Button
            title="Profile"
            styles = {{borderRadius: 40}}
            onPress={() => navigation.navigate('Profile')}
          />
        <Button
            title="About"
            onPress={() => navigation.navigate('About')}
          />
          <Button 
            title="Create a Character"
            onPress={() => navigation.navigate('../pages/CreateCharater')}
          />
        
      </View>
    {/* </ImageBackground> */}
    </View>)
  }

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
      justifyContent: "center"
    }
  });
