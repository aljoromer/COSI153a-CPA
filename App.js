import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [url, setURL] = React.useState("");

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
      <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button
          title="Press me!"
          onPress={() => setURL("https://i.guim.co.uk/img/media/14036c4a42194d23db297b025a420fd42cb8a8f8/1697_1399_2327_2327/master/2327.jpg?width=700&quality=85&auto=format&fit=max&s=9421c03963623a06622b81c0e97f8b6a")}
        />
       <Image
          style={styles.image}
          source={{
            uri: url
          }}
        />
        
      </View>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Arial',
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
});
