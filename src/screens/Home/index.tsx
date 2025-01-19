import {
    View,
    ImageBackground,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    Dimensions,
    Image,
    Text,
    FlatList,
  } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { styles } from './style';
import ImageCity from "../../assets/undraw_best-place_dhzp 1.png"
import { PlaceName } from '../../components/PlaceName';
import { GetCities } from '../../services/ServiceGetCities';
  
  const { width, height } = Dimensions.get('window');
  
  interface ResponseApi {
    id: number;
    name: string;
  }

  export const Home = () => {
    const [ search, setSearch ] = useState<string>("");
    const [ cities, setCities ] = useState<ResponseApi[]>([]);

    const loadApiCities = async () => {
      // setIsloading(true);
      const response = await GetCities();
      
      if (response && response.status === 200) {
        setCities(response.data)
      } else {
        console.log("Error")
      }
        // setIsloading(false);
    }
  
    useEffect(() => {
      loadApiCities();
    }, [])


    const handleSearch = (value: string) => {
      setSearch(value);
    }

    const filteredCities = cities.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );

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
              <SearchBar value={search} onChange={() => handleSearch} />
              {/* <View style={styles.content}>
              <Image source={ImageCity} alt='Ilustração de prédios e casas de uma cidade'/>
              <Text style={styles.searchText}>Pesquise uma cidade</Text>
              <Text style={styles.description}>Descubra suas condições climáticas</Text>
              </View> */}
              <FlatList
               style={{ display: "flex", marginTop: "3%", gap: 20 }}
               data={filteredCities}
               keyExtractor={(item) => item.id.toString()}
               renderItem={({ item }) => 
                <PlaceName cityName={item.name} />
               }
               showsVerticalScrollIndicator={false}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  };
  