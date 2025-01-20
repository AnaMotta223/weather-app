import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import * as Font from 'expo-font';
import { Niramit_400Regular, Niramit_500Medium, Niramit_600SemiBold, Niramit_700Bold } from '@expo-google-fonts/niramit';
import { Weather } from './src/screens/Weather';

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    Niramit_400Regular,
    Niramit_700Bold,
    Niramit_500Medium,
    Niramit_600SemiBold
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#3B72AA", gap: 30 }}>
        <ActivityIndicator size="large" style={{transform: [{scale: 2.3}]}} color={"#fff"} />
        <Text style={{fontFamily: "Roboto", fontSize: 40, color: "#fff", fontWeight: 700}}>Carregando</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <Routes />
    </>
  );
}
