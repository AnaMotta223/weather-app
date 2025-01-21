import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./style";
import Feather from '@expo/vector-icons/Feather';

interface PropsPlaces {
  cityName: String;
  btnJustify: String;
  size?: number;
  action?: () => void;
}

export const PlaceName = ({ cityName, btnJustify, size, action }: PropsPlaces) => {

  return (
    <TouchableOpacity onPress={action} style={[styles.buttonPlace, {justifyContent: btnJustify == "center" ? "center" : "flex-start"}]}>
      <Feather name="map-pin" size={size? (size-4) : 25} color="#fff" style={{fontWeight: 700}} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
        <Text style={[styles.city, {fontSize: size? size : 21}]}>
          {cityName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
