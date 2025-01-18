import { TextInput, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './style';

export const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
    <TextInput placeholder='Buscar cidade' placeholderTextColor={"white"} style={styles.search}/>
    <Ionicons name="search" size={24} color="#ffffffd3" style={{fontSize: 28}} />
    </View>
  )
}