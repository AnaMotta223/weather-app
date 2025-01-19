import axios from 'axios';

export const GetCities = async () => {
    const username = 'Ana0779'; 
    try {
      const response = await axios.get(
        `http://api.geonames.org/searchJSON`, {
          params: {
            country: 'BR',
            featureClass: 'P', 
            maxRows: 1000,
            username: username
          },
        }
      );
      return response;
    } catch (error) {
      console.error("Error fetching cities", error);
    }
  };
