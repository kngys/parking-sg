import React, { useState } from 'react';
import './App.css';
import { fetchDataByName, fetchDataByPostal, fetchDataByID } from './api';

function App() {

  const [carparkName, setCarparkName] = useState(''); 
  const [postalCode, setPostalCode] = useState(''); 
  const [carparkID, setCarparkID] = useState(''); 
  const [data, setData] = useState(null);
  const [carparkRates, setCarparkRates] = useState(null)
  // useEffect(()=> {
  //   async function fetchData() {
  //     if (data != null) {
  //       const filteredData = data.carparkData.slice(0, 2);
  //       console.log(filteredData);
  //       const carparkRateData = await filteredData.map(async carpark => await fetchDataByID(carpark.id));
  //       console.log(carparkRateData);
  //     }
  //   }
  //   fetchData(); 
  // }, [data])

  const handleNameSubmit = async (e) => { 
    e.preventDefault(); 
    setCarparkRates(null);
    console.log('Fetching data for:', carparkName); // Log input value
    const result = await fetchDataByName(carparkName); 
    const filteredResult = result.carparkData.slice(0, 5);
    console.log('API response:', result); // Log API response
    setData(filteredResult); 
    console.log('Updated data state:', result); // Log updated state
 
    const carparkRateData = await Promise.all(filteredResult.map(carpark => fetchDataByID(carpark.id)))
    setCarparkRates(carparkRateData)
    console.log(carparkRateData);
  }; 

  const handlePostalSubmit = async (e) => { 
    e.preventDefault(); 
    const result = await fetchDataByPostal(postalCode); 
    setData(result); }; 
  const handleIDSubmit = async (e) => { 
    e.preventDefault(); 
    const result = await fetchDataByID(carparkID); 
    setData(result); };


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
      <form>
        <input placeholder="Postal code"></input>
        <button>Find carpark</button>
      </form>

      <h2>Find carpark rates by ID</h2>
      <form>
        <input placeholder="Carpark ID"></input>
        <button>Get carpark rate</button>
      </form>

      {data &&  ( 
        <div> 
          <h2>Fetched Data:</h2> 
            {data.map((carpark, index) => ( 
              <div key={carpark.id}> 
                <h3>{carpark.name}</h3> 
                <p>Road: {carpark.road}</p>
                <p>Weekday: {carparkRates && carparkRates[index]['data']['data']['wd1']} {carparkRates && carparkRates[index]['data']['data']['wd1'] !== carparkRates[index]['data']['data']['wd2'] && carparkRates[index]['data']['data']['wd2']}</p>
                <p>Saturday: {carparkRates && carparkRates[index]['data']['data']['sat']}</p> 
                <p>Sunday: {carparkRates && carparkRates[index]['data']['data']['sun']}</p>
              </div> 
            ))} 
        </div> 
      )}

    </div>
  
  );
}

export default App;
