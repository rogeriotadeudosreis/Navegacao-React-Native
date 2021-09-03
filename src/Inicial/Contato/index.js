import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function Contato({route}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{route.params?.name}</Text>
      <Text style={styles.texto}>{route.params?.profile}</Text>
      <Button
        title="Volta para a tela de início"
        onPress={() => navigation.goBack()}
      />
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
});
