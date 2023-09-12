import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Egine from './engine';

const RealDol = () => {
  const [n, setN] = useState('');
  const [usdToBrl, setUsdToBrl] = useState(null);

  const handleConvert = () => {
    try {
      const jsonData = JSON.parse(n);
      const brlValue = jsonData.usd.brl;
      setUsdToBrl(brlValue.toFixed(2)); // Formata para duas casas decimais
    } catch (error) {
      console.error('Erro ao analisar JSON:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>R$: {usdToBrl}</Text>
      <Text style={styles.title}>Cotações:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setN(text)}
        multiline
        placeholder="Insira o JSON aqui"
      />
      <Button title="USD -> BRL" onPress={handleConvert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    color: 'black',
  },
  input: {
    width: 280,
    height: 200,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 6,
    color: 'black',
  },
  logo: {
    marginBottom: 50,
    top: 80,
    position: 'absolute',
  },
});

export default RealDol;
