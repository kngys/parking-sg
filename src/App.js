import React, { useState } from 'react';
import './App.css';
import { fetchDataByName, fetchDataByPostal, fetchDataByID } from './api';
import CarparkInfo from './CarparkInfo';

function App() {

  const [carparkName, setCarparkName] = useState(''); 
  const [postalCode, setPostalCode] = useState(''); 
  const [data, setData] = useState(null);
  const [carparkRates, setCarparkRates] = useState(null)
  const [isLoading, setIsLoading] = useState(false); // Loading state
  

  const handleNameSubmit = async (e) => { 
    e.preventDefault(); 
    setCarparkRates(null); // Ensure carparkRates is updated before accessing data
    setIsLoading(true); // Set loading to true
    //console.log('Fetching data for:', carparkName); // Log input value
    const result = await fetchDataByName(carparkName); 
    const filteredResult = result.carparkData.slice(0, 5);
    //console.log('API response:', result); // Log API response
    setData(filteredResult); 
    //console.log('Updated data state:', result); // Log updated state
 
    const carparkRateData = await Promise.all(filteredResult.map(carpark => fetchDataByID(carpark.id)))
    setCarparkRates(carparkRateData)
    console.log(carparkRateData);
    setIsLoading(false); // Set loading to false once data is fetched
  }; 

  const handlePostalSubmit = async (e) => { 
    e.preventDefault();
    setCarparkRates(null); 
    setIsLoading(true); // Set loading to true
    console.log('Fetching data for:', postalCode); // Log input value
    const result = await fetchDataByPostal(postalCode);
    const filteredResult = result.carparkData.slice(0, 5);
    console.log('API response:', result); // Log API response 
    setData(filteredResult); 
    console.log('Updated data state:', result); // Log updated state

    const carparkRateData = await Promise.all(filteredResult.map(carpark => fetchDataByID(carpark.id)))
    setCarparkRates(carparkRateData)
    console.log(carparkRateData);
    setIsLoading(false); 
  }; 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Parking</h1>
      </header>

      <h2>Search carpark by name</h2>
      <form onSubmit={handleNameSubmit}>
        <input 
          placeholder ="Name or road"
          value={carparkName}
          onChange={(e) => setCarparkName(e.target.value)}>
        </input>
        <button>Find carpark</button>
      </form>

      <h2>Search carpark by postal code</h2>
      <form onSubmit={handlePostalSubmit}>
        <input 
          placeholder="Postal code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}>
        </input>
        <button>Find carpark</button>
      </form>

      {isLoading ? (
        <div className="loading-message">Loading, please wait...</div>
      ) : (
        data && (
          <div>
            <h2>Nearest carparks:</h2>
            {data.map((carpark, index) => (
              <CarparkInfo 
                key={carpark.id} 
                carpark={carpark} 
                carparkRates={carparkRates} 
                index={index} 
              />
            ))}
          </div>
        )
      )}
    </div>
  
  );
}

export default App;
