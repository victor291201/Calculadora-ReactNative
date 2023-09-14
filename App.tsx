import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './src/styles/themeBlack';
import CalculadoraScreen from './src/screens/CalculadoraScreen';

export default function App() {
  return (
    <SafeAreaView style={[styles.bgDark,styles.f1]}>
      <CalculadoraScreen/>
    </SafeAreaView>
  );
}
