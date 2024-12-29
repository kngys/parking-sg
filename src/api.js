// api.js

export const fetchDataByName = async (carparkName) => {
    try {
      const response = await fetch(`https://rapid-api-dev.vercel.app/api/parkingsg/carparks?search=${carparkName}`); 
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  
  export const fetchDataByPostal = async (postalCode) => {
    try {
      const response = await fetch(`https://rapid-api-dev.vercel.app/api/parkingsg/carparks?postalCode=${postalCode}`); 
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  
  export const fetchDataByID = async (carparkID) => {
    try {
      const response = await fetch(`https://rapid-api-dev.vercel.app/api/parkingsg/carpark?id=${carparkID}`); 
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  