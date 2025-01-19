import axios from "axios";
import Constants from 'expo-constants';

interface PropsGet {
    cityName: String;
  }

export const GetCityWeather = async ({cityName} : PropsGet ) => {
  const apiKey = Constants.manifest2.extraAPI_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response;
  }
  catch (error) {
    console.error("Error fetching cities weather")
  }
};