import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker'



const CreateCharacter = ({n}) => {
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
  const [confirmation,setConfirmation] = useState("")
  const [character,setCharacter] = useState(0)

  useEffect(() => {getData()}
           ,[])

  const storeData = async (value, selectedCharacter) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem(String(selectedCharacter), jsonValue)
        } catch (e) {
          console.dir(e)
        }
  }

  const getData = async (selectedCharacter) => {
        try {
          const jsonValue = await AsyncStorage.getItem(String(selectedCharacter))
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
      <View style={{flex:.2}}>
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
        
        </View>
      <View style = {{backgroundColor:'navajowhite', flex: 1, flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
        <View>
          <Text style={{fontWeight:'bold'}}> Character Name </Text>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder= "Character Name"
          />
        </View>
        <View>
          <Text style={{fontWeight:'bold'}}> Race </Text>
          <TextInput
            style={styles.input}
            onChangeText={setRace}
            value={race}
            placeholder = "Race"
          />
        </View>
        <View>
          <Text style={{fontWeight:'bold'}}> Class </Text>
          <TextInput
            style={styles.input}
            onChangeText={setClass}
            value={_class}
            placeholder = "Class"
          />
        </View>
        <View>
          <Text style={{fontWeight:'bold'}}> Level </Text>
          <TextInput
            style={styles.input}
            onChangeText={setLevel}
            value={level}
            placeholder = "Level"
          />
        </View>
      </View>
      <View style = {{flex: 3,flexDirection:'row'}}>
        <View style = {{backgroundColor:'lightgrey',flex:1,justifyContent:"space-around",alignItems:'center'}}>
          <View>
            {/* <Text style={{fontWeight:'bold'}}> Strength </Text> */}
            <TextInput
              style={styles.input}
              onChangeText={setStr}
              value={str}
              placeholder = "Strength"
              keyboardType = "number-pad"
            />
          </View>
          <View>
            {/* <Text style={{fontWeight:'bold'}}> Dexterity </Text> */}
            <TextInput
              style={styles.input}
              onChangeText={setDex}
              value={dex}
              placeholder = "Dexterity"
              keyboardType = "number-pad"
            />
          </View>
          <View>
            {/* <Text style={{fontWeight:'bold'}}> Constitution </Text> */}
            <TextInput
              style={styles.input}
              onChangeText={setCon}
              value={con}
              placeholder = "Constitution"
              keyboardType = "number-pad"
            />
          </View>
          <View>
            {/* <Text style={{fontWeight:'bold'}}> Intelligence </Text> */}
            <TextInput
              style={styles.input}
              onChangeText={setInt}
              value={int}
              placeholder = "Intelligence"
              keyboardType = "number-pad"
            />
          </View>
          <View>
            {/* <Text style={{fontWeight:'bold'}}> Wisdom </Text> */}
            <TextInput
              style={styles.input}
              onChangeText={setWis}
              value={wis}
              placeholder = "Wisdom"
              keyboardType = "number-pad"
            />
          </View>
          <View>
            {/* <Text style={{fontWeight:'bold'}}> Charisma </Text> */}
            <TextInput
              style={styles.input}
              onChangeText={setChar}
              value={char}
              placeholder = "Charisma"
              keyboardType = "number-pad"
            />
          </View>
        </View>
        <View style = {{backgroundColor:'indianred',flex:2, justifyContent: 'flex-end',alignItems:'center'}}>
          <Text>{confirmation}</Text>
          <Button
            title = "Create Character!"
            color = "green"
            onPress = {()=> {
              storeData({name,race,_class,level,str,dex,con,int,wis,char},selectedCharacter)
              setName("")
              setClass("")
              setRace("")
              setLevel("")
              setStr("")
              setDex("")
              setCon("")
              setInt("")
              setWis("")
              setChar("")
              setConfirmation("Character saved!")
            }}
          />

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
      justifyContent: 'space-around',
      flexDirection:'column',
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

export default CreateCharacter;
