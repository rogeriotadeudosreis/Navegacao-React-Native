import React from 'react';
import {StyleSheet, View} from 'react-native';
import Inicial from '../src/Inicial';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Contato from './Inicial/Contato';

// aqui uma constante para criar a navegação, nesta caso do tipo de stratégia stack (pilha)
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="inicial">
          <Stack.Screen
            name="Inicial"
            component={Inicial}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Contato"
            component={Contato}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
