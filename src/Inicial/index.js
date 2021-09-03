import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function Inicial() {
  const [name, setName] = useState('');
  const [profile, setProfile] = useState('');

  const navigation = useNavigation();

  function handleContato() {
    navigation.navigate('Contato', {name: name, profile: profile});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela Inicial de Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder={'Digite seu nome'}
        keyboardType="default"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder={'Digite seu perfil'}
        keyBoardType="default"
        value={profile}
        onChangeText={setProfile}
      />
      <Button title="Ir para a tela de contato" onPress={handleContato} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: 300,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 4,
    height: 40,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#FFF',
    fontSize: 18,
  },
});
