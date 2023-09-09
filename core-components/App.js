import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
import React, { useState } from 'react'


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
        <Button title='Agregar contacto' onPress={buttonEvent}/>
        
      </View>

      <View style={styles.contactContainer}>
        <Text>Lista de Contactos</Text>
        <Text>Lista de Contactos</Text>
        <Text>Lista de Contactos</Text>
        <Text>Lista de Contactos</Text>
        <Text>Lista de Contactos</Text>
        
      </View>

      <View>
        <ListaSimple />
      </View>

    </View>
  );
}

const ListaSimple = () => {
  const [datos, setDatos] = useState([
    { id: '1', nombre: 'Christian', celular: '912345678' },
    { id: '2', nombre: 'Alejandro', celular: '987654321' },
    { id: '3', nombre: 'Pedro', celular: '963852741' },
  ]);

  const agregarElemento = () => {
    const nuevoElemento = {
      id: Math.random().toString(),
      nombre: 'Nuevo Nombre',
      celular: 'Nuevo Celular',
    };

    setDatos([...datos, nuevoElemento]);
  };

  const Item = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#f00', backgroundColor:'cyan' }}>
      <Text>{item.nombre}</Text>
      <Text>{item.celular}</Text>
    </View>
  );

  return (
    <View>
    <FlatList
      data={datos}
      renderItem={Item}
      keyExtractor={(item) => item.id}
    />
    <Button title="Agregar Elemento" onPress={agregarElemento} /></View>
  );
};

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
