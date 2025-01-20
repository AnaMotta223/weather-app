import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./style";
import Feather from '@expo/vector-icons/Feather';

interface PropsPlaces {
  cityName: String;
  btnJustify: String;
}

export const PlaceName = ({ cityName, btnJustify }: PropsPlaces) => {

  return (
    <TouchableOpacity style={[styles.buttonPlace, {justifyContent: btnJustify == "center" ? "center" : "flex-start" }]}>
      <Feather name="map-pin" size={25} color="#fff" style={{fontWeight: 700}} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
        <Text style={styles.city}>
          {cityName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
