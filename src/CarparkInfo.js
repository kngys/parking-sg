import React from 'react';

const CarparkInfo = ({ carpark, carparkRates, index }) => {

  const remarks = carparkRates && carparkRates[index]['data']['data']['remarks']; 
  const isValidRemark = remarks && remarks !== "" && remarks !== "null";

  return (
    <div className="carpark-info" key={carpark.id}>
      <h3>{carpark.name}</h3>
      <p>Road: {carpark.road}</p>
      <p>Weekday: {carparkRates && carparkRates[index]['data']['data']['wd1']}
        {carparkRates && carparkRates[index]['data']['data']['wd1'] !== carparkRates[index]['data']['data']['wd2'] && ` and/or ${carparkRates[index]['data']['data']['wd2']}`}
      </p>
      <p>Saturday: {carparkRates && carparkRates[index]['data']['data']['sat']}</p>
      <p>Sunday: {carparkRates && carparkRates[index]['data']['data']['sun']}</p>
      <p>
        {isValidRemark && <p>Note: {remarks}</p>}
      </p>
      <hr />
    </div>
  );
};

export default CarparkInfo;
