import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  const [alcool, setValor1] = useState();
  const [gasolina, setValor2] = useState();
  const [resposta, setResposta] = useState();
  const [resultado, setResultado] = useState(0);

  function calcular(){
    setResultado(parseFloat(alcool) / parseFloat(gasolina));
    if (resultado >= 0.7) {
      setResposta("É mais vantajoso abastecer com álcool.");
    } else {
      setResposta("É mais vantajoso abastecer com gasolina.");
    }
  }

  return (
    <View style = {styles.container}>
      <View style = {styles.bloco}>
        <Text style = {styles.textBlock}> Valor do litro do álcool: </Text>
        <TextInput style = {styles.input} keyboardType="numeric" value={alcool} onChangeText={(texto)=>setValor1(texto)} />
      </View>

      <View style = {styles.bloco}>
          <Text style = {styles.textBlock}> Valor do litro da gasolina: </Text>
          <TextInput style = {styles.input} keyboardType = "numeric" value = {gasolina} onChangeText={(texto)=>setValor2(texto)} />
      </View>

      <View style = {styles.bloco}>
        <TouchableOpacity style = {styles.button} onPress = {calcular}>
          <Text style = {styles.textButton}> Calcular </Text>
        </TouchableOpacity>
      </View>

      <View style = {styles.bloco}> 
        <Text style = {styles.textoBloco}> Resultado: {resultado} </Text>
      </View>

      <View style = {styles.bloco}> 
        <Text style = {styles.textoBloco}> {resposta} </Text>
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

  textoBloco: {
  fontSize: 20,
  marginTop : 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  },

  texto:{
    color: '#00FFF',
    fontSize: 30,
    marginTop: 15,
  }, 

  bloco: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
  },
  input: {
    borderColor: '#000',
    borderWidth: 2,
    fontSize: 20,
    width: '80%',
    color: '#000',
    padding: 15
  },
  textBlock: {
    color: '#000',
    fontSize: 20,
    margin: 10
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#FDDDDE',
    width: '80%',
    borderRadius: 5,
    padding: 15,
    margin: 15 },
  textButton: {
    color: '#000',
    fontSize: 20,
  }
});