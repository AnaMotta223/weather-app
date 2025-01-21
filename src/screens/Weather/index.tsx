import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from "react-native";
import { styles } from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { PlaceName } from "../../components/PlaceName";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { GetCityTimeWeather } from "../../utils/services/ServicesGetTimeCityWeather";
import { GetCityWeather } from "../../utils/services/ServiceGetCityWeather";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RainIcon from "../../assets/rain.png";
import ClearIcon from "../../assets/sun.png";
import CloudIcon from "../../assets/clouds.png";
import MistIcon from "../../assets/mist.png";
import ThunderstormIcon from "../../assets/heavyrain.png";
import SunnyAnimation from "../../assets/lottie/sunny.json";
import ThunderstormAnimation from "../../assets/lottie/heavyrain.json";
import CloudsAnimation from "../../assets/lottie/clouds.json";
import RainAnimation from "../../assets/lottie/rain.json";
import MistAnimation from "../../assets/lottie/mist.json";

const { width, height } = Dimensions.get("window");

interface ResponseApi {
  main: {
    temp_max: number;
  };
  weather: [
    {
      id: number;
    }
  ];
  dt_txt: string;
}

interface ResponseApiWeather {
  weather: [
    {
      id: number;
      description: string;
    }
  ];
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}

export const Weather = () => {
  const navigation = useNavigation();
  const [weathers, setWeathers] = useState<ResponseApi[]>([]);
  const [weather, setWeather] = useState<ResponseApiWeather>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentDayData, setCurrentDayData] = useState<ResponseApi[]>([]);
  const [dailyAverages, setDailyAverages] = useState<
    { date: string; avgTemp: number; weatherId: number }[]
  >([]);
  const [city, setCity] = useState<string | null>(null);

  const handleGoBack = () => {
    AsyncStorage.removeItem("city");
    navigation.navigate("Home");
  };

  const getWeatherAnimation = (weatherId: number) => {
    const group = Math.floor(weatherId / 100);

    switch (group) {
      case 2:
        return ThunderstormAnimation;
      case 3:
        return RainAnimation;
      case 5:
        return RainAnimation;
      case 7:
        return MistAnimation;
      case 8:
        return weatherId === 800 ? SunnyAnimation : CloudsAnimation;
      default:
        return CloudsAnimation;
    }
  };

  const getWeatherIcon = (weatherId: number) => {
    const group = Math.floor(weatherId / 100);

    switch (group) {
      case 2:
        return ThunderstormIcon;
      case 3:
        return RainIcon;
      case 5:
        return RainIcon;
      case 7:
        return MistIcon;
      case 8:
        return weatherId === 800 ? ClearIcon : CloudIcon;
      default:
        return CloudIcon;
    }
  };

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${dateObj.getDate()} ${months[dateObj.getMonth()]}`;
  };

  const loadWeather = async (city: string) => {
    setIsLoading(true);
    const response = await GetCityWeather(city);
    if (response && response.status === 200) {
      setWeather(response.data);
    } else {
      console.error("Error setting weather");
    }
    setIsLoading(false);
  };

  const loadTimeWeather = async (city: string) => {
    setIsLoading(true);
    const response = await GetCityTimeWeather(city);
    if (response && response.status === 200) {
      setWeathers(response.data.list);
    } else {
      console.error("Error setting weathers");
    }
    setIsLoading(false);
  };

  const filterCurrentDayData = (data: ResponseApi[]) => {
    const currentDate = new Date().toISOString().split("T")[0];
    return data.filter((item) => item.dt_txt.split(" ")[0] === currentDate);
  };

  const calculateDailyAverages = (data: ResponseApi[]) => {
    const groupedByDate: { [key: string]: ResponseApi[] } = {};

    data.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      if (!groupedByDate[date]) {
        groupedByDate[date] = [];
      }
      groupedByDate[date].push(item);
    });

    const averages = Object.keys(groupedByDate).map((date) => {
      const temps = groupedByDate[date].map((item) => item.main.temp_max);
      const avgTemp =
        temps.reduce((acc, temp) => acc + temp, 0) / temps.length + 6;

      const weatherIds = groupedByDate[date].map((item) => item.weather[0].id);
      const frequencyMap: { [key: number]: number } = {};

      weatherIds.forEach((id) => {
        frequencyMap[id] = (frequencyMap[id] || 0) + 1;
      });

      const mostFrequentId = Object.keys(frequencyMap)
        .map(Number)
        .reduce((a, b) => (frequencyMap[a] > frequencyMap[b] ? a : b));

      return { date, avgTemp, weatherId: mostFrequentId };
    });

    setDailyAverages(averages);
  };

  useEffect(() => {
    const getCityStored = async () => {
      try {
        const storedCity = await AsyncStorage.getItem("city");
        if (storedCity) {
          const cityName = storedCity.trim();
          const formattedCityName = encodeURIComponent(cityName);
          setCity(cityName);

          loadTimeWeather(formattedCityName);
          loadWeather(formattedCityName);
        }
      } catch (error) {
        console.error("Error fetching city");
      }
    };

    getCityStored();
  }, []);

  useEffect(() => {
    if (weathers.length > 0) {
      setCurrentDayData(filterCurrentDayData(weathers));
      calculateDailyAverages(weathers);
    }
  }, [weathers]);

  return (
    <ImageBackground
      source={require("../../assets/sky.png")}
      style={styles.background}
      blurRadius={40}
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
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator
                size="large"
                style={styles.loadingIndicator}
                color={"#fff"}
              />
              <Text style={styles.loadingText}>Carregando</Text>
            </View>
          ) : (
            <>
              <Ionicons
                onPress={handleGoBack}
                name="arrow-back-outline"
                size={35}
                color="white"
              />
              <View style={styles.mainContent}>
                {city && (
                  <PlaceName size={29} cityName={city} btnJustify={"center"} />
                )}
                <View style={styles.weather}>
                  {weather?.weather[0]?.id && (
                    <LottieView
                      source={getWeatherAnimation(weather.weather[0].id)}
                      autoPlay
                      loop
                      style={[
                        styles.animation,
                        { transform: [{ scale: 0.75 }, { translateX: 15 }] },
                      ]}
                    />
                  )}
                  <View style={styles.description}>
                    <Text style={styles.temperature}>
                      {weather && Math.round(weather?.main.temp)}°C
                    </Text>
                    <Text style={styles.weatherDescription}>
                      {weather?.weather[0]?.description
                        ? capitalizeFirstLetter(weather.weather[0].description)
                        : ""}
                    </Text>
                  </View>
                </View>
                <View style={styles.conditions}>
                  <View style={styles.conditionsDetails}>
                    <Ionicons
                      name="water-outline"
                      size={34}
                      color="white"
                      style={{ transform: [{ scaleX: -1 }] }}
                    />
                    <View style={styles.conditionsTexts}>
                      <Text style={styles.conditionTitle}>Umidade:</Text>
                      <Text style={styles.conditionContent}>
                        {weather?.main.humidity}%
                      </Text>
                    </View>
                  </View>
                  <View style={styles.conditionsDetails}>
                    <FontAwesome6 name="wind" size={30} color="white" />
                    <View style={styles.conditionsTexts}>
                      <Text style={styles.conditionTitle}>Vel. vento:</Text>
                      <Text style={styles.conditionContent}>
                        {weather?.wind.speed}M/s
                      </Text>
                    </View>
                  </View>
                </View>

                <FlatList
                  data={currentDayData}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item.dt_txt}
                  renderItem={({ item }) => (
                    <View style={styles.boxWeather}>
                      <Text style={styles.info}>
                        {item.dt_txt.split(" ")[1].slice(0, 5)}
                      </Text>
                      <Image source={getWeatherIcon(item.weather[0].id)} />
                      <Text style={styles.info}>
                        {Math.round(item.main.temp_max)} °C
                      </Text>
                    </View>
                  )}
                />

                <FlatList
                  data={dailyAverages}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item.date}
                  renderItem={({ item }) => (
                    <View style={styles.boxWeather}>
                      <Text style={styles.info}>{formatDate(item.date)}</Text>
                      <Image source={getWeatherIcon(item.weatherId)} />
                      <Text style={styles.info}>
                        {Math.round(item.avgTemp)} °C
                      </Text>
                    </View>
                  )}
                />
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
