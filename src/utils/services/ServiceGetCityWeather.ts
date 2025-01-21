import axios from "axios";
import Constants from 'expo-constants';

export const GetCityWeather = async (cityName: string) => {
  const apiKey = Constants.expoConfig?.extra?.API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=pt_br&units=metric&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response;
  }
  catch (error) {
    console.error("Error fetching city weather", error)
  }
};