import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import ListaSimple from './lista'
import React from 'react'

var texto=''

export default function App() {
  const [value, onChangeText]=React.useState('');
  const buttonEvent = ()=>{
    console.log('value')
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Ingresar contacto' value={texto} onChangeText={t => onChangeText(t)}>
        </TextInput>
        <Button title='Agregar' onPress={buttonEvent}/>
        
      </View>

      <View style={styles.contactContainer}>
        <Text>Lista de Contactos</Text>
        <Text>Pulse el botón "Agregar Elemento" para ver la lista dinámica</Text>
        
      </View>

      <View>
        <ListaSimple />
      </View>

    </View>
  );
}



const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: '#fff'
  },
  contactContainer: {
    flex:5
  },
  textInput: {
    borderWidth:1,
    borderColor: 'green',
    alignContent:'center',
    width: '70%'

  }
});
