import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
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

  export default ListaSimple