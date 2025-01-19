import { TouchableOpacity, Text } from "react-native";
import { styles } from "./style";
import Feather from '@expo/vector-icons/Feather';

interface PropsPlaces {
  cityName: String;
}

export const PlaceName = ({ cityName }: PropsPlaces) => {
  return (
    <TouchableOpacity style={styles.buttonPlace}>
      <Feather name="map-pin"  size={25} color="#fff" style={{fontWeight: 700}} />
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.city}>{cityName}</Text>
    </TouchableOpacity>
  );
};