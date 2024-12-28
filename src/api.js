// api.js

export const fetchDataByName = async (carparkName) => {
    try {
      const response = await fetch(`https://api.example.com/carpark/name/${carparkName}`); // Replace with your API URL
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  
  export const fetchDataByPostal = async (postalCode) => {
    try {
      const response = await fetch(`https://api.example.com/carpark/postal/${postalCode}`); // Replace with your API URL
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  
  export const fetchDataByID = async (carparkID) => {
    try {
      const response = await fetch(`https://api.example.com/carpark/id/${carparkID}`); // Replace with your API URL
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  