import axios from "axios";

interface PropsGet {
    cityName: String;
  }

export const GetCityWeather = async ({cityName} : PropsGet ) => {
  const apiKey = process.env.API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response;
  }
  catch (error) {
    console.error("Error fetching cities weather")
  }
};