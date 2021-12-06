import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import {Picker} from '@react-native-picker/picker'

const Dice = () => {
    const [d,setD] = useState(null)
    const [roll, setRoll] = useState(null)

    return (
        <View style = {styles.container}>
            <View style={{flex:1}}>
                <Picker
                    selectedValue={d}
                    onValueChange={(itemValue) =>
                        {setD(itemValue)}
                    }>
                    <Picker.Item label="Selected Value" value=""/>
                    <Picker.Item label="d4" value={4} />
                    <Picker.Item label="d6" value={6} />
                    <Picker.Item label="d8" value={8} />
                    <Picker.Item label="d10" value={10} />
                    <Picker.Item label="d12" value={12} />
                    <Picker.Item label="d20" value={20} />
                    <Picker.Item label="d100" value={100} />
                </Picker>
            </View>
            <View style={{flex:4}}>
                <Button 
                    title="Roll!"
                    onPress = {() => {
                        setRoll(rollDice(d))
                    }}
                />
                <Text>
                    {roll}
                </Text>
        

            </View>
        </View>
    )
}

const rollDice = (n) => {
    return (Math.floor(Math.random() * n) + 1);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgoldenrodyellow',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
})

export default Dice;