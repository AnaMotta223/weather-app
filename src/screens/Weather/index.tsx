import { Dimensions, ImageBackground, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { PlaceName } from "../../components/PlaceName";
import { useNavigation } from "@react-navigation/native";
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get("window");

export const Weather = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("Home");
  };

  return (
    <ImageBackground
      source={require("../../assets/sky.png")}
      style={styles.background}
      blurRadius={20}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
      >
        <View
          style={[
            styles.container,
            { width: width * 0.9, height: height * 0.95 },
          ]}
        >
          <Ionicons
            onPress={handleGoBack}
            name="arrow-back-outline"
            size={35}
            color="white"
          />
          <View style={styles.mainContent}>
            <PlaceName
              cityName={"São José do Vale do Rio Preto"}
              btnJustify={"center"}
            />
            <View style={styles.weather}>
            <LottieView
            source={require('../../assets/lottie/sunandclouds.json')}  
            autoPlay
            loop  
            style={styles.animation}
            />
            <View style={styles.description}>
                <Text style={styles.temperature}>25°C</Text>
                <Text style={styles.weatherDescription}>Sol entre nuvens</Text>
            </View>
            
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
