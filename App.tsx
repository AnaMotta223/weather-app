import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import * as Font from 'expo-font';
import 'dotenv/config';
import { Niramit_400Regular, Niramit_500Medium, Niramit_600SemiBold, Niramit_700Bold } from '@expo-google-fonts/niramit';

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    Niramit_400Regular,
    Niramit_700Bold,
    Niramit_500Medium,
    Niramit_600SemiBold
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
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
