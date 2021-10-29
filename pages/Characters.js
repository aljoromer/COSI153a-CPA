import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker'


const Characters = ({n}) => {
  const [name,setName] = useState("")
  const [race,setRace] = useState("")
  const [_class,setClass] = useState("")
  const [level,setLevel] = useState("")
  const [str,setStr] = useState("")
  const [dex,setDex] = useState("")
  const [con,setCon] = useState("")
  const [int,setInt] = useState("")
  const [wis,setWis] = useState("")
  const [char,setChar] = useState("")
  const [selectedCharacter, setSelectedCharacter] = useState('1');
  const [character,setCharacter] = useState(0)

  useEffect(() => {getData(selectedCharacter)}
           ,[])

  const storeData = async (value,selectedCharacter) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem(selectedCharacter, jsonValue)
        } catch (e) {
          console.dir(e)
        }
  }

  const getData = async (selectedCharacter) => {
        try {
          const jsonValue = await AsyncStorage.getItem(selectedCharacter)
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setName(data.name)
            setClass(data._class)
            setRace(data.race)
            setLevel(data.level)
            setStr(data.str)
            setDex(data.dex)
            setCon(data.con)
            setInt(data.int)
            setWis(data.wis)
            setChar(data.char)
          } else {
            // setCorrect(0)
            // setAnswered(0)
          }
        } catch(e) {
          console.dir(e)
        }
  }

  const clearAll = async () => {
        try {
          await AsyncStorage.clear()
        } catch(e) {
          console.dir(e)
        }
  }

  return (
    <View style = {styles.container}>
        <View style={{flex:.5}}>
        <Picker
            selectedValue={selectedCharacter}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedCharacter(itemValue)
            }>
            <Picker.Item label="Character 1" value="1" />
            <Picker.Item label="Character 2" value="2" />
            <Picker.Item label="Character 3" value="3" />
            <Picker.Item label="Character 4" value="4" />
            <Picker.Item label="Character 5" value="5" />
        </Picker>
        <Button
            title='LOAD CHARACTER'
            onPress={() => {getData(selectedCharacter)}}
        />
        
        </View>
      <View style = {{backgroundColor:'navajowhite', flex: 1, flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
        <View>
          <Text style={{fontWeight:'bold'}}> Character Name </Text>
          <Text>{name}</Text>
        </View>
        <View>
          <Text style={{fontWeight:'bold'}}> Race </Text>
          <Text>{race}</Text>
        </View>
        <View>
          <Text style={{fontWeight:'bold'}}> Class </Text>
          <Text>{_class}</Text>
        </View>
        <View>
          <Text style={{fontWeight:'bold'}}> Level </Text>
          <Text>{level}</Text>
        </View>
      </View>
      <View style = {{flex: 3,flexDirection:'row'}}>
        <View style = {{backgroundColor:'lightgrey',flex:1,justifyContent:"space-around",alignItems:'center'}}>
          <View>
            <Text style={{fontWeight:'bold'}}> Strength </Text>
            <Text>{str}</Text>
          </View>
          <View>
            <Text style={{fontWeight:'bold'}}> Dexterity </Text>
            <Text>{dex}</Text>
          </View>
          <View>
            <Text style={{fontWeight:'bold'}}> Constitution </Text>
            <Text>{con}</Text>
          </View>
          <View>
            <Text style={{fontWeight:'bold'}}> Intelligence </Text>
            <Text>{int}</Text>
          </View>
          <View>
            <Text style={{fontWeight:'bold'}}> Wisdom </Text>
            <Text>{wis}</Text>
          </View>
          <View>
            <Text style={{fontWeight:'bold'}}> Charisma </Text>
            <Text>{char}</Text>
          </View>
        </View>
        <View style = {{backgroundColor:'indianred',flex:3, justifyContent: 'flex-end'}}>

        </View>

      </View>
        


    </View>
  );
};

  
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
      flexDirection:'column',
      width:'100%'
    },
    textinput:{
      margin:20,
      fontSize:20
    },
    header: {
      fontSize:40,
      color:'blue'
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default Characters;
