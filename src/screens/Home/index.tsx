import {
    View,
    ImageBackground,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    Dimensions,
  } from 'react-native';
  import React from 'react';
  import { SearchBar } from '../../components/SearchBar';
import { styles } from './style';
  
  const { width, height } = Dimensions.get('window');
  
  export const Home = () => {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require('../../assets/sky.png')}
          style={styles.background}
          blurRadius={20}
        >
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.scrollContent}
          >
            <View style={[styles.container, { width: width * 0.9, height: height * 0.95 }]}>
              <SearchBar />
            </View>
          </ScrollView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  };
  