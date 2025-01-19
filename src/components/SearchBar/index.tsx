import { TextInput, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './style';
interface PropsSearch {
  value?: string;
  onChange?: (value: string) => void;
}

export const SearchBar = ({value, onChange} : PropsSearch) => {
  return (
    <View style={[styles.searchBar,  styles.elevation]}>
    <TextInput placeholder='Buscar cidade' placeholderTextColor={"white"} style={styles.search} value={value} onChangeText={onChange} />
    <Ionicons name="search" size={24} color="#ffffffd3" style={{fontSize: 28, position: "absolute", transform: [{ translateX: 270 }]}} />
    </View>
  )
}